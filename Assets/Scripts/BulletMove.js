#pragma strict

var speed : float;

function Start () 
{
}

function Update () {
	transform.position += 
		transform.forward * speed * Time.deltaTime;
	
	
	Destroy(gameObject, 1.0f);
}