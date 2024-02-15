# Creating a Node project

<Vimeo id="912998079" />

## Initialising with `npm init`

We make a folder for our project:

```bash
mkdir health-tracker
cd health-tracker
```

To initialise a project inside the folder, you run `npm init -y` in the
terminal:

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

## Running scripts with `npm run`

In `package.json`, you will notice a `"scripts"` key. This is where we can put
terminal commands.

```json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "hello": "echo \"Hello, world!\"", // [!code ++]
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

## Installing packages with `npm install`

::: info

A _package_ is just someone else's code that you download into your project.
This code lives on the npm registry. Anybody can put a package on the registry,
and anybody else can download it.

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
get sent to them.

When you're installing a package that is required to make the app actually work,
don't put the `-D` flag.

:::

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

to add and commit the new files.
