export function nameValidation(strValue) {
  const regexp = /^[А-Яа-яё]*$/;
  let messageError = "";
  if (strValue.length === 0) {
    messageError = "Заполните поле 'Имя'.";
  } else if (strValue.length < 2 || strValue.length > 20) {
    messageError = "Имя должно содержать минимум 2 символа.";
  } else if (strValue.includes(" ")) {
    messageError = "Поле ввода должно содержать одно слово.";
  } else if (!regexp.test(strValue)) {
    messageError = "Имя может содержать только буквы русского алфавита.";
  }
  return messageError;
}

export function phoneNumberValidation(strValue) {
  const regexp = /^[0-9]{10,11}$/;
  let messageError = "";
  if (strValue.length === 0) {
    messageError = "Заполните поле 'Телефон'.";
  } else if (/[а-яА-ЯёЁa-zA-Z]/.test(strValue)) {
    messageError = "Телефонный номер не может содержать буквы.";
  } else if (!regexp.test(strValue)) {
    messageError =
      "Неправильный формат телефонного номера.Длина телефонного номера 10-11 знаков.";
  }
  return messageError;
}
