/**
 * exercice 1
 */
// fonction nommée
function addition(a, b) {
  return a + b;
}

// test de la fonction addition
// console.log(addition(9, 5));
const som1 = addition(9, 5);
console.log(som1);

/**
 * exercice 2
 */
// fonction anonyme
const multiplication = function (x, y) {
  return x * y;
};
// test de la fonction multiplication
const mult1 = multiplication(8, 8);
console.log(mult1);
const mult2 = multiplication(5, 7);
console.log(mult2);

/**
 * exercice 3
 */
// fonction flechée
const division = (numerateur, denominateur) => {
  if (denominateur !== 0) {
    return numerateur / denominateur;
  } else {
    return "Division par zéro impossible";
  }
};

// test de la fonction division
const div1 = division(8, 0);
console.log(div1);
const div2 = division(45, 5);
console.log(div2);
