#pragma strict

var cubemanPrefab : GameObject;
var enemyPrefab : GameObject;

function OnGUI()
{
	if (Network.connections.Length > 0)
	{
		if (GUILayout.Button("JOIN GAME!"))
		{
			var cubeman = Network.Instantiate(cubemanPrefab, transform.position + Vector3.back * 3.0, transform.rotation, 0);
			cubeman.GetComponent.<PlayerMove>().enabled = true;
			Destroy(gameObject);
		}
	}
}