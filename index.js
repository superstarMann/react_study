const { number } = require("yargs");

Class Human {
    constructor(name:String, age: number) {
      this.name = name;
      this.age = age;
    }
  }
  
  const WHO = new Human("me", "14")
  
  console.log(WHO)