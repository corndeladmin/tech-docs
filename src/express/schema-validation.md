# Schema validation

<Vimeo id="932619826" />

## Validation libraries

When a client sends us a large object, checking each property one by one is
tedious. There are libraries such as Yup and Joi to help with this. We'll be
using Zod.

## Creating a schema

We can create a schema using Zod.

```js
import { z } from 'zod'

const UserSchema = z.object({
  username: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  avatar: z.string().optional(),
  password: z.string()
})
```

## Validating data

When a user sends us some data (which we will call the `payload`) we need to
check that it matches the schema, i.e. that it has the correct properties and
that they are of the correct type.

```js
const valid = UserSchema.safeParse(payload).success

if (!valid) {
  throw new AppError('User data is not valid.', 400)
}

// if the error is not thrown, we can be confident that
// the payload has the correct properties
```

Do check out the [Zod docs](https://zod.dev/) to find out more about what it can
do.
