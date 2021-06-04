class Runner {
  constructor(name, age,) {
    this.name = name;
    this.age = age;
    this.milesRun = 0;
    this.fitness = 25;
    this.completedRaces = [];
  }
runSomeMiles(milesNum) {
  this.milesRun = this.milesRun + milesNum;
  this.fitness = this.milesRun + this.fitness;
}
stretch() {
  this.fitness = this.fitness + .5;
}
runRace(raceName, distance) {
  this.completedRaces.push(raceName);
  this.milesRun = this.milesRun + distance;
  this.fitness = this.fitness + distance;
}
}

module.exports = Runner;
