# gulpBlank
Документация UI-Kit для проекта gulpBlank.

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
    "width": "1200px"
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
<td><code>@media (min-width: 1200px) { ... }</code></td>
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
--colors-brand-primary-100: #F5F6FF;
--colors-brand-primary-200: #E1E2FF;
--colors-brand-primary-300: #C9CBFF;
--colors-brand-primary-400: #9A9CD1;
--colors-brand-primary-500: #6D6E9E;
--colors-brand-primary-600: #585984;
--colors-brand-primary-700: #44456B;
--colors-brand-primary-800: #323352;
--colors-brand-primary-500-50: rgba(109, 110, 158, 0.5);
--colors-brand-primary-200-15: rgba(225, 226, 255, 0.15);
--colors-brand-secondary-200: #F9FAFF;
--colors-brand-secondary-300: #E9F3FF;
--colors-brand-secondary-400: #AAC9F0;
--colors-brand-secondary-500: #86A4CA;
--colors-accent-tertiary-400: #FF7070;
--colors-accent-tertiary-500: #F14343;
--colors-accent-tertiary-600: #DC1616;
--colors-accent-tertiary-700: #C10000;
--colors-gray-neutral-300: #F7F7F7;
--colors-gray-neutral-400: #A5A5A5;
--colors-gray-neutral-500: #545151;
--colors-gray-neutral-600: #373535;
--colors-gray-neutral-700: #211F1F;
--colors-utility-black: #000000;
--colors-utility-white-30: rgba(255, 255, 255, 0.3);
--colors-utility-white-50: rgba(255, 255, 255, 0.5);
--colors-utility-white: #ffffff;
--colors-utility-success-20: rgba(77, 190, 123, 0.2);
--colors-utility-success: #4DBE7B;
--colors-utility-error-20: rgba(241, 67, 67, 0.2);
--colors-utility-error: #F14343;
--colors-utility-warning-20: rgba(255, 155, 99, 0.2);
--colors-utility-warning: #FF9B63;
--colors-utility-link-20: rgba(27, 106, 206, 0.2);
--colors-utility-link: #1B6ACE;
--colors-complementary-yellow-1: #FFE6B5;
--default-colors-complementary-yellow-2: #FEF6E6;
--default-colors-complementary-pink-1: #E2D5DE;
--default-colors-complementary-pink-2: #EFE7EC;
--default-colors-complementary-pink-3: #F8F3F6;
--default-colors-complementary-green-default: #4DBE7B;
--default-colors-complementary-plum-default: #A45C78;

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
--fonts-family-arial: Arial, Helvetica, sans-serif;

```
#### Fonts Size
```
@include fonts-size;
```

CSS переменные миксина `fonts-size`:

```
--fonts-size-d0: 50px;
  sm: 70px;
  md: 90px;
  lg: 100px;
  xl: 120px;
  xxl: 150px;
--fonts-size-d1: 35px;
  md: 60px;
  xl: 80px;
--fonts-size-d2: 25px;
  md: 50px;
  xl: 60px;
--fonts-size-h1: 35px;
  md: 60px;
--fonts-size-h2: 30px;
  md: 50px;
--fonts-size-h3: 25px;
  md: 30px;
--fonts-size-h4: 20px;
  md: 24px;
--fonts-size-h5: 18px;
  md: 20px;
--fonts-size-t0: 20px;
  md: 24px;
--fonts-size-t1: 18px;
  md: 20px;
--fonts-size-t2: 18px;
--fonts-size-t3: 17px;
--fonts-size-t4: 16px;
--fonts-size-t5: 15px;
--fonts-size-t6: 13px;
--fonts-size-t7: 11px;

```
#### Fonts Weight
```
@include fonts-weight;
```

CSS переменные миксина `fonts-weight`:

```
--fonts-weight-d0: 600;
--fonts-weight-d1: 600;
--fonts-weight-d2: 600;
--fonts-weight-h1: 600;
--fonts-weight-h2: 600;
--fonts-weight-h3: 600;
--fonts-weight-h4: 600;
--fonts-weight-h5: 600;
--fonts-weight-t0: 400;
--fonts-weight-t1: 400;
--fonts-weight-t2: 400;
--fonts-weight-t3: 400;
--fonts-weight-t4: 400;
--fonts-weight-t5: 400;
--fonts-weight-t6: 400;
--fonts-weight-t7: 400;

```
#### Fonts Height
```
@include fonts-height;
```

CSS переменные миксина `fonts-height`:

```
--fonts-height-d0: 115%;
--fonts-height-d1: 115%;
--fonts-height-d2: 115%;
--fonts-height-h1: 115%;
--fonts-height-h2: 115%;
--fonts-height-h3: 115%;
--fonts-height-h4: 115%;
--fonts-height-h5: 115%;
--fonts-height-t0: 140%;
--fonts-height-t1: 140%;
--fonts-height-t2: 115%;
--fonts-height-t3: 115%;
--fonts-height-t4: 115%;
--fonts-height-t5: 115%;
--fonts-height-t6: 115%;
--fonts-height-t7: 115%;

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
--indents-300: 10px;
--indents-400: 10px;
  md: 14px;
--indents-500: 16px;
  md: 20px;
--indents-600: 16px;
  sm: 20px;
  xl: 30px;
--indents-650: 14px;
  sm: 20px;
  xl: 30px;
--indents-700: 16px;
  sm: 30px;
  xl: 40px;
--indents-800: 30px;
  sm: 40px;
  md: 50px;
  xl: 60px;
--indents-900: 60px;
  sm: 80px;
  md: 100px;
  xl: 120px;

```
### Transition
Объект `transition` содержит следующие миксины:

#### Transition Time
```
@include transition-time;
```

CSS переменные миксина `transition-time`:

```
--transition-time-10: 0.1s;
--transition-time-20: 0.2s;
--transition-time-30: 0.3s;
--transition-time-40: 0.4s;
--transition-time-60: 0.6s;
--transition-time-80: 0.8s;
--transition-time-100: 1s;

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
--transition-easing-cubicin: cubic-bezier(0.5, 0, 0, 1);
--transition-easing-cubicout: cubic-bezier(0.5, 0, 0.5, 1);

```
### Radius
Объект `radius` содержит следующие миксины:

#### Radius
```
@include radius;
```

CSS переменные миксина `radius`:

```
--radius-5: 5px;
--radius-10: 10px;
--radius-15: 15px;
--radius-25: 25px;
--radius-50: 50px;
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
--shadow-1: 30px 20px 30px 0px rgba(0, 0, 0, 0.15);
--shadow-2: 4px 4px 10px 0px rgba(0, 0, 0, 0.15);
--shadow-3: 0px 0px 24px 0px rgba(0, 0, 0, 0.12);
--shadow-4: 0px 10px 30px 0px rgba(0, 0, 0, 0.15);
--shadow-5: 0px 20px 30px 0px rgba(0, 0, 0, 0.15);
--shadow-6: 0px 20px 30px 0px rgba(0, 0, 0, 0.40);;
--shadow-default: 30px 10px 30px 0px rgba(0, 0, 0, 0.25);

```
### Blur
Объект `blur` содержит следующие миксины:

#### Blur
```
@include blur;
```

CSS переменные миксина `blur`:

```
--blur-0: blur(0px);
--blur-20: blur(20px);
--blur-50: blur(50px);

```
