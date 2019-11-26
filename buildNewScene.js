this.sceneInfo;

var sceneWidth;
var sceneHigh;

function buildNewScene(sceneInfo) {
  this.sceneInfo = sceneInfo;
  
  // Set main scene parameter
  sceneWidth = sceneInfo.imgWidth * 2 + 36;
  sceneHigh = sceneInfo.imgHigh + 190;
  wade.setMinScreenSize(sceneWidth, sceneHigh);
  wade.setMaxScreenSize(sceneWidth, sceneHigh);

  // Add orininal image
  var imgOrig = createImgSceneObject(-1, sceneInfo.imgOriginalPath);
  wade.addSceneObject(imgOrig);

  // Add clone image
  var imgClone = createImgSceneObject(1, sceneInfo.imgClonePath);
  wade.addSceneObject(imgClone);

  // Add differences
  var coordList = sceneInfo.coordinatesOfDifferences;
  wade.app.totalDifferences = coordList.length;
  $(coordList).each(function(index, coord) {

    var mark = createMarkSceneObject(coord.x, coord.y, imgOrig._position.x, index);
    wade.addSceneObject(mark);
  });

  // Add score text fild
  var scoreText = createTextSceneObject();
  wade.addSceneObject(scoreText);
}

function createImgSceneObject(posOrientation, imgFilePath) {
  var img = new SceneObject();
  img.setPosition(posOrientation * sceneWidth / 4.0, 0);

  var imgSprite = new Sprite();
  imgSprite.setLayer(10);
  imgSprite.setImageFile(imgFilePath);
  imgSprite.setSize(sceneInfo.imgWidth, sceneInfo.imgHigh);

  img.addSprite(imgSprite);


  return img;
}

function createMarkSceneObject(posX, posY, origPos, index) {
  var mark = new SceneObject();
  var x = origPos - sceneInfo.imgWidth / 2.0 + posX;
  var y = posY - sceneInfo.imgHigh / 2.0;
  mark.setPosition(x, y);

  var markSprite = new Sprite();
  markSprite.setLayer(10);
  markSprite.setImageFile('assets/x.png');
  markSprite.setVisible(false); // auf false aendern
  var markSize = Math.sqrt(sceneInfo.imgWidth * sceneInfo.imgHigh / 42.0);
  markSprite.setSize(markSize, markSize);

  mark.addSprite(markSprite);

  var transparentSprite = new Sprite();
  transparentSprite.setLayer(10);
  transparentSprite.setImageFile('assets/transparent.png');
  transparentSprite.setVisible(true);
  transparentSprite.setSize(markSize, markSize);

  mark.addSprite(transparentSprite);
  mark.setName('difference' + index);

  var func = {
    "onAddToScene": "function (data)\n{\n\tvar clone = this.clone();\n\tclone.setPosition(this.getPosition().x + 850/2, this.getPosition().y);\n\t\n\tclone.onAddToScene = null;\n\twade.addSceneObject(clone,true);\n\t\n\tthis.clonedObject = clone;\n\tclone.clonedObject = this;\n}",
    "onMouseDown": "function (data)\n{\n\t//so the differences found counter doesnt increase if we click on the same difference\n\t\n\tif(!this.isFound && !this.clonedObject.isFound){\n\t    \n\t\n\t\n\t    this.getSprite(0).setVisible(true);\n\t    this.clonedObject.getSprite(0).setVisible(true);\n\t\n\t    wade.app.foundDifferences++;\n\t\n\t    wade.getSceneObject('scoreText').getSprite(0).setText(wade.app.foundDifferences + ' / ' + wade.app.totalDifferences);\n\t\n\t  if(wade.app.foundDifferences == wade.app.totalDifferences)\n\t    {\n\t        wade.app.gameOver();\n\t    }\n\t    this.isFound = true;\n\t}\n}"
  };

  mark.importFunctions(func);


  return mark;
}

function createTextSceneObject() {
  var text = new SceneObject();
  text.setPosition(0, -sceneHigh / 2 + 60);
  text.setName('scoreText');

  var textSprite = new TextSprite();
  textSprite.setFont('45px Arial');
  textSprite.setAlignment('center');
  textSprite.setColor('#34f005');
  textSprite.setVisible(true);
  textSprite.setFixedSize(false);
  textSprite.setText('init');
  text.addSprite(textSprite);


  return text;
}