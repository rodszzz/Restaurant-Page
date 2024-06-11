function pageAbout() {
  const about = document.createElement("div");

  about.innerHTML = `
    <div class="tabcontent" id="about">
      <h3>esse com certeza é um dos restaurantes.</h3>
      <p>aqui nois fazemo comida!</p>
    </div>
  `;

  return about;
}

export default pageAbout;
