﻿var target : Transform;
var loading : GameObject;

function Update(){
}

function OnMouseDown(){
this.transform.position = target.position;
this.transfotm.parent = GameObject.Find ("FPSController").transform;
this.transform.parent = GameObject.Find ("FirstPersonCharacter").transform;
}

function OnMouseUp(){
this.transform.parent = GameObject.Find ("FPSController").transform;
this.transform.parent = null;
}