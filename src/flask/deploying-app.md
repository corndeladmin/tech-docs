# Deploying a flask app

<Vimeo id="1016739784" />

## Setting up Github

We should run

```bash
git init
```

and create a `.gitignore`.

::: details

A reasonable `.gitignore` for this project might look like this:

```
# Local
venv/
.env
.env.*
dev.sqlite

# Byte-compiled / optimized / DLL files
__pycache__/

# Unit test / coverage reports
.pytest_cache/

# Flask stuff:
instance/
.webassets-cache
```

:::

If we create an empty repo on Github, we can link it to the local like this:

```bash
# Stage all changes
git add .

# Commit all changes
git commit -am "initial commit"

# Add the remote
git remote add origin <your-repo-url>

# Push your code
git push -u origin main
```

::: tip

The `-u origin main` part links the local `main` branch to the remote `main`
branch, and means that in the future we only need to do `git push`.

:::

## Deploying on Render

[Render](https://render.com/) is a service which allows us to deploy an api for
free.

We can get started by signing up and selecting to create a new
[web service](https://dashboard.render.com/web/new).

We can determine the build command, which is usually something like

```bash
pip install -r requirements.txt
```

We can also specify the command to start the app. The actual command will vary
depending on how your app is set up, could be something like

```bash
gunicorn -e MODE=production -w 4 -b 0.0.0.0:$PORT 'src.app:create_app()'
```

- `-e MODE=production` sets the environment variable `MODE` to `"production"`

- `-w 4` sets up 4 workers, to allow concurrent request handling

- `-b 0.0.0.0:$PORT` binds the app to a specific host and port, where `$PORT` is
  an environment variable provided by Render

::: info

The `app.run()` method starts a development server. It is not intended for high
traffic deployments. Gunicorn is a development server and can be installed with
`pip install gunicorn`. Be sure the add this to `requirements.txt`.

:::

## Environment variables

We can specify a list of environment variables. This allows us to choose a
different configuration for production compared with local development.

```bash
SECRET_KEY=bac954ba70aec51f59966de92702e887f8801c374de2c369e24133b0cb9d3380
DB_URL=postgresql://postgres.imivjbohxrpueurbqdho:y8QsnKBXSvjCG2DA@aws-0-eu-west-2.pooler.supabase.com:6543/postgres
```

::: warning

Your database url contains the database password. It is structured like this:

```
postgresql://[user:password]@[host][:port][/dbname]
```

It is extremely sensitive and should not be shared or stored anywhere else.

:::

::: tip

The production database is hosted on [Supabase](https://supabase.com/), which is
a good choice if you would like to experiment for free with a hosted database.

:::

## Visiting the site

When we push to the `main` branch on Github, Render will automatically rebuild
and redploy the app, and we can view at at the url, e.g.
[https://corndel-todo.onrender.com](https://corndel-todo.onrender.com).
