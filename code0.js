gdjs.StartScreenCode = {};
gdjs.StartScreenCode.GDExitButtonObjects1= [];
gdjs.StartScreenCode.GDExitButtonObjects2= [];
gdjs.StartScreenCode.GDStartButtonObjects1= [];
gdjs.StartScreenCode.GDStartButtonObjects2= [];
gdjs.StartScreenCode.GDTitleObjects1= [];
gdjs.StartScreenCode.GDTitleObjects2= [];
gdjs.StartScreenCode.GDHelpButtonObjects1= [];
gdjs.StartScreenCode.GDHelpButtonObjects2= [];

gdjs.StartScreenCode.conditionTrue_0 = {val:false};
gdjs.StartScreenCode.condition0IsTrue_0 = {val:false};
gdjs.StartScreenCode.condition1IsTrue_0 = {val:false};
gdjs.StartScreenCode.condition2IsTrue_0 = {val:false};


gdjs.StartScreenCode.mapOfGDgdjs_46StartScreenCode_46GDStartButtonObjects1Objects = Hashtable.newFrom({"StartButton": gdjs.StartScreenCode.GDStartButtonObjects1});gdjs.StartScreenCode.mapOfGDgdjs_46StartScreenCode_46GDHelpButtonObjects1Objects = Hashtable.newFrom({"HelpButton": gdjs.StartScreenCode.GDHelpButtonObjects1});gdjs.StartScreenCode.mapOfGDgdjs_46StartScreenCode_46GDExitButtonObjects1Objects = Hashtable.newFrom({"ExitButton": gdjs.StartScreenCode.GDExitButtonObjects1});gdjs.StartScreenCode.mapOfGDgdjs_46StartScreenCode_46GDStartButtonObjects1Objects = Hashtable.newFrom({"StartButton": gdjs.StartScreenCode.GDStartButtonObjects1});gdjs.StartScreenCode.mapOfGDgdjs_46StartScreenCode_46GDHelpButtonObjects1Objects = Hashtable.newFrom({"HelpButton": gdjs.StartScreenCode.GDHelpButtonObjects1});gdjs.StartScreenCode.mapOfGDgdjs_46StartScreenCode_46GDExitButtonObjects1Objects = Hashtable.newFrom({"ExitButton": gdjs.StartScreenCode.GDExitButtonObjects1});gdjs.StartScreenCode.mapOfGDgdjs_46StartScreenCode_46GDStartButtonObjects1Objects = Hashtable.newFrom({"StartButton": gdjs.StartScreenCode.GDStartButtonObjects1});gdjs.StartScreenCode.mapOfGDgdjs_46StartScreenCode_46GDHelpButtonObjects1Objects = Hashtable.newFrom({"HelpButton": gdjs.StartScreenCode.GDHelpButtonObjects1});gdjs.StartScreenCode.mapOfGDgdjs_46StartScreenCode_46GDExitButtonObjects1Objects = Hashtable.newFrom({"ExitButton": gdjs.StartScreenCode.GDExitButtonObjects1});gdjs.StartScreenCode.eventsList0xb2358 = function(runtimeScene) {

{

gdjs.StartScreenCode.GDStartButtonObjects1.createFrom(runtimeScene.getObjects("StartButton"));

gdjs.StartScreenCode.condition0IsTrue_0.val = false;
{
gdjs.StartScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.StartScreenCode.mapOfGDgdjs_46StartScreenCode_46GDStartButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.StartScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.StartScreenCode.GDStartButtonObjects1 */
{for(var i = 0, len = gdjs.StartScreenCode.GDStartButtonObjects1.length ;i < len;++i) {
    gdjs.StartScreenCode.GDStartButtonObjects1[i].setColor("255;255;255");
}
}}

}


{

gdjs.StartScreenCode.GDHelpButtonObjects1.createFrom(runtimeScene.getObjects("HelpButton"));

gdjs.StartScreenCode.condition0IsTrue_0.val = false;
{
gdjs.StartScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.StartScreenCode.mapOfGDgdjs_46StartScreenCode_46GDHelpButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.StartScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.StartScreenCode.GDHelpButtonObjects1 */
{for(var i = 0, len = gdjs.StartScreenCode.GDHelpButtonObjects1.length ;i < len;++i) {
    gdjs.StartScreenCode.GDHelpButtonObjects1[i].setColor("255;255;255");
}
}}

}


{

gdjs.StartScreenCode.GDExitButtonObjects1.createFrom(runtimeScene.getObjects("ExitButton"));

gdjs.StartScreenCode.condition0IsTrue_0.val = false;
{
gdjs.StartScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.StartScreenCode.mapOfGDgdjs_46StartScreenCode_46GDExitButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.StartScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.StartScreenCode.GDExitButtonObjects1 */
{for(var i = 0, len = gdjs.StartScreenCode.GDExitButtonObjects1.length ;i < len;++i) {
    gdjs.StartScreenCode.GDExitButtonObjects1[i].setColor("255;255;255");
}
}}

}


{

gdjs.StartScreenCode.GDStartButtonObjects1.createFrom(runtimeScene.getObjects("StartButton"));

gdjs.StartScreenCode.condition0IsTrue_0.val = false;
{
gdjs.StartScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.StartScreenCode.mapOfGDgdjs_46StartScreenCode_46GDStartButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.StartScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.StartScreenCode.GDStartButtonObjects1 */
{for(var i = 0, len = gdjs.StartScreenCode.GDStartButtonObjects1.length ;i < len;++i) {
    gdjs.StartScreenCode.GDStartButtonObjects1[i].setColor("161;161;161");
}
}}

}


{

gdjs.StartScreenCode.GDHelpButtonObjects1.createFrom(runtimeScene.getObjects("HelpButton"));

gdjs.StartScreenCode.condition0IsTrue_0.val = false;
{
gdjs.StartScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.StartScreenCode.mapOfGDgdjs_46StartScreenCode_46GDHelpButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.StartScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.StartScreenCode.GDHelpButtonObjects1 */
{for(var i = 0, len = gdjs.StartScreenCode.GDHelpButtonObjects1.length ;i < len;++i) {
    gdjs.StartScreenCode.GDHelpButtonObjects1[i].setColor("161;161;161");
}
}}

}


{

gdjs.StartScreenCode.GDExitButtonObjects1.createFrom(runtimeScene.getObjects("ExitButton"));

gdjs.StartScreenCode.condition0IsTrue_0.val = false;
{
gdjs.StartScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.StartScreenCode.mapOfGDgdjs_46StartScreenCode_46GDExitButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.StartScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.StartScreenCode.GDExitButtonObjects1 */
{for(var i = 0, len = gdjs.StartScreenCode.GDExitButtonObjects1.length ;i < len;++i) {
    gdjs.StartScreenCode.GDExitButtonObjects1[i].setColor("161;161;161");
}
}}

}


{

gdjs.StartScreenCode.GDStartButtonObjects1.createFrom(runtimeScene.getObjects("StartButton"));

gdjs.StartScreenCode.condition0IsTrue_0.val = false;
gdjs.StartScreenCode.condition1IsTrue_0.val = false;
{
gdjs.StartScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.StartScreenCode.condition0IsTrue_0.val ) {
{
gdjs.StartScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.StartScreenCode.mapOfGDgdjs_46StartScreenCode_46GDStartButtonObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.StartScreenCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Dungeon", true);
}}

}


{

gdjs.StartScreenCode.GDHelpButtonObjects1.createFrom(runtimeScene.getObjects("HelpButton"));

gdjs.StartScreenCode.condition0IsTrue_0.val = false;
gdjs.StartScreenCode.condition1IsTrue_0.val = false;
{
gdjs.StartScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.StartScreenCode.condition0IsTrue_0.val ) {
{
gdjs.StartScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.StartScreenCode.mapOfGDgdjs_46StartScreenCode_46GDHelpButtonObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.StartScreenCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "HelpScreen");
}}

}


{

gdjs.StartScreenCode.GDExitButtonObjects1.createFrom(runtimeScene.getObjects("ExitButton"));

gdjs.StartScreenCode.condition0IsTrue_0.val = false;
gdjs.StartScreenCode.condition1IsTrue_0.val = false;
{
gdjs.StartScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.StartScreenCode.condition0IsTrue_0.val ) {
{
gdjs.StartScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.StartScreenCode.mapOfGDgdjs_46StartScreenCode_46GDExitButtonObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.StartScreenCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


}; //End of gdjs.StartScreenCode.eventsList0xb2358


gdjs.StartScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.StartScreenCode.GDExitButtonObjects1.length = 0;
gdjs.StartScreenCode.GDExitButtonObjects2.length = 0;
gdjs.StartScreenCode.GDStartButtonObjects1.length = 0;
gdjs.StartScreenCode.GDStartButtonObjects2.length = 0;
gdjs.StartScreenCode.GDTitleObjects1.length = 0;
gdjs.StartScreenCode.GDTitleObjects2.length = 0;
gdjs.StartScreenCode.GDHelpButtonObjects1.length = 0;
gdjs.StartScreenCode.GDHelpButtonObjects2.length = 0;

gdjs.StartScreenCode.eventsList0xb2358(runtimeScene);
return;
}
gdjs['StartScreenCode'] = gdjs.StartScreenCode;
