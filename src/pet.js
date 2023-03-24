const MAXIMUM_FITNESS = 10;
const minHungerLevel = 0;

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = minHungerLevel;
    this.fitness = MAXIMUM_FITNESS;
    this.children = [];
};

Pet.prototype = {
    get isAlive() {
      return this.age < 30 && this.hunger < 10 && this.fitness > 0;
    }
  };

Pet.prototype.growUp = function() {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
      }
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
  };

  Pet.prototype.walk = function() {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
      }
    if ((this.fitness + 4) <= MAXIMUM_FITNESS ) {
      this.fitness += 4;
    } else {
      this.fitness = MAXIMUM_FITNESS;
    }
  };

  Pet.prototype.feed = function() {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
      }
    if ((this.hunger - 3) > minHungerLevel ) {
      this.hunger -= 3;
    } else {
      this.hunger = minHungerLevel;
    }
  };

  Pet.prototype.checkUp = function() {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
      }
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

    Pet.prototype.haveBaby = function(babyName) { 
        const baby = new Pet(babyName);
        this.children.push(baby);
    }

    Pet.prototype.adoptChild = function(child) {
        this.children.push(child);
    }


module.exports = Pet;