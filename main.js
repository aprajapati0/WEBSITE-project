// JavaScript Quiz

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Input
  let answer1 = document.getElementById("q1").value.toLowerCase();
  let answer2 = document.getElementById("q2").value.toLowerCase();
  let answer3 = document.getElementById("q3").value.toLowerCase();
  let answer4 = document.getElementById("q4").value.toLowerCase();

  let result1 = 0;
  let result2 = 0;
  let result3 = 0;
  let result4 = 0;

  // Process & Output
  if (answer1 == "3") {
    document.getElementById("q1").style.backgroundColor = "lightgreen";
    document.getElementById("output1").innerHTML = `Correct!`;
    result1 = 1;
  } else {
    document.getElementById("q1").style.backgroundColor = "red";
    document.getElementById(
      "output1"
    ).innerHTML = `feedback: That is incorrect! The right answer is 3`;
    result1 = 0;
  }

  if (answer2 == "3") {
    document.getElementById("q2").style.backgroundColor = "lightgreen";
    document.getElementById("output2").innerHTML = `Correct!`;
    result2 = 1;
  } else {
    document.getElementById("q2").style.backgroundColor = "red";
    document.getElementById(
      "output2"
    ).innerHTML = `feedback: That is incorrect! The right answer is 3`;
    result2 = 0;
  }

  if (answer3 == "setters offence defence") {
    document.getElementById("q3").style.backgroundColor = "lightgreen";
    document.getElementById("output3").innerHTML = `Correct!`;
    result3 = 1;
  } else {
    document.getElementById("q3").style.backgroundColor = "red";
    document.getElementById(
      "output3"
    ).innerHTML = `feedback: That is incorrect! The right answer is setters offence defence`;
    result3 = 0;
  }

  if (answer4 == "1952" || answer4 == "1952" || answer4 == "1952") {
    document.getElementById("q4").style.backgroundColor = "lightgreen";
    document.getElementById("output4").innerHTML = `Correct`;
    result4 = 1;
  } else {
    document.getElementById("q4").style.backgroundColor = "red";
    document.getElementById(
      "output4"
    ).innerHTML = `feedback: That is incorrect! The right answer is 1952`;
    result4 = 0;
  }
  let sum = result1 + result2 + result3 + result4;

  if (sum == 0 || sum == 1) {
    document.getElementById("output").innerHTML = `good`;
  } else if (sum == 2) {
    document.getElementById("output").innerHTML = `don't give up`;
  } else if (sum == 3) {
    document.getElementById("output").innerHTML = `keep trying`;
  } else {
    document.getElementById("output").innerHTML = `AMAZING`;
  }
  let score = ((result1 + result2 + result3 + result4) / 4) * 100;

  document.getElementById("scores").innerHTML =
    `You got ` + sum + `/4! (` + score + `%)`;
}
