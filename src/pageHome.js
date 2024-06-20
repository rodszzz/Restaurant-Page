import desgraca from "./cuscuzPaulista.jpg";

const pageHome = document.createElement("div");
pageHome.classList.add("tabcontent");
pageHome.setAttribute("id", "home");

pageHome.innerHTML = `
  <h3>Um dos restaurantes</h3>
  <p>a comida aqui é servida.</p>
`;

// adiciona a imagem na div
const cuscuzHorrivel = new Image();
cuscuzHorrivel.src = desgraca;

pageHome.appendChild(cuscuzHorrivel);

export default pageHome;
