'use strict';

/**
 * @ngdoc function
 * @name app.route:rulesRoute
 * @description
 * # rulesRoute
 * Route of the app
 */

angular.module('rules')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('home.rules', {
				url:'/rules',
				templateUrl: 'app/modules/rules/rules.html',
				controller: 'RulesCtrl',
				controllerAs: 'vm'
			});

		
	}]);
