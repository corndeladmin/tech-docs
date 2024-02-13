# Deleting rows

Deleting rows from a table is a common task, whether you're cleaning up data,
removing outdated information, or managing records based on specific criteria.
However, wield this tool with caution—deletions are permanent (outside of
transactional rollbacks). Let's walk through how to safely and effectively use
the `DELETE` statement.

## Syntax

The `DELETE` statement removes one or more rows from a table based on a
condition. Its basic syntax is as follows:

```sql
DELETE FROM table_name
WHERE condition;
```

::: danger

Be aware that the `DELETE` statement will remove all rows which meet the
condition in the `WHERE` clause.

If you do not provide a `WHERE` clause it will simply **delete all the rows**.

It is a good idea to `SELECT` the rows first and verify that your `WHERE` clause
does what you intend.

:::

## Examples

### Deleting a user

To delete a user based on their `id`, we would run

```sql
DELETE FROM users
WHERE id = 7;
```

### Deleting multiple rows

If you need to delete all bleets with at most `1` like, this is how to do it:

```sql
DELETE FROM bleets
WHERE likes <= 1;
```

## Deleting with a subquery

Let us suppose that we need to delete all bleets by users with fewer than `100`
followers (without deleting the users). We can do this by providing a subquery
in the `WHERE` clause.

```sql
DELETE FROM bleets
WHERE userId IN (
    SELECT id FROM users
    WHERE followers < 100
);
```

Subqueries can be used with other queries too, such as `UPDATE`.

## Try it

Since the database is reset after each query, don't worry about permanently
deleting data. With a real database, however, you should be very careful!

<CodeMirror>

```sql
DELETE FROM users
WHERE id = 7;

SELECT *
FROM users;
```

</CodeMirror>
