gdjs.HelpScreenCode = {};
gdjs.HelpScreenCode.GDExitButtonObjects1= [];
gdjs.HelpScreenCode.GDExitButtonObjects2= [];
gdjs.HelpScreenCode.GDStartButtonObjects1= [];
gdjs.HelpScreenCode.GDStartButtonObjects2= [];
gdjs.HelpScreenCode.GDTitleObjects1= [];
gdjs.HelpScreenCode.GDTitleObjects2= [];
gdjs.HelpScreenCode.GDBackButtonObjects1= [];
gdjs.HelpScreenCode.GDBackButtonObjects2= [];
gdjs.HelpScreenCode.GDHelpTextObjects1= [];
gdjs.HelpScreenCode.GDHelpTextObjects2= [];

gdjs.HelpScreenCode.conditionTrue_0 = {val:false};
gdjs.HelpScreenCode.condition0IsTrue_0 = {val:false};
gdjs.HelpScreenCode.condition1IsTrue_0 = {val:false};
gdjs.HelpScreenCode.condition2IsTrue_0 = {val:false};


gdjs.HelpScreenCode.mapOfGDgdjs_46HelpScreenCode_46GDBackButtonObjects1Objects = Hashtable.newFrom({"BackButton": gdjs.HelpScreenCode.GDBackButtonObjects1});gdjs.HelpScreenCode.mapOfGDgdjs_46HelpScreenCode_46GDBackButtonObjects1Objects = Hashtable.newFrom({"BackButton": gdjs.HelpScreenCode.GDBackButtonObjects1});gdjs.HelpScreenCode.mapOfGDgdjs_46HelpScreenCode_46GDBackButtonObjects1Objects = Hashtable.newFrom({"BackButton": gdjs.HelpScreenCode.GDBackButtonObjects1});gdjs.HelpScreenCode.eventsList0xb2358 = function(runtimeScene) {

{

gdjs.HelpScreenCode.GDBackButtonObjects1.createFrom(runtimeScene.getObjects("BackButton"));

gdjs.HelpScreenCode.condition0IsTrue_0.val = false;
{
gdjs.HelpScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.HelpScreenCode.mapOfGDgdjs_46HelpScreenCode_46GDBackButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.HelpScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.HelpScreenCode.GDBackButtonObjects1 */
{for(var i = 0, len = gdjs.HelpScreenCode.GDBackButtonObjects1.length ;i < len;++i) {
    gdjs.HelpScreenCode.GDBackButtonObjects1[i].setColor("255;255;255");
}
}}

}


{

gdjs.HelpScreenCode.GDBackButtonObjects1.createFrom(runtimeScene.getObjects("BackButton"));

gdjs.HelpScreenCode.condition0IsTrue_0.val = false;
{
gdjs.HelpScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.HelpScreenCode.mapOfGDgdjs_46HelpScreenCode_46GDBackButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.HelpScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.HelpScreenCode.GDBackButtonObjects1 */
{for(var i = 0, len = gdjs.HelpScreenCode.GDBackButtonObjects1.length ;i < len;++i) {
    gdjs.HelpScreenCode.GDBackButtonObjects1[i].setColor("161;161;161");
}
}}

}


{

gdjs.HelpScreenCode.GDBackButtonObjects1.createFrom(runtimeScene.getObjects("BackButton"));

gdjs.HelpScreenCode.condition0IsTrue_0.val = false;
gdjs.HelpScreenCode.condition1IsTrue_0.val = false;
{
gdjs.HelpScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.HelpScreenCode.condition0IsTrue_0.val ) {
{
gdjs.HelpScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.HelpScreenCode.mapOfGDgdjs_46HelpScreenCode_46GDBackButtonObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.HelpScreenCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


}; //End of gdjs.HelpScreenCode.eventsList0xb2358


gdjs.HelpScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.HelpScreenCode.GDExitButtonObjects1.length = 0;
gdjs.HelpScreenCode.GDExitButtonObjects2.length = 0;
gdjs.HelpScreenCode.GDStartButtonObjects1.length = 0;
gdjs.HelpScreenCode.GDStartButtonObjects2.length = 0;
gdjs.HelpScreenCode.GDTitleObjects1.length = 0;
gdjs.HelpScreenCode.GDTitleObjects2.length = 0;
gdjs.HelpScreenCode.GDBackButtonObjects1.length = 0;
gdjs.HelpScreenCode.GDBackButtonObjects2.length = 0;
gdjs.HelpScreenCode.GDHelpTextObjects1.length = 0;
gdjs.HelpScreenCode.GDHelpTextObjects2.length = 0;

gdjs.HelpScreenCode.eventsList0xb2358(runtimeScene);
return;
}
gdjs['HelpScreenCode'] = gdjs.HelpScreenCode;
