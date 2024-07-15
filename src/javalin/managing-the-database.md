# Managing the database

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

## Creating the tables

This SQL, along with the seed data, could be stored in the directory
`src/main/resources/db/migration` in our project. We _could_ run it with, for example,

```bash
sqlite3 db.sqlite < src/main/resources/db/migration/V1__Reset.sql
```

However, we can use a tool called flyway to manage this.

```xml
  <build>
    <plugins>
      <plugin>
        <groupId>org.flywaydb</groupId>
        <artifactId>flyway-maven-plugin</artifactId>
        <version>10.15.2</version>
        <configuration>
          <url>jdbc:sqlite:nozama.db</url>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.xerial</groupId>
            <artifactId>sqlite-jdbc</artifactId>
            <version>3.46.0.0</version>
          </dependency>
        </dependencies>
      </plugin>
  </plugins>
</build>
```

```bash
mvn flyway:migrate
```

::: warning

Since we're just practising, including your test seed data with your migrations is okay. 

:::
