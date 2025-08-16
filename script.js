button.addEventListener("click", function (e) {
  e.preventDefault();
  let input = document.getElementById("input").value;
  keyword = input;
  let url = `https://newsdata.io/api/1/latest?apikey=pub_73cc5eec01014fc79eb431b638c9a707&q=${keyword}&country=in`;

  fetch(url)
    .then((response) => response.json())
    .then((val) => {
      let newsContainer = document.getElementById("news-container");
      newsContainer.innerHTML = "";
      newsContainer.style.display = "flex";
      newsContainer.style.flexWrap = "wrap";
      newsContainer.style.alignItems = "flex-start";
      newsContainer.style.justifyContent = "space-between";
      newsContainer.style.gap = "10px";
      newsContainer.style.background =
        "linear-gradient(135deg, #0f0f1a, #1a1a2e, #241b38)";
      newsContainer.style.borderRadius = "12px";
      newsContainer.style.padding = "15px";

      // ✅ Handle no results
      if (!val.results || val.results.length === 0) {
        newsContainer.innerHTML = `
          <div class="text-center w-100 p-4">
            <h3 style="color:#b8b8ff;">No articles found 😔</h3>
            <p style="color:#ccc;">Try searching with another keyword.</p>
          </div>
        `;
        return;
      }

      // ✅ Loop through results
      for (let i = 0; i < val.results.length; i++) {
        let newsArticle = document.createElement("div");
        newsArticle.classList.add("news-article");

        let description = val.results[i].description
          ? val.results[i].description.length > 100
            ? val.results[i].description.substring(0, 500) + "..."
            : val.results[i].description
          : "No Description available.";

        newsArticle.innerHTML = `
          <h2 class="news-title">${val.results[i].title}</h2>
          <p class="news-desc">${description}</p>
          <a class="news-link" href="${val.results[i].link}" target="_blank">Read More</a>
        `;

        newsContainer.appendChild(newsArticle);
      }
    });
});

// let newsForm = document.getElementById("newsForm");
// let button=document.getElementById("button");
// button.addEventListener('click', function (e) {
//     e.preventDefault();
//     let input = document.getElementById("input").value;
//     keyword = input;
//     let url = `https://api.currentsapi.services/v1/search?apiKey=${api_key}&keywords=${keyword}`;
//     fetch(url)
//     .then(response => response.json())
//     .then(data => {

//         console.log("Search Results:", data);
//         let newsContainer = document.getElementById("newsContainer");
//         console.log(data.news[0].title)

//     })
//     .catch(error => console.error("Error fetching news:", error));

// })
