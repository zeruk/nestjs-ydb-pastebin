import { Column, TableDescription, typeMetadataKey } from 'ydb-sdk';
import 'reflect-metadata';
import { Pastebin } from './pastebin.entity';
const pastebin = new Pastebin({ id: '', text: '', type: '', visibility: '' });

const nameConverter =
  Pastebin?.__options?.namesConversion?.jsToYdb ?? ((s: string) => s);

// create table consistent with entity
const columns = Object.keys(pastebin).map((entityKey) => {
  const typeMeta = Reflect.getMetadata(typeMetadataKey, pastebin, entityKey);
  return new Column(nameConverter(entityKey), typeMeta);
});

const PastebinPrimaryKeys = ['id', 'type', 'visibility', 'created'];

const PastebinTable = new TableDescription(columns, PastebinPrimaryKeys);
export { PastebinTable, PastebinPrimaryKeys };
