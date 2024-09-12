# Querying with substitutions

<Vimeo id="1008462452" />

JDBC lets us set up _prepared statements_. These let us substitute in parameters
to our SQL queries.

```java
public static User findById(int _id) throws Exception {
  var query = "SELECT id, username, verified FROM users WHERE id = ?";

  try (var connection = DB.getConnection();
      var statement = connection.prepareStatement(query)) {
    statement.setInt(1, _id);

    try (var resultSet = statement.executeQuery()) {

      if (!resultSet.next()) {
        return null;
      }

      var id = resultSet.getInt("id");
      var username = resultSet.getString("username");
      var verified = resultSet.getBoolean("verified");
      return new User(id, username, verified);
    }
  }
}
```

::: danger

Do not be tempted to interpolate raw arguments into the query string. This opens
you up to SQL injection attacks.

Consider

```java
  User.findById("3; DROP TABLE users;");
```

Always use prepared statements!

:::
