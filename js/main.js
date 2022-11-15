"use strict";
const titleQ = document.querySelector("p");
const answer1 = document.querySelector("option1");
const answer2 = document.querySelector("option2");
const answer3 = document.querySelector("option3");
const answer4 = document.querySelector("option4");
const buttonNext = document.querySelector("next-button");

async function quiz() {
  const res = await fetch("json/quiz.json");

  const body = await res.json();

  console.log(body);

  titleQ.append(body[0].question);
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
