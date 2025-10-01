let keyLoggerFunction = document.getElementById("keyLogger"),
  consoleLog = document.getElementById("console-log"),
  btnClearConsole = document.getElementById("btn-clear-console");

function logMessage(message) {
  let p = document.createElement("p");
  consoleLog.appendChild(p);
}

keyLoggerFunction.addEventListener("keydown", (e) => {
  if (!e.repeat) keyLoggerFunction.value += e.key;
});

btnClearConsole.addEventListener("click", () => {
  consoleLog.innerHTML = "";
  keyLoggerFunction.value = "";
});
