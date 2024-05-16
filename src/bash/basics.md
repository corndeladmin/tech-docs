# Bash basics

<Vimeo id="947051708" />

::: tip

If you're working on Windows, this guide assumes you're working in WSL. There's
a quickstart guide to setting up WSL in the
[installation steps](/bash/installation-windows.html).

:::

## Running a command

Open a terminal and run

```bash
echo "Hello, Bash!"
```

to print a cheery message in the console.

## Create a directory

Create a `Repos` directory with

```bash
mkdir Repos
```

## Change directory

Enter your new directory with

```bash
cd Repos
```

## Chain commands

You can chain commands with `&&`

```bash
mkdir notes && cd notes
```

## Make a new file

Make a new file with

```bash
touch note1.txt
```

Make multiple files with

```bash
touch note2.txt note3.txt
```

## List a directory

List the contents of the current directory with

```bash
ls
```

or some other directory by passing its path

```bash
ls todos
```

## Move a file

Move a file with

```bash
mv todo2.txt todos
```

## Rename a file

Rename a file with the `mv` command

```bash
mv note2.txt todo2.txt
```

## Delete a file

Delete a file with

```bash
rm note3.txt
```

## Delete a folder

Delete a whole directory with `rm` and some options

```bash
rm -rf todos
```

::: danger

The `todos` folder and everything it contains will be deleted without going into
the recycle bin. Once it's gone, you can never get it back.

:::
