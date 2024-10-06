# Multiple environments

<Vimeo id="1016739824" />

It is convenient to load environment variables and use these to configure the
app. This way, the app will be configured differently in different environments.

## Setting manually

We can set environment variables manually in the terminal. They will be
persisted only for the terminal session, so when you close the terminal they
will be wiped.

::: code-group

```bash
export X=123

echo $X
# 123
```

```powershell
$env:X = 1

echo $env:X
# 123
```

:::

This is useful, but if there are many variables it can be tedious.

## Using env files

We can create separate `.env` files and choose which one to load based on the
context.

::: code-group

```bash [.env.development]
SECRET_KEY=21e29e988dec32f6eb6bd20bde3a14c1
DB_URL=sqlite:////home/user/project/dev.sqlite
```

```bash [.env.testing]
SECRET_KEY=4b02f45f952b5f050606efea58c35c2e
DB_URL=sqlite:///:memory:
```

:::

::: warning

Add `.env` and `.env.*` to your `.gitignore` to prevent the environment files
from being uploaded to version control.

:::

## Loading variables

We access environments variables using `os.getenv("VAR_NAME")`.

We can import the environment variables into a `config.py` like this:

```py
# config.py
import os
from dotenv import load_dotenv

MODE = os.getenv("MODE", "development")
load_dotenv(f".env.{MODE}")

PORT = int(os.getenv("PORT", 5000))
DEBUG = MODE in ["development", "testing"]
TESTING = MODE == "testing"
SECRET_KEY = os.getenv("SECRET_KEY")
SQLALCHEMY_DATABASE_URI = os.getenv("DB_URL")
```

These variables will change dynamically depending on what is available in the
environment.

## Switching modes

We can switch to testing before we test:

::: code-group

```bash
export MODE="testing"
pytest
```

```powershell
$env:MODE = "testing"
pytest
```

:::

And switch back when developing:

::: code-group

```bash
export MODE="development"
python -m src.run
```

```powershell
$env:MODE = "development"
python -m src.run
```

:::
