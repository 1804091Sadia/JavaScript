document.getElementById("addBook").addEventListener("click", function () {
    let book = document.getElementById("bookName").value;
    let author = document.getElementById("authorName").value;

    // Validation
    if (book === "" || author === "") {
        alert("Please fill all fields!");
        return;
    }

    let row = document.createElement("tr");

    row.innerHTML = `
        <td>${book}</td>
        <td>${author}</td>
        <td><button class="deleteBtn">Delete</button></td>
    `;

    document.getElementById("bookTable").appendChild(row);

    document.getElementById("bookName").value = "";
    document.getElementById("authorName").value = "";
});


// Delete using Event Bubbling
document.getElementById("bookTable").addEventListener("click", function (e) {
    if (e.target.classList.contains("deleteBtn")) {
        e.target.parentElement.parentElement.remove();
    }
});
