/*function calculate*/

function calculate(){

	//get input values
	var amount = document.getElementById("amount");
	var apr = document.getElementById("apr");
	var years = document.getElementById("years");
	var zipcode = document.getElementById("zipcode");
	var payment = document.getElementById("payment");
	var total = document.getElementById("total");
	var totalinterest = document.getElementById("totalinterest");


    //parse string values to numbers
    var principal = parseFloat(amount.value);
    var interest = parseFloat(apr.value)/100/12;
    var payments = parseFloat(years.value) * 12;

    //monthly payment computation
    var x = Math.pow(1 + interest, payments);
    var monthly = (principal*x*interest)/(x-1);

    //if computation is true
    if(isFinite(monthly)){
    	payment.innerHTML = monthly.toFixed(3);
    	total.innerHTML = (monthly * payments).toFixed(2);
    	totalinterest.innerHTML = ((monthly*payments)-principal).toFixed(2);

    	//save the user's input/cache values
    	save(amount.value, apr.value, years.value, zipcode.value);

    	//advertise
    	try{
    		getLenders(amount.value, apr.value, years.value, zipcode.value);
    	}catch(e){
    		console.log("Error: " + e);
    	}
    }else{
    	payment.innerHTML = "";
    	total.innerHTML = "";
    	totalinterest.innerHTML = "";
    	chart();
    }
}

//function save
function save(amount, apr, years, zipcode){
	if(window.localStorage){
		//if the browser supports it
	    localStorage.loan_amount = amount;
	    localStorage.loan_apr = apr;
	    localStorage.loan_years = years;
	    localStorage.loan_zipcode = zipcode;
	}
}


//Automatically attempt to restore input fields when the document first loads
window.onload = function(){
	//if the browser supports localStorage and we have some stored data

	document.getElementById("amount").value = localStorage.loan_amount;
	document.getElementById("apr").value = localStorage.loan_apr;
	document.getElementById("years").value = localStorage.loan_years;
	document.getElementById("zipcode").value = localStorage.loan_zipcode;
}

//function get lenders
function getLenders(amount, apr, years, zipcode){
	//if the browser does not support XMLHttpRequest object, do nothing
	if(!window.XMLHttpRequest) return;

	//find the element to display a list of lenders
	var ad = document.getElementById("lenders");
	if(!ad) return;

	//encode user's input as query parameters in a URL
	var url = "getLenders.php" + //service url plus
	"?amt=" + encodeURIComponent(amount) + //use data in query string
	"&apr=" + encodeURIComponent(apr) +
	"&yrs=" + encodeURIComponent(years) +
	"&zip=" + encodeURIComponent(zipcode);

	 //fetch the content of that UTL using XMLHttpRequest object
	 var req = new XMLHttpRequest(); // begin a new request
	 req.open("GET", url); //an HTTP request for url
	 req.send(null); //send the request with no body

	 //before returning, register an event handler function that will be called at some later time when the HTTP server's response arrives. This kind of asynchronous programming is very commin in client-side JavaScript.
	 req.onreadystatechange = function(){
	 	if(req.readyState == 4 && req.status == 200){
	 		//complete valid response in reception
	 		var response = req.responseText;
	 		var lenders = JSON.parse(response);

	 		//array of lenders to a string
	 		var list= "";
			lenders.forEach((element) =>{
				list += "<li><a href='" + element.url + "'>" + element.name + "</a>";
			});
	 		}

	 		ad.innerHTML = "<ul>" + list + "</ul>"
	 }
}

//function chart
function chart(principal, interest, monthly, payments){
	var graph = document.getElementById("graph");
	graph.width = graph.width; //magic to clear and rest the canvas element
	//if browser does not support canvas
	if(arguments.length == 0 | !graph.getContext) return;

	var g = graph.getContext("2d");
	var width = graph.width, height = graph.height;

	//payments and dollar amounts to pixels
	function paymentToX(n){return n*width/payments;}
	function amountToY(a){return height-(a*height/(monthly*payments*1.05));}

	//payments are straight line from (0,0) to (payments, monthly*payments)
	g.moveTo(paymentToX(0), amountToY(0)); //start at lower left
	g.lineTo(paymentToX(payments), amountToY(monthly*payments));

	g.lineTo(paymentToX(payments), amountToY(0)); g.closePath();
	g.fillStyle = "#f88";
	g.fill();
	g.font = "bold 12px sans-serif"; g.fillText("Total Interest Payments", 20,20);
	var equity = 0;
	g.beginPath();
	equity += (monthly - thisMonthsInterest); g.lineTo(paymentToX(p),amountToY(equity));
	g.lineTo(paymentToX(payments), amountToY(0)); g.closePath();
	g.fillStyle = "green";
	g.fill();
	g.fillText("Total Equity", 20,35);
	g.beginPath();
	g.moveTo(paymentToX(0),amountToY(bal));
	for(var p = 1; p <= payments; p++) {
	var thisMonthsInterest = bal*interest; bal -= (monthly - thisMonthsInterest); g.lineTo(paymentToX(p),amountToY(bal));
	}
	g.lineWidth = 3;
	g.stroke();
	g.fillStyle = "black"; g.fillText("Loan Balance", 20,50);
	// Now make yearly tick marks and year numbers g.textAlign="center";
	var y = amountToY(0);
	for(var year=1; year*12 <= payments; year++) {
		var x = paymentToX(year*12);
		g.fillRect(x-0.5,y-3,1,3);
		if (year == 1) g.fillText("Year", x, y-5);
		if (year % 5 == 0 && year*12 !== payments)
		g.fillText(String(year), x, y-5);
	}

	g.textAlign = "right";
	g.textBaseline = "middle";
	var ticks = [monthly*payments, principal];
	var rightEdge = paymentToX(payments);
	for(var i = 0; i < ticks.length; i++) {
			var y = amountToY(ticks[i]);
			g.fillRect(rightEdge-3, y-0.5, 3,1);
			g.fillText(String(ticks[i].toFixed(0)),rightEdge-5, y);
		}
}
