(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:HomeCtrl
	* @description
	* # HomeCtrl
	* Controller of the app
	*/

	angular
		.module('hexagoncinema-mc')
		.controller('HomeCtrl', Home);

	Home.$inject = ['homeService'];

	function Home(homeService) {
		/*jshint validthis: true */
		var vm = this;
		vm.title = "Hexagon Cinema MC";
		//vm.mcstatus = mcStatusService.getStatus();
		vm.listFeatures = homeService.getFeaturesList();

	}

})();
