"use strict";
const titleQ = document.querySelector("h2");
const buttons = document.querySelectorAll(".buttOptions");
const section = document.querySelector("#container");
const scoreCount = document.querySelector(".score-count");
const body = document.querySelector("body");
let index = 48;

async function startQuiz() {
  const res = await fetch("json/quiz.json");

  const quiz = await res.json();

  function generateRound() {
    titleQ.textContent = quiz[index].question;
    for (let buttonIndex = 0; buttonIndex < buttons.length; buttonIndex++) {
      buttons[buttonIndex].textContent = quiz[index].answers[buttonIndex];
    }
  }
  generateRound();

  section.addEventListener("click", (event) => {
    if (event.target.className !== "buttOptions") {
      return;
    }
    if (event.target.textContent === quiz[index].correct) {
      scoreCount.textContent++;
    }
    //Hacer el setTimeout para cambiar colores de los botones según la respuesta
    if (index < quiz.length - 1) {
      index++;
      generateRound();
    } else {
      body.innerHTML = `<h1>¡¡Tu puntuación es: ${scoreCount.textContent}!!</h1>`;
      //¿Cómo le damos css a este h1?
    }
  });
}

startQuiz();
