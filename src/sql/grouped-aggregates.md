# Grouped aggregates

<Vimeo id="935089904" />

Sometimes, we don't want to add, count or average all of the data in a column at
once. We'd rather group some rows together by some criteria and produce partial
aggregates.

## Using `GROUP BY`

Suppose we want to know the average impressions per user:

```sql
SELECT userId, AVG(impressions)
FROM bleets
GROUP BY userId;
```

## Combining with joins

The above query can be modified to make use of joins, providing more useful data
in the results:

```sql
SELECT users.username, AVG(bleets.impressions) AS avg_impressions
FROM bleets
INNER JOIN users ON users.id = bleets.userId
GROUP BY users.id
ORDER BY avg_impressions;
```
