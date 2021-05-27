
class Dragon {
  constructor(name, rider, hungry) {
    this.name = name;
    this.rider = rider;
    this.hungry = hungry || true;

  }
greet(rider) {
  return `Hi, ${this.rider}!`;
}
eat(hungry) {
  
  }
}

};



module.exports = Dragon;
