maPhrase = "une chaine avec des lettres dans un certain ordre pour donner du sens";
let i, tab = [];

for (i = 0; i < maPhrase.length; i++) {
    const chars = maPhrase.split('');
    if (tab[i] != " ")
        tab[i] = chars[i];
    console.log(tab[i]);
}
tab.sort();
console.log(tab);

