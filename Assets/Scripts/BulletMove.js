#pragma strict

public var Speed : float;

function Start () {
	yield WaitForSeconds(3.0);
	Destroy(gameObject);
}

function Update () {
	transform.position += transform.forward * Speed * Time.deltaTime;
}