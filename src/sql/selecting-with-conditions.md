# Selecting with conditions

Often, we don't want to get every single row in the database. This is especially
true if the database contains millions of rows of data. We want to restrict our
query to rows with particular constraints.

## Using `WHERE`

Suppose we want just the rows where the user is known to be a verified user. We
can do that like this:

```sql
SELECT id, username
FROM users
WHERE verified = true;
```

::: tip

Many SQL database systems use `1` to represent `true`. This would also work:

```sql
SELECT id, username
FROM users
WHERE verified = true;
```

:::

## Using `AND`

We can add as many additional constraints as we like using the `AND` key word.
This query finds all of the admin users who have at least a million followers
(sorry, Larry).

```sql
SELECT username
FROM users
WHERE access = 'admin'
  AND followers >= 1000000;
```

Notice that `'admin'` has single quotes because it is a string, whereas `true`
does not because it is a boolean. There are more types in SQL that we will learn
in time.

## Using `OR`

The `OR` keyword works very much like `AND`. Maybe we want to shadowban some
users? Let's find users who are either unverified, or have less than a million
followers, to make sure we're not targeting our VIPs. (But we leave out
TaylorSquid from the results, she stays no matter what.)

```sql
SELECT *
FROM users
WHERE (followers < 1000000 OR verified = false)
  AND (username != 'TaylorSquid');
```

::: warning

Note that the brackets here are important - if we remove them, the logic of the
query is different and TaylorSquid is a gonner.

:::

## Try it

Have a play around with the query below. Try adding more clauses. Can you find
all the users with between 500,000 and 1,500,000 followers?

<CodeMirror>

```sql
SELECT *
FROM users
WHERE access = 'admin'
  AND followers >= 1000000;
```

</CodeMirror>
