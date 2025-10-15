# Creating a Maven project

<Vimeo id="1007716970" />

## Using VS Code

1. First, make sure that the
   [Maven for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-maven)
   plugin is installed. If you installed the Extension Pack for Java, you will
   already have this.

2. Press `Cmd+Shift+P` to open the command pallette.

3. Run the `Maven: New Module...` command (Type in `>maven` and select the
   command from the list).

4. Choose the parent directory (none), group id (`com.corndel`) and project name
   (`health-tracker`).

5. Place the project in your `Repos` folder and open it in VS Code.

## Configuring Maven

Every maven project contains a `pom.xml`. This file configures maven,
dependencies, and build plugins.

## Setting the Java version

```xml
<properties>
  <maven.compiler.source>21</maven.compiler.source>
  <maven.compiler.target>21</maven.compiler.target>
</properties>
```

## Adding dependencies

Dependencies will download third-party code into our project so that we can add
additional functionality without writing the code ourselves.

For example, adding `picocli` allows us to create a command line interface
application much more easily.

```xml
<dependencies>
  <dependency>
    <groupId>info.picocli</groupId>
    <artifactId>picocli</artifactId>
    <version>4.7.6</version>
  </dependency>
</dependencies>
```

## Test dependencies

If we want to do testing with JUnit 5, we need to add `junit-jupiter-engine` and
`assertj-core`.

```xml{5,11}
<dependency>
  <groupId>org.junit.jupiter</groupId>
  <artifactId>junit-jupiter-engine</artifactId>
  <version>5.9.1</version>
  <scope>test</scope>
</dependency>

<dependency>
  <groupId>org.assertj</groupId>
  <artifactId>assertj-core</artifactId>
  <version>3.23.1</version>
  <scope>test</scope>
</dependency>
```

::: tip

Note that we have put `<scope>test</scope>` on these. This means they will not
be included in the compiled project we distribute to our users. They don't need
it, the tests are only for development!

:::

## Build plugins

Maven splits the build lifecycle up into stages like `compile`, `test` and
`package`.

Build plugins allow us to configure and interact with the build lifecycle.

For example, if we want to be able to run our compiled project with
`mvn exec:java`, we can add the `exec-maven-plugin`:

```xml{8}
<build>
  <plugins>
    <plugin>
      <groupId>org.codehaus.mojo</groupId>
      <artifactId>exec-maven-plugin</artifactId>
      <version>3.0.0</version>
      <configuration>
        <mainClass>com.corndel.Main</mainClass>
      </configuration>
    </plugin>
  </plugins>
</build>
```

Note that we can specify the entrypoint of the app by configuring the
`mainClass`.
