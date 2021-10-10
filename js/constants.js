/*This file contains gobal constants that are used all over the code*/


const screenWidth = window.innerWidth,
	screenHeight = window.innerHeight;


const startTime = Date.now();


const Pages = {
	home:s(".home-page"),
	intro:s(".intro-page"),
}

const homePageCardsCont = s("#home-page-cards-cont");
const solarSystemPageCardsCont = s("#solar-system-cards-cont");


const windowPagesList = {
	home:s("#homePageWindow"),
	solarSystem:s("#solarSystemWindow"),
}

//sessionStorage.setItem("openedAsNew",true);