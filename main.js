// Working code using arrays



// var victimamt = prompt("How many disaster victims do you wish to enter?")
// var victimname = []
// var victimphone =[]
// var victimstreet= []


// for(var i=0; i<victimamt; i++){
// 	var Name=prompt("Name:");
// 	var Phone= prompt("Phone:");
// 	var Street= prompt("Street:");

// 	victimname.push(Name);
// 	victimphone.push(Phone);
// 	victimstreet.push(Street);

// }

// var volunteeramt = prompt("How many disaster volunteers do you wish to enter?")
// // This opens a blank array
// var volunteername = []
// var volunteerphone= []
// var volunteerstreet = []

// for(var i=0; i<volunteeramt; i++){
// 	var name1=prompt("Name:");
// 	var phone2= prompt("Phone:");
// 	var street2= prompt("Street:");
	

// 	volunteername.push(name1);
// 	volunteerphone.push(phone2);
// 	volunteerstreet.push(street2);

// }
// var summary = alert("Persons in need: " + victimamt + "\nNumber of volunteers: " + volunteeramt + 
// 	"\nVictims: " + victimname + "\nVolunteers: " + volunteername);





// WORKING CODE USING OBJECTS AND TWO LOOPS

// var victimamt = prompt("How many disaster victims do you wish to enter?");
// var victims = [];
// var vicNames = [];


// 	for(var i=0; i<victimamt; i++){
// 		var vicName=prompt("Name:");
// 		var vicPhone= prompt("phone:");
// 		var vicStreet= prompt("Street:");

// 			var victim = {
// 				vicName: vicName,
// 				vicPhone: vicPhone,
// 				vicStreet : vicStreet
// 			};

// 				victims.push(victim)
// 				};

// 			for (var i=0; i<victims.length; i++){
// 				vicNames.push(victims[i].vicName)
// 			}			

// var volunteeramt = prompt("How many disaster volunteers do you wish to enter?");
// var volunteers = [];
// var volNames = [];

// 	for(var i=0; i<volunteeramt; i++){
// 		var volName=prompt("Name:");
// 		var volPhone= prompt("Phone:");
// 		var volStreet= prompt("Street:");


// 			var volunteer = {
// 				volName: volName,
// 				volPhone: volPhone,
// 				volStreet: volStreet
// 			};
			
// 			volunteers.push(volunteer);
// 			};

// 			for(var i=0; i<volunteers.length; i++){
// 				volNames.push(volunteers[i].volName);
// 			}


// var summary = alert("Persons in need: " + victimamt + "\nNames: " + vicNames + "\nHelpers: " + 
// 	volunteeramt + "\nNames: " + volNames);



// BONUS 1 = assigns value, == checks if is equal

var victimamt = [];
var victims = [];
var vicNames = [];
var askAgain = true




	while (askAgain == true){

		var vicName = prompt("Name:");
		var vicPhone = prompt("Phone:");
		var vicStreet = prompt("Street:");

		var con = confirm("Enter more names?");
		
		if (con == true){
			askAgain = true;
		}
		else{
			askAgain = false;
		}

	}

			var victim = {
				vicName: vicName,
				vicPhone: vicPhone,
				vicStreet : vicStreet
			};

				victims.push(victim)
				;

			for (var i=0; i<victims.length; i++){
				vicNames.push(victims[i].vicName)
			}			

// END WORKING WHILE LOOP

var volunteeramt = prompt("How many disaster volunteers do you wish to enter?");
var volunteers = [];
var volNames = [];

	for(var i=0; i<volunteeramt; i++){
		var volName=prompt("Name:");
		var volPhone= prompt("Phone:");
		var volStreet= prompt("Street:");


			var volunteer = {
				volName: volName,
				volPhone: volPhone,
				volStreet: volStreet
			};
			
			volunteers.push(volunteer);
			};

			for(var i=0; i<volunteers.length; i++){
				volNames.push(volunteers[i].volName);
			}


var vicName = prompt("Enter the Name of someone in need");
		var st = alert (vicName);


// var summary = alert("Persons in need: " + victimamt + "\nNames: " + vicNames + "\nHelpers: " + 
// 	volunteeramt + "\nNames: " + volNames);























