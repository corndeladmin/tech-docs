# Inner Joins

In this guide we're diving into one of the most powerful aspects of SQL: the
`INNER JOIN`. This feature allows you to merge rows from two or more tables
based on a related column between them. It's a cornerstone for database querying
that lets you extract meaningful insights from your relational data. Let's
explore how `INNER JOIN` works.

## Scenario

Consider these two tables:

`Table: users`

| id  | username       | access | verified | followers |
| :-: | -------------- | ------ | :------: | :-------: |
|  1  | EluskM         | admin  |    1     |  1987531  |
|  2  | BillGatekeeper | user   |    1     |  1200457  |
|  3  | JeffWho        | user   |    0     |  500124   |
|  4  | OprahWindey    | admin  |    1     |  1750322  |
|  5  | MarkZeeberg    | user   |    1     |  1600320  |

`Table: bleets`

| id  | content                                                                                       | createdAt           | likes  | userId |
| :-: | --------------------------------------------------------------------------------------------- | ------------------- | :----: | :----: |
|  7  | Exploring new ways to make you check your phone. How about a poke? Remember those? #Nostalgia | 2023-09-03 10:00:00 | 330113 |   5    |
|  6  | Just a casual reminder that I own a bit of your soul. #SocialNetwork                          | 2023-09-01 09:15:00 | 828743 |   5    |
|  2  | Introducing the Model Z - it runs on literal star power. #Innovation                          | 2023-08-18 16:45:00 | 74783  |   1    |
|  1  | Just bought Mars. Renaming it to Elusk Planet. #SpaceX                                        | 2023-08-15 14:30:00 | 673491 |   1    |
|  5  | Thinking of hosting a giveaway on Mars. Thanks, @EluskM! #MartianOprah                        | 2023-07-28 18:00:00 | 165451 |   4    |

Clearly, certain bleets belong to certain users. What we would like to do is,
for some collection of users, retrieve both the user data _and_ any bleets they
have made, and merge the results into a single table.

## Syntax

The basic syntax of an inner join looks like this:

```sql
SELECT columns
FROM table1
INNER JOIN table2 ON table1.column_a = table2.column_b;
```

- `ON` is telling SQL the condition on which two rows should be joined together
- `column_a` and `column_b` are columns in the two tables we expect to find
  matches

## Examples

### Join users and bleets

To see which user posted which bleet, we can join the users and bleets tables
using the `userId` from tweets and `id` from users:

```sql
SELECT users.username, bleets.content, bleets.createdAt
FROM users
INNER JOIN bleets ON users.id = bleets.userId
ORDER BY bleets.likes DESC
LIMIT 5;
```

This query does the following:

- Selects the `username` from `users`, and `content` and `createdAt` from
  `bleets`.
- Joins the `users` table with the `bleets` table where the `id` field in
  `users` matches the `userId` field in `bleets`.
- Orders the results by `liked` to show the most liked bleets first.
- Only shows the top 5 bleets.

## Try it

- Try selecting different columns to see what the results look like.
- Combine `INNER JOIN` with various other clauses such as `WHERE` and `ORDER BY`
  to see different results.

<CodeMirror>

```sql
SELECT users.username, bleets.content, bleets.createdAt
FROM users
INNER JOIN bleets ON users.id = bleets.userId
ORDER BY bleets.likes DESC
LIMIT 5;
```

</CodeMirror>
