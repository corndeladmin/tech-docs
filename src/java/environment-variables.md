# Environment variables

<Vimeo id="1008191971" />

## What are they

Environment variables allow to to store a piece of configuration data outside of
the main code of our application. This allows us to hide this configuration data
if it is sensitive, or swap it out if the app needs to be configured differently
in different environments.

## Declaring environment variables

Make a file in the very root of the project called `.env` and add some variables
to it in the following format:

```txt [.env]
DB_URL=jdbc:mysql://localhost:3306/mydb
DB_USER=root
DB_PASSWORD=supersecret
```

::: danger

Environment variables tend to contain sensitive information. For this reason, we
should not check them into version control.

Create a file called `.gitignore` at the root of your project and add `.env` to
it. You can add any other file or folder you want to exclude from Git to this
file.

:::

## Reading environment variables

Add `java-dotenv` as a dependency in `pom.xml`.

```xml
<dependency>
    <groupId>io.github.cdimascio</groupId>
    <artifactId>java-dotenv</artifactId>
    <version>5.2.2</version> <!-- Check for the latest version -->
</dependency>
```

In any file you want to use the environment variables, import the `Dotenv` class

```java
import io.github.cdimascio.dotenv.Dotenv;
```

then call `Dotenv.load()` to get the variables

```java
// Will automatically look for a .env file in the root directory:
Dotenv dotenv = Dotenv.load();

String dbUrl = dotenv.get("DB_URL");
String dbUser = dotenv.get("DB_USER");
String dbPassword = dotenv.get("DB_PASSWORD");

System.out.println("Database URL: " + dbUrl);
System.out.println("Database User: " + dbUser);
```
