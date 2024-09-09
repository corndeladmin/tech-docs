# Interfaces

<Vimeo id="1006968035" />

## Defining an interface

An interface specifies some methods which must be implemented by any
implementing class. It does not actually implement the methods - that is left to
the child classes.

```js
public interface Protected {
  void setPassword(String password);
  boolean checkPassword(String attempt);
}
```

## Implementing an interface

Now, any device which implements the interface _must_ implement the interface's
methods. Failing to do so will cause an error. Each implementation can decide
its own behaviour.

::: code-group

```js{10-11} [SmartScreen.js]
class SmartScreen implements Protected {
  private String password;

  public SmartScreen () {
    this.password = "default";
  }

  @Override
  public void setPassword(String password) {
    if (password.length < 6) {
      System.out.println("Password must have at least 6 characters.");
    } else {
      this.password = password;
    }
  }

  @Override
  public boolean checkPassword(String attempt) {
    return attempt == this.password;
  }

  // Other methods...
}
```

```js{12-13} [SmartThermostat.js]
class SmartThermostat implements Protected {
  private String password;
  private int temperature;

  public SmartThermostat () {
    this.password = "admin"
    this.temperature = 18;
  }

  @Override
  public void setPassword(String password) {
    if (password.length < 10) {
      System.out.println("Password must have at least 10 characters.");
    } else {
      this.password = password;
    }
  }

  @Override
  public boolean checkPassword(String attempt) {
    return attempt == this.password
  }

  // Other methods...
}
```

:::

::: tip

When a class implements an interface, it can also freely add additional
properties and methods - it isn't limited to the interface.

:::

## Inheritance and interfaces

A class can only inherit from one parent class, but it can implement many
interfaces. It can both inherit _and_ implement interfaces if it wishes to.

```java
public class SmartScreen extends SmartDevice implements Lockable, Sleepable {
  // implementation
}
```
