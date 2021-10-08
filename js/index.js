let bodyLoadTime;

document.body.onload = function (){
	bodyLoadTime = Date.now();
	
	//Init the bg canvas:
	setBgCanvas("staryBackgroundCanvas");
	
	//setTimeout(function(){
		doIntro();
	//},500);
}