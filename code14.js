gdjs.PauseScreenCode = {};
gdjs.PauseScreenCode.GDExitButtonObjects1= [];
gdjs.PauseScreenCode.GDExitButtonObjects2= [];
gdjs.PauseScreenCode.GDTitleObjects1= [];
gdjs.PauseScreenCode.GDTitleObjects2= [];
gdjs.PauseScreenCode.GDHomeButtonObjects1= [];
gdjs.PauseScreenCode.GDHomeButtonObjects2= [];
gdjs.PauseScreenCode.GDResumeButtonObjects1= [];
gdjs.PauseScreenCode.GDResumeButtonObjects2= [];
gdjs.PauseScreenCode.GDHelpButtonObjects1= [];
gdjs.PauseScreenCode.GDHelpButtonObjects2= [];

gdjs.PauseScreenCode.conditionTrue_0 = {val:false};
gdjs.PauseScreenCode.condition0IsTrue_0 = {val:false};
gdjs.PauseScreenCode.condition1IsTrue_0 = {val:false};
gdjs.PauseScreenCode.condition2IsTrue_0 = {val:false};


gdjs.PauseScreenCode.mapOfGDgdjs_46PauseScreenCode_46GDExitButtonObjects1Objects = Hashtable.newFrom({"ExitButton": gdjs.PauseScreenCode.GDExitButtonObjects1});gdjs.PauseScreenCode.mapOfGDgdjs_46PauseScreenCode_46GDHelpButtonObjects1Objects = Hashtable.newFrom({"HelpButton": gdjs.PauseScreenCode.GDHelpButtonObjects1});gdjs.PauseScreenCode.mapOfGDgdjs_46PauseScreenCode_46GDResumeButtonObjects1Objects = Hashtable.newFrom({"ResumeButton": gdjs.PauseScreenCode.GDResumeButtonObjects1});gdjs.PauseScreenCode.mapOfGDgdjs_46PauseScreenCode_46GDHomeButtonObjects1Objects = Hashtable.newFrom({"HomeButton": gdjs.PauseScreenCode.GDHomeButtonObjects1});gdjs.PauseScreenCode.mapOfGDgdjs_46PauseScreenCode_46GDHelpButtonObjects1Objects = Hashtable.newFrom({"HelpButton": gdjs.PauseScreenCode.GDHelpButtonObjects1});gdjs.PauseScreenCode.mapOfGDgdjs_46PauseScreenCode_46GDExitButtonObjects1Objects = Hashtable.newFrom({"ExitButton": gdjs.PauseScreenCode.GDExitButtonObjects1});gdjs.PauseScreenCode.mapOfGDgdjs_46PauseScreenCode_46GDResumeButtonObjects1Objects = Hashtable.newFrom({"ResumeButton": gdjs.PauseScreenCode.GDResumeButtonObjects1});gdjs.PauseScreenCode.mapOfGDgdjs_46PauseScreenCode_46GDHomeButtonObjects1Objects = Hashtable.newFrom({"HomeButton": gdjs.PauseScreenCode.GDHomeButtonObjects1});gdjs.PauseScreenCode.mapOfGDgdjs_46PauseScreenCode_46GDExitButtonObjects1Objects = Hashtable.newFrom({"ExitButton": gdjs.PauseScreenCode.GDExitButtonObjects1});gdjs.PauseScreenCode.mapOfGDgdjs_46PauseScreenCode_46GDHelpButtonObjects1Objects = Hashtable.newFrom({"HelpButton": gdjs.PauseScreenCode.GDHelpButtonObjects1});gdjs.PauseScreenCode.mapOfGDgdjs_46PauseScreenCode_46GDResumeButtonObjects1Objects = Hashtable.newFrom({"ResumeButton": gdjs.PauseScreenCode.GDResumeButtonObjects1});gdjs.PauseScreenCode.mapOfGDgdjs_46PauseScreenCode_46GDHomeButtonObjects1Objects = Hashtable.newFrom({"HomeButton": gdjs.PauseScreenCode.GDHomeButtonObjects1});gdjs.PauseScreenCode.eventsList0xb2358 = function(runtimeScene) {

{

gdjs.PauseScreenCode.GDExitButtonObjects1.createFrom(runtimeScene.getObjects("ExitButton"));

gdjs.PauseScreenCode.condition0IsTrue_0.val = false;
{
gdjs.PauseScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PauseScreenCode.mapOfGDgdjs_46PauseScreenCode_46GDExitButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.PauseScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PauseScreenCode.GDExitButtonObjects1 */
{for(var i = 0, len = gdjs.PauseScreenCode.GDExitButtonObjects1.length ;i < len;++i) {
    gdjs.PauseScreenCode.GDExitButtonObjects1[i].setColor("255;255;255");
}
}}

}


{

gdjs.PauseScreenCode.GDHelpButtonObjects1.createFrom(runtimeScene.getObjects("HelpButton"));

gdjs.PauseScreenCode.condition0IsTrue_0.val = false;
{
gdjs.PauseScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PauseScreenCode.mapOfGDgdjs_46PauseScreenCode_46GDHelpButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.PauseScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PauseScreenCode.GDHelpButtonObjects1 */
{for(var i = 0, len = gdjs.PauseScreenCode.GDHelpButtonObjects1.length ;i < len;++i) {
    gdjs.PauseScreenCode.GDHelpButtonObjects1[i].setColor("255;255;255");
}
}}

}


{

gdjs.PauseScreenCode.GDResumeButtonObjects1.createFrom(runtimeScene.getObjects("ResumeButton"));

gdjs.PauseScreenCode.condition0IsTrue_0.val = false;
{
gdjs.PauseScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PauseScreenCode.mapOfGDgdjs_46PauseScreenCode_46GDResumeButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.PauseScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PauseScreenCode.GDResumeButtonObjects1 */
{for(var i = 0, len = gdjs.PauseScreenCode.GDResumeButtonObjects1.length ;i < len;++i) {
    gdjs.PauseScreenCode.GDResumeButtonObjects1[i].setColor("255;255;255");
}
}}

}


{

gdjs.PauseScreenCode.GDHomeButtonObjects1.createFrom(runtimeScene.getObjects("HomeButton"));

gdjs.PauseScreenCode.condition0IsTrue_0.val = false;
{
gdjs.PauseScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PauseScreenCode.mapOfGDgdjs_46PauseScreenCode_46GDHomeButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.PauseScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PauseScreenCode.GDHomeButtonObjects1 */
{for(var i = 0, len = gdjs.PauseScreenCode.GDHomeButtonObjects1.length ;i < len;++i) {
    gdjs.PauseScreenCode.GDHomeButtonObjects1[i].setColor("255;255;255");
}
}}

}


{

gdjs.PauseScreenCode.GDHelpButtonObjects1.createFrom(runtimeScene.getObjects("HelpButton"));

gdjs.PauseScreenCode.condition0IsTrue_0.val = false;
{
gdjs.PauseScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PauseScreenCode.mapOfGDgdjs_46PauseScreenCode_46GDHelpButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.PauseScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PauseScreenCode.GDHelpButtonObjects1 */
{for(var i = 0, len = gdjs.PauseScreenCode.GDHelpButtonObjects1.length ;i < len;++i) {
    gdjs.PauseScreenCode.GDHelpButtonObjects1[i].setColor("161;161;161");
}
}}

}


{

gdjs.PauseScreenCode.GDExitButtonObjects1.createFrom(runtimeScene.getObjects("ExitButton"));

gdjs.PauseScreenCode.condition0IsTrue_0.val = false;
{
gdjs.PauseScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PauseScreenCode.mapOfGDgdjs_46PauseScreenCode_46GDExitButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.PauseScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PauseScreenCode.GDExitButtonObjects1 */
{for(var i = 0, len = gdjs.PauseScreenCode.GDExitButtonObjects1.length ;i < len;++i) {
    gdjs.PauseScreenCode.GDExitButtonObjects1[i].setColor("161;161;161");
}
}}

}


{

gdjs.PauseScreenCode.GDResumeButtonObjects1.createFrom(runtimeScene.getObjects("ResumeButton"));

gdjs.PauseScreenCode.condition0IsTrue_0.val = false;
{
gdjs.PauseScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PauseScreenCode.mapOfGDgdjs_46PauseScreenCode_46GDResumeButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.PauseScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PauseScreenCode.GDResumeButtonObjects1 */
{for(var i = 0, len = gdjs.PauseScreenCode.GDResumeButtonObjects1.length ;i < len;++i) {
    gdjs.PauseScreenCode.GDResumeButtonObjects1[i].setColor("161;161;161");
}
}}

}


{

gdjs.PauseScreenCode.GDHomeButtonObjects1.createFrom(runtimeScene.getObjects("HomeButton"));

gdjs.PauseScreenCode.condition0IsTrue_0.val = false;
{
gdjs.PauseScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PauseScreenCode.mapOfGDgdjs_46PauseScreenCode_46GDHomeButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.PauseScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PauseScreenCode.GDHomeButtonObjects1 */
{for(var i = 0, len = gdjs.PauseScreenCode.GDHomeButtonObjects1.length ;i < len;++i) {
    gdjs.PauseScreenCode.GDHomeButtonObjects1[i].setColor("161;161;161");
}
}}

}


{

gdjs.PauseScreenCode.GDExitButtonObjects1.createFrom(runtimeScene.getObjects("ExitButton"));

gdjs.PauseScreenCode.condition0IsTrue_0.val = false;
gdjs.PauseScreenCode.condition1IsTrue_0.val = false;
{
gdjs.PauseScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.PauseScreenCode.condition0IsTrue_0.val ) {
{
gdjs.PauseScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PauseScreenCode.mapOfGDgdjs_46PauseScreenCode_46GDExitButtonObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.PauseScreenCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{

gdjs.PauseScreenCode.GDHelpButtonObjects1.createFrom(runtimeScene.getObjects("HelpButton"));

gdjs.PauseScreenCode.condition0IsTrue_0.val = false;
gdjs.PauseScreenCode.condition1IsTrue_0.val = false;
{
gdjs.PauseScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.PauseScreenCode.condition0IsTrue_0.val ) {
{
gdjs.PauseScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PauseScreenCode.mapOfGDgdjs_46PauseScreenCode_46GDHelpButtonObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.PauseScreenCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "HelpScreen");
}}

}


{

gdjs.PauseScreenCode.GDResumeButtonObjects1.createFrom(runtimeScene.getObjects("ResumeButton"));

gdjs.PauseScreenCode.condition0IsTrue_0.val = false;
gdjs.PauseScreenCode.condition1IsTrue_0.val = false;
{
gdjs.PauseScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.PauseScreenCode.condition0IsTrue_0.val ) {
{
gdjs.PauseScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PauseScreenCode.mapOfGDgdjs_46PauseScreenCode_46GDResumeButtonObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.PauseScreenCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{

gdjs.PauseScreenCode.GDHomeButtonObjects1.createFrom(runtimeScene.getObjects("HomeButton"));

gdjs.PauseScreenCode.condition0IsTrue_0.val = false;
gdjs.PauseScreenCode.condition1IsTrue_0.val = false;
{
gdjs.PauseScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.PauseScreenCode.condition0IsTrue_0.val ) {
{
gdjs.PauseScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PauseScreenCode.mapOfGDgdjs_46PauseScreenCode_46GDHomeButtonObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.PauseScreenCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "StartScreen", true);
}}

}


}; //End of gdjs.PauseScreenCode.eventsList0xb2358


gdjs.PauseScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.PauseScreenCode.GDExitButtonObjects1.length = 0;
gdjs.PauseScreenCode.GDExitButtonObjects2.length = 0;
gdjs.PauseScreenCode.GDTitleObjects1.length = 0;
gdjs.PauseScreenCode.GDTitleObjects2.length = 0;
gdjs.PauseScreenCode.GDHomeButtonObjects1.length = 0;
gdjs.PauseScreenCode.GDHomeButtonObjects2.length = 0;
gdjs.PauseScreenCode.GDResumeButtonObjects1.length = 0;
gdjs.PauseScreenCode.GDResumeButtonObjects2.length = 0;
gdjs.PauseScreenCode.GDHelpButtonObjects1.length = 0;
gdjs.PauseScreenCode.GDHelpButtonObjects2.length = 0;

gdjs.PauseScreenCode.eventsList0xb2358(runtimeScene);
return;
}
gdjs['PauseScreenCode'] = gdjs.PauseScreenCode;
