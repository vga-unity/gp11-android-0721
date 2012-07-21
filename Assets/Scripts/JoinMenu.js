#pragma strict

public var Prefab : GameObject;

function Start () {

}

function Update () {

}

function OnGUI(){
	if(Network.connections.Length > 0){
		if(GUILayout.Button("Join Game!!")){
			var CubeMan = Network.Instantiate(Prefab, transform.position, transform.rotation, 0);
			CubeMan.GetComponent.<PlayerMove>().enabled = true;
			Destroy(gameObject);
		}
	}
}