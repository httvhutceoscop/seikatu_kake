(createjs.Graphics.prototype.dashedLineTo = function (x1, y1, x2, y2, dashLen) {
    this.moveTo(x1, y1);
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    var ctx = this._ctx;
    var dX = x2 - x1;
    var dY = y2 - y1;
    var dashes = Math.floor(Math.sqrt(dX * dX + dY * dY) / dashLen);
    var dashX = dX / dashes;
    var dashY = dY / dashes;

    var q = 0;
    while (q++ < dashes) {
        x1 += dashX;
        y1 += dashY;
        this[q % 2 == 0 ? 'moveTo' : 'lineTo'](x1, y1);
    }
    this[q % 2 == 0 ? 'moveTo' : 'lineTo'](x2, y2);
});

(createjs.Graphics.DrawFree = function (listPoint, _color, _stroke) {
    this.listPoint = listPoint;
	this.color = _color;
	this.stroke  = _stroke;
}).prototype.exec = function (tmp_ctx) {
	var ppts = this.listPoint;
    tmp_ctx.lineWidth = this.stroke;
	tmp_ctx.lineJoin = 'round';
	tmp_ctx.lineCap = 'square';
	tmp_ctx.strokeStyle = this.color;
	tmp_ctx.fillStyle = this.color;
	
	if ( ppts.length < 3) {
		var b = ppts[0];
		tmp_ctx.beginPath();
		tmp_ctx.arc(b.x, b.y, tmp_ctx.lineWidth / 2, 0, Math.PI * 2, !0);
		tmp_ctx.fill();
		tmp_ctx.closePath();
		return;
	}
	
	tmp_ctx.beginPath();
	tmp_ctx.moveTo(ppts[0].x, ppts[0].y);
	
	for (var i = 1; i < ppts.length - 2; i++) {
		var c = (ppts[i].x + ppts[i + 1].x) / 2;
		var d = (ppts[i].y + ppts[i + 1].y) / 2;
		
		tmp_ctx.quadraticCurveTo(ppts[i].x, ppts[i].y, c, d);
	}
	
	// For the last 2 points
	tmp_ctx.quadraticCurveTo(
		ppts[i].x,
		ppts[i].y,
		ppts[i + 1].x,
		ppts[i + 1].y
	);
	tmp_ctx.stroke();
};
createjs.Graphics.prototype._DrawFree = function (listPoint,_color, _stroke) {
    return this.append(new createjs.Graphics.DrawFree(listPoint,_color, _stroke));
};


(createjs.Graphics.DrawRayLine = function (startPoint,endPoint,_color, _stroke) {
    this.startPoint = startPoint;
    this.endPoint = endPoint;
	this.color = _color;
	this.stroke  = _stroke;
}).prototype.exec = function (tmp_ctx) {
    tmp_ctx.lineWidth = this.stroke;
	tmp_ctx.lineJoin = 'square';
	tmp_ctx.lineCap = 'square';
	tmp_ctx.strokeStyle = this.color;
	tmp_ctx.fillStyle = this.color;
	
	tmp_ctx.beginPath();
	tmp_ctx.moveTo(this.startPoint.x, this.startPoint.y);
	tmp_ctx.lineTo(this.endPoint.x, this.endPoint.y);
	tmp_ctx.fill();
	tmp_ctx.closePath();
	tmp_ctx.stroke();
};
createjs.Graphics.prototype._DrawRayLine = function (startPoint,endPoint,_color, _stroke) {
    return this.append(new createjs.Graphics.DrawRayLine(startPoint,endPoint,_color, _stroke));
};

//=======================
(createjs.Graphics.DashCurve = function (listPoint) {
    this.listPoint = listPoint;
}).prototype.exec = function (ctx) {
	
	ctx.strokeStyle = '#000000';
	ctx.lineWidth = 2;
    var ppts = this.listPoint;
	if (ppts.length < 3) {
			return;
	}
	ctx.moveTo(ppts[0].x, ppts[0].y);
	for (var i = 1; i < ppts.length - 2; i++) {
        var c = (ppts[i].x + ppts[i + 1].x) / 2;
        var d = (ppts[i].y + ppts[i + 1].y) / 2;
		
        ctx.quadraticCurveTo(ppts[i].x, ppts[i].y, c, d);
    };
	ctx.quadraticCurveTo(
			ppts[ppts.length - 2].x,
			ppts[ppts.length - 2].y,
			ppts[ppts.length - 1].x,
			ppts[ppts.length - 1].y
	);
	ctx.stroke();
	
	ctx.lineWidth = 13;
	ctx.lineJoin = 'square';
	ctx.lineCap = 'butt';
	ctx.strokeStyle = '#000000';
	ctx.beginPath();
	ctx.moveTo(ppts[0].x, ppts[0].y);
	if(useIE10){
		drawDashedBezier(ctx,ppts,[1, 10],0.01);
	} else {
		ctx.setLineDash([1, 5]);
		ctx.lineDashOffset = 0;
		ctx.moveTo(ppts[0].x, ppts[0].y);
		
		for (var i = 1; i < ppts.length - 2; i++) {
			var c = (ppts[i].x + ppts[i + 1].x) / 2;
			var d = (ppts[i].y + ppts[i + 1].y) / 2;

			ctx.quadraticCurveTo(ppts[i].x, ppts[i].y, c, d);
		};
		ctx.quadraticCurveTo(
				ppts[ppts.length - 2].x,
				ppts[ppts.length - 2].y,
				ppts[ppts.length - 1].x,
				ppts[ppts.length - 1].y
		);
	}
    
	ctx.stroke();
};

createjs.Graphics.prototype.dashCurve = function (listPoint) {
    return this.append(new createjs.Graphics.DashCurve(listPoint));
};

(createjs.Graphics.DashCurveRay = function (listPoint) {
    this.listPoint = listPoint;
}).prototype.exec = function (ctx) {
    var ppts = this.listPoint;
	ctx.lineWidth = 10;
	ctx.lineJoin = 'round';
	ctx.lineCap = 'square';
	ctx.strokeStyle =  "#000000";
	ctx.beginPath();
	for (var i = 1; i < ppts.length - 2; i++) {
        var c = (ppts[i].x + ppts[i + 1].x) / 2;
        var d = (ppts[i].y + ppts[i + 1].y) / 2;
        ctx.quadraticCurveTo(ppts[i].x, ppts[i].y, c, d);
    }
	
	ctx.stroke();
	
	
	ctx.lineWidth = 9;
	ctx.lineJoin = 'round';
	ctx.lineCap = 'square';
	ctx.strokeStyle =  "#FFFFFF";
	ctx.beginPath();
	ctx.moveTo(ppts[0].x, ppts[0].y);
	//draw dash
	if(useIE10){
		drawDashedBezier(ctx,ppts,[8, 25],0.01);
	} else {
		ctx.setLineDash([5, 22]);
		ctx.lineDashOffset = 0;
		
		for (var i = 1; i < ppts.length - 2; i++) {
			var c = (ppts[i].x + ppts[i + 1].x) / 2;
			var d = (ppts[i].y + ppts[i + 1].y) / 2;

			ctx.quadraticCurveTo(ppts[i].x, ppts[i].y, c, d);
		}
	}
	
    ctx.stroke();
};
createjs.Graphics.prototype.dashCurveRay = function (listPoint) {
    return this.append(new createjs.Graphics.DashCurveRay(listPoint));
};
