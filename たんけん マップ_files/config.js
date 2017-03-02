circleFillColor = "#DBEAF9";
circleStrokeColor = "#4D8BD3";
circleStrokeWidth = 1;
currentPairCircle = [];
minR = 8;
var minHeightBox = 50;
var minWidthBox = 50;

function addPairCircle(c1,c2){
	hidePairCircle();
	currentPairCircle = [];
	currentPairCircle.push(c1);
	currentPairCircle.push(c2);
}

function hidePairCircle(){
	for(var i = 0 ; i < currentPairCircle.length ; i++){
		currentPairCircle[i].visible = false;
	}
}