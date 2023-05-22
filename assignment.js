document.getElementById('vegs').style.backgroundColor="silver";
document.getElementById("title").style.color="green";
document.getElementById("title").style.fontSize="40px";
document.getElementById("category").style.marginLeft="10%"
document.getElementById("sell").style.fontSize="25px"
document.getElementById("fruit").style.fontSize="29px"
document.getElementById("veg").style.fontSize="29px"




document.getElementById("fruit").style.textTransform="uppercase"
document.getElementById("veg").style.textTransform="uppercase"

let addFruit= document.createElement('li');
addFruit.innerHTML="orange"
document.getElementById("fruList").appendChild(addFruit);
document.getElementById("fruList").style.fontSize="20px"



let addVegetable= document.createElement('li');
addVegetable.innerHTML="Cabagge"
document.getElementById("vegList").appendChild(addVegetable);
document.getElementById("vegList").style.fontSize="20px"



