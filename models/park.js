const Park = function(name, ticketPrice){
  this.name = name
  this.ticketPrice = ticketPrice
  this.dinosaurs = []
}

Park.prototype.addDinosaur = function (dino) {
  this.dinosaurs.push(dino)
};

Park.prototype.deleteDinosaur = function () {
  this.dinosaurs.pop()
};

Park.prototype.findMostVistorDino = function () {

  let mostVistorDino = this.dinosaurs[0]

  for (let dinosaur of this.dinosaurs){
    if (dinosaur.guestsAttractedPerDay > mostVistorDino.guestsAttractedPerDay){
      mostVistorDino = dinosaur
    }
  }
  return mostVistorDino
};

Park.prototype.selectBySpecies = function (species) {

  let arrayBySpecies = []

  for (let dinosaur of this.dinosaurs){
    if (dinosaur.species === species){
      arrayBySpecies.push(dinosaur)
    }
  }
  return arrayBySpecies
};

Park.prototype.vistorsPerDay = function () {
  let total = 0
  for (let dinosaur of this.dinosaurs){
    total += dinosaur.guestsAttractedPerDay
  }
  return total
};



Park.prototype.vistorsPerYear = function () {
  return this.vistorsPerDay() * 365
};

Park.prototype.revenuePerYear = function () {
  return this.vistorsPerYear() * this.ticketPrice
};


Park.prototype.deleteBySpecies = function (deleteSpecies) {
  let newArray = []
for (let dinosaur of this.dinosaurs){
  if (dinosaur.species !== deleteSpecies){
    newArray.push(dinosaur)
  }
}
  this.dinosaurs = newArray
};


module.exports = Park
