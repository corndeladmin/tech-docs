# Handling errors

Things go wrong in computer programs. This is especially true when you start
interacting with users. If we don't anticipate and deal with errors, they can
crash our programs and leave the users mystified with what it going on.

## Throwing errors

We can use `throw new Error()` to signal that something has gone wrong. When we
throw an error, it means other developers are forced to handle it and not assume
everything worked as intended. It's a way of trying to anticipate the different
ways your software might go wrong, and communicating useful information when it
does.

For example, our `Meal` class expects a positive number for the `calories`
property. We can check, and throw an error if this isn't the case.

```js{0}
// models/Meal.js
import { units } from '../utils.js'

class Meal {
  constructor(name, calories) {
    if (calories < 0) { // [!code ++]
      throw new Error('Calories must be positive.') // [!code ++]
    } // [!code ++]

    this.name = name
    this.calories = calories
  }
}

export default Meal
```

## Unhandled errors

Now, if we try to use our CLI improperly (e.g. passing `-500` as an argument to
`calories`), we get an _unhandled error_ and the program crashes.

::: code-group

```bash
node cli meal add "Ice Cream" -- -500
```

```console [output]
file://~/Repos/health-tracker/models/Meal.js:6
      throw new Error('Calories must be positive.')
            ^

Error: Calories must be a positive.
    at new Meal (file://~/Repos/health-tracker/models/Meal.js:6:13)
    at Command.<anonymous> (file://~/Repos/health-tracker/cli/meal.js:10:18)
    at Command.listener [as _actionHandler] (~/Repos/health-tracker/node_modules/commander/lib/command.js:523:17)
    at ~/Repos/health-tracker/node_modules/commander/lib/command.js:1375:65
    at Command._chainOrCall (~/Repos/health-tracker/node_modules/commander/lib/command.js:1272:12)
    at Command._parseCommand (~/Repos/health-tracker/node_modules/commander/lib/command.js:1375:27)
    at ~/Repos/health-tracker/node_modules/commander/lib/command.js:1161:27
    at Command._chainOrCall (~/Repos/health-tracker/node_modules/commander/lib/command.js:1272:12)
    at Command._dispatchSubcommand (~/Repos/health-tracker/node_modules/commander/lib/command.js:1157:25)
    at Command._parseCommand (~/Repos/health-tracker/node_modules/commander/lib/command.js:1343:19)
```

:::

While this is better than allowing a negative number of calories, it is a bit
mystifying for the user. The next step it to correctly handle this error.

## Try and catch

Javascript has a special syntax for tentatively running a block of code, and
allowing us to respond appropriately to any thrown errors. We do this using the
keywords `try` and `catch`.

```js{0}
// cli/meal.js
import { Command } from 'commander'
import Meal from '../models/Meal.js'

const meal = new Command('meal')

meal
  .command('add <name> <calories>')
  .description('Log a new meal')
  .action((name, calories) => {
    try { // [!code ++]
      const meal = new Meal(name, parseInt(calories))
      console.log(meal)
    } catch (error) { // [!code ++]
      console.log('Aw, snap! There seems to have been an error:') // [!code ++]
      console.error(error.message) // [!code ++]
    }
  })

export default meal
```

::: code-group

```bash
node cli meal add "Ice Cream" -- -500
```

```console [output]
Aw, snap! There seems to have been an error:
Calories must be positive.
```

:::

We have handled the error gracefully: the program no longer crashes, and the
user gets a helpful message.
