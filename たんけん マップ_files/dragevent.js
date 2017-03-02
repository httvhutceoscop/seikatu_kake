var currentHover = undefined;
var _currentSelect = undefined;
var downPointNexus = {x : 0 , y : 0};
function DragLine(_item, _sP , _eP , _type){
	this.target = _item;
	var _this = this;
	var prePoint = {x : 0 , y : 0};
	var startPoint = _sP;
	var endPoint = _eP;
	var type = _type;
	this.oldIndex = -1;
	var hasMove = false;
	var _tmpTimeout;
	var _tmpItem = undefined;
	
	
	function _mousedown(event){
		if ( event != undefined && (event.nativeEvent.button == 1 ||
			event.nativeEvent.button == 2)) return;
		if(_lockDragLine) return;
		if(useIE10){
			$("#canvas2").show();
		}
		var _currentItem = event.currentTarget;
		if(_deleteEnable) {
			container.removeChild(_currentItem);
			stage1.clear();
			stage1.update();
			stage2.clear();
			stage2.update();
			return;
		}
		_this.target.alpha = 0.8;
		interact(".candraw").draggable(false);
		_this.oldIndex = container.getChildIndex(_currentItem);
		container.removeChild(_currentItem);
		hasMove = false;
		tmpItemToDrag.addChild(_item);
		hidePairCircle();
		stage1.clear();
		stage1.update();
		stage2.clear();
		stage2.update();
		
		prePoint = {x:event.stageX, y : event.stageY};
		canDraw = false;
		_tmpTimeout = setTimeout(function(){
			if(!hasMove){
				canDraw = true;
				_lockDragLine = true;
				_mouseup(undefined, true);
				interact(".candraw").draggable(true);
				_this.target.alpha = 1;
			}
		}, 1000);
	}
	
	function _mousemove(event){
		if ( event != undefined && (event.nativeEvent.button == 1 ||
			event.nativeEvent.button == 2)) return;
		if(_lockDragLine) return;
		hasMove = true;
		var offset = {x : event.stageX - prePoint.x, y : event.stageY - prePoint.y};
		_this.target.x += offset.x;
		_this.target.y += offset.y;
		prePoint = {x:event.stageX, y : event.stageY};
		stage2.clear();
		stage2.update();
	}
	
	function _mouseup(event, _allow){
		if ( event != undefined && (event.nativeEvent.button == 1 ||
			event.nativeEvent.button == 2)) return;
		if(_lockDragLine && !_allow) return;
		if(useIE10){
			$("#canvas2").hide();
		}
		if(_deleteEnable) return;
		_this.target.alpha = 1;
		tmpItemToDrag.removeAllChildren();
		container.addChildAt(_this.target, _this.oldIndex);
		
		canDraw = true;
		stage1.clear();
		stage1.update();
		stage2.clear();
		stage2.update();
		interact(".candraw").draggable(true);
		if(_tmpTimeout != undefined || _tmpTimeout != null){
			clearTimeout(_tmpTimeout);
		}
		
	}
	
	_item.addEventListener("mousedown", _mousedown);
	_item.addEventListener("pressmove",_mousemove);
	_item.addEventListener("pressup", _mouseup);
	_item.addEventListener("mouseover", function(event){
		currentHover = event.currentTarget;
	});
	
	_item.addEventListener("mouseout", function(event){
		currentHover = undefined;
	});
}

function stageDown(event){
	if ( event != undefined && (event.nativeEvent.button == 1 ||
			event.nativeEvent.button == 2)) return;
	if(_deleteEnable)
		stage1.addEventListener("stagemousemove", stageMove);
	// fix ipad
	var _event = {pageX : event.nativeEvent.pageX, pageY : event.nativeEvent.pageY};
	if(detectmob() == 3 && event.nativeEvent.touches.length > 0){
		_event = {pageX : event.nativeEvent.touches[0].pageX, pageY : event.nativeEvent.touches[0].pageY};
		downPointNexus = {x : _event.pageX, y : _event.pageY};
	}
	
	if (textflag) {
		if (!textclick) {
			CreateText(canvas, _event);
		}
		isTextNoFlag(canvas, _event);
	} else if (imageflag) {
		saveImageToCavasNoFlag();
	} 
}

function stageMove(event){
	if ( event != undefined && (event.nativeEvent.button == 1 ||
			event.nativeEvent.button == 2)) return;
	if(_deleteEnable) {
		container.removeChild(currentHover);
		stage1.clear();
		stage1.update();
		stage2.clear();
		stage2.update();
		return;
	}
}
function stageUp(event){
	if ( event != undefined && (event.nativeEvent.button == 1 ||
			event.nativeEvent.button == 2)) return;
	if($("#colorTab").css("display") != "none"){
		$("#colorTab").hide();
		_buttonColorClick = "";
	}
	stage1.removeEventListener("stagemousemove", stageMove);
	// fix ipad
	if(_currentSelect == undefined){
		hidePairCircle();
		stage1.clear();
		stage1.update();
	}
	_currentSelect = undefined;
	
	
	var _event = {pageX : event.nativeEvent.pageX, pageY : event.nativeEvent.pageY};
	
	if(detectmob() == 3){
		_event = {pageX : downPointNexus.x, pageY : downPointNexus.y};
	}
	
	if (textflag) {
		if (!textclick) {
			CreateText(canvas, _event);
		}else{
			textclick = false;	
		}
	} else if (imageflag) {
		if(currentImageClick != undefined){
			return;
		}
		saveImageToCavasNoFlag();
	} else if(stampflag){
		//console.log("hide stamp");
		if (stampflag) {
			if (div != null) {
				saveStampToCanvas(canvas);
				$('#draggable').hide();
				resetText();
			}
			removeText();
		}
	}
	//console.log(stampflag);
	currentImageClick = undefined;
}

stage1.addEventListener("stagemousedown",stageDown);
stage1.addEventListener("stagemouseup",stageUp);

//====================================================
/*
	just use for line
	_mygroup,line,stroke,color
	_mygroup.addChild(drawingcanvas,_startCir,_endCir);
*/
function DragLineNew(_root, _rootDragObject , _stroke, _color){
	this.root = _root;
	this.rootDragObject = _rootDragObject;
	this.target = _root.getChildAt(0);
	this.cirStart = _root.getChildAt(1);
	this.cirEnd = _root.getChildAt(2);
	var _this = this;
	var prePoint = {x : 0 , y : 0};
	this.oldIndex = -1;
	var hasMove = false;
	var _tmpTimeout;
	
	
	function _mousedown(event){
		if ( event != undefined && (event.nativeEvent.button == 1 ||
			event.nativeEvent.button == 2)) return;
		if(_lockDragLine) return;
		if(useIE10){
			$("#canvas2").show();
		}
		
		if(_deleteEnable) {
			container.removeChild(_this.root);
			stage1.clear();
			stage1.update();
			stage2.clear();
			stage2.update();
			return;
		}
		_this.root.alpha = 0.8;
		interact(".candraw").draggable(false);
		_currentSelect = _this.root;
		_this.oldIndex = container.getChildIndex(_this.root);
		container.removeChild(_this.root);
		hasMove = false;
		tmpItemToDrag.addChild(_this.root);
		
		stage1.clear();
		stage1.update();
		stage2.clear();
		stage2.update();
		
		prePoint = {x:event.stageX, y : event.stageY};
		canDraw = false;
		
		_tmpTimeout = setTimeout(function(){
			if(!hasMove){
				canDraw = true;
				_lockDragLine = true;
				_mouseup(undefined, true);
				interact(".candraw").draggable(true);
				_this.root.alpha = 1;
			}
		}, 1000);
	}
	
	function _mousemove(event){
		if ( event != undefined && (event.nativeEvent.button == 1 ||
			event.nativeEvent.button == 2)) return;
		if(_lockDragLine) return;
		hasMove = true;
		var offset = {x : event.stageX - prePoint.x, y : event.stageY - prePoint.y};
		
		_this.rootDragObject.appendXY(offset.x,offset.y);
		_this.target.graphics.clear().setStrokeStyle(_stroke, 'Square', 'Square').beginStroke(_color)
			.moveTo(_this.rootDragObject.getStart().x, _this.rootDragObject.getStart().y)
			.lineTo(_this.rootDragObject.getEnd().x,_this.rootDragObject.getEnd().y);
		
		var _tmpstroke = _stroke;
		if(_tmpstroke < minR){
			_tmpstroke = minR;
		}
		
		_this.cirStart.graphics.clear().beginFill(circleFillColor).setStrokeStyle(circleStrokeWidth)
			.beginStroke(circleStrokeColor).drawCircle(_this.rootDragObject.getStart().x, _this.rootDragObject.getStart().y,_tmpstroke);
		_this.cirEnd.graphics.clear().beginFill(circleFillColor).setStrokeStyle(circleStrokeWidth)
			.beginStroke(circleStrokeColor).drawCircle(_this.rootDragObject.getEnd().x, _this.rootDragObject.getEnd().y,_tmpstroke);
		
		
		prePoint = {x:event.stageX, y : event.stageY};
		stage2.clear();
		stage2.update();
	}
	
	
	function _circlePressMove(event){
		if ( event != undefined && (event.nativeEvent.button == 1 ||
			event.nativeEvent.button == 2)) return;
		if(_lockDragLine) return;
		hasMove = true;
		var _tmpstroke = _stroke;
		if(_tmpstroke < minR){
			_tmpstroke = minR;
		}
		var _item = event.currentTarget;
		if(_item.name == "End"){
			_this.target.graphics.clear().setStrokeStyle(_stroke, 'Square', 'Square').beginStroke(_color).moveTo(_this.rootDragObject.getStart().x, _this.rootDragObject.getStart().y).lineTo(event.stageX,event.stageY);
			_this.cirEnd.graphics.clear().beginFill(circleFillColor).setStrokeStyle(circleStrokeWidth)
			.beginStroke(circleStrokeColor).drawCircle(event.stageX, event.stageY, _tmpstroke);
			_this.rootDragObject.setEnd({x : event.stageX, y :event.stageY});
		}
		if(_item.name == "Start"){
			_this.target.graphics.clear().setStrokeStyle(_stroke, 'Square', 'Square').beginStroke(_color).moveTo(_this.rootDragObject.getEnd().x, _this.rootDragObject.getEnd().y).lineTo(event.stageX,event.stageY);
			_this.cirStart.graphics.clear().beginFill(circleFillColor).setStrokeStyle(circleStrokeWidth)
			.beginStroke(circleStrokeColor).drawCircle(event.stageX, event.stageY, _tmpstroke);
			_this.rootDragObject.setStart({x : event.stageX, y :event.stageY});
		}
		
		stage2.clear();
		stage2.update();
	}
	
	function _mouseup(event, _allow){
		if ( event != undefined && (event.nativeEvent.button == 1 ||
			event.nativeEvent.button == 2)) return;
		if(_lockDragLine && !_allow) return;
		if(useIE10){
			$("#canvas2").hide();
		}
		if(_deleteEnable) return;
		tmpItemToDrag.removeAllChildren();
		container.addChildAt(_this.root, _this.oldIndex);
		
		canDraw = true;
		_this.root.alpha = 1;
		addPairCircle(_this.cirStart,_this.cirEnd);
		_this.cirStart.visible = true;
		_this.cirEnd.visible = true;
		stage1.clear();
		stage1.update();
		stage2.clear();
		stage2.update();
		interact(".candraw").draggable(true);
		if(_tmpTimeout != undefined || _tmpTimeout != null){
			clearTimeout(_tmpTimeout);
		}
		
	}
	
	this.root.addEventListener("mousedown", _mousedown);
	this.root.addEventListener("pressup", _mouseup);
	
	this.target.addEventListener("pressmove",_mousemove);
	this.cirEnd.addEventListener("pressmove",_circlePressMove);
	this.cirStart.addEventListener("pressmove",_circlePressMove);
	
	this.root.addEventListener("mouseover", function(event){
		currentHover = _this.root;
	});
	
	this.root.addEventListener("mouseout", function(event){
		currentHover = undefined;
	});
}




//====================================================
/*
	just use for DragRayLineNew
*/
function DragRayLineNew(_root, _rootDragObject , _stroke, _color){
	this.root = _root;
	this.rootDragObject = _rootDragObject;
	this.target = _root.getChildAt(0);
	this.cirStart = _root.getChildAt(1);
	this.cirEnd = _root.getChildAt(2);
	var _this = this;
	var prePoint = {x : 0 , y : 0};
	this.oldIndex = -1;
	var hasMove = false;
	var _tmpTimeout;
	
	
	function _mousedown(event){
		if ( event != undefined && (event.nativeEvent.button == 1 ||
			event.nativeEvent.button == 2)) return;
		if(_lockDragLine) return;
		if(useIE10){
			$("#canvas2").show();
		}
		if(_deleteEnable) {
			container.removeChild(_this.root);
			stage1.clear();
			stage1.update();
			stage2.clear();
			stage2.update();
			return;
		}
		_this.root.alpha = 0.8;
		interact(".candraw").draggable(false);
		_currentSelect = _this.root;
		_this.oldIndex = container.getChildIndex(_this.root);
		container.removeChild(_this.root);
		hasMove = false;
		tmpItemToDrag.addChild(_this.root);
		stage1.clear();
		stage1.update();
		stage2.clear();
		stage2.update();
		
		prePoint = {x:event.stageX, y : event.stageY};
		canDraw = false;
		_tmpTimeout = setTimeout(function(){
			if(!hasMove){
				canDraw = true;
				_lockDragLine = true;
				_mouseup(undefined, true);
				interact(".candraw").draggable(true);
				_this.root.alpha = 1;
			}
		}, 1000);
	}
	
	function _mousemove(event){
		if ( event != undefined && (event.nativeEvent.button == 1 ||
			event.nativeEvent.button == 2)) return;
		if(_lockDragLine) return;
		hasMove = true;
		var offset = {x : event.stageX - prePoint.x, y : event.stageY - prePoint.y};
		
		_this.rootDragObject.appendXY(offset.x,offset.y);
		
		_this.target.graphics.clear().setStrokeStyle(_stroke, 'Square', 'Square').beginStroke(_color)
		.moveTo(_this.rootDragObject.getStart().x, _this.rootDragObject.getStart().y)
		.lineTo(_this.rootDragObject.getEnd().x,_this.rootDragObject.getEnd().y);
		
		_this.target.graphics.setStrokeStyle(0.7, 'Square', 'Square');
		
		var _dist = Point.dist(_this.rootDragObject.getEnd(),_this.rootDragObject.getStart());
		var _rad = Point.angle(_this.rootDragObject.getStart(),_this.rootDragObject.getEnd());
		var _distRay = 6;
		while(_distRay < _dist){
			//point in ray
			var _tmpPoint = getPointByCenterAndDistance(_this.rootDragObject.getStart(),_rad,_distRay);
			var _point1 = getPointByCenterAndDistance(_tmpPoint,_rad + Math.PI/2, _stroke*4);
			var _point2 = getPointByCenterAndDistance(_tmpPoint,_rad - Math.PI/2, _stroke*4);
			_this.target.graphics.moveTo(_point1.x, _point1.y).lineTo(_point2.x,_point2.y);
			_distRay += 6;
		}
		
		_this.cirStart.graphics.clear().beginFill(circleFillColor).setStrokeStyle(circleStrokeWidth)
			.beginStroke(circleStrokeColor).drawCircle(_this.rootDragObject.getStart().x, _this.rootDragObject.getStart().y,_stroke*4);
		_this.cirEnd.graphics.clear().beginFill(circleFillColor).setStrokeStyle(circleStrokeWidth)
			.beginStroke(circleStrokeColor).drawCircle(_this.rootDragObject.getEnd().x, _this.rootDragObject.getEnd().y,_stroke*4);
		
		
		prePoint = {x:event.stageX, y : event.stageY};
		stage2.clear();
		stage2.update();
	}
	
	
	function _circlePressMove(event){
		if ( event != undefined && (event.nativeEvent.button == 1 ||
			event.nativeEvent.button == 2)) return;
		if(_lockDragLine) return;
		hasMove = true;
		
		var _item = event.currentTarget;
		if(_item.name == "End"){
			_this.rootDragObject.setEnd({x : event.stageX, y :event.stageY});
			
			_this.target.graphics.clear().setStrokeStyle(_stroke, 'Square', 'Square').beginStroke(_color)
			.moveTo(_this.rootDragObject.getStart().x, _this.rootDragObject.getStart().y)
			.lineTo(_this.rootDragObject.getEnd().x,_this.rootDragObject.getEnd().y);
			
			_this.target.graphics.setStrokeStyle(0.7, 'Square', 'Square');
			
			var _dist = Point.dist(_this.rootDragObject.getEnd(),_this.rootDragObject.getStart());
			var _rad = Point.angle(_this.rootDragObject.getStart(),_this.rootDragObject.getEnd());
			var _distRay = 6;
			while(_distRay < _dist){
				//point in ray
				var _tmpPoint = getPointByCenterAndDistance(_this.rootDragObject.getStart(),_rad,_distRay);
				var _point1 = getPointByCenterAndDistance(_tmpPoint,_rad + Math.PI/2, _stroke*4);
				var _point2 = getPointByCenterAndDistance(_tmpPoint,_rad - Math.PI/2, _stroke*4);
				_this.target.graphics.moveTo(_point1.x, _point1.y).lineTo(_point2.x,_point2.y);
				_distRay += 6;
			}
			
			
			_this.cirEnd.graphics.clear().beginFill(circleFillColor).setStrokeStyle(circleStrokeWidth)
			.beginStroke(circleStrokeColor).drawCircle(event.stageX, event.stageY, _stroke*4);
			
		}
		if(_item.name == "Start"){
			_this.rootDragObject.setStart({x : event.stageX, y :event.stageY});
			
			_this.target.graphics.clear().setStrokeStyle(_stroke, 'Square', 'Square').beginStroke(_color)
			.moveTo(_this.rootDragObject.getStart().x, _this.rootDragObject.getStart().y)
			.lineTo(_this.rootDragObject.getEnd().x,_this.rootDragObject.getEnd().y);
			
			_this.target.graphics.setStrokeStyle(0.7, 'Square', 'Square');
			
			var _dist = Point.dist(_this.rootDragObject.getEnd(),_this.rootDragObject.getStart());
			var _rad = Point.angle(_this.rootDragObject.getStart(),_this.rootDragObject.getEnd());
			var _distRay = 6;
			while(_distRay < _dist){
				//point in ray
				var _tmpPoint = getPointByCenterAndDistance(_this.rootDragObject.getStart(),_rad,_distRay);
				var _point1 = getPointByCenterAndDistance(_tmpPoint,_rad + Math.PI/2, _stroke*4);
				var _point2 = getPointByCenterAndDistance(_tmpPoint,_rad - Math.PI/2, _stroke*4);
				_this.target.graphics.moveTo(_point1.x, _point1.y).lineTo(_point2.x,_point2.y);
				_distRay += 6;
			}
			
			
			_this.cirStart.graphics.clear().beginFill(circleFillColor).setStrokeStyle(circleStrokeWidth)
			.beginStroke(circleStrokeColor).drawCircle(event.stageX, event.stageY, _stroke*4);
			
		}
		
		stage2.clear();
		stage2.update();
	}
	
	function _mouseup(event, _allow){
		if ( event != undefined && (event.nativeEvent.button == 1 ||
			event.nativeEvent.button == 2)) return;
		if(_lockDragLine && !_allow) return;
		if(useIE10){
			$("#canvas2").hide();
		}
		if(_deleteEnable) return;
		_this.root.alpha = 1;
		tmpItemToDrag.removeAllChildren();
		container.addChildAt(_this.root, _this.oldIndex);
		addPairCircle(_this.cirStart,_this.cirEnd);
		_this.cirStart.visible = true;
		_this.cirEnd.visible = true;
		canDraw = true;
		stage1.clear();
		stage1.update();
		stage2.clear();
		stage2.update();
		interact(".candraw").draggable(true);
		if(_tmpTimeout != undefined || _tmpTimeout != null){
			clearTimeout(_tmpTimeout);
		}
		
	}
	
	this.root.addEventListener("mousedown", _mousedown);
	this.root.addEventListener("pressup", _mouseup);
	
	this.target.addEventListener("pressmove",_mousemove);
	this.cirEnd.addEventListener("pressmove",_circlePressMove);
	this.cirStart.addEventListener("pressmove",_circlePressMove);
	
	this.root.addEventListener("mouseover", function(event){
		currentHover = _this.root;
	});
	
	this.root.addEventListener("mouseout", function(event){
		currentHover = undefined;
	});
}



//====================================================
/*
	just use for DrawRayLine2New
*/
function DragRayLine2New(_root, _rootDragObject , _stroke, _color){
	this.root = _root;
	this.rootDragObject = _rootDragObject;
	this.target = _root.getChildAt(0);
	this.cirStart = _root.getChildAt(1);
	this.cirEnd = _root.getChildAt(2);
	var _this = this;
	var prePoint = {x : 0 , y : 0};
	this.oldIndex = -1;
	var hasMove = false;
	var _tmpTimeout;
	
	
	function _mousedown(event){
		if ( event != undefined && (event.nativeEvent.button == 1 ||
			event.nativeEvent.button == 2)) return;
		if(_lockDragLine) return;
		if(useIE10){
			$("#canvas2").show();
		}
		if(_deleteEnable) {
			container.removeChild(_this.root);
			stage1.clear();
			stage1.update();
			stage2.clear();
			stage2.update();
			return;
		}
		_this.root.alpha = 0.8;
		interact(".candraw").draggable(false);
		_currentSelect = _this.root;
		_this.oldIndex = container.getChildIndex(_this.root);
		container.removeChild(_this.root);
		hasMove = false;
		tmpItemToDrag.addChild(_this.root);
		
		
		stage1.clear();
		stage1.update();
		stage2.clear();
		stage2.update();
		
		
		prePoint = {x:event.stageX, y : event.stageY};
		canDraw = false;
		_tmpTimeout = setTimeout(function(){
			if(!hasMove){
				canDraw = true;
				_lockDragLine = true;
				_mouseup(undefined, true);
				interact(".candraw").draggable(true);
				_this.root.alpha = 1;
			}
		}, 1000);
	}
	
	function _mousemove(event){
		if ( event != undefined && (event.nativeEvent.button == 1 ||
			event.nativeEvent.button == 2)) return;
		if(_lockDragLine) return;
		hasMove = true;
		var offset = {x : event.stageX - prePoint.x, y : event.stageY - prePoint.y};
		
		_this.rootDragObject.appendXY(offset.x,offset.y);
		
		var _dist = Point.dist(_this.rootDragObject.getEnd(),_this.rootDragObject.getStart());
		var _rad = Point.angle(_this.rootDragObject.getStart(),_this.rootDragObject.getEnd());
		var _pointStart1 = getPointByCenterAndDistance(_this.rootDragObject.getStart(),_rad + Math.PI/2, 5);
		var _pointStart2 = getPointByCenterAndDistance(_this.rootDragObject.getStart(),_rad - Math.PI/2, 5);
		var _pointEnd1 = getPointByCenterAndDistance(_pointStart1,_rad, _dist);
		var _pointEnd2 = getPointByCenterAndDistance(_pointStart2,_rad, _dist);
		_this.target.graphics.clear().setStrokeStyle(0.7).beginStroke("#000000").beginFill("#FFFFFF")
		.moveTo(_pointStart1.x, _pointStart1.y)
		.lineTo(_pointEnd1.x,_pointEnd1.y)
		.lineTo(_pointEnd2.x,_pointEnd2.y)
		.lineTo(_pointStart2.x,_pointStart2.y)
		.lineTo(_pointStart1.x,_pointStart1.y);
		
		_this.target.graphics.setStrokeStyle(1, 'Square', 'Square').beginStroke("#FFFFFF")
			.moveTo(_pointStart1.x, _pointStart1.y).lineTo(_pointStart2.x,_pointStart2.y)
			.moveTo(_pointEnd1.x, _pointEnd1.y).lineTo(_pointEnd2.x,_pointEnd2.y);
		var _distConfig = 15;
		var _distRay = _distConfig;
		
		while(_distRay < _dist - _distConfig){
			//point in ray
			var _tmpPoint = getPointByCenterAndDistance(_this.rootDragObject.getStart(),_rad,_distRay);
			var _point1Start = getPointByCenterAndDistance(_tmpPoint,_rad + Math.PI/2, 5);
			var _point2Start = getPointByCenterAndDistance(_tmpPoint,_rad - Math.PI/2, 5);
			
			
			_distRay += _distConfig;
			_tmpPoint = getPointByCenterAndDistance(_this.rootDragObject.getStart(),_rad,_distRay);
			var _point1End = getPointByCenterAndDistance(_tmpPoint,_rad + Math.PI/2, 5);
			var _point2End = getPointByCenterAndDistance(_tmpPoint,_rad - Math.PI/2, 5);
			
			_this.target.graphics.setStrokeStyle(0.7).beginStroke("#000000").beginFill("#000000")
			.moveTo(_point1Start.x, _point1Start.y)
			.lineTo(_point1End.x,_point1End.y)
			.lineTo(_point2End.x,_point2End.y)
			.lineTo(_point2Start.x,_point2Start.y)
			.lineTo(_point1Start.x,_point1Start.y);
			_distRay += _distConfig;
		}
		
		_this.cirStart.graphics.clear().beginFill(circleFillColor).setStrokeStyle(circleStrokeWidth)
			.beginStroke(circleStrokeColor).drawCircle(_this.rootDragObject.getStart().x, _this.rootDragObject.getStart().y,_stroke);
		_this.cirEnd.graphics.clear().beginFill(circleFillColor).setStrokeStyle(circleStrokeWidth)
			.beginStroke(circleStrokeColor).drawCircle(_this.rootDragObject.getEnd().x, _this.rootDragObject.getEnd().y,_stroke);
		
		
		prePoint = {x:event.stageX, y : event.stageY};
		stage2.clear();
		stage2.update();
	}
	
	
	function _circlePressMove(event){
		if ( event != undefined && (event.nativeEvent.button == 1 ||
			event.nativeEvent.button == 2)) return;
		if(_lockDragLine) return;
		hasMove = true;
		
		var _item = event.currentTarget;
		if(_item.name == "End"){
			_this.rootDragObject.setEnd({x : event.stageX, y :event.stageY});
			
			_this.cirEnd.graphics.clear().beginFill(circleFillColor).setStrokeStyle(circleStrokeWidth)
			.beginStroke(circleStrokeColor).drawCircle(event.stageX, event.stageY, _stroke);
		}
		if(_item.name == "Start"){
			_this.rootDragObject.setStart({x : event.stageX, y :event.stageY});

			_this.cirStart.graphics.clear().beginFill(circleFillColor).setStrokeStyle(circleStrokeWidth)
			.beginStroke(circleStrokeColor).drawCircle(event.stageX, event.stageY, _stroke);
			
		}
		var _dist = Point.dist(_this.rootDragObject.getEnd(),_this.rootDragObject.getStart());
		var _rad = Point.angle(_this.rootDragObject.getStart(),_this.rootDragObject.getEnd());
		var _pointStart1 = getPointByCenterAndDistance(_this.rootDragObject.getStart(),_rad + Math.PI/2, 5);
		var _pointStart2 = getPointByCenterAndDistance(_this.rootDragObject.getStart(),_rad - Math.PI/2, 5);
		var _pointEnd1 = getPointByCenterAndDistance(_pointStart1,_rad, _dist);
		var _pointEnd2 = getPointByCenterAndDistance(_pointStart2,_rad, _dist);
		_this.target.graphics.clear().setStrokeStyle(0.7).beginStroke("#000000").beginFill("#FFFFFF")
		.moveTo(_pointStart1.x, _pointStart1.y)
		.lineTo(_pointEnd1.x,_pointEnd1.y)
		.lineTo(_pointEnd2.x,_pointEnd2.y)
		.lineTo(_pointStart2.x,_pointStart2.y)
		.lineTo(_pointStart1.x,_pointStart1.y);
		
		_this.target.graphics.setStrokeStyle(1, 'Square', 'Square').beginStroke("#FFFFFF")
			.moveTo(_pointStart1.x, _pointStart1.y).lineTo(_pointStart2.x,_pointStart2.y)
			.moveTo(_pointEnd1.x, _pointEnd1.y).lineTo(_pointEnd2.x,_pointEnd2.y);
		var _distConfig = 15;
		var _distRay = _distConfig;
		
		while(_distRay < _dist - _distConfig){
			//point in ray
			var _tmpPoint = getPointByCenterAndDistance(_this.rootDragObject.getStart(),_rad,_distRay);
			var _point1Start = getPointByCenterAndDistance(_tmpPoint,_rad + Math.PI/2, 5);
			var _point2Start = getPointByCenterAndDistance(_tmpPoint,_rad - Math.PI/2, 5);
			
			
			_distRay += _distConfig;
			_tmpPoint = getPointByCenterAndDistance(_this.rootDragObject.getStart(),_rad,_distRay);
			var _point1End = getPointByCenterAndDistance(_tmpPoint,_rad + Math.PI/2, 5);
			var _point2End = getPointByCenterAndDistance(_tmpPoint,_rad - Math.PI/2, 5);
			
			_this.target.graphics.setStrokeStyle(0.7).beginStroke("#000000").beginFill("#000000")
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
	
	function _mouseup(event, _allow){
		if ( event != undefined && (event.nativeEvent.button == 1 ||
			event.nativeEvent.button == 2)) return;
		if(_lockDragLine && !_allow) return;
		if(useIE10){
			$("#canvas2").hide();
		}
		if(_deleteEnable) return;
		tmpItemToDrag.removeAllChildren();
		container.addChildAt(_this.root, _this.oldIndex);
		_this.root.alpha = 1;
		addPairCircle(_this.cirStart,_this.cirEnd);
		_this.cirStart.visible = true;
		_this.cirEnd.visible = true;
		
		canDraw = true;
		stage1.clear();
		stage1.update();
		stage2.clear();
		stage2.update();
		interact(".candraw").draggable(true);
		if(_tmpTimeout != undefined || _tmpTimeout != null){
			clearTimeout(_tmpTimeout);
		}
		
	}
	
	this.root.addEventListener("mousedown", _mousedown);
	this.root.addEventListener("pressup", _mouseup);
	
	this.target.addEventListener("pressmove",_mousemove);
	this.cirEnd.addEventListener("pressmove",_circlePressMove);
	this.cirStart.addEventListener("pressmove",_circlePressMove);
	
	this.root.addEventListener("mouseover", function(event){
		currentHover = _this.root;
	});
	
	this.root.addEventListener("mouseout", function(event){
		currentHover = undefined;
	});
}


