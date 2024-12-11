# Web socket servers

::: info

Although web sockets aren't specific to Javalin, this part of the docs focuses
heavily on servers, so we felt these notes belonged here.

:::

## Creating a web socket server

To create a WebSocket server in Javalin, we need the Javalin WebSocket plugin,
which is included in the core Javalin library.

Then, create the Javalin app and enable WebSocket functionality:

```java
import io.javalin.Javalin;

public class WebSocketServer {
    public static void main(String[] args) {
        Javalin app = Javalin.create(config -> {
            config.wsFactoryConfig(ws -> {
                // WebSocket settings can be configured here
            });
        }).start(5001);
    }
}
```

## Listening for connections

Listening for new WebSocket connections is straightforward. Use the `ws` method
to define WebSocket endpoints.

```java
import io.javalin.Javalin;
import io.javalin.websocket.WsConnectContext;

public class WebSocketServer {
    public static void main(String[] args) {
        Javalin app = Javalin.create().start(5001);

        app.ws("/websocket", ws -> {
            ws.onConnect(ctx -> {
                System.out.println("New connection: " + ctx.getSessionId());
                // do what we want with the connection
            });
        });
    }
}

```

When a client connects to the WebSocket endpoint (`/websocket`), the `onConnect`
handler is triggered, passing a `WsConnectContext` object (`ctx`) representing
the connection.

## Listening for socket events

We can listen for messages from the client using the `onMessage` event and
handle connection closures using the `onClose` event.

```java
import io.javalin.Javalin;
import io.javalin.websocket.WsContext;

public class WebSocketServer {
    public static void main(String[] args) {
        Javalin app = Javalin.create().start(5001);

        app.ws("/websocket", ws -> {
            ws.onConnect(ctx -> System.out.println("Connected: " + ctx.getSessionId()));
            ws.onMessage((ctx, message) -> handleMessage(ctx, message));
            ws.onClose((ctx, status, reason) -> cleanUp(ctx));
        });
    }

    private static void handleMessage(WsContext ctx, String message) {
        System.out.println("Received message: " + message);
    }

    private static void cleanUp(WsContext ctx) {
        System.out.println("Connection closed: " + ctx.getSessionId());
    }
}
```

- `onMessage`: Triggered when a message is received from the client.

- `onClose`: Triggered when the client closes the connection, allowing us to
  perform cleanup.

## Sending a message back

At any point, we can send a message to the client using the `send` method on the
`WsContext`.

```java
app.ws("/websocket", ws -> {
    ws.onConnect(ctx -> {
        ctx.send("Hello from the server!");
    });
});
```

The client will receive the message immediately, provided the connection is
still open.
