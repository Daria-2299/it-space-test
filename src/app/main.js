import "../styles/style.scss";
import "./up-scroll";
import "./burger-menu";
import { nameValidation, phoneNumberValidation } from "./validation-fields";

const requestBtn = document.querySelector(".header__button");
const contactForm = document.forms.ContactForm;
const successfulMessage = document.querySelector(".successful-message");
const [name, phone] = Array.from(contactForm.elements);
const errorFormMsg = document.querySelector(".form__error");

requestBtn.addEventListener("click", scrollToBlock);
contactForm.addEventListener("submit", validationForm);
name.addEventListener("input", hideErrorMessage);
phone.addEventListener("input", hideErrorMessage);

function scrollToBlock() {
  document.querySelector(".connection").scrollIntoView({ behavior: "smooth" });
}

function validationForm(evt) {
  evt.preventDefault();
  let isValid = true;

  const nameValue = name.value.trim();
  const phoneValue = phone.value.trim();

  const nameValidResult = nameValidation(nameValue);
  const phoneValidResult = phoneNumberValidation(phoneValue);

  if (nameValidResult) {
    errorFormMsg.textContent = nameValidResult;
    isValid = false;
  } else if (phoneValidResult) {
    errorFormMsg.textContent = phoneValidResult;
    isValid = false;
  }
  if (isValid) {
    contactForm.reset();
    contactForm.style.display = "none";
    successfulMessage.style.display = "block";
  } else {
    errorFormMsg.style.display = "block";
  }
}

function hideErrorMessage() {
  errorFormMsg.style.display = "none";
}

let observer = new IntersectionObserver(appearance, { threshold: [0.6] });

const animationClasses = [".team", ".founder-block", ".connection"];

animationClasses.forEach((itemClass) => {
  const block = document.querySelector(itemClass);
  observer.observe(block);
});
function appearance(blocks) {
  blocks.forEach((item) => {
    if (item.isIntersecting) {
      item.target.style.opacity = 1;
      item.target.style.transform = "translateY(0)";
    }
  });
}
