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
            /*
            var x = new SceneObject();
            x.setPosition(-400, 220);
            
            var sprite1 = new Sprite();
            sprite1.setVisible(false);
            sprite1.setImageFile("assets/x.png");
            sprite1.setSize(66, 66);
            
            var sprite2 = new Sprite();
            sprite2.setVisible(true);
            sprite2.setImageFile("assets/transparent.png");
            sprite2.setSize(66, 66);
            
            x.addSprite(sprite1);
            x.addSprite(sprite2);
            
            var func = {
                "onAddToScene": "function (data)\n{\n\tvar clone = this.clone();\n\tclone.setPosition(this.getPosition().x + 850/2, this.getPosition().y);\n\t\n\tclone.onAddToScene = null;\n\twade.addSceneObject(clone,true);\n\t\n\tthis.clonedObject = clone;\n\tclone.clonedObject = this;\n}",
                "onMouseDown": "function (data)\n{\n\t//so the differences found counter doesnt increase if we click on the same difference\n\t\n\tif(!this.isFound && !this.clonedObject.isFound){\n\t    \n\t\n\t\n\t    this.getSprite(0).setVisible(true);\n\t    this.clonedObject.getSprite(0).setVisible(true);\n\t\n\t    wade.app.foundDifferences++;\n\t\n\t    wade.getSceneObject('scoreText').getSprite(0).setText(wade.app.foundDifferences + ' / ' + wade.app.totalDifferences);\n\t\n\t  if(wade.app.foundDifferences == wade.app.totalDifferences)\n\t    {\n\t        wade.app.gameOver();\n\t    }\n\t    this.isFound = true;\n\t}\n}"
                
            };
            x.importFunctions(func);
            
            x.setName("difTest");
            wade.addSceneObject(x);
            
            */
            
            wade.getSceneObject("scoreText").getSprite(0).setText(
                wade.app.foundDifferences + " / " + wade.app.totalDifferences);

        });
	};
	this.gameOver = function(){
	    wade.clearScene();
	}
};
