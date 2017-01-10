/* Program:  myfilet3.js --> JavaScript file to tickets.html
   Programmer:  Lauren Etheridge
   Date:  15 October 2016
   Class:  ITP 140 FA16 - Test1 - Lab3
*/
var c = document.getElementById('pane').getContext('2d'); 

var grd=c.createLinearGradient(160, 150, 400, 200);
		grd.addColorStop(0,"#DAA520");
		grd.addColorStop(1,"#CFB53B");

		c.fillStyle=grd;
		c.lineWidth=5;
		c.stroke();
		c.fill();

//text
		
		c.font="italic 60px Arial Black";
		c.fillText("KIDS WATCH",100,100);
		c.fillText("FOR FREE!!",200,200);


// If Statement
function getTickCostIf() {
var age = prompt("Enter your age");
if (age < 5) {
	alert("FREE ADMISSION!");
	document.getElementById("p1").innerHTML = "FREE ADMISSION!";
}
  else if (age <= 12) {
  	alert("Ticket Cost: $5.00");
	document.getElementById("p1").innerHTML = "Ticket Cost: $5.00";
  }
  
  else if(age >= 13) {
  	alert("Ticket Cost: $9.00");
	document.getElementById("p1").innerHTML = "Ticket Cost: $9.00";
  }
}


// Switch Statement

function getTickCostSwitch() {
	var age = prompt("Please choose your age, 1 , 5, 12, 15, 35");

		switch (age) {
 
		case "1":
		 
			document.getElementById("p1").innerHTML = "FREE ADMISSION!";
		 
		break;
		  
		case "5":
		 
			document.getElementById("p1").innerHTML = "Ticket Cost: $5.00";
		 
		break; 
		 
		case "12":
		 
			document.getElementById("p1").innerHTML = "Ticket Cost: $5.00";
		 
		break;
		  
		case "15":
		 
			document.getElementById("p1").innerHTML = "Ticket Cost: $9.00";
		 
		break;
		  
		case "35":
		 
			document.getElementById("p1").innerHTML = "Ticket Cost: $9.00";
		 
		 
		break;
		  
		default:
		 
			document.getElementById("p1").innerHTML = "FREE ADMISSION!";
		 
		break;
 
	}
}

