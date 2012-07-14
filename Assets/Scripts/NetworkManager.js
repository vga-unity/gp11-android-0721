#pragma strict

function OnGUI() {
    if (GUILayout.Button("Server")) {
        Network.InitializeServer(32, 25000, !Network.HavePublicAddress());
        MasterServer.RegisterHost("VantanGP11-0721", "Test Game", "Test game room");

    }
    
    
    GUILayout.Button("Client");
}
