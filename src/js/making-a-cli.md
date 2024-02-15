# Making a CLI

<Vimeo id="912997998" />

## Installing Commander

We're going to be using [Commander](https://github.com/tj/commander.js) to
create our CLI.

```bash
npm install commander
```

::: info

Notice that we did not use the `-D` flag when installing commander. This is
because we want the users to get the code in the Commander package, as it is
required to make the CLI actually work.

:::

## Setting up your CLI

In `cli/index.js`, we will make our Commander `program`:

```js
// cli/index.js
import { program } from 'commander'

program.version('0.1.0').description('A CLI health tracker')

program.parse(process.argv)
```

::: tip

The line `program.parse(process.argv)` should always go at the end of this file.
It is what allows `program` access to the user's terminal commands, like
`meal add "Pizza" 2000`.

:::

## Create a command

Next, we will add **controllers**. A controller receives a request from the
user, and talks to the models to make things happen.

To create a controller for meals:

```js
// cli/meal.js
import { Command } from 'commander'
import Meal from '../models/Meal.js'

const mealController = new Command('meal')

mealController
  .command('add <name> <calories>')
  .description('Log a new meal')
  .action((name, calories) => {
    const meal = new Meal(name, parseInt(calories))
    console.log(meal)
  })

export default meal
```

What's this code doing?

- Make a new `meal` controller to handle user input like `node cli meal`
- Make an `add` subcommand to handle `node cli meal add "Pizza" 2000`
- Take the arguments (e.g. `"Pizza"`, `2000`) and pass them to the `Meal` model

## Register the command

We have a `program` in `cli/index.js` and a `mealController` in `cli/meal.js` -
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
