/*File for handling all things on the solar system tab*/

function createSecondaryCard(parentElm, data) {
	/*data -> {
		name:<contains the name of the planet>
		thumbnail:<url to the image of the planet>
		src:<url to the info page>
	}*/
	let item = createElm("a", { href: "#" + data.onclickID, class: "item" });
	let thumbnail = createElm("div", { class: "thumbnail flex-center" });
	thumbnail.appendChild(createElm("img", { src: data.thumbnail }));
	let label = createElm("label", { class: "item-name", text: data.name });
	let rightArrow = createElm("div", { class: "right-arrow-ic flex-center" });
	rightArrow.appendChild(new createElm("img", { src: "img/icons/arrow-right.png" }));
	item.appendChild(thumbnail);
	item.appendChild(label);
	item.appendChild(rightArrow);
	parentElm.appendChild(item);
};

function initSecondaryCard(parentElm, datas) {
	for (let data of datas) {
		createSecondaryCard(parentElm, data);
	}
}