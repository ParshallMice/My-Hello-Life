setClock()
function setClock() {
    var d = new Date();
    var h = d.getHours() % 12;
    if (h == 0) {
        h = 12;
    }
    var m = checkTime(d.getMinutes());
    if (d.getHours() >= 12) {
       var ap = " PM";
    } else {
       var ap = " AM";
    }
    document.getElementById('timedis').innerHTML = h + ":" + m + ap 
    setTimeout(setClock, 750);
}

function checkTime(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}