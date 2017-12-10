console.log("js is linked");

$(document).ready(function() {
  console.log("jquery is linked");

  // get current weather
    let weatherUrl = 'http://api.wunderground.com/api/562b8535169e745a/conditions/q/CA/San_Francisco.json'
    let weatherAjax = {
      method: 'GET',
      url: weatherUrl,
      success: wthrSuccess
    }

    function wthrSuccess(weatherData) {
      console.log(weatherData);
      var location = weatherData.current_observation.display_location.full;
      var temp_f = weatherData.current_observation.temp_f;
      console.log(`Current temperature in ${location} is ${temp_f}F`);
    };

    $.ajax(weatherAjax);

      //add top stories to carousel
      let newsUrl = 'http://api.nytimes.com/svc/topstories/v2/national.json?api-key=674c541230f945f8b5a1a37b3b2e5013'
      let newsAjax = {
        method: 'GET',
        url: newsUrl,
        success: newsSuccess
      }

      function newsSuccess(newsData) {
        //let newsArr = newsData.results;
        for (let i = 0; i < 6; i++) {
          let newsArticle = newsData.results[i];
          let carouselDivActive = `<div class="carousel-item active"><img class="d-block w-100" src="${newsArticle.multimedia[4].url}"><div class="carousel-caption d-none d-md-block"><a href="${newsArticle.url}"><h3>${newsArticle.title}</h3></a><p>${newsArticle.abstract}</p></div></div>`
          let carouselDiv = `<div class="carousel-item"><img class="d-block w-100" src="${newsArticle.multimedia[4].url}"><div class="carousel-caption d-none d-md-block"><a href="${newsArticle.url}"><h3>${newsArticle.title}</h3></a><p>${newsArticle.abstract}</p></div></div>`
            if (i === 0) {
              $(".carousel-inner").append(carouselDivActive);
            } else {
              $(".carousel-inner").append(carouselDiv);
            };
        };

      };

      $.ajax(newsAjax);


});
