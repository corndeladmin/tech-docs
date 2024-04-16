# Selecting with conditions

<Vimeo id="935481191" />

## Using `WHERE`

Suppose we want just the rows where the user is known to be a verified user. We
can do that like this:

```sql
SELECT id, username
FROM users
WHERE verified = true;
```

## Using `AND`

We can add additional conditions with `AND`.

Let's select the bleets written by user `1` having more than half a million
impressions.

```sql
SELECT content
FROM bleets
WHERE userId = 1
  AND impressions > 500000
```

## Using `OR`

We can increase the scope of our conditions with `OR`.

The below query gets all the bleets from users `1` and `2`.

```sql
SELECT *
FROM bleets
WHERE userId = 1
OR userId = 2;
```

::: tip

In this particular case, we can even use the `IN` operator to make the query
more concise

```sql
SELECT *
FROM bleets
WHERE userId IN (1, 2);
```

:::
