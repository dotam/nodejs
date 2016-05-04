function init() {
    stage = new createjs.Stage("demoCanvas");
	
	// this lets our drag continue to track the mouse even when it leaves the canvas:
	// play with commenting this out to see the difference.
	stage.mouseMoveOutside = true; 
	
	var circle = new createjs.Shape();
	circle.graphics.beginFill("red").drawCircle(0, 0, 50);
	
	var label = new createjs.Text("drag me", "bold 14px Arial", "#FFFFFF");
	label.textAlign = "center";
	label.y = -7;
	
	var dragger = new createjs.Container();
	dragger.x = 512;dragger.y = 200;
	dragger.addChild(circle, label);
	stage.addChild(dragger);
	
	dragger.on("pressup",function(evt) {
		var circlex = new createjs.Shape();
		circlex.graphics.beginFill("red").drawCircle(0, 0, 50);
		
		var labelx = new createjs.Text("drag me", "bold 14px Arial", "#FFFFFF");
		labelx.textAlign = "center";
		labelx.y = -7;
		var draggerx = new createjs.Container();
		draggerx.x = evt.stageX;draggerx.y = evt.stageY;
		draggerx.addChild(circlex, labelx);
		stage.addChild(draggerx);

		draggerx.on("pressmove",function(evt) {
				// currentTarget will be the container that the event listener was added to:
				evt.currentTarget.x = evt.stageX;
				evt.currentTarget.y = evt.stageY;
				// make sure to redraw the stage to show the change:
				stage.update();   
			});

		
		// currentTarget will be the container that the event listener was added to:
		// evt.currentTarget.x = evt.stageX;
		// evt.currentTarget.y = evt.stageY;
		// make sure to redraw the stage to show the change:
		stage.update();   
		console.log('location = '+ evt.stageX + ' | ' + evt.stageY);
	});
	
	stage.update();
}