app.controller('MainController', ['$scope', function($scope) {
 	$scope.promo = 'Author: Zia';
 	$scope.products = [
    {
    	name: 'Crownhill Beers',
      price: 1000,
      pubdate: new Date('2016', '02', '14'),
      cover: 'images/crownhill.png',
      likes: 0,
      dislikes: 0
    },
    {
    	name: 'Onio',
      price: 49.99,
      pubdate: new Date('2014', '03', '08'),
      cover: 'images/onio.png',
      likes: 0,
      dislikes: 0
    },
    {
    	name: 'Air Chair',
      price: 899,
      pubdate: new Date('2014', '08', '01'),
      cover: 'images/airchair.png',
      likes: 0,
      dislikes: 0
    },
    {
      name: 'Jiffy',
      price: 100,
      pubdate: new Date('2015', '12', '03'),
      cover: 'images/jiffy.png',
      likes: 0,
      dislikes: 0
    },
    {
      name: 'tea',
      price: 60,
      pubdate: new Date('2016', '1', '3'),
      cover: 'images/tea.jpg',
      likes: 0,
      dislikes: 0
    },
    {
      name: 'modular',
      price: 50,
      pubdate: new Date('2016', '2', '18'),
      cover: 'images/modular.jpg',
      likes: 0,
      dislikes: 0
    },
    {
      name: 'miho',
      price: 99,
      pubdate: new Date('2015', '11', '16'),
      cover: 'images/miho.jpg',
      likes: 0,
      dislikes: 0
    }

  ];
  $scope.plusOne = function(index) {
    $scope.products[index].likes += 1;
  };
  $scope.minusOne = function(index) {
    $scope.products[index].dislikes += 1;
  };
}]);
