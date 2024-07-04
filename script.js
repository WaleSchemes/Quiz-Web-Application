const startButton = document.getElementById('start-button');
const quizPage = document.getElementById('quiz-page');
const startPage = document.getElementById('start-page');
const resultPage = document.getElementById('result-page');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answers');
const nextButton = document.getElementById('next-button');
const prevButton = document.getElementById('prev-button');
const resultElement = document.getElementById('result');
const restartButton = document.getElementById('restart-button');

let currentQuestionIndex = 0;
let score = 0;

const questions = [
    {
        question: 'What is the capital of France?',
        answers: [
            { text: 'Paris', correct: true },
            { text: 'London', correct: false },
            { text: 'Berlin', correct: false },
            { text: 'Madrid', correct: false }
        ]
    },
    {
        question: 'Which planet is known as the Red Planet?',
        answers: [
            { text: 'Earth', correct: false },
            { text: 'Mars', correct: true },
            { text: 'Jupiter', correct: false },
            { text: 'Saturn', correct: false }
        ]
    },
    {
        question: 'What is the capital of Nigeria?',
        answers: [
            { text: 'Abuja', correct: true },
            { text: 'Lagos', correct: false },
            { text: 'Benin', correct: false },
            { text: 'Minna', correct: false }
        ]
    },
    {
        question: 'Which fruit has the smallest seed?',
        answers: [
            { text: 'Orange', correct: false },
            { text: 'Mustard', correct: true },
            { text: 'Mango', correct: false },
            { text: 'Pawpaw', correct: false }
        ]
    },
    {
        question: 'What is the capital of Delta?',
        answers: [
            { text: 'Asaba', correct: true },
            { text: 'Lagos', correct: false },
            { text: 'Benin', correct: false },
            { text: 'Enugu', correct: false }
        ]
    },
    {
        question: 'Which element has the chemical symbol O?',
        answers: [
            { text: 'Oxygen', correct: true },
            { text: 'Osmium', correct: false },
            { text: 'Oganesson', correct: false },
            { text: 'Oxygenium', correct: false }
        ]
    },
    {
        question: 'Who wrote "Romeo and Juliet"?',
        answers: [
            { text: 'William Shakespeare', correct: true },
            { text: 'Charles Dickens', correct: false },
            { text: 'Jane Austen', correct: false },
            { text: 'Mark Twain', correct: false }
        ]
    },
    {
        question: 'Which planet is the hottest in the solar system?',
        answers: [
            { text: 'Venus', correct: true },
            { text: 'Mercury', correct: false },
            { text: 'Mars', correct: false },
            { text: 'Jupiter', correct: false }
        ]
    },
    {
        question: 'What is the largest mammal in the world?',
        answers: [
            { text: 'Blue Whale', correct: true },
            { text: 'Elephant', correct: false },
            { text: 'Giraffe', correct: false },
            { text: 'Hippopotamus', correct: false }
        ]
    },
    {
        question: 'What is the hardest natural substance on Earth?',
        answers: [
            { text: 'Diamond', correct: true },
            { text: 'Gold', correct: false },
            { text: 'Iron', correct: false },
            { text: 'Platinum', correct: false }
        ]
    },
    {
        question: 'What is the smallest country in the world?',
        answers: [
            { text: 'Vatican City', correct: true },
            { text: 'Monaco', correct: false },
            { text: 'San Marino', correct: false },
            { text: 'Liechtenstein', correct: false }
        ]
    },
    {
        question: 'Which ocean is the largest?',
        answers: [
            { text: 'Pacific Ocean', correct: true },
            { text: 'Atlantic Ocean', correct: false },
            { text: 'Indian Ocean', correct: false },
            { text: 'Arctic Ocean', correct: false }
        ]
    },
    {
        question: 'What is the capital of Australia?',
        answers: [
            { text: 'Canberra', correct: true },
            { text: 'Sydney', correct: false },
            { text: 'Melbourne', correct: false },
            { text: 'Brisbane', correct: false }
        ]
    },
    {
        question: 'Which famous scientist developed the theory of relativity?',
        answers: [
            { text: 'Albert Einstein', correct: true },
            { text: 'Isaac Newton', correct: false },
            { text: 'Galileo Galilei', correct: false },
            { text: 'Nikola Tesla', correct: false }
        ]
    },
    {
        question: 'Which country is known as the Land of the Rising Sun?',
        answers: [
            { text: 'Japan', correct: true },
            { text: 'China', correct: false },
            { text: 'South Korea', correct: false },
            { text: 'India', correct: false }
        ]
    },
    {
        question: 'Which Nigerian city is known as the "Garden City"?',
        answers: [
            { text: 'Port Harcourt', correct: true },
            { text: 'Abuja', correct: false },
            { text: 'Lagos', correct: false },
            { text: 'Kano', correct: false }
        ]
    },
    {
        question: 'What is Nigeria’s most populous city?',
        answers: [
            { text: 'Lagos', correct: true },
            { text: 'Abuja', correct: false },
            { text: 'Kano', correct: false },
            { text: 'Ibadan', correct: false }
        ]
    },
    {
        question: 'Which river is the longest in Nigeria?',
        answers: [
            { text: 'River Niger', correct: true },
            { text: 'River Benue', correct: false },
            { text: 'Cross River', correct: false },
            { text: 'River Sokoto', correct: false }
        ]
    },
    {
        question: 'Who was the first president of Nigeria?',
        answers: [
            { text: 'Nnamdi Azikiwe', correct: true },
            { text: 'Olusegun Obasanjo', correct: false },
            { text: 'Yakubu Gowon', correct: false },
            { text: 'Goodluck Jonathan', correct: false }
        ]
    },
    {
        question: 'Which Nigerian state is known as the "Land of Promise"?',
        answers: [
            { text: 'Akwa Ibom', correct: true },
            { text: 'Kaduna', correct: false },
            { text: 'Osun', correct: false },
            { text: 'Enugu', correct: false }
        ]
    }
];

startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', () => {
    if (currentQuestionIndex === questions.length - 1) {
        showResult();
    } else {
        currentQuestionIndex++;
        setNextQuestion();
    }
});
prevButton.addEventListener('click', () => {
    currentQuestionIndex--;
    setNextQuestion();
});
restartButton.addEventListener('click', startQuiz);

function startQuiz() {
    startPage.classList.add('hidden');
    resultPage.classList.add('hidden');
    quizPage.classList.remove('hidden');
    currentQuestionIndex = 0;
    score = 0;
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    console.log("Current Question:", currentQuestion);
    showQuestion(currentQuestion);
    prevButton.classList.toggle('hidden', currentQuestionIndex === 0);
    nextButton.textContent = currentQuestionIndex === questions.length - 1 ? 'Submit' : 'Next';
}

function showQuestion(question) {
    console.log("Question object:", question);
    if (!question) {
        console.error("Question is undefined");
        return;
    }
    questionElement.textContent = `Question ${currentQuestionIndex + 1}: ${question.question}`;
    const labels = ['a', 'b', 'c', 'd', 'e'];
    question.answers.forEach((answer, index) => {
        const div = document.createElement('div');
        div.classList.add('answer');
        
        const label = document.createElement('label');
        label.textContent = `${labels[index]}. ${answer.text}`;
        
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'answer';
        input.value = answer.correct;
        input.addEventListener('click', () => selectAnswer(input));
        
        div.appendChild(input);
        div.appendChild(label);
        answerButtonsElement.appendChild(div);
    });
}

function resetState() {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(input) {
    Array.from(answerButtonsElement.children).forEach(child => {
        child.querySelector('input').disabled = true;
    });
    if (input.value === 'true') {
        score++;
    }
}

function showResult() {
    const percentage = Math.round((score / questions.length) * 100);
    resultElement.textContent = `You scored ${percentage}%!`;
    resultPage.classList.remove('hidden');
    quizPage.classList.add('hidden');
}
