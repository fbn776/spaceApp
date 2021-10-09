let bodyLoadTime;

document.body.onload = function() {
	bodyLoadTime = Date.now();

	//Init the bg canvas:
	setBgCanvas("staryBackgroundCanvas");

	//Create the home cards:
	let homeCardElms = new initCards(homePageCardsCont, homePageCardsData)
	//Create the cards for solar system tab:
	initSolarSystemCard(solarSystemPageCardsCont,solarSystemCardsData);
	
	
	
	//	setTimeout(function(){
	doIntro(finishedIntro);
	//	},700);



	/*This function is triggered when the intro is finished*/
	function finishedIntro() {
		//Intro animation for the cards;
		homeCardElms.show();
	};
	

	window.onpopstate = function(event) {
		if (event) {
			alert("location: " + document.location + ", state: " + JSON.stringify(event.state));
		};
	};
}