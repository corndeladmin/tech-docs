# Reading and writing files

<Vimeo id="903019331"></Vimeo>

## Overwriting a file

We can write to a file using javascript

```js
// write string 'My todos' to todos.txt
await fs.writeFile('./todos.txt', 'My todos')
```

::: warning

Before you run `fs.writeFile`, you should know that it **overwrites all data**
at the file path.

Proceed with caution!

:::

## Appending to a file

We can also add new data to the end of a file

```js
// append 'Squash bug' to todos.txt, preceded by a new line
await fs.appendFile('./todos.txt', '\nSquash bug')
```

## Reading a file

We can read files on the computer

```js
import fs from 'fs/promises'

// read todos.txt as a utf-8 encoded string
const txt = await fs.readFile('./todos.txt', 'utf-8')
console.log(txt)
```

## File paths

::: warning

Relative file paths are calculated from the location of the terminal, not the
location of the code.

:::

To ensure the file path always points to the right place, use this pattern

```js
const uri = new URL('./todos.txt', import.meta.url)
await fs.writeFile(uri, 'Fix typo')
```

The `URL` class will construct the absolute path for us by resolving `./hmm.txt`
with `import.meta.url`, the absolute path to the _script being executed_.
