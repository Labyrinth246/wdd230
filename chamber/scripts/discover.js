document.addEventListener("DOMContentLoaded", function() {
    if (typeof(Storage) !== "undefined") {
    var lastVisit = localStorage.getItem("lastVisit");
    var currentDate = new Date();

    var timeDiff = currentDate - new Date(lastVisit);

    //ms to days
    var daysDiff = Math.round(timeDiff / (1000 * 60 * 60 * 24));

    var resultElement = document.getElementById("visit");
    resultElement.innerHTML = "Days since your last visit: " + daysDiff;

    localStorage.setItem("lastVisit", currentDate);
    } else {
    console.log("Local storage is not supported");
    }
});




  const allImages = document.querySelectorAll("img[data-src]");

  const lazyLoad = (img) => {
    img.setAttribute("src", img.getAttribute("data-src"));
    img.onload = () => {
      img.removeAttribute("data-src");
      img.className = "in";
    };
  };
  
  const options = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px",
  };
  
  if ("IntersectionObserver" in window) {
    const obsrvr = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if (item.isIntersecting) {
          lazyLoad(item.target);
          observer.unobserve(item.target);
        }
      });
    }, options);
    allImages.forEach((img) => {
      obsrvr.observe(img);
    });
  } else {
    allImages.forEach((img) => {
      lazyLoad(img);
    });
  }
  