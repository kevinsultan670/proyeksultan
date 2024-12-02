// Mendapatkan elemen layar kalkulator
const calculatorScreen = document.querySelector(".calculator-screen");

// Variabel untuk menyimpan nilai sementara
let currentNumber = "";
let previousNumber = "";
let operator = null;

// Fungsi untuk memperbarui layar
function updateScreen(number) {
  calculatorScreen.value = number;
}

// Fungsi untuk menangani input angka
function inputNumber(number) {
  if (currentNumber.includes(".") && number === ".") return; // Cegah input lebih dari satu titik desimal
  currentNumber = currentNumber === "0" ? number : currentNumber + number;
  updateScreen(currentNumber);
}

// Fungsi untuk menangani input operator
function inputOperator(op) {
  if (operator !== null) {
    calculate();
  }
  previousNumber = currentNumber;
  currentNumber = "";
  operator = op;
}

// Fungsi untuk menghitung hasil operasi
function calculate() {
  let result;
  const prev = parseFloat(previousNumber);
  const curr = parseFloat(currentNumber);

  if (isNaN(prev) || isNaN(curr)) return;

  switch (operator) {
    case "+":
      result = prev + curr;
      break;
    case "-":
      result = prev - curr;
      break;
    case "*":
      result = prev * curr;
      break;
    case "/":
      if (curr === 0) {
        alert("Tidak dapat membagi dengan nol!"); // Penanganan kesalahan
        clearAll();
        return;
      }
      result = prev / curr;
      break;
    default:
      return;
  }
  currentNumber = result.toString();
  operator = null;
  updateScreen(currentNumber);
}

// Fungsi untuk menghapus semua input
function clearAll() {
  currentNumber = "";
  previousNumber = "";
  operator = null;
  updateScreen("0");
}

// Fungsi untuk menangani tombol "="
function handleEqual() {
  if (operator !== null) {
    calculate();
    updateScreen(currentNumber);
  }
}

// Fungsi untuk menghapus input terakhir
function deleteLast() {
  currentNumber = currentNumber.slice(0, -1);
  updateScreen(currentNumber || "0");
}

// Event listener untuk tombol angka
const numberButtons = document.querySelectorAll("button:not(.operator)");
numberButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    inputNumber(event.target.value);
  });
});

// Event listener untuk tombol operator
const operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (event.target.value === "clear") {
      clearAll();
    } else if (event.target.value === "=") {
      handleEqual();
    } else {
      inputOperator(event.target.value);
    }
  });
});

// Event listener untuk tombol hapus (Del)
document
  .querySelector("button[onclick='deleteLast()']")
  .addEventListener("click", deleteLast);

// Awal layar kosong
clearAll();
