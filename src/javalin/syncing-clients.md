# Syncing clients

## Setting up the server

As a quick reminder, let's see again the basic server set up:

```java
import io.javalin.Javalin;

public class WebSocketSync {
    public static void main(String[] args) {
        Javalin app = Javalin.create().start(5001);

        app.ws("/websocket", ws -> {
            ws.onConnect(ctx -> {
                // Handle new connections
                System.out.println("New connection: " + ctx.getSessionId());
            });
        });
    }
}
```

## Tracking sockets

To update all clients, we need to keep track of the WebSocket sessions.
Fortunately, Javalin provides a `WsContext` object for each connection, which we
can store in a `List` or `Set` for easy tracking.

```java
import io.javalin.Javalin;
import io.javalin.websocket.WsContext;

import java.util.Collections;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;

public class WebSocketSync {
    private static final Set<WsContext> connectedClients =
        Collections.newSetFromMap(new ConcurrentHashMap<>());

    public static void main(String[] args) {
        Javalin app = Javalin.create().start(5001);

        app.ws("/websocket", ws -> {
            ws.onConnect(ctx -> {
                connectedClients.add(ctx);
                System.out.println("Connected clients: " + connectedClients.size());
            });

            ws.onClose(ctx -> {
                connectedClients.remove(ctx);
                System.out.println("Connection closed. Remaining clients: " + connectedClients.size());
            });
        });
    }
}
```

- The `connectedClients` set holds references to all currently active WebSocket
  sessions.

- When a client connects, it is added to the `connectedClients` set.

- When a client disconnects, it is removed from the set.

## Forwarding messages

To broadcast messages received from one client to all other connected clients,
we iterate over the `connectedClients` set and call the `send` method for each
session.

```java
import io.javalin.Javalin;
import io.javalin.websocket.WsContext;

import java.util.Collections;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;

public class WebSocketSync {
    private static final Set<WsContext> connectedClients =
        Collections.newSetFromMap(new ConcurrentHashMap<>());

    public static void main(String[] args) {
        Javalin app = Javalin.create().start(5001);

        app.ws("/websocket", ws -> {
            ws.onConnect(ctx -> connectedClients.add(ctx));

            ws.onClose(ctx -> connectedClients.remove(ctx));

            ws.onMessage((ctx, message) -> {
                for (WsContext client : connectedClients) {
                    if (client != ctx) { // Avoid echoing the message back to the sender
                        client.send(message);
                    }
                }
            });
        });
    }
}

```

- The `onMessage` handler receives messages from a client.

- The message is forwarded to all other connected clients using the `send`
  method.

And that's it! Now all connected users will receive any message sent by any
other user.
