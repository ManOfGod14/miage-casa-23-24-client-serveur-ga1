class Personne {
  constructor(n, a) {
    this.nom = n;
    this.age = a;
  }

  /**
   * la méthode creerPersonne permet d'instancier la classe
   * Personne pour en créer une personne en passant en
   * parametre un objet
   * info = {nom: "John", age: 17}
   */
  static creerPersonne(info) {
    return new Personne(info.nom, info.age);
  }

  afficherDetails() {
    console.log(`Je m'appelle ${this.nom} et j'ai ${this.age} ans.`);
  }
}

const personne = Personne.creerPersonne({ nom: "TCHEROU", age: 30 });
personne.afficherDetails();
