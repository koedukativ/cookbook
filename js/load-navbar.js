//XMLHttpRequest loads the Navbar
var xhr = new XMLHttpRequest();
xhr.open('GET', '/cookbook/navigation.html', true);
xhr.onload = function() {
    if(this.status == 200){
        document.getElementById("cb-menu-overlay").innerHTML =this.responseText;
    } else if(this.status == 404) {
        document.getElementById("cb-menu-overlay").innerHTML = "Recipe not found";
    }
}

xhr.send();


//Share Button implementation
document.getElementById("cb-share-recipe").addEventListener("click", shareURL);

function shareURL() {
    alert("Use this link to share the recipe: " + location);
}