var takephoto = {};

takephoto.extend = function (target, source) {
  target = target || {};
  for (var prop in source) {
    if (typeof source[prop] === 'object') {
      target[prop] = extend(target[prop], source[prop]);
    } else {
      target[prop] = source[prop];
    }
  }
  return target;
};

takephoto.init =  function(params){
	takephoto.settings = {
		sSaveUrl: "save.php",
		iJpegQuality: "100",
		menu: false,
		id: "myDynamicContent",
		name: "myDynamicContent",
		swf:"picture.swf",
		containerId:"myContent",
		height:"480",
		width:"640",
		success:function(){
			alert("Done!");
		},
		failed: function(){
			alert("Sorry! Unable to take photo :(");
		}

	};
	takephoto.settings = takephoto.extend(takephoto.settings,params);
	
	var flashvars = {
	  sSaveUrl: takephoto.settings.sSaveUrl,
	  iJpegQuality: takephoto.settings.iJpegQuality
	};
	var flashparams = {
	  menu: takephoto.settings.menu
	};
	var attributes = {
		  id: takephoto.settings.id,
		  name: takephoto.settings.name
	};
	swfobject.embedSWF(
		takephoto.settings.swf,
		takephoto.settings.containerId,
		takephoto.settings.width,
		takephoto.settings.height,
		"9.0.0",
		"expressInstall.swf", 
		flashvars, 
		flashparams, 
		attributes
	);
};

takephoto.capture = function(){
	var op = document.getElementById(takephoto.settings.id).startCapture();
	if(op == "OK"){
		takephoto.settings.success();
	} else {
		takephoto.settings.failed();
	}
};
