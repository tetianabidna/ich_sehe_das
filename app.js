App = function() {
  this.foundDifferences;
  this.totalDifferences;
  
  this.sceneNumber = 0;
  var sceneInfo;

  // this is where the WADE app is initialized
  this.init = function() {
    // load a scene
    load();
  };

  this.gameOver = function() {
    wade.app.sceneNumber += 1;
    wade.clearScene();
    load();
  }

  function load() {
    wade.loadScene('scene2.wsc', true, function() {
    
      wade.app.foundDifferences = 0;
      
      sceneInfo = getNextSceneInfo( wade.app.sceneNumber);

      buildNewScene(sceneInfo);

      wade.getSceneObject('scoreText').getSprite(0).setText(
        wade.app.foundDifferences + " / " + wade.app.totalDifferences);
    });
  }
};