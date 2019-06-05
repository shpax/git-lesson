

function createQuiz(questions) {
  return {
    questions,
    answers: null,
  }
}

const questionsList = [
  createQuestion('name', 'Your name?'),
  createQuestion('company', 'Your company?'),
  createQuestion('developer', 'Wanna paly tennis?', ['Yes', 'No'], 'No'),
]

function runQuiz(quiz) {
  quiz.answers = quiz.questions.map(question => {
    const answerText = askQuestion(question);

    return saveAnswer(question, answerText);
  })

  return quiz;
}

console.log(runQuiz(createQuiz(questionsList)));
