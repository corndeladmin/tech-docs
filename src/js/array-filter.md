# Array filter

<Vimeo id="911915599" />

## Using filter

We can use a function which returns `true` and `false` to remove items from an
array.

::: code-group

```js
const pageNumbers = [300, 150, 120, 500, 250]

const shortBooks = pageNumbers.filter(num => num < 200)
console.log(shortBooks)
```

```console [output]
[ 150, 120 ]
```

:::

## Combining with map

We can chain together `.map()` and `.filter()` to transform an array several
times.

::: code-group

```js
const pageNumbers = [300, 150, 120, 500, 250]

const quickReads = pageNumbers
  .filter(num => num < 200)
  .map(num => (num * 1.5) / 60 + ' hours')
```

```console [output]
[ '3.75 hours', '3 hours' ]
```

:::
