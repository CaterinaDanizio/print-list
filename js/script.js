// partendo da un x di nomi stampare tutto
var nomi = ["dario","angelo","federica","giorgia"];


var testostampato = "";
// ciclo per traversare nomi

for (var i = 0; i < nomi.length; i++){

  // console.log(nomi[i]);
  testostampato = testostampato + "<li>" + nomi[i] + "</li>";
}
document.getElementById('stampa').innerHTML = testostampato;
