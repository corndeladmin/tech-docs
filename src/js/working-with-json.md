# Working with JSON

<Vimeo id="903019272"></Vimeo>

## What is JSON

JSON stands for Javascript Object Notation and is a key/value format for saving
data on the file system and transfering data between services

```json
// config.json
{
  "location": "us-west",
  "days": 7,
  "levels": ["error", "warn"]
}
```

## Reading JSON

To work with JSON as a javascript object, we use `JSON.parse()`

```js
// read data
const uri = new URL('./config.json', import.meta.url)
const data = await fs.readFile(uri)

// parse into js object
const obj = JSON.parse(data)
console.log(obj)
```

## Writing JSON

To write a javascript object to a json file, we use `JSON.stringify()`

```js
// stringify and write an object to a .json file
await fs.writeFile(uri, JSON.stringify(obj))
```
