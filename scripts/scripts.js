var page = 0;
var offset;
var unset = "";
var main_tape = document.getElementById("main");
var cover_page = document.getElementById("page-1");
var frets = document.getElementsByClassName("page-fret");
var pages = document.getElementsByClassName("page");
var tester = true;


function pageChanger(num) {
  page = num;
  offset = cover_page.offsetHeight;
  for(let fret of frets) {
    fret.style = unset;
    fret.previousElementSibling.style = unset;
  }
  main_tape.style.top = (-(offset*page))+"px";
  frets[page].style = "width: 25px";
  frets[page].previousElementSibling.style = "display: inline-block";
}

function testPager() {
  if(tester) {
    page++;
    tester = (page == 4 ? false : true);
  }else {
    page--;
    tester = (page == 0 ? true : false);
  }
  pageChanger(page);
}

function savePage() {
  document.cookie = "page="+page;
}

function retPage() {
  let oreo = document.cookie;
  if(oreo.length > 0) {
    page = parseInt(oreo.slice(5));
  }
  pageChanger(page);
}
