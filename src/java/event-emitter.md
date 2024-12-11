# Event emitter

The event emitter pattern is one way of implementing an event driven program. It
enables a list of listener functions to respond to certain events within the
program, such as clicking a button.

## Event emitter class

We will create a class which implements two methods:

- `.on(event, listener)` which adds the function `listener` to the list of
  listeners

- `.emit(event, value)` which loops through the listeners and executes each one,
  passing `value` as an argument

```java
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

class EventEmitter {
    private Map<String, List<EventListener>> events;

    public EventEmitter() {
        this.events = new HashMap<>();
    }

    public void on(String event, EventListener listener) {
        // Ensure the list of listeners exists for the event
        this.events.computeIfAbsent(event, k -> new ArrayList<>());

        // Add the listener to the list
        this.events.get(event).add(listener);
    }

    public void emit(String event, Object value) {
        // Get the list of listeners for the event, if it exists
        List<EventListener> listeners = this.events.getOrDefault(event, new ArrayList<>());

        // Call each listener with the provided value
        for (EventListener listener : listeners) {
            listener.handle(value);
        }
    }

    @FunctionalInterface
    interface EventListener {
        void handle(Object value);
    }
}

```

## Create a button

We'll create a button to extend the `EventEmitter` class, meaning it gets the
`.on()` and `.emit()` methods it needs to manage its listeners.

```java
class Button extends EventEmitter {
    private int count;

    public Button() {
        this.count = 0;
    }

    public void click() {
        this.count++;
        // Emit the "click" event with the current count
        this.emit("click", this.count);
    }
}

```

## Attach listeners

Let's create some listener functions we want to execute whenever `'click'` is
emitted by the button.

```java
public class Main {
    public static void main(String[] args) {
        Button btn = new Button();

        // Attach listener to submit form
        btn.on("click", value -> System.out.println("Form submitted."));

        // Attach listener to show dialog with click count
        btn.on("click", value -> {
            int count = (int) value;
            System.out.println("You clicked me " + count + " times!");
        });

        // Simulate button clicks
        btn.click();
        btn.click();
        btn.click();
    }
}
```

The output would look like this:

```console
Form submitted.
You clicked me 1 times!

Form submitted.
You clicked me 2 times!

Form submitted.
You clicked me 3 times!
```
