var start;
var destination;
var taxi_price;
var uber_price;
var lyft_price;
var xhr = new XMLHttpRequest();


function myFunc() {
    var s = document.getElementById('start');
    var d = document.getElementById('destination');

    start = s.value;
    destination = d.value;

    uberPrices();
    lyftPrices();
    taxi();
    var url = "https://maps.googleapis.com/maps/api/directions/json?origin=" + start + "&destination=" + destination + "&key=AIzaSyDJBmjA5VQP8dtPI9MfCyub-DAXjm5jvF0";
alert(url);
    xhr.open('GET', 'https://api.uber.com/v1.2/products?latitude=37.7759792&longitude=-122.41823', true);
    xhr.setRequestHeader("Authorization", "Token ")
    console.log('OPENED', xhr.status);


    xhr.send();
    xhr.addEventListener("readystatechange", processRequest, false);

    //document.location = 'Results.html';
}

xhr.onprogress = function () {
  console.log('LOADING', xhr.status);
};

xhr.onload = function () {
  console.log('DONE', xhr.status);
};

function processRequest() {
    if (xhr.readyState == 4 /*&& xhr.status == 200*/) {
        alert(xhr.status);
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
