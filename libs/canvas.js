function isElm($obj){
    try {
        return ($obj.constructor.__proto__.prototype.constructor.name)?true:false;
    }catch(e){
        return false;
    }
}

CanvasRenderingContext2D.prototype.line = function(){
	let ctx = this;
	let args = arguments;
	let x1 = args[0],
		y1 = args[1],
		x2 = args[2],
		y2 = args[3],
		opt = args[4] || {};
	ctx.beginPath();
	let strokeColor = (opt.color || opt.strokColor || "black"),
		lineWidth = (opt.width || opt.lineWidth || 1);
		if(opt.dash || opt.dashed){
			ctx.setLineDash(opt.dash || opt.dashed || [5,2]);
		}
		ctx.strokeStyle = strokeColor;
		ctx.lineWidth = lineWidth;
		ctx.moveTo(x1,y1);
		ctx.lineTo(x2,y2);
		ctx.stroke();
		ctx.setLineDash([0,0])
	ctx.closePath();
	
};
CanvasRenderingContext2D.prototype.box = function(){
	let ctx = this;
	let args = arguments;
	let x = args[0],
		y = args[1],
		w = args[2],
		h = args[3],
		opt = args[4] || {};
		
	ctx.beginPath();
		ctx.strokeStyle = (opt.color || opt.strokeStyle || opt.borderColor || "black");
		ctx.fillStyle = (opt.fill || opt.fillColor || opt.bg || opt.bgColor || "black");
		ctx.lineWidth = (opt.width || opt.lineWidth || opt.borderWidth || 1);
		ctx.rect(x,y,w,h);
		
		ctx.fill();
		ctx.stroke();
	ctx.closePath();
};

CanvasRenderingContext2D.prototype.circle = function(){
	let ctx = this;
	let args = arguments;
	let x = args[0],
		y = args[1],
		r = args[2],
		opt = args[3] || {};
		
	ctx.beginPath();
		ctx.strokeStyle = (opt.color || opt.strokeStyle || opt.borderColor || "black");
		ctx.fillStyle = (opt.fill || opt.fillColor || opt.bg || opt.bgColor || "black");
		ctx.lineWidth = (opt.width || opt.lineWidth || opt.borderWidth || 1);
		ctx.arc(x,y,r,0,twoPi);
		ctx.fill();
		ctx.stroke();
	ctx.closePath();
};

CanvasRenderingContext2D.prototype.text = function(){
	let ctx = this;
	let args = arguments;
	let x = args[0],
		y = args[1],
		txt = args[2],
		opt = args[3] || {};
		
	ctx.beginPath();
		ctx.font = opt.font || "10px Arial";
		ctx.fillText(txt,x,y);		
	ctx.closePath();
};
CanvasRenderingContext2D.prototype.Arrow = function(){
	let ctx = this;
	let args = arguments;
	let sX = args[0],
		sY = args[1],
		eX = args[2],
		eY = args[3],
		opt = args[4] || {};
	let diffY = eY - sY,
		diffX = eX - sX,
		angle = Math.atan2((diffY), (diffX));
	
	ctx.line(sX,sY,eX,eY,{
		color:opt.color || "black",
		width:opt.width || 1,
	});
	let size = opt.arrowSize || opt.size || 8;
	ctx.save();
		ctx.translate(eX,eY);
		ctx.rotate(angle);
		ctx.beginPath();
			ctx.fillStyle = opt.color || "black";
			ctx.moveTo(0,0);
			ctx.lineTo(0,-size+2);
			ctx.lineTo(size+2,0);
			ctx.lineTo(0,size-2);
			ctx.lineTo(0,0);
			ctx.fill();
		ctx.closePath();
	ctx.restore();
	
};
function circleCord(){
	let args = arguments;
	let	h = args[0],
		k = args[1],
		r = args[2],
		angle = args[3];
	return {
		x:(r*Math.cos(angle))+h,
		y:(r*Math.sin(angle))+k,
	};
}
function slope(){
	let args = arguments;
	let	x1 = args[0],
		y1 = args[1],
		x2 = args[2],
		y2 = args[3];
	return (y2-y1)/(x2-x1);
}