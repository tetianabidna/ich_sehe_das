/*
    This behaviour alters the draw functions of it's parents scene object
    sprites in order to provide fade in and fade out functionality
*/
Fade = function()
{
    this.name = "Fade";
    this.fadeOutTime = 2.0;
    this.fadeInTime = 2.0;
    var faded = false;
    
    this.fadeOut = function()
    {
        // Dont fade if already faded, prevents getting a missmatch if new sprites have been added in the wrong state
        if(faded)
        {
            return;
        }
        faded = true;
        
        // Get all the sprites, must be done now as the parent object may have changed
        for(var i=0; i<this.owner.getSpriteCount(); i++)
        {
            var sprite = this.owner.getSprite(i);
            sprite.setDrawFunction(wade.drawFunctions.fadeOpacity_(1.0, 0.0, this.fadeOutTime, sprite.getDrawFunction()));
        }
    };
    
    this.fadeIn = function()
    {
        console.log(faded);
        if(!faded)
        {
            return;
        }
        faded = false;
        
        // Get all the sprites, must be done now as the parent object may have changed
        for(var i=0; i<this.owner.getSpriteCount(); i++)
        {
            var sprite = this.owner.getSprite(i);
            sprite.setDrawFunction(wade.drawFunctions.fadeOpacity_(0.0, 1.0, this.fadeInTime, sprite.getDrawFunction()));
        }
    };
    
    this.isFaded = function()
    {
        return faded;    
    };
};