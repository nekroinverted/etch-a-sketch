const container = document.querySelector("#container");
let num = 16;
let size = 100 / num;

for(i = 0; i < num; i++){
    for(j = 0; j < num; j++){
        const divElement = document.createElement("div");
      divElement.classList.add("containerelement");
        divElement.style.backgroundColor = "#E0E0D1";
        divElement.style.border = "black 1px solid";
        divElement.style.width = `${size}%`;
        divElement.style.height = `${size}%`;
        container.appendChild(divElement);
        console.log("div created");

    }
}

container.addEventListener("mouseover", function(e){
    if(e.target.classList.contains("containerelement")){
        e.target.style.backgroundColor = "black";
    }
})