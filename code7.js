gdjs.Maze5Code = {};
gdjs.Maze5Code.forEachIndex3 = 0;

gdjs.Maze5Code.forEachObjects3 = [];

gdjs.Maze5Code.forEachTemporary3 = null;

gdjs.Maze5Code.forEachTotalCount3 = 0;

gdjs.Maze5Code.GDWizardObjects1= [];
gdjs.Maze5Code.GDWizardObjects2= [];
gdjs.Maze5Code.GDWizardObjects3= [];
gdjs.Maze5Code.GDFloor2Objects1= [];
gdjs.Maze5Code.GDFloor2Objects2= [];
gdjs.Maze5Code.GDFloor2Objects3= [];
gdjs.Maze5Code.GDFPSObjects1= [];
gdjs.Maze5Code.GDFPSObjects2= [];
gdjs.Maze5Code.GDFPSObjects3= [];
gdjs.Maze5Code.GDLifeObjects1= [];
gdjs.Maze5Code.GDLifeObjects2= [];
gdjs.Maze5Code.GDLifeObjects3= [];
gdjs.Maze5Code.GDWallObjects1= [];
gdjs.Maze5Code.GDWallObjects2= [];
gdjs.Maze5Code.GDWallObjects3= [];
gdjs.Maze5Code.GDParticlesObjects1= [];
gdjs.Maze5Code.GDParticlesObjects2= [];
gdjs.Maze5Code.GDParticlesObjects3= [];
gdjs.Maze5Code.GDPoisonballObjects1= [];
gdjs.Maze5Code.GDPoisonballObjects2= [];
gdjs.Maze5Code.GDPoisonballObjects3= [];
gdjs.Maze5Code.GDShockballObjects1= [];
gdjs.Maze5Code.GDShockballObjects2= [];
gdjs.Maze5Code.GDShockballObjects3= [];
gdjs.Maze5Code.GDIceballObjects1= [];
gdjs.Maze5Code.GDIceballObjects2= [];
gdjs.Maze5Code.GDIceballObjects3= [];
gdjs.Maze5Code.GDFireballObjects1= [];
gdjs.Maze5Code.GDFireballObjects2= [];
gdjs.Maze5Code.GDFireballObjects3= [];
gdjs.Maze5Code.GDDownStairsObjects1= [];
gdjs.Maze5Code.GDDownStairsObjects2= [];
gdjs.Maze5Code.GDDownStairsObjects3= [];
gdjs.Maze5Code.GDStairsObjects1= [];
gdjs.Maze5Code.GDStairsObjects2= [];
gdjs.Maze5Code.GDStairsObjects3= [];
gdjs.Maze5Code.GDDoorObjects1= [];
gdjs.Maze5Code.GDDoorObjects2= [];
gdjs.Maze5Code.GDDoorObjects3= [];
gdjs.Maze5Code.GDKeyObjects1= [];
gdjs.Maze5Code.GDKeyObjects2= [];
gdjs.Maze5Code.GDKeyObjects3= [];
gdjs.Maze5Code.GDHealthFlaskObjects1= [];
gdjs.Maze5Code.GDHealthFlaskObjects2= [];
gdjs.Maze5Code.GDHealthFlaskObjects3= [];
gdjs.Maze5Code.GDChortObjects1= [];
gdjs.Maze5Code.GDChortObjects2= [];
gdjs.Maze5Code.GDChortObjects3= [];
gdjs.Maze5Code.GDBigHealthFlaskObjects1= [];
gdjs.Maze5Code.GDBigHealthFlaskObjects2= [];
gdjs.Maze5Code.GDBigHealthFlaskObjects3= [];
gdjs.Maze5Code.GDOrcAxeObjects1= [];
gdjs.Maze5Code.GDOrcAxeObjects2= [];
gdjs.Maze5Code.GDOrcAxeObjects3= [];
gdjs.Maze5Code.GDMapObjects1= [];
gdjs.Maze5Code.GDMapObjects2= [];
gdjs.Maze5Code.GDMapObjects3= [];
gdjs.Maze5Code.GDDoorFrameObjects1= [];
gdjs.Maze5Code.GDDoorFrameObjects2= [];
gdjs.Maze5Code.GDDoorFrameObjects3= [];
gdjs.Maze5Code.GDOrcWarriorObjects1= [];
gdjs.Maze5Code.GDOrcWarriorObjects2= [];
gdjs.Maze5Code.GDOrcWarriorObjects3= [];
gdjs.Maze5Code.GDMapHelpObjects1= [];
gdjs.Maze5Code.GDMapHelpObjects2= [];
gdjs.Maze5Code.GDMapHelpObjects3= [];
gdjs.Maze5Code.GDFindKeyObjects1= [];
gdjs.Maze5Code.GDFindKeyObjects2= [];
gdjs.Maze5Code.GDFindKeyObjects3= [];
gdjs.Maze5Code.GDRestartGameObjects1= [];
gdjs.Maze5Code.GDRestartGameObjects2= [];
gdjs.Maze5Code.GDRestartGameObjects3= [];
gdjs.Maze5Code.GDGameOverObjects1= [];
gdjs.Maze5Code.GDGameOverObjects2= [];
gdjs.Maze5Code.GDGameOverObjects3= [];

gdjs.Maze5Code.conditionTrue_0 = {val:false};
gdjs.Maze5Code.condition0IsTrue_0 = {val:false};
gdjs.Maze5Code.condition1IsTrue_0 = {val:false};
gdjs.Maze5Code.condition2IsTrue_0 = {val:false};
gdjs.Maze5Code.condition3IsTrue_0 = {val:false};
gdjs.Maze5Code.condition4IsTrue_0 = {val:false};
gdjs.Maze5Code.conditionTrue_1 = {val:false};
gdjs.Maze5Code.condition0IsTrue_1 = {val:false};
gdjs.Maze5Code.condition1IsTrue_1 = {val:false};
gdjs.Maze5Code.condition2IsTrue_1 = {val:false};
gdjs.Maze5Code.condition3IsTrue_1 = {val:false};
gdjs.Maze5Code.condition4IsTrue_1 = {val:false};


gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDFireballObjects2Objects = Hashtable.newFrom({"Fireball": gdjs.Maze5Code.GDFireballObjects2});gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDIceballObjects2Objects = Hashtable.newFrom({"Iceball": gdjs.Maze5Code.GDIceballObjects2});gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDShockballObjects2Objects = Hashtable.newFrom({"Shockball": gdjs.Maze5Code.GDShockballObjects2});gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDPoisonballObjects2Objects = Hashtable.newFrom({"Poisonball": gdjs.Maze5Code.GDPoisonballObjects2});gdjs.Maze5Code.eventsList0x95da90 = function(runtimeScene) {

{

gdjs.Maze5Code.GDWizardObjects2.createFrom(runtimeScene.getObjects("Wizard"));

gdjs.Maze5Code.condition0IsTrue_0.val = false;
gdjs.Maze5Code.condition1IsTrue_0.val = false;
gdjs.Maze5Code.condition2IsTrue_0.val = false;
{
gdjs.Maze5Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Maze5Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Maze5Code.GDWizardObjects2.length;i<l;++i) {
    if ( gdjs.Maze5Code.GDWizardObjects2[i].timerElapsedTime("firerate", 1) ) {
        gdjs.Maze5Code.condition1IsTrue_0.val = true;
        gdjs.Maze5Code.GDWizardObjects2[k] = gdjs.Maze5Code.GDWizardObjects2[i];
        ++k;
    }
}
gdjs.Maze5Code.GDWizardObjects2.length = k;}if ( gdjs.Maze5Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Maze5Code.GDWizardObjects2.length;i<l;++i) {
    if ( gdjs.Maze5Code.GDWizardObjects2[i].getVariableNumber(gdjs.Maze5Code.GDWizardObjects2[i].getVariables().getFromIndex(1)) == 1 ) {
        gdjs.Maze5Code.condition2IsTrue_0.val = true;
        gdjs.Maze5Code.GDWizardObjects2[k] = gdjs.Maze5Code.GDWizardObjects2[i];
        ++k;
    }
}
gdjs.Maze5Code.GDWizardObjects2.length = k;}}
}
if (gdjs.Maze5Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Maze5Code.GDWizardObjects2 */
gdjs.Maze5Code.GDFireballObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDFireballObjects2Objects, (( gdjs.Maze5Code.GDWizardObjects2.length === 0 ) ? 0 :gdjs.Maze5Code.GDWizardObjects2[0].getPointX("hand")), (( gdjs.Maze5Code.GDWizardObjects2.length === 0 ) ? 0 :gdjs.Maze5Code.GDWizardObjects2[0].getPointY("hand")), "");
}{for(var i = 0, len = gdjs.Maze5Code.GDWizardObjects2.length ;i < len;++i) {
    gdjs.Maze5Code.GDWizardObjects2[i].resetTimer("firerate");
}
}{for(var i = 0, len = gdjs.Maze5Code.GDFireballObjects2.length ;i < len;++i) {
    gdjs.Maze5Code.GDFireballObjects2[i].addForceTowardPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), 100, 1);
}
}}

}


{

gdjs.Maze5Code.GDWizardObjects2.createFrom(runtimeScene.getObjects("Wizard"));

gdjs.Maze5Code.condition0IsTrue_0.val = false;
gdjs.Maze5Code.condition1IsTrue_0.val = false;
gdjs.Maze5Code.condition2IsTrue_0.val = false;
{
gdjs.Maze5Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Maze5Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Maze5Code.GDWizardObjects2.length;i<l;++i) {
    if ( gdjs.Maze5Code.GDWizardObjects2[i].timerElapsedTime("firerate", 1) ) {
        gdjs.Maze5Code.condition1IsTrue_0.val = true;
        gdjs.Maze5Code.GDWizardObjects2[k] = gdjs.Maze5Code.GDWizardObjects2[i];
        ++k;
    }
}
gdjs.Maze5Code.GDWizardObjects2.length = k;}if ( gdjs.Maze5Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Maze5Code.GDWizardObjects2.length;i<l;++i) {
    if ( gdjs.Maze5Code.GDWizardObjects2[i].getVariableNumber(gdjs.Maze5Code.GDWizardObjects2[i].getVariables().getFromIndex(1)) == 2 ) {
        gdjs.Maze5Code.condition2IsTrue_0.val = true;
        gdjs.Maze5Code.GDWizardObjects2[k] = gdjs.Maze5Code.GDWizardObjects2[i];
        ++k;
    }
}
gdjs.Maze5Code.GDWizardObjects2.length = k;}}
}
if (gdjs.Maze5Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Maze5Code.GDWizardObjects2 */
gdjs.Maze5Code.GDIceballObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDIceballObjects2Objects, (( gdjs.Maze5Code.GDWizardObjects2.length === 0 ) ? 0 :gdjs.Maze5Code.GDWizardObjects2[0].getPointX("hand")), (( gdjs.Maze5Code.GDWizardObjects2.length === 0 ) ? 0 :gdjs.Maze5Code.GDWizardObjects2[0].getPointY("hand")), "");
}{for(var i = 0, len = gdjs.Maze5Code.GDWizardObjects2.length ;i < len;++i) {
    gdjs.Maze5Code.GDWizardObjects2[i].resetTimer("firerate");
}
}{for(var i = 0, len = gdjs.Maze5Code.GDIceballObjects2.length ;i < len;++i) {
    gdjs.Maze5Code.GDIceballObjects2[i].addForceTowardPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), 100, 1);
}
}}

}


{

gdjs.Maze5Code.GDWizardObjects2.createFrom(runtimeScene.getObjects("Wizard"));

gdjs.Maze5Code.condition0IsTrue_0.val = false;
gdjs.Maze5Code.condition1IsTrue_0.val = false;
gdjs.Maze5Code.condition2IsTrue_0.val = false;
{
gdjs.Maze5Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Maze5Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Maze5Code.GDWizardObjects2.length;i<l;++i) {
    if ( gdjs.Maze5Code.GDWizardObjects2[i].timerElapsedTime("firerate", 1) ) {
        gdjs.Maze5Code.condition1IsTrue_0.val = true;
        gdjs.Maze5Code.GDWizardObjects2[k] = gdjs.Maze5Code.GDWizardObjects2[i];
        ++k;
    }
}
gdjs.Maze5Code.GDWizardObjects2.length = k;}if ( gdjs.Maze5Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Maze5Code.GDWizardObjects2.length;i<l;++i) {
    if ( gdjs.Maze5Code.GDWizardObjects2[i].getVariableNumber(gdjs.Maze5Code.GDWizardObjects2[i].getVariables().getFromIndex(1)) == 3 ) {
        gdjs.Maze5Code.condition2IsTrue_0.val = true;
        gdjs.Maze5Code.GDWizardObjects2[k] = gdjs.Maze5Code.GDWizardObjects2[i];
        ++k;
    }
}
gdjs.Maze5Code.GDWizardObjects2.length = k;}}
}
if (gdjs.Maze5Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Maze5Code.GDWizardObjects2 */
gdjs.Maze5Code.GDShockballObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDShockballObjects2Objects, (( gdjs.Maze5Code.GDWizardObjects2.length === 0 ) ? 0 :gdjs.Maze5Code.GDWizardObjects2[0].getPointX("hand")), (( gdjs.Maze5Code.GDWizardObjects2.length === 0 ) ? 0 :gdjs.Maze5Code.GDWizardObjects2[0].getPointY("hand")), "");
}{for(var i = 0, len = gdjs.Maze5Code.GDWizardObjects2.length ;i < len;++i) {
    gdjs.Maze5Code.GDWizardObjects2[i].resetTimer("firerate");
}
}{for(var i = 0, len = gdjs.Maze5Code.GDShockballObjects2.length ;i < len;++i) {
    gdjs.Maze5Code.GDShockballObjects2[i].addForceTowardPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), 100, 1);
}
}}

}


{

gdjs.Maze5Code.GDWizardObjects2.createFrom(runtimeScene.getObjects("Wizard"));

gdjs.Maze5Code.condition0IsTrue_0.val = false;
gdjs.Maze5Code.condition1IsTrue_0.val = false;
gdjs.Maze5Code.condition2IsTrue_0.val = false;
{
gdjs.Maze5Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Maze5Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Maze5Code.GDWizardObjects2.length;i<l;++i) {
    if ( gdjs.Maze5Code.GDWizardObjects2[i].timerElapsedTime("firerate", 1) ) {
        gdjs.Maze5Code.condition1IsTrue_0.val = true;
        gdjs.Maze5Code.GDWizardObjects2[k] = gdjs.Maze5Code.GDWizardObjects2[i];
        ++k;
    }
}
gdjs.Maze5Code.GDWizardObjects2.length = k;}if ( gdjs.Maze5Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Maze5Code.GDWizardObjects2.length;i<l;++i) {
    if ( gdjs.Maze5Code.GDWizardObjects2[i].getVariableNumber(gdjs.Maze5Code.GDWizardObjects2[i].getVariables().getFromIndex(1)) == 4 ) {
        gdjs.Maze5Code.condition2IsTrue_0.val = true;
        gdjs.Maze5Code.GDWizardObjects2[k] = gdjs.Maze5Code.GDWizardObjects2[i];
        ++k;
    }
}
gdjs.Maze5Code.GDWizardObjects2.length = k;}}
}
if (gdjs.Maze5Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Maze5Code.GDWizardObjects2 */
gdjs.Maze5Code.GDPoisonballObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDPoisonballObjects2Objects, (( gdjs.Maze5Code.GDWizardObjects2.length === 0 ) ? 0 :gdjs.Maze5Code.GDWizardObjects2[0].getPointX("hand")), (( gdjs.Maze5Code.GDWizardObjects2.length === 0 ) ? 0 :gdjs.Maze5Code.GDWizardObjects2[0].getPointY("hand")), "");
}{for(var i = 0, len = gdjs.Maze5Code.GDWizardObjects2.length ;i < len;++i) {
    gdjs.Maze5Code.GDWizardObjects2[i].resetTimer("firerate");
}
}{for(var i = 0, len = gdjs.Maze5Code.GDPoisonballObjects2.length ;i < len;++i) {
    gdjs.Maze5Code.GDPoisonballObjects2[i].addForceTowardPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), 100, 1);
}
}}

}


{


gdjs.Maze5Code.condition0IsTrue_0.val = false;
{
gdjs.Maze5Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Num1");
}if (gdjs.Maze5Code.condition0IsTrue_0.val) {
gdjs.Maze5Code.GDWizardObjects2.createFrom(runtimeScene.getObjects("Wizard"));
{for(var i = 0, len = gdjs.Maze5Code.GDWizardObjects2.length ;i < len;++i) {
    gdjs.Maze5Code.GDWizardObjects2[i].returnVariable(gdjs.Maze5Code.GDWizardObjects2[i].getVariables().getFromIndex(1)).setNumber(1);
}
}}

}


{


gdjs.Maze5Code.condition0IsTrue_0.val = false;
{
gdjs.Maze5Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Num2");
}if (gdjs.Maze5Code.condition0IsTrue_0.val) {
gdjs.Maze5Code.GDWizardObjects2.createFrom(runtimeScene.getObjects("Wizard"));
{for(var i = 0, len = gdjs.Maze5Code.GDWizardObjects2.length ;i < len;++i) {
    gdjs.Maze5Code.GDWizardObjects2[i].returnVariable(gdjs.Maze5Code.GDWizardObjects2[i].getVariables().getFromIndex(1)).setNumber(2);
}
}}

}


{


gdjs.Maze5Code.condition0IsTrue_0.val = false;
{
gdjs.Maze5Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Num3");
}if (gdjs.Maze5Code.condition0IsTrue_0.val) {
gdjs.Maze5Code.GDWizardObjects2.createFrom(runtimeScene.getObjects("Wizard"));
{for(var i = 0, len = gdjs.Maze5Code.GDWizardObjects2.length ;i < len;++i) {
    gdjs.Maze5Code.GDWizardObjects2[i].returnVariable(gdjs.Maze5Code.GDWizardObjects2[i].getVariables().getFromIndex(1)).setNumber(3);
}
}}

}


{


gdjs.Maze5Code.condition0IsTrue_0.val = false;
{
gdjs.Maze5Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Num4");
}if (gdjs.Maze5Code.condition0IsTrue_0.val) {
gdjs.Maze5Code.GDWizardObjects1.createFrom(runtimeScene.getObjects("Wizard"));
{for(var i = 0, len = gdjs.Maze5Code.GDWizardObjects1.length ;i < len;++i) {
    gdjs.Maze5Code.GDWizardObjects1[i].returnVariable(gdjs.Maze5Code.GDWizardObjects1[i].getVariables().getFromIndex(1)).setNumber(4);
}
}}

}


}; //End of gdjs.Maze5Code.eventsList0x95da90
gdjs.Maze5Code.eventsList0x6d63d8 = function(runtimeScene) {

{


gdjs.Maze5Code.condition0IsTrue_0.val = false;
{
gdjs.Maze5Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if (gdjs.Maze5Code.condition0IsTrue_0.val) {
gdjs.Maze5Code.GDWizardObjects2.createFrom(runtimeScene.getObjects("Wizard"));
{for(var i = 0, len = gdjs.Maze5Code.GDWizardObjects2.length ;i < len;++i) {
    gdjs.Maze5Code.GDWizardObjects2[i].addPolarForce(180, (gdjs.RuntimeObject.getVariableNumber(gdjs.Maze5Code.GDWizardObjects2[i].getVariables().getFromIndex(2))), 0);
}
}{for(var i = 0, len = gdjs.Maze5Code.GDWizardObjects2.length ;i < len;++i) {
    gdjs.Maze5Code.GDWizardObjects2[i].setAnimationName("Run");
}
}{for(var i = 0, len = gdjs.Maze5Code.GDWizardObjects2.length ;i < len;++i) {
    gdjs.Maze5Code.GDWizardObjects2[i].returnVariable(gdjs.Maze5Code.GDWizardObjects2[i].getVariables().getFromIndex(0)).setString("left");
}
}{for(var i = 0, len = gdjs.Maze5Code.GDWizardObjects2.length ;i < len;++i) {
    gdjs.Maze5Code.GDWizardObjects2[i].flipX(true);
}
}}

}


{


gdjs.Maze5Code.condition0IsTrue_0.val = false;
{
gdjs.Maze5Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if (gdjs.Maze5Code.condition0IsTrue_0.val) {
gdjs.Maze5Code.GDWizardObjects2.createFrom(runtimeScene.getObjects("Wizard"));
{for(var i = 0, len = gdjs.Maze5Code.GDWizardObjects2.length ;i < len;++i) {
    gdjs.Maze5Code.GDWizardObjects2[i].addPolarForce(0, (gdjs.RuntimeObject.getVariableNumber(gdjs.Maze5Code.GDWizardObjects2[i].getVariables().getFromIndex(2))), 0);
}
}{for(var i = 0, len = gdjs.Maze5Code.GDWizardObjects2.length ;i < len;++i) {
    gdjs.Maze5Code.GDWizardObjects2[i].setAnimationName("Run");
}
}{for(var i = 0, len = gdjs.Maze5Code.GDWizardObjects2.length ;i < len;++i) {
    gdjs.Maze5Code.GDWizardObjects2[i].returnVariable(gdjs.Maze5Code.GDWizardObjects2[i].getVariables().getFromIndex(0)).setString("right");
}
}{for(var i = 0, len = gdjs.Maze5Code.GDWizardObjects2.length ;i < len;++i) {
    gdjs.Maze5Code.GDWizardObjects2[i].flipX(false);
}
}}

}


{


gdjs.Maze5Code.condition0IsTrue_0.val = false;
{
gdjs.Maze5Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
}if (gdjs.Maze5Code.condition0IsTrue_0.val) {
gdjs.Maze5Code.GDWizardObjects2.createFrom(runtimeScene.getObjects("Wizard"));
{for(var i = 0, len = gdjs.Maze5Code.GDWizardObjects2.length ;i < len;++i) {
    gdjs.Maze5Code.GDWizardObjects2[i].addPolarForce(270, (gdjs.RuntimeObject.getVariableNumber(gdjs.Maze5Code.GDWizardObjects2[i].getVariables().getFromIndex(2))), 0);
}
}{for(var i = 0, len = gdjs.Maze5Code.GDWizardObjects2.length ;i < len;++i) {
    gdjs.Maze5Code.GDWizardObjects2[i].setAnimationName("Run");
}
}}

}


{


gdjs.Maze5Code.condition0IsTrue_0.val = false;
{
gdjs.Maze5Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}if (gdjs.Maze5Code.condition0IsTrue_0.val) {
gdjs.Maze5Code.GDWizardObjects2.createFrom(runtimeScene.getObjects("Wizard"));
{for(var i = 0, len = gdjs.Maze5Code.GDWizardObjects2.length ;i < len;++i) {
    gdjs.Maze5Code.GDWizardObjects2[i].addPolarForce(90, (gdjs.RuntimeObject.getVariableNumber(gdjs.Maze5Code.GDWizardObjects2[i].getVariables().getFromIndex(2))), 0);
}
}{for(var i = 0, len = gdjs.Maze5Code.GDWizardObjects2.length ;i < len;++i) {
    gdjs.Maze5Code.GDWizardObjects2[i].setAnimationName("Run");
}
}}

}


{


gdjs.Maze5Code.condition0IsTrue_0.val = false;
{
gdjs.Maze5Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
}if (gdjs.Maze5Code.condition0IsTrue_0.val) {
gdjs.Maze5Code.GDWizardObjects2.createFrom(runtimeScene.getObjects("Wizard"));
{for(var i = 0, len = gdjs.Maze5Code.GDWizardObjects2.length ;i < len;++i) {
    gdjs.Maze5Code.GDWizardObjects2[i].returnVariable(gdjs.Maze5Code.GDWizardObjects2[i].getVariables().getFromIndex(2)).setNumber(80);
}
}{for(var i = 0, len = gdjs.Maze5Code.GDWizardObjects2.length ;i < len;++i) {
    gdjs.Maze5Code.GDWizardObjects2[i].setAnimationSpeedScale(1.5);
}
}}

}


{


gdjs.Maze5Code.condition0IsTrue_0.val = false;
{
gdjs.Maze5Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
}if (gdjs.Maze5Code.condition0IsTrue_0.val) {
gdjs.Maze5Code.GDWizardObjects2.createFrom(runtimeScene.getObjects("Wizard"));
{for(var i = 0, len = gdjs.Maze5Code.GDWizardObjects2.length ;i < len;++i) {
    gdjs.Maze5Code.GDWizardObjects2[i].returnVariable(gdjs.Maze5Code.GDWizardObjects2[i].getVariables().getFromIndex(2)).setNumber(50);
}
}{for(var i = 0, len = gdjs.Maze5Code.GDWizardObjects2.length ;i < len;++i) {
    gdjs.Maze5Code.GDWizardObjects2[i].setAnimationSpeedScale(1);
}
}}

}


{


{
gdjs.Maze5Code.GDWizardObjects2.createFrom(runtimeScene.getObjects("Wizard"));
{for(var i = 0, len = gdjs.Maze5Code.GDWizardObjects2.length ;i < len;++i) {
    gdjs.Maze5Code.GDWizardObjects2[i].setColor("255;255;255");
}
}}

}


{


gdjs.Maze5Code.condition0IsTrue_0.val = false;
{
{gdjs.Maze5Code.conditionTrue_1 = gdjs.Maze5Code.condition0IsTrue_0;
gdjs.Maze5Code.condition0IsTrue_1.val = false;
gdjs.Maze5Code.condition1IsTrue_1.val = false;
gdjs.Maze5Code.condition2IsTrue_1.val = false;
gdjs.Maze5Code.condition3IsTrue_1.val = false;
{
gdjs.Maze5Code.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "w");
if( gdjs.Maze5Code.condition0IsTrue_1.val ) {
    gdjs.Maze5Code.conditionTrue_1.val = true;
}
}
{
gdjs.Maze5Code.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "s");
if( gdjs.Maze5Code.condition1IsTrue_1.val ) {
    gdjs.Maze5Code.conditionTrue_1.val = true;
}
}
{
gdjs.Maze5Code.condition2IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "d");
if( gdjs.Maze5Code.condition2IsTrue_1.val ) {
    gdjs.Maze5Code.conditionTrue_1.val = true;
}
}
{
gdjs.Maze5Code.condition3IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "a");
if( gdjs.Maze5Code.condition3IsTrue_1.val ) {
    gdjs.Maze5Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Maze5Code.condition0IsTrue_0.val) {
gdjs.Maze5Code.GDWizardObjects2.createFrom(runtimeScene.getObjects("Wizard"));
{for(var i = 0, len = gdjs.Maze5Code.GDWizardObjects2.length ;i < len;++i) {
    gdjs.Maze5Code.GDWizardObjects2[i].setAnimationName("Idle");
}
}}

}


{


gdjs.Maze5Code.condition0IsTrue_0.val = false;
{
gdjs.Maze5Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 0;
}if (gdjs.Maze5Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "DeathScreen", true);
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(3);
}}

}


{


gdjs.Maze5Code.eventsList0x95da90(runtimeScene);
}


}; //End of gdjs.Maze5Code.eventsList0x6d63d8
gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDFireballObjects2Objects = Hashtable.newFrom({"Fireball": gdjs.Maze5Code.GDFireballObjects2});gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDWallObjects2Objects = Hashtable.newFrom({"Wall": gdjs.Maze5Code.GDWallObjects2});gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDIceballObjects2Objects = Hashtable.newFrom({"Iceball": gdjs.Maze5Code.GDIceballObjects2});gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDWallObjects2Objects = Hashtable.newFrom({"Wall": gdjs.Maze5Code.GDWallObjects2});gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDShockballObjects2Objects = Hashtable.newFrom({"Shockball": gdjs.Maze5Code.GDShockballObjects2});gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDWallObjects2Objects = Hashtable.newFrom({"Wall": gdjs.Maze5Code.GDWallObjects2});gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDPoisonballObjects2Objects = Hashtable.newFrom({"Poisonball": gdjs.Maze5Code.GDPoisonballObjects2});gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDWallObjects2Objects = Hashtable.newFrom({"Wall": gdjs.Maze5Code.GDWallObjects2});gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDOrcAxeObjects2Objects = Hashtable.newFrom({"OrcAxe": gdjs.Maze5Code.GDOrcAxeObjects2});gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDWallObjects2Objects = Hashtable.newFrom({"Wall": gdjs.Maze5Code.GDWallObjects2});gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDWallObjects1Objects = Hashtable.newFrom({"Wall": gdjs.Maze5Code.GDWallObjects1});gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDWallObjects1Objects = Hashtable.newFrom({"Wall": gdjs.Maze5Code.GDWallObjects1});gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDWallObjects1Objects = Hashtable.newFrom({"Wall": gdjs.Maze5Code.GDWallObjects1});gdjs.Maze5Code.eventsList0xb30e10 = function(runtimeScene) {

{

gdjs.Maze5Code.GDFireballObjects2.createFrom(runtimeScene.getObjects("Fireball"));
gdjs.Maze5Code.GDWallObjects2.createFrom(runtimeScene.getObjects("Wall"));

gdjs.Maze5Code.condition0IsTrue_0.val = false;
{
gdjs.Maze5Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDFireballObjects2Objects, gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDWallObjects2Objects, false, runtimeScene, false);
}if (gdjs.Maze5Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Maze5Code.GDFireballObjects2 */
{for(var i = 0, len = gdjs.Maze5Code.GDFireballObjects2.length ;i < len;++i) {
    gdjs.Maze5Code.GDFireballObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Maze5Code.GDIceballObjects2.createFrom(runtimeScene.getObjects("Iceball"));
gdjs.Maze5Code.GDWallObjects2.createFrom(runtimeScene.getObjects("Wall"));

gdjs.Maze5Code.condition0IsTrue_0.val = false;
{
gdjs.Maze5Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDIceballObjects2Objects, gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDWallObjects2Objects, false, runtimeScene, false);
}if (gdjs.Maze5Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Maze5Code.GDIceballObjects2 */
{for(var i = 0, len = gdjs.Maze5Code.GDIceballObjects2.length ;i < len;++i) {
    gdjs.Maze5Code.GDIceballObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Maze5Code.GDShockballObjects2.createFrom(runtimeScene.getObjects("Shockball"));
gdjs.Maze5Code.GDWallObjects2.createFrom(runtimeScene.getObjects("Wall"));

gdjs.Maze5Code.condition0IsTrue_0.val = false;
{
gdjs.Maze5Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDShockballObjects2Objects, gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDWallObjects2Objects, false, runtimeScene, false);
}if (gdjs.Maze5Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Maze5Code.GDShockballObjects2 */
{for(var i = 0, len = gdjs.Maze5Code.GDShockballObjects2.length ;i < len;++i) {
    gdjs.Maze5Code.GDShockballObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Maze5Code.GDPoisonballObjects2.createFrom(runtimeScene.getObjects("Poisonball"));
gdjs.Maze5Code.GDWallObjects2.createFrom(runtimeScene.getObjects("Wall"));

gdjs.Maze5Code.condition0IsTrue_0.val = false;
{
gdjs.Maze5Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDPoisonballObjects2Objects, gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDWallObjects2Objects, false, runtimeScene, false);
}if (gdjs.Maze5Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Maze5Code.GDPoisonballObjects2 */
{for(var i = 0, len = gdjs.Maze5Code.GDPoisonballObjects2.length ;i < len;++i) {
    gdjs.Maze5Code.GDPoisonballObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Maze5Code.GDOrcAxeObjects2.createFrom(runtimeScene.getObjects("OrcAxe"));
gdjs.Maze5Code.GDWallObjects2.createFrom(runtimeScene.getObjects("Wall"));

gdjs.Maze5Code.condition0IsTrue_0.val = false;
{
gdjs.Maze5Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDOrcAxeObjects2Objects, gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDWallObjects2Objects, false, runtimeScene, false);
}if (gdjs.Maze5Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Maze5Code.GDOrcAxeObjects2 */
{for(var i = 0, len = gdjs.Maze5Code.GDOrcAxeObjects2.length ;i < len;++i) {
    gdjs.Maze5Code.GDOrcAxeObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{


{
gdjs.Maze5Code.GDChortObjects1.createFrom(runtimeScene.getObjects("Chort"));
gdjs.Maze5Code.GDOrcWarriorObjects1.createFrom(runtimeScene.getObjects("OrcWarrior"));
gdjs.Maze5Code.GDWallObjects1.createFrom(runtimeScene.getObjects("Wall"));
gdjs.Maze5Code.GDWizardObjects1.createFrom(runtimeScene.getObjects("Wizard"));
{for(var i = 0, len = gdjs.Maze5Code.GDWizardObjects1.length ;i < len;++i) {
    gdjs.Maze5Code.GDWizardObjects1[i].separateFromObjectsList(gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDWallObjects1Objects, true);
}
}{for(var i = 0, len = gdjs.Maze5Code.GDChortObjects1.length ;i < len;++i) {
    gdjs.Maze5Code.GDChortObjects1[i].separateFromObjectsList(gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDWallObjects1Objects, true);
}
}{for(var i = 0, len = gdjs.Maze5Code.GDOrcWarriorObjects1.length ;i < len;++i) {
    gdjs.Maze5Code.GDOrcWarriorObjects1[i].separateFromObjectsList(gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDWallObjects1Objects, true);
}
}}

}


}; //End of gdjs.Maze5Code.eventsList0xb30e10
gdjs.Maze5Code.eventsList0xde3ce0 = function(runtimeScene) {

{


{
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 3, "", 0);
}}

}


{


gdjs.Maze5Code.condition0IsTrue_0.val = false;
gdjs.Maze5Code.condition1IsTrue_0.val = false;
{
gdjs.Maze5Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "m");
}if ( gdjs.Maze5Code.condition0IsTrue_0.val ) {
{
gdjs.Maze5Code.condition1IsTrue_0.val = gdjs.evtTools.inventory.has(runtimeScene, "Wizard", "map");
}}
if (gdjs.Maze5Code.condition1IsTrue_0.val) {
gdjs.Maze5Code.GDStairsObjects2.createFrom(runtimeScene.getObjects("Stairs"));
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 0.5, "", 0);
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Maze5Code.GDStairsObjects2.length !== 0 ? gdjs.Maze5Code.GDStairsObjects2[0] : null), false, "", 0);
}}

}


{


{
gdjs.Maze5Code.GDWizardObjects1.createFrom(runtimeScene.getObjects("Wizard"));
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Maze5Code.GDWizardObjects1.length !== 0 ? gdjs.Maze5Code.GDWizardObjects1[0] : null), false, "", 0);
}}

}


}; //End of gdjs.Maze5Code.eventsList0xde3ce0
gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDWizardObjects2Objects = Hashtable.newFrom({"Wizard": gdjs.Maze5Code.GDWizardObjects2});gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDStairsObjects2Objects = Hashtable.newFrom({"Stairs": gdjs.Maze5Code.GDStairsObjects2});gdjs.Maze5Code.eventsList0x76e158 = function(runtimeScene) {

{

gdjs.Maze5Code.GDStairsObjects2.createFrom(runtimeScene.getObjects("Stairs"));
gdjs.Maze5Code.GDWizardObjects2.createFrom(runtimeScene.getObjects("Wizard"));

gdjs.Maze5Code.condition0IsTrue_0.val = false;
{
gdjs.Maze5Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDWizardObjects2Objects, gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDStairsObjects2Objects, false, runtimeScene, false);
}if (gdjs.Maze5Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Maze6", true);
}{runtimeScene.getGame().getVariables().getFromIndex(2).add(1);
}{gdjs.evtTools.inventory.remove(runtimeScene, "Wizard", "map");
}{gdjs.evtTools.inventory.remove(runtimeScene, "Wizard", "key");
}}

}


{


gdjs.Maze5Code.condition0IsTrue_0.val = false;
{
gdjs.Maze5Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Escape");
}if (gdjs.Maze5Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "PauseScreen");
}}

}


{


gdjs.Maze5Code.condition0IsTrue_0.val = false;
gdjs.Maze5Code.condition1IsTrue_0.val = false;
{
gdjs.Maze5Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
}if ( gdjs.Maze5Code.condition0IsTrue_0.val ) {
{
gdjs.Maze5Code.condition1IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Numpad1");
}}
if (gdjs.Maze5Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Maze1", false);
}}

}


{


gdjs.Maze5Code.condition0IsTrue_0.val = false;
gdjs.Maze5Code.condition1IsTrue_0.val = false;
{
gdjs.Maze5Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
}if ( gdjs.Maze5Code.condition0IsTrue_0.val ) {
{
gdjs.Maze5Code.condition1IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Numpad2");
}}
if (gdjs.Maze5Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Maze2", false);
}}

}


{


gdjs.Maze5Code.condition0IsTrue_0.val = false;
gdjs.Maze5Code.condition1IsTrue_0.val = false;
{
gdjs.Maze5Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
}if ( gdjs.Maze5Code.condition0IsTrue_0.val ) {
{
gdjs.Maze5Code.condition1IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Numpad3");
}}
if (gdjs.Maze5Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Maze3", false);
}}

}


{


gdjs.Maze5Code.condition0IsTrue_0.val = false;
gdjs.Maze5Code.condition1IsTrue_0.val = false;
{
gdjs.Maze5Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
}if ( gdjs.Maze5Code.condition0IsTrue_0.val ) {
{
gdjs.Maze5Code.condition1IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Numpad4");
}}
if (gdjs.Maze5Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Maze4", false);
}}

}


{


gdjs.Maze5Code.condition0IsTrue_0.val = false;
gdjs.Maze5Code.condition1IsTrue_0.val = false;
{
gdjs.Maze5Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
}if ( gdjs.Maze5Code.condition0IsTrue_0.val ) {
{
gdjs.Maze5Code.condition1IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Numpad5");
}}
if (gdjs.Maze5Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Maze5", false);
}}

}


{


gdjs.Maze5Code.condition0IsTrue_0.val = false;
gdjs.Maze5Code.condition1IsTrue_0.val = false;
{
gdjs.Maze5Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
}if ( gdjs.Maze5Code.condition0IsTrue_0.val ) {
{
gdjs.Maze5Code.condition1IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Numpad6");
}}
if (gdjs.Maze5Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Maze6", false);
}}

}


{


gdjs.Maze5Code.condition0IsTrue_0.val = false;
gdjs.Maze5Code.condition1IsTrue_0.val = false;
{
gdjs.Maze5Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
}if ( gdjs.Maze5Code.condition0IsTrue_0.val ) {
{
gdjs.Maze5Code.condition1IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Numpad7");
}}
if (gdjs.Maze5Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Maze7", false);
}}

}


{


gdjs.Maze5Code.condition0IsTrue_0.val = false;
gdjs.Maze5Code.condition1IsTrue_0.val = false;
{
gdjs.Maze5Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
}if ( gdjs.Maze5Code.condition0IsTrue_0.val ) {
{
gdjs.Maze5Code.condition1IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Numpad8");
}}
if (gdjs.Maze5Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Maze8", false);
}}

}


{


gdjs.Maze5Code.condition0IsTrue_0.val = false;
gdjs.Maze5Code.condition1IsTrue_0.val = false;
{
gdjs.Maze5Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
}if ( gdjs.Maze5Code.condition0IsTrue_0.val ) {
{
gdjs.Maze5Code.condition1IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Numpad9");
}}
if (gdjs.Maze5Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Maze9", false);
}}

}


{


gdjs.Maze5Code.condition0IsTrue_0.val = false;
gdjs.Maze5Code.condition1IsTrue_0.val = false;
{
gdjs.Maze5Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
}if ( gdjs.Maze5Code.condition0IsTrue_0.val ) {
{
gdjs.Maze5Code.condition1IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Numpad0");
}}
if (gdjs.Maze5Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Maze10", false);
}}

}


{


{
}

}


}; //End of gdjs.Maze5Code.eventsList0x76e158
gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDWizardObjects2Objects = Hashtable.newFrom({"Wizard": gdjs.Maze5Code.GDWizardObjects2});gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDMapHelpObjects2Objects = Hashtable.newFrom({"MapHelp": gdjs.Maze5Code.GDMapHelpObjects2});gdjs.Maze5Code.eventsList0x789f38 = function(runtimeScene) {

{


{
gdjs.Maze5Code.GDFPSObjects2.createFrom(runtimeScene.getObjects("FPS"));
gdjs.Maze5Code.GDLifeObjects2.createFrom(runtimeScene.getObjects("Life"));
{for(var i = 0, len = gdjs.Maze5Code.GDLifeObjects2.length ;i < len;++i) {
    gdjs.Maze5Code.GDLifeObjects2[i].setString("Life: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(4)));
}
}{for(var i = 0, len = gdjs.Maze5Code.GDFPSObjects2.length ;i < len;++i) {
    gdjs.Maze5Code.GDFPSObjects2[i].setString("FPS: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(Math.round(1 / gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}}

}


{


gdjs.Maze5Code.condition0IsTrue_0.val = false;
{
gdjs.Maze5Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 0;
}if (gdjs.Maze5Code.condition0IsTrue_0.val) {
gdjs.Maze5Code.GDFPSObjects2.createFrom(runtimeScene.getObjects("FPS"));
{for(var i = 0, len = gdjs.Maze5Code.GDFPSObjects2.length ;i < len;++i) {
    gdjs.Maze5Code.GDFPSObjects2[i].setOpacity(0);
}
}}

}


{


gdjs.Maze5Code.condition0IsTrue_0.val = false;
{
{gdjs.Maze5Code.conditionTrue_1 = gdjs.Maze5Code.condition0IsTrue_0;
gdjs.Maze5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17215468);
}
}if (gdjs.Maze5Code.condition0IsTrue_0.val) {
gdjs.Maze5Code.GDFindKeyObjects2.createFrom(runtimeScene.getObjects("FindKey"));
gdjs.Maze5Code.GDGameOverObjects2.createFrom(runtimeScene.getObjects("GameOver"));
gdjs.Maze5Code.GDMapHelpObjects2.createFrom(runtimeScene.getObjects("MapHelp"));
gdjs.Maze5Code.GDRestartGameObjects2.createFrom(runtimeScene.getObjects("RestartGame"));
{for(var i = 0, len = gdjs.Maze5Code.GDFindKeyObjects2.length ;i < len;++i) {
    gdjs.Maze5Code.GDFindKeyObjects2[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Maze5Code.GDMapHelpObjects2.length ;i < len;++i) {
    gdjs.Maze5Code.GDMapHelpObjects2[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Maze5Code.GDGameOverObjects2.length ;i < len;++i) {
    gdjs.Maze5Code.GDGameOverObjects2[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Maze5Code.GDRestartGameObjects2.length ;i < len;++i) {
    gdjs.Maze5Code.GDRestartGameObjects2[i].setOpacity(0);
}
}}

}


{


gdjs.Maze5Code.condition0IsTrue_0.val = false;
{
gdjs.Maze5Code.condition0IsTrue_0.val = gdjs.evtTools.inventory.has(runtimeScene, "Wizard", "map");
}if (gdjs.Maze5Code.condition0IsTrue_0.val) {
gdjs.Maze5Code.GDMapHelpObjects2.createFrom(runtimeScene.getObjects("MapHelp"));
{for(var i = 0, len = gdjs.Maze5Code.GDMapHelpObjects2.length ;i < len;++i) {
    gdjs.Maze5Code.GDMapHelpObjects2[i].setOpacity(0);
}
}}

}


{

gdjs.Maze5Code.GDMapHelpObjects2.createFrom(runtimeScene.getObjects("MapHelp"));
gdjs.Maze5Code.GDWizardObjects2.createFrom(runtimeScene.getObjects("Wizard"));

gdjs.Maze5Code.condition0IsTrue_0.val = false;
gdjs.Maze5Code.condition1IsTrue_0.val = false;
{
gdjs.Maze5Code.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDWizardObjects2Objects, gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDMapHelpObjects2Objects, 50, false);
}if ( gdjs.Maze5Code.condition0IsTrue_0.val ) {
{
gdjs.Maze5Code.condition1IsTrue_0.val = !(gdjs.evtTools.inventory.has(runtimeScene, "Wizard", "map"));
}}
if (gdjs.Maze5Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Maze5Code.GDMapHelpObjects2 */
{for(var i = 0, len = gdjs.Maze5Code.GDMapHelpObjects2.length ;i < len;++i) {
    gdjs.Maze5Code.GDMapHelpObjects2[i].setOpacity(255);
}
}}

}


{


gdjs.Maze5Code.condition0IsTrue_0.val = false;
{
gdjs.Maze5Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
}if (gdjs.Maze5Code.condition0IsTrue_0.val) {
gdjs.Maze5Code.GDFPSObjects2.createFrom(runtimeScene.getObjects("FPS"));
{for(var i = 0, len = gdjs.Maze5Code.GDFPSObjects2.length ;i < len;++i) {
    gdjs.Maze5Code.GDFPSObjects2[i].setOpacity(255);
}
}}

}


{


gdjs.Maze5Code.condition0IsTrue_0.val = false;
{
gdjs.Maze5Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "x");
}if (gdjs.Maze5Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(100);
}}

}


{


gdjs.Maze5Code.condition0IsTrue_0.val = false;
{
gdjs.Maze5Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "c");
}if (gdjs.Maze5Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(5);
}}

}


}; //End of gdjs.Maze5Code.eventsList0x789f38
gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDFireballObjects2Objects = Hashtable.newFrom({"Fireball": gdjs.Maze5Code.GDFireballObjects2});gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDChortObjects2Objects = Hashtable.newFrom({"Chort": gdjs.Maze5Code.GDChortObjects2});gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDIceballObjects2Objects = Hashtable.newFrom({"Iceball": gdjs.Maze5Code.GDIceballObjects2});gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDChortObjects2Objects = Hashtable.newFrom({"Chort": gdjs.Maze5Code.GDChortObjects2});gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDPoisonballObjects2Objects = Hashtable.newFrom({"Poisonball": gdjs.Maze5Code.GDPoisonballObjects2});gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDChortObjects2Objects = Hashtable.newFrom({"Chort": gdjs.Maze5Code.GDChortObjects2});gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDShockballObjects2Objects = Hashtable.newFrom({"Shockball": gdjs.Maze5Code.GDShockballObjects2});gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDChortObjects2Objects = Hashtable.newFrom({"Chort": gdjs.Maze5Code.GDChortObjects2});gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDWizardObjects2Objects = Hashtable.newFrom({"Wizard": gdjs.Maze5Code.GDWizardObjects2});gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDChortObjects2Objects = Hashtable.newFrom({"Chort": gdjs.Maze5Code.GDChortObjects2});gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDWizardObjects1Objects = Hashtable.newFrom({"Wizard": gdjs.Maze5Code.GDWizardObjects1});gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDChortObjects1Objects = Hashtable.newFrom({"Chort": gdjs.Maze5Code.GDChortObjects1});gdjs.Maze5Code.eventsList0x890008 = function(runtimeScene) {

{

gdjs.Maze5Code.GDChortObjects2.createFrom(runtimeScene.getObjects("Chort"));
gdjs.Maze5Code.GDFireballObjects2.createFrom(runtimeScene.getObjects("Fireball"));

gdjs.Maze5Code.condition0IsTrue_0.val = false;
{
gdjs.Maze5Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDFireballObjects2Objects, gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDChortObjects2Objects, false, runtimeScene, false);
}if (gdjs.Maze5Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Maze5Code.GDFireballObjects2 */
{for(var i = 0, len = gdjs.Maze5Code.GDFireballObjects2.length ;i < len;++i) {
    gdjs.Maze5Code.GDFireballObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Maze5Code.GDChortObjects2.createFrom(runtimeScene.getObjects("Chort"));
gdjs.Maze5Code.GDIceballObjects2.createFrom(runtimeScene.getObjects("Iceball"));

gdjs.Maze5Code.condition0IsTrue_0.val = false;
{
gdjs.Maze5Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDIceballObjects2Objects, gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDChortObjects2Objects, false, runtimeScene, false);
}if (gdjs.Maze5Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Maze5Code.GDChortObjects2 */
/* Reuse gdjs.Maze5Code.GDIceballObjects2 */
{for(var i = 0, len = gdjs.Maze5Code.GDIceballObjects2.length ;i < len;++i) {
    gdjs.Maze5Code.GDIceballObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Maze5Code.GDChortObjects2.length ;i < len;++i) {
    gdjs.Maze5Code.GDChortObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Maze5Code.GDChortObjects2.createFrom(runtimeScene.getObjects("Chort"));
gdjs.Maze5Code.GDPoisonballObjects2.createFrom(runtimeScene.getObjects("Poisonball"));

gdjs.Maze5Code.condition0IsTrue_0.val = false;
{
gdjs.Maze5Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDPoisonballObjects2Objects, gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDChortObjects2Objects, false, runtimeScene, false);
}if (gdjs.Maze5Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Maze5Code.GDPoisonballObjects2 */
{for(var i = 0, len = gdjs.Maze5Code.GDPoisonballObjects2.length ;i < len;++i) {
    gdjs.Maze5Code.GDPoisonballObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Maze5Code.GDChortObjects2.createFrom(runtimeScene.getObjects("Chort"));
gdjs.Maze5Code.GDShockballObjects2.createFrom(runtimeScene.getObjects("Shockball"));

gdjs.Maze5Code.condition0IsTrue_0.val = false;
{
gdjs.Maze5Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDShockballObjects2Objects, gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDChortObjects2Objects, false, runtimeScene, false);
}if (gdjs.Maze5Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Maze5Code.GDShockballObjects2 */
{for(var i = 0, len = gdjs.Maze5Code.GDShockballObjects2.length ;i < len;++i) {
    gdjs.Maze5Code.GDShockballObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Maze5Code.GDChortObjects2.createFrom(runtimeScene.getObjects("Chort"));
gdjs.Maze5Code.GDWizardObjects2.createFrom(runtimeScene.getObjects("Wizard"));

gdjs.Maze5Code.condition0IsTrue_0.val = false;
{
gdjs.Maze5Code.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDWizardObjects2Objects, gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDChortObjects2Objects, 100, false);
}if (gdjs.Maze5Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Maze5Code.GDChortObjects2 */
/* Reuse gdjs.Maze5Code.GDWizardObjects2 */
{for(var i = 0, len = gdjs.Maze5Code.GDChortObjects2.length ;i < len;++i) {
    gdjs.Maze5Code.GDChortObjects2[i].getBehavior("Pathfinding").moveTo(runtimeScene, (( gdjs.Maze5Code.GDWizardObjects2.length === 0 ) ? 0 :gdjs.Maze5Code.GDWizardObjects2[0].getPointX("")), (( gdjs.Maze5Code.GDWizardObjects2.length === 0 ) ? 0 :gdjs.Maze5Code.GDWizardObjects2[0].getPointY("")));
}
}{for(var i = 0, len = gdjs.Maze5Code.GDChortObjects2.length ;i < len;++i) {
    gdjs.Maze5Code.GDChortObjects2[i].setAnimationName("Running");
}
}}

}


{

gdjs.Maze5Code.GDChortObjects1.createFrom(runtimeScene.getObjects("Chort"));
gdjs.Maze5Code.GDWizardObjects1.createFrom(runtimeScene.getObjects("Wizard"));

gdjs.Maze5Code.condition0IsTrue_0.val = false;
{
gdjs.Maze5Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDWizardObjects1Objects, gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDChortObjects1Objects, false, runtimeScene, true);
}if (gdjs.Maze5Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Maze5Code.GDChortObjects1 */
/* Reuse gdjs.Maze5Code.GDWizardObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(4).sub(1);
}{for(var i = 0, len = gdjs.Maze5Code.GDChortObjects1.length ;i < len;++i) {
    gdjs.Maze5Code.GDChortObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Maze5Code.GDWizardObjects1.length ;i < len;++i) {
    gdjs.Maze5Code.GDWizardObjects1[i].setColor("255;0;0");
}
}}

}


}; //End of gdjs.Maze5Code.eventsList0x890008
gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDWizardObjects2Objects = Hashtable.newFrom({"Wizard": gdjs.Maze5Code.GDWizardObjects2});gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDDoorObjects2Objects = Hashtable.newFrom({"Door": gdjs.Maze5Code.GDDoorObjects2});gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDWizardObjects2Objects = Hashtable.newFrom({"Wizard": gdjs.Maze5Code.GDWizardObjects2});gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDDoorObjects2Objects = Hashtable.newFrom({"Door": gdjs.Maze5Code.GDDoorObjects2});gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDDoorObjects1Objects = Hashtable.newFrom({"Door": gdjs.Maze5Code.GDDoorObjects1});gdjs.Maze5Code.eventsList0xc982c0 = function(runtimeScene) {

{

gdjs.Maze5Code.GDDoorObjects2.createFrom(runtimeScene.getObjects("Door"));
gdjs.Maze5Code.GDWizardObjects2.createFrom(runtimeScene.getObjects("Wizard"));

gdjs.Maze5Code.condition0IsTrue_0.val = false;
gdjs.Maze5Code.condition1IsTrue_0.val = false;
{
gdjs.Maze5Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDWizardObjects2Objects, gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDDoorObjects2Objects, false, runtimeScene, false);
}if ( gdjs.Maze5Code.condition0IsTrue_0.val ) {
{
gdjs.Maze5Code.condition1IsTrue_0.val = gdjs.evtTools.inventory.has(runtimeScene, "Wizard", "key");
}}
if (gdjs.Maze5Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Maze5Code.GDDoorObjects2 */
{for(var i = 0, len = gdjs.Maze5Code.GDDoorObjects2.length ;i < len;++i) {
    gdjs.Maze5Code.GDDoorObjects2[i].setAnimationName("Open");
}
}}

}


{

gdjs.Maze5Code.GDDoorObjects2.createFrom(runtimeScene.getObjects("Door"));
gdjs.Maze5Code.GDWizardObjects2.createFrom(runtimeScene.getObjects("Wizard"));

gdjs.Maze5Code.condition0IsTrue_0.val = false;
gdjs.Maze5Code.condition1IsTrue_0.val = false;
{
gdjs.Maze5Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDWizardObjects2Objects, gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDDoorObjects2Objects, false, runtimeScene, false);
}if ( gdjs.Maze5Code.condition0IsTrue_0.val ) {
{
gdjs.Maze5Code.condition1IsTrue_0.val = !(gdjs.evtTools.inventory.has(runtimeScene, "Wizard", "key"));
}}
if (gdjs.Maze5Code.condition1IsTrue_0.val) {
gdjs.Maze5Code.GDFindKeyObjects2.createFrom(runtimeScene.getObjects("FindKey"));
{for(var i = 0, len = gdjs.Maze5Code.GDFindKeyObjects2.length ;i < len;++i) {
    gdjs.Maze5Code.GDFindKeyObjects2[i].setOpacity(255);
}
}}

}


{

gdjs.Maze5Code.GDDoorObjects1.createFrom(runtimeScene.getObjects("Door"));

gdjs.Maze5Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Maze5Code.GDDoorObjects1.length;i<l;++i) {
    if ( gdjs.Maze5Code.GDDoorObjects1[i].isCurrentAnimationName("Closed") ) {
        gdjs.Maze5Code.condition0IsTrue_0.val = true;
        gdjs.Maze5Code.GDDoorObjects1[k] = gdjs.Maze5Code.GDDoorObjects1[i];
        ++k;
    }
}
gdjs.Maze5Code.GDDoorObjects1.length = k;}if (gdjs.Maze5Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Maze5Code.GDDoorObjects1 */
gdjs.Maze5Code.GDWizardObjects1.createFrom(runtimeScene.getObjects("Wizard"));
{for(var i = 0, len = gdjs.Maze5Code.GDWizardObjects1.length ;i < len;++i) {
    gdjs.Maze5Code.GDWizardObjects1[i].separateFromObjectsList(gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDDoorObjects1Objects, true);
}
}}

}


}; //End of gdjs.Maze5Code.eventsList0xc982c0
gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDWizardObjects2Objects = Hashtable.newFrom({"Wizard": gdjs.Maze5Code.GDWizardObjects2});gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDMapObjects2Objects = Hashtable.newFrom({"Map": gdjs.Maze5Code.GDMapObjects2});gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDWizardObjects1Objects = Hashtable.newFrom({"Wizard": gdjs.Maze5Code.GDWizardObjects1});gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDKeyObjects1Objects = Hashtable.newFrom({"Key": gdjs.Maze5Code.GDKeyObjects1});gdjs.Maze5Code.eventsList0xc402a8 = function(runtimeScene) {

{

gdjs.Maze5Code.GDMapObjects2.createFrom(runtimeScene.getObjects("Map"));
gdjs.Maze5Code.GDWizardObjects2.createFrom(runtimeScene.getObjects("Wizard"));

gdjs.Maze5Code.condition0IsTrue_0.val = false;
{
gdjs.Maze5Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDWizardObjects2Objects, gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDMapObjects2Objects, false, runtimeScene, false);
}if (gdjs.Maze5Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Maze5Code.GDMapObjects2 */
{for(var i = 0, len = gdjs.Maze5Code.GDMapObjects2.length ;i < len;++i) {
    gdjs.Maze5Code.GDMapObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.inventory.add(runtimeScene, "Wizard", "map");
}}

}


{

gdjs.Maze5Code.GDKeyObjects1.createFrom(runtimeScene.getObjects("Key"));
gdjs.Maze5Code.GDWizardObjects1.createFrom(runtimeScene.getObjects("Wizard"));

gdjs.Maze5Code.condition0IsTrue_0.val = false;
{
gdjs.Maze5Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDWizardObjects1Objects, gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDKeyObjects1Objects, false, runtimeScene, false);
}if (gdjs.Maze5Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Maze5Code.GDKeyObjects1 */
{gdjs.evtTools.inventory.add(runtimeScene, "Wizard", "key");
}{for(var i = 0, len = gdjs.Maze5Code.GDKeyObjects1.length ;i < len;++i) {
    gdjs.Maze5Code.GDKeyObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


}; //End of gdjs.Maze5Code.eventsList0xc402a8
gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDOrcAxeObjects3Objects = Hashtable.newFrom({"OrcAxe": gdjs.Maze5Code.GDOrcAxeObjects3});gdjs.Maze5Code.eventsList0x1046218 = function(runtimeScene) {

}; //End of gdjs.Maze5Code.eventsList0x1046218
gdjs.Maze5Code.eventsList0x890418 = function(runtimeScene) {

{

/* Reuse gdjs.Maze5Code.GDOrcWarriorObjects2 */

for(gdjs.Maze5Code.forEachIndex3 = 0;gdjs.Maze5Code.forEachIndex3 < gdjs.Maze5Code.GDOrcWarriorObjects2.length;++gdjs.Maze5Code.forEachIndex3) {
gdjs.Maze5Code.GDWizardObjects3.createFrom(runtimeScene.getObjects("Wizard"));
gdjs.Maze5Code.GDOrcAxeObjects3.length = 0;

gdjs.Maze5Code.GDOrcWarriorObjects3.length = 0;


gdjs.Maze5Code.forEachTemporary3 = gdjs.Maze5Code.GDOrcWarriorObjects2[gdjs.Maze5Code.forEachIndex3];
gdjs.Maze5Code.GDOrcWarriorObjects3.push(gdjs.Maze5Code.forEachTemporary3);
if (true) {
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDOrcAxeObjects3Objects, (( gdjs.Maze5Code.GDOrcWarriorObjects3.length === 0 ) ? 0 :gdjs.Maze5Code.GDOrcWarriorObjects3[0].getPointX("")), (( gdjs.Maze5Code.GDOrcWarriorObjects3.length === 0 ) ? 0 :gdjs.Maze5Code.GDOrcWarriorObjects3[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.Maze5Code.GDOrcAxeObjects3.length ;i < len;++i) {
    gdjs.Maze5Code.GDOrcAxeObjects3[i].addForceTowardPosition((( gdjs.Maze5Code.GDWizardObjects3.length === 0 ) ? 0 :gdjs.Maze5Code.GDWizardObjects3[0].getPointX("")), (( gdjs.Maze5Code.GDWizardObjects3.length === 0 ) ? 0 :gdjs.Maze5Code.GDWizardObjects3[0].getPointY("")), 100, 1);
}
}}
}

}


}; //End of gdjs.Maze5Code.eventsList0x890418
gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDIceballObjects2Objects = Hashtable.newFrom({"Iceball": gdjs.Maze5Code.GDIceballObjects2});gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDOrcAxeObjects2Objects = Hashtable.newFrom({"OrcAxe": gdjs.Maze5Code.GDOrcAxeObjects2});gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDFireballObjects2Objects = Hashtable.newFrom({"Fireball": gdjs.Maze5Code.GDFireballObjects2});gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDOrcAxeObjects2Objects = Hashtable.newFrom({"OrcAxe": gdjs.Maze5Code.GDOrcAxeObjects2});gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDOrcAxeObjects2Objects = Hashtable.newFrom({"OrcAxe": gdjs.Maze5Code.GDOrcAxeObjects2});gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDWizardObjects2Objects = Hashtable.newFrom({"Wizard": gdjs.Maze5Code.GDWizardObjects2});gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDIceballObjects2Objects = Hashtable.newFrom({"Iceball": gdjs.Maze5Code.GDIceballObjects2});gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDOrcWarriorObjects2Objects = Hashtable.newFrom({"OrcWarrior": gdjs.Maze5Code.GDOrcWarriorObjects2});gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDFireballObjects1Objects = Hashtable.newFrom({"Fireball": gdjs.Maze5Code.GDFireballObjects1});gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDOrcWarriorObjects1Objects = Hashtable.newFrom({"OrcWarrior": gdjs.Maze5Code.GDOrcWarriorObjects1});gdjs.Maze5Code.eventsList0xe60c38 = function(runtimeScene) {

{

gdjs.Maze5Code.GDOrcWarriorObjects2.createFrom(runtimeScene.getObjects("OrcWarrior"));

gdjs.Maze5Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Maze5Code.GDOrcWarriorObjects2.length;i<l;++i) {
    if ( gdjs.Maze5Code.GDOrcWarriorObjects2[i].timerElapsedTime("throw", 3) ) {
        gdjs.Maze5Code.condition0IsTrue_0.val = true;
        gdjs.Maze5Code.GDOrcWarriorObjects2[k] = gdjs.Maze5Code.GDOrcWarriorObjects2[i];
        ++k;
    }
}
gdjs.Maze5Code.GDOrcWarriorObjects2.length = k;}if (gdjs.Maze5Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Maze5Code.GDOrcWarriorObjects2 */
{for(var i = 0, len = gdjs.Maze5Code.GDOrcWarriorObjects2.length ;i < len;++i) {
    gdjs.Maze5Code.GDOrcWarriorObjects2[i].resetTimer("throw");
}
}
{ //Subevents
gdjs.Maze5Code.eventsList0x890418(runtimeScene);} //End of subevents
}

}


{

gdjs.Maze5Code.GDIceballObjects2.createFrom(runtimeScene.getObjects("Iceball"));
gdjs.Maze5Code.GDOrcAxeObjects2.createFrom(runtimeScene.getObjects("OrcAxe"));

gdjs.Maze5Code.condition0IsTrue_0.val = false;
{
gdjs.Maze5Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDIceballObjects2Objects, gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDOrcAxeObjects2Objects, false, runtimeScene, false);
}if (gdjs.Maze5Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Maze5Code.GDIceballObjects2 */
/* Reuse gdjs.Maze5Code.GDOrcAxeObjects2 */
{for(var i = 0, len = gdjs.Maze5Code.GDIceballObjects2.length ;i < len;++i) {
    gdjs.Maze5Code.GDIceballObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Maze5Code.GDOrcAxeObjects2.length ;i < len;++i) {
    gdjs.Maze5Code.GDOrcAxeObjects2[i].clearForces();
}
}{for(var i = 0, len = gdjs.Maze5Code.GDOrcAxeObjects2.length ;i < len;++i) {
    gdjs.Maze5Code.GDOrcAxeObjects2[i].pauseAnimation();
}
}{for(var i = 0, len = gdjs.Maze5Code.GDOrcAxeObjects2.length ;i < len;++i) {
    gdjs.Maze5Code.GDOrcAxeObjects2[i].setColor("116;255;253");
}
}}

}


{

gdjs.Maze5Code.GDFireballObjects2.createFrom(runtimeScene.getObjects("Fireball"));
gdjs.Maze5Code.GDOrcAxeObjects2.createFrom(runtimeScene.getObjects("OrcAxe"));

gdjs.Maze5Code.condition0IsTrue_0.val = false;
{
gdjs.Maze5Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDFireballObjects2Objects, gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDOrcAxeObjects2Objects, false, runtimeScene, false);
}if (gdjs.Maze5Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Maze5Code.GDFireballObjects2 */
/* Reuse gdjs.Maze5Code.GDOrcAxeObjects2 */
{for(var i = 0, len = gdjs.Maze5Code.GDOrcAxeObjects2.length ;i < len;++i) {
    gdjs.Maze5Code.GDOrcAxeObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Maze5Code.GDFireballObjects2.length ;i < len;++i) {
    gdjs.Maze5Code.GDFireballObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{



}


{

gdjs.Maze5Code.GDOrcAxeObjects2.createFrom(runtimeScene.getObjects("OrcAxe"));
gdjs.Maze5Code.GDWizardObjects2.createFrom(runtimeScene.getObjects("Wizard"));

gdjs.Maze5Code.condition0IsTrue_0.val = false;
{
gdjs.Maze5Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDOrcAxeObjects2Objects, gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDWizardObjects2Objects, false, runtimeScene, false);
}if (gdjs.Maze5Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Maze5Code.GDOrcAxeObjects2 */
/* Reuse gdjs.Maze5Code.GDWizardObjects2 */
{for(var i = 0, len = gdjs.Maze5Code.GDOrcAxeObjects2.length ;i < len;++i) {
    gdjs.Maze5Code.GDOrcAxeObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(4).sub(1);
}{for(var i = 0, len = gdjs.Maze5Code.GDWizardObjects2.length ;i < len;++i) {
    gdjs.Maze5Code.GDWizardObjects2[i].setColor("255;0;0");
}
}}

}


{

gdjs.Maze5Code.GDIceballObjects2.createFrom(runtimeScene.getObjects("Iceball"));
gdjs.Maze5Code.GDOrcWarriorObjects2.createFrom(runtimeScene.getObjects("OrcWarrior"));

gdjs.Maze5Code.condition0IsTrue_0.val = false;
{
gdjs.Maze5Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDIceballObjects2Objects, gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDOrcWarriorObjects2Objects, false, runtimeScene, false);
}if (gdjs.Maze5Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Maze5Code.GDIceballObjects2 */
{for(var i = 0, len = gdjs.Maze5Code.GDIceballObjects2.length ;i < len;++i) {
    gdjs.Maze5Code.GDIceballObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Maze5Code.GDFireballObjects1.createFrom(runtimeScene.getObjects("Fireball"));
gdjs.Maze5Code.GDOrcWarriorObjects1.createFrom(runtimeScene.getObjects("OrcWarrior"));

gdjs.Maze5Code.condition0IsTrue_0.val = false;
{
gdjs.Maze5Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDFireballObjects1Objects, gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDOrcWarriorObjects1Objects, false, runtimeScene, false);
}if (gdjs.Maze5Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Maze5Code.GDFireballObjects1 */
/* Reuse gdjs.Maze5Code.GDOrcWarriorObjects1 */
{for(var i = 0, len = gdjs.Maze5Code.GDOrcWarriorObjects1.length ;i < len;++i) {
    gdjs.Maze5Code.GDOrcWarriorObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Maze5Code.GDFireballObjects1.length ;i < len;++i) {
    gdjs.Maze5Code.GDFireballObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


}; //End of gdjs.Maze5Code.eventsList0xe60c38
gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDWizardObjects2Objects = Hashtable.newFrom({"Wizard": gdjs.Maze5Code.GDWizardObjects2});gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDHealthFlaskObjects2Objects = Hashtable.newFrom({"HealthFlask": gdjs.Maze5Code.GDHealthFlaskObjects2});gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDWizardObjects1Objects = Hashtable.newFrom({"Wizard": gdjs.Maze5Code.GDWizardObjects1});gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDBigHealthFlaskObjects1Objects = Hashtable.newFrom({"BigHealthFlask": gdjs.Maze5Code.GDBigHealthFlaskObjects1});gdjs.Maze5Code.eventsList0x1039b38 = function(runtimeScene) {

{

gdjs.Maze5Code.GDHealthFlaskObjects2.createFrom(runtimeScene.getObjects("HealthFlask"));
gdjs.Maze5Code.GDWizardObjects2.createFrom(runtimeScene.getObjects("Wizard"));

gdjs.Maze5Code.condition0IsTrue_0.val = false;
gdjs.Maze5Code.condition1IsTrue_0.val = false;
{
gdjs.Maze5Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDWizardObjects2Objects, gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDHealthFlaskObjects2Objects, false, runtimeScene, false);
}if ( gdjs.Maze5Code.condition0IsTrue_0.val ) {
{
gdjs.Maze5Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) < gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5));
}}
if (gdjs.Maze5Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Maze5Code.GDHealthFlaskObjects2 */
{runtimeScene.getGame().getVariables().getFromIndex(4).add(1);
}{for(var i = 0, len = gdjs.Maze5Code.GDHealthFlaskObjects2.length ;i < len;++i) {
    gdjs.Maze5Code.GDHealthFlaskObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Maze5Code.GDBigHealthFlaskObjects1.createFrom(runtimeScene.getObjects("BigHealthFlask"));
gdjs.Maze5Code.GDWizardObjects1.createFrom(runtimeScene.getObjects("Wizard"));

gdjs.Maze5Code.condition0IsTrue_0.val = false;
{
gdjs.Maze5Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDWizardObjects1Objects, gdjs.Maze5Code.mapOfGDgdjs_46Maze5Code_46GDBigHealthFlaskObjects1Objects, false, runtimeScene, false);
}if (gdjs.Maze5Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Maze5Code.GDBigHealthFlaskObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(5).add(1);
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)));
}{for(var i = 0, len = gdjs.Maze5Code.GDBigHealthFlaskObjects1.length ;i < len;++i) {
    gdjs.Maze5Code.GDBigHealthFlaskObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


}; //End of gdjs.Maze5Code.eventsList0x1039b38
gdjs.Maze5Code.eventsList0xb2358 = function(runtimeScene) {

{


gdjs.Maze5Code.eventsList0x6d63d8(runtimeScene);
}


{


gdjs.Maze5Code.eventsList0xb30e10(runtimeScene);
}


{


gdjs.Maze5Code.eventsList0xde3ce0(runtimeScene);
}


{


gdjs.Maze5Code.eventsList0x76e158(runtimeScene);
}


{


gdjs.Maze5Code.eventsList0x789f38(runtimeScene);
}


{


gdjs.Maze5Code.eventsList0x890008(runtimeScene);
}


{


gdjs.Maze5Code.eventsList0xc982c0(runtimeScene);
}


{


gdjs.Maze5Code.eventsList0xc402a8(runtimeScene);
}


{


gdjs.Maze5Code.eventsList0xe60c38(runtimeScene);
}


{


gdjs.Maze5Code.eventsList0x1039b38(runtimeScene);
}


}; //End of gdjs.Maze5Code.eventsList0xb2358


gdjs.Maze5Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.Maze5Code.GDWizardObjects1.length = 0;
gdjs.Maze5Code.GDWizardObjects2.length = 0;
gdjs.Maze5Code.GDWizardObjects3.length = 0;
gdjs.Maze5Code.GDFloor2Objects1.length = 0;
gdjs.Maze5Code.GDFloor2Objects2.length = 0;
gdjs.Maze5Code.GDFloor2Objects3.length = 0;
gdjs.Maze5Code.GDFPSObjects1.length = 0;
gdjs.Maze5Code.GDFPSObjects2.length = 0;
gdjs.Maze5Code.GDFPSObjects3.length = 0;
gdjs.Maze5Code.GDLifeObjects1.length = 0;
gdjs.Maze5Code.GDLifeObjects2.length = 0;
gdjs.Maze5Code.GDLifeObjects3.length = 0;
gdjs.Maze5Code.GDWallObjects1.length = 0;
gdjs.Maze5Code.GDWallObjects2.length = 0;
gdjs.Maze5Code.GDWallObjects3.length = 0;
gdjs.Maze5Code.GDParticlesObjects1.length = 0;
gdjs.Maze5Code.GDParticlesObjects2.length = 0;
gdjs.Maze5Code.GDParticlesObjects3.length = 0;
gdjs.Maze5Code.GDPoisonballObjects1.length = 0;
gdjs.Maze5Code.GDPoisonballObjects2.length = 0;
gdjs.Maze5Code.GDPoisonballObjects3.length = 0;
gdjs.Maze5Code.GDShockballObjects1.length = 0;
gdjs.Maze5Code.GDShockballObjects2.length = 0;
gdjs.Maze5Code.GDShockballObjects3.length = 0;
gdjs.Maze5Code.GDIceballObjects1.length = 0;
gdjs.Maze5Code.GDIceballObjects2.length = 0;
gdjs.Maze5Code.GDIceballObjects3.length = 0;
gdjs.Maze5Code.GDFireballObjects1.length = 0;
gdjs.Maze5Code.GDFireballObjects2.length = 0;
gdjs.Maze5Code.GDFireballObjects3.length = 0;
gdjs.Maze5Code.GDDownStairsObjects1.length = 0;
gdjs.Maze5Code.GDDownStairsObjects2.length = 0;
gdjs.Maze5Code.GDDownStairsObjects3.length = 0;
gdjs.Maze5Code.GDStairsObjects1.length = 0;
gdjs.Maze5Code.GDStairsObjects2.length = 0;
gdjs.Maze5Code.GDStairsObjects3.length = 0;
gdjs.Maze5Code.GDDoorObjects1.length = 0;
gdjs.Maze5Code.GDDoorObjects2.length = 0;
gdjs.Maze5Code.GDDoorObjects3.length = 0;
gdjs.Maze5Code.GDKeyObjects1.length = 0;
gdjs.Maze5Code.GDKeyObjects2.length = 0;
gdjs.Maze5Code.GDKeyObjects3.length = 0;
gdjs.Maze5Code.GDHealthFlaskObjects1.length = 0;
gdjs.Maze5Code.GDHealthFlaskObjects2.length = 0;
gdjs.Maze5Code.GDHealthFlaskObjects3.length = 0;
gdjs.Maze5Code.GDChortObjects1.length = 0;
gdjs.Maze5Code.GDChortObjects2.length = 0;
gdjs.Maze5Code.GDChortObjects3.length = 0;
gdjs.Maze5Code.GDBigHealthFlaskObjects1.length = 0;
gdjs.Maze5Code.GDBigHealthFlaskObjects2.length = 0;
gdjs.Maze5Code.GDBigHealthFlaskObjects3.length = 0;
gdjs.Maze5Code.GDOrcAxeObjects1.length = 0;
gdjs.Maze5Code.GDOrcAxeObjects2.length = 0;
gdjs.Maze5Code.GDOrcAxeObjects3.length = 0;
gdjs.Maze5Code.GDMapObjects1.length = 0;
gdjs.Maze5Code.GDMapObjects2.length = 0;
gdjs.Maze5Code.GDMapObjects3.length = 0;
gdjs.Maze5Code.GDDoorFrameObjects1.length = 0;
gdjs.Maze5Code.GDDoorFrameObjects2.length = 0;
gdjs.Maze5Code.GDDoorFrameObjects3.length = 0;
gdjs.Maze5Code.GDOrcWarriorObjects1.length = 0;
gdjs.Maze5Code.GDOrcWarriorObjects2.length = 0;
gdjs.Maze5Code.GDOrcWarriorObjects3.length = 0;
gdjs.Maze5Code.GDMapHelpObjects1.length = 0;
gdjs.Maze5Code.GDMapHelpObjects2.length = 0;
gdjs.Maze5Code.GDMapHelpObjects3.length = 0;
gdjs.Maze5Code.GDFindKeyObjects1.length = 0;
gdjs.Maze5Code.GDFindKeyObjects2.length = 0;
gdjs.Maze5Code.GDFindKeyObjects3.length = 0;
gdjs.Maze5Code.GDRestartGameObjects1.length = 0;
gdjs.Maze5Code.GDRestartGameObjects2.length = 0;
gdjs.Maze5Code.GDRestartGameObjects3.length = 0;
gdjs.Maze5Code.GDGameOverObjects1.length = 0;
gdjs.Maze5Code.GDGameOverObjects2.length = 0;
gdjs.Maze5Code.GDGameOverObjects3.length = 0;

gdjs.Maze5Code.eventsList0xb2358(runtimeScene);
return;
}
gdjs['Maze5Code'] = gdjs.Maze5Code;
