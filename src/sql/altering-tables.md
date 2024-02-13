# Altering tables

The structure of your data can evolve over time. You may need to add new
columns, modify existing ones, or even remove them altogether to adapt to
changing requirements. This is where the `ALTER TABLE` command comes into play,
providing the flexibility to modify the schema of an existing table without
losing data.

## Renaming tables

Perhaps we have decided to rename `users` to `registered_users`. Whether this is
a good idea or not, here's how you do it!

::: code-group

```sql [SQLite]
ALTER TABLE users
RENAME TO registered_users;
```

```sql [Postgres]
ALTER TABLE users
RENAME TO registered_users;
```

```sql [MySQL]
RENAME TABLE users TO registered_users;
```

:::

## Adding new columns

To add a new column to a table, you use the `ALTER TABLE` command followed by
`ADD COLUMN`. Let's collect our users' email addresses:

```sql
ALTER TABLE users
ADD COLUMN email VARCHAR(255);
```

When you add a new column, existing rows in the table will take a value of
`NULL`. You can prevent this by supplying a `DEFAULT` constraint just as you
would when defining the original schema.

## Renaming columns

To rename a column, the approach varies across dialects. Let's rename the
`access` to `permissions`.

::: code-group

```sql [SQLite]
ALTER TABLE users
RENAME COLUMN access TO permissions;
```

```sql [Postgres]
ALTER TABLE users
RENAME COLUMN access TO permissions;
```

```sql [MySQL]
-- Note the data type must be given
ALTER TABLE users
CHANGE COLUMN access permissions TEXT;
```

:::

## Dropping columns

Let's get rid of `verified` status! We need to delete its column in the `users`
table. This syntax is the same across most dialects.

```sql
ALTER TABLE users
DROP COLUMN verified;
```
