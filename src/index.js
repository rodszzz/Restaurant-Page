import "./style.css";
import pageHome from "./pageHome";
import pageRecipes from "./pageRecipes";
import pageAbout from "./pageAbout";

// read this to more information about tab pages
// https://www.w3schools.com/howto/howto_js_tabs.asp

// see this video and try to implement it with separate js files
// https://youtu.be/5L6h_MrNvsk?si=5OTVW5obOg9z9nKb

console.log("working???");

// function doThing() {
//   // pageHome();
// }

// por exemplo quando for mudar algo no DOM faz no doThing() e dá um append aqui
const content = document.getElementById("content");
content.appendChild(pageHome());
content.appendChild(pageRecipes());

const but1 = document.getElementById("but1");
const but2 = document.getElementById("but2");
const but3 = document.getElementById("but3");

but1.addEventListener("click", () => {});

// but2.addEventListener("click", () => {});

// but3.addEventListener("click", () => {});
