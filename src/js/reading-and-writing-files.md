# Reading and writing files

<Vimeo id="903019331"></Vimeo>

## Reading a file

We can read files on the computer

```js
import fs from 'fs/promises'

// read diary.txt as a utf-8 encoded string
const txt = await fs.readFile('./diary.txt', 'utf-8')
console.log(txt)
```

## Appending to a file

We can add new data to the end of a file

```js
// append 'Learned a skill.' to diary.txt, preceded by a new line
await fs.appendFile('./diary.txt', '\nLearned a skill.')
```

## Overwriting a file

We can write to a file using javascript

```js
// write string 'My diary:' to todos.txt
await fs.writeFile('./diary.txt', 'My diary:')
```

::: warning

Before you run `fs.writeFile`, you should know that it **overwrites all data**
at the file path.

Proceed with caution!

:::

## File paths

::: warning

Relative file paths are calculated from the location of the terminal, not the
location of the code.

:::

To ensure the file path always points to the right place, use this pattern

```js
const path = new URL('./diary.txt', import.meta.url)
await fs.appendFile(path, '\nFixed a typo')
```

The `URL` class will construct the absolute path for us by resolving
`./diary.txt` with `import.meta.url`, the absolute path to the _script being
executed_.
