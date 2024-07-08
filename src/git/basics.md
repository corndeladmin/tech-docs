# Git basics

While Git lets us do some very sophisticated version and branch management using its powerfull toolkit, most of the time you will be using it to save and back up changes to your code.

This guide will lead you through the following steps:

1. Clone a repository from GitHub
2. Add your code changes to the next commit
3. Commit the changes you added
4. Push the commit you just made back to GitHub

## Clone a repository

Oftentimes, we'll be working on an existing codebase.

```bash
git clone <url>
```

::: details Example
```bash
git clone git@github.com:corndeladmin/tech-docs.git
```
:::

## Add code changes

After we make our changes, we need to tell Git that we want to save the changes we've just made!

To _stage_ all our changes, that is, to tell Git that we want to save all the changes we've made, we can run:

```bash
git add -A
```

::: details Explanation
:::

If the command is successful, there _won't_ be a confirmation message.

So, to check that your changes have been staged successfully, you can run

```bash
git status
```

and you can see the staged changes below the line `Changes to be committed:`.

## Commit staged changes

Now that we've staged our changes in the previous step, all we need to do is:

```bash
git commit -m "Your commit message here"
```

::: details Explanation
:::


## Push new commits

We've made and committed some changes to our codebase by now.

We can push the changes we've made back to the remote server, so that other developers can see the changes you've made!

To do this we can run:

```bash
git push
```

## Additional reading

There is a cheat sheet available here:
[GitHub Cheat Sheet](https://training.github.com/downloads/github-git-cheat-sheet/)
