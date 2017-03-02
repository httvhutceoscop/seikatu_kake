function DrawFree(){

	var _this = this;
	var ppts = [];	
	this.reDraw = function(ppts_data,stroke_data,color_data, x, y) {
		drawingcanvas = new createjs.Shape();
		drawingcanvas.graphics.clear()._DrawFree(ppts_data,color_data,stroke_data);
		drawingcanvas.x = x;
		drawingcanvas.y = y;
		drawingcanvas.mode = "DrawFree";
		container.addChild(drawingcanvas);
		new DragLine(drawingcanvas);
	}
	
	this.handleMouseDownPainter = function(_mouse) {
		oldPt = new createjs.Point(_mouse[0], _mouse[1]);
		oldMidPt = oldPt;
		drawingcanvas = new createjs.Shape();
		drawingcanvas.mode = "DrawFree";
		stage2.addChild(drawingcanvas);
		ppts = [];
		_this.handleMouseMovePainter(_mouse);
	}

	this.handleMouseMovePainter = function(_mouse) {
		ppts.push({x: _mouse[0], y: _mouse[1]});
		drawingcanvas.graphics.clear()._DrawFree(ppts,color,stroke);
		stage2.clear();
		stage2.update();
	}

	this.handleMouseUpPainter = function() {
		stage2.clear();
		stage2.removeChild(drawingcanvas);
		stage2.update();
		//add draw to stage1
		container.addChild(drawingcanvas);
		stage1.clear();
		stage1.update();
		new DragLine(drawingcanvas);
	}
}

function Line(_s,_e){
	var startPoint ={x : _s.x, y : _s.y};
	var endPoint = {x : _e.x, y : _e.y};
	this.getStart = function(){
		return startPoint;
	}
	this.getEnd = function(){
		return endPoint;
	}
	
	this.setStart = function(_p){
		startPoint = {x : _p.x , y: _p.y};
	}
	this.setEnd = function(_p){
		endPoint = {x : _p.x , y: _p.y};
	}
	this.appendXY = function(x,y){
		startPoint.x += x;
		startPoint.y += y;
		
		endPoint.x += x;
		endPoint.y += y;
	}
}


function DrawLine(){
	var _this = this;
	var startPoint;
	var endPoint;

	this.reDraw = function(start, end, stroke_data, color_data, x, y) {
		drawingcanvas = new createjs.Shape();
		drawingcanvas.graphics.clear().setStrokeStyle(stroke_data, 'Square', 'Square').beginStroke(color_data).moveTo(start.x, start.y).lineTo(end.x, end.y);
		drawingcanvas.x = x;
		drawingcanvas.y = y;
		var _mygroup = new createjs.Container();
		_mygroup.mode = "DrawLine";
		
		var _tmpstroke = stroke_data;
		if(_tmpstroke < minR){
			_tmpstroke = minR;
		}
		
		var _endCir = new createjs.Shape();
		_endCir.graphics.beginFill(circleFillColor).setStrokeStyle(circleStrokeWidth)
			.beginStroke(circleStrokeColor).drawCircle(end.x, end.y, stroke_data);
		_endCir.name = "End";
		

		var _startCir = new createjs.Shape();
		_startCir.graphics.beginFill(circleFillColor).setStrokeStyle(circleStrokeWidth)
			.beginStroke(circleStrokeColor).drawCircle(start.x, start.y, stroke_data);
		_startCir.name = "Start";
		
		_endCir.visible = false;
		_startCir.visible = false;
		addPairCircle(_startCir,_endCir);
		_mygroup.addChild(drawingcanvas,_startCir,_endCir);
		container.addChild(_mygroup);
		
		var line = new Line(start,end);
		new DragLineNew(_mygroup,line,stroke_data,color_data);
	}	
	
	this.handleMouseDownPainter = function(_mouse) {
		startPoint = new createjs.Point(_mouse[0], _mouse[1]);
		drawingcanvas = new createjs.Shape();
		//drawingcanvas.mode = "DrawLine";
		stage2.addChild(drawingcanvas);
		_this.handleMouseMovePainter(_mouse);
	}

	this.handleMouseMovePainter = function(_mouse) {
		endPoint = {x : _mouse[0], y : _mouse[1]};
		drawingcanvas.graphics.clear().setStrokeStyle(stroke, 'Square', 'Square').beginStroke(color).moveTo(startPoint.x, startPoint.y).lineTo(_mouse[0],_mouse[1]);
		stage2.clear();
		stage2.update();
	}

	this.handleMouseUpPainter = function() {
		stage2.clear();
		stage2.removeChild(drawingcanvas);
		stage2.update();
		//add draw to stage1
		var _tmpstroke = stroke;
		if(_tmpstroke < minR){
			_tmpstroke = minR;
		} 
		var _mygroup = new createjs.Container();
		_mygroup.mode = "DrawLine";
		var _endCir = new createjs.Shape();
		_endCir.graphics.beginFill(circleFillColor).setStrokeStyle(circleStrokeWidth)
			.beginStroke(circleStrokeColor).drawCircle(endPoint.x, endPoint.y, _tmpstroke);
		_endCir.name = "End";
		

		var _startCir = new createjs.Shape();
		_startCir.graphics.beginFill(circleFillColor).setStrokeStyle(circleStrokeWidth)
			.beginStroke(circleStrokeColor).drawCircle(startPoint.x, startPoint.y, _tmpstroke);
		_startCir.name = "Start";
		
		_endCir.visible = true;
		_startCir.visible = true;
		
		_currentSelect = "";
		
		_endCir.alpha = 0.8;
		_startCir.alpha = 0.8;
		
		addPairCircle(_startCir,_endCir);
		_mygroup.addChild(drawingcanvas,_startCir,_endCir);
		container.addChild(_mygroup);
		
		var line = new Line(startPoint,endPoint);
		new DragLineNew(_mygroup,line,stroke,color);
		
		stage1.clear();
		stage1.update();
	}
}

function DrawRayLine(){
	var _this = this;
	var startPoint;
	var endPoint;
	
	this.reDraw = function(start, end, stroke_data,color_data, x, y) {
		color = "#000000";
		stroke = 1.5;
		drawingcanvas = new createjs.Shape();
		drawingcanvas.graphics.clear().setStrokeStyle(stroke, 'Square', 'Square').beginStroke(color)
		.moveTo(start.x, start.y).lineTo(end.x,end.y);
		
		drawingcanvas.graphics.setStrokeStyle(0.7, 'Square', 'Square');
		drawingcanvas.x = x;
		drawingcanvas.y = y;
		var _dist = Point.dist(end,start);
		var _rad = Point.angle(start,end);
		var _distRay = 6;
		while(_distRay < _dist){
			//point in ray
			var _tmpPoint = getPointByCenterAndDistance(start,_rad,_distRay);
			var _point1 = getPointByCenterAndDistance(_tmpPoint,_rad + Math.PI/2, stroke*4);
			var _point2 = getPointByCenterAndDistance(_tmpPoint,_rad - Math.PI/2, stroke*4);
			drawingcanvas.graphics.moveTo(_point1.x, _point1.y).lineTo(_point2.x,_point2.y);
			_distRay += 6;
		}
		var _mygroup = new createjs.Container();
		_mygroup.mode = "DrawRayLine";
		var _endCir = new createjs.Shape();
		_endCir.graphics.beginFill(circleFillColor).setStrokeStyle(circleStrokeWidth)
			.beginStroke(circleStrokeColor).drawCircle(end.x, end.y, stroke*4);
		_endCir.name = "End";

		var _startCir = new createjs.Shape();
		_startCir.graphics.beginFill(circleFillColor).setStrokeStyle(circleStrokeWidth)
			.beginStroke(circleStrokeColor).drawCircle(start.x, start.y, stroke*4);
		_startCir.name = "Start";
		
		_endCir.visible = false;
		_startCir.visible = false;
		addPairCircle(_startCir,_endCir);
		
		_mygroup.addChild(drawingcanvas,_startCir,_endCir);
		container.addChild(_mygroup);
		
		var line = new Line(start,end);
		new DragRayLineNew(_mygroup,line,stroke,color);
	}
	
	this.handleMouseDownPainter = function(_mouse) {
		stroke = 1.5;
		//color = randomColor();
		color = "#000000";
		startPoint = new createjs.Point(_mouse[0], _mouse[1]);
		drawingcanvas = new createjs.Shape();
		
		stage2.addChild(drawingcanvas);
		_this.handleMouseMovePainter(_mouse);
	}

	this.handleMouseMovePainter = function(_mouse) {
		endPoint = {x:_mouse[0],y:_mouse[1]};
		
		drawingcanvas.graphics.clear().setStrokeStyle(stroke, 'Square', 'Square').beginStroke(color)
		.moveTo(startPoint.x, startPoint.y).lineTo(endPoint.x,endPoint.y);
		
		drawingcanvas.graphics.setStrokeStyle(0.7, 'Square', 'Square');
		
		var _dist = Point.dist(endPoint,startPoint);
		var _rad = Point.angle(startPoint,endPoint);
		var _distRay = 6;
		while(_distRay < _dist){
			//point in ray
			var _tmpPoint = getPointByCenterAndDistance(startPoint,_rad,_distRay);
			var _point1 = getPointByCenterAndDistance(_tmpPoint,_rad + Math.PI/2, stroke*4);
			var _point2 = getPointByCenterAndDistance(_tmpPoint,_rad - Math.PI/2, stroke*4);
			drawingcanvas.graphics.moveTo(_point1.x, _point1.y).lineTo(_point2.x,_point2.y);
			_distRay += 6;
		}
		
		stage2.clear();
		stage2.update();
	}

	this.handleMouseUpPainter = function() {
		stage2.clear();
		stage2.removeChild(drawingcanvas);
		stage2.update();
		//add draw to stage1
		
		var _mygroup = new createjs.Container();
		_mygroup.mode = "DrawRayLine";
		var _endCir = new createjs.Shape();
		_endCir.graphics.beginFill(circleFillColor).setStrokeStyle(circleStrokeWidth)
			.beginStroke(circleStrokeColor).drawCircle(endPoint.x, endPoint.y, stroke*4);
		_endCir.name = "End";

		var _startCir = new createjs.Shape();
		_startCir.graphics.beginFill(circleFillColor).setStrokeStyle(circleStrokeWidth)
			.beginStroke(circleStrokeColor).drawCircle(startPoint.x, startPoint.y, stroke*4);
		_startCir.name = "Start";
		
		_endCir.visible = true;
		_startCir.visible = true;
		
		_endCir.alpha = 0.8;
		_startCir.alpha = 0.8;
		
		_currentSelect = "";
		
		addPairCircle(_startCir,_endCir);
		
		_mygroup.addChild(drawingcanvas,_startCir,_endCir);
		container.addChild(_mygroup);
		
		var line = new Line(startPoint,endPoint);
		new DragRayLineNew(_mygroup,line,stroke,color);
		
		stage1.clear();
		stage1.update();
	}
}


function DrawRayLine2(){
	var _this = this;
	var startPoint;
	var endPoint;
	
	this.reDraw = function(start, end, stroke_data, color_data,  x, y) {
		color = "#000000";
		drawingcanvas = new createjs.Shape();
		
		var _dist = Point.dist(end,start);
		var _rad = Point.angle(start,end);
		var _pointStart1 = getPointByCenterAndDistance(start,_rad + Math.PI/2, 5);
		var _pointStart2 = getPointByCenterAndDistance(start,_rad - Math.PI/2, 5);
		var _pointEnd1 = getPointByCenterAndDistance(_pointStart1,_rad, _dist);
		var _pointEnd2 = getPointByCenterAndDistance(_pointStart2,_rad, _dist);
		drawingcanvas.graphics.clear().setStrokeStyle(0.7).beginStroke("#000000").beginFill("#FFFFFF")
		.moveTo(_pointStart1.x, _pointStart1.y)
		.lineTo(_pointEnd1.x,_pointEnd1.y)
		.lineTo(_pointEnd2.x,_pointEnd2.y)
		.lineTo(_pointStart2.x,_pointStart2.y)
		.lineTo(_pointStart1.x,_pointStart1.y);
		
		drawingcanvas.graphics.setStrokeStyle(1, 'Square', 'Square').beginStroke("#FFFFFF")
			.moveTo(_pointStart1.x, _pointStart1.y).lineTo(_pointStart2.x,_pointStart2.y)
			.moveTo(_pointEnd1.x, _pointEnd1.y).lineTo(_pointEnd2.x,_pointEnd2.y);
		var _distConfig = 15;
		var _distRay = _distConfig;
		
		while(_distRay < _dist - _distConfig){
			//point in ray
			var _tmpPoint = getPointByCenterAndDistance(start,_rad,_distRay);
			var _point1Start = getPointByCenterAndDistance(_tmpPoint,_rad + Math.PI/2, 5);
			var _point2Start = getPointByCenterAndDistance(_tmpPoint,_rad - Math.PI/2, 5);
			
			
			_distRay += _distConfig;
			_tmpPoint = getPointByCenterAndDistance(start,_rad,_distRay);
			var _point1End = getPointByCenterAndDistance(_tmpPoint,_rad + Math.PI/2, 5);
			var _point2End = getPointByCenterAndDistance(_tmpPoint,_rad - Math.PI/2, 5);
			
			drawingcanvas.graphics.setStrokeStyle(0.7).beginStroke("#000000").beginFill("#000000")
			.moveTo(_point1Start.x, _point1Start.y)
			.lineTo(_point1End.x,_point1End.y)
			.lineTo(_point2End.x,_point2End.y)
			.lineTo(_point2Start.x,_point2Start.y)
			.lineTo(_point1Start.x,_point1Start.y);
			_distRay += _distConfig;
		}
		drawingcanvas.x = x;
		drawingcanvas.y = y;
		var _mygroup = new createjs.Container();
		_mygroup.mode = "DrawRayLine2";
		var _endCir = new createjs.Shape();
		_endCir.graphics.beginFill(circleFillColor).setStrokeStyle(circleStrokeWidth)
			.beginStroke(circleStrokeColor).drawCircle(end.x, end.y, 8);
		_endCir.name = "End";

		var _startCir = new createjs.Shape();
		_startCir.graphics.beginFill(circleFillColor).setStrokeStyle(circleStrokeWidth)
			.beginStroke(circleStrokeColor).drawCircle(start.x, start.y, 8);
		_startCir.name = "Start";
		
		_endCir.visible = false;
		_startCir.visible = false;
		addPairCircle(_startCir,_endCir);
		
		_mygroup.addChild(drawingcanvas,_startCir,_endCir);
		container.addChild(_mygroup);
		
		var line = new Line(start,end);
		new DragRayLine2New(_mygroup,line,8,color);
	}
	
	this.handleMouseDownPainter = function(_mouse) {
		color = "#000000";
		startPoint = new createjs.Point(_mouse[0], _mouse[1]);
		drawingcanvas = new createjs.Shape();
		
		stage2.addChild(drawingcanvas);
		_this.handleMouseMovePainter(_mouse);
	}

	this.handleMouseMovePainter = function(_mouse) {
		endPoint = {x:_mouse[0],y:_mouse[1]};
		var _dist = Point.dist(endPoint,startPoint);
		var _rad = Point.angle(startPoint,endPoint);
		var _pointStart1 = getPointByCenterAndDistance(startPoint,_rad + Math.PI/2, 5);
		var _pointStart2 = getPointByCenterAndDistance(startPoint,_rad - Math.PI/2, 5);
		var _pointEnd1 = getPointByCenterAndDistance(_pointStart1,_rad, _dist);
		var _pointEnd2 = getPointByCenterAndDistance(_pointStart2,_rad, _dist);
		drawingcanvas.graphics.clear().setStrokeStyle(0.7).beginStroke("#000000").beginFill("#FFFFFF")
		.moveTo(_pointStart1.x, _pointStart1.y)
		.lineTo(_pointEnd1.x,_pointEnd1.y)
		.lineTo(_pointEnd2.x,_pointEnd2.y)
		.lineTo(_pointStart2.x,_pointStart2.y)
		.lineTo(_pointStart1.x,_pointStart1.y);
		
		drawingcanvas.graphics.setStrokeStyle(1, 'Square', 'Square').beginStroke("#FFFFFF")
			.moveTo(_pointStart1.x, _pointStart1.y).lineTo(_pointStart2.x,_pointStart2.y)
			.moveTo(_pointEnd1.x, _pointEnd1.y).lineTo(_pointEnd2.x,_pointEnd2.y);
		var _distConfig = 15;
		var _distRay = _distConfig;
		
		while(_distRay < _dist - _distConfig){
			//point in ray
			var _tmpPoint = getPointByCenterAndDistance(startPoint,_rad,_distRay);
			var _point1Start = getPointByCenterAndDistance(_tmpPoint,_rad + Math.PI/2, 5);
			var _point2Start = getPointByCenterAndDistance(_tmpPoint,_rad - Math.PI/2, 5);
			
			
			_distRay += _distConfig;
			_tmpPoint = getPointByCenterAndDistance(startPoint,_rad,_distRay);
			var _point1End = getPointByCenterAndDistance(_tmpPoint,_rad + Math.PI/2, 5);
			var _point2End = getPointByCenterAndDistance(_tmpPoint,_rad - Math.PI/2, 5);
			
			drawingcanvas.graphics.setStrokeStyle(0.7).beginStroke("#000000").beginFill("#000000")
			.moveTo(_point1Start.x, _point1Start.y)
			.lineTo(_point1End.x,_point1End.y)
			.lineTo(_point2End.x,_point2End.y)
			.lineTo(_point2Start.x,_point2Start.y)
			.lineTo(_point1Start.x,_point1Start.y);
			_distRay += _distConfig;
		}
		
		stage2.clear();
		stage2.update();
	}

	this.handleMouseUpPainter = function() {
		stage2.clear();
		stage2.removeChild(drawingcanvas);
		stage2.update();
		//add draw to stage1
		var _mygroup = new createjs.Container();
		_mygroup.mode = "DrawRayLine2";
		var _endCir = new createjs.Shape();
		_endCir.graphics.beginFill(circleFillColor).setStrokeStyle(circleStrokeWidth)
			.beginStroke(circleStrokeColor).drawCircle(endPoint.x, endPoint.y, 8);
		_endCir.name = "End";

		var _startCir = new createjs.Shape();
		_startCir.graphics.beginFill(circleFillColor).setStrokeStyle(circleStrokeWidth)
			.beginStroke(circleStrokeColor).drawCircle(startPoint.x, startPoint.y, 8);
		_startCir.name = "Start";
		
		_endCir.visible = true;
		_startCir.visible = true;
		
		_currentSelect = "";
		
		_endCir.alpha = 0.8;
		_startCir.alpha = 0.8;
		addPairCircle(_startCir,_endCir);
		
		_mygroup.addChild(drawingcanvas,_startCir,_endCir);
		container.addChild(_mygroup);
		
		var line = new Line(startPoint,endPoint);
		new DragRayLine2New(_mygroup,line,8,color);
		
		stage1.clear();
		stage1.update();
	}
}



function DrawRayLineFree(){
	var _this = this;
	var list_point = [];

	
	this.reDraw = function(listpoint_data, stroke_data, color_data, x, y) {
		drawingcanvas = new createjs.Shape();
		drawingcanvas.graphics.clear().dashCurveRay(listpoint_data);
		drawingcanvas.x = x;
		drawingcanvas.y = y;
		drawingcanvas.mode = "DrawRayLineFree";
		container.addChild(drawingcanvas);
		new DragLine(drawingcanvas);
	}
	
	this.handleMouseDownPainter = function(_mouse) {
		stroke = 10;
		color = randomColor();
		drawingcanvas = new createjs.Shape();
		drawingcanvas.mode = "DrawRayLineFree";
		stage2.addChild(drawingcanvas);
		list_point = [];
		_this.handleMouseMovePainter(_mouse);
		
	}
	this.handleMouseMovePainter = function(_mouse) {
		list_point.push({x: _mouse[0], y: _mouse[1]});
		drawingcanvas.graphics.clear().dashCurveRay(list_point);
		stage2.clear();
		stage2.update();
	}

	this.handleMouseUpPainter = function() {
		stage2.clear();
		stage2.removeChild(drawingcanvas);
		stage2.update();
		//add draw to stage1
		container.addChild(drawingcanvas);
		stage1.clear();
		stage1.update();
		new DragLine(drawingcanvas);
	}
}

function DrawRayLineProFree(){
	var _drawed = false;
	var _this = this;
	var list_point = [];

	
	this.reDraw = function(listpoint_data, stroke_data, color_data, x, y) {
		drawingcanvas = new createjs.Shape();
		drawingcanvas.graphics.clear().dashCurve(listpoint_data);
		drawingcanvas.x = x;
		drawingcanvas.y = y;
		drawingcanvas.mode = "DrawRayLineProFree";
		container.addChild(drawingcanvas);
		new DragLine(drawingcanvas);
	}
	
	this.handleMouseDownPainter = function(_mouse) {
		stroke = 10;
		color = randomColor();
		drawingcanvas = new createjs.Shape();
		drawingcanvas.mode = "DrawRayLineProFree";
		stage2.addChild(drawingcanvas);
		list_point = [];
		_this.handleMouseMovePainter(_mouse);
		
	}
	
	this.handleMouseMovePainter = function(_mouse) {
		list_point.push({x: _mouse[0], y: _mouse[1]});
		drawingcanvas.graphics.clear().dashCurve(list_point);
		stage2.clear();
		stage2.update();
	}

	this.handleMouseUpPainter = function() {
		stage2.clear();
		stage2.removeChild(drawingcanvas);
		stage2.update();
		//add draw to stage1
		container.addChild(drawingcanvas);
		stage1.clear();
		stage1.update();
		new DragLine(drawingcanvas);
	}
}


$drawfree = new DrawFree(); // done
$drawline = new DrawLine();

$drawrayline = new DrawRayLine();
$drawrayline2 = new DrawRayLine2();

$drawraylinefree = new DrawRayLineFree();
$drawRayLineProFree = new DrawRayLineProFree();

