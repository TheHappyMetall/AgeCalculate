const InputBirth = document.querySelector("#input-date-birth");
const InputEnd = document.querySelector("#input-date-end");
const TodayButton = document.querySelector("#btn1-today");
const OutputArea = document.querySelector("#age-output");
const ResetButton = document.querySelector("#btn2-reset");
const ResultButton = document.querySelector("#result");

let resYears, resMonths, resWeeks, resDays, resHours;
TodayButton.addEventListener("click", function () {
  InputEnd.value = getStrDate();
});

ResultButton.addEventListener("click", function () {
  if (!InputBirth.value || !InputEnd.value) {
    return;
  }
  calcDate(InputBirth.value, InputEnd.value);
});

ResetButton.addEventListener("click", function () {
  InputBirth.value = null;
  InputEnd.value = null;
  OutputArea.innerHTML = null;
});

function calcDate(startDate, endDate) {
  startDate = new Date(startDate);
  endDate = new Date(endDate);
  // resYears = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24 * 30 * 12));

  resHours = Math.floor((endDate - startDate) / (1000 * 60 * 60));
  resDays = Math.floor(resHours / 24);
  resWeeks = Math.floor(resDays / 7);
  resMonths = Math.floor(resDays / 30);
  resYears = Math.floor(resMonths / 12);

  showCalcDate();
}

function showCalcDate() {
  OutputArea.innerHTML = `
  Ваш возраст: <hr>${resYears} лет 
  <br> 
  <span class="line-title">или</span> 
  <br>
  ${resMonths} месяцев
  <br> 
  <span class="line-title">или</span>  
  <br>
  ${resWeeks} недель
  <br> 
  <span class="line-title">или</span>  
  <br>
  ${resDays} дней
  <br> 
  <span class="line-title">или</span>  
  <br>
  ${resHours} часов
  `;
}

function getStrDate() {
  var d = new Date();

  var month = d.getMonth() + 1;
  var day = d.getDate();

  var output =
    d.getFullYear() +
    "-" +
    (month < 10 ? "0" : "") +
    month +
    "-" +
    (day < 10 ? "0" : "") +
    day;
  return output;
}
