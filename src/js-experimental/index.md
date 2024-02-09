---
cases:
  - console.log(hello('a'))
  - console.log(hello('b'))

expected:
  - Hello, a!
  - Hello, b!
---

# Experiments

The usual codeblocks in vitepress are pretty

```js
function hello(word) {
  const msg = `Hello, ${word}!`
  return msg
}

console.log(hello('vitepress'))
```

but I'd like to make it editable.

## Editor

Below is an editor component made with CodeMirror. You can wrap normal fenced
codeblock in markdown with the `<CodeMirror>` component to make it editable.

There is some work to be done to make the appearance more similar to regular
syntax highlighted code in vitepress, but it's a start.

<CodeMirror>

```js
function hello(word) {
  const msg = `Hello, ${word}!`
  return msg
}

console.log(hello('codemirror'))
```

</CodeMirror>

## Repl

Even better would be an editor that can run the code. There's a Judge0 backend
powering this which means we can do basic stdin/stdout/stderr streams with the
user code in most languages.

<Repl>

```js
function hello(word) {
  const msg = `Hello, ${word}!`
  return msg
}

console.log(hello('judge0'))
```

</Repl>

## Exercise

The last thing is to try and get some testing working. It's a bit more
challenging, but we should be able to append some function calls to the users
code to get the expected stdout. Of course, we need to make sure they aren't
interfering with stdout by `console.log`ging everywhere.

::: info Exercise

Your challenge is to create a function called `hello` which take one string
parameter `word`.

It should return `'Hello, word!`

E.g. `hello('testing') => 'Hello, testing!'`

:::

<Exercise>

```js
function hello(word) {
  // todo
}
```

</Exercise>
