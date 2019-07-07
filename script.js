const container = document.querySelector("#container");

createGrid(16);
function createGrid(number) {
  let size = 100 / number;
  for (i = 0; i < number; i++) {
    for (j = 0; j < number; j++) {
      const divElement = document.createElement("div");
      divElement.classList.add("containerelement");
      divElement.style.backgroundColor = "#E0E0D1";
      divElement.style.border = "black 1px solid";
      divElement.style.width = `${size}%`;
      divElement.style.height = `${size}%`;
      container.appendChild(divElement);
    }
  }
}
function userPrompt() {
  let numberOfDivs = prompt(
    "Enter a number between 1 and 100 to create a grid:"
  );
  if (numberOfDivs < 1 || numberOfDivs > 100) {
    alert("Error");
  }
  emptyGrid();
  createGrid(numberOfDivs);
}

function emptyGrid() {
  let range = document.createRange();
  range.selectNodeContents(container);
  range.deleteContents();
}

container.addEventListener("mouseover", function(e) {
  if (e.target.classList.contains("containerelement")) {
    e.target.style.backgroundColor = "black";
  }
});
