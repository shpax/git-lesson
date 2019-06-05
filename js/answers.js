function saveAnswer(question, text) {
  let isCorrect = null;
  
  if (question.correctAnswer) isCorrect = question.correctAnswer === text;

  return {
    question,
    text,
    isCorrect,
  }
}


function askQuestion(question) {
  let questionText = question.text;
  if (question.options) {
    questionText += '\n' + question.options.map(o => `- ${o}`).join('\n')
  }
  
  return prompt(questionText);
}