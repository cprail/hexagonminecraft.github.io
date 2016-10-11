'use strict';
angular.module('app.controllers', [])
    .controller('AppCtrl', function ($scope, $http) {
        $scope.done = false;

        $http({
            method: 'GET',
            url: 'https://mcapi.ca/query/play.hexagonminecraft.com/info'
        }).then(function successCallback(response) {
            console.log(response.data);
            $scope.status = response.data;

            if ($scope.status.status) {
                $scope.isOnline = "Online";
                $scope.onlineColor = { 'color': 'green' };
                $scope.done = true;
            }
            else {
                $scope.isOnline = "Offline";
                $scope.onlineColor = { 'color': 'red' };
                $scope.done = true;
            }
        }, function errorCallback(response) {
            console.log(response);
            $scope.isOnline = "Offline";
            $scope.onlineColor = { 'color': 'red' };
            $scope.status.players.online = "0"
            $scope.done = true;
        });
    });