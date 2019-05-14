gdjs.Maze3Code = {};
gdjs.Maze3Code.forEachIndex3 = 0;

gdjs.Maze3Code.forEachObjects3 = [];

gdjs.Maze3Code.forEachTemporary3 = null;

gdjs.Maze3Code.forEachTotalCount3 = 0;

gdjs.Maze3Code.GDWizardObjects1= [];
gdjs.Maze3Code.GDWizardObjects2= [];
gdjs.Maze3Code.GDWizardObjects3= [];
gdjs.Maze3Code.GDFloor2Objects1= [];
gdjs.Maze3Code.GDFloor2Objects2= [];
gdjs.Maze3Code.GDFloor2Objects3= [];
gdjs.Maze3Code.GDFPSObjects1= [];
gdjs.Maze3Code.GDFPSObjects2= [];
gdjs.Maze3Code.GDFPSObjects3= [];
gdjs.Maze3Code.GDLifeObjects1= [];
gdjs.Maze3Code.GDLifeObjects2= [];
gdjs.Maze3Code.GDLifeObjects3= [];
gdjs.Maze3Code.GDWallObjects1= [];
gdjs.Maze3Code.GDWallObjects2= [];
gdjs.Maze3Code.GDWallObjects3= [];
gdjs.Maze3Code.GDParticlesObjects1= [];
gdjs.Maze3Code.GDParticlesObjects2= [];
gdjs.Maze3Code.GDParticlesObjects3= [];
gdjs.Maze3Code.GDPoisonballObjects1= [];
gdjs.Maze3Code.GDPoisonballObjects2= [];
gdjs.Maze3Code.GDPoisonballObjects3= [];
gdjs.Maze3Code.GDShockballObjects1= [];
gdjs.Maze3Code.GDShockballObjects2= [];
gdjs.Maze3Code.GDShockballObjects3= [];
gdjs.Maze3Code.GDIceballObjects1= [];
gdjs.Maze3Code.GDIceballObjects2= [];
gdjs.Maze3Code.GDIceballObjects3= [];
gdjs.Maze3Code.GDFireballObjects1= [];
gdjs.Maze3Code.GDFireballObjects2= [];
gdjs.Maze3Code.GDFireballObjects3= [];
gdjs.Maze3Code.GDDownStairsObjects1= [];
gdjs.Maze3Code.GDDownStairsObjects2= [];
gdjs.Maze3Code.GDDownStairsObjects3= [];
gdjs.Maze3Code.GDStairsObjects1= [];
gdjs.Maze3Code.GDStairsObjects2= [];
gdjs.Maze3Code.GDStairsObjects3= [];
gdjs.Maze3Code.GDDoorObjects1= [];
gdjs.Maze3Code.GDDoorObjects2= [];
gdjs.Maze3Code.GDDoorObjects3= [];
gdjs.Maze3Code.GDKeyObjects1= [];
gdjs.Maze3Code.GDKeyObjects2= [];
gdjs.Maze3Code.GDKeyObjects3= [];
gdjs.Maze3Code.GDHealthFlaskObjects1= [];
gdjs.Maze3Code.GDHealthFlaskObjects2= [];
gdjs.Maze3Code.GDHealthFlaskObjects3= [];
gdjs.Maze3Code.GDIceZombieObjects1= [];
gdjs.Maze3Code.GDIceZombieObjects2= [];
gdjs.Maze3Code.GDIceZombieObjects3= [];
gdjs.Maze3Code.GDBigHealthFlaskObjects1= [];
gdjs.Maze3Code.GDBigHealthFlaskObjects2= [];
gdjs.Maze3Code.GDBigHealthFlaskObjects3= [];
gdjs.Maze3Code.GDOrcAxeObjects1= [];
gdjs.Maze3Code.GDOrcAxeObjects2= [];
gdjs.Maze3Code.GDOrcAxeObjects3= [];
gdjs.Maze3Code.GDMapObjects1= [];
gdjs.Maze3Code.GDMapObjects2= [];
gdjs.Maze3Code.GDMapObjects3= [];
gdjs.Maze3Code.GDDoorFrameObjects1= [];
gdjs.Maze3Code.GDDoorFrameObjects2= [];
gdjs.Maze3Code.GDDoorFrameObjects3= [];
gdjs.Maze3Code.GDWarriorObjects1= [];
gdjs.Maze3Code.GDWarriorObjects2= [];
gdjs.Maze3Code.GDWarriorObjects3= [];
gdjs.Maze3Code.GDMapHelpObjects1= [];
gdjs.Maze3Code.GDMapHelpObjects2= [];
gdjs.Maze3Code.GDMapHelpObjects3= [];
gdjs.Maze3Code.GDFindKeyObjects1= [];
gdjs.Maze3Code.GDFindKeyObjects2= [];
gdjs.Maze3Code.GDFindKeyObjects3= [];
gdjs.Maze3Code.GDRestartGameObjects1= [];
gdjs.Maze3Code.GDRestartGameObjects2= [];
gdjs.Maze3Code.GDRestartGameObjects3= [];
gdjs.Maze3Code.GDGameOverObjects1= [];
gdjs.Maze3Code.GDGameOverObjects2= [];
gdjs.Maze3Code.GDGameOverObjects3= [];

gdjs.Maze3Code.conditionTrue_0 = {val:false};
gdjs.Maze3Code.condition0IsTrue_0 = {val:false};
gdjs.Maze3Code.condition1IsTrue_0 = {val:false};
gdjs.Maze3Code.condition2IsTrue_0 = {val:false};
gdjs.Maze3Code.condition3IsTrue_0 = {val:false};
gdjs.Maze3Code.condition4IsTrue_0 = {val:false};
gdjs.Maze3Code.conditionTrue_1 = {val:false};
gdjs.Maze3Code.condition0IsTrue_1 = {val:false};
gdjs.Maze3Code.condition1IsTrue_1 = {val:false};
gdjs.Maze3Code.condition2IsTrue_1 = {val:false};
gdjs.Maze3Code.condition3IsTrue_1 = {val:false};
gdjs.Maze3Code.condition4IsTrue_1 = {val:false};


gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDFireballObjects2Objects = Hashtable.newFrom({"Fireball": gdjs.Maze3Code.GDFireballObjects2});gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDIceballObjects2Objects = Hashtable.newFrom({"Iceball": gdjs.Maze3Code.GDIceballObjects2});gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDShockballObjects2Objects = Hashtable.newFrom({"Shockball": gdjs.Maze3Code.GDShockballObjects2});gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDPoisonballObjects2Objects = Hashtable.newFrom({"Poisonball": gdjs.Maze3Code.GDPoisonballObjects2});gdjs.Maze3Code.eventsList0xcf1c18 = function(runtimeScene) {

{

gdjs.Maze3Code.GDWizardObjects2.createFrom(runtimeScene.getObjects("Wizard"));

gdjs.Maze3Code.condition0IsTrue_0.val = false;
gdjs.Maze3Code.condition1IsTrue_0.val = false;
gdjs.Maze3Code.condition2IsTrue_0.val = false;
{
gdjs.Maze3Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Maze3Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Maze3Code.GDWizardObjects2.length;i<l;++i) {
    if ( gdjs.Maze3Code.GDWizardObjects2[i].timerElapsedTime("firerate", 1) ) {
        gdjs.Maze3Code.condition1IsTrue_0.val = true;
        gdjs.Maze3Code.GDWizardObjects2[k] = gdjs.Maze3Code.GDWizardObjects2[i];
        ++k;
    }
}
gdjs.Maze3Code.GDWizardObjects2.length = k;}if ( gdjs.Maze3Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Maze3Code.GDWizardObjects2.length;i<l;++i) {
    if ( gdjs.Maze3Code.GDWizardObjects2[i].getVariableNumber(gdjs.Maze3Code.GDWizardObjects2[i].getVariables().getFromIndex(1)) == 1 ) {
        gdjs.Maze3Code.condition2IsTrue_0.val = true;
        gdjs.Maze3Code.GDWizardObjects2[k] = gdjs.Maze3Code.GDWizardObjects2[i];
        ++k;
    }
}
gdjs.Maze3Code.GDWizardObjects2.length = k;}}
}
if (gdjs.Maze3Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Maze3Code.GDWizardObjects2 */
gdjs.Maze3Code.GDFireballObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDFireballObjects2Objects, (( gdjs.Maze3Code.GDWizardObjects2.length === 0 ) ? 0 :gdjs.Maze3Code.GDWizardObjects2[0].getPointX("hand")), (( gdjs.Maze3Code.GDWizardObjects2.length === 0 ) ? 0 :gdjs.Maze3Code.GDWizardObjects2[0].getPointY("hand")), "");
}{for(var i = 0, len = gdjs.Maze3Code.GDWizardObjects2.length ;i < len;++i) {
    gdjs.Maze3Code.GDWizardObjects2[i].resetTimer("firerate");
}
}{for(var i = 0, len = gdjs.Maze3Code.GDFireballObjects2.length ;i < len;++i) {
    gdjs.Maze3Code.GDFireballObjects2[i].addForceTowardPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), 100, 1);
}
}}

}


{

gdjs.Maze3Code.GDWizardObjects2.createFrom(runtimeScene.getObjects("Wizard"));

gdjs.Maze3Code.condition0IsTrue_0.val = false;
gdjs.Maze3Code.condition1IsTrue_0.val = false;
gdjs.Maze3Code.condition2IsTrue_0.val = false;
{
gdjs.Maze3Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Maze3Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Maze3Code.GDWizardObjects2.length;i<l;++i) {
    if ( gdjs.Maze3Code.GDWizardObjects2[i].timerElapsedTime("firerate", 1) ) {
        gdjs.Maze3Code.condition1IsTrue_0.val = true;
        gdjs.Maze3Code.GDWizardObjects2[k] = gdjs.Maze3Code.GDWizardObjects2[i];
        ++k;
    }
}
gdjs.Maze3Code.GDWizardObjects2.length = k;}if ( gdjs.Maze3Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Maze3Code.GDWizardObjects2.length;i<l;++i) {
    if ( gdjs.Maze3Code.GDWizardObjects2[i].getVariableNumber(gdjs.Maze3Code.GDWizardObjects2[i].getVariables().getFromIndex(1)) == 2 ) {
        gdjs.Maze3Code.condition2IsTrue_0.val = true;
        gdjs.Maze3Code.GDWizardObjects2[k] = gdjs.Maze3Code.GDWizardObjects2[i];
        ++k;
    }
}
gdjs.Maze3Code.GDWizardObjects2.length = k;}}
}
if (gdjs.Maze3Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Maze3Code.GDWizardObjects2 */
gdjs.Maze3Code.GDIceballObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDIceballObjects2Objects, (( gdjs.Maze3Code.GDWizardObjects2.length === 0 ) ? 0 :gdjs.Maze3Code.GDWizardObjects2[0].getPointX("hand")), (( gdjs.Maze3Code.GDWizardObjects2.length === 0 ) ? 0 :gdjs.Maze3Code.GDWizardObjects2[0].getPointY("hand")), "");
}{for(var i = 0, len = gdjs.Maze3Code.GDWizardObjects2.length ;i < len;++i) {
    gdjs.Maze3Code.GDWizardObjects2[i].resetTimer("firerate");
}
}{for(var i = 0, len = gdjs.Maze3Code.GDIceballObjects2.length ;i < len;++i) {
    gdjs.Maze3Code.GDIceballObjects2[i].addForceTowardPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), 100, 1);
}
}}

}


{

gdjs.Maze3Code.GDWizardObjects2.createFrom(runtimeScene.getObjects("Wizard"));

gdjs.Maze3Code.condition0IsTrue_0.val = false;
gdjs.Maze3Code.condition1IsTrue_0.val = false;
gdjs.Maze3Code.condition2IsTrue_0.val = false;
{
gdjs.Maze3Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Maze3Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Maze3Code.GDWizardObjects2.length;i<l;++i) {
    if ( gdjs.Maze3Code.GDWizardObjects2[i].timerElapsedTime("firerate", 1) ) {
        gdjs.Maze3Code.condition1IsTrue_0.val = true;
        gdjs.Maze3Code.GDWizardObjects2[k] = gdjs.Maze3Code.GDWizardObjects2[i];
        ++k;
    }
}
gdjs.Maze3Code.GDWizardObjects2.length = k;}if ( gdjs.Maze3Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Maze3Code.GDWizardObjects2.length;i<l;++i) {
    if ( gdjs.Maze3Code.GDWizardObjects2[i].getVariableNumber(gdjs.Maze3Code.GDWizardObjects2[i].getVariables().getFromIndex(1)) == 3 ) {
        gdjs.Maze3Code.condition2IsTrue_0.val = true;
        gdjs.Maze3Code.GDWizardObjects2[k] = gdjs.Maze3Code.GDWizardObjects2[i];
        ++k;
    }
}
gdjs.Maze3Code.GDWizardObjects2.length = k;}}
}
if (gdjs.Maze3Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Maze3Code.GDWizardObjects2 */
gdjs.Maze3Code.GDShockballObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDShockballObjects2Objects, (( gdjs.Maze3Code.GDWizardObjects2.length === 0 ) ? 0 :gdjs.Maze3Code.GDWizardObjects2[0].getPointX("hand")), (( gdjs.Maze3Code.GDWizardObjects2.length === 0 ) ? 0 :gdjs.Maze3Code.GDWizardObjects2[0].getPointY("hand")), "");
}{for(var i = 0, len = gdjs.Maze3Code.GDWizardObjects2.length ;i < len;++i) {
    gdjs.Maze3Code.GDWizardObjects2[i].resetTimer("firerate");
}
}{for(var i = 0, len = gdjs.Maze3Code.GDShockballObjects2.length ;i < len;++i) {
    gdjs.Maze3Code.GDShockballObjects2[i].addForceTowardPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), 100, 1);
}
}}

}


{

gdjs.Maze3Code.GDWizardObjects2.createFrom(runtimeScene.getObjects("Wizard"));

gdjs.Maze3Code.condition0IsTrue_0.val = false;
gdjs.Maze3Code.condition1IsTrue_0.val = false;
gdjs.Maze3Code.condition2IsTrue_0.val = false;
{
gdjs.Maze3Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Maze3Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Maze3Code.GDWizardObjects2.length;i<l;++i) {
    if ( gdjs.Maze3Code.GDWizardObjects2[i].timerElapsedTime("firerate", 1) ) {
        gdjs.Maze3Code.condition1IsTrue_0.val = true;
        gdjs.Maze3Code.GDWizardObjects2[k] = gdjs.Maze3Code.GDWizardObjects2[i];
        ++k;
    }
}
gdjs.Maze3Code.GDWizardObjects2.length = k;}if ( gdjs.Maze3Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Maze3Code.GDWizardObjects2.length;i<l;++i) {
    if ( gdjs.Maze3Code.GDWizardObjects2[i].getVariableNumber(gdjs.Maze3Code.GDWizardObjects2[i].getVariables().getFromIndex(1)) == 4 ) {
        gdjs.Maze3Code.condition2IsTrue_0.val = true;
        gdjs.Maze3Code.GDWizardObjects2[k] = gdjs.Maze3Code.GDWizardObjects2[i];
        ++k;
    }
}
gdjs.Maze3Code.GDWizardObjects2.length = k;}}
}
if (gdjs.Maze3Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Maze3Code.GDWizardObjects2 */
gdjs.Maze3Code.GDPoisonballObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDPoisonballObjects2Objects, (( gdjs.Maze3Code.GDWizardObjects2.length === 0 ) ? 0 :gdjs.Maze3Code.GDWizardObjects2[0].getPointX("hand")), (( gdjs.Maze3Code.GDWizardObjects2.length === 0 ) ? 0 :gdjs.Maze3Code.GDWizardObjects2[0].getPointY("hand")), "");
}{for(var i = 0, len = gdjs.Maze3Code.GDWizardObjects2.length ;i < len;++i) {
    gdjs.Maze3Code.GDWizardObjects2[i].resetTimer("firerate");
}
}{for(var i = 0, len = gdjs.Maze3Code.GDPoisonballObjects2.length ;i < len;++i) {
    gdjs.Maze3Code.GDPoisonballObjects2[i].addForceTowardPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), 100, 1);
}
}}

}


{


gdjs.Maze3Code.condition0IsTrue_0.val = false;
{
gdjs.Maze3Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Num1");
}if (gdjs.Maze3Code.condition0IsTrue_0.val) {
gdjs.Maze3Code.GDWizardObjects2.createFrom(runtimeScene.getObjects("Wizard"));
{for(var i = 0, len = gdjs.Maze3Code.GDWizardObjects2.length ;i < len;++i) {
    gdjs.Maze3Code.GDWizardObjects2[i].returnVariable(gdjs.Maze3Code.GDWizardObjects2[i].getVariables().getFromIndex(1)).setNumber(1);
}
}}

}


{


gdjs.Maze3Code.condition0IsTrue_0.val = false;
{
gdjs.Maze3Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Num2");
}if (gdjs.Maze3Code.condition0IsTrue_0.val) {
gdjs.Maze3Code.GDWizardObjects2.createFrom(runtimeScene.getObjects("Wizard"));
{for(var i = 0, len = gdjs.Maze3Code.GDWizardObjects2.length ;i < len;++i) {
    gdjs.Maze3Code.GDWizardObjects2[i].returnVariable(gdjs.Maze3Code.GDWizardObjects2[i].getVariables().getFromIndex(1)).setNumber(2);
}
}}

}


{


gdjs.Maze3Code.condition0IsTrue_0.val = false;
{
gdjs.Maze3Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Num3");
}if (gdjs.Maze3Code.condition0IsTrue_0.val) {
gdjs.Maze3Code.GDWizardObjects2.createFrom(runtimeScene.getObjects("Wizard"));
{for(var i = 0, len = gdjs.Maze3Code.GDWizardObjects2.length ;i < len;++i) {
    gdjs.Maze3Code.GDWizardObjects2[i].returnVariable(gdjs.Maze3Code.GDWizardObjects2[i].getVariables().getFromIndex(1)).setNumber(3);
}
}}

}


{


gdjs.Maze3Code.condition0IsTrue_0.val = false;
{
gdjs.Maze3Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Num4");
}if (gdjs.Maze3Code.condition0IsTrue_0.val) {
gdjs.Maze3Code.GDWizardObjects1.createFrom(runtimeScene.getObjects("Wizard"));
{for(var i = 0, len = gdjs.Maze3Code.GDWizardObjects1.length ;i < len;++i) {
    gdjs.Maze3Code.GDWizardObjects1[i].returnVariable(gdjs.Maze3Code.GDWizardObjects1[i].getVariables().getFromIndex(1)).setNumber(4);
}
}}

}


}; //End of gdjs.Maze3Code.eventsList0xcf1c18
gdjs.Maze3Code.eventsList0xdd2ea8 = function(runtimeScene) {

{


gdjs.Maze3Code.condition0IsTrue_0.val = false;
{
gdjs.Maze3Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if (gdjs.Maze3Code.condition0IsTrue_0.val) {
gdjs.Maze3Code.GDWizardObjects2.createFrom(runtimeScene.getObjects("Wizard"));
{for(var i = 0, len = gdjs.Maze3Code.GDWizardObjects2.length ;i < len;++i) {
    gdjs.Maze3Code.GDWizardObjects2[i].addPolarForce(180, (gdjs.RuntimeObject.getVariableNumber(gdjs.Maze3Code.GDWizardObjects2[i].getVariables().getFromIndex(2))), 0);
}
}{for(var i = 0, len = gdjs.Maze3Code.GDWizardObjects2.length ;i < len;++i) {
    gdjs.Maze3Code.GDWizardObjects2[i].setAnimationName("Run");
}
}{for(var i = 0, len = gdjs.Maze3Code.GDWizardObjects2.length ;i < len;++i) {
    gdjs.Maze3Code.GDWizardObjects2[i].returnVariable(gdjs.Maze3Code.GDWizardObjects2[i].getVariables().getFromIndex(0)).setString("left");
}
}{for(var i = 0, len = gdjs.Maze3Code.GDWizardObjects2.length ;i < len;++i) {
    gdjs.Maze3Code.GDWizardObjects2[i].flipX(true);
}
}}

}


{


gdjs.Maze3Code.condition0IsTrue_0.val = false;
{
gdjs.Maze3Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if (gdjs.Maze3Code.condition0IsTrue_0.val) {
gdjs.Maze3Code.GDWizardObjects2.createFrom(runtimeScene.getObjects("Wizard"));
{for(var i = 0, len = gdjs.Maze3Code.GDWizardObjects2.length ;i < len;++i) {
    gdjs.Maze3Code.GDWizardObjects2[i].addPolarForce(0, (gdjs.RuntimeObject.getVariableNumber(gdjs.Maze3Code.GDWizardObjects2[i].getVariables().getFromIndex(2))), 0);
}
}{for(var i = 0, len = gdjs.Maze3Code.GDWizardObjects2.length ;i < len;++i) {
    gdjs.Maze3Code.GDWizardObjects2[i].setAnimationName("Run");
}
}{for(var i = 0, len = gdjs.Maze3Code.GDWizardObjects2.length ;i < len;++i) {
    gdjs.Maze3Code.GDWizardObjects2[i].returnVariable(gdjs.Maze3Code.GDWizardObjects2[i].getVariables().getFromIndex(0)).setString("right");
}
}{for(var i = 0, len = gdjs.Maze3Code.GDWizardObjects2.length ;i < len;++i) {
    gdjs.Maze3Code.GDWizardObjects2[i].flipX(false);
}
}}

}


{


gdjs.Maze3Code.condition0IsTrue_0.val = false;
{
gdjs.Maze3Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
}if (gdjs.Maze3Code.condition0IsTrue_0.val) {
gdjs.Maze3Code.GDWizardObjects2.createFrom(runtimeScene.getObjects("Wizard"));
{for(var i = 0, len = gdjs.Maze3Code.GDWizardObjects2.length ;i < len;++i) {
    gdjs.Maze3Code.GDWizardObjects2[i].addPolarForce(270, (gdjs.RuntimeObject.getVariableNumber(gdjs.Maze3Code.GDWizardObjects2[i].getVariables().getFromIndex(2))), 0);
}
}{for(var i = 0, len = gdjs.Maze3Code.GDWizardObjects2.length ;i < len;++i) {
    gdjs.Maze3Code.GDWizardObjects2[i].setAnimationName("Run");
}
}}

}


{


gdjs.Maze3Code.condition0IsTrue_0.val = false;
{
gdjs.Maze3Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}if (gdjs.Maze3Code.condition0IsTrue_0.val) {
gdjs.Maze3Code.GDWizardObjects2.createFrom(runtimeScene.getObjects("Wizard"));
{for(var i = 0, len = gdjs.Maze3Code.GDWizardObjects2.length ;i < len;++i) {
    gdjs.Maze3Code.GDWizardObjects2[i].addPolarForce(90, (gdjs.RuntimeObject.getVariableNumber(gdjs.Maze3Code.GDWizardObjects2[i].getVariables().getFromIndex(2))), 0);
}
}{for(var i = 0, len = gdjs.Maze3Code.GDWizardObjects2.length ;i < len;++i) {
    gdjs.Maze3Code.GDWizardObjects2[i].setAnimationName("Run");
}
}}

}


{


gdjs.Maze3Code.condition0IsTrue_0.val = false;
{
gdjs.Maze3Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
}if (gdjs.Maze3Code.condition0IsTrue_0.val) {
gdjs.Maze3Code.GDWizardObjects2.createFrom(runtimeScene.getObjects("Wizard"));
{for(var i = 0, len = gdjs.Maze3Code.GDWizardObjects2.length ;i < len;++i) {
    gdjs.Maze3Code.GDWizardObjects2[i].returnVariable(gdjs.Maze3Code.GDWizardObjects2[i].getVariables().getFromIndex(2)).setNumber(80);
}
}{for(var i = 0, len = gdjs.Maze3Code.GDWizardObjects2.length ;i < len;++i) {
    gdjs.Maze3Code.GDWizardObjects2[i].setAnimationSpeedScale(1.5);
}
}}

}


{


gdjs.Maze3Code.condition0IsTrue_0.val = false;
{
gdjs.Maze3Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
}if (gdjs.Maze3Code.condition0IsTrue_0.val) {
gdjs.Maze3Code.GDWizardObjects2.createFrom(runtimeScene.getObjects("Wizard"));
{for(var i = 0, len = gdjs.Maze3Code.GDWizardObjects2.length ;i < len;++i) {
    gdjs.Maze3Code.GDWizardObjects2[i].returnVariable(gdjs.Maze3Code.GDWizardObjects2[i].getVariables().getFromIndex(2)).setNumber(50);
}
}{for(var i = 0, len = gdjs.Maze3Code.GDWizardObjects2.length ;i < len;++i) {
    gdjs.Maze3Code.GDWizardObjects2[i].setAnimationSpeedScale(1);
}
}}

}


{


gdjs.Maze3Code.condition0IsTrue_0.val = false;
{
{gdjs.Maze3Code.conditionTrue_1 = gdjs.Maze3Code.condition0IsTrue_0;
gdjs.Maze3Code.condition0IsTrue_1.val = false;
gdjs.Maze3Code.condition1IsTrue_1.val = false;
gdjs.Maze3Code.condition2IsTrue_1.val = false;
gdjs.Maze3Code.condition3IsTrue_1.val = false;
{
gdjs.Maze3Code.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "w");
if( gdjs.Maze3Code.condition0IsTrue_1.val ) {
    gdjs.Maze3Code.conditionTrue_1.val = true;
}
}
{
gdjs.Maze3Code.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "s");
if( gdjs.Maze3Code.condition1IsTrue_1.val ) {
    gdjs.Maze3Code.conditionTrue_1.val = true;
}
}
{
gdjs.Maze3Code.condition2IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "d");
if( gdjs.Maze3Code.condition2IsTrue_1.val ) {
    gdjs.Maze3Code.conditionTrue_1.val = true;
}
}
{
gdjs.Maze3Code.condition3IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "a");
if( gdjs.Maze3Code.condition3IsTrue_1.val ) {
    gdjs.Maze3Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Maze3Code.condition0IsTrue_0.val) {
gdjs.Maze3Code.GDWizardObjects2.createFrom(runtimeScene.getObjects("Wizard"));
{for(var i = 0, len = gdjs.Maze3Code.GDWizardObjects2.length ;i < len;++i) {
    gdjs.Maze3Code.GDWizardObjects2[i].setAnimationName("Idle");
}
}}

}


{


{
gdjs.Maze3Code.GDWizardObjects2.createFrom(runtimeScene.getObjects("Wizard"));
{for(var i = 0, len = gdjs.Maze3Code.GDWizardObjects2.length ;i < len;++i) {
    gdjs.Maze3Code.GDWizardObjects2[i].setColor("255;255;255");
}
}}

}


{


gdjs.Maze3Code.condition0IsTrue_0.val = false;
{
gdjs.Maze3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 0;
}if (gdjs.Maze3Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "DeathScreen", true);
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(3);
}}

}


{


gdjs.Maze3Code.eventsList0xcf1c18(runtimeScene);
}


}; //End of gdjs.Maze3Code.eventsList0xdd2ea8
gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDFireballObjects2Objects = Hashtable.newFrom({"Fireball": gdjs.Maze3Code.GDFireballObjects2});gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDWallObjects2Objects = Hashtable.newFrom({"Wall": gdjs.Maze3Code.GDWallObjects2});gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDIceballObjects2Objects = Hashtable.newFrom({"Iceball": gdjs.Maze3Code.GDIceballObjects2});gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDWallObjects2Objects = Hashtable.newFrom({"Wall": gdjs.Maze3Code.GDWallObjects2});gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDShockballObjects2Objects = Hashtable.newFrom({"Shockball": gdjs.Maze3Code.GDShockballObjects2});gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDWallObjects2Objects = Hashtable.newFrom({"Wall": gdjs.Maze3Code.GDWallObjects2});gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDPoisonballObjects2Objects = Hashtable.newFrom({"Poisonball": gdjs.Maze3Code.GDPoisonballObjects2});gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDWallObjects2Objects = Hashtable.newFrom({"Wall": gdjs.Maze3Code.GDWallObjects2});gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDOrcAxeObjects2Objects = Hashtable.newFrom({"OrcAxe": gdjs.Maze3Code.GDOrcAxeObjects2});gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDWallObjects2Objects = Hashtable.newFrom({"Wall": gdjs.Maze3Code.GDWallObjects2});gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDWallObjects1Objects = Hashtable.newFrom({"Wall": gdjs.Maze3Code.GDWallObjects1});gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDWallObjects1Objects = Hashtable.newFrom({"Wall": gdjs.Maze3Code.GDWallObjects1});gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDWallObjects1Objects = Hashtable.newFrom({"Wall": gdjs.Maze3Code.GDWallObjects1});gdjs.Maze3Code.eventsList0xdc08a8 = function(runtimeScene) {

{

gdjs.Maze3Code.GDFireballObjects2.createFrom(runtimeScene.getObjects("Fireball"));
gdjs.Maze3Code.GDWallObjects2.createFrom(runtimeScene.getObjects("Wall"));

gdjs.Maze3Code.condition0IsTrue_0.val = false;
{
gdjs.Maze3Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDFireballObjects2Objects, gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDWallObjects2Objects, false, runtimeScene, false);
}if (gdjs.Maze3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Maze3Code.GDFireballObjects2 */
{for(var i = 0, len = gdjs.Maze3Code.GDFireballObjects2.length ;i < len;++i) {
    gdjs.Maze3Code.GDFireballObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Maze3Code.GDIceballObjects2.createFrom(runtimeScene.getObjects("Iceball"));
gdjs.Maze3Code.GDWallObjects2.createFrom(runtimeScene.getObjects("Wall"));

gdjs.Maze3Code.condition0IsTrue_0.val = false;
{
gdjs.Maze3Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDIceballObjects2Objects, gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDWallObjects2Objects, false, runtimeScene, false);
}if (gdjs.Maze3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Maze3Code.GDIceballObjects2 */
{for(var i = 0, len = gdjs.Maze3Code.GDIceballObjects2.length ;i < len;++i) {
    gdjs.Maze3Code.GDIceballObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Maze3Code.GDShockballObjects2.createFrom(runtimeScene.getObjects("Shockball"));
gdjs.Maze3Code.GDWallObjects2.createFrom(runtimeScene.getObjects("Wall"));

gdjs.Maze3Code.condition0IsTrue_0.val = false;
{
gdjs.Maze3Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDShockballObjects2Objects, gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDWallObjects2Objects, false, runtimeScene, false);
}if (gdjs.Maze3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Maze3Code.GDShockballObjects2 */
{for(var i = 0, len = gdjs.Maze3Code.GDShockballObjects2.length ;i < len;++i) {
    gdjs.Maze3Code.GDShockballObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Maze3Code.GDPoisonballObjects2.createFrom(runtimeScene.getObjects("Poisonball"));
gdjs.Maze3Code.GDWallObjects2.createFrom(runtimeScene.getObjects("Wall"));

gdjs.Maze3Code.condition0IsTrue_0.val = false;
{
gdjs.Maze3Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDPoisonballObjects2Objects, gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDWallObjects2Objects, false, runtimeScene, false);
}if (gdjs.Maze3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Maze3Code.GDPoisonballObjects2 */
{for(var i = 0, len = gdjs.Maze3Code.GDPoisonballObjects2.length ;i < len;++i) {
    gdjs.Maze3Code.GDPoisonballObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Maze3Code.GDOrcAxeObjects2.createFrom(runtimeScene.getObjects("OrcAxe"));
gdjs.Maze3Code.GDWallObjects2.createFrom(runtimeScene.getObjects("Wall"));

gdjs.Maze3Code.condition0IsTrue_0.val = false;
{
gdjs.Maze3Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDOrcAxeObjects2Objects, gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDWallObjects2Objects, false, runtimeScene, false);
}if (gdjs.Maze3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Maze3Code.GDOrcAxeObjects2 */
{for(var i = 0, len = gdjs.Maze3Code.GDOrcAxeObjects2.length ;i < len;++i) {
    gdjs.Maze3Code.GDOrcAxeObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{


{
gdjs.Maze3Code.GDIceZombieObjects1.createFrom(runtimeScene.getObjects("IceZombie"));
gdjs.Maze3Code.GDWallObjects1.createFrom(runtimeScene.getObjects("Wall"));
gdjs.Maze3Code.GDWarriorObjects1.createFrom(runtimeScene.getObjects("Warrior"));
gdjs.Maze3Code.GDWizardObjects1.createFrom(runtimeScene.getObjects("Wizard"));
{for(var i = 0, len = gdjs.Maze3Code.GDWizardObjects1.length ;i < len;++i) {
    gdjs.Maze3Code.GDWizardObjects1[i].separateFromObjectsList(gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDWallObjects1Objects, true);
}
}{for(var i = 0, len = gdjs.Maze3Code.GDIceZombieObjects1.length ;i < len;++i) {
    gdjs.Maze3Code.GDIceZombieObjects1[i].separateFromObjectsList(gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDWallObjects1Objects, true);
}
}{for(var i = 0, len = gdjs.Maze3Code.GDWarriorObjects1.length ;i < len;++i) {
    gdjs.Maze3Code.GDWarriorObjects1[i].separateFromObjectsList(gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDWallObjects1Objects, true);
}
}}

}


}; //End of gdjs.Maze3Code.eventsList0xdc08a8
gdjs.Maze3Code.eventsList0x78b9e0 = function(runtimeScene) {

{


{
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 3, "", 0);
}}

}


{


gdjs.Maze3Code.condition0IsTrue_0.val = false;
gdjs.Maze3Code.condition1IsTrue_0.val = false;
{
gdjs.Maze3Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "m");
}if ( gdjs.Maze3Code.condition0IsTrue_0.val ) {
{
gdjs.Maze3Code.condition1IsTrue_0.val = gdjs.evtTools.inventory.has(runtimeScene, "Wizard", "map");
}}
if (gdjs.Maze3Code.condition1IsTrue_0.val) {
gdjs.Maze3Code.GDStairsObjects2.createFrom(runtimeScene.getObjects("Stairs"));
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 0.5, "", 0);
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Maze3Code.GDStairsObjects2.length !== 0 ? gdjs.Maze3Code.GDStairsObjects2[0] : null), false, "", 0);
}}

}


{


{
gdjs.Maze3Code.GDWizardObjects1.createFrom(runtimeScene.getObjects("Wizard"));
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Maze3Code.GDWizardObjects1.length !== 0 ? gdjs.Maze3Code.GDWizardObjects1[0] : null), false, "", 0);
}}

}


}; //End of gdjs.Maze3Code.eventsList0x78b9e0
gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDWizardObjects2Objects = Hashtable.newFrom({"Wizard": gdjs.Maze3Code.GDWizardObjects2});gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDStairsObjects2Objects = Hashtable.newFrom({"Stairs": gdjs.Maze3Code.GDStairsObjects2});gdjs.Maze3Code.eventsList0xdbff98 = function(runtimeScene) {

{

gdjs.Maze3Code.GDStairsObjects2.createFrom(runtimeScene.getObjects("Stairs"));
gdjs.Maze3Code.GDWizardObjects2.createFrom(runtimeScene.getObjects("Wizard"));

gdjs.Maze3Code.condition0IsTrue_0.val = false;
{
gdjs.Maze3Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDWizardObjects2Objects, gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDStairsObjects2Objects, false, runtimeScene, false);
}if (gdjs.Maze3Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Maze4", true);
}{runtimeScene.getGame().getVariables().getFromIndex(2).add(1);
}{gdjs.evtTools.inventory.remove(runtimeScene, "Wizard", "map");
}{gdjs.evtTools.inventory.remove(runtimeScene, "Wizard", "key");
}}

}


{


gdjs.Maze3Code.condition0IsTrue_0.val = false;
{
gdjs.Maze3Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Escape");
}if (gdjs.Maze3Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "PauseScreen");
}}

}


{


gdjs.Maze3Code.condition0IsTrue_0.val = false;
gdjs.Maze3Code.condition1IsTrue_0.val = false;
{
gdjs.Maze3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
}if ( gdjs.Maze3Code.condition0IsTrue_0.val ) {
{
gdjs.Maze3Code.condition1IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Numpad1");
}}
if (gdjs.Maze3Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Maze1", false);
}}

}


{


gdjs.Maze3Code.condition0IsTrue_0.val = false;
gdjs.Maze3Code.condition1IsTrue_0.val = false;
{
gdjs.Maze3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
}if ( gdjs.Maze3Code.condition0IsTrue_0.val ) {
{
gdjs.Maze3Code.condition1IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Numpad2");
}}
if (gdjs.Maze3Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Maze2", false);
}}

}


{


gdjs.Maze3Code.condition0IsTrue_0.val = false;
gdjs.Maze3Code.condition1IsTrue_0.val = false;
{
gdjs.Maze3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
}if ( gdjs.Maze3Code.condition0IsTrue_0.val ) {
{
gdjs.Maze3Code.condition1IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Numpad3");
}}
if (gdjs.Maze3Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Maze3", false);
}}

}


{


gdjs.Maze3Code.condition0IsTrue_0.val = false;
gdjs.Maze3Code.condition1IsTrue_0.val = false;
{
gdjs.Maze3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
}if ( gdjs.Maze3Code.condition0IsTrue_0.val ) {
{
gdjs.Maze3Code.condition1IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Numpad4");
}}
if (gdjs.Maze3Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Maze4", false);
}}

}


{


gdjs.Maze3Code.condition0IsTrue_0.val = false;
gdjs.Maze3Code.condition1IsTrue_0.val = false;
{
gdjs.Maze3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
}if ( gdjs.Maze3Code.condition0IsTrue_0.val ) {
{
gdjs.Maze3Code.condition1IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Numpad5");
}}
if (gdjs.Maze3Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Maze5", false);
}}

}


{


gdjs.Maze3Code.condition0IsTrue_0.val = false;
gdjs.Maze3Code.condition1IsTrue_0.val = false;
{
gdjs.Maze3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
}if ( gdjs.Maze3Code.condition0IsTrue_0.val ) {
{
gdjs.Maze3Code.condition1IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Numpad6");
}}
if (gdjs.Maze3Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Maze6", false);
}}

}


{


gdjs.Maze3Code.condition0IsTrue_0.val = false;
gdjs.Maze3Code.condition1IsTrue_0.val = false;
{
gdjs.Maze3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
}if ( gdjs.Maze3Code.condition0IsTrue_0.val ) {
{
gdjs.Maze3Code.condition1IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Numpad7");
}}
if (gdjs.Maze3Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Maze7", false);
}}

}


{


gdjs.Maze3Code.condition0IsTrue_0.val = false;
gdjs.Maze3Code.condition1IsTrue_0.val = false;
{
gdjs.Maze3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
}if ( gdjs.Maze3Code.condition0IsTrue_0.val ) {
{
gdjs.Maze3Code.condition1IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Numpad8");
}}
if (gdjs.Maze3Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Maze8", false);
}}

}


{


gdjs.Maze3Code.condition0IsTrue_0.val = false;
gdjs.Maze3Code.condition1IsTrue_0.val = false;
{
gdjs.Maze3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
}if ( gdjs.Maze3Code.condition0IsTrue_0.val ) {
{
gdjs.Maze3Code.condition1IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Numpad9");
}}
if (gdjs.Maze3Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Maze9", false);
}}

}


{


gdjs.Maze3Code.condition0IsTrue_0.val = false;
gdjs.Maze3Code.condition1IsTrue_0.val = false;
{
gdjs.Maze3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
}if ( gdjs.Maze3Code.condition0IsTrue_0.val ) {
{
gdjs.Maze3Code.condition1IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Numpad0");
}}
if (gdjs.Maze3Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Maze10", false);
}}

}


{


{
}

}


}; //End of gdjs.Maze3Code.eventsList0xdbff98
gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDWizardObjects2Objects = Hashtable.newFrom({"Wizard": gdjs.Maze3Code.GDWizardObjects2});gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDMapHelpObjects2Objects = Hashtable.newFrom({"MapHelp": gdjs.Maze3Code.GDMapHelpObjects2});gdjs.Maze3Code.eventsList0x79c900 = function(runtimeScene) {

{


{
gdjs.Maze3Code.GDFPSObjects2.createFrom(runtimeScene.getObjects("FPS"));
gdjs.Maze3Code.GDLifeObjects2.createFrom(runtimeScene.getObjects("Life"));
{for(var i = 0, len = gdjs.Maze3Code.GDLifeObjects2.length ;i < len;++i) {
    gdjs.Maze3Code.GDLifeObjects2[i].setString("Life: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(4)));
}
}{for(var i = 0, len = gdjs.Maze3Code.GDFPSObjects2.length ;i < len;++i) {
    gdjs.Maze3Code.GDFPSObjects2[i].setString("FPS: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(Math.round(1 / gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}}

}


{


gdjs.Maze3Code.condition0IsTrue_0.val = false;
{
gdjs.Maze3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 0;
}if (gdjs.Maze3Code.condition0IsTrue_0.val) {
gdjs.Maze3Code.GDFPSObjects2.createFrom(runtimeScene.getObjects("FPS"));
{for(var i = 0, len = gdjs.Maze3Code.GDFPSObjects2.length ;i < len;++i) {
    gdjs.Maze3Code.GDFPSObjects2[i].setOpacity(0);
}
}}

}


{


gdjs.Maze3Code.condition0IsTrue_0.val = false;
{
{gdjs.Maze3Code.conditionTrue_1 = gdjs.Maze3Code.condition0IsTrue_0;
gdjs.Maze3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7983060);
}
}if (gdjs.Maze3Code.condition0IsTrue_0.val) {
gdjs.Maze3Code.GDFindKeyObjects2.createFrom(runtimeScene.getObjects("FindKey"));
gdjs.Maze3Code.GDGameOverObjects2.createFrom(runtimeScene.getObjects("GameOver"));
gdjs.Maze3Code.GDMapHelpObjects2.createFrom(runtimeScene.getObjects("MapHelp"));
gdjs.Maze3Code.GDRestartGameObjects2.createFrom(runtimeScene.getObjects("RestartGame"));
{for(var i = 0, len = gdjs.Maze3Code.GDFindKeyObjects2.length ;i < len;++i) {
    gdjs.Maze3Code.GDFindKeyObjects2[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Maze3Code.GDMapHelpObjects2.length ;i < len;++i) {
    gdjs.Maze3Code.GDMapHelpObjects2[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Maze3Code.GDGameOverObjects2.length ;i < len;++i) {
    gdjs.Maze3Code.GDGameOverObjects2[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Maze3Code.GDRestartGameObjects2.length ;i < len;++i) {
    gdjs.Maze3Code.GDRestartGameObjects2[i].setOpacity(0);
}
}}

}


{


gdjs.Maze3Code.condition0IsTrue_0.val = false;
{
gdjs.Maze3Code.condition0IsTrue_0.val = gdjs.evtTools.inventory.has(runtimeScene, "Wizard", "map");
}if (gdjs.Maze3Code.condition0IsTrue_0.val) {
gdjs.Maze3Code.GDMapHelpObjects2.createFrom(runtimeScene.getObjects("MapHelp"));
{for(var i = 0, len = gdjs.Maze3Code.GDMapHelpObjects2.length ;i < len;++i) {
    gdjs.Maze3Code.GDMapHelpObjects2[i].setOpacity(0);
}
}}

}


{

gdjs.Maze3Code.GDMapHelpObjects2.createFrom(runtimeScene.getObjects("MapHelp"));
gdjs.Maze3Code.GDWizardObjects2.createFrom(runtimeScene.getObjects("Wizard"));

gdjs.Maze3Code.condition0IsTrue_0.val = false;
gdjs.Maze3Code.condition1IsTrue_0.val = false;
{
gdjs.Maze3Code.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDWizardObjects2Objects, gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDMapHelpObjects2Objects, 50, false);
}if ( gdjs.Maze3Code.condition0IsTrue_0.val ) {
{
gdjs.Maze3Code.condition1IsTrue_0.val = !(gdjs.evtTools.inventory.has(runtimeScene, "Wizard", "map"));
}}
if (gdjs.Maze3Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Maze3Code.GDMapHelpObjects2 */
{for(var i = 0, len = gdjs.Maze3Code.GDMapHelpObjects2.length ;i < len;++i) {
    gdjs.Maze3Code.GDMapHelpObjects2[i].setOpacity(255);
}
}}

}


{


gdjs.Maze3Code.condition0IsTrue_0.val = false;
{
gdjs.Maze3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
}if (gdjs.Maze3Code.condition0IsTrue_0.val) {
gdjs.Maze3Code.GDFPSObjects2.createFrom(runtimeScene.getObjects("FPS"));
{for(var i = 0, len = gdjs.Maze3Code.GDFPSObjects2.length ;i < len;++i) {
    gdjs.Maze3Code.GDFPSObjects2[i].setOpacity(255);
}
}}

}


{


gdjs.Maze3Code.condition0IsTrue_0.val = false;
{
gdjs.Maze3Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F1");
}if (gdjs.Maze3Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(100);
}}

}


{


gdjs.Maze3Code.condition0IsTrue_0.val = false;
{
gdjs.Maze3Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F2");
}if (gdjs.Maze3Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(5);
}}

}


}; //End of gdjs.Maze3Code.eventsList0x79c900
gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDFireballObjects2Objects = Hashtable.newFrom({"Fireball": gdjs.Maze3Code.GDFireballObjects2});gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDIceZombieObjects2Objects = Hashtable.newFrom({"IceZombie": gdjs.Maze3Code.GDIceZombieObjects2});gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDIceballObjects2Objects = Hashtable.newFrom({"Iceball": gdjs.Maze3Code.GDIceballObjects2});gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDIceZombieObjects2Objects = Hashtable.newFrom({"IceZombie": gdjs.Maze3Code.GDIceZombieObjects2});gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDPoisonballObjects2Objects = Hashtable.newFrom({"Poisonball": gdjs.Maze3Code.GDPoisonballObjects2});gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDIceZombieObjects2Objects = Hashtable.newFrom({"IceZombie": gdjs.Maze3Code.GDIceZombieObjects2});gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDShockballObjects2Objects = Hashtable.newFrom({"Shockball": gdjs.Maze3Code.GDShockballObjects2});gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDIceZombieObjects2Objects = Hashtable.newFrom({"IceZombie": gdjs.Maze3Code.GDIceZombieObjects2});gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDWizardObjects2Objects = Hashtable.newFrom({"Wizard": gdjs.Maze3Code.GDWizardObjects2});gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDIceZombieObjects2Objects = Hashtable.newFrom({"IceZombie": gdjs.Maze3Code.GDIceZombieObjects2});gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDWizardObjects1Objects = Hashtable.newFrom({"Wizard": gdjs.Maze3Code.GDWizardObjects1});gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDIceZombieObjects1Objects = Hashtable.newFrom({"IceZombie": gdjs.Maze3Code.GDIceZombieObjects1});gdjs.Maze3Code.eventsList0xe3d7d8 = function(runtimeScene) {

{

gdjs.Maze3Code.GDFireballObjects2.createFrom(runtimeScene.getObjects("Fireball"));
gdjs.Maze3Code.GDIceZombieObjects2.createFrom(runtimeScene.getObjects("IceZombie"));

gdjs.Maze3Code.condition0IsTrue_0.val = false;
{
gdjs.Maze3Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDFireballObjects2Objects, gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDIceZombieObjects2Objects, false, runtimeScene, false);
}if (gdjs.Maze3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Maze3Code.GDFireballObjects2 */
/* Reuse gdjs.Maze3Code.GDIceZombieObjects2 */
{for(var i = 0, len = gdjs.Maze3Code.GDIceZombieObjects2.length ;i < len;++i) {
    gdjs.Maze3Code.GDIceZombieObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Maze3Code.GDFireballObjects2.length ;i < len;++i) {
    gdjs.Maze3Code.GDFireballObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Maze3Code.GDIceZombieObjects2.createFrom(runtimeScene.getObjects("IceZombie"));
gdjs.Maze3Code.GDIceballObjects2.createFrom(runtimeScene.getObjects("Iceball"));

gdjs.Maze3Code.condition0IsTrue_0.val = false;
{
gdjs.Maze3Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDIceballObjects2Objects, gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDIceZombieObjects2Objects, false, runtimeScene, false);
}if (gdjs.Maze3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Maze3Code.GDIceballObjects2 */
{for(var i = 0, len = gdjs.Maze3Code.GDIceballObjects2.length ;i < len;++i) {
    gdjs.Maze3Code.GDIceballObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Maze3Code.GDIceZombieObjects2.createFrom(runtimeScene.getObjects("IceZombie"));
gdjs.Maze3Code.GDPoisonballObjects2.createFrom(runtimeScene.getObjects("Poisonball"));

gdjs.Maze3Code.condition0IsTrue_0.val = false;
{
gdjs.Maze3Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDPoisonballObjects2Objects, gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDIceZombieObjects2Objects, false, runtimeScene, false);
}if (gdjs.Maze3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Maze3Code.GDPoisonballObjects2 */
{for(var i = 0, len = gdjs.Maze3Code.GDPoisonballObjects2.length ;i < len;++i) {
    gdjs.Maze3Code.GDPoisonballObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Maze3Code.GDIceZombieObjects2.createFrom(runtimeScene.getObjects("IceZombie"));
gdjs.Maze3Code.GDShockballObjects2.createFrom(runtimeScene.getObjects("Shockball"));

gdjs.Maze3Code.condition0IsTrue_0.val = false;
{
gdjs.Maze3Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDShockballObjects2Objects, gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDIceZombieObjects2Objects, false, runtimeScene, false);
}if (gdjs.Maze3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Maze3Code.GDShockballObjects2 */
{for(var i = 0, len = gdjs.Maze3Code.GDShockballObjects2.length ;i < len;++i) {
    gdjs.Maze3Code.GDShockballObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Maze3Code.GDIceZombieObjects2.createFrom(runtimeScene.getObjects("IceZombie"));
gdjs.Maze3Code.GDWizardObjects2.createFrom(runtimeScene.getObjects("Wizard"));

gdjs.Maze3Code.condition0IsTrue_0.val = false;
{
gdjs.Maze3Code.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDWizardObjects2Objects, gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDIceZombieObjects2Objects, 100, false);
}if (gdjs.Maze3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Maze3Code.GDIceZombieObjects2 */
/* Reuse gdjs.Maze3Code.GDWizardObjects2 */
{for(var i = 0, len = gdjs.Maze3Code.GDIceZombieObjects2.length ;i < len;++i) {
    gdjs.Maze3Code.GDIceZombieObjects2[i].getBehavior("Pathfinding").moveTo(runtimeScene, (( gdjs.Maze3Code.GDWizardObjects2.length === 0 ) ? 0 :gdjs.Maze3Code.GDWizardObjects2[0].getPointX("")), (( gdjs.Maze3Code.GDWizardObjects2.length === 0 ) ? 0 :gdjs.Maze3Code.GDWizardObjects2[0].getPointY("")));
}
}{for(var i = 0, len = gdjs.Maze3Code.GDIceZombieObjects2.length ;i < len;++i) {
    gdjs.Maze3Code.GDIceZombieObjects2[i].setAnimationName("Running");
}
}}

}


{

gdjs.Maze3Code.GDIceZombieObjects1.createFrom(runtimeScene.getObjects("IceZombie"));
gdjs.Maze3Code.GDWizardObjects1.createFrom(runtimeScene.getObjects("Wizard"));

gdjs.Maze3Code.condition0IsTrue_0.val = false;
{
gdjs.Maze3Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDWizardObjects1Objects, gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDIceZombieObjects1Objects, false, runtimeScene, true);
}if (gdjs.Maze3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Maze3Code.GDIceZombieObjects1 */
/* Reuse gdjs.Maze3Code.GDWizardObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(4).sub(1);
}{for(var i = 0, len = gdjs.Maze3Code.GDIceZombieObjects1.length ;i < len;++i) {
    gdjs.Maze3Code.GDIceZombieObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Maze3Code.GDWizardObjects1.length ;i < len;++i) {
    gdjs.Maze3Code.GDWizardObjects1[i].setColor("255;0;0");
}
}}

}


}; //End of gdjs.Maze3Code.eventsList0xe3d7d8
gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDWizardObjects2Objects = Hashtable.newFrom({"Wizard": gdjs.Maze3Code.GDWizardObjects2});gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDDoorObjects2Objects = Hashtable.newFrom({"Door": gdjs.Maze3Code.GDDoorObjects2});gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDWizardObjects2Objects = Hashtable.newFrom({"Wizard": gdjs.Maze3Code.GDWizardObjects2});gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDDoorObjects2Objects = Hashtable.newFrom({"Door": gdjs.Maze3Code.GDDoorObjects2});gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDDoorObjects1Objects = Hashtable.newFrom({"Door": gdjs.Maze3Code.GDDoorObjects1});gdjs.Maze3Code.eventsList0xde4cb0 = function(runtimeScene) {

{

gdjs.Maze3Code.GDDoorObjects2.createFrom(runtimeScene.getObjects("Door"));
gdjs.Maze3Code.GDWizardObjects2.createFrom(runtimeScene.getObjects("Wizard"));

gdjs.Maze3Code.condition0IsTrue_0.val = false;
gdjs.Maze3Code.condition1IsTrue_0.val = false;
{
gdjs.Maze3Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDWizardObjects2Objects, gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDDoorObjects2Objects, false, runtimeScene, false);
}if ( gdjs.Maze3Code.condition0IsTrue_0.val ) {
{
gdjs.Maze3Code.condition1IsTrue_0.val = gdjs.evtTools.inventory.has(runtimeScene, "Wizard", "key");
}}
if (gdjs.Maze3Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Maze3Code.GDDoorObjects2 */
{for(var i = 0, len = gdjs.Maze3Code.GDDoorObjects2.length ;i < len;++i) {
    gdjs.Maze3Code.GDDoorObjects2[i].setAnimationName("Open");
}
}}

}


{

gdjs.Maze3Code.GDDoorObjects2.createFrom(runtimeScene.getObjects("Door"));
gdjs.Maze3Code.GDWizardObjects2.createFrom(runtimeScene.getObjects("Wizard"));

gdjs.Maze3Code.condition0IsTrue_0.val = false;
gdjs.Maze3Code.condition1IsTrue_0.val = false;
{
gdjs.Maze3Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDWizardObjects2Objects, gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDDoorObjects2Objects, false, runtimeScene, false);
}if ( gdjs.Maze3Code.condition0IsTrue_0.val ) {
{
gdjs.Maze3Code.condition1IsTrue_0.val = !(gdjs.evtTools.inventory.has(runtimeScene, "Wizard", "key"));
}}
if (gdjs.Maze3Code.condition1IsTrue_0.val) {
gdjs.Maze3Code.GDFindKeyObjects2.createFrom(runtimeScene.getObjects("FindKey"));
{for(var i = 0, len = gdjs.Maze3Code.GDFindKeyObjects2.length ;i < len;++i) {
    gdjs.Maze3Code.GDFindKeyObjects2[i].setOpacity(255);
}
}}

}


{

gdjs.Maze3Code.GDDoorObjects1.createFrom(runtimeScene.getObjects("Door"));

gdjs.Maze3Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Maze3Code.GDDoorObjects1.length;i<l;++i) {
    if ( gdjs.Maze3Code.GDDoorObjects1[i].isCurrentAnimationName("Closed") ) {
        gdjs.Maze3Code.condition0IsTrue_0.val = true;
        gdjs.Maze3Code.GDDoorObjects1[k] = gdjs.Maze3Code.GDDoorObjects1[i];
        ++k;
    }
}
gdjs.Maze3Code.GDDoorObjects1.length = k;}if (gdjs.Maze3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Maze3Code.GDDoorObjects1 */
gdjs.Maze3Code.GDWizardObjects1.createFrom(runtimeScene.getObjects("Wizard"));
{for(var i = 0, len = gdjs.Maze3Code.GDWizardObjects1.length ;i < len;++i) {
    gdjs.Maze3Code.GDWizardObjects1[i].separateFromObjectsList(gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDDoorObjects1Objects, true);
}
}}

}


}; //End of gdjs.Maze3Code.eventsList0xde4cb0
gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDWizardObjects2Objects = Hashtable.newFrom({"Wizard": gdjs.Maze3Code.GDWizardObjects2});gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDMapObjects2Objects = Hashtable.newFrom({"Map": gdjs.Maze3Code.GDMapObjects2});gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDWizardObjects1Objects = Hashtable.newFrom({"Wizard": gdjs.Maze3Code.GDWizardObjects1});gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDKeyObjects1Objects = Hashtable.newFrom({"Key": gdjs.Maze3Code.GDKeyObjects1});gdjs.Maze3Code.eventsList0xc51130 = function(runtimeScene) {

{

gdjs.Maze3Code.GDMapObjects2.createFrom(runtimeScene.getObjects("Map"));
gdjs.Maze3Code.GDWizardObjects2.createFrom(runtimeScene.getObjects("Wizard"));

gdjs.Maze3Code.condition0IsTrue_0.val = false;
{
gdjs.Maze3Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDWizardObjects2Objects, gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDMapObjects2Objects, false, runtimeScene, false);
}if (gdjs.Maze3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Maze3Code.GDMapObjects2 */
{for(var i = 0, len = gdjs.Maze3Code.GDMapObjects2.length ;i < len;++i) {
    gdjs.Maze3Code.GDMapObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.inventory.add(runtimeScene, "Wizard", "map");
}}

}


{

gdjs.Maze3Code.GDKeyObjects1.createFrom(runtimeScene.getObjects("Key"));
gdjs.Maze3Code.GDWizardObjects1.createFrom(runtimeScene.getObjects("Wizard"));

gdjs.Maze3Code.condition0IsTrue_0.val = false;
{
gdjs.Maze3Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDWizardObjects1Objects, gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDKeyObjects1Objects, false, runtimeScene, false);
}if (gdjs.Maze3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Maze3Code.GDKeyObjects1 */
{gdjs.evtTools.inventory.add(runtimeScene, "Wizard", "key");
}{for(var i = 0, len = gdjs.Maze3Code.GDKeyObjects1.length ;i < len;++i) {
    gdjs.Maze3Code.GDKeyObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


}; //End of gdjs.Maze3Code.eventsList0xc51130
gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDOrcAxeObjects3Objects = Hashtable.newFrom({"OrcAxe": gdjs.Maze3Code.GDOrcAxeObjects3});gdjs.Maze3Code.eventsList0xc866d8 = function(runtimeScene) {

}; //End of gdjs.Maze3Code.eventsList0xc866d8
gdjs.Maze3Code.eventsList0xc864e8 = function(runtimeScene) {

{

/* Reuse gdjs.Maze3Code.GDWarriorObjects2 */

for(gdjs.Maze3Code.forEachIndex3 = 0;gdjs.Maze3Code.forEachIndex3 < gdjs.Maze3Code.GDWarriorObjects2.length;++gdjs.Maze3Code.forEachIndex3) {
gdjs.Maze3Code.GDWizardObjects3.createFrom(runtimeScene.getObjects("Wizard"));
gdjs.Maze3Code.GDOrcAxeObjects3.length = 0;

gdjs.Maze3Code.GDWarriorObjects3.length = 0;


gdjs.Maze3Code.forEachTemporary3 = gdjs.Maze3Code.GDWarriorObjects2[gdjs.Maze3Code.forEachIndex3];
gdjs.Maze3Code.GDWarriorObjects3.push(gdjs.Maze3Code.forEachTemporary3);
if (true) {
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDOrcAxeObjects3Objects, (( gdjs.Maze3Code.GDWarriorObjects3.length === 0 ) ? 0 :gdjs.Maze3Code.GDWarriorObjects3[0].getPointX("")), (( gdjs.Maze3Code.GDWarriorObjects3.length === 0 ) ? 0 :gdjs.Maze3Code.GDWarriorObjects3[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.Maze3Code.GDOrcAxeObjects3.length ;i < len;++i) {
    gdjs.Maze3Code.GDOrcAxeObjects3[i].addForceTowardPosition((( gdjs.Maze3Code.GDWizardObjects3.length === 0 ) ? 0 :gdjs.Maze3Code.GDWizardObjects3[0].getPointX("")), (( gdjs.Maze3Code.GDWizardObjects3.length === 0 ) ? 0 :gdjs.Maze3Code.GDWizardObjects3[0].getPointY("")), 100, 1);
}
}}
}

}


}; //End of gdjs.Maze3Code.eventsList0xc864e8
gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDIceballObjects2Objects = Hashtable.newFrom({"Iceball": gdjs.Maze3Code.GDIceballObjects2});gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDOrcAxeObjects2Objects = Hashtable.newFrom({"OrcAxe": gdjs.Maze3Code.GDOrcAxeObjects2});gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDFireballObjects2Objects = Hashtable.newFrom({"Fireball": gdjs.Maze3Code.GDFireballObjects2});gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDOrcAxeObjects2Objects = Hashtable.newFrom({"OrcAxe": gdjs.Maze3Code.GDOrcAxeObjects2});gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDOrcAxeObjects2Objects = Hashtable.newFrom({"OrcAxe": gdjs.Maze3Code.GDOrcAxeObjects2});gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDWizardObjects2Objects = Hashtable.newFrom({"Wizard": gdjs.Maze3Code.GDWizardObjects2});gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDIceballObjects2Objects = Hashtable.newFrom({"Iceball": gdjs.Maze3Code.GDIceballObjects2});gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDWarriorObjects2Objects = Hashtable.newFrom({"Warrior": gdjs.Maze3Code.GDWarriorObjects2});gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDFireballObjects1Objects = Hashtable.newFrom({"Fireball": gdjs.Maze3Code.GDFireballObjects1});gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDWarriorObjects1Objects = Hashtable.newFrom({"Warrior": gdjs.Maze3Code.GDWarriorObjects1});gdjs.Maze3Code.eventsList0xc86410 = function(runtimeScene) {

{

gdjs.Maze3Code.GDWarriorObjects2.createFrom(runtimeScene.getObjects("Warrior"));

gdjs.Maze3Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Maze3Code.GDWarriorObjects2.length;i<l;++i) {
    if ( gdjs.Maze3Code.GDWarriorObjects2[i].timerElapsedTime("throw", 3) ) {
        gdjs.Maze3Code.condition0IsTrue_0.val = true;
        gdjs.Maze3Code.GDWarriorObjects2[k] = gdjs.Maze3Code.GDWarriorObjects2[i];
        ++k;
    }
}
gdjs.Maze3Code.GDWarriorObjects2.length = k;}if (gdjs.Maze3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Maze3Code.GDWarriorObjects2 */
{for(var i = 0, len = gdjs.Maze3Code.GDWarriorObjects2.length ;i < len;++i) {
    gdjs.Maze3Code.GDWarriorObjects2[i].resetTimer("throw");
}
}
{ //Subevents
gdjs.Maze3Code.eventsList0xc864e8(runtimeScene);} //End of subevents
}

}


{

gdjs.Maze3Code.GDIceballObjects2.createFrom(runtimeScene.getObjects("Iceball"));
gdjs.Maze3Code.GDOrcAxeObjects2.createFrom(runtimeScene.getObjects("OrcAxe"));

gdjs.Maze3Code.condition0IsTrue_0.val = false;
{
gdjs.Maze3Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDIceballObjects2Objects, gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDOrcAxeObjects2Objects, false, runtimeScene, false);
}if (gdjs.Maze3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Maze3Code.GDIceballObjects2 */
/* Reuse gdjs.Maze3Code.GDOrcAxeObjects2 */
{for(var i = 0, len = gdjs.Maze3Code.GDIceballObjects2.length ;i < len;++i) {
    gdjs.Maze3Code.GDIceballObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Maze3Code.GDOrcAxeObjects2.length ;i < len;++i) {
    gdjs.Maze3Code.GDOrcAxeObjects2[i].clearForces();
}
}{for(var i = 0, len = gdjs.Maze3Code.GDOrcAxeObjects2.length ;i < len;++i) {
    gdjs.Maze3Code.GDOrcAxeObjects2[i].pauseAnimation();
}
}{for(var i = 0, len = gdjs.Maze3Code.GDOrcAxeObjects2.length ;i < len;++i) {
    gdjs.Maze3Code.GDOrcAxeObjects2[i].setColor("116;255;253");
}
}}

}


{

gdjs.Maze3Code.GDFireballObjects2.createFrom(runtimeScene.getObjects("Fireball"));
gdjs.Maze3Code.GDOrcAxeObjects2.createFrom(runtimeScene.getObjects("OrcAxe"));

gdjs.Maze3Code.condition0IsTrue_0.val = false;
{
gdjs.Maze3Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDFireballObjects2Objects, gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDOrcAxeObjects2Objects, false, runtimeScene, false);
}if (gdjs.Maze3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Maze3Code.GDFireballObjects2 */
/* Reuse gdjs.Maze3Code.GDOrcAxeObjects2 */
{for(var i = 0, len = gdjs.Maze3Code.GDOrcAxeObjects2.length ;i < len;++i) {
    gdjs.Maze3Code.GDOrcAxeObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Maze3Code.GDFireballObjects2.length ;i < len;++i) {
    gdjs.Maze3Code.GDFireballObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{



}


{

gdjs.Maze3Code.GDOrcAxeObjects2.createFrom(runtimeScene.getObjects("OrcAxe"));
gdjs.Maze3Code.GDWizardObjects2.createFrom(runtimeScene.getObjects("Wizard"));

gdjs.Maze3Code.condition0IsTrue_0.val = false;
{
gdjs.Maze3Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDOrcAxeObjects2Objects, gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDWizardObjects2Objects, false, runtimeScene, false);
}if (gdjs.Maze3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Maze3Code.GDOrcAxeObjects2 */
/* Reuse gdjs.Maze3Code.GDWizardObjects2 */
{for(var i = 0, len = gdjs.Maze3Code.GDOrcAxeObjects2.length ;i < len;++i) {
    gdjs.Maze3Code.GDOrcAxeObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(4).sub(1);
}{for(var i = 0, len = gdjs.Maze3Code.GDWizardObjects2.length ;i < len;++i) {
    gdjs.Maze3Code.GDWizardObjects2[i].setColor("255;0;0");
}
}}

}


{

gdjs.Maze3Code.GDIceballObjects2.createFrom(runtimeScene.getObjects("Iceball"));
gdjs.Maze3Code.GDWarriorObjects2.createFrom(runtimeScene.getObjects("Warrior"));

gdjs.Maze3Code.condition0IsTrue_0.val = false;
{
gdjs.Maze3Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDIceballObjects2Objects, gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDWarriorObjects2Objects, false, runtimeScene, false);
}if (gdjs.Maze3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Maze3Code.GDIceballObjects2 */
/* Reuse gdjs.Maze3Code.GDWarriorObjects2 */
{for(var i = 0, len = gdjs.Maze3Code.GDIceballObjects2.length ;i < len;++i) {
    gdjs.Maze3Code.GDIceballObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Maze3Code.GDWarriorObjects2.length ;i < len;++i) {
    gdjs.Maze3Code.GDWarriorObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Maze3Code.GDFireballObjects1.createFrom(runtimeScene.getObjects("Fireball"));
gdjs.Maze3Code.GDWarriorObjects1.createFrom(runtimeScene.getObjects("Warrior"));

gdjs.Maze3Code.condition0IsTrue_0.val = false;
{
gdjs.Maze3Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDFireballObjects1Objects, gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDWarriorObjects1Objects, false, runtimeScene, false);
}if (gdjs.Maze3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Maze3Code.GDFireballObjects1 */
/* Reuse gdjs.Maze3Code.GDWarriorObjects1 */
{for(var i = 0, len = gdjs.Maze3Code.GDWarriorObjects1.length ;i < len;++i) {
    gdjs.Maze3Code.GDWarriorObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Maze3Code.GDFireballObjects1.length ;i < len;++i) {
    gdjs.Maze3Code.GDFireballObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


}; //End of gdjs.Maze3Code.eventsList0xc86410
gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDWizardObjects2Objects = Hashtable.newFrom({"Wizard": gdjs.Maze3Code.GDWizardObjects2});gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDHealthFlaskObjects2Objects = Hashtable.newFrom({"HealthFlask": gdjs.Maze3Code.GDHealthFlaskObjects2});gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDWizardObjects1Objects = Hashtable.newFrom({"Wizard": gdjs.Maze3Code.GDWizardObjects1});gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDBigHealthFlaskObjects1Objects = Hashtable.newFrom({"BigHealthFlask": gdjs.Maze3Code.GDBigHealthFlaskObjects1});gdjs.Maze3Code.eventsList0xc62b98 = function(runtimeScene) {

{

gdjs.Maze3Code.GDHealthFlaskObjects2.createFrom(runtimeScene.getObjects("HealthFlask"));
gdjs.Maze3Code.GDWizardObjects2.createFrom(runtimeScene.getObjects("Wizard"));

gdjs.Maze3Code.condition0IsTrue_0.val = false;
gdjs.Maze3Code.condition1IsTrue_0.val = false;
{
gdjs.Maze3Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDWizardObjects2Objects, gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDHealthFlaskObjects2Objects, false, runtimeScene, false);
}if ( gdjs.Maze3Code.condition0IsTrue_0.val ) {
{
gdjs.Maze3Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) < gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5));
}}
if (gdjs.Maze3Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Maze3Code.GDHealthFlaskObjects2 */
{runtimeScene.getGame().getVariables().getFromIndex(4).add(1);
}{for(var i = 0, len = gdjs.Maze3Code.GDHealthFlaskObjects2.length ;i < len;++i) {
    gdjs.Maze3Code.GDHealthFlaskObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Maze3Code.GDBigHealthFlaskObjects1.createFrom(runtimeScene.getObjects("BigHealthFlask"));
gdjs.Maze3Code.GDWizardObjects1.createFrom(runtimeScene.getObjects("Wizard"));

gdjs.Maze3Code.condition0IsTrue_0.val = false;
{
gdjs.Maze3Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDWizardObjects1Objects, gdjs.Maze3Code.mapOfGDgdjs_46Maze3Code_46GDBigHealthFlaskObjects1Objects, false, runtimeScene, false);
}if (gdjs.Maze3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Maze3Code.GDBigHealthFlaskObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(5).add(1);
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)));
}{for(var i = 0, len = gdjs.Maze3Code.GDBigHealthFlaskObjects1.length ;i < len;++i) {
    gdjs.Maze3Code.GDBigHealthFlaskObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


}; //End of gdjs.Maze3Code.eventsList0xc62b98
gdjs.Maze3Code.eventsList0xb2358 = function(runtimeScene) {

{


gdjs.Maze3Code.eventsList0xdd2ea8(runtimeScene);
}


{


gdjs.Maze3Code.eventsList0xdc08a8(runtimeScene);
}


{


gdjs.Maze3Code.eventsList0x78b9e0(runtimeScene);
}


{


gdjs.Maze3Code.eventsList0xdbff98(runtimeScene);
}


{


gdjs.Maze3Code.eventsList0x79c900(runtimeScene);
}


{


gdjs.Maze3Code.eventsList0xe3d7d8(runtimeScene);
}


{


gdjs.Maze3Code.eventsList0xde4cb0(runtimeScene);
}


{


gdjs.Maze3Code.eventsList0xc51130(runtimeScene);
}


{


gdjs.Maze3Code.eventsList0xc86410(runtimeScene);
}


{


gdjs.Maze3Code.eventsList0xc62b98(runtimeScene);
}


}; //End of gdjs.Maze3Code.eventsList0xb2358


gdjs.Maze3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.Maze3Code.GDWizardObjects1.length = 0;
gdjs.Maze3Code.GDWizardObjects2.length = 0;
gdjs.Maze3Code.GDWizardObjects3.length = 0;
gdjs.Maze3Code.GDFloor2Objects1.length = 0;
gdjs.Maze3Code.GDFloor2Objects2.length = 0;
gdjs.Maze3Code.GDFloor2Objects3.length = 0;
gdjs.Maze3Code.GDFPSObjects1.length = 0;
gdjs.Maze3Code.GDFPSObjects2.length = 0;
gdjs.Maze3Code.GDFPSObjects3.length = 0;
gdjs.Maze3Code.GDLifeObjects1.length = 0;
gdjs.Maze3Code.GDLifeObjects2.length = 0;
gdjs.Maze3Code.GDLifeObjects3.length = 0;
gdjs.Maze3Code.GDWallObjects1.length = 0;
gdjs.Maze3Code.GDWallObjects2.length = 0;
gdjs.Maze3Code.GDWallObjects3.length = 0;
gdjs.Maze3Code.GDParticlesObjects1.length = 0;
gdjs.Maze3Code.GDParticlesObjects2.length = 0;
gdjs.Maze3Code.GDParticlesObjects3.length = 0;
gdjs.Maze3Code.GDPoisonballObjects1.length = 0;
gdjs.Maze3Code.GDPoisonballObjects2.length = 0;
gdjs.Maze3Code.GDPoisonballObjects3.length = 0;
gdjs.Maze3Code.GDShockballObjects1.length = 0;
gdjs.Maze3Code.GDShockballObjects2.length = 0;
gdjs.Maze3Code.GDShockballObjects3.length = 0;
gdjs.Maze3Code.GDIceballObjects1.length = 0;
gdjs.Maze3Code.GDIceballObjects2.length = 0;
gdjs.Maze3Code.GDIceballObjects3.length = 0;
gdjs.Maze3Code.GDFireballObjects1.length = 0;
gdjs.Maze3Code.GDFireballObjects2.length = 0;
gdjs.Maze3Code.GDFireballObjects3.length = 0;
gdjs.Maze3Code.GDDownStairsObjects1.length = 0;
gdjs.Maze3Code.GDDownStairsObjects2.length = 0;
gdjs.Maze3Code.GDDownStairsObjects3.length = 0;
gdjs.Maze3Code.GDStairsObjects1.length = 0;
gdjs.Maze3Code.GDStairsObjects2.length = 0;
gdjs.Maze3Code.GDStairsObjects3.length = 0;
gdjs.Maze3Code.GDDoorObjects1.length = 0;
gdjs.Maze3Code.GDDoorObjects2.length = 0;
gdjs.Maze3Code.GDDoorObjects3.length = 0;
gdjs.Maze3Code.GDKeyObjects1.length = 0;
gdjs.Maze3Code.GDKeyObjects2.length = 0;
gdjs.Maze3Code.GDKeyObjects3.length = 0;
gdjs.Maze3Code.GDHealthFlaskObjects1.length = 0;
gdjs.Maze3Code.GDHealthFlaskObjects2.length = 0;
gdjs.Maze3Code.GDHealthFlaskObjects3.length = 0;
gdjs.Maze3Code.GDIceZombieObjects1.length = 0;
gdjs.Maze3Code.GDIceZombieObjects2.length = 0;
gdjs.Maze3Code.GDIceZombieObjects3.length = 0;
gdjs.Maze3Code.GDBigHealthFlaskObjects1.length = 0;
gdjs.Maze3Code.GDBigHealthFlaskObjects2.length = 0;
gdjs.Maze3Code.GDBigHealthFlaskObjects3.length = 0;
gdjs.Maze3Code.GDOrcAxeObjects1.length = 0;
gdjs.Maze3Code.GDOrcAxeObjects2.length = 0;
gdjs.Maze3Code.GDOrcAxeObjects3.length = 0;
gdjs.Maze3Code.GDMapObjects1.length = 0;
gdjs.Maze3Code.GDMapObjects2.length = 0;
gdjs.Maze3Code.GDMapObjects3.length = 0;
gdjs.Maze3Code.GDDoorFrameObjects1.length = 0;
gdjs.Maze3Code.GDDoorFrameObjects2.length = 0;
gdjs.Maze3Code.GDDoorFrameObjects3.length = 0;
gdjs.Maze3Code.GDWarriorObjects1.length = 0;
gdjs.Maze3Code.GDWarriorObjects2.length = 0;
gdjs.Maze3Code.GDWarriorObjects3.length = 0;
gdjs.Maze3Code.GDMapHelpObjects1.length = 0;
gdjs.Maze3Code.GDMapHelpObjects2.length = 0;
gdjs.Maze3Code.GDMapHelpObjects3.length = 0;
gdjs.Maze3Code.GDFindKeyObjects1.length = 0;
gdjs.Maze3Code.GDFindKeyObjects2.length = 0;
gdjs.Maze3Code.GDFindKeyObjects3.length = 0;
gdjs.Maze3Code.GDRestartGameObjects1.length = 0;
gdjs.Maze3Code.GDRestartGameObjects2.length = 0;
gdjs.Maze3Code.GDRestartGameObjects3.length = 0;
gdjs.Maze3Code.GDGameOverObjects1.length = 0;
gdjs.Maze3Code.GDGameOverObjects2.length = 0;
gdjs.Maze3Code.GDGameOverObjects3.length = 0;

gdjs.Maze3Code.eventsList0xb2358(runtimeScene);
return;
}
gdjs['Maze3Code'] = gdjs.Maze3Code;
