(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app.js":[function(require,module,exports){
'use strict';

var _index = require('./tpl/index');

var _index2 = _interopRequireDefault(_index);

var _application = require('./app/components/application-root/application.root');

var _application2 = _interopRequireDefault(_application);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

angular.module('browser', [_index2.default, _application.module]).component('applicationRoot', _application2.default)
// .component('leftMenu', leftMenu)
;

},{"./app/components/application-root/application.root":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/components/application-root/application.root.js","./tpl/index":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/tpl/index.js"}],"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/components/application-root/application.root.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _module = 'components';

exports.module = _module;
angular.module(_module, []);

var MyCtrl = function () {

    // @ngInject

    function MyCtrl($http) {
        var _this = this;

        _classCallCheck(this, MyCtrl);

        this.$http = $http;

        this.dir = null;
        this.dirs_data = [];
        this.files_data = [];

        this.$http.get("http://mediabrowser.bart.sk/dir").then(function (response) {
            _this.dir = response.data.dir;
            _this.dirs_data = response.data.dirs;
            _this.files_data = response.data.files;
        });
    }

    _createClass(MyCtrl, [{
        key: 'loadDir',
        value: function loadDir(event) {
            var _this2 = this;

            if ($(event.target).attr('class') != "icon ng-scope" && $(event.target).attr('class') != "icon") {
                this.$http.get("http://mediabrowser.bart.sk/dir" + $(event.target).parent().attr('data-dirName')).then(function (response) {
                    _this2.dir = response.data.dir;
                    _this2.dirs_data = response.data.dirs;
                    _this2.files_data = response.data.files;
                });
            }

            if ($(event.target).attr('class') == "icon ng-scope" || $(event.target).attr('class') == "icon") {
                this.$http.get("http://mediabrowser.bart.sk/dir" + $(event.target).attr('data-dirName')).then(function (response) {
                    _this2.dir = response.data.dir;
                    _this2.dirs_data = response.data.dirs;
                    _this2.files_data = response.data.files;
                });
            }
        }
    }, {
        key: 'loadDirLeft',
        value: function loadDirLeft(event) {
            var _this3 = this;

            this.$http.get("http://mediabrowser.bart.sk/dir" + $(event.target).attr('data-dirName')).then(function (response) {
                _this3.dir = response.data.dir;
                _this3.dirs_data = response.data.dirs;
                _this3.files_data = response.data.files;
            });
        }
    }]);

    return MyCtrl;
}();

exports.default = {
    controller: MyCtrl,
    templateUrl: 'application-root/application.root.tpl.html'
};

},{}],"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/tpl/index.js":[function(require,module,exports){
'use strict';

require('./templates');
module.exports = 'templates';

},{"./templates":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/tpl/templates.js"}],"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/tpl/templates.js":[function(require,module,exports){
"use strict";

angular.module("templates", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("application-root/application.root.tpl.html", "<div id=\"okno\">\n    <!-- todo componeneta -->\n    <div id=\"left_menu\">\n        <ul>\n            <li ng-show=\"$ctrl.dir\" ng-click=\"$ctrl.loadDirLeft($event);\" data-dirName=\"{{$ctrl.dir.location}}\" style=\"font-weight: bold; font-size: 18px;\">Nadradeny adresar</li>\n            <li ng-repeat=\"dir in $ctrl.dirs_data\" ng-click=\"$ctrl.loadDirLeft($event)\" data-dirName=\"{{dir.location}}/{{dir.name}}\">{{dir.name}}</li>\n        </ul>\n    </div>\n\n    <left-menu></left-menu>\n\n    <div id=\"obsah\">\n        <div id=\"header2\">\n            <h2>Files / Images</h2>\n        </div>\n\n        <div style=\"margin-left:20px; margin-right: 30px\">\n\n            <!-- todo componeneta -->\n            <div class=\"icon\" ng-show=\"$ctrl.dir\" ng-click=\"$ctrl.loadDir($event)\" data-dirName=\"{{$ctrl.dir.location}}\">\n                <img class=\"img_icon\" src=\"img/adresar.png\">\n                <div class=\"nazov_suboru\">Nadradeny adresar</div>\n            </div>\n\n            <!-- todo componeneta -->\n            <div class=\"icon\" ng-repeat=\"dir in $ctrl.dirs_data\" ng-click=\"$ctrl.loadDir($event)\" data-dirName=\"{{dir.location}}/{{dir.name}}\">\n                <img class=\"img_icon\" src=\"img/priecinok.png\">\n                <div class=\"nazov_suboru\">{{dir.name}}</div>\n\n            </div>\n\n            <!-- todo componeneta -->\n            <div class=\"icon\" ng-repeat=\"file in $ctrl.files_data | filter:{ type: \'image/jpeg\' }\">\n                <img class=\"img_picture\" src=\"{{file.thumb_link}}\">\n                <div class=\"nazov_suboru\">{{file.name}}</div>\n                <div class=\"typ_suboru\">\n                    <p>JPG</p>\n                </div>\n                <div class=\"velkost_suboru\">\n                    <p>{{file.size}}</p>\n                </div>\n            </div>\n\n            <!-- todo componeneta -->\n            <div class=\"icon\" ng-repeat=\"file in $ctrl.files_data | filter:{ type: \'image/png\' }\">\n                <img class=\"img_icon\" src=\"{{file.thumb_link}}\">\n                <div class=\"nazov_suboru\">{{file.name}}</div>\n                <div class=\"typ_suboru\">\n                    <p>PNG</p>\n                </div>\n                <div class=\"velkost_suboru\">\n                    <p>{{file.size}}</p>\n                </div>\n            </div>\n\n            <!-- todo componeneta -->\n            <div class=\"icon\" ng-repeat=\"file in $ctrl.files_data | filter:{ type: \'text/plain\' }\">\n                <img class=\"img_icon\" src=\"img/txt.png\">\n                <div class=\"nazov_suboru\">{{file.name}}</div>\n                <div class=\"typ_suboru\">\n                    <p>TXT</p>\n                </div>\n                <div class=\"velkost_suboru\">\n                    <p>{{file.size}}</p>\n                </div>\n            </div>\n\n            <!-- todo componeneta -->\n            <div class=\"icon\" ng-repeat=\"file in $ctrl.files_data | filter:{ type: \'application/pdf\' }\">\n                <img class=\"img_icon\" src=\"img/pdf.png\">\n                <div class=\"nazov_suboru\">{{file.name}}</div>\n                <div class=\"typ_suboru\">\n                    <p>PDF</p>\n                </div>\n                <div class=\"velkost_suboru\">\n                    <p>{{file.size}}</p>\n                </div>\n            </div>\n\n            <!-- todo componeneta -->\n            <div class=\"icon\" ng-repeat=\"file in $ctrl.files_data | filter:{ type: \'!image/jpeg\'} | filter:{ type: \'!application/pdf\'} | filter:{ type: \'!text/plain\'} | filter:{ type: \'!image/png\'} \">\n                <img class=\"img_icon\" src=\"img/plain.png\">\n                <div class=\"nazov_suboru\">{{file.name}}</div>\n                <div class=\"typ_suboru\">\n                    <p>any</p>\n                </div>\n                <div class=\"velkost_suboru\">\n                    <p>{{file.size}}</p>\n                </div>\n            </div>\n\n\n        </div>\n\n    </div>\n\n</div>");
}]);

},{}]},{},["/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app.js"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBwLmpzIiwic3JjL2FwcC9jb21wb25lbnRzL2FwcGxpY2F0aW9uLXJvb3QvYXBwbGljYXRpb24ucm9vdC5qcyIsInNyYy90cGwvaW5kZXguanMiLCJzcmMvdHBsL3RlbXBsYXRlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7QUFFQTs7Ozs7O0FBRUEsUUFBUSxNQUFSLENBQWUsU0FBZixFQUEwQixzQ0FBMUIsRUFDSyxTQURMLENBQ2UsaUJBRGY7Ozs7Ozs7Ozs7Ozs7OztBQ0pPLElBQU0sVUFBUyxZQUFUOzs7QUFFYixRQUFRLE1BQVIsQ0FBZSxPQUFmLEVBQXVCLEVBQXZCOztJQUVNOzs7O0FBR0YsYUFIRSxNQUdGLENBQVksS0FBWixFQUFtQjs7OzhCQUhqQixRQUdpQjs7QUFDZixhQUFLLEtBQUwsR0FBYSxLQUFiLENBRGU7O0FBR2YsYUFBSyxHQUFMLEdBQVcsSUFBWCxDQUhlO0FBSWYsYUFBSyxTQUFMLEdBQWlCLEVBQWpCLENBSmU7QUFLZixhQUFLLFVBQUwsR0FBa0IsRUFBbEIsQ0FMZTs7QUFPZixhQUFLLEtBQUwsQ0FBVyxHQUFYLENBQWUsaUNBQWYsRUFBa0QsSUFBbEQsQ0FBdUQsVUFBQyxRQUFELEVBQWM7QUFDakUsa0JBQUssR0FBTCxHQUFXLFNBQVMsSUFBVCxDQUFjLEdBQWQsQ0FEc0Q7QUFFakUsa0JBQUssU0FBTCxHQUFpQixTQUFTLElBQVQsQ0FBYyxJQUFkLENBRmdEO0FBR2pFLGtCQUFLLFVBQUwsR0FBa0IsU0FBUyxJQUFULENBQWMsS0FBZCxDQUgrQztTQUFkLENBQXZELENBUGU7S0FBbkI7O2lCQUhFOztnQ0FrQk0sT0FBTzs7O0FBQ1gsZ0JBQUksRUFBRSxNQUFNLE1BQU4sQ0FBRixDQUFnQixJQUFoQixDQUFxQixPQUFyQixLQUFpQyxlQUFqQyxJQUFvRCxFQUFFLE1BQU0sTUFBTixDQUFGLENBQWdCLElBQWhCLENBQXFCLE9BQXJCLEtBQWlDLE1BQWpDLEVBQXlDO0FBQzdGLHFCQUFLLEtBQUwsQ0FBVyxHQUFYLENBQWUsb0NBQW9DLEVBQUUsTUFBTSxNQUFOLENBQUYsQ0FBZ0IsTUFBaEIsR0FBeUIsSUFBekIsQ0FBOEIsY0FBOUIsQ0FBcEMsQ0FBZixDQUNLLElBREwsQ0FDVSxVQUFDLFFBQUQsRUFBYztBQUNoQiwyQkFBSyxHQUFMLEdBQVcsU0FBUyxJQUFULENBQWMsR0FBZCxDQURLO0FBRWhCLDJCQUFLLFNBQUwsR0FBaUIsU0FBUyxJQUFULENBQWMsSUFBZCxDQUZEO0FBR2hCLDJCQUFLLFVBQUwsR0FBa0IsU0FBUyxJQUFULENBQWMsS0FBZCxDQUhGO2lCQUFkLENBRFYsQ0FENkY7YUFBakc7O0FBU0EsZ0JBQUksRUFBRSxNQUFNLE1BQU4sQ0FBRixDQUFnQixJQUFoQixDQUFxQixPQUFyQixLQUFpQyxlQUFqQyxJQUFvRCxFQUFFLE1BQU0sTUFBTixDQUFGLENBQWdCLElBQWhCLENBQXFCLE9BQXJCLEtBQWlDLE1BQWpDLEVBQXlDO0FBQzdGLHFCQUFLLEtBQUwsQ0FBVyxHQUFYLENBQWUsb0NBQW9DLEVBQUUsTUFBTSxNQUFOLENBQUYsQ0FBZ0IsSUFBaEIsQ0FBcUIsY0FBckIsQ0FBcEMsQ0FBZixDQUNLLElBREwsQ0FDVSxVQUFDLFFBQUQsRUFBYztBQUNoQiwyQkFBSyxHQUFMLEdBQVcsU0FBUyxJQUFULENBQWMsR0FBZCxDQURLO0FBRWhCLDJCQUFLLFNBQUwsR0FBaUIsU0FBUyxJQUFULENBQWMsSUFBZCxDQUZEO0FBR2hCLDJCQUFLLFVBQUwsR0FBa0IsU0FBUyxJQUFULENBQWMsS0FBZCxDQUhGO2lCQUFkLENBRFYsQ0FENkY7YUFBakc7Ozs7b0NBV1EsT0FBTzs7O0FBQ2YsaUJBQUssS0FBTCxDQUFXLEdBQVgsQ0FBZSxvQ0FBb0MsRUFBRSxNQUFNLE1BQU4sQ0FBRixDQUFnQixJQUFoQixDQUFxQixjQUFyQixDQUFwQyxDQUFmLENBQ0ssSUFETCxDQUNVLFVBQUMsUUFBRCxFQUFjO0FBQ2hCLHVCQUFLLEdBQUwsR0FBVyxTQUFTLElBQVQsQ0FBYyxHQUFkLENBREs7QUFFaEIsdUJBQUssU0FBTCxHQUFpQixTQUFTLElBQVQsQ0FBYyxJQUFkLENBRkQ7QUFHaEIsdUJBQUssVUFBTCxHQUFrQixTQUFTLElBQVQsQ0FBYyxLQUFkLENBSEY7YUFBZCxDQURWLENBRGU7Ozs7V0F2Q2pCOzs7a0JBaURTO0FBQ1gsZ0JBQVksTUFBWjtBQUNBLGlCQUFhLDRDQUFiOzs7Ozs7QUN2REosUUFBUSxhQUFSO0FBQ0EsT0FBTyxPQUFQLEdBQWlCLFdBQWpCOzs7OztBQ0RBLFFBQVEsTUFBUixDQUFlLFdBQWYsRUFBNEIsRUFBNUIsRUFBZ0MsR0FBaEMsQ0FBb0MsQ0FBQyxnQkFBRCxFQUFtQixVQUFTLGNBQVQsRUFBeUI7QUFBQyxpQkFBZSxHQUFmLENBQW1CLDRDQUFuQixFQUFnRSxpK0hBQWhFLEVBQUQ7Q0FBekIsQ0FBdkQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vdHBsL2luZGV4JztcblxuaW1wb3J0IHJvb3QsIHttb2R1bGV9IGZyb20gJy4vYXBwL2NvbXBvbmVudHMvYXBwbGljYXRpb24tcm9vdC9hcHBsaWNhdGlvbi5yb290JztcblxuYW5ndWxhci5tb2R1bGUoJ2Jyb3dzZXInLCBbdGVtcGxhdGUsIG1vZHVsZV0pXG4gICAgLmNvbXBvbmVudCgnYXBwbGljYXRpb25Sb290Jywgcm9vdClcbiAgICAvLyAuY29tcG9uZW50KCdsZWZ0TWVudScsIGxlZnRNZW51KVxuOyIsImV4cG9ydCBjb25zdCBtb2R1bGUgPSAnY29tcG9uZW50cyc7XG5cbmFuZ3VsYXIubW9kdWxlKG1vZHVsZSwgW10pO1xuXG5jbGFzcyBNeUN0cmwge1xuXG4gICAgLy8gQG5nSW5qZWN0XG4gICAgY29uc3RydWN0b3IoJGh0dHApIHtcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xuXG4gICAgICAgIHRoaXMuZGlyID0gbnVsbDtcbiAgICAgICAgdGhpcy5kaXJzX2RhdGEgPSBbXTtcbiAgICAgICAgdGhpcy5maWxlc19kYXRhID0gW107XG5cbiAgICAgICAgdGhpcy4kaHR0cC5nZXQoXCJodHRwOi8vbWVkaWFicm93c2VyLmJhcnQuc2svZGlyXCIpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRpciA9IHJlc3BvbnNlLmRhdGEuZGlyO1xuICAgICAgICAgICAgdGhpcy5kaXJzX2RhdGEgPSByZXNwb25zZS5kYXRhLmRpcnM7XG4gICAgICAgICAgICB0aGlzLmZpbGVzX2RhdGEgPSByZXNwb25zZS5kYXRhLmZpbGVzO1xuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGxvYWREaXIoZXZlbnQpIHtcbiAgICAgICAgaWYgKCQoZXZlbnQudGFyZ2V0KS5hdHRyKCdjbGFzcycpICE9IFwiaWNvbiBuZy1zY29wZVwiICYmICQoZXZlbnQudGFyZ2V0KS5hdHRyKCdjbGFzcycpICE9IFwiaWNvblwiKSB7XG4gICAgICAgICAgICB0aGlzLiRodHRwLmdldChcImh0dHA6Ly9tZWRpYWJyb3dzZXIuYmFydC5zay9kaXJcIiArICQoZXZlbnQudGFyZ2V0KS5wYXJlbnQoKS5hdHRyKCdkYXRhLWRpck5hbWUnKSlcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXIgPSByZXNwb25zZS5kYXRhLmRpcjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXJzX2RhdGEgPSByZXNwb25zZS5kYXRhLmRpcnM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZXNfZGF0YSA9IHJlc3BvbnNlLmRhdGEuZmlsZXM7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkKGV2ZW50LnRhcmdldCkuYXR0cignY2xhc3MnKSA9PSBcImljb24gbmctc2NvcGVcIiB8fCAkKGV2ZW50LnRhcmdldCkuYXR0cignY2xhc3MnKSA9PSBcImljb25cIikge1xuICAgICAgICAgICAgdGhpcy4kaHR0cC5nZXQoXCJodHRwOi8vbWVkaWFicm93c2VyLmJhcnQuc2svZGlyXCIgKyAkKGV2ZW50LnRhcmdldCkuYXR0cignZGF0YS1kaXJOYW1lJykpXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlyID0gcmVzcG9uc2UuZGF0YS5kaXI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlyc19kYXRhID0gcmVzcG9uc2UuZGF0YS5kaXJzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGVzX2RhdGEgPSByZXNwb25zZS5kYXRhLmZpbGVzO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9O1xuXG5cbiAgICBsb2FkRGlyTGVmdChldmVudCkge1xuICAgICAgICB0aGlzLiRodHRwLmdldChcImh0dHA6Ly9tZWRpYWJyb3dzZXIuYmFydC5zay9kaXJcIiArICQoZXZlbnQudGFyZ2V0KS5hdHRyKCdkYXRhLWRpck5hbWUnKSlcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlyID0gcmVzcG9uc2UuZGF0YS5kaXI7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXJzX2RhdGEgPSByZXNwb25zZS5kYXRhLmRpcnM7XG4gICAgICAgICAgICAgICAgdGhpcy5maWxlc19kYXRhID0gcmVzcG9uc2UuZGF0YS5maWxlcztcbiAgICAgICAgICAgIH0pXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY29udHJvbGxlcjogTXlDdHJsLFxuICAgIHRlbXBsYXRlVXJsOiAnYXBwbGljYXRpb24tcm9vdC9hcHBsaWNhdGlvbi5yb290LnRwbC5odG1sJ1xufTsiLCJyZXF1aXJlKCcuL3RlbXBsYXRlcycpO1xubW9kdWxlLmV4cG9ydHMgPSAndGVtcGxhdGVzJzsiLCJhbmd1bGFyLm1vZHVsZShcInRlbXBsYXRlc1wiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7JHRlbXBsYXRlQ2FjaGUucHV0KFwiYXBwbGljYXRpb24tcm9vdC9hcHBsaWNhdGlvbi5yb290LnRwbC5odG1sXCIsXCI8ZGl2IGlkPVxcXCJva25vXFxcIj5cXG4gICAgPCEtLSB0b2RvIGNvbXBvbmVuZXRhIC0tPlxcbiAgICA8ZGl2IGlkPVxcXCJsZWZ0X21lbnVcXFwiPlxcbiAgICAgICAgPHVsPlxcbiAgICAgICAgICAgIDxsaSBuZy1zaG93PVxcXCIkY3RybC5kaXJcXFwiIG5nLWNsaWNrPVxcXCIkY3RybC5sb2FkRGlyTGVmdCgkZXZlbnQpO1xcXCIgZGF0YS1kaXJOYW1lPVxcXCJ7eyRjdHJsLmRpci5sb2NhdGlvbn19XFxcIiBzdHlsZT1cXFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMThweDtcXFwiPk5hZHJhZGVueSBhZHJlc2FyPC9saT5cXG4gICAgICAgICAgICA8bGkgbmctcmVwZWF0PVxcXCJkaXIgaW4gJGN0cmwuZGlyc19kYXRhXFxcIiBuZy1jbGljaz1cXFwiJGN0cmwubG9hZERpckxlZnQoJGV2ZW50KVxcXCIgZGF0YS1kaXJOYW1lPVxcXCJ7e2Rpci5sb2NhdGlvbn19L3t7ZGlyLm5hbWV9fVxcXCI+e3tkaXIubmFtZX19PC9saT5cXG4gICAgICAgIDwvdWw+XFxuICAgIDwvZGl2PlxcblxcbiAgICA8bGVmdC1tZW51PjwvbGVmdC1tZW51PlxcblxcbiAgICA8ZGl2IGlkPVxcXCJvYnNhaFxcXCI+XFxuICAgICAgICA8ZGl2IGlkPVxcXCJoZWFkZXIyXFxcIj5cXG4gICAgICAgICAgICA8aDI+RmlsZXMgLyBJbWFnZXM8L2gyPlxcbiAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICA8ZGl2IHN0eWxlPVxcXCJtYXJnaW4tbGVmdDoyMHB4OyBtYXJnaW4tcmlnaHQ6IDMwcHhcXFwiPlxcblxcbiAgICAgICAgICAgIDwhLS0gdG9kbyBjb21wb25lbmV0YSAtLT5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpY29uXFxcIiBuZy1zaG93PVxcXCIkY3RybC5kaXJcXFwiIG5nLWNsaWNrPVxcXCIkY3RybC5sb2FkRGlyKCRldmVudClcXFwiIGRhdGEtZGlyTmFtZT1cXFwie3skY3RybC5kaXIubG9jYXRpb259fVxcXCI+XFxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XFxcImltZ19pY29uXFxcIiBzcmM9XFxcImltZy9hZHJlc2FyLnBuZ1xcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hem92X3N1Ym9ydVxcXCI+TmFkcmFkZW55IGFkcmVzYXI8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICA8IS0tIHRvZG8gY29tcG9uZW5ldGEgLS0+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaWNvblxcXCIgbmctcmVwZWF0PVxcXCJkaXIgaW4gJGN0cmwuZGlyc19kYXRhXFxcIiBuZy1jbGljaz1cXFwiJGN0cmwubG9hZERpcigkZXZlbnQpXFxcIiBkYXRhLWRpck5hbWU9XFxcInt7ZGlyLmxvY2F0aW9ufX0ve3tkaXIubmFtZX19XFxcIj5cXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cXFwiaW1nX2ljb25cXFwiIHNyYz1cXFwiaW1nL3ByaWVjaW5vay5wbmdcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYXpvdl9zdWJvcnVcXFwiPnt7ZGlyLm5hbWV9fTwvZGl2PlxcblxcbiAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgIDwhLS0gdG9kbyBjb21wb25lbmV0YSAtLT5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpY29uXFxcIiBuZy1yZXBlYXQ9XFxcImZpbGUgaW4gJGN0cmwuZmlsZXNfZGF0YSB8IGZpbHRlcjp7IHR5cGU6IFxcJ2ltYWdlL2pwZWdcXCcgfVxcXCI+XFxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XFxcImltZ19waWN0dXJlXFxcIiBzcmM9XFxcInt7ZmlsZS50aHVtYl9saW5rfX1cXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYXpvdl9zdWJvcnVcXFwiPnt7ZmlsZS5uYW1lfX08L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidHlwX3N1Ym9ydVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8cD5KUEc8L3A+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ2ZWxrb3N0X3N1Ym9ydVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8cD57e2ZpbGUuc2l6ZX19PC9wPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICA8IS0tIHRvZG8gY29tcG9uZW5ldGEgLS0+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaWNvblxcXCIgbmctcmVwZWF0PVxcXCJmaWxlIGluICRjdHJsLmZpbGVzX2RhdGEgfCBmaWx0ZXI6eyB0eXBlOiBcXCdpbWFnZS9wbmdcXCcgfVxcXCI+XFxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XFxcImltZ19pY29uXFxcIiBzcmM9XFxcInt7ZmlsZS50aHVtYl9saW5rfX1cXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYXpvdl9zdWJvcnVcXFwiPnt7ZmlsZS5uYW1lfX08L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidHlwX3N1Ym9ydVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8cD5QTkc8L3A+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ2ZWxrb3N0X3N1Ym9ydVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8cD57e2ZpbGUuc2l6ZX19PC9wPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICA8IS0tIHRvZG8gY29tcG9uZW5ldGEgLS0+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaWNvblxcXCIgbmctcmVwZWF0PVxcXCJmaWxlIGluICRjdHJsLmZpbGVzX2RhdGEgfCBmaWx0ZXI6eyB0eXBlOiBcXCd0ZXh0L3BsYWluXFwnIH1cXFwiPlxcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVxcXCJpbWdfaWNvblxcXCIgc3JjPVxcXCJpbWcvdHh0LnBuZ1xcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hem92X3N1Ym9ydVxcXCI+e3tmaWxlLm5hbWV9fTwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0eXBfc3Vib3J1XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxwPlRYVDwvcD5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInZlbGtvc3Rfc3Vib3J1XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxwPnt7ZmlsZS5zaXplfX08L3A+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgIDwhLS0gdG9kbyBjb21wb25lbmV0YSAtLT5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpY29uXFxcIiBuZy1yZXBlYXQ9XFxcImZpbGUgaW4gJGN0cmwuZmlsZXNfZGF0YSB8IGZpbHRlcjp7IHR5cGU6IFxcJ2FwcGxpY2F0aW9uL3BkZlxcJyB9XFxcIj5cXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cXFwiaW1nX2ljb25cXFwiIHNyYz1cXFwiaW1nL3BkZi5wbmdcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYXpvdl9zdWJvcnVcXFwiPnt7ZmlsZS5uYW1lfX08L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidHlwX3N1Ym9ydVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8cD5QREY8L3A+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ2ZWxrb3N0X3N1Ym9ydVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8cD57e2ZpbGUuc2l6ZX19PC9wPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICA8IS0tIHRvZG8gY29tcG9uZW5ldGEgLS0+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaWNvblxcXCIgbmctcmVwZWF0PVxcXCJmaWxlIGluICRjdHJsLmZpbGVzX2RhdGEgfCBmaWx0ZXI6eyB0eXBlOiBcXCchaW1hZ2UvanBlZ1xcJ30gfCBmaWx0ZXI6eyB0eXBlOiBcXCchYXBwbGljYXRpb24vcGRmXFwnfSB8IGZpbHRlcjp7IHR5cGU6IFxcJyF0ZXh0L3BsYWluXFwnfSB8IGZpbHRlcjp7IHR5cGU6IFxcJyFpbWFnZS9wbmdcXCd9IFxcXCI+XFxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XFxcImltZ19pY29uXFxcIiBzcmM9XFxcImltZy9wbGFpbi5wbmdcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYXpvdl9zdWJvcnVcXFwiPnt7ZmlsZS5uYW1lfX08L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidHlwX3N1Ym9ydVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8cD5hbnk8L3A+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ2ZWxrb3N0X3N1Ym9ydVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8cD57e2ZpbGUuc2l6ZX19PC9wPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG5cXG5cXG4gICAgICAgIDwvZGl2PlxcblxcbiAgICA8L2Rpdj5cXG5cXG48L2Rpdj5cIik7fV0pOyJdfQ==
