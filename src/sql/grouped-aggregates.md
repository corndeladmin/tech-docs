# Grouped aggregates

Sometimes, we don't want to add, count or average all of the data in a column at
once. We'd rather group some rows together by some criteria and produce partial
aggregates.

## Using `GROUP BY`

Suppose we wanted to know the average number of likes users have gotten across
all of their bleets. We want to query the `bleets` table, group the rows by
their `userId` and then average the `likes` for each group.

Here is a query which achieves this:

```sql
SELECT userId, AVG(likes) AS likes_per_user
FROM bleets
GROUP BY userId
ORDER BY likes_per_user DESC;
```

## Try it

<CodeMirror>

```sql
SELECT userId, AVG(likes) AS likes_per_user
FROM bleets
GROUP BY userId
ORDER BY likes_per_user DESC;
```

</CodeMirror>
