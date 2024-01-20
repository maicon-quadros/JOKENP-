const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

let humanScoreNumber = 0
let machineScoreNumber = 0

const GAME_OPTIONS = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSOR:'scissors'
}

const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choice = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSOR]
    const randomNumber = Math.floor(Math.random() * 3)

    return choice[randomNumber]
}

const playTheGame = (human, machine) => {

    console.log('humano: ' + human + 'maquina: ' + machine)


    if (human === machine) {
        result.innerHTML = "EMPATOU!"
    } else if (human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSOR || human === GAME_OPTIONS.SCISSOR && machine === GAME_OPTIONS.PAPER || human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK) {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = "VOCÊ GANHOU!"
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "VOCÊ PERDEU!"
    }



}