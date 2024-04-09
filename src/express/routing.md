# Routing

<Vimeo id="932486851" />

## Creating a router

To create an express router, we import the `Router` function from express.

```js
import { Router } from 'express'
const router = Router()
```

## Adding endpoints

We can add endpoints to `router` just like we do to `app`, by using the
`.get()`, `.post()`, `.put()` and `.delete()` methods.

```js
router.get('/:userId', async (req, res) => {
  const { userId } = req.params
  const user = await User.findById(userId)
  res.json(user)
})
```

## Attaching the router

We attach our router to `app` using `app.use()`.

```js
app.use('/users', userRouter)
```

Notice that the `/users` prefix is added to all routes in the `userRouter`,
resulting in `/users/:userId` and so on.

## Multiple routers

We usually use routers to split our API routes into separate files, making the
project easier to maintain.

::: code-group

```js [users.js]
import { Router } from 'express'
import User from '../models/User.js'

const router = Router()

router.get('/', async (req, res) => {
  const { limit } = req.query
  const users = await User.findAll(limit)
  res.json(users)
})

router.get('/:userId', async (req, res) => {
  const { userId } = req.params
  const user = await User.findById(userId)
  res.json(user)
})

router.post('/', async (req, res) => {
  const { username, verified } = req.body
  const user = await User.create(username, verified)
  res.json(user)
})

export default router
```

```js [bleets.js]
import { Router } from 'express'
import Bleet from '../models/Bleet.js'

const router = Router()

router.get('/', async (req, res) => {
  const bleets = await Bleet.findAll()
  res.json(bleets)
})

router.get('/:bleetId', async (req, res) => {
  const { bleetId } = req.params
  const bleet = await Bleet.findById(bleetId)
  res.json(bleet)
})

router.post('/', async (req, res) => {
  const { content, userId } = req.body
  const bleet = await Bleet.create(content, userId)
  res.json(bleet)
})

export default router
```

```js [app.js]
import express from 'express'
import userRouter from '../routers/users.js'
import bleetRouter from '../routers/bleets.js'

const app = express()
app.use(express.json())

app.use('/users', userRouter)
app.use('/bleets', bleetRouter)

export default app
```

:::
