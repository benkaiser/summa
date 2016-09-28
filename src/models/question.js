export default class Question {
  static create() {
    return (new Question()).toObject();
  }

  constructor() {
    this.generateQuestion();
  }

  generateQuestion() {
    this.question = this.getGenerator()();
  }

  getGenerator() {
    return generators[Math.floor(Math.random() * generators.length)];
  }

  toObject() {
    return this.question;
  }
};

class QuestionGenerator {
  static generateNumber() {
    return Math.ceil(Math.random() * 12);
  }
}

class MultiplicationQuestionGenerator extends QuestionGenerator {
  static generate() {
    firstNum = super.generateNumber();
    secondNum = super.generateNumber();
    return {
      text: `${firstNum} x ${secondNum}`,
      answer: firstNum * secondNum,
    };
  }
}

class DivisionQuestionGenerator extends QuestionGenerator  {
  static generate() {
    // TODO: implement
  }
}

class AdditionQuestionGenerator extends QuestionGenerator  {
  static generate() {
    firstNum = super.generateNumber();
    secondNum = super.generateNumber();
    return {
      text: `${firstNum} + ${secondNum}`,
      answer: firstNum + secondNum,
    };
  }
}

class SubtractionQuestionGenerator extends QuestionGenerator  {
  static generate() {
    firstNum = super.generateNumber();
    secondNum = super.generateNumber();

    return {
      text: `${firstNum} - ${secondNum}`,
      answer: firstNum - secondNum,
    };
  }
}

const generators = [
  MultiplicationQuestionGenerator.generate,
  // DivisionQuestionGenerator.generate,
  AdditionQuestionGenerator.generate,
  SubtractionQuestionGenerator.generate,
];
