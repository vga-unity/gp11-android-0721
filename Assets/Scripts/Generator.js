#pragma strict

var prefab : GameObject;

function OnGUI() {
    if (Network.connections.Length > 0) {
        if (GUILayout.Button("SPAWN!")) {
            var cubeman = Network.Instantiate(prefab, transform.position, transform.rotation, 0);
            cubeman.GetComponent.<PlayerMove>().enabled = true;
            enabled = false;
        }
    }
}
