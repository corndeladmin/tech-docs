# Limiting results

As you continue to explore SQL, you'll frequently encounter situations where you
need to paginate results or simply limit the amount of data you retrieve. This
is where the `LIMIT` and `OFFSET` clauses come into play. They are incredibly
useful for managing large datasets and can help improve the performance of your
queries.

## Syntax

The basic syntax for using `LIMIT` and `OFFSET` together is:

```sql
SELECT column_names
FROM table_name
ORDER BY column_name
LIMIT number_of_rows OFFSET start_row;
```

- `number_of_rows`: The maximum number of records to return.
- `start_row`: The number of records to skip before starting to return records.

Note, you do not need to provide `OFFSET`. If you omit this, it's the same as
`OFFSET 0`.

While it's common to use `LIMIT` and `OFFSET` with `ORDER BY` to ensure a
consistent order, they can be used without it. However, the order of rows is
then undefined and may vary across different executions.

## Examples

### Top users

Suppose we want the 5 most popular users. We can use `ORDER BY` and `LIMIT`
together like this:

```sql
SELECT username, followers
FROM users
ORDER BY followers DESC
LIMIT 5;
```

### Skipping results

If you're building an application that displays users in pages of 10, `OFFSET`
comes into play. To get the second page:

```sql
SELECT username, followers
FROM users
ORDER BY username
LIMIT 10 OFFSET 10;
```

## Try it

- Combine `LIMIT` and `OFFSET` with `ORDER BY` for predictable, repeatable
  results.
- Experiment with different `LIMIT` and `OFFSET` values to understand their
  impact better.
- Remember, `OFFSET` counts from 0, so `OFFSET 10` skips the first 10 rows.

<CodeMirror>

```sql
SELECT username, followers
FROM users
ORDER BY username
LIMIT 10 OFFSET 10;
```

</CodeMirror>
