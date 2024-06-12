function pageHome() {
  // console.log("initial page load!");
  // const element = document.createElement("div");
  // element.classList.add("tabcontent");
  // // element.classList.add("active");
  // element.setAttribute("id", "home");
  // element.innerHTML = `
  //     <h3>um dos restaurantes.</h3>
  //     <p>a comida aqui é servida.</p>
  // `;
  // element.classList.add("initial-page");
  // talvez pegue isso pra adicionar as tag e class e não fazer uma nova div
  // dentro de outra div! aí só tem que botar o <h3> e <p> dentro da div feita pelo js
  // return element;
}

const element = document.createElement("div");
element.classList.add("tabcontent");
// element.classList.add("active");
element.setAttribute("id", "home");

element.innerHTML = `
  <h3>um dos restaurantes.</h3>
  <p>a comida aqui é servida.</p>
  <p>a bagaça do mady tá no bolso</p>
`;

export default element;
