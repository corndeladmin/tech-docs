# Inner joins

<Vimeo id="935032826" />

## Understanding join queries

Join queries allow us to combine data from two or more tables and return them as
a single response.

| username      | content                                                                                     | createdAt           |
| ------------- | ------------------------------------------------------------------------------------------- | ------------------- |
| EluskM        | Just bought Mars. Renaming it to Elusk Planet. #SpaceX                                      | 2023-08-15 14:30:00 |
| OprahWindey   | You get a car! You get a car! Everybody gets a car! #Giveaway                               | 2023-07-22 13:00:00 |
| OprahWindey   | My next book club pick is the dictionary. I hear it's a page-turner. #ReadMore              | 2023-07-25 17:30:00 |
| MeghanTrainer | All about that bass? More like all about that space. @EluskM, need a backup singer on Mars? | 2023-05-20 15:00:00 |

The `username` value comes from the `users` table, but the `content` and created
at values come from the `bleets` table.

## Writing an inner join query

We write an inner join query using `table.column` to select the columns, and
then specifying the condition on which two rows should be joined together.

```sql
SELECT users.username, bleets.content, bleets.createdAt
FROM users
INNER JOIN bleets ON users.id = bleets.userId;
```

It is good to know that join queries can be combined with other SQL commands,
such as `WHERE`, `ORDER BY` and `LIMIT`.

```sql
SELECT users.username, bleets.content, bleets.createdAt
FROM users
INNER JOIN bleets ON users.id = bleets.userId
ORDER BY bleets.impressions DESC
LIMIT 5;
```
