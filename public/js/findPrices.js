var start;
var destination;
var distance;
var taxi_price;
var uber_price;
var lyft_price;
var time;
var xhr = new XMLHttpRequest();


function myFunc() {
    var s = document.getElementById('start');
    var d = document.getElementById('destination');
    var dis = document.getElementById('distance');

    start = s.value;
    destination = d.value;
    distance = dis.value;
    time = 5.45*distance;
    uberPrices();
    lyftPrices();
    taxi();
    alert(taxi_price);
    alert(uber_price);
    alert(lyft_price);
    var url = "https://maps.googleapis.com/maps/api/directions/json?origin=" + start + "&destination=" + destination + "&key=AIzaSyDJBmjA5VQP8dtPI9MfCyub-DAXjm5jvF0";
alert(url);
    xhr.open('GET', 'https://api.uber.com/v1.2/estimates/price?server_token=dbdUaCNIVpwYDlb_hSSumhsT-4wN7Sy8gH0Yj-gt&start_latitude=37.7752315&start_longitude=-122.418075&end_latitude=37.7752415&end_longitude=-122.518075');
//    xhr.setRequestHeader("Authorization", "Token dbdUaCNIVpwYDlb_hSSumhsT-4wN7Sy8gH0Yj-gt");


    xhr.send();
    xhr.addEventListener("readystatechange", processRequest, false);

    //document.location = 'Results.html';
}


function processRequest() {
    if (xhr.readyState == 4 /*&& xhr.status == 200*/) {
        alert(xhr.status);
        var response = JSON.parse(xhr.responseText);
         alert(xhr.responseText);
    }
}

function uberPrices() {

    uber_price = 2.2 + 2 + 1.26*distance + 0.2*time;

}

function lyftPrices() {
    lyft_price = 1.9 + 0.9 + 0.09*time + 0.9*distance;
}

function taxi() {
    taxi_price = 3.5 + 3*(distance);
}
