class Personne {
  constructor(n, a) {
    this.nom = n;
    this._age = a;
  }

  getAge() {
    return this._age;
  }

  setAge(nouvelAge) {
    if (nouvelAge >= 0) {
      this._age = nouvelAge;
    } else {
      console.error(`l'age ne doit pas etre négatif !`);
    }
  }

  afficherDetails() {
    console.log(`Je m'appelle ${this.nom} et j'ai ${this._age} ans.`);
  }
}

// instancier la classe personne
const personne = new Personne("TCHEROU Maliki", 30);
const age = personne.getAge();
console.log(age);

personne.setAge(31);
console.log(personne.getAge());
