var jsonData = getJSONdata();

var numOfInfoElements = jsonData.length;

function getNextSceneInfo(infoObjectIndex){
	let sceneInfo = jsonData[infoObjectIndex % numOfInfoElements];
	infoObjectIndex += 1;
	
	return sceneInfo;
}
	
