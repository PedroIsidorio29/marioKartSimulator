const Characters = require("./models/characters.js")
const ClashEnum = require("./models/clash.enum.js")

const player1 = new Characters({ nome: "Mario", velocidade: 4, manobrabilidade: 3, poder: 3, pontos: 0 })
const player2 = new Characters({ nome: "Luigi", velocidade: 3, manobrabilidade: 4, poder: 4, pontos: 0 })

async function rollDice() {
  return Math.floor(Math.random() * 6) + 1
}

function logRollResult(characterName, block, diceResult, attribute) {
  console.log(`🎲 ${characterName} rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`);
}

async function getRandomBlock() {
  const random = Math.random()
  if (random < 0.33)
    return ClashEnum.RETA
  if (random < 0.66)
    return ClashEnum.CURVA
  return ClashEnum.CONFRONTO
}

async function declareWinner(character1, character2) {
  console.log(`Resultado final:`);
  console.log(`${character1.nome}: ${character1.pontos} ponto(s)`);
  console.log(`${character2.nome}: ${character2.pontos} ponto(s)`);

  if (character1.pontos > character2.pontos)
    return character1.vitoria()
  
  if (character2.pontos > character1.pontos)
    return character2.vitoria()
  
  console.log("A corrida terminou em empate");
}

async function playRaceEngine(character1, character2) {
  for (let round = 0; round < 5; round++) {
    console.log(`🏁 ${round + 1}° Rodada`)
    const block = await getRandomBlock()
    console.log(`Bloco: ${block}`)

    let diceResult1 = await rollDice()
    let diceResult2 = await rollDice()

    let totalTestSkill1 = 0
    let totalTestSkill2 = 0

    if (block === ClashEnum.RETA) {
      totalTestSkill1 = diceResult1 + character1.velocidade
      totalTestSkill2 = diceResult2 + character2.velocidade
      logRollResult(character1.nome, "Velocidade", diceResult1, character1.velocidade)
      logRollResult(character2.nome, "Velocidade", diceResult2, character2.velocidade)
    }

    if (block === ClashEnum.CURVA) {
      totalTestSkill1 = diceResult1 + character1.manobrabilidade
      totalTestSkill2 = diceResult2 + character2.manobrabilidade
      logRollResult(character1.nome, "Manobrabilidade", diceResult1, character1.manobrabilidade)
      logRollResult(character2.nome, "Manobrabilidade", diceResult2, character2.manobrabilidade)
    }

    if (block === ClashEnum.CONFRONTO) {
      let powerResult1 = diceResult1 + character1.poder;
      let powerResult2 = diceResult2 + character2.poder;

      console.log(`🥊 ${character1.nome} confrontou com ${character2.nome}`)
      logRollResult(character1.nome, "Poder", diceResult1, character1.poder)
      logRollResult(character2.nome, "Poder", diceResult2, character2.poder)

      if (powerResult1 > powerResult2) character2.perdeuPonto(character1.nome)
      if (powerResult2 > powerResult1) character1.perdeuPonto(character2.nome)
      powerResult2 === powerResult1 && console.log("Confronto empatado! Nenhum ponto foi perdido");
    }

    if (totalTestSkill1 > totalTestSkill2) character1.marcouPonto()
    if (totalTestSkill2 > totalTestSkill1) character2.marcouPonto()

    console.log("-----------------------------");
  }
}

(async function main() {
  console.log(`🏁🚨 Corrida entre ${player1.nome} e ${player2.nome} começando...`)
  await playRaceEngine(player1, player2)
  await declareWinner(player1, player2)
})()