
MyDrag = function(_main,box1,box2 , _startPoint) {
	var mouseX , mouseY;
	this.x = _startPoint.x;
	this.y = _startPoint.y;
	this.scale = 1;
	var _this = this;
	var main = _main;
	
	this.update = function(){
		$(main).attr("transform","translate("+_this.x+","+_this.y+")");
	}
	this.update();
	$(_main).show();
	//if(useIE10){
	document.getElementById(box2.replace("#","")).addEventListener("MSPointerUp",function(){
		if(_lockMenu) {
			_lockMenu = false;
			return;
		}
		
		if($("#bgTab").css("display") =="none"){
			$("#bgTab").show();
			$("#mainTab").show();				
			$("#shape1").show();
		} else {
			$("#bgTab").hide();
			$("#mainTab").hide();
			$("#shape1").hide();
		}
	});
	
	
	//}
	
	interact(box2).on("touchend", function(){
		if(_lockMenu) {
			_lockMenu = false;
			return;
		}
		
		if($("#bgTab").css("display") =="none"){
			$("#bgTab").show();
			$("#mainTab").show();				
			$("#shape1").show();
		} else {
			$("#bgTab").hide();
			$("#mainTab").hide();
			$("#shape1").hide();
		}
	}).on("mouseup", function(){
		if(_lockMenu) {
			_lockMenu = false;
			return;
		}
		
		if($("#bgTab").css("display") =="none"){
			$("#bgTab").show();
			$("#mainTab").show();				
			$("#shape1").show();
		} else {
			$("#bgTab").hide();
			$("#mainTab").hide();
			$("#shape1").hide();
		}
	});

	interact(box1+","+box2).draggable({
		onstart: function (event) {
			_lockMenu = true;
			dragStart(event);
		},
		onmove: function (event) {
			dragMove(event);			
		},
		onend: function (event) {
			dragEnd(event);
		}
	}).restrict({
		drag: box1.parentNode,
		endOnly: false
	}).styleCursor(false);
	
	function dragStart(event){
		var mouse = $utils.getTrueCoor(event.pageX, event.pageY);
		mouseX = mouse[0];
		mouseY = mouse[1];
	}
	
	function dragMove(event){
		var mouse = $utils.getTrueCoor(event.pageX, event.pageY);
		if(mouse[0] <0){
			mouse[0] = 0;
		}
		if(mouse[0] > 1280){
			mouse[0] = 1280;
		}
		if(mouse[1] <0){
			mouse[1] = 0;
		}
		if(mouse[1] > 720){
			mouse[1] = 720;
		}
		var k1 = -mouseX + mouse[0];
		var k2 = -mouseY + mouse[1];
		_this.x += k1;
		_this.y += k2;
		
		mouseX= mouse[0];
		mouseY= mouse[1];
		
		_this.update();
		
	}
	
	function dragEnd(event){
		var mouse = $utils.getTrueCoor(event.pageX, event.pageY);
	}
}

$itemdrag = new MyDrag("#all","#layer","#buttonSpan_show_event", new Point(886,0));
