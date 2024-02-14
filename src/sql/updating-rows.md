# Updating rows

When you need to modify a row, it is not necessary to delete and recreate it.
SQL supports partially updating a row using the `UPDATE` keyword.

## Syntax

The basic structure of an `UPDATE` statement is as follows:

```sql
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;
```

- `table_name`: The name of the table where you want to update data.
- `column1`, `column2`, ...: The columns in the table that you're updating.
- `value1`, `value2`, ...: The new values for the columns.
- `condition`: The condition that specifies which rows should be updated.

## Examples

### Updating user info

Let's suppose our user `EdShearing` made a public blunder and lost some
followers.

```sql
UPDATE users
SET followers = 100000
WHERE username = 'EdShearing';
```

::: warning

This statement will update _all_ users with username `EdShearing` to have
`100000` followers. In our database, usernames are enforced as unique, so this
statement makes sense - but it's worth bearing in mind.

:::

### Updating multiple columns

Perhaps `RihannaBanana` gets upgraded to `admin` and also gets verified?

```sql
UPDATE users
SET verified = true, access = 'admin'
WHERE username = 'RihannaBanana';
```

### Updating many rows

As we mentioned, all rows included by the `WHERE` clause will be updates.

::: danger

If we don't include a `WHERE` clause then every row will be updated. It is a
good idea to write the `WHERE` first, and use `SELECT` to make sure you're
targeting the correct rows, and only then write and execute the update
statement.

:::

Perhaps Bleeter got hacked? Let's downgrade everybody's access to `user` except
the CEO until the problem is sorted:

```sql
UPDATE users
SET access = 'user'
WHERE id != 1;
```

## Increment a value

How do we _like_ a bleet? We want to add `1` to `likes` for a particular bleet.
The general syntax is like this:

```sql
UPDATE table_name
SET column_name = column_name + increment_value
WHERE condition;
```

and so to _like_ a bleet we would do

```sql
UPDATE bleets
SET likes = likes + 1
WHERE id = 3;
```

## Try it

Have a go for yourself! Remember that the database resets after every query, so
if you want to update and then check out your changes, you will need to write
the `UPDATE` and `SELECT` queries and run them at the same time.

<CodeMirror>

```sql
UPDATE users
SET followers = 100000
WHERE username = 'EdShearing';

SELECT *
FROM users
WHERE username = 'EdShearing';
```

</CodeMirror>
