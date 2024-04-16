# Creating tables

<Vimeo id="935466837" />

## Creating a table

We can create a table by naming the table and its columns.

```sql
CREATE TABLE replies (
  content TEXT NOT NULL,
  createdAt TEXT DEFAULT (datetime('now'))
);
```

When a default value is sepcified, the default value will be used in the event
that a value is not given for this column when inserting a new row.

::: warning

Different "flavours" of SQL may have slightly different names for data types (or
might not have them at all). For the most relevant information you should refer
to the official docs for the SQL flavour you're working with.

:::

## Common constraints

Constraints enforce rules on the data in a table, ensuring data integrity and
consistency. Common constraints include:

| Keyword    | Description                                                     |
| ---------- | --------------------------------------------------------------- |
| `NOT NULL` | Ensures that a column cannot have a NULL value.                 |
| `UNIQUE`   | Ensures all values in a column are different.                   |
| `CHECK`    | Ensures the value in a column meets a specific condition.       |
| `DEFAULT`  | Assigns a default value to a column when no value is specified. |

## Primary keys

A primary key is a column (or a set of columns) used to uniquely identify each
row in a table. It is a type of constraint and is crucial for database
integrity.

```sql{2}
CREATE TABLE replies (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  content TEXT NOT NULL,
  createdAt TEXT DEFAULT (datetime('now'))
);
```

## Foreign keys

A foreign key ensures that the values in a particular column reference a row in
some table. It is a way of connecting rows in different tables in a way that is
understood the database itself.

```sql{5-8}
CREATE TABLE replies (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  content TEXT NOT NULL,
  createdAt TEXT DEFAULT (datetime('now')),
  userId INTEGER NOT NULL,
  bleetId INTEGER NOT NULL,
  FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (bleetId) REFERENCES bleets(id) ON DELETE CASCADE
);
```

::: tip

The `ON DELETE CASCADE` key phrase ensures that if the referenced row is
deleted, then all rows which reference it are also deleted.

For example, if a user is deleted, then all of their replies will also be
deleted.

:::
