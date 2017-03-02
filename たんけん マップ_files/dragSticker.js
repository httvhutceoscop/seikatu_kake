var countsticker = 0;
var crrSticker = null;
var newSticker;
var mouseX, mouseY;

Sticker = function (id, x, y, type, allowClone) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.type = type;
    this.allowClone = allowClone;
}
//get vi tri con tro chuot chinh xac


var _isMouseStart = false;
var _isMouseEnd = false;
var listDelete = [];
var idObjectOld = 0, idObjectNew = 0;
function initSticker2(sticker) {
    $("#" + sticker.id).mouseover(function (event) {
        document.body.style.cursor = "default";
        //event.target.style.opacity = "0.5";
		$("#" + sticker.id + "_img").attr("opacity",0.5);
    });
    $("#" + sticker.id).mouseout(function (event) {
        document.body.style.cursor = "default";
        //event.target.style.opacity = "1";
		$("#" + sticker.id+ "_img").attr("opacity",1);
    });
    idObjectOld = sticker.id;
    var isMouseUp = false;
    var img = "#" + sticker.id;
    var mouseX, mouseY;
    var center = [{
        x: 0,
        y: 0
    }];
    var x = 0, y = 0;
	
	var _mousedown = {x : 0 , y: 0};

    document.getElementById(sticker.id).addEventListener("MSPointerDown", function (event) {
        if (event.pointerType == "touch" || event.pointerType == 2 || event.pointerType == "mouse" || event.pointerType == 4) {
            downStart(event);
			
        }
    }, false);

    document.getElementById(sticker.id).addEventListener("MSPointerUp", function (event) {
        if (event.pointerType == "touch" || event.pointerType == 2 || event.pointerType == "mouse" || event.pointerType == 4) {
            mouseUpSticker(event);
        }
    }, false);

    function downStart(event) {
        isClone = true;

        if (!_isMouseStart) {
            _isMouseStart = true;
            _isMouseEnd = false;
            var mouse = new Point();
            mouse = $utils.getTrueCoor(event.pageX, event.pageY);
            mouseX = mouse[0];
            mouseY = mouse[1];
			
            var currentElement;
            if (sticker.id == "sticker1") {
                currentElement = document.getElementById("stamp1");
				x = 50, y = 50;
            }
            else if (sticker.id == "sticker2") {
                currentElement = document.getElementById("stamp2");
				x= 132, y=52;
            }
            else if (sticker.id == "sticker3") {
                currentElement = document.getElementById("stamp3");
				x = 212, y=52;
            }
            else if (sticker.id == "sticker4") {
                currentElement = document.getElementById("stamp4");
				x = 52, y = 128;
            }
            else if (sticker.id == "sticker5") {
                currentElement = document.getElementById("stamp5");
				x = 132, y = 128;
            }
            else if (sticker.id == "sticker6") {
                currentElement = document.getElementById("stamp6");
				x = 212, y = 128;
            }
            else if (sticker.id == "sticker7") {
                currentElement = document.getElementById("stamp7");
				x = 52, y = 212;
            }
			updateStick();
            currentElement.setAttributeNS(null, "style", "opacity: 1;");
        }
    }

    function mouseUpSticker(event) {
        if (!_isMouseEnd) {
            _isMouseEnd = true;
            _isMouseStart = false;
			
			var currentElement = document.getElementById(sticker.id);
			var cvs = document.getElementById("canvas2");
			var rect = cvs.getBoundingClientRect();
			x = event.pageX - rect.left;
			y = event.pageY - rect.top;
			
			isClone = false;
			startStamp(event);
			setOpacity();
        }
    }
	
function updateStick(){
	if (sticker.id == "sticker1") {
		$("#stamp1").attr("transform","translate("+x+","+y+")");
	}
	else if (sticker.id == "sticker2") {
		$("#stamp2").attr("transform","translate("+x+","+y+")");
	}
	else if (sticker.id == "sticker3") {
		$("#stamp3").attr("transform","translate("+x+","+y+")");
	}
	else if (sticker.id == "sticker4") {
		$("#stamp4").attr("transform","translate("+x+","+y+")");
	}
	else if (sticker.id == "sticker5") {
		$("#stamp5").attr("transform","translate("+x+","+y+")");
	}
	else if (sticker.id == "sticker6") {
		$("#stamp6").attr("transform","translate("+x+","+y+")");
	}
	else if (sticker.id == "sticker7") {
		$("#stamp7").attr("transform","translate("+x+","+y+")");
	}
}
    interact(img)
    .on("touchstart", function (event) {
        downStart(event);
		if((detectmob() == 3 || detectmob() == 1)&& event.touches.length > 0){
			_mousedown = {x:event.touches[0].pageX, y : event.touches[0].pageY};
		}
    })
    .on("mousedown", function (event) {
        downStart(event);
    })
    .draggable({
        onstart: function (event) {
            mouse = $utils.getTrueCoor(event.pageX, event.pageY);
            mouseX = mouse[0];
            mouseY = mouse[1];
        },
        onmove: function (event) {
            var mouse = new Point();
            mouse = $utils.getTrueCoor(event.pageX, event.pageY);
            var k1 = -mouseX + mouse[0];
            var k2 = -mouseY + mouse[1];

            x += k1;
            y += k2;

            mouseX = mouse[0];
            mouseY = mouse[1];
			
			updateStick();

        },
        onend: function (event) {
            mouseUpSticker(event);
        }
    }).on("mouseup", function (event) {
        mouseUpSticker(event);
    })
     .on("touchend", function (event) {
		var _event = {pageX : _mousedown.x , pageY : _mousedown.y};
         mouseUpSticker(_event);
     })
}
for (var i = 1; i < 8; i++) {
    var s = new Sticker("sticker" + i, 1, 0, 0, true);
    initSticker2(s);
};

function setOpacity() {
    $("#stamp1").attr("style", "display:none");
    $("#stamp2").attr("style", "display:none");
    $("#stamp3").attr("style", "display:none");
    $("#stamp4").attr("style", "display:none");
    $("#stamp5").attr("style", "display:none");
    $("#stamp6").attr("style", "display:none");
    $("#stamp7").attr("style", "display:none");
}
