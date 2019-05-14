gdjs.DeathScreenCode = {};
gdjs.DeathScreenCode.GDExitButtonObjects1= [];
gdjs.DeathScreenCode.GDExitButtonObjects2= [];
gdjs.DeathScreenCode.GDTitleObjects1= [];
gdjs.DeathScreenCode.GDTitleObjects2= [];
gdjs.DeathScreenCode.GDHomeButtonObjects1= [];
gdjs.DeathScreenCode.GDHomeButtonObjects2= [];
gdjs.DeathScreenCode.GDRestartButtonObjects1= [];
gdjs.DeathScreenCode.GDRestartButtonObjects2= [];
gdjs.DeathScreenCode.GDLevelsSurvivedObjects1= [];
gdjs.DeathScreenCode.GDLevelsSurvivedObjects2= [];

gdjs.DeathScreenCode.conditionTrue_0 = {val:false};
gdjs.DeathScreenCode.condition0IsTrue_0 = {val:false};
gdjs.DeathScreenCode.condition1IsTrue_0 = {val:false};
gdjs.DeathScreenCode.condition2IsTrue_0 = {val:false};


gdjs.DeathScreenCode.mapOfGDgdjs_46DeathScreenCode_46GDExitButtonObjects1Objects = Hashtable.newFrom({"ExitButton": gdjs.DeathScreenCode.GDExitButtonObjects1});gdjs.DeathScreenCode.mapOfGDgdjs_46DeathScreenCode_46GDRestartButtonObjects1Objects = Hashtable.newFrom({"RestartButton": gdjs.DeathScreenCode.GDRestartButtonObjects1});gdjs.DeathScreenCode.mapOfGDgdjs_46DeathScreenCode_46GDHomeButtonObjects1Objects = Hashtable.newFrom({"HomeButton": gdjs.DeathScreenCode.GDHomeButtonObjects1});gdjs.DeathScreenCode.mapOfGDgdjs_46DeathScreenCode_46GDExitButtonObjects1Objects = Hashtable.newFrom({"ExitButton": gdjs.DeathScreenCode.GDExitButtonObjects1});gdjs.DeathScreenCode.mapOfGDgdjs_46DeathScreenCode_46GDRestartButtonObjects1Objects = Hashtable.newFrom({"RestartButton": gdjs.DeathScreenCode.GDRestartButtonObjects1});gdjs.DeathScreenCode.mapOfGDgdjs_46DeathScreenCode_46GDHomeButtonObjects1Objects = Hashtable.newFrom({"HomeButton": gdjs.DeathScreenCode.GDHomeButtonObjects1});gdjs.DeathScreenCode.mapOfGDgdjs_46DeathScreenCode_46GDExitButtonObjects1Objects = Hashtable.newFrom({"ExitButton": gdjs.DeathScreenCode.GDExitButtonObjects1});gdjs.DeathScreenCode.mapOfGDgdjs_46DeathScreenCode_46GDRestartButtonObjects1Objects = Hashtable.newFrom({"RestartButton": gdjs.DeathScreenCode.GDRestartButtonObjects1});gdjs.DeathScreenCode.mapOfGDgdjs_46DeathScreenCode_46GDHomeButtonObjects1Objects = Hashtable.newFrom({"HomeButton": gdjs.DeathScreenCode.GDHomeButtonObjects1});gdjs.DeathScreenCode.eventsList0xb2358 = function(runtimeScene) {

{

gdjs.DeathScreenCode.GDExitButtonObjects1.createFrom(runtimeScene.getObjects("ExitButton"));

gdjs.DeathScreenCode.condition0IsTrue_0.val = false;
{
gdjs.DeathScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.DeathScreenCode.mapOfGDgdjs_46DeathScreenCode_46GDExitButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.DeathScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.DeathScreenCode.GDExitButtonObjects1 */
{for(var i = 0, len = gdjs.DeathScreenCode.GDExitButtonObjects1.length ;i < len;++i) {
    gdjs.DeathScreenCode.GDExitButtonObjects1[i].setColor("255;255;255");
}
}}

}


{

gdjs.DeathScreenCode.GDRestartButtonObjects1.createFrom(runtimeScene.getObjects("RestartButton"));

gdjs.DeathScreenCode.condition0IsTrue_0.val = false;
{
gdjs.DeathScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.DeathScreenCode.mapOfGDgdjs_46DeathScreenCode_46GDRestartButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.DeathScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.DeathScreenCode.GDRestartButtonObjects1 */
{for(var i = 0, len = gdjs.DeathScreenCode.GDRestartButtonObjects1.length ;i < len;++i) {
    gdjs.DeathScreenCode.GDRestartButtonObjects1[i].setColor("255;255;255");
}
}}

}


{

gdjs.DeathScreenCode.GDHomeButtonObjects1.createFrom(runtimeScene.getObjects("HomeButton"));

gdjs.DeathScreenCode.condition0IsTrue_0.val = false;
{
gdjs.DeathScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.DeathScreenCode.mapOfGDgdjs_46DeathScreenCode_46GDHomeButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.DeathScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.DeathScreenCode.GDHomeButtonObjects1 */
{for(var i = 0, len = gdjs.DeathScreenCode.GDHomeButtonObjects1.length ;i < len;++i) {
    gdjs.DeathScreenCode.GDHomeButtonObjects1[i].setColor("255;255;255");
}
}}

}


{

gdjs.DeathScreenCode.GDExitButtonObjects1.createFrom(runtimeScene.getObjects("ExitButton"));

gdjs.DeathScreenCode.condition0IsTrue_0.val = false;
{
gdjs.DeathScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.DeathScreenCode.mapOfGDgdjs_46DeathScreenCode_46GDExitButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.DeathScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.DeathScreenCode.GDExitButtonObjects1 */
{for(var i = 0, len = gdjs.DeathScreenCode.GDExitButtonObjects1.length ;i < len;++i) {
    gdjs.DeathScreenCode.GDExitButtonObjects1[i].setColor("161;161;161");
}
}}

}


{

gdjs.DeathScreenCode.GDRestartButtonObjects1.createFrom(runtimeScene.getObjects("RestartButton"));

gdjs.DeathScreenCode.condition0IsTrue_0.val = false;
{
gdjs.DeathScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.DeathScreenCode.mapOfGDgdjs_46DeathScreenCode_46GDRestartButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.DeathScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.DeathScreenCode.GDRestartButtonObjects1 */
{for(var i = 0, len = gdjs.DeathScreenCode.GDRestartButtonObjects1.length ;i < len;++i) {
    gdjs.DeathScreenCode.GDRestartButtonObjects1[i].setColor("161;161;161");
}
}}

}


{

gdjs.DeathScreenCode.GDHomeButtonObjects1.createFrom(runtimeScene.getObjects("HomeButton"));

gdjs.DeathScreenCode.condition0IsTrue_0.val = false;
{
gdjs.DeathScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.DeathScreenCode.mapOfGDgdjs_46DeathScreenCode_46GDHomeButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.DeathScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.DeathScreenCode.GDHomeButtonObjects1 */
{for(var i = 0, len = gdjs.DeathScreenCode.GDHomeButtonObjects1.length ;i < len;++i) {
    gdjs.DeathScreenCode.GDHomeButtonObjects1[i].setColor("161;161;161");
}
}}

}


{

gdjs.DeathScreenCode.GDExitButtonObjects1.createFrom(runtimeScene.getObjects("ExitButton"));

gdjs.DeathScreenCode.condition0IsTrue_0.val = false;
gdjs.DeathScreenCode.condition1IsTrue_0.val = false;
{
gdjs.DeathScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.DeathScreenCode.condition0IsTrue_0.val ) {
{
gdjs.DeathScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.DeathScreenCode.mapOfGDgdjs_46DeathScreenCode_46GDExitButtonObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.DeathScreenCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{

gdjs.DeathScreenCode.GDRestartButtonObjects1.createFrom(runtimeScene.getObjects("RestartButton"));

gdjs.DeathScreenCode.condition0IsTrue_0.val = false;
gdjs.DeathScreenCode.condition1IsTrue_0.val = false;
{
gdjs.DeathScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.DeathScreenCode.condition0IsTrue_0.val ) {
{
gdjs.DeathScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.DeathScreenCode.mapOfGDgdjs_46DeathScreenCode_46GDRestartButtonObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.DeathScreenCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Dungeon", false);
}}

}


{

gdjs.DeathScreenCode.GDHomeButtonObjects1.createFrom(runtimeScene.getObjects("HomeButton"));

gdjs.DeathScreenCode.condition0IsTrue_0.val = false;
gdjs.DeathScreenCode.condition1IsTrue_0.val = false;
{
gdjs.DeathScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.DeathScreenCode.condition0IsTrue_0.val ) {
{
gdjs.DeathScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.DeathScreenCode.mapOfGDgdjs_46DeathScreenCode_46GDHomeButtonObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.DeathScreenCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "StartScreen", true);
}}

}


{


{
gdjs.DeathScreenCode.GDLevelsSurvivedObjects1.createFrom(runtimeScene.getObjects("LevelsSurvived"));
{for(var i = 0, len = gdjs.DeathScreenCode.GDLevelsSurvivedObjects1.length ;i < len;++i) {
    gdjs.DeathScreenCode.GDLevelsSurvivedObjects1[i].setString("You survived " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)) + " levels");
}
}}

}


}; //End of gdjs.DeathScreenCode.eventsList0xb2358


gdjs.DeathScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.DeathScreenCode.GDExitButtonObjects1.length = 0;
gdjs.DeathScreenCode.GDExitButtonObjects2.length = 0;
gdjs.DeathScreenCode.GDTitleObjects1.length = 0;
gdjs.DeathScreenCode.GDTitleObjects2.length = 0;
gdjs.DeathScreenCode.GDHomeButtonObjects1.length = 0;
gdjs.DeathScreenCode.GDHomeButtonObjects2.length = 0;
gdjs.DeathScreenCode.GDRestartButtonObjects1.length = 0;
gdjs.DeathScreenCode.GDRestartButtonObjects2.length = 0;
gdjs.DeathScreenCode.GDLevelsSurvivedObjects1.length = 0;
gdjs.DeathScreenCode.GDLevelsSurvivedObjects2.length = 0;

gdjs.DeathScreenCode.eventsList0xb2358(runtimeScene);
return;
}
gdjs['DeathScreenCode'] = gdjs.DeathScreenCode;
