var victimamt = prompt("How many disaster victims do you wish to enter?")
var victimname = []
var victimphone =[]
var victimstreet= []


for(var i=0; i<victimamt; i++){
	var Name=prompt("Name:");
	var Phone= prompt("Phone:");
	var Street= prompt("Street:");

	victimname.push(Name);
	victimphone.push(Phone);
	victimstreet.push(Street);

}

var volunteeramt = prompt("How many disaster volunteers do you wish to enter?")
// This opens a blank array
var volunteername = []
var volunteerphone= []
var volunteerstreet = []

for(var i=0; i<volunteeramt; i++){
	var name1=prompt("Name:");
	var phone2= prompt("Phone:");
	var street2= prompt("Street:");
	


	volunteername.push(name1);
	volunteerphone.push(phone2);
	volunteerstreet.push(street2);

}
var summary = alert("Persons in need: " + victimamt + "\nNumber of volunteers: " + volunteeramt + 
	"\nVictims: " + victimname + "\nVolunteers: " + volunteername);