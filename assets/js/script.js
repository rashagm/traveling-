const preloader= document.querySelector("[data-prelaoder]");

window.addEventListener("load",() =>{
    preloader.classList.add("remove");
    setTimeout(() => {
     
    }, 4000);
    
});


/**
 * add event on multiple elements
 */

const addEventOnElements=function(elements,eventType,callback){
    for(let i=0;i<elements.length;i++){
        elements[i].addEventListener(eventType,callback);
    }
}

const navbar=document.querySelector("[data-navbar]");
const navTogglers=document.querySelectorAll("[data-nav-toggler]");
const overlay=document.querySelector("[data-overlay]");


const toggleNav= function(){  
navbar.classList.toggle("active");
overlay.classList.toggle("active");
document.body.classList.toggle("nav-active");
}


addEventOnElements(navTogglers,"click",toggleNav);
//    document.body.classList.toggle("nav-active");


/**
 * header
 */

const header=document.querySelector("[data-header]");
window.addEventListener("scroll",function(){header.classList[window.scrollY>100 ? "add":"remove"]("active")});