var bezier = function(p0, p1, p2, p3, t) {
    var cX = 3 * (p1.x - p0.x),
        bX = 3 * (p2.x - p1.x) - cX,
        aX = p3.x - p0.x - cX - bX;

    var cY = 3 * (p1.y - p0.y),
        bY = 3 * (p2.y - p1.y) - cY,
        aY = p3.y - p0.y - cY - bY;

    var x = (aX * Math.pow(t, 3)) + (bX * Math.pow(t, 2)) + (cX * t) + p0.x;
    var y = (aY * Math.pow(t, 3)) + (bY * Math.pow(t, 2)) + (cY * t) + p0.y;


    return [x, y];
};
var calculateDashedBezier = function(controlPoints, dashPattern,step) {
    var delta = function(p0, p1) {
        return [p1[0] - p0[0], p1[1] - p0[1]];
    };
    var arcLength = function(p0, p1) {
        var d = delta(p0, p1);
        return Math.sqrt(d[0] * d[0] + d[1] * d[1]);
    };

    var subPaths = [];

    var loc = [controlPoints[0].x, controlPoints[0].y];
    var lastLoc = loc;
    var dashIndex = 0;
    var length = 0;
    var thisPath = [];
    var _index = 0;
    for (var i = 1; i < controlPoints.length; i++) {
        var _pointEnd = controlPoints[i];
        var _pointStart = controlPoints[_index];
        _index++;
        var _center = {
            x: (_pointEnd.x + _pointStart.x) / 2,
            y: (_pointEnd.y + _pointStart.y) / 2
        };
        for (var t = step; t <= 1; t += step) {
            loc = bezier(_pointStart, _center, _center, _pointEnd, t);

            length += arcLength(lastLoc, loc);
            lastLoc = loc;

            if (length >= dashPattern[dashIndex]) {
                if (dashIndex % 2 == 0)
                    subPaths.push(thisPath);
                dashIndex = (dashIndex + 1) % dashPattern.length;
                thisPath = [];
                length = 0;
            }

            if (dashIndex % 2 == 0) {
                thisPath.push(loc[0], loc[1]);
            }
        }
        if (thisPath.length > 0)
            subPaths.push(thisPath);
    }


    return subPaths;
};

var pathParts = function(ctx, pathParts) {
    for (var i = 0; i < pathParts.length; i++) {
        var part = pathParts[i];
        if (part.length > 0)
            ctx.moveTo(part[0], part[1]);
        for (var j = 1; j < part.length / 2; j++) {
            ctx.lineTo(part[2 * j], part[2 * j + 1]);
        }
    }
};

var drawDashedBezier = function(ctx, controlPoints, dashPattern, step) {
    var dashes = calculateDashedBezier(controlPoints, dashPattern,step);
    pathParts(ctx, dashes);
	
};