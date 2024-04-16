# Paginating results

<Vimeo id="934996528" />

## Limiting

We can use `ORDER BY` and `LIMIT` together to return, for example, only the top
`5` results.

```sql
SELECT content, impressions
FROM bleets
ORDER BY impressions DESC
LIMIT 5;
```

## Skipping results

If you're building an application that displays results in pages, you will want
to use `OFFSET`, which skips the first results.

```sql
SELECT content, impressions
FROM bleets
ORDER BY impressions DESC
LIMIT 5 OFFSET 10;
```

In this example, we return the third "page" of results.
