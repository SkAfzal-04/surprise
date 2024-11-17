function yes() {
    showSection("5");
}

document.querySelectorAll(".no").forEach((noButton) => {
    const sectionId = noButton.closest("section").id;

    noButton.addEventListener("click", function () {
        if (sectionId === "4") {
            showSection("5");
        } else {
            const nextSection = parseInt(sectionId) + 1;
            showSection(nextSection.toString());
        }
    });

    if (sectionId === "4") {
        noButton.addEventListener("mouseover", function () {
            moveButtonRandomly(noButton);
        });
    }
});

function showSection(sectionId) {
    document.querySelectorAll("section").forEach((section) => {
        section.style.display = "none";
    });

    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.style.display = "block";
    }
}

function moveButtonRandomly(button) {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const randomX = Math.floor(Math.random() * (viewportWidth - button.offsetWidth));
    const randomY = Math.floor(Math.random() * (viewportHeight - button.offsetHeight));

    button.style.position = "absolute";
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
}
