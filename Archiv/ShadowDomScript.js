class MovieCard extends HTMLElement {
  constructor() {
    //Super muss immer zuerst aufgerufen werden
    super();
    // Element-Funktionalität wird ab hier definiert
    const shadow = this.attachShadow({
      mode: "open",
    });

    var image = this.getAttribute("imgSrc");
    var episode = this.getAttribute("episode");
    var title = this.getAttribute("title");
    var season = this.getAttribute("season");
    var runtime = this.getAttribute("runtime");

    this.shadowRoot.innerHTML = `<div class="container">
                                  <div class="content">
                                    <a href="" target="_blank">
                                      <div class="content-overlay"></div>
                                      <img class="content-image" src="${image}">
                                      <div class=" content-details fadeIn-bottom">
                                        <h3 class="content-title has-text-white-ter">Watch Now</h3>
                                        <p class="content-text has-text-white-ter">S${season}E${episode}| ${runtime}min </p>
                                      </div>
                                      <p class="content-title has-text-white-ter has-text-centered">${title}</p>
                                    </a>
                                  </div>
                                </div>`;

    const bulmaLink = document.createElement("LINK");
    bulmaLink.setAttribute("rel", "stylesheet");
    bulmaLink.setAttribute("href", "bulma.css");
    shadow.appendChild(bulmaLink);
  }
}
customElements.define("movie-card", MovieCard);

function movieCard(imgSrc, title, runtime, episode, season, place, size) {
  var parentNode = document.getElementById(place);
  var ChildNode = ` <movie-card class="column ${size}"
      episode="${episode}"
      season="${season}"
      runtime="${runtime}"
      imgSrc="${imgSrc}"
      title = "${title}"
    >
      {" "}
    </movie-card>`;

  parentNode.insertAdjacentHTML("beforeend", ChildNode);
}

function fetchData() {
  fetch("http://api.tvmaze.com/shows/28276/episodes")
    .then((resp) => resp.json())
    .then(function (data) {
      let episodes = data; // Get the results
      return episodes.map(function (episodes) {
        var imgSrc = episodes.image.original;
        var title = episodes.name;
        var rutime = episodes.runtime;
        var episode = episodes.number;
        var season = episodes.season;
        movieCard(
          imgSrc,
          title,
          rutime,
          episode,
          season,
          "img_1",
          "is-one-third"
        );
      });
    });
}
function fetchSeason() {
  fetch("http://api.tvmaze.com/shows/28276")
    .then((resp) => resp.json())
    .then(function (data) {
      let seasons = data; // Get the results
      var imgSrc = seasons.image.original;
      var title = seasons.name;
      var rutime = seasons.runtime;
      var episode = "verything on " + seasons.webChannel.name + " "; //:-)
      var season = "ee ";
      movieCard(
        imgSrc,
        title,
        rutime,
        episode,
        season,
        "img_2",
        "is-three-quarters"
      );
    });
}
