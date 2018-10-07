/**
 * 
 */

function checkDigit(){
	
	var digitToCheck = document.getElementById("input").value;
    
	if (digitToCheck > 0){
		document.getElementById("result").innerHTML = "Dodatnia";
	} else if (digitToCheck < 0){
		document.getElementById("result").innerHTML = "Ujemna";
	} else if (digitToCheck == 0) {
		document.getElementById("result").innerHTML = "Zero";
	} else document.getElementById("result").innerHTML = "To nie jest liczba";
	
}