let bodyLoadTime;

document.body.onload = function (){
	bodyLoadTime = Date.now();
	
	//Init the bg canvas:
	setBgCanvas("staryBackgroundCanvas");
	
	//Create the home cards:
	let homeCardElms = new initCards(homePageCardsCont,homePageCardsData)
	
	setTimeout(function(){
		doIntro(finishedIntro);
	},800);
	
	function finishedIntro(){
		let delay = 0;
		for(let card of homeCardElms.arr){
			card.style.transitionDelay = delay+"s"
			card.style.opacity = 1;
			card.style.transform = "translateX(0px)";
			delay += 0.1;
		}
	}
}