const pageRecipes = document.createElement("div");
pageRecipes.classList.add("tabcontent");
pageRecipes.setAttribute("id", "recipes");

pageRecipes.innerHTML = `
  <h3>Recipes</h3>
  <h4>pão de queijo</h4>
  <ul>
    <li>ovo</li>
    <li>polvilho azedo</li>
    <li>amor</li>
  </ul>

  <h4>pudim</h4>
  <ul>
    <li>leite</li>
    <li>ovo</li>
    <li>creme de leite</li>
  </ul>

  <h4>bolo de cenoura</h4>
  <ul>
    <li>cenoura</li>
    <li>farinha</li>
    <li>chocolate</li>
  </ul>
`;

export default pageRecipes;
