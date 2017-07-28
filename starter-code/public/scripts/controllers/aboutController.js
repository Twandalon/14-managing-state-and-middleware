'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  // COMMENT: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  // (put your response in a comment here)
  //This function is showing the #about section and hiding the siblings of #about. And then we're calling app.repos.requestRepos which lives in repo.js (it is a function that is getting all the repos from our github). So it gets the repos and then appending them to the dom through app.repoView.index.
  aboutController.index = () => {
    $('#about').show().siblings().hide();
    app.repos.requestRepos(app.repoView.index);
  };

  module.aboutController = aboutController;
})(app);
