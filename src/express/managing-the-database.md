# Managing the database

## Creating the schema

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

## Creating the tables

This SQL, along with the seed data, could be stored in the directory
`db/migrations` in our project. We can run it with, for example,

```bash
sqlite3 db/db.sqlite < db/migrations/1-reset.sql
```

To make this more convenient, we could create scripts in `package.json`:

```json
"scripts": {
  "db:reset": "sqlite3 db/db.sqlite < db/migrations/1-reset.sql",
  "db:seed": "sqlite3 db/db.sqlite < db/migrations/2-seed.sql"
}
```

::: warning

Since we're just practising, having a script which deletes and repopulates the
entire database is a useful convenience. However, in a production app, having a
script which drops data is a very bad idea.

:::
