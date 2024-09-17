class CharacterClass {
  constructor({ nome, velocidade, manobrabilidade, poder, pontos }) {
    this.nome = nome
    this.velocidade = velocidade
    this.manobrabilidade = manobrabilidade
    this.poder = poder
    this.pontos = pontos
  }

  marcouPonto() {
    console.log(`🎉 ${this.nome} marcou um ponto!`);
    this.pontos++
  }

  perdeuPonto(nome) {
    if (!this.pontos) return
    console.log(`🐢 ${nome} venceu o confronto! ${this.nome} perdeu 1 ponto`);
    this.pontos--
  }

  vitoria() {
    console.log(`🏆 ${this.nome} venceu a corrida! Parabéns!`);
  }
}

const characters = [
  new CharacterClass({ nome: "Mario", velocidade: 4, manobrabilidade: 3, poder: 3, pontos: 0 }),
  new CharacterClass({ nome: "Peach", velocidade: 3, manobrabilidade: 4, poder: 2, pontos: 0 }),
  new CharacterClass({ nome: "Yoshi", velocidade: 2, manobrabilidade: 4, poder: 3, pontos: 0 }),
  new CharacterClass({ nome: "Bowser", velocidade: 5, manobrabilidade: 2, poder: 5, pontos: 0 }),
  new CharacterClass({ nome: "Luigi", velocidade: 3, manobrabilidade: 4, poder: 4, pontos: 0 }),
  new CharacterClass({ nome: "Donkey Kong", velocidade: 2, manobrabilidade: 2, poder: 5, pontos: 0 })
]

module.exports = characters