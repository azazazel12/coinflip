let history = [];
const resultElement = document.getElementById("result");
const historyElement = document.getElementById("history");

function flipCoin() {
  const result = Math.random() < 0.5 ? "heads" : "tails";

  history.push(result);

  historyElement.innerHTML = "";

  history.forEach((result) => {
    const listItem = document.createElement("li");
    listItem.textContent = result;
    historyElement.appendChild(listItem);
  });
  resultElement.textContent = result;
}
