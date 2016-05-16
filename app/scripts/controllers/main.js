'use strict';

/**
 * @ngdoc function
 * @name joseQApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the joseQApp
 */
angular.module('joseQApp')
  .controller('MainCtrl', [ '$scope' , function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'jquery'
    ];

  
$scope.myImages = this;

  $scope.myImages.list = [
    {
      Title: 'Squares',
      Desc: 'their like cool squares',
      img: 'http://www.ernst-haas.com/colorGallery/abstract/colorAbstract11.jpg'
    },
    {
      Title: 'Squares',
      Desc: 'their like cool squares',
      img: 'http://animprobablelife.com/wp-content/uploads/2013/11/Haas.Traffic-Mexico-City-1963_2.jpg'
    },
    {
      Title: 'Squares',
      Desc: 'their like cool squares',
      img: 'https://www.wgsn.com/blogs/wp-content/uploads/2012/02/Ernst-Haas-Color-Correction-Christophe-Guy-Zurich-33.jpg'
    },
    {
      Title: 'Squares',
      Desc: 'their like cool squares',
      img: 'http://www.ernst-haas.com/colorGallery/abstract/colorAbstract11.jpg'
    }
];

  $scope.getImagePath = function(imageName) {
myImages.list.push({title:myImages.Title});
};




  }]);
