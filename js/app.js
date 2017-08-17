function loadMyList() {
    var req = new XMLHttpRequest();
    var first = "https://api.openweathermap.org/data/2.5/weather?q=";
    var city=document.getElementById("enteredInput").value;
    var second="&units=metric&APPID=b9d5fbc6b5a1c8b4ee5f715112d129df";
    var url = first + city + second;
    req.open("GET", url, true);
    req.send();

    req.onreadystatechange = function () {
        if (req.readyState == 4 && req.status == 200) {
            myFunction(req.responseText);
        }
    }
    function myFunction(response) {
        var obj = JSON.parse(response);
       document.getElementById("demo").innerHTML = "<h1> Temperature of " + city + " is  "+ obj.main.temp + "</h1>";
    }
}
