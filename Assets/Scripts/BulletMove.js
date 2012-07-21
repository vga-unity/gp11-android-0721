#pragma strict

var speed : float;

function Update () {
	transform.position 
		+= transform.forward * speed * Time.deltaTime;
}