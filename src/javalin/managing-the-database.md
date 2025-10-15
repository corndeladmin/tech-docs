# Managing the database

<Vimeo id="1008462637" />

## Adding SQLite

We use Java's built-in
[JDBC](https://en.wikipedia.org/wiki/Java_Database_Connectivity) library to
provide a connection to the database, allowing us to run SQL queries from Java.

```xml
<dependency>
  <groupId>org.xerial</groupId>
  <artifactId>sqlite-jdbc</artifactId>
  <version>3.46.0.0</version>
</dependency>
```

## Creating the schema

We will set up our database with the following schema:

::: code-group

```sql [users]
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    verified BOOLEAN DEFAULT 0
);
```

```sql [bleets]
CREATE TABLE IF NOT EXISTS bleets (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    content TEXT NOT NULL,
    createdAt TEXT DEFAULT (datetime('now')),
    userId INTEGER NOT NULL,
    FOREIGN KEY (userId) REFERENCES USER(id)
);
```

```sql [likes]
CREATE TABLE IF NOT EXISTS user_bleet_likes (
    userId INTEGER NOT NULL,
    bleetId INTEGER NOT NULL,
    PRIMARY KEY (userId, bleetId),
    FOREIGN KEY (userId) REFERENCES USER(id),
    FOREIGN KEY (bleetId) REFERENCES BLEET(id)
);
```

:::

In a Maven project, it is a good idea to put migrations in the `resources`
directory:

```txt
src
└── main
    └── resources
        └── db
            └── migrations
                ├── V1__create_users_table.sql
                ├── V2__create_bleets_table.sql
                └── V3__create_likes_table.sql
```

## Creating the tables

We can use Flyway to manage migrations for us.

In `pom.xml`, we configure the flyway plugin to manage the correct database.

```xml
<plugin>
  <groupId>org.flywaydb</groupId>
  <artifactId>flyway-maven-plugin</artifactId>
  <version>10.15.2</version>
  <configuration>
    <url>jdbc:sqlite:bleeter.sqlite</url>
  </configuration>
</plugin>
```

We can then use Flyway in the terminal.

```bash
# see database migration status
mvn flyway:info

# run all pending migrations:
mvn flyway:migrate
```

## Resetting the database

Because dropping tables is dangerous, we need to explicitly enable this in the
Flyway configuration:

```xml{7}
<plugin>
  <groupId>org.flywaydb</groupId>
  <artifactId>flyway-maven-plugin</artifactId>
  <version>10.15.2</version>
  <configuration>
    <url>jdbc:sqlite:bleeter.sqlite</url>
    <cleanDisabled>false</cleanDisabled>
  </configuration>
</plugin>
```

Now we can drop all database entities.

```bash
# deletes everything in the database
mvn flyway:clean
```

::: danger

This is only for use during development. The `flyway:clean` command will `DROP`
everything and it cannot be recovered.

:::
