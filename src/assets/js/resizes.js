export function resizeHome(){
    var obj = {
		width: 0,
		height: 0,
		xScale: 0,
		yScale: 0
	};

	function setHomeSize() {
//		debugger
		console.log("home:::");
		var realWidth = $(".main-container").width();
		var realHeight = $(".main-container").height();
		var width = 0;
		var height = 0;
		var transition = 0;
		if(screen.width/screen.height == 3200/1890){
			width = 3200;
			height = 1890;
			transition = 50
		}else {
			width = 3200;
			height = 1890;
			transition = 50
		}
		// var width=
		obj.width = window.innerWidth;
		obj.height = window.innerHeight;
		obj.xScale = obj.width / width;
		obj.yScale = obj.height / height;
        obj.minScale = Math.min(obj.xScale,obj.yScale);
        window.minScale = obj.minScale;
//      obj.xScale =  obj.minScale;
//      obj.yScale =  obj.minScale;
		var jscss = [
			'.main-container {',
			'   transform: translate(' + (-transition * (1 - obj.xScale)) + '%,' + (-50 * (1 - obj.yScale)) + '%) scale(' + obj.minScale + ',' + obj.minScale + ');',
			'   -webkit-transform: translate(' + (-transition * (1 - obj.xScale)) + '%,' + (-50 * (1 - obj.yScale)) + '%) scale(' + obj.minScale + ',' + obj.minScale + ');',
			'}'
		].join('\n');

		var $style = $('#js-style');
		if ($style.length === 0) {
			$style = $('<style id="js-style" type="text/css"></style>');
			$style.appendTo('head');
		}
		$style.text(jscss);
	}
	setHomeSize();

	window.addEventListener('resize', setHomeSize, false);
	return obj;
}

export function resizeSmall(){
    var obj = {
		width: 0,
		height: 0,
		xScale: 0,
		yScale: 0
	};

	function setOhterSize() {
//		debugger
		console.log("other:::");
		var realWidth = $(".main-container").width();
		var realHeight = $(".main-container").height();
		var width = 0
		var height = 0
		var transition = 0
		if(screen.width/screen.height == 3200/1890){
			width = 3200
			height = 1890
			transition = 50
		}else if(screen.width/screen.height == 3414/1440){
			width = 3200
			height = 1890
			transition = 50
		}else {
			if(window.screen.width*window.devicePixelRatio >= 2875 && window.screen.width*window.devicePixelRatio <= 2885){
                width = 4964
                height = 2792
				if(window.devicePixelRatio == 2) transition = 55
				else if(window.devicePixelRatio == 1.75) transition = 56.1
				else if(window.devicePixelRatio == 1.5) transition = 57.8
				else if(window.devicePixelRatio == 1.25) transition = 60.7
				else if(window.devicePixelRatio == 1) transition = 67
				else if(window.devicePixelRatio == 2.25) transition = 54
				else if(window.devicePixelRatio == 2.5) transition = 53.4
				else transition = 55
            }else if(window.screen.width*window.devicePixelRatio >= 1915 && window.screen.width*window.devicePixelRatio <= 1925){
				// console.log(Math.round(screen.width/screen.height*10)/10)
                width = 4964
                height = 2792
				if(window.devicePixelRatio == 2) transition = 53
				else if(window.devicePixelRatio == 1.75) transition = 53.5
				else if(window.devicePixelRatio == 1.5) transition = 54.3
				else if(window.devicePixelRatio == 1.25) transition = 55.6
				else if(window.devicePixelRatio == 1) transition = 57.8
				else if(window.devicePixelRatio == 2.25) transition = 52.6
				else if(window.devicePixelRatio == 2.5) transition = 52.3
				else transition = 50
            }
			else if(window.screen.width*window.devicePixelRatio >= 2555 && window.screen.width*window.devicePixelRatio <= 2565){
				width = 4964
                height = 2792
				if(window.devicePixelRatio == 2) transition = 54.3
				else if(window.devicePixelRatio == 1.75) transition = 55.2
				else if(window.devicePixelRatio == 1.5) transition = 56.5
				else if(window.devicePixelRatio == 1.25) transition = 58.7
				else if(window.devicePixelRatio == 1) transition = 63.2
				else if(window.devicePixelRatio == 2.25) transition = 53.6
				else if(window.devicePixelRatio == 2.5) transition = 53.2
				else transition = 55
			}else {
				console.log(window.screen.width)
				console.log(window.screen.height)
				console.log(window.devicePixelRatio)
				width = 3200
				height = 1890
				transition = 50

			}
		}
		// var width=
		obj.width = window.innerWidth;
		obj.height = window.innerHeight;
		obj.xScale = obj.width / width;
		obj.yScale = obj.height / height;
        obj.minScale = Math.min(obj.xScale,obj.yScale);
        window.minScale = obj.minScale;
//      obj.xScale =  obj.minScale;
//      obj.yScale =  obj.minScale;
		var jscss = [
			'.main-container {',
			'   transform: translate(' + (-transition * (1 - obj.xScale)) + '%,' + (-50 * (1 - obj.yScale)) + '%) scale(' + obj.minScale + ',' + obj.minScale + ');',
			'   -webkit-transform: translate(' + (-transition * (1 - obj.xScale)) + '%,' + (-50 * (1 - obj.yScale)) + '%) scale(' + obj.minScale + ',' + obj.minScale + ');',
			'}'
		].join('\n');

		var $style = $('#js-style');
		if ($style.length === 0) {
			$style = $('<style id="js-style" type="text/css"></style>');
			$style.appendTo('head');
		}
		$style.text(jscss);
	}
	setOhterSize();

	window.addEventListener('resize', setOhterSize, false);
	return obj;
}
