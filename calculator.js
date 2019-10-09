//variable declarations
var totalBill;
var peopleCount;
var selectedValue;
var tipAndTotal;
var totalPerPerson;

var tipPerPerson;
//Calculate The Tip
function tipCalculator() {
		
	var totalPlusTip;														//variable storing bill + tip
	totalBill=parseInt(document.getElementById("totalBill").value);			//bill before tip
	peopleCount=document.getElementById("peopleCount").value;				//var storing people count
	selectedValue = document.getElementById("service").value;				//adds selected tip % from dropdown menu
	totalBill=Math.abs(totalBill);
	
	if (isNaN(totalBill)){								//isNaN if value entered is not a number
		 alert("This is not a number");					//alert warning
		 alert("Please enter a valid number!!");		//alert warning
		 return false;									//return false if condition is met
	 }totalBill=Math.abs(totalBill);
	
	
	
   
   var tipPercent =  totalBill * selectedValue;					//var storing selected value of given bill
    totalPlusTip = Math.abs(totalBill + tipPercent); 			//ABSOLUTE VALUE OF (equation bill + tip= totalPlusTip) 
	//tipPerPerson=tipPercent/Math.abs(peopleCount);
	 if (peopleCount<=0){										//if statements checking if value entered is less than 1 or negative
		 peopleCount=1;											// if condition above is met set peopleCount to 1
	 }tipPerPerson=tipPercent/Math.abs(peopleCount);			//gives an absolute of tip amount per person if peopleCount returns false
	  console.log("***There is only 1 person***");				//declares 1 person in console
	
	 if (isNaN(peopleCount)){									//isNaN if value entered is not a number
		 alert(peopleCount+"   is not a number");				//alert warning
		 alert("Please enter a valid number!!");				//alert warning
		 return false;											//return false if condition is met
	 }
	
	tipAndTotal=document.getElementById("tipAndTotal");			//var storing value to be displayed in tipAndTotal Id
	//tipAndTotal.innerHTML= totalPlusTip;						//tip and total value passed to that Id
	totalPerPerson=totalPlusTip/Math.abs(peopleCount);			//ABSOLUTE VALUE of (total plus tip and divides by # of people)
	console.log(totalPlusTip); 									//console log value tester
    
	
	
	
	
	$("#tipAndTotal").html("Total of bill is:   " +totalBill+ "$  "  +"Total of bill with tip is:  "  +totalPlusTip+"$   " +  "Total per person with tip is:   "  +totalPerPerson+"$    " +    "Total tip per person:   "+ tipPerPerson+"$");
	//var selectedValue = document.getElementById("service").value;
		console.log(selectedValue);
		console.log(totalPerPerson +"$ per person");
		
		validation(); //validation function from below
		
		
	}
	
	
		//Function validating if "peopleCount" has a null value
    function validation(message,color){
		var peopleCount=0;				//setting peopleCount to 0
		var peopleMatch= /^[0-9]*$/;
	if (totalBill=document.getElementById("totalBill").value==""){						//validating if totalBill is entered and not empty
			(totalBill=document.getElementById("totalBill").style.color="red");
			alert("***Please fill out all the fields!!***");
			
			
			return false;
		
		}if (totalBill<0){
			totalBill=Math.abs(totalBill);
			console.log(Math.abs(totalBill));
			return totalBill;
		}
    
		
	if ( peopleCount=document.getElementById("peopleCount").value==""){					//validating if peopleCount is entered and not empty
			(peopleCount=document.getElementById("peopleCount").style.color="red");
			alert("***Please fill out all the fields!!***");
			
			
			return false;
		
			}
			if ( peopleCount<1){														//setting peopleCount (amount of people) to 1 if value entered is 0 or negative
			(peopleCount=document.getElementById("peopleCount").value);
			peopleCount=1;
			
			}
		
		
		 
	
	//get Star Wars random waiter numbers and name
	
		var randomPeople = Math.floor ((Math.random() * 87) + 1);//Random math function selecting from 87 names
	alert("Random waiter number is :  " +randomPeople);									//  display the number of the waiter name chosen
	$.ajax({
	method:"GET", //"POST" 
		// url address requested from site

	
	url: "https://swapi.co/api/people/" + randomPeople,									//access star wars url
	// on successful request
	success :function(result){															//if sucessful "function"
	//result = content of the url
	{
	console.log(result);
	alert("Your waiter, " + result.name + ", thanks you"); 								//thank you alert once total is displayed
	}

	}

	  });	
	
}

 