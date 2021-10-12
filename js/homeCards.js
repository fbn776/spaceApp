function createHomeCard(parentElm,obj) {
	/*{
		title:<title name>
		thumbnail:<thumbnail img src>
		description: <Short description text>
	}
	*/
	
	
	let card = createElm("a",{href:"#"+obj.onclickID,class:"home-page-card",dir:"left"},{opacity:0,transform:"translateX(100%)"});
	
	//Card childrens:
	let thumbnail = createElm("div",{class:"thumbnail flex-center"});
		thumbnail.appendChild(createElm("img",{src:obj.thumbnail}));
	
	let details = createElm("div",{class:"details"});
		details.appendChild(createElm("label",{text:obj.title}));
		details.appendChild(createElm("p",{text:obj.description}));
	
	card.appendChild(thumbnail);
	card.appendChild(details);
	return card;
	//parentElm.appendChild(card);
}

function initCards(elm,datas){
	this.arr = [];
	for(let data of datas){
		let card = createHomeCard(elm,data);
		this.arr.push(card);
		elm.appendChild(card);
	};
	
	this.show = function (){
		let delay = 0;
		for (let card of this.arr) {
			card.style.transitionDelay = delay + "s"
			card.style.opacity = 1;
			card.style.transform = "translateX(0px)";
			delay += 0.1;
		}
	}
}
