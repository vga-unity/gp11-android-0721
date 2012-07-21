#pragma strict

var speed : float;
var bulletObj : GameObject;
var bomObj : GameObject;
var damageEffect : GameObject;

function OnTriggerEnter(collider : Collider)
{
	if(collider.gameObject.tag == "Bullet")
	{
		Network.Instantiate(damageEffect,
							transform.position + Vector3.up * 0.5f,
							transform.rotation,
							0);
		Destroy(collider.gameObject);
	}
}

function OnGUI()
{
	if(GUILayout.Button("CHANGE COLOR"))
	{
		// 0~1までのランダムな値を返す
		//ChangeColor(Random.value, Random.value, Random.value);
		networkView.RPC("ChangeColor",
						 RPCMode.All,
						 Random.value,
						 Random.value,
						 Random.value);
	}
}

// 色を変更する
@RPC
function ChangeColor(r : float, g : float, b : float)
{
	GetComponentInChildren.<Renderer>().material.color = Color(r, g, b);
}

function Update () {
    var move = Vector3(Input.GetAxis("Horizontal"), 0.0, Input.GetAxis("Vertical"));
    transform.localPosition += move * speed * Time.deltaTime;
    
    if (move.magnitude > 0.1) transform.LookAt(transform.position + move);
    
    if(Input.GetKeyDown(KeyCode.Z))
    {
    	for(var i = 0; i < 3; i++)
    		{
    			Network.Instantiate(bulletObj,
    								transform.position + transform.forward * 0.5f + Vector3.up * 0.5f,
    								transform.rotation * Quaternion.Euler(0, -15 + i * 15, 0),
    								0);
    		}
	}
    if(Input.GetKeyDown(KeyCode.X))
    {
    	Network.Instantiate(bomObj,
    						transform.position + Vector3.up * 0.5f,
    						transform.rotation,
    						0);
	}
	
//    	デバッグ用				
//    	if(Input.GetKeyDown(KeyCode.Z))
//    	{	
//    		for(var i = 0; i < 3; i++)
//    		{
//    				Instantiate(bulletObj,
//    				transform.position + transform.forward * 0.5f + Vector3.up * 0.5f,
//    				transform.rotation * Quaternion.Euler(0, -15 + i * 15, 0));
//    		}
//    	}
//    	if(Input.GetKeyDown(KeyCode.X)){
//    				Instantiate(bomObj,
//    				transform.position + Vector3.up * 0.5f,
//    				transform.rotation);
//    	}
}
