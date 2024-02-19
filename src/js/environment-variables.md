# Environment variables

<Vimeo id="913755300" />

## Creating a `.env` file

It is common to store environment variables in the root of your project in a
file called `.env`.

```bash
touch .env
```

::: warning

Your `.env` file should almost never be checked in to version control. The file
can contain sensitive information like database passwords. It is up to the
environment to provide these variables, and they should not be part of the
application code.

:::

With that warning in mind, let's add `.env` to our `.gitignore` file:

```.gitignore
node_modules
.env
```

## Adding environment variables

Inside the `.env` file, we can define some variables.

```.env
DB_USER=superadmin
DB_HOST=localhost
DB_PASSWORD=i8bfWDjhdV-zz3uyL2TaL
```

## The `dotenv` package

The `dotenv` package makes environment variables available on the `process.env`
global object.

```bash
npm install dotenv
```

## Using environment variables

In any file where we want the environment variables to be available, we can
include the line `import 'dotenv/config'` at the top of the file.

::: code-group

```js
// load dotenv at top of file
import 'dotenv/config'

// variables are now available on process.env
const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD
}

console.table(dbConfig)
```

```console [output]
┌──────────┬─────────────────────────┐
│ (index)  │         Values          │
├──────────┼─────────────────────────┤
│   host   │       'localhost'       │
│   user   │      'superadmin'       │
│ password │ 'i8bfWDjhdV-zz3uyL2TaL' │
└──────────┴─────────────────────────┘
```

:::
