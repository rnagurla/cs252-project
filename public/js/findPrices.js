var start;
var destination;
var distance = 20;
var taxi_price;
<<<<<<< HEAD
var uber_price = 0;
=======
var uber_price = 20;
>>>>>>> acb1fb8920a122f2265d3144f74a67db05db6a96
var lyft_price;
var time;
var xhr = new XMLHttpRequest();

<<<<<<< HEAD
function ride() {
=======

function sleep(ms){
  return new Promise(resolve => setTimeout(resolve,ms));
}

async function myFunc() {
    var s = document.getElementById('start');
    var d = document.getElementById('destination');
>>>>>>> acb1fb8920a122f2265d3144f74a67db05db6a96
    var dis = document.getElementById('distance');
    distance = dis.value;
    localStorage.setItem("storageName", distance);
}

async function myFunc() {
//    var s = document.getElementById('start');
//    var d = document.getElementById('destination');
//    var dis = document.getElementById('distance');

//    start = s.value;
//    destination = d.value;
//    distance = dis.value;
    time = 5.45*distance;
    uberPrices();
    lyftPrices();
    taxi();
<<<<<<< HEAD

=======
    await sleep(200);
    alert(uber_price);
>>>>>>> acb1fb8920a122f2265d3144f74a67db05db6a96
//    alert(taxi_price);
//    alert(uber_price);
//    alert(lyft_price);
    var url = "https://maps.googleapis.com/maps/api/directions/json?origin=" + start + "&destination=" + destination + "&key=AIzaSyDJBmjA5VQP8dtPI9MfCyub-DAXjm5jvF0";
//    alert(url);
    xhr.open('GET', 'https://api.uber.com/v1.2/estimates/price?server_token=dbdUaCNIVpwYDlb_hSSumhsT-4wN7Sy8gH0Yj-gt&start_latitude=37.7752315&start_longitude=-122.418075&end_latitude=37.7752415&end_longitude=-122.518075');
//    xhr.setRequestHeader("Authorization", "Token dbdUaCNIVpwYDlb_hSSumhsT-4wN7Sy8gH0Yj-gt");


    xhr.send();
    xhr.addEventListener("readystatechange", processRequest, false);

    document.location = 'Results.html';
}


function processRequest() {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var response = JSON.parse(xhr.responseText);
         alert(xhr.responseText);
    }
}

function uberPrices() {

    this.uber_price = 2.2 + 2 + 1.26*distance + 0.2*time;
    this.uber_price = uber_price.toFixed(2);
    alert(this.uber_price);


}

function lyftPrices() {
    lyft_price = 3.7 + 0.2*time + 1.2*distance;
    lyft_price = lyft_price.toFixed(2);
}

function taxi() {
    taxi_price = 3.5 + 3*(distance);
    taxi_price = taxi_price.toFixed(2);
}
