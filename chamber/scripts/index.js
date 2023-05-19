
document.getElementById("currentDate").innerHTML = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) ;
const overlay = document.getElementById("overlay");

function hamNav() {
    var x = document.getElementById("nav");
    if (x.style.marginRight === "-250px") {
      x.style.display = "grid";
      x.style.visibility = 'visible'
      x.style.marginRight = "0px";
      overlay.style.visibility = "visible";
      overlay.style.opacity = "80%";
    } else {
      overlay.style.visibility = "hidden"
      x.style.marginRight = "-250px";
      x.style.display = "none";
      x.style.visibility = 'hidden';
      overlay.style.opacity = "0";
    }
  }