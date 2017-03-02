var listText = [];
var textclick = false;
var save = false;
var ratio_offset = 4.5 / 80;
var ctx, div, textarea, span, text_height;
var x, y;
var div_top, div_left;
var textfill, lines, text_width, words, line, testLine, metrics;
var red, green, blue;

var _fontsize = 25;

var canvas, marginLeft, marginTop;

var objectX = null;
var objectY = null;
var objectText = null;
var objectColor = null;
var objectSize = null;
var objectFont = null;

var listPointText = [];
mojiColor = "rgb(40, 31, 29)";{ //tools
	var setup_ToolsText = function () {
		canvas = document.getElementById("canvas1");
		//tool12
		toolText = new Tool();

		//su kien click chuot xuong
		toolText.onMouseDown = function (e) {
			marginLeft = parseFloat(canvas.style.marginLeft);
			marginTop = parseFloat(canvas.style.marginTop);
			ctx = canvas.getContext("2d");
			if (textflag == true) {
				$('#draggable').show();
				if (!textclick) {
					CreateText(canvas, e);
				}
				//addListener(listText,canvas);
			}
		}
	}
}
{ //Function draw
	//disable tool
	var removeTool = function () {
		toolText.remove();
	}
	var setupToolText = function (tool, sizeText) {
		//addListener(listText,canvas);
		switch (tool) {
		case "#btnMoji_size1":
			check = "btnMoji_size1";
			setup_ToolsText();
			toolText.activate();
			break;
		case "#btnMoji_size2":
			check = "btnMoji_size2";
			setup_ToolsText();
			toolText.activate();
			break;
		case "#btnMoji_size3":
			check = "btnMoji_size3";
			setup_ToolsText();
			toolText.activate();
			break;
			//Default remove tool
		default:
			removeTool();
		}
	}
}

//---------------------------------------------
$("#btnMoji_size1").mousedown(function () {
	check = "btnMoji_size1";
});

document.getElementById('btnMoji_size1').addEventListener("touchstart", function (event) {
	check = "btnMoji_size1";
}, false);

document.getElementById('btnMoji_size1').addEventListener("MSPointerDown", function (event) {
	 
	     check = "btnMoji_size1";
}, false);
 

//--------------------------------------------
$("#btnMoji_size2").mousedown(function () {
	check = "btnMoji_size2";
});

document.getElementById('btnMoji_size2').addEventListener("touchstart", function (event) {
	check = "btnMoji_size2";
}, false);

document.getElementById('btnMoji_size2').addEventListener("MSPointerDown", function (event) {
	 
	     check = "btnMoji_size2";
}, false);
 

//---------------------------------------------
$("#btnMoji_size3").mousedown(function () {
	check = "btnMoji_size3";
});

document.getElementById('btnMoji_size3').addEventListener("touchstart", function (event) {
	check = "btnMoji_size3";
}, false);

document.getElementById('btnMoji_size3').addEventListener("MSPointerDown", function (event) {
	 
	     check = "btnMoji_size3";
}, false);

function resetText() {
	if (document.getElementById("textarea")) {
		document.getElementById("textarea").removeAttribute("style");
		document.getElementById("span").removeAttribute("style");
		document.getElementById("textarea").value = "";
		document.getElementById("span").innerText = "";
	}
}

function removeText() {
	if (document.getElementById("draggable") != null) {
		if (pre) {
			if (pre.children.length > 0) {
				pre.removeChild(span);
				pre.removeChild(br);
			}
			div_in.removeChild(pre);
			div_in.removeChild(textarea);
			div.removeChild(div_in);
			document.body.removeChild(div);
		}
	}
}

function isTextFlagFalse(canvas, e) {
	if (textflag) {
		if (textarea != null) {
			if (textarea.value != "") {
				saveTextToCanvas(canvas);
				$('#draggable').hide();
				resetText();
			} else {
				$('#draggable').hide();
				resetText();
			}
		}
		removeText();
	}
	textflag = false;

}

function isTextNoFlag(canvas, e) {
	if (textflag) {
		if (textarea != null) {
			if (textarea.value != "") {
				saveTextToCanvas(canvas);
				$('#draggable').hide();
				resetText();
			} else {
				$('#draggable').hide();
				resetText();
			}
		}
		removeText();
	}
	//textflag=false;
}

function isTextFlagDelAll() {
	//alert(textflag);
	if (textflag) {
		textarea = document.getElementById("textarea");

		if (textarea != null) {
			if (textarea.value != "") {
				saveTextToCanvas(canvas);
				$('#draggable').hide();
				resetText();
			} else {
				$('#draggable').hide();
				resetText();
			}
		}
		removeText();
	}
}

function changeAttr_text(textarea, span, color, font) {
	textarea.setAttribute("style", "color:" + color + "; font:" + font + ";");
	span.setAttribute("style", "color:" + color + "; font:" + font + ";");
}

function setFontColor(textarea, span) {
	if (check != null) {
		if (check.localeCompare("btnMoji_size1") == 0) {
			changeAttr_text(textarea, span, mojiColor, "25px Maru Gosic");
		}
		if (check.localeCompare("btnMoji_size2") == 0) {
			changeAttr_text(textarea, span, mojiColor, "40px Maru Gosic");
		}
		if (check.localeCompare("btnMoji_size3") == 0) {
			changeAttr_text(textarea, span, mojiColor, "80px Maru Gosic");
		}
	}
}

function calMouseOrdinate(event) {
	var rect = canvas.getBoundingClientRect();
	if (event.pageX != null) {
		x = event.pageX;
		y = event.pageY;
	} else {
		x = event.clientX;
		x = event.clientY;
	}
}

function calTextWidth(content) {
	textfill = content.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br/>');
	lines = textfill.split("<br/>");
	text_width = 0;

	for (var i = 0; i < lines.length; i++) {
		words = lines[i].split(' ');
		line = '';

		for (var n = 0; n < words.length; n++) {
			testLine = line + words[n];
			metrics = ctx.measureText(testLine);
			if (metrics.width >= text_width) {
				text_width = metrics.width;
			}
		}
	}
}

function setTextPos(e) {
	//set attr of textarea before moving to another position
	textarea.value = "";
	span.innerText = "";

	//cal mouse position
	calMouseOrdinate(e);

	//set attr for textarea, span
	setFontColor(textarea, span);

	//set top, left for div draggable
	div.style.top = y + 'px';
	div.style.left = x + 'px';
}

function calTextColor(object) {
	red = object.fillColor.red * 255;
	green = object.fillColor.green * 255;
	blue = object.fillColor.blue * 255;
	objectColor = "rgb(" + red + "," + green + "," + blue + ")";
}

document.getScroll= function(){
if(detectmob() == 1)
	return [0,0];
 if(window.pageYOffset!= undefined){
  return [pageXOffset, pageYOffset];
 }
 else{
  var sx, sy, d= document, r= d.documentElement, b= d.body;
  sx= r.scrollLeft || b.scrollLeft || 0;
  sy= r.scrollTop || b.scrollTop || 0;
  return [sx, sy];
 }
}

function saveTextToCanvas(canvas, e) {
	div = document.getElementById("draggable");
	textarea = document.getElementById("textarea");
	span = document.getElementById("span");
	//$("#textarea").blur();
	if (div != null) {
		var value = textarea.value;
		if (value.trim() != "") {
			//begin save textarea into listText before move to another position
		
			//get size, color, font of textarea
			var size = textarea.style.fontSize;
			var color = textarea.style.color;
			var font = textarea.style.fontFamily;
		
			//set fontsize for text on canvas
			ctx.font = size + ' ' + font;

			//cal the height of text inside textarea
			text_height = parseInt(size + ' ' + font);

			//get the position of div draggable(khung nhap text)
			var x = $("#draggable").position();
			var xtop = parseFloat(x.top);
			var xleft = parseFloat(x.left);
			var matrix = document.querySelector('svg').getScreenCTM()
				var font_size_real = parseFloat(size.replace("px", "")) / matrix.a;

			//cal the top and left of text in order to add into canvas paperjs
			var canvasTop = parseFloat($("#canvas1").css("margin-top").replace("px", ""));
			var canvasLeft = parseFloat($("#canvas1").css("margin-left").replace("px", ""));
			var ratio_text = ((parseFloat(div.style.height.replace("px", ""))) / $("#canvas1").height());
			var top = xtop - canvasTop + text_height + 20 - ratio_offset * text_height - document.getScroll()[1];
			var left = xleft - canvasLeft + 20;
			
			
			//alert(top + " "+ left+ " "+ document.getScroll()[1]);

			var instanceWidth = $("#div_in").width() / matrix.a;
			var instanceHeight = $("#div_in").height() / matrix.a;
			var _offset = $("#div_in").offset();

			var rec_left = (_offset.left - canvasLeft) / matrix.a;
			var rec_top = (_offset.top - canvasTop - document.getScroll()[1]) / matrix.a ;

			var _mygroup = new createjs.Container();
			var recCanvas = new createjs.Shape();
			recCanvas.graphics.beginStroke("black").beginFill("white").drawRect(rec_left - (left / matrix.a), rec_top - (top / matrix.a), instanceWidth, instanceHeight);
			recCanvas.alpha = 0.5;
			//add text to canvas of paperjs
			var text = new createjs.Text(value, font_size_real + 'px ' + font, color);
			_mygroup.mode = "Drawtext";
			//var heightText = value.split("\n").length;
			//console.log(xleft / matrix.a, xtop / matrix.a);
			_mygroup.x = left / matrix.a;
			_mygroup.y = top / matrix.a;
			text.textBaseline = "alphabetic";
			_mygroup.addChild(recCanvas);
			_mygroup.addChild(text);
			container.addChild(_mygroup);
			
			_mygroup.addEventListener("mouseover", function(event){
				currentHover = event.currentTarget;
			});
			
			_mygroup.addEventListener("mouseout", function(event){
				currentHover = undefined;
			});
			
			stage1.clear();
			stage1.update();

			addListener(_mygroup);
			listText.push(text);

			setFontColor(textarea, span);
			if (textflag) {
				if (e != undefined) {
					div.removeAttribute("style");
					setTextPos(e);
				}
			}
			if (save) {
				//save==true -> appear div draggable with object content
				calTextWidth(objectText);

				//cal top, left for div
				div_top = objectY + marginTop;
				div_left = objectX + marginLeft;

				//set attr for textarea,span, div
				span.innerText = objectText;
				textarea.value = objectText;
				changeAttr_text(textarea, span, objectColor, objectFont);
				div.setAttribute("style", "top:" + div_top + "px;left:" + div_left + "px;");
			}
			save = false;
			
		} else if (value.trim() == "") {
			div.removeAttribute("style");
			setTextPos(e);
			
		}
		textarea.blur();
	}
}
var demCheck = 0;

function addListener(_contener) {
	_contener.addEventListener("mousedown", function (e) {
		if (_deleteEnable) {
			container.removeChild(e.currentTarget);
			stage1.clear();
			stage1.update();
			stage2.clear();
			stage2.update();
			return;
		}
		
		if (textflag) {
			saveTextToCanvas(canvas, e);
			var _this = _contener;
			var text = _contener.children[1];
			//alert(1);
			if (_deleteEnable) {
				container.removeChild(e.currentTarget);
				stage1.clear();
				stage1.update();
				stage2.clear();
				stage2.update();
				return;
			}
			var matrix = document.querySelector('svg').getScreenCTM();
			var canvasTop = parseFloat($("#canvas1").css("margin-top").replace("px", ""));
			var canvasLeft = parseFloat($("#canvas1").css("margin-left").replace("px", ""));

			if (textflag) {
				textclick = true;
				if (document.getElementById("draggable") == null) {
					createNewDiv(canvas, e);
					
					div = document.getElementById("draggable");
					textarea = document.getElementById("textarea");
					span = document.getElementById("span");

					//cal height,width of text inside textarea
					text_height = parseInt(text.font);
					var string_split = text.font.split(" ");
					text.font = (text_height * matrix.a) + "px " + string_split[1];
					calTextWidth(text.text);

					//set attr for textarea
					textarea.value = text.text;
					span.innerText = text.text;

					objectColor = text.color;
					changeAttr_text(textarea, span, objectColor, text.font);

					//set attr for div
					div_top = (_this.y * matrix.a) + canvasTop - (text_height * matrix.a) - 20 + ratio_offset * (text_height * matrix.a);
					div_left = (_this.x * matrix.a) + canvasLeft - 20;

					div.setAttribute("style", "top:" + div_top + "px;left:" + div_left + "px;");
				} else {
					if ($('#textarea').val().trim() != "") {

						save = true;
						//get attr of textarea
						//calTextColor(text.color);

						objectText = text.text;
						objectFont = text.font;
						objectX = _this.x;
						objectY = _this.y;
						objectColor = text.color;
						//save
						saveTextToCanvas(canvas, e);
						//console.log("namcd")
					} else {

						//console.log("namcd1")
						div = document.getElementById("draggable");
						textarea = document.getElementById("textarea");
						span = document.getElementById("span");

						//cal height,width of text inside textarea
						text_height = parseInt(text.font);
						var string_split = text.font.split(" ");
						text.font = (text_height * matrix.a) + "px " + string_split[1];
						calTextWidth(text.text);

						//set attr for textarea
						textarea.value = text.text;
						span.innerText = text.text;
						objectColor = text.color;
						changeAttr_text(textarea, span, objectColor, text.font);

						//set attr for div
						div_top = (_this.y * matrix.a) + canvasTop - (text_height * matrix.a) - 20 + ratio_offset * (text_height * matrix.a);
						div_left = (_this.x * matrix.a) + canvasLeft - 20;
						div.setAttribute("style", "top:" + div_top + "px;left:" + div_left + "px;");
					}
				}
				container.removeChild(_contener);
				stage1.clear();
				stage1.removeChild(_contener);
				stage1.update();
				
			}
		}
	})
}



function createNewDiv(canvas, e) {
	if (textflag == true) {
		calMouseOrdinate(e);
		//create div draggable(khung nhap text)
		div = document.createElement('div');
		div.id = "draggable";

		div_in = document.createElement('div');
		div_in.id = "div_in";
		div_in.className = "textfill little";
		div_in.className += " expandingArea";

		//create textarea
		textarea = document.createElement("textarea");
		textarea.id = "textarea";
		textarea.className = "textarea";
		// if(detectmob() == 1){
			// textarea.autofocus = true;
		// }
		//textarea.autofocus = true;
		pre = document.createElement("pre");
		pre.id = "pre";
		span = document.createElement("span");
		span.id = "span";
		br = document.createElement("br");

		//set attr for textarea, span
		setFontColor(textarea, span);

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

		//append to appear
		pre.appendChild(span);
		pre.appendChild(br);
		div_in.appendChild(pre);
		div_in.appendChild(textarea);
		div.appendChild(div_in);
		document.body.appendChild(div);

		//draggable & resizable
		$("#draggable").draggable({
			containment : "#canvas",
			scroll : false,
			opacity : 0.7,
			start: function( event, ui ) {
				textarea.blur();
			}
		});
		$("#draggable").resizable({
			handles : 'ne, se, sw, nw',
			aspectRatio : true,
			minHeight: 40,
			minWidth: 40,
			resize : function (e, ui) {
				calTextWidth(textarea.value);

				size = textarea.style.fontSize;
				font = textarea.style.fontFamily;
				text_height = parseInt(size + ' ' + font);

				var height_instace = $(this).height();
				var sizeText = (parseFloat(height_instace) - 20 - text_height * 0.2 * lines.length) / lines.length;	
				_fontsize = sizeText;
				$("#textarea").css("font-size", +sizeText + "px");
				$("#span").css("font-size", +sizeText + "px");
				if(isIE() && isIE() == 9) {
					if($("#textarea").text() == '') {
						$("#textarea").css("font-size", "25px");
						$("#span").css("font-size", "25px");
						checkTextarea("#textarea", "#span", _fontsize);
					} else {
						$("#textarea").css("font-size", +_fontsize + "px");
						$("#span").css("font-size", +_fontsize + "px");
					}
				}	
			},

			stop : function (e, ui) {
				x = div.style.left;
				y = div.style.top;
	
				div.removeAttribute("style");

				div.style.top = y;
				div.style.left = x;
			}
		});

		//set attr for div
		div.style.top = y + 'px';
		div.style.left = x + 'px';
		// if(detectmob() == 1){
			// textarea.focus();
		// }
		addClassExpand();
		document.getElementById('textarea').addEventListener("touchend", function (event) {
	 		$("#textarea").focus();
		}, false);
		
		textarea.blur();
	}
}
	
var checkTextarea = function(textarea, span, _fontsize) {
	$(textarea).on('keyup',function(e) {
		$(textarea).css("font-size", _fontsize + "px");
		$(span).css("font-size", _fontsize + "px");
		console.log($(textarea).text());
		if($(textarea).text() == "") {
			$(textarea).css("font-size", "25px");
			$(span).text("");
			$(span).css("font-size", "25px");
		}
	});	
}

function isIE () {
  var myNav = navigator.userAgent.toLowerCase();
  return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
}

function CreateText(canvas, e) {
	if (textflag) {
		if (document.getElementById("draggable") == null) {
			createNewDiv(canvas, e);
		} else {
			saveTextToCanvas(canvas, e);
		}
	}
}

//THAOPP_Function textarea autoresize-->
function makeExpandingArea(container) {

	var area = container.querySelector('textarea');
	var span = container.querySelector('span');
	if (area.addEventListener) {
		
		area.addEventListener('input', function () {
			span.textContent = area.value;
		}, false);
		span.textContent = area.value;
	} else if (area.attachEvent) {
		area.attachEvent('onpropertychange', function () {
			span.innerText = area.value;
		});
		span.innerText = area.value;
	}
	container.className += " active";
}

function addClassExpand() {
	var areas = $('.expandingArea');
	var l = areas.length;
	while (l--) {
		makeExpandingArea(areas[l]);
	}
}
