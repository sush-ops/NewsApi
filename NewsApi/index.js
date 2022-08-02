//variables

const generalBtn = document.getElementById("general");
const businessBtn = document.getElementById("business");
const sportsBtn = document.getElementById("sports");
const technologyBtn = document.getElementById("technology");
const entertainmentBtn = document.getElementById("entertainment");

const newsTypeBtn = document.getElementById("newsType");
const newsdetailsBtn = document.getElementById("newsdetails");

//Array
var newsDataArr = [];

//APIs
const API_KEY = "ef665a36eb2c4544b9d52fdcad69909a";
const Headlines_News =
  " https://newsapi.org/v2/top-headlines?country=in&apiKey=ef665a36eb2c4544b9d52fdcad69909a";
const General_News =
  " https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=ef665a36eb2c4544b9d52fdcad69909a";
const Business_News =
  " https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=ef665a36eb2c4544b9d52fdcad69909a";
const Sports_News =
  " https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=ef665a36eb2c4544b9d52fdcad69909a";
const Technology_News =
  " https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=ef665a36eb2c4544b9d52fdcad69909a";
const Entertainment_News =
  " https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=ef665a36eb2c4544b9d52fdcad69909a";

window.onload = (event) => {
  newsType.innerHTML = "<h4> Headlines </h4>";
  fetchHeadlines();
};

generalBtn.addEventListener("click", function () {
  newsType.innerHTML = "<h4> General News </h4>";
  fetchGeneralNews();
});

businessBtn.addEventListener("click", function () {
  newsType.innerHTML = "<h4> Business  </h4>";
  fetchBusinessNews();
});

sportsBtn.addEventListener("click", function () {
  newsType.innerHTML = "<h4> Sports </h4>";
  fetchSportsNews();
});

technologyBtn.addEventListener("click", function () {
  newsType.innerHTML = "<h4> Technology </h4>";
  fetchTechnologyNews();
});

entertainmentBtn.addEventListener("click", function () {
  newsType.innerHTML = "<h4> Entertainment </h4>";
  fetchEntertainmentNews();
});

const fetchHeadlines = async () => {
  const response = await fetch(Headlines_News);
  newsDataArr = [];

  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    console.log(myJson);
    newsDataArr = myJson.articles;
  } else {
    //handle errors
    console.log(response.status, response.statusText);
  }

  displayNews();
};

const fetchGeneralNews = async () => {
  const response = await fetch(General_News);
  newsDataArr = [];

  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    console.log(myJson);
    newsDataArr = myJson.articles;
  } else {
    //handle errors
    console.log(response.status, response.statusText);
  }

  displayNews();
};

const fetchBusinessNews = async () => {
  const response = await fetch(Business_News);
  newsDataArr = [];

  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    console.log(myJson);
    newsDataArr = myJson.articles;
  } else {
    //handle errors
    console.log(response.status, response.statusText);
  }

  displayNews();
};

const fetchSportsNews = async () => {
  const response = await fetch(Sports_News);
  newsDataArr = [];

  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    console.log(myJson);
    newsDataArr = myJson.articles;
  } else {
    //handle errors
    console.log(response.status, response.statusText);
  }

  displayNews();
};

const fetchTechnologyNews = async () => {
  const response = await fetch(Technology_News);
  newsDataArr = [];

  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    console.log(myJson);
    newsDataArr = myJson.articles;
  } else {
    //handle errors
    console.log(response.status, response.statusText);
  }

  displayNews();
};

const fetchEntertainmentNews = async () => {
  const response = await fetch(Entertainment_News);
  newsDataArr = [];

  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    console.log(myJson);
    newsDataArr = myJson.articles;
  } else {
    //handle errors
    console.log(response.status, response.statusText);
  }

  displayNews();
};

function displayNews() {
  newsdetails.innerHTML = "";

  if (newsDataArr.length == 0) {
    newsdetails.innerHTML = "<h5> No data found.</h5>";
    return;
  }

  newsDataArr.forEach((news) => {
    var date = news.publishedAt.split("T");

    var col = document.createElement("div");
    col.className = "col-sm-12  col-md-4  col-lg-3  p-2 card";

    var card = document.createElement("div");
    card.className = "p-2";

    var image = document.createElement("img");
    image.setAttribute("height", "matchparent");
    image.setAttribute("width", "100%");
    image.src = news.urlToImage;

    var cardBody = document.createElement("div");

    var newsHeading = document.createElement("h5");
    newsHeading.className = "card-title";
    newsHeading.innerHTML = news.title;

    var dateHeading = document.createElement("h6");
    dateHeading.className = "text-primary";
    dateHeading.innerHTML = date[0];

    var description = document.createElement("p");
    description.className = "text-muted";
    description.innerHTML = news.description;

    var link = document.createElement("a");
    link.className = "btn btn-dark";
    link.setAttribute("target", "_blank");
    link.href = news.url;
    link.innerHTML = " Read More";

    cardBody.appendChild(newsHeading);
    cardBody.appendChild(dateHeading);
    cardBody.appendChild(description);
    cardBody.appendChild(link);

    card.appendChild(image);
    card.appendChild(cardBody);

    col.appendChild(card);

    newsdetails.appendChild(col);
  });
}
