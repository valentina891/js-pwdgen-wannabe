var nome = prompt("inserisci nome");
console.log(nome);

var cognome = prompt("inserisci cognome");
console.log(cognome);

var colore = prompt("inserisci il tuo colore preferito");
console.log(colore);

document.getElementById('passwordgenerator').innerHTML="nuova psw: " + nome + cognome + colore + "19";
