# Connecting to the database

<Vimeo id="915186757" />

## Setting up the connection

We use `knex` to provide a connection to the database, allowing us to run SQL
queries from within our javascript files.

First, we install `knex` and `sqlite3`.

```bash
npm install knex sqlite3
```

Then, we add our database connection code to `db/index.js`.

```js
import knex from 'knex'
import { fileURLToPath } from 'url'

const uri = new URL('./db.sqlite', import.meta.url)

const db = knex({
  client: 'sqlite3',
  connection: { filename: fileURLToPath(uri) },
  useNullAsDefault: true
})

export default db
```

## Use the database connection

Now we can run SQL queries on our database with `db.raw()`.

For example,

```js
const query = `SELECT * FROM users`
const results = await db.raw(query)
console.log(results)
```
