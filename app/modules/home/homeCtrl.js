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

	Home.$inject = ['$scope'];

	function Home($scope) {
		/*jshint validthis: true */
		var vm = this;
		vm.title = "Hexagon MC";
		vm.done = false;

		mcserver.ping("play.hexagonminecraft.com", function (data, err) {
			if (data) {
				$scope.$apply(function () {
					vm.status = data;
					if (vm.status.status) {
						vm.isOnline = "Online";
						vm.onlineColor = { 'color': 'green' };
						vm.done = true;
					}
					else {
						vm.isOnline = "Offline";
						vm.onlineColor = { 'color': 'red' };
						vm.done = true;
					}
				});

			}
			else {
				console.error(err);
				vm.isOnline = "Offline";
				vm.onlineColor = { 'color': 'red' };
				vm.status.players.online = "no"
				vm.done = true;
			}
		});


	}

})();
