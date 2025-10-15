# Split and join

<Vimeo id="1006505554" />

## Using split

In Java, the String class has a split() method that breaks a string into an
array (actually a String[] in Java) based on a specified delimiter.

::: code-group

```java
String genresString = "Fantasy,Sci-Fi,Mystery,Romance";
String[] genresArray = genresString.split(",");
System.out.println(Arrays.toString(genresArray));
```

```console [output]
[Fantasy, Sci-Fi, Mystery, Romance]
```

:::

## Individual letters

If we pass an empty string as our split argument, we get an array with all the
letters of the original string.

::: code-group

```java
String bookTitle = "Persepolis";
String[] titleLetters = bookTitle.split("");
System.out.println(Arrays.toString(titleLetters));
```

```console [output]
[P, e, r, s, e, p, o, l, i, s]
```

:::

## Join

The opposite of splitting is joining. We specify a string to sandwich between
the items in an array, and the array is joined into a single string.

::: code-group

```java
String[] bookTitles = {"The Great Gatsby", "To Kill a Mockingbird", "1984"};
String titlesString = String.join("; ", bookTitles);
System.out.println(titlesString);
```

```console [output]
The Great Gatsby; To Kill a Mockingbird; 1984
```

:::
