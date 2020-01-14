this.sceneInfo;

var sceneWidth;
var sceneHigh;

function buildNewScene(sceneInfo) {
    
  console.log('Build new level');

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


  // Add pig
  var imgPig = createPig('assets/icons/Sparschwein.png');
  wade.addSceneObject(imgPig);

  // Add Coin
  createCoin('assets/icons/coin.png');

  // Add pig text fild
  var pigText = createTextPig();
  wade.addSceneObject(pigText);

  // Add differences
  var coordList = sceneInfo.coordinatesOfDifferences;
  wade.app.totalDifferences = coordList.length;

   for (i=0; i<coordList.length; i+=1){
        var mark = createMarkSceneObject(coordList[i].x, coordList[i].y, imgOrig._position.x, i);
        wade.addSceneObject(mark);
    } 

  // Add score text fild
  var scoreText = createTextSceneObject();
  wade.addSceneObject(scoreText);

  // Add "Gut Gemacht" picture
  var imgGreat = createImgGreat('assets/icons/GutGemacht.png');
  wade.addSceneObject(imgGreat);
}

function createImgSceneObject(posOrientation, imgFilePath) {

  console.log('creating two scene pictures');

  var img = new SceneObject();
  img.setPosition(posOrientation * sceneWidth / 4.0, 0);

  var imgSprite = new Sprite();
  imgSprite.setLayer(10);
  imgSprite.setImageFile(imgFilePath);
  imgSprite.setSize(sceneInfo.imgWidth, sceneInfo.imgHigh);

  img.addSprite(imgSprite);

  var func = {
    'onMouseDown': 'function (data)\n{\n\tdidWrongClick()\n}'
  };

  img.importFunctions(func);


  return img;
}

function createImgGreat(imgFilePath) {

  console.log('creating great-picture');

  var img = new SceneObject();
  img.setPosition(0, 10);
  img.setName('GutGemacht');

  var imgSprite = new Sprite();
  imgSprite.setLayer(-5);
  imgSprite.setImageFile(imgFilePath);
  imgSprite.setSize(700, 700);
  imgSprite.setVisible(false);

  img.addSprite(imgSprite);


  return img;
}

function createMarkSceneObject(posX, posY, origPos, index) {

  console.log('creating marks');

  var mark = new SceneObject();
  var x = origPos - sceneInfo.imgWidth / 2.0 + posX;
  var y = posY - sceneInfo.imgHigh / 2.0;
  mark.setPosition(x, y);

  var markSprite = new Sprite();
  markSprite.setLayer(10);
  markSprite.setImageFile('assets/icons/x.png');
  markSprite.setVisible(false); // auf false aendern
  var markSize = Math.sqrt(sceneInfo.imgWidth * sceneInfo.imgHigh / 42.0);
  markSprite.setSize(markSize, markSize);

  mark.addSprite(markSprite);

  var transparentSprite = new Sprite();
  transparentSprite.setLayer(10);
  transparentSprite.setImageFile('assets/icons/transparent.png');
  transparentSprite.setVisible(true);
  transparentSprite.setSize(markSize, markSize);

  mark.addSprite(transparentSprite);
  mark.setName('difference' + index);

  var func = {

    'onMouseDown': 'function (data)\n{\n\tonMouseDownDifferences(this);\n\t\n}',
    'onAddToScene': 'function (data)\n{\n\tvar clone = this.clone();\n\tclone.setPosition(this.getPosition().x + ' + sceneWidth / 2.0 + ', this.getPosition().y);\n\t\n\tclone.onAddToScene = null;\n\twade.addSceneObject(clone,true);\n\t\n\tthis.clonedObject = clone;\n\tclone.clonedObject = this;\n}'
  };

  mark.importFunctions(func);


  return mark;
}

function createTextSceneObject() {

  console.log('creating the text in top of the scene');

  var text = new SceneObject();
  text.setPosition(0, -sceneHigh / 2 + 60);
  text.setName('scoreText');

  var textSprite = new TextSprite();
  textSprite.setFont('45px AhkioW05-Black');
  textSprite.setAlignment('center');
  textSprite.setColor('#696969');
  textSprite.setShadow('#000', 0, 0, 0);
  textSprite.setVisible(true);
  textSprite.setFixedSize(false);
  text.addSprite(textSprite);
  

  return text;
}

function createPig(imgFilePath) {

  console.log('creating a pig');

  var img = new SceneObject();
  img.setPosition(0, sceneHigh / 2 - 35);

  var imgSprite = new Sprite();
  imgSprite.setLayer(10);
  imgSprite.setImageFile(imgFilePath);
  imgSprite.setSize(235, 126);

  img.addSprite(imgSprite);


  return img;
}

function createCoin(imgFilePath) {

  console.log('creating a Coin');

  var img = wade.getSceneObject('coin');
  img.setPosition(0, sceneHigh / 2 - 135);
  img.setName('coin');

 
  img.getSprite(0).setLayer(10);
  img.getSprite(0).setImageFile(imgFilePath);
  img.getSprite(0).setSize(80, 80);
  img.getSprite(0).setVisible(false);
}

function createTextPig() {

  console.log('creating wrong-click-text on the pig');

  var text = new SceneObject();
  text.setPosition(5, sceneHigh / 2 - 35);
  text.setName('dollarClicks');

  var textSprite = new TextSprite();
  textSprite.setFont('50px AhkioW05-Black');
  textSprite.setAlignment('center');
  textSprite.setColor('#fcfcfc');
  textSprite.setOutline(2, '#020eb8');
  textSprite.setVisible(true);
  textSprite.setFixedSize(false);

  text.addSprite(textSprite);


  return text;
}