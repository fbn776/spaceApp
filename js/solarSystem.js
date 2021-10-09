/*File for handling all things on the solar system tab*/

/*
							<div class="item">
								<div class="thumbnail flex-center">
									<img src="img/images/solar system/Mercury.jpg">
								</div>
								<label class="item-name">Mercury</label>
								<div class="right-arrow-ic flex-center"><img src="img/icons/arrow-right.png"></div>
							</div>
							
*/

function createSolarSystemCard(parentElm,data){
	/*data -> {
		name:<contains the name of the planet>
		thumbnail:<url to the image of the planet>
	}*/
	
	let item = createElm("div",{class:"item"});
		let thumbnail = createElm("div",{class:"thumbnail flex-center"});
			thumbnail.appendChild(createElm("img",{src:data.thumbnail}));
		let label = createElm("label",{class:"item-name",text:data.name});
		let rightArrow = createElm("div",{class:"right-arrow-ic flex-center"});
			rightArrow.appendChild(new createElm("img",{src:"img/icons/arrow-right.png"}));
	item.appendChild(thumbnail);
	item.appendChild(label);
	item.appendChild(rightArrow);
	
	parentElm.appendChild(item);
};

function initSolarSystemCard(parentElm,datas){
	for(let data of datas){
		createSolarSystemCard(parentElm,data);
	}
}