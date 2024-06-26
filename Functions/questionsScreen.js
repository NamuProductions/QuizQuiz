import { questionByIndex } from "./questionByIndex.js";
import { theAnswerIs } from "./theAnswerIs.js";
import { onNext } from "./onNext.js";

export function questionsScreen(gameState, questions) {
    const screen = document.createElement('div');
    const messageElement = document.createElement('p');
    messageElement.textContent = '¡Bienvenido al juego de preguntas!';
    screen.appendChild(messageElement);

    const currentQuestion = questionByIndex(questions, gameState);

    showQuestion(screen, currentQuestion.question);
    showOptions(screen, currentQuestion.possibleAnswers);

    const nextButton = createNextButton(screen);
    nextButton.style.display = 'none';
    nextButton.addEventListener('click', () => onNext(gameState));

    screen.querySelectorAll('.option-button').forEach(optionButton => {
        optionButton.addEventListener('click', () => {
            theAnswerIs(optionButton, currentQuestion, gameState);
            nextButton.style.display = 'block';
        });
    });

    return screen;
}

function showQuestion(screen, question) {
    const questionElement = document.createElement('h1');
    questionElement.textContent = question;
    screen.appendChild(questionElement);
}

function showOptions(screen, options) {
    options.forEach(option => {
        const optionButton = document.createElement('button');
        optionButton.textContent = option;
        optionButton.classList.add('option-button');
        screen.appendChild(optionButton);
    });
}

function createNextButton(screen) {
    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next';
    nextButton.classList.add('next-button');
    screen.appendChild(nextButton);
    return nextButton;
}
