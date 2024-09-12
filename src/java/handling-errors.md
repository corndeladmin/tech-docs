# Handling errors

<Vimeo id="1007999993" />

## Throwing errors

To ensure that problems get dealt with as they happen, we can throw an error.
Errors that we manually throw in this way are often referred to as _exceptions_.

```java
public void setTime(double value) {
  if (value < 0) {
    throw new IllegalArgumentException("Time value must be positive");
  }
  this.value = value;
}
```

Now, if we call `setTime(-1)`, the exception will be thrown.

## Catching errors

If we don't handle the exception, it will cause the program to crash. To handle
the exception, we can wrap the code which throws an error in a `try/catch`
block.

```java
public Exercise(String activity, double duration, String unit) {
  this.activity = activity;

  try {
    this.time = new TimeUnit(duration, unit);
  } catch (Exception e) {
    System.err.println("Time unit not created! Falling back to 0 m");
    System.err.println(e.getMessage());
    this.time = new TimeUnit(0, unit);
  }
}
```

::: info

In a catch block, we can try to do something reasonable to prevent the app from
crashing. Falling back to `0` is not terrible, and is about the best thing the
`Exercise` class itself could do.

In this example, though it is probably not a good idea to handle the error in
the `Exercise` class and instead pass the error up to the next calling method.

:::

## Passing an error up

If some code is going to throw an error, but we don't want to deal with it here,
we can pass it on to the calling method. This is sometimes called "re-throwing"
the error.

The `Exercise` constructor will re-throw the error:

```java{1}
public Exercise(String activity, double duration, String unit) throws Exception {
  this.activity = activity;
  this.time = new TimeUnit(duration, unit);
}
```

Now, any code which uses this method must handle the error instead:

```java
@Override
public void run() {
  try {
    Exercise exercise = new Exercise(activity, duration, unit); // <-- maybe throws
    ExerciseCommand.file.writeLine(exercise.toCSV());
  } catch (Exception e) {
    System.err.println("Unable to create exercise. Error:");
    System.err.println(e.getMessage());
  }
}
```

Note that this error originated in the `TimeUnit` class, and passed through the
`Exercise` class to be dealt with in the `ExerciseController` class.
