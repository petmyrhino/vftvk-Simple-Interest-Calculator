function compute()
{
    var p = document.getElementById("principal").value;
    var r = document.getElementById("interestRange").value;
    var y = document.getElementById("years").value;
    var yNumber = Number(y);
    var calculationOfMoney = p * yNumber * r/100;
    
    /*years*/
    var d = new Date();
 	var n = d.getFullYear();
 	var nNumber = Number(n);
  	var futureYears = nNumber + yNumber;
  	
  
  	
  	/*final result */
  	document.getElementById("result").innerHTML = 
  	"If you deposit " + p + ", <br> at an interest rate of " + r + ".<br> You will receive an amount of " + calculationOfMoney + ", <br> in the year " + futureYears;
}


/*show the interest range */
function rangeValue() {
	var resultNumber = document.getElementById("interestRange").value;
	document.getElementById("interestNumber").innerHTML = resultNumber + "%";

}

function validateForm() {
 var x = document.forms["principalForm"]["principal"].value;
 if (x <= 0) {
    alert("Enter a positive number");
    return false;
  } 
}
       
       
       
       

/*  



Make sure the numbers in the result are highlighted.

Add validation for "Principal" input box. If the user enters zero or negative values, show an alert "Enter a positive number"

Once the user clicks on the alert "OK" button, take the user back to the "Principal" input box, by setting the focus on this box. You can refer to the Javascript Form Validation lab.

You are done with the coding. Let us proceed to next exercise where we test the code.

Write comments in your code. They not only help you score more marks in the project, but also help you to debug and maintain the code in the long term. 
*/