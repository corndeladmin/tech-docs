# Windows

<Vimeo id="947333256" />

Follow the quick steps below, or head over to the
[official docs](https://code.visualstudio.com/docs/setup/windows) for more
information.

1. Head over to the [downloads page](https://code.visualstudio.com/) and
   download the package for Windows.

1. Install the downloaded package and launch VS Code.

1. Open the "Extensions" menu on the left - you can either locate the button or
   hit `Ctrl + Shift + X` on your keyboard.

1. Search for the official WSL plugin from Microsoft and install it.

1. Close VS Code, open a WSL terminal and type `code --version` to make sure it
   is installed properly.

::: info

Even though you are using WSL, you should still install VS Code directly onto
your Windows operating system. Once installed, you can open any project in your
WSL filesystem by navigating to the project folder in WSL (e.g.
`cd ~/Repos/notes`) and running `code .`.

:::
