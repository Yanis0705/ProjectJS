let tableau = [100];
let nombre;
let count = 0;

do {
    nombre = Math.floor(Math.random() * 100)
    if (!tableau.includes(nombre)) {
        tableau.push(nombre);
    }
    count++;
} while (tableau.length <= 100)
tableau.sort(function (a, b) {
    return a - b;
});
console.log(tableau);
console.log(count);