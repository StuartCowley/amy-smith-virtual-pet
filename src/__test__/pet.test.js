const Pet = require('../../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
      expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
  });

  describe('constructor', () => {
    it('sets the name property', () => {
      const pet = new Pet('Fido');
  
      expect(pet.name).toEqual('Fido');
    });
  });

  describe('constructor', () => {
  
    it('has a initial age of 0', () => {
      const pet = new Pet('Fido');
  
      expect(pet.age).toEqual(0);
    });
  });

  describe('growUp', () => {
    it('increments the age by 1', () => {
      const pet = new Pet('Fido');
  
      pet.growUp();
  
      expect(pet.age).toEqual(1);
    });
  });

  describe('constructor', () => {
  
    it('has a initial hunger of 0', () => {
      const pet = new Pet('Fido');
  
      expect(pet.hunger).toEqual(0);
    });
  });

  describe('growUp', () => {
    it('decrease hunger by 3', () => {
      const pet = new Pet('Fido');
  
      pet.growUp();
  
      expect(pet.hunger).toEqual(5);
    });
  });

  describe('constructor', () => {
  
    it('has a initial fitness of 10', () => {
      const pet = new Pet('Fido');
  
      expect(pet.fitness).toEqual(10);
    });
  });

  describe('growUp', () => {
    it('decrease fitness by 3', () => {
      const pet = new Pet('Fido');
  
      pet.growUp();
  
      expect(pet.fitness).toEqual(7);
    });
  });

  describe('walk', () => {
    it('increases fitness by 4', () => {
      const pet = new Pet('fido');
  
      pet.fitness = 4;
      pet.walk();
  
      expect(pet.fitness).toEqual(8);
    });
  });

  describe('walk', () => {
    it('increases fitness to a maximum of 10', () => {
      const pet = new Pet('fido');
  
      pet.fitness = 8;
      pet.walk();
  
      expect(pet.fitness).toEqual(10);
    });
  });

  describe('feed', () => {
    it('decreases hunger by 3', () => {
      const pet = new Pet('fido');
  
      pet.hunger = 9;
      pet.feed();
  
      expect(pet.hunger).toEqual(6);
    });
  });  

  describe('checkUp', () => {
    it('return string if fitness is 3 or less', () => {
      const pet = new Pet('fido');
     
      pet.fitness = 2;
  
      expect(pet.checkUp()).toEqual('I need a walk');
    });
});

  describe('checkUp', () => {
        it('return string if hunger is 5 or less', () => {
          const pet = new Pet('fido');
         
          pet.hunger = 6;
          
      expect(pet.checkUp()).toEqual('I am hungry');
    });
  });  

  describe('checkUp', () => {
    it('return string if fitness is 3 or less and hunger is 5 or less', () => {
      const pet = new Pet('fido');

      pet.fitness = 2;
      pet.hunger = 6;
      
     expect(pet.checkUp()).toEqual('I am hungry AND I need a walk');
});
});  

describe('checkUp', () => {
    it('return string if fitness is not 3 or less and hunger is not 5 or less', () => {
      const pet = new Pet('fido');
      
    expect(pet.checkUp()).toEqual('I feel great');
});
});  

describe('feed', () => {
  
    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');
  
        pet.age = 30;
  
        expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
      });
    });