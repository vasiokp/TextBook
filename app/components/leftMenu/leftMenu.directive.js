(function (app) {
	'use strict';
	app.directive('leftMenu', leftMenu);
	app.controller('leftMenuCtrl',leftMenuCtrl);

	function leftMenu(){
		return{
			bindToController: true,
			controller: 'leftMenuCtrl',
			replace: true,
			restrict: 'E',
			templateUrl: '/app/components/leftMenu/leftMenu.template.html'
		}
	}

	function leftMenuCtrl($scope, $rootScope) {
		$scope.inctrl = 'leftmenu';
	}

})(angular.module('TextBook'));