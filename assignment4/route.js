(function() {

  angular.module('MenuApp', ['ui.router']);

  angular.module('MenuApp')
    .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function RoutesConfig($stateProvider, $urlRouterProvider) {

    // Redirect to tab 1 if no other URL matches
    $urlRouterProvider.otherwise('/');

    // Set up UI states
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'src/home.html'
      })

    .state('categories', {
        url: '/categories',
        templateUrl: 'src/categories.html',
        controller: 'categoriesCtrl',
        resolve: {
          categories: function(MenuDataService) {
            return MenuDataService.getAllCategories();
          }
        }
      })
      .state('items', {
        url: '/:category/item',
        templateUrl: 'src/items.html',
        controller: 'itemsCtrl',
        resolve: {
          items: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService) {
            return MenuDataService.getItemsForCategory($stateParams.category);
          }]
        }
      });
  }


})();