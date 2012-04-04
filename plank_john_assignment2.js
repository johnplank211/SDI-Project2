// EIB story
// Author John Plank
// SDI project 2
// Testing sublime git plugin

var joePvt = "Pvt Plank";
var	joeSgt = "Sgt Avilia";
var days = [1,2,3];
var eib = "I'm the man"
var stations = ["grenades", "medic", "sports", "landNav", "claymore", "landmines", "shootExpert", "50 Cal", "mark19" ];
var noGoCount = 0;

//procedure functions

var startEibDay = function (i) {	
		if (i > 0) {
			console.log(i + " days and a wake up " + eib);
				} else {
					console.log("Well thank God that's over! ");
					for (var days = 3; days > 0; days--) {
						console.log("Dam it feels good to be a gansta! ");
					return;
}
}
};

startEibDay(2);

//array functions

var stationStatus = function (stations, currentStation) {

		var statusMessage = "";

		for (var stationIndex = 0; stationIndex < stations.length;  stationIndex++ )
		{
			//console.log ("I am working station: " + stations[stationIndex] + ", I have " + (stations.length - stationIndex - 1) + " stations left");
			if (currentStation < stationIndex) 
			{	
				statusMessage += "Station \"" + stations[stationIndex] + "\" still to be done\n";
			}

			if (currentStation == stationIndex)
			{
				statusMessage += "Station " + stations[stationIndex] + " currently being worked\n";
			}

			if (currentStation > stationIndex)
			{
				statusMessage += "Station " + stations[stationIndex] + " already completed\n"

			}
		}
		return statusMessage;
};


console.log(stationStatus(stations, 4));

//number functions

var shootingCount = function(targetsHit)
{
	var numRounds = 40;
	var targetNumber = 1;

	while (targetNumber < 41)
	{
		console.log("Shooting at target number: " + targetNumber);
		targetNumber++;
	}
	return targetNumber - targetsHit - 1;
}

console.log("You missed " + shootingCount(38) + " targets");

//boolean functions

var grenadeThrow = function(numThrown, numLanded, retryPass)
{
	return (numThrown == 5 && numLanded == 5) || (retryPass);
}


	var grenadeResult = grenadeThrow(5,4,false);
		if (grenadeResult) { console.log("Grenade Station passed"); }
		else { console.log("Grenade Station failed"); 
}

//string functions
 


var wordsWithNcos = function (y,w) {
	var conversation1 = " said to Sgt Avilia: I am going to quit, so I can go home",
		conversation2 = " said to Pvt Plank: Pass these and I will buy you a steak";

	return y + conversation1 + "\n" + w + conversation2;

};

console.log(wordsWithNcos(joePvt,joeSgt));
