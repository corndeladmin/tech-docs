# Making a CLI

<Vimeo id="1007716892" />

## Installing Picocli

We're going to be using Picocli to make our command line

To add this as a dependency in Maven, add the following dependency to the
dependencies in your `pom.xml`

```xml
<dependency>
  <groupId>info.picocli</groupId>
  <artifactId>picocli</artifactId>
  <version>4.7.6</version>
</dependency>
```

## Setting up your CLI

In the main class, we set up `picocli.CommandLine` to process the command line
`args`.

```java
package com.corndel.healthtracker;

import picocli.CommandLine;
import picocli.CommandLine.Command;

@Command(name = "healthtracker", description = "A CLI health tracker")
public class App {

  public static void main(String[] args) {
    CommandLine cli = new CommandLine(new App());
    int exitCode = cli.execute(args);
    System.exit(exitCode);
  }

}
```

::: info

Picocli uses _annotations_ to declare metadata.

Here, we use the `@Command()` annotation to declare the name and description of
our `healthtracker` cli command.

:::

## Printing a message

To execute some code, we need to add a `run()` method, and also implement the
`Runnable` interface.

```java{2,4-7}
@Command(name = "healthtracker", description = "A CLI health tracker")
public class App implements Runnable {

  @Override
  public void run() {
    System.out.println("Welcome! Please specify a command.")
  }

  public static void main(String[] args) {
    CommandLine cli = new CommandLine(new App());
    int exitCode = cli.execute(args);
    System.exit(exitCode);
  }

}
```

Now the `run()` method will run if the user simply executes `healthtracker` in
the terminal.

```console
> healthtracker

Welcome! Please specify a command.
```

## Handling input arguments

The user can specify arguments to pass to the `run()` method. We configure the
CLI to accept these using the `@Parameters` decorator. We can access them around
our class.

```java{4-5,9}
@Command(name = "healthtracker", description = "A CLI health tracker")
public class App implements Runnable {

  @Parameters(index = "0", description = "The name to greet", defaultValue = "User")
  private String name;

  @Override
  public void run() {
    String msg = String.format("Welcome, %s! Please specify a command.", name);
    System.out.println(msg);
  }

  public static void main(String[] args) {
    CommandLine cli = new CommandLine(new App());
    int exitCode = cli.execute(args);
    System.exit(exitCode);
  }

}
```

Now the user can pass their name to the CLI to get a more personalised message.

```console
> healthtracker Magnus

Welcome, Magnus! Please specify a command.
```

::: tip

Note that we have include the `defaultValue` in the `@Parameter` field. If no
name is given, this default value will be used instead.

:::
