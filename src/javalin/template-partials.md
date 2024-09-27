# Template partials

# The problem

Lots of pages contain the same information repeated several times.

For example, the footer

```html
<footer>
  <p th:text="${new Date().getfullYear()}"></p>
</footer>
```
