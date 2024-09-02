# Creating a Maven project

## Creating a Maven project using VSCode

First, make sure that the [Java Maven Plugin](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-maven) is installed

Press Cmd+Shift+P to open the command pallette

Run the `Maven: New Module...` command (Type in `>maven` and select the command from the list)

Choose the parent directory (none)

Choose the group id (com.corndel)

Name the project (health-tracker)

## Configuring a Maven project

Every maven project contains a `pom.xml`.

This file configures maven, dependencies, and build plugins.

### Setting the Java verison to build against

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>com.corndel.healthtracker</groupId>
    <artifactId>healthtracker</artifactId>
    <version>1.0-SNAPSHOT</version>

    <properties> // [!code focus:6]
        <maven.compiler.source>17</maven.compiler.source> // [!code --]
        <maven.compiler.target>17</maven.compiler.target> // [!code --]
        <maven.compiler.release>21</maven.compiler.release> // [!code ++]
    </properties>

</project>
```

### Adding dependencies

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>com.corndel.healthtracker</groupId>
    <artifactId>healthtracker</artifactId>
    <version>1.0-SNAPSHOT</version>

    <properties>
        <maven.compiler.release>21</maven.compiler.release>
    </properties>

    <dependencies> // [!code focus:12]
      <dependency>
        <groupId>org.junit.jupiter</groupId>
        <artifactId>junit-jupiter-engine</artifactId>
        <version>5.9.1</version>
      </dependency>
      <dependency>
        <groupId>org.assertj</groupId>
        <artifactId>assertj-core</artifactId>
        <version>3.23.1</version>
      </dependency>
    </dependencies>

</project>
```

#### Test dependencies

Sometimes we only want dependencies when we're testing the code, rather than running it

```xml
  <dependencies>
    <dependency>
      <groupId>org.junit.jupiter</groupId>
      <artifactId>junit-jupiter-engine</artifactId>
      <version>5.9.1</version>
      <scope>test</scope> // [!code ++]
    </dependency>
    <dependency>
      <groupId>org.assertj</groupId>
      <artifactId>assertj-core</artifactId>
      <version>3.23.1</version>
      <scope>test</scope> // [!code ++]
    </dependency>
  </dependencies>
```

### Build plugins

These determine what happens during the different steps of building.

To illustrate this, instead of setting the compiler options in the `<properties>` tag, we can configure the compiler plugin directly:

```
<properties> // [!code --]
    <maven.compiler.release>21</maven.compiler.release> // [!code --]
</properties> // [!code --]
[...]
<build> // [!code ++]
    <plugins> // [!code ++]
        <plugin> // [!code ++]
            <artifactId>maven-compiler-plugin</artifactId> // [!code ++]
            <version>3.13.0</version> // [!code ++]
            <configuration> // [!code ++]
                <sourceEncoding>UTF-8</sourceEncoding> // [!code ++]
                <release>21</release> // [!code ++]
            </configuration> // [!code ++]
        </plugin> // [!code ++]
    </plugins> // [!code ++]
</build> // [!code ++]
```

#### Packaging your application into an cli executable.

We can use other plugins to do even more _fancy stuff_, like packaging your java application into an executable, so that you can run `./supportbank ... ...` from the command line!

```xml
<plugin>
    <groupId>org.codehaus.mojo</groupId>
    <artifactId>appassembler-maven-plugin</artifactId>
    <version>2.1.0</version>
    <configuration>
        <programs>
            <program>
                <mainClass>com.corndel.supportbank.SupportBank</mainClass>
                <id>supportbank</id>
            </program>
        </programs>
    </configuration>
    <executions>
        <execution>
            <phase>package</phase>
            <goals>
                <goal>assemble</goal>
            </goals>
        </execution>
    </executions>
</plugin>
```
