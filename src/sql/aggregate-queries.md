# Aggregate queries

<Vimeo id="935483189" />

## Overview

`COUNT()`: Counts the number of rows in a dataset.

`AVG()`: Calculates the average value of a numeric column.

`SUM()`: Adds up the total of a numeric column.

## Using `COUNT`

Let's find out the total number of bleets in the database.

```sql
SELECT COUNT(id)
FROM bleets;
```

This query returns the total count of bleet IDs in the `bleets` table,
effectively giving us the number of bleets.

## Using `SUM`

How many impressions have ever been made in the history of Bleeter? Let's add up
the likes column on the `bleets` table.

```sql
SELECT SUM(impressions)
FROM bleets;
```

## Using `AVG`

If instead of the sum we wanted the average number of impressions per bleet, we
could use

```sql
SELECT AVG(impressions)
FROM bleets;
```

## Combining with joins

These functions can be combined with joins to create powerful queries.

For example, how many bleets have ever been written by verified users?

```sql
SELECT COUNT(bleets.id)
FROM users
INNER JOIN bleets ON users.id = bleets.userId
WHERE users.verified = true;
```
