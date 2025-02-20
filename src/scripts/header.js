import "../styles/header.css";
import icon from "../img/output-onlinepngtools.png";

function displayHeader() {
  const h1 = document.createElement("h1");
  h1.textContent = "Terminal Todo";

  const header = document.createElement("header");
  header.id = "header";
  header.appendChild(addIcon(icon));
  header.appendChild(h1);
  header.appendChild(addIcon(icon, true));

  document.body.appendChild(header);
}

function addIcon(img, isSecondIcon = false) {
  const icon = document.createElement("img");
  icon.classList.add("icon");
  if (isSecondIcon) {
    icon.id = "rotate-icon";
  }
  icon.src = img;

  return icon;
}

export { displayHeader };
