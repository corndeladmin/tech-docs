# Modularisation

<Vimeo id="913033408" />

## Configuring the project

In order to use ES6 imports, we need to modify our `package.json`. Add a new
line like this:

```json
{
  "name": "health-tracker",
  "version": "1.0.0",
  "type": "module", // [!code ++]
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

::: info

The other style of importing is called CommonJS and is older than the ES6 style.
We're recommending ES6 as CommonJS will eventually be deprecated.

:::

## Named and default exports

We can use the `export` keyword to make `const`, `function` and `class`
available in other files in our project.

We import named exports with `{}`, but we don't need `{}` to import default
exports.

::: code-group

```js [a.js]
export const x = 7
export const y = 12

const msg = 'Hello from a.js!'
export default msg
```

```js [b.js]
import { x, y } from './a.js'
import msg from './a.js'

console.log(x + y)
console.log(msg)
```

```console [output]
19
Hello from a.js!
```

:::

## Structuring the project

Let's suppose we're organising our code into classes:

- `DiaryEntry` to monitor our wellbeing
- `Meal` to track our meals
- `Workout` to log our exercise

We usually put these types of classes in to a folder called `models`.

::: code-group

```bash
mkdir models
cd models
touch DiaryEntry.js Meal.js Workout.js
```

```console{2-5} [output]
health-tracker/
├── models // [!code ++]
│   ├── DiaryEntry.js // [!code ++]
│   ├── Meal.js // [!code ++]
│   └── Workout.js // [!code ++]
├── .gitignore
├── node_modules/
├── package.json
└── package-lock.json
```

:::

## Exporting the classes

We'll just put a bit of starter code in each one to begin with:

::: code-group

```js [DiaryEntry.js]
class DiaryEntry {
  constructor(txt, mood) {
    this.txt = txt
    this.mood = mood
  }
}

export default DiaryEntry // [!code highlight]
```

```js [Meal.js]
class Meal {
  constructor(name, calories) {
    this.name = name
    this.calories = calories
  }
}

export default Meal // [!code highlight]
```

```js [Workout.js]
class Workout {
  constructor(activity, time) {
    this.activity = activity
    this.time = time
  }
}

export default Workout // [!code highlight]
```

:::

Note the use of `export default` at the bottom of each file. This allows us to
export the class and use it in a different file.

## Importing the classes

Let's create a file called `app.js` in the root of the `health-tracker` project.
We will import our classes here and play around with them.

::: code-group

```bash
touch app.js
```

```console [output]
health-tracker/
├── app.js // [!code ++]
├── models
│   ├── DiaryEntry.js
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

```js{1-3}
import DiaryEntry from './classes/DiaryEntry.js'
import Meal from './classes/Meal.js'
import Workout from './classes/Workout.js'

// Now we can use our classes in app.js!
const entry = new DiaryEntry('I am learning Node!', 8.9)
const meal = new Meal('Aubergine curry', 1250)
const workout = new Workout('Yoga', 30)

console.log(entry)
console.log(meal)
console.log(workout)
```

```console [output]
DiaryEntry { txt: 'I am learning Node!', mood: 8.9 }
Meal { name: 'Aubergine curry', calories: 1250 }
Workout { activity: 'Yoga', time: 30 }
```

:::
