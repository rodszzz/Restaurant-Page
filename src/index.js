import "./style.css";

console.log("working???");
console.log("working second time");

function mainComponent() {
  const element = document.createElement("div");

  element.innerHTML = `<a href="https://instagram.com/pitayaq" class="linkFoda">pitaya</a> CLICKA AGORA`;

  return element;
}

document.body.appendChild(mainComponent());
