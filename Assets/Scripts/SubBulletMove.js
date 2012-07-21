#pragma strict

var speed : float;

function Start () {

}

function Update () {
	transform.position += 
		transform.forward * speed * Time.deltaTime;
	
	transform.position +=
		transform.right * 5.0f * Time.deltaTime;
		
		Destroy(gameObject, 1.0f);
}