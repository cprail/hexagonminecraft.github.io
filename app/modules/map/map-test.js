(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:mapTest
	 * @description
	 * # mapTest
	 * Test of the app
	 */

	describe('map test', function () {
		var controller = null, $scope = null;

		beforeEach(function () {
			module('hexagoncinema-mc');
		});

		beforeEach(inject(function ($controller, $rootScope) {
			$scope = $rootScope.$new();
			controller = $controller('MapCtrl', {
				$scope: $scope
			});
		}));

		it('Should controller must be defined', function () {
			expect(controller).toBeDefined();
		});

	});
})();
