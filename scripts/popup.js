$(document).ready(function(){
  $('form').on("submit", function(event){
    event.preventDefault();

    var find = $('#find').val();

    var config = {
      baseUrl: 'https://api.github.com/search/repositories',
      searchResults: find,
      pages: "1",
      perPage: "10"

    };

    $.ajax({
      url: config.baseUrl + "?q=" + config.searchResults + "&page=" + config.pages + "&per_page=" + config.perPage,
      type: 'GET',
      dataType: 'JSONP',
      success: function(results) {
        console.log(results);
        results.data.items.forEach(function(item, index, array){
          $('.results').append(
            '<h3>' + item.full_name + '</h3>',
            '<a href="' + item.html_url + '">' +
            'Go to Repo' +
            '</a>' +
            '<p>' + item.description + '</p>'
          );
        });


      },

      error: function(error) {
        console.log(error);
      }

    });
  });
});
