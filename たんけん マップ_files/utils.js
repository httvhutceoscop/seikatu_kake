function Utils() {}

Utils.prototype = {
	appendSVG : function(type){
		var _svg = document.getElementById("svg");
		var _item = document.createElementNS( "http://www.w3.org/2000/svg", type);
		_svg.appendChild(_item);
		return _item;
	},
	removeChildSVG : function(_item){
		var _svg = document.getElementById("svg");
		_svg.removeChild(_item);
	},
	appendSVGElement : function(elementName,type){
		var _svg = document.getElementById(elementName);
		var _item = document.createElementNS( "http://www.w3.org/2000/svg", type);
		_svg.appendChild(_item);
		return _item;
	}
	,
	threadCheckText  :function (e) {
		var countInteval = 0;
		var reg = /^\d+$/;
		var testCheck = setInterval(function () {
			var _target = document.getElementById (e.currentTarget.id);
			
			var target = $("#"+e.currentTarget.id);
			countInteval++;
			
			if (!reg.test(target.val())) {
				target.val("");
				done();
			}
			if (countInteval >= 10)
				done();
		}, 30);

		function done() {
			clearInterval(testCheck);
		}
		return this;
	},
	
	onlyNumber : function(element){
		element.on('keydown', function (e) {
			if (e.keyCode == 65 && e.ctrlKey == true) {
				return;
			}
			if (e.metaKey == true && e.keyCode == 65) {
				return;
			}
			if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 116]) !== -1 ||
				(e.keyCode >= 35 && e.keyCode <= 39)) {
				return;
			}

			if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
				e.preventDefault();
			} else {
				var _target = document.getElementById (e.currentTarget.id);
				var target = $("#"+e.currentTarget.id);
				if(target.val().length >= 2 && (-_target.selectionStart + _target.selectionEnd) < 1) e.preventDefault();
			}
		});
	},
	getTrueCoor : function(x, y) {
		var svg = document.querySelector('svg');
		var position = svg.createSVGPoint();
		var _agent = navigator.userAgent.toLowerCase();
		var matrix = svg.getScreenCTM();
		
		position.x = x;
		position.y = y;

		matrix.e = parseInt($('#svg').css("margin-left"));
		matrix.f = parseInt($('#svg').css("margin-top"));
		

		if (detectmob() == 1 || detectmob() == 3) {
			matrix = svg.getScreenCTM();
			position.x = x;
			position.y = y;
		}
		
		// mozilla/5.0 (macintosh; intel mac os x 10_10_2) applewebkit/600.4.10 (khtml, like gecko) version/8.0.4 safari/600.4.10
		var correctPosition = position.matrixTransform(matrix.inverse());
		if (detectmob() != 1 && detectmob() != 3 && _agent.indexOf('chrome') < 0 && _agent.indexOf('safari') < 0) {
			correctPosition.x /= ratio;
			correctPosition.y /= ratio;
		}
		return [correctPosition.x, correctPosition.y];
	},
	
	getTransform : function(itemID) {
        var tXY = {
            x: 0,
            y: 0
        };
        var transformOld = $(itemID).attr('transform');

        if (transformOld == '' || transformOld == undefined) {
            return tXY;
        } else {

            var transXY = transformOld.match(/(-?[0-9\.]+)/g);
            if (transXY[0] != undefined) {
                tXY.x = parseFloat(transXY[0]);
            }
            if (transXY[1] != undefined) {
                tXY.y = parseFloat(transXY[1]);
            }
        }
        return tXY;
    }
}
var $utils = new Utils();


function addShape(_parrent,_data,_id){
	var l = $utils.appendSVGElement(_parrent,"path");
	l.setAttribute("id",_id);
	l.setAttribute("d",_data);
	return l;
}

function addRect(_parrent,_point,_id){
	var l = $utils.appendSVGElement(_parrent,"rect");
	l.setAttribute("id",_id);
	l.setAttribute("d",_data);
	return l;
}

function createGroup(_id){
	var l = $utils.appendSVG("g");
	l.setAttribute("id",_id);
	return l;
}


function componentToHex(c) {
	var hex = c.toString(16);
	return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
	return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
function HSVtoRGB(h, s, v) {
	var r, g, b, i, f, p, q, t;
	if (h && s === undefined && v === undefined) {
		s = h.s, v = h.v, h = h.h;
	}
	i = Math.floor(h * 6);
	f = h * 6 - i;
	p = v * (1 - s);
	q = v * (1 - f * s);
	t = v * (1 - (1 - f) * s);
	switch (i % 6) {
		case 0: r = v, g = t, b = p; break;
		case 1: r = q, g = v, b = p; break;
		case 2: r = p, g = v, b = t; break;
		case 3: r = p, g = q, b = v; break;
		case 4: r = t, g = p, b = v; break;
		case 5: r = v, g = p, b = q; break;
	}
	return {
		r: Math.floor(r * 255),
		g: Math.floor(g * 255),
		b: Math.floor(b * 255)
	};
}

function randomColor()
{
	var rgb = HSVtoRGB(359 * Math.random(),(20 + 60 * Math.random()) / 100,(80 + 20 * Math.random()) / 100);
	return rgbToHex(rgb.r,rgb.g,rgb.b);
}


