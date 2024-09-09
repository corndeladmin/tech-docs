# String Formatting

<Vimeo id="1006505584" />

## Upper and Lowercase

We can change the case of strings with `.toUpperCase()` and `.toLowerCase()`.

::: code-group

```java
String quote = "The house on Mango Street isn’t it.";

System.out.println(quote.toUpperCase());
System.out.println(quote.toLowerCase());
```

```output
THE HOUSE ON MANGO STREET ISN’T IT.
the house on mango street isn’t it.
```

:::

## Slice

We can extract a portion of a string using the `substring()` method.

::: code-group

```java
String quote = "The house on Mango Street isn’t it.";
System.out.println(quote.substring(13, 25));
```

```output
Mango Street
```

:::

## String Formatting

We can interpolate values into strings using `String.format`.

::: code-group

```java
String author = "Min Jin Lee";
String book = "Pachinko";
int year = 2017;

String summary = String.format("%s wrote %s in %d", author, book, year);
System.out.println(summary);
```

```output
Min Jin Lee wrote Pachinko in 2017
```

:::

## Formatting Numbers

We can use `String.format` to format numbers with a specific number of decimal
places.

::: tip

Note that trailing `0`s are included, which makes it good for formatting
currency.

:::

::: code-group

```java
double price = 2.39782;
String displayPrice = String.format("£%.2f", price);
System.out.println(displayPrice);
```

```output
£2.40
```

:::

## Trim

We can remove whitespace from the beginning and end of a string with `trim()`.

::: code-group

```java
String quoteWithWhitespace = "   Stay awhile and listen!   ";
String trimmedQuote = quoteWithWhitespace.trim();
System.out.println(trimmedQuote);
```

```output
Stay awhile and listen!
```

:::
