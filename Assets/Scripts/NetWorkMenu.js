#pragma strict

// 自分自身のIPアドレス
//private var address : String = "10.25.34.240";
private var address : String = "127.0.0.1";

function OnGUI()
{
	if (GUILayout.Button("Server"))
	{
		Network.InitializeServer(32, 25000, false);
		Destroy(gameObject);
	}
	
	address = GUILayout.TextField(address);
	
	if (GUILayout.Button("Client"))
	{
		Network.Connect(address, 25000);
		Destroy(gameObject);
	}
}