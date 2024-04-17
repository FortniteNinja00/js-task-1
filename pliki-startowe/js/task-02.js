const ingredients = [ "Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments" ];

for( let i = 0; i < ingredients.length; i++){
    const gaming= document.createElement("li");
    gaming.innerText=ingredients[i];
    gaming.classList.add("item");
    document.getElementById("ingredients").appendChild(gaming);
}
