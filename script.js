const storyElement = document.getElementById('story');
const choicesElement = document.getElementById('choices');

function showStory(text, choices) {
    storyElement.innerHTML = text;
    choicesElement.innerHTML = '';
    choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.onclick = choice.action;
        choicesElement.appendChild(button);
    });
}

function startGame() {
    showStory(
        "Biel do Bravo está navegando na internet e encontra 2 jogadores de Brawl Stars.",
        [
            { text: "Convidar os 2 jogadores para montar um time", action: teamUp },
            { text: "Esquecer a ideia e continuar navegando", action: endGame }
        ]
    );
}

function teamUp() {
    showStory(
        "Os 2 jogadores concordam em montar o Team Evil Gamer.",
        [
            { text: "Treinar e montar estratégias absurdas como kit + buster", action: qualifyForFinal },
            { text: "Ir jogar Euro Truck Simulator 2 e ignorar o time", action: abandonTeam }
        ]
    );
}

function abandonTeam() {
    showStory(
        "Seu time não gostou da atitude e te abandonou. Fim de jogo baby!",
        [{ text: "Recomeçar", action: startGame }]
    );
}

function qualifyForFinal() {
    showStory(
        "Parabéns, o time está qualificado para as finais mensais de Brawl Stars!",
        [
            { text: "Jogar a final mensal amanhã", action: closeThirdPlace },
            { text: "Treinar hoje e jogar a final mensal amanhã", action: winFinal }
        ]
    );
}

function closeThirdPlace() {
    showStory(
        "Seu time chegou perto de ganhar, ficou em 3° lugar! A evolução um dia virá.",
        [{ text: "Recomeçar", action: startGame }]
    );
}

function winFinal() {
    showStory(
        "Seu time ganhou! Parabéns pela vitória!",
        [{ text: "Recomeçar", action: startGame }]
    );
}

function endGame() {
    showStory(
        "Que Pena! Não custava tentar! Fim de jogo!",
        [{ text: "Recomeçar", action: startGame }]
    );
}

// Start the game when the page loads
startGame();
