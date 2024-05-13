import {gameState, setQuestions} from "./gameState.js";
import {fetchQuestions} from "./fetchQuestions.js";
import {render} from "./render.js";

export function chooseDifficulty() {
    const difficulty = document.createElement('div');
    difficulty.innerHTML = `
    <div id="difficulties" class="container1">
        <h1>CHOOSE DIFFICULTY</h1>
        <button id="easy">Easy</button>
        <button id="medium">Medium</button>
        <button id="hard">Hard</button>
    </div>`;

    const buttons = difficulty.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', async () => {
            gameState.selectedDifficulty = button.id;
            const questions = await fetchQuestions();
            setQuestions(questions);
            render(gameState);
        });
    });
    root.appendChild(difficulty);
}
