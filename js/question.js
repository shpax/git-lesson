function createQuestion(name, text, options = null, correctAnswer = null) {
  return {
    text,
    name,
    options,
    correctAnswer,
  };
}