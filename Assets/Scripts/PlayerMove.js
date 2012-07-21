#pragma strict

var speed : float;

var bulletPrefab : GameObject;

var damageFxPrefab : GameObject;

function Update () {
    var move = Vector3(Input.GetAxis("Horizontal"), 0.0, Input.GetAxis("Vertical"));
    transform.localPosition += move * speed * Time.deltaTime;
    
    if (move.magnitude > 0.1) transform.LookAt(transform.position + move);
    
    if (Input.GetButtonDown("Jump")) {
    	Network.Instantiate(bulletPrefab, transform.position + 
    						 transform.forward * 0.5 + Vector3.up * 0.5,
    						 transform.rotation, 0);
    }
}

function OnTriggerEnter(collider : Collider) {
	if (collider.gameObject.tag == "Bullet") {
		Network.Instantiate(damageFxPrefab, transform.position,
							transform.rotation, 0);
	}
}

@RPC
function ChangeColor(r : float, g : float, b : float) {
	GetComponentInChildren.<Renderer>().material.color = Color(r, g, b);
}

function OnGUI() {
	if (GUILayout.Button("Change Color!")) {
		networkView.RPC("ChangeColor", RPCMode.All, Random.value,
										Random.value, Random.value);
	}
}




