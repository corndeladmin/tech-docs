# Handling errors

<Vimeo id="913755353"></Vimeo>

## Throwing errors

To alert other developers that something has gone wrong which must be handled or
else the program will crash, we can throw an error.

```js
class Meal {
  constructor(name, calories) {
    if (calories < 0) {
      throw new Error('Calories cannot be negative.')
    }

    this.name = name
    this.calories = calories
  }
}
```

## Handling errors

If a block of code could throw an error when it is run, we wrap it in and `try`
and `catch` block.

```js
try {
  const meal = new Meal('Ice cream', -500)
} catch (error) {
  console.log('There seems to have been a problem!')
  console.log(error.message)
}
```

Now, the error no longer causes the program to crash.
