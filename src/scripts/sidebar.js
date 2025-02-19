import "../styles/sidebar.css";

function displaySidebar() {
  const project = createCard("Project");
  const task = createCard("Task");
  const completed = createCard("Completed");
  const dueSoon = createCard("Due Soon");

  const sidebar = document.createElement("aside");
  sidebar.id = "sidebar";

  sidebar.appendChild(project.div);
  sidebar.appendChild(task.div);
  sidebar.appendChild(completed.div);
  sidebar.appendChild(dueSoon.div);

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
