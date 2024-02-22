# Flexbox

<Vimeo id="915145560" />

## Making a flex container

An element which contains children can be turned into a flex container by adding
`display: flex;` to its properties. By default, it will attempt to squah all of
its children onto a single line, possibly deforming them to do so.

::: code-group

```css
.container {
  display: flex;
}

.box {
  width: 100px;
  height: 100px;
  background-color: fuchsia;
}

.tall {
  height: 200px;
}

.wide {
  width: 200px;
}
```

```html
<div class="container">
  <div class="box"></div>
  <div class="box tall"></div>
  <div class="box wide"></div>
</div>
```

:::

## Wrapping

We can control how the flex container wraps its content with the `wrap`
property. If we add `flex-wrap: wrap;` to the `.container` class, then the items
will wrap onto a new line if there is not enough width to display them all
without deformation.

```css{3}
.container {
  display: flex;
  flex-wrap: wrap;
}
```

## Gap

The property `gap: 5px;` will ensure a gap of the given size is maintained
between the items in the container.

```css{4}
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}
```

## Justifying

The `justify-content` property will position the items along the "major axis" of
the container. By default, the major axis is horizontal. In this example, we
center the items horizontally.

```css{5}
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  justify-content: center;
}
```

## Aligning

The `align-items` property will position the items along the "minor axis" of the
container. By default, the minor axis is vertical. This example pushes the
containers down so that their bases are aligned at the bottom.

```css{6}
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  justify-content: center;
  align-items: end;
}
```

## Flex direction

Adding `flex-direction: column;` flips the major and minor axes, so
`justify-content` now affects vertical positioning, and `align-items` affects
horizontal positioning.

```css{7}
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  justify-content: center;
  align-items: end;
  flex-direction: column;
}
```
