# Dark mode

## Setting the color scheme

The `light-dark()` function in CSS allows us to set two colours for a property.
If a user's browser is set to prefer dark mode, the dark colours will be used;
otherwise the light colours will be used.

To enable this, we first set the `color-scheme` property.

```css
:root {
  color-scheme: light dark;
}
```

## The `light-dark()` function

Next, we use the `light-dark()` function anywhere we would want to switch
colours when the mode changes:

```css
header {
  background-color: light-dark(hsl(0, 0%, 80%), hsl(0, 0%, 5%));
}
```

This gives us a light-grey background in light mode, and a dark-grey background
in dark mode.

## Combining with variables

We can combine the `color-scheme` technique with CSS variables to build up
dynamic color palettes which switch out based on the mode.

```css
:root {
  color-scheme: light dark;

  --grey-light: hsl(0, 0%, 80%);
  --grey-lighter: hsl(0, 0%, 87.5%);
  --grey-lightest: hsl(0, 0%, 95%);

  --grey-dark: hsl(0, 0%, 15%);
  --grey-darker: hsl(0, 0%, 10%);
  --grey-darkest: hsl(0, 0%, 5%);

  --text: light-dark(var(--grey-darkest), var(--grey-lightest));
}

body {
  background-color: light-dark(var(--grey-lightest), var(--grey-darker));
  color: var(--text);
}
```

## Switching themes

With the set-up above, the user's color preference is honoured, which is ideal.
However, we can also allow the user to manually override the colour settings, if
they choose.

```css
.light {
  color-scheme: light;
}

.dark {
  color-scheme: dark;
}
```

Applying one of these classes to, for example, the body element, will override
the `light dark` declaration in the `:root` element, and force the
`light-dark()` function to choose a particular theme.

We can use a bit of JavaScript to create a button for the user to click which
will change the theme for them:

```js
const darkBtn = document.getElementById('dark-theme-btn')

darkBtn.addEventListener('click', () => {
  document.body.classList.add('dark')
  document.body.classList.remove('light')
})
```
