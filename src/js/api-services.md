# API Services

When working with an API, we will be using `fetch` a lot, and it can become
tiresome having to type out all the boilerplate for each fetch request.

It can be very handy to put a `services` directory in your project and create
convenient, pre-configured methods for working with each API service you need in
your project.

## Creating a service

We'll keep working with the Nutritionix API in our health tracker app. Let's
open a terminal and run

```bash
mkdir services
cd services
touch nutritionix.js
```

In this new file, we'll create an object which encapsulates all the
functionality we need. Note that since this is not a class of objects, we're
using an object literal `{}` rather than a `class`.

```js

```
