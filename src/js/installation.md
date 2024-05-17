# Installation

<Vimeo id="947358863" />

To run our first javascript program, we need to install some software that can
read our code and execute it on the computer. We'll be using Node.js.

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

## Installing nvm

To manage the installation of Node and npm, we will be using a tool called
[nvm](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating)
(Node version manager).

To install nvm on your machine, open a terminal and run

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

If that doesn't work, you could try

```bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

::: info

Make sure you are running this from a bash (or zsh) terminal. If you are working
on Windows, this means you should be working from WSL.

:::

## Installing Node and npm

After installing nvm, it is recommended to close and re-open your terminal.

You should be able to run

```bash
nvm install node
```

to get the latest version of Node.

## Verify the installation

You can run `node -v` in the terminal to print the version number for Node.js.
You should see the version number printed in the console. If you do, that's
great! You've successfully installed Node.

Run `npm -v` to print the version number for `npm`. If you see it, then npm is
installed successfully too.
