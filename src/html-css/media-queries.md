# Media queries

## Writing a media query

Media queries allow us to modify CSS in response to various settings, such as
the user's screen size.

In the below example, anything with the `box` class appears red, unless the user
device is between 500px and 800px, in which case it is blue.

```css
.box {
  background-color: red;
  width: 100px;
  height: 100px;
}

@media (min-width: 500px) and (max-width: 800px) {
  .box {
    background-color: blue;
  }
}
```

## Responsive design

Media queries allow us to be more responsive in our design.

As a general guide, here are the ranges in pixels for different devices sizes:

|      Range       | Device                                             |
| :--------------: | :------------------------------------------------- |
|  320px - 480px   | Smartphones (portrait)                             |
|  481px - 768px   | Smartphones (landscape) / Small Tablets (portrait) |
|  769px - 1024px  | Tablets (landscape) / Small Laptops                |
| 1025px - 1280px  | Medium Laptops / Large Tablets                     |
| 1281px - 1600px  | Desktops (small to medium screens)                 |
| 1601px and above | Desktops (large screens) / TVs                     |

We can use these ranges to adjust the appearance of our page based on the device
size:

```css
/* Base font size for large screens */
h1 {
  font-size: 3rem;
}

/* Medium screens (tablets in portrait mode, small desktops) */
@media (max-width: 1024px) {
  h1 {
    font-size: 2.5rem;
  }
}

/* Small screens (large smartphones in landscape mode, small tablets) */
@media (max-width: 768px) {
  h1 {
    font-size: 2.25rem;
  }
}

/* Extra small screens (smartphones in portrait mode) */
@media (max-width: 480px) {
  h1 {
    font-size: 2rem;
  }
}
```

This example scales the `font-size` of a `<h1>` so that it is larger on larger
devices.
