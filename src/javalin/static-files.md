# Static files

## Serving static files

Until now, we have been using our server to send back data such as strings or
json. However, we can serve whole files such as pictures or documents, too!

## Public directory

Although you can put the files you'd like to serve anywhere, it's convention to
put them in the `resources` directory under a folder called `public`

```
src
└── main
    └── resources
        └── public
            ├── logs
            │   └── hello.txt
            └── logo.png
```

## Using `config.staticFiles.add()`

We instruct our javalin app to serve files from `public` using `config.staticFiles.add()`.

```java{6-9}
public class App {
  public Javalin app;

  public App() {
    app = Javalin.create(
        config -> {
          config.staticFiles.add("/public", Location.CLASSPATH);
        });
  }
}
```

## Requesting static files

Now, if we visit `/logo.png` or `/logs/hello.txt` we will get the corresponding
files. Note that `/public/` is _not_ part of the url.
