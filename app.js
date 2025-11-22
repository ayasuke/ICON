// 取得元素
const birthdayInput = document.getElementById("dogBirthday");
const calcBtn = document.getElementById("calcBtn");
const resultBox = document.getElementById("result");

// 每次開啟頁面，自動帶入 localStorage 的生日
window.addEventListener("load", function () {
  const savedBirthday = localStorage.getItem("dogBirthday");
  if (savedBirthday) {
    birthdayInput.value = savedBirthday;
  }
});

// 換算按鈕功能
calcBtn.addEventListener("click", function () {
  const birthday = birthdayInput.value;

  if (!birthday) {
    resultBox.textContent = "❗ 請輸入狗狗的生日";
    return;
  }

  // 儲存生日到 localStorage
  localStorage.setItem("dogBirthday", birthday);

  // 計算狗狗年齡（以年為單位）
  const birthDate = new Date(birthday);
  const today = new Date();

  const diffTime = today - birthDate;
  const dogAge = diffTime / (1000 * 60 * 60 * 24 * 365.25); // 換成年

  if (dogAge <= 0) {
    resultBox.textContent = "❗ 請輸入正確的生日（不能是未來）";
    return;
  }

  // 公式：16 × ln(dogAge) + 31
  const humanAge = 16 * Math.log(dogAge) + 31;

  resultBox.textContent = `換算結果：相當於人類約 ${humanAge.toFixed(1)} 歲`;
});
