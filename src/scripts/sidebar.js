import "../styles/sidebar.css";

function displaySidebar() {
  const project = createCard("Project");

  const sidebar = document.createElement("sidebar");
  sidebar.appendChild(project.div);

  document.body.appendChild(sidebar);
}

function createCard(cardName) {
  const div = document.createElement("div");
  div.classList.add("card");

  const h2 = document.createElement("h2");
  h2.textContent = cardName;

  div.appendChild(h2);

  return { div };
}

export { displaySidebar };
