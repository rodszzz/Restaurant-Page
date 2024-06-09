function pageLoad() {
  console.log("initial page load!");

  const element = document.createElement("div");

  element.innerHTML = `olha só! uma <a href="https://instagram.com/pitayaq">pitaya</a>!!!`;
  element.classList.add("initial-page");

  return element;
}

export default pageLoad;
