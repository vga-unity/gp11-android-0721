#pragma strict

var speed : float;

function Update () {
    var move = Vector3(Input.GetAxis("Horizontal"), 0.0, Input.GetAxis("Vertical"));
    transform.localPosition += move * speed * Time.deltaTime;
    
    if (move.magnitude > 0.1) transform.LookAt(transform.position + move);
}
