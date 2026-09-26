# 99.css

[98.css](https://github.com/jdan/98.css), rebuilt to be modular and scalable.

- **Modular**: each component is its own CSS file, import only what you use.
- **Scalable**: every size derives from `--scale`, bevel lines snap to whole pixels.
- **No build step**: plain CSS with relative `url()`s, works with any bundler or a `<link>`.

Docs: https://dragunovartem99.github.io/99.css/

## Install

```sh
npm install @dragunovartem99/99.css
```

```js
import "@dragunovartem99/99.css";
```

## Modules

Core (always needed): `tokens.css`, `fonts.css`, `base.css`.

Components: `button.css`, `checkbox.css`, `radio.css`, `group-box.css`, `field-row.css`,
`text-box.css`, `slider.css`, `dropdown.css`, `window.css`, `tree-view.css`, `tabs.css`,
`table-view.css`, `progress.css`, `field-border.css`, `scrollbar.css`.

```js
import "@dragunovartem99/99.css/tokens.css";
import "@dragunovartem99/99.css/fonts.css";
import "@dragunovartem99/99.css/base.css";
import "@dragunovartem99/99.css/window.css";
```

## Scaling

```css
:root {
	--scale: 1.5;
}
```

Size tokens resolve where they are declared, so to scale only a subtree, mark it with `data-scale`:

```html
<div data-scale style="--scale: 2">...</div>
```

Use `--px` (one scaled pixel) and `--border-width` (one crisp bevel line) in your own styles.

## Development

```sh
npm run dev    # docs with live reload
npm run build  # static docs into dist/
```

## License

MIT. Based on 98.css by Jordan Scales.
