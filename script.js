// let api_key="2f7adeda990e40ffbcdc2bc5c21f177b";

button.addEventListener("click", function (e) {
  e.preventDefault();
  let input = document.getElementById("input").value;
  keyword = input;
  let url = `https://newsdata.io/api/1/latest?apikey=pub_7472446fb022e8ba7430eef102f5b2ab1f2fe&q=${keyword}&country=in`;

  fetch(url)
    .then((response) => response.json())
    .then((val) => {
      console.log(val);
      let newsContainer = document.getElementById("news-container");
      newsContainer.innerHTML = "";
      newsContainer.style.display = "flex";
      newsContainer.style.flexWrap = "wrap";
      // newsContainer.style.justifyContent='center';
      newsContainer.style.alignItems = "flex-start";
      // newsContainer.style.justifyContent='space-between';
      newsContainer.style.justifyContent = "space-between";
      newsContainer.style.gap = "5px";
      newsContainer.style.background =
        "linear-gradient(135deg, #0f0f1a, #1a1a2e, #241b38);";
      newsContainer.style.borderRadius = "12px";

      newsContainer.style.gap = "10px";
      for (let i = 0; i < val.results.length; i++) {
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
