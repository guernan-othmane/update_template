// document.addEventListener('DOMContentLoaded', function () {
//     const buttons = document.querySelectorAll('.filter-btn');
//     const storeItems = document.querySelectorAll('.box');
  
//     buttons.forEach(function (button) {
//       button.addEventListener('click', function (e) {
//         e.preventDefault();
//         const filter = button.getAttribute('data-filter');
  
//         storeItems.forEach(function (item) {
//           const itemCategory = item.getAttribute('data-item');
  
//           if (filter === 'all' || filter === itemCategory) {
//             item.style.display = 'block';
//           } else {
//             item.style.display = 'none';
//           }
//         });
//       });
//     });
//   });


// Sélectionner l'élément select par son id
var liste = document.getElementById ("list");

// Ajouter un écouteur d'événements pour le changement de sélection
liste.addEventListener ("change", function () {
  // Obtenir la valeur de l'option sélectionnée
  var valeur = liste.value;
  
  // Obtenir le texte de l'option sélectionnée
  var texte = liste.options [liste.selectedIndex].text;

  // Afficher la valeur et le texte dans la console
  console.log ("Valeur : " + valeur);
  console.log ("Texte : " + texte);

  // Appeler la fonction filter avec la valeur
  filter(valeur);
});

function filter(key){

    switch (key) {
        case "0":
            var y = document.getElementsByClassName("products");
            for (let index = 0; index < y.length; index++) {
              if(y[index].classList.contains("flower")){
                // Afficher l'élément
                y[index].style.display = "block";
              } else {
                // Cacher l'élément
                y[index].style.display = "none";
              }
            }
            break;
        case "1":
            var y = document.getElementsByClassName("products");
            for (let index = 0; index < y.length; index++) {
              if(y[index].classList.contains("watch")){
                // Afficher l'élément
                y[index].style.display = "block";
              } else {
                // Cacher l'élément
                y[index].style.display = "none";
              }
            }
            break;

        case "2":
            var y = document.getElementsByClassName("products");
            for (let index = 0; index < y.length; index++) {
              if(y[index].classList.contains("bear")){
                // Afficher l'élément
                y[index].style.display = "block";
              } else {
                // Cacher l'élément
                y[index].style.display = "none";
              }
            }
            break;

        case "3":
            var y = document.getElementsByClassName("products");
            for (let index = 0; index < y.length; index++) {
              if(y[index].classList.contains("ring")){
                // Afficher l'élément
                y[index].style.display = "block";
              } else {
                // Cacher l'élément
                y[index].style.display = "none";
              }
            }
            break;

        default:
            break;
    }

}  
  
