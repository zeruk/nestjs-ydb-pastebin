# Nestjs YDB sample application

This app shows example implementating headless pastebin API over YDB.

## Installation

```bash
$ npm install
```

## Running the app

To run, you need set up environment variables:
`DB_ENDPOINT` (e.g. `grpcs://your_url:2135`)
`DB_DATABASE` (e.g. `/some/path`)

And one of authentication methods:
| Type | Environment Variable Example |
| ----- | ----- |
| Service account | `YDB_SERVICE_ACCOUNT_KEY_FILE_CREDENTIALS=key.json` |
| Anonymous | `YDB_ANONYMOUS_CREDENTIALS=1` |
| Metadata credential | `YDB_METADATA_CREDENTIALS=1` |
| Access token | `YDB_ACCESS_TOKEN_CREDENTIALS=token_here` |

Also, **if you want to drop tables** before starting application, you can set up `DB_RESET=true` in your environment variables

For example: `YDB_SERVICE_ACCOUNT_KEY_FILE_CREDENTIALS=key.json DB_ENDPOINT=grpcs://some_url.org:2135 DB_DATABASE=/central/abc/def npm run start`

Then open in your browser Swagger API at `http://localhost:3000/api`

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
