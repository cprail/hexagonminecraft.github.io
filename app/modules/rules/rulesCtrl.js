(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:rulesCtrl
	* @description
	* # rulesCtrl
	* Controller of the app
	*/

	angular
		.module('rules')
		.controller('RulesCtrl', Rules);

	Rules.$inject = ["RulesService"];

	function Rules(RulesService) {
		/*jshint validthis: true */
		var vm = this;
		vm.listRules = RulesService.getRulesList();
		console.log(vm.listRules);

	}

})();
