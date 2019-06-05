

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

function mapNamesToResults(quiz) {
  const strAnswers = quiz.answers.map(answer => {
    return `${answer.question.name}:\t${answer.isCorrect === null ? answer.text : answer.isCorrect}`
  })

  return strAnswers.join('\n')
}

const quizWithResults = runQuiz(createQuiz(questionsList));

console.log(mapNamesToResults(quizWithResults));
