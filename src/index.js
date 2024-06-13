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
// content.appendChild(pageRecipes());

const but1 = document.getElementById("but1");
const but2 = document.getElementById("but2");
const but3 = document.getElementById("but3");

// const pag1 = document.getElementById("home");
// content.appendChild(pageHome());

// const pagHomeFoda = document.getElementById("home");

but1.addEventListener("click", () => {
  if (pageRecipes.classList.contains("active")) {
    pageRecipes.classList.remove("active");
    content.removeChild(pageRecipes);
  }

  if (pageAbout.classList.contains("active")) {
    pageAbout.classList.remove("active");
    content.removeChild(pageAbout);
  }

  pageHome.classList.add("active");
  content.appendChild(pageHome);
});

but2.addEventListener("click", () => {
  //aqui vc adiciona a classe active e remove a classe das outras tabs
  // botar num if else

  // checa pagina home
  if (pageHome.classList.contains("active")) {
    pageHome.classList.remove("active");
    content.removeChild(pageHome);
  }

  // checa pagina about
  if (pageAbout.classList.contains("active")) {
    pageAbout.classList.remove("active");
    content.removeChild(pageAbout);
  }

  pageRecipes.classList.add("active");
  content.appendChild(pageRecipes);
});

but3.addEventListener("click", () => {
  // remove as class active das outras duas tab
  // botar essa porra no if else

  if (pageHome.classList.contains("active")) {
    pageHome.classList.remove("active");
    content.removeChild(pageHome);
  }

  if (pageRecipes.classList.contains("active")) {
    pageRecipes.classList.remove("active");
    content.removeChild(pageRecipes);
  }

  pageAbout.classList.add("active");
  content.appendChild(pageAbout);
});
