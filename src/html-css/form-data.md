# Form data

## The submit event

When we get a reference to a form element, we can listen for its `'submit'`
event.

::: code-group

```js
const reviewForm = document.querySelector('#review-form')

reviewForm.addEventListener('submit', event => {
  // stop the page from refreshing
  event.preventDefault()
})
```

```html
<form id="review-form">
  <textarea name="content"></textarea>

  <input name="score" type="number" />

  <button type="submit">Submit</button>
</form>
```

:::

The `event` parameter is an object which the browser passes to our handler
function. It contains information about the event which just happened, such as
which element the event came from.

::: info

Because we intend to handle the form data with JavaScript, we don't want the
form submission to trigger a page refresh (the default behaviour). Calling
`event.preventDefault()` stops the page from reloading.

:::

## Getting the form data

we can pass a reference to the `<form>` element to the `FormData` class in order
to create a form data object. This object will contain key value pairs: the key
is the `name` property of the form input, and the value is the user's inputted
data.

```js{4-6}
reviewForm.addEventListener('submit', event => {
  event.preventDefault()

  const formData = new FormData(reviewForm)
  console.log(formData.get('content')) // Amazing movie!
  console.log(formData.get('score')) // 5
})
```

## Converting to JSON

Unfortunately, there is no pretty way to convert form data to JSON.

```js
// get a reference to the form
const formData = new FormData(reviewForm)

// empty object to fill
const formObject = {}

// loop through and transfer data to the object
for (let [key, value] of formData.entries()) {
  formObject[key] = value
}

// convert to JSON
const formJSON = JSON.stringify(formObject)

console.log(formJSON) // {"content":"Amazing film!","score":"5"}
```

Or as an esoteric one-liner:

```js
const formJSON = JSON.stringify(
  formData.entries().reduce((o, [k, v]) => ({ ...o, ...{ [k]: v } }), {})
)
```
