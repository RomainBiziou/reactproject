import * as themesAPI from "./fakeTheme";

const questions = [
    {
      _id: "5b21ca3eeb7f6fbccd471815",
      theme: { _id: "5b21ca3eeb7f6fbccd471818", name: "Geographie"},
      questionText: "Quelle est la capiltale de la France ?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false },
      ]
    },
    {
      _id: "5b21ca3eeb7f6fbccd471816",
      theme: { _id: "5b21ca3eeb7f6fbccd471818", name: "Culture Generale"},
      questionText: "Qui est le CEO de Tesla ?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false }
      ]
    },
    {
      _id: "5b21ca3eeb7f6fbccd471817",
      theme: { _id: "5b21ca3eeb7f6fbccd471817", name: "Culture Generale"},
      questionText: "L'iphone a été créé par quelle entreprise ?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false }
      ]
    },
    {
      _id: "5b21ca3eeb7f6fbccd471819",
      theme: { _id: "5b21ca3eeb7f6fbccd471814", name: "Histoire" },
      questionText: "Où le général de Gaulle prononce-t-il son fameux : 'Je vous ai compris'",
      answerOptions: [
        { answerText: "senegal", isCorrect: false },
        { answerText: "Mauritanie", isCorrect: false },
        { answerText: "Cote d'ivoire", isCorrect: false },
        { answerText: "Alger", isCorrect: true }
      ]
    }
  ];

  export function getQuestions() {
      return questions;
  }

  export function getQuestions(id) {
      return questions.find(q => q._id === id);
  }

  export function saveQuestions() {
      let questionInDb = questions.find(q => q._id === questions._id) || {};
      questionInDb.name = questions.name;
      questionInDb.theme = themesAPI.theme.find(t => t._id === questions.themeId);
      questionInDb.numberInStock = questions.numberInStock;
      questionInDb.dailyRentalRate = questions.dailyRentalRate;

      if (!questionInDb._id) {
          questionInDb._id = Date.now();
          questions.push(questionInDb);
      }

      return questionInDb;
  }

  export function deleteQuestion(id) {
      let questionInDb = questions.find(q => q._id === id);
      questions.splice(questions.indexOf(questionInDb), 1);
      return questionInDb
  }