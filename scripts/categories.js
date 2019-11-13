var menuHide = true;

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