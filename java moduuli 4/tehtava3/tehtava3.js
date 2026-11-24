
const form = document.querySelector("#searchForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const value = document.querySelector("#query").value;
    const results = document.querySelector("#results");

    results.innerHTML = "";

    fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(value)}`)
        .then(response => response.json())
        .then(data => {

            console.log(data);

            data.forEach(tvShow => {

                const article = document.createElement("article");

                const name = document.createElement("h2");
                name.textContent = tvShow.show.name;

                const link = document.createElement("a");
                link.href = tvShow.show.url;
                link.textContent = "Katso sarjan tiedot";
                link.target = "_blank";

                if (tvShow.show.image?.medium) {
                    const image = document.createElement("img");
                    image.src = tvShow.show.image.medium;
                    image.alt = tvShow.show.name;

                    article.appendChild(image);
                }

                const summary = document.createElement("div");
                summary.innerHTML = tvShow.show.summary || "Kuvausta ei saatavilla.";

                article.appendChild(name);
                article.appendChild(link);
                article.appendChild(summary);

                results.appendChild(article);
            });
        })
        .catch(error => {
            console.log("Virhe haussa:", error);
        });
});
