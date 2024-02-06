# Making a CLI

Until now, we haven't actually given users the ability to interact with our
software! In order to track their health, they would have to open our code in
the editor and modify the contents of `app.js`.

```js
// app.js
import DiaryEntry from './classes/DiaryEntry.js'
import Meal from './classes/Meal.js'
import Workout from './classes/Workout.js'

const entry = new DiaryEntry('I learned how to use Node.js today!', 8) // [!code --]
const meal = new Meal('Aubergine curry', 1250) // [!code --]
const workout = new Workout('Yoga', 30) // [!code --]

const entry = new DiaryEntry("I'm learning to make a CLI!", 8.5) // [!code ++]
const meal = new Meal('Cheese sandwich', 900) // [!code ++]
const workout = new Workout('Dodgeball', 15) // [!code ++]

entry.print()
meal.print()
workout.print()
```

That is not a great user experience! Let's make a command line interface (CLI)
for them.

## Installing commader

We're going to be using [commander](https://github.com/tj/commander.js?) to
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
because we want the users to get the code in the commander package, as it is
required to make the CLI actually work!

## Setting up your CLI

In `app.js`, we will import an object called `program` from the commander
package.

```js{2}
// app.js
import { program } from 'commander'

import DiaryEntry from './classes/DiaryEntry.js'
import Meal from './classes/Meal.js'
import Workout from './classes/Workout.js'

program.version('0.1.0').description('A CLI health tracker')
```

::: info

The line `import { program } from 'commander'` actually reaches inside the
`node_modules` folder and imports code from there. The `program` object is a
named export from `node_modules/commander/index.js`. However, when importing
from `node_modules`, you don't need to give the full path.

:::

In the final line of this code, we call two setter methods which configure some
meta information about our CLI. This is pretty typical of how commander works -
you build your CLI by calling setter methods on the `program` object.

We're now ready to expose some functionality to the user.

## Adding a command

To allow our users to log a new meal, we will tell our CLI to listen for
commands from the user.

```js
// app.js
import { program } from 'commander'

import DiaryEntry from './classes/DiaryEntry.js'
import Meal from './classes/Meal.js'
import Workout from './classes/Workout.js'

program.version('0.1.0').description('A CLI health tracker')
// [!code focus:10]
program
  .command('meal <name> <calories>')
  .description('Log a new meal')
  .action((name, calories) => {
    const meal = new Meal(name, parseInt(calories))
    meal.print()
  })

program.parse(process.argv) // [!code highlight]
```

Let's break this down:

- `.command('meal <name> <calories>')` creates a new command which allows the
  user to run `node app.js meal 'Lasagne' 1100` on the command line.
- The `.description()` provides some documentation about what this command is
  for, so that when the user runs `node app.js help` there's some useful
  guidance on what each command does.
- Finally, `.action()` accepts a function as its argument - it passes the values
  provided by the user so that we can get them as javascript variables and do
  whatever we like with them.

The last line is highlighted - this should always go at the _end_ of the file.
This gives commander access to the values the user passes as `<name>` and
`<calories>` so that it can hand them over to the `.action()` for us.

## Using the command

The CLI should now be fully functioning. From the project root, open a terminal
and run

::: code-group

```bash
node app.js meal 'Lasagne' 1100
```

```console [output]
You ate Lasagne.
1100 kCal.
```

:::

Now you've seen how you can expose javascript functions and methods to users on
the command line, you can build anything you like. The more skills you learn,
the more features you can provide to your users.
