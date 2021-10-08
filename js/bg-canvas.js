//Other objects:
let otherBgObjectsList = [
	{img:Img("img/bgObject/bgObject01.png"),size:[5,25]},
	{img:Img("img/bgObject/bgObject02.png"),size:[5,25]},
	{img:Img("img/bgObject/bgObject03.png"),size:[20,50]},
	{img:Img("img/bgObject/bgObject04.png"),size:[20,50]},
];


function setBgCanvas(id) {
	let canvas = document.getElementById(id);
	let ctx = canvas.getContext("2d");

	canvas.width = screenWidth;
	canvas.height = screenHeight;

	let dp = 20,
		threshVal = 0.05;

	let xOffset = 100,
		yOffset = 100;



	for (let y = -yOffset; y < canvas.height + yOffset; y += dp) {
		for (let x = -xOffset; x < canvas.width + xOffset; x += dp) {
			if (Math.random() < threshVal) {
				let starX = random(10, canvas.width - 10)
				starY = random(10, canvas.height - 10),
					size = random(0.2, 3),
					alpha = random(0.5, 1);

				if (Math.random() > 0.1) {
					ctx.beginPath();
					ctx.fillStyle = `rgba(255,255,255,${alpha})`;
					ctx.arc(starX, starY, size, 0, 2 * Math.PI);
					ctx.fill();
					ctx.closePath();
				} else { //For other objects like galaxies, nebulas etc.
					let bgObject = otherBgObjectsList.randomItem();
					let img = bgObject.img,
						minSize = bgObject.size[0],
						maxSize = bgObject.size[1];
					let size = Math.floor(random(minSize,maxSize));
					let rotateAngle = Math.floor(random(0,360));
					ctx.save();
						ctx.globalAlpha = map_range(size,minSize,maxSize,0.6,1);
						ctx.translate(x-(size/2),y-(size/2));
						ctx.rotate(rad(rotateAngle));
						ctx.drawImage(img, 0, 0, 64, 66,-size/2,-size/2,size,size);
					ctx.restore();
				}
			}
		}
	}
}