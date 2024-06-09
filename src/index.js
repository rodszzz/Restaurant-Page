import "./style.css";
import pageLoad from "./initialPageLoad";
import pageRecipes from "./pageRecipes";
import pageAbout from "./about";

console.log("working???");

// function doThing() {}

// por exemplo quando for mudar algo no DOM faz no doThing() e dá um append aqui
document.body.appendChild(pageLoad());

const but1 = document.getElementById("but1");
const initialPage = document.getElementsByClassName("initial-page");
const but2 = document.getElementById("but2");
const but3 = document.getElementById("but3");

but1.addEventListener("click", () => {
  document.body.removeChild(initialPage);
  document.body.appendChild(pageRecipes());
});

but2.addEventListener("click", () => {
  document.body.appendChild(pageRecipes());
});

but3.addEventListener("click", () => {
  // doOtherStuff
  document.body.appendChild(pageAbout());
});
