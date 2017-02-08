(function () {
	'use strict';

	var app = angular.module('TextBookApp', ['ngMaterial']);

	app.controller('testCTRL', function ($scope) {
		$scope.foo = 'Hello mama';
		$scope.inc = 0;
	});
});