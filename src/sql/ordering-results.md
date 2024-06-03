# Ordering results

<Vimeo id="934996601" />

## Sorting by a single column

To view all bleets by their created date, we can use `ORDER BY`:

```sql
SELECT userId, content, createdAt
FROM bleets
ORDER BY createdAt;
```

## Reversing the order

To have the newest bleets first, we must reverse the order with `DESC` (it is
ascending by default):

```sql
SELECT userId, content, createdAt
FROM bleets
ORDER BY createdAt DESC;
```

## Sorting by multiple columns

We can sort on multiple columns:

```sql
SELECT userId, content, createdAt
FROM bleets
ORDER BY userId, createdAt DESC;
```

This will sort by `userId` first, and then `createdAt` within the first sort.
