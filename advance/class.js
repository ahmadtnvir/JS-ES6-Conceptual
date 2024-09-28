class Animals {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  showInfo() {
    console.log(`My pet name is ${this.name}. His color is ${this.color}.`);
  }
}

const pet = new Animals("Mithu", "Green");
console.log(pet);
console.log(pet.name);
console.log(pet["color"]);
pet.showInfo();

const pet1 = new Animals("Munni", "Yellow");
console.log(pet1);
pet1.showInfo();
