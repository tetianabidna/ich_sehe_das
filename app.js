App = function() {

  this.totalDifferences;
  this.allowedClicks;
  this.isDifference = false;
  this.completedLevelIDs = [];
  this.currentLevel = -1;

  // this is where the WADE app is initialized
  this.init = function() {

    // load a scene
    load();
  };

  function load() {
    console.log('LOAD START SCENE');

    wade.clearScene();
    wade.loadScene('scenes/StartScene.wsc', true, function() {
      loadLevelPreViews(getDataJSON());

      var completedLevelIDs = wade.app.completedLevelIDs;
      for (i = 0; i < completedLevelIDs.length; i += 1) {

        var obj = wade.getSceneObject('gemacht_' + completedLevelIDs[i]);
        obj.setVisible(true);
      }
    });
  }

  this.gameOver = function() {

    console.log('GAME OVER');

    wade.clearScene();

    wade.loadScene('scenes/GameOverScene.wsc', true, function() {});

    setTimeout(function() {
      wade.clearScene();
      load();
    }, 2000);
  }

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

  this.buildAndLoadNewScene = function(idOfImg) {
    console.log('BUILD NEW LEVEL');

    wade.clearScene();

    wade.app.currentLevel = idOfImg;

    wade.loadScene('scenes/LevelScene.wsc', true, function() {

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