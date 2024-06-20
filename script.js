const passwordBox = document.getElementById("password");
const length = 16;

const upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM";
const lowerCase = "qwertyuiopasdfghjklzxcvbnm";
const number = "0123456789";
const symbol = "!@#$%^&*()_+=-[]}{|<>";

const allChar = upperCase + lowerCase + number + symbol;

function createPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (password.length < length) {
    password += allChar[Math.floor(Math.random() * allChar.length)];
  }
  password = password
    .split("")
    .sort(() => Math.random() - 0.75)
    .join("");

  passwordBox.value = password;
}

function copyPassword() {
  navigator.clipboard
    .writeText(passwordBox.value)
    .then(() => {
      alert("Password copied to clipboard!");
    })
    .catch((err) => {
      console.error("Failed to copy!", err);
    });
}
