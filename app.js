// Main and most important .js file. The game sequence is determined here and also 
// how the game and the individual scenes behave when a specific action is triggered
App = function() {
	
	
// Number of differences, every level reinitializes it because pictures can have a different 
// number of differences
  this.totalDifferences;
  
// Number of allowed clicks before game over, every level reinitializes it because pictures 
// can have a different number of differences
  this.allowedClicks;
  
// Boolean that shows if a difference was clicked
  this.isDifference = false;

// In this array are the IDs of the solved levels 
  this.completedLevelIDs = [];
  
  // -1 because level IDs start with 0
  this.currentLevel = -1;

  // this is where the WADE app is initialized
  this.init = function() {
	load();
  };
  
  this.load = function(){
	  load();
  }

// Loads StartScene.wsc and checks after every load which levels were completed 
// and marks them with a green check mark 
  function load() {
    console.log('LOAD START SCENE');

    wade.clearScene();
    wade.loadScene('scenes/StartScene.wsc', false, function() {
      loadLevelPreviews(getDataJSON());

      var completedLevelIDs = wade.app.completedLevelIDs;
      for (i = 0; i < completedLevelIDs.length; i += 1) {

        var obj = wade.getSceneObject('gemacht_' + completedLevelIDs[i]);
        obj.setVisible(true);
      }
    });
  }

// Loads GameOverScene.wsc, waits 2s and then loads StartScene.wsc
  this.gameOver = function() {

    console.log('GAME OVER');

    wade.clearScene();

    wade.loadScene('scenes/GameOverScene.wsc', false, function() {});

    setTimeout(function() {
      wade.clearScene();
      load();
    }, 2000);
  }

// If a level is done its ID is appended to completedLevelIDs Array and
// StartScene.wsc is loaded
  this.continueGame = function() {

    console.log('WON THE GAME');

    var exist = false;

    for (i = 0; i < wade.app.completedLevelIDs.length; i += 1) {
      if (wade.app.completedLevelIDs[i] == wade.app.currentLevel) {
        exist = true;
        break;
      }

    }

    if (!exist) {
      wade.app.completedLevelIDs.push(wade.app.currentLevel);
    }

    load();
  }


// After a level in StartScene.wsc is selected, LevelScene.wsc is loaded and 
// totalDifferences and allowedClicks are initialized
  this.buildAndLoadNewScene = function(idOfImg) {
    console.log('BUILD NEW LEVEL');

    wade.clearScene();

    wade.app.currentLevel = idOfImg;

    wade.loadScene('scenes/LevelScene.wsc', false, function() {

      var sceneInfo = getSceneInfo(idOfImg);
      wade.app.totalDifferences = sceneInfo.coordinatesOfDifferences.length;
      wade.app.allowedClicks = sceneInfo.coordinatesOfDifferences.length - 2;

      console.log('Before');
      buildNewScene(sceneInfo);

      wade.getSceneObject('scoreText').getSprite(0).setText('Finde ' + wade.app.totalDifferences + ' Unterschiede');
      wade.getSceneObject('dollarClicks').getSprite(0).setText(wade.app.allowedClicks);

    });
  }
};