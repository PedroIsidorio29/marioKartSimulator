const Characters = require("./models/characters.js")

const player1 = new Characters({ nome: "Mario", velocidade: 4, manobrabilidade: 3, poder: 3, pontos: 0 })
const player2 = new Characters({ nome: "Luigi", velocidade: 3, manobrabilidade: 4, poder: 4, pontos: 0 })

function rollDice() {
  return Math.floor(Math.random() * 6) + 1
}

console.log(player1)