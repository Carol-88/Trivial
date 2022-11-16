"use strict";
const titleQ = document.querySelector("p");
const answer1 = document.querySelector(".option1");
const answer2 = document.querySelector(".option2");
const answer3 = document.querySelector(".option3");
const answer4 = document.querySelector(".option4");
const answCorrect = document.querySelector(".hidecorrect");
const buttonNext = document.querySelector("#next-button");

async function quiz() {
  const res = await fetch("json/quiz.json");

  const body = await res.json();

  console.log(body);

  //Podriamos hacer un if, para que cuando toque en la respuesta correcta, sume 1 a score, y sino, else, no sume nada.
  //Y se podría hacer un for para que vaya cambiando el 0 de body, hasta 50, cada vez que le de al boton de next

  titleQ.append(body[0].question);
  answer1.append(body[0].answers[0]);
  answer2.append(body[0].answers[1]);
  answer3.append(body[0].answers[2]);
  answer4.append(body[0].answers[3]);
  answCorrect.append(body[0].correct);
}

quiz();

// const fetchQuestions = async () => {
//   const res = await fetch("json/quiz.json");

//   const body = await res.json();

//   console.log(body);

//   titleQ.append(body[0].question);
// };

// fetchQuestions();

// async function quiz() {
//   try {
//     const response = await fetch("json/quiz.json");
//     const json = await response.json();

//     return json;
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// console.log(quiz());

// const json = fetchQuestions();
// console.log(json);
