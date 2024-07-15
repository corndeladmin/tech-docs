# Connecting to the database

## Setting up the connection

We use JDBC to provide a connection to the database, allowing us to run SQL queries from Java.

First, we add the `sqlite-jdbc` dependency to our `pom.xml`.

```xml
<dependencies>
    ...
    <dependency>
        <groupId>org.xerial</groupId>
        <artifactId>sqlite-jdbc</artifactId>
        <version>3.46.0.0</version>
    </dependency>
</dependencies>
```

Then, we add our database connection code to `DB.java`.

```js
import knex from 'knex'
import { fileURLToPath } from 'url'

const uri = new URL('./db.sqlite', import.meta.url)

const db = knex({
  client: 'sqlite3',
  connection: { filename: fileURLToPath(uri) },
  useNullAsDefault: true
})

export default db
```

## Use the database connection

Now we can run SQL queries on our database with `db.raw()`.

For example,

```js
const query = `SELECT * FROM users`
const results = await db.raw(query)
console.log(results)
```
