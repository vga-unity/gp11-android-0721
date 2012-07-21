#pragma strict

private var timer : float = 3.0f;
var bullet : GameObject;

function Start () {

}

function Update () {
	
	if(timer < 0)
	{
		for(var i = 0; i < 12; i++)
		{
			Instantiate(bullet,
						transform.position,
						transform.rotation * Quaternion.Euler(0, i * 30, 0));
		}
		Destroy(gameObject);
	}
	
	timer -= Time.deltaTime;
}