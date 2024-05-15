# Installation

## Linux

Great news! Bash is installed by default.

In most distros, you can hit `Ctrl + Alt + T` on your keyboard and it will open
a bash terminal.

Pop open a terminal, type

```bash
echo "Hello, bash!"
```

and hit enter. You should see your message printed in the terminal.

## Mac

If you're using a Mac, the default terminal language is Zsh. Fortunately, Zsh is
highly interoperable with bash and you should be able to follow everything in
the tech docs with no problems.

Press `Cmd + Space` to open Spotlight, type "Terminal", and press Enter. You can
also find the Terminal in the Utilities folder within the Applications folder.

Pop open a terminal, type

```bash
echo "Hello, bash!"
```

and hit enter. You should see your message printed in the terminal.

## Windows

Windows doesn't support bash out of the box. Most developers on Windows choose
to install WSL (Windows Subsystem Linux) and use this for all of their
development work. It is a great way to ensure that your development environment
remains consistent with most documentation, your server environment where your
apps are deployed, and other developers on the team.

### Installing WSL

To install WSL on Windows, open a command prompt (you should be able to search
for "command" in your explorer search bar).

With a command prompt open, type

```cmd
wsl --install
```

This may take some time, but you should see a success message after a few
minutes.

### Launching WSL

You will need to restart your computer. When it has rebooted, search for "wsl"
in your explorer. Open up WSL, and you should see a terminal prompt.

### Configuring WSL

If this is your first time using WSL, you will be asked to choose a username and
password. Note that, when typing your password, the cursor will not move at all,
and it looks as though you're not typing anything. This is a security feature -
rest assured that your keystrokes are being registered. Hit enter when you're
done.

Once that's done, type

```bash
echo "Hello, bash!"
```

and hit enter. You should see your message printed in the terminal.

### Updating WSL

It's also recommended to update your WSL installation. Run

```bash
sudo apt update && sudo apt upgrade
```

At some point during this process, you might need to press `y` and hit enter to
confirm you want to perform the upgrades.
