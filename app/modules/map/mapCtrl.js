(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:mapCtrl
	* @description
	* # mapCtrl
	* Controller of the app
	*/

  	angular
		.module('map')
		.controller('MapCtrl', Map);

		Map.$inject = [];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Map() {
			/*jshint validthis: true */
			var vm = this;
			vm.iframeHeight = window.innerHeight;

		}

})();
