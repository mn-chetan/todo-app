import "../styles/terminal.css";

function displayTerminal() {
  const h3 = document.createElement("h3");
  h3.textContent = "Terminal v0.0.1";

  const windowControls = document.createElement("div");
  windowControls.id = "window-control";

  const redButton = new Button("red").createButton();
  const yellowButton = new Button("yellow").createButton();
  const greenButton = new Button("green").createButton();

  windowControls.appendChild(redButton);
  windowControls.appendChild(yellowButton);
  windowControls.appendChild(greenButton);

  const terminalHeader = document.createElement("div");
  terminalHeader.id = "terminal-header";
  terminalHeader.appendChild(h3);
  terminalHeader.appendChild(windowControls);

  const terminal = document.createElement("div");
  terminal.id = "terminal";
  terminal.appendChild(terminalHeader);

  const todoState = {
    projects: {},
  };

  appendInput(terminal, todoState);

  document.body.appendChild(terminal);
}

class Button {
  constructor(buttonColor) {
    this.buttonColor = buttonColor;
  }

  createButton() {
    const button = document.createElement("button");
    button.classList.add("window-button");
    button.id = `${this.buttonColor}-button`;
    return button;
  }
}

function appendInput(terminal, todoState) {
  const newSpan = document.createElement("span");
  newSpan.textContent = "$";
  newSpan.id = "prompt";

  const newInput = document.createElement("input");
  newInput.type = "text";
  newInput.id = "input";

  const newInputLine = document.createElement("div");
  newInputLine.id = "input-line";
  newInputLine.appendChild(newSpan);
  newInputLine.appendChild(newInput);

  terminal.appendChild(newInputLine);
  newInput.focus();

  newInput.addEventListener("keydown", (e) => {
    processCommand(e, todoState, newInput, terminal);
  });
}

function processCommand(e, todoState, newInput, terminal) {
  if (e.key === "Enter") {
    newInput.disabled = true;

    const arr = newInput.value.split(" ");

    const command = document.createElement("p");
    command.id = "command";

    if (arr[0] === "project" && arr.length === 3) {
      if (arr[1] === "add") {
        if (!(arr[2] in todoState["projects"])) {
          todoState["projects"][arr[2]] = [];
        }
        command.textContent = `project add ${arr[2]} processed`;
        terminal.appendChild(command);
      } else if (arr[1] === "remove") {
        if (arr[2] in todoState["projects"]) {
          delete todoState["projects"][arr[2]];
          command.textContent = `project remove ${arr[2]} processed`;
          terminal.appendChild(command);
        } else {
          command.textContent = `project remove ${arr[2]} not processed`;
          terminal.appendChild(command);
        }
      } else if (arr[1] === "view" && arr[2] === "all") {
        const main = document.querySelector("#main");
        Object.keys(todoState["projects"]).forEach((project) => {
          const projectCard = document.createElement("div");
          projectCard.classList.add("project-card");
          projectCard.textContent = project;
          main.appendChild(projectCard);
        });
      } else {
        command.textContent = `${arr.join(" ")} not processed`;
        terminal.appendChild(command);
      }
    } else {
      command.textContent = `${arr.join(" ")} not processed`;
      terminal.appendChild(command);
    }

    appendInput(terminal, todoState);
  }
}

export { displayTerminal };
