// Is called when back button(arrow) in LevelScene.wsc is clicked
// Sends back to StartScene.wsc
function onMouseDownBack() {
  wade.app.load();
}

// On mouse click on preview the corresponding level will be created
// @param thiss: Clicked SceneObject. It shows which image will be loaded
function onMouseDownStartLevels(thiss) {

  var id = thiss.getSprite(0).getName();
  wade.app.buildAndLoadNewScene(id);
}

//Is called when a difference is found on a picture
// @param thiss: Clicked SceneObject is the mark which marks the differences
function onMouseDownDifferences(thiss) {

  if (!thiss.isFound && !thiss.clonedObject.isFound) {

    wade.app.isDifference = true;

    thiss.getSprite(0).setVisible(true);
    thiss.clonedObject.getSprite(0).setVisible(true);

    wade.app.totalDifferences--;

    // show the text grammatically correctly
    if (wade.app.totalDifferences == 1) {
      wade.getSceneObject('scoreText').getSprite(0).setText(
        'Finde NOCH ' + wade.app.totalDifferences + ' Unterschied');
    } else {
      wade.getSceneObject('scoreText').getSprite(0).setText(
        'Finde NOCH ' + wade.app.totalDifferences + ' Unterschiede');
    }


    // if the game was successful   
    if (wade.app.totalDifferences === 0) {

      var obj = wade.getSceneObject('GutGemacht');

      setTimeout(function() {
        obj.setVisible(true);

        setTimeout(function() {
          obj.setVisible(false);
          wade.app.continueGame();
        }, 1000);

      }, 500);

    }


    // if the game wasn't successful   
    if (false) {
      wade.app.gameOver();
    }

    thiss.isFound = true;
  }
}

//Is called when the image is clicked but no differences were found
function didWrongClick() {

  if (wade.app.isDifference === false) {
    wade.app.allowedClicks--;
    wade.getObjectByName('dollarClicks').getSprite(0).setText(wade.app.allowedClicks);

    //Fade and move the heart 
    doHeartAnimation();
  } else {
    wade.app.isDifference = false;
  }

  if (wade.app.allowedClicks === 0) {
    wade.app.gameOver();
  }
}

function doHeartAnimation() {

  var heart = wade.getSceneObject('heart');
  heart.moveTo(-1, 140, 50);
  heart.getBehavior().fadeOut();

  setTimeout(function() {
    heart.setVisible(false);
    heart.moveTo(-1, 210, 10);
  }, 200);

  heart.setVisible(true);
}