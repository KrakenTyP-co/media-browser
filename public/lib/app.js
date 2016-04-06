angular.module('browser', [])
    .controller('myCtrl', function ($scope, $http) {
        $http.get("http://mediabrowser.bart.sk/dir").then(function (response) {
            $scope.dir = response.data.dir;
            $scope.dirs_data = response.data.dirs;
            $scope.files_data = response.data.files;
        });

        $scope.loadDir = function (event) {
            if ($(event.target).attr('class') != "icon ng-scope" && $(event.target).attr('class') != "icon") {
                $http.get("http://mediabrowser.bart.sk/dir" + $(event.target).parent().attr('data-dirName')).then(function (response) {
                    $scope.dir = response.data.dir;
                    $scope.dirs_data = response.data.dirs;
                    $scope.files_data = response.data.files;
                })
            }

            if ($(event.target).attr('class') == "icon ng-scope" || $(event.target).attr('class') == "icon") {
                $http.get("http://mediabrowser.bart.sk/dir" + $(event.target).attr('data-dirName')).then(function (response) {
                    $scope.dir = response.data.dir;
                    $scope.dirs_data = response.data.dirs;
                    $scope.files_data = response.data.files;
                })
            }
        };

        $scope.loadDirLeft = function (event) {
            $http.get("http://mediabrowser.bart.sk/dir" + $(event.target).attr('data-dirName')).then(function (response) {
                $scope.dir = response.data.dir;
                $scope.dirs_data = response.data.dirs;
                $scope.files_data = response.data.files;
            })
        }

    });