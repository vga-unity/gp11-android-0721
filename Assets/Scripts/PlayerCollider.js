#pragma strict

public var DamagePrefab : GameObject;

function Start () {

}

function Update () {

}

function OnTriggerEnter(collider : Collider){
	if(collider.gameObject.tag == "Bullet"){
		Network.Instantiate(DamagePrefab, transform.position, transform.rotation, 0);
		networkView.RPC("PlayDamageSound", RPCMode.All);
		Destroy(collider.gameObject);
	}
}

@RPC
function PlayDamageSound(){
	audio.Play();
}