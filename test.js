// copy & paste this array at the top of your Javascript file
const nounourses = [{
    colors: ["Tan", "Chocolate", "Black", "White"],
    _id: "5be9c8541c9d440000665243",
    name: "Norbert",
    price: 2900,
    imageUrl: "http://ab-p5-api.herokuapp.com/images/teddy_1.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },{
    colors: ["Pale brown", "Dark brown", "White"],
    _id: "5beaa8bf1c9d440000a57d94",
    name: "Arnold",
    price: 3900,
    imageUrl: "http://ab-p5-api.herokuapp.com/images/teddy_2.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },{
    colors: ["Brown"],
    _id: "5beaaa8f1c9d440000a57d95",
    name: "Lenny and Carl",
    price: 5900,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "http://ab-p5-api.herokuapp.com/images/teddy_3.jpg"
  },{
    colors: ["Brown", "Blue", "Pink"],
    _id: "5beaabe91c9d440000a57d96",
    name: "Gustav",
    price: 4500,
    imageUrl: "http://ab-p5-api.herokuapp.com/images/teddy_4.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },{
    colors: ["Beige", "Tan", "Chocolate"],
    _id: "5beaacd41c9d440000a57d97",
    name: "Garfunkel",
    price: 5500,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "http://ab-p5-api.herokuapp.com/images/teddy_5.jpg"
}]

function afficherNomDesNounours(array) {
  for(let element of nounourses){
    console.log(element.name)
  }
}
afficherNomDesNounours()

function afficherPrixTotal(array) {
  let sum = 0;
  nounourses.forEach(e => {
      sum += e.price
  });
  console.log(sum);
}
afficherPrixTotal()

function afficherMoitiePrix(array) {
  for(let element of nounourses){
    console.log(element.name + ' à -50% est à ' + element.price / 2 / 100 + '€')
  }
}
afficherMoitiePrix()

// si tu peux, essaye aussi d'afficher celui à -20%
function afficherRemisePrix(array) {
  for(let element of nounourses){
    console.log(element.name + ' à -20% est à ' + element.price * 0.8 / 100 + '€')
  }
}
afficherRemisePrix()

function afficherColorisDisponibles(array) {
  // let cpt = 0;
  for(let element of nounourses){
    console.log(element.name + ' est disponible en ' + element.colors.length  + ' couleurs')
    // cpt += element.colors;
  }
}
afficherColorisDisponibles()

function afficherSuperieurTrente(array) {
  for(let element of nounourses){
    if((element.price / 100) > 30) {
      console.log(element.name + ' coûte plus de 30€' + ' (il est à ' + (element.price / 100) + '€)')
    } else {
      console.log(element.name + ' est abordable' + ' (il est à ' + (element.price / 100) + '€)')
    }
  }
}
afficherSuperieurTrente()
// essayer une VARIANTE en affichant "abordable" si le prix est en dessous


function afficherSommeDescriptions(array) {
  let sum = '';
  nounourses.forEach(e => {
      sum += e.description
  });
  console.log(sum);
}
afficherSommeDescriptions()
// Attention, c'est bien la SOMME des descriptions qu'il faut afficher, pas les unes après les autres

function afficherTroisiemeCouleurDispo(array) {
  for(let element of nounourses){
    if(element.colors[2] === undefined) {
      console.log("Il n'existe pas de troisième couleur")
    } else {
        console.log(element.colors[2])
    }
  }
}
afficherTroisiemeCouleurDispo()
// Attention: gérer les cas où aucune troisième couleur n'existe

// function addTenToAge(age) {
//   for(let element of age){
//     console.log(element.age + 10)
//   }
// }
// addTenToAge()
// // should increase age passed as argument by 10.
// // Ex:
// let ageJulie = 12
// let agePaul = 24
// console.log(addTenToAge(ageJulie)) // should display 22
// console.log(addTenToAge(agePaul)) // should display 34
// // Help: use the note "What's an argument ?" to really get how arguments work
