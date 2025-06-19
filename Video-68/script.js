console.log("dhruvin ")

// let boxes = document.getElementsByClassName("box")
// console.log(boxes)

// boxes[2].style.backgroundColor = "red"

// document.getElementById("redbox").style.backgroundColor = "red"

// document.querySelector(".box").style.backgroundColor = "green";
console.log(document.querySelectorAll(".box"))

document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "green";
}) 

let bytag = document.getElementsByTagName("div");
console.log(bytag);

console.log(bytag[0].matches(".box"));
console.log(bytag[1].matches(".box"));

console.log(document.querySelector(".container").contains(document.querySelector(".container")));
console.log(document.querySelector(".container").contains(document.querySelector("body")));
console.log(document.querySelector("body").contains(document.querySelector(".container")));

console.log(bytag[1].closest(".container"));
console.log(bytag[0].closest(".container"));
console.log(bytag[1].closest("html"));