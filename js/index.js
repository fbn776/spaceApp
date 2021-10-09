let bodyLoadTime;

document.body.onload = function (){
	bodyLoadTime = Date.now();
	
	//Init the bg canvas:
	setBgCanvas("staryBackgroundCanvas");
	
	//Create the home cards:
	initCards(homePageCardsCont,homePageCardsData)
	
	//setTimeout(function(){
		doIntro();
	//},500);
}