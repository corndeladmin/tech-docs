# While loops

<Vimeo id="911915516" />

## Logging numbers

`while` loops will repeat a code block for as long as the condition is true.

::: code-group

```js
let i = 1

while (i < 6) {
  console.log(i)
  i++ // increase i by 1 at the end of each loop
}

console.log('Done!')
```

```[output]
1
2
3
4
5
Done!
```

:::

::: tip

The `i++` is equivalent to `i = i + 1` in javascript. It is very important as it
guarantees the condition `i < 6` eventually fails, avoiding an infinite loop.

:::

## Accumulating a value

Suppose we want to add all the odd numbers less than `100`.

::: code-group

```js
let n = 1
let total = 0 // we'll collect our answer here

while (n < 100) {
  total += n
  n += 2 // so n stays odd
}

console.log(total)
```

```[output]
2500
```

:::

## Looping through an array

If we want to loop through an array, we can use the pointer `i` (or any other
letter) to keep track of the index.

Perhaps we need to find the average rating of a list of books:

::: code-group

```js
function average(arr) {
  let i = 0
  let total = 0

  while (i < arr.length) {
    total += arr[i]
    i++
  }

  return total / arr.length
}

const ratings = [4.25, 3.34, 2.6, 2.74, 2.36, 2.32, 3.94, 2.73]
console.log(average(ratings))
```

```console [output]
3.035
```

:::
