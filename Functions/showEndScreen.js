import {handleRestartButton} from "./restartButtonHandler.js";

export function showEndScreen(score, totalQuestions, currentQuestionIndex) {
    const apiQuizContainer = document.querySelector('.container1');
    const questionContainer = document.querySelector('.question-container');

    // // TODO: solucion barata pero tendríamos que encontrar de donde sale el puto next
    // const nextButtons = document.querySelectorAll('body .next-button');
    // nextButtons.forEach(button => {
    //     button.style.display = 'none';
    // });

    questionContainer.innerHTML = '';

    const endScreen = document.createElement('div');
    endScreen.classList.add('end-screen');

    const scoreMessage = document.createElement('h2');
    scoreMessage.textContent = `Your score is: ${score} / ${totalQuestions}`;
    endScreen.appendChild(scoreMessage);

    const restartButton = document.createElement('button');
    restartButton.textContent = 'New Game';
    restartButton.classList.add('restart-button');
    endScreen.appendChild(restartButton);

    apiQuizContainer.appendChild(endScreen);

    handleRestartButton(apiQuizContainer, currentQuestionIndex);
}
