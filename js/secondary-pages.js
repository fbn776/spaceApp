
function createSecondaryPage(data) {
/*
name - name of the page
pageID - id of the page
title - title of the page
sideImg - url of the side image
desc - description of the image
listHeader - name of the header that contains list
cardsContId - id of list cont elm
*/
//		<div name="${data.name}" class="is-body-page window-page category-page closeWindow id="${data.pageID}">
	var div = createElm("div",{
		name:data.name,
		class:"is-body-page window-page category-page closeWindow",
		id:data.pageID,
	});
	
	let html = `
		<div class="heading">
			<div class="flex-center" onclick="goBackward('#homePageWindow')"><img src="img/icons/arrow-back.png"></div>
			<label>${data.title}</label>
		</div>
		<div class="content">
			<div class="main-cont">
				<label class="title">${data.title}</label>
				<img class="main-photo" src="${data.sideImg}">
				<p class="description">${data.desc}</p>
				<hr>
				<div class="secondary-cont">
					<label class="title">${data.listHeader}</label>
					<div class="items-cont" id="${data.cardsContId}"></div>
				</div>
			</div>
		</div>
	`;
	div.innerHTML = html;
	return div;
}