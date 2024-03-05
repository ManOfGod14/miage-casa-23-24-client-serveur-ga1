class Personne {
  constructor(n, a) {
    this.nom = n;
    this.age = a;
  }

  afficherDetails() {
    console.log(`Nom : ${this.nom}, age : ${this.age}`);
  }
}

// création d'une instance de la classe Personne
const personne1 = new Personne("TCHEROU Maliki", 30);
personne1.afficherDetails();
