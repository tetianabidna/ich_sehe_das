function loadLevelPreViews(sceneInfo) {
    
  for (i = 0; i < sceneInfo.length; i += 1) {
      
    var currentLevel = wade.getSceneObject('level_' + i);
    currentLevel.getSprite(0).setImageFile(sceneInfo[i].imgOriginalPath);
  }
}