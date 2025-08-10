# siaka-dropdown-menu-package

# @siaka/dropdown-menu

A lightweight JavaScript utility to easily create smooth, customizable dropdown menus for any web project.

## ✨ Features

- Simple, customizable CSS classes
- Works with vanilla JS (no framework required)
- Built-in close button support (but Make sure the menu block is
  positioned on css(position : absolute, fixed, sticky, relative...)
  because the close button is appenChild on the menu block so the
  button will be positioned if the menu block has some position)
- Some more are comming...

---

## ⚙️ Installation

```bash
npm install siaka-dropdown-menu

```

## How to use

```javascript
import createDropdownMenu from "siaka-dropdown-menu";
import "siaka-dropdown-menu/index.css";

const myMenu = document.getElementById("dropdown-menu");
const myToggleButton = document.getElementById("menu-toggle");

createDropdownMenu(myMenu, myToggleButton);
```

## Default button close style

```css
.default-style-dropdown-closeBtn {
  position: absolute;
  top: 20px;
  right: -30px;
}
.default-style-dropdown-closeBtn svg {
  fill: black;
  width: 2rem;
  height: 2rem;
}
```

## Add your own styles on the close button by that selector bellow ⬇️, You can re-style the button and the svg inside, as you want

```css
#new-style-dropdown-closeBtn {
  /* some  new style */
}
#new-style-dropdown-closeBtn svg {
  /* some svg new style*/
}
```
