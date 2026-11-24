
const form = document.querySelector("#searchForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const value = document.querySelector("#query").value;

    fetch(`https://api.tvmaze.com/search/shows?q=${value}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log("Virhe haussa:", error);
        });
});
