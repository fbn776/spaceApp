/*This file contains gobal constants that are used all over the code*/


const screenWidth = window.innerWidth,
	screenHeight = window.innerHeight;


const startTime = Date.now();


const Pages = {
	home:s(".home-page"),
	intro:s(".intro-page"),
}

const homePageCardsCont = s("#home-page-cards-cont");


/*Creates an object with key as the name attribute of all elements with class = is-body-page*/
const windowPagesList = {};
let windowPagesArr = document.getElementsByClassName("is-body-page");
for(let page of windowPagesArr){
	windowPagesList[page.getAttribute("name")] = page
};


///const lg = new Log();

let historyState;