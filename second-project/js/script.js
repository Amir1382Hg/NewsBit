function show() {
    var menu = document.getElementById("header-menu");

    if (menu.className === "header-menu") {
        menu.className += " show";
    }
    else {
        menu.className = "header-menu";
    }

    var burger = document.getElementById("btn-burger");

    if (menu.className === "header-menu show") {
        burger.className += " rotate";
    }
    else {
        burger.className = "header-menu-burger";
    }

}


/*Slider*/   

var slid = document.getElementsByClassName("slid");
var dot = document.getElementsByClassName("dot");
var prev = document.querySelector(".prev");
var next = document.querySelector(".next");
var n = 0 ;
var i ;

function disno(){
    for(i=0 ; i<slid.length;i++){
        slid[i].style.display="none" ;
    }
}  

function no_active()
{
   for(i=0 ; i < dot.length ; i++ ){
     dot[i].classList.remove("active");
   }
}

next.addEventListener("click",function(e){
    e.preventDefault();
    n++;
    if( n > slid.length - 1 ){
        n=0;
    }
    disno();
    no_active();
    slid[n].style.display = "block";
    dot[n].classList.add("active");   
})

setInterval(function(){
    n++;
    if( n > slid.length - 1 ){
        n=0;
    }
    disno();
    no_active();
    slid[n].style.display = "block";
    dot[n].classList.add("active");   
},10000)



prev.addEventListener("click",function(e){
    e.preventDefault();
    n--;
    if( n < 0 ){
        n=slid.length - 1;
    }
    disno();
    no_active();
    slid[n].style.display = "block";
    dot[n].classList.add("active");
})