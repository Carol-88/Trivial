"use strict";

const quizContent = document.querySelector("#container");
const button = document.querySelector("#next-button");
const score = document.querySelector("#score-count");

let scoreCount = 0;
let userCount = 0;

const questions = [
  {
    question: 'What breed of dog was Marley in the film "Marley & Me" (2008)?',
    answers: [
      "Labrador Retriever",
      "Dalmatian",
      "Golden Retriever",
      "Shiba Inu",
    ],
    correct: "Labrador Retriever",
  },
];

const question = document.querySelector(questions.question);
const answers = document.querySelector(questions.answers);
const correct = document.querySelector(questions.correct);

const questionsJSON = JSON.stringify(questions);
quizContent.append(questions[0].question);

const listQuestions = document.createElement("ul");
const firstQ = document.createElement("li");
const secondQ = document.createElement("li");
const thirthQ = document.createElement("li");
const fourthQ = document.createElement("li");

quizContent.append(listQuestions, firstQ, secondQ, thirthQ, fourthQ);

firstQ.append(questions[0].answers[0]);
secondQ.append(questions[0].answers[1]);
thirthQ.append(questions[0].answers[2]);
fourthQ.append(questions[0].answers[3]);

// const patata = function (question, answers, correct) {
//   this.question = question;
//   this.answers = answers;
//   this.correct = correct;
// };

const selectAnswer = function (selectAnswer) {
  let currentQuestion = this.questions[this.currentQuestionIndex];
  if (currentQuestion.isCorrect(selectAnswer)) {
    this.score++;
  }
  this.nextQuestion();
};
