// commentaire sur une ligne
/* 
commentaire sur plusieurs lignes 
autre commentaire
*/

/**
 * Déclaration des variables
 */
let c = 6;
console.log("La valeur de c = "+ c);
var d = "Hello, world!";
var D = "Bonjour tou le monde !";
var e = 11;
var f;
console.log(c, d, D, e, f);

/** connaitre le type d'une variable en JS */
console.log("Le type de la variable c : "+ typeof c);
console.log("Le type de la variable d : "+ typeof d);
console.log("Le type de la variable f : "+ typeof f);

/**
 * Les différents sortent de types
 */
// type objet
let utilisateur = {
    nom: 'TCHEROU',
    prenom: "Maliki",
    email: "tcherou.maliki@gmail.com",
    age: 31,
    adresse: [31, "Tarik ibnou ziad", 20050, "Casa"]
};
console.log("Le type de la variable utilisateur : "+ typeof utilisateur); 

// afficher dans la console l'objet utilisateur
console.log(utilisateur);

// accéder à la valeur d'une clé dans un objet
console.log("Nom : "+ utilisateur.nom) // récupérer le nom
console.log("Prenom : "+ utilisateur.prenom) // récupérer le prenom
console.log("CP : "+ utilisateur.adresse[2]) // récupérer le code postal

/**
 * les opérateurs
 */
let variable1 = 5;
let variable2 = '5';

// Vérification de l'égalité entre 1 et 2
let res12 = variable1 == variable2;
let result12 = variable1 === variable2;
console.log("Vérification de l'égalité entre 1 et 2 : "+ res12);
console.log("Vérification de l'égalité entre 1 et 2 en prénant en compte leur type : "+ result12);

// Vérification de la différence entre 1 et 2
let difRes12 = variable1 != variable2;
let difResult12 = variable1 !== variable2;
console.log("Vérification de la différence entre 1 et 2 : "+ difRes12);
console.log("Vérification de la différence entre 1 et 2 en prénant en compte leur type : "+ difResult12);

let variable3 = true;
// la négation ou le contraire de la variable 3
let resVariable3 = !variable3; 
console.log("Négation de la variable3 : "+ resVariable3);

let salutation = false;
// opérateur ternaire
let resSalue = (salutation) ? "Bonjour tout le monde" : "Hello !";
console.log(resSalue);

/**
 * les fonctions
 */

// fonction permettant de faire la somme de 2 nombres
function sommeDeuxNombres(n1, n2) {
    const res = n1 + n2;
    return res;
}

// appel ou exécution de la fonction sommeDeuxNombres
const somme1 = sommeDeuxNombres(89, 2);
console.log(somme1);


// fonction statique de division
function divisionSansParametres() {
    const nbr1 = 2;
    const nbr2 = 6;

    if(nbr2 !== 0) {
        return nbr1 / nbr2;
    } else {
        return "Division par zéro impossible !";
    }
}
console.log("Resultat de 2 / 6 = "+ divisionSansParametres());

/**
 * fonction dynamique
 * @param i : numérateur
 * @param j : dénominateur
 */
function divisionAvecParametres(i, j) {
    if(j !== 0) {
        const ij = i /  j;

        // utilisation de la concaténation
        // return "Division de "+ i +" / "+ j +" = "+ ij;

        // utilisation des bactic
        return `Division de ${i} / ${i} = ${ij}`;
    } else {
        return "Division par zéro impossible !";
    }
}

// tester la fonction
const resultatIJ1 = divisionAvecParametres(5, 0);
console.log(resultatIJ1);

const resultatIJ2 = divisionAvecParametres(18, 3);
console.log(resultatIJ2);



