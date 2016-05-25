(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.service:mcStatusService
	* @description
	* # mcStatusService
	* Service of the app
	*/

	angular.module('hexagoncinema-mc')
		.factory('mcStatusService', mcStatusService);

	mcStatusService.$inject = ['$http'];

	function mcStatusService($http){
		var api = "https://us.mc-api.net/v3/server/info/";
		var status = "";
		$http.get(api + "minecraft.prail.net").then(function (res) {
			status = res;
			console.log(status);
		}).catch(function (err) {
			console.error(err);
		})
				
		return {
			getStatus: getStatus
		};

		function getStatus() {
			return status;
		}
	}

})();
