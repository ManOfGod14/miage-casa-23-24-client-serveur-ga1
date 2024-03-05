/**
 * Exercice 1
 */
let nom = "TCHEROU Maliki";
console.log(nom);

/**
 * Exercice 2
 */
let a = 9;
let b = 5;
console.log(`${a} + ${b} = ${a + b}`);
console.log(`${a} - ${b} = ${a - b}`);
console.log(`${a} * ${b} = ${a * b}`);
console.log(`${a} / ${b} = ${a / b}`);

/**
 * Exercice 3
 */
nom = "TCHEROU";
let prenom = "Maliki";
const nomComplet = nom + " " + prenom;
console.log(nomComplet);

/**
 * Exercice 4
 */
function carre(x) {
  return x ** 2;
  // return x * x;
}
console.log(carre(8));
console.log(carre(5));

/**
 * Exercice 5
 */
function aireRectangle(longueur, largeur) {
  return "L'aire du rectangle = " + longueur * largeur;
}
console.log(aireRectangle(8, 4));

/**
 * Exercice 6
 */
function comparaisonDeNombres(a, b) {
  if (a > b) {
    return a + " est plus grand que " + b;
  } else if (a < b) {
    return a + " est plus petit que " + b;
  } else {
    return a + " et " + b + " sont égaux";
  }
}
console.log(comparaisonDeNombres(15, 6));
console.log(comparaisonDeNombres(9, 45));
console.log(comparaisonDeNombres(9, 9));

/**
 * Exercice 7
 */
// solution 1
function estPairJunior(nbr) {
  if (nbr % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(estPairJunior(14));
console.log(estPairJunior(13));

// solution 2
function estPairSenior(nbr) {
  return nbr % 2 === 0;
}
console.log(estPairSenior(44));
console.log(estPairSenior(45));

/**
 * Exercice 8
 */
function estPair2(nbr) {
  if (estPairSenior(nbr)) {
    return nbr + " est pair";
  } else {
    return nbr + " est impair";
  }
}
console.log(estPair2(16));
console.log(estPair2(17));

/**
 * Exercice 9
 */
function compareChaines(chaine1, chaine2) {
  if (chaine1 === chaine2) {
    return "Les chaines sont identiques";
  } else {
    return "Les chaines ne sont pas identiques";
  }
}
console.log(compareChaines("Hello", "Maliki"));
console.log(compareChaines("Hello", "Hello"));

/**
 * Exercice 10
 */
function verifierAge(age) {
  if (age >= 18) {
    console.log("Accès autorisé");
  } else {
    console.log("Accès non autorisé");
  }
}
verifierAge(25);
verifierAge(16);

/**
 * Exercice 11
 */
function nombrePairImpair(nombre) {
  return nombre % 2 === 0 ? "Nombre Pair" : "Nombre Impair";
}
console.log(nombrePairImpair(6));
console.log(nombrePairImpair(7));

/**
 * Exercice 12
 */
function nombrePositifNegatif() {
  let nbr1 = prompt("Saisissez le 1er nombre :");
  let nbr2 = prompt("Saisissez le 2ème nombre :");
  if (nbr1 > 0 && nbr2 > 0) {
    console.log("Les deux nombres sont positifs");
  } else if (nbr1 < 0 || nbr2 < 0) {
    console.log("Au moins un des deux nombres est negatif");
  } else {
    console.log("Les deux nombres sont nuls");
  }
}
nombrePositifNegatif();

/**
 * Exercice 13
 */
function jourDeSemaine(jour) {
  switch (jour) {
    case 1:
      console.log("Lundi");
      break;

    case 2:
      console.log("Mardi");
      break;

    case 3:
      console.log("Mercredi");
      break;

    case 4:
      console.log("Jeudi");
      break;

    case 5:
      console.log("Vendredi");
      break;

    case 6:
      console.log("Samedi");
      break;

    case 7:
      console.log("Dimanche");
      break;

    default:
      console.log("Le numéro du jour est invalide !");
  }
}

// pour tester la fonction :
// exécution d'un fonction (appel)
jourDeSemaine(2);
jourDeSemaine(5);

/**
 * Exercice 14
 */
function saison(mois) {
  switch (mois) {
    case 1:
    case 2:
    case 12:
      console.log("Hiver");
      break;

    case 3:
    case 4:
    case 5:
      console.log("Printemps");
      break;

    case 6:
    case 7:
    case 8:
      console.log("Eté");
      break;

    case 9:
    case 10:
    case 11:
      console.log("Automne");
      break;

    default:
      console.log("Le mois est invalide !");
  }
}

// test de la fonction
saison(5);
saison(11);
saison(15);

/**
 * Exercice 15
 */
// boucle for
let fruits = ["Pomme", "Ananas", "Orange", "Avocat", "Poire"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// boucle while
let j = 0;
while (j < fruits.length) {
  console.log(fruits[j]);
  j++;
}

// boucle do while
let h = 0;
do {
  console.log(fruits[h]);
  h++;
} while (h < fruits.length);

/**
 * Exercice 16
 */
let tableauVide = [];
// afficher le tableau le remplit
console.log(tableauVide);

tableauVide.push("Element 1");
tableauVide.push("Element 2");
tableauVide.push("Element 3");
// afficher le tableau le remplit
console.log(tableauVide);

// suppression du 2èeme element
tableauVide.splice(1, 1);
// affichage du tableau final
console.log(tableauVide);

/**
 * Exercice 17
 */
let personne = {
  nom: "TCHEROU",
  prenom: "Maliki",
  age: 30,

  // message: function () {
  //   console.log(
  //     `Bonjour, je m'appelle ${this.prenom} ${this.nom} et j'ai ${this.age} ans`
  //   );
  // }
};
console.log(personne.nom);
console.log(personne.prenom);
console.log(personne.age);

/**
 * Exercice 18
 */
personne.message = function () {
  console.log(
    `Bonjour, je m'appelle ${this.prenom} ${this.nom} et j'ai ${this.age} ans`
  );
};

// tester la méthode message
personne.message();
