#pragma strict

var rockPrefab : GameObject;

function Start (){
	while(true){
	yield WaitForSeconds(2);
	Network.Instantiate(rockPrefab,
						Vector3(Random.Range(-3.0, 3.0), 1, 8),
						transform.rotation,
						0);
	}
}