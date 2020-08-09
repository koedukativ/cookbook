<<<<<<< HEAD
//Share Button
//document.getElementById("cb-share-recipe").style.visibility = "hidden"; //Share Button is hidden by default

function shareURL() {
    alert("Use this link to share the recipe: " );                 //+ window.location
};

document.getElementById("cb-share-recipe").addEventListener("click", shareURL)



/*


for (var i = 1; i < 4; i++) {
    document.getElementById("cb-recipe"+i).style.visibility = "hidden";
}

>>>>>>> origin/master
// Create an Event Listener for every button
var recipeButtons = document.getElementsByClassName("cb-recipe-btn");

for (var j = 0; j < recipeButtons.length; j++) {
    recipeButtons[j].addEventListener("click", displayRecipe, false);
}

// Display the Recipe corresponding to the Button
function displayRecipe() {
    document.getElementById("cb-share-recipe").style.visibility = "visible"; //When a recipe is selected, the Share Button appears
    document.getElementById("cb-recipe").innerHTML= document.getElementById("cb-recipe" + extractNumber(this.id)).innerHTML;
}

//Takes the Button ID and Returns just the Number
function extractNumber(id) {
    return id.split("-btn").pop();

*/
