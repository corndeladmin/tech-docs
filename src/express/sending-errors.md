# Sending errors

<Vimeo id="932585825" />

## Error codes

When a client makes an HTTP request to the server, the server usually responds
with a status code.

Here are some of the more common status codes.

| Code | Status                | Meaning                                                                          |
| :--: | :-------------------- | :------------------------------------------------------------------------------- |
| 200  | OK                    | The operation has succeeded                                                      |
| 201  | Created               | An entity has been created (e.g. rows inserted into the database)                |
| 204  | No Content            | The operation has succeeded, and the client doesn't need to do anything about it |
| 400  | Bad Request           | The data sent by the client is not valid                                         |
| 401  | Unauthorized          | In order to access this endpoint, you need to send credentials                   |
| 403  | Forbidden             | The credentials you send are not correct for this endpoint                       |
| 404  | Not Found             | This resource is not found                                                       |
| 500  | Internal Server Error | Something went wrong and the server will not explain why                         |

Detailed information on all status codes can be found on
[MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status).

In particular, we are interested in the error codes, (`400`-`599`).

## Custom error class

To allow us to throw errors with status codes, we can extend the `Error` class.

```js
class AppError extends Error {
  constructor(message, code) {
    super(message)
    this.code = code
  }
}
```

## Throwing custom errors

In our models, we can throw errors that arise from handling data, which is where
most errors occur.

```js {2-4,9-11}
async findById(id) {
  if (isNaN(id)) {
    throw new AppError('ID must be a number.', 400)
  }

  const query = 'SELECT * FROM users WHERE id = ?'
  const results = await db.raw(query, [id])

  if (!results.length) {
    throw new AppError(`User with id ${id} does exist.`, 404)
  }

  return results[0]
}
```

## Catching errors

We can catch the error in our controller and decide what to do with it. In this
case, we pass the error to an error handler.

```js
router.get('/:userId', async (req, res, next) => {
  const { userId } = req.params
  try {
    const user = await User.findById(userId)
    res.json(user)
  } catch (err) {
    next(err)
  }
})
```

## Handling errors

We can send the error code and a useful message to the client by attaching an
error handler to the `app`.

::: warning

We should ensure the message doesn't expose our server's internal workings too
much, as this information could be used by hackers. Better not to send the whole
error object, but rather take full control of the information which is sent to
the client.

:::

```js
app.use((err, req, res, next) => {
  console.error(err)
  if (err instanceof AppError) {
    res.status(err.code).json({ error: err.message })
  } else {
    res.status(500).json({ error: 'Something went wrong.' })
  }
})
```

::: tip

Make sure that this `.use()` is the last method called on `app` before
`.listen()`. It must accept all 4 parameters `(err, req, res, next)` as this is
how express infers that the function is an error handler.

:::
