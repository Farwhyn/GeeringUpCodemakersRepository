class Bernie extends Pokemon {
  constructor(){
    super();
    this.name = 'Bernie'
    this.atk = 200;
    this.def = 50;
    this.hp = 50;
    this.atks = [{name: 'Thunder', id:0},{name: 'Wall', id:1},{name: 'HydroPump', id:3},{name: 'Polls', id:2}];
    this.spritePath = './bernie.png';
  }

  attack(step) {
    return (step % 4)
  }
}
pokemons.push(new Bernie())
