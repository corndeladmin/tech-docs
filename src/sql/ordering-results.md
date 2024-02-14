# Ordering results

One of the essential tools in your arsenal will be the `ORDER BY` clause. This
nifty feature allows you to sort your query results in a specific order, making
your data analysis tasks more intuitive and your reports more readable. Let's
break down how to use `ORDER BY` with some examples.

## Syntax

The basic syntax for using `ORDER BY` is as follows:

```sql
SELECT column1, column2, ...
FROM table_name
ORDER BY column1 [ASC|DESC], column2 [ASC|DESC], ...;
```

- `column1`, `column2`: The columns you want to be included in the results.
- `ASC`: Specifies an ascending order (this is the default and can be omitted).
- `DESC`: Specifies a descending order.

## Examples

### Sorting by a single column

If you want to view all users sorted by their usernames from A to Z, you can use
the following query:

```sql
SELECT username, followers
FROM users
ORDER BY username ASC;
```

or to reverse the order

```sql
SELECT username, followers
FROM users
ORDER BY username DESC;
```

### Sorting by multiple columns

If we want all the verified users first, and then all unverified users, but
sorted by username, we can give two column names to `ORDER BY`. Note that the
first column passed takes precedence.

```sql
SELECT *
FROM users
ORDER BY verified DESC, username;
```

## Try it

Experiment with different columns and sorting orders to see how it affects your
results.

Try combining `ORDER BY` with `WHERE` clauses to filter and sort your data
simultaneously.

Remember, sorting is done after the data is selected from the database, so
`ORDER BY` does not affect which rows are included in the result—only how they
are presented.

<CodeMirror>

```sql
SELECT *
FROM users
ORDER BY followers;
```

</CodeMirror>
