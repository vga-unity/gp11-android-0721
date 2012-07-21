#pragma strict

var speed : float;

function Update()
{
	transform.position += transform.forward * speed * Time.deltaTime;
}

function OnTriggerEnter(collider : Collider)
{
	if (collider.gameObject.tag == "Enemy")
	{
		Destroy(gameObject);
	}
}