$('#cb-share-recipe').hide(); //Share Button is hidden by default

document.getElementById("cb-share-recipe").addEventListener("click", shareRecipe);

$('.cb-recipe-btn').click(function(e){
    $('#cb-recipe').load("recipes.html #cb-recipe" + extractNumber(e.currentTarget.id));
    $('#cb-share-recipe').show();  //When a recipe is selected, the Share Button appears
    }
);

function extractNumber(id) {
    return id.split("-btn").pop();
}

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
