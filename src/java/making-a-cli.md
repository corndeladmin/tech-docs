# Making a CLI

## Installing Picocli

We're going to be using Picocli to make our command line

To add this as a dependency in Maven, add the following dependency to the dependencies in your `pom.xml`

```xml
<dependency>
  <groupId>info.picocli</groupId>
  <artifactId>picocli</artifactId>
  <version>4.7.6</version>
</dependency>
```

## Setting up your CLI

In the main class, we set up `picocli.CommandLine` to process the command line `args`.

```java
package com.corndel.healthtracker;

import picocli.CommandLine;
import picocli.CommandLine.Command;

@Command(name = "healthtracker", description = "A CLI health tracker")
public class Main {
  public static void main(String[] args) {
    CommandLine cmd = new CommandLine(new Main());
    int exitCode = cmd.execute(args);
    System.exit(exitCode);
  }
}
```

::: info

Picocli uses _annotations_ to declare metadata.

Here, we use the `@Command()` annotation to declare the name and description of our `healthtracker` cli command.

:::

::: tip

The line `cmd.execute(args)` should always go at the end of this file.
It is what allows `CommandLine` access to the user's terminal commands, like
`meal add "Pizza" 2000`.

:::

## Create a command

Next, we will add **controllers**. A controller receives a request from the
user, and talks to the models to make things happen.

To create a controller for meals:

```java
package com.corndel.healthtracker.controllers;

import com.corndel.healthtracker.models.Meal;
import picocli.CommandLine.Command;

@Command(name = "meal")
public class MealController {
  @Command(name = "log", description = "Log a new meal")
  void Log(
      @Parameters(paramLabel = "<name>", description = "The name of the meal") String name,
      @Parameters(
              paramLabel = "<calories>",
              description = "The calorie content of the meal in kcal")
          String calories) {
    var meal = new Meal(name, Integer.parseInt(calories));

    System.out.println(meal.toString());
  }
}
```

What's this code doing?

- Make a new `mealController` to handle user input like `node cli meal`
- Make an `add` subcommand to handle `node cli meal add "Pizza" 2000`
- Take the arguments (e.g. `"Pizza"`, `2000`) and pass them to the `Meal` model

## Register the command

We have a `program` in `cli/index.js` and a `mealController` in `cli/meal.js` -
we need to hook them up. In `index.js`, we do

```js
import { program } from "commander";
import mealController from "./meal.js"; // [!code ++]

program.version("0.1.0").description("A CLI health tracker");

program.addCommand(mealController); // [!code ++]

program.parse(process.argv);
```

We've added the `mealController` to our `program` - now it's ready to use.

## Use the command

The CLI should now be fully functioning. From the project root, open a terminal
and run

::: code-group

```bash
node cli meal add 'Lasagne' 1100
```

```console [output]
Meal { name: 'Lasagne', calories: 1100 }
```

:::

## Design tips

Go here if you want to deep dive into the philosophy of cli design and development https://clig.dev/
