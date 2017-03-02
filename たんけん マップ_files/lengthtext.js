$.fn.textWidth = function(text, font) {
    if (!$.fn.textWidth.fakeEl) $.fn.textWidth.fakeEl = $('<span>').css("font-family", "MSGothicIE").hide().appendTo(document.body);
	var _vals = this.val().split("\n");
	var max = 0;
	for(var i = 0 ; i < _vals.length ; i++){
		$.fn.textWidth.fakeEl.text(_vals[i]).css('font', font || this.css('font')).css("font-size", font || this.css('font-size'));
		if($.fn.textWidth.fakeEl.width() > max)
			max = $.fn.textWidth.fakeEl.width();
	}
    return max;
};

$.fn.textHeight = function(text, font) {
    if (!$.fn.textHeight.fakeEl) $.fn.textHeight.fakeEl = $('<span>').css("font-family", "MSGothicIE").hide().appendTo(document.body);
    $.fn.textHeight.fakeEl.text(text || this.val() || this.text()).css('font', font || this.css('font')).css("font-size", font || this.css('font-size'));
    return $.fn.textHeight.fakeEl.height();
};