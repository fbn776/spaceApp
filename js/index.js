let bodyLoadTime;

document.body.onload = function (){
	bodyLoadTime = Date.now();
	
	//Init the bg canvas:
	setBgCanvas("staryBackgroundCanvas");
	
	//Create the home cards:
	let homeCardElms = new initCards(homePageCardsCont,homePageCardsData)
	
//	setTimeout(function(){
		doIntro(finishedIntro);
//	},700);
	
	
	function finishedIntro(){
		//Intro animation for the cards;
		homeCardElms.show();
		
	}
}