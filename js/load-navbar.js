//XMLHttpRequest loads the Navbar
var xhr = new XMLHttpRequest();
xhr.open('GET', './navigation.html'+'?rand='+Math.random()*200, true);
xhr.onload = function() {
    if(this.status == 200){
        document.getElementById("cb-menu-overlay").innerHTML =this.responseText;
    }
}

window.onload = function () {
  xhr.send();
  //Share Button implementation
  document.getElementById("cb-share-recipe").addEventListener("click", shareURL);
  document.querySelector(".cb-caption").textContent = document.querySelector("h1").textContent;
}


function shareURL() {
    alert("Use this link to share the recipe: " + location);
}