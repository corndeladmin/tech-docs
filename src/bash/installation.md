# Installation

## Linux

If you're on Linux, great news! Bash is installed by default.

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

```
wsl --install
```

This may take some time, but you should see a success message after a few
minutes.

### Launching WSL

You will need to restart your computer. When it has rebooted, search for "wsl"
in your explorer. Open up WSL, and you should see a terminal prompt. By default,
WSL will select Ubuntu as the linux distro to install - it might take a few
minutes to get everything installed and set up.

### Configuring WSL

If this is your first time using WSL, you will be asked to choose a username and
password. Note that, when typing your password, the cursor will not move at all,
and it looks as though you're not typing anything. This is a security feature -
rest assured that your keystrokes are being registered. Hit enter when you're
done.

Once you have created your user account, type

```bash
echo "Hello, bash!"
```

and hit enter. You should see your message printed in the terminal.

### Updating WSL

Run

```bash
sudo apt update && sudo apt upgrade
```

At some point during this process, you might need to press `y` and hit enter to
confirm you want to perform the upgrades. This will update your package manager
to make sure you have the libraries you need to work on WSL.

Also, we should add the `wget` and `ca-certificates` utilities, which allows us
to fetch content from servers and run security checks.

```bash
sudo apt-get install wget ca-certificates
```

With these steps completed, you have WSL set up and ready to use.

### Problems with virtualisation

Sometimes, virtualisation is switched off in your computer's BIOS/UEFI settings,
and this prevents WSL from running properly.

To check, you can open Task Manager (`Crtl + Shift + Esc`) and click the
Performance tab. In the CPU page, you should see "Virtualisation" in the data
underneath the graph - if it is disabled, you can try to enable it through the
BIOS/UEFI settings.

Usually, this involves:

1. Restarting your computer and holding a key such as `F2`, `F10`, `F12`, `Esc`,
   or `Del`. The exact key you need varies depending on your model of computer,
   but it is sometimes displayed during the startup screen.

1. In the BIOS/UEFI settings, the virtualisation support is usually under
   "Advanced", "CPU Configuration" or similar. Look for settings labeled "Intel
   VT-x," "Intel Virtualization Technology," "AMD-V," or similar, depending on
   your CPU.

1. Set virtualisation to "Enabled", make sure to save the settings and exit
   BIOS/UEFI setup.

Boot up your computer and check Task Manager again - if virtualisation is now
enabled, you can try installing WSL again.
