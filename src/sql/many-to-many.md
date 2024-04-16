# Many-to-many relationships

<Vimeo id="935382574" />

## Understanding many-to-many relationships

One user can like many bleets, and one bleet can be liked by many users. This is
a many-to-many relationship, and it is best modelled using a dedicated table
(often called a junction table):

| userId | bleetId |
| :----: | :-----: |
|   1    |    3    |
|   1    |    5    |
|   2    |    3    |
|   2    |    7    |

## Simple queries

We can query a junction table just as we would a normal table. For example, to
find the number of likes per bleet:

```sql
SELECT bleetId, COUNT(userId)
FROM user_bleet_likes
GROUP BY bleetId;
```

## Join queries

The junction table usually just references the ID of other rows - if we want to
include actual information from those rows, we can use a join query.

For example, to see the bleet content along with its number of likes, we could
do

```sql
SELECT bleets.content, COUNT(user_bleet_likes.userId)
FROM user_bleet_likes
INNER JOIN bleets on user_bleet_likes.bleetId = bleets.id
GROUP BY bleets.id;
```

## Complex queries

Many-to-many relationships can sometimes give rise to more complex queries.

For example, we might want to include the author's username, the content of the
bleet, _and_ the total number of likes.

```sql
SELECT users.username, bleets.content, COUNT(user_bleet_likes.userId) AS likes
FROM bleets
INNER JOIN user_bleet_likes ON bleets.id = user_bleet_likes.bleetId
INNER JOIN users ON users.id = bleets.userId
GROUP BY bleets.id
ORDER BY likes DESC;
```

Notice that this requires two joins.

::: tip

To build more complex queries, it is useful to build them up gradually. For
example, we could do the joins without grouping and counting. Looking at the
results of something like

```sql
SELECT *
FROM bleets
INNER JOIN user_bleet_likes ON bleets.id = user_bleet_likes.bleetId
INNER JOIN users ON users.id = bleets.userId
```

will help you to think about how the rows should be grouped in order to get the
total likes column we desire.

:::
