"use strict";
const titleQ = document.querySelector("h2");
const buttons = document.querySelectorAll(".buttOptions");
const section = document.querySelector("#container");
const scoreCount = document.querySelector(".score-count");
const body = document.querySelector("body");
let index = 0;

async function startQuiz() {
  try {
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
        event.target.className = "correct";
      } else {
        for (let i = 0; i < buttons.length; i++) {
          if (buttons[i].textContent === quiz[index].correct)
            buttons[i].className = "correct";
        }
        event.target.className = "incorrect";
      }
      if (index < quiz.length - 1) {
        index++;
        setTimeout(() => {
          generateRound();
          for (let i = 0; i < buttons.length; i++) {
            buttons[i].className = "buttOptions";
          }
        }, 2000);
      } else {
        body.innerHTML = `<h1>¡¡Tu puntuación es ${scoreCount.textContent}!!</h1>`;
      }
    });
  } catch (error) {
    console.log(error.message);
  }
}

startQuiz();
