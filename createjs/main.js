function init() {
    stage = new createjs.Stage("demoCanvas");
	// stage.mouseMoveOutside = true; 
// .......................image background........................................
	var image = new Image();
		 
	image.src = "./b.jpg";
	image.onload = handleImageLoad;

	image.onload();

	function handleImageLoad(event) {
		var bitmap = new createjs.Bitmap(image);

		stage.addChild(bitmap);
		bitmap.x = 110;
		bitmap.y = 1;
		stage.update();
	}
//....................draw rectangle..................................................
	var shape = new createjs.Shape();
	shape.graphics.beginFill("#FFE4B5").setStrokeStyle(1).beginStroke("rgba(0,0,0,1)").drawRect(0, 0, 100, 100);
	
	var label = new createjs.Text("drag me", "bold 14px Arial", "#00ff00");
	// label.textAlign = "center";
	label.textBaseline = "top";
	// label.y = 30;
	// label.x = 30;

	var dragger = new createjs.Container();
	dragger.x = 5;dragger.y = 5;

	dragger.addChild(shape,label);

	dragger.on("pressup",function(evt) {
			var shapeItem = new createjs.Shape();
			shapeItem.graphics.beginFill("#FFE4B5").setStrokeStyle(1).beginStroke("rgba(0,0,0,1)").drawRect(0, 0, 100, 100);
			


			var labelItem = new createjs.Text("drag me", "bold 14px Arial", "#00ff00");
			// label.textAlign = "center";
			labelItem.textBaseline = "top";
			// label.y = 30;
			// label.x = 30;

			var draggerItem = new createjs.Container();
			draggerItem.x = evt.stageX;draggerItem.y = evt.stageY;

			draggerItem.on("pressmove", function (evt1) {
				// bump the target in front of its siblings:
				evt1.currentTarget.x = evt1.stageX;
				evt1.currentTarget.y = evt1.stageY;
				// make sure to redraw the stage to show the change:
				stage.update();   
			});


			draggerItem.addChild(shapeItem,labelItem);

			stage.addChild(draggerItem);
			stage.update();
			console.log('location = '+ evt.stageX + ' | ' + evt.stageY);

	
	});


// -------------------add-----------------------------
	stage.addChild(dragger);

   var line = new createjs.Shape();
   // line.graphics.moveTo(220,60).setStrokeStyle(1).beginStroke("#00ff00").lineTo(300,60);
   line.graphics.beginStroke("green").moveTo(110, 0).lineTo(110,500 ).endStroke();
   stage.addChild(line);



    // var polystar = new createjs.Shape();
    // polystar.graphics.setStrokeStyle(1).beginStroke("#0000ff").drawPolyStar(360,60,10,5,6,20);
    // stage.addChild(polystar);
    


    //     var gradient = new createjs.Shape();
    // gradient.graphics.beginLinearGradientFill(["rgba(255,198,255,1)", "rgba(0,255,0,1)"], [0, 1], 0, 50, 0,   130).drawRoundRect(430, 10, 90, 90,10);
    // stage.addChild(gradient);

	stage.update();
}

 