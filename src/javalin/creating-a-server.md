# Creating a server

<Vimeo id="1012077168" />

## Project setup

### Add the Javalin dependency

Add the following dependency to `pom.xml`

```xml
<dependency>
    <groupId>io.javalin</groupId>
    <artifactId>javalin-bundle</artifactId>
    <version>6.1.6</version>
</dependency>
```

### Configure Exec Maven

If using the `exec-maven-plugin`, make sure it is pointing at the app
entrypoint, e.g. `com.bleeter.App`

::: details

```xml
<plugin>
  <groupId>org.codehaus.mojo</groupId>
  <artifactId>exec-maven-plugin</artifactId>
  <version>3.0.0</version>
  <configuration>
    <mainClass>com.bleeter.App</mainClass>
  </configuration>
</plugin>
```

:::

### Optional dependencies

In case there are any errors, there are an extra couple of dependencies you may
need to include explicitly:

::: details

```xml
<dependency>
  <groupId>org.jetbrains.kotlin</groupId>
  <artifactId>kotlin-stdlib</artifactId>
  <version>1.9.0</version>
</dependency>

<dependency>
  <groupId>ch.qos.logback</groupId>
  <artifactId>logback-classic</artifactId>
  <version>1.2.11</version>
</dependency>
```

:::

## Configure the app

In `App.java`, we configure the Javalin application and the `main` entrypoint.

```java
package com.corndel.bleeter;

import io.javalin.Javalin;

public class App {
  public static void main(String[] args) {
    var app = createApp();
    app.start(5000);
  }

  public static Javalin createApp() {
    var app = Javalin.create();

    app.get("/hello", ctx -> {
      ctx.result("Hello Bleeter!");
    });

    return app;
  }
}
```

## Compile and run the app

We can now either use VSCode to compile and run our server, or run it in the
command line with the following command:

::: code-group

```bash
mvn clean compile exec:java
```

```console [output]
17:23:14.039 [com.corndel.bleeter.App.main()] INFO  io.javalin.Javalin - Starting Javalin ...
17:23:14.042 [com.corndel.bleeter.App.main()] INFO  org.eclipse.jetty.server.Server - jetty-11.0.20; built: 2024-01-29T21:04:22.394Z; git: 922f8dc188f7011e60d0361de585fd4ac4d63064; jvm 21.0.3+9-LTS
17:23:14.088 [com.corndel.bleeter.App.main()] INFO  o.e.j.s.s.DefaultSessionIdManager - Session workerName=node0
17:23:14.100 [com.corndel.bleeter.App.main()] INFO  o.e.j.server.handler.ContextHandler - Started o.e.j.s.ServletContextHandler@659d0500{/,null,AVAILABLE}
17:23:14.106 [com.corndel.bleeter.App.main()] INFO  o.e.jetty.server.AbstractConnector - Started ServerConnector@69c25ba8{HTTP/1.1, (http/1.1)}{0.0.0.0:8080}
17:23:14.111 [com.corndel.bleeter.App.main()] INFO  org.eclipse.jetty.server.Server - Started Server@54c69995{STARTING}[11.0.20,sto=0] @2212ms
17:23:14.111 [com.corndel.bleeter.App.main()] INFO  io.javalin.Javalin -
       __                  ___           _____
      / /___ __   ______ _/ (_)___      / ___/
 __  / / __ `/ | / / __ `/ / / __ \    / __ \
/ /_/ / /_/ /| |/ / /_/ / / / / / /   / /_/ /
\____/\__,_/ |___/\__,_/_/_/_/ /_/    \____/

       https://javalin.io/documentation

17:23:14.111 [com.corndel.bleeter.App.main()] INFO  io.javalin.Javalin - Javalin started in 122ms \o/
17:23:14.114 [com.corndel.bleeter.App.main()] INFO  io.javalin.Javalin - Listening on http://localhost:8080/
17:23:14.120 [com.corndel.bleeter.App.main()] INFO  io.javalin.Javalin - You are running Javalin 6.1.6 (released May 28, 2024).
```

:::

## Make a request

Now we can make a `GET` request to `localhost:8080/hello` to see the server
return a message.

::: code-group

```bash
curl localhost:5000/hello
```

```console [output]
Hello Bleeter!
```

:::
