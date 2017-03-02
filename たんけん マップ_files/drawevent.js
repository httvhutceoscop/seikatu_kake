function DrawEvent(area) {
	this._drawed = false;
    var _this = this;
	this.drawtool = $drawraylinefree;

	
    interact(area).draggable({
        onstart: function (event) {
            if (event.button == 1 || event.button == 2) {
                _isMouseLeft = false;
                return;
            }
			if(!canDraw) return;
			if(useIE10){
				$("#canvas2").show();
			}
			hidePairCircle();
			stage1.clear();
			stage1.update();
			_lockDragLine = true;
            _isDragging = true;
            mouse = $utils.getTrueCoor(event.pageX, event.pageY);
            _this.drawtool.handleMouseDownPainter(mouse);
			
        },
        onmove: function (event) {
            if (!_isMouseLeft) return;
			if(!canDraw) return;
            var mouse = $utils.getTrueCoor(event.pageX, event.pageY);
            _this.drawtool.handleMouseMovePainter(mouse);
        },
        onend: function (event) {
			if(!_isMouseLeft){
				_isMouseLeft = true;
				return;
			}
			if(!canDraw) return;
			if(useIE10){
				$("#canvas2").hide();
			}
			_lockDragLine = false;
			_this.drawtool.handleMouseUpPainter();
			_isDragging = false;
        }
    }).restrict({
		drag: area.parentNode,
		endOnly: false
	}).styleCursor(false);

	interact(area).gesturable({
			onstart: function (event) {},
			onmove : function (event) {},
			onend  : function (event) {},
			max: Infinity,
			maxPerElement: 1,
	});
	
}
$drawevent = new DrawEvent(".candraw");
