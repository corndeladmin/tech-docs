# Regular expressions

Regular expressions, or 'regex,' are patterns used to match character
combinations in strings. In JavaScript, regex is a powerful tool for searching,
replacing, and extracting text.

## Basic syntax

When we are searching some text for a particular pattern, we define the pattern
in forward slashes like this:

```js
const pattern = /cat/
```

We can use `test()` to check whether a pattern exists in a string. It returns a
boolean indicating whether the pattern is found.

```js
const text = 'The cat sat on the mat.'
const pattern = /cat/
pattern.test(text) // true
```

## Dot

The `.` metacharacter matches any single character except a new line.

The pattern below will match `'cat'`, `'mat'`, `'bat'` or anything else which
looks like 'a single character followed by `'at'`'.

```js
const pattern = /.at/

const text1 = 'cat'
const text2 = 'cap'

pattern.test(text1) // true
pattern.test(text2) // false
```

## Searching for a pattern

To do a **global** search for this pattern through some text, we add the `g`
modifier and use the `match()` method:

```js
// add /g for global search
const pattern = /.at/g

const text = 'The cat sat on the mat.'
text.match(pattern) // ['cat', 'mat']
```

## Quantifiers

The `+` quantifier matches 1 or more occurences of the preceeding elements:

```js
const text = 'ac, abc, abbc, abbbc'
const pattern = /ab+c/g
text.match(pattern) // ['abc', 'abbc', 'abbbc']
```

Similarly,

- the `*` quantifier matches 0 or more occurences

- the `?` quantifier matches 0 or 1 occurences

## Matching letters and digits

We can use `\d` to match any digit character:

```js
const text = 'Order 66 was executed at 4:00 PM.'
const pattern = /\d+/g
text.match(pattern) // ['66', '4', '00']
```

We can use `\w` to match any word character (letters, digits, underscores):

```js
const tweet = 'Learning JavaScript is fun! #coding #JavaScript #100DaysOfCode'
const pattern = /#\w+/g
const hashtags = tweet.match(pattern)
console.log(hashtags) // ['#coding', '#JavaScript', '#100DaysOfCode']
```
