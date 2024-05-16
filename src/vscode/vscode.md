# VS Code

We use VS Code as our text editor throughout the tech docs. There are a couple
of things to know about working with VS Code and bash.

## Installing VS Code

The [download page](https://code.visualstudio.com/download) for VS Code should
have everything you need to get VS Code installed and running.

::: warning

If you are given an option such as "add `code` to your PATH" or similar, make
sure it is checked - you definitely want VS Code adding to your path as this
will enable you to open projects from the command line.

:::

::: details Windows users

If you're working in WSL on Windows, you should:

1. Install VS Code directly onto your Windows system as normal.

1. Open VS Code and look for the Extensions menu on the left hand side of the
   screen. (You should also be able to press `Ctrl + Shift + X`).

1. In the extensions search bar, type WSL and install the
   [WSL plugin from Microsoft](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl).

1. Close VS Code

1. Restart WSL, and follow the rest of this guide.

:::

## Opening a project

Let's say you have a project called `notes` located at `~/Repos/notes`.

Open a terminal on your computer, and navigate to your project:

```bash
cd ~/Repos/notes
```

Now, to open this project in VS Code, run

```bash
code .
```

Don't miss out the dot `.` at the end! This means "open the **current working
directory** in VS Code". Without the `.`, VS Code will open without opening the
project.

::: details Windows users

If you're working on WSL in Windows, it is recommended to always open projects
using this method:

1. open WSL

1. `cd` to the project

1. run `code .` from the project folder

If you open VS Code first and then search for your project, then VS Code might
not attach to WSL and some commands might not work properly.

:::

## Built in terminal

To access the built-in terminal in VS Code, click "View" in the menu bar at the
top, and look for "Terminal".

You can click "Terminal" and it should pop open a terminal at the bottom of the
screen.

![VS Code terminal pane](image.png)

The shortcut for opening the integrated terminal should be displayed in the
"View" menu next to "Terminal." It is usually `Ctrl + '` or similar.

## Add some text

You should be able to open `todos/todo-1.txt`. Open it up and use VS Code to add
some text.

```txt
1. Walk the dog
2. Clean the car
```

You can even use VS Code's built-in terminal to make and open new files. Try

```bash
touch note-2.txt
code note-2.txt
```

By popping open a terminal with `Ctrl + '` and using the terminal to create and
open directories and files, you can keep your hands on your keyboard and save a
bit of time and effort reaching for the mouse.
