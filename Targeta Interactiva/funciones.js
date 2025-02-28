document.addEventListener("DOMContentLoaded", function () {

    const cardTitle = document.getElementById("card-title");
    const cardDescription = document.getElementById("card-description");
    const cardImage = document.getElementById("card-image");
    const card = document.getElementById("card");

    const titleInput = document.getElementById("title");
    const descriptionInput = document.getElementById("description");
    const imageInput = document.getElementById("image");
    const bgColorInput = document.getElementById("bg-color");
    const textColorInput = document.getElementById("text-color");
    const fontSelect = document.getElementById("font");

    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const form = document.getElementById("customization-form");

    function updateCard() {

        cardTitle.textContent = titleInput.value || "Título";
        cardDescription.textContent = descriptionInput.value || "Descripción de la tarjeta";
        card.style.backgroundColor = bgColorInput.value;
        card.style.color = textColorInput.value;
        card.style.fontFamily = fontSelect.value;

    }

    titleInput.addEventListener("input", updateCard);
    descriptionInput.addEventListener("input", updateCard);
    bgColorInput.addEventListener("input", updateCard);
    textColorInput.addEventListener("input", updateCard);
    fontSelect.addEventListener("change", updateCard);

    imageInput.addEventListener("change", function (event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                cardImage.src = e.target.result;
                cardImage.style.display = "block";
            };
            reader.readAsDataURL(file);
        } else {
            cardImage.src = "";
            cardImage.style.display = "none";
        }
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (username === "" || password === "") {
            alert("Por favor, completa todos los campos.");
            return;
        }

        if (password.length < 6) {
            alert("La contraseña debe tener al menos 6 caracteres.");
            return;
        }

        alert("Formulario enviado con éxito!");
        form.reset();
        updateCard();
    });

    form.addEventListener("reset", function () {
        setTimeout(updateCard, 100);
    });
});