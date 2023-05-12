const InputBirth = document.querySelector("#input-date-birth");
const InputEnd = document.querySelector("#input-date-end");
const TodayButton = document.querySelector("#btn1-today");
const OutputArea = document.querySelector("#age-output");
const ResetButton = document.querySelector("#btn2-reset");
const ResultButton = document.querySelector("#result");


TodayButton.addEventListener("click", function () {
    InputEnd.value = getStrDate()
});

ResultButton.addEventListener('click', function() {
    if (!InputBirth.value || !InputEnd.value) {
        return
    }
    OutputArea.innerHTML = calcDate(InputBirth.value, InputEnd.value);
});

ResetButton.addEventListener('click', function() {
    InputBirth.value = null;
    InputEnd.value = null;
    OutputArea.innerHTML = null;
});

function calcDate(startDate, endDate) {
    startDate = new Date(startDate);
    endDate = new Date(endDate);
    let resAge = (endDate - startDate) / (1000 * 60 * 60 * 24 * 30 * 12);


    return Math.floor(resAge)
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
    return output
}
