var clicks = 0;
var interval = 1000;
var intervalCost = 10;

var clickers = {

    'autoclicker' : {
        'cost': 10,
        'qty' : 0,
		'value' : 1
    },
    'superclicker' : {
        'cost': 100,
        'qty' : 0,
		'value' : 10
    },
    'megaclicker' : {
        'cost': 1000,
        'qty' : 0,
		'value' : 100
    },
	'ultraclicker' : {
        'cost': 10000,
        'qty' : 0,
		'value' : 1000
    },
	'epicclicker' : {
        'cost': 100000,
        'qty' : 0,
		'value' : 10000
    },
};


function Click(){

	clicks++;

	document.getElementById("tracker").innerHTML = clicks;
};

function buyClicker(type){

    var clickerCost = clickers[type]["cost"];                    //works out the cost of this clicker
    if(clicks >= clickerCost){                                   //checks that the player can afford the clicker
        clickers[type]["qty"] = clickers[type]["qty"] + 1;       //increases number of clickers
    	clicks = clicks - clickerCost;                          //removes the cookies spent
		clickers[type]["cost"] = Math.floor(clickers[type]["cost"] * 1.1);
    };

    document.getElementById(type+"Qty").innerHTML = clickers[type]["qty"];  //updates the number of clickers for the user
    document.getElementById(type+"Cost").innerHTML = clickers[type]["cost"];  //updates the clicker cost for the user

	document.getElementById('tracker').innerHTML = clicks;  //updates the number of cookies for the user

};


function decreaseInterval() {
	if (clicks >= intervalCost) {
		interval--;
		intervalCost = Math.floor(intervalCost * 1.1);
	}
	console.log(intervalCost);
	document.getElementById('currentinterval').innerHTML = interval;  
	document.getElementById('intervalCost').innerHTML = intervalCost;  
}

window.setInterval(function(){

	if (clicks >= 10) { document.getElementById("autoclicker").style.visibility="visible"; }
	if (clicks >= 100) { document.getElementById("superclicker").style.visibility="visible"; }
	if (clicks >= 1000) { document.getElementById("megaclicker").style.visibility="visible"; }
	if (clicks >= 10000) { document.getElementById("ultraclicker").style.visibility="visible"; }
	if (clicks >= 100000) { document.getElementById("epicclicker").style.visibility="visible"; }
	if (clicks >= 1000000) { document.getElementById("interval").style.visibility="visible"; }
				
	var total = 0;
	for (var type in clickers) {
		clicks = clicks + (clickers[type]["value"] * clickers[type]["qty"]);
		total = total + (clickers[type]["value"] * clickers[type]["qty"]);
	}

	if (total > 0) { document.getElementById("gain").style.visibility="visible"; }
	if (interval==0)
	{
		document.getElementById('victory').innerHTML = "YOU WIN!!!!!"
	}

	document.getElementById("tracker").innerHTML = clicks;
	document.getElementById("total").innerHTML = total;
}, interval);


