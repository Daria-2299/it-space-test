const burgerBtns = document.querySelectorAll(".burger-button");
const closeBurgerMenuBtns = document.querySelectorAll(".burger-close");

burgerBtns.forEach((item) => item.addEventListener("click", openBurgerMenu));
closeBurgerMenuBtns.forEach((item) =>
  item.addEventListener("click", closeBurgerMenu)
);

function closeBurgerMenu() {
  const isFooter = Array.from(this.classList).includes("burger-close--footer");
  const burgerMenuName = isFooter ? ".mobile-menu--footer" : ".mobile-menu";
  const burgerMenu = document.querySelector(burgerMenuName);
  burgerMenu.style.display = "none";
}

function openBurgerMenu() {
  const isFooter = Array.from(this.classList).includes("burger-button--footer");
  const burgerMenuName = isFooter ? ".mobile-menu--footer" : ".mobile-menu";
  const burgerMenu = document.querySelector(burgerMenuName);
  burgerMenu.style.display = "flex";

  const requestBtn = burgerMenu.querySelector(".mobile-menu__button");
  const menuItems = burgerMenu.querySelectorAll(".burger-menu__link");
  requestBtn.addEventListener("click", scrollToBlock);
  menuItems.forEach((item) => {
    item.addEventListener("click", closeBurgerMenus);
  });
}

function closeBurgerMenus() {
  const burgerMenus = document.querySelectorAll(".mobile-menu");
  burgerMenus.forEach((item) => (item.style.display = "none"));
}

function scrollToBlock() {
  document.querySelector(".connection").scrollIntoView({ behavior: "smooth" });
  closeBurgerMenus();
}
