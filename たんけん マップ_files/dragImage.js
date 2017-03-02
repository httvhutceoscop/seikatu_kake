 var group, image, groupImg = [];
 var countShape = 0;
 var image_src = null;
 var image_click = false;
 
 var currentImageClick = undefined;

Image2 = function(id, x, y, type, allowClone) {
	this.id = id;
	this.y = y;
	this.x = x;
	this.type = type;
	this.allowClone = allowClone;
}
var crrPoint;
 var _isMouseStart = false;
 var _isMouseEnd = false;
 var listDelete = [];
 var idObjectOld = 0,
     idObjectNew = 0;
 var _rotateValue = 0;
var currentElement=null;

 function test(image) {
     idObjectOld = image.id;
     var isMouseUp = false;
     var img = "#" + image.id;
     var mouseX, mouseY;
     var center = [{
         x: 0,
         y: 0
     }];
     var x = 0,
         y = 0;
	var _endPoint = {x : 0 , y : 0};

      document.getElementById(image.id).addEventListener("MSPointerDown", function(event) {            
         if (event.pointerType == "touch" || event.pointerType == 2 || event.pointerType == "mouse" || event.pointerType == 4) {
             downStart(event);
         }
      }, false); 
      document.getElementById(image.id).addEventListener("MSPointerUp", function(event) {            
         if (event.pointerType == "touch" || event.pointerType == 2 || event.pointerType == "mouse" || event.pointerType == 4) {
             mouseUp(event);           
         }        
      }, false);
	  document.getElementById(image.id).addEventListener("touchend", function (event) {
        if (_isMouseStart) {
            mouseUp(event);
		}
      }, false);
	  document.getElementById(image.id).addEventListener("mouseup", function (event) {
	      if (_isMouseStart) {
			if(detectmob() != 1 && detectmob() != 3)
				mouseUp(event);
	      }
	  }, false);
	  document.getElementById(image.id).addEventListener("touchmove", function (event) {
        _endPoint = {x : event.touches[0].pageX, y : event.touches[0].pageY};
      }, false);
     function downStart(event) {
		 
         isClone = true;
         clickID = event.target.id;
         if (!_isMouseStart) {
             _isMouseStart = true;
             _isMouseEnd = false;

             var mouse = new Point();
             mouse = $utils.getTrueCoor(event.pageX, event.pageY);
			 if(detectmob() == 3){
				mouse = $utils.getTrueCoor(event.touches[0].pageX, event.touches[0].pageY);
				_endPoint = {x : event.touches[0].pageX, y : event.touches[0].pageY};
			 }
             mouseX = mouse[0];
             mouseY = mouse[1];
			
             if (image.allowClone) {
                 countShape++;
                 newShape = new Image2("image" + countShape, 0, 0, 0, true);
                 idObjectNew = 'imageTemp' + countShape;
                 var cloneElement = document.getElementById(image.id).cloneNode(true);
                 cloneElement.setAttributeNS(null, "id", newShape.id);
                 cloneElement.setAttributeNS(null, "class", "images");
                 document.getElementById(image.id).parentNode.appendChild(cloneElement);
				
                 //add lai su kien cho element moi
                 $("#" + newShape.id).mouseover(function(event) {
                     document.body.style.cursor = "default";
                     event.target.style.opacity = "0.5";
                 });
                 $("#" + newShape.id).mouseout(function(event) {
                     document.body.style.cursor = "default";
                     event.target.style.opacity = "1";
                 });

                 document.getElementById(newShape.id).style.opacity = "1";

                 $("#" + image.id).appendTo($("#all2"));
                 listDelete.push(image.id);
                 image.allowClone = false;
             } else {
				 
			 }
             var currentElement = document.getElementById(image.id);
            // alert(1);
             $("#" + image.id).unbind();
             interact("#" + newShape.id).draggable(false);
             currentElement.setAttributeNS(null, "id", image.id);
             currentElement.setAttributeNS(null, "class", "images");
             currentElement.setAttributeNS(null, "width", "72");
             currentElement.setAttributeNS(null, "height", "72");
             currentElement.setAttributeNS(null, "style", "opacity: 1;");
             currentElement.setAttributeNS(null, "x", parseFloat(mouseX) - 25*1.15);
             currentElement.setAttributeNS(null, "y", parseFloat(mouseY) - 25 * 1.15);
             
         }
     }

     var bitmap;

     function mouseUp(event) {
		
         if (!_isMouseEnd) {
             _isMouseEnd = true;
             _isMouseStart = false;
             saveImageToCavasNoFlag();
             if (isClone) {
                 currentElement = document.getElementById(image.id);
				 image_src = currentElement.getAttribute("xlink:href") ;
                 var cvs = document.getElementById("canvas2");
				 cvs.style.display = '';
                 var rect = cvs.getBoundingClientRect();

                 x = event.pageX - rect.left;
                 y = event.pageY - rect.top;
				 if(detectmob() == 3){
					 x = _endPoint.x - rect.left;
					 y = _endPoint.y - rect.top;
					
				 }
				 
				 crrPoint=new Point(x,y);
				 
                 //viet code vao day
                 for (var i = listDelete.length - 1; i >= 0; i--) {
                     var obj = document.getElementById(listDelete[i]);
                     obj.parentNode.removeChild(obj);
                     listDelete.pop(listDelete[i]);
                 };
                 isClone = false;
                 test(newShape);
                 //startImage();
                 CreateImage();
             }
         }
     }

     interact(img)
          .on("touchstart", function(event) {
              downStart(event);
          })
          .on("mousedown", function(event) {
			if(detectmob() != 1 && detectmob() != 3)
				downStart(event);
          })
         .draggable({
			 onstart: function(event){
				//downStart(event);
				 mouse = $utils.getTrueCoor(event.pageX, event.pageY);
				 mouseX = mouse[0];
				 mouseY = mouse[1];
				 
			 },
             onmove: function(event) {
                //console.log(_isMouseStart)
                 if (_isMouseStart) {
                     var mouse = new Point();
                     mouse = $utils.getTrueCoor(event.pageX, event.pageY);
                     var k1 = -mouseX + mouse[0];
                     var k2 = -mouseY + mouse[1];
                     x += k1;
                     y += k2;
                     mouseX = mouse[0] ;
                     mouseY = mouse[1] ;
                     $(img).attr("transform", "translate(" + x + ', ' + y + ')');
                 }
             },
             onend: function(event) {
                 mouseUp(event);
             }
         });
 }

 for (var i = 1; i < 47; i++) {
     var s = new Image2("img" + i, 1, 0, 0, true);
     test(s);
 };
 var i = 0;
 var _mouse = new Point();
 function angleBetweenPoints(p1, p2) {

    if (p1[0] == p2[0] && p1[1] == p2[1]) {

        return Math.PI / 2;
    } else {
        return Math.atan2(p2[1] - p1[1], p2[0] - p1[0]);
    }
}
var angle = 0;
var before = 0;
var snap = 0;
var oldRotate = 0;
var _isRotate = false;
function toDegrees(rad) {

    return rad * (180 / Math.PI);
}

function getPointRotate(deg, dx, dy, centerX, centerY) {

    var angle1 = (deg) * (Math.PI / 180);
    var rotatedX = Math.cos(angle1) * (dx - centerX) - Math.sin(angle1) * (dy - centerY) + centerX;
    var rotatedY = Math.sin(angle1) * (dx - centerX) + Math.cos(angle1) * (dy - centerY) + centerY;

    return [rotatedX, rotatedY];
}
function rotateimage(event){
    if(!_isRotate) return;
    //var _crrPoint = $utils.getTrueCoor(event.pageX, event.pageY);
    _mouse.x = event.pageX;
    _mouse.y = event.pageY;
    try{
        var dxy = [parseFloat(document.getElementById("draggable").style.left)+parseFloat($("#draggable").width())/2 , parseFloat(document.getElementById("draggable").style.top)+parseFloat($("#draggable").width())/2];
        var exy = [_mouse.x , _mouse.y];
        angle = toDegrees(angleBetweenPoints(dxy, exy)) + 90;
        _rotateValue = angle;
        $("#draggable").css({
             transform: ' rotate('+angle+'deg)',
             MozTransform: ' rotate('+angle+'deg)',
             WebkitTransform: ' rotate('+angle+'deg)',
             msTransform: ' rotate('+angle+'deg)'
        })
    }
    catch(Exception){}
    // oldRotate = (snap - before);
}

function mousedownrotate(){

    _isRotate = true;
    var _crrPoint = $utils.getTrueCoor(event.pageX, event.pageY);
    _mouse.x = _crrPoint[0];
    _mouse.y = _crrPoint[1];
    var dxy = [parseFloat(document.getElementById("draggable").style.left)+parseFloat($("#draggable").width())/2 , parseFloat(document.getElementById("draggable").style.top)+parseFloat($("#draggable").width())/2];
    var exy = [_mouse.x , _mouse.y];
    angle = angleBetweenPoints(dxy, exy);
    snap = toDegrees(angle);
    before = snap - oldRotate;
}

function mouseuprotate(){
    _isRotate = false;
	
	if((_rotateValue>-45 && _rotateValue<=45) || (_rotateValue>315 && _rotateValue<=360))
	{
		$('.ui-resizable-se').css('top', 'auto').css('left', 'auto');
		$('.ui-resizable-ne').css('bottom', 'auto').css('left', 'auto');
		$('.ui-resizable-nw').css('bottom', 'auto').css('right', 'auto');
		$('.ui-resizable-sw').css('top', 'auto').css('right', 'auto');

		$('.ui-resizable-se').css('bottom', '0px').css('right', '0px');
		$('.ui-resizable-ne').css('top', '0px').css('right', '0px');
		$('.ui-resizable-nw').css('top', '0px').css('left', '0px');
		$('.ui-resizable-sw').css('bottom', '0px').css('left', '0px');
		
		$('.ui-icon-triangle-1-se').css('background-image','url("images/right-bottom.png")');
		$('.ui-icon-triangle-1-ne').css('background-image','url("images/right-top.png")');
		$('.ui-icon-triangle-1-nw ').css('background-image','url("images/left-top.png")');
		$('.ui-icon-triangle-1-sw').css('background-image','url("images/left-bottom.png")');
	}
	
	if(_rotateValue>45 && _rotateValue<=135)
	{
		$('.ui-resizable-se').css('bottom', 'auto').css('left', 'auto');
		$('.ui-resizable-ne').css('bottom', 'auto').css('right', 'auto');
		$('.ui-resizable-nw').css('top', 'auto').css('right', 'auto');
		$('.ui-resizable-sw').css('top', 'auto').css('left', 'auto');
		
		$('.ui-resizable-se').css('top', '0px').css('right', '0px');
		$('.ui-resizable-ne').css('top', '0px').css('left', '0px');
		$('.ui-resizable-nw').css('bottom', '0px').css('left', '0px');
		$('.ui-resizable-sw').css('bottom', '0px').css('right', '0px');

		$('.ui-icon-triangle-1-se').css('background-image','url("images/right-top.png")');
		$('.ui-icon-triangle-1-ne').css('background-image','url("images/left-top.png")');
		$('.ui-icon-triangle-1-nw ').css('background-image','url("images/left-bottom.png")');
		$('.ui-icon-triangle-1-sw').css('background-image','url("images/right-bottom.png")');
	}

	if((_rotateValue>135 && _rotateValue<=225) || (_rotateValue>-225 && _rotateValue<=-135))
	{
		$('.ui-resizable-se').css('bottom', 'auto').css('right', 'auto');
		$('.ui-resizable-ne').css('top', 'auto').css('right', 'auto');
		$('.ui-resizable-nw').css('top', 'auto').css('left', 'auto');
		$('.ui-resizable-sw').css('bottom', 'auto').css('left', 'auto');
		
		$('.ui-resizable-se').css('top', '0px').css('left', '0px');
		$('.ui-resizable-ne').css('bottom', '0px').css('left', '0px');
		$('.ui-resizable-nw').css('bottom', '0px').css('right', '0px');
		$('.ui-resizable-sw').css('top', '0px').css('right', '0px');

		$('.ui-icon-triangle-1-se').css('background-image','url("images/left-top.png")');
		$('.ui-icon-triangle-1-ne').css('background-image','url("images/left-bottom.png")');
		$('.ui-icon-triangle-1-nw ').css('background-image','url("images/right-bottom.png")');
		$('.ui-icon-triangle-1-sw').css('background-image','url("images/right-top.png")');
	}
	
	if((_rotateValue>225 && _rotateValue<=315) || (_rotateValue>-135 && _rotateValue<=-45))
	{
		$('.ui-resizable-se').css('top', 'auto').css('right', 'auto');
		$('.ui-resizable-ne').css('top', 'auto').css('left', 'auto');
		$('.ui-resizable-nw').css('bottom', 'auto').css('left', 'auto');
		$('.ui-resizable-sw').css('bottom', 'auto').css('right', 'auto');

		$('.ui-resizable-se').css('bottom', '0px').css('left', '0px');
		$('.ui-resizable-ne').css('bottom', '0px').css('right', '0px');
		$('.ui-resizable-nw').css('top', '0px').css('right', '0px');
		$('.ui-resizable-sw').css('top', '0px').css('left', '0px');
		
		$('.ui-icon-triangle-1-se').css('background-image','url("images/left-bottom.png")');
		$('.ui-icon-triangle-1-ne').css('background-image','url("images/right-bottom.png")');
		$('.ui-icon-triangle-1-nw ').css('background-image','url("images/right-top.png")');
		$('.ui-icon-triangle-1-sw').css('background-image','url("images/left-top.png")');
	}
}

function startImage()
{
    $(".ui-resizable-a").css({left: $("#draggable").width()/2 + 10});
	canvas=document.getElementById("canvas1");
	
	div = document.createElement('div');
	div.id="draggable";
	
	
	image_a = document.createElement('img');
	//image_a.crossOrigin = "Anonymous";
	image_a.src = image_src;
	
	image_a.id = "a";
	image_a.style.width="90px";
	image_a.style.height="90px";
	
	
	var _ndiv = document.createElement('div');
	_ndiv.setAttribute("class","ui-drag-n");
	div.appendChild(_ndiv);
	
	_ndiv = document.createElement('div');
	_ndiv.setAttribute("class","ui-drag-s");
	div.appendChild(_ndiv);
	
	_ndiv = document.createElement('div');
	_ndiv.setAttribute("class","ui-drag-w");
	div.appendChild(_ndiv);
	
	_ndiv = document.createElement('div');
	_ndiv.setAttribute("class","ui-drag-e");
	div.appendChild(_ndiv);
	
	//append to appear
	div.appendChild(image_a);
	document.body.appendChild(div);

	//draggable & resizable

	$( "#draggable" ).draggable({ containment: "#canvas", scroll: false, opacity:0.7});
	$( "#draggable" ).resizable({ 
		handles: 'ne, se, sw, nw, a',
		minHeight: minHeightBox,
		minWidth : minWidthBox,
		aspectRatio: true,
		alsoResize: "#a",
        resize: function(e, ui) {
            $(".ui-resizable-a").css({left: $("#draggable").width()/2 + 10});
        },

	});
	
	if (crrPoint != null) {
	    div.style.top = crrPoint.y + canvas.offsetTop - parseInt(image_a.style.height) / 2 - 20 +"px";
	    div.style.left = crrPoint.x + canvas.offsetLeft - parseInt(image_a.style.height) / 2 - 20 + "px";
	}

    try{
        
        $( ".ui-resizable-a" ).bind("mousedown", mousedownrotate);
         $( "#bodyID" ).bind("mousemove", rotateimage);
        $( "#bodyID" ).bind("mouseup", mouseuprotate);
    }
    catch(Exception){

    }
}

function saveImage()
{
    $(".ui-resizable-a").css({left: $("#draggable").width()/2 + 10});
    div = document.getElementById("draggable");
    if (div != null) {
        //image_a.crossOrigin = "Anonymous";
        image_a = document.getElementById("a");

        var _pos = [];
        _pos.left = parseFloat(document.getElementById("draggable").style.left);
        _pos.top = parseFloat(document.getElementById("draggable").style.top);

        var canvasTop = parseFloat($("#canvas1").css("margin-top").replace("px", ""));
        var canvasLeft = parseFloat($("#canvas1").css("margin-left").replace("px", ""));
        var matrix = document.querySelector('svg').getScreenCTM();
        img = new createjs.Bitmap(image_src);
        //img.regX = image_a.style.width / matrix.a;
        //img.regY = image_a.style.width / matrix.a;
       
		img.x = (_pos.left - canvasLeft + 20 + parseFloat(image_a.style.width)/2) / matrix.a;
		img.y = (_pos.top - canvasTop + 20 + parseFloat(image_a.style.height)/2) / matrix.a ;
		//var tmpCir = new createjs.Shape();
		//tmpCir.graphics.beginFill("red").drawCircle(img.x, img.y,10);
		img.regX = 250;
		img.regY = 250;
		
		img.scaleX = img.scaleY = (parseInt(image_a.style.width)) / 500 / matrix.a;
		img.mode = "DrawImage"
		img.srcImage = image_src;
		img.rotation = _rotateValue;
		
		img.addEventListener("mouseover", function(event){
			currentHover = event.currentTarget;
		});
		
		img.addEventListener("mouseout", function(event){
			currentHover = undefined;
		});
		
		container.addChild(img);

        image_a.src = image_src;
        image_a.style.width = "75px";
        image_a.style.height = "75px";

        div.removeAttribute("style");
        div.style.top = crrPoint.y + canvas.offsetTop - parseInt(image_a.style.height) / 2 - 20;
        div.style.left = crrPoint.x + canvas.offsetLeft - parseInt(image_a.style.height) / 2 - 20;
        crrPoint.x = div.style.left;
        crrPoint.y = div.style.top;
        
        addImageEvent(img);
        _rotateValue = 0;
        setTimeout(function () { stage1.update(); }, 100);
       
    }
    
}

var imageSource=null;
var imageScale=null;
var imageX,imageY=null;

function addImageEvent(img)
{
    img.addEventListener("mousedown", function (event)
	{
		if(_deleteEnable){
			container.removeChild(event.currentTarget);
			stage1.clear();
			stage1.update();
			stage2.clear();
			stage2.update();
			return;
		}
		currentImageClick = event.currentTarget;
		if(imageflag){
		    image_click = true;
	        var matrix = document.querySelector('svg').getScreenCTM();
	        var canvasTop = parseFloat($("#canvas1").css("margin-top").replace("px",""));
	        var canvasLeft = parseFloat($("#canvas1").css("margin-left").replace("px", ""));
	        saveImageToCavasNoFlag();
			    image_src = img.srcImage
			    startImage();
			    var div = document.getElementById("draggable");
			    var image_a = document.getElementById("a");
				image_a.src = image_src;
				console.log(img.scaleX + " "+ matrix.a);
				var _w = img.scaleX * 500 * matrix.a;
				image_a.style.width = _w+"px";
				image_a.style.height = _w+"px";
				//console.log(_w);
				div.removeAttribute("style");
				_rotateValue = img.rotation;
				$("#draggable").css({
				    transform: ' rotateZ(' + _rotateValue + 'deg)',
				    MozTransform: ' rotateZ(' + _rotateValue + 'deg)',
				    WebkitTransform: ' rotateZ(' + _rotateValue + 'deg)',
				    msTransform: ' rotateZ(' + _rotateValue + 'deg)'
				})
				div.style.top = img.y * matrix.a + canvasTop - 20 -  parseFloat(image_a.style.width)/2 +"px";
				div.style.left = img.x * matrix.a + canvasLeft - 20 - parseFloat(image_a.style.width)/2 +"px";
				if (crrPoint == null) {
				    crrPoint = [{
				        x: 0,
				        y: 0
				    }];
				}
				crrPoint.x = div.style.left;
				crrPoint.y = div.style.top;
				container.removeChild(img);
				stage1.clear();
				stage1.removeChild(img);
				stage1.update();
                $(".ui-resizable-a").css({left: $("#draggable").width()/2 + 10});
			
			
		 }
	})
}

function CreateImage()
{
	if(document.getElementById("draggable")==null)
	{
		startImage();
	}
	else
	{
		saveImage();
	}
}

function isImageFlagFalse()
{
	if(imageflag)
	{
		if(div!=null)
		{
			saveImage();
		}
		imageflag=false; 
		removeImage();
	}	
	
}

function saveImageToCavasNoFlag() {
    if (imageflag) {
        if (div != null) {
            saveImage();
        }
		removeImage();
    }
    
}

function removeImage()
{
	div=document.getElementById("draggable");
	image_a=document.getElementById("a");
	if(div!=null)
	{
		div.removeChild(image_a);
		document.body.removeChild(div);
	}
}