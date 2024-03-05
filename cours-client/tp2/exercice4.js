// declaration d'une calsse

class Personne {
  constructor(n, a) {
    this.nom = n;
    this.age = a;
  }
}

// création d'une instance de la classe Personne
const personne1 = new Personne("TCHEROU Maliki", 30);
console.log(personne1);
console.log(personne1.nom);
console.log(personne1.age);
