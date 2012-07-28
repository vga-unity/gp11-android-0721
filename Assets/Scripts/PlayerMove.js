#pragma strict

var speed : float;

var bulletPrefab : GameObject;

var bomPrefab : GameObject;

var damageFxPrefab : GameObject;

function Update () {
    var move = transform.right * Input.GetAxis("Horizontal") + 
     transform.forward * Input.GetAxis("Vertical");

    var smoothMove = GetComponent.<SmoothMove>();
    smoothMove.targetPosition += move * speed * Time.deltaTime;
    
    var yaw = 300.0 * Input.GetAxis("Mouse X") * Time.deltaTime;
    smoothMove.targetRotation = Quaternion.AngleAxis(yaw, Vector3.up) * smoothMove.targetRotation;

    if (Input.GetButtonDown("Fire1")) {
        Network.Instantiate(bulletPrefab, transform.position + transform.forward * 0.5 + Vector3.up * 0.5, 
            transform.rotation, 0);
    }
    if (Input.GetButtonDown("Jump")) {
        Network.Instantiate(bomPrefab, transform.position + transform.forward * 0.5 + Vector3.up * 0.7,
            transform.rotation, 0);
    }
}

function OnTriggerEnter(collider : Collider) {
    if (collider.gameObject.tag == "Bullet") {
        Network.Instantiate(damageFxPrefab, transform.position, transform.rotation, 0);
    }
    if (collider.gameObject.tag == "Bom") {
        Destroy(gameObject);
    }
}

@RPC
function ChangeColor(r : float, g : float, b : float) {
    GetComponentInChildren.<Renderer>().material.color = Color(r, g, b);
}

function OnGUI() {
    if (GUILayout.Button("Change Color!")) {
        //ChangeColor(Random.value, Random.value, Random.value);
        networkView.RPC("ChangeColor", RPCMode.All, Random.value, Random.value, Random.value);
    }
}