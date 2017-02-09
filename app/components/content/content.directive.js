(function (app) {
	'use strict';
	app.directive('contentImg', contentImg);
	app.controller('contentImgCtrl', contentImgCtrl);

	function contentImg() {
		return {
			bindToController: true,
			controller: 'contentImgCtrl',
			replace: true,
			restrict: 'E',
			templateUrl: '/app/components/content/content.template.html'
		}

		function contentImgCtrl($scope, $rootScope) {
			console.log(2);

			//$scope.sistImgList = []
			//for (var i = 1; i < 24; i++) {
			//	$scope.sistImgList[i - 1] = "../../../assets/img/sistemne-prog/Слайд" + i + ".PNG";
			//	console.log(i);

			//}
			//console.log($scope.sistImgList[2]);

		}

	}
})(angular.module('TextBookApp'));