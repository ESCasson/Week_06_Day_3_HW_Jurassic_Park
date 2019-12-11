const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
      dino = new Dinosaur('T-Rex','carnivore', 1000)
      dino2 = new Dinosaur('Dippy', 'herbivore', 500)
      dino3 = new Dinosaur('Flying One', 'carnivore', 5000)
      dino4 = new Dinosaur('T-Rex','carnivore', 950)
      park = new Park('The island', 5)


  })

  it('should have a name', function(){
    const actual = park.name
    assert.strictEqual(actual, 'The island')
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice
    assert.strictEqual(actual, 5)
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurs
    assert.deepStrictEqual(actual, [])
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dino)
    const actual = park.dinosaurs.length
    assert.strictEqual(actual, 1)
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur(dino)
    park.addDinosaur(dino2)
    park.deleteDinosaur()
    const actual = park.dinosaurs.length
    assert.strictEqual(actual, 1)
  });

  it('should be able to find the dinosaur that attracts the most visitors',
  function(){
    park.addDinosaur(dino)
    park.addDinosaur(dino2)
    park.addDinosaur(dino3)

    const actual = park.findMostVistorDino()

    assert.deepStrictEqual(actual, dino3)


  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDinosaur(dino)
    park.addDinosaur(dino2)
    park.addDinosaur(dino3)
    park.addDinosaur(dino4)

    const actual = park.selectBySpecies('T-Rex')

    assert.deepStrictEqual(actual, [dino, dino4])

  });

  it('should be able to calculate the total number of visitors per day',
  function(){
    park.addDinosaur(dino)
    park.addDinosaur(dino2)

    const actual = park.vistorsPerDay()
    assert.strictEqual(actual, 1500)

  });

  it('should be able to calculate the total number of visitors per year',
  function(){
    park.addDinosaur(dino)
    park.addDinosaur(dino2)

    const actual = park.vistorsPerYear()

    assert.strictEqual(actual, (1500 * 365))

  });

  it('should be able to calculate total revenue for one year',
function(){

  park.addDinosaur(dino)
  park.addDinosaur(dino2)

  const actual = park.revenuePerYear()

  assert.strictEqual(actual, (1500 * 365 * 5))


});

it('should be able to remove dinosaurs of a certain species', function(){
  park.addDinosaur(dino)
  park.addDinosaur(dino2)
  park.addDinosaur(dino3)
  park.addDinosaur(dino4)

  const actual = park.deleteBySpecies('T-Rex')

  assert.deepStrictEqual(park.dinosaurs,[dino2, dino3])
})

});
