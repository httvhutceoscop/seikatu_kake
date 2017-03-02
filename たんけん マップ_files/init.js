window.onunload = function() {
};

//zoom
$(window).bind('mousewheel DOMMouseScroll', function(event) {
	event.preventDefault();
});
shortcut.add("Ctrl+=", function() {
    return;
});
shortcut.add("Ctrl+-", function() {
    return;
});


// fix ios scroll

// Disable right click script
function clickIE() {
	if (document.all) {
		return false;
	}
}

function clickNS(e) {
	if (document.layers || (document.getElementById && !document.all)) {
		if (e.which == 2 || e.which == 3) {
			return false;
		}
	}
}
if (document.layers) {
	document.captureEvents(Event.MOUSEDOWN);
	document.onmousedown = clickNS;
} else {
	document.onmouseup = clickNS;
	document.oncontextmenu = clickIE;
}

document.oncontextmenu = new Function("return false");

var isIE11 = !!navigator.userAgent.match(/Trident.*rv\:11\./);
var useIE10 = navigator.userAgent.toLowerCase().indexOf('msie') > -1;
var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
var isiPad = navigator.userAgent.match(/iPad/i) != null;
var isIE9OrBelow = /MSIE\s/.test(navigator.userAgent) && parseFloat(navigator.appVersion.split("MSIE")[1]) < 10;

if(useIE10){
	$("#canvas2").css("pointer-events","");
	$("#svg").css("pointer-events","");
	$("#canvas2").hide();
}

function detectmob() {
	var nexus = /(.*Android.*Nexus.*)/i;
	var mobileRegex = /(android|iphone|ipad|ipod|BlackBerry|Windows Phone|webOS|BB)/i;
	var mobileBrowserRegex = /(Mobile|Opera Mini|Opera Mobi)/i;
	var touchRegex = /(Touch|Tablet PC)/i;
	var agent = navigator.userAgent;

	var rs;
	if (agent.match(nexus)) {
		rs = 3;
	} else if (agent.match(mobileRegex) || agent.match(mobileBrowserRegex)) {
		rs = 1;
	} else if (agent.match(touchRegex)
			|| ("ontouchstart" in document.documentElement)
			|| ('ontouchstart' in window)) {
		rs = 2;
		if(navigator.userAgent.match(/chrome/i)) rs = 3;
	} else {
		rs = 0;
	}
	return rs;
}

// var
var canvas, stage;
var isFocusIn = false;
function getDevicePixelRatio() {
    var pixelRatio = 1; // just for safety
    if ('deviceXDPI' in screen) { // IE mobile or IE
        pixelRatio = screen.deviceXDPI / screen.logicalXDPI;
    } else if (window.hasOwnProperty('devicePixelRatio')) { // other devices
        pixelRatio = window.devicePixelRatio;
    }
    return pixelRatio.toFixed(3);
}
var ratio = $(window).width() / window.outerWidth;
var resizeTime = 0;
$(window).resize(function(event) {
    ratio = $(window).width() / window.outerWidth;
	
	// if(detectmob() == 3){
		// if(!isFocusIn){
			// calculateDiv();
		// } else {
			// centerDiv();
		// }
		// return;
	// }
	
    if (preRatio == getDevicePixelRatio()) {
        if (new Date().getTime() - resizeTime < 30) return;
        calculateDiv();
    } else {
        setResizeByZoom();
    }
    resizeTime = new Date().getTime();
});

function setResizeByZoom() {
    preRatio = getDevicePixelRatio();
    $(".fitscreen").css("width", trueWidth / getDevicePixelRatio());
    $(".fitscreen").css("height", trueHeight / getDevicePixelRatio());

    $(".fitscreen").css("margin-top", height_offset / getDevicePixelRatio());
    $(".fitscreen").css("margin-left", width_offset / getDevicePixelRatio());
}

function calculateDiv() {
    preRatio = getDevicePixelRatio();
    var widthScreen = $(window).innerWidth() * getDevicePixelRatio();
    var heightScreen = $(window).innerHeight() * getDevicePixelRatio();
    var widthDefi = 128.0;
    var heightDefi = 72.0;

    if ((heightScreen * widthDefi / heightDefi) > widthScreen) {
        trueWidth = widthScreen;
        trueHeight = (widthScreen * heightDefi / widthDefi);
    } else {
        trueWidth = heightScreen * widthDefi / heightDefi;
        trueHeight = heightScreen;
    }
    $(".fitscreen").css("width", trueWidth);
    $(".fitscreen").css("height", trueHeight);
    centerDiv();
    setResizeByZoom()
}

var height_offset = 0;
var width_offset = 0;
var preRatio;
var trueHeight, trueWidth;


var drawingcanvas, drawingCanvasNoClear, container , tmpItemToDrag;
var color = "#000000";
var stroke;
var stage2, canvas2 , stage1 , canvas1;
var _isMouseLeft = true;
var _isDragging = false;
var canDraw = true;

function centerDiv() {
    var width_body = $(window).innerWidth() * getDevicePixelRatio();
    var height_body = $(window).innerHeight() * getDevicePixelRatio();
    var width_child = $("#svg").width();
    var height_child = $("#svg").height();
    width_offset = (width_body - width_child) / 2;
    height_offset = (height_body - height_child) / 2;
    if (height_offset < 0)
        height_offset = 0;
    if (width_offset < 0)
        width_offset = 0;
    if (navigator.userAgent.match(/iPad;.*CPU.*OS 7_\d/i)) {
        window.scrollTo(0, 10);
    }
    $(".fitscreen").css("margin-top", height_offset);
    $(".fitscreen").css("margin-left", width_offset);
}

function drawInit() {
	canvas2 = document.getElementById("canvas2");
	canvas2.width = 1280;
	canvas2.height = 720;
	stage2 = new createjs.Stage(canvas2);
	stage2.autoClear = false;
	
	
	tmpItemToDrag = new createjs.Container();
	stage2.addChild(tmpItemToDrag);
	stage2.update();
	//createjs.Ticker.addEventListener("tick", tick);
	// init canvas bottom
	canvas1 = document.getElementById("canvas1");
	canvas1.width = 1280;
	canvas1.height = 720;
	stage1 = new createjs.Stage(canvas1);
	stage1.autoClear = false;
	createjs.Touch.enable(stage1,true,false);
	stage1.enableDOMEvents(true);
	stage1.enableMouseOver(10);
	container = new createjs.Container();
	stage1.addChild(container);
}



function init() {
	drawInit();
	calculateDiv();
		// Avoid `console` errors in browsers that lack a console.
	(function() {
		var method;
		var noop = function () {};
		var methods = [
			'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
			'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
			'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
			'timeStamp', 'trace', 'warn'
		];
		var length = methods.length;
		var console = (window.console = window.console || {});

		while (length--) {
			method = methods[length];

			// Only stub undefined methods.
			if (!console[method]) {
				console[method] = noop;
			}
		}
	}());
}

// main function
var is_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
init();

Array.prototype.cloneArrayPoint = function(_list){
	var _l = [];
	for(var i = 0 ; i < _list.length ; i++){
		_l.push(new Point(_list[i].x , _list[i].y));
	}
	return _l;
}