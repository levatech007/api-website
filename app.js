console.log("js is linked");

$(document).ready(function() {
  console.log("jquery is linked");

  // get current weather
    let weatherUrl = 'http://api.wunderground.com/api/562b8535169e745a/conditions/q/CA/San_Francisco.json';
    let quotesUrl = 'http://quotes.rest/qod.json';
    let newsUrl = 'http://api.nytimes.com/svc/topstories/v2/national.json?api-key=674c541230f945f8b5a1a37b3b2e5013';
    let cookbookUrl = 'http://food2fork.com/api/search?key=b06b071773d9e170d67e6ccc6ae1bb4c';

    let weatherAjax = {
      method: 'GET',
      url: weatherUrl,
      success: wthrSuccess
    };

    let quotesAjax = {
      method: 'GET',
      url: quotesUrl,
      success: quoteSuccess
    };

    let newsAjax = {
      method: 'GET',
      url: newsUrl,
      success: newsSuccess
    };

    function wthrSuccess(weatherData) {
      var location = weatherData.current_observation.display_location.full;
      var temp_f = weatherData.current_observation.temp_f;
      var weather = weatherData.current_observation.weather.toLowerCase();
      $("#weather").append(`<p>Today's weather in ${location} is expected to be ${weather}. The temperature is currently ${temp_f} F.</p>`);
    };

    function quoteSuccess(quoteData) {
      let quote = quoteData.contents.quotes[0].quote;
      let author = quoteData.contents.quotes[0].author;
      $("#quote").append(`<p>"${quote}"</p>`)
      $("#author").append(`<p>- ${author}</p>`);
    };


    function newsSuccess(newsData) {
      for (let i = 0; i < 5; i++) {
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

      $('form').on('submit', function(e){
        e.preventDefault();

        function cookbookSuccess(recipesData){
          $("#recipes").empty()
          for (let i = 0; i < 10; i++) {
            let recipeName = recipesData.recipes[i].title
            let recipeSrc = recipesData.recipes[i].source_url
            $("#recipes").append(`<a href="${recipeSrc}" target="_blank"><p>${recipeName}</p></a>`);
          };
        };

        let recipeAjax = {
          method: 'GET',
          url: cookbookUrl,
          data: $("form").serialize(),
          dataType: 'json',
          success: cookbookSuccess
        };

        $.ajax(recipeAjax)

        });

    $.ajax(weatherAjax);
    $.ajax(quotesAjax);
    $.ajax(newsAjax);

});
