function createHomeCard(parentElm,obj) {
	/*{
		title:<title name>
		thumbnail:<thumbnail img src>
		description: <Short description text>
	}
	*/
	
	
	let card = createElm("div",{class:"home-page-card",dir:"left"},{opacity:0,transform:"translateX(100%)"});
	
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
}
