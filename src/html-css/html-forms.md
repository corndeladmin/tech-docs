# Forms

<Vimeo id="915091284" />

## The `<form>` element

We create a form using the `<form>` element. The `action` determines the
endpoint which a HTTP request is made to. The `method` determines the method of
that request.

```html
<form action="/review" method="post">
  <!-- inputs here -->
</form>
```

## Text and number inputs

We can make inputs of different types, such as text and number.

```html
<label for="movie-title">Movie title:</label>
<input type="text" id="movie-title" name="movie-title" />

<label for="rating">Rating:</label>
<input type="number" id="rating" name="rating" />
```

## Drop down inputs

We can create a drop down with values to select from using the `<select>`
element.

```html
<label for="genre">Genre</label>
<select id="genre" name="genre">
  <option value="action">Action</option>
  <option value="comedy">Comedy</option>
  <option value="drama">Drama</option>
</select>
```

The `value` of an option is what actually gets passed to the backend - the text
inside the `<option>` tag is what gets displayed to the user.

## Textarea

A textarea is a bigger, resizeable text input.

```html
<label for="review">Your Review:</label>
<textarea id="review" name="review"></textarea>
```

## Submit

An `<input>` with `type="submit"` displays a button which will submit the form
(i.e. it will make a request with the `method` of the form to the endpoint given
in the `action` of the form.)

```html
<input type="submit" value="Submit Review" />
```
