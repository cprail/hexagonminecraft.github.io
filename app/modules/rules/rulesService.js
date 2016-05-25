(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:rulesService
	 * @description
	 * # rulesService
	 * Service of the app
	 */

	angular
		.module('rules')
		.factory('RulesService', RulesService);
		
	RulesService.$inject = ['$http'];

	function RulesService($http) {
		
		var list = [
			{ "rule": "No Griefing! - Penalty: Ban for 1 Weeks (One Week More Per Infringment)" },
			{ "rule": "Using Controller AS syntax" }
		];

		return {
			getRulesList: getRulesList
		};

		function getRulesList() {
			return list;
		}
		
	}

})();
