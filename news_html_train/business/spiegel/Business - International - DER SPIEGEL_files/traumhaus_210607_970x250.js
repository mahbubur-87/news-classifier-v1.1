(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Bitmap10 = function() {
	this.initialize(img.Bitmap10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,172,115);


(lib.Bitmap16 = function() {
	this.initialize(img.Bitmap16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,237,31);


(lib.Bitmap3 = function() {
	this.initialize(img.Bitmap3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,325,153);


(lib.Bitmap4 = function() {
	this.initialize(img.Bitmap4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,325,115);


(lib.Bitmap7 = function() {
	this.initialize(img.Bitmap7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,281,26);


(lib.suget = function() {
	this.initialize(img.suget);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,869,346);


(lib.traunhaus_ag_logo_farbe = function() {
	this.initialize(img.traunhaus_ag_logo_farbe);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,77);


(lib.traunhaus_ag_logo_weiss = function() {
	this.initialize(img.traunhaus_ag_logo_weiss);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,77);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bEsIAApXMAu3AAAIAAJXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-30,300,60);


(lib.Tween9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9D1D5D").s().p("EhOvAafMAAAg09MCdfAAAMAAAA09g");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-503.9,-169.4,1007.9,338.9);


(lib.Tween8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhNdAUaMAAAgozMCa7AAAMAAAAozg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-495.7,-130.5,991.5,261.1);


(lib.Tween7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.traunhaus_ag_logo_weiss();
	this.instance.setTransform(-70,-21,0.58,0.5797);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70,-21,174,44.7);


(lib.Tween6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9D1D5D").s().p("A02afMAAAg09MAptAAAMAAAA09g");
	this.shape.setTransform(-807.7402,0.025,3.7751,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1311.7,-169.4,1008,338.9);


(lib.Tween5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.Bitmap4();
	this.instance.setTransform(-163,-58);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-163,-58,325,115);


(lib.Tween4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.Bitmap3();
	this.instance.setTransform(-163,-77,0.8615,0.8615);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-163,-77,280,131.8);


(lib.Tween3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.traunhaus_ag_logo_farbe();
	this.instance.setTransform(-145,-44,1.0001,1.0004);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-145,-44,300,77.1);


(lib.Tween2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.suget();
	this.instance.setTransform(-343,-129,0.6572,0.6572);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-343,-129,571.1,227.4);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Wir_schaffen_bezahlbaren_Wohnraum
	this.instance = new lib.Bitmap10();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,172,115), null);


// stage content:
(lib.traumhaus_210607_970x250 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_10
	this.instance = new lib.Tween4("synched",0);
	this.instance.setTransform(-182,161);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(237).to({_off:false},0).to({x:188},28,cjs.Ease.quartOut).to({startPosition:0},84).to({x:-162},24,cjs.Ease.quartIn).wait(174));

	// Ebene_9
	this.instance_1 = new lib.Tween5("synched",0);
	this.instance_1.setTransform(-182,142);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(116).to({_off:false},0).to({x:188},28,cjs.Ease.quartOut).to({startPosition:0},83).to({x:-162},24,cjs.Ease.quartIn).wait(296));

	// Ebene_7
	this.instance_2 = new lib.Symbol1();
	this.instance_2.setTransform(-247.5,152.4,1,1,0,0,0,97.5,68.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:122.5},28,cjs.Ease.quartOut).wait(76).to({x:-226.5},24,cjs.Ease.quartIn).wait(419));

	// Ebene_14
	this.instance_3 = new lib.Tween10("synched",0);
	this.instance_3.setTransform(466,171.05);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(381).to({_off:false},0).to({x:770.95},18,cjs.Ease.cubicOut).to({startPosition:0},114).to({x:466.5,y:169},13,cjs.Ease.cubicIn).to({_off:true},1).wait(20));

	// Ebene_13
	this.instance_4 = new lib.Bitmap16();
	this.instance_4.setTransform(377,154);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9E1E5E").s().p("AyCDhQgyAAAAgyIAAldQAAgyAyAAMAkFAAAQAyAAAAAyIAAFdQAAAygyAAg");
	this.shape.setTransform(495.5,169.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape},{t:this.instance_4}]},381).to({state:[]},146).wait(20));

	// logo_farbe
	this.instance_5 = new lib.Tween3("synched",0);
	this.instance_5.setTransform(461.85,96.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(378).to({_off:false},0).to({x:461,y:96,alpha:1},13,cjs.Ease.quartOut).to({x:461.85,y:96.1},128).to({alpha:0},11).wait(17));

	// traumhaus_logo_weiss_trans_png
	this.instance_6 = new lib.Tween7("synched",0);
	this.instance_6.setTransform(92.5,32.15);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({startPosition:0},362).to({regX:0.2,regY:0.2,scaleX:1.7271,scaleY:1.7271,x:436.8,y:88.45},20,cjs.Ease.quartInOut).to({startPosition:0},137).to({startPosition:0},7).to({regX:0,regY:0,scaleX:1,scaleY:1,x:92.5,y:32.15},20,cjs.Ease.quartInOut).wait(1));

	// Ebene_1
	this.instance_7 = new lib.Bitmap7();
	this.instance_7.setTransform(26,221);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(547));

	// white
	this.instance_8 = new lib.Tween8("synched",0);
	this.instance_8.setTransform(-508.7,119.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({startPosition:0},366).to({x:482.8},26,cjs.Ease.quartInOut).to({startPosition:0},127).to({x:-508.7},21,cjs.Ease.quartInOut).wait(7));

	// overlay_img_right
	this.instance_9 = new lib.Tween9("synched",0);
	this.instance_9.setTransform(1193.35,138.45);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:1461.5},56,cjs.Ease.quartOut).to({startPosition:0},440).to({x:1193.35},2).wait(49));

	// overlay_img_left
	this.instance_10 = new lib.Tween6("synched",0);
	this.instance_10.setTransform(1002.8,138.45);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({x:651.65,y:135.75},56,cjs.Ease.quartOut).to({startPosition:0},293).to({x:1303.6},24,cjs.Ease.quartInOut).to({startPosition:0},123).to({x:1002.8,y:138.45},2).wait(49));

	// img
	this.instance_11 = new lib.Tween2("synched",0);
	this.instance_11.setTransform(707.95,146.15,1.1489,1.1489);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({regX:0.1,regY:0.1,scaleX:1.6482,scaleY:1.6482,x:687.45,y:129.95},414).wait(133));

	// Ebene_5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9D1D5D").s().p("A02afMAAAg09MAptAAAMAAAA09g");
	this.shape_1.setTransform(491.0098,129.475,3.7751,1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(547));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-519.4,42.2,2484.9,265.8);
// library properties:
lib.properties = {
	id: '9C5051D7BD7282498CF5D8C901A8FB77',
	width: 970,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Bitmap10.png", id:"Bitmap10"},
		{src:"images/Bitmap16.png", id:"Bitmap16"},
		{src:"images/Bitmap3.png", id:"Bitmap3"},
		{src:"images/Bitmap4.png", id:"Bitmap4"},
		{src:"images/Bitmap7.png", id:"Bitmap7"},
		{src:"images/suget.jpg", id:"suget"},
		{src:"images/traunhaus_ag_logo_farbe.png", id:"traunhaus_ag_logo_farbe"},
		{src:"images/traunhaus_ag_logo_weiss.png", id:"traunhaus_ag_logo_weiss"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['9C5051D7BD7282498CF5D8C901A8FB77'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;