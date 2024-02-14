# Making a CLI

Until now, we haven't actually given users the ability to interact with our
software! In order to track their health, they would have to open our code in
the editor and modify the contents of `app.js`.

::: code-group

```js
// app.js
import DiaryEntry from './models/DiaryEntry.js'
import Meal from './models/Meal.js'
import Workout from './models/Workout.js'

const entry = new DiaryEntry('I learned how to use Node.js today!', 8) // [!code --]
const meal = new Meal('Aubergine curry', 1250) // [!code --]
const workout = new Workout('Yoga', 30) // [!code --]

const entry = new DiaryEntry("I'm learning to make a CLI!", 8.5) // [!code ++]
const meal = new Meal('Cheese sandwich', 900) // [!code ++]
const workout = new Workout('Dodgeball', 15) // [!code ++]

console.log(entry)
console.log(meal)
console.log(workout)
```

```console [output]
DiaryEntry { txt: "I'm learning to make a CLI!", mood: 8.5 }
Meal { name: 'Cheese sandwich', calories: 900 }
Workout { activity: 'Dodgeball', time: 15 }
```

:::

That is not a great user experience. Let's make a **command line interface**
(CLI) for them.

## Installing Commader

We're going to be using [Commander](https://github.com/tj/commander.js) to
create our CLI. It is a very common package which makes CLI development much
easier, and we can install it with npm:

::: code-group

```bash
npm install commander
```

```console [output]

added 1 package, and audited 79 packages in 554ms

20 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

:::

Notice that we did not use the `-D` flag when installing commander. This is
because we want the users to get the code in the Commander package, as it is
required to make the CLI actually work.

## Setting up your CLI

To make our CLI, we will create a new `program` with Commander. Let's delete
`app.js` and make the file `cli/index.js`:

::: code-group

```bash
rm app.js
mkdir cli
touch cli/index.js
```

```console [output]
health-tracker
├── app.js // [!code --]
├── cli // [!code ++]
│   └── index.js // [!code ++]
├── models
│   ├── DiaryEntry.js
│   ├── Meal.js
│   └── Workout.js
├── node_modules/
├── package.json
└── package-lock.json
```

:::

In `cli/index.js`, we will make our Commander `program`:

```js
// cli/index.js
import { program } from 'commander'

program.version('0.1.0').description('A CLI health tracker')

program.parse(process.argv)
```

That final means when the user types `node cli meal add "Pizza" 120`, Commander
will read through the user input and parse out the `"Pizza"` and `120` for us.

## Create a command

Our CLI doesn't actually do anything yet! To make it work, we will add
**controllers**. A controller receives a request from the users, and talks to
the models to make things happen.

Let's create a file for each controller we intend to create:

::: code-group

```bash
touch cli/diary.js
touch cli/meal.js
touch cli/workout.js
```

```console [output]
health-tracker
├── app.js
├── cli
|   ├── diary.js // [!code ++]
|   ├── index.js
|   ├── meal.js // [!code ++]
│   └── workout.js // [!code ++]
├── models
│   ├── DiaryEntry.js
│   ├── Meal.js
│   └── Workout.js
├── node_modules/
├── package.json
├── package-lock.json
└── utils.js
```

:::

Now we create a controller for meals:

```js
// cli/meal.js
import { Command } from 'commander'
import Meal from '../models/Meal.js'

const meal = new Command('meal')

meal
  .command('add <name> <calories>')
  .description('Log a new meal')
  .action((name, calories) => {
    const meal = new Meal(name, parseInt(calories))
    console.log(meal)
  })

export default meal
```

What's this code doing?

- Make a new `meal` command to handle inputs like `node cli meal`
- Make an `add` subcommand to handle `node cli meal add`
- Take the arguments (e.g. `"Pizza"`, `120`) and pass them to the `Meal` model

## Register the command

We have a `program` in `cli/index.js` and a `meal` controller in `cli/meal.js` -
we need to hook them up. In `index.js`, we do

```js
import { program } from 'commander'
import meal from './meal.js' // [!code ++]

program.version('0.1.0').description('A CLI health tracker')

program.addCommand(meal) // [!code ++]

program.parse(process.argv)
```

We've added the `meal` command to our `program` - now it's ready to use.

## Use the command

The CLI should now be fully functioning. From the project root, open a terminal
and run

::: code-group

```bash
node cli meal add 'Lasagne' 1100
```

```console [output]
Meal { name: 'Lasagne', calories: 1100 }
```

:::
