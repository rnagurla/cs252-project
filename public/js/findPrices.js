var start;
var destination;
var taxi_price;
var uber_price;
var lyft_price;



function myFunc() {
    alert("js working");

    var s = document.getElementById('start');
    var d = document.getElementById('destination');

    start = s.value;
    destination = d.value;

    //alert(start);
//    alert(destination);

//    document.location = 'Results.html';
    uberPrices();
    lyftPrices();
    taxi();
}


function uberPrices() {
    alert(start);
    alert(destination)
    document.location = 'Results.html';
}

function lyftPrices() {

}

function taxi() {
    
}
