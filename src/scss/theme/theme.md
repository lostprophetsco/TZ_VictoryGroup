# TZ_VictoryGroup
Документация UI-Kit для проекта TZ_VictoryGroup.

## Breakpoints
В проекте доступно 5 миксинов для медиа-запросов:

```
{
  "sm": {
    "width": "576px"
  },
  "md": {
    "width": "768px"
  },
  "lg": {
    "width": "992px"
  },
  "xl": {
    "width": "1355px"
  },
  "xxl": {
    "width": "1600px"
  }
}
```

Применение медиа-запросов:

<table class="table" style="width: 100%">
  <thead>
  <tr>
    <th>Mixin</th>
    <th>Description</th>
  </tr>
  </thead>
  <tbody>
  
<tr>
<td><code>@include sm;</code></td>
<td><code>@media (min-width: 576px) { ... }</code></td>
</tr>

<tr>
<td><code>@include md;</code></td>
<td><code>@media (min-width: 768px) { ... }</code></td>
</tr>

<tr>
<td><code>@include lg;</code></td>
<td><code>@media (min-width: 992px) { ... }</code></td>
</tr>

<tr>
<td><code>@include xl;</code></td>
<td><code>@media (min-width: 1355px) { ... }</code></td>
</tr>

<tr>
<td><code>@include xxl;</code></td>
<td><code>@media (min-width: 1600px) { ... }</code></td>
</tr>

  </tbody>
</table>

## Grid
```
@include grid(parameters);
```

Parameters:

* `$columns-sm` - количество колонок на медиа-запросе `sm`.
* `$columns-md` - количество колонок на медиа-запросе `md`.
* `$columns-lg` - количество колонок на медиа-запросе `lg`.
* `$columns-xl` - количество колонок на медиа-запросе `xl`.
* `$columns-xxl` - количество колонок на медиа-запросе `xxl`.

## Themes
Всего тем в проекте: 1.

### Default

CSS переменные темы `theme-default`:

```
--font-color-light: #DCE1E9;
--font-color-dark: #151515;
--font-color-gray: #646970;
--font-color-light-gray: #9CA5B3;
--font-color-blue: #2E58DB;
--font-color-white: #FFFFFF;
--background-color-blue: #2E58DB;
--background-color-red: #D02D2D;
--background-color-light-blue: #E4ECF8;
--background-color-light: #F3F6FB;
--background-color-white: #FFFFFF;
--background-color-gray: #9CA5B3;
--background-color-light-gray: #DCE1E9;
--utility-color-gray: #E0E0E0;
--utility-color-black: #000000;
--utility-color-white: #FFFFFF;
--utility-color-blue: #AAC5F0;
--utility-color-red: #C31313;

```

## Utilities
Набор утилитарных CSS переменных.

### Fonts
Объект `fonts` содержит следующие миксины:

#### Fonts Family
```
@include fonts-family;
```

CSS переменные миксина `fonts-family`:

```
--fonts-family-default: PTRootUIVF, sans-serif;

```
#### Fonts Size
```
@include fonts-size;
```

CSS переменные миксина `fonts-size`:

```
--fonts-size-h1: clamp(28px, 4vw, 36px);
--fonts-size-h2: clamp(20px, 4vw, 24px);
--fonts-size-h3: 18px;
  lg: 20px;
--fonts-size-h4: 16px;
--fonts-size-t2: 16px;
--fonts-size-t3: 14px;

```
#### Fonts Weight
```
@include fonts-weight;
```

CSS переменные миксина `fonts-weight`:

```
--fonts-weight-h1: 700;
--fonts-weight-h2: 700;
--fonts-weight-h3: 700;
--fonts-weight-h4: 700;
--fonts-weight-t2: 400;
--fonts-weight-t3: 400;

```
#### Fonts Height
```
@include fonts-height;
```

CSS переменные миксина `fonts-height`:

```
--fonts-height-h1: clamp(34px, 5vw, 44px);
--fonts-height-h2: clamp(28px, 5vw, 32px);
--fonts-height-h3: 28px;
--fonts-height-h4: 150%;
--fonts-height-t2: 150%;
--fonts-height-t3: 143%;

```
### Indents
Объект `indents` содержит следующие миксины:

#### Indents
```
@include indents;
```

CSS переменные миксина `indents`:

```
--indents-200: 5px;

```
### Transition
Объект `transition` содержит следующие миксины:

#### Transition Time
```
@include transition-time;
```

CSS переменные миксина `transition-time`:

```
--transition-time-200: 200ms;

```
#### Transition Easing
```
@include transition-easing;
```

CSS переменные миксина `transition-easing`:

```
--transition-easing-linear: linear;
--transition-easing-ease: ease;
--transition-easing-easeinout: ease-in-out;

```
### Radius
Объект `radius` содержит следующие миксины:

#### Radius
```
@include radius;
```

CSS переменные миксина `radius`:

```
--radius-12: 12px;
--radius-16: 16px;
--radius-50percent: 50%;
--radius-rounded: 99em;

```
### Shadow
Объект `shadow` содержит следующие миксины:

#### Shadow
```
@include shadow;
```

CSS переменные миксина `shadow`:

```
--shadow-0: 0 0 0 0 transparent;

```
### Blur
Объект `blur` содержит следующие миксины:

#### Blur
```
@include blur;
```

CSS переменные миксина `blur`:

```
--blur-0: 0 0 0 0 transparent;

```
