#pragma strict

function Start () {
	yield WaitForSeconds(3.0);
	Destroy(gameObject);
}

function Update () {
	
}

function OnTriggerEnter(collider : Collider){
	if(collider.gameObject.tag == "Bullet"){
		networkView.RPC("PlayShieldSound", RPCMode.All);
		Destroy(collider.gameObject);
	}
}

@RPC
function PlayShieldSound(){
	audio.Play();
}