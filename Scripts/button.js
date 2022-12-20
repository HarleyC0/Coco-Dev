const buttonRed = document.getElementById("theme__button_red");
const buttonBlue = document.getElementById("theme__button_blue");
const buttonGreen = document.getElementById("theme__button_green");

let buttonColorState = "none";

buttonRed.addEventListener("click", () => {
  buttonColorState = "Red";
  validador();
});

buttonBlue.addEventListener("click", () => {
  buttonColorState = "Blue";
  validador();
});

buttonGreen.addEventListener("click", () => {
  buttonColorState = "Green";
  validador();
});

function validador() {
  switch (buttonColorState) {
    case "Red":
      buttonRedOn();
      break;
    case "Blue":
      buttonBlueOn();
      break;
    case "Green":
      buttonGreenOn();
      break;
  }
}

const cardRedF = document.getElementById(`theme__card_redFront`);
const cardBlueF = document.getElementById(`theme__card_blueFront`);
const cardGreenF = document.getElementById(`theme__card_greenFront`);
const cardRedB = document.getElementById(`theme__card_redBack`);
const cardBlueB = document.getElementById(`theme__card_blueBack`);
const cardGreenB = document.getElementById(`theme__card_greenBack`);

function buttonRedOn() {
  cardRedF.style.transform = "perspective(800px) rotateY(180deg)";
  cardBlueF.style.transform = "perspective(800px) rotateY(0deg)";
  cardGreenF.style.transform = "perspective(800px) rotateY(0deg)";
  cardRedB.style.transform = "perspective(800px) rotateY(360deg)";
  cardBlueB.style.transform = "perspective(800px) rotateY(180deg)";
  cardGreenB.style.transform = "perspective(800px) rotateY(180deg)";
}

function buttonBlueOn() {
  cardRedF.style.transform = "perspective(800px) rotateY(0deg)";
  cardBlueF.style.transform = "perspective(800px) rotateY(180deg)";
  cardGreenF.style.transform = "perspective(800px) rotateY(0deg)";
  cardRedB.style.transform = "perspective(800px) rotateY(180deg)";
  cardBlueB.style.transform = "perspective(800px) rotateY(360deg)";
  cardGreenB.style.transform = "perspective(800px) rotateY(180deg)";
}

function buttonGreenOn() {
  cardRedF.style.transform = "perspective(800px) rotateY(0deg)";
  cardBlueF.style.transform = "perspective(800px) rotateY(0deg)";
  cardGreenF.style.transform = "perspective(800px) rotateY(180deg)";
  cardRedB.style.transform = "perspective(800px) rotateY(180deg)";
  cardBlueB.style.transform = "perspective(800px) rotateY(180deg)";
  cardGreenB.style.transform = "perspective(800px) rotateY(360deg)";
}
