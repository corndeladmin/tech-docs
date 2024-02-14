# Deleting tables

Deleting tables from a database is a significant action that permanently removes
the table and all of its data. Understanding the implications and ensuring you
have the correct precautions in place is crucial before proceeding.

::: danger

Once a table is dropped, you cannot retrieve it.

:::

## Syntax

The standard word for deleting a table is "dropping" the table.

```sql
DROP TABLE table_name;
```

If the table doesn't exist yet, SQL will throw an error. You can't prevent this
by checking it exists first.

```sql
DROP TABLE IF EXISTS table_name;
```

## Example

The syntax is sufficiently simple that we won't provide an example. If any
example we gave ended up on your clipboard and got pasted where it shouldn't,
well... let's not think about that!
