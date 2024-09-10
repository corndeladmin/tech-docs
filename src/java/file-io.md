# Working with the file system

<Vimeo id="1007999939" />

## File utility class

To work with files, it is a good idea to make a utility class.

```java
import java.nio.file.*;
import java.util.List;

public class FileIO {
  private Path filePath;

  public FileIO(String fileName) {
    this.filePath = Paths.get("src", "data", fileName);
  }
}
```

`nio` is a library of tools for working with "input and output".

The `filePath` property saves the location of the file we are working with.
`Paths.get` is from the `nio` library and helps build a correct file path on
different operating systems.

## Reading a file

To read a file, we can use the `Files.readAllLines()` method provided by `nio`.

```java
public List<String> readLines() throws IOException {
  return Files.readAllLines(this.filePath);
}
```

Since `Files.readAllLines()` returns a `List<String>`, we can use list methods
to work with the lines in the file:

```java
public String readLine(int i) throws IOException {
  List<String> lines = this.readLines();
  return lines.get(i);
}
```

## Writing a file

We can overwrite the entire contents of a file with the `Files.write()` method.

```java
public void writeLine(String line) throws IOException {
  Files.write(this.filePath, List.of(line));
}
```

::: danger

This will delete and overwrite the contents of the file. It cannot be restored
once it is deleted.

:::

Note that `Files.write()` expects a list of lines to write, and so we must put
the string to write into a list.

## Appending a file

We can pass `StandardOpenOption.APPEND` an additional argument, which ensures
that the data is appended to the file rather that overwriting.

```java
public void writeLine(String line) throws IOException {
  Files.write(this.filePath, List.of(line), StandardOpenOption.APPEND);
}
```

## CSV

We can use split and join to work with CSV files. We add some utility methods to
our `Meal` class.

```java
public static Meal fromCSV(String row) {
  String[] parts = row.split(",");
  return new Meal(parts[0], Integer.parseInt(parts[1]));
}

public String toCSV() {
  String[] parts = { this.mealName, Integer.toString(calories) };
  return String.join(",", parts);
}
```

Then, in the `AddMeal` command we can save the user information instead of just
printing it back to them.

```java
try {
  Exercise exercise = new Exercise(activity, duration, unit);
  public static FileIO file = new FileIO("exercise.csv");
  file.writeLine(exercise.toCSV());
} catch (Exception e) {
  System.err.println("Unable to create exercise. Error:");
  System.err.println(e.getMessage());
}
```
