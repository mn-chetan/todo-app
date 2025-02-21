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

  const span = document.createElement("span");
  span.textContent = "$";
  span.id = "prompt";

  const input = document.createElement("input");
  input.type = "text";
  input.id = "input";

  const inputLine = document.createElement("div");
  inputLine.id = "input-line";
  inputLine.appendChild(span);
  inputLine.appendChild(input);

  const terminal = document.createElement("div");
  terminal.id = "terminal";
  terminal.appendChild(terminalHeader);
  terminal.appendChild(inputLine);

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

export { displayTerminal };
