
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

function doIntro(afterIntro){
	doIntroSlide();
	doIntroLogo();
	//Pages.home.style.transition = "transform 0.3s"
	setTimeout(()=>{
		Pages.home.style.transform = "translateY(0px)"
	},400);
	setTimeout(function(){
		introElms.main.style.display = "none";
		afterIntro();
	},700);
}