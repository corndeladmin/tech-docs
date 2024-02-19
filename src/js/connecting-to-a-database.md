# Connecting to a database

## Creating the database

We will set up our database with the following schema:

::: code-group

```sql [diary]
CREATE TABLE IF NOT EXISTS diary (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    content TEXT NOT NULL,
    score INTEGER,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP
);
```

```sql [meals]
CREATE TABLE IF NOT EXISTS meals (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name INTEGER NOT NULL,
    calories INTEGER,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP
);
```

```sql [workouts]
CREATE TABLE IF NOT EXISTS workouts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    activity TEXT NOT NULL,
    duration INTEGER,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP
);
```

:::

This SQL, along with the seed data, could be stored in the directory
`db/migrations` in our project. We can run it with, for example,

```bash
sqlite3 db/db.sqlite < db/migrations/1-reset.sql
```

## Connect to the database

We use `knex` to provide a connection to the database, allowing us to run SQL
queries from within our javascript files.

First, we install `knex`.

```bash
npm install knex
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
const query = `SELECT * FROM workouts`
const results = await db.raw(query)
return results
```
