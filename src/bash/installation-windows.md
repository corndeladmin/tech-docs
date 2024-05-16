# Windows

<Vimeo id="947051900" />

Windows doesn't support bash out of the box. Most developers on Windows choose
to install WSL (Windows Subsystem Linux) and use this for all of their
development work. It is a great way to ensure that your development environment
remains consistent with most documentation, your server environment where your
apps are deployed, and other developers on the team.

## Prepare your machine

Open powershell as admin and run

```sh
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
```

and

```sh
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```

## Installing WSL

In your powershell, run

```sh
wsl --install
```

This may take some time, but you should see a success message after a few
minutes.

### Launching WSL

You will need to restart your computer. When it restarts, search for "Ubuntu" in
your search bar and launch the Ubuntu app. If all has gone well, it will install
Ubuntu and ask you to create a new user.

::: details Problems with virtualisation

If your installation tells you that virtualisation is not enabled, you can try
following
[Microsoft's help page to enable virtualisation](https://support.microsoft.com/en-gb/windows/enable-virtualization-on-windows-11-pcs-c5578302-6e43-4b4b-a449-8ced115f58e1).

If it still doesn't work, you can downgrade to WSL by running

```sh
wsl --set-default-version 1
```

in a powershell window. Now, try opening the Ubuntu app again.

:::

### Configuring WSL

If this is your first time using WSL, you will be asked to choose a username and
password.

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

to update your Ubuntu libraries.

Run

```bash
sudo apt-get install wget ca-certificates
```

to install a couple of useful utilities.

With these steps completed, you have WSL set up and ready to use.
