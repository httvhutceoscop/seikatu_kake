
var object_json = function(type, data){
    this.type = type;
    this.data = data;
}

var DataLine = function(startPoint, endPoint, strokeWidth, strokeColor, x, y){
    this.startPoint = startPoint;
    this.endPoint = endPoint;
    this.strokeWidth = strokeWidth;
    this.strokeColor = strokeColor;
    this.x = x;
    this.y = y;
}

var DataFree = function(listPoint, strokeWidth, strokeColor, x, y){
    this.listPoint = listPoint
    this.strokeWidth = strokeWidth;
    this.strokeColor = strokeColor;
    this.x = x;
    this.y = y;
}

var DataText = function (textValue, fontType, color_data, x, y, textAlign, xRect, yRect, widthRect, heightRect) {
    this.textValue = textValue;
    this.fontType = fontType;
    this.color_data = color_data;
    this.x = x;
    this.y = y;
    this.textAlign = textAlign;
    this.xRect = xRect;
    this.yRect = yRect;
    this.widthRect = widthRect;
    this.heightRect = heightRect;
}

var DataImage = function (srcImage, x, y, scaleImage, rotateImage) {
    this.srcImage = srcImage;
    this.x = x;
    this.y = y;
    this.scaleImage = scaleImage;
    this.rotateImage = rotateImage;
}

var DataStamp = function (fontColor, fontSize, fontFont, rasterObjectX, rasterObjectY, rasterObjectcolor,
                          rasterObjectsrc, rasterObjectscaleX, rasterObjectscaleY, rasterWidthVal,
                          rasterHeightVal, stampX, stampY, stampText, font_size_real) {

    this.fontColor = fontColor;
    this.fontSize = fontSize;
    this.fontFont = fontFont;

    this.rasterObjectX = rasterObjectX;
    this.rasterObjectY = rasterObjectY;
    this.rasterObjectcolor = rasterObjectcolor;
    this.rasterObjectsrc = rasterObjectsrc;
    this.rasterObjectscaleX = rasterObjectscaleX;
    this.rasterObjectscaleY = rasterObjectscaleY;

    this.rasterWidthVal = rasterWidthVal;
    this.rasterHeightVal = rasterHeightVal;

    this.stampX = stampX;
    this.stampY = stampY;
    this.stampText = stampText;
    this.font_size_real = font_size_real;
}

var localSaveObject = function(name, data){
	this.name = name;
	this.data = data;
	this.dateCreate = new Date().getTime();
}

function formatTime(_time){
	_time = (_time >= 10) ? _time : "0"+_time;
	return _time;
}

function createName(){
	var timeInMs = new Date();
	var _m = formatTime(timeInMs.getMonth() + 1);
	var _d = formatTime(timeInMs.getDate());
	var _h = formatTime(timeInMs.getHours());
	var _min = formatTime(timeInMs.getMinutes());
	var _sec = formatTime(timeInMs.getSeconds());
	
    var name = timeInMs.getFullYear() + "." + _m + "." + _d + "." + _h + "." + _min+"."+ _sec + ".dat";
	return name;
}

function saveFile(string_val) {
    
    var blob = new Blob([string_val], { type: "text/plain;charset=utf-8" });
	var name = createName();
    saveAs(blob, name);
}

function compare(a,b) {
  if (a.dateCreate > b.dateCreate)
     return -1;
  if (a.dateCreate < b.dateCreate)
    return 1;
  return 0;
}

var last_name_ipad = "";

function saveLocalStogare(string_val){
	var data_local =[]; 
	if(localStorage.map_local_data != null && localStorage.map_local_data != ""){
		//alert(localStorage.map_local_data);
		data_local = JSON.parse(localStorage.map_local_data);
	}
	
	var name = createName();
	last_name_ipad = name;
	var temp_object = new localSaveObject(name,string_val);
	if(data_local.length >= 10){
		data_local.splice(9,data_local.length - 9);
	}
	
	data_local.push(temp_object);
	data_local.sort(compare);
	localStorage.map_local_data = JSON.stringify(data_local);
	
}

function loadLocalStogare(index){
	var data_local =[]; 
	if(localStorage.map_local_data != null){
		data_local = JSON.parse(localStorage.map_local_data);
		loadJson(data_local[index].data);
	} else{
		loadJson([]);
	}
	stage1.clear();
	setTimeout(function(){
		stage1.update();
	}, 200);
    
}

function saveJson(){
    var result_json = [];
    var instace_list = stage1.children[0].children;
    for(var i=0;i<instace_list.length;i++){
        switch(instace_list[i].mode){
            case "DrawFree":
                var instanceTemp = instace_list[i].graphics.instructions[1];
                var data = new DataFree(instanceTemp.listPoint,instanceTemp.stroke,instanceTemp.color, instace_list[i].x, instace_list[i].y);
                var objecTemp = new object_json("DrawFree", data);
                result_json.push(objecTemp);
                break;
            case "DrawLine":
                var instanceTemp = instace_list[i].children[0].graphics.instructions;
                var data = new DataLine(instanceTemp[1], instanceTemp[2], instanceTemp[3].width, instanceTemp[4].style, instace_list[i].x, instace_list[i].y);
                var objecTemp = new object_json("DrawLine", data);
                result_json.push(objecTemp);
                break;
            case "DrawRayLine":
                var instanceTemp = instace_list[i].children[0].graphics.instructions;
                var data = new DataLine(instanceTemp[1], instanceTemp[2], instanceTemp[instanceTemp.length-2].width, instanceTemp[instanceTemp.length-1].style, instace_list[i].x, instace_list[i].y);
                var objecTemp = new object_json("DrawRayLine", data);
                result_json.push(objecTemp);
                break;
            case "DrawRayLine2":
                var instanceTemp = instace_list[i].children[0].graphics.instructions;
                var data = new DataLine(instanceTemp[1], instanceTemp[2], instanceTemp[instanceTemp.length-2].width, instanceTemp[instanceTemp.length-1].style, instace_list[i].x, instace_list[i].y);
                var objecTemp = new object_json("DrawRayLine2", data);
                result_json.push(objecTemp);
                break;
            case "DrawRayLineFree":
                var instanceTemp = instace_list[i].graphics.instructions[1];
                var data = new DataFree(instanceTemp.listPoint, 0, "#000000", instace_list[i].x, instace_list[i].y);
                var objecTemp = new object_json("DrawRayLineFree", data);
                result_json.push(objecTemp);
                break;
            case "DrawRayLineProFree":
                var instanceTemp = instace_list[i].graphics.instructions[1];
                var data = new DataFree(instanceTemp.listPoint, 0, "#000000", instace_list[i].x, instace_list[i].y);
                var objecTemp = new object_json("DrawRayLineProFree", data);
                result_json.push(objecTemp);
                break;
            case "Drawtext":
                var instanceTemp = instace_list[i].children[1];
                var instanceGraphic = instace_list[i].children[0].graphics.instructions[1];
                var data = new DataText(instanceTemp.text, instanceTemp.font, instanceTemp.color, instace_list[i].x,
										instace_list[i].y, instanceTemp.textAlign, instanceGraphic.x, instanceGraphic.y,
                                        instanceGraphic.w, instanceGraphic.h);
                var objecTemp = new object_json("Drawtext", data);
                result_json.push(objecTemp);
                break;
            case "DrawImage":
                var instanceTemp = instace_list[i];
                var data = new DataImage(instanceTemp.srcImage, instanceTemp.x, instanceTemp.y, instanceTemp.scaleX, instanceTemp.rotation);
                var objecTemp = new object_json("DrawImage", data);
                result_json.push(objecTemp);
                break;
            case "DrawStamp":
                var instanceTemp = instace_list[i].children[1];
                var instanceRaster = instace_list[i].children[0].raster;
                var data = new DataStamp(instanceTemp._T_color, instanceTemp._T_size, instanceTemp._T_font, instanceRaster.x,
                                         instanceRaster.y, instanceRaster.color, instanceRaster.src, instanceRaster.scaleX,
                                         instanceRaster.scaleY, instanceTemp._w, instanceTemp._h, instanceTemp.x,
                                         instanceTemp.y, instanceTemp.content, instanceTemp._T_font_size_real)
                var objecTemp = new object_json("DrawStamp", data);
                result_json.push(objecTemp);
                break;
        }
    }
    var string_json = JSON.stringify(result_json);
	if(!isiPad){
		saveFile(string_json);
	}else{
		try{
			saveLocalStogare(string_json);
			alert(last_name_ipad+"の形式ファイルを保存された。");
		}catch(ex){
			alert("ファイルを保存されない。");
		}
	}
}

function loadStart(){
	var dataLoad = "";
	var fileInput = document.getElementById('fileInput');
	var file = fileInput.files[0];
	if(file != null){
		var fileName = file.name.split(".")[file.name.split(".").length - 1];
		try{
			var isFlag = true;
			var reader = new FileReader();
			reader.onload = function (e) {
				dataLoad = reader.result;
				isFlag = loadJson(dataLoad);
				$("#fileInputReset").click();
				hideAllPopup();
				if(isFlag){
					$("#loadfilesuccess").show();
					$("#btnClosePopup").show();
					btnPen_lineClick();
				}else{
					$("#loadfilefail").show();
					$("#btnClosePopup").show();
				}
			} 
			reader.readAsText(file); 
			
		} catch (ex) {
			hideAllPopup();
			$("#loadfilefail").show();
			$("#btnClosePopup").show();
		}
		
	}
}

function hideAllPopup(){
	$("#loadmessage").hide();
	$("#btn_message_cancel").hide();
	$("#btn_message_ok").hide();
	$("#loadfilefail").hide();
	$("#loadfilesuccess").hide();
	$("#btnClosePopup").hide();
}

function preInstallLoad(){
    var fileInput = document.getElementById('fileInput');
    fileInput.addEventListener('change', function (e) {
		hideAllPopup();
		$("#svg_message").show();
		$("#loadmessage").show();
		$("#btn_message_cancel").show();
		$("#btn_message_ok").show();
    });
}

function clearAllChild(){
    while(container.children.length > 0){
        container.removeChildAt(0);
    }

    stage2.clear();
    stage2.update();
}

function loadJson(string_json){
	try{
		clearAllChild();
		canvas = document.getElementById("canvas1");
		marginLeft = parseFloat(canvas.style.marginLeft);
		marginTop = parseFloat(canvas.style.marginTop);
		ctx = canvas.getContext("2d");
		if(string_json == null) return;
		var instace_list = JSON.parse(string_json);
		for(var count=0;count<instace_list.length;count++){
			switch(instace_list[count].type){
				case "DrawFree":
					$drawfree.reDraw(instace_list[count].data.listPoint, instace_list[count].data.strokeWidth,
									 instace_list[count].data.strokeColor,instace_list[count].data.x,instace_list[count].data.y);
					break;
				case "DrawLine":
					$drawline.reDraw(instace_list[count].data.startPoint,instace_list[count].data.endPoint,
									 instace_list[count].data.strokeWidth, instace_list[count].data.strokeColor,instace_list[count].data.x,instace_list[count].data.y);
					break;
				case "DrawRayLine":
					$drawrayline.reDraw(instace_list[count].data.startPoint,instace_list[count].data.endPoint,
									 instace_list[count].data.strokeWidth, instace_list[count].data.strokeColor,instace_list[count].data.x,instace_list[count].data.y);
					break;
				case "DrawRayLine2":
					$drawrayline2.reDraw(instace_list[count].data.startPoint,instace_list[count].data.endPoint,
									 instace_list[count].data.strokeWidth, instace_list[count].data.strokeColor,instace_list[count].data.x,instace_list[count].data.y);
					break;
				case "DrawRayLineFree":
					$drawraylinefree.reDraw(instace_list[count].data.listPoint,
									 instace_list[count].data.strokeWidth, instace_list[count].data.strokeColor,instace_list[count].data.x,instace_list[count].data.y);
					break;
				case "DrawRayLineProFree":
					$drawRayLineProFree.reDraw(instace_list[count].data.listPoint,
									 instace_list[count].data.strokeWidth, instace_list[count].data.strokeColor,instace_list[count].data.x,instace_list[count].data.y);
					break;
				case "Drawtext":
					var data = instace_list[count].data;
					var _mygroup = new createjs.Container();
					_mygroup.mode = "Drawtext";
					var recCanvas = new createjs.Shape();
					recCanvas.graphics.beginStroke("black").beginFill("white").drawRect(data.xRect, data.yRect, data.widthRect, data.heightRect);
					recCanvas.alpha = 0.5;

					var text = new createjs.Text(data.textValue, data.fontType, data.color_data);
					
					text.textBaseline = "alphabetic";
					//_mygroup.mode = "Drawtext";
					_mygroup.x = data.x;
					_mygroup.y = data.y;
					_mygroup.addChild(recCanvas);
					_mygroup.addChild(text);
					
					addListener(_mygroup);
					

					container.addChild(_mygroup);
					break;
				case "DrawImage":
					var data = instace_list[count].data;
					var imageInstance = new createjs.Bitmap(data.srcImage);
					imageInstance.scaleX = imageInstance.scaleY = data.scaleImage;
					imageInstance.x = data.x;
					imageInstance.y = data.y;
					imageInstance.regX = 250;
					imageInstance.regY = 250;
					imageInstance.rotation = data.rotateImage
					imageInstance.mode = "DrawImage";
					imageInstance.srcImage = data.srcImage;
					addImageEvent(imageInstance);
					container.addChild(imageInstance);
					break;
				case "DrawStamp":
					var data = instace_list[count].data;
					var value = data.stampText;
					var size = data.fontSize ;
					var color = data.fontColor;
					var font = data.fontFont ;
					var font_size_real = data.font_size_real;
					var _myContain = new createjs.Container();
					var raster = {
						x : 0,
						y : 0,
						color : "#FFFFFF",
						src : "",
						scaleX : 1,
						scaleY : 1
					};

					raster.scaleX = data.rasterObjectscaleX;
					raster.scaleY = data.rasterObjectscaleY;
					raster.x = data.rasterObjectX;
					raster.y = data.rasterObjectY;
					raster.color = data.rasterObjectcolor;
					raster.src = data.rasterObjectsrc;

					var _w = data.rasterWidthVal;
					var _h = data.rasterHeightVal;

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
					stamp.x = data.stampX;
					stamp.y = data.stampY;
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
					addStampListener(_myContain);
					//setStampColor(textarea, span);
					break;
			}
		}
		btnPen_lineClick();
	return true;
    }catch(ex){
		return false;
	}
}