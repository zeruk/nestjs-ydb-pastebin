import { Pastebin } from './pastebin.entity';
import { PastebinTable } from './pastebin.schema';

export const PastebinProviders = [
  {
    provide: 'PASTEBIN_ENTITY',
    useValue: Pastebin,
  },
  {
    provide: 'PASTEBIN_TABLE',
    useValue: PastebinTable,
  },
];
