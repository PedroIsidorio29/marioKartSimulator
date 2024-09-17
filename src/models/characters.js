class Characters {
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

module.exports = Characters