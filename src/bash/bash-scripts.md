# Bash scripts

Sometimes, we need to run a complex sequence of bash commands which we do not
want to memorise and type out every time. Fortunately we can save our bash
commands in a file and run that file instead.

## Making a script

Let's navigate to our `notes` project

```bash
cd ~/Repos/notes
```

and create a new file called `hello.sh`

```bash
touch hello.sh
```

Let's open up this new file in VS Code

```bash
code .
```

and use VS Code to add some content to the `hello.sh` file

```sh
echo "Hello from my script!"
```

Make sure to save the `hello.sh` file.

## Changing permissions

For security reasons, we cannot run this script by default. We need to make it
executable. This fairly straightforward:

```bash
chmod +x hello.sh
```

The `chmod` utility allows us to change file metadata, and the `+x` makes it
executable.

## Running the script

To run the executable script, simply pass the path to the script:

```bash
./hello.sh
```

and hit enter. Note that you do need the `./` or else bash will go looking in
the wrong place for your script.

You should see `Hello, from my script!` in the terminal.
