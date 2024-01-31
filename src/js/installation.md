# Installation

To run our first javascript program, we need to install some software that can
read our code and execute it on the computer. There are some different options
available (including the web browser you're viewing this page on!), but we'll be
using Node.js.

## What is Node?

Node.js is a runtime environment that lets us use JavaScript to build
server-side applications. It's built on Chrome's V8 JavaScript engine, which
means it's super fast. The real kicker? It's asynchronous and event-driven. This
means Node.js can handle multiple operations concurrently without getting bogged
down, making it fantastic for handling a high volume of simultaneous connections
– think real-time apps, like chat applications or live data updates. It's a big
leap from the old days where JavaScript was confined to just browsers. With
Node.js, the same language you use to make a webpage interactive can now power
your entire server backend. It's a game-changer in the world of web development,
enabling full-stack JavaScript development and opening up a whole new world of
possibilities.

## Installing Node

The installation method varies a bit depending on your operating system.

### Windows

1. **Download the installer**: Go to the Node.js website and download the
   Windows Installer (.msi) for the LTS version.

1. **Run the installer**: Execute the downloaded file and follow the prompts to
   install Node.js. The installer includes Node.js and npm (Node Package
   Manager).

1. **Verify installation**: Open Command Prompt and type `node -v` and `npm -v`
   to verify the installation of Node.js and npm, respectively.

### macOS

1. **Download the installer**: Visit the Node.js website and download the macOS
   Installer (.pkg) for the LTS version.

1. **Run the installer**: Open the package and follow the instructions to
   install Node.js and npm.

1. **Verify installation**: Open the Terminal and run `node -v` and `npm -v` to
   check the installation of Node.js and npm.

### Linux

For Linux, the process can vary slightly depending on the distribution, but
here's a general approach:

1. **Using a package manager**: For most Linux distros, you can install Node.js
   via a package manager. For example, on Ubuntu, you can use:

   ```bash
   sudo apt update
   sudo apt install nodejs
   sudo apt install npm
   ```

1. **Verify installation**: Run `node -v` and `npm -v` in the terminal to
   confirm the installation.

   ::: info

   For other Linux distributions, check the specific package management commands
   or consult the distribution's documentation for Node.js installation. You can
   also use Node Version Manager (nvm) for a more flexible installation and
   management of different Node.js versions.

   :::

## Verify the installation

As mentioned, you can run `node -v` in the terminal to print the version number
for Node.js. You should see the version number printed in the console. If you
do, that's great! You've successfully installed Node.

## What is npm?

When you install Node, you get npm aswell. Run `npm -v` in your terminal to
verify that it's been installed along with Node. You should see the version of
npm (which will be different to the version of Node).

The letters in npm stand for _node package manager_, and it allows us to
download additional libraries and packages to enrich the Node development
experience. We'll learn more about npm later in the course.
