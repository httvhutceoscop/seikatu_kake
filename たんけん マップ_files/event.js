//btnPen_line,btnPen_curve,btnMoji_size1,btnMoji_size2,btnMoji_size3,btnMichi_line,btnMichi_curve,btnKawa_line,btnKawa_curve,btnSenro_line,btnSenro_curve,btnSenro_1,btnSenro_2,button12,button13,button19,button14,button15,button16,buttonsticker,save,load,button20,btnMichi_size1,btnMichi_size2,btnMichi_size3,btnKawa_size1,btnKawa_size2,btnKawa_size3,buttonColor1,buttonColor2,buttonCloseTab1,buttonCloseTab2,buttonCloseTab3,buttonCloseTab4,buttonSpan_show,button27,button28,button29,button30,button31,button32,buttonCloseColorTab,buttonCancel,buttonOK,buttonCloseTab5

var lockHover = false;
var tmpTarget ;
var _tmpTargetResetTab="";
var tabTarget = undefined;
var _lockMenu = false;
var _buttonColorClick = "";
var _lockDragLine = false;
var _deleteEnable = false;
var textflag=false;
var stampflag=false;
var imageflag=false;
var STROKE_WIDTH = {
	_1: 7,
	_2 : 13,
	_3 : 20
}

var index_select = 0;



$(document).ready(function() {
	//init
	preInstallLoad();
	btnMichi_size2Click();
	btnKawa_size2Click();
	btnMichi_lineClick();
	btnSenro_1Click();
	setHoverButton1("#img9");
	for(var i=9;i<47;i++){
	setHoverButton1("#img"+i+"");
	}
	//$("svg").bind('touchmove', false);
	$("#listview_dialog_mask").bind('touchmove', false);
	
	if(!useIE10){
		$("#svg").css("z-index", 10000);
	}
	
    $("#bodyID").mouseup(function(event) {
		if(lockHover && detectmob() != 1 && detectmob() != 3){
			setHoverButton("#"+getIdButton(tmpTarget)+"_hover",false);
			lockHover = false;
		}
		if (event.which == 3 || event.which == 2) {
            return;
        }
		
		if(tabTarget != undefined){
			if(!$(tabTarget).is("input")){
				$(tabTarget).hide();
				$("#"+tabTarget[0].id.replace("tab","hover")).hide();
			}
			tabTarget = undefined;
		}
    });
	
    $("#bodyID").mousedown(function() {
		lockHover = true;
    });

	document.getElementById("svg").addEventListener("MSPointerDown", function (event) {
		if (textflag) {
			if (!textclick) {
				CreateText(canvas, event);
			}
			isTextNoFlag(canvas, event);
		} else if (imageflag) {
			saveImageToCavasNoFlag();
		}
	},false)
	
	document.getElementById("svg").addEventListener("touchstart", function (event) {	
		if (textflag) {
			if (!textclick) {
				var _event = event;
				CreateText(canvas, _event);
			}
			isTextNoFlag(canvas, _event);
		} else if (imageflag) {
			saveImageToCavasNoFlag();
		}
	});
	
	var is_touch_move = false;
	var scroll_val = 0;

	$('#list_view ul').on('touchmove', function(event) {	
		var temp = $('#list_view ul').scrollTop();
		if(temp != scroll_val){
			is_touch_move = true;
		}
	});
	$('#list_view').on('touchend', 'li', function(event) {	
		
		if(!is_touch_move){
			$('#list_view li').each(function(){
				$(this).css("background-color","#ffffff");
			});
			
			$(this).css("background-color","#337ab7");
		}
		is_touch_move = false;
		scroll_val = $('#list_view ul').scrollTop();
	});
	
	document.getElementById("load_ipad_ok").addEventListener("touchend", function (event) {	
		index_select = -1;
		$('#list_view li').each(function(index){
			var color_background = $(this).css("background-color");
			if( color_background == "#337ab7" || color_background == "rgb(51, 122, 183)"){
				index_select = index;
				hideAllPopup();
				$("#svg_message").show();
				$("#loadmessage").show();
				$("#btn_message_cancel").show();
				$("#btn_message_ok").show();
				return false;
			}
		});
		
		$('#list_view li').remove()
		$("#listview_dialog").hide();
	});
	
	document.getElementById("load_ipad_cancel").addEventListener("touchend", function (event) {	
		$('#list_view li').remove()
		$("#listview_dialog").hide();
	});
	
	/* 
		uncomment if use interact
	*/
	if(isIE11){
		document.addEventListener("MSPointerUp",function(){
			interact.stop();
			if(window.callPointerUp)
				window.callPointerUp();
		});
	}
});
document.getElementById("bodyID" ).addEventListener("MSPointerDown", function (event) {
		var mouse = new Point();
		
		mouse = $utils.getTrueCoor(event.pageX, event.pageY);
		var moX = mouse[0];
		var moY = mouse[1];
		$("#mouseEffect").show();
		$("#mycircle").attr("cx", moX );
		$("#mycircle").attr("cy", moY );
		scaleMouse();
	}, false); 
	
	$("#bodyID").mousedown(function(event) {
		var mouse = new Point();
		
		mouse = $utils.getTrueCoor(event.pageX, event.pageY);
		var moX = mouse[0];
		var moY = mouse[1];
		$("#mouseEffect").show();
		$("#mycircle").attr("cx", moX );
		$("#mycircle").attr("cy", moY );
		scaleMouse();
    });
	 document.body.addEventListener('touchstart',function(e){

		var mouse = new Point();
					var left = e.touches[0].pageX;
					var top = e.touches[0].pageY;
		mouse = $utils.getTrueCoor(left, top);
		var moX = mouse[0];
		var moY = mouse[1];
		$("#mouseEffect").show();
		$("#mycircle").attr("cx", moX );
		$("#mycircle").attr("cy", moY );
		scaleMouse();
		
		

    });
	var r=10;
	function scaleMouse(){
		r=r*1.05;
		$("#mycircle").attr("r", r);
		animate = setTimeout(scaleMouse,20);
		if(r>15){
			clearTimeout(animate);
			r=10;
			$("#mouseEffect").hide();
		}
	}
var getStroke = function(_listItem){
	for(var i = 0 ; i < _listItem.length ; i++){
		if($(_listItem[i]).css("display") != "none"){
			switch(i){
				case 0 : return STROKE_WIDTH._1;
				case 1 : return STROKE_WIDTH._2;
				case 2 : return STROKE_WIDTH._3;
			}
		}
	}
}
var setHoverButton1 = function(_hover){
		$(_hover).mouseover(function() { 
			 $(_hover).attr("opacity", "0.7"); 
		});
		$(_hover).mouseout(function() { 
			 $(_hover).attr("opacity", "1"); 
		});
	}
var _listItemRow1 = ["#btnPen_line_active", "#btnPen_curve_active"];
var _listItemRow2 = ["#btnMoji_size1_active", "#btnMoji_size2_active", "#btnMoji_size3_active"];
var _listItemRow3 = ["#btnMichi_line_active", "#btnMichi_curve_active"];
var _listItemRow4 = ["#btnKawa_line_active", "#btnKawa_curve_active"];
var _listItemRow5 = ["#btnSenro_line_active", "#btnSenro_curve_active"];
var _listItemRow6 = ["#button14_active"];

var _listItemRightRow3 = ["#btnMichi_size1_active","#btnMichi_size2_active","#btnMichi_size3_active"];
var _listItemRightRow4 = ["#btnKawa_size1_active","#btnKawa_size2_active","#btnKawa_size3_active"];

var _listAllItem = _listItemRow1.concat(_listItemRow2).concat(_listItemRow3).concat(_listItemRow4).concat(_listItemRow5).concat(_listItemRow6);

var isShow = function(_item){
	return $(_item).css("display") != "none";
}

var getColorOfItem = function(_item){
	return $(_item).attr("fill");
}

var getIdButton= function(_id){
	if(_id==undefined) return "";
	return _id.replace("_event","");
}

var setHoverButton = function(_hover, _bool){
	if(_bool){
		$("#bodyID").css("cursor","default");
		$(_hover).show();
	} else {
		$("#bodyID").css("cursor","default");
		$(_hover).hide();
	}
}

function hideList(listItem){
	for(var i = 0 ; i < listItem.length ; i++){
		$(listItem[i]).hide();
	}
}

var tmpMode = undefined;

$("#btn_message_cancel").mouseup(function(event){
	if(event.which == 1){
		$("#fileInputReset").click();
		$("#svg_message").hide();	
		$(tmpMode).show();
	}
});

document.getElementById("btn_message_cancel").addEventListener("touchend", function (event) {
	$("#fileInputReset").click();
	$("#svg_message").hide();
	$(tmpMode).show();
},false);

document.getElementById("btn_message_cancel").addEventListener("mouseover",function(){
	$("#btn_message_cancel_hover").show();
});

document.getElementById("btn_message_cancel").addEventListener("mouseout", function(){
	$("#btn_message_cancel_hover").hide();
});

$("#btn_message_ok").mouseup(function(event){
	if(event.which == 1){
		if(!isiPad){
			loadStart();
		}else{
			if(index_select != -1){
				loadLocalStogare(index_select);
			}
			hideAllPopup();
			$("#loadfilesuccess").show();
			$("#btnClosePopup").show();
		}
	}
});

document.getElementById("btn_message_ok").addEventListener("touchend", function (event) {
	if(!isiPad){
			loadStart();
	}else{
		if(index_select != -1){
			loadLocalStogare(index_select);
			hideAllPopup();
			$("#loadfilesuccess").show();
			$("#btnClosePopup").show();
		}
	}
},false);

document.getElementById("btn_message_ok").addEventListener("mouseover",function(){
	$("#btn_message_ok_hover").show();
});

document.getElementById("btn_message_ok").addEventListener("mouseout", function(){
	$("#btn_message_ok_hover").hide();
});

$("#btnClosePopup").mouseup(function(event){
	if(event.which == 1){
		$("#svg_message").hide();
		stage1.clear();
		stage1.update();
	}
});

document.getElementById("btnClosePopup").addEventListener("touchend", function (event) {
	$("#svg_message").hide();
	stage1.clear();
	stage1.update();
},false);

document.getElementById("btnClosePopup").addEventListener("mouseover",function(){
	$("#btnClosePopup_hover").show();
});

document.getElementById("btnClosePopup").addEventListener("mouseout", function(){
	$("#btnClosePopup_hover").hide();
});

function helperActive(listItem,_index, _isLeft){
	if(_isLeft){
		_deleteEnable = false;
		hideList(_listItemRow1);
		hideList(_listItemRow2);
		hideList(_listItemRow3);
		hideList(_listItemRow4);
		hideList(_listItemRow5);
		hideList(_listItemRow6);
	}
	
	if(listItem.length != 0)
		tmpMode = undefined;
	if($(listItem[_index]).css("display") == "none"){
		for(var i = 0 ; i < listItem.length ; i++){
			$(listItem[i]).hide();
		}
		tmpMode = listItem[_index];
		$(listItem[_index]).show();
	}
}

//=======================================================
var btnPen_lineClick = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	if(event != undefined)
		setHoverButton("#"+getIdButton(tmpTarget)+"_hover",true);
	// write code below here
	helperActive(["#btnPen_line_active","#btnPen_curve_active"],0,true);
	_lockDragLine = false;
	$drawevent.drawtool = $drawline;
	color = getColorOfItem("#buttonColor1_active");
	stroke = 2;
	interact(".candraw").draggable(true);canDraw = true;
	isTextFlagFalse(canvas,event);
	isStampFlagFalse(canvas,event);
	//interact(".candraw").on(false);
}

var btnPen_lineMouseDown = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	tmpTarget = event.target.id;
	lockHover = true;
    document.getElementById("btnPen_line_event").addEventListener("click", btnPen_lineClick);
    document.getElementById("btnPen_line_event").addEventListener("mouseup", btnPen_lineMouseUp);
}

var btnPen_lineMouseUp = function(event){
	setHoverButton("#"+getIdButton(tmpTarget)+"_hover",false);
	setHoverButton("#btnPen_line_hover",true);
	lockHover = false;
}

var btnPen_lineMouseOver = function(event) {
	if(!lockHover){
		tmpTarget = event.target.id;
		_tmpTargetResetTab = event.target.id;
		setHoverButton("#btnPen_line_hover",true);
	}
	document.getElementById("btnPen_line_event").addEventListener("mouseout", btnPen_lineMouseOut);
	document.getElementById("btnPen_line_event").addEventListener("mousedown", btnPen_lineMouseDown);
}

var btnPen_lineMouseOut = function(event) {
	_tmpTargetResetTab = "";
	try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	removeBtnPen_lineEvent();
	if(!lockHover){
		var _tabId = (tabTarget != undefined) ? tabTarget[0].id : "";
		_tabId=_tabId.replace("_tab","_event");
		if(_tabId == event.target.id) {
			$("#svg").css("cursor","");
			return;
		}
		setHoverButton("#btnPen_line_hover",false);
	}
}

var addBtnPen_lineEvent = function() {
    document.getElementById("btnPen_line_event").addEventListener("mouseover", btnPen_lineMouseOver);
	document.getElementById("btnPen_line_event").addEventListener("mousedown", btnPen_lineMouseDown);
	document.getElementById("btnPen_line_event").addEventListener("mouseup", btnPen_lineMouseUp);
}

var removeBtnPen_lineEvent = function() {
    document.getElementById("btnPen_line_event").removeEventListener("click", btnPen_lineClick);
    document.getElementById("btnPen_line_event").removeEventListener("mouseout", btnPen_lineMouseOut);
}

addBtnPen_lineEvent();
//=======================================================
var btnPen_curveClick = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	if(event != undefined)
		setHoverButton("#"+getIdButton(tmpTarget)+"_hover",true);
	// write code below here
	helperActive(["#btnPen_line_active","#btnPen_curve_active"],1,true);
	$drawevent.drawtool = $drawfree;
	color = getColorOfItem("#buttonColor1_active");
	stroke = 2;
	interact(".candraw").draggable(true);canDraw = true;
	_lockDragLine = false;
	isTextFlagFalse(canvas,event);
	isStampFlagFalse(canvas,event);
	interact(".candraw").on(false);
}

var btnPen_curveMouseDown = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	tmpTarget = event.target.id;
	lockHover = true;
    document.getElementById("btnPen_curve_event").addEventListener("click", btnPen_curveClick);
    document.getElementById("btnPen_curve_event").addEventListener("mouseup", btnPen_curveMouseUp);
}

var btnPen_curveMouseUp = function(event){
	setHoverButton("#"+getIdButton(tmpTarget)+"_hover",false);
	setHoverButton("#btnPen_curve_hover",true);
	lockHover = false;
}

var btnPen_curveMouseOver = function(event) {
	if(!lockHover){
		tmpTarget = event.target.id;
		_tmpTargetResetTab = event.target.id;
		setHoverButton("#btnPen_curve_hover",true);
	}
	document.getElementById("btnPen_curve_event").addEventListener("mouseout", btnPen_curveMouseOut);
	document.getElementById("btnPen_curve_event").addEventListener("mousedown", btnPen_curveMouseDown);
}

var btnPen_curveMouseOut = function(event) {
	_tmpTargetResetTab = "";
	try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	removeBtnPen_curveEvent();
	if(!lockHover){
		var _tabId = (tabTarget != undefined) ? tabTarget[0].id : "";
		_tabId=_tabId.replace("_tab","_event");
		if(_tabId == event.target.id) {
			$("#svg").css("cursor","");
			return;
		}
		setHoverButton("#btnPen_curve_hover",false);
	}
}

var addBtnPen_curveEvent = function() {
    document.getElementById("btnPen_curve_event").addEventListener("mouseover", btnPen_curveMouseOver);
	document.getElementById("btnPen_curve_event").addEventListener("mousedown", btnPen_curveMouseDown);
	document.getElementById("btnPen_curve_event").addEventListener("mouseup", btnPen_curveMouseUp);
}

var removeBtnPen_curveEvent = function() {
    document.getElementById("btnPen_curve_event").removeEventListener("click", btnPen_curveClick);
    document.getElementById("btnPen_curve_event").removeEventListener("mouseout", btnPen_curveMouseOut);
}

addBtnPen_curveEvent();
//=======================================================
var btnMoji_size1Click = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	if(event != undefined)
		setHoverButton("#"+getIdButton(tmpTarget)+"_hover",true);
	// write code below here
	helperActive(["#btnMoji_size1_active","#btnMoji_size2_active","#btnMoji_size3_active"],0,true);
	interact(".candraw").draggable(false);
	_lockDragLine = true;
	textflag = true;
	text1(".candraw");
	isImageFlagFalse();
	isStampFlagFalse(canvas, event);
}

var btnMoji_size1MouseDown = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	tmpTarget = event.target.id;
	lockHover = true;
    document.getElementById("btnMoji_size1_event").addEventListener("click", btnMoji_size1Click);
    document.getElementById("btnMoji_size1_event").addEventListener("mouseup", btnMoji_size1MouseUp);
}

var btnMoji_size1MouseUp = function(event){
	setHoverButton("#"+getIdButton(tmpTarget)+"_hover",false);
	setHoverButton("#btnMoji_size1_hover",true);
	lockHover = false;
}

var btnMoji_size1MouseOver = function(event) {
	if(!lockHover){
		tmpTarget = event.target.id;
		_tmpTargetResetTab = event.target.id;
		setHoverButton("#btnMoji_size1_hover",true);
	}
	document.getElementById("btnMoji_size1_event").addEventListener("mouseout", btnMoji_size1MouseOut);
	document.getElementById("btnMoji_size1_event").addEventListener("mousedown", btnMoji_size1MouseDown);
}

var btnMoji_size1MouseOut = function(event) {
	_tmpTargetResetTab = "";
	try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	removeBtnMoji_size1Event();
	if(!lockHover){
		var _tabId = (tabTarget != undefined) ? tabTarget[0].id : "";
		_tabId=_tabId.replace("_tab","_event");
		if(_tabId == event.target.id) {
			$("#svg").css("cursor","");
			return;
		}
		setHoverButton("#btnMoji_size1_hover",false);
	}
}

var addBtnMoji_size1Event = function() {
    document.getElementById("btnMoji_size1_event").addEventListener("mouseover", btnMoji_size1MouseOver);
	document.getElementById("btnMoji_size1_event").addEventListener("mousedown", btnMoji_size1MouseDown);
	document.getElementById("btnMoji_size1_event").addEventListener("mouseup", btnMoji_size1MouseUp);
}

var removeBtnMoji_size1Event = function() {
    document.getElementById("btnMoji_size1_event").removeEventListener("click", btnMoji_size1Click);
    document.getElementById("btnMoji_size1_event").removeEventListener("mouseout", btnMoji_size1MouseOut);
}

addBtnMoji_size1Event();
//=======================================================
var btnMoji_size2Click = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	if(event != undefined)
		setHoverButton("#"+getIdButton(tmpTarget)+"_hover",true);
	// write code below here
	helperActive(["#btnMoji_size1_active","#btnMoji_size2_active","#btnMoji_size3_active"],1,true);
	interact(".candraw").draggable(false);
	_lockDragLine = true;
	textflag=true;
	text1(".candraw");
	isImageFlagFalse();
	isStampFlagFalse(canvas,event);
}

var btnMoji_size2MouseDown = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	tmpTarget = event.target.id;
	lockHover = true;
    document.getElementById("btnMoji_size2_event").addEventListener("click", btnMoji_size2Click);
    document.getElementById("btnMoji_size2_event").addEventListener("mouseup", btnMoji_size2MouseUp);
}

var btnMoji_size2MouseUp = function(event){
	setHoverButton("#"+getIdButton(tmpTarget)+"_hover",false);
	setHoverButton("#btnMoji_size2_hover",true);
	lockHover = false;
}

var btnMoji_size2MouseOver = function(event) {
	if(!lockHover){
		tmpTarget = event.target.id;
		_tmpTargetResetTab = event.target.id;
		setHoverButton("#btnMoji_size2_hover",true);
	}
	document.getElementById("btnMoji_size2_event").addEventListener("mouseout", btnMoji_size2MouseOut);
	document.getElementById("btnMoji_size2_event").addEventListener("mousedown", btnMoji_size2MouseDown);
}

var btnMoji_size2MouseOut = function(event) {
	_tmpTargetResetTab = "";
	try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	removeBtnMoji_size2Event();
	if(!lockHover){
		var _tabId = (tabTarget != undefined) ? tabTarget[0].id : "";
		_tabId=_tabId.replace("_tab","_event");
		if(_tabId == event.target.id) {
			$("#svg").css("cursor","");
			return;
		}
		setHoverButton("#btnMoji_size2_hover",false);
	}
}

var addBtnMoji_size2Event = function() {
    document.getElementById("btnMoji_size2_event").addEventListener("mouseover", btnMoji_size2MouseOver);
	document.getElementById("btnMoji_size2_event").addEventListener("mousedown", btnMoji_size2MouseDown);
	document.getElementById("btnMoji_size2_event").addEventListener("mouseup", btnMoji_size2MouseUp);
}

var removeBtnMoji_size2Event = function() {
    document.getElementById("btnMoji_size2_event").removeEventListener("click", btnMoji_size2Click);
    document.getElementById("btnMoji_size2_event").removeEventListener("mouseout", btnMoji_size2MouseOut);
}

addBtnMoji_size2Event();
//=======================================================
var btnMoji_size3Click = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	if(event != undefined)
		setHoverButton("#"+getIdButton(tmpTarget)+"_hover",true);
	// write code below here
	helperActive(["#btnMoji_size1_active","#btnMoji_size2_active","#btnMoji_size3_active"],2,true);
	interact(".candraw").draggable(false);
	_lockDragLine = true;
	textflag=true;
	text1(".candraw");
	isImageFlagFalse();
	isStampFlagFalse(canvas,event);
}

var btnMoji_size3MouseDown = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	tmpTarget = event.target.id;
	lockHover = true;
    document.getElementById("btnMoji_size3_event").addEventListener("click", btnMoji_size3Click);
    document.getElementById("btnMoji_size3_event").addEventListener("mouseup", btnMoji_size3MouseUp);
}

var btnMoji_size3MouseUp = function(event){
	setHoverButton("#"+getIdButton(tmpTarget)+"_hover",false);
	setHoverButton("#btnMoji_size3_hover",true);
	lockHover = false;
}

var btnMoji_size3MouseOver = function(event) {
	if(!lockHover){
		tmpTarget = event.target.id;
		_tmpTargetResetTab = event.target.id;
		setHoverButton("#btnMoji_size3_hover",true);
	}
	document.getElementById("btnMoji_size3_event").addEventListener("mouseout", btnMoji_size3MouseOut);
	document.getElementById("btnMoji_size3_event").addEventListener("mousedown", btnMoji_size3MouseDown);
}

var btnMoji_size3MouseOut = function(event) {
	_tmpTargetResetTab = "";
	try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	removeBtnMoji_size3Event();
	if(!lockHover){
		var _tabId = (tabTarget != undefined) ? tabTarget[0].id : "";
		_tabId=_tabId.replace("_tab","_event");
		if(_tabId == event.target.id) {
			$("#svg").css("cursor","");
			return;
		}
		setHoverButton("#btnMoji_size3_hover",false);
	}
}

var addBtnMoji_size3Event = function() {
    document.getElementById("btnMoji_size3_event").addEventListener("mouseover", btnMoji_size3MouseOver);
	document.getElementById("btnMoji_size3_event").addEventListener("mousedown", btnMoji_size3MouseDown);
	document.getElementById("btnMoji_size3_event").addEventListener("mouseup", btnMoji_size3MouseUp);
}

var removeBtnMoji_size3Event = function() {
    document.getElementById("btnMoji_size3_event").removeEventListener("click", btnMoji_size3Click);
    document.getElementById("btnMoji_size3_event").removeEventListener("mouseout", btnMoji_size3MouseOut);
}

addBtnMoji_size3Event();
//=======================================================
var btnMichi_lineClick = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	if(event != undefined)
		setHoverButton("#"+getIdButton(tmpTarget)+"_hover",true);
	// write code below here
	helperActive(["#btnMichi_line_active","#btnMichi_curve_active"],0,true);
	color = "#777777";
	stroke = getStroke(_listItemRightRow3);
	interact(".candraw").draggable(true);canDraw = true;
	_lockDragLine = false;
	$drawevent.drawtool = $drawline;
	isTextFlagFalse(canvas,event);
	isStampFlagFalse(canvas,event);
	isImageFlagFalse();
	interact(".candraw").on(false);
}

var btnMichi_lineMouseDown = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	tmpTarget = event.target.id;
	lockHover = true;
    document.getElementById("btnMichi_line_event").addEventListener("click", btnMichi_lineClick);
    document.getElementById("btnMichi_line_event").addEventListener("mouseup", btnMichi_lineMouseUp);
}

var btnMichi_lineMouseUp = function(event){
	setHoverButton("#"+getIdButton(tmpTarget)+"_hover",false);
	setHoverButton("#btnMichi_line_hover",true);
	lockHover = false;
}

var btnMichi_lineMouseOver = function(event) {
	if(!lockHover){
		tmpTarget = event.target.id;
		_tmpTargetResetTab = event.target.id;
		setHoverButton("#btnMichi_line_hover",true);
	}
	document.getElementById("btnMichi_line_event").addEventListener("mouseout", btnMichi_lineMouseOut);
	document.getElementById("btnMichi_line_event").addEventListener("mousedown", btnMichi_lineMouseDown);
}

var btnMichi_lineMouseOut = function(event) {
	_tmpTargetResetTab = "";
	try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	removeBtnMichi_lineEvent();
	if(!lockHover){
		var _tabId = (tabTarget != undefined) ? tabTarget[0].id : "";
		_tabId=_tabId.replace("_tab","_event");
		if(_tabId == event.target.id) {
			$("#svg").css("cursor","");
			return;
		}
		setHoverButton("#btnMichi_line_hover",false);
	}
}

var addBtnMichi_lineEvent = function() {
    document.getElementById("btnMichi_line_event").addEventListener("mouseover", btnMichi_lineMouseOver);
	document.getElementById("btnMichi_line_event").addEventListener("mousedown", btnMichi_lineMouseDown);
	document.getElementById("btnMichi_line_event").addEventListener("mouseup", btnMichi_lineMouseUp);
}

var removeBtnMichi_lineEvent = function() {
    document.getElementById("btnMichi_line_event").removeEventListener("click", btnMichi_lineClick);
    document.getElementById("btnMichi_line_event").removeEventListener("mouseout", btnMichi_lineMouseOut);
}

addBtnMichi_lineEvent();
//=======================================================
var btnMichi_curveClick = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	if(event != undefined)
		setHoverButton("#"+getIdButton(tmpTarget)+"_hover",true);
	// write code below here
	helperActive(["#btnMichi_line_active","#btnMichi_curve_active"],1,true);
	$drawevent.drawtool = $drawfree;
	color = "#777777";
	stroke = getStroke(_listItemRightRow3);
	interact(".candraw").draggable(true);canDraw = true;
	_lockDragLine = false;
	isTextFlagFalse(canvas,event);
	isStampFlagFalse(canvas,event);
	isImageFlagFalse();
	interact(".candraw").on(false);
}

var btnMichi_curveMouseDown = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	tmpTarget = event.target.id;
	lockHover = true;
    document.getElementById("btnMichi_curve_event").addEventListener("click", btnMichi_curveClick);
    document.getElementById("btnMichi_curve_event").addEventListener("mouseup", btnMichi_curveMouseUp);
}

var btnMichi_curveMouseUp = function(event){
	setHoverButton("#"+getIdButton(tmpTarget)+"_hover",false);
	setHoverButton("#btnMichi_curve_hover",true);
	lockHover = false;
}

var btnMichi_curveMouseOver = function(event) {
	if(!lockHover){
		tmpTarget = event.target.id;
		_tmpTargetResetTab = event.target.id;
		setHoverButton("#btnMichi_curve_hover",true);
	}
	document.getElementById("btnMichi_curve_event").addEventListener("mouseout", btnMichi_curveMouseOut);
	document.getElementById("btnMichi_curve_event").addEventListener("mousedown", btnMichi_curveMouseDown);
}

var btnMichi_curveMouseOut = function(event) {
	_tmpTargetResetTab = "";
	try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	removeBtnMichi_curveEvent();
	if(!lockHover){
		var _tabId = (tabTarget != undefined) ? tabTarget[0].id : "";
		_tabId=_tabId.replace("_tab","_event");
		if(_tabId == event.target.id) {
			$("#svg").css("cursor","");
			return;
		}
		setHoverButton("#btnMichi_curve_hover",false);
	}
}

var addBtnMichi_curveEvent = function() {
    document.getElementById("btnMichi_curve_event").addEventListener("mouseover", btnMichi_curveMouseOver);
	document.getElementById("btnMichi_curve_event").addEventListener("mousedown", btnMichi_curveMouseDown);
	document.getElementById("btnMichi_curve_event").addEventListener("mouseup", btnMichi_curveMouseUp);
}

var removeBtnMichi_curveEvent = function() {
    document.getElementById("btnMichi_curve_event").removeEventListener("click", btnMichi_curveClick);
    document.getElementById("btnMichi_curve_event").removeEventListener("mouseout", btnMichi_curveMouseOut);
}

addBtnMichi_curveEvent();
//=======================================================
var btnKawa_lineClick = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	if(event != undefined)
		setHoverButton("#"+getIdButton(tmpTarget)+"_hover",true);
	// write code below here
	helperActive(["#btnKawa_line_active","#btnKawa_curve_active"],0,true);
	$drawevent.drawtool = $drawline;
	color = "#56a9ff";
	stroke = getStroke(_listItemRightRow4);
	interact(".candraw").draggable(true);
	canDraw = true;
	_lockDragLine = false;
	isTextFlagFalse(canvas,event);
	isStampFlagFalse(canvas,event);
	isImageFlagFalse();
	interact(".candraw").on(false);
}

var btnKawa_lineMouseDown = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	tmpTarget = event.target.id;
	lockHover = true;
    document.getElementById("btnKawa_line_event").addEventListener("click", btnKawa_lineClick);
    document.getElementById("btnKawa_line_event").addEventListener("mouseup", btnKawa_lineMouseUp);
}

var btnKawa_lineMouseUp = function(event){
	setHoverButton("#"+getIdButton(tmpTarget)+"_hover",false);
	setHoverButton("#btnKawa_line_hover",true);
	lockHover = false;
}

var btnKawa_lineMouseOver = function(event) {
	if(!lockHover){
		tmpTarget = event.target.id;
		_tmpTargetResetTab = event.target.id;
		setHoverButton("#btnKawa_line_hover",true);
	}
	document.getElementById("btnKawa_line_event").addEventListener("mouseout", btnKawa_lineMouseOut);
	document.getElementById("btnKawa_line_event").addEventListener("mousedown", btnKawa_lineMouseDown);
}

var btnKawa_lineMouseOut = function(event) {
	_tmpTargetResetTab = "";
	try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	removeBtnKawa_lineEvent();
	if(!lockHover){
		var _tabId = (tabTarget != undefined) ? tabTarget[0].id : "";
		_tabId=_tabId.replace("_tab","_event");
		if(_tabId == event.target.id) {
			$("#svg").css("cursor","");
			return;
		}
		setHoverButton("#btnKawa_line_hover",false);
	}
}

var addBtnKawa_lineEvent = function() {
    document.getElementById("btnKawa_line_event").addEventListener("mouseover", btnKawa_lineMouseOver);
	document.getElementById("btnKawa_line_event").addEventListener("mousedown", btnKawa_lineMouseDown);
	document.getElementById("btnKawa_line_event").addEventListener("mouseup", btnKawa_lineMouseUp);
}

var removeBtnKawa_lineEvent = function() {
    document.getElementById("btnKawa_line_event").removeEventListener("click", btnKawa_lineClick);
    document.getElementById("btnKawa_line_event").removeEventListener("mouseout", btnKawa_lineMouseOut);
}

addBtnKawa_lineEvent();
//=======================================================
var btnKawa_curveClick = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	if(event != undefined)
		setHoverButton("#"+getIdButton(tmpTarget)+"_hover",true);
	// write code below here
	helperActive(["#btnKawa_line_active","#btnKawa_curve_active"],1,true);
	$drawevent.drawtool = $drawfree;
	color = "#56a9ff";
	stroke = getStroke(_listItemRightRow4);
	interact(".candraw").draggable(true);canDraw = true;
	_lockDragLine = false;
	isTextFlagFalse(canvas,event);
	isStampFlagFalse(canvas,event);
	isImageFlagFalse();
	interact(".candraw").on(false);
}

var btnKawa_curveMouseDown = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	tmpTarget = event.target.id;
	lockHover = true;
    document.getElementById("btnKawa_curve_event").addEventListener("click", btnKawa_curveClick);
    document.getElementById("btnKawa_curve_event").addEventListener("mouseup", btnKawa_curveMouseUp);
}

var btnKawa_curveMouseUp = function(event){
	setHoverButton("#"+getIdButton(tmpTarget)+"_hover",false);
	setHoverButton("#btnKawa_curve_hover",true);
	lockHover = false;
}

var btnKawa_curveMouseOver = function(event) {
	if(!lockHover){
		tmpTarget = event.target.id;
		_tmpTargetResetTab = event.target.id;
		setHoverButton("#btnKawa_curve_hover",true);
	}
	document.getElementById("btnKawa_curve_event").addEventListener("mouseout", btnKawa_curveMouseOut);
	document.getElementById("btnKawa_curve_event").addEventListener("mousedown", btnKawa_curveMouseDown);
}

var btnKawa_curveMouseOut = function(event) {
	_tmpTargetResetTab = "";
	try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	removeBtnKawa_curveEvent();
	if(!lockHover){
		var _tabId = (tabTarget != undefined) ? tabTarget[0].id : "";
		_tabId=_tabId.replace("_tab","_event");
		if(_tabId == event.target.id) {
			$("#svg").css("cursor","");
			return;
		}
		setHoverButton("#btnKawa_curve_hover",false);
	}
}

var addBtnKawa_curveEvent = function() {
    document.getElementById("btnKawa_curve_event").addEventListener("mouseover", btnKawa_curveMouseOver);
	document.getElementById("btnKawa_curve_event").addEventListener("mousedown", btnKawa_curveMouseDown);
	document.getElementById("btnKawa_curve_event").addEventListener("mouseup", btnKawa_curveMouseUp);
}

var removeBtnKawa_curveEvent = function() {
    document.getElementById("btnKawa_curve_event").removeEventListener("click", btnKawa_curveClick);
    document.getElementById("btnKawa_curve_event").removeEventListener("mouseout", btnKawa_curveMouseOut);
}

addBtnKawa_curveEvent();
//=======================================================
var btnSenro_lineClick = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	if(event != undefined)
		setHoverButton("#"+getIdButton(tmpTarget)+"_hover",true);
	// write code below here
	helperActive(["#btnSenro_line_active","#btnSenro_curve_active"],0,true);
	interact(".candraw").draggable(true);canDraw = true;
	_lockDragLine = false;
	if(isShow("#btnSenro_1_active")){
		$drawevent.drawtool = $drawrayline2;
	}
	if(isShow("#btnSenro_2_active")){
		$drawevent.drawtool = $drawrayline;
	}
	isTextFlagFalse(canvas,event);
	isStampFlagFalse(canvas,event);
	isImageFlagFalse();
	interact(".candraw").on(false);
}

var btnSenro_lineMouseDown = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	tmpTarget = event.target.id;
	lockHover = true;
    document.getElementById("btnSenro_line_event").addEventListener("click", btnSenro_lineClick);
    document.getElementById("btnSenro_line_event").addEventListener("mouseup", btnSenro_lineMouseUp);
}

var btnSenro_lineMouseUp = function(event){
	setHoverButton("#"+getIdButton(tmpTarget)+"_hover",false);
	setHoverButton("#btnSenro_line_hover",true);
	lockHover = false;
}

var btnSenro_lineMouseOver = function(event) {
	if(!lockHover){
		tmpTarget = event.target.id;
		_tmpTargetResetTab = event.target.id;
		setHoverButton("#btnSenro_line_hover",true);
	}
	document.getElementById("btnSenro_line_event").addEventListener("mouseout", btnSenro_lineMouseOut);
	document.getElementById("btnSenro_line_event").addEventListener("mousedown", btnSenro_lineMouseDown);
}

var btnSenro_lineMouseOut = function(event) {
	_tmpTargetResetTab = "";
	try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	removeBtnSenro_lineEvent();
	if(!lockHover){
		var _tabId = (tabTarget != undefined) ? tabTarget[0].id : "";
		_tabId=_tabId.replace("_tab","_event");
		if(_tabId == event.target.id) {
			$("#svg").css("cursor","");
			return;
		}
		setHoverButton("#btnSenro_line_hover",false);
	}
}

var addBtnSenro_lineEvent = function() {
    document.getElementById("btnSenro_line_event").addEventListener("mouseover", btnSenro_lineMouseOver);
	document.getElementById("btnSenro_line_event").addEventListener("mousedown", btnSenro_lineMouseDown);
	document.getElementById("btnSenro_line_event").addEventListener("mouseup", btnSenro_lineMouseUp);
}

var removeBtnSenro_lineEvent = function() {
    document.getElementById("btnSenro_line_event").removeEventListener("click", btnSenro_lineClick);
    document.getElementById("btnSenro_line_event").removeEventListener("mouseout", btnSenro_lineMouseOut);
}

addBtnSenro_lineEvent();
//=======================================================
var btnSenro_curveClick = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	if(event != undefined)
		setHoverButton("#"+getIdButton(tmpTarget)+"_hover",true);
	// write code below here
	helperActive(["#btnSenro_line_active","#btnSenro_curve_active"],1,true);
	interact(".candraw").draggable(true);canDraw = true;
	_lockDragLine = false;
	if(isShow("#btnSenro_1_active")){
		$drawevent.drawtool = $drawraylinefree;
	}
	if(isShow("#btnSenro_2_active")){
		$drawevent.drawtool = $drawRayLineProFree;
	}
	isTextFlagFalse(canvas,event);
	isStampFlagFalse(canvas,event);
	isImageFlagFalse();
	interact(".candraw").on(false);
}

var btnSenro_curveMouseDown = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	tmpTarget = event.target.id;
	lockHover = true;
    document.getElementById("btnSenro_curve_event").addEventListener("click", btnSenro_curveClick);
    document.getElementById("btnSenro_curve_event").addEventListener("mouseup", btnSenro_curveMouseUp);
}

var btnSenro_curveMouseUp = function(event){
	setHoverButton("#"+getIdButton(tmpTarget)+"_hover",false);
	setHoverButton("#btnSenro_curve_hover",true);
	lockHover = false;
}

var btnSenro_curveMouseOver = function(event) {
	if(!lockHover){
		tmpTarget = event.target.id;
		_tmpTargetResetTab = event.target.id;
		setHoverButton("#btnSenro_curve_hover",true);
	}
	document.getElementById("btnSenro_curve_event").addEventListener("mouseout", btnSenro_curveMouseOut);
	document.getElementById("btnSenro_curve_event").addEventListener("mousedown", btnSenro_curveMouseDown);
}

var btnSenro_curveMouseOut = function(event) {
	_tmpTargetResetTab = "";
	try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	removeBtnSenro_curveEvent();
	if(!lockHover){
		var _tabId = (tabTarget != undefined) ? tabTarget[0].id : "";
		_tabId=_tabId.replace("_tab","_event");
		if(_tabId == event.target.id) {
			$("#svg").css("cursor","");
			return;
		}
		setHoverButton("#btnSenro_curve_hover",false);
	}
}

var addBtnSenro_curveEvent = function() {
    document.getElementById("btnSenro_curve_event").addEventListener("mouseover", btnSenro_curveMouseOver);
	document.getElementById("btnSenro_curve_event").addEventListener("mousedown", btnSenro_curveMouseDown);
	document.getElementById("btnSenro_curve_event").addEventListener("mouseup", btnSenro_curveMouseUp);
}

var removeBtnSenro_curveEvent = function() {
    document.getElementById("btnSenro_curve_event").removeEventListener("click", btnSenro_curveClick);
    document.getElementById("btnSenro_curve_event").removeEventListener("mouseout", btnSenro_curveMouseOut);
}

addBtnSenro_curveEvent();
//=======================================================
var btnSenro_1Click = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	if(event != undefined)
		setHoverButton("#"+getIdButton(tmpTarget)+"_hover",true);
	// write code below here
	helperActive(["#btnSenro_1_active","#btnSenro_2_active"],0,false);
	if(isShow("#btnSenro_line_active")){
		interact(".candraw").draggable(true);canDraw = true;
		_lockDragLine = false;
		$drawevent.drawtool = $drawrayline2;
	}
	
	if(isShow("#btnSenro_curve_active")){
		interact(".candraw").draggable(true);canDraw = true;
		_lockDragLine = false;
		$drawevent.drawtool = $drawraylinefree;
	}
	isTextFlagFalse(canvas,event);
	isStampFlagFalse(canvas,event);
	isImageFlagFalse();
	interact(".candraw").on(false);
	
}

var btnSenro_1MouseDown = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	tmpTarget = event.target.id;
	lockHover = true;
    document.getElementById("btnSenro_1_event").addEventListener("click", btnSenro_1Click);
    document.getElementById("btnSenro_1_event").addEventListener("mouseup", btnSenro_1MouseUp);
}

var btnSenro_1MouseUp = function(event){
	setHoverButton("#"+getIdButton(tmpTarget)+"_hover",false);
	setHoverButton("#btnSenro_1_hover",true);
	lockHover = false;
}

var btnSenro_1MouseOver = function(event) {
	if(!lockHover){
		tmpTarget = event.target.id;
		_tmpTargetResetTab = event.target.id;
		setHoverButton("#btnSenro_1_hover",true);
	}
	document.getElementById("btnSenro_1_event").addEventListener("mouseout", btnSenro_1MouseOut);
	document.getElementById("btnSenro_1_event").addEventListener("mousedown", btnSenro_1MouseDown);
}

var btnSenro_1MouseOut = function(event) {
	_tmpTargetResetTab = "";
	try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	removeBtnSenro_1Event();
	if(!lockHover){
		var _tabId = (tabTarget != undefined) ? tabTarget[0].id : "";
		_tabId=_tabId.replace("_tab","_event");
		if(_tabId == event.target.id) {
			$("#svg").css("cursor","");
			return;
		}
		setHoverButton("#btnSenro_1_hover",false);
	}
}

var addBtnSenro_1Event = function() {
    document.getElementById("btnSenro_1_event").addEventListener("mouseover", btnSenro_1MouseOver);
	document.getElementById("btnSenro_1_event").addEventListener("mousedown", btnSenro_1MouseDown);
	document.getElementById("btnSenro_1_event").addEventListener("mouseup", btnSenro_1MouseUp);
}

var removeBtnSenro_1Event = function() {
    document.getElementById("btnSenro_1_event").removeEventListener("click", btnSenro_1Click);
    document.getElementById("btnSenro_1_event").removeEventListener("mouseout", btnSenro_1MouseOut);
}

addBtnSenro_1Event();
//=======================================================
var btnSenro_2Click = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	if(event != undefined)
		setHoverButton("#"+getIdButton(tmpTarget)+"_hover",true);
	// write code below here
	helperActive(["#btnSenro_1_active","#btnSenro_2_active"],1,false);
	if(isShow("#btnSenro_line_active")){
		interact(".candraw").draggable(true);canDraw = true;
		_lockDragLine = false;
		$drawevent.drawtool = $drawrayline;
	}
	
	if(isShow("#btnSenro_curve_active")){
		interact(".candraw").draggable(true);canDraw = true;
		_lockDragLine = false;
		$drawevent.drawtool = $drawRayLineProFree;
	}
	isTextFlagFalse(canvas,event);
	isStampFlagFalse(canvas,event);
	interact(".candraw").on(false);
}

var btnSenro_2MouseDown = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	tmpTarget = event.target.id;
	lockHover = true;
    document.getElementById("btnSenro_2_event").addEventListener("click", btnSenro_2Click);
    document.getElementById("btnSenro_2_event").addEventListener("mouseup", btnSenro_2MouseUp);
}

var btnSenro_2MouseUp = function(event){
	setHoverButton("#"+getIdButton(tmpTarget)+"_hover",false);
	setHoverButton("#btnSenro_2_hover",true);
	lockHover = false;
}

var btnSenro_2MouseOver = function(event) {
	if(!lockHover){
		tmpTarget = event.target.id;
		_tmpTargetResetTab = event.target.id;
		setHoverButton("#btnSenro_2_hover",true);
	}
	document.getElementById("btnSenro_2_event").addEventListener("mouseout", btnSenro_2MouseOut);
	document.getElementById("btnSenro_2_event").addEventListener("mousedown", btnSenro_2MouseDown);
}

var btnSenro_2MouseOut = function(event) {
	_tmpTargetResetTab = "";
	try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	removeBtnSenro_2Event();
	if(!lockHover){
		var _tabId = (tabTarget != undefined) ? tabTarget[0].id : "";
		_tabId=_tabId.replace("_tab","_event");
		if(_tabId == event.target.id) {
			$("#svg").css("cursor","");
			return;
		}
		setHoverButton("#btnSenro_2_hover",false);
	}
}

var addBtnSenro_2Event = function() {
    document.getElementById("btnSenro_2_event").addEventListener("mouseover", btnSenro_2MouseOver);
	document.getElementById("btnSenro_2_event").addEventListener("mousedown", btnSenro_2MouseDown);
	document.getElementById("btnSenro_2_event").addEventListener("mouseup", btnSenro_2MouseUp);
}

var removeBtnSenro_2Event = function() {
    document.getElementById("btnSenro_2_event").removeEventListener("click", btnSenro_2Click);
    document.getElementById("btnSenro_2_event").removeEventListener("mouseout", btnSenro_2MouseOut);
}

addBtnSenro_2Event();
//=======================================================
var button12Click = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	if(event != undefined)
		setHoverButton("#"+getIdButton(tmpTarget)+"_hover",true);
	helperActive([],1,true);
	// write code below here
	isTextFlagFalse(canvas,event);
	isStampFlagFalse(canvas,event);
	textflag = false;
	imageflag = true;
	interact(".candraw").on(false);
	interact(".candraw").draggable(false);
	_lockDragLine = true;
	$("#TabFunc2").show();
	$("#bgTabFunction").show();
}

var button12MouseDown = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	tmpTarget = event.target.id;
	lockHover = true;
    document.getElementById("button12_event").addEventListener("click", button12Click);
    document.getElementById("button12_event").addEventListener("mouseup", button12MouseUp);
}

var button12MouseUp = function(event){
	setHoverButton("#"+getIdButton(tmpTarget)+"_hover",false);
	setHoverButton("#button12_hover",true);
	lockHover = false;
}

var button12MouseOver = function(event) {
	if(!lockHover){
		tmpTarget = event.target.id;
		_tmpTargetResetTab = event.target.id;
		setHoverButton("#button12_hover",true);
	}
	document.getElementById("button12_event").addEventListener("mouseout", button12MouseOut);
	document.getElementById("button12_event").addEventListener("mousedown", button12MouseDown);
}

var button12MouseOut = function(event) {
	_tmpTargetResetTab = "";
	try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	removeButton12Event();
	if(!lockHover){
		var _tabId = (tabTarget != undefined) ? tabTarget[0].id : "";
		_tabId=_tabId.replace("_tab","_event");
		if(_tabId == event.target.id) {
			$("#svg").css("cursor","");
			return;
		}
		setHoverButton("#button12_hover",false);
	}
}

var addButton12Event = function() {
    document.getElementById("button12_event").addEventListener("mouseover", button12MouseOver);
	document.getElementById("button12_event").addEventListener("mousedown", button12MouseDown);
	document.getElementById("button12_event").addEventListener("mouseup", button12MouseUp);
}

var removeButton12Event = function() {
    document.getElementById("button12_event").removeEventListener("click", button12Click);
    document.getElementById("button12_event").removeEventListener("mouseout", button12MouseOut);
}

addButton12Event();
//=======================================================
var button13Click = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	if(event != undefined)
		setHoverButton("#"+getIdButton(tmpTarget)+"_hover",true);
	// write code below here
	helperActive([],1,true);
	// write code below here
	isTextFlagFalse(canvas,event);
	isStampFlagFalse(canvas,event);
	textflag = false;
	imageflag = true;
	interact(".candraw").on(false);
	interact(".candraw").draggable(false);
	_lockDragLine = true;
	$("#TabFunc3").show();
	$("#bgTabFunction").show();
}

var button13MouseDown = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	tmpTarget = event.target.id;
	lockHover = true;
    document.getElementById("button13_event").addEventListener("click", button13Click);
    document.getElementById("button13_event").addEventListener("mouseup", button13MouseUp);
}

var button13MouseUp = function(event){
	setHoverButton("#"+getIdButton(tmpTarget)+"_hover",false);
	setHoverButton("#button13_hover",true);
	lockHover = false;
}

var button13MouseOver = function(event) {
	if(!lockHover){
		tmpTarget = event.target.id;
		_tmpTargetResetTab = event.target.id;
		setHoverButton("#button13_hover",true);
	}
	document.getElementById("button13_event").addEventListener("mouseout", button13MouseOut);
	document.getElementById("button13_event").addEventListener("mousedown", button13MouseDown);
}

var button13MouseOut = function(event) {
	_tmpTargetResetTab = "";
	try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	removeButton13Event();
	if(!lockHover){
		var _tabId = (tabTarget != undefined) ? tabTarget[0].id : "";
		_tabId=_tabId.replace("_tab","_event");
		if(_tabId == event.target.id) {
			$("#svg").css("cursor","");
			return;
		}
		setHoverButton("#button13_hover",false);
	}
}

var addButton13Event = function() {
    document.getElementById("button13_event").addEventListener("mouseover", button13MouseOver);
	document.getElementById("button13_event").addEventListener("mousedown", button13MouseDown);
	document.getElementById("button13_event").addEventListener("mouseup", button13MouseUp);
}

var removeButton13Event = function() {
    document.getElementById("button13_event").removeEventListener("click", button13Click);
    document.getElementById("button13_event").removeEventListener("mouseout", button13MouseOut);
}

addButton13Event();
//=======================================================
var button19Click = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	if(event != undefined)
		setHoverButton("#"+getIdButton(tmpTarget)+"_hover",true);
	// write code below here
	helperActive([],1,true);
	// write code below here
	isTextFlagFalse(canvas,event);
	isStampFlagFalse(canvas,event);
	textflag = false;
	imageflag = true;
	interact(".candraw").on(false);
	interact(".candraw").draggable(false);
	_lockDragLine = true;
	$("#TabFunc4").show();
	$("#bgTabFunction").show();
}

var button19MouseDown = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	tmpTarget = event.target.id;
	lockHover = true;
    document.getElementById("button19_event").addEventListener("click", button19Click);
    document.getElementById("button19_event").addEventListener("mouseup", button19MouseUp);
}

var button19MouseUp = function(event){
	setHoverButton("#"+getIdButton(tmpTarget)+"_hover",false);
	setHoverButton("#button19_hover",true);
	lockHover = false;
}

var button19MouseOver = function(event) {
	if(!lockHover){
		tmpTarget = event.target.id;
		_tmpTargetResetTab = event.target.id;
		setHoverButton("#button19_hover",true);
	}
	document.getElementById("button19_event").addEventListener("mouseout", button19MouseOut);
	document.getElementById("button19_event").addEventListener("mousedown", button19MouseDown);
}

var button19MouseOut = function(event) {
	_tmpTargetResetTab = "";
	try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	removeButton19Event();
	if(!lockHover){
		var _tabId = (tabTarget != undefined) ? tabTarget[0].id : "";
		_tabId=_tabId.replace("_tab","_event");
		if(_tabId == event.target.id) {
			$("#svg").css("cursor","");
			return;
		}
		setHoverButton("#button19_hover",false);
	}
}

var addButton19Event = function() {
    document.getElementById("button19_event").addEventListener("mouseover", button19MouseOver);
	document.getElementById("button19_event").addEventListener("mousedown", button19MouseDown);
	document.getElementById("button19_event").addEventListener("mouseup", button19MouseUp);
}

var removeButton19Event = function() {
    document.getElementById("button19_event").removeEventListener("click", button19Click);
    document.getElementById("button19_event").removeEventListener("mouseout", button19MouseOut);
}

addButton19Event();
//=======================================================
var button14Click = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	if(event != undefined)
		setHoverButton("#"+getIdButton(tmpTarget)+"_hover",true);
	// write code below here
	helperActive(["#button14_active"],0,true);
	_deleteEnable = true;
	_lockDragLine = false;
	interact(".candraw").draggable(false);
	isTextFlagFalse(canvas,event);
	isStampFlagFalse(canvas,event);
	isImageFlagFalse();
	interact(".candraw").on(false);
}

var button14MouseDown = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	tmpTarget = event.target.id;
	lockHover = true;
    document.getElementById("button14_event").addEventListener("click", button14Click);
    document.getElementById("button14_event").addEventListener("mouseup", button14MouseUp);
}

var button14MouseUp = function(event){
	setHoverButton("#"+getIdButton(tmpTarget)+"_hover",false);
	setHoverButton("#button14_hover",true);
	lockHover = false;
}

var button14MouseOver = function(event) {
	if(!lockHover){
		tmpTarget = event.target.id;
		_tmpTargetResetTab = event.target.id;
		setHoverButton("#button14_hover",true);
	}
	document.getElementById("button14_event").addEventListener("mouseout", button14MouseOut);
	document.getElementById("button14_event").addEventListener("mousedown", button14MouseDown);
}

var button14MouseOut = function(event) {
	_tmpTargetResetTab = "";
	try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	removeButton14Event();
	if(!lockHover){
		var _tabId = (tabTarget != undefined) ? tabTarget[0].id : "";
		_tabId=_tabId.replace("_tab","_event");
		if(_tabId == event.target.id) {
			$("#svg").css("cursor","");
			return;
		}
		setHoverButton("#button14_hover",false);
	}
}

var addButton14Event = function() {
    document.getElementById("button14_event").addEventListener("mouseover", button14MouseOver);
	document.getElementById("button14_event").addEventListener("mousedown", button14MouseDown);
	document.getElementById("button14_event").addEventListener("mouseup", button14MouseUp);
}

var removeButton14Event = function() {
    document.getElementById("button14_event").removeEventListener("click", button14Click);
    document.getElementById("button14_event").removeEventListener("mouseout", button14MouseOut);
}

addButton14Event();
//=======================================================
var button15Click = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	if(event != undefined)
		setHoverButton("#"+getIdButton(tmpTarget)+"_hover",true);
	// write code below here
	isTextNoFlag(canvas, event);
	isStampNoFlag(canvas, event);
	saveImageToCavasNoFlag();
	$("#deleteFrame").show();
}

var button15MouseDown = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	tmpTarget = event.target.id;
	lockHover = true;
    document.getElementById("button15_event").addEventListener("click", button15Click);
    document.getElementById("button15_event").addEventListener("mouseup", button15MouseUp);
}

var button15MouseUp = function(event){
	setHoverButton("#"+getIdButton(tmpTarget)+"_hover",false);
	setHoverButton("#button15_hover",true);
	lockHover = false;
}

var button15MouseOver = function(event) {
	if(!lockHover){
		tmpTarget = event.target.id;
		_tmpTargetResetTab = event.target.id;
		setHoverButton("#button15_hover",true);
	}
	document.getElementById("button15_event").addEventListener("mouseout", button15MouseOut);
	document.getElementById("button15_event").addEventListener("mousedown", button15MouseDown);
}

var button15MouseOut = function(event) {
	_tmpTargetResetTab = "";
	try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	removeButton15Event();
	if(!lockHover){
		var _tabId = (tabTarget != undefined) ? tabTarget[0].id : "";
		_tabId=_tabId.replace("_tab","_event");
		if(_tabId == event.target.id) {
			$("#svg").css("cursor","");
			return;
		}
		setHoverButton("#button15_hover",false);
	}
}

var addButton15Event = function() {
    document.getElementById("button15_event").addEventListener("mouseover", button15MouseOver);
	document.getElementById("button15_event").addEventListener("mousedown", button15MouseDown);
	document.getElementById("button15_event").addEventListener("mouseup", button15MouseUp);
}

var removeButton15Event = function() {
    document.getElementById("button15_event").removeEventListener("click", button15Click);
    document.getElementById("button15_event").removeEventListener("mouseout", button15MouseOut);
}

addButton15Event();
//=======================================================
var button16Click = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	if(event != undefined)
		setHoverButton("#"+getIdButton(tmpTarget)+"_hover",true);
	// write code below here
	helperActive([],1,true);
	isTextFlagFalse(canvas,event);
	isStampFlagFalse(canvas,event);
	isImageFlagFalse();
	interact(".candraw").on(false);
	var dataURL = document.getElementById("canvas1").toDataURL();
	$("#canvasImage").attr("width", trueWidth);
	$("#canvasImage").attr("height", trueHeight);
	$("#canvasImage").attr("src", dataURL);
	$("#printer").show();
	$.print("#printer");
	$("#printer").hide();
	$("#canvasImage").attr("src", "");
}

var button16MouseDown = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	tmpTarget = event.target.id;
	lockHover = true;
    document.getElementById("button16_event").addEventListener("click", button16Click);
    document.getElementById("button16_event").addEventListener("mouseup", button16MouseUp);
}

var button16MouseUp = function(event){
	setHoverButton("#"+getIdButton(tmpTarget)+"_hover",false);
	setHoverButton("#button16_hover",true);
	lockHover = false;
}

var button16MouseOver = function(event) {
	if(!lockHover){
		tmpTarget = event.target.id;
		_tmpTargetResetTab = event.target.id;
		setHoverButton("#button16_hover",true);
	}
	document.getElementById("button16_event").addEventListener("mouseout", button16MouseOut);
	document.getElementById("button16_event").addEventListener("mousedown", button16MouseDown);
}

var button16MouseOut = function(event) {
	_tmpTargetResetTab = "";
	try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	removeButton16Event();
	if(!lockHover){
		var _tabId = (tabTarget != undefined) ? tabTarget[0].id : "";
		_tabId=_tabId.replace("_tab","_event");
		if(_tabId == event.target.id) {
			$("#svg").css("cursor","");
			return;
		}
		setHoverButton("#button16_hover",false);
	}
}

var addButton16Event = function() {
    document.getElementById("button16_event").addEventListener("mouseover", button16MouseOver);
	document.getElementById("button16_event").addEventListener("mousedown", button16MouseDown);
	document.getElementById("button16_event").addEventListener("mouseup", button16MouseUp);
}

var removeButton16Event = function() {
    document.getElementById("button16_event").removeEventListener("click", button16Click);
    document.getElementById("button16_event").removeEventListener("mouseout", button16MouseOut);
}

addButton16Event();
//=======================================================
var buttonstickerClick = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
			
    } catch (error) {}
	if(event != undefined)
		setHoverButton("#"+getIdButton(tmpTarget)+"_hover",true);
		helperActive([],1,true);
		$("#TabFunc5").show();
		$("#bgTabFunction").show();	
		isTextFlagFalse(canvas, event);
		isImageFlagFalse();
		textflag = false;
		imageflag = false;
		stampflag = true;
		interact(".candraw").on(false);
		interact(".candraw").draggable(false);
		_lockDragLine = true;		
}

var buttonstickerMouseDown = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	tmpTarget = event.target.id;
	lockHover = true;
    document.getElementById("buttonsticker_event").addEventListener("click", buttonstickerClick);
    document.getElementById("buttonsticker_event").addEventListener("mouseup", buttonstickerMouseUp);
}

var buttonstickerMouseUp = function(event){
	setHoverButton("#"+getIdButton(tmpTarget)+"_hover",false);
	setHoverButton("#buttonsticker_hover",true);
	lockHover = false;
}

var buttonstickerMouseOver = function(event) {
	
	if(!lockHover){
		tmpTarget = event.target.id;
		_tmpTargetResetTab = event.target.id;
		setHoverButton("#buttonsticker_hover",true);
	}
	document.getElementById("buttonsticker_event").addEventListener("mouseout", buttonstickerMouseOut);
	document.getElementById("buttonsticker_event").addEventListener("mousedown", buttonstickerMouseDown);
}

var buttonstickerMouseOut = function(event) {
	_tmpTargetResetTab = "";
	removebuttonstickerEvent();
	if(!lockHover){
		setHoverButton("#buttonsticker_hover",false);
	}
    
}

var addbuttonstickerEvent = function() {
    document.getElementById("buttonsticker_event").addEventListener("mouseover", buttonstickerMouseOver);
	document.getElementById("buttonsticker_event").addEventListener("mousedown", buttonstickerMouseDown);
	document.getElementById("buttonsticker_event").addEventListener("mouseup", buttonstickerMouseUp);
}

var removebuttonstickerEvent = function() {
    document.getElementById("buttonsticker_event").removeEventListener("click", buttonstickerClick);
    document.getElementById("buttonsticker_event").removeEventListener("mouseout", buttonstickerMouseOut);
}

addbuttonstickerEvent();
//=======================================================
var saveClick = function(event) {

    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}

	// alert(event);

	if(event != undefined)
		setHoverButton("#"+getIdButton(tmpTarget)+"_hover",true);
	// write code below here
	//helperActive([],1,true);
	isTextNoFlag(canvas,event);
	isStampNoFlag(canvas,event);
	saveImageToCavasNoFlag();
	interact(".candraw").on(false);
	saveJson();
}

var saveMouseDown = function(event) {

    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	tmpTarget = event.target.id;
	lockHover = true;
    document.getElementById("save_event").addEventListener("click", saveClick);
    document.getElementById("save_event").addEventListener("mouseup", saveMouseUp);
	// alert('bhiiiiii');
}

var saveMouseUp = function(event){
	setHoverButton("#"+getIdButton(tmpTarget)+"_hover",false);
	setHoverButton("#save_hover",true);
	lockHover = false;
}

var saveMouseOver = function(event) {
	if(!lockHover){
		tmpTarget = event.target.id;
		_tmpTargetResetTab = event.target.id;
		setHoverButton("#save_hover",true);
	}
	document.getElementById("save_event").addEventListener("mouseout", saveMouseOut);
	document.getElementById("save_event").addEventListener("mousedown", saveMouseDown);
}

var saveMouseOut = function(event) {
	_tmpTargetResetTab = "";
	try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	removeSaveEvent();
	if(!lockHover){
		var _tabId = (tabTarget != undefined) ? tabTarget[0].id : "";
		_tabId=_tabId.replace("_tab","_event");
		if(_tabId == event.target.id) {
			$("#svg").css("cursor","");
			return;
		}
		setHoverButton("#save_hover",false);
	}
}

var addSaveEvent = function() {
    document.getElementById("save_event").addEventListener("mouseover", saveMouseOver);
	document.getElementById("save_event").addEventListener("mousedown", saveMouseDown);
	document.getElementById("save_event").addEventListener("mouseup", saveMouseUp);
}

var removeSaveEvent = function() {
    document.getElementById("save_event").removeEventListener("click", saveClick);
    document.getElementById("save_event").removeEventListener("mouseout", saveMouseOut);
}

addSaveEvent();
//=======================================================
var loadClick = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	if(event != undefined)
		setHoverButton("#"+getIdButton(tmpTarget)+"_hover",true);
	// write code below here
	//helperActive([],1,true);
	isTextNoFlag(canvas,event);
	isStampNoFlag(canvas,event);
	saveImageToCavasNoFlag();
	interact(".candraw").on(false);
	if(!isiPad){
		$("#fileInput").click();
	}else{
		var data_local =[]; 
		if(localStorage.map_local_data != null && localStorage.map_local_data != ""){
			data_local = JSON.parse(localStorage.map_local_data);
		}
		data_local.sort(compare);
		for(var i=0;i<data_local.length;i++){
			var listItem = "<li>" + data_local[i].name + "</li>";
			$("#listview_dialog ul").append(listItem);
		}
		$("#listview_dialog").show();
	}
	setHoverButton("#load_hover",false);
}

var loadMouseDown = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	tmpTarget = event.target.id;
	lockHover = true;
    document.getElementById("load_event").addEventListener("click", loadClick);
    document.getElementById("load_event").addEventListener("mouseup", loadMouseUp);
}

var loadMouseUp = function(event){
	setHoverButton("#"+getIdButton(tmpTarget)+"_hover",false);
	setHoverButton("#load_hover",true);
	lockHover = false;
}

var loadMouseOver = function(event) {
	if(!lockHover){
		tmpTarget = event.target.id;
		_tmpTargetResetTab = event.target.id;
		setHoverButton("#load_hover",true);
	}
	document.getElementById("load_event").addEventListener("mouseout", loadMouseOut);
	document.getElementById("load_event").addEventListener("mousedown", loadMouseDown);
}

var loadMouseOut = function(event) {
	_tmpTargetResetTab = "";
	try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	removeLoadEvent();
	if(!lockHover){
		var _tabId = (tabTarget != undefined) ? tabTarget[0].id : "";
		_tabId=_tabId.replace("_tab","_event");
		if(_tabId == event.target.id) {
			$("#svg").css("cursor","");
			return;
		}
		setHoverButton("#load_hover",false);
	}
}

var addLoadEvent = function() {
    document.getElementById("load_event").addEventListener("mouseover", loadMouseOver);
	document.getElementById("load_event").addEventListener("mousedown", loadMouseDown);
	document.getElementById("load_event").addEventListener("mouseup", loadMouseUp);
}

var removeLoadEvent = function() {
    document.getElementById("load_event").removeEventListener("click", loadClick);
    document.getElementById("load_event").removeEventListener("mouseout", loadMouseOut);
}

addLoadEvent();
//=======================================================
var button20Click = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	if(event != undefined)
		setHoverButton("#"+getIdButton(tmpTarget)+"_hover",true);
	// write code below here
	helperActive([],1,true);
	isTextFlagFalse(canvas,event);
	isStampFlagFalse(canvas,event);
	isImageFlagFalse();
	interact(".candraw").on(false);
	interact(".candraw").draggable(false);
	textflag=false;
	stampflag=false;
	imageflag=true;
	$("#TabFunc1").show();
			$("#bgTabFunction").show();
}

var button20MouseDown = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	tmpTarget = event.target.id;
	lockHover = true;
    document.getElementById("button20_event").addEventListener("click", button20Click);
    document.getElementById("button20_event").addEventListener("mouseup", button20MouseUp);
}

var button20MouseUp = function(event){
	setHoverButton("#"+getIdButton(tmpTarget)+"_hover",false);
	setHoverButton("#button20_hover",true);
	lockHover = false;
}

var button20MouseOver = function(event) {
	if(!lockHover){
		tmpTarget = event.target.id;
		_tmpTargetResetTab = event.target.id;
		setHoverButton("#button20_hover",true);
	}
	document.getElementById("button20_event").addEventListener("mouseout", button20MouseOut);
	document.getElementById("button20_event").addEventListener("mousedown", button20MouseDown);
}

var button20MouseOut = function(event) {
	_tmpTargetResetTab = "";
	try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	removeButton20Event();
	if(!lockHover){
		var _tabId = (tabTarget != undefined) ? tabTarget[0].id : "";
		_tabId=_tabId.replace("_tab","_event");
		if(_tabId == event.target.id) {
			$("#svg").css("cursor","");
			return;
		}
		setHoverButton("#button20_hover",false);
	}
}

var addButton20Event = function() {
    document.getElementById("button20_event").addEventListener("mouseover", button20MouseOver);
	document.getElementById("button20_event").addEventListener("mousedown", button20MouseDown);
	document.getElementById("button20_event").addEventListener("mouseup", button20MouseUp);
}

var removeButton20Event = function() {
    document.getElementById("button20_event").removeEventListener("click", button20Click);
    document.getElementById("button20_event").removeEventListener("mouseout", button20MouseOut);
}

addButton20Event();
//=======================================================
var btnMichi_size1Click = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	if(event != undefined)
		setHoverButton("#"+getIdButton(tmpTarget)+"_hover",true);
	// write code below here
	helperActive(["#btnMichi_size1_active","#btnMichi_size2_active","#btnMichi_size3_active"],0);
		if($("#btnMichi_line_active").css("display") != "none" ||
		$("#btnMichi_curve_active").css("display") != "none" ){
		stroke = getStroke(_listItemRightRow3);
	}
	isTextFlagFalse(canvas,event);
	isStampFlagFalse(canvas,event);
	isImageFlagFalse();
	interact(".candraw").on(false);
}

var btnMichi_size1MouseDown = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	tmpTarget = event.target.id;
	lockHover = true;
    document.getElementById("btnMichi_size1_event").addEventListener("click", btnMichi_size1Click);
    document.getElementById("btnMichi_size1_event").addEventListener("mouseup", btnMichi_size1MouseUp);
}

var btnMichi_size1MouseUp = function(event){
	setHoverButton("#"+getIdButton(tmpTarget)+"_hover",false);
	setHoverButton("#btnMichi_size1_hover",true);
	lockHover = false;
}

var btnMichi_size1MouseOver = function(event) {
	if(!lockHover){
		tmpTarget = event.target.id;
		_tmpTargetResetTab = event.target.id;
		setHoverButton("#btnMichi_size1_hover",true);
	}
	document.getElementById("btnMichi_size1_event").addEventListener("mouseout", btnMichi_size1MouseOut);
	document.getElementById("btnMichi_size1_event").addEventListener("mousedown", btnMichi_size1MouseDown);
}

var btnMichi_size1MouseOut = function(event) {
	_tmpTargetResetTab = "";
	try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	removeBtnMichi_size1Event();
	if(!lockHover){
		var _tabId = (tabTarget != undefined) ? tabTarget[0].id : "";
		_tabId=_tabId.replace("_tab","_event");
		if(_tabId == event.target.id) {
			$("#svg").css("cursor","");
			return;
		}
		setHoverButton("#btnMichi_size1_hover",false);
	}
}

var addBtnMichi_size1Event = function() {
    document.getElementById("btnMichi_size1_event").addEventListener("mouseover", btnMichi_size1MouseOver);
	document.getElementById("btnMichi_size1_event").addEventListener("mousedown", btnMichi_size1MouseDown);
	document.getElementById("btnMichi_size1_event").addEventListener("mouseup", btnMichi_size1MouseUp);
}

var removeBtnMichi_size1Event = function() {
    document.getElementById("btnMichi_size1_event").removeEventListener("click", btnMichi_size1Click);
    document.getElementById("btnMichi_size1_event").removeEventListener("mouseout", btnMichi_size1MouseOut);
}

addBtnMichi_size1Event();
//=======================================================
var btnMichi_size2Click = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	if(event != undefined)
		setHoverButton("#"+getIdButton(tmpTarget)+"_hover",true);
	// write code below here
	helperActive(["#btnMichi_size1_active","#btnMichi_size2_active","#btnMichi_size3_active"],1);
		if($("#btnMichi_line_active").css("display") != "none" ||
		$("#btnMichi_curve_active").css("display") != "none" ){
		stroke = getStroke(_listItemRightRow3);
	}
	isTextFlagFalse(canvas,event);
	isStampFlagFalse(canvas,event);
	isImageFlagFalse();
	interact(".candraw").on(false);
}

var btnMichi_size2MouseDown = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	tmpTarget = event.target.id;
	lockHover = true;
    document.getElementById("btnMichi_size2_event").addEventListener("click", btnMichi_size2Click);
    document.getElementById("btnMichi_size2_event").addEventListener("mouseup", btnMichi_size2MouseUp);
}

var btnMichi_size2MouseUp = function(event){
	setHoverButton("#"+getIdButton(tmpTarget)+"_hover",false);
	setHoverButton("#btnMichi_size2_hover",true);
	lockHover = false;
}

var btnMichi_size2MouseOver = function(event) {
	if(!lockHover){
		tmpTarget = event.target.id;
		_tmpTargetResetTab = event.target.id;
		setHoverButton("#btnMichi_size2_hover",true);
	}
	document.getElementById("btnMichi_size2_event").addEventListener("mouseout", btnMichi_size2MouseOut);
	document.getElementById("btnMichi_size2_event").addEventListener("mousedown", btnMichi_size2MouseDown);
}

var btnMichi_size2MouseOut = function(event) {
	_tmpTargetResetTab = "";
	try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	removeBtnMichi_size2Event();
	if(!lockHover){
		var _tabId = (tabTarget != undefined) ? tabTarget[0].id : "";
		_tabId=_tabId.replace("_tab","_event");
		if(_tabId == event.target.id) {
			$("#svg").css("cursor","");
			return;
		}
		setHoverButton("#btnMichi_size2_hover",false);
	}
}

var addBtnMichi_size2Event = function() {
    document.getElementById("btnMichi_size2_event").addEventListener("mouseover", btnMichi_size2MouseOver);
	document.getElementById("btnMichi_size2_event").addEventListener("mousedown", btnMichi_size2MouseDown);
	document.getElementById("btnMichi_size2_event").addEventListener("mouseup", btnMichi_size2MouseUp);
}

var removeBtnMichi_size2Event = function() {
    document.getElementById("btnMichi_size2_event").removeEventListener("click", btnMichi_size2Click);
    document.getElementById("btnMichi_size2_event").removeEventListener("mouseout", btnMichi_size2MouseOut);
}

addBtnMichi_size2Event();
//=======================================================
var btnMichi_size3Click = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	if(event != undefined)
		setHoverButton("#"+getIdButton(tmpTarget)+"_hover",true);
	// write code below here
	helperActive(["#btnMichi_size1_active","#btnMichi_size2_active","#btnMichi_size3_active"],2);
		if($("#btnMichi_line_active").css("display") != "none" ||
		$("#btnMichi_curve_active").css("display") != "none" ){
		stroke = getStroke(_listItemRightRow3);
	}
	isTextFlagFalse(canvas,event);
	isStampFlagFalse(canvas,event);
	isImageFlagFalse();
	interact(".candraw").on(false);
}

var btnMichi_size3MouseDown = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	tmpTarget = event.target.id;
	lockHover = true;
    document.getElementById("btnMichi_size3_event").addEventListener("click", btnMichi_size3Click);
    document.getElementById("btnMichi_size3_event").addEventListener("mouseup", btnMichi_size3MouseUp);
}

var btnMichi_size3MouseUp = function(event){
	setHoverButton("#"+getIdButton(tmpTarget)+"_hover",false);
	setHoverButton("#btnMichi_size3_hover",true);
	lockHover = false;
}

var btnMichi_size3MouseOver = function(event) {
	if(!lockHover){
		tmpTarget = event.target.id;
		_tmpTargetResetTab = event.target.id;
		setHoverButton("#btnMichi_size3_hover",true);
	}
	document.getElementById("btnMichi_size3_event").addEventListener("mouseout", btnMichi_size3MouseOut);
	document.getElementById("btnMichi_size3_event").addEventListener("mousedown", btnMichi_size3MouseDown);
}

var btnMichi_size3MouseOut = function(event) {
	_tmpTargetResetTab = "";
	try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	removeBtnMichi_size3Event();
	if(!lockHover){
		var _tabId = (tabTarget != undefined) ? tabTarget[0].id : "";
		_tabId=_tabId.replace("_tab","_event");
		if(_tabId == event.target.id) {
			$("#svg").css("cursor","");
			return;
		}
		setHoverButton("#btnMichi_size3_hover",false);
	}
}

var addBtnMichi_size3Event = function() {
    document.getElementById("btnMichi_size3_event").addEventListener("mouseover", btnMichi_size3MouseOver);
	document.getElementById("btnMichi_size3_event").addEventListener("mousedown", btnMichi_size3MouseDown);
	document.getElementById("btnMichi_size3_event").addEventListener("mouseup", btnMichi_size3MouseUp);
}

var removeBtnMichi_size3Event = function() {
    document.getElementById("btnMichi_size3_event").removeEventListener("click", btnMichi_size3Click);
    document.getElementById("btnMichi_size3_event").removeEventListener("mouseout", btnMichi_size3MouseOut);
}

addBtnMichi_size3Event();
//=======================================================
var btnKawa_size1Click = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	if(event != undefined)
		setHoverButton("#"+getIdButton(tmpTarget)+"_hover",true);
	// write code below here
	helperActive(["#btnKawa_size1_active","#btnKawa_size2_active","#btnKawa_size3_active"],0);
		if($("#btnKawa_line_active").css("display") != "none" ||
		$("#btnKawa_curve_active").css("display") != "none" ){
		stroke = getStroke(_listItemRightRow4);
	}
	isTextFlagFalse(canvas,event);
	isStampFlagFalse(canvas,event);
	isImageFlagFalse();
	interact(".candraw").on(false);
}

var btnKawa_size1MouseDown = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	tmpTarget = event.target.id;
	lockHover = true;
    document.getElementById("btnKawa_size1_event").addEventListener("click", btnKawa_size1Click);
    document.getElementById("btnKawa_size1_event").addEventListener("mouseup", btnKawa_size1MouseUp);
}

var btnKawa_size1MouseUp = function(event){
	setHoverButton("#"+getIdButton(tmpTarget)+"_hover",false);
	setHoverButton("#btnKawa_size1_hover",true);
	lockHover = false;
}

var btnKawa_size1MouseOver = function(event) {
	if(!lockHover){
		tmpTarget = event.target.id;
		_tmpTargetResetTab = event.target.id;
		setHoverButton("#btnKawa_size1_hover",true);
	}
	document.getElementById("btnKawa_size1_event").addEventListener("mouseout", btnKawa_size1MouseOut);
	document.getElementById("btnKawa_size1_event").addEventListener("mousedown", btnKawa_size1MouseDown);
}

var btnKawa_size1MouseOut = function(event) {
	_tmpTargetResetTab = "";
	try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	removeBtnKawa_size1Event();
	if(!lockHover){
		var _tabId = (tabTarget != undefined) ? tabTarget[0].id : "";
		_tabId=_tabId.replace("_tab","_event");
		if(_tabId == event.target.id) {
			$("#svg").css("cursor","");
			return;
		}
		setHoverButton("#btnKawa_size1_hover",false);
	}
}

var addBtnKawa_size1Event = function() {
    document.getElementById("btnKawa_size1_event").addEventListener("mouseover", btnKawa_size1MouseOver);
	document.getElementById("btnKawa_size1_event").addEventListener("mousedown", btnKawa_size1MouseDown);
	document.getElementById("btnKawa_size1_event").addEventListener("mouseup", btnKawa_size1MouseUp);
}

var removeBtnKawa_size1Event = function() {
    document.getElementById("btnKawa_size1_event").removeEventListener("click", btnKawa_size1Click);
    document.getElementById("btnKawa_size1_event").removeEventListener("mouseout", btnKawa_size1MouseOut);
}

addBtnKawa_size1Event();
//=======================================================
var btnKawa_size2Click = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	if(event != undefined)
		setHoverButton("#"+getIdButton(tmpTarget)+"_hover",true);
	// write code below here
	helperActive(["#btnKawa_size1_active","#btnKawa_size2_active","#btnKawa_size3_active"],1);
		if($("#btnKawa_line_active").css("display") != "none" ||
		$("#btnKawa_curve_active").css("display") != "none" ){
		stroke = getStroke(_listItemRightRow4);
	}
	isTextFlagFalse(canvas,event);
	isStampFlagFalse(canvas,event);
	isImageFlagFalse();
	interact(".candraw").on(false);
}

var btnKawa_size2MouseDown = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	tmpTarget = event.target.id;
	lockHover = true;
    document.getElementById("btnKawa_size2_event").addEventListener("click", btnKawa_size2Click);
    document.getElementById("btnKawa_size2_event").addEventListener("mouseup", btnKawa_size2MouseUp);
}

var btnKawa_size2MouseUp = function(event){
	setHoverButton("#"+getIdButton(tmpTarget)+"_hover",false);
	setHoverButton("#btnKawa_size2_hover",true);
	lockHover = false;
}

var btnKawa_size2MouseOver = function(event) {
	if(!lockHover){
		tmpTarget = event.target.id;
		_tmpTargetResetTab = event.target.id;
		setHoverButton("#btnKawa_size2_hover",true);
	}
	document.getElementById("btnKawa_size2_event").addEventListener("mouseout", btnKawa_size2MouseOut);
	document.getElementById("btnKawa_size2_event").addEventListener("mousedown", btnKawa_size2MouseDown);
}

var btnKawa_size2MouseOut = function(event) {
	_tmpTargetResetTab = "";
	try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	removeBtnKawa_size2Event();
	if(!lockHover){
		var _tabId = (tabTarget != undefined) ? tabTarget[0].id : "";
		_tabId=_tabId.replace("_tab","_event");
		if(_tabId == event.target.id) {
			$("#svg").css("cursor","");
			return;
		}
		setHoverButton("#btnKawa_size2_hover",false);
	}
}

var addBtnKawa_size2Event = function() {
    document.getElementById("btnKawa_size2_event").addEventListener("mouseover", btnKawa_size2MouseOver);
	document.getElementById("btnKawa_size2_event").addEventListener("mousedown", btnKawa_size2MouseDown);
	document.getElementById("btnKawa_size2_event").addEventListener("mouseup", btnKawa_size2MouseUp);
}

var removeBtnKawa_size2Event = function() {
    document.getElementById("btnKawa_size2_event").removeEventListener("click", btnKawa_size2Click);
    document.getElementById("btnKawa_size2_event").removeEventListener("mouseout", btnKawa_size2MouseOut);
}

addBtnKawa_size2Event();
//=======================================================
var btnKawa_size3Click = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	if(event != undefined)
		setHoverButton("#"+getIdButton(tmpTarget)+"_hover",true);
	// write code below here
	helperActive(["#btnKawa_size1_active","#btnKawa_size2_active","#btnKawa_size3_active"],2);
		if($("#btnKawa_line_active").css("display") != "none" ||
		$("#btnKawa_curve_active").css("display") != "none" ){
		stroke = getStroke(_listItemRightRow4);
	}
	isTextFlagFalse(canvas,event);
	isStampFlagFalse(canvas,event);
	isImageFlagFalse();
	interact(".candraw").on(false);
}

var btnKawa_size3MouseDown = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	tmpTarget = event.target.id;
	lockHover = true;
    document.getElementById("btnKawa_size3_event").addEventListener("click", btnKawa_size3Click);
    document.getElementById("btnKawa_size3_event").addEventListener("mouseup", btnKawa_size3MouseUp);
}

var btnKawa_size3MouseUp = function(event){
	setHoverButton("#"+getIdButton(tmpTarget)+"_hover",false);
	setHoverButton("#btnKawa_size3_hover",true);
	lockHover = false;
}

var btnKawa_size3MouseOver = function(event) {
	if(!lockHover){
		tmpTarget = event.target.id;
		_tmpTargetResetTab = event.target.id;
		setHoverButton("#btnKawa_size3_hover",true);
	}
	document.getElementById("btnKawa_size3_event").addEventListener("mouseout", btnKawa_size3MouseOut);
	document.getElementById("btnKawa_size3_event").addEventListener("mousedown", btnKawa_size3MouseDown);
}

var btnKawa_size3MouseOut = function(event) {
	_tmpTargetResetTab = "";
	try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	removeBtnKawa_size3Event();
	if(!lockHover){
		var _tabId = (tabTarget != undefined) ? tabTarget[0].id : "";
		_tabId=_tabId.replace("_tab","_event");
		if(_tabId == event.target.id) {
			$("#svg").css("cursor","");
			return;
		}
		setHoverButton("#btnKawa_size3_hover",false);
	}
}

var addBtnKawa_size3Event = function() {
    document.getElementById("btnKawa_size3_event").addEventListener("mouseover", btnKawa_size3MouseOver);
	document.getElementById("btnKawa_size3_event").addEventListener("mousedown", btnKawa_size3MouseDown);
	document.getElementById("btnKawa_size3_event").addEventListener("mouseup", btnKawa_size3MouseUp);
}

var removeBtnKawa_size3Event = function() {
    document.getElementById("btnKawa_size3_event").removeEventListener("click", btnKawa_size3Click);
    document.getElementById("btnKawa_size3_event").removeEventListener("mouseout", btnKawa_size3MouseOut);
}

addBtnKawa_size3Event();
//=======================================================
var buttonColor1Click = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	if(event != undefined)
		setHoverButton("#"+getIdButton(tmpTarget)+"_hover",true);
	// write code below here
	if($("#colorTab").css("display") == "none"){
		$("#colorTab").show();
		_buttonColorClick = "buttonColor1";
	} else {
		if(_buttonColorClick == "buttonColor2"){
			$("#colorTab").hide();
			setTimeout(function(){
				$("#colorTab").show();
			},100);
			_buttonColorClick = "buttonColor1";
			return;
		}
		$("#colorTab").hide();
		_buttonColorClick = "";
	}
	isTextFlagFalse(canvas,event);
	isStampFlagFalse(canvas,event);
	isImageFlagFalse();
	interact(".candraw").on(false);
}

var buttonColor1MouseDown = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	tmpTarget = event.target.id;
	lockHover = true;
    document.getElementById("buttonColor1_event").addEventListener("click", buttonColor1Click);
    document.getElementById("buttonColor1_event").addEventListener("mouseup", buttonColor1MouseUp);
}

var buttonColor1MouseUp = function(event){
	setHoverButton("#"+getIdButton(tmpTarget)+"_hover",false);
	setHoverButton("#buttonColor1_hover",true);
	lockHover = false;
}

var buttonColor1MouseOver = function(event) {
	if(!lockHover){
		tmpTarget = event.target.id;
		_tmpTargetResetTab = event.target.id;
		setHoverButton("#buttonColor1_hover",true);
	}
	document.getElementById("buttonColor1_event").addEventListener("mouseout", buttonColor1MouseOut);
	document.getElementById("buttonColor1_event").addEventListener("mousedown", buttonColor1MouseDown);
}

var buttonColor1MouseOut = function(event) {
	_tmpTargetResetTab = "";
	try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	removeButtonColor1Event();
	if(!lockHover){
		var _tabId = (tabTarget != undefined) ? tabTarget[0].id : "";
		_tabId=_tabId.replace("_tab","_event");
		if(_tabId == event.target.id) {
			$("#svg").css("cursor","");
			return;
		}
		setHoverButton("#buttonColor1_hover",false);
	}
}

var addButtonColor1Event = function() {
    document.getElementById("buttonColor1_event").addEventListener("mouseover", buttonColor1MouseOver);
	document.getElementById("buttonColor1_event").addEventListener("mousedown", buttonColor1MouseDown);
	document.getElementById("buttonColor1_event").addEventListener("mouseup", buttonColor1MouseUp);
}

var removeButtonColor1Event = function() {
    document.getElementById("buttonColor1_event").removeEventListener("click", buttonColor1Click);
    document.getElementById("buttonColor1_event").removeEventListener("mouseout", buttonColor1MouseOut);
}

addButtonColor1Event();
//=======================================================
var buttonColor2Click = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	if(event != undefined)
		setHoverButton("#"+getIdButton(tmpTarget)+"_hover",true);
	// write code below here
	if($("#colorTab").css("display") == "none"){
		$("#colorTab").show();
		_buttonColorClick = "buttonColor2";
	} else {
		if(_buttonColorClick == "buttonColor1"){
			$("#colorTab").hide();
			setTimeout(function(){
				$("#colorTab").show();
			},100);
			_buttonColorClick = "buttonColor2";
			return;
		}
		$("#colorTab").hide();
		_buttonColorClick = "";
	}
	
	
}

var buttonColor2MouseDown = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	tmpTarget = event.target.id;
	lockHover = true;
    document.getElementById("buttonColor2_event").addEventListener("click", buttonColor2Click);
    document.getElementById("buttonColor2_event").addEventListener("mouseup", buttonColor2MouseUp);
}

var buttonColor2MouseUp = function(event){
	setHoverButton("#"+getIdButton(tmpTarget)+"_hover",false);
	setHoverButton("#buttonColor2_hover",true);
	lockHover = false;
}

var buttonColor2MouseOver = function(event) {
	if(!lockHover){
		tmpTarget = event.target.id;
		_tmpTargetResetTab = event.target.id;
		setHoverButton("#buttonColor2_hover",true);
	}
	document.getElementById("buttonColor2_event").addEventListener("mouseout", buttonColor2MouseOut);
	document.getElementById("buttonColor2_event").addEventListener("mousedown", buttonColor2MouseDown);
}

var buttonColor2MouseOut = function(event) {
	_tmpTargetResetTab = "";
	try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	removeButtonColor2Event();
	if(!lockHover){
		var _tabId = (tabTarget != undefined) ? tabTarget[0].id : "";
		_tabId=_tabId.replace("_tab","_event");
		if(_tabId == event.target.id) {
			$("#svg").css("cursor","");
			return;
		}
		setHoverButton("#buttonColor2_hover",false);
	}
}

var addButtonColor2Event = function() {
    document.getElementById("buttonColor2_event").addEventListener("mouseover", buttonColor2MouseOver);
	document.getElementById("buttonColor2_event").addEventListener("mousedown", buttonColor2MouseDown);
	document.getElementById("buttonColor2_event").addEventListener("mouseup", buttonColor2MouseUp);
}

var removeButtonColor2Event = function() {
    document.getElementById("buttonColor2_event").removeEventListener("click", buttonColor2Click);
    document.getElementById("buttonColor2_event").removeEventListener("mouseout", buttonColor2MouseOut);
}

addButtonColor2Event();
//=======================================================
var buttonCloseTab1Click = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	if(event != undefined)
	    setHoverButton("#" + getIdButton(tmpTarget) + "_hover", true);
	isTextFlagFalse(canvas, event);
	isStampFlagFalse(canvas, event);
	isImageFlagFalse();
	var textflag = false;
	var stampflag = false;
	var imageflag = false;
	// write code below here
	$("#TabFunc1").hide();
	$("#bgTabFunction").hide();
	btnPen_lineClick();
}

var buttonCloseTab1MouseDown = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	tmpTarget = event.target.id;
	lockHover = true;
    document.getElementById("buttonCloseTab1_event").addEventListener("click", buttonCloseTab1Click);
    document.getElementById("buttonCloseTab1_event").addEventListener("mouseup", buttonCloseTab1MouseUp);
}

var buttonCloseTab1MouseUp = function(event){
	setHoverButton("#"+getIdButton(tmpTarget)+"_hover",false);
	setHoverButton("#buttonCloseTab1_hover",true);
	lockHover = false;
}

var buttonCloseTab1MouseOver = function(event) {
	if(!lockHover){
		tmpTarget = event.target.id;
		_tmpTargetResetTab = event.target.id;
		setHoverButton("#buttonCloseTab1_hover",true);
	}
	document.getElementById("buttonCloseTab1_event").addEventListener("mouseout", buttonCloseTab1MouseOut);
	document.getElementById("buttonCloseTab1_event").addEventListener("mousedown", buttonCloseTab1MouseDown);
}

var buttonCloseTab1MouseOut = function(event) {
	_tmpTargetResetTab = "";
	try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	removeButtonCloseTab1Event();
	if(!lockHover){
		var _tabId = (tabTarget != undefined) ? tabTarget[0].id : "";
		_tabId=_tabId.replace("_tab","_event");
		if(_tabId == event.target.id) {
			$("#svg").css("cursor","");
			return;
		}
		setHoverButton("#buttonCloseTab1_hover",false);
	}
}

var addButtonCloseTab1Event = function() {
    document.getElementById("buttonCloseTab1_event").addEventListener("mouseover", buttonCloseTab1MouseOver);
	document.getElementById("buttonCloseTab1_event").addEventListener("mousedown", buttonCloseTab1MouseDown);
	document.getElementById("buttonCloseTab1_event").addEventListener("mouseup", buttonCloseTab1MouseUp);
}

var removeButtonCloseTab1Event = function() {
    document.getElementById("buttonCloseTab1_event").removeEventListener("click", buttonCloseTab1Click);
    document.getElementById("buttonCloseTab1_event").removeEventListener("mouseout", buttonCloseTab1MouseOut);
}

addButtonCloseTab1Event();
//=======================================================
var buttonCloseTab2Click = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	if(event != undefined)
		setHoverButton("#"+getIdButton(tmpTarget)+"_hover",true);
	// write code below here
	$("#TabFunc2").hide();
	$("#bgTabFunction").hide();	
	isImageFlagFalse();
}

var buttonCloseTab2MouseDown = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	tmpTarget = event.target.id;
	lockHover = true;
    document.getElementById("buttonCloseTab2_event").addEventListener("click", buttonCloseTab2Click);
    document.getElementById("buttonCloseTab2_event").addEventListener("mouseup", buttonCloseTab2MouseUp);
}

var buttonCloseTab2MouseUp = function(event){
	setHoverButton("#"+getIdButton(tmpTarget)+"_hover",false);
	setHoverButton("#buttonCloseTab2_hover",true);
	lockHover = false;
}

var buttonCloseTab2MouseOver = function(event) {
	if(!lockHover){
		tmpTarget = event.target.id;
		_tmpTargetResetTab = event.target.id;
		setHoverButton("#buttonCloseTab2_hover",true);
	}
	document.getElementById("buttonCloseTab2_event").addEventListener("mouseout", buttonCloseTab2MouseOut);
	document.getElementById("buttonCloseTab2_event").addEventListener("mousedown", buttonCloseTab2MouseDown);
}

var buttonCloseTab2MouseOut = function(event) {
	_tmpTargetResetTab = "";
	try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	removeButtonCloseTab2Event();
	if(!lockHover){
		var _tabId = (tabTarget != undefined) ? tabTarget[0].id : "";
		_tabId=_tabId.replace("_tab","_event");
		if(_tabId == event.target.id) {
			$("#svg").css("cursor","");
			return;
		}
		setHoverButton("#buttonCloseTab2_hover",false);
	}
}

var addButtonCloseTab2Event = function() {
    document.getElementById("buttonCloseTab2_event").addEventListener("mouseover", buttonCloseTab2MouseOver);
	document.getElementById("buttonCloseTab2_event").addEventListener("mousedown", buttonCloseTab2MouseDown);
	document.getElementById("buttonCloseTab2_event").addEventListener("mouseup", buttonCloseTab2MouseUp);
}

var removeButtonCloseTab2Event = function() {
    document.getElementById("buttonCloseTab2_event").removeEventListener("click", buttonCloseTab2Click);
    document.getElementById("buttonCloseTab2_event").removeEventListener("mouseout", buttonCloseTab2MouseOut);
}

addButtonCloseTab2Event();
//=======================================================
var buttonCloseTab3Click = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	if(event != undefined)
		setHoverButton("#"+getIdButton(tmpTarget)+"_hover",true);
	// write code below here
	$("#TabFunc3").hide();
	$("#bgTabFunction").hide();	
	isImageFlagFalse();
}

var buttonCloseTab3MouseDown = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	tmpTarget = event.target.id;
	lockHover = true;
    document.getElementById("buttonCloseTab3_event").addEventListener("click", buttonCloseTab3Click);
    document.getElementById("buttonCloseTab3_event").addEventListener("mouseup", buttonCloseTab3MouseUp);
}

var buttonCloseTab3MouseUp = function(event){
	setHoverButton("#"+getIdButton(tmpTarget)+"_hover",false);
	setHoverButton("#buttonCloseTab3_hover",true);
	lockHover = false;
}

var buttonCloseTab3MouseOver = function(event) {
	if(!lockHover){
		tmpTarget = event.target.id;
		_tmpTargetResetTab = event.target.id;
		setHoverButton("#buttonCloseTab3_hover",true);
	}
	document.getElementById("buttonCloseTab3_event").addEventListener("mouseout", buttonCloseTab3MouseOut);
	document.getElementById("buttonCloseTab3_event").addEventListener("mousedown", buttonCloseTab3MouseDown);
}

var buttonCloseTab3MouseOut = function(event) {
	_tmpTargetResetTab = "";
	try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	removeButtonCloseTab3Event();
	if(!lockHover){
		var _tabId = (tabTarget != undefined) ? tabTarget[0].id : "";
		_tabId=_tabId.replace("_tab","_event");
		if(_tabId == event.target.id) {
			$("#svg").css("cursor","");
			return;
		}
		setHoverButton("#buttonCloseTab3_hover",false);
	}
}

var addButtonCloseTab3Event = function() {
    document.getElementById("buttonCloseTab3_event").addEventListener("mouseover", buttonCloseTab3MouseOver);
	document.getElementById("buttonCloseTab3_event").addEventListener("mousedown", buttonCloseTab3MouseDown);
	document.getElementById("buttonCloseTab3_event").addEventListener("mouseup", buttonCloseTab3MouseUp);
}

var removeButtonCloseTab3Event = function() {
    document.getElementById("buttonCloseTab3_event").removeEventListener("click", buttonCloseTab3Click);
    document.getElementById("buttonCloseTab3_event").removeEventListener("mouseout", buttonCloseTab3MouseOut);
}

addButtonCloseTab3Event();
//=======================================================
var buttonCloseTab4Click = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	if(event != undefined)
		setHoverButton("#"+getIdButton(tmpTarget)+"_hover",true);
	// write code below here
	$("#TabFunc4").hide();
	$("#bgTabFunction").hide();	
	isImageFlagFalse();
}

var buttonCloseTab4MouseDown = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	tmpTarget = event.target.id;
	lockHover = true;
    document.getElementById("buttonCloseTab4_event").addEventListener("click", buttonCloseTab4Click);
    document.getElementById("buttonCloseTab4_event").addEventListener("mouseup", buttonCloseTab4MouseUp);
}

var buttonCloseTab4MouseUp = function(event){
	setHoverButton("#"+getIdButton(tmpTarget)+"_hover",false);
	setHoverButton("#buttonCloseTab4_hover",true);
	lockHover = false;
}

var buttonCloseTab4MouseOver = function(event) {
	if(!lockHover){
		tmpTarget = event.target.id;
		_tmpTargetResetTab = event.target.id;
		setHoverButton("#buttonCloseTab4_hover",true);
	}
	document.getElementById("buttonCloseTab4_event").addEventListener("mouseout", buttonCloseTab4MouseOut);
	document.getElementById("buttonCloseTab4_event").addEventListener("mousedown", buttonCloseTab4MouseDown);
}

var buttonCloseTab4MouseOut = function(event) {
	_tmpTargetResetTab = "";
	try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	removeButtonCloseTab4Event();
	if(!lockHover){
		var _tabId = (tabTarget != undefined) ? tabTarget[0].id : "";
		_tabId=_tabId.replace("_tab","_event");
		if(_tabId == event.target.id) {
			$("#svg").css("cursor","");
			return;
		}
		setHoverButton("#buttonCloseTab4_hover",false);
	}
}

var addButtonCloseTab4Event = function() {
    document.getElementById("buttonCloseTab4_event").addEventListener("mouseover", buttonCloseTab4MouseOver);
	document.getElementById("buttonCloseTab4_event").addEventListener("mousedown", buttonCloseTab4MouseDown);
	document.getElementById("buttonCloseTab4_event").addEventListener("mouseup", buttonCloseTab4MouseUp);
}

var removeButtonCloseTab4Event = function() {
    document.getElementById("buttonCloseTab4_event").removeEventListener("click", buttonCloseTab4Click);
    document.getElementById("buttonCloseTab4_event").removeEventListener("mouseout", buttonCloseTab4MouseOut);
}

addButtonCloseTab4Event();
//=======================================================
var buttonSpan_showClick = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	if(event != undefined)
		setHoverButton("#"+getIdButton(tmpTarget)+"_hover",true);
	// write code below here
	// if(_lockMenu) {
		// _lockMenu = false;
		// return;
	// }
	// if($("#bgTab").css("display") =="none"){
		// $("#bgTab").show();
		// $("#mainTab").show();				
		// $("#shape1").show();
	// } else {
		// $("#bgTab").hide();
		// $("#mainTab").hide();
		// $("#shape1").hide();
	// }
}

var buttonSpan_showMouseDown = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	tmpTarget = event.target.id;
	lockHover = true;
    document.getElementById("buttonSpan_show_event").addEventListener("click", buttonSpan_showClick);
    document.getElementById("buttonSpan_show_event").addEventListener("mouseup", buttonSpan_showMouseUp);
}

var buttonSpan_showMouseUp = function(event){
	setHoverButton("#"+getIdButton(tmpTarget)+"_hover",false);
	setHoverButton("#buttonSpan_show_hover",true);
	lockHover = false;
}

var buttonSpan_showMouseOver = function(event) {
	if(!lockHover){
		tmpTarget = event.target.id;
		_tmpTargetResetTab = event.target.id;
		setHoverButton("#buttonSpan_show_hover",true);
	}
	document.getElementById("buttonSpan_show_event").addEventListener("mouseout", buttonSpan_showMouseOut);
	document.getElementById("buttonSpan_show_event").addEventListener("mousedown", buttonSpan_showMouseDown);
}

var buttonSpan_showMouseOut = function(event) {
	_tmpTargetResetTab = "";
	try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	removeButtonSpan_showEvent();
	if(!lockHover){
		var _tabId = (tabTarget != undefined) ? tabTarget[0].id : "";
		_tabId=_tabId.replace("_tab","_event");
		if(_tabId == event.target.id) {
			$("#svg").css("cursor","");
			return;
		}
		setHoverButton("#buttonSpan_show_hover",false);
	}
}

var addButtonSpan_showEvent = function() {
    document.getElementById("buttonSpan_show_event").addEventListener("mouseover", buttonSpan_showMouseOver);
	document.getElementById("buttonSpan_show_event").addEventListener("mousedown", buttonSpan_showMouseDown);
	document.getElementById("buttonSpan_show_event").addEventListener("mouseup", buttonSpan_showMouseUp);
}

var removeButtonSpan_showEvent = function() {
    document.getElementById("buttonSpan_show_event").removeEventListener("click", buttonSpan_showClick);
    document.getElementById("buttonSpan_show_event").removeEventListener("mouseout", buttonSpan_showMouseOut);
}

addButtonSpan_showEvent();
//=======================================================
var button27Click = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	if(event != undefined)
		setHoverButton("#"+getIdButton(tmpTarget)+"_hover",true);
	// write code below here
	if(_buttonColorClick == "buttonColor1" ){
		$("#buttonColor1_active").attr("fill","#281f1d");
		if((isShow(_listItemRow1[0]) || isShow(_listItemRow1[1])))
			color = "#281f1d";
	} 
	
	if(_buttonColorClick == "buttonColor2"){
		$("#buttonColor2_active").attr("fill","#281f1d");
		mojiColor="rgb(40, 31, 29)";
	}
	$("#colorTab").hide();
}

var button27MouseDown = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	tmpTarget = event.target.id;
	lockHover = true;
    document.getElementById("button27_event").addEventListener("click", button27Click);
    document.getElementById("button27_event").addEventListener("mouseup", button27MouseUp);
}

var button27MouseUp = function(event){
	setHoverButton("#"+getIdButton(tmpTarget)+"_hover",false);
	setHoverButton("#button27_hover",true);
	lockHover = false;
}

var button27MouseOver = function(event) {
	if(!lockHover){
		tmpTarget = event.target.id;
		_tmpTargetResetTab = event.target.id;
		setHoverButton("#button27_hover",true);
	}
	document.getElementById("button27_event").addEventListener("mouseout", button27MouseOut);
	document.getElementById("button27_event").addEventListener("mousedown", button27MouseDown);
}

var button27MouseOut = function(event) {
	_tmpTargetResetTab = "";
	try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	removeButton27Event();
	if(!lockHover){
		var _tabId = (tabTarget != undefined) ? tabTarget[0].id : "";
		_tabId=_tabId.replace("_tab","_event");
		if(_tabId == event.target.id) {
			$("#svg").css("cursor","");
			return;
		}
		setHoverButton("#button27_hover",false);
	}
}

var addButton27Event = function() {
    document.getElementById("button27_event").addEventListener("mouseover", button27MouseOver);
	document.getElementById("button27_event").addEventListener("mousedown", button27MouseDown);
	document.getElementById("button27_event").addEventListener("mouseup", button27MouseUp);
}

var removeButton27Event = function() {
    document.getElementById("button27_event").removeEventListener("click", button27Click);
    document.getElementById("button27_event").removeEventListener("mouseout", button27MouseOut);
}

addButton27Event();
//=======================================================
var button28Click = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	if(event != undefined)
		setHoverButton("#"+getIdButton(tmpTarget)+"_hover",true);
	// write code below here
	if(_buttonColorClick == "buttonColor1"){
		$("#buttonColor1_active").attr("fill","#ffffff");
		if((isShow(_listItemRow1[0]) || isShow(_listItemRow1[1])))
			color = "#ffffff";
	} 
	
	if(_buttonColorClick == "buttonColor2"){
		$("#buttonColor2_active").attr("fill","#ffffff");
		mojiColor="rgb(255, 255, 255)";
	}
	$("#colorTab").hide();
}

var button28MouseDown = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	tmpTarget = event.target.id;
	lockHover = true;
    document.getElementById("button28_event").addEventListener("click", button28Click);
    document.getElementById("button28_event").addEventListener("mouseup", button28MouseUp);
}

var button28MouseUp = function(event){
	setHoverButton("#"+getIdButton(tmpTarget)+"_hover",false);
	setHoverButton("#button28_hover",true);
	lockHover = false;
}

var button28MouseOver = function(event) {
	if(!lockHover){
		tmpTarget = event.target.id;
		_tmpTargetResetTab = event.target.id;
		setHoverButton("#button28_hover",true);
	}
	document.getElementById("button28_event").addEventListener("mouseout", button28MouseOut);
	document.getElementById("button28_event").addEventListener("mousedown", button28MouseDown);
}

var button28MouseOut = function(event) {
	_tmpTargetResetTab = "";
	try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	removeButton28Event();
	if(!lockHover){
		var _tabId = (tabTarget != undefined) ? tabTarget[0].id : "";
		_tabId=_tabId.replace("_tab","_event");
		if(_tabId == event.target.id) {
			$("#svg").css("cursor","");
			return;
		}
		setHoverButton("#button28_hover",false);
	}
}

var addButton28Event = function() {
    document.getElementById("button28_event").addEventListener("mouseover", button28MouseOver);
	document.getElementById("button28_event").addEventListener("mousedown", button28MouseDown);
	document.getElementById("button28_event").addEventListener("mouseup", button28MouseUp);
}

var removeButton28Event = function() {
    document.getElementById("button28_event").removeEventListener("click", button28Click);
    document.getElementById("button28_event").removeEventListener("mouseout", button28MouseOut);
}

addButton28Event();
//=======================================================
var button29Click = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	if(event != undefined)
		setHoverButton("#"+getIdButton(tmpTarget)+"_hover",true);
	// write code below here
	
	if(_buttonColorClick == "buttonColor1"){
		$("#buttonColor1_active").attr("fill","#f52b21");
		if((isShow(_listItemRow1[0]) || isShow(_listItemRow1[1])))
			color = "#f52b21";
	} 
	
	if(_buttonColorClick == "buttonColor2"){
		$("#buttonColor2_active").attr("fill","#f52b21");
		mojiColor="rgb(245, 43, 33)";
	}
	$("#colorTab").hide();
}

var button29MouseDown = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	tmpTarget = event.target.id;
	lockHover = true;
    document.getElementById("button29_event").addEventListener("click", button29Click);
    document.getElementById("button29_event").addEventListener("mouseup", button29MouseUp);
}

var button29MouseUp = function(event){
	setHoverButton("#"+getIdButton(tmpTarget)+"_hover",false);
	setHoverButton("#button29_hover",true);
	lockHover = false;
}

var button29MouseOver = function(event) {
	if(!lockHover){
		tmpTarget = event.target.id;
		_tmpTargetResetTab = event.target.id;
		setHoverButton("#button29_hover",true);
	}
	document.getElementById("button29_event").addEventListener("mouseout", button29MouseOut);
	document.getElementById("button29_event").addEventListener("mousedown", button29MouseDown);
}

var button29MouseOut = function(event) {
	_tmpTargetResetTab = "";
	try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	removeButton29Event();
	if(!lockHover){
		var _tabId = (tabTarget != undefined) ? tabTarget[0].id : "";
		_tabId=_tabId.replace("_tab","_event");
		if(_tabId == event.target.id) {
			$("#svg").css("cursor","");
			return;
		}
		setHoverButton("#button29_hover",false);
	}
}

var addButton29Event = function() {
    document.getElementById("button29_event").addEventListener("mouseover", button29MouseOver);
	document.getElementById("button29_event").addEventListener("mousedown", button29MouseDown);
	document.getElementById("button29_event").addEventListener("mouseup", button29MouseUp);
}

var removeButton29Event = function() {
    document.getElementById("button29_event").removeEventListener("click", button29Click);
    document.getElementById("button29_event").removeEventListener("mouseout", button29MouseOut);
}

addButton29Event();
//=======================================================
var button30Click = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	if(event != undefined)
		setHoverButton("#"+getIdButton(tmpTarget)+"_hover",true);
	// write code below here
	if(_buttonColorClick == "buttonColor1"){
		$("#buttonColor1_active").attr("fill","#0000ff");
		if((isShow(_listItemRow1[0]) || isShow(_listItemRow1[1])))
			color = "#0000ff";
	} 
	
	if(_buttonColorClick == "buttonColor2"){
		$("#buttonColor2_active").attr("fill","#0000ff");
		mojiColor="rgb(0, 0, 255)";
	}
	
	$("#colorTab").hide();
}

var button30MouseDown = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	tmpTarget = event.target.id;
	lockHover = true;
    document.getElementById("button30_event").addEventListener("click", button30Click);
    document.getElementById("button30_event").addEventListener("mouseup", button30MouseUp);
}

var button30MouseUp = function(event){
	setHoverButton("#"+getIdButton(tmpTarget)+"_hover",false);
	setHoverButton("#button30_hover",true);
	lockHover = false;
}

var button30MouseOver = function(event) {
	if(!lockHover){
		tmpTarget = event.target.id;
		_tmpTargetResetTab = event.target.id;
		setHoverButton("#button30_hover",true);
	}
	document.getElementById("button30_event").addEventListener("mouseout", button30MouseOut);
	document.getElementById("button30_event").addEventListener("mousedown", button30MouseDown);
}

var button30MouseOut = function(event) {
	_tmpTargetResetTab = "";
	try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	removeButton30Event();
	if(!lockHover){
		var _tabId = (tabTarget != undefined) ? tabTarget[0].id : "";
		_tabId=_tabId.replace("_tab","_event");
		if(_tabId == event.target.id) {
			$("#svg").css("cursor","");
			return;
		}
		setHoverButton("#button30_hover",false);
	}
}

var addButton30Event = function() {
    document.getElementById("button30_event").addEventListener("mouseover", button30MouseOver);
	document.getElementById("button30_event").addEventListener("mousedown", button30MouseDown);
	document.getElementById("button30_event").addEventListener("mouseup", button30MouseUp);
}

var removeButton30Event = function() {
    document.getElementById("button30_event").removeEventListener("click", button30Click);
    document.getElementById("button30_event").removeEventListener("mouseout", button30MouseOut);
}

addButton30Event();
//=======================================================
var button31Click = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	if(event != undefined)
		setHoverButton("#"+getIdButton(tmpTarget)+"_hover",true);
	// write code below here
	
	if(_buttonColorClick == "buttonColor1"){
		$("#buttonColor1_active").attr("fill","#ffff00");
		if((isShow(_listItemRow1[0]) || isShow(_listItemRow1[1])))
			color = "#ffff00";
	} 
	
	if(_buttonColorClick == "buttonColor2"){
		$("#buttonColor2_active").attr("fill","#ffff00");
		mojiColor="rgb(255, 255, 0)";
	}
	$("#colorTab").hide();
}

var button31MouseDown = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	tmpTarget = event.target.id;
	lockHover = true;
    document.getElementById("button31_event").addEventListener("click", button31Click);
    document.getElementById("button31_event").addEventListener("mouseup", button31MouseUp);
}

var button31MouseUp = function(event){
	setHoverButton("#"+getIdButton(tmpTarget)+"_hover",false);
	setHoverButton("#button31_hover",true);
	lockHover = false;
}

var button31MouseOver = function(event) {
	if(!lockHover){
		tmpTarget = event.target.id;
		_tmpTargetResetTab = event.target.id;
		setHoverButton("#button31_hover",true);
	}
	document.getElementById("button31_event").addEventListener("mouseout", button31MouseOut);
	document.getElementById("button31_event").addEventListener("mousedown", button31MouseDown);
}

var button31MouseOut = function(event) {
	_tmpTargetResetTab = "";
	try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	removeButton31Event();
	if(!lockHover){
		var _tabId = (tabTarget != undefined) ? tabTarget[0].id : "";
		_tabId=_tabId.replace("_tab","_event");
		if(_tabId == event.target.id) {
			$("#svg").css("cursor","");
			return;
		}
		setHoverButton("#button31_hover",false);
	}
}

var addButton31Event = function() {
    document.getElementById("button31_event").addEventListener("mouseover", button31MouseOver);
	document.getElementById("button31_event").addEventListener("mousedown", button31MouseDown);
	document.getElementById("button31_event").addEventListener("mouseup", button31MouseUp);
}

var removeButton31Event = function() {
    document.getElementById("button31_event").removeEventListener("click", button31Click);
    document.getElementById("button31_event").removeEventListener("mouseout", button31MouseOut);
}

addButton31Event();
//=======================================================
var button32Click = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	if(event != undefined)
		setHoverButton("#"+getIdButton(tmpTarget)+"_hover",true);
	// write code below here
	
	if(_buttonColorClick == "buttonColor1"){
		$("#buttonColor1_active").attr("fill","#7eff00");
		if((isShow(_listItemRow1[0]) || isShow(_listItemRow1[1])))
			color = "#7eff00";
	} 
	
	if(_buttonColorClick == "buttonColor2"){
		$("#buttonColor2_active").attr("fill","#7eff00");
		mojiColor="rgb(126, 255, 0)";
	}
	$("#colorTab").hide();
}

var button32MouseDown = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	tmpTarget = event.target.id;
	lockHover = true;
    document.getElementById("button32_event").addEventListener("click", button32Click);
    document.getElementById("button32_event").addEventListener("mouseup", button32MouseUp);
}

var button32MouseUp = function(event){
	setHoverButton("#"+getIdButton(tmpTarget)+"_hover",false);
	setHoverButton("#button32_hover",true);
	lockHover = false;
}

var button32MouseOver = function(event) {
	if(!lockHover){
		tmpTarget = event.target.id;
		_tmpTargetResetTab = event.target.id;
		setHoverButton("#button32_hover",true);
	}
	document.getElementById("button32_event").addEventListener("mouseout", button32MouseOut);
	document.getElementById("button32_event").addEventListener("mousedown", button32MouseDown);
}

var button32MouseOut = function(event) {
	_tmpTargetResetTab = "";
	try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	removeButton32Event();
	if(!lockHover){
		var _tabId = (tabTarget != undefined) ? tabTarget[0].id : "";
		_tabId=_tabId.replace("_tab","_event");
		if(_tabId == event.target.id) {
			$("#svg").css("cursor","");
			return;
		}
		setHoverButton("#button32_hover",false);
	}
}

var addButton32Event = function() {
    document.getElementById("button32_event").addEventListener("mouseover", button32MouseOver);
	document.getElementById("button32_event").addEventListener("mousedown", button32MouseDown);
	document.getElementById("button32_event").addEventListener("mouseup", button32MouseUp);
}

var removeButton32Event = function() {
    document.getElementById("button32_event").removeEventListener("click", button32Click);
    document.getElementById("button32_event").removeEventListener("mouseout", button32MouseOut);
}

addButton32Event();
//=======================================================
var buttonCloseColorTabClick = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	if(event != undefined)
		setHoverButton("#"+getIdButton(tmpTarget)+"_hover",true);
	// write code below here
	$("#colorTab").hide();
}

var buttonCloseColorTabMouseDown = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	tmpTarget = event.target.id;
	lockHover = true;
    document.getElementById("buttonCloseColorTab_event").addEventListener("click", buttonCloseColorTabClick);
    document.getElementById("buttonCloseColorTab_event").addEventListener("mouseup", buttonCloseColorTabMouseUp);
}

var buttonCloseColorTabMouseUp = function(event){
	setHoverButton("#"+getIdButton(tmpTarget)+"_hover",false);
	setHoverButton("#buttonCloseColorTab_hover",true);
	lockHover = false;
}

var buttonCloseColorTabMouseOver = function(event) {
	if(!lockHover){
		tmpTarget = event.target.id;
		_tmpTargetResetTab = event.target.id;
		setHoverButton("#buttonCloseColorTab_hover",true);
	}
	document.getElementById("buttonCloseColorTab_event").addEventListener("mouseout", buttonCloseColorTabMouseOut);
	document.getElementById("buttonCloseColorTab_event").addEventListener("mousedown", buttonCloseColorTabMouseDown);
}

var buttonCloseColorTabMouseOut = function(event) {
	_tmpTargetResetTab = "";
	try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	removeButtonCloseColorTabEvent();
	if(!lockHover){
		var _tabId = (tabTarget != undefined) ? tabTarget[0].id : "";
		_tabId=_tabId.replace("_tab","_event");
		if(_tabId == event.target.id) {
			$("#svg").css("cursor","");
			return;
		}
		setHoverButton("#buttonCloseColorTab_hover",false);
	}
}

var addButtonCloseColorTabEvent = function() {
    document.getElementById("buttonCloseColorTab_event").addEventListener("mouseover", buttonCloseColorTabMouseOver);
	document.getElementById("buttonCloseColorTab_event").addEventListener("mousedown", buttonCloseColorTabMouseDown);
	document.getElementById("buttonCloseColorTab_event").addEventListener("mouseup", buttonCloseColorTabMouseUp);
}

var removeButtonCloseColorTabEvent = function() {
    document.getElementById("buttonCloseColorTab_event").removeEventListener("click", buttonCloseColorTabClick);
    document.getElementById("buttonCloseColorTab_event").removeEventListener("mouseout", buttonCloseColorTabMouseOut);
}

addButtonCloseColorTabEvent();

//=======================================================
var buttonCancelClick = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	if(event != undefined)
		setHoverButton("#"+getIdButton(tmpTarget)+"_hover",true);
	// write code below here
	$("#deleteFrame").hide();
}

var buttonCancelMouseDown = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	tmpTarget = event.target.id;
	lockHover = true;
    document.getElementById("buttonCancel_event").addEventListener("click", buttonCancelClick);
    document.getElementById("buttonCancel_event").addEventListener("mouseup", buttonCancelMouseUp);
}

var buttonCancelMouseUp = function(event){
	setHoverButton("#"+getIdButton(tmpTarget)+"_hover",false);
	setHoverButton("#buttonCancel_hover",true);
	lockHover = false;
}

var buttonCancelMouseOver = function(event) {
	if(!lockHover){
		tmpTarget = event.target.id;
		_tmpTargetResetTab = event.target.id;
		setHoverButton("#buttonCancel_hover",true);
	}
	document.getElementById("buttonCancel_event").addEventListener("mouseout", buttonCancelMouseOut);
	document.getElementById("buttonCancel_event").addEventListener("mousedown", buttonCancelMouseDown);
}

var buttonCancelMouseOut = function(event) {
	_tmpTargetResetTab = "";
	try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	removeButtonCancelEvent();
	if(!lockHover){
		var _tabId = (tabTarget != undefined) ? tabTarget[0].id : "";
		_tabId=_tabId.replace("_tab","_event");
		if(_tabId == event.target.id) {
			$("#svg").css("cursor","");
			return;
		}
		setHoverButton("#buttonCancel_hover",false);
	}
}

var addButtonCancelEvent = function() {
    document.getElementById("buttonCancel_event").addEventListener("mouseover", buttonCancelMouseOver);
	document.getElementById("buttonCancel_event").addEventListener("mousedown", buttonCancelMouseDown);
	document.getElementById("buttonCancel_event").addEventListener("mouseup", buttonCancelMouseUp);
}

var removeButtonCancelEvent = function() {
    document.getElementById("buttonCancel_event").removeEventListener("click", buttonCancelClick);
    document.getElementById("buttonCancel_event").removeEventListener("mouseout", buttonCancelMouseOut);
}

addButtonCancelEvent();
//=======================================================
var buttonOKClick = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	if(event != undefined)
		setHoverButton("#"+getIdButton(tmpTarget)+"_hover",true);
	// write code below here
	container.removeAllChildren();
	tmpItemToDrag.removeAllChildren();
	stage1.clear();
	stage1.update();
	
	stage2.clear();
	stage2.update();
	$("#deleteFrame").hide();
}

var buttonOKMouseDown = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	tmpTarget = event.target.id;
	lockHover = true;
    document.getElementById("buttonOK_event").addEventListener("click", buttonOKClick);
    document.getElementById("buttonOK_event").addEventListener("mouseup", buttonOKMouseUp);
}

var buttonOKMouseUp = function(event){
	setHoverButton("#"+getIdButton(tmpTarget)+"_hover",false);
	setHoverButton("#buttonOK_hover",true);
	lockHover = false;
}

var buttonOKMouseOver = function(event) {
	if(!lockHover){
		tmpTarget = event.target.id;
		_tmpTargetResetTab = event.target.id;
		setHoverButton("#buttonOK_hover",true);
	}
	document.getElementById("buttonOK_event").addEventListener("mouseout", buttonOKMouseOut);
	document.getElementById("buttonOK_event").addEventListener("mousedown", buttonOKMouseDown);
}

var buttonOKMouseOut = function(event) {
	_tmpTargetResetTab = "";
	try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	removeButtonOKEvent();
	if(!lockHover){
		var _tabId = (tabTarget != undefined) ? tabTarget[0].id : "";
		_tabId=_tabId.replace("_tab","_event");
		if(_tabId == event.target.id) {
			$("#svg").css("cursor","");
			return;
		}
		setHoverButton("#buttonOK_hover",false);
	}
}

var addButtonOKEvent = function() {
    document.getElementById("buttonOK_event").addEventListener("mouseover", buttonOKMouseOver);
	document.getElementById("buttonOK_event").addEventListener("mousedown", buttonOKMouseDown);
	document.getElementById("buttonOK_event").addEventListener("mouseup", buttonOKMouseUp);
}

var removeButtonOKEvent = function() {
    document.getElementById("buttonOK_event").removeEventListener("click", buttonOKClick);
    document.getElementById("buttonOK_event").removeEventListener("mouseout", buttonOKMouseOut);
}

addButtonOKEvent();
//=======================================================
var buttonCloseTab5Click = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	if(event != undefined)
		setHoverButton("#"+getIdButton(tmpTarget)+"_hover",true);
	// write code below here
	
	isStampFlagFalse(canvas,event);
	textflag=false;
	stampflag=false;
	imageflag=false;
	$("#TabFunc5").hide();
	$("#bgTabFunction").hide();			
	btnPen_lineClick();	
}

var buttonCloseTab5MouseDown = function(event) {
    try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	tmpTarget = event.target.id;
	lockHover = true;
    document.getElementById("buttonCloseTab5_event").addEventListener("click", buttonCloseTab5Click);
    document.getElementById("buttonCloseTab5_event").addEventListener("mouseup", buttonCloseTab5MouseUp);
}

var buttonCloseTab5MouseUp = function(event){
	setHoverButton("#"+getIdButton(tmpTarget)+"_hover",false);
	setHoverButton("#buttonCloseTab5_hover",true);
	lockHover = false;
}

var buttonCloseTab5MouseOver = function(event) {
	if(!lockHover){
		tmpTarget = event.target.id;
		_tmpTargetResetTab = event.target.id;
		setHoverButton("#buttonCloseTab5_hover",true);
	}
	document.getElementById("buttonCloseTab5_event").addEventListener("mouseout", buttonCloseTab5MouseOut);
	document.getElementById("buttonCloseTab5_event").addEventListener("mousedown", buttonCloseTab5MouseDown);
}

var buttonCloseTab5MouseOut = function(event) {
	_tmpTargetResetTab = "";
	try {
        if (detectmob() != 1 && detectmob() != 3)
            if (event.which == 3 || event.which == 2) {
                return;
            }
    } catch (error) {}
	removeButtonCloseTab5Event();
	if(!lockHover){
		var _tabId = (tabTarget != undefined) ? tabTarget[0].id : "";
		_tabId=_tabId.replace("_tab","_event");
		if(_tabId == event.target.id) {
			$("#svg").css("cursor","");
			return;
		}
		setHoverButton("#buttonCloseTab5_hover",false);
	}
}

var addButtonCloseTab5Event = function() {
    document.getElementById("buttonCloseTab5_event").addEventListener("mouseover", buttonCloseTab5MouseOver);
	document.getElementById("buttonCloseTab5_event").addEventListener("mousedown", buttonCloseTab5MouseDown);
	document.getElementById("buttonCloseTab5_event").addEventListener("mouseup", buttonCloseTab5MouseUp);
}

var removeButtonCloseTab5Event = function() {
    document.getElementById("buttonCloseTab5_event").removeEventListener("click", buttonCloseTab5Click);
    document.getElementById("buttonCloseTab5_event").removeEventListener("mouseout", buttonCloseTab5MouseOut);
}

addButtonCloseTab5Event();
