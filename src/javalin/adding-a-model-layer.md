# Adding a data access layer

We'll need to create the "Data Access Layer". That is, the part of our application that deals with interacting with the database and data models. 

## Models and Repositories

Models are classes that we use to store data within the application.

```java
package com.corndel.bleeter.Models;

public class User {

}
```

Repositories are classes that interact with the database to let us persist, modify, and delete this data.


```java
package com.corndel.bleeter.Repositories;

import com.corndel.bleeter.Models.User;

public class UserRepository {

}
```

## Querying with substitutions

JDBC lets us set up _Prepared Statements_. These let us substitute in parameters to our SQL queries.

```js
static User findById(id) {
  var query = `SELECT * FROM users WHERE id = ?`
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

Always use prepared statements!

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
