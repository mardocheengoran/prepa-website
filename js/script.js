document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".include").forEach(element => {
        const link = element.dataset.content;

        fetch(link)
            .then(response => response.text())
            .then(html => {
                element.innerHTML = html;
            })
            .catch(error => console.error("Erreur lors du chargement :", error));
    });
});