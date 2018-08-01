const request = superagent;
var API_URL = 'https://randomuser.me/api/?results=50';
var container = document.querySelector('.users-list');

var button = document.querySelector('button');

button.addEventListener('click', function(e) {

  container.innerHTML="";

  request
    .get(API_URL)
    .then(function (response){
      var list = response.body.results;

      list.forEach(function(user) {
        var country = user.nat;
        var eMail = user.email;

        var article = document.createElement('article');
        container.appendChild(article);
        var articleContent = "<span>" + country + "</span><h6>" + eMail + "</h6>";

        article.innerHTML = articleContent;
      });

    });

})
