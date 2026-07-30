const button = document.getElementById("catButton");
const image = document.getElementById("catImage");

button.addEventListener("click", function () {
    fetch("https://api.thecatapi.com/v1/images/search")
        .then(response => {
            if (!response.ok) {
                throw new Error("Greška pri dohvaćanju podataka.");
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            image.src = data[0].url;
        })
        .catch(error => {
            console.error(error);
        });
});