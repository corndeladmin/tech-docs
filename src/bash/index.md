# Command line basics

Navigating the command line is a skill that can greatly enhance your efficiency
as a programmer or system administrator. It allows direct communication with
your operating system via specific commands. This guide will demonstrate command
line basics. We'll cover essential commands and provide explanations for their
use.

This guide assumes you are using a bash flavoured shell, so Linux or macOS.

::: tip

If you are a Windows user, it is recommended to install the following:

- [Windows Subsystem for Linux](https://learn.microsoft.com/en-us/windows/wsl/setup/environment).
- [Windows Terminal](https://www.microsoft.com/store/productId/9N8G5RFZ9XK3).

:::

## Opening a terminal

### Linux

Use the shortcut `Ctrl + Alt + T` in most distributions. Alternatively, you can
find it in your applications menu, often labeled as "Terminal" or "Console".

### macOS

Press `Cmd + Space` to open Spotlight, type "Terminal", and press Enter. You can
also find the Terminal in the Utilities folder within the Applications folder.

### Windows

Press `Win + R` (windows key and R) on your keyboard to open the Run dialogue.
Type `powershell` and press enter to open powershell.

In the powershell window, type `wsl` and hit enter. This will open a bash
terminal in WSL.

## Listing directories

With a terminal open, you should see the location of the terminal session to the
left of your cursor, followed by a `$`. This is know as your working directory.

To see what is inside the working directory, type `ls` and hit enter.

::: tip

Be sure to click the **output** tab in the examples to show you what a sample
output might look like. Try out these commands on your own computer to get a
feel for how they work.

:::

::: code-group

```bash
/home/user$ ls
```

```[output]
Documents
Downloads
Game_of_Thrones_S01E04.mkv
Music
notes.txt
Videos
```

:::

This shows all the subdirectories (subfolders) and files in the working
directory.

## Changing directory

We use `cd` to change our working directory like this:

::: code-group

```bash
/home/usr$ cd Documents
/home/usr/Documents$ ls
```

```[output]
CV.docx
diary.txt
Spreadsheets
```

:::

Often, you'll find yourself typing `ls` to see what's there, and `cd` to enter
into one of the subdirectories, and `ls` again to see what's there.

## Creating files and folders

To create a new file, you can use the `touch` command, followed by the desired
name of the file.

::: code-group

```bash
/home/usr/Documents$ touch todo-1.txt
/home/usr/Documents$ ls
```

```[output]
CV.docx
diary.txt
Spreadsheets
todo-1.txt
```

:::

To make a new directory, we use `mkdir` followed by the desired directory name.

::: code-group

```bash
/home/usr/Documents$ mkdir TODOS
/home/usr/Documents$ ls
```

```[output]
CV.docx
diary.txt
Spreadsheets
todo-1.txt
TODOS
```

:::

## Moving things

To **move** a file to a different location, use `mv` followed by the file you
want to move and then the desired location.

::: code-group

```bash
/home/usr/Documents$ mv todo-1.txt TODOS
/home/usr/Documents$ ls TODOS
```

```[output]
todo-1.txt
```

:::

Notice that we used `ls TODOS` to list the contents of `TODOS` without needing
to `cd` into it. This same concept applies to most commands.

::: tip

We can use `mv` to rename a file, too! Use `mv driay.txt diary.txt` to rename a
file without changing its location.

:::

## Copying things

To **copy** a file, use `cp` followed by the file to copy and then the name of
the new file.

::: code-group

```bash
/home/usr/Documents$ cp TODOS/todo-1.txt TODOS/todo-2.txt
/home/usr/Documents$ cd TODOS
/home/usr/Documents/TODOS$ ls
```

```[output]
todo-1.txt
todo-2.txt
```

:::

The files `todos-2.txt` now has the same contents as `todos-1.txt`.

Note that `cp` and `mv` can be used on whole directories, not just files.

## Move out of a directory

To get out of a directory, we use `cd ..` like this:

```bash
/home/usr/Documents/TODOS$ cd ..
/home/usr/Documents$
```

We can use `cd ../..` to move two directories up, and so on.

## Relative paths

All the the commands used so far can be combined with `..` to perform actions
anywhere in the file system from the working directing without needing to `cd`.
For example, we can work in the `usr` and `Downloads` directories from the
`Documents` directory:

::: code-group

```bash
/home/usr/Documents$ mv ../Game_of_Thrones_S01E04.mkv ../Downloads
/home/usr/Documents$ ls ../Downloads
```

```[output]
Game_of_Thrones_S01E04.mkv
node-v20.11.0-linux-x64.tar.xz
summer-vibes-vlog-music.mp3
```

:::
