app.controller('HomeController', [
  '$scope',
  'suggestions',

  function($scope, suggestions) {
    // controller code here
    /*
    The first part is creating an AngularJS object named "posts".
    $scope.posts = suggestions.posts;
    Then, “suggestions” is referring to the service we made.
    $scope.posts = suggestions.posts;
    Finally, “posts” is referring to the JSON object we made inside the suggestions service.
    */
    $scope.posts = suggestions.posts;

    $scope.addSuggestion = function() {

      //if input empty, don't submit
      if(!$scope.title || $scope.title === "") {
        return;
      }

      //push suggestion posts in suggestions.js
      $scope.posts.push({
        title: $scope.title,
        upvotes: 0,
        comments: [],
        id: $scope.posts.length
      });

      //after submit, clear input
      $scope.title = '';
    };


    $scope.upVote = function(post) {
      post.upvotes += 1;
    };

  }
]);
