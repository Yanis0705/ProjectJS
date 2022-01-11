let phrase = "une phrase sans majuscule"
let phraseAvecMajuscule;
let elementmod;
let tab = [];
const words = phrase.split(' ');
console.log(words);

for (element of words) {
    elementmod = element.charAt(0).toUpperCase() + element.slice(1);
    console.log(elementmod);
    tab.push(elementmod);
}
console.log(tab);
phraseAvecMajuscule = tab.toString().replaceAll(',', ' ');
console.log(phraseAvecMajuscule);
