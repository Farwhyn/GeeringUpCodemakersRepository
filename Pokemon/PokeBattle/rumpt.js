class Rumpt extends Pokemon {
  constructor(){
    super();
    this.name = 'Rumpt'
    this.atk = 200;
    this.def = 50;
    this.hp = 50;
    this.atks = [{name: 'Attack', id:0},{name: 'Defense', id:1},{name: 'Special', id:3},{name: 'Power Up', id:2}];
    this.spritePath = './basePoke.png';
  }

    attack(step) {
      return (step % 4)
    }

}
pokemons.push(new Rumpt())
