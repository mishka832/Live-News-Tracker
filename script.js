// let api_key="2f7adeda990e40ffbcdc2bc5c21f177b";



button.addEventListener('click',function(e){
    e.preventDefault();
    let input = document.getElementById("input").value;
    keyword = input;
    let url = `https://newsdata.io/api/1/latest?apikey=pub_7472446fb022e8ba7430eef102f5b2ab1f2fe&q=${keyword}&country=in`;
    
    fetch(url)
   .then(response => response.json()).then((val)=>{
    console.log(val);
    let newsContainer=document.getElementById('news-container');
    newsContainer.innerHTML='';
    newsContainer.style.display='flex';
    newsContainer.style.flexWrap='wrap';
    // newsContainer.style.justifyContent='center';
    newsContainer.style.alignItems='flex-start';
    // newsContainer.style.justifyContent='space-between';
    newsContainer.style.justifyContent='space-between';
    newsContainer.style.gap='5px';
    newsContainer.style.background='linear-gradient(to bottom, #E0F7FA, #B2EBF2)';


    newsContainer.style.gap='10px';
    for(let i=0;i<val.results.length;i++) {
        let newsArticle=document.createElement('div');
        newsArticle.style.background = '#FFF8E3';
        newsArticle.style.width = '400px';
        newsArticle.style.padding = '15px';
        newsArticle.style.color = 'white';
        newsArticle.style.borderRadius = '8px';

        newsArticle.style.overflow = 'hidden';
        let description = val.results[i].description
                    ? val.results[i].description.length > 100
                        ? val.results[i].description.substring(0, 500) + "..."
                        : val.results[i].description
                    : "No Description available.";
        newsArticle.innerHTML=`
        <h2 style="color:#0F4C5C; font-weight:bold">${val.results[i].title}</h2>
        <p style="color:#333333;">${description}</p>
        <a href="${val.results[i].link}" target="_blank">Read More</a>
        `;
        
        newsContainer.appendChild(newsArticle);
        
    }
   })
})



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

