(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"E:\\media-browser\\src\\app.js":[function(require,module,exports){
'use strict';

var _index = require('./tpl/index');

var _index2 = _interopRequireDefault(_index);

var _application = require('./app/components/application-root/application.root');

var _application2 = _interopRequireDefault(_application);

var _left = require('./app/components/left-menu/left.menu');

var _left2 = _interopRequireDefault(_left);

var _dir = require('./app/components/dir-return/dir.return');

var _dir2 = _interopRequireDefault(_dir);

var _dir3 = require('./app/components/dir-base/dir.base');

var _dir4 = _interopRequireDefault(_dir3);

var _file = require('./app/components/file/file');

var _file2 = _interopRequireDefault(_file);

var _media = require('./app/media.service');

var _media2 = _interopRequireDefault(_media);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

angular.module('browser', [_index2.default, _application.module]).component('applicationRoot', _application2.default).component('leftMenu', _left2.default).component('dirReturn', _dir2.default).component('dirBase', _dir4.default).component('file', _file2.default).service('mediaService', _media2.default);

},{"./app/components/application-root/application.root":"E:\\media-browser\\src\\app\\components\\application-root\\application.root.js","./app/components/dir-base/dir.base":"E:\\media-browser\\src\\app\\components\\dir-base\\dir.base.js","./app/components/dir-return/dir.return":"E:\\media-browser\\src\\app\\components\\dir-return\\dir.return.js","./app/components/file/file":"E:\\media-browser\\src\\app\\components\\file\\file.js","./app/components/left-menu/left.menu":"E:\\media-browser\\src\\app\\components\\left-menu\\left.menu.js","./app/media.service":"E:\\media-browser\\src\\app\\media.service.js","./tpl/index":"E:\\media-browser\\src\\tpl\\index.js"}],"E:\\media-browser\\src\\app\\components\\application-root\\application.root.js":[function(require,module,exports){
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

},{}],"E:\\media-browser\\src\\app\\components\\dir-base\\dir.base.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DirBase =

// @ngInject
function DirBase($http, mediaService) {
    _classCallCheck(this, DirBase);

    this.$http = $http;
    this.mediaService = mediaService;
};

exports.default = {
    controller: DirBase,
    templateUrl: 'dir-base/dir.base.tpl.html'
};

},{}],"E:\\media-browser\\src\\app\\components\\dir-return\\dir.return.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DirReturn =

// @ngInject
function DirReturn($http, mediaService) {
    _classCallCheck(this, DirReturn);

    this.$http = $http;
    this.mediaService = mediaService;
};

exports.default = {
    controller: DirReturn,
    templateUrl: 'dir-return/dir.return.tpl.html'
};

},{}],"E:\\media-browser\\src\\app\\components\\file\\file.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var File =

// @ngInject
function File($http, mediaService) {
    _classCallCheck(this, File);

    this.$http = $http;
    this.mediaService = mediaService;
};

exports.default = {
    controller: File,
    templateUrl: 'file/file.tpl.html'
};

},{}],"E:\\media-browser\\src\\app\\components\\left-menu\\left.menu.js":[function(require,module,exports){
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

},{}],"E:\\media-browser\\src\\app\\media.service.js":[function(require,module,exports){
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

},{}],"E:\\media-browser\\src\\tpl\\index.js":[function(require,module,exports){
'use strict';

require('./templates');
module.exports = 'templates';

},{"./templates":"E:\\media-browser\\src\\tpl\\templates.js"}],"E:\\media-browser\\src\\tpl\\templates.js":[function(require,module,exports){
"use strict";

angular.module("templates", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("application-root/application.root.tpl.html", "<div id=\"okno\">\r\n\r\n    <left-menu></left-menu>\r\n\r\n    <div id=\"obsah\">\r\n        <div id=\"header2\">\r\n            <h2>Files / Images</h2>\r\n        </div>\r\n\r\n        <div style=\"margin-left:20px; margin-right: 30px\">\r\n\r\n            <dir-return></dir-return>\r\n\r\n            <dir-base></dir-base>\r\n\r\n            <file></file>\r\n\r\n            <!--&lt;!&ndash; todo componeneta 3 &ndash;&gt;\r\n            <div class=\"icon\" ng-repeat=\"file in $ctrl.mediaService.files_data | filter:{ type: \'image/png\' }\">\r\n                <img class=\"img_icon\" src=\"{{file.thumb_link}}\">\r\n                <div class=\"nazov_suboru\">{{file.name}}</div>\r\n                <div class=\"typ_suboru\">\r\n                    <p>PNG</p>\r\n                </div>\r\n                <div class=\"velkost_suboru\">\r\n                    <p>{{file.size}}</p>\r\n                </div>\r\n            </div>\r\n\r\n            &lt;!&ndash; todo componeneta 3 &ndash;&gt;\r\n            <div class=\"icon\" ng-repeat=\"file in $ctrl.mediaService.files_data | filter:{ type: \'text/plain\' }\">\r\n                <img class=\"img_icon\" src=\"img/txt.png\">\r\n                <div class=\"nazov_suboru\">{{file.name}}</div>\r\n                <div class=\"typ_suboru\">\r\n                    <p>TXT</p>\r\n                </div>\r\n                <div class=\"velkost_suboru\">\r\n                    <p>{{file.size}}</p>\r\n                </div>\r\n            </div>\r\n\r\n            &lt;!&ndash; todo componeneta 3 &ndash;&gt;\r\n            <div class=\"icon\" ng-repeat=\"file in $ctrl.files_data | filter:{ type: \'application/pdf\' }\">\r\n                <img class=\"img_icon\" src=\"img/pdf.png\">\r\n                <div class=\"nazov_suboru\">{{file.name}}</div>\r\n                <div class=\"typ_suboru\">\r\n                    <p>PDF</p>\r\n                </div>\r\n                <div class=\"velkost_suboru\">\r\n                    <p>{{file.size}}</p>\r\n                </div>\r\n            </div>\r\n\r\n            &lt;!&ndash; todo componeneta 3 &ndash;&gt;\r\n            <div class=\"icon\" ng-repeat=\"file in $ctrl.mediaService.files_data | filter:{ type: \'!image/jpeg\'} | filter:{ type: \'!application/pdf\'} | filter:{ type: \'!text/plain\'} | filter:{ type: \'!image/png\'} \">\r\n                <img class=\"img_icon\" src=\"img/plain.png\">\r\n                <div class=\"nazov_suboru\">{{file.name}}</div>\r\n                <div class=\"typ_suboru\">\r\n                    <p>any</p>\r\n                </div>\r\n                <div class=\"velkost_suboru\">\r\n                    <p>{{file.size}}</p>\r\n                </div>\r\n            </div>-->\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>");
  $templateCache.put("dir-base/dir.base.tpl.html", "<div class=\"icon\" ng-repeat=\"dir in $ctrl.mediaService.dirs_data\" ng-click=\"$ctrl.mediaService.loadDir(dir)\">\r\n    <img class=\"img_icon\" src=\"img/priecinok.png\">\r\n    <div class=\"nazov_suboru\">{{dir.name}}</div>\r\n</div>");
  $templateCache.put("dir-return/dir.return.tpl.html", "<div class=\"icon\" ng-show=\"$ctrl.mediaService.dir\" ng-click=\"$ctrl.mediaService.loadDir($ctrl.mediaService.dir, true)\">\r\n    <img class=\"img_icon\" src=\"img/adresar.png\">\r\n    <div class=\"nazov_suboru\">Nadradeny adresar</div>\r\n</div>");
  $templateCache.put("file/file.tpl.html", "<!--<div class=\"icon\" ng-repeat=\"file in $ctrl.mediaService.files_data | filter:{ type: \'image/jpeg\' }\">-->\r\n<div class=\"icon\" ng-repeat=\"file in $ctrl.mediaService.files_data\">\r\n    <!--<img class=\"img_picture\" src=\"{{file.thumb_link}}\">-->\r\n    <img class=\"img_picture\" ng-src=\"{{file.thumb_link}}\">\r\n    <div class=\"nazov_suboru\">{{file.name}}</div>\r\n    <div class=\"typ_suboru\">\r\n        <p>{{file.type}}</p>\r\n    </div>\r\n    <div class=\"velkost_suboru\">\r\n        <p>{{file.size}}</p>\r\n    </div>\r\n</div>");
  $templateCache.put("left-menu/left.menu.tpl.html", "<div id=\"left_menu\">\r\n    <ul>\r\n        <li ng-show=\"$ctrl.mediaService.dir\" ng-click=\"$ctrl.mediaService.loadDir($ctrl.mediaService.dir, true)\" style=\"font-weight: bold; font-size: 18px;\">Nadradeny adresar</li>\r\n        <li ng-repeat=\"dir in $ctrl.mediaService.dirs_data\" ng-click=\"$ctrl.mediaService.loadDir(dir)\" >{{dir.name}}</li>\r\n    </ul>\r\n</div>");
}]);

},{}]},{},["E:\\media-browser\\src\\app.js"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGFwcC5qcyIsInNyY1xcYXBwXFxjb21wb25lbnRzXFxhcHBsaWNhdGlvbi1yb290XFxhcHBsaWNhdGlvbi5yb290LmpzIiwic3JjXFxhcHBcXGNvbXBvbmVudHNcXGRpci1iYXNlXFxkaXIuYmFzZS5qcyIsInNyY1xcYXBwXFxjb21wb25lbnRzXFxkaXItcmV0dXJuXFxkaXIucmV0dXJuLmpzIiwic3JjXFxhcHBcXGNvbXBvbmVudHNcXGZpbGVcXGZpbGUuanMiLCJzcmNcXGFwcFxcY29tcG9uZW50c1xcbGVmdC1tZW51XFxsZWZ0Lm1lbnUuanMiLCJzcmNcXGFwcFxcbWVkaWEuc2VydmljZS5qcyIsInNyY1xcdHBsXFxpbmRleC5qcyIsInNyY1xcdHBsXFx0ZW1wbGF0ZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOzs7O0FBRUE7Ozs7QUFFQTs7OztBQUVBOzs7O0FBRUE7Ozs7QUFFQTs7OztBQUVBOzs7Ozs7QUFHQSxRQUFRLE1BQVIsQ0FBZSxTQUFmLEVBQTBCLHNDQUExQixFQUNLLFNBREwsQ0FDZSxpQkFEZix5QkFFSyxTQUZMLENBRWUsVUFGZixrQkFHSyxTQUhMLENBR2UsV0FIZixpQkFJSyxTQUpMLENBSWUsU0FKZixpQkFLSyxTQUxMLENBS2UsTUFMZixrQkFPSyxPQVBMLENBT2EsY0FQYjs7Ozs7Ozs7Ozs7QUNmTyxJQUFNLFVBQVMsWUFBVDs7O0FBRWIsUUFBUSxNQUFSLENBQWUsT0FBZixFQUF1QixFQUF2Qjs7SUFFTTs7O0FBR0YsU0FIRSxNQUdGLENBQVksS0FBWixFQUFtQixZQUFuQixFQUFpQzswQkFIL0IsUUFHK0I7O0FBQzdCLFNBQUssS0FBTCxHQUFhLEtBQWIsQ0FENkI7QUFFN0IsU0FBSyxZQUFMLEdBQW9CLFlBQXBCLENBRjZCO0NBQWpDOztrQkFNVztBQUNYLGdCQUFZLE1BQVo7QUFDQSxpQkFBYSw0Q0FBYjs7Ozs7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QixFQUFrRCx5WEFBbEQsRUFKZ0Y7Q0FBekIsQ0FBdkQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vdHBsL2luZGV4JztcclxuXHJcbmltcG9ydCByb290LCB7bW9kdWxlfSBmcm9tICcuL2FwcC9jb21wb25lbnRzL2FwcGxpY2F0aW9uLXJvb3QvYXBwbGljYXRpb24ucm9vdCc7XHJcblxyXG5pbXBvcnQgbGVmdE1lbnUgZnJvbSAnLi9hcHAvY29tcG9uZW50cy9sZWZ0LW1lbnUvbGVmdC5tZW51JztcclxuXHJcbmltcG9ydCBkaXJSZXR1cm4gZnJvbSAnLi9hcHAvY29tcG9uZW50cy9kaXItcmV0dXJuL2Rpci5yZXR1cm4nO1xyXG5cclxuaW1wb3J0IGRpckJhc2UgZnJvbSAnLi9hcHAvY29tcG9uZW50cy9kaXItYmFzZS9kaXIuYmFzZSc7XHJcblxyXG5pbXBvcnQgZmlsZSBmcm9tICcuL2FwcC9jb21wb25lbnRzL2ZpbGUvZmlsZSc7XHJcblxyXG5pbXBvcnQgTWVkaWFTZXJ2aWNlIGZyb20gJy4vYXBwL21lZGlhLnNlcnZpY2UnO1xyXG5cclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdicm93c2VyJywgW3RlbXBsYXRlLCBtb2R1bGVdKVxyXG4gICAgLmNvbXBvbmVudCgnYXBwbGljYXRpb25Sb290Jywgcm9vdClcclxuICAgIC5jb21wb25lbnQoJ2xlZnRNZW51JywgbGVmdE1lbnUpXHJcbiAgICAuY29tcG9uZW50KCdkaXJSZXR1cm4nLCBkaXJSZXR1cm4pXHJcbiAgICAuY29tcG9uZW50KCdkaXJCYXNlJywgZGlyQmFzZSlcclxuICAgIC5jb21wb25lbnQoJ2ZpbGUnLCBmaWxlKVxyXG5cclxuICAgIC5zZXJ2aWNlKCdtZWRpYVNlcnZpY2UnLCBNZWRpYVNlcnZpY2UpXHJcbjsiLCJleHBvcnQgY29uc3QgbW9kdWxlID0gJ2NvbXBvbmVudHMnO1xyXG5cclxuYW5ndWxhci5tb2R1bGUobW9kdWxlLCBbXSk7XHJcblxyXG5jbGFzcyBNeUN0cmwge1xyXG5cclxuICAgIC8vIEBuZ0luamVjdFxyXG4gICAgY29uc3RydWN0b3IoJGh0dHAsIG1lZGlhU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgICAgICB0aGlzLm1lZGlhU2VydmljZSA9IG1lZGlhU2VydmljZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgY29udHJvbGxlcjogTXlDdHJsLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdhcHBsaWNhdGlvbi1yb290L2FwcGxpY2F0aW9uLnJvb3QudHBsLmh0bWwnXHJcbn07IiwiY2xhc3MgRGlyQmFzZSB7XHJcblxyXG4gICAgLy8gQG5nSW5qZWN0XHJcbiAgICBjb25zdHJ1Y3RvcigkaHR0cCwgbWVkaWFTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgICAgIHRoaXMubWVkaWFTZXJ2aWNlID0gbWVkaWFTZXJ2aWNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBjb250cm9sbGVyOiBEaXJCYXNlLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdkaXItYmFzZS9kaXIuYmFzZS50cGwuaHRtbCdcclxufSIsImNsYXNzIERpclJldHVybiB7XHJcblxyXG4gICAgLy8gQG5nSW5qZWN0XHJcbiAgICBjb25zdHJ1Y3RvcigkaHR0cCwgbWVkaWFTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgICAgIHRoaXMubWVkaWFTZXJ2aWNlID0gbWVkaWFTZXJ2aWNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBjb250cm9sbGVyOiBEaXJSZXR1cm4sXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2Rpci1yZXR1cm4vZGlyLnJldHVybi50cGwuaHRtbCdcclxufSIsImNsYXNzIEZpbGV7XHJcblxyXG4gICAgLy8gQG5nSW5qZWN0XHJcbiAgICBjb25zdHJ1Y3RvcigkaHR0cCwgbWVkaWFTZXJ2aWNlKXtcclxuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XHJcbiAgICAgICAgdGhpcy5tZWRpYVNlcnZpY2U9bWVkaWFTZXJ2aWNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdHtcclxuICAgIGNvbnRyb2xsZXI6IEZpbGUsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2ZpbGUvZmlsZS50cGwuaHRtbCdcclxufVxyXG5cclxuIiwiY2xhc3MgTGVmdE1lbnUge1xyXG5cclxuICAgIC8vIEBuZ0luamVjdFxyXG4gICAgY29uc3RydWN0b3IoJGh0dHAsIG1lZGlhU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgICAgICB0aGlzLm1lZGlhU2VydmljZSA9IG1lZGlhU2VydmljZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgY29udHJvbGxlcjogTGVmdE1lbnUsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2xlZnQtbWVudS9sZWZ0Lm1lbnUudHBsLmh0bWwnXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNZWRpYVNlcnZpY2Uge1xyXG5cclxuICAgIC8vIEBuZ0luamVjdFxyXG4gICAgY29uc3RydWN0b3IoJGh0dHApIHtcclxuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XHJcblxyXG4gICAgICAgIHRoaXMuZGlyID0gbnVsbDtcclxuICAgICAgICB0aGlzLmRpcnNfZGF0YSA9IFtdO1xyXG4gICAgICAgIHRoaXMuZmlsZXNfZGF0YSA9IFtdO1xyXG5cclxuICAgICAgICB0aGlzLmxvYWREaXIoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgbG9hZERpcihkaXJlY3RvcnkgPSBudWxsLCBpc1JldHVybiA9IGZhbHNlKSB7XHJcbiAgICAgICAgbGV0IHVybEFkcmVzcyA9ICcnO1xyXG4gICAgICAgIGlmIChkaXJlY3RvcnkpIHtcclxuICAgICAgICAgICAgdXJsQWRyZXNzID0gZGlyZWN0b3J5LmxvY2F0aW9uICsgJy8nICsgZGlyZWN0b3J5Lm5hbWU7XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNSZXR1cm4pIHtcclxuICAgICAgICAgICAgICAgIHVybEFkcmVzcyA9IGRpcmVjdG9yeS5sb2NhdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy4kaHR0cC5nZXQoXCJodHRwOi8vbWVkaWFicm93c2VyLmJhcnQuc2svZGlyXCIgKyB1cmxBZHJlc3MpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXIgPSByZXNwb25zZS5kYXRhLmRpcjtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlyc19kYXRhID0gcmVzcG9uc2UuZGF0YS5kaXJzO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWxlc19kYXRhID0gcmVzcG9uc2UuZGF0YS5maWxlcztcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG5cclxuXHJcblxyXG5cclxuICAgIH07XHJcbn0iLCJyZXF1aXJlKCcuL3RlbXBsYXRlcycpO1xyXG5tb2R1bGUuZXhwb3J0cyA9ICd0ZW1wbGF0ZXMnOyIsImFuZ3VsYXIubW9kdWxlKFwidGVtcGxhdGVzXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHskdGVtcGxhdGVDYWNoZS5wdXQoXCJhcHBsaWNhdGlvbi1yb290L2FwcGxpY2F0aW9uLnJvb3QudHBsLmh0bWxcIixcIjxkaXYgaWQ9XFxcIm9rbm9cXFwiPlxcclxcblxcclxcbiAgICA8bGVmdC1tZW51PjwvbGVmdC1tZW51PlxcclxcblxcclxcbiAgICA8ZGl2IGlkPVxcXCJvYnNhaFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGlkPVxcXCJoZWFkZXIyXFxcIj5cXHJcXG4gICAgICAgICAgICA8aDI+RmlsZXMgLyBJbWFnZXM8L2gyPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IHN0eWxlPVxcXCJtYXJnaW4tbGVmdDoyMHB4OyBtYXJnaW4tcmlnaHQ6IDMwcHhcXFwiPlxcclxcblxcclxcbiAgICAgICAgICAgIDxkaXItcmV0dXJuPjwvZGlyLXJldHVybj5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8ZGlyLWJhc2U+PC9kaXItYmFzZT5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8ZmlsZT48L2ZpbGU+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPCEtLSZsdDshJm5kYXNoOyB0b2RvIGNvbXBvbmVuZXRhIDMgJm5kYXNoOyZndDtcXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpY29uXFxcIiBuZy1yZXBlYXQ9XFxcImZpbGUgaW4gJGN0cmwubWVkaWFTZXJ2aWNlLmZpbGVzX2RhdGEgfCBmaWx0ZXI6eyB0eXBlOiBcXCdpbWFnZS9wbmdcXCcgfVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XFxcImltZ19pY29uXFxcIiBzcmM9XFxcInt7ZmlsZS50aHVtYl9saW5rfX1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYXpvdl9zdWJvcnVcXFwiPnt7ZmlsZS5uYW1lfX08L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidHlwX3N1Ym9ydVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8cD5QTkc8L3A+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ2ZWxrb3N0X3N1Ym9ydVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8cD57e2ZpbGUuc2l6ZX19PC9wPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAmbHQ7ISZuZGFzaDsgdG9kbyBjb21wb25lbmV0YSAzICZuZGFzaDsmZ3Q7XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaWNvblxcXCIgbmctcmVwZWF0PVxcXCJmaWxlIGluICRjdHJsLm1lZGlhU2VydmljZS5maWxlc19kYXRhIHwgZmlsdGVyOnsgdHlwZTogXFwndGV4dC9wbGFpblxcJyB9XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cXFwiaW1nX2ljb25cXFwiIHNyYz1cXFwiaW1nL3R4dC5wbmdcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYXpvdl9zdWJvcnVcXFwiPnt7ZmlsZS5uYW1lfX08L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidHlwX3N1Ym9ydVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8cD5UWFQ8L3A+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ2ZWxrb3N0X3N1Ym9ydVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8cD57e2ZpbGUuc2l6ZX19PC9wPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAmbHQ7ISZuZGFzaDsgdG9kbyBjb21wb25lbmV0YSAzICZuZGFzaDsmZ3Q7XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaWNvblxcXCIgbmctcmVwZWF0PVxcXCJmaWxlIGluICRjdHJsLmZpbGVzX2RhdGEgfCBmaWx0ZXI6eyB0eXBlOiBcXCdhcHBsaWNhdGlvbi9wZGZcXCcgfVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XFxcImltZ19pY29uXFxcIiBzcmM9XFxcImltZy9wZGYucG5nXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmF6b3Zfc3Vib3J1XFxcIj57e2ZpbGUubmFtZX19PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInR5cF9zdWJvcnVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHA+UERGPC9wPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidmVsa29zdF9zdWJvcnVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHA+e3tmaWxlLnNpemV9fTwvcD5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICAgICAgJmx0OyEmbmRhc2g7IHRvZG8gY29tcG9uZW5ldGEgMyAmbmRhc2g7Jmd0O1xcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImljb25cXFwiIG5nLXJlcGVhdD1cXFwiZmlsZSBpbiAkY3RybC5tZWRpYVNlcnZpY2UuZmlsZXNfZGF0YSB8IGZpbHRlcjp7IHR5cGU6IFxcJyFpbWFnZS9qcGVnXFwnfSB8IGZpbHRlcjp7IHR5cGU6IFxcJyFhcHBsaWNhdGlvbi9wZGZcXCd9IHwgZmlsdGVyOnsgdHlwZTogXFwnIXRleHQvcGxhaW5cXCd9IHwgZmlsdGVyOnsgdHlwZTogXFwnIWltYWdlL3BuZ1xcJ30gXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cXFwiaW1nX2ljb25cXFwiIHNyYz1cXFwiaW1nL3BsYWluLnBuZ1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hem92X3N1Ym9ydVxcXCI+e3tmaWxlLm5hbWV9fTwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0eXBfc3Vib3J1XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxwPmFueTwvcD5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInZlbGtvc3Rfc3Vib3J1XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxwPnt7ZmlsZS5zaXplfX08L3A+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2Pi0tPlxcclxcblxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgIDwvZGl2PlxcclxcblxcclxcbjwvZGl2PlwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImRpci1iYXNlL2Rpci5iYXNlLnRwbC5odG1sXCIsXCI8ZGl2IGNsYXNzPVxcXCJpY29uXFxcIiBuZy1yZXBlYXQ9XFxcImRpciBpbiAkY3RybC5tZWRpYVNlcnZpY2UuZGlyc19kYXRhXFxcIiBuZy1jbGljaz1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLmxvYWREaXIoZGlyKVxcXCI+XFxyXFxuICAgIDxpbWcgY2xhc3M9XFxcImltZ19pY29uXFxcIiBzcmM9XFxcImltZy9wcmllY2lub2sucG5nXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibmF6b3Zfc3Vib3J1XFxcIj57e2Rpci5uYW1lfX08L2Rpdj5cXHJcXG48L2Rpdj5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJkaXItcmV0dXJuL2Rpci5yZXR1cm4udHBsLmh0bWxcIixcIjxkaXYgY2xhc3M9XFxcImljb25cXFwiIG5nLXNob3c9XFxcIiRjdHJsLm1lZGlhU2VydmljZS5kaXJcXFwiIG5nLWNsaWNrPVxcXCIkY3RybC5tZWRpYVNlcnZpY2UubG9hZERpcigkY3RybC5tZWRpYVNlcnZpY2UuZGlyLCB0cnVlKVxcXCI+XFxyXFxuICAgIDxpbWcgY2xhc3M9XFxcImltZ19pY29uXFxcIiBzcmM9XFxcImltZy9hZHJlc2FyLnBuZ1xcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm5hem92X3N1Ym9ydVxcXCI+TmFkcmFkZW55IGFkcmVzYXI8L2Rpdj5cXHJcXG48L2Rpdj5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJmaWxlL2ZpbGUudHBsLmh0bWxcIixcIjwhLS08ZGl2IGNsYXNzPVxcXCJpY29uXFxcIiBuZy1yZXBlYXQ9XFxcImZpbGUgaW4gJGN0cmwubWVkaWFTZXJ2aWNlLmZpbGVzX2RhdGEgfCBmaWx0ZXI6eyB0eXBlOiBcXCdpbWFnZS9qcGVnXFwnIH1cXFwiPi0tPlxcclxcbjxkaXYgY2xhc3M9XFxcImljb25cXFwiIG5nLXJlcGVhdD1cXFwiZmlsZSBpbiAkY3RybC5tZWRpYVNlcnZpY2UuZmlsZXNfZGF0YVxcXCI+XFxyXFxuICAgIDwhLS08aW1nIGNsYXNzPVxcXCJpbWdfcGljdHVyZVxcXCIgc3JjPVxcXCJ7e2ZpbGUudGh1bWJfbGlua319XFxcIj4tLT5cXHJcXG4gICAgPGltZyBjbGFzcz1cXFwiaW1nX3BpY3R1cmVcXFwiIG5nLXNyYz1cXFwie3tmaWxlLnRodW1iX2xpbmt9fVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm5hem92X3N1Ym9ydVxcXCI+e3tmaWxlLm5hbWV9fTwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ0eXBfc3Vib3J1XFxcIj5cXHJcXG4gICAgICAgIDxwPnt7ZmlsZS50eXBlfX08L3A+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ2ZWxrb3N0X3N1Ym9ydVxcXCI+XFxyXFxuICAgICAgICA8cD57e2ZpbGUuc2l6ZX19PC9wPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJsZWZ0LW1lbnUvbGVmdC5tZW51LnRwbC5odG1sXCIsXCI8ZGl2IGlkPVxcXCJsZWZ0X21lbnVcXFwiPlxcclxcbiAgICA8dWw+XFxyXFxuICAgICAgICA8bGkgbmctc2hvdz1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLmRpclxcXCIgbmctY2xpY2s9XFxcIiRjdHJsLm1lZGlhU2VydmljZS5sb2FkRGlyKCRjdHJsLm1lZGlhU2VydmljZS5kaXIsIHRydWUpXFxcIiBzdHlsZT1cXFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMThweDtcXFwiPk5hZHJhZGVueSBhZHJlc2FyPC9saT5cXHJcXG4gICAgICAgIDxsaSBuZy1yZXBlYXQ9XFxcImRpciBpbiAkY3RybC5tZWRpYVNlcnZpY2UuZGlyc19kYXRhXFxcIiBuZy1jbGljaz1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLmxvYWREaXIoZGlyKVxcXCIgPnt7ZGlyLm5hbWV9fTwvbGk+XFxyXFxuICAgIDwvdWw+XFxyXFxuPC9kaXY+XCIpO31dKTsiXX0=
