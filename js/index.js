let bodyLoadTime;

document.body.onload = function() {
	bodyLoadTime = Date.now();

	//Init the bg canvas:
	setBgCanvas("staryBackgroundCanvas");

	initSolarSystemCard(solarSystemPageCardsCont, solarSystemCardsData);



	//Create the home cards:
	let homeCardElms = new initCards(homePageCardsCont, homePageCardsData)


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
	
	console.log(hash);
	
	let toElm = document.getElementById(hash);
	
	toElm.classList.add("openWindow");
	toElm.classList.remove("closeWindow");

	for(let page of windowPagesList.getValues()){
		if(page != toElm){
			page.classList.add("closeWindow");
			page.classList.remove("openWindow")
		};
	};
}