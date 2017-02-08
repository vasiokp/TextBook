(function (app) {
	'use strict';
	app.directive('contentImg', contentImg);
	app.controller('contentImgCtrl', contentImgCtrl);

	function contentImg() {
		return {
			bindToController: true,
			controller: 'leftMenuCtrl',
			replace: true,
			restrict: 'E',
			templateUrl: '/app/components/content/content.template.html'
		}
	}

	function contentImgCtrl($scope, $rootScope) {
		$scope.inctrl = 'leftmenu';
	}

})(angular.module('TextBookApp'));