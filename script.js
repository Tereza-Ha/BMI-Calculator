const countBtn = document.getElementById("submit");
const resultParagraph = document.querySelector(".text");
const bmiRange = document.querySelector(".bmi-Range");

// Funkce

function countBMI(userHeight, userWeight) {
  const result = userWeight / (userHeight * 2);
  return Math.round(result);
}

function getResult(userResult) {
  if (userResult < 18.5) {
    bmiRange.innerHTML = `You are underweight.`;
    document.querySelector(".bmi-Range").appendChild(bmiRange);
  } else if ((userResult >= 18.5) & (userResult <= 24.9)) {
    bmiRange.innerHTML = `You are in healtly range.`;
    document.querySelector(".bmi-Range").appendChild(bmiRange);
  } else if ((userResult >= 25) & (userResult <= 29.9)) {
    bmiRange.innerHTML = `You are overweight.`;
    document.querySelector(".bmi-Range").appendChild(bmiRange);
  } else if ((userResult >= 30) & (userResult <= 34.9)) {
    bmiRange.innerHTML = `You are obese.`;
    document.querySelector(".bmi-Range").appendChild(bmiRange);
  } else if (userResult >= 35) {
    bmiRange.innerHTML = `You are extremly obese.`;
    document.querySelector(".bmi-Range").appendChild(bmiRange);
  } else {
    bmiRange.innerHTML = "";
    document.querySelector(".bmi-Range").appendChild(bmiRange);
  }
}

countBtn.addEventListener("click", function (event) {
  event.preventDefault();
  resultParagraph.innerHTML = "";
  bmiRange.innerHTML = "";

  const height = document.getElementById("heightInput").value;
  const weight = document.getElementById("weightInput").value;
  const result = countBMI(height, weight);

  document.getElementById("heightInput").value = "";
  document.getElementById("weightInput").value = "";

  if (typeof result === `number` && !isNaN(result)) {
    resultParagraph.innerHTML = `Your BMI is ${result}.`;
    document.querySelector(".results").appendChild(resultParagraph);
    getResult(result);
  } else {
    resultParagraph.innerHTML = `Invalid parameters.`;
    document.querySelector(".results").appendChild(resultParagraph);
  }
});
