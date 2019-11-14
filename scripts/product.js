var menuHide = true;
var unset = "";
var i=0;

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

function smoother() {
  document.getElementById("product-main").style.opacity = "1";
}

for(let img of document.getElementsByClassName("prod-image")) {
  i+=1;
  img.style = "background-image:url(https://raw.githubusercontent.com/Chincoya/temp-test/master/fountains/legrand/"+i+".webp);"
  console.log("https://raw.githubusercontent.com/Chincoya/temp-test/master/fountains/legrand/"+i+".webp");
}

smoother();
document.getElementById("menu-button").addEventListener("click", menuOpener);