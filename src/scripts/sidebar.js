import "../styles/sidebar.css";
import projectImg from "../img/xenia-radchenko-ezEn4jYrVYQ-unsplash.jpg";
import taskImg from "../img/erik-mclean-QzpgqElvSiA-unsplash.jpg";
import completedImg from "../img/frank-okay-R1J6Z1cnJZc-unsplash.jpg";
import dueSoonImg from "../img/georgie-cobbs-SU35VU5de1o-unsplash.jpg";

function displaySidebar() {
  const project = createCard("Project", projectImg);
  const task = createCard("Task", taskImg);
  const completed = createCard("Completed", completedImg);
  const dueSoon = createCard("Due Soon", dueSoonImg);

  const sidebar = document.createElement("aside");
  sidebar.id = "sidebar";

  sidebar.appendChild(project.div);
  sidebar.appendChild(task.div);
  sidebar.appendChild(completed.div);
  sidebar.appendChild(dueSoon.div);

  document.body.appendChild(sidebar);
}

function createCard(cardName, imgSrc = null) {
  const div = document.createElement("div");
  div.classList.add("card");

  const h2 = document.createElement("h2");
  h2.textContent = cardName;

  div.appendChild(h2);

  if (imgSrc) {
    const img = document.createElement("img");
    img.src = imgSrc;
    div.appendChild(img);
  }

  return { div };
}

export { displaySidebar };
