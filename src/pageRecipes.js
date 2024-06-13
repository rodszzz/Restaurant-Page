// function pageRecipes() {
// coisa
// }

const pageRecipes = document.createElement("div");
pageRecipes.classList.add("tabcontent");
pageRecipes.setAttribute("id", "recipes");

pageRecipes.innerHTML = `
  <h3>Recipes</h3>
  <h4>pão de queijo da casa</h4>
  <ul>
    <li>ovo</li>
    <li>polvilho azedo</li>
    <li>amor</li>
  </ul>
`;

export default pageRecipes;
