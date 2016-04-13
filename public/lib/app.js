(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app.js":[function(require,module,exports){
'use strict';

var _index = require('./tpl/index');

var _index2 = _interopRequireDefault(_index);

var _application = require('./app/components/application-root/application.root');

var _application2 = _interopRequireDefault(_application);

var _left = require('./app/components/left-menu/left.menu');

var _left2 = _interopRequireDefault(_left);

var _media = require('./app/media.service');

var _media2 = _interopRequireDefault(_media);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

angular.module('browser', [_index2.default, _application.module]).component('applicationRoot', _application2.default).component('leftMenu', _left2.default).service('mediaService', _media2.default);

},{"./app/components/application-root/application.root":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/components/application-root/application.root.js","./app/components/left-menu/left.menu":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/components/left-menu/left.menu.js","./app/media.service":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/media.service.js","./tpl/index":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/tpl/index.js"}],"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/components/application-root/application.root.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _module = 'components';

exports.module = _module;
angular.module(_module, []);

var MyCtrl =

// @ngInject
function MyCtrl($http, mediaService) {
    _classCallCheck(this, MyCtrl);

    this.$http = $http;
    this.mediaService = mediaService;
};

exports.default = {
    controller: MyCtrl,
    templateUrl: 'application-root/application.root.tpl.html'
};

},{}],"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/components/left-menu/left.menu.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LeftMenu =

// @ngInject
function LeftMenu($http, mediaService) {
    _classCallCheck(this, LeftMenu);

    this.$http = $http;
    this.mediaService = mediaService;
};

exports.default = {
    controller: LeftMenu,
    templateUrl: 'left-menu/left.menu.tpl.html'
};

},{}],"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/media.service.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MediaService = function () {

    // @ngInject

    function MediaService($http) {
        _classCallCheck(this, MediaService);

        this.$http = $http;

        this.dir = null;
        this.dirs_data = [];
        this.files_data = [];

        this.loadDir();
    }

    _createClass(MediaService, [{
        key: 'loadDir',
        value: function loadDir() {
            var _this = this;

            var directory = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
            var isReturn = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

            var urlAdress = '';
            if (directory) {
                urlAdress = directory.location + '/' + directory.name;

                if (isReturn) {
                    urlAdress = directory.location;
                }
            }

            this.$http.get("http://mediabrowser.bart.sk/dir" + urlAdress).then(function (response) {
                _this.dir = response.data.dir;
                _this.dirs_data = response.data.dirs;
                _this.files_data = response.data.files;
            });
        }
    }]);

    return MediaService;
}();

exports.default = MediaService;

},{}],"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/tpl/index.js":[function(require,module,exports){
'use strict';

require('./templates');
module.exports = 'templates';

},{"./templates":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/tpl/templates.js"}],"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/tpl/templates.js":[function(require,module,exports){
"use strict";

angular.module("templates", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("left-menu/left.menu.tpl.html", "<div id=\"left_menu\">\n    <ul>\n        <li ng-show=\"$ctrl.mediaService.dir\" ng-click=\"$ctrl.mediaService.loadDir($ctrl.mediaService.dir, true)\" style=\"font-weight: bold; font-size: 18px;\">Nadradeny adresar</li>\n        <li ng-repeat=\"dir in $ctrl.mediaService.dirs_data\" ng-click=\"$ctrl.mediaService.loadDir(dir)\" >{{dir.name}}</li>\n    </ul>\n</div>");
  $templateCache.put("application-root/application.root.tpl.html", "<div id=\"okno\">\n\n    <left-menu></left-menu>\n\n    <div id=\"obsah\">\n        <div id=\"header2\">\n            <h2>Files / Images</h2>\n        </div>\n\n        <div style=\"margin-left:20px; margin-right: 30px\">\n\n            <!-- todo componeneta 1 -->\n            <div class=\"icon\" ng-show=\"$ctrl.mediaService.dir\" ng-click=\"$ctrl.mediaService.loadDir($ctrl.mediaService.dir, true)\">\n                <img class=\"img_icon\" src=\"img/adresar.png\">\n                <div class=\"nazov_suboru\">Nadradeny adresar</div>\n            </div>\n\n            <dir-return></dir-return>\n\n            <!-- todo componeneta 2 -->\n            <div class=\"icon\" ng-repeat=\"dir in $ctrl.mediaService.dirs_data\" ng-click=\"$ctrl.mediaService.loadDir(dir)\">\n                <img class=\"img_icon\" src=\"img/priecinok.png\">\n                <div class=\"nazov_suboru\">{{dir.name}}</div>\n\n            </div>\n\n            <dir-base></dir-base>\n\n            <!-- todo componeneta 3 -->\n            <!--<div class=\"icon\" ng-repeat=\"file in $ctrl.mediaService.files_data | filter:{ type: \'image/jpeg\' }\">-->\n            <div class=\"icon\" ng-repeat=\"file in $ctrl.mediaService.files_data\">\n                <!--<img class=\"img_picture\" src=\"{{file.thumb_link}}\">-->\n                <img class=\"img_picture\" ng-src=\"{{file.thumb_link}}\">\n                <div class=\"nazov_suboru\">{{file.name}}</div>\n                <div class=\"typ_suboru\">\n                    <p>{{file.type}}</p>\n                </div>\n                <div class=\"velkost_suboru\">\n                    <p>{{file.size}}</p>\n                </div>\n            </div>\n\n            <file></file>\n\n            <!--&lt;!&ndash; todo componeneta 3 &ndash;&gt;\n            <div class=\"icon\" ng-repeat=\"file in $ctrl.mediaService.files_data | filter:{ type: \'image/png\' }\">\n                <img class=\"img_icon\" src=\"{{file.thumb_link}}\">\n                <div class=\"nazov_suboru\">{{file.name}}</div>\n                <div class=\"typ_suboru\">\n                    <p>PNG</p>\n                </div>\n                <div class=\"velkost_suboru\">\n                    <p>{{file.size}}</p>\n                </div>\n            </div>\n\n            &lt;!&ndash; todo componeneta 3 &ndash;&gt;\n            <div class=\"icon\" ng-repeat=\"file in $ctrl.mediaService.files_data | filter:{ type: \'text/plain\' }\">\n                <img class=\"img_icon\" src=\"img/txt.png\">\n                <div class=\"nazov_suboru\">{{file.name}}</div>\n                <div class=\"typ_suboru\">\n                    <p>TXT</p>\n                </div>\n                <div class=\"velkost_suboru\">\n                    <p>{{file.size}}</p>\n                </div>\n            </div>\n\n            &lt;!&ndash; todo componeneta 3 &ndash;&gt;\n            <div class=\"icon\" ng-repeat=\"file in $ctrl.files_data | filter:{ type: \'application/pdf\' }\">\n                <img class=\"img_icon\" src=\"img/pdf.png\">\n                <div class=\"nazov_suboru\">{{file.name}}</div>\n                <div class=\"typ_suboru\">\n                    <p>PDF</p>\n                </div>\n                <div class=\"velkost_suboru\">\n                    <p>{{file.size}}</p>\n                </div>\n            </div>\n\n            &lt;!&ndash; todo componeneta 3 &ndash;&gt;\n            <div class=\"icon\" ng-repeat=\"file in $ctrl.mediaService.files_data | filter:{ type: \'!image/jpeg\'} | filter:{ type: \'!application/pdf\'} | filter:{ type: \'!text/plain\'} | filter:{ type: \'!image/png\'} \">\n                <img class=\"img_icon\" src=\"img/plain.png\">\n                <div class=\"nazov_suboru\">{{file.name}}</div>\n                <div class=\"typ_suboru\">\n                    <p>any</p>\n                </div>\n                <div class=\"velkost_suboru\">\n                    <p>{{file.size}}</p>\n                </div>\n            </div>-->\n\n        </div>\n\n    </div>\n\n</div>");
}]);

},{}]},{},["/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app.js"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBwLmpzIiwic3JjL2FwcC9jb21wb25lbnRzL2FwcGxpY2F0aW9uLXJvb3QvYXBwbGljYXRpb24ucm9vdC5qcyIsInNyYy9hcHAvY29tcG9uZW50cy9sZWZ0LW1lbnUvbGVmdC5tZW51LmpzIiwic3JjL2FwcC9tZWRpYS5zZXJ2aWNlLmpzIiwic3JjL3RwbC9pbmRleC5qcyIsInNyYy90cGwvdGVtcGxhdGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7OztBQUVBOzs7O0FBRUE7Ozs7QUFFQTs7Ozs7O0FBRUEsUUFBUSxNQUFSLENBQWUsU0FBZixFQUEwQixzQ0FBMUIsRUFDSyxTQURMLENBQ2UsaUJBRGYseUJBRUssU0FGTCxDQUVlLFVBRmYsa0JBSUssT0FKTCxDQUlhLGNBSmI7Ozs7Ozs7Ozs7O0FDUk8sSUFBTSxVQUFTLFlBQVQ7OztBQUViLFFBQVEsTUFBUixDQUFlLE9BQWYsRUFBdUIsRUFBdkI7O0lBRU07OztBQUdGLFNBSEUsTUFHRixDQUFZLEtBQVosRUFBbUIsWUFBbkIsRUFBaUM7MEJBSC9CLFFBRytCOztBQUM3QixTQUFLLEtBQUwsR0FBYSxLQUFiLENBRDZCO0FBRTdCLFNBQUssWUFBTCxHQUFvQixZQUFwQixDQUY2QjtDQUFqQzs7a0JBTVc7QUFDWCxnQkFBWSxNQUFaO0FBQ0EsaUJBQWEsNENBQWI7Ozs7Ozs7Ozs7OztJQ2ZFOzs7QUFHRixTQUhFLFFBR0YsQ0FBWSxLQUFaLEVBQW1CLFlBQW5CLEVBQWlDOzBCQUgvQixVQUcrQjs7QUFDN0IsU0FBSyxLQUFMLEdBQWEsS0FBYixDQUQ2QjtBQUU3QixTQUFLLFlBQUwsR0FBb0IsWUFBcEIsQ0FGNkI7Q0FBakM7O2tCQU1XO0FBQ1gsZ0JBQVksUUFBWjtBQUNBLGlCQUFhLDhCQUFiOzs7Ozs7Ozs7Ozs7OztJQ1hpQjs7OztBQUdqQixhQUhpQixZQUdqQixDQUFZLEtBQVosRUFBbUI7OEJBSEYsY0FHRTs7QUFDZixhQUFLLEtBQUwsR0FBYSxLQUFiLENBRGU7O0FBR2YsYUFBSyxHQUFMLEdBQVcsSUFBWCxDQUhlO0FBSWYsYUFBSyxTQUFMLEdBQWlCLEVBQWpCLENBSmU7QUFLZixhQUFLLFVBQUwsR0FBa0IsRUFBbEIsQ0FMZTs7QUFPZixhQUFLLE9BQUwsR0FQZTtLQUFuQjs7aUJBSGlCOztrQ0FjMkI7OztnQkFBcEMsa0VBQVksb0JBQXdCO2dCQUFsQixpRUFBVyxxQkFBTzs7QUFDeEMsZ0JBQUksWUFBWSxFQUFaLENBRG9DO0FBRXhDLGdCQUFJLFNBQUosRUFBZTtBQUNYLDRCQUFZLFVBQVUsUUFBVixHQUFxQixHQUFyQixHQUEyQixVQUFVLElBQVYsQ0FENUI7O0FBR1gsb0JBQUksUUFBSixFQUFjO0FBQ1YsZ0NBQVksVUFBVSxRQUFWLENBREY7aUJBQWQ7YUFISjs7QUFRQSxpQkFBSyxLQUFMLENBQVcsR0FBWCxDQUFlLG9DQUFvQyxTQUFwQyxDQUFmLENBQ0ssSUFETCxDQUNVLFVBQUMsUUFBRCxFQUFjO0FBQ2hCLHNCQUFLLEdBQUwsR0FBVyxTQUFTLElBQVQsQ0FBYyxHQUFkLENBREs7QUFFaEIsc0JBQUssU0FBTCxHQUFpQixTQUFTLElBQVQsQ0FBYyxJQUFkLENBRkQ7QUFHaEIsc0JBQUssVUFBTCxHQUFrQixTQUFTLElBQVQsQ0FBYyxLQUFkLENBSEY7YUFBZCxDQURWLENBVndDOzs7O1dBZDNCOzs7Ozs7OztBQ0FyQixRQUFRLGFBQVI7QUFDQSxPQUFPLE9BQVAsR0FBaUIsV0FBakI7Ozs7O0FDREEsUUFBUSxNQUFSLENBQWUsV0FBZixFQUE0QixFQUE1QixFQUFnQyxHQUFoQyxDQUFvQyxDQUFDLGdCQUFELEVBQW1CLFVBQVMsY0FBVCxFQUF5QjtBQUFDLGlCQUFlLEdBQWYsQ0FBbUIsOEJBQW5CLEVBQWtELCtXQUFsRCxFQUFEO0FBQ2hGLGlCQUFlLEdBQWYsQ0FBbUIsNENBQW5CLEVBQWdFLCs3SEFBaEUsRUFEZ0Y7Q0FBekIsQ0FBdkQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vdHBsL2luZGV4JztcblxuaW1wb3J0IHJvb3QsIHttb2R1bGV9IGZyb20gJy4vYXBwL2NvbXBvbmVudHMvYXBwbGljYXRpb24tcm9vdC9hcHBsaWNhdGlvbi5yb290JztcblxuaW1wb3J0IGxlZnRNZW51IGZyb20gJy4vYXBwL2NvbXBvbmVudHMvbGVmdC1tZW51L2xlZnQubWVudSc7XG5cbmltcG9ydCBNZWRpYVNlcnZpY2UgZnJvbSAnLi9hcHAvbWVkaWEuc2VydmljZSc7XG5cbmFuZ3VsYXIubW9kdWxlKCdicm93c2VyJywgW3RlbXBsYXRlLCBtb2R1bGVdKVxuICAgIC5jb21wb25lbnQoJ2FwcGxpY2F0aW9uUm9vdCcsIHJvb3QpXG4gICAgLmNvbXBvbmVudCgnbGVmdE1lbnUnLCBsZWZ0TWVudSlcblxuICAgIC5zZXJ2aWNlKCdtZWRpYVNlcnZpY2UnLCBNZWRpYVNlcnZpY2UpXG47IiwiZXhwb3J0IGNvbnN0IG1vZHVsZSA9ICdjb21wb25lbnRzJztcblxuYW5ndWxhci5tb2R1bGUobW9kdWxlLCBbXSk7XG5cbmNsYXNzIE15Q3RybCB7XG5cbiAgICAvLyBAbmdJbmplY3RcbiAgICBjb25zdHJ1Y3RvcigkaHR0cCwgbWVkaWFTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcbiAgICAgICAgdGhpcy5tZWRpYVNlcnZpY2UgPSBtZWRpYVNlcnZpY2U7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY29udHJvbGxlcjogTXlDdHJsLFxuICAgIHRlbXBsYXRlVXJsOiAnYXBwbGljYXRpb24tcm9vdC9hcHBsaWNhdGlvbi5yb290LnRwbC5odG1sJ1xufTsiLCJjbGFzcyBMZWZ0TWVudSB7XG5cbiAgICAvLyBAbmdJbmplY3RcbiAgICBjb25zdHJ1Y3RvcigkaHR0cCwgbWVkaWFTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcbiAgICAgICAgdGhpcy5tZWRpYVNlcnZpY2UgPSBtZWRpYVNlcnZpY2U7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY29udHJvbGxlcjogTGVmdE1lbnUsXG4gICAgdGVtcGxhdGVVcmw6ICdsZWZ0LW1lbnUvbGVmdC5tZW51LnRwbC5odG1sJ1xufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lZGlhU2VydmljZSB7XG5cbiAgICAvLyBAbmdJbmplY3RcbiAgICBjb25zdHJ1Y3RvcigkaHR0cCkge1xuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XG5cbiAgICAgICAgdGhpcy5kaXIgPSBudWxsO1xuICAgICAgICB0aGlzLmRpcnNfZGF0YSA9IFtdO1xuICAgICAgICB0aGlzLmZpbGVzX2RhdGEgPSBbXTtcblxuICAgICAgICB0aGlzLmxvYWREaXIoKTtcbiAgICB9XG5cblxuICAgIGxvYWREaXIoZGlyZWN0b3J5ID0gbnVsbCwgaXNSZXR1cm4gPSBmYWxzZSkge1xuICAgICAgICBsZXQgdXJsQWRyZXNzID0gJyc7XG4gICAgICAgIGlmIChkaXJlY3RvcnkpIHtcbiAgICAgICAgICAgIHVybEFkcmVzcyA9IGRpcmVjdG9yeS5sb2NhdGlvbiArICcvJyArIGRpcmVjdG9yeS5uYW1lO1xuXG4gICAgICAgICAgICBpZiAoaXNSZXR1cm4pIHtcbiAgICAgICAgICAgICAgICB1cmxBZHJlc3MgPSBkaXJlY3RvcnkubG9jYXRpb247XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiRodHRwLmdldChcImh0dHA6Ly9tZWRpYWJyb3dzZXIuYmFydC5zay9kaXJcIiArIHVybEFkcmVzcylcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlyID0gcmVzcG9uc2UuZGF0YS5kaXI7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXJzX2RhdGEgPSByZXNwb25zZS5kYXRhLmRpcnM7XG4gICAgICAgICAgICAgICAgdGhpcy5maWxlc19kYXRhID0gcmVzcG9uc2UuZGF0YS5maWxlcztcbiAgICAgICAgICAgIH0pXG4gICAgfTtcbn0iLCJyZXF1aXJlKCcuL3RlbXBsYXRlcycpO1xubW9kdWxlLmV4cG9ydHMgPSAndGVtcGxhdGVzJzsiLCJhbmd1bGFyLm1vZHVsZShcInRlbXBsYXRlc1wiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7JHRlbXBsYXRlQ2FjaGUucHV0KFwibGVmdC1tZW51L2xlZnQubWVudS50cGwuaHRtbFwiLFwiPGRpdiBpZD1cXFwibGVmdF9tZW51XFxcIj5cXG4gICAgPHVsPlxcbiAgICAgICAgPGxpIG5nLXNob3c9XFxcIiRjdHJsLm1lZGlhU2VydmljZS5kaXJcXFwiIG5nLWNsaWNrPVxcXCIkY3RybC5tZWRpYVNlcnZpY2UubG9hZERpcigkY3RybC5tZWRpYVNlcnZpY2UuZGlyLCB0cnVlKVxcXCIgc3R5bGU9XFxcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE4cHg7XFxcIj5OYWRyYWRlbnkgYWRyZXNhcjwvbGk+XFxuICAgICAgICA8bGkgbmctcmVwZWF0PVxcXCJkaXIgaW4gJGN0cmwubWVkaWFTZXJ2aWNlLmRpcnNfZGF0YVxcXCIgbmctY2xpY2s9XFxcIiRjdHJsLm1lZGlhU2VydmljZS5sb2FkRGlyKGRpcilcXFwiID57e2Rpci5uYW1lfX08L2xpPlxcbiAgICA8L3VsPlxcbjwvZGl2PlwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImFwcGxpY2F0aW9uLXJvb3QvYXBwbGljYXRpb24ucm9vdC50cGwuaHRtbFwiLFwiPGRpdiBpZD1cXFwib2tub1xcXCI+XFxuXFxuICAgIDxsZWZ0LW1lbnU+PC9sZWZ0LW1lbnU+XFxuXFxuICAgIDxkaXYgaWQ9XFxcIm9ic2FoXFxcIj5cXG4gICAgICAgIDxkaXYgaWQ9XFxcImhlYWRlcjJcXFwiPlxcbiAgICAgICAgICAgIDxoMj5GaWxlcyAvIEltYWdlczwvaDI+XFxuICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgIDxkaXYgc3R5bGU9XFxcIm1hcmdpbi1sZWZ0OjIwcHg7IG1hcmdpbi1yaWdodDogMzBweFxcXCI+XFxuXFxuICAgICAgICAgICAgPCEtLSB0b2RvIGNvbXBvbmVuZXRhIDEgLS0+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaWNvblxcXCIgbmctc2hvdz1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLmRpclxcXCIgbmctY2xpY2s9XFxcIiRjdHJsLm1lZGlhU2VydmljZS5sb2FkRGlyKCRjdHJsLm1lZGlhU2VydmljZS5kaXIsIHRydWUpXFxcIj5cXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cXFwiaW1nX2ljb25cXFwiIHNyYz1cXFwiaW1nL2FkcmVzYXIucG5nXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmF6b3Zfc3Vib3J1XFxcIj5OYWRyYWRlbnkgYWRyZXNhcjwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgIDxkaXItcmV0dXJuPjwvZGlyLXJldHVybj5cXG5cXG4gICAgICAgICAgICA8IS0tIHRvZG8gY29tcG9uZW5ldGEgMiAtLT5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpY29uXFxcIiBuZy1yZXBlYXQ9XFxcImRpciBpbiAkY3RybC5tZWRpYVNlcnZpY2UuZGlyc19kYXRhXFxcIiBuZy1jbGljaz1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLmxvYWREaXIoZGlyKVxcXCI+XFxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XFxcImltZ19pY29uXFxcIiBzcmM9XFxcImltZy9wcmllY2lub2sucG5nXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmF6b3Zfc3Vib3J1XFxcIj57e2Rpci5uYW1lfX08L2Rpdj5cXG5cXG4gICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICA8ZGlyLWJhc2U+PC9kaXItYmFzZT5cXG5cXG4gICAgICAgICAgICA8IS0tIHRvZG8gY29tcG9uZW5ldGEgMyAtLT5cXG4gICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cXFwiaWNvblxcXCIgbmctcmVwZWF0PVxcXCJmaWxlIGluICRjdHJsLm1lZGlhU2VydmljZS5maWxlc19kYXRhIHwgZmlsdGVyOnsgdHlwZTogXFwnaW1hZ2UvanBlZ1xcJyB9XFxcIj4tLT5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpY29uXFxcIiBuZy1yZXBlYXQ9XFxcImZpbGUgaW4gJGN0cmwubWVkaWFTZXJ2aWNlLmZpbGVzX2RhdGFcXFwiPlxcbiAgICAgICAgICAgICAgICA8IS0tPGltZyBjbGFzcz1cXFwiaW1nX3BpY3R1cmVcXFwiIHNyYz1cXFwie3tmaWxlLnRodW1iX2xpbmt9fVxcXCI+LS0+XFxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XFxcImltZ19waWN0dXJlXFxcIiBuZy1zcmM9XFxcInt7ZmlsZS50aHVtYl9saW5rfX1cXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYXpvdl9zdWJvcnVcXFwiPnt7ZmlsZS5uYW1lfX08L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidHlwX3N1Ym9ydVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8cD57e2ZpbGUudHlwZX19PC9wPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidmVsa29zdF9zdWJvcnVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHA+e3tmaWxlLnNpemV9fTwvcD5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgPGZpbGU+PC9maWxlPlxcblxcbiAgICAgICAgICAgIDwhLS0mbHQ7ISZuZGFzaDsgdG9kbyBjb21wb25lbmV0YSAzICZuZGFzaDsmZ3Q7XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaWNvblxcXCIgbmctcmVwZWF0PVxcXCJmaWxlIGluICRjdHJsLm1lZGlhU2VydmljZS5maWxlc19kYXRhIHwgZmlsdGVyOnsgdHlwZTogXFwnaW1hZ2UvcG5nXFwnIH1cXFwiPlxcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVxcXCJpbWdfaWNvblxcXCIgc3JjPVxcXCJ7e2ZpbGUudGh1bWJfbGlua319XFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmF6b3Zfc3Vib3J1XFxcIj57e2ZpbGUubmFtZX19PC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInR5cF9zdWJvcnVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHA+UE5HPC9wPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidmVsa29zdF9zdWJvcnVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHA+e3tmaWxlLnNpemV9fTwvcD5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgJmx0OyEmbmRhc2g7IHRvZG8gY29tcG9uZW5ldGEgMyAmbmRhc2g7Jmd0O1xcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImljb25cXFwiIG5nLXJlcGVhdD1cXFwiZmlsZSBpbiAkY3RybC5tZWRpYVNlcnZpY2UuZmlsZXNfZGF0YSB8IGZpbHRlcjp7IHR5cGU6IFxcJ3RleHQvcGxhaW5cXCcgfVxcXCI+XFxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XFxcImltZ19pY29uXFxcIiBzcmM9XFxcImltZy90eHQucG5nXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmF6b3Zfc3Vib3J1XFxcIj57e2ZpbGUubmFtZX19PC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInR5cF9zdWJvcnVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHA+VFhUPC9wPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidmVsa29zdF9zdWJvcnVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHA+e3tmaWxlLnNpemV9fTwvcD5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgJmx0OyEmbmRhc2g7IHRvZG8gY29tcG9uZW5ldGEgMyAmbmRhc2g7Jmd0O1xcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImljb25cXFwiIG5nLXJlcGVhdD1cXFwiZmlsZSBpbiAkY3RybC5maWxlc19kYXRhIHwgZmlsdGVyOnsgdHlwZTogXFwnYXBwbGljYXRpb24vcGRmXFwnIH1cXFwiPlxcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVxcXCJpbWdfaWNvblxcXCIgc3JjPVxcXCJpbWcvcGRmLnBuZ1xcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hem92X3N1Ym9ydVxcXCI+e3tmaWxlLm5hbWV9fTwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0eXBfc3Vib3J1XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxwPlBERjwvcD5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInZlbGtvc3Rfc3Vib3J1XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxwPnt7ZmlsZS5zaXplfX08L3A+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICZsdDshJm5kYXNoOyB0b2RvIGNvbXBvbmVuZXRhIDMgJm5kYXNoOyZndDtcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpY29uXFxcIiBuZy1yZXBlYXQ9XFxcImZpbGUgaW4gJGN0cmwubWVkaWFTZXJ2aWNlLmZpbGVzX2RhdGEgfCBmaWx0ZXI6eyB0eXBlOiBcXCchaW1hZ2UvanBlZ1xcJ30gfCBmaWx0ZXI6eyB0eXBlOiBcXCchYXBwbGljYXRpb24vcGRmXFwnfSB8IGZpbHRlcjp7IHR5cGU6IFxcJyF0ZXh0L3BsYWluXFwnfSB8IGZpbHRlcjp7IHR5cGU6IFxcJyFpbWFnZS9wbmdcXCd9IFxcXCI+XFxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XFxcImltZ19pY29uXFxcIiBzcmM9XFxcImltZy9wbGFpbi5wbmdcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYXpvdl9zdWJvcnVcXFwiPnt7ZmlsZS5uYW1lfX08L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidHlwX3N1Ym9ydVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8cD5hbnk8L3A+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ2ZWxrb3N0X3N1Ym9ydVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8cD57e2ZpbGUuc2l6ZX19PC9wPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj4tLT5cXG5cXG4gICAgICAgIDwvZGl2PlxcblxcbiAgICA8L2Rpdj5cXG5cXG48L2Rpdj5cIik7fV0pOyJdfQ==
