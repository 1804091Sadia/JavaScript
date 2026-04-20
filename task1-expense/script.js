let expenses = [];

function updateTotal() {
    let total = expenses.reduce((sum, value) => sum + value, 0);
    document.getElementById("total").innerText = total;
}

document.getElementById("addBtn").addEventListener("click", function () {
    let input = document.getElementById("amount").value;

    // Validation
    if (input === "" || isNaN(input)) {
        alert("Please enter a valid number!");
        return;
    }

    expenses.push(Number(input));
    updateTotal();

    document.getElementById("amount").value = "";
});
