#pragma strict

var speed : float;
public var BulletPrefab : GameObject;
public var ShieldPrefab : GameObject;

function Update () {
    var move = Vector3(Input.GetAxis("Horizontal"), 0.0, Input.GetAxis("Vertical"));
    transform.localPosition += move * speed * Time.deltaTime;
    
    if (move.magnitude > 0.1) transform.LookAt(transform.position + move);
    
    if(Input.GetButtonDown("Jump")){
    	Network.Instantiate(BulletPrefab, transform.position + transform.forward * 0.5 + Vector3.up * 0.5, transform.rotation, 0);
    }
    
    if(Input.GetKeyDown("z")){
    	Network.Instantiate(ShieldPrefab, transform.position + transform.forward * 0.5, transform.rotation, 0);
    }
}

function OnGUI(){
	if(GUILayout.Button("Change Color!!")){
		networkView.RPC("ChangeColor", RPCMode.All, Random.value, Random.value, Random.value);
	}
}

@RPC
function ChangeColor(r : float, g : float, b : float){
	GetComponentInChildren.<Renderer>().material.color = Color(r, g, b);
}
