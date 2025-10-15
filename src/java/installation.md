# Installation

<Vimeo id="1007370301" />

## Installing Java

### Windows (WSL) and Linux

1. Update your package index

```bash
sudo apt update && sudo apt upgrade -y
```

2. Install Java 21

```bash
sudo apt install openjdk-21-jdk
```

3. Verify Java (you might need to restart your terminal first)

```bash
java -version
```

4. Install Maven

```bash
sudo apt install maven
```

5. Verify Maven (you might need to restart your terminal first)

```
mvn -v
```

### Mac

1. Install Java

```bash
brew install openjdk@21
```

2. Verify Java

```bash
java -version
```

3. Install Maven

```bash
brew install maven
```

4. Verify Maven

```bash
mvn -v
```

## Configuring VS Code

1. Open VS Code

2. Hit `Ctrl + Shift + X` to open the Extensions panel

3. Search for "Extension Pack for Java" and install it

## Running your first Java code

<Vimeo id="1007370285" />

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
