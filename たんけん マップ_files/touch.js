window.addEventListener('load', function() {
	var btnPen_line_touch = document.getElementById("btnPen_line_event");
	var btnPen_curve_touch = document.getElementById("btnPen_curve_event");
	var btnMoji_size1_touch = document.getElementById("btnMoji_size1_event");
	var btnMoji_size2_touch = document.getElementById("btnMoji_size2_event");
	var btnMoji_size3_touch = document.getElementById("btnMoji_size3_event");
	var btnMichi_line_touch = document.getElementById("btnMichi_line_event");
	var btnMichi_curve_touch = document.getElementById("btnMichi_curve_event");
	var btnKawa_line_touch = document.getElementById("btnKawa_line_event");
	var btnKawa_curve_touch = document.getElementById("btnKawa_curve_event");
	var btnSenro_line_touch = document.getElementById("btnSenro_line_event");
	var btnSenro_curve_touch = document.getElementById("btnSenro_curve_event");
	var btnSenro_1_touch = document.getElementById("btnSenro_1_event");
	var btnSenro_2_touch = document.getElementById("btnSenro_2_event");
	var button12_touch = document.getElementById("button12_event");
	var button13_touch = document.getElementById("button13_event");
	var button19_touch = document.getElementById("button19_event");
	var button14_touch = document.getElementById("button14_event");
	var button15_touch = document.getElementById("button15_event");
	var button16_touch = document.getElementById("button16_event");
	var save_touch = document.getElementById("save_event");
	var load_touch = document.getElementById("load_event");
	var button20_touch = document.getElementById("button20_event");
	var btnMichi_size1_touch = document.getElementById("btnMichi_size1_event");
	var btnMichi_size2_touch = document.getElementById("btnMichi_size2_event");
	var btnMichi_size3_touch = document.getElementById("btnMichi_size3_event");
	var btnKawa_size1_touch = document.getElementById("btnKawa_size1_event");
	var btnKawa_size2_touch = document.getElementById("btnKawa_size2_event");
	var btnKawa_size3_touch = document.getElementById("btnKawa_size3_event");
	var buttonColor1_touch = document.getElementById("buttonColor1_event");
	var buttonColor2_touch = document.getElementById("buttonColor2_event");
	var buttonCloseTab1_touch = document.getElementById("buttonCloseTab1_event");
	var buttonCloseTab2_touch = document.getElementById("buttonCloseTab2_event");
	var buttonCloseTab3_touch = document.getElementById("buttonCloseTab3_event");
	var buttonCloseTab4_touch = document.getElementById("buttonCloseTab4_event");
	var buttonSpan_show_touch = document.getElementById("buttonSpan_show_event");
	var button27_touch = document.getElementById("button27_event");
	var button28_touch = document.getElementById("button28_event");
	var button29_touch = document.getElementById("button29_event");
	var button30_touch = document.getElementById("button30_event");
	var button31_touch = document.getElementById("button31_event");
	var button32_touch = document.getElementById("button32_event");
	var buttonCloseColorTab_touch = document.getElementById("buttonCloseColorTab_event");
	var buttonCancel_touch = document.getElementById("buttonCancel_event");
	var buttonOK_touch = document.getElementById("buttonOK_event");
	var buttonCloseTab5_touch = document.getElementById("buttonCloseTab5_event");
	var buttonsticker_touch = document.getElementById("buttonsticker_event");
	var instance_body = document.getElementById("bodyID");if (detectmob() != 0) {
var touchStart = function(index){
removeBtnPen_lineEvent();
document.getElementById("btnPen_line_event").removeEventListener("mouseover", btnPen_lineMouseOver);
document.getElementById("btnPen_line_event").removeEventListener("mouseup", btnPen_lineMouseUp);
document.getElementById("btnPen_line_event").removeEventListener("mousedown", btnPen_lineMouseDown);
btnPen_line_touch.removeEventListener("touchstart", btnPen_lineTouchStart, false);
removeBtnPen_curveEvent();
document.getElementById("btnPen_curve_event").removeEventListener("mouseover", btnPen_curveMouseOver);
document.getElementById("btnPen_curve_event").removeEventListener("mouseup", btnPen_curveMouseUp);
document.getElementById("btnPen_curve_event").removeEventListener("mousedown", btnPen_curveMouseDown);
btnPen_curve_touch.removeEventListener("touchstart", btnPen_curveTouchStart, false);
removeBtnMoji_size1Event();
document.getElementById("btnMoji_size1_event").removeEventListener("mouseover", btnMoji_size1MouseOver);
document.getElementById("btnMoji_size1_event").removeEventListener("mouseup", btnMoji_size1MouseUp);
document.getElementById("btnMoji_size1_event").removeEventListener("mousedown", btnMoji_size1MouseDown);
btnMoji_size1_touch.removeEventListener("touchstart", btnMoji_size1TouchStart, false);
removeBtnMoji_size2Event();
document.getElementById("btnMoji_size2_event").removeEventListener("mouseover", btnMoji_size2MouseOver);
document.getElementById("btnMoji_size2_event").removeEventListener("mouseup", btnMoji_size2MouseUp);
document.getElementById("btnMoji_size2_event").removeEventListener("mousedown", btnMoji_size2MouseDown);
btnMoji_size2_touch.removeEventListener("touchstart", btnMoji_size2TouchStart, false);
removeBtnMoji_size3Event();
document.getElementById("btnMoji_size3_event").removeEventListener("mouseover", btnMoji_size3MouseOver);
document.getElementById("btnMoji_size3_event").removeEventListener("mouseup", btnMoji_size3MouseUp);
document.getElementById("btnMoji_size3_event").removeEventListener("mousedown", btnMoji_size3MouseDown);
btnMoji_size3_touch.removeEventListener("touchstart", btnMoji_size3TouchStart, false);
removeBtnMichi_lineEvent();
document.getElementById("btnMichi_line_event").removeEventListener("mouseover", btnMichi_lineMouseOver);
document.getElementById("btnMichi_line_event").removeEventListener("mouseup", btnMichi_lineMouseUp);
document.getElementById("btnMichi_line_event").removeEventListener("mousedown", btnMichi_lineMouseDown);
btnMichi_line_touch.removeEventListener("touchstart", btnMichi_lineTouchStart, false);
removeBtnMichi_curveEvent();
document.getElementById("btnMichi_curve_event").removeEventListener("mouseover", btnMichi_curveMouseOver);
document.getElementById("btnMichi_curve_event").removeEventListener("mouseup", btnMichi_curveMouseUp);
document.getElementById("btnMichi_curve_event").removeEventListener("mousedown", btnMichi_curveMouseDown);
btnMichi_curve_touch.removeEventListener("touchstart", btnMichi_curveTouchStart, false);
removeBtnKawa_lineEvent();
document.getElementById("btnKawa_line_event").removeEventListener("mouseover", btnKawa_lineMouseOver);
document.getElementById("btnKawa_line_event").removeEventListener("mouseup", btnKawa_lineMouseUp);
document.getElementById("btnKawa_line_event").removeEventListener("mousedown", btnKawa_lineMouseDown);
btnKawa_line_touch.removeEventListener("touchstart", btnKawa_lineTouchStart, false);
removeBtnKawa_curveEvent();
document.getElementById("btnKawa_curve_event").removeEventListener("mouseover", btnKawa_curveMouseOver);
document.getElementById("btnKawa_curve_event").removeEventListener("mouseup", btnKawa_curveMouseUp);
document.getElementById("btnKawa_curve_event").removeEventListener("mousedown", btnKawa_curveMouseDown);
btnKawa_curve_touch.removeEventListener("touchstart", btnKawa_curveTouchStart, false);
removeBtnSenro_lineEvent();
document.getElementById("btnSenro_line_event").removeEventListener("mouseover", btnSenro_lineMouseOver);
document.getElementById("btnSenro_line_event").removeEventListener("mouseup", btnSenro_lineMouseUp);
document.getElementById("btnSenro_line_event").removeEventListener("mousedown", btnSenro_lineMouseDown);
btnSenro_line_touch.removeEventListener("touchstart", btnSenro_lineTouchStart, false);
removeBtnSenro_curveEvent();
document.getElementById("btnSenro_curve_event").removeEventListener("mouseover", btnSenro_curveMouseOver);
document.getElementById("btnSenro_curve_event").removeEventListener("mouseup", btnSenro_curveMouseUp);
document.getElementById("btnSenro_curve_event").removeEventListener("mousedown", btnSenro_curveMouseDown);
btnSenro_curve_touch.removeEventListener("touchstart", btnSenro_curveTouchStart, false);
removeBtnSenro_1Event();
document.getElementById("btnSenro_1_event").removeEventListener("mouseover", btnSenro_1MouseOver);
document.getElementById("btnSenro_1_event").removeEventListener("mouseup", btnSenro_1MouseUp);
document.getElementById("btnSenro_1_event").removeEventListener("mousedown", btnSenro_1MouseDown);
btnSenro_1_touch.removeEventListener("touchstart", btnSenro_1TouchStart, false);
removeBtnSenro_2Event();
document.getElementById("btnSenro_2_event").removeEventListener("mouseover", btnSenro_2MouseOver);
document.getElementById("btnSenro_2_event").removeEventListener("mouseup", btnSenro_2MouseUp);
document.getElementById("btnSenro_2_event").removeEventListener("mousedown", btnSenro_2MouseDown);
btnSenro_2_touch.removeEventListener("touchstart", btnSenro_2TouchStart, false);
removeButton12Event();
document.getElementById("button12_event").removeEventListener("mouseover", button12MouseOver);
document.getElementById("button12_event").removeEventListener("mouseup", button12MouseUp);
document.getElementById("button12_event").removeEventListener("mousedown", button12MouseDown);
button12_touch.removeEventListener("touchstart", button12TouchStart, false);
removeButton13Event();
document.getElementById("button13_event").removeEventListener("mouseover", button13MouseOver);
document.getElementById("button13_event").removeEventListener("mouseup", button13MouseUp);
document.getElementById("button13_event").removeEventListener("mousedown", button13MouseDown);
button13_touch.removeEventListener("touchstart", button13TouchStart, false);
removeButton19Event();
document.getElementById("button19_event").removeEventListener("mouseover", button19MouseOver);
document.getElementById("button19_event").removeEventListener("mouseup", button19MouseUp);
document.getElementById("button19_event").removeEventListener("mousedown", button19MouseDown);
button19_touch.removeEventListener("touchstart", button19TouchStart, false);
removeButton14Event();
document.getElementById("button14_event").removeEventListener("mouseover", button14MouseOver);
document.getElementById("button14_event").removeEventListener("mouseup", button14MouseUp);
document.getElementById("button14_event").removeEventListener("mousedown", button14MouseDown);
button14_touch.removeEventListener("touchstart", button14TouchStart, false);
removeButton15Event();
document.getElementById("button15_event").removeEventListener("mouseover", button15MouseOver);
document.getElementById("button15_event").removeEventListener("mouseup", button15MouseUp);
document.getElementById("button15_event").removeEventListener("mousedown", button15MouseDown);
button15_touch.removeEventListener("touchstart", button15TouchStart, false);
removeButton16Event();
document.getElementById("button16_event").removeEventListener("mouseover", button16MouseOver);
document.getElementById("button16_event").removeEventListener("mouseup", button16MouseUp);
document.getElementById("button16_event").removeEventListener("mousedown", button16MouseDown);
button16_touch.removeEventListener("touchstart", button16TouchStart, false);
removeSaveEvent();
document.getElementById("save_event").removeEventListener("mouseover", saveMouseOver);
document.getElementById("save_event").removeEventListener("mouseup", saveMouseUp);
document.getElementById("save_event").removeEventListener("mousedown", saveMouseDown);
save_touch.removeEventListener("touchstart", saveTouchStart, false);
removeLoadEvent();
document.getElementById("load_event").removeEventListener("mouseover", loadMouseOver);
document.getElementById("load_event").removeEventListener("mouseup", loadMouseUp);
document.getElementById("load_event").removeEventListener("mousedown", loadMouseDown);
load_touch.removeEventListener("touchstart", loadTouchStart, false);
removeButton20Event();
document.getElementById("button20_event").removeEventListener("mouseover", button20MouseOver);
document.getElementById("button20_event").removeEventListener("mouseup", button20MouseUp);
document.getElementById("button20_event").removeEventListener("mousedown", button20MouseDown);
button20_touch.removeEventListener("touchstart", button20TouchStart, false);
removeBtnMichi_size1Event();
document.getElementById("btnMichi_size1_event").removeEventListener("mouseover", btnMichi_size1MouseOver);
document.getElementById("btnMichi_size1_event").removeEventListener("mouseup", btnMichi_size1MouseUp);
document.getElementById("btnMichi_size1_event").removeEventListener("mousedown", btnMichi_size1MouseDown);
btnMichi_size1_touch.removeEventListener("touchstart", btnMichi_size1TouchStart, false);
removeBtnMichi_size2Event();
document.getElementById("btnMichi_size2_event").removeEventListener("mouseover", btnMichi_size2MouseOver);
document.getElementById("btnMichi_size2_event").removeEventListener("mouseup", btnMichi_size2MouseUp);
document.getElementById("btnMichi_size2_event").removeEventListener("mousedown", btnMichi_size2MouseDown);
btnMichi_size2_touch.removeEventListener("touchstart", btnMichi_size2TouchStart, false);
removeBtnMichi_size3Event();
document.getElementById("btnMichi_size3_event").removeEventListener("mouseover", btnMichi_size3MouseOver);
document.getElementById("btnMichi_size3_event").removeEventListener("mouseup", btnMichi_size3MouseUp);
document.getElementById("btnMichi_size3_event").removeEventListener("mousedown", btnMichi_size3MouseDown);
btnMichi_size3_touch.removeEventListener("touchstart", btnMichi_size3TouchStart, false);
removeBtnKawa_size1Event();
document.getElementById("btnKawa_size1_event").removeEventListener("mouseover", btnKawa_size1MouseOver);
document.getElementById("btnKawa_size1_event").removeEventListener("mouseup", btnKawa_size1MouseUp);
document.getElementById("btnKawa_size1_event").removeEventListener("mousedown", btnKawa_size1MouseDown);
btnKawa_size1_touch.removeEventListener("touchstart", btnKawa_size1TouchStart, false);
removeBtnKawa_size2Event();
document.getElementById("btnKawa_size2_event").removeEventListener("mouseover", btnKawa_size2MouseOver);
document.getElementById("btnKawa_size2_event").removeEventListener("mouseup", btnKawa_size2MouseUp);
document.getElementById("btnKawa_size2_event").removeEventListener("mousedown", btnKawa_size2MouseDown);
btnKawa_size2_touch.removeEventListener("touchstart", btnKawa_size2TouchStart, false);
removeBtnKawa_size3Event();
document.getElementById("btnKawa_size3_event").removeEventListener("mouseover", btnKawa_size3MouseOver);
document.getElementById("btnKawa_size3_event").removeEventListener("mouseup", btnKawa_size3MouseUp);
document.getElementById("btnKawa_size3_event").removeEventListener("mousedown", btnKawa_size3MouseDown);
btnKawa_size3_touch.removeEventListener("touchstart", btnKawa_size3TouchStart, false);
removeButtonColor1Event();
document.getElementById("buttonColor1_event").removeEventListener("mouseover", buttonColor1MouseOver);
document.getElementById("buttonColor1_event").removeEventListener("mouseup", buttonColor1MouseUp);
document.getElementById("buttonColor1_event").removeEventListener("mousedown", buttonColor1MouseDown);
buttonColor1_touch.removeEventListener("touchstart", buttonColor1TouchStart, false);
removeButtonColor2Event();
document.getElementById("buttonColor2_event").removeEventListener("mouseover", buttonColor2MouseOver);
document.getElementById("buttonColor2_event").removeEventListener("mouseup", buttonColor2MouseUp);
document.getElementById("buttonColor2_event").removeEventListener("mousedown", buttonColor2MouseDown);
buttonColor2_touch.removeEventListener("touchstart", buttonColor2TouchStart, false);
removeButtonCloseTab1Event();
document.getElementById("buttonCloseTab1_event").removeEventListener("mouseover", buttonCloseTab1MouseOver);
document.getElementById("buttonCloseTab1_event").removeEventListener("mouseup", buttonCloseTab1MouseUp);
document.getElementById("buttonCloseTab1_event").removeEventListener("mousedown", buttonCloseTab1MouseDown);
buttonCloseTab1_touch.removeEventListener("touchstart", buttonCloseTab1TouchStart, false);
removeButtonCloseTab2Event();
document.getElementById("buttonCloseTab2_event").removeEventListener("mouseover", buttonCloseTab2MouseOver);
document.getElementById("buttonCloseTab2_event").removeEventListener("mouseup", buttonCloseTab2MouseUp);
document.getElementById("buttonCloseTab2_event").removeEventListener("mousedown", buttonCloseTab2MouseDown);
buttonCloseTab2_touch.removeEventListener("touchstart", buttonCloseTab2TouchStart, false);
removeButtonCloseTab3Event();
document.getElementById("buttonCloseTab3_event").removeEventListener("mouseover", buttonCloseTab3MouseOver);
document.getElementById("buttonCloseTab3_event").removeEventListener("mouseup", buttonCloseTab3MouseUp);
document.getElementById("buttonCloseTab3_event").removeEventListener("mousedown", buttonCloseTab3MouseDown);
buttonCloseTab3_touch.removeEventListener("touchstart", buttonCloseTab3TouchStart, false);
removeButtonCloseTab4Event();
document.getElementById("buttonCloseTab4_event").removeEventListener("mouseover", buttonCloseTab4MouseOver);
document.getElementById("buttonCloseTab4_event").removeEventListener("mouseup", buttonCloseTab4MouseUp);
document.getElementById("buttonCloseTab4_event").removeEventListener("mousedown", buttonCloseTab4MouseDown);
buttonCloseTab4_touch.removeEventListener("touchstart", buttonCloseTab4TouchStart, false);
removeButtonSpan_showEvent();
document.getElementById("buttonSpan_show_event").removeEventListener("mouseover", buttonSpan_showMouseOver);
document.getElementById("buttonSpan_show_event").removeEventListener("mouseup", buttonSpan_showMouseUp);
document.getElementById("buttonSpan_show_event").removeEventListener("mousedown", buttonSpan_showMouseDown);
buttonSpan_show_touch.removeEventListener("touchstart", buttonSpan_showTouchStart, false);
removeButton27Event();
document.getElementById("button27_event").removeEventListener("mouseover", button27MouseOver);
document.getElementById("button27_event").removeEventListener("mouseup", button27MouseUp);
document.getElementById("button27_event").removeEventListener("mousedown", button27MouseDown);
button27_touch.removeEventListener("touchstart", button27TouchStart, false);
removeButton28Event();
document.getElementById("button28_event").removeEventListener("mouseover", button28MouseOver);
document.getElementById("button28_event").removeEventListener("mouseup", button28MouseUp);
document.getElementById("button28_event").removeEventListener("mousedown", button28MouseDown);
button28_touch.removeEventListener("touchstart", button28TouchStart, false);
removeButton29Event();
document.getElementById("button29_event").removeEventListener("mouseover", button29MouseOver);
document.getElementById("button29_event").removeEventListener("mouseup", button29MouseUp);
document.getElementById("button29_event").removeEventListener("mousedown", button29MouseDown);
button29_touch.removeEventListener("touchstart", button29TouchStart, false);
removeButton30Event();
document.getElementById("button30_event").removeEventListener("mouseover", button30MouseOver);
document.getElementById("button30_event").removeEventListener("mouseup", button30MouseUp);
document.getElementById("button30_event").removeEventListener("mousedown", button30MouseDown);
button30_touch.removeEventListener("touchstart", button30TouchStart, false);
removeButton31Event();
document.getElementById("button31_event").removeEventListener("mouseover", button31MouseOver);
document.getElementById("button31_event").removeEventListener("mouseup", button31MouseUp);
document.getElementById("button31_event").removeEventListener("mousedown", button31MouseDown);
button31_touch.removeEventListener("touchstart", button31TouchStart, false);
removeButton32Event();
document.getElementById("button32_event").removeEventListener("mouseover", button32MouseOver);
document.getElementById("button32_event").removeEventListener("mouseup", button32MouseUp);
document.getElementById("button32_event").removeEventListener("mousedown", button32MouseDown);
button32_touch.removeEventListener("touchstart", button32TouchStart, false);
removeButtonCloseColorTabEvent();
document.getElementById("buttonCloseColorTab_event").removeEventListener("mouseover", buttonCloseColorTabMouseOver);
document.getElementById("buttonCloseColorTab_event").removeEventListener("mouseup", buttonCloseColorTabMouseUp);
document.getElementById("buttonCloseColorTab_event").removeEventListener("mousedown", buttonCloseColorTabMouseDown);
buttonCloseColorTab_touch.removeEventListener("touchstart", buttonCloseColorTabTouchStart, false);
removeButtonCancelEvent();
document.getElementById("buttonCancel_event").removeEventListener("mouseover", buttonCancelMouseOver);
document.getElementById("buttonCancel_event").removeEventListener("mouseup", buttonCancelMouseUp);
document.getElementById("buttonCancel_event").removeEventListener("mousedown", buttonCancelMouseDown);
buttonCancel_touch.removeEventListener("touchstart", buttonCancelTouchStart, false);
removeButtonOKEvent();
document.getElementById("buttonOK_event").removeEventListener("mouseover", buttonOKMouseOver);
document.getElementById("buttonOK_event").removeEventListener("mouseup", buttonOKMouseUp);
document.getElementById("buttonOK_event").removeEventListener("mousedown", buttonOKMouseDown);
buttonOK_touch.removeEventListener("touchstart", buttonOKTouchStart, false);
removeButtonCloseTab5Event();
document.getElementById("buttonCloseTab5_event").removeEventListener("mouseover", buttonCloseTab5MouseOver);
document.getElementById("buttonCloseTab5_event").removeEventListener("mouseup", buttonCloseTab5MouseUp);
document.getElementById("buttonCloseTab5_event").removeEventListener("mousedown", buttonCloseTab5MouseDown);
buttonCloseTab5_touch.removeEventListener("touchstart", buttonCloseTab5TouchStart, false);
switch(index){
	case 1: btnPen_line_touch.addEventListener("touchend", btnPen_lineTouchEnd, false); break;
	case 2: btnPen_curve_touch.addEventListener("touchend", btnPen_curveTouchEnd, false); break;
	case 3: btnMoji_size1_touch.addEventListener("touchend", btnMoji_size1TouchEnd, false); break;
	case 4: btnMoji_size2_touch.addEventListener("touchend", btnMoji_size2TouchEnd, false); break;
	case 5: btnMoji_size3_touch.addEventListener("touchend", btnMoji_size3TouchEnd, false); break;
	case 6: btnMichi_line_touch.addEventListener("touchend", btnMichi_lineTouchEnd, false); break;
	case 7: btnMichi_curve_touch.addEventListener("touchend", btnMichi_curveTouchEnd, false); break;
	case 8: btnKawa_line_touch.addEventListener("touchend", btnKawa_lineTouchEnd, false); break;
	case 9: btnKawa_curve_touch.addEventListener("touchend", btnKawa_curveTouchEnd, false); break;
	case 10: btnSenro_line_touch.addEventListener("touchend", btnSenro_lineTouchEnd, false); break;
	case 11: btnSenro_curve_touch.addEventListener("touchend", btnSenro_curveTouchEnd, false); break;
	case 12: btnSenro_1_touch.addEventListener("touchend", btnSenro_1TouchEnd, false); break;
	case 13: btnSenro_2_touch.addEventListener("touchend", btnSenro_2TouchEnd, false); break;
	case 14: button12_touch.addEventListener("touchend", button12TouchEnd, false); break;
	case 15: button13_touch.addEventListener("touchend", button13TouchEnd, false); break;
	case 16: button19_touch.addEventListener("touchend", button19TouchEnd, false); break;
	case 17: button14_touch.addEventListener("touchend", button14TouchEnd, false); break;
	case 18: button15_touch.addEventListener("touchend", button15TouchEnd, false); break;
	case 19: button16_touch.addEventListener("touchend", button16TouchEnd, false); break;
	case 20: save_touch.addEventListener("touchend", saveTouchEnd, false); break;
	case 21: load_touch.addEventListener("touchend", loadTouchEnd, false); break;
	case 22: button20_touch.addEventListener("touchend", button20TouchEnd, false); break;
	case 23: btnMichi_size1_touch.addEventListener("touchend", btnMichi_size1TouchEnd, false); break;
	case 24: btnMichi_size2_touch.addEventListener("touchend", btnMichi_size2TouchEnd, false); break;
	case 25: btnMichi_size3_touch.addEventListener("touchend", btnMichi_size3TouchEnd, false); break;
	case 26: btnKawa_size1_touch.addEventListener("touchend", btnKawa_size1TouchEnd, false); break;
	case 27: btnKawa_size2_touch.addEventListener("touchend", btnKawa_size2TouchEnd, false); break;
	case 28: btnKawa_size3_touch.addEventListener("touchend", btnKawa_size3TouchEnd, false); break;
	case 29: buttonColor1_touch.addEventListener("touchend", buttonColor1TouchEnd, false); break;
	case 30: buttonColor2_touch.addEventListener("touchend", buttonColor2TouchEnd, false); break;
	case 31: buttonCloseTab1_touch.addEventListener("touchend", buttonCloseTab1TouchEnd, false); break;
	case 32: buttonCloseTab2_touch.addEventListener("touchend", buttonCloseTab2TouchEnd, false); break;
	case 33: buttonCloseTab3_touch.addEventListener("touchend", buttonCloseTab3TouchEnd, false); break;
	case 34: buttonCloseTab4_touch.addEventListener("touchend", buttonCloseTab4TouchEnd, false); break;
	case 35: buttonSpan_show_touch.addEventListener("touchend", buttonSpan_showTouchEnd, false); break;
	case 36: button27_touch.addEventListener("touchend", button27TouchEnd, false); break;
	case 37: button28_touch.addEventListener("touchend", button28TouchEnd, false); break;
	case 38: button29_touch.addEventListener("touchend", button29TouchEnd, false); break;
	case 39: button30_touch.addEventListener("touchend", button30TouchEnd, false); break;
	case 40: button31_touch.addEventListener("touchend", button31TouchEnd, false); break;
	case 41: button32_touch.addEventListener("touchend", button32TouchEnd, false); break;
	case 42: buttonCloseColorTab_touch.addEventListener("touchend", buttonCloseColorTabTouchEnd, false); break;
	case 43: buttonCancel_touch.addEventListener("touchend", buttonCancelTouchEnd, false); break;
	case 44: buttonOK_touch.addEventListener("touchend", buttonOKTouchEnd, false); break;
	case 45: buttonCloseTab5_touch.addEventListener("touchend", buttonCloseTab5TouchEnd, false); break;
}
}

var touchEnd  = function(index){
btnPen_line_touch.addEventListener("touchstart", btnPen_lineTouchStart, false);
btnPen_curve_touch.addEventListener("touchstart", btnPen_curveTouchStart, false);
btnMoji_size1_touch.addEventListener("touchstart", btnMoji_size1TouchStart, false);
btnMoji_size2_touch.addEventListener("touchstart", btnMoji_size2TouchStart, false);
btnMoji_size3_touch.addEventListener("touchstart", btnMoji_size3TouchStart, false);
btnMichi_line_touch.addEventListener("touchstart", btnMichi_lineTouchStart, false);
btnMichi_curve_touch.addEventListener("touchstart", btnMichi_curveTouchStart, false);
btnKawa_line_touch.addEventListener("touchstart", btnKawa_lineTouchStart, false);
btnKawa_curve_touch.addEventListener("touchstart", btnKawa_curveTouchStart, false);
btnSenro_line_touch.addEventListener("touchstart", btnSenro_lineTouchStart, false);
btnSenro_curve_touch.addEventListener("touchstart", btnSenro_curveTouchStart, false);
btnSenro_1_touch.addEventListener("touchstart", btnSenro_1TouchStart, false);
btnSenro_2_touch.addEventListener("touchstart", btnSenro_2TouchStart, false);
button12_touch.addEventListener("touchstart", button12TouchStart, false);
button13_touch.addEventListener("touchstart", button13TouchStart, false);
button19_touch.addEventListener("touchstart", button19TouchStart, false);
button14_touch.addEventListener("touchstart", button14TouchStart, false);
button15_touch.addEventListener("touchstart", button15TouchStart, false);
button16_touch.addEventListener("touchstart", button16TouchStart, false);
save_touch.addEventListener("touchstart", saveTouchStart, false);
load_touch.addEventListener("touchstart", loadTouchStart, false);
button20_touch.addEventListener("touchstart", button20TouchStart, false);
btnMichi_size1_touch.addEventListener("touchstart", btnMichi_size1TouchStart, false);
btnMichi_size2_touch.addEventListener("touchstart", btnMichi_size2TouchStart, false);
btnMichi_size3_touch.addEventListener("touchstart", btnMichi_size3TouchStart, false);
btnKawa_size1_touch.addEventListener("touchstart", btnKawa_size1TouchStart, false);
btnKawa_size2_touch.addEventListener("touchstart", btnKawa_size2TouchStart, false);
btnKawa_size3_touch.addEventListener("touchstart", btnKawa_size3TouchStart, false);
buttonColor1_touch.addEventListener("touchstart", buttonColor1TouchStart, false);
buttonColor2_touch.addEventListener("touchstart", buttonColor2TouchStart, false);
buttonCloseTab1_touch.addEventListener("touchstart", buttonCloseTab1TouchStart, false);
buttonCloseTab2_touch.addEventListener("touchstart", buttonCloseTab2TouchStart, false);
buttonCloseTab3_touch.addEventListener("touchstart", buttonCloseTab3TouchStart, false);
buttonCloseTab4_touch.addEventListener("touchstart", buttonCloseTab4TouchStart, false);
buttonSpan_show_touch.addEventListener("touchstart", buttonSpan_showTouchStart, false);
button27_touch.addEventListener("touchstart", button27TouchStart, false);
button28_touch.addEventListener("touchstart", button28TouchStart, false);
button29_touch.addEventListener("touchstart", button29TouchStart, false);
button30_touch.addEventListener("touchstart", button30TouchStart, false);
button31_touch.addEventListener("touchstart", button31TouchStart, false);
button32_touch.addEventListener("touchstart", button32TouchStart, false);
buttonCloseColorTab_touch.addEventListener("touchstart", buttonCloseColorTabTouchStart, false);
buttonCancel_touch.addEventListener("touchstart", buttonCancelTouchStart, false);
buttonOK_touch.addEventListener("touchstart", buttonOKTouchStart, false);
buttonCloseTab5_touch.addEventListener("touchstart", buttonCloseTab5TouchStart, false);
switch(index){
	case 1: btnPen_line_touch.removeEventListener("touchend", btnPen_lineTouchEnd, false); break;	case 2: btnPen_curve_touch.removeEventListener("touchend", btnPen_curveTouchEnd, false); break;	case 3: btnMoji_size1_touch.removeEventListener("touchend", btnMoji_size1TouchEnd, false); break;	case 4: btnMoji_size2_touch.removeEventListener("touchend", btnMoji_size2TouchEnd, false); break;	case 5: btnMoji_size3_touch.removeEventListener("touchend", btnMoji_size3TouchEnd, false); break;	case 6: btnMichi_line_touch.removeEventListener("touchend", btnMichi_lineTouchEnd, false); break;	case 7: btnMichi_curve_touch.removeEventListener("touchend", btnMichi_curveTouchEnd, false); break;	case 8: btnKawa_line_touch.removeEventListener("touchend", btnKawa_lineTouchEnd, false); break;	case 9: btnKawa_curve_touch.removeEventListener("touchend", btnKawa_curveTouchEnd, false); break;	case 10: btnSenro_line_touch.removeEventListener("touchend", btnSenro_lineTouchEnd, false); break;	case 11: btnSenro_curve_touch.removeEventListener("touchend", btnSenro_curveTouchEnd, false); break;	case 12: btnSenro_1_touch.removeEventListener("touchend", btnSenro_1TouchEnd, false); break;	case 13: btnSenro_2_touch.removeEventListener("touchend", btnSenro_2TouchEnd, false); break;	case 14: button12_touch.removeEventListener("touchend", button12TouchEnd, false); break;	case 15: button13_touch.removeEventListener("touchend", button13TouchEnd, false); break;	case 16: button19_touch.removeEventListener("touchend", button19TouchEnd, false); break;	case 17: button14_touch.removeEventListener("touchend", button14TouchEnd, false); break;	case 18: button15_touch.removeEventListener("touchend", button15TouchEnd, false); break;	case 19: button16_touch.removeEventListener("touchend", button16TouchEnd, false); break;	case 20: save_touch.removeEventListener("touchend", saveTouchEnd, false); break;	case 21: load_touch.removeEventListener("touchend", loadTouchEnd, false); break;	case 22: button20_touch.removeEventListener("touchend", button20TouchEnd, false); break;	case 23: btnMichi_size1_touch.removeEventListener("touchend", btnMichi_size1TouchEnd, false); break;	case 24: btnMichi_size2_touch.removeEventListener("touchend", btnMichi_size2TouchEnd, false); break;	case 25: btnMichi_size3_touch.removeEventListener("touchend", btnMichi_size3TouchEnd, false); break;	case 26: btnKawa_size1_touch.removeEventListener("touchend", btnKawa_size1TouchEnd, false); break;	case 27: btnKawa_size2_touch.removeEventListener("touchend", btnKawa_size2TouchEnd, false); break;	case 28: btnKawa_size3_touch.removeEventListener("touchend", btnKawa_size3TouchEnd, false); break;	case 29: buttonColor1_touch.removeEventListener("touchend", buttonColor1TouchEnd, false); break;	case 30: buttonColor2_touch.removeEventListener("touchend", buttonColor2TouchEnd, false); break;	case 31: buttonCloseTab1_touch.removeEventListener("touchend", buttonCloseTab1TouchEnd, false); break;	case 32: buttonCloseTab2_touch.removeEventListener("touchend", buttonCloseTab2TouchEnd, false); break;	case 33: buttonCloseTab3_touch.removeEventListener("touchend", buttonCloseTab3TouchEnd, false); break;	case 34: buttonCloseTab4_touch.removeEventListener("touchend", buttonCloseTab4TouchEnd, false); break;	case 35: buttonSpan_show_touch.removeEventListener("touchend", buttonSpan_showTouchEnd, false); break;	case 36: button27_touch.removeEventListener("touchend", button27TouchEnd, false); break;	case 37: button28_touch.removeEventListener("touchend", button28TouchEnd, false); break;	case 38: button29_touch.removeEventListener("touchend", button29TouchEnd, false); break;	case 39: button30_touch.removeEventListener("touchend", button30TouchEnd, false); break;	case 40: button31_touch.removeEventListener("touchend", button31TouchEnd, false); break;	case 41: button32_touch.removeEventListener("touchend", button32TouchEnd, false); break;	case 42: buttonCloseColorTab_touch.removeEventListener("touchend", buttonCloseColorTabTouchEnd, false); break;	case 43: buttonCancel_touch.removeEventListener("touchend", buttonCancelTouchEnd, false); break;	case 44: buttonOK_touch.removeEventListener("touchend", buttonOKTouchEnd, false); break;	case 45: buttonCloseTab5_touch.removeEventListener("touchend", buttonCloseTab5TouchEnd, false); break;}
}

var pointerDown = function(index){
	removeBtnPen_lineEvent();
	document.getElementById("btnPen_line_event").removeEventListener("mouseover", btnPen_lineMouseOver);
	document.getElementById("btnPen_line_event").removeEventListener("mouseup", btnPen_lineMouseUp);
	document.getElementById("btnPen_line_event").removeEventListener("mousedown", btnPen_lineMouseDown);
	btnPen_line_touch.removeEventListener("MSPointerDown", btnPen_linePointerDown, false);

	removeBtnPen_curveEvent();
	document.getElementById("btnPen_curve_event").removeEventListener("mouseover", btnPen_curveMouseOver);
	document.getElementById("btnPen_curve_event").removeEventListener("mouseup", btnPen_curveMouseUp);
	document.getElementById("btnPen_curve_event").removeEventListener("mousedown", btnPen_curveMouseDown);
	btnPen_curve_touch.removeEventListener("MSPointerDown", btnPen_curvePointerDown, false);

	removeBtnMoji_size1Event();
	document.getElementById("btnMoji_size1_event").removeEventListener("mouseover", btnMoji_size1MouseOver);
	document.getElementById("btnMoji_size1_event").removeEventListener("mouseup", btnMoji_size1MouseUp);
	document.getElementById("btnMoji_size1_event").removeEventListener("mousedown", btnMoji_size1MouseDown);
	btnMoji_size1_touch.removeEventListener("MSPointerDown", btnMoji_size1PointerDown, false);

	removeBtnMoji_size2Event();
	document.getElementById("btnMoji_size2_event").removeEventListener("mouseover", btnMoji_size2MouseOver);
	document.getElementById("btnMoji_size2_event").removeEventListener("mouseup", btnMoji_size2MouseUp);
	document.getElementById("btnMoji_size2_event").removeEventListener("mousedown", btnMoji_size2MouseDown);
	btnMoji_size2_touch.removeEventListener("MSPointerDown", btnMoji_size2PointerDown, false);

	removeBtnMoji_size3Event();
	document.getElementById("btnMoji_size3_event").removeEventListener("mouseover", btnMoji_size3MouseOver);
	document.getElementById("btnMoji_size3_event").removeEventListener("mouseup", btnMoji_size3MouseUp);
	document.getElementById("btnMoji_size3_event").removeEventListener("mousedown", btnMoji_size3MouseDown);
	btnMoji_size3_touch.removeEventListener("MSPointerDown", btnMoji_size3PointerDown, false);

	removeBtnMichi_lineEvent();
	document.getElementById("btnMichi_line_event").removeEventListener("mouseover", btnMichi_lineMouseOver);
	document.getElementById("btnMichi_line_event").removeEventListener("mouseup", btnMichi_lineMouseUp);
	document.getElementById("btnMichi_line_event").removeEventListener("mousedown", btnMichi_lineMouseDown);
	btnMichi_line_touch.removeEventListener("MSPointerDown", btnMichi_linePointerDown, false);

	removeBtnMichi_curveEvent();
	document.getElementById("btnMichi_curve_event").removeEventListener("mouseover", btnMichi_curveMouseOver);
	document.getElementById("btnMichi_curve_event").removeEventListener("mouseup", btnMichi_curveMouseUp);
	document.getElementById("btnMichi_curve_event").removeEventListener("mousedown", btnMichi_curveMouseDown);
	btnMichi_curve_touch.removeEventListener("MSPointerDown", btnMichi_curvePointerDown, false);

	removeBtnKawa_lineEvent();
	document.getElementById("btnKawa_line_event").removeEventListener("mouseover", btnKawa_lineMouseOver);
	document.getElementById("btnKawa_line_event").removeEventListener("mouseup", btnKawa_lineMouseUp);
	document.getElementById("btnKawa_line_event").removeEventListener("mousedown", btnKawa_lineMouseDown);
	btnKawa_line_touch.removeEventListener("MSPointerDown", btnKawa_linePointerDown, false);

	removeBtnKawa_curveEvent();
	document.getElementById("btnKawa_curve_event").removeEventListener("mouseover", btnKawa_curveMouseOver);
	document.getElementById("btnKawa_curve_event").removeEventListener("mouseup", btnKawa_curveMouseUp);
	document.getElementById("btnKawa_curve_event").removeEventListener("mousedown", btnKawa_curveMouseDown);
	btnKawa_curve_touch.removeEventListener("MSPointerDown", btnKawa_curvePointerDown, false);

	removeBtnSenro_lineEvent();
	document.getElementById("btnSenro_line_event").removeEventListener("mouseover", btnSenro_lineMouseOver);
	document.getElementById("btnSenro_line_event").removeEventListener("mouseup", btnSenro_lineMouseUp);
	document.getElementById("btnSenro_line_event").removeEventListener("mousedown", btnSenro_lineMouseDown);
	btnSenro_line_touch.removeEventListener("MSPointerDown", btnSenro_linePointerDown, false);

	removeBtnSenro_curveEvent();
	document.getElementById("btnSenro_curve_event").removeEventListener("mouseover", btnSenro_curveMouseOver);
	document.getElementById("btnSenro_curve_event").removeEventListener("mouseup", btnSenro_curveMouseUp);
	document.getElementById("btnSenro_curve_event").removeEventListener("mousedown", btnSenro_curveMouseDown);
	btnSenro_curve_touch.removeEventListener("MSPointerDown", btnSenro_curvePointerDown, false);

	removeBtnSenro_1Event();
	document.getElementById("btnSenro_1_event").removeEventListener("mouseover", btnSenro_1MouseOver);
	document.getElementById("btnSenro_1_event").removeEventListener("mouseup", btnSenro_1MouseUp);
	document.getElementById("btnSenro_1_event").removeEventListener("mousedown", btnSenro_1MouseDown);
	btnSenro_1_touch.removeEventListener("MSPointerDown", btnSenro_1PointerDown, false);

	removeBtnSenro_2Event();
	document.getElementById("btnSenro_2_event").removeEventListener("mouseover", btnSenro_2MouseOver);
	document.getElementById("btnSenro_2_event").removeEventListener("mouseup", btnSenro_2MouseUp);
	document.getElementById("btnSenro_2_event").removeEventListener("mousedown", btnSenro_2MouseDown);
	btnSenro_2_touch.removeEventListener("MSPointerDown", btnSenro_2PointerDown, false);

	removeButton12Event();
	document.getElementById("button12_event").removeEventListener("mouseover", button12MouseOver);
	document.getElementById("button12_event").removeEventListener("mouseup", button12MouseUp);
	document.getElementById("button12_event").removeEventListener("mousedown", button12MouseDown);
	button12_touch.removeEventListener("MSPointerDown", button12PointerDown, false);

	removeButton13Event();
	document.getElementById("button13_event").removeEventListener("mouseover", button13MouseOver);
	document.getElementById("button13_event").removeEventListener("mouseup", button13MouseUp);
	document.getElementById("button13_event").removeEventListener("mousedown", button13MouseDown);
	button13_touch.removeEventListener("MSPointerDown", button13PointerDown, false);

	removeButton19Event();
	document.getElementById("button19_event").removeEventListener("mouseover", button19MouseOver);
	document.getElementById("button19_event").removeEventListener("mouseup", button19MouseUp);
	document.getElementById("button19_event").removeEventListener("mousedown", button19MouseDown);
	button19_touch.removeEventListener("MSPointerDown", button19PointerDown, false);

	removeButton14Event();
	document.getElementById("button14_event").removeEventListener("mouseover", button14MouseOver);
	document.getElementById("button14_event").removeEventListener("mouseup", button14MouseUp);
	document.getElementById("button14_event").removeEventListener("mousedown", button14MouseDown);
	button14_touch.removeEventListener("MSPointerDown", button14PointerDown, false);

	removeButton15Event();
	document.getElementById("button15_event").removeEventListener("mouseover", button15MouseOver);
	document.getElementById("button15_event").removeEventListener("mouseup", button15MouseUp);
	document.getElementById("button15_event").removeEventListener("mousedown", button15MouseDown);
	button15_touch.removeEventListener("MSPointerDown", button15PointerDown, false);

	removeButton16Event();
	document.getElementById("button16_event").removeEventListener("mouseover", button16MouseOver);
	document.getElementById("button16_event").removeEventListener("mouseup", button16MouseUp);
	document.getElementById("button16_event").removeEventListener("mousedown", button16MouseDown);
	button16_touch.removeEventListener("MSPointerDown", button16PointerDown, false);

	removeSaveEvent();
	document.getElementById("save_event").removeEventListener("mouseover", saveMouseOver);
	document.getElementById("save_event").removeEventListener("mouseup", saveMouseUp);
	document.getElementById("save_event").removeEventListener("mousedown", saveMouseDown);
	save_touch.removeEventListener("MSPointerDown", savePointerDown, false);

	removeLoadEvent();
	document.getElementById("load_event").removeEventListener("mouseover", loadMouseOver);
	document.getElementById("load_event").removeEventListener("mouseup", loadMouseUp);
	document.getElementById("load_event").removeEventListener("mousedown", loadMouseDown);
	load_touch.removeEventListener("MSPointerDown", loadPointerDown, false);

	removeButton20Event();
	document.getElementById("button20_event").removeEventListener("mouseover", button20MouseOver);
	document.getElementById("button20_event").removeEventListener("mouseup", button20MouseUp);
	document.getElementById("button20_event").removeEventListener("mousedown", button20MouseDown);
	button20_touch.removeEventListener("MSPointerDown", button20PointerDown, false);

	removeBtnMichi_size1Event();
	document.getElementById("btnMichi_size1_event").removeEventListener("mouseover", btnMichi_size1MouseOver);
	document.getElementById("btnMichi_size1_event").removeEventListener("mouseup", btnMichi_size1MouseUp);
	document.getElementById("btnMichi_size1_event").removeEventListener("mousedown", btnMichi_size1MouseDown);
	btnMichi_size1_touch.removeEventListener("MSPointerDown", btnMichi_size1PointerDown, false);

	removeBtnMichi_size2Event();
	document.getElementById("btnMichi_size2_event").removeEventListener("mouseover", btnMichi_size2MouseOver);
	document.getElementById("btnMichi_size2_event").removeEventListener("mouseup", btnMichi_size2MouseUp);
	document.getElementById("btnMichi_size2_event").removeEventListener("mousedown", btnMichi_size2MouseDown);
	btnMichi_size2_touch.removeEventListener("MSPointerDown", btnMichi_size2PointerDown, false);

	removeBtnMichi_size3Event();
	document.getElementById("btnMichi_size3_event").removeEventListener("mouseover", btnMichi_size3MouseOver);
	document.getElementById("btnMichi_size3_event").removeEventListener("mouseup", btnMichi_size3MouseUp);
	document.getElementById("btnMichi_size3_event").removeEventListener("mousedown", btnMichi_size3MouseDown);
	btnMichi_size3_touch.removeEventListener("MSPointerDown", btnMichi_size3PointerDown, false);

	removeBtnKawa_size1Event();
	document.getElementById("btnKawa_size1_event").removeEventListener("mouseover", btnKawa_size1MouseOver);
	document.getElementById("btnKawa_size1_event").removeEventListener("mouseup", btnKawa_size1MouseUp);
	document.getElementById("btnKawa_size1_event").removeEventListener("mousedown", btnKawa_size1MouseDown);
	btnKawa_size1_touch.removeEventListener("MSPointerDown", btnKawa_size1PointerDown, false);

	removeBtnKawa_size2Event();
	document.getElementById("btnKawa_size2_event").removeEventListener("mouseover", btnKawa_size2MouseOver);
	document.getElementById("btnKawa_size2_event").removeEventListener("mouseup", btnKawa_size2MouseUp);
	document.getElementById("btnKawa_size2_event").removeEventListener("mousedown", btnKawa_size2MouseDown);
	btnKawa_size2_touch.removeEventListener("MSPointerDown", btnKawa_size2PointerDown, false);

	removeBtnKawa_size3Event();
	document.getElementById("btnKawa_size3_event").removeEventListener("mouseover", btnKawa_size3MouseOver);
	document.getElementById("btnKawa_size3_event").removeEventListener("mouseup", btnKawa_size3MouseUp);
	document.getElementById("btnKawa_size3_event").removeEventListener("mousedown", btnKawa_size3MouseDown);
	btnKawa_size3_touch.removeEventListener("MSPointerDown", btnKawa_size3PointerDown, false);

	removeButtonColor1Event();
	document.getElementById("buttonColor1_event").removeEventListener("mouseover", buttonColor1MouseOver);
	document.getElementById("buttonColor1_event").removeEventListener("mouseup", buttonColor1MouseUp);
	document.getElementById("buttonColor1_event").removeEventListener("mousedown", buttonColor1MouseDown);
	buttonColor1_touch.removeEventListener("MSPointerDown", buttonColor1PointerDown, false);

	removeButtonColor2Event();
	document.getElementById("buttonColor2_event").removeEventListener("mouseover", buttonColor2MouseOver);
	document.getElementById("buttonColor2_event").removeEventListener("mouseup", buttonColor2MouseUp);
	document.getElementById("buttonColor2_event").removeEventListener("mousedown", buttonColor2MouseDown);
	buttonColor2_touch.removeEventListener("MSPointerDown", buttonColor2PointerDown, false);

	removeButtonCloseTab1Event();
	document.getElementById("buttonCloseTab1_event").removeEventListener("mouseover", buttonCloseTab1MouseOver);
	document.getElementById("buttonCloseTab1_event").removeEventListener("mouseup", buttonCloseTab1MouseUp);
	document.getElementById("buttonCloseTab1_event").removeEventListener("mousedown", buttonCloseTab1MouseDown);
	buttonCloseTab1_touch.removeEventListener("MSPointerDown", buttonCloseTab1PointerDown, false);

	removeButtonCloseTab2Event();
	document.getElementById("buttonCloseTab2_event").removeEventListener("mouseover", buttonCloseTab2MouseOver);
	document.getElementById("buttonCloseTab2_event").removeEventListener("mouseup", buttonCloseTab2MouseUp);
	document.getElementById("buttonCloseTab2_event").removeEventListener("mousedown", buttonCloseTab2MouseDown);
	buttonCloseTab2_touch.removeEventListener("MSPointerDown", buttonCloseTab2PointerDown, false);

	removeButtonCloseTab3Event();
	document.getElementById("buttonCloseTab3_event").removeEventListener("mouseover", buttonCloseTab3MouseOver);
	document.getElementById("buttonCloseTab3_event").removeEventListener("mouseup", buttonCloseTab3MouseUp);
	document.getElementById("buttonCloseTab3_event").removeEventListener("mousedown", buttonCloseTab3MouseDown);
	buttonCloseTab3_touch.removeEventListener("MSPointerDown", buttonCloseTab3PointerDown, false);

	removeButtonCloseTab4Event();
	document.getElementById("buttonCloseTab4_event").removeEventListener("mouseover", buttonCloseTab4MouseOver);
	document.getElementById("buttonCloseTab4_event").removeEventListener("mouseup", buttonCloseTab4MouseUp);
	document.getElementById("buttonCloseTab4_event").removeEventListener("mousedown", buttonCloseTab4MouseDown);
	buttonCloseTab4_touch.removeEventListener("MSPointerDown", buttonCloseTab4PointerDown, false);

	removeButtonSpan_showEvent();
	document.getElementById("buttonSpan_show_event").removeEventListener("mouseover", buttonSpan_showMouseOver);
	document.getElementById("buttonSpan_show_event").removeEventListener("mouseup", buttonSpan_showMouseUp);
	document.getElementById("buttonSpan_show_event").removeEventListener("mousedown", buttonSpan_showMouseDown);
	buttonSpan_show_touch.removeEventListener("MSPointerDown", buttonSpan_showPointerDown, false);

	removeButton27Event();
	document.getElementById("button27_event").removeEventListener("mouseover", button27MouseOver);
	document.getElementById("button27_event").removeEventListener("mouseup", button27MouseUp);
	document.getElementById("button27_event").removeEventListener("mousedown", button27MouseDown);
	button27_touch.removeEventListener("MSPointerDown", button27PointerDown, false);

	removeButton28Event();
	document.getElementById("button28_event").removeEventListener("mouseover", button28MouseOver);
	document.getElementById("button28_event").removeEventListener("mouseup", button28MouseUp);
	document.getElementById("button28_event").removeEventListener("mousedown", button28MouseDown);
	button28_touch.removeEventListener("MSPointerDown", button28PointerDown, false);

	removeButton29Event();
	document.getElementById("button29_event").removeEventListener("mouseover", button29MouseOver);
	document.getElementById("button29_event").removeEventListener("mouseup", button29MouseUp);
	document.getElementById("button29_event").removeEventListener("mousedown", button29MouseDown);
	button29_touch.removeEventListener("MSPointerDown", button29PointerDown, false);

	removeButton30Event();
	document.getElementById("button30_event").removeEventListener("mouseover", button30MouseOver);
	document.getElementById("button30_event").removeEventListener("mouseup", button30MouseUp);
	document.getElementById("button30_event").removeEventListener("mousedown", button30MouseDown);
	button30_touch.removeEventListener("MSPointerDown", button30PointerDown, false);

	removeButton31Event();
	document.getElementById("button31_event").removeEventListener("mouseover", button31MouseOver);
	document.getElementById("button31_event").removeEventListener("mouseup", button31MouseUp);
	document.getElementById("button31_event").removeEventListener("mousedown", button31MouseDown);
	button31_touch.removeEventListener("MSPointerDown", button31PointerDown, false);

	removeButton32Event();
	document.getElementById("button32_event").removeEventListener("mouseover", button32MouseOver);
	document.getElementById("button32_event").removeEventListener("mouseup", button32MouseUp);
	document.getElementById("button32_event").removeEventListener("mousedown", button32MouseDown);
	button32_touch.removeEventListener("MSPointerDown", button32PointerDown, false);

	removeButtonCloseColorTabEvent();
	document.getElementById("buttonCloseColorTab_event").removeEventListener("mouseover", buttonCloseColorTabMouseOver);
	document.getElementById("buttonCloseColorTab_event").removeEventListener("mouseup", buttonCloseColorTabMouseUp);
	document.getElementById("buttonCloseColorTab_event").removeEventListener("mousedown", buttonCloseColorTabMouseDown);
	buttonCloseColorTab_touch.removeEventListener("MSPointerDown", buttonCloseColorTabPointerDown, false);

	removeButtonCancelEvent();
	document.getElementById("buttonCancel_event").removeEventListener("mouseover", buttonCancelMouseOver);
	document.getElementById("buttonCancel_event").removeEventListener("mouseup", buttonCancelMouseUp);
	document.getElementById("buttonCancel_event").removeEventListener("mousedown", buttonCancelMouseDown);
	buttonCancel_touch.removeEventListener("MSPointerDown", buttonCancelPointerDown, false);

	removeButtonOKEvent();
	document.getElementById("buttonOK_event").removeEventListener("mouseover", buttonOKMouseOver);
	document.getElementById("buttonOK_event").removeEventListener("mouseup", buttonOKMouseUp);
	document.getElementById("buttonOK_event").removeEventListener("mousedown", buttonOKMouseDown);
	buttonOK_touch.removeEventListener("MSPointerDown", buttonOKPointerDown, false);

	removeButtonCloseTab5Event();
	document.getElementById("buttonCloseTab5_event").removeEventListener("mouseover", buttonCloseTab5MouseOver);
	document.getElementById("buttonCloseTab5_event").removeEventListener("mouseup", buttonCloseTab5MouseUp);
	document.getElementById("buttonCloseTab5_event").removeEventListener("mousedown", buttonCloseTab5MouseDown);
	buttonCloseTab5_touch.removeEventListener("MSPointerDown", buttonCloseTab5PointerDown, false);
switch(index){
	case 1: btnPen_line_touch.addEventListener("MSPointerUp", btnPen_linePointerUp, false); break;
	case 2: btnPen_curve_touch.addEventListener("MSPointerUp", btnPen_curvePointerUp, false); break;
	case 3: btnMoji_size1_touch.addEventListener("MSPointerUp", btnMoji_size1PointerUp, false); break;
	case 4: btnMoji_size2_touch.addEventListener("MSPointerUp", btnMoji_size2PointerUp, false); break;
	case 5: btnMoji_size3_touch.addEventListener("MSPointerUp", btnMoji_size3PointerUp, false); break;
	case 6: btnMichi_line_touch.addEventListener("MSPointerUp", btnMichi_linePointerUp, false); break;
	case 7: btnMichi_curve_touch.addEventListener("MSPointerUp", btnMichi_curvePointerUp, false); break;
	case 8: btnKawa_line_touch.addEventListener("MSPointerUp", btnKawa_linePointerUp, false); break;
	case 9: btnKawa_curve_touch.addEventListener("MSPointerUp", btnKawa_curvePointerUp, false); break;
	case 10: btnSenro_line_touch.addEventListener("MSPointerUp", btnSenro_linePointerUp, false); break;
	case 11: btnSenro_curve_touch.addEventListener("MSPointerUp", btnSenro_curvePointerUp, false); break;
	case 12: btnSenro_1_touch.addEventListener("MSPointerUp", btnSenro_1PointerUp, false); break;
	case 13: btnSenro_2_touch.addEventListener("MSPointerUp", btnSenro_2PointerUp, false); break;
	case 14: button12_touch.addEventListener("MSPointerUp", button12PointerUp, false); break;
	case 15: button13_touch.addEventListener("MSPointerUp", button13PointerUp, false); break;
	case 16: button19_touch.addEventListener("MSPointerUp", button19PointerUp, false); break;
	case 17: button14_touch.addEventListener("MSPointerUp", button14PointerUp, false); break;
	case 18: button15_touch.addEventListener("MSPointerUp", button15PointerUp, false); break;
	case 19: button16_touch.addEventListener("MSPointerUp", button16PointerUp, false); break;
	case 20: save_touch.addEventListener("MSPointerUp", savePointerUp, false); break;
	case 21: load_touch.addEventListener("MSPointerUp", loadPointerUp, false); break;
	case 22: button20_touch.addEventListener("MSPointerUp", button20PointerUp, false); break;
	case 23: btnMichi_size1_touch.addEventListener("MSPointerUp", btnMichi_size1PointerUp, false); break;
	case 24: btnMichi_size2_touch.addEventListener("MSPointerUp", btnMichi_size2PointerUp, false); break;
	case 25: btnMichi_size3_touch.addEventListener("MSPointerUp", btnMichi_size3PointerUp, false); break;
	case 26: btnKawa_size1_touch.addEventListener("MSPointerUp", btnKawa_size1PointerUp, false); break;
	case 27: btnKawa_size2_touch.addEventListener("MSPointerUp", btnKawa_size2PointerUp, false); break;
	case 28: btnKawa_size3_touch.addEventListener("MSPointerUp", btnKawa_size3PointerUp, false); break;
	case 29: buttonColor1_touch.addEventListener("MSPointerUp", buttonColor1PointerUp, false); break;
	case 30: buttonColor2_touch.addEventListener("MSPointerUp", buttonColor2PointerUp, false); break;
	case 31: buttonCloseTab1_touch.addEventListener("MSPointerUp", buttonCloseTab1PointerUp, false); break;
	case 32: buttonCloseTab2_touch.addEventListener("MSPointerUp", buttonCloseTab2PointerUp, false); break;
	case 33: buttonCloseTab3_touch.addEventListener("MSPointerUp", buttonCloseTab3PointerUp, false); break;
	case 34: buttonCloseTab4_touch.addEventListener("MSPointerUp", buttonCloseTab4PointerUp, false); break;
	case 35: buttonSpan_show_touch.addEventListener("MSPointerUp", buttonSpan_showPointerUp, false); break;
	case 36: button27_touch.addEventListener("MSPointerUp", button27PointerUp, false); break;
	case 37: button28_touch.addEventListener("MSPointerUp", button28PointerUp, false); break;
	case 38: button29_touch.addEventListener("MSPointerUp", button29PointerUp, false); break;
	case 39: button30_touch.addEventListener("MSPointerUp", button30PointerUp, false); break;
	case 40: button31_touch.addEventListener("MSPointerUp", button31PointerUp, false); break;
	case 41: button32_touch.addEventListener("MSPointerUp", button32PointerUp, false); break;
	case 42: buttonCloseColorTab_touch.addEventListener("MSPointerUp", buttonCloseColorTabPointerUp, false); break;
	case 43: buttonCancel_touch.addEventListener("MSPointerUp", buttonCancelPointerUp, false); break;
	case 44: buttonOK_touch.addEventListener("MSPointerUp", buttonOKPointerUp, false); break;
	case 45: buttonCloseTab5_touch.addEventListener("MSPointerUp", buttonCloseTab5PointerUp, false); break;
}
}


var pointerUp = function(index){
	switch(index){
	case 1: 
	document.getElementById("btnPen_line_event").addEventListener("mouseover", btnPen_lineMouseOver);
	btnPen_line_touch.removeEventListener("MSPointerUp", btnPen_linePointerUp, false);
	break;
	case 2: 
	document.getElementById("btnPen_curve_event").addEventListener("mouseover", btnPen_curveMouseOver);
	btnPen_curve_touch.removeEventListener("MSPointerUp", btnPen_curvePointerUp, false);
	break;
	case 3: 
	document.getElementById("btnMoji_size1_event").addEventListener("mouseover", btnMoji_size1MouseOver);
	btnMoji_size1_touch.removeEventListener("MSPointerUp", btnMoji_size1PointerUp, false);
	break;
	case 4: 
	document.getElementById("btnMoji_size2_event").addEventListener("mouseover", btnMoji_size2MouseOver);
	btnMoji_size2_touch.removeEventListener("MSPointerUp", btnMoji_size2PointerUp, false);
	break;
	case 5: 
	document.getElementById("btnMoji_size3_event").addEventListener("mouseover", btnMoji_size3MouseOver);
	btnMoji_size3_touch.removeEventListener("MSPointerUp", btnMoji_size3PointerUp, false);
	break;
	case 6: 
	document.getElementById("btnMichi_line_event").addEventListener("mouseover", btnMichi_lineMouseOver);
	btnMichi_line_touch.removeEventListener("MSPointerUp", btnMichi_linePointerUp, false);
	break;
	case 7: 
	document.getElementById("btnMichi_curve_event").addEventListener("mouseover", btnMichi_curveMouseOver);
	btnMichi_curve_touch.removeEventListener("MSPointerUp", btnMichi_curvePointerUp, false);
	break;
	case 8: 
	document.getElementById("btnKawa_line_event").addEventListener("mouseover", btnKawa_lineMouseOver);
	btnKawa_line_touch.removeEventListener("MSPointerUp", btnKawa_linePointerUp, false);
	break;
	case 9: 
	document.getElementById("btnKawa_curve_event").addEventListener("mouseover", btnKawa_curveMouseOver);
	btnKawa_curve_touch.removeEventListener("MSPointerUp", btnKawa_curvePointerUp, false);
	break;
	case 10: 
	document.getElementById("btnSenro_line_event").addEventListener("mouseover", btnSenro_lineMouseOver);
	btnSenro_line_touch.removeEventListener("MSPointerUp", btnSenro_linePointerUp, false);
	break;
	case 11: 
	document.getElementById("btnSenro_curve_event").addEventListener("mouseover", btnSenro_curveMouseOver);
	btnSenro_curve_touch.removeEventListener("MSPointerUp", btnSenro_curvePointerUp, false);
	break;
	case 12: 
	document.getElementById("btnSenro_1_event").addEventListener("mouseover", btnSenro_1MouseOver);
	btnSenro_1_touch.removeEventListener("MSPointerUp", btnSenro_1PointerUp, false);
	break;
	case 13: 
	document.getElementById("btnSenro_2_event").addEventListener("mouseover", btnSenro_2MouseOver);
	btnSenro_2_touch.removeEventListener("MSPointerUp", btnSenro_2PointerUp, false);
	break;
	case 14: 
	document.getElementById("button12_event").addEventListener("mouseover", button12MouseOver);
	button12_touch.removeEventListener("MSPointerUp", button12PointerUp, false);
	break;
	case 15: 
	document.getElementById("button13_event").addEventListener("mouseover", button13MouseOver);
	button13_touch.removeEventListener("MSPointerUp", button13PointerUp, false);
	break;
	case 16: 
	document.getElementById("button19_event").addEventListener("mouseover", button19MouseOver);
	button19_touch.removeEventListener("MSPointerUp", button19PointerUp, false);
	break;
	case 17: 
	document.getElementById("button14_event").addEventListener("mouseover", button14MouseOver);
	button14_touch.removeEventListener("MSPointerUp", button14PointerUp, false);
	break;
	case 18: 
	document.getElementById("button15_event").addEventListener("mouseover", button15MouseOver);
	button15_touch.removeEventListener("MSPointerUp", button15PointerUp, false);
	break;
	case 19: 
	document.getElementById("button16_event").addEventListener("mouseover", button16MouseOver);
	button16_touch.removeEventListener("MSPointerUp", button16PointerUp, false);
	break;
	case 20: 
	document.getElementById("save_event").addEventListener("mouseover", saveMouseOver);
	save_touch.removeEventListener("MSPointerUp", savePointerUp, false);
	break;
	case 21: 
	document.getElementById("load_event").addEventListener("mouseover", loadMouseOver);
	load_touch.removeEventListener("MSPointerUp", loadPointerUp, false);
	break;
	case 22: 
	document.getElementById("button20_event").addEventListener("mouseover", button20MouseOver);
	button20_touch.removeEventListener("MSPointerUp", button20PointerUp, false);
	break;
	case 23: 
	document.getElementById("btnMichi_size1_event").addEventListener("mouseover", btnMichi_size1MouseOver);
	btnMichi_size1_touch.removeEventListener("MSPointerUp", btnMichi_size1PointerUp, false);
	break;
	case 24: 
	document.getElementById("btnMichi_size2_event").addEventListener("mouseover", btnMichi_size2MouseOver);
	btnMichi_size2_touch.removeEventListener("MSPointerUp", btnMichi_size2PointerUp, false);
	break;
	case 25: 
	document.getElementById("btnMichi_size3_event").addEventListener("mouseover", btnMichi_size3MouseOver);
	btnMichi_size3_touch.removeEventListener("MSPointerUp", btnMichi_size3PointerUp, false);
	break;
	case 26: 
	document.getElementById("btnKawa_size1_event").addEventListener("mouseover", btnKawa_size1MouseOver);
	btnKawa_size1_touch.removeEventListener("MSPointerUp", btnKawa_size1PointerUp, false);
	break;
	case 27: 
	document.getElementById("btnKawa_size2_event").addEventListener("mouseover", btnKawa_size2MouseOver);
	btnKawa_size2_touch.removeEventListener("MSPointerUp", btnKawa_size2PointerUp, false);
	break;
	case 28: 
	document.getElementById("btnKawa_size3_event").addEventListener("mouseover", btnKawa_size3MouseOver);
	btnKawa_size3_touch.removeEventListener("MSPointerUp", btnKawa_size3PointerUp, false);
	break;
	case 29: 
	document.getElementById("buttonColor1_event").addEventListener("mouseover", buttonColor1MouseOver);
	buttonColor1_touch.removeEventListener("MSPointerUp", buttonColor1PointerUp, false);
	break;
	case 30: 
	document.getElementById("buttonColor2_event").addEventListener("mouseover", buttonColor2MouseOver);
	buttonColor2_touch.removeEventListener("MSPointerUp", buttonColor2PointerUp, false);
	break;
	case 31: 
	document.getElementById("buttonCloseTab1_event").addEventListener("mouseover", buttonCloseTab1MouseOver);
	buttonCloseTab1_touch.removeEventListener("MSPointerUp", buttonCloseTab1PointerUp, false);
	break;
	case 32: 
	document.getElementById("buttonCloseTab2_event").addEventListener("mouseover", buttonCloseTab2MouseOver);
	buttonCloseTab2_touch.removeEventListener("MSPointerUp", buttonCloseTab2PointerUp, false);
	break;
	case 33: 
	document.getElementById("buttonCloseTab3_event").addEventListener("mouseover", buttonCloseTab3MouseOver);
	buttonCloseTab3_touch.removeEventListener("MSPointerUp", buttonCloseTab3PointerUp, false);
	break;
	case 34: 
	document.getElementById("buttonCloseTab4_event").addEventListener("mouseover", buttonCloseTab4MouseOver);
	buttonCloseTab4_touch.removeEventListener("MSPointerUp", buttonCloseTab4PointerUp, false);
	break;
	case 35: 
	document.getElementById("buttonSpan_show_event").addEventListener("mouseover", buttonSpan_showMouseOver);
	buttonSpan_show_touch.removeEventListener("MSPointerUp", buttonSpan_showPointerUp, false);
	break;
	case 36: 
	document.getElementById("button27_event").addEventListener("mouseover", button27MouseOver);
	button27_touch.removeEventListener("MSPointerUp", button27PointerUp, false);
	break;
	case 37: 
	document.getElementById("button28_event").addEventListener("mouseover", button28MouseOver);
	button28_touch.removeEventListener("MSPointerUp", button28PointerUp, false);
	break;
	case 38: 
	document.getElementById("button29_event").addEventListener("mouseover", button29MouseOver);
	button29_touch.removeEventListener("MSPointerUp", button29PointerUp, false);
	break;
	case 39: 
	document.getElementById("button30_event").addEventListener("mouseover", button30MouseOver);
	button30_touch.removeEventListener("MSPointerUp", button30PointerUp, false);
	break;
	case 40: 
	document.getElementById("button31_event").addEventListener("mouseover", button31MouseOver);
	button31_touch.removeEventListener("MSPointerUp", button31PointerUp, false);
	break;
	case 41: 
	document.getElementById("button32_event").addEventListener("mouseover", button32MouseOver);
	button32_touch.removeEventListener("MSPointerUp", button32PointerUp, false);
	break;
	case 42: 
	document.getElementById("buttonCloseColorTab_event").addEventListener("mouseover", buttonCloseColorTabMouseOver);
	buttonCloseColorTab_touch.removeEventListener("MSPointerUp", buttonCloseColorTabPointerUp, false);
	break;
	case 43: 
	document.getElementById("buttonCancel_event").addEventListener("mouseover", buttonCancelMouseOver);
	buttonCancel_touch.removeEventListener("MSPointerUp", buttonCancelPointerUp, false);
	break;
	case 44: 
	document.getElementById("buttonOK_event").addEventListener("mouseover", buttonOKMouseOver);
	buttonOK_touch.removeEventListener("MSPointerUp", buttonOKPointerUp, false);
	break;
	case 45: 
	document.getElementById("buttonCloseTab5_event").addEventListener("mouseover", buttonCloseTab5MouseOver);
	buttonCloseTab5_touch.removeEventListener("MSPointerUp", buttonCloseTab5PointerUp, false);
	break;

	}
	addBtnPen_lineEvent()
	document.getElementById("btnPen_line_event").removeEventListener("mouseup", btnPen_lineMouseUp);
	btnPen_line_touch.addEventListener("MSPointerDown", btnPen_linePointerDown, false);
	addBtnPen_curveEvent()
	document.getElementById("btnPen_curve_event").removeEventListener("mouseup", btnPen_curveMouseUp);
	btnPen_curve_touch.addEventListener("MSPointerDown", btnPen_curvePointerDown, false);
	addBtnMoji_size1Event()
	document.getElementById("btnMoji_size1_event").removeEventListener("mouseup", btnMoji_size1MouseUp);
	btnMoji_size1_touch.addEventListener("MSPointerDown", btnMoji_size1PointerDown, false);
	addBtnMoji_size2Event()
	document.getElementById("btnMoji_size2_event").removeEventListener("mouseup", btnMoji_size2MouseUp);
	btnMoji_size2_touch.addEventListener("MSPointerDown", btnMoji_size2PointerDown, false);
	addBtnMoji_size3Event()
	document.getElementById("btnMoji_size3_event").removeEventListener("mouseup", btnMoji_size3MouseUp);
	btnMoji_size3_touch.addEventListener("MSPointerDown", btnMoji_size3PointerDown, false);
	addBtnMichi_lineEvent()
	document.getElementById("btnMichi_line_event").removeEventListener("mouseup", btnMichi_lineMouseUp);
	btnMichi_line_touch.addEventListener("MSPointerDown", btnMichi_linePointerDown, false);
	addBtnMichi_curveEvent()
	document.getElementById("btnMichi_curve_event").removeEventListener("mouseup", btnMichi_curveMouseUp);
	btnMichi_curve_touch.addEventListener("MSPointerDown", btnMichi_curvePointerDown, false);
	addBtnKawa_lineEvent()
	document.getElementById("btnKawa_line_event").removeEventListener("mouseup", btnKawa_lineMouseUp);
	btnKawa_line_touch.addEventListener("MSPointerDown", btnKawa_linePointerDown, false);
	addBtnKawa_curveEvent()
	document.getElementById("btnKawa_curve_event").removeEventListener("mouseup", btnKawa_curveMouseUp);
	btnKawa_curve_touch.addEventListener("MSPointerDown", btnKawa_curvePointerDown, false);
	addBtnSenro_lineEvent()
	document.getElementById("btnSenro_line_event").removeEventListener("mouseup", btnSenro_lineMouseUp);
	btnSenro_line_touch.addEventListener("MSPointerDown", btnSenro_linePointerDown, false);
	addBtnSenro_curveEvent()
	document.getElementById("btnSenro_curve_event").removeEventListener("mouseup", btnSenro_curveMouseUp);
	btnSenro_curve_touch.addEventListener("MSPointerDown", btnSenro_curvePointerDown, false);
	addBtnSenro_1Event()
	document.getElementById("btnSenro_1_event").removeEventListener("mouseup", btnSenro_1MouseUp);
	btnSenro_1_touch.addEventListener("MSPointerDown", btnSenro_1PointerDown, false);
	addBtnSenro_2Event()
	document.getElementById("btnSenro_2_event").removeEventListener("mouseup", btnSenro_2MouseUp);
	btnSenro_2_touch.addEventListener("MSPointerDown", btnSenro_2PointerDown, false);
	addButton12Event()
	document.getElementById("button12_event").removeEventListener("mouseup", button12MouseUp);
	button12_touch.addEventListener("MSPointerDown", button12PointerDown, false);
	addButton13Event()
	document.getElementById("button13_event").removeEventListener("mouseup", button13MouseUp);
	button13_touch.addEventListener("MSPointerDown", button13PointerDown, false);
	addButton19Event()
	document.getElementById("button19_event").removeEventListener("mouseup", button19MouseUp);
	button19_touch.addEventListener("MSPointerDown", button19PointerDown, false);
	addButton14Event()
	document.getElementById("button14_event").removeEventListener("mouseup", button14MouseUp);
	button14_touch.addEventListener("MSPointerDown", button14PointerDown, false);
	addButton15Event()
	document.getElementById("button15_event").removeEventListener("mouseup", button15MouseUp);
	button15_touch.addEventListener("MSPointerDown", button15PointerDown, false);
	addButton16Event()
	document.getElementById("button16_event").removeEventListener("mouseup", button16MouseUp);
	button16_touch.addEventListener("MSPointerDown", button16PointerDown, false);
	addSaveEvent()
	document.getElementById("save_event").removeEventListener("mouseup", saveMouseUp);
	save_touch.addEventListener("MSPointerDown", savePointerDown, false);
	addLoadEvent()
	document.getElementById("load_event").removeEventListener("mouseup", loadMouseUp);
	load_touch.addEventListener("MSPointerDown", loadPointerDown, false);
	addButton20Event()
	document.getElementById("button20_event").removeEventListener("mouseup", button20MouseUp);
	button20_touch.addEventListener("MSPointerDown", button20PointerDown, false);
	addBtnMichi_size1Event()
	document.getElementById("btnMichi_size1_event").removeEventListener("mouseup", btnMichi_size1MouseUp);
	btnMichi_size1_touch.addEventListener("MSPointerDown", btnMichi_size1PointerDown, false);
	addBtnMichi_size2Event()
	document.getElementById("btnMichi_size2_event").removeEventListener("mouseup", btnMichi_size2MouseUp);
	btnMichi_size2_touch.addEventListener("MSPointerDown", btnMichi_size2PointerDown, false);
	addBtnMichi_size3Event()
	document.getElementById("btnMichi_size3_event").removeEventListener("mouseup", btnMichi_size3MouseUp);
	btnMichi_size3_touch.addEventListener("MSPointerDown", btnMichi_size3PointerDown, false);
	addBtnKawa_size1Event()
	document.getElementById("btnKawa_size1_event").removeEventListener("mouseup", btnKawa_size1MouseUp);
	btnKawa_size1_touch.addEventListener("MSPointerDown", btnKawa_size1PointerDown, false);
	addBtnKawa_size2Event()
	document.getElementById("btnKawa_size2_event").removeEventListener("mouseup", btnKawa_size2MouseUp);
	btnKawa_size2_touch.addEventListener("MSPointerDown", btnKawa_size2PointerDown, false);
	addBtnKawa_size3Event()
	document.getElementById("btnKawa_size3_event").removeEventListener("mouseup", btnKawa_size3MouseUp);
	btnKawa_size3_touch.addEventListener("MSPointerDown", btnKawa_size3PointerDown, false);
	addButtonColor1Event()
	document.getElementById("buttonColor1_event").removeEventListener("mouseup", buttonColor1MouseUp);
	buttonColor1_touch.addEventListener("MSPointerDown", buttonColor1PointerDown, false);
	addButtonColor2Event()
	document.getElementById("buttonColor2_event").removeEventListener("mouseup", buttonColor2MouseUp);
	buttonColor2_touch.addEventListener("MSPointerDown", buttonColor2PointerDown, false);
	addButtonCloseTab1Event()
	document.getElementById("buttonCloseTab1_event").removeEventListener("mouseup", buttonCloseTab1MouseUp);
	buttonCloseTab1_touch.addEventListener("MSPointerDown", buttonCloseTab1PointerDown, false);
	addButtonCloseTab2Event()
	document.getElementById("buttonCloseTab2_event").removeEventListener("mouseup", buttonCloseTab2MouseUp);
	buttonCloseTab2_touch.addEventListener("MSPointerDown", buttonCloseTab2PointerDown, false);
	addButtonCloseTab3Event()
	document.getElementById("buttonCloseTab3_event").removeEventListener("mouseup", buttonCloseTab3MouseUp);
	buttonCloseTab3_touch.addEventListener("MSPointerDown", buttonCloseTab3PointerDown, false);
	addButtonCloseTab4Event()
	document.getElementById("buttonCloseTab4_event").removeEventListener("mouseup", buttonCloseTab4MouseUp);
	buttonCloseTab4_touch.addEventListener("MSPointerDown", buttonCloseTab4PointerDown, false);
	addButtonSpan_showEvent()
	document.getElementById("buttonSpan_show_event").removeEventListener("mouseup", buttonSpan_showMouseUp);
	buttonSpan_show_touch.addEventListener("MSPointerDown", buttonSpan_showPointerDown, false);
	addButton27Event()
	document.getElementById("button27_event").removeEventListener("mouseup", button27MouseUp);
	button27_touch.addEventListener("MSPointerDown", button27PointerDown, false);
	addButton28Event()
	document.getElementById("button28_event").removeEventListener("mouseup", button28MouseUp);
	button28_touch.addEventListener("MSPointerDown", button28PointerDown, false);
	addButton29Event()
	document.getElementById("button29_event").removeEventListener("mouseup", button29MouseUp);
	button29_touch.addEventListener("MSPointerDown", button29PointerDown, false);
	addButton30Event()
	document.getElementById("button30_event").removeEventListener("mouseup", button30MouseUp);
	button30_touch.addEventListener("MSPointerDown", button30PointerDown, false);
	addButton31Event()
	document.getElementById("button31_event").removeEventListener("mouseup", button31MouseUp);
	button31_touch.addEventListener("MSPointerDown", button31PointerDown, false);
	addButton32Event()
	document.getElementById("button32_event").removeEventListener("mouseup", button32MouseUp);
	button32_touch.addEventListener("MSPointerDown", button32PointerDown, false);
	addButtonCloseColorTabEvent()
	document.getElementById("buttonCloseColorTab_event").removeEventListener("mouseup", buttonCloseColorTabMouseUp);
	buttonCloseColorTab_touch.addEventListener("MSPointerDown", buttonCloseColorTabPointerDown, false);
	addButtonCancelEvent()
	document.getElementById("buttonCancel_event").removeEventListener("mouseup", buttonCancelMouseUp);
	buttonCancel_touch.addEventListener("MSPointerDown", buttonCancelPointerDown, false);
	addButtonOKEvent()
	document.getElementById("buttonOK_event").removeEventListener("mouseup", buttonOKMouseUp);
	buttonOK_touch.addEventListener("MSPointerDown", buttonOKPointerDown, false);
	addButtonCloseTab5Event()
	document.getElementById("buttonCloseTab5_event").removeEventListener("mouseup", buttonCloseTab5MouseUp);
	buttonCloseTab5_touch.addEventListener("MSPointerDown", buttonCloseTab5PointerDown, false);
}
window.callPointerUp = pointerUp;
var btnPen_lineTouchStart = function(event) {
	 if (detectmob() == 3)
		event.preventDefault();
		lockHover= false;
	btnPen_lineMouseOver(event);
	touchStart(1);
}
var btnPen_lineTouchEnd = function(event) {
	btnPen_lineClick(undefined);
	setHoverButton("#btnPen_line_hover",false);
	touchEnd(1);
}

	btnPen_line_touch.addEventListener("touchstart", btnPen_lineTouchStart, false);
var btnPen_linePointerDown = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	btnPen_lineMouseOver(event);
	pointerDown(1);
	}
}
var btnPen_linePointerUp = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	btnPen_lineClick(undefined);
	btnPen_lineMouseOut(event);
	pointerUp(1)
	}
}
btnPen_line_touch.addEventListener("MSPointerDown", btnPen_linePointerDown, false);
var btnPen_curveTouchStart = function(event) {
	 if (detectmob() == 3)
		event.preventDefault();
		lockHover= false;
	btnPen_curveMouseOver(event);
	touchStart(2);
}
var btnPen_curveTouchEnd = function(event) {
	btnPen_curveClick(undefined);
	setHoverButton("#btnPen_curve_hover",false);
	touchEnd(2);
}

	btnPen_curve_touch.addEventListener("touchstart", btnPen_curveTouchStart, false);
var btnPen_curvePointerDown = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	btnPen_curveMouseOver(event);
	pointerDown(2);
	}
}
var btnPen_curvePointerUp = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	btnPen_curveClick(undefined);
	btnPen_curveMouseOut(event);
	pointerUp(2)
	}
}
btnPen_curve_touch.addEventListener("MSPointerDown", btnPen_curvePointerDown, false);
var btnMoji_size1TouchStart = function(event) {
	 if (detectmob() == 3)
		event.preventDefault();
		lockHover= false;
	btnMoji_size1MouseOver(event);
	touchStart(3);
}
var btnMoji_size1TouchEnd = function(event) {
	btnMoji_size1Click(undefined);
	setHoverButton("#btnMoji_size1_hover",false);
	touchEnd(3);
}

	btnMoji_size1_touch.addEventListener("touchstart", btnMoji_size1TouchStart, false);
var btnMoji_size1PointerDown = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	btnMoji_size1MouseOver(event);
	pointerDown(3);
	}
}
var btnMoji_size1PointerUp = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	btnMoji_size1Click(undefined);
	btnMoji_size1MouseOut(event);
	pointerUp(3)
	}
}
btnMoji_size1_touch.addEventListener("MSPointerDown", btnMoji_size1PointerDown, false);
var btnMoji_size2TouchStart = function(event) {
	 if (detectmob() == 3)
		event.preventDefault();
		lockHover= false;
	btnMoji_size2MouseOver(event);
	touchStart(4);
}
var btnMoji_size2TouchEnd = function(event) {
	btnMoji_size2Click(undefined);
	setHoverButton("#btnMoji_size2_hover",false);
	touchEnd(4);
}

	btnMoji_size2_touch.addEventListener("touchstart", btnMoji_size2TouchStart, false);
var btnMoji_size2PointerDown = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	btnMoji_size2MouseOver(event);
	pointerDown(4);
	}
}
var btnMoji_size2PointerUp = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	btnMoji_size2Click(undefined);
	btnMoji_size2MouseOut(event);
	pointerUp(4)
	}
}
btnMoji_size2_touch.addEventListener("MSPointerDown", btnMoji_size2PointerDown, false);
var btnMoji_size3TouchStart = function(event) {
	 if (detectmob() == 3)
		event.preventDefault();
		lockHover= false;
	btnMoji_size3MouseOver(event);
	touchStart(5);
}
var btnMoji_size3TouchEnd = function(event) {
	btnMoji_size3Click(undefined);
	setHoverButton("#btnMoji_size3_hover",false);
	touchEnd(5);
}

	btnMoji_size3_touch.addEventListener("touchstart", btnMoji_size3TouchStart, false);
var btnMoji_size3PointerDown = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	btnMoji_size3MouseOver(event);
	pointerDown(5);
	}
}
var btnMoji_size3PointerUp = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	btnMoji_size3Click(undefined);
	btnMoji_size3MouseOut(event);
	pointerUp(5)
	}
}
btnMoji_size3_touch.addEventListener("MSPointerDown", btnMoji_size3PointerDown, false);
var btnMichi_lineTouchStart = function(event) {
	 if (detectmob() == 3)
		event.preventDefault();
		lockHover= false;
	btnMichi_lineMouseOver(event);
	touchStart(6);
}
var btnMichi_lineTouchEnd = function(event) {
	btnMichi_lineClick(undefined);
	setHoverButton("#btnMichi_line_hover",false);
	touchEnd(6);
}

	btnMichi_line_touch.addEventListener("touchstart", btnMichi_lineTouchStart, false);
var btnMichi_linePointerDown = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	btnMichi_lineMouseOver(event);
	pointerDown(6);
	}
}
var btnMichi_linePointerUp = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	btnMichi_lineClick(undefined);
	btnMichi_lineMouseOut(event);
	pointerUp(6)
	}
}
btnMichi_line_touch.addEventListener("MSPointerDown", btnMichi_linePointerDown, false);
var btnMichi_curveTouchStart = function(event) {
	 if (detectmob() == 3)
		event.preventDefault();
		lockHover= false;
	btnMichi_curveMouseOver(event);
	touchStart(7);
}
var btnMichi_curveTouchEnd = function(event) {
	btnMichi_curveClick(undefined);
	setHoverButton("#btnMichi_curve_hover",false);
	touchEnd(7);
}

	btnMichi_curve_touch.addEventListener("touchstart", btnMichi_curveTouchStart, false);
var btnMichi_curvePointerDown = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	btnMichi_curveMouseOver(event);
	pointerDown(7);
	}
}
var btnMichi_curvePointerUp = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	btnMichi_curveClick(undefined);
	btnMichi_curveMouseOut(event);
	pointerUp(7)
	}
}
btnMichi_curve_touch.addEventListener("MSPointerDown", btnMichi_curvePointerDown, false);
var btnKawa_lineTouchStart = function(event) {
	 if (detectmob() == 3)
		event.preventDefault();
		lockHover= false;
	btnKawa_lineMouseOver(event);
	touchStart(8);
}
var btnKawa_lineTouchEnd = function(event) {
	btnKawa_lineClick(undefined);
	setHoverButton("#btnKawa_line_hover",false);
	touchEnd(8);
}

	btnKawa_line_touch.addEventListener("touchstart", btnKawa_lineTouchStart, false);
var btnKawa_linePointerDown = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	btnKawa_lineMouseOver(event);
	pointerDown(8);
	}
}
var btnKawa_linePointerUp = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	btnKawa_lineClick(undefined);
	btnKawa_lineMouseOut(event);
	pointerUp(8)
	}
}
btnKawa_line_touch.addEventListener("MSPointerDown", btnKawa_linePointerDown, false);
var btnKawa_curveTouchStart = function(event) {
	 if (detectmob() == 3)
		event.preventDefault();
		lockHover= false;
	btnKawa_curveMouseOver(event);
	touchStart(9);
}
var btnKawa_curveTouchEnd = function(event) {
	btnKawa_curveClick(undefined);
	setHoverButton("#btnKawa_curve_hover",false);
	touchEnd(9);
}

	btnKawa_curve_touch.addEventListener("touchstart", btnKawa_curveTouchStart, false);
var btnKawa_curvePointerDown = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	btnKawa_curveMouseOver(event);
	pointerDown(9);
	}
}
var btnKawa_curvePointerUp = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	btnKawa_curveClick(undefined);
	btnKawa_curveMouseOut(event);
	pointerUp(9)
	}
}
btnKawa_curve_touch.addEventListener("MSPointerDown", btnKawa_curvePointerDown, false);
var btnSenro_lineTouchStart = function(event) {
	 if (detectmob() == 3)
		event.preventDefault();
		lockHover= false;
	btnSenro_lineMouseOver(event);
	touchStart(10);
}
var btnSenro_lineTouchEnd = function(event) {
	btnSenro_lineClick(undefined);
	setHoverButton("#btnSenro_line_hover",false);
	touchEnd(10);
}

	btnSenro_line_touch.addEventListener("touchstart", btnSenro_lineTouchStart, false);
var btnSenro_linePointerDown = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	btnSenro_lineMouseOver(event);
	pointerDown(10);
	}
}
var btnSenro_linePointerUp = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	btnSenro_lineClick(undefined);
	btnSenro_lineMouseOut(event);
	pointerUp(10)
	}
}
btnSenro_line_touch.addEventListener("MSPointerDown", btnSenro_linePointerDown, false);
var btnSenro_curveTouchStart = function(event) {
	 if (detectmob() == 3)
		event.preventDefault();
		lockHover= false;
	btnSenro_curveMouseOver(event);
	touchStart(11);
}
var btnSenro_curveTouchEnd = function(event) {
	btnSenro_curveClick(undefined);
	setHoverButton("#btnSenro_curve_hover",false);
	touchEnd(11);
}

	btnSenro_curve_touch.addEventListener("touchstart", btnSenro_curveTouchStart, false);
var btnSenro_curvePointerDown = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	btnSenro_curveMouseOver(event);
	pointerDown(11);
	}
}
var btnSenro_curvePointerUp = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	btnSenro_curveClick(undefined);
	btnSenro_curveMouseOut(event);
	pointerUp(11)
	}
}
btnSenro_curve_touch.addEventListener("MSPointerDown", btnSenro_curvePointerDown, false);
var btnSenro_1TouchStart = function(event) {
	 if (detectmob() == 3)
		event.preventDefault();
		lockHover= false;
	btnSenro_1MouseOver(event);
	touchStart(12);
}
var btnSenro_1TouchEnd = function(event) {
	btnSenro_1Click(undefined);
	setHoverButton("#btnSenro_1_hover",false);
	touchEnd(12);
}

	btnSenro_1_touch.addEventListener("touchstart", btnSenro_1TouchStart, false);
var btnSenro_1PointerDown = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	btnSenro_1MouseOver(event);
	pointerDown(12);
	}
}
var btnSenro_1PointerUp = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	btnSenro_1Click(undefined);
	btnSenro_1MouseOut(event);
	pointerUp(12)
	}
}
btnSenro_1_touch.addEventListener("MSPointerDown", btnSenro_1PointerDown, false);
var btnSenro_2TouchStart = function(event) {
	 if (detectmob() == 3)
		event.preventDefault();
		lockHover= false;
	btnSenro_2MouseOver(event);
	touchStart(13);
}
var btnSenro_2TouchEnd = function(event) {
	btnSenro_2Click(undefined);
	setHoverButton("#btnSenro_2_hover",false);
	touchEnd(13);
}

	btnSenro_2_touch.addEventListener("touchstart", btnSenro_2TouchStart, false);
var btnSenro_2PointerDown = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	btnSenro_2MouseOver(event);
	pointerDown(13);
	}
}
var btnSenro_2PointerUp = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	btnSenro_2Click(undefined);
	btnSenro_2MouseOut(event);
	pointerUp(13)
	}
}
btnSenro_2_touch.addEventListener("MSPointerDown", btnSenro_2PointerDown, false);
var button12TouchStart = function(event) {
	 if (detectmob() == 3)
		event.preventDefault();
		lockHover= false;
	button12MouseOver(event);
	touchStart(14);
}
var button12TouchEnd = function(event) {
	button12Click(undefined);
	setHoverButton("#button12_hover",false);
	touchEnd(14);
}

	button12_touch.addEventListener("touchstart", button12TouchStart, false);
var button12PointerDown = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	button12MouseOver(event);
	pointerDown(14);
	}
}
var button12PointerUp = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	button12Click(undefined);
	button12MouseOut(event);
	pointerUp(14)
	}
}
button12_touch.addEventListener("MSPointerDown", button12PointerDown, false);
var button13TouchStart = function(event) {
	 if (detectmob() == 3)
		event.preventDefault();
		lockHover= false;
	button13MouseOver(event);
	touchStart(15);
}
var button13TouchEnd = function(event) {
	button13Click(undefined);
	setHoverButton("#button13_hover",false);
	touchEnd(15);
}

	button13_touch.addEventListener("touchstart", button13TouchStart, false);
var button13PointerDown = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	button13MouseOver(event);
	pointerDown(15);
	}
}
var button13PointerUp = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	button13Click(undefined);
	button13MouseOut(event);
	pointerUp(15)
	}
}
button13_touch.addEventListener("MSPointerDown", button13PointerDown, false);
var button19TouchStart = function(event) {
	 if (detectmob() == 3)
		event.preventDefault();
		lockHover= false;
	button19MouseOver(event);
	touchStart(16);
}
var button19TouchEnd = function(event) {
	button19Click(undefined);
	setHoverButton("#button19_hover",false);
	touchEnd(16);
}

	button19_touch.addEventListener("touchstart", button19TouchStart, false);
var button19PointerDown = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	button19MouseOver(event);
	pointerDown(16);
	}
}
var button19PointerUp = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	button19Click(undefined);
	button19MouseOut(event);
	pointerUp(16)
	}
}
button19_touch.addEventListener("MSPointerDown", button19PointerDown, false);
var button14TouchStart = function(event) {
	 if (detectmob() == 3)
		event.preventDefault();
		lockHover= false;
	button14MouseOver(event);
	touchStart(17);
}
var button14TouchEnd = function(event) {
	button14Click(undefined);
	setHoverButton("#button14_hover",false);
	touchEnd(17);
}

	button14_touch.addEventListener("touchstart", button14TouchStart, false);
var button14PointerDown = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	button14MouseOver(event);
	pointerDown(17);
	}
}
var button14PointerUp = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	button14Click(undefined);
	button14MouseOut(event);
	pointerUp(17)
	}
}
button14_touch.addEventListener("MSPointerDown", button14PointerDown, false);
var button15TouchStart = function(event) {
	 if (detectmob() == 3)
		event.preventDefault();
		lockHover= false;
	button15MouseOver(event);
	touchStart(18);
}
var button15TouchEnd = function(event) {
	button15Click(undefined);
	setHoverButton("#button15_hover",false);
	touchEnd(18);
}

	button15_touch.addEventListener("touchstart", button15TouchStart, false);
var button15PointerDown = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	button15MouseOver(event);
	pointerDown(18);
	}
}
var button15PointerUp = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	button15Click(undefined);
	button15MouseOut(event);
	pointerUp(18)
	}
}
button15_touch.addEventListener("MSPointerDown", button15PointerDown, false);
var button16TouchStart = function(event) {
	 if (detectmob() == 3)
		event.preventDefault();
		lockHover= false;
	button16MouseOver(event);
	touchStart(19);
}
var button16TouchEnd = function(event) {
	button16Click(undefined);
	setHoverButton("#button16_hover",false);
	touchEnd(19);
}

	button16_touch.addEventListener("touchstart", button16TouchStart, false);
var button16PointerDown = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	button16MouseOver(event);
	pointerDown(19);
	}
}
var button16PointerUp = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	button16Click(undefined);
	button16MouseOut(event);
	pointerUp(19)
	}
}
button16_touch.addEventListener("MSPointerDown", button16PointerDown, false);
var saveTouchStart = function(event) {
	 if (detectmob() == 3)
		event.preventDefault();
		lockHover= false;
	saveMouseOver(event);
	touchStart(20);
}
var saveTouchEnd = function(event) {
	saveClick(undefined);
	setHoverButton("#save_hover",false);
	touchEnd(20);
}

	save_touch.addEventListener("touchstart", saveTouchStart, false);
var savePointerDown = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	saveMouseOver(event);
	pointerDown(20);
	}
}
var savePointerUp = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	saveClick(undefined);
	saveMouseOut(event);
	pointerUp(20)
	}
}
save_touch.addEventListener("MSPointerDown", savePointerDown, false);
var loadTouchStart = function(event) {
	 if (detectmob() == 3)
		event.preventDefault();
		lockHover= false;
	loadMouseOver(event);
	touchStart(21);
}
var loadTouchEnd = function(event) {
	loadClick(undefined);
	setHoverButton("#load_hover",false);
	touchEnd(21);
}

	load_touch.addEventListener("touchstart", loadTouchStart, false);
var loadPointerDown = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	loadMouseOver(event);
	pointerDown(21);
	}
}
var loadPointerUp = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	loadClick(undefined);
	loadMouseOut(event);
	pointerUp(21)
	}
}
load_touch.addEventListener("MSPointerDown", loadPointerDown, false);
var button20TouchStart = function(event) {
	 if (detectmob() == 3)
		event.preventDefault();
		lockHover= false;
	button20MouseOver(event);
	touchStart(22);
}
var button20TouchEnd = function(event) {
	button20Click(undefined);
	setHoverButton("#button20_hover",false);
	touchEnd(22);
}

	button20_touch.addEventListener("touchstart", button20TouchStart, false);
var button20PointerDown = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	button20MouseOver(event);
	pointerDown(22);
	}
}
var button20PointerUp = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	button20Click(undefined);
	button20MouseOut(event);
	pointerUp(22)
	}
}
button20_touch.addEventListener("MSPointerDown", button20PointerDown, false);
var btnMichi_size1TouchStart = function(event) {
	 if (detectmob() == 3)
		event.preventDefault();
		lockHover= false;
	btnMichi_size1MouseOver(event);
	touchStart(23);
}
var btnMichi_size1TouchEnd = function(event) {
	btnMichi_size1Click(undefined);
	setHoverButton("#btnMichi_size1_hover",false);
	touchEnd(23);
}

	btnMichi_size1_touch.addEventListener("touchstart", btnMichi_size1TouchStart, false);
var btnMichi_size1PointerDown = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	btnMichi_size1MouseOver(event);
	pointerDown(23);
	}
}
var btnMichi_size1PointerUp = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	btnMichi_size1Click(undefined);
	btnMichi_size1MouseOut(event);
	pointerUp(23)
	}
}
btnMichi_size1_touch.addEventListener("MSPointerDown", btnMichi_size1PointerDown, false);
var btnMichi_size2TouchStart = function(event) {
	 if (detectmob() == 3)
		event.preventDefault();
		lockHover= false;
	btnMichi_size2MouseOver(event);
	touchStart(24);
}
var btnMichi_size2TouchEnd = function(event) {
	btnMichi_size2Click(undefined);
	setHoverButton("#btnMichi_size2_hover",false);
	touchEnd(24);
}

	btnMichi_size2_touch.addEventListener("touchstart", btnMichi_size2TouchStart, false);
var btnMichi_size2PointerDown = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	btnMichi_size2MouseOver(event);
	pointerDown(24);
	}
}
var btnMichi_size2PointerUp = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	btnMichi_size2Click(undefined);
	btnMichi_size2MouseOut(event);
	pointerUp(24)
	}
}
btnMichi_size2_touch.addEventListener("MSPointerDown", btnMichi_size2PointerDown, false);
var btnMichi_size3TouchStart = function(event) {
	 if (detectmob() == 3)
		event.preventDefault();
		lockHover= false;
	btnMichi_size3MouseOver(event);
	touchStart(25);
}
var btnMichi_size3TouchEnd = function(event) {
	btnMichi_size3Click(undefined);
	setHoverButton("#btnMichi_size3_hover",false);
	touchEnd(25);
}

	btnMichi_size3_touch.addEventListener("touchstart", btnMichi_size3TouchStart, false);
var btnMichi_size3PointerDown = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	btnMichi_size3MouseOver(event);
	pointerDown(25);
	}
}
var btnMichi_size3PointerUp = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	btnMichi_size3Click(undefined);
	btnMichi_size3MouseOut(event);
	pointerUp(25)
	}
}
btnMichi_size3_touch.addEventListener("MSPointerDown", btnMichi_size3PointerDown, false);
var btnKawa_size1TouchStart = function(event) {
	 if (detectmob() == 3)
		event.preventDefault();
		lockHover= false;
	btnKawa_size1MouseOver(event);
	touchStart(26);
}
var btnKawa_size1TouchEnd = function(event) {
	btnKawa_size1Click(undefined);
	setHoverButton("#btnKawa_size1_hover",false);
	touchEnd(26);
}

	btnKawa_size1_touch.addEventListener("touchstart", btnKawa_size1TouchStart, false);
var btnKawa_size1PointerDown = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	btnKawa_size1MouseOver(event);
	pointerDown(26);
	}
}
var btnKawa_size1PointerUp = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	btnKawa_size1Click(undefined);
	btnKawa_size1MouseOut(event);
	pointerUp(26)
	}
}
btnKawa_size1_touch.addEventListener("MSPointerDown", btnKawa_size1PointerDown, false);
var btnKawa_size2TouchStart = function(event) {
	 if (detectmob() == 3)
		event.preventDefault();
		lockHover= false;
	btnKawa_size2MouseOver(event);
	touchStart(27);
}
var btnKawa_size2TouchEnd = function(event) {
	btnKawa_size2Click(undefined);
	setHoverButton("#btnKawa_size2_hover",false);
	touchEnd(27);
}

	btnKawa_size2_touch.addEventListener("touchstart", btnKawa_size2TouchStart, false);
var btnKawa_size2PointerDown = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	btnKawa_size2MouseOver(event);
	pointerDown(27);
	}
}
var btnKawa_size2PointerUp = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	btnKawa_size2Click(undefined);
	btnKawa_size2MouseOut(event);
	pointerUp(27)
	}
}
btnKawa_size2_touch.addEventListener("MSPointerDown", btnKawa_size2PointerDown, false);
var btnKawa_size3TouchStart = function(event) {
	 if (detectmob() == 3)
		event.preventDefault();
		lockHover= false;
	btnKawa_size3MouseOver(event);
	touchStart(28);
}
var btnKawa_size3TouchEnd = function(event) {
	btnKawa_size3Click(undefined);
	setHoverButton("#btnKawa_size3_hover",false);
	touchEnd(28);
}

	btnKawa_size3_touch.addEventListener("touchstart", btnKawa_size3TouchStart, false);
var btnKawa_size3PointerDown = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	btnKawa_size3MouseOver(event);
	pointerDown(28);
	}
}
var btnKawa_size3PointerUp = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	btnKawa_size3Click(undefined);
	btnKawa_size3MouseOut(event);
	pointerUp(28)
	}
}
btnKawa_size3_touch.addEventListener("MSPointerDown", btnKawa_size3PointerDown, false);
var buttonColor1TouchStart = function(event) {
	 if (detectmob() == 3)
		event.preventDefault();
		lockHover= false;
	buttonColor1MouseOver(event);
	touchStart(29);
}
var buttonColor1TouchEnd = function(event) {
	buttonColor1Click(undefined);
	setHoverButton("#buttonColor1_hover",false);
	touchEnd(29);
}

	buttonColor1_touch.addEventListener("touchstart", buttonColor1TouchStart, false);
var buttonColor1PointerDown = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	buttonColor1MouseOver(event);
	pointerDown(29);
	}
}
var buttonColor1PointerUp = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	buttonColor1Click(undefined);
	buttonColor1MouseOut(event);
	pointerUp(29)
	}
}
buttonColor1_touch.addEventListener("MSPointerDown", buttonColor1PointerDown, false);
var buttonColor2TouchStart = function(event) {
	 if (detectmob() == 3)
		event.preventDefault();
		lockHover= false;
	buttonColor2MouseOver(event);
	touchStart(30);
}
var buttonColor2TouchEnd = function(event) {
	buttonColor2Click(undefined);
	setHoverButton("#buttonColor2_hover",false);
	touchEnd(30);
}

	buttonColor2_touch.addEventListener("touchstart", buttonColor2TouchStart, false);
var buttonColor2PointerDown = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	buttonColor2MouseOver(event);
	pointerDown(30);
	}
}
var buttonColor2PointerUp = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	buttonColor2Click(undefined);
	buttonColor2MouseOut(event);
	pointerUp(30)
	}
}
buttonColor2_touch.addEventListener("MSPointerDown", buttonColor2PointerDown, false);
var buttonCloseTab1TouchStart = function(event) {
	 if (detectmob() == 3)
		event.preventDefault();
		lockHover= false;
	buttonCloseTab1MouseOver(event);
	touchStart(31);
}
var buttonCloseTab1TouchEnd = function(event) {
	buttonCloseTab1Click(undefined);
	setHoverButton("#buttonCloseTab1_hover",false);
	touchEnd(31);
}

	buttonCloseTab1_touch.addEventListener("touchstart", buttonCloseTab1TouchStart, false);
var buttonCloseTab1PointerDown = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	buttonCloseTab1MouseOver(event);
	pointerDown(31);
	}
}
var buttonCloseTab1PointerUp = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	buttonCloseTab1Click(undefined);
	buttonCloseTab1MouseOut(event);
	pointerUp(31)
	}
}
buttonCloseTab1_touch.addEventListener("MSPointerDown", buttonCloseTab1PointerDown, false);
var buttonCloseTab2TouchStart = function(event) {
	 if (detectmob() == 3)
		event.preventDefault();
		lockHover= false;
	buttonCloseTab2MouseOver(event);
	touchStart(32);
}
var buttonCloseTab2TouchEnd = function(event) {
	buttonCloseTab2Click(undefined);
	setHoverButton("#buttonCloseTab2_hover",false);
	touchEnd(32);
}

	buttonCloseTab2_touch.addEventListener("touchstart", buttonCloseTab2TouchStart, false);
var buttonCloseTab2PointerDown = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	buttonCloseTab2MouseOver(event);
	pointerDown(32);
	}
}
var buttonCloseTab2PointerUp = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	buttonCloseTab2Click(undefined);
	buttonCloseTab2MouseOut(event);
	pointerUp(32)
	}
}
buttonCloseTab2_touch.addEventListener("MSPointerDown", buttonCloseTab2PointerDown, false);
var buttonCloseTab3TouchStart = function(event) {
	 if (detectmob() == 3)
		event.preventDefault();
		lockHover= false;
	buttonCloseTab3MouseOver(event);
	touchStart(33);
}
var buttonCloseTab3TouchEnd = function(event) {
	buttonCloseTab3Click(undefined);
	setHoverButton("#buttonCloseTab3_hover",false);
	touchEnd(33);
}

	buttonCloseTab3_touch.addEventListener("touchstart", buttonCloseTab3TouchStart, false);
var buttonCloseTab3PointerDown = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	buttonCloseTab3MouseOver(event);
	pointerDown(33);
	}
}
var buttonCloseTab3PointerUp = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	buttonCloseTab3Click(undefined);
	buttonCloseTab3MouseOut(event);
	pointerUp(33)
	}
}
buttonCloseTab3_touch.addEventListener("MSPointerDown", buttonCloseTab3PointerDown, false);
var buttonCloseTab4TouchStart = function(event) {
	 if (detectmob() == 3)
		event.preventDefault();
		lockHover= false;
	buttonCloseTab4MouseOver(event);
	touchStart(34);
}
var buttonCloseTab4TouchEnd = function(event) {
	buttonCloseTab4Click(undefined);
	setHoverButton("#buttonCloseTab4_hover",false);
	touchEnd(34);
}

	buttonCloseTab4_touch.addEventListener("touchstart", buttonCloseTab4TouchStart, false);
var buttonCloseTab4PointerDown = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	buttonCloseTab4MouseOver(event);
	pointerDown(34);
	}
}
var buttonCloseTab4PointerUp = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	buttonCloseTab4Click(undefined);
	buttonCloseTab4MouseOut(event);
	pointerUp(34)
	}
}
buttonCloseTab4_touch.addEventListener("MSPointerDown", buttonCloseTab4PointerDown, false);
var buttonSpan_showTouchStart = function(event) {
	 if (detectmob() == 3)
		event.preventDefault();
		lockHover= false;
	buttonSpan_showMouseOver(event);
	touchStart(35);
}
var buttonSpan_showTouchEnd = function(event) {
	buttonSpan_showClick(undefined);
	setHoverButton("#buttonSpan_show_hover",false);
	touchEnd(35);
}

	buttonSpan_show_touch.addEventListener("touchstart", buttonSpan_showTouchStart, false);
var buttonSpan_showPointerDown = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	buttonSpan_showMouseOver(event);
	pointerDown(35);
	}
}
var buttonSpan_showPointerUp = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	buttonSpan_showClick(undefined);
	buttonSpan_showMouseOut(event);
	pointerUp(35)
	}
}
buttonSpan_show_touch.addEventListener("MSPointerDown", buttonSpan_showPointerDown, false);
var button27TouchStart = function(event) {
	 if (detectmob() == 3)
		event.preventDefault();
		lockHover= false;
	button27MouseOver(event);
	touchStart(36);
}
var button27TouchEnd = function(event) {
	button27Click(undefined);
	setHoverButton("#button27_hover",false);
	touchEnd(36);
}

	button27_touch.addEventListener("touchstart", button27TouchStart, false);
var button27PointerDown = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	button27MouseOver(event);
	pointerDown(36);
	}
}
var button27PointerUp = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	button27Click(undefined);
	button27MouseOut(event);
	pointerUp(36)
	}
}
button27_touch.addEventListener("MSPointerDown", button27PointerDown, false);
var button28TouchStart = function(event) {
	 if (detectmob() == 3)
		event.preventDefault();
		lockHover= false;
	button28MouseOver(event);
	touchStart(37);
}
var button28TouchEnd = function(event) {
	button28Click(undefined);
	setHoverButton("#button28_hover",false);
	touchEnd(37);
}

	button28_touch.addEventListener("touchstart", button28TouchStart, false);
var button28PointerDown = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	button28MouseOver(event);
	pointerDown(37);
	}
}
var button28PointerUp = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	button28Click(undefined);
	button28MouseOut(event);
	pointerUp(37)
	}
}
button28_touch.addEventListener("MSPointerDown", button28PointerDown, false);
var button29TouchStart = function(event) {
	 if (detectmob() == 3)
		event.preventDefault();
		lockHover= false;
	button29MouseOver(event);
	touchStart(38);
}
var button29TouchEnd = function(event) {
	button29Click(undefined);
	setHoverButton("#button29_hover",false);
	touchEnd(38);
}

	button29_touch.addEventListener("touchstart", button29TouchStart, false);
var button29PointerDown = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	button29MouseOver(event);
	pointerDown(38);
	}
}
var button29PointerUp = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	button29Click(undefined);
	button29MouseOut(event);
	pointerUp(38)
	}
}
button29_touch.addEventListener("MSPointerDown", button29PointerDown, false);
var button30TouchStart = function(event) {
	 if (detectmob() == 3)
		event.preventDefault();
		lockHover= false;
	button30MouseOver(event);
	touchStart(39);
}
var button30TouchEnd = function(event) {
	button30Click(undefined);
	setHoverButton("#button30_hover",false);
	touchEnd(39);
}

	button30_touch.addEventListener("touchstart", button30TouchStart, false);
var button30PointerDown = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	button30MouseOver(event);
	pointerDown(39);
	}
}
var button30PointerUp = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	button30Click(undefined);
	button30MouseOut(event);
	pointerUp(39)
	}
}
button30_touch.addEventListener("MSPointerDown", button30PointerDown, false);
var button31TouchStart = function(event) {
	 if (detectmob() == 3)
		event.preventDefault();
		lockHover= false;
	button31MouseOver(event);
	touchStart(40);
}
var button31TouchEnd = function(event) {
	button31Click(undefined);
	setHoverButton("#button31_hover",false);
	touchEnd(40);
}

	button31_touch.addEventListener("touchstart", button31TouchStart, false);
var button31PointerDown = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	button31MouseOver(event);
	pointerDown(40);
	}
}
var button31PointerUp = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	button31Click(undefined);
	button31MouseOut(event);
	pointerUp(40)
	}
}
button31_touch.addEventListener("MSPointerDown", button31PointerDown, false);
var button32TouchStart = function(event) {
	 if (detectmob() == 3)
		event.preventDefault();
		lockHover= false;
	button32MouseOver(event);
	touchStart(41);
}
var button32TouchEnd = function(event) {
	button32Click(undefined);
	setHoverButton("#button32_hover",false);
	touchEnd(41);
}

	button32_touch.addEventListener("touchstart", button32TouchStart, false);
var button32PointerDown = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	button32MouseOver(event);
	pointerDown(41);
	}
}
var button32PointerUp = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	button32Click(undefined);
	button32MouseOut(event);
	pointerUp(41)
	}
}
button32_touch.addEventListener("MSPointerDown", button32PointerDown, false);
var buttonCloseColorTabTouchStart = function(event) {
	 if (detectmob() == 3)
		event.preventDefault();
		lockHover= false;
	buttonCloseColorTabMouseOver(event);
	touchStart(42);
}
var buttonCloseColorTabTouchEnd = function(event) {
	buttonCloseColorTabClick(undefined);
	setHoverButton("#buttonCloseColorTab_hover",false);
	touchEnd(42);
}

	buttonCloseColorTab_touch.addEventListener("touchstart", buttonCloseColorTabTouchStart, false);
var buttonCloseColorTabPointerDown = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	buttonCloseColorTabMouseOver(event);
	pointerDown(42);
	}
}
var buttonCloseColorTabPointerUp = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	buttonCloseColorTabClick(undefined);
	buttonCloseColorTabMouseOut(event);
	pointerUp(42)
	}
}
buttonCloseColorTab_touch.addEventListener("MSPointerDown", buttonCloseColorTabPointerDown, false);
var buttonCancelTouchStart = function(event) {
	 if (detectmob() == 3)
		event.preventDefault();
		lockHover= false;
	buttonCancelMouseOver(event);
	touchStart(43);
}
var buttonCancelTouchEnd = function(event) {
	buttonCancelClick(undefined);
	setHoverButton("#buttonCancel_hover",false);
	touchEnd(43);
}

	buttonCancel_touch.addEventListener("touchstart", buttonCancelTouchStart, false);
var buttonCancelPointerDown = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	buttonCancelMouseOver(event);
	pointerDown(43);
	}
}
var buttonCancelPointerUp = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	buttonCancelClick(undefined);
	buttonCancelMouseOut(event);
	pointerUp(43)
	}
}
buttonCancel_touch.addEventListener("MSPointerDown", buttonCancelPointerDown, false);
var buttonOKTouchStart = function(event) {
	 if (detectmob() == 3)
		event.preventDefault();
		lockHover= false;
	buttonOKMouseOver(event);
	touchStart(44);
}
var buttonOKTouchEnd = function(event) {
	buttonOKClick(undefined);
	setHoverButton("#buttonOK_hover",false);
	touchEnd(44);
}

	buttonOK_touch.addEventListener("touchstart", buttonOKTouchStart, false);
var buttonOKPointerDown = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	buttonOKMouseOver(event);
	pointerDown(44);
	}
}
var buttonOKPointerUp = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	buttonOKClick(undefined);
	buttonOKMouseOut(event);
	pointerUp(44)
	}
}
buttonOK_touch.addEventListener("MSPointerDown", buttonOKPointerDown, false);
var buttonCloseTab5TouchStart = function(event) {
	 if (detectmob() == 3)
		event.preventDefault();
		lockHover= false;
	buttonCloseTab5MouseOver(event);
	touchStart(45);
}
var buttonCloseTab5TouchEnd = function(event) {
	buttonCloseTab5Click(undefined);
	setHoverButton("#buttonCloseTab5_hover",false);
	touchEnd(45);
}

	buttonCloseTab5_touch.addEventListener("touchstart", buttonCloseTab5TouchStart, false);
	
var buttonCloseTab5PointerDown = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	buttonCloseTab5MouseOver(event);
	pointerDown(45);
	}
}
var buttonCloseTab5PointerUp = function(event) {
	if (event.pointerType == "touch" || event.pointerType == 2) {
	buttonCloseTab5Click(undefined);
	buttonCloseTab5MouseOut(event);
	pointerUp(45)
	}
}
buttonCloseTab5_touch.addEventListener("MSPointerDown", buttonCloseTab5PointerDown, false);


var buttonstickerTouchStart = function(event) {
	 if (detectmob() == 3)
		event.preventDefault();
	lockHover= false;
}
var buttonstickerTouchEnd = function(event) {
	buttonstickerClick(undefined);
}

buttonsticker_touch.addEventListener("touchstart", buttonstickerTouchStart, false);
buttonsticker_touch.addEventListener("touchend", buttonstickerTouchEnd, false);


}}, false);
