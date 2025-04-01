import "../styles/user-page.scss";
import "./up-scroll";
import "./burger-menu";

const requestBtn = document.querySelector(".header__button");
const mobileRequestBtns = document.querySelectorAll(".mobile-menu__button");
requestBtn.addEventListener("click", goToBlock);
mobileRequestBtns.forEach((item) => item.addEventListener("click", goToBlock));

function goToBlock() {
  window.location.href = "/#contacts";
}

let observer = new IntersectionObserver(appearance, { threshold: [0.6] });
const animationBlock = document.querySelector(".user");
observer.observe(animationBlock);

function appearance(blocks) {
  blocks.forEach((item) => {
    if (item.isIntersecting) {
      item.target.style.opacity = 1;
      item.target.style.transform = "translateY(0)";
    }
  });
}
