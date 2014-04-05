var clicks = 0;

var clickers = 0;
var clickerx = 1;

var superclickers = 0;
var superclickerx = 10;

var megaclickers = 0;
var megaclickerx = 100;

var ultraclickers = 0;
var ultraclickerx = 1000;

var epicclickers = 0;
var epicclickerx = 10000;

function cookieClick(type, number){
	var multiplier = 1;
	if (type == 'supercursor') { multiplier = 10 }
	if (type == 'megacursor') { multiplier = 100 }
	if (type == 'ultracursor') { multiplier = 1000 }
	if (type == 'epiccursor') { multiplier = 10000 }
	console.log(type, number);
    clicks = clicks + number;
	document.getElementById("tracker").innerHTML = clicks;
};

function buyCursor(){
    var cursorCost = Math.floor(10 * Math.pow(1.1,cursors));     //works out the cost of this cursor
    if(clicks >= cursorCost){                                   //checks that the player can afford the cursor
        cursors = cursors + 1;                                   //increases number of cursors
    	clicks = clicks - cursorCost;                          //removes the cookies spent
        document.getElementById('cursors').innerHTML = cursors;  //updates the number of cursors for the user
        document.getElementById('tracker').innerHTML = clicks;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,cursors));       //works out the cost of the next cursor
    document.getElementById('cursorCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

window.setInterval(function(){

	cookieClick('cursor', cursors);
	cookieClick('supercursor', supercursors);
	cookieClick('megacursor', megacursors);
	cookieClick('ultracursor', ultracursors);
	cookieClick('epiccursor', epiccursors);

	if (clicks>=100)
	{
		document.getElementById('victory').innerHTML = "YOU WIN!!!!!"
	}

	console.log(clicks);
}, 1000);



