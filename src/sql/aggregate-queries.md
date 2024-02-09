# Aggregate queries

Aggregate functions allow you to perform calculations on a set of values,
enabling you to extract meaningful insights from your data. In this guide, we'll
learn how to use `COUNT`, `SUM` and `AVG`.

## Overview

`COUNT()`: Counts the number of rows in a dataset.

`AVG()`: Calculates the average value of a numeric column.

`SUM()`: Adds up the total of a numeric column.

## Using `COUNT`

Let's find out the total number of bleets in the database.

```sql
SELECT COUNT(id) AS total_bleets
FROM bleets;
```

This query returns the total count of bleet IDs in the `bleets` table,
effectively giving us the number of bleets.

## Using `SUM`

How many likes have every been given in the history of Bleeter? Let's add the
likes column on the `bleets` table.

```sql
SELECT SUM(likes) AS total_likes
FROM bleets;
```

## Using `AVG`

Let's work out the average number of followers per user in the `users` table.

```sql
SELECT AVG(followers) AS average_followers
FROM users;
```

Here, we calculate the average followers each user has, which helps in
understanding the general popularity within your user base.
