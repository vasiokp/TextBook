'use strict';

var app = angular.module('TextBookApp',[]);

app.controller('testCTRL', function ($scope) {
	$scope.foo = 'Hello mama';
	$scope.inc = 0;
});