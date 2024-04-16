# Select queries

<Vimeo id="934922038" />

## Selecting all data

To select absolutely all the data in the table, we would do

```sql
SELECT *
FROM users;
```

This whole statement is called a **query**.

The `*` character in SQL is used as a wildcard, and here we use it to say _give
me every column from the table_.

::: tip

The line break after `SELECT *` is optional. We often put line breaks in SQL for
readability, but they're not necessary. The same is true for uppercase key
words.

```sql
select * from users;
```

This is fine.

:::

## Selecting specific columns

Usually, we want to restrict our search to just the columns we need, especially
if we have a very wide table. To do that, we replace the `*` with the names of
the columns we want.

```sql
SELECT username, verified
FROM users;
```
