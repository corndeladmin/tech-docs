# Linux

::: info

The video below uses WSL on Windows, but the steps on most Linux systems are
identical.

:::

<Vimeo id="947297340" />

## Install Git

To install `git`,

1. Open your terminal

1. Run `sudo apt update`

1. Run `sudo apt install git-all`

1. Check `git` is installed by running `git --version` (you might need to close
   and reopen the terminal)

## Configure Git

To configure your `git` installation, add your user details:

```bash
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
```

## Sign up to Github

If you haven't done so already, create an account with
[Github](https://github.com/).

## Authenticate with Github

The easiest way is using the `gh` command line tool.

1. Install `gh` by running `sudo apt install gh`

1. Run `gh auth login`

1. Select "Github.com", "HTTPS" and "Sign in with browser"

1. Copy the one-time code and paste it into the
   [device login page](https://github.com/login/device)

1. Click "Authorize" on the confirmation page, and you should see "Authorization
   complete" in your terminal.

That's it! Git and Github are set up and connected.
