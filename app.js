App = function()
{
    this.foundDifferences = 0;
    this.totalDifferences = 7;
    // this is where the WADE app is initialized
	this.init = function()
	{
        // load a scene
		wade.loadScene('scene1.wsc', true, function()
        {
            // the scene has been loaded, do something here

        });
	};
	this.gameOver = function(){
	    wade.clearScene();
	}
};
