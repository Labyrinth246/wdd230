
document.getElementById("currentDate").innerHTML = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) ;
const overlay = document.getElementById("overlay");

function hamNav() {
    var x = document.getElementById("nav");
    if (x.style.marginRight === "-250px") {
      x.style.display = "grid";
      x.style.visibility = 'visible';
      x.style.marginRight = "0px";
      overlay.style.visibility = "visible";
      overlay.style.opacity = "80%";
    } else {
      overlay.style.visibility = "hidden"
      x.style.marginRight = "-250px";
      x.style.visibility = 'hidden';
      overlay.style.opacity = "0";
    }
  }

if (matchMedia) {
  let mq = window.matchMedia("(min-width: 45em)");
  mq.addListener(checkWidth);
  checkWidth(mq);
}


function checkWidth(mq) {
  var x = document.getElementById("nav");
  if (mq.matches) {
    x.style.display = "flex";
    x.style.visibility = 'visible';
    x.style.justifyContent = 'center';
    x.style.alignItems = 'center';
    x.style.margin = '0px';
    x.style.position = 'relative';
  } else {
    x.style.display = "none";
    x.style.visibility = 'hidden';
    x.style.position = 'absolute';
    x.style.marginTop = '10%';
  }
};

document.getElementById("lastEdit").innerHTML = new Date(document.lastModified).toLocaleString();

document.getElementById("date").innerHTML = new Date().getFullYear();


var currentDay = new Date().getDay();

//Check if it's Monday or Tuesday
if (currentDay === 1 || currentDay === 2) {

    var banner = document.getElementById('banner');
    banner.style.display = 'inline';
    banner.innerHTML = '🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.';
}