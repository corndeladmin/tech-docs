# Adding a model layer

<Vimeo id="915256736" />

## Creating models

Models are responsible for interacting with the database. For example, we might
create a `User` class for interacting with the table of users:

```js
// models/User.js
import db from '../db/index.js'

class User {
  static async findAll(limit, page) {
    const query = 'SELECT * FROM users'
    const results = await db.raw(query)
    return results
  }
}

export default User
```

## Querying with substitutions

Knex allows us to create SQL template queries with placeholders using `?`

```js
static async findById(id) {
  const query = `SELECT * FROM users WHERE id = ?`
  const results = await db.raw(query, [id])
  return results[0]
}
```

::: danger

Do not be tempted to interpolate raw arguments into the query string. This opens
you up to SQL injection attacks.

Consider

```js
User.findById('3; DROP TABLE users;')
```

Always use knex's `?` substitution syntax.

:::

## Inserting data

We can use an `INSERT` query with several parameters by putting more `?` and
passing the substitutions in the array:

```js
static async create(username, verified) {
  const query =
    'INSERT INTO users (username, verified) VALUES (?, ?) RETURNING *'
  const results = await db.raw(query, [username, verified])
  return results[0]
}
```
