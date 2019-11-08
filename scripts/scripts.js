var globalMouse = false;
var page = 0;
var offset;
var unset = "";
var main_tape = document.getElementById("main");
var cover_page = document.getElementById("page-1");
var frets = document.getElementsByClassName("page-fret");
var pages = document.getElementsByClassName("page");
var tester = true;
var wheeler = 0;
var current_pos = 0;
var menuHide = true;

var tape_pages = {
  arrivals:0,
  categories:0,
  shop:0,
  banner:0,
  journal:0
};
var tape_offset = 0;
var arrivals_tape = document.getElementById("arrivals-tape");
var touched;


function pageChanger() {
  offset = cover_page.offsetHeight;
  for(let fret of frets) {
    fret.style = unset;
    fret.previousElementSibling.style = unset;
  }
  current_pos = (-(offset*page));
  main_tape.style.top = current_pos+"px";
  frets[page].style = "width: 25px";
  frets[page].previousElementSibling.style = "display: inline-block";
}

function resizeChanger() {
  offset = cover_page.offsetHeight;
  console.log(offset*page);
  main_tape.style.top = (-(offset*page))+"px";
}

function testPager() {
  page = (page+1)%5;
  pageChanger();
}

function fretChanger(num) {
  page = num;
  pageChanger();
}

function savePage() {
  document.cookie = "page="+page;
}

function retPage() {
  let oreo = document.cookie;
  if(oreo.length > 0) {
    page = parseInt(oreo.slice(5));
  }
  pageChanger();
}

function resetOffset() {
  main_tape.style.top = (page*(-(cover_page.offsetHeight)))+"px";
  wheeler = 0;
}

function wheelChanger(event) {
  if(globalMouse)return;
  wheeler += event.deltaY;
  main_tape.style.top = (current_pos+ (wheeler > 0 ? -20 : 20) )+"px";
  if(wheeler >= 9) {
    wheeler = 0;
    page = page + (page < 4 ? 1 : 0);
    pageChanger();
  }else if(wheeler <= -9) {
    wheeler = 0;
    page = page - (page > 0 ? 1 : 0);
    pageChanger();
  }else {
    setTimeout(resetOffset, 400);
  }
}

function menuOpener() {
  if(menuHide){
    document.getElementById("emergent-menu-container").style = "visibility:visible; opacity: 1;";
    menuHide = false;
  }else {
    document.getElementById("emergent-menu-container").style = unset;
    menuHide = true;
  }
}

function tapeLoader(tapeName) {
  let tape = document.getElementsByClassName(tapeName+"-page");
  console.log(tapeName);
  for(let i=0; i< tape.length; i++) {
    tape[i].style.background = "#f5f5f5 url('./img/"+tapeName+"/"+(i+1)+".png') no-repeat 50% / 50%";
  }
}

function tapeReacter(event) {
  touched = event.target.parentNode;
  touched.addEventListener("mousemove", tapeSlider);
  touched.addEventListener("mouseleave", function(){
    tape_offset = 0;
    touched.removeEventListener("mousemove", tapeSlider);
  });
  touched.addEventListener("mouseup", function(){
    touched.removeEventListener("mousemove", tapeSlider);
    tape_offset = 0;
  });
}


function tapeSlider(event){
  if(tape_offset > 50 || tape_offset < -50){
    touched.removeEventListener("mousemove", tapeSlider);
    touched.style.transform = unset;
  }else{
    tape_offset+= event.movementX;
    console.log(tape_offset);
    touched.style.transform = "translateX("+tape_offset+"px)";
  }
}
document.body.onmousedown = function() {
  globalMouse = true;
}
document.body.onmouseup = function () {
  globalMouse = false;
}
tapeLoader('arrivals');
window.addEventListener("resize", resizeChanger);
main_tape.addEventListener("wheel", wheelChanger);
arrivals_tape.addEventListener("mousedown", tapeReacter);
