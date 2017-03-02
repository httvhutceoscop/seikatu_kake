var numPointText = 0;
var listStamp = [];
var listStampRect = [];
var isSave = false;
var toolsticker;
var stampclick = false;

var ctx, div, textarea, span, text_height;
var x, y;
var div_top, div_left;
var textfill, lines, text_width, words, line, testLine, metrics;
var red, green, blue;

var canvas, marginLeft, marginTop;

var check = null;
var data;
var checkdel = false;
var checkenter = false;

var objectBgColor = null;
var objectWidth = null;
var objectHeight = null;
var objectSrc = null;

var listPointStamp = [];
{ // tools

	$("#sticker1").mousedown(function() {
		check = "btFunc5_1";
	});

	document.getElementById('sticker1').addEventListener("touchstart",
			function(event) {
				check = "btFunc5_1";
			}, false);

	document.getElementById('sticker1').addEventListener("MSPointerDown",
			function(event) {
				check = "btFunc5_1";
			}, false);

	// -----------------------------------------
	$("#sticker2").mousedown(function() {
		check = "btFunc5_2";
	});

	document.getElementById("sticker2").addEventListener("touchstart",
			function(event) {
				check = "btFunc5_2";
			}, false);

	document.getElementById("sticker2").addEventListener("MSPointerDown",
			function(event) {
				check = "btFunc5_2";
			}, false);

	// ----------------------------------------------

	$("#sticker3").mousedown(function() {
		check = "btFunc5_3";
	});

	document.getElementById("sticker3").addEventListener("touchstart",
			function(event) {
				check = "btFunc5_3";
			}, false);

	document.getElementById("sticker3").addEventListener("MSPointerDown",
			function(event) {
				check = "btFunc5_3";
			}, false);

	// -------------------------------------------------

	$("#sticker4").mousedown(function() {
		check = "btFunc5_4";
	});

	document.getElementById("sticker4").addEventListener("touchstart",
			function(event) {
				check = "btFunc5_4";
			}, false);

	document.getElementById("sticker4").addEventListener("MSPointerDown",
			function(event) {
				check = "btFunc5_4";
			}, false);

	// -------------------------------------------------

	$("#sticker5").mousedown(function() {
		check = "btFunc5_5";
	});

	document.getElementById("sticker5").addEventListener("touchstart",
			function(event) {
				check = "btFunc5_5";
			}, false);

	document.getElementById("sticker5").addEventListener("MSPointerDown",
			function(event) {
				check = "btFunc5_5";
			}, false);

	// ----------------------------------------------------

	$("#sticker6").mousedown(function() {
		check = "btFunc5_6";
	});

	document.getElementById("sticker6").addEventListener("touchstart",
			function(event) {
				check = "btFunc5_6";
			}, false);

	document.getElementById("sticker6").addEventListener("MSPointerDown",
			function(event) {
				check = "btFunc5_6";
			}, false);

	// ---------------------------------------------------
	$("#sticker7").mousedown(function() {
		check = "btFunc5_7";
	});

	document.getElementById("sticker7").addEventListener("touchstart",
			function(event) {
				check = "btFunc5_7";
			}, false);

	document.getElementById("sticker7").addEventListener("MSPointerDown",
			function(event) {
				check = "btFunc5_7";
			}, false);

	// --------------------------------------------------------

}

function startStamp(event) {
	canvas = document.getElementById("canvas1");
	marginLeft = parseFloat(canvas.style.marginLeft);
	marginTop = parseFloat(canvas.style.marginTop);
	ctx = canvas.getContext("2d");

	if (stampflag) {
		$('#draggable').show();

		if (!stampclick) {
			CreateStamp(canvas, event);
		}
	}
}

function isStampFlagFalse(canvas, e) {
	if (stampflag) {
		if (div != null) {
			saveStampToCanvas(canvas);
			$('#draggable').hide();
			resetText();
		}
		removeText();
	}
	stampflag = false;

}

function isStampNoFlag(canvas, e) {
	if (stampflag) {
		if (div != null) {
			saveStampToCanvas(canvas);
			$('#draggable').hide();
			resetText();
		}
		removeText();
	}
}

function isStampFlagFalseDelAll() {
	if (stampflag) {
		if (div != null) {
			saveStampToCanvas(canvas);
			$('#draggable').hide();
			resetText();
		}
		removeText();
	}
}

function changeAttr_stamp(textarea, span, color, font, image) {
	textarea
			.setAttribute(
					"style",
					"background-color:"
							+ color
							+ ";background:"
							+ color
							+ ";font:"
							+ font
							+ ";text-align:center; vertical-align: middle; background-image:url("
							+ image + ");background-repeat:no-repeat;");
	$('#textarea').css("style", "background:" + color);
	span.setAttribute("style", "background-color:" + color + ";background:"
			+ color + ";font:" + font
			+ ";text-align:center; vertical-align: middle;");
	src = image;
}

var src = null;
var stampid = null;

function setStampColor(textarea, span) {
	// console.log(check);
	if (check != null) {
		if (check.localeCompare("btFunc5_1") == 0) {
			changeAttr_stamp(textarea, span, '#E99674', '60px Maru Gosic',
					"images/stamp1.jpg");
			src = "images/stamp1.jpg";
			stampid = "stamp1";
		}
		if (check.localeCompare("btFunc5_2") == 0) {
			changeAttr_stamp(textarea, span, '#F4C988', '60px Maru Gosic',
					"images/stamp2.jpg");
			src = "images/stamp2.jpg";
			stampid = "stamp2";
		}
		if (check.localeCompare("btFunc5_3") == 0) {
			changeAttr_stamp(textarea, span, '#F8F198', '60px Maru Gosic',
					"images/stamp3.jpg");
			src = "images/stamp3.jpg";
			stampid = "stamp3";
		}
		if (check.localeCompare("btFunc5_4") == 0) {
			changeAttr_stamp(textarea, span, '#85C192', '60px Maru Gosic',
					"images/stamp4.jpg");
			src = "images/stamp4.jpg";
			stampid = "stamp4";
		}
		if (check.localeCompare("btFunc5_5") == 0) {
			changeAttr_stamp(textarea, span, '#81B6DE', '60px Maru Gosic',
					"images/stamp5.jpg");
			src = "images/stamp5.jpg";
			stampid = "stamp5";
		}
		if (check.localeCompare("btFunc5_6") == 0) {
			changeAttr_stamp(textarea, span, '#BD8CB8', '60px Maru Gosic',
					"images/stamp6.jpg");
			src = "images/stamp6.jpg";
			stampid = "stamp6";
		}
		if (check.localeCompare("btFunc5_7") == 0) {
			changeAttr_stamp(textarea, span, '#FFFFFF', '60px Maru Gosic',
					"images/stamp7.jpg");
			src = "images/stamp7.jpg";
			stampid = "stamp7";
		}
	}
}

function setStampPos(e) {
	// set attr of textarea before moving to another position
	textarea.value = "";
	span.innerText = "";

	// cal mouse position
	calStampOrdinate(e);

	// set attr for textarea, span
	setStampColor(textarea, span);

	// set top, left for div draggable
	div.style.top = y - 37 + 'px';
	div.style.left = x - 120 + 'px';
}

function calStampOrdinate(event) {
	if (event.pageX != null) {
		x = event.pageX;
		y = event.pageY;
	} else {
		x = event.clientX;
		x = event.clientY;
	}
}

function calStampColor(listRect) {
	for (var i = 0; i < listRect.length; i++) {
		if (listRect[i].grID == a) {
			red = listRect[i].fillColor.red * 274;
			green = listRect[i].fillColor.green * 274;
			blue = listRect[i].fillColor.blue * 274;
			objectBgColor = "rgb(" + red + "," + green + "," + blue + ")";
		}
	}
}
function DragCircle(_item, _main, _rect, _fold, _listMainShape, _pointOfCir,
		_color) {
	this.target = _item;
	this.main = _main;
	this.rect = _rect;
	this.fold = _fold;
	this.color = _color;
	this.foldColor = getFoldColor(_color);
	this.pointOfCir = new Point(_pointOfCir.x, _pointOfCir.y);
	this.listMainshape = [];
	var _this = this;
	for (var i = 0; i < _listMainShape.length; i++) {
		_this.listMainshape.push(new Point(_listMainShape[i].x,
				_listMainShape[i].y));
	}
	var prePoint = {
		x : 0,
		y : 0
	};
	this.oldIndex = -1;
	var hasMove = false;
	var _tmpTimeout;
	var _tmpItem = undefined;

	function _mousedown(event) {
		if($("#TabFunc5").css("display") !="none") return;
		if (event != undefined
				&& (event.nativeEvent.button == 1 || event.nativeEvent.button == 2))
			return;

		if (useIE10) {
			$("#canvas2").show();
		}

		var _currentItem = _this.main;
		if (_deleteEnable) {
			container.removeChild(_currentItem);
			stage1.clear();
			stage1.update();
			stage2.clear();
			stage2.update();
			return;
		}
		interact(".candraw").draggable(false);
		_this.oldIndex = container.getChildIndex(_currentItem);
		container.removeChild(_currentItem);
		hasMove = false;
		tmpItemToDrag.addChild(_this.main);
		hidePairCircle();
		stage1.clear();
		stage1.update();
		stage2.clear();
		stage2.update();

		prePoint = {
			x : event.stageX,
			y : event.stageY
		};
		canDraw = false;
		_tmpTimeout = setTimeout(function() {
			if (!hasMove) {
				canDraw = true;
				_lockDragLine = true;
				_mouseup(undefined, true);
				interact(".candraw").draggable(true);
				_this.target.alpha = 1;
			}
		}, 1000);
	}

	function _mousemove(event) {
		if($("#TabFunc5").css("display") !="none") return;
		if (event != undefined
				&& (event.nativeEvent.button == 1 || event.nativeEvent.button == 2))
			return;
		if (_deleteEnable)
			return;
		hasMove = true;
		var offset = {
			x : event.stageX - prePoint.x,
			y : event.stageY - prePoint.y
		};
		_this.target.x += offset.x;
		_this.target.y += offset.y;
		_this.pointOfCir.x += offset.x;
		_this.pointOfCir.y += offset.y;

		// calculate all point and draw
		var _centerPoint = new Point(
				(_this.pointOfCir.x + _this.listMainshape[0].x) / 2,
				(_this.pointOfCir.y + _this.listMainshape[0].y) / 2);

		var _angle = angleBetweenPoints([ _centerPoint.x, _centerPoint.y ], [
				_this.listMainshape[0].x, _this.listMainshape[0].y ]);
		_angle += toDegrees(_angle) + 90;
		_angle = (_angle >= 0) ? _angle : _angle + 360;

		var _tmpPoint1 = getPointByAngle(_centerPoint, toAngle(_angle), 500);
		var _tmpPoint2 = getPointByAngle(_centerPoint, toAngle(_angle), -500);

		var listSlice = Slice(_this.listMainshape, _tmpPoint2.x, _tmpPoint2.y,
				_tmpPoint1.x, _tmpPoint1.y);
		_this.target.alpha = 0;
		if (listSlice.length < 2) {
			tmpItemToDrag.removeAllChildren();
			container.removeChild(_this.main);
			prePoint = {
				x : event.stageX,
				y : event.stageY
			};
			_this.fold.removeEventListener("pressup", _mouseup);
			if($("#TabFunc5").css("display") == "none"){
				interact(".candraw").draggable(true);
				canDraw = true;
			}
			
			stage2.clear();
			stage2.update();

			stage1.clear();
			stage1.update();
			
			return;
		}
		var _mainshapePoins = listSlice[1];
		_this.rect.graphics.clear().setStrokeStyle(2, 'Square', 'Square')
				.beginStroke(_this.color).f(_this.color).moveTo(
						_mainshapePoins[0].x, _mainshapePoins[0].y);
		for (var i = 1; i < _mainshapePoins.length; i++) {
			_this.rect.graphics.lineTo(_mainshapePoins[i].x,
					_mainshapePoins[i].y);
		}
		_this.rect.graphics.lineTo(_mainshapePoins[0].x, _mainshapePoins[0].y);

		var foldShapePoint = listSlice[0];
		var listReflection = [];
		for (var i = 0; i < foldShapePoint.length; i++) {
			listReflection[i] = reflection(foldShapePoint[i], [ _tmpPoint1,
					_tmpPoint2 ]);
		}

		_this.fold.graphics.clear().setStrokeStyle(2, 'Square', 'Square')
				.beginStroke(_this.foldColor).f(_this.foldColor).moveTo(
						listReflection[0].x, listReflection[0].y);

		for (var i = 1; i < listReflection.length; i++) {
			_this.fold.graphics
					.lineTo(listReflection[i].x, listReflection[i].y);
		}
		_this.fold.graphics.lineTo(listReflection[0].x, listReflection[0].y);

		// ===============================

		prePoint = {
			x : event.stageX,
			y : event.stageY
		};
		stage2.clear();
		stage2.update();
	}

	function _mouseup(event, _allow) {
		if($("#TabFunc5").css("display") !="none") return;
		if (event != undefined
				&& (event.nativeEvent.button == 1 || event.nativeEvent.button == 2))
			return;
		if (useIE10) {
			$("#canvas2").hide();
		}
		if (_deleteEnable)
			return;
		_this.main.alpha = 1;
		tmpItemToDrag.removeAllChildren();
		container.addChildAt(_this.main, _this.oldIndex);

		
		stage1.clear();
		stage1.update();
		stage2.clear();
		stage2.update();
		if($("#TabFunc5").css("display") == "none"){
			canDraw = true;
			interact(".candraw").draggable(true);
		}
		
		if (_tmpTimeout != undefined || _tmpTimeout != null) {
			clearTimeout(_tmpTimeout);
		}

	}

	_this.fold.addEventListener("mousedown", _mousedown);
	_this.fold.addEventListener("pressmove", _mousemove);
	_this.fold.addEventListener("pressup", _mouseup);
	_this.fold.addEventListener("mouseover", function(event) {
		currentHover = event.currentTarget;
	});

	_this.fold.addEventListener("mouseout", function(event) {
		currentHover = undefined;
	});
}

function getFoldColor(_color) {
	switch (_color) {
	case "rgb(233, 150, 116)":
		return "rgb(149,93,70)";
	case "rgb(244, 201, 136)":
		return "rgb(153,125,83)";
	case "rgb(248, 241, 152)":
		return "rgb(157,151,93)";
	case "rgb(133, 193, 146)":
		return "rgb(81,124,93)";
	case "rgb(129, 182, 222)":
		return "rgb(78,115,142)";
	case "rgb(189, 140, 184)":
		return "rgb(121,86,118)";
	case "rgb(255, 255, 255)":
		return "rgb(153,152,153)";
	}

}

function saveStampToCanvas(canvas, e) {
	div = document.getElementById("draggable");
	textarea = document.getElementById("textarea");
	span = document.getElementById("span");

	if (div != null) {
		var value = textarea.value;
		// begin isSave textarea into listStamp before move to another position

		// get size, color, font of textarea
		var size = textarea.style.fontSize;
		var color = textarea.style.color;
		var font = textarea.style.fontFamily;

		// get the position of div draggable(khung nhap text)
		var x = $("#draggable").position();
		var x = $("#draggable").position();
		var x = $("#draggable").position();
		var xtop = parseFloat(x.top);
		var xleft = parseFloat(x.left);

		// cal the top and left of text in order to add into canvas paperjs
		var matrix = document.querySelector('svg').getScreenCTM();
		var font_size_real = parseFloat(size.replace("px", "")) / matrix.a;

		// set fontsize for text on canvas
		ctx.font = font_size_real + ' ' + font;
		// cal the height of text inside textarea
		text_height = parseInt(font_size_real + ' ' + font);

		// cal the top and left of text in order to add into canvas paperjs
		var canvasTop = parseFloat($("#canvas1").css("margin-top").replace(
				"px", ""));
		var canvasLeft = parseFloat($("#canvas1").css("margin-left").replace(
				"px", ""));
		var ratio_text = ((parseFloat(div.style.height.replace("px", ""))) / $(
				"#canvas1").height());
		//alert(document.getScroll()[1]);
		var top = xtop - canvasTop + 20 + text_height - text_height * 0.2;
		var left = xleft - canvasLeft + 20 + $("#draggable").width() / 2;

		var _myContain = new createjs.Container();
		var raster = {
			x : 0,
			y : 0,
			color : "#FFFFFF",
			src : "",
			scaleX : 1,
			scaleY : 1
		};

		raster.scaleX = (parseInt(div.style.width) / 241) / matrix.a;
		raster.scaleY = (parseInt(div.style.height) / 74) / matrix.a;
		raster.x = (xleft - canvasLeft + 20 ) / matrix.a;
		raster.y = (xtop - canvasTop + 20  - document.getScroll()[1]) / matrix.a;
		raster.color = textarea.style.backgroundColor;
		raster.src = src;

		var _w = (parseInt(div.style.width)) / matrix.a;
		var _h = (parseInt(div.style.height)) / matrix.a;

		var _p1 = {
			x : raster.x,
			y : raster.y
		};
		var _p2 = {
			x : raster.x + _w,
			y : raster.y
		};
		var _p3 = {
			x : raster.x + _w,
			y : raster.y + _h
		};
		var _p4 = {
			x : raster.x,
			y : raster.y + _h
		};
		var _p5 = {
			x : raster.x,
			y : raster.y
		};

		// console.log(raster.color);

		var listMainshape = [ new Point(_p1.x, _p1.y), new Point(_p2.x, _p2.y),
				new Point(_p3.x, _p3.y), new Point(_p4.x, _p4.y),
				new Point(_p5.x, _p5.y) ];

		var _tmpPoint = new Point(_p1.x + 23, _p1.y + 23);

		var _centerPoint = new Point((_tmpPoint.x + _p1.x) / 2,
				(_tmpPoint.y + _p1.y) / 2);

		var _angle = angleBetweenPoints([ _centerPoint.x, _centerPoint.y ], [
				_p1.x, _p1.y ]);
		_angle += toDegrees(_angle) + 90;
		_angle = (_angle >= 0) ? _angle : _angle + 360;

		var _tmpPoint1 = getPointByAngle(_centerPoint, toAngle(_angle), 500);
		var _tmpPoint2 = getPointByAngle(_centerPoint, toAngle(_angle), -500);

		var _moveCircle = new createjs.Shape();
		_moveCircle.graphics.beginFill("#FF0000").drawCircle(_tmpPoint.x,
				_tmpPoint.y, 10);

		var listSlice = Slice(listMainshape, _tmpPoint2.x, _tmpPoint2.y,
				_tmpPoint1.x, _tmpPoint1.y);

		var _mainshapePoins = listSlice[1];

		var _myrect = new createjs.Shape();
		_myrect.graphics.clear().setStrokeStyle(2, 'Square', 'Square')
				.beginStroke(raster.color).f(raster.color).moveTo(
						_mainshapePoins[0].x, _mainshapePoins[0].y);

		for (var i = 1; i < _mainshapePoins.length; i++) {
			_myrect.graphics.lineTo(_mainshapePoins[i].x, _mainshapePoins[i].y);
		}
		_myrect.graphics.lineTo(_mainshapePoins[0].x, _mainshapePoins[0].y);

		var foldShapePoint = listSlice[0];
		var listReflection = [];
		for (var i = 0; i < foldShapePoint.length; i++) {
			listReflection[i] = reflection(foldShapePoint[i], [ _tmpPoint1,
					_tmpPoint2 ]);
		}

		var _myFold = new createjs.Shape();
		_myFold.graphics.clear().setStrokeStyle(2, 'Square', 'Square')
				.beginStroke(getFoldColor(raster.color)).f(
						getFoldColor(raster.color)).moveTo(listReflection[0].x,
						listReflection[0].y);

		for (var i = 1; i < listReflection.length; i++) {
			_myFold.graphics.lineTo(listReflection[i].x, listReflection[i].y);
		}
		_myFold.graphics.lineTo(listReflection[0].x, listReflection[0].y);
		_moveCircle.alpha = 0;

		new DragCircle(_moveCircle, _myContain, _myrect, _myFold,
				listMainshape, _tmpPoint, raster.color);
		// -------------------------
		var stamp = new createjs.Text(value, font_size_real + 'px ' + font,
				color);
		stamp.x = left / matrix.a;
		stamp.y = (top - text_height + text_height * 0.2 - document.getScroll()[1]) / matrix.a;
		stamp.content = value;
		stamp._w = _w;
		stamp._h = _h;
		stamp._T_font_size_real = font_size_real;
		stamp._T_size = size;
		stamp._T_color = color;
		stamp._T_font = font;;
		stamp.lineHeight = 0;
		stamp.textAlign = 'center';
		_myContain.mode = "DrawStamp";
		stamp.mask = _myrect;
		// _myContain.addChild(stamp);
		_myrect.mycolor = raster.color;
		_myrect.raster = raster;
		_myContain.addChild(_myrect, stamp, _myFold, _moveCircle);

		_myContain.addEventListener("mouseover", function(event) {
			currentHover = event.currentTarget;
		});

		_myContain.addEventListener("mouseout", function(event) {
			currentHover = undefined;
		});

		container.addChild(_myContain);
		stage1.clear();
		setTimeout(function() {
			stage1.update();
		}, 100);

		// ---------------------------
		addStampListener(_myContain);
		listStamp.push(stamp);

		setStampColor(textarea, span);
		if (stampflag) {
			if (e != undefined) {
				div.style.width = "241px";
				div.style.height = '74px';
				setStampPos(e);
			}
		}

		if (isSave) {
			// isSave==true -> appear div draggable with object content
			calTextWidth(objectText);

			// cal top, left for div
			div_top = objectY + marginTop;
			div_left = objectX + marginLeft;

			// set attr for textarea,span, div
			span.innerText = objectText;
			textarea.value = objectText;
			changeAttr_stamp(textarea, span, objectBgColor, objectFont,
					objectSrc);
			div.setAttribute("style", "top:" + div_top + "px;left:" + div_left
					+ "px;width:" + objectWidth + "px;height:" + objectHeight
					+ "px");
		}
		isSave = false;
		textarea.blur();
	}
}

var a;

function addStampListener(myContainer) {
	myContainer.addEventListener("click", function(e) {
		if (_deleteEnable) {
			container.removeChild(e.currentTarget);
			stage1.clear();
			stage1.update();
			stage2.clear();
			stage2.update();
			return;
		}
		

		var matrix = document.querySelector('svg').getScreenCTM()
		var raster = myContainer.children[0].raster;

		var stamp = myContainer.children[1];
		if (stampflag) {
			stampclick = true;
			if (document.getElementById("draggable") == null) {
				createNewStamp(canvas, e);

				div = document.getElementById("draggable");
				textarea = document.getElementById("textarea");
				span = document.getElementById("span");

				// cal height,width of text inside textarea
				text_height = parseInt(stamp.font) * matrix.a;
				if (textarea.value.trim() != "") {
					calTextWidth(stamp.content);
				}
				// set attr for textarea
				textarea.value = stamp.text;
				span.innerText = stamp.text;

				objectSrc = raster.src;
				changeAttr_stamp(textarea, span, raster.color,
						parseInt(stamp.font) * matrix.a + 'px Maru Gosic',
						objectSrc);

			    // set attr for div
				if (marginLeft == undefined || marginTop == undefined || canvas == undefined) {
				    canvas = document.getElementById("canvas1");
				    marginLeft = parseFloat(canvas.style.marginLeft);
				    marginTop = parseFloat(canvas.style.marginTop);
				}
				
				
				div_top = raster.y * matrix.a - 20 + marginTop;
				div_left = raster.x * matrix.a - 20 + marginLeft;
				objectWidth = raster.scaleX * 241 * matrix.a;
				objectHeight = raster.scaleY * 74 * matrix.a;
				//console.log(raster.x, raster.y, div_top, div_left, matrix, marginTop);
				div.setAttribute("style", "top:" + div_top + "px;left:"
						+ div_left + "px;height:" + objectHeight + "px;width: "
						+ objectWidth + "px;");
			} else {
				isSave = true;
				if (stamp.text.length == 0) {
					objectText = "";
				} else {
					objectText = stamp.text;
				}
				//console.log(raster.x, raster.y + " ff");
				objectFont = parseInt(stamp.font) * matrix.a + 'px Maru Gosic';
				objectX = raster.x * matrix.a - 20;
				objectY = raster.y * matrix.a - 20;
				objectSrc = raster.src;
				objectWidth = raster.scaleX * 241 * matrix.a;
				objectHeight = raster.scaleY * 74 * matrix.a;
				objectBgColor = raster.color;

				// isSave
				saveStampToCanvas(canvas, e);
			}
			container.removeChild(myContainer);
			stage1.clear();
			stage1.removeChild(myContainer);
			setTimeout(function() {
				stage1.update();
			}, 100);
			stampclick = false;
		}
	})
}

function createNewStamp(canvas, e) {
	if (stampflag) {
		calStampOrdinate(e);

		// create div draggable(khung nhap text)
		div = document.createElement('div');
		div.id = "draggable";

		div_in = document.createElement('div');
		div_in.id = "div_in";
		div_in.className = "textfill little";
		div_in.className += " expandingArea";

		// create textarea

		textarea = document.createElement("textarea");
		textarea.id = "textarea";
		textarea.className = "textarea";

		pre = document.createElement("pre");
		pre.id = "pre";

		span = document.createElement("span");
		span.id = "span";

		br = document.createElement("br");

		// set attr for textarea, span
		setStampColor(textarea, span);

		var _ndiv = document.createElement('div');
		_ndiv.setAttribute("class", "ui-drag-n");
		div.appendChild(_ndiv);

		_ndiv = document.createElement('div');
		_ndiv.setAttribute("class", "ui-drag-s");
		div.appendChild(_ndiv);

		_ndiv = document.createElement('div');
		_ndiv.setAttribute("class", "ui-drag-w");
		div.appendChild(_ndiv);

		_ndiv = document.createElement('div');
		_ndiv.setAttribute("class", "ui-drag-e");
		div.appendChild(_ndiv);

		// append to appear
		pre.appendChild(span);
		pre.appendChild(br);
		div_in.appendChild(pre);
		div_in.appendChild(textarea);
		div.appendChild(div_in);
		document.body.appendChild(div);

		// draggable & resizable
		$("#draggable").draggable({
			containment : "#canvas1",
			scroll : false,
			opacity : 0.7,
			cursor : "move",
			start : function(event, ui) {
				textarea.blur();
			}
		});
		$("#draggable").resizable({
			handles : 'ne, se, sw, nw',
			minHeight : 50,
			minWidth : 50,
			stop : function(e, ui) {
				var _this = $('#textarea');
				var font = 200;
				_this.css("font-size", (font) + "px");
				var textWidth = _this.textWidth();
				var divHeight = _this.height();
				var divWidth = _this.width() - 20;
				var textHeight = _this.textHeight();

				var numline = _this.val().split("\n").length;
		
				//console.log(textHeight, divHeight);
				while (numline * textHeight > divHeight) {
					if (font > 150) {
						font = font - 6;
					} else if (font > 120) {
						font = font - 4;
					} else if (font > 80) {
						font = font - 3;
					} else if (font > 50) {
						font = font - 2;
					} else if (font > 25) {
						font = font - 1;
					}
					font--;
					$("#textarea").css("font-size", +font + "px");
					$("#span").css("font-size", +font + "px");
					textHeight = _this.textHeight();
				}
				//console.log(textWidth, divWidth);
				while (textWidth >= divWidth) {
					if (font > 150) {
						font = font - 6;
					} else if (font > 120) {
						font = font - 4;
					} else if (font > 80) {
						font = font - 3;
					} else if (font > 50) {
						font = font - 2;
					} else if (font > 25) {
						font = font - 1;
					}
					font--;
					$("#textarea").css("font-size", +font + "px");
					$("#span").css("font-size", +font + "px");
					textWidth = _this.textWidth();
				}
			},
		});

		// $('#textarea').keyup(function (e) {
		// shrinkToFill(this, parseInt(textarea.style.fontSize), "",
		// textarea.style.fontFamily);
		// if (e.keyCode == 13) {
		// checkenter = true;
		// data++;
		// }
		// })

		var currentChars = 0;

		$('#textarea')
				.on(
						"keyup",
						function(event) {
							var _this = $(this);
							if (event.which == 8 || event.which == 13) {
								var textHeight = getSize(_this, _this
										.css("font-size")).height;
								var font = parseFloat(_this.css("font-size"))
										+ textHeight;
								if (_this.val().length == 0)
									font = _this.height();
								var _size = getSize(_this, font + "px");
								textHeight = _size.height;

								var numline = _this.val().split("\n").length;
								var textWidth = _size.width;
								var divHeight = _this.height();
								var divWidth = _this.width() - 20;
								// if(detectmob() == 1){
								// divWidth -= 10;
								// }
								while ((numline * textHeight > divHeight || textWidth >= divWidth)
										&& font > 0) {
									if (font > 150) {
										font = font - 6;
									} else if (font > 120) {
										font = font - 4;
									} else if (font > 80) {
										font = font - 3;
									} else if (font > 50) {
										font = font - 2;
									} else if (font > 25) {
										font = font - 1;
									}
									font--;
									// $("#textarea").css("font-size", +font +
									// "px");
									// $("#span").css("font-size", +font +
									// "px");
									_size = getSize(_this, font + "px");
									textHeight = _size.height;
									textWidth = _size.width;

								}
								$("#textarea").css("font-size", +font + "px");
								$("#span").css("font-size", +font + "px");

							}
						});

		function getSize(_this, _font) {
			var _listText = _this.val().split("\n");
			var maxWidth = 0;
			var size = {
				width : 0
			};
			for (var i = 0; i < _listText.length; i++) {
				var _size = calculateSize(_listText[i], {
					font : 'MSGothicIE',
					fontSize : _font
				});
				if (_size.width > maxWidth) {
					size = _size;
					maxWidth = _size.width;
				}
			}
			return size;
		}

		$('#textarea').on("keydown", function(event) {
			var _this = $(this);
			var textWidth = _this.textWidth();
			var divHeight = _this.height();
			var divWidth = _this.width() - 20;
			var textHeight = _this.textHeight();
			var _last_font = parseFloat(_this.css("font-size"));

			if (textWidth > 0) {
				if (event.which == 8) {

				} else if (event.which == 13) {
					var numline = _this.val().split("\n").length + 1;
					var _tmpFont = Math.floor(divHeight / numline);
					if (_tmpFont > 200) {
						_tmpFont = 200;
					}
					_this.css("font-size", _tmpFont + "px");
					$("#span").css("font-size", _tmpFont + "px");

					event.stopPropagation();
				}
			}

		});

		function resizeText(_this) {
			var textWidth = _this.textWidth();
			var divHeight = _this.height();
			var divWidth = _this.width() - 20;
			var textHeight = _this.textHeight();
			var _last_font = parseFloat(_this.css("font-size"));
			var numline = _this.val().split("\n").length;

			if (textWidth > 0) {
				var _ratio = divWidth / textWidth * 0.8;
				if (textWidth > divWidth * 0.9) {
					if (_last_font * _ratio <= (divHeight / numline)) {
						if (_last_font > 200) {
							_last_font = 200;
						}
						_this.css("font-size", _last_font * _ratio + "px");
						$("#span").css("font-size", _last_font * _ratio + "px");
					}
				}
			}
		}

		$('#textarea').on("input", function(event) {
			resizeText($(this));
		});

		// set attr for div
		div.style.top = y - 37 + 'px';
		div.style.left = x - 120 + 'px';
		div.style.width = "241px";
		div.style.height = '74px';

		var maxheight = 74;
		$("#textarea").css("font-family", "MSGothicIE");
		$("#textarea").css("word-wrap", "normal");

		$("#textarea").css("font-size", +$("#textarea").height() + "px");
		$("#span").css("font-size", +$("#textarea").height() + "px");
		document.getElementById('textarea').addEventListener("touchend",
				function(event) {
					$("#textarea").focus();
				}, false);
		// addClassExpand();
		textarea.blur();
	}
}

function CreateStamp(canvas, e) {
	if (document.getElementById("draggable") == null) {
		createNewStamp(canvas, e);
	} else {
		saveStampToCanvas(canvas, e);
	}
}

var b = 0;

// -----------------------------------------------------------
function shrinkToFill(input, fontSize, fontWeight, fontFamily) {
	ctx.font = fontSize + 'px ' + fontFamily;
	calTextWidth(input.value);

	var $input = $(input), txt = $input.val(), maxWidth = $input.width(), // add
	// some
	// padding
	font = textarea.style.fontSize + ' ' + textarea.style.fontFamily;
	// see how big the text is at the default size

	data = parseFloat(div.style.height) / parseFloat(font);
	var textWidth = text_width;

	maxWidth = ($input.width()) * data;

	if (checkenter) {
		textWidth = maxWidth;
	}

	if (textWidth >= maxWidth) {
		// if it's too big, calculate a new font size
		// the extra .9 here makes up for some over-measures
		fontSize = fontSize * maxWidth / textWidth * .5;
		font = fontSize + "px " + fontFamily;
		// and set the style on the input
		$input.css({
			font : font
		});
	} else {
		// in case the font size has been set small and
		// the text was then deleted
		$input.css({
			font : font
		});
	}

	checkdel = false;
	checkenter = false;
}

// ----------------------------------------------------------

