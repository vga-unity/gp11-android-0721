#pragma strict

private var initFlag = false;
private var serverAddress = "127.0.0.1";

function OnGUI() {
    if (!initFlag) {
        if (GUILayout.Button("Server")) {
            Network.InitializeServer(32, 25000, false);
            initFlag = true;
        }
        serverAddress = GUILayout.TextField(serverAddress);
        if (GUILayout.Button("Client")) {
            Network.Connect(serverAddress, 25000);
            initFlag = true;
        }
    }
}
