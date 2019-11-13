var menuHide = true;
var unset = "";
let cards = document.getElementsByClassName("category-prod-card")

function menuOpener() {
  if(menuHide){
    document.getElementById("emergent-menu-container").style = "visibility:visible; opacity: 1;";
    menuHide = false;
    document.getElementById("menu-button-icon").className = "fas fa-times";
  }else {
    document.getElementById("emergent-menu-container").style = unset;
    menuHide = true;
    document.getElementById("menu-button-icon").className = "fas fa-grip-lines";
  }
}
console.log(cards);
for(let card of cards) {
  card.style = "background-image: url(https://raw.githubusercontent.com/Chincoya/temp-test/master/"+(document.title.toLowerCase())+"/"+card.id+"/1.jpg);";
}

document.getElementById("menu-button").addEventListener("click", menuOpener);
