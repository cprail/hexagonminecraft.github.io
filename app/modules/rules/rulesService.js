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
			{ "rule": "No griefing!", "penaltey": "Ban for 1 week." },
			{ "rule": "Do not take other players stuff without permission.", "penaltey": "Ban for 30 minutes." },
			{ "rule": "Do not destroy other players property.", "penaltey": "Ban for one hour." },
			{ "rule": "If you happen to accidentally wreak something, help the other player fix it.", "penaltey": "" }
		];

		return {
			getRulesList: getRulesList
		};

		function getRulesList() {
			return list;
		}
		
	}

})();
