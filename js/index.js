let bodyLoadTime;

document.body.onload = function() {
	bodyLoadTime = Date.now();

	//Init the bg canvas:
	setBgCanvas("staryBackgroundCanvas");

	//	setTimeout(function(){
	doIntro(finishedIntro);
	//	},700);



	/*This function is triggered when the intro is finished*/
	function finishedIntro() {
		//Intro animation for the cards;
		homeCardElms.show();
	};

}
window.addEventListener('popstate', updateLayout);

function updateLayout(event) {
	//event.preventDefault();
	let hash = location.hash.substr(1) || "homePageWindow";

	let toElm = document.getElementById(hash);

	toElm.classList.add("openWindow");
	toElm.classList.remove("closeWindow");

	for (let page of windowPagesList.getValues()) {
		if (page != toElm) {
			page.classList.add("closeWindow");
			page.classList.remove("openWindow")
		};
	};
}


for (let elm of document.getElementsByClassName("swiper-photo-cont")) {
	const swiper = new Swiper(elm,{
		loop: true,
		pagination: {
			el: elm.getElementsByClassName("swiper-pagination")[0],
			dynamicBullets: true,
		},
		navigation: {
			nextEl: elm.getElementsByClassName("button-next")[0],
			prevEl: elm.getElementsByClassName("button-prev")[0],
		},
	});
};


//Create the home cards:
let homeCardElms = new initCards(homePageCardsCont, homePageCardsData)
	


const solarSystemPageCardsCont = s("#solar-system-cards-cont");
initSecondaryCard(solarSystemPageCardsCont, solarSystemCardsData);

const starsPageCardsCont = s("#stars-cards-cont");
initSecondaryCard(starsPageCardsCont,starsCardsData);

const galaxiesPageCardsCont = s("#galaxy-cards-cont");
initSecondaryCard(galaxiesPageCardsCont,galaxiesCardsData);

const spaceProbePageCardsCont = s("#space-probes-cards-cont")//space-probes-cards-cont");
initSecondaryCard(spaceProbePageCardsCont,spaceProbesCardsData);

const astronomicalObjectsPageCardsCont = s("#astronomical-objects-cards-cont");
initSecondaryCard(astronomicalObjectsPageCardsCont,astronomicalObjectsCardsData)
