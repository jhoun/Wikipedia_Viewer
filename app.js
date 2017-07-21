$(document).on('click', ".submit", function(event){
  event.preventDefault();
  var value = $('.value').val();

  $.ajax({
    url: `https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=${value}&callback=JSON_CALLBACK`,
    dataType: "jsonp",
    success: function(result){
      result = result.query.pages;
      var list = "<ul class='list'>";
      for (var prop in result){
        list += `<li class='container'><a href='https://en.wikipedia.org/?curid=${result[prop].pageid}'><span class='title'>${result[prop].title}</span><br><span class='description'>${result[prop].extract}</span></a></li>`;
      }
      list += "</ul>";
      $(".searchResults").html(list);
    }
  })

});