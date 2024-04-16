# Writing data

<Vimeo id="935426096" />

## Inserting a row

We can insert a row into a database table.

```sql
INSERT INTO users (username, verified) VALUES ('GordonRambo', 1);
```

::: tip

Where the table schema provides a default value, we aren't required to pass a
value for that column.

:::

## Inserting multiple rows

We can add multiple rows in a single command.

```sql
INSERT INTO bleets (userId, content) VALUES
  (21, 'Just tried making a salad that sings when you add the dressing. It''s called ''Beet-hoven''s Symphony''. #FoodieTunes'),
  (21, '@EluskM If you need a chef on Mars, make sure they can handle space spice. #GalacticGourmet'),
  (21, '@ArianaVenti Lost your ponytail? Check the blender, might''ve tried to spice up my smoothie. #MissingIngredients');
```

## Deleting rows

We can delete rows from a table. Rows are deleted based on a condition.

```sql
DELETE FROM bleets WHERE id = 28;
```

::: danger

Every row matched by your `WHERE` clause will be deleted, not just the first
one.

If you don't provide a `WHERE` clause, that means **every row in the table will
be deleted**.

:::

## Updating rows

We can update rows in a table.

```sql
UPDATE bleets
SET
  impressions = 10000
WHERE id = 30;
```

::: danger

Every row matched by your `WHERE` clause will be updated, not just the first
one.

If you don't provide a `WHERE` clause, that means **every row in the table will
be updated**.

:::
