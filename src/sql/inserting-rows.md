# Inserting rows

So far, we've focused on getting data out of our tables in various ways. But
eventually, we are going to need to save data by writing to tables.

## Understanding schema

When adding data to a database, it is important to understand the schema of the
table. This roughly means know what the column headings are, and what
constraints there are on the columns. For example, the number of `followers`
must be an integer, whereas the `username` must be a string.

In addition, depending how the table is set up, it might add some default values
for us, such as the `id` of a new user or the `timestamp` of a new bleet. We can
leave these values out when adding a new row and the database will add them for
us.

## Creating a new user

Recall the columns for a user:

| id  | username | access | verified | followers |
| :-: | -------- | ------ | :------: | :-------: |
|  1  | EluskM   | admin  |    1     |  1987531  |

we'll create a profile for _CleopatraTechQueen_, a tech-savvy historical figure
with a flair for the dramatic in the modern digital age. Here's how we'll add
_CleopatraTechQueen_ to our `users` table and then post her first bleets.

```sql
INSERT INTO users (username, access, verified, followers)
VALUES ('CleopatraTechQueen', 'user', 1, 50000);
```

In the first line, we specify which columns we are providing values for. In the
second line, we provide the values in the same order. If we have respected the
schema of the table, we will have made a new row. If we made an error, such as
not providing a required value or getting the type wrong, the database will
reject the write operation, and respond with an error message.

## Creating multiple rows

Recall the columns for a tweet:

| id  | content                                                | createdAt           | likes  | userId |
| :-: | ------------------------------------------------------ | ------------------- | :----: | :----: |
|  1  | Just bought Mars. Renaming it to Elusk Planet. #SpaceX | 2023-08-15 14:30:00 | 673491 |   1    |

Now that CleopatraTechQueen has joined our platform, it's time for her to share
her thoughts with the world. Let's assume her user ID is `21` for these
examples.

```sql
INSERT INTO bleets (content, userId)
VALUES
  ('Reviving the library of Alexandria, but make it digital. #EternalKnowledge', 21),
  ('Sphinx selfies are the next big trend. You heard it here first! #Trendsetter', 21),
  ('Negotiating with Mars colonists for a summer palace. @EluskM, any real estate tips? #MarsRoyalty', 21);
```

The database will provide the bleet's `id` and `createdAt` values for us because
it is configured to do so. It will also set `likes` to a default value of `0`.

Notice that we only need to provide the column names once, and can provide
multiple rows of data. This is very convenient for adding multiple rows to the
same table.

## Try it

Try creating _CleopatraTechQueen_ (or make up your own character).

::: warning

In the editor below, the database will be reset to it's initial state of `20`
users after every run. When you insert a user, they won't still be there the
next time you run the code. This is different from a normal database - once you
insert a user, they're there until you delete them.

:::

::: tip

Text preceded by `--` are comments, and these will be safely ignored by the SQL
interpreter.

:::

<CodeMirror>

```sql
-- Create the user
INSERT INTO users (username, access, verified, followers)
VALUES ('CleopatraTechQueen', 'user', 1, 50000);

-- Add some bleets
INSERT INTO bleets (content, userId)
VALUES
  ('Reviving the library of Alexandria, but make it digital. #EternalKnowledge', 21),
  ('Sphinx selfies are the next big trend. You heard it here first! #Trendsetter', 21),
  ('Negotiating with Mars colonists for a summer palace. @EluskM, any real estate tips? #MarsRoyalty', 21);

-- Read the bleets back
SELECT users.username, bleets.content
FROM users
INNER JOIN bleets ON users.id = bleets.userId
WHERE users.username = 'CleopatraTechQueen'
```

</CodeMirror>
