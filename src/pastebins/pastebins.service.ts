import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import Config from 'src/system/Config';
import { Driver, TypedData } from 'ydb-sdk';
import {
  CreatePastebinDto,
  PastebinVisibilities,
} from './dto/create-pastebin.dto';
import { Pastebin } from './entities/pastebin.entity';
import { createHash } from 'crypto';

@Injectable()
export class PastebinsService {
  constructor(
    @Inject('YDB_DRIVER') private ydb: Driver,
    @Inject('PASTEBIN_ENTITY') private entity: Pastebin,
  ) {}

  async create(data: CreatePastebinDto) {
    const created = new Date().toISOString();
    const hash = createHash('sha256')
      .update(data.text)
      .update(data.type)
      .update(data.visibility)
      .update(created)
      .digest('base64url');
    await this.ydb.tableClient.withSession(async (session) => {
      const query =
        `INSERT INTO ${Config.DB_PB_NAME} (id, text, type, visibility, created) ` +
        `VALUES ('${hash}', '${data.text}', '${data.type}', '${data.visibility}', Timestamp('${created}'))`;
      await session.executeQuery(query);
    });
    return { hash, created };
  }

  async findAll() {
    let result;
    await this.ydb.tableClient.withSession(async (session) => {
      result = await await session.executeQuery(
        `SELECT * FROM ${Config.DB_PB_NAME} WHERE visibility='${PastebinVisibilities.public}'`,
      );
      result = this.entity.createNativeObjects(result.resultSets[0]);
    });
    return result;
  }

  async findOne(id: string) {
    let result;
    await this.ydb.tableClient.withSession(async (session) => {
      result = await session.executeQuery(
        `SELECT * FROM ${Config.DB_PB_NAME} WHERE id = '${id}' LIMIT 1`,
      );
      result = TypedData.createNativeObjects(result.resultSets[0]);
    });
    if (result.length !== 1) throw new NotFoundException(`'${id}' not found`);
    return result[0];
  }
}
