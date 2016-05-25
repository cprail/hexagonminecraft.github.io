'use strict';

/**
 * @ngdoc function
 * @name app.route:mapRoute
 * @description
 * # mapRoute
 * Route of the app
 */

angular.module('map')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('home.map', {
				url:'/map',
				templateUrl: 'app/modules/map/map.html',
				controller: 'MapCtrl',
				controllerAs: 'vm'
			});

		
	}]);
