# Creating tables

Creating a new table in SQL essentially comes down to defining the columns. That
includes choosing names for the columns, determining their type, and adding any
constraints and default values. The aim is to make sure that you maintain _data
integrity_ by getting the right data in the right place.

## Syntax

The basic syntax to create a table in SQL is as follows:

```sql
CREATE TABLE table_name (
    column1 datatype constraint,
    column2 datatype constraint,
    column3 datatype constraint,
    ...
);

```

- `table_name`: The name of the table you want to create.
- `column`: The name of a column in the table.
- `datatype`: The type of data that the column can hold (e.g., integer, text,
  date).
- `constraint`: Rules applied to the data values of columns (e.g., NOT NULL,
  UNIQUE).

## Choosing data types

Data types specify what kind of data a column can hold. Some common SQL data
types include:

| Keyword      | Description                                                                 |
| ------------ | --------------------------------------------------------------------------- |
| `INTEGER`    | A whole number without a fractional component.                              |
| `VARCHAR(n)` | A variable-length string of characters, where n defines the maximum length. |
| `TEXT`       | A text string of any length.                                                |
| `DATE`       | A calendar date (year, month, day).                                         |
| `TIMESTAMP`  | A date and time combination.                                                |

::: warning

Different "flavours" of SQL may have slightly different names for data types (or
might not have them at all). For the most relevant information you should refer
to the official docs for the SQL flavour you're working with.

:::

## Implementing constraints

Constraints enforce rules on the data in a table, ensuring data integrity and
consistency. Key constraints include:

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

```sql
CREATE TABLE table_name (
    column1 datatype PRIMARY KEY,
    column2 datatype,
    ...
);
```

## Example: Creating a users table

Let's see how the `users` table was created in this guide. As you can see, the
approach varies a bit depending on the dialect of SQL being used.

::: code-group

```sql [SQLite]
CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username VARCHAR(50) NOT NULL UNIQUE,
    access TEXT CHECK (access IN ('user', 'admin')),
    verified BOOLEAN NOT NULL DEFAULT FALSE,
    followers INTEGER NOT NULL DEFAULT 0 CHECK (followers >= 0)
);
```

```sql [Postgres]
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    access TEXT CHECK (access IN ('user', 'admin')),
    verified BOOLEAN NOT NULL DEFAULT FALSE,
    followers INTEGER NOT NULL DEFAULT 0 CHECK (followers >= 0)
);
```

```sql [MySQL]
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    access TEXT CHECK (access IN ('user', 'admin')),
    verified BOOLEAN NOT NULL DEFAULT FALSE,
    followers INT NOT NULL DEFAULT 0 CHECK (followers >= 0)
) ENGINE=InnoDB;
```

```

:::

This table

- Uses `id` as the primary key, which auto-increments for each new user.
- Ensures `username` is unique and not null.
- Checks that `access` is either `'user'` or `'admin'`.
- Sets `verified` to `false` and `followers` to `0` by default, with a check to
  ensure `followers` is never negative.

Creating tables in SQL is like laying the foundation for a building — it's
essential to get it right for everything that follows to be stable and reliable.
By understanding data types, constraints, and primary keys, you're well on your
way to effectively organizing and managing your data.
```
