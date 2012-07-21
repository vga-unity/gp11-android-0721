#pragma strict

var damageFxPrefab : GameObject;
var life : int;
//var speed : float;

function Update()
{
	if (life < 0) Destroy(gameObject);
}

function OnTriggerEnter(collider : Collider)
{
	if (collider.gameObject.tag == "Bullet")
	{
		Network.Instantiate(damageFxPrefab, transform.position, transform.rotation, 0);
		life--;
	}
}