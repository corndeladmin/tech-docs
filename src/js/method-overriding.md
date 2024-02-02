# Method overriding

Inheritance allows a class to inherit properties and methods from another class.
Method overriding is a feature that enables a subclass to provide a specific
implementation of a method that is already defined in its superclass. This guide
will walk you through creating a child class which inherits from a parent class
and overrides a method to better suit its needs.

## Parent class

Let's again use the `SmartDevice` parent class we created when we studied
[inheritance](./inheritance).

```js
class SmartDevice {
  constructor(name) {
    this.name = name
    this.isConnected = false
  }

  connect() {
    this.isConnected = true
    console.log(`${this.name} is now connected.`)
  }
}
```
