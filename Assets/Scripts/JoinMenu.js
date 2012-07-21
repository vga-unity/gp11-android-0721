#pragma strict

var PlayerObj : GameObject;

function OnGUI()
{
	if(Network.connections.Length > 0)
	{
		if(GUILayout.Button("JOIN GAME!"))
		{
			var MyShip = Network.Instantiate(PlayerObj,
											 transform.position,
											 transform.rotation,
											 0);
			MyShip.GetComponent.<PlayerMove>().enabled = true;
			Destroy(gameObject);
		}
	}	
}