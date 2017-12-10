console.log("js is linked");

// $(document).ready(function() {
  console.log("jquery is linked");

  // get current weather
    // let weatherUrl = 'http://api.wunderground.com/api/Your_Key/geolookup/q/CA/San_Francisco.json'
    // let weatherAjax = {
    //   method: 'GET',
    //   url: weatherUrl,
    //   success: wthrSuccess
    // }
    //
    // function wthrSuccess(weatherData) {
    //   console.log(weatherData);
    // };
    //
    //   $.ajax(weatherAjax);

      //add top stories
      let newsUrl = 'http://api.nytimes.com/svc/topstories/v2/national.json?api-key=674c541230f945f8b5a1a37b3b2e5013'
      let newsAjax = {
        method: 'GET',
        url: newsUrl,
        success: newsSuccess
      }

      function newsSuccess(newsData) {
        let newsArr = newsData.results;
        let carouselHeadline = ""
        for (let i = 0; i < 5; i++) {
          let newsArticle = newsArr[i];
            if (i == 0) {
              $(".carousel-inner").append(`<div class="carousel-item active"><img class="d-block w-100" src="${newsArticle.multimedia[4].url}"><div class="carousel-caption d-none d-md-block"><a href="${newsArticle.url}"><h3>${newsArticle.title}</h3></a><p>${newsArticle.abstract}</p></div></div>`)
            } else {
          //console.log(newsArticle);
              $(".carousel-inner").append(`<div class="carousel-item"><img class="d-block w-100" src="${newsArticle.multimedia[4].url}"><div class="carousel-caption d-none d-md-block"><a href="${newsArticle.url}"><h3>${newsArticle.title}</h3></a><p>${newsArticle.abstract}</p></div></div>`)
            };
        };

      //   function newsSuccess(newsData) {
      //     let newsArr = newsData.results;
      //     let carouselHeadline = ""
      //     for (let i = 0; i < 5; i++) {
      //       let newsArticle = newsArr[i];
      //         if (i == 0) {
      //           $(".carousel-inner").append(`<div class="carousel-item active"><img class="d-block w-100" src="${newsArticle.multimedia[4].url}"><div class="carousel-caption d-none d-md-block"><a href="${newsArticle.url}"><h3>${newsArticle.title}</h3></a><p>${newsArticle.abstract}</p></div></div>`)
      //         } else {
      //       //console.log(newsArticle);
      //           $(".carousel-inner").append(`<div class="carousel-item"><img class="d-block w-100" src="${newsArticle.multimedia[4].url}"><div class="carousel-caption d-none d-md-block"><a href="${newsArticle.url}"><h3>${newsArticle.title}</h3></a><p>${newsArticle.abstract}</p></div></div>`)
      //         };
      //     };
      //
      // };

      $.ajax(newsAjax);


// });
