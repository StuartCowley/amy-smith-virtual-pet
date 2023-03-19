const MAXIMUM_FITNESS = 10;
const minHungerLevel = 0;

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = minHungerLevel;
    this.fitness = MAXIMUM_FITNESS;
};

Pet.prototype.growUp = function() {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
  };

  Pet.prototype.walk = function() {
    if ((this.fitness + 4) <= MAXIMUM_FITNESS ) {
      this.fitness += 4;
    } else {
      this.fitness = MAXIMUM_FITNESS;
    }
  };

  Pet.prototype.feed = function() {
    if ((this.hunger - 3) > minHungerLevel ) {
      this.hunger -= 3;
    } else {
      this.hunger = minHungerLevel;
    }
  };

  Pet.prototype.checkUp = function() {
    const doesPetNeedWalk = this.fitness <= 3;
    const isPetHungry = this.hunger >= 5;
    let result = "I feel great";
    const needWalk = 'I need a walk';
    const hungry = 'I am hungry';

    if (doesPetNeedWalk) {
      result = needWalk;
     }
    
     if (isPetHungry) {
        result = hungry;
      }

     if (doesPetNeedWalk && isPetHungry) {
        result = `${hungry} AND ${needWalk}`;
      }
      return result;
    };

module.exports = Pet;