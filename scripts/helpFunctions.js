function onMouseDownStartLevels(thiss) {

  var id = thiss.getSprite(0).getName();
  console.log('id: '+ id);
  wade.app.buildAndLoadNewScene(id);
}


function onMouseDownDifferences(thiss) {

  if (!thiss.isFound && !thiss.clonedObject.isFound) {

    wade.app.isDifference = true;

    thiss.getSprite(0).setVisible(true);
    thiss.clonedObject.getSprite(0).setVisible(true);

    wade.app.totalDifferences--;

    // show the text grammatically correctly
    if (wade.app.totalDifferences == 1) {
      wade.getSceneObject('scoreText').getSprite(0).setText(
        'Finde ' + wade.app.totalDifferences + ' Unterschied');
    } else {
      wade.getSceneObject('scoreText').getSprite(0).setText(
        'Finde ' + wade.app.totalDifferences + ' Unterschiede');
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


function didWrongClick() {

  if (wade.app.isDifference === false) {
    wade.app.allowedClicks--;
    wade.getObjectByName('dollarClicks').getSprite(0).setText(wade.app.allowedClicks);

    //Fade and move the coin 
    doCoinAnimation();
  } else {
    wade.app.isDifference = false;
  }

  if (wade.app.allowedClicks === 0) {
    wade.app.gameOver();
  }

}

function doCoinAnimation() {

  var coin = wade.getSceneObject('coin');
  coin.moveTo(-1, 140, 50);
  coin.getBehavior().fadeOut();

  setTimeout(function() {
    coin.setVisible(false);
    coin.moveTo(-1, 210, 10);
  }, 200);

  coin.setVisible(true);
}