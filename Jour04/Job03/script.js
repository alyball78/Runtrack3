let pokemons =[];
let filtrerButton = document.getElementById("filtrerButton");
filtrerButton.addEventListener("click", ()=>{
    let id= document.getElementById("id").value;
    let name =document.getElementById("name").value;
let type =document.getElementById("type").value;
    fetch("pokemon.json")
.then(response => response.json())
.then(jsonString => {
    pokemons = jsonString;
if (id !== ""){
id = parseInt(id);
pokemons = pokemons.filter(function(element){
    return element.id === id;
});

}

if(name !== ""){
pokemons = pokemons.filter(function(element){
   return element.name.french.toLowerCase().includes(name.toLowerCase());   
});

}
if (type !== ""){
pokemons =pokemons.filter(function(element){
return element.type.includes(type);

})

}
console.log(pokemons);
});

});             