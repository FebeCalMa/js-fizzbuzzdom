console.log("JS OK!");

//stampare i numeri da 1 a 100
//se divisibile per 3 scrivere fizz
//se divisibile per 5 scrivere buzz
//se divisibile per 3 e per 5 scrivere fizzbuzz

//dato un container, creare al suo interno gli elementi gli elementi DOM per rappresentare i valori generati
const blocksContainer = document.getElementById("blocks");

for (let i = 1; i <= 100; i++) {
  let message = i;

  let classToAdd = "";

  //if (i % 3 === 0 && i % 5 === 0) //è uguale a
  if (i % 15 === 0) {
    message = "fizzbuzz";

    //console.log("fizzbuzz");
  } else if (i % 3 === 0) {
    message = "fizz";

    //console.log("fizz");
  } else if (i % 5 === 0) {
    message = "buzz";

    //console.log("buzz");
  }

  console.log(message);

  const element = `<div class= "block ${message}">${message}</div>`;

  blocksContainer.innerHTML += element;
}
