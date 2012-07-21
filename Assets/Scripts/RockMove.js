#pragma strict

var speed : float;

function Update () {
	transform.position
		+= transform.forward * speed * Time.deltaTime;
}

function OnTriggerEnter(collider : Collider){
	if(collider.gameObject.tag == "Bullet"){
		transform.rotation = collider.transform.rotation;
		Destroy(collider.gameObject);
	}
}
