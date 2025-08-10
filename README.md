# siaka-dropdown-menu-package

# @siaka/dropdown-menu

A lightweight JavaScript utility to easily create smooth, customizable dropdown menus for any web project.

## ✨ Features

- Smooth slide-in/out animations

- Simple, customizable CSS classes
- Works with vanilla JS (no framework required)
- Some more are comming...
- Built-in close button support (but Make sure the menu block is
  positioned on css(position : absolute, fixed, sticky, relative...)
  because the close button is appenChild on the menu block so the
  button will be positioned if the menu block has some position)

---

## ⚙️ Installation

```bash
npm install siaka-dropdown-menu

```

## How to use

```javascript
import createDropdownMenu from "siaka-dropdown-menu";
import "siaka-dropdown-menu/index.css";

const MyMenu = document.getElementById("dropdown-menu");
const MytoggleButton = document.getElementById("menu-toggle");

createDropdownMenu(MyMenu, MytoggleButton);
```

## Default button close

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

## Add your own styles on the close button by that selector

## You can re-style the button and the svg inside, as you want

```css
#new-style-dropdown-closeBtn {
  /* some  new style */
}
#new-style-dropdown-closeBtn svg {
  /* some svg new style*/
}
```
