$('#cb-share-recipe').hide(); //Share Button is hidden by default

document.getElementById("cb-share-recipe").addEventListener("click", shareRecipe);

$('#cb-recipe-btn1').click(function(){
    $('#cb-recipe').load("recipes.html #cb-recipe1");
    $('#cb-share-recipe').show();  //When a recipe is selected, the Share Button appears
    }
);

// document.getElementById("cb-recipe1-button").addEventListener("click", loadRecipe);

function shareRecipe() {
    alert("Use this link to share the recipe: " + location);
}
/*
function loadRecipe() {
    $('#cb-recipe').load("recipes.html #cb-recipe1");
    $('#cb-share-recipe').show();  //When a recipe is selected, the Share Button appears
}
*/
 */