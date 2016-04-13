(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"C:\\Users\\Katarína\\Desktop\\media-browser\\src\\app.js":[function(require,module,exports){
'use strict';

var _index = require('./tpl/index');

var _index2 = _interopRequireDefault(_index);

var _application = require('./app/components/application-root/application.root');

var _application2 = _interopRequireDefault(_application);

var _left = require('./app/components/left-menu/left.menu');

var _left2 = _interopRequireDefault(_left);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

angular.module('browser', [_index2.default, _application.module]).component('applicationRoot', _application2.default).component('leftMenu', _left2.default);

},{"./app/components/application-root/application.root":"C:\\Users\\Katarína\\Desktop\\media-browser\\src\\app\\components\\application-root\\application.root.js","./app/components/left-menu/left.menu":"C:\\Users\\Katarína\\Desktop\\media-browser\\src\\app\\components\\left-menu\\left.menu.js","./tpl/index":"C:\\Users\\Katarína\\Desktop\\media-browser\\src\\tpl\\index.js"}],"C:\\Users\\Katarína\\Desktop\\media-browser\\src\\app\\components\\application-root\\application.root.js":[function(require,module,exports){
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
    }]);

    return MyCtrl;
}();

exports.default = {
    controller: MyCtrl,
    templateUrl: 'application-root/application.root.tpl.html'
};

},{}],"C:\\Users\\Katarína\\Desktop\\media-browser\\src\\app\\components\\left-menu\\left.menu.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LeftMenu = function () {

    // @ngInject

    function LeftMenu($http) {
        _classCallCheck(this, LeftMenu);

        this.$http = $http;

        this.dir = MyCtrl.dir;
        this.dirs_data = MyCtrl.dirs_data;
        this.files_data = MyCtrl.files_data;
    }

    _createClass(LeftMenu, [{
        key: 'loadDirLeft',
        value: function loadDirLeft(event) {
            var _this = this;

            this.$http.get("http://mediabrowser.bart.sk/dir" + $(event.target).attr('data-dirName')).then(function (response) {
                _this.dir = response.data.dir;
                _this.dirs_data = response.data.dirs;
                _this.files_data = response.data.files;
            });
        }
    }]);

    return LeftMenu;
}();

exports.default = {
    controller: LeftMenu,
    templateUrl: 'left-menu/left.menu.tpl.html'
};

},{}],"C:\\Users\\Katarína\\Desktop\\media-browser\\src\\tpl\\index.js":[function(require,module,exports){
'use strict';

require('./templates');
module.exports = 'templates';

},{"./templates":"C:\\Users\\Katarína\\Desktop\\media-browser\\src\\tpl\\templates.js"}],"C:\\Users\\Katarína\\Desktop\\media-browser\\src\\tpl\\templates.js":[function(require,module,exports){
"use strict";

angular.module("templates", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("application-root/application.root.tpl.html", "<div id=\"okno\">\r\n    <!-- todo componeneta -->\r\n\r\n\r\n<left-menu></left-menu>\r\n\r\n    <div id=\"obsah\">\r\n        <div id=\"header2\">\r\n            <h2>Files / Images</h2>\r\n        </div>\r\n\r\n        <div style=\"margin-left:20px; margin-right: 30px\">\r\n\r\n            <!-- todo componeneta -->\r\n            <div class=\"icon\" ng-show=\"$ctrl.dir\" ng-click=\"$ctrl.loadDir($event)\" data-dirName=\"{{$ctrl.dir.location}}\">\r\n                <img class=\"img_icon\" src=\"img/adresar.png\">\r\n                <div class=\"nazov_suboru\">Nadradeny adresar</div>\r\n            </div>\r\n\r\n            <!-- todo componeneta -->\r\n            <div class=\"icon\" ng-repeat=\"dir in $ctrl.dirs_data\" ng-click=\"$ctrl.loadDir($event)\" data-dirName=\"{{dir.location}}/{{dir.name}}\">\r\n                <img class=\"img_icon\" src=\"img/priecinok.png\">\r\n                <div class=\"nazov_suboru\">{{dir.name}}</div>\r\n\r\n            </div>\r\n\r\n            <!-- todo componeneta -->\r\n            <div class=\"icon\" ng-repeat=\"file in $ctrl.files_data | filter:{ type: \'image/jpeg\' }\">\r\n                <img class=\"img_picture\" src=\"{{file.thumb_link}}\">\r\n                <div class=\"nazov_suboru\">{{file.name}}</div>\r\n                <div class=\"typ_suboru\">\r\n                    <p>JPG</p>\r\n                </div>\r\n                <div class=\"velkost_suboru\">\r\n                    <p>{{file.size}}</p>\r\n                </div>\r\n            </div>\r\n\r\n            <!-- todo componeneta -->\r\n            <div class=\"icon\" ng-repeat=\"file in $ctrl.files_data | filter:{ type: \'image/png\' }\">\r\n                <img class=\"img_icon\" src=\"{{file.thumb_link}}\">\r\n                <div class=\"nazov_suboru\">{{file.name}}</div>\r\n                <div class=\"typ_suboru\">\r\n                    <p>PNG</p>\r\n                </div>\r\n                <div class=\"velkost_suboru\">\r\n                    <p>{{file.size}}</p>\r\n                </div>\r\n            </div>\r\n\r\n            <!-- todo componeneta -->\r\n            <div class=\"icon\" ng-repeat=\"file in $ctrl.files_data | filter:{ type: \'text/plain\' }\">\r\n                <img class=\"img_icon\" src=\"img/txt.png\">\r\n                <div class=\"nazov_suboru\">{{file.name}}</div>\r\n                <div class=\"typ_suboru\">\r\n                    <p>TXT</p>\r\n                </div>\r\n                <div class=\"velkost_suboru\">\r\n                    <p>{{file.size}}</p>\r\n                </div>\r\n            </div>\r\n\r\n            <!-- todo componeneta -->\r\n            <div class=\"icon\" ng-repeat=\"file in $ctrl.files_data | filter:{ type: \'application/pdf\' }\">\r\n                <img class=\"img_icon\" src=\"img/pdf.png\">\r\n                <div class=\"nazov_suboru\">{{file.name}}</div>\r\n                <div class=\"typ_suboru\">\r\n                    <p>PDF</p>\r\n                </div>\r\n                <div class=\"velkost_suboru\">\r\n                    <p>{{file.size}}</p>\r\n                </div>\r\n            </div>\r\n\r\n            <!-- todo componeneta -->\r\n            <div class=\"icon\" ng-repeat=\"file in $ctrl.files_data | filter:{ type: \'!image/jpeg\'} | filter:{ type: \'!application/pdf\'} | filter:{ type: \'!text/plain\'} | filter:{ type: \'!image/png\'} \">\r\n                <img class=\"img_icon\" src=\"img/plain.png\">\r\n                <div class=\"nazov_suboru\">{{file.name}}</div>\r\n                <div class=\"typ_suboru\">\r\n                    <p>any</p>\r\n                </div>\r\n                <div class=\"velkost_suboru\">\r\n                    <p>{{file.size}}</p>\r\n                </div>\r\n            </div>\r\n\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>");
  $templateCache.put("left-menu/left.menu.tpl.html", "<div id=\"left_menu\">\r\n    <ul>\r\n        <li ng-show=\"$ctrl.dir\" ng-click=\"$ctrl.loadDirLeft($event);\" data-dirName=\"{{$ctrl.dir.location}}\" style=\"font-weight: bold; font-size: 18px;\">Nadradeny adresar</li>\r\n        <li ng-repeat=\"dir in $ctrl.dirs_data\" ng-click=\"$ctrl.loadDirLeft($event)\" data-dirName=\"{{dir.location}}/{{dir.name}}\">{{dir.name}}</li>\r\n    </ul>\r\n</div>");
}]);

},{}]},{},["C:\\Users\\Katarína\\Desktop\\media-browser\\src\\app.js"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGFwcC5qcyIsInNyY1xcYXBwXFxjb21wb25lbnRzXFxhcHBsaWNhdGlvbi1yb290XFxhcHBsaWNhdGlvbi5yb290LmpzIiwic3JjXFxhcHBcXGNvbXBvbmVudHNcXGxlZnQtbWVudVxcbGVmdC5tZW51LmpzIiwic3JjXFx0cGxcXGluZGV4LmpzIiwic3JjXFx0cGxcXHRlbXBsYXRlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7QUFFQTs7OztBQUVBOzs7Ozs7QUFFQSxRQUFRLE1BQVIsQ0FBZSxTQUFmLEVBQTBCLHNDQUExQixFQUNLLFNBREwsQ0FDZSxpQkFEZix5QkFFSyxTQUZMLENBRWUsVUFGZjs7Ozs7Ozs7Ozs7OztBQ05PLElBQU0sVUFBUyxZQUFUOzs7QUFFYixRQUFRLE1BQVIsQ0FBZSxPQUFmLEVBQXVCLEVBQXZCOztJQUVNOzs7O0FBR0YsYUFIRSxNQUdGLENBQVksS0FBWixFQUFtQjs7OzhCQUhqQixRQUdpQjs7QUFDZixhQUFLLEtBQUwsR0FBYSxLQUFiLENBRGU7O0FBR2YsYUFBSyxHQUFMLEdBQVcsSUFBWCxDQUhlO0FBSWYsYUFBSyxTQUFMLEdBQWlCLEVBQWpCLENBSmU7QUFLZixhQUFLLFVBQUwsR0FBa0IsRUFBbEIsQ0FMZTs7QUFPZixhQUFLLEtBQUwsQ0FBVyxHQUFYLENBQWUsaUNBQWYsRUFBa0QsSUFBbEQsQ0FBdUQsVUFBQyxRQUFELEVBQWM7QUFDakUsa0JBQUssR0FBTCxHQUFXLFNBQVMsSUFBVCxDQUFjLEdBQWQsQ0FEc0Q7QUFFakUsa0JBQUssU0FBTCxHQUFpQixTQUFTLElBQVQsQ0FBYyxJQUFkLENBRmdEO0FBR2pFLGtCQUFLLFVBQUwsR0FBa0IsU0FBUyxJQUFULENBQWMsS0FBZCxDQUgrQztTQUFkLENBQXZELENBUGU7S0FBbkI7O2lCQUhFOztnQ0FrQk0sT0FBTzs7O0FBQ1gsZ0JBQUksRUFBRSxNQUFNLE1BQU4sQ0FBRixDQUFnQixJQUFoQixDQUFxQixPQUFyQixLQUFpQyxlQUFqQyxJQUFvRCxFQUFFLE1BQU0sTUFBTixDQUFGLENBQWdCLElBQWhCLENBQXFCLE9BQXJCLEtBQWlDLE1BQWpDLEVBQXlDO0FBQzdGLHFCQUFLLEtBQUwsQ0FBVyxHQUFYLENBQWUsb0NBQW9DLEVBQUUsTUFBTSxNQUFOLENBQUYsQ0FBZ0IsTUFBaEIsR0FBeUIsSUFBekIsQ0FBOEIsY0FBOUIsQ0FBcEMsQ0FBZixDQUNLLElBREwsQ0FDVSxVQUFDLFFBQUQsRUFBYztBQUNoQiwyQkFBSyxHQUFMLEdBQVcsU0FBUyxJQUFULENBQWMsR0FBZCxDQURLO0FBRWhCLDJCQUFLLFNBQUwsR0FBaUIsU0FBUyxJQUFULENBQWMsSUFBZCxDQUZEO0FBR2hCLDJCQUFLLFVBQUwsR0FBa0IsU0FBUyxJQUFULENBQWMsS0FBZCxDQUhGO2lCQUFkLENBRFYsQ0FENkY7YUFBakc7O0FBU0EsZ0JBQUksRUFBRSxNQUFNLE1BQU4sQ0FBRixDQUFnQixJQUFoQixDQUFxQixPQUFyQixLQUFpQyxlQUFqQyxJQUFvRCxFQUFFLE1BQU0sTUFBTixDQUFGLENBQWdCLElBQWhCLENBQXFCLE9BQXJCLEtBQWlDLE1BQWpDLEVBQXlDO0FBQzdGLHFCQUFLLEtBQUwsQ0FBVyxHQUFYLENBQWUsb0NBQW9DLEVBQUUsTUFBTSxNQUFOLENBQUYsQ0FBZ0IsSUFBaEIsQ0FBcUIsY0FBckIsQ0FBcEMsQ0FBZixDQUNLLElBREwsQ0FDVSxVQUFDLFFBQUQsRUFBYztBQUNoQiwyQkFBSyxHQUFMLEdBQVcsU0FBUyxJQUFULENBQWMsR0FBZCxDQURLO0FBRWhCLDJCQUFLLFNBQUwsR0FBaUIsU0FBUyxJQUFULENBQWMsSUFBZCxDQUZEO0FBR2hCLDJCQUFLLFVBQUwsR0FBa0IsU0FBUyxJQUFULENBQWMsS0FBZCxDQUhGO2lCQUFkLENBRFYsQ0FENkY7YUFBakc7Ozs7V0E1QkY7OztrQkEwQ1M7QUFDWCxnQkFBWSxNQUFaO0FBQ0EsaUJBQWEsNENBQWI7Ozs7Ozs7Ozs7Ozs7O0lDL0NFOzs7O0FBR0YsYUFIRSxRQUdGLENBQVksS0FBWixFQUFtQjs4QkFIakIsVUFHaUI7O0FBQ2YsYUFBSyxLQUFMLEdBQWEsS0FBYixDQURlOztBQUdmLGFBQUssR0FBTCxHQUFXLE9BQU8sR0FBUCxDQUhJO0FBSWYsYUFBSyxTQUFMLEdBQWlCLE9BQU8sU0FBUCxDQUpGO0FBS2YsYUFBSyxVQUFMLEdBQWtCLE9BQU8sVUFBUCxDQUxIO0tBQW5COztpQkFIRTs7b0NBWVUsT0FBTzs7O0FBQ2YsaUJBQUssS0FBTCxDQUFXLEdBQVgsQ0FBZSxvQ0FBb0MsRUFBRSxNQUFNLE1BQU4sQ0FBRixDQUFnQixJQUFoQixDQUFxQixjQUFyQixDQUFwQyxDQUFmLENBQ0ssSUFETCxDQUNVLFVBQUMsUUFBRCxFQUFjO0FBQ2hCLHNCQUFLLEdBQUwsR0FBVyxTQUFTLElBQVQsQ0FBYyxHQUFkLENBREs7QUFFaEIsc0JBQUssU0FBTCxHQUFpQixTQUFTLElBQVQsQ0FBYyxJQUFkLENBRkQ7QUFHaEIsc0JBQUssVUFBTCxHQUFrQixTQUFTLElBQVQsQ0FBYyxLQUFkLENBSEY7YUFBZCxDQURWLENBRGU7Ozs7V0FaakI7OztrQkFzQlE7QUFDVixnQkFBWSxRQUFaO0FBQ0EsaUJBQWEsOEJBQWI7Ozs7OztBQ3pCSixRQUFRLGFBQVI7QUFDQSxPQUFPLE9BQVAsR0FBaUIsV0FBakI7Ozs7O0FDREEsUUFBUSxNQUFSLENBQWUsV0FBZixFQUE0QixFQUE1QixFQUFnQyxHQUFoQyxDQUFvQyxDQUFDLGdCQUFELEVBQW1CLFVBQVMsY0FBVCxFQUF5QjtBQUFDLGlCQUFlLEdBQWYsQ0FBbUIsNENBQW5CLEVBQWdFLHN2SEFBaEUsRUFBRDtBQUNoRixpQkFBZSxHQUFmLENBQW1CLDhCQUFuQixFQUFrRCxpWkFBbEQsRUFEZ0Y7Q0FBekIsQ0FBdkQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vdHBsL2luZGV4JztcclxuXHJcbmltcG9ydCByb290LCB7bW9kdWxlfSBmcm9tICcuL2FwcC9jb21wb25lbnRzL2FwcGxpY2F0aW9uLXJvb3QvYXBwbGljYXRpb24ucm9vdCc7XHJcblxyXG5pbXBvcnQgbGVmdE1lbnUgZnJvbSAnLi9hcHAvY29tcG9uZW50cy9sZWZ0LW1lbnUvbGVmdC5tZW51JztcclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdicm93c2VyJywgW3RlbXBsYXRlLCBtb2R1bGVdKVxyXG4gICAgLmNvbXBvbmVudCgnYXBwbGljYXRpb25Sb290Jywgcm9vdClcclxuICAgIC5jb21wb25lbnQoJ2xlZnRNZW51JywgbGVmdE1lbnUpXHJcbjsiLCJleHBvcnQgY29uc3QgbW9kdWxlID0gJ2NvbXBvbmVudHMnO1xyXG5cclxuYW5ndWxhci5tb2R1bGUobW9kdWxlLCBbXSk7XHJcblxyXG5jbGFzcyBNeUN0cmwge1xyXG5cclxuICAgIC8vIEBuZ0luamVjdFxyXG4gICAgY29uc3RydWN0b3IoJGh0dHApIHtcclxuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XHJcblxyXG4gICAgICAgIHRoaXMuZGlyID0gbnVsbDtcclxuICAgICAgICB0aGlzLmRpcnNfZGF0YSA9IFtdO1xyXG4gICAgICAgIHRoaXMuZmlsZXNfZGF0YSA9IFtdO1xyXG5cclxuICAgICAgICB0aGlzLiRodHRwLmdldChcImh0dHA6Ly9tZWRpYWJyb3dzZXIuYmFydC5zay9kaXJcIikudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5kaXIgPSByZXNwb25zZS5kYXRhLmRpcjtcclxuICAgICAgICAgICAgdGhpcy5kaXJzX2RhdGEgPSByZXNwb25zZS5kYXRhLmRpcnM7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsZXNfZGF0YSA9IHJlc3BvbnNlLmRhdGEuZmlsZXM7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGxvYWREaXIoZXZlbnQpIHtcclxuICAgICAgICBpZiAoJChldmVudC50YXJnZXQpLmF0dHIoJ2NsYXNzJykgIT0gXCJpY29uIG5nLXNjb3BlXCIgJiYgJChldmVudC50YXJnZXQpLmF0dHIoJ2NsYXNzJykgIT0gXCJpY29uXCIpIHtcclxuICAgICAgICAgICAgdGhpcy4kaHR0cC5nZXQoXCJodHRwOi8vbWVkaWFicm93c2VyLmJhcnQuc2svZGlyXCIgKyAkKGV2ZW50LnRhcmdldCkucGFyZW50KCkuYXR0cignZGF0YS1kaXJOYW1lJykpXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpciA9IHJlc3BvbnNlLmRhdGEuZGlyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlyc19kYXRhID0gcmVzcG9uc2UuZGF0YS5kaXJzO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZXNfZGF0YSA9IHJlc3BvbnNlLmRhdGEuZmlsZXM7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCQoZXZlbnQudGFyZ2V0KS5hdHRyKCdjbGFzcycpID09IFwiaWNvbiBuZy1zY29wZVwiIHx8ICQoZXZlbnQudGFyZ2V0KS5hdHRyKCdjbGFzcycpID09IFwiaWNvblwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJGh0dHAuZ2V0KFwiaHR0cDovL21lZGlhYnJvd3Nlci5iYXJ0LnNrL2RpclwiICsgJChldmVudC50YXJnZXQpLmF0dHIoJ2RhdGEtZGlyTmFtZScpKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXIgPSByZXNwb25zZS5kYXRhLmRpcjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpcnNfZGF0YSA9IHJlc3BvbnNlLmRhdGEuZGlycztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGVzX2RhdGEgPSByZXNwb25zZS5kYXRhLmZpbGVzO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBjb250cm9sbGVyOiBNeUN0cmwsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcGxpY2F0aW9uLXJvb3QvYXBwbGljYXRpb24ucm9vdC50cGwuaHRtbCdcclxufTsiLCJcclxuY2xhc3MgTGVmdE1lbnUge1xyXG5cclxuICAgIC8vIEBuZ0luamVjdFxyXG4gICAgY29uc3RydWN0b3IoJGh0dHApIHtcclxuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XHJcblxyXG4gICAgICAgIHRoaXMuZGlyID0gTXlDdHJsLmRpcjtcclxuICAgICAgICB0aGlzLmRpcnNfZGF0YSA9IE15Q3RybC5kaXJzX2RhdGE7XHJcbiAgICAgICAgdGhpcy5maWxlc19kYXRhID0gTXlDdHJsLmZpbGVzX2RhdGE7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgbG9hZERpckxlZnQoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLiRodHRwLmdldChcImh0dHA6Ly9tZWRpYWJyb3dzZXIuYmFydC5zay9kaXJcIiArICQoZXZlbnQudGFyZ2V0KS5hdHRyKCdkYXRhLWRpck5hbWUnKSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpciA9IHJlc3BvbnNlLmRhdGEuZGlyO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJzX2RhdGEgPSByZXNwb25zZS5kYXRhLmRpcnM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGVzX2RhdGEgPSByZXNwb25zZS5kYXRhLmZpbGVzO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdHtcclxuICAgIGNvbnRyb2xsZXI6IExlZnRNZW51LFxyXG4gICAgdGVtcGxhdGVVcmw6ICdsZWZ0LW1lbnUvbGVmdC5tZW51LnRwbC5odG1sJ1xyXG59IiwicmVxdWlyZSgnLi90ZW1wbGF0ZXMnKTtcclxubW9kdWxlLmV4cG9ydHMgPSAndGVtcGxhdGVzJzsiLCJhbmd1bGFyLm1vZHVsZShcInRlbXBsYXRlc1wiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7JHRlbXBsYXRlQ2FjaGUucHV0KFwiYXBwbGljYXRpb24tcm9vdC9hcHBsaWNhdGlvbi5yb290LnRwbC5odG1sXCIsXCI8ZGl2IGlkPVxcXCJva25vXFxcIj5cXHJcXG4gICAgPCEtLSB0b2RvIGNvbXBvbmVuZXRhIC0tPlxcclxcblxcclxcblxcclxcbjxsZWZ0LW1lbnU+PC9sZWZ0LW1lbnU+XFxyXFxuXFxyXFxuICAgIDxkaXYgaWQ9XFxcIm9ic2FoXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgaWQ9XFxcImhlYWRlcjJcXFwiPlxcclxcbiAgICAgICAgICAgIDxoMj5GaWxlcyAvIEltYWdlczwvaDI+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgc3R5bGU9XFxcIm1hcmdpbi1sZWZ0OjIwcHg7IG1hcmdpbi1yaWdodDogMzBweFxcXCI+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPCEtLSB0b2RvIGNvbXBvbmVuZXRhIC0tPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImljb25cXFwiIG5nLXNob3c9XFxcIiRjdHJsLmRpclxcXCIgbmctY2xpY2s9XFxcIiRjdHJsLmxvYWREaXIoJGV2ZW50KVxcXCIgZGF0YS1kaXJOYW1lPVxcXCJ7eyRjdHJsLmRpci5sb2NhdGlvbn19XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cXFwiaW1nX2ljb25cXFwiIHNyYz1cXFwiaW1nL2FkcmVzYXIucG5nXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmF6b3Zfc3Vib3J1XFxcIj5OYWRyYWRlbnkgYWRyZXNhcjwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgIDwhLS0gdG9kbyBjb21wb25lbmV0YSAtLT5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpY29uXFxcIiBuZy1yZXBlYXQ9XFxcImRpciBpbiAkY3RybC5kaXJzX2RhdGFcXFwiIG5nLWNsaWNrPVxcXCIkY3RybC5sb2FkRGlyKCRldmVudClcXFwiIGRhdGEtZGlyTmFtZT1cXFwie3tkaXIubG9jYXRpb259fS97e2Rpci5uYW1lfX1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVxcXCJpbWdfaWNvblxcXCIgc3JjPVxcXCJpbWcvcHJpZWNpbm9rLnBuZ1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hem92X3N1Ym9ydVxcXCI+e3tkaXIubmFtZX19PC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPCEtLSB0b2RvIGNvbXBvbmVuZXRhIC0tPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImljb25cXFwiIG5nLXJlcGVhdD1cXFwiZmlsZSBpbiAkY3RybC5maWxlc19kYXRhIHwgZmlsdGVyOnsgdHlwZTogXFwnaW1hZ2UvanBlZ1xcJyB9XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cXFwiaW1nX3BpY3R1cmVcXFwiIHNyYz1cXFwie3tmaWxlLnRodW1iX2xpbmt9fVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hem92X3N1Ym9ydVxcXCI+e3tmaWxlLm5hbWV9fTwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0eXBfc3Vib3J1XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxwPkpQRzwvcD5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInZlbGtvc3Rfc3Vib3J1XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxwPnt7ZmlsZS5zaXplfX08L3A+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgIDwhLS0gdG9kbyBjb21wb25lbmV0YSAtLT5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpY29uXFxcIiBuZy1yZXBlYXQ9XFxcImZpbGUgaW4gJGN0cmwuZmlsZXNfZGF0YSB8IGZpbHRlcjp7IHR5cGU6IFxcJ2ltYWdlL3BuZ1xcJyB9XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cXFwiaW1nX2ljb25cXFwiIHNyYz1cXFwie3tmaWxlLnRodW1iX2xpbmt9fVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hem92X3N1Ym9ydVxcXCI+e3tmaWxlLm5hbWV9fTwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0eXBfc3Vib3J1XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxwPlBORzwvcD5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInZlbGtvc3Rfc3Vib3J1XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxwPnt7ZmlsZS5zaXplfX08L3A+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgIDwhLS0gdG9kbyBjb21wb25lbmV0YSAtLT5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpY29uXFxcIiBuZy1yZXBlYXQ9XFxcImZpbGUgaW4gJGN0cmwuZmlsZXNfZGF0YSB8IGZpbHRlcjp7IHR5cGU6IFxcJ3RleHQvcGxhaW5cXCcgfVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XFxcImltZ19pY29uXFxcIiBzcmM9XFxcImltZy90eHQucG5nXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmF6b3Zfc3Vib3J1XFxcIj57e2ZpbGUubmFtZX19PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInR5cF9zdWJvcnVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHA+VFhUPC9wPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidmVsa29zdF9zdWJvcnVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHA+e3tmaWxlLnNpemV9fTwvcD5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPCEtLSB0b2RvIGNvbXBvbmVuZXRhIC0tPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImljb25cXFwiIG5nLXJlcGVhdD1cXFwiZmlsZSBpbiAkY3RybC5maWxlc19kYXRhIHwgZmlsdGVyOnsgdHlwZTogXFwnYXBwbGljYXRpb24vcGRmXFwnIH1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVxcXCJpbWdfaWNvblxcXCIgc3JjPVxcXCJpbWcvcGRmLnBuZ1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hem92X3N1Ym9ydVxcXCI+e3tmaWxlLm5hbWV9fTwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0eXBfc3Vib3J1XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxwPlBERjwvcD5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInZlbGtvc3Rfc3Vib3J1XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxwPnt7ZmlsZS5zaXplfX08L3A+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgIDwhLS0gdG9kbyBjb21wb25lbmV0YSAtLT5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpY29uXFxcIiBuZy1yZXBlYXQ9XFxcImZpbGUgaW4gJGN0cmwuZmlsZXNfZGF0YSB8IGZpbHRlcjp7IHR5cGU6IFxcJyFpbWFnZS9qcGVnXFwnfSB8IGZpbHRlcjp7IHR5cGU6IFxcJyFhcHBsaWNhdGlvbi9wZGZcXCd9IHwgZmlsdGVyOnsgdHlwZTogXFwnIXRleHQvcGxhaW5cXCd9IHwgZmlsdGVyOnsgdHlwZTogXFwnIWltYWdlL3BuZ1xcJ30gXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cXFwiaW1nX2ljb25cXFwiIHNyYz1cXFwiaW1nL3BsYWluLnBuZ1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hem92X3N1Ym9ydVxcXCI+e3tmaWxlLm5hbWV9fTwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0eXBfc3Vib3J1XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxwPmFueTwvcD5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInZlbGtvc3Rfc3Vib3J1XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxwPnt7ZmlsZS5zaXplfX08L3A+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcblxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgIDwvZGl2PlxcclxcblxcclxcbjwvZGl2PlwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImxlZnQtbWVudS9sZWZ0Lm1lbnUudHBsLmh0bWxcIixcIjxkaXYgaWQ9XFxcImxlZnRfbWVudVxcXCI+XFxyXFxuICAgIDx1bD5cXHJcXG4gICAgICAgIDxsaSBuZy1zaG93PVxcXCIkY3RybC5kaXJcXFwiIG5nLWNsaWNrPVxcXCIkY3RybC5sb2FkRGlyTGVmdCgkZXZlbnQpO1xcXCIgZGF0YS1kaXJOYW1lPVxcXCJ7eyRjdHJsLmRpci5sb2NhdGlvbn19XFxcIiBzdHlsZT1cXFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMThweDtcXFwiPk5hZHJhZGVueSBhZHJlc2FyPC9saT5cXHJcXG4gICAgICAgIDxsaSBuZy1yZXBlYXQ9XFxcImRpciBpbiAkY3RybC5kaXJzX2RhdGFcXFwiIG5nLWNsaWNrPVxcXCIkY3RybC5sb2FkRGlyTGVmdCgkZXZlbnQpXFxcIiBkYXRhLWRpck5hbWU9XFxcInt7ZGlyLmxvY2F0aW9ufX0ve3tkaXIubmFtZX19XFxcIj57e2Rpci5uYW1lfX08L2xpPlxcclxcbiAgICA8L3VsPlxcclxcbjwvZGl2PlwiKTt9XSk7Il19
