function calculate() {
    const price = parseFloat(document.getElementById("price").value);
    const liters = parseFloat(document.getElementById("liters").value);
    const total = price * liters;
    document.getElementById("result").innerText = "Total: " + total.toFixed(2) + " AED";
}
