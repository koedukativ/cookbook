$('#cb-share-recipe').hide(); //Share Button is hidden by default

$('#cb-share-recipe').click(function() {
    alert("Use this link to share the recipe: " + location);
});

$('.cb-recipe-btn').click(function(e){
    $('#cb-recipe').load("recipes.html #cb-recipe" + extractNumber(e.currentTarget.id));
    $('#cb-share-recipe').show();  //When a recipe is selected, the Share Button appears
    }
);

//takes the button ID and returns just the number
function extractNumber(id) {
    return id.split("-btn").pop();
}
