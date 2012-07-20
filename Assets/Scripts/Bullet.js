#pragma strict

var speed : float;

function Update () {
    transform.localPosition += transform.forward * speed * Time.deltaTime;
}
