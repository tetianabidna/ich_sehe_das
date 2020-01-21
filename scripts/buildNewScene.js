this.sceneInfo;

var sceneWidth;
var sceneHigh;

function buildNewScene(sceneInfo) {
    
  console.log('Build new level');

  this.sceneInfo = sceneInfo;

  // Set main scene parameter
  sceneWidth = sceneInfo.imgWidth * 2 + sceneInfo.imgWidth*0.1;
  sceneHigh = sceneInfo.imgHigh + sceneInfo.imgHigh*0.4;
  wade.setMinScreenSize(sceneWidth, sceneHigh);
  wade.setMaxScreenSize(sceneWidth, sceneHigh);

  // Add orininal image
  var imgOrig = createImgSceneObject(-1, sceneInfo.imgOriginalPath);
  wade.addSceneObject(imgOrig);

  // Add clone image
  var imgClone = createImgSceneObject(1, sceneInfo.imgClonePath);
  wade.addSceneObject(imgClone);

  // Add heart
  var imgHeart = createHeart('assets/icons/Herz.png');
  wade.addSceneObject(imgHeart);

  // Add small heart
  createSmallHeart('assets/icons/Herz.png');

  // Add heart text field
  var heartText = createTextHeart();
  wade.addSceneObject(heartText);
  
  // Add back button
  var backButton = createBackButton();
  wade.addSceneObject(backButton);

  // Add differences
  var coordList = sceneInfo.coordinatesOfDifferences;
  wade.app.totalDifferences = coordList.length;

   for (i=0; i<coordList.length; i+=1){
        var mark = createMarkSceneObject(coordList[i].x, coordList[i].y, imgOrig._position.x, i);
        wade.addSceneObject(mark);
    } 

  // Add score text field
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
  imgSprite.setSize(sceneHigh/1.25, sceneHigh/1.25);
  imgSprite.setVisible(false);

  img.addSprite(imgSprite);


  return img;
}

function createBackButton(imgFilePath){
	console.log('creating back button');

  var back = new SceneObject();
  back.setPosition(-sceneInfo.imgWidth*0.97, -sceneInfo.imgHigh*0.63);

  var backSprite = new Sprite();
  backSprite.setLayer(10);
  backSprite.setImageFile('assets/icons/Back.png');
  backSprite.setSize(sceneHigh/9.0, sceneHigh/10.0);

  back.addSprite(backSprite);

  var transparentSprite = new Sprite();
  transparentSprite.setLayer(10);
  transparentSprite.setImageFile('assets/icons/transparent.png');
  transparentSprite.setSize(sceneHigh/9.0, sceneHigh/10.0);

  back.addSprite(transparentSprite);

  var func = {
    'onMouseDown': 'function (data)\n{\n\tonMouseDownBack();\n\t\n}'
  };

  back.importFunctions(func);


  return back;
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
  text.setPosition(-sceneInfo.imgWidth*0.009, -sceneInfo.imgHigh*0.6);
  text.setName('scoreText');

  var textSprite = new TextSprite();
  textSprite.setFont(sceneInfo.imgWidth*0.1+'px AhkioW05-Light');
  textSprite.setAlignment('center');
  textSprite.setColor('#ffffff');
  textSprite.setVisible(true);
  textSprite.setFixedSize(false);
  text.addSprite(textSprite);
  

  return text;
}

function createHeart(imgFilePath) {

  console.log('creating a heart');

  var img = new SceneObject();
  img.setPosition(-sceneInfo.imgWidth*0.009, sceneInfo.imgHigh*0.59);

  var imgSprite = new Sprite();
  imgSprite.setLayer(10);
  imgSprite.setImageFile(imgFilePath);
  imgSprite.setSize(sceneHigh/4.5, sceneHigh/5.0);

  img.addSprite(imgSprite);


  return img;
}

function createSmallHeart(imgFilePath) {

  console.log('creating a small heart');

  var img = wade.getSceneObject('heart');
  img.setPosition(-sceneInfo.imgWidth*0.009, sceneInfo.imgHigh*0.4);
  img.setName('heart');

 
  img.getSprite(0).setLayer(10);
  img.getSprite(0).setImageFile(imgFilePath);
  img.getSprite(0).setSize(sceneHigh/9.0, sceneHigh/10.0);
  img.getSprite(0).setVisible(false);
}

function createTextHeart() {

  console.log('creating wrong-click-text on the heart');

  var text = new SceneObject();
  text.setPosition(-sceneInfo.imgWidth*0.001, sceneInfo.imgHigh*0.625);
  text.setName('dollarClicks');

  var textSprite = new TextSprite();
  textSprite.setFont(sceneInfo.imgWidth*0.1+'px AhkioW05-Light');
  textSprite.setAlignment('center');
  textSprite.setColor('#fcfcfc');
  textSprite.setVisible(true);
  textSprite.setFixedSize(false);

  text.addSprite(textSprite);


  return text;
}