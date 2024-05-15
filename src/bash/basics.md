# Command line basics

Let's learn some basic skills on the command line. Make sure you have completed
the [installation steps](/bash/installation.html) before following this guide.

::: tip

If you're working on Windows, this guide assumes you're working in WSL. There's
a quickstart guide to setting up WSL in the
[installation steps](/bash/installation.html), but you might also be interested
in the
[official docs](https://learn.microsoft.com/en-us/windows/wsl/setup/environment).

:::

## Create a directory

A directory is a folder. They contain files and other directories.

Open up a terminal and run

```bash
cd ~
```

This will navigate your terminal to your user's home directory. The `cd` stands
for "change directory".

Now, run

```bash
mkdir Repos
```

This will create a directory inside your home directory called `Repos`. This is
where you can keep all of your projects (i.e. repositories) for this course, and
any other hobby projects you create in the future.

::: warning

Don't create your `Repos` directory in a location which is monitored by tools
such as Dropbox or OneDrive. It is not a good idea to have these file syncing
tools running on your software projects for security and performance reasons.

:::

## Switching directories

Run

```bash
cd Repos
```

to navigate into the new `Repos` directory.

Run

```bash
mkdir notes && cd notes
```

to create a new `notes` directory and navigate into it in a single step.

::: tip

The `&&` operator can be used in lots of different scenarios. It waits for the
previous command to complete, and then runs the next command.

:::

## Create a file

::: tip

In case you navigated away from `notes`, you can run

```bash
cd ~/Repos/notes
```

to get back to your `notes` directory.

:::

Let's create a new note in our `notes` directory:

```bash
touch note-1.txt
```

The `touch` command will create a file if it doesn't exist.

## Listing directories

To list the contents of the current directory, simply run

```bash
ls
```

You can also pass a path if you want to see the contents of some other
directory, for example

```bash
ls ~/Repos/notes
```

will list the contents of the `notes` directory. You should see your
`note-1.txt` file listed in here.

## Moving a file

Let's make a `todos` directory in our `notes` project:

```bash
mkdir todos
```

We can move the `note-1.txt` into the new directory:

```bash
mv note-1.txt todos/note-1.txt
```

We can also use `mv` to rename files:

```bash
mv todos/note-1.txt todos/todo-1.txt
```

The `note-1.txt` file is now called `todo-1.txt`

## Summary

We've learned how to:

- navigate directories with `cd`
- create directories with `mkdir`
- create files with `touch`
- list the contents of a directory with `ls`
