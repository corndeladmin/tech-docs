# Select queries

Let's suppose the `users` table is already defined in our database. Here are the
first 5 rows.

`Table: users`

| id  | username       | access | verified | followers |
| :-: | -------------- | ------ | :------: | :-------: |
|  1  | EluskM         | admin  |    1     |  1987531  |
|  2  | BillGatekeeper | user   |    1     |  1200457  |
|  3  | JeffWho        | user   |    0     |  500124   |
|  4  | OprahWindey    | admin  |    1     |  1750322  |
|  5  | MarkZeeberg    | user   |    1     |  1600320  |

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

The linebreak after `SELECT *` is optional. We often put linebreaks in SQL for
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

## Try it

Try modifying the query below so that it selects only the `id` and `access`
columns. When you're ready, click the **Run** button to see the output.

<CodeMirror>

```sql
SELECT *
FROM users;
```

</CodeMirror>
