(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.service:statusService
	* @description
	* # statusService
	* Service of the app
	*/

	angular
		.module('hexagoncinema-mc')
		.factory('statusService', statusService);

	statusService.$inject = ['$http'];

	function statusService($http) {
		var serverStatus = [];
		mcserver.ping("mc.hypixel.net", function (data, err) {
			if (data) {
				serverStatus = data;
			} 
			else {
				console.error(err);
			}
		});

		return {
			getStatus: getStatus
		};

		function getStatus() {
			return serverStatus;
		}
	}

})();
