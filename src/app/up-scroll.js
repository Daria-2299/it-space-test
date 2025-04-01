const upScrollBtn = document.querySelector(".up-button");
const footerBlock = document.querySelector(".footer");
upScrollBtn.addEventListener("click", scrollToUp);

const upBtnBottomPosition = +window
  .getComputedStyle(upScrollBtn)
  .bottom.slice(0, -2);

function scrollToUp() {
  document.querySelector(".header").scrollIntoView({ behavior: "smooth" });
}

window.onscroll = function () {
  const footerPosition = footerBlock.getBoundingClientRect();
  if (
    document.body.scrollTop > 150 ||
    document.documentElement.scrollTop > 150
  ) {
    upScrollBtn.style.display = "flex";
  } else {
    upScrollBtn.style.display = "none";
  }

  if (footerPosition.top < window.innerHeight) {
    upScrollBtn.style.bottom =
      window.innerHeight - footerPosition.top + upBtnBottomPosition + "px";
  } else {
    upScrollBtn.style.bottom = upBtnBottomPosition + "px";
  }
};
