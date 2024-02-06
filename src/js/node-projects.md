# Creating a Node project

Sometimes, we just use javascript as a scripting language - single files here
and there to perform various actions on a computer. Often, however, we will be
building **projects**, where several files need to work together to create an
app. This is where Node and npm can work together to help us out.

## Intialising with `npm init`

Let's suppose we're building a health tracker application, allowing users to log
and view various health related data. We'll add a command line interface so that
users can work with the application using the terminal.

Head to your `Repos` folder (or wherever you'd like the project to live) and
let's create a new directory for our project.

```bash
mkdir health-tracker
cd health-tracker
```

Right now, this `health-tracker` is _just_ a folder, not a project. To
initialise a project inside the folder, you run `npm init -y` in the terminal

::: code-group

```bash
npm init -y
```

```console [output]
Wrote to ~/Repos/health-tracker/package.json:

{
  "name": "health-tracker",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

:::

What did this do? It created a single file on your computer called
`package.json` with something like this inside it:

```json
{
  "name": "health-tracker",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

This contains all the information _about_ our project. Humans and computers can
read this file to get essential information about where things are, what to do,
and what things are called.

## Running scripts with `npm run`

We often use the terminal to manage our project in various ways: running tests,
deploying to the internet, resetting the database, and more. Fortunately, there
is a handy place to put all of these terminal commands and invoke them using a
shortcut.

In `package.json`, you will notice a `"scripts"` key. This is where we can put
terminal commands. Open your `package.json` and add a new command called
`hello`:

```json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "hello": "echo \"Hello, world!\"",
}
```

Now, from anywhere in your project, you can open a terminal and run

::: code-group

```bash
npm run hello
```

```console [output]
> health-tracker@1.0.0 hello
> echo "Hello, world!"

Hello, world!
```

:::

Our `hello` script is pretty silly, but I'm sure you can see how useful it is to
collect all the terminal commands to manage your project in one place and invoke
them with `npm run`.

## Installing packages with `npm install`

Since this is a project using Node and npm, we have an easy way to download
packages to enhance our app.

::: info

A _package_ is just someone else's code that you download into your project.
Sharing packages means that developers don't need to repeat writing the same
functionality over and over again. This code lives on the npm registry. Anybody
can put a package on the registry, and anybody else can download it.

:::

Let's download the `mocha` testing library so that we can run tests in our
project.

::: code-group

```bash
npm install -D mocha
```

```console [output]
added 77 packages, and audited 78 packages in 3s

20 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

:::

::: tip

The `-D` flag in this command installs `mocha` as a _development dependency_.
That means, when we send our app to our customers, all the `mocha` code doesn't
get sent to them. They don't need this code to make the application work, but
_we_ need whilst we're developing it.

When you're installing a package that is required to make the app actually work,
don't put the `-D` flag!

:::

What happened? You should now see a `node_modules` and a `package-lock.json` in
your project.

The new `node_modules` folder includes all of the `mocha` code, and also all of
the packages that `mocha` itself depends on, and so on. In total, more than `70`
packages were installed in order to make `mocha` work.

Finally, let's update our `package.json` so that the `test` script runs `mocha`:

```json
// package.json
{
  "name": "health-tracker",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "mocha", // [!code highlight]
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

## Tracking with `git`

Finally, `cd` to the root of the project (the `health-tracker` directory) and
run

::: code-group

```bash
git init
```

```console [output]
Initialised empty Git repository in ~/Repos/health-tracker/.git/
```

:::

Now, our project is being tracked by `git`, meaning we can do version control.

::: warning

After we did `git init`, the entire contents of the `node_modules` folder is
also tracked. This is undesirable, as this code is available on the npm
registry, and packages receive security updates over time.

Create a file called `.gitignore` (include the `.` at the front) and type
`node_modules` at the top of the file. Make sure to save the file. Now, `git`
will ignore the `node_modules` folder.

:::

Once your `.gitignore` is made, feel free to run

::: code-group

```bash
git add .
git commit -am "initial commit"
```

```console [output]

[main (root-commit) 8f34434] initial commit
 3 files changed, 933 insertions(+)
 create mode 100644 .gitignore
 create mode 100644 package-lock.json
 create mode 100644 package.json

```

:::

We're done! Your project should now look like this

```
health-tracker/
├── .gitignore
├── node_modules
├── package.json
└── package-lock.json
```
