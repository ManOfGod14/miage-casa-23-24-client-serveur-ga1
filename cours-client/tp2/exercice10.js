class Personne {
  constructor(n, a) {
    this.nom = n;
    this.age = a;
  }

  afficherDetails() {
    console.log(`Je m'appelle ${this.nom} et j'ai ${this.age} ans.`);
  }
}

// Héritage
class Etudiant extends Personne {
  constructor(n, a, niveau) {
    super(n, a); // super nous permet d'exploiter les propriétés de la classe Personne
    this.niveau = niveau;
  }

  afficherNiveau() {
    console.log(`Niveau : ${this.niveau}`);
  }

  afficherDetails() {
    // console.log(
    //   `Je m'appelle ${this.nom}, j'ai ${this.age} ans et je suis en ${this.niveau}.`
    // );

    // appel la méthode afficherDetails() de la classe Personne (classe mère)
    super.afficherDetails();
    console.log(`Je suis en ${this.niveau}`);
  }
}

// test de la classe Etudiant
const etudiant1 = new Etudiant("Etudiant", 23, "TS2-DI");
// console.log(etudiant1);
etudiant1.afficherDetails();
