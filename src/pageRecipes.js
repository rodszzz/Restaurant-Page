function pageRecipes() {
  const recipes = document.createElement("div");

  recipes.innerHTML = `
    <div class="tabcontent" id="recipes">
      <h3>Recipes</h3>
      <p>pão de queijo da casa</p>
      <ul>
        <li>ovo</li>
        <li>polvilho azedo</li>
        <li>amor</li>
      </ul>
    </div>
  `;

  return recipes;
}

export default pageRecipes;
