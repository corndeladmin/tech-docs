# Imports and exports

As we continue building our Health Tracker CLI, it's crucial we keep our code
organized and maintainable. One of the best ways to achieve this is by using ES6
modules to separate our code into reusable pieces. This guide will walk you
through the basics of importing and exporting modules in ES6.

## Configuring the project

In order to use ES6 imports, we need to modify our `package.json`. Add a new
line like this:

```json{4}
{
  "name": "health-tracker",
  "version": "1.0.0",
  "type": "module",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "mocha",
    "hello": "echo \"Hello, world!\""
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "mocha": "^10.2.0"
  }
}
```

This tells Node that we're using ES6 modules, so it knows how to handle imports
and exports.

::: info

The other style of modularisation is called CommonJS and is older than the ES6
style. We're recommending ES6 as CommonJS will eventually be deprecated.

:::

## Structuring the project

Let's suppose we're organising our code into three classes:

- `Diary` to monitor our wellbeing
- `Meal` to track our meals
- `Workout` to log our exercise

We will create a directory for these classes. Open a terminal your
`health-tracker` directory and run the following:

::: code-group

```bash
mkdir classes
cd classes
touch Diary.js Meal.js Workout.js
```

```console{2-5} [output]
health-tracker/
├── classes
│   ├── Diary.js
│   ├── Meal.js
│   └── Workout.js
├── .gitignore
├── node_modules/
├── package.json
└── package-lock.json
```

:::

We'll just put a bit of starter code in each one to begin with:

::: code-group

```js [Diary.js]
class Diary {
  static add(txt, mood) {
    console.log(`Your mood score is ${mood}.`)
    console.log(txt)
  }
}

export default Diary // [!code highlight]
```

```js [Meal.js]
class Meal {
  static add(name, calories) {
    console.log(`You ate ${name}.`)
    console.log(`${calories} kCal.`)
  }
}

export default Meal // [!code highlight]
```

```js [Workout.js]
class Workout {
  static add(activity, time) {
    console.log(`You did ${activity} for ${time} minutes.`)
  }
}

export default Workout // [!code highlight]
```

:::

Note the use of `export default` at the bottom of each file.

## Default exports

A crucial part of making our code maintainable is working in different files and
importing code to where we need it. We saw above the use of
`export default Diary` in `classes/Diary.js`. This line makes the `Diary` class
available for use in other files. But this doesn't happen automatically - we
have to import the `Diary` class where we want to use it.

Let's create a file called `app.js` in the root of the `health-tracker` project.
This is the file where we'll interact with our classes.

::: code-group

```bash
touch app.js
```

```console [output]
health-tracker/
├── app.js // [!code highlight]
├── classes
│   ├── Diary.js
│   ├── Meal.js
│   └── Workout.js
├── .gitignore
├── node_modules/
├── package.json
└── package-lock.json
```

:::

In `app.js`, we'll import the three classes:

::: code-group

```js
import Diary from './classes/Diary.js'
import Meal from './classes/Meal.js'
import Workout from './classes/Workout.js'

// Now we can use our classes in app.js!
Diary.add('I learned how to use Node.js today!', 8)
Meal.add('Aubergine curry', 1250)
Workout.add('Yoga', 30)
```

```console [output]
Your mood score is 8.
I learned how to use Node.js today!

You ate Aubergine curry.
1250 kCal.

You did Yoga for 30 minutes.
```

:::

## Named exports

With `export default` we are generally exporting one thing. With named exports,
however, we can export multiple things from one file. The general pattern is
just to put the `export` keyword on the front of the thing you're exporting.
Note that this changes the way we import it, as we'll see in the below example.

Let's create a file `utils.js` which will contain useful stuff across our
project.

::: code-group

```bash
touch utils.js
```

```console [output]
health-tracker/
├── app.js
├── classes
│   ├── Diary.js
│   ├── Meal.js
│   └── Workout.js
├── .gitignore
├── node_modules/
├── package.json
├── utils.js // [!code highlight]
└── package-lock.json
```

:::

We'll `export` and `const` and a `function` from this file, then `import` and
use them in our classes.

::: code-group

```js{2,7} [utils.js]
// named function export
export function toPercentage(numerator, denominator) {
  return ((numerator / denominator) * 100).toFixed(2)
}

// named constant export
export const units = {
  energy: 'kCal',
  time: 'minutes',
  mood: '%'
}
```

```js{1} [Diary.js]
import { units, toPercentage } from '../utils.js'

class Diary {
  static add(txt, mood) {
    const moodPercent = toPercentage(mood, 10)
    console.log(`Your mood score is ${moodPercent}${units.mood}.`)
    console.log(txt)
  }
}

export default Diary
```

```js{1} [Meal.js]
import { units } from '../utils.js'

class Meal {
  static add(name, calories) {
    console.log(`You ate ${name}.`)
    console.log(`${calories} ${units.energy}.`)
  }
}

export default Meal
```

```js{1} [Workout.js]
import { units } from '../utils.js'

class Workout {
  static add(activity, time) {
    console.log(`You did ${activity} for ${time} ${units.time}.`)
  }
}

export default Workout
```

:::

Notice how we use curly brackets when importing named exports.

::: tip

When importing a default export, brackets aren't necessary, but when importing
named exports, we use `{}`, even if just importing a single named export.

:::

Whilst there are a few more tips and tricks for importing and exporting, we've
now got everything we need to modularise our code.
