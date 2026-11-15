
const feedbackForm =
    document.getElementById("feedbackForm");

feedbackForm.addEventListener("submit", function(e) {

    e.preventDefault();

    const username =
        document.getElementById("username").value;

    const email =
        document.getElementById("email").value;

    const formMessage =
        document.getElementById("formMessage");

    if (username !== "" && email !== "") {

        formMessage.textContent =
            "Thank you for visiting, " +
            username +
            "! We will contact you at " +
            email +
            ".";
    }

});


const tableRows =
    document.querySelectorAll("tbody tr");

tableRows.forEach(function(row) {

    row.addEventListener("mouseover", function() {
        row.style.backgroundColor = "#ffe0b2";
    });

    row.addEventListener("mouseout", function() {
        row.style.backgroundColor = "";
    });

});


const themeButton =
    document.getElementById("themeButton");

themeButton.addEventListener("click", function() {

    document.body.classList.toggle("dark-mode");

});


const foodItems =
    document.querySelectorAll(".foodItem");

const total =
    document.getElementById("total");

foodItems.forEach(function(item) {

    item.addEventListener("change", function() {

        let totalPrice = 0;

        foodItems.forEach(function(food) {

            if (food.checked) {
                totalPrice =
                    totalPrice +
                    parseInt(food.value);
            }

        });

        total.textContent =
            "Total: $" + totalPrice;

    });

});


const birthYear =
    document.getElementById("birth-year");

const discountMessage =
    document.getElementById("discountMessage");

birthYear.addEventListener("change", function() {

    const year =
        parseInt(birthYear.value);

    const age =
        2026 - year;

    if (isNaN(year)) {

        discountMessage.textContent =
            "Please enter a valid birth year.";

    }

    else if (age >= 60) {

        discountMessage.textContent =
            "You qualify for the senior discount!";

    }

    else if (age >= 18 && age <= 25) {

        discountMessage.textContent =
            "You qualify for the student discount!";

    }

    else {

        discountMessage.textContent =
            "You do not qualify for a special discount.";

    }

});


const readMoreButton =
    document.getElementById("readMoreButton");

const extraText =
    document.getElementById("extraText");

readMoreButton.addEventListener("click", function() {

    extraText.classList.toggle("hidden");

    if (extraText.classList.contains("hidden")) {

        readMoreButton.textContent =
            "Read More";

    }

    else {

        readMoreButton.textContent =
            "Read Less";

    }

});


const filterButtons =
    document.querySelectorAll(".filterButton");

filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const selectedCategory =
            button.getAttribute("data-category");

        const rows =
            document.querySelectorAll("tbody tr");

        rows.forEach(function(row) {

            const rowCategory =
                row.getAttribute("data-category");

            if (
                selectedCategory === "all" ||
                selectedCategory === rowCategory
            ) {

                row.style.display = "";

            }

            else {

                row.style.display = "none";

            }

        });

        const listItems =
            document.querySelectorAll("#menu ul li");

        listItems.forEach(function(item) {

            const itemCategory =
                item.getAttribute("data-category");

            if (
                selectedCategory === "all" ||
                selectedCategory === itemCategory
            ) {

                item.style.display = "";

            }

            else {

                item.style.display = "none";

            }

        });

    });

});


const status =
    document.getElementById("status");

const currentHour =
    new Date().getHours();

if (
    currentHour >= 8 &&
    currentHour < 22
) {

    status.textContent =
        "We are Open!";

    status.style.color =
        "green";

}

else {

    status.textContent =
        "Closed - Open at 8 AM";

    status.style.color =
        "red";

}


const specialNotes =
    document.getElementById("special-notes");

const charCount =
    document.getElementById("charCount");

specialNotes.addEventListener("input", function() {

    const remaining =
        100 - specialNotes.value.length;

    charCount.textContent =
        remaining +
        " characters remaining";

});

