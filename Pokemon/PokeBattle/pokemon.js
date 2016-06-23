class Pokemon {
  constructor(){
  this.ready = false;
  this.name = 'Unknown';
  this.level = 20;
  this.exp = 0; // max 100
  this.hp = 100;
  this.atk = 100;
  this.def = 100;
  this.type = 1; // id of type
  this.speed = 3; // from 1 - 5
  this.spritePath = './basePoke.png';
  // max of 200 points amoung the 4 different attacks
  this.atks = [{name: 'Thunder', id:0},{name: 'Wall', id:0},{name: 'HydroPump', id:0},{name: 'Polls', id:0}];
 }

  prepare(){
   var scale;
   var sumStats = this.hp + this.atk + this.def;
   scale = 300/sumStats;
   this.hp *= scale;
   this.atk *= scale;
   this.def *= scale;

   var sumAtk = this.atks[0].power + this.atks[1].power + this.atks[2].power +this.atks[3].power;
   scale = (50*4)/sumAtk;
   this.atks[0].power *= scale;
   this.atks[1].power *= scale;
   this.atks[2].power *= scale;
   this.atks[3].power *= scale;

   this.sprite = loadImage(this.spritePath);
   this.actHp = this.hp
   this.actExp = this.exp

   this.ready = true;
 }

}