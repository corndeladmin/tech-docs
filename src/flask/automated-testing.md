# Automated testing

<Vimeo id="1016739739" />

## Adding Github secrets

The `.env.testing` file is designed to be used locally. It is in the
`.gitignore` and will not be available on Github's servers.

We can add Github secrets to make environment variables available during Github
actions.

1. Go to your repository on GitHub

1. Click on Settings

1. In the sidebar, click Secrets and variables > Actions

1. Click "New repository variable". Add your environment variables (e.g.,
   `PORT`).

1. Click "New repository secret". Add your environment secrets (e.g.,
   `SECRET_KEY`, `DB_URL`).

## Github action

We can create a Github action to run `pytest` on Github's servers whenever a
pull request is made into the `develop` branch.

```yml
# .github/workflows/pytest.yml

name: Run Tests

# Trigger this workflow on pull requests into develop
on:
  pull_request:
    branches:
      - develop

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      # Checkout the repository code
      - name: Checkout code
        uses: actions/checkout@v3

      # Set up Python
      - name: Set up Python
        uses: actions/setup-python@v4
        with:
          python-version: '3.10'

      # Set environment variables from GitHub Secrets
      - name: Set environment variables
        run: |
          echo "MODE=${{ vars.MODE }}" >> $GITHUB_ENV
          echo "PORT=${{ vars.PORT }}" >> $GITHUB_ENV
          echo "SECRET_KEY=${{ secrets.SECRET_KEY }}" >> $GITHUB_ENV
          echo "DB_URL=${{ secrets.DB_URL }}" >> $GITHUB_ENV

      # Install dependencies
      - name: Install dependencies
        run: |
          python -m venv venv
          source venv/bin/activate
          pip install -r requirements.txt

      # Run pytest
      - name: Run pytest
        run: |
          source venv/bin/activate
          pytest
```

Now, the tests can run, and we can make sure they pass before merging into the
`develop` branch.

## Adding marketplace actions

There are many preconfigured actions on the marketplace which can be very
powerful and useful.

For example, the Code QL action can check your code for vulnerabilities using
[Code QL](https://github.com/github/codeql-action).

In your repo, click Actions and then New Workflow to see what is available.
