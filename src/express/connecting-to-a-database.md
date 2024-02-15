# Connecting to a database

## Creating the database

We will set up our database with the following schema:

::: code-group

```sql [users]
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    verified BOOLEAN DEFAULT 0
);
```

```sql [bleets]
CREATE TABLE IF NOT EXISTS bleets (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    content TEXT NOT NULL,
    createdAt TEXT DEFAULT (datetime('now')),
    userId INTEGER NOT NULL,
    FOREIGN KEY (userId) REFERENCES USER(id)
);
```

```sql [likes]
CREATE TABLE IF NOT EXISTS user_bleet_likes (
    userId INTEGER NOT NULL,
    bleetId INTEGER NOT NULL,
    PRIMARY KEY (userId, bleetId),
    FOREIGN KEY (userId) REFERENCES USER(id),
    FOREIGN KEY (bleetId) REFERENCES BLEET(id)
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
app.get('/api/users', async (req, res) => {
  const query = `SELECT * FROM users`
  const results = await db.raw(query)
  res.json(results)
})
```
