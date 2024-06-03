# Setting up Git

<Vimeo id="947297340" />

## Installing Git

### Installing on Linux

You can generally install the basic Git tools on Linux using your distribution's
package management tool.

#### Debian, Ubuntu, etc.

If you are running a Debian-based distribution, you can install Git using `apt`.

Open up a terminal window, then:

```bash
sudo apt update
sudo apt install git-all
```

### Installing on macOS

The easiest way to install Git is to install the Xcode Command Line Tools.

You can check if you have Git available by running:

```bash
$ git --version
```

If you don’t have it installed already, macOS will prompt you to install the
Xcode Command Line Tools.

### Installing on Windows

This guide assumes that you're using WSL.

Open a terminal window, and enter WSL. Then, continue with the instructions for
[Installing on Linux](#installing-on-linux) above.

## Configuring Git

### Your Identity

The first thing you should do when you install Git is to set your user name and
email address. This is important because every Git commit uses this information,
and it’s immutably baked into the commits you start creating:

```bash
$ git config --global user.name "John Doe"
$ git config --global user.email johndoe@example.com
```

::: tip

You only need to do this once since we're using the `--global` option. Git will
then always use that information for anything you do on that system.

:::

## Authenticating with GitHub

### Installing the GitHub CLI

First, ensure that you have the GitHub CLI available on your system.

If you are using WSL or Ubuntu, you can follow the instructions
[here](https://github.com/cli/cli/blob/trunk/docs/install_linux.md#debian-ubuntu-linux-raspberry-pi-os-apt).

Mac users should use [homebrew](https://brew.sh) to install:

```bash
brew install gh
```

### Authenticating with the GitHub CLI
