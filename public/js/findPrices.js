var start;
var destination;
var taxi_price;
var uber_price;
var lyft_price;
var xhr = new XMLHttpRequest();


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
    var url = "https://maps.googleapis.com/maps/api/directions/origin=" + start + "&destination=" + destination + "&key=AIzaSyDJBmjA5VQP8dtPI9MfCyub-DAXjm5jvF0";
alert(url);
    xhr.open('GET', url, true);
    xhr.send();
    xhr.addEventListener("readystatechange", processRequest, false);

    //document.location = 'Results.html';
}

function processRequest() {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var response = JSON.parse(xhr.responseText);
         alert(xhr.responseText);
    }
}

function uberPrices() {
    alert(start);
    alert(destination)

}

function lyftPrices() {

}

function taxi() {

}
