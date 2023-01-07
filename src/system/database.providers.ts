import { Driver, getCredentialsFromEnv } from 'ydb-sdk';
import Config from './Config';
import { checkTables, createTables } from './createTables';

export const DatabaseProvider = {
  provide: 'YDB_DRIVER',
  useFactory: async (): Promise<Driver> => {
    const authService = getCredentialsFromEnv();
    const driver = new Driver({
      endpoint: Config.DB_ENDPOINT,
      database: Config.DB_DATABASE,
      authService,
    });
    const timeout = Config.DB_CONNECT_TIMEOUT_S * 1000;
    if (!(await driver.ready(timeout))) {
      console.log(`Ydb driver has not become ready in ${timeout}ms!`);
      process.exit(1);
    }
    if (!(await checkTables(driver))) {
      await createTables(driver);
    }
    console.log(`Ydb driver ready`);
    return driver;
  },
};
