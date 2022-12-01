const mainEl = document.querySelector(".generator");

const passwordEl = document.createElement("input");
passwordEl.classList.add("password__field");
passwordEl.setAttribute("placeholder", "Generate password");
passwordEl.addEventListener("keypress", (e) => {
  n.preventDefault();
});

passwordEl.addEventListener("focus", (e) => {
  navigator.clipboard.writeText(passwordEl.value);
});

const copyBtn = document.createElement("button");
copyBtn.classList.add("generator__copy");
copyBtn.innerText = "Copy";
copyBtn.addEventListener("click", (e) => {
  passwordEl.select();
  passwordEl.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(passwordEl.value);
});

const generateBtn = document.createElement("button");
generateBtn.classList.add("generator__generate");
generateBtn.innerText = "Generate";
generateBtn.addEventListener("click", (e) => {
  let password = generatePassword(12);
  console.log(password);
  passwordEl.value = password;
});
mainEl.appendChild(generateBtn);
mainEl.appendChild(copyBtn);
mainEl.appendChild(passwordEl);

function generatePassword(passwordLength) {
  const allChars =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let randomStr = "";

  for (let i = 0; i < passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * allChars.length);
    randomStr += allChars[randomNumber];
  }
  return randomStr;
}
