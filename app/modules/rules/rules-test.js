(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:rulesTest
	 * @description
	 * # rulesTest
	 * Test of the app
	 */

	describe('rules test', function () {
		var controller = null, $scope = null;

		beforeEach(function () {
			module('hexagoncinema-mc');
		});

		beforeEach(inject(function ($controller, $rootScope) {
			$scope = $rootScope.$new();
			controller = $controller('RulesCtrl', {
				$scope: $scope
			});
		}));

		it('Should controller must be defined', function () {
			expect(controller).toBeDefined();
		});

	});
})();
