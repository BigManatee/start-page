function date() {
  let currentDate = new Date();
  let dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  let date = currentDate.toLocaleDateString("en-GB", dateOptions);
  document.getElementById("header_date").innerHTML = date;
}

function greet() {
  let currentTime = new Date();
  let greet = Math.floor(currentTime.getHours() / 6);
  switch (greet) {
    case 0:
      document.getElementById("header_greet").innerHTML = "Good night";
      break;
    case 1:
      document.getElementById("header_greet").innerHTML = "Good morning";
      break;
    case 2:
      document.getElementById("header_greet").innerHTML = "Good afternoon";
      break;
    case 3:
      document.getElementById("header_greet").innerHTML = "Good evening";
      break;
  }
}

function info() {
  var systemInfoDiv = document.getElementById("systemInfoContainer");
  document.getElementById("infoContainer").style.opacity = 1;
  var a = platform.os + "<br>" + platform.name + " " + platform.version + "<br>" + screen.width + " x " + screen.height,
      b = window.navigator.hardwareConcurrency,
      c = parseInt(b),
      d = "<span id=\"ip\" onclick=\"toggleShowIP()\">Show IP</span>";
  systemInfoDiv.innerHTML = 0 < c ? a + "<br>" + (c + " Threads") + "<br>" + d : a + "<br>" + d;
}

function buildDate() {
  var dateDiv = document.getElementById("dateContainer");
  var a = new Date,
      b = 12 < a.getHours() ? a.getHours() - 12 : a.getHours(),
      c = 12 <= a.getHours() ? "PM" : "AM";
    b = 10 > b ? "0" + b : b, 1 > b && (b = 12);
  var d = 10 > a.getMinutes() ? "0" + a.getMinutes() : a.getMinutes(),
      e = 10 > a.getSeconds() ? "0" + a.getSeconds() : a.getSeconds(),
      f = b + ":" + d + ":" + e + " " + c;
  dateDiv.innerHTML = "<font class=\"font-1d5em\">" + f + "</font>", setTimeout(buildDate, 1e3);
}

function getIPData() {
  var a = new XMLHttpRequest;
  a.open("GET", "https://ipinfo.io/ip", !0), a.onload = function() {
      if (200 <= a.status && 400 > a.status) {
          var b = a.responseText;
          document.getElementById("ip").innerHTML = b
      } else;
  }, a.onerror = function() {}, a.send()
}
function toggleShowIP() {
  "Show IP" == document.getElementById("ip").innerHTML ? getIPData() : document.getElementById("ip").innerHTML = "Show IP"
}


function loadFunctions() {
  date();  
  greet();
  info();
  buildDate();
}