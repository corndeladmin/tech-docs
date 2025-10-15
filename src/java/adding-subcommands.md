# Adding subcommands

<Vimeo id="1007718319" />

## A simple subcommand

To add a simple subcommand to our app, we can create a new class and then
register it with the main app.

```java{4,15-27}
@Command(
  name = "healthtracker",
  description = "A CLI health tracker",
  subcommands = {Welcome.class})
public class App {

  public static void main(String[] args) {
    CommandLine cli = new CommandLine(new App());
    int exitCode = cli.execute(args);
    System.exit(exitCode);
  }

}

@Command(name = "welcome", description = "Shows a nice message")
class Welcome implements Runnable {

  @Parameters(index = "0", description = "The name to greet")
  private String name;

  @Override
  public void run() {
    String msg = String.format("Welcome, %s! Please specify a command.", name);
    System.out.println(msg);
  }

}
```

Now the user can run the `welcome` function with `healthtracker welcome <name>`,
and we can add different functions under different subcommands.

```console
> healthtracker welcome Hikaru

Welcome, Hikaru! Please specify a command.
```

## Create a subcommand structure

Often, we will need sub-subcommands.

Let's create a simple `Meal` class.

```java
class Meal {
  private String mealName;
  private int calories;

  public Meal(String mealName, int calories) {
    this.mealName = mealName;
    this.calories = calories;
  }

  public String getSummary() {
    return String.format("You ate %s and it contained %d calories.", mealName, calories);
  }
}
```

Now we'll add a controller to work with the meal class. The `MealController` is
mostly empty, but it wraps up the `add` and `list` subcommands under the `meal`
subcommand.

```java
@Command(
  name = "meal",
  description = "Save and read your meals",
  subcommands = { AddMeal.class, ListMeals.class })
public class MealController {
}
```

Now we can create the `add` and `list` commands under the `meal` prefix. For
example:

```java
@Command(name = "add", description = "Save a meal")
class AddMeal implements Runnable {

  @Parameters(index = "0", description = "The name of the meal")
  private String mealName;

  @Parameters(index = "1", description = "The number of calories")
  private int calories;

  @Override
  public void run() {
    Meal meal = new Meal(mealName, calories);
    System.out.println(meal.getSummary());
  }

}
```

## Register with App

Once we have created our subcommand controller, we need to register it with the
main `App`.

```java
import com.corndel.controllers.MealController;

@Command(
  name = "healthtracker",
  description = "A CLI health tracker",
  subcommands = {Welcome.class, MealController.class})
public class App {

  public static void main(String[] args) {
    CommandLine cli = new CommandLine(new App());
    int exitCode = cli.execute(args);
    System.exit(exitCode);
  }

}
```

Now the user can access nested subcommands like this:

```console
> healthtracker meal add Pizza 2000

You ate Pizza and it contained 2000 calories.

> healthtracker meal list

Not implemented.
```
