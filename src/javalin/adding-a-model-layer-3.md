# Inserting data

<Vimeo id="1008462412" />

We can use an `INSERT` query with several parameters by putting more `?` and
passing the substitutions in with `.setString()`, `.setInt()`, or the
appropriate set method for the datatype:

```java
public static User create(String username, boolean verified) throws Exception {
  var query = "INSERT INTO users (username, verified) VALUES (?, ?) RETURNING *";

  try (var connection = DB.getConnection();
      var statement = connection.prepareStatement(query)) {

    statement.setString(1, username);
    statement.setBoolean(2, verified);

    try (var resultSet = statement.executeQuery();) {
        resultSet.next()
        var id = resultSet.getInt("id");
        return new User(id, username, verified);
    }
  }
}
```

::: info

Note the `RETURNING *` causes the statement to have a `resultSet` after
execution. This lets us get the `id` and other fields of the newly created
`User` from the database.

:::
