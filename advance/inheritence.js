class Father {
  constructor(name, age, house) {
    this.name = name;
    this.age = age;
    this.house = house;
  }
  fatherInfo() {
    console.log(
      `My father name is ${this.name}. He is ${this.age} years old. We have a house. The house name is ${this.house}.`
    );
  }
}

const father = new Father("Ahmad", 60, "Villa");
console.log(father);
father.fatherInfo();

/----------------------------------------------------------------------------------------------------------------------------------------/ 

class Son extends Father {
  constructor(name, age, house, office) {
    super(name, age, house);
    this.office = office;
  }
  sonInfo() {
    console.log(
      `My name is ${this.name}. I am ${this.age} years old. I live in ${this.house}. I have an office. The office name is ${this.office}.`
    );
  }
}

const son = new Son("Tanvir", 28, "Villa", "Dream Deviser");
console.log(son);
son.sonInfo();
