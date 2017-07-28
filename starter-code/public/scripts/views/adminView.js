'use strict';
var app = app || {};

(function(module) {
  const adminView = {
    initAdminPage : () => {
      let template = Handlebars.compile($('#author-template').text());
        // COMMENT: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
        //We're compiling the handlebars #author-template and then we're filling that template in with the author stats which are the total number of words in Article (all the articles) and the number of how many articles are in Article.
      app.Article.numWordsByAuthor().forEach(stat => $('.author-stats').append(template(stat)));
      $('#blog-stats .articles').text(app.Article.all.length);
      $('#blog-stats .words').text(app.Article.numWordsAll());
    }
  };

  app.Article.fetchAll(adminView.initAdminPage);
  module.adminView = adminView;
})(app);
