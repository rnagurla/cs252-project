var start;
var destination;

function myFunc() {
    alert("js working");

    var s = document.getElementById('start');
    var d = document.getElementById('destination');

    var start = s.value;
    var destination = d.value;

    alert(start);
    alert(destination);

    document.location = 'Results.html';

}
