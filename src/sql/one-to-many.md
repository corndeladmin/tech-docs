# One-to-many relationships

One user can author many bleets.

For this reason, we put the user's primary key (i.e. their `id`) onto each new
bleet they create under a column called `userId`.

| id  | content                                                                                       | createdAt           | likes  | userId |
| :-: | --------------------------------------------------------------------------------------------- | ------------------- | :----: | :----: |
|  7  | Exploring new ways to make you check your phone. How about a poke? Remember those? #Nostalgia | 2023-09-03 10:00:00 | 330113 |   5    |
|  6  | Just a casual reminder that I own a bit of your soul. #SocialNetwork                          | 2023-09-01 09:15:00 | 828743 |   5    |
|  2  | Introducing the Model Z - it runs on literal star power. #Innovation                          | 2023-08-18 16:45:00 | 74783  |   1    |
|  1  | Just bought Mars. Renaming it to Elusk Planet. #SpaceX                                        | 2023-08-15 14:30:00 | 673491 |   1    |
|  5  | Thinking of hosting a giveaway on Mars. Thanks, @EluskM! #MartianOprah                        | 2023-07-28 18:00:00 | 165451 |   4    |

This means two things:

- if we have a user and want to get their bleets, we can do it! (User `5`
  authored bleets `7` and `6`)

- if we have a bleet and want to get the user, we can do it! (Bleet `5` was
  authored by user `4`)

This is exactly the mechanism that [join queries](./inner-joins.md) use.

When the user places their `userId` onto a bleet they created, we called it
"adding a foreign key". It acts as a cross-reference between tables.

::: tip

A **foreign key** is just a primary key from one table that ends up on another
table. They are used to model relationships.

:::

## Syntax

When defining a foreign key in SQL, the basic syntax is:

```sql
FOREIGN KEY (foreign_key_column) REFERENCES parent_table(primary_key_column)
```

- `foreign_key_column` is the column in the child table that acts as the foreign
  key.
- `parent_table` is the table being referenced (the "one" side of the
  relationship).
- `primary_key_column` is the primary key column in the parent table that the
  foreign key references.

This is consistent across most dialects.

## Example

The SQL used to set up the bleets table in the examples we've been studying
looks like this:

::: code-group

```sql{6-7} [SQLite]
CREATE TABLE bleets (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    content TEXT NOT NULL CHECK(length(content) <= 140),
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    likes INTEGER DEFAULT 0,
    userId INTEGER,
    FOREIGN KEY (userId) REFERENCES users(id)
);
```

```sql{6,7} [Postgres]
CREATE TABLE bleets (
    id SERIAL PRIMARY KEY,
    content TEXT NOT NULL CHECK(length(content) <= 140),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    likes INTEGER DEFAULT 0,
    userId INTEGER,
    FOREIGN KEY (userId) REFERENCES users(id)
);
```

```sql{6,7} [MySQL]
CREATE TABLE bleets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    content TEXT NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    likes INT DEFAULT 0,
    userId INT,
    FOREIGN KEY (userId) REFERENCES users(id)
);
```

:::

Although there are some small differences, the code for setting up the foreign
key constraint is the same. Note that
`FOREIGN KEY (userId) REFERENCES users(id)` itself does not add a new column -
it identifies that the `userId INTEGER` column is a foreign key, which makes
`JOIN` queries work as intended.
