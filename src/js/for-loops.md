# For loops

<Vimeo id="911915484" />

## Syntax

`for` loops provide a convenient short syntax for doing loops.

Let's see the same examples we saw for `while` loops in this new format.

::: code-group

```js
for (let i = 1; i < 6; i++) {
  console.log(i)
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

## Accumulating a value

Let's add all the odd numbers less than `100`.

::: code-group

```js
let total = 0

for (let n = 1; n < 100; n += 2) {
  total += n
}

console.log(total)
```

```[output]
2500
```

:::

## Looping through an array

We can still use `i` as a pointer to loop through an array.

::: code-group

```js
function average(arr) {
  let total = 0

  for (let i = 1; i < arr.length; i++) {
    total += arr[i]
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
