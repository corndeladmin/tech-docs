# Installation

To run our first javascript program, we need to install some software that can
read our code and execute it on the computer. There are some different options
available (including the web browser you're viewing this page on!), but we'll be
using Node.js.

## What is Node?

Node.js is a runtime environment that lets us use JavaScript to build
server-side applications. It's a big leap from the old days where JavaScript was
confined to just browsers. With Node.js, the same language you use to make a
webpage interactive can now power your entire server backend. It's a
game-changer in the world of web development, enabling full-stack JavaScript
development and opening up a whole new world of possibilities.

## What is npm?

The letters in npm stand for _node package manager_, and it allows us to
download additional libraries and packages to enrich the Node development
experience. We'll learn more about npm later in the course!

## Installing Node and npm

The installation method varies a bit depending on your operating system.

### Windows

1. **Download the Installer**: Go to the Node.js website and download the
   Windows Installer (.msi) for the LTS version.

1. **Run the Installer**: Execute the downloaded file and follow the prompts to
   install Node.js. The installer includes Node.js and npm (Node Package
   Manager).

### macOS

1. **Download the Installer**: Visit the Node.js website and download the macOS
   Installer (.pkg) for the LTS version.

1. **Run the Installer**: Open the package and follow the instructions to
   install Node.js and npm.

### Linux

For Linux, the process can vary slightly depending on the distribution, but
here's a general approach:

**Using a Package Manager**: For most Linux distros, you can install Node.js via
a package manager. For example, on Ubuntu, you can use:

```bash
sudo apt update
sudo apt install nodejs
sudo apt install npm
```

::: info

For other Linux distributions, check the specific package management commands or
consult the distribution's documentation for Node.js installation. You can also
use Node Version Manager (nvm) for a more flexible installation and management
of different Node.js versions.

:::

## Verify the installation

You can run `node -v` in the terminal to print the version number for Node.js.
You should see the version number printed in the console. If you do, that's
great! You've successfully installed Node.

Run `npm -v` to print the version number for `npm`. If you see it, then npm is
installed successfully too.
