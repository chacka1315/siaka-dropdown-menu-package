import "./index.css";
import closeIcon from "./assets/close.inline.svg";

function createDropdownMenu(menu, openBtn) {
  //hidden the menu
  menu.classList.add("siaka-dropdown-menu-hidden");

  //create an close button
  const closeBtn = document.createElement("div");
  closeBtn.innerHTML = closeIcon;
  closeBtn.classList.add("default-style-dropdown-closeBtn");
  closeBtn.id = "new-style-dropdown-closeBtn";

  menu.appendChild(closeBtn);

  let isOpen = false;
  const openMenu = () => {
    menu.classList.remove("siaka-dropdown-menu-hidden");
    menu.classList.add("siaka-dropdown-menu-visible");
    openBtn.classList.add("siaka-dropdown-openBtn-hidden");
    isOpen = true;
  };

  const closeMenu = () => {
    menu.classList.remove("siaka-dropdown-menu-visible");
    menu.classList.add("siaka-dropdown-menu-hidden");
    openBtn.classList.remove("siaka-dropdown-openBtn-hidden");
    isOpen = false;
  };

  //open-clode clicks events
  [openBtn, closeBtn].forEach((button) => {
    button.addEventListener("click", () => {
      isOpen ? closeMenu() : openMenu();
    });
  });

  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !openBtn.contains(e.target)) {
      isOpen && closeMenu();
    }
  });
}

export default createDropdownMenu;
