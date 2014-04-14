takephoto
=========

Take picture with your Webcam using Flash
Based on Edgard's Photo Capture SWF plugin: http://edgardksb.com/javascript/take-picture-with-your-webcam-using-flash/

Created a modularised, extendable js plugin with HTML demo

Use following script to init takephoto

<script type="text/javascript" src="swfobject.js"></script>
<script type="text/javascript" src="takephoto.js"></script>
<script type="text/javascript">
		takephoto.init({
				sSaveUrl: "save.php", //Server side Destination URL for saving captured image
				iJpegQuality: "100", // Image Quality between 0 to 100
				menu: false, // Mendu option doesn't works but was there in SWF documentation
				id: "myDynamicContent", // The new ID attr of SWF object to be initialized
				name: "myDynamicContent", // The new Name attr of SWF object to be initialized
				swf:"picture.swf", // The path to picture SWF file
				containerId:"myContent", // HTML dom ID of element which will contain the object
				height:"480",// Height of Object window
				width:"640",// Width of Object window
				success:function(){
				  // If picture is taken then do this
					alert("Photo taken :)");
				},
				failed: function(){
				  // If error occured then do this
					alert("Sorry! Unable to take photo :(");
				}
			});
	</script>
	
	HTML
	
	<div id="myContent"></div>
	<a href="javascript:;" onclick="takephoto.capture();">Take Photo</a>
