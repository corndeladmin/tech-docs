# Environment variables

Understanding how to use environment variables is crucial for creating secure
and flexible applications. This guide will walk you through the basics, offering
clear explanations and practical examples to help you get started.

## Why use environment variables?

Environment variables allow you to manage application configuration separately
from your code. This separation is beneficial for several reasons:

- **Security:** Keep sensitive information like database passwords and API keys
  out of your source code.

- **Flexibility:** Easily change configuration settings without code changes,
  making your application adaptable to different environments (development,
  testing, production).

- **Convenience:** Simplify configuration management, especially in team
  settings or when deploying to cloud platforms.

## The `dotenv` package

We know we can use packages to make our lives easier as developers. For working
with environment variables, we have the `dotenv` package.

Let's install it with

```bash
npm install dotenv
```

## Creating a `.env` file

It is conventional to store environment variables in the root of your project in
a file call `.env`.

```bash
touch .env
```

::: warning

Your `.env` file should never be checked in to version control. The file can
contain very sensitive information like database passwords. It is up to each
person working on the project to manage their own `.env` file for their
environment.

:::

With that warning in mind, lets add `.env` to our `.gitignore` file:

```.gitignore
node_modules
.env // [!code ++]
```

That means git will not commit this file and it won't end up on Github!

## Adding environment variables

Inside the `.env` file, we can define some variables.

```.env
APP_USER=superadmin
APP_PASSWORD=i8bfWDjhdV-zz3uyL2TaL
```

As you can see, the variables are written as key-value pairs. The next thing we
want to do is access these variables from within our code.

## Using environment variables

This is where the `dotenv` package comes in. In any file where we want the
environment variables to be available, we can include the line
`import 'dotenv/config'` at the top of the file, and then the variables will be
loaded into the `process.env` global object for us to use.

Here's what this looks like:

::: code-group

```js
// load dotenv at top of file
import 'dotenv/config'
console.log(process.env.APP_USER)
console.log(process.env.APP_PASSWORD)
```

```console [output]
superadmin
i8bfWDjhdV-zz3uyL2TaL
```

:::

Now that we can access environment variables in our code, we can have a clean
separation between configuration and logic. We can also store and use sensitive
information like database passwords securely without committing them to version
control.
