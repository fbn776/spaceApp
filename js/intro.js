
const introElms = {
	main: s(".intro-page"),
	slideLeft: s(".slide-left"),
	slideRight: s(".slide-right"),
	logo: s(".intro-logo"),
};

function doIntroSlide(){
	introElms.slideLeft.style.transform = `translateX(-101%)`;
	introElms.slideRight.style.transform = `translateX(101%)`;
}
function doIntroLogo(){
	introElms.logo.style.transform = `scale(0)`;
}

function doIntro(){
	doIntroSlide();
	doIntroLogo();
	
	setTimeout(function(){
		introElms.main.setStyle({
			
		})
	},500);
}