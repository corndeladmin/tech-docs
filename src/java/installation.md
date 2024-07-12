# Installation

## Installing Java

1. Update your package index

```bash
sudo apt update
```

2. Install Java 21

```bash
sudo apt install openjdk-21-jdk
```

3. Verify the installation

```bash
java -version
```

## Configuring VS Code

Install the
[Java Extension Pack](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack).

1. Open VS Code

2. Hit `Ctrl + Shift + X` to open the Extensions panel

3. Search for "Java Extension Pack" and install it

## Running your first Java code

1. Create a folder to put your code into:

```bash
cd Repos
mkdir hello-java
```

2. Make a file called `Main.java`:

```bash
cd hello-java
touch Main.java
```

3. Open the folder in VS Code:

```bash
code .
```

3. Inside `Main.java`, type the following code:

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

4. Finally, run the file with `java`:

```bash
java Main.java
```

You should see

```
Hello, World!
```

in the terminal.
