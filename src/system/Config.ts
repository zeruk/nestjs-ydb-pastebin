export default class Config {
  static DB_ENDPOINT = process.env.DB_ENDPOINT;
  static DB_DATABASE = process.env.DB_DATABASE;
  static DB_CONNECT_TIMEOUT_S = Number(
    process.env.DB_CONNECT_TIMEOUT_S || '10',
  );
  static DB_PB_NAME = 'pastebins';
}
