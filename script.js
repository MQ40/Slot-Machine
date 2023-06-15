const slotLever = document.getElementById("slot-lever");

const reels = () => {
  let slotMachine = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ];

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let random = randomNumber();
      let symbol = getSymbol(random);
      printSymbol(slotMachine[i][j], symbol);
      slotMachine[i][j] = symbol;
    }
  }
  console.log(slotMachine[0]);
  console.log(slotMachine[1]);
  console.log(slotMachine[2]);
};

const randomNumber = () => {
  return (Math.random() * 100).toFixed(1);
};

const getSymbol = (random) => {
  if (random <= 12.5) {
    return "🍌"; // banana
} else if (random > 12.5 && random <= 25) {
    return "🍉"; // watermelon
} else if (random > 25 && random <= 37.5) {
    return "🍋"; // lemon
} else if (random > 37.5 && random <= 50) {
    return "🍒"; // cherry
} else if (random > 50 && random <= 62.5) {
    return "🍇"; // grapes
} else if (random > 62.5 && random <= 75) {
    return "🍊"; // orange
} else if (random > 75 && random <= 90) {
    return "🔔"; // bell
} else if (random > 90 && random <= 98) {
    return "🍫"; // bar
} else if (random > 98 && random <= 100) {
    return "7️⃣"; // 7
}
};



const printSymbol = (cellIndex, symbol) => {
  const cellId = "cell-" + cellIndex;
  const cell = document.getElementById(cellId);
  if (cell) {
    cell.innerHTML = symbol;
  }
};

slotLever.addEventListener("click", reels);