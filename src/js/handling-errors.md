# Handling errors

Deciding what to do when things go wrong is important. This is especially true
when we have users and other apps depending on our code. Errors can cause our
program to crash. Sometimes that is a good thing, because it would be unsafe for
the program to continue, but often our program can recover from an error. We
just need to tell it how.

::: info

In programming, the words _error_ and _exception_ are often used
interchangeably. _Exception_ is probably the more accurate term in this context,
as it refers to an issue which disrupts the flow of our program, whereas _error_
is a broader term. We'll be using _error_ in this guide.

:::

## Try and catch

If there is a block of code we think might go wrong for some reason, we can use
Javascript's `try` block syntax to attempt to execute the code block and, if
something goes wrong, the `catch` block will run instead of crashing the
program.

Suppose we have some users

```js
const users = [
  {
    username: 'usain12',
    email: { address: 'usain@gmail.com', verified: true }
  },
  {
    username: 'maria_xox'
  },
  {
    username: 'yaz0',
    email: { address: 'yaz0@hotmail.co.uk', verified: false }
  }
]
```

and we want to report their email addresses

::: code-group

```js
for (let user of users) {
  console.log(user.email.address)
}
```

```console [output]
usain@gmail.com

file://~/Repos/health-tracker/grades.js:16
  console.log(user.email.address)
                         ^

TypeError: Cannot read properties of undefined (reading 'address')
    at file://~/Repos/health-tracker/grades.js:16:26
    at ModuleJob.run (node:internal/modules/esm/module_job:192:25)
    at async DefaultModuleLoader.import (node:internal/modules/esm/loader:228:24)
    at async loadESM (node:internal/process/esm_loader:40:7)
    at async handleMainPromise (node:internal/modules/run_main:66:12)

Node.js v20.5.1
```

:::

Checking the output, we see that this innocent looking code actually crashes the
program and brings our app to a halt. The problem is clear: user `maria_xox`
doesn't have an email, so we're trying to read `.address` of `undefined`.

```console
TypeError: Cannot read properties of undefined (reading 'address')
```

Instead of crashing the program, let's handle this error with `try` and `catch`

::: code-group

```js
for (let user of users) {
  try {
    console.log(user.email.address)
  } catch (err) {
    console.error(err.message)
  }
}
```

```console [output]
usain@gmail.com

Error for maria_xox: Cannot read properties of undefined (reading 'address')

yaz0@hotmail.co.uk
```

:::

This is much better. The program completes without crashing, and it prints a
message to the user in case something goes wrong.

## Throwing errors

You can create your own errors, too. Let's say we have a user class.

```js
class User {
  static usernames = []

  #username

  constructor(username) {
    this.setUsername(username)
  }

  setUsername(newName) {
    this.#username = newName
    User.usernames.push(newName)
  }
}
```

The problem is, multiple users can have the same username

::: code-group

```js
const u1 = new User('usain11')
const u2 = new User('maria_xox')
const u3 = new User('usain11')

console.log(User.usernames)
```

```console [output]
[ 'usain11', 'maria_xox', 'usain11' ]
```

:::

Let's fix this by throwing an error at the right time.

::: code-group

```js{11-13}
class User {
  static usernames = []

  #username

  constructor(username) {
    this.setUsername(username)
  }

  setUsername(newName) {
    if (User.usernames.includes(newName)) {
      throw new Error(`Username ${newName} is already taken.`)
    }

    this.#username = newName
    User.usernames.push(newName)
  }
}

const u1 = new User('usain11')
const u2 = new User('maria_xox')
const u3 = new User('usain11')

console.log(User.usernames)
```

```console [output]
throw new Error(`Username ${newName} is already taken.`)
          ^

Error: Username usain11 is already taken.
```

:::

Now it is up to the developer utilising this class to decide how to handle this
error. Ideally they should show a nice message to the user and politely request
that they choose a different username.
