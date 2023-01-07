import {
  PastebinPrimaryKeys,
  PastebinTable,
} from 'src/pastebins/entities/pastebin.schema';
import { Driver, Ydb } from 'ydb-sdk';
import Config from './Config';

const tablesCompare = (description: Ydb.Table.DescribeTableResult): boolean => {
  const columnsEqual = PastebinTable.columns.reduce((acc, column) => {
    // IMPORTANT: just comparing names
    return -1 < description.columns.findIndex((v) => v.name === column.name);
  }, true);
  const primaryKeysEqual = PastebinPrimaryKeys.reduce((acc, index) => {
    return -1 < description.primaryKey.findIndex((v) => v === index);
  }, true);
  return columnsEqual && primaryKeysEqual;
};

export async function checkTables(driver: Driver): Promise<boolean> {
  return new Promise(async (resolve) => {
    await driver.tableClient.withSession(async (session) => {
      try {
        const d = await session.describeTable(Config.DB_PB_NAME);
        resolve(tablesCompare(d));
      } catch (error) {
        console.log(error);
        resolve(false);
      }
    });
  });
}

export async function createTables(driver: Driver) {
  await driver.tableClient.withSession(async (session) => {
    session.createTable(Config.DB_PB_NAME, PastebinTable);
  });
}
