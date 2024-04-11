# Many to many relationships

A user can _like_ many bleets, and a bleet can be _liked_ by many users. How
shall we keep track of which users like which bleets?

Putting a foreign key on the `bleets` table works well for tracking authorship,
because each bleet can be written by only one author. If we wanted to add
another author, we'd need to add another `userId2` column, and so on. That is
not a good solution.

## Join tables

Instead, we create a whole new table, called a join table. The join table's
whole purpose is to track which users like which bleets. Let's take a look at
what a join table might look like:

`Table: user_likes`

| userId | bleetId | likedAt             |
| :----: | :-----: | ------------------- |
|   1    |    2    | 2023-11-24 03:01:47 |
|   1    |    5    | 2023-05-21 07:14:08 |
|   2    |    7    | 2023-02-22 21:47:57 |
|   3    |    2    | 2023-10-07 02:37:27 |
|   3    |    7    | 2023-01-17 00:05:13 |

Looking at this table, we can see that user `1` likes two bleets (`2` and `5`);
and that bleet `7` is liked by users `3` and `2`. We have modelled the
many-to-many relationship.

## Adding a relationship

We can associate a user with a bleet (i.e. they _like_ it) by adding a new row
to the join table:

```sql
-- user 9 likes bleet 12
INSERT INTO user_likes (userId, bleetId) VALUES (9, 12);
```

| userId | bleetId | likedAt             |
| :----: | :-----: | ------------------- |
|   9    |   12    | 2023-01-06 03:12:15 |

## Destroying a relationship

Oops! User `9` liked bleet `12` by accident, so they click to unlike. We need to
remove the row we just added to the `user_likes` table.

```sql
DELETE FROM user_likes
WHERE userId = 9 AND bleetId = 12;
```

## Creating the join table

To create the join table, we define the columns and set up the foreign key
references.

::: code-group

```sql{5} [SQLite]
CREATE TABLE user_likes (
    userId INTEGER,
    bleetId INTEGER,
    likedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (userId, bleetId),
    FOREIGN KEY (userId) REFERENCES users(id),
    FOREIGN KEY (bleetId) REFERENCES bleets(id)
);

```

```sql{4} [Postgres]
CREATE TABLE user_likes (
    userId INTEGER,
    bleetId INTEGER,
    likedAt TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (userId, bleetId),
    FOREIGN KEY (userId) REFERENCES users(id),
    FOREIGN KEY (bleetId) REFERENCES bleets(id)
);
```

```sql{4} [MySQL]
CREATE TABLE user_likes (
    userId INT,
    bleetId INT,
    likedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (userId, bleetId),
    FOREIGN KEY (userId) REFERENCES users(id),
    FOREIGN KEY (bleetId) REFERENCES bleets(id)
);
```

:::

::: tip

The highlighted line shows that we have added a primary key to each row of user
likes. We passed `(userId, bleetId)` as the value of the key. This is known as a
_composite key_ as it has two parts.

This ensures that each combination of `(userId, bleetId)` is unique in the table
(i.e. a user can't like a tweet twice).

:::

The lines

```sql
FOREIGN KEY (userId) REFERENCES users(id),
FOREIGN KEY (bleetId) REFERENCES bleets(id)
```

are very important - it tells SQL that the `userId` column in `user_likes` isn't
just a number, it refers to a row in the `users` table. Likewise for `bleetId`.

This is great, because it means join queries work! Let's see why this is so
powerful.

## Querying the relationship

### All bleets liked by user

Let's find all the bleets liked by the user with id of `3`:

```sql
SELECT bleets.id, bleets.content
FROM user_likes
JOIN bleets ON bleets.id = user_likes.bleetId
WHERE user_likes.userId = 3
```

Whereas the `user_likes` table is limited to just the `bleetId`, by joining the
`bleets` data to the `user_likes` data, we are able to return the actual content
of each bleet the user likes:

| id  | content                                                                                                 |
| --- | ------------------------------------------------------------------------------------------------------- |
| 8   | Decided to release my next album exclusively on vinyl. And by vinyl, I mean actual coffee cups. #Grande |
| 10  | Break up with your coffee, I'm bored. #NextSingle                                                       |
| 3   | You get a car! You get a car! Everybody gets a car! #Giveaway                                           |
| 11  | All about that bass? More like all about that space. @EluskM, need a backup singer on Mars?             |
| 4   | My next book club pick is the dictionary. I hear it's a page-turner. #ReadMore                          |

Note that the first line of our query was `SELECT bleets.*`, which means the
data we see all comes from the `bleets` table. This means the `userId` column in
the result is actually the id of the author, not the liker.

## All users who like a bleet

To find all users who like a specific bleet, we again need a join.

```sql
SELECT users.*
FROM users
JOIN user_likes ON users.id = user_likes.userId
WHERE user_likes.bleetId = 2;
```

| id  | username    | access | verified | followers |
| --- | ----------- | ------ | -------- | --------- |
| 5   | MarkZeeberg | user   | 1        | 1600320   |
| 9   | ArianaVenti | user   | 1        | 1050322   |
| 12  | CardiBee    | user   | 0        | 0         |
| 13  | EdShearing  | user   | 1        | 400123    |
| 15  | SelenaGofar | user   | 1        | 690789    |
