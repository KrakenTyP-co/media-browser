(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app.js":[function(require,module,exports){
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

},{"./app/components/application-root/application.root":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/components/application-root/application.root.js","./app/components/dir-base/dir.base":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/components/dir-base/dir.base.js","./app/components/dir-return/dir.return":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/components/dir-return/dir.return.js","./app/components/file/file":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/components/file/file.js","./app/components/left-menu/left.menu":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/components/left-menu/left.menu.js","./app/media.service":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/media.service.js","./tpl/index":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/tpl/index.js"}],"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/components/application-root/application.root.js":[function(require,module,exports){
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

},{}],"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/components/dir-base/dir.base.js":[function(require,module,exports){
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

},{}],"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/components/dir-return/dir.return.js":[function(require,module,exports){
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

},{}],"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/components/file/file.js":[function(require,module,exports){
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

var TYPES = {
    'PNG': {
        list: ['image/png'],
        image: true
    },
    'JPG': {
        list: ['image/jpeg', 'image/pjpeg'],
        image: true
    },
    'GIF': {
        list: ['image/gif'],
        image: true
    },
    'BMP': {
        list: ['image/bmp'],
        image: true
    },
    'TIFF': ['image/ief', 'image/tiff'],
    'TXT': {
        list: ['application/plain', 'text/plain'],
        icon: 'img/txt.png'
    },
    'PDF': {
        list: ["application/pdf"],
        icon: 'img/pdf.png'
    }
};

var MediaService = function () {

    // @ngInject

    function MediaService($http) {
        _classCallCheck(this, MediaService);

        this.$http = $http;

        this.dir = null;
        this.dirs_data = [];
        this.files_data = [];

        this.selectedFile = null;

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

                _this.files_data = [];
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = response.data.files[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var file = _step.value;

                        _this.files_data.push(new File(file));
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            });
        }
    }]);

    return MediaService;
}();

exports.default = MediaService;

var File = function () {
    function File(data) {
        _classCallCheck(this, File);

        angular.merge(this, data);
    }

    _createClass(File, [{
        key: 'getTypeName',
        value: function getTypeName() {
            var getIcon = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

            for (var typeName in TYPES) {
                var typeObj = TYPES[typeName];
                if (angular.isDefined(typeObj.list)) {
                    var _iteratorNormalCompletion2 = true;
                    var _didIteratorError2 = false;
                    var _iteratorError2 = undefined;

                    try {
                        for (var _iterator2 = typeObj.list[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                            var type = _step2.value;

                            if (type == this.type) {
                                if (getIcon) {
                                    if (angular.isDefined(typeObj.image) && typeObj.image) {
                                        return this.thumb_link;
                                    } else {
                                        return angular.isDefined(typeObj.icon) ? typeObj.icon : null;
                                    }
                                } else {
                                    return typeName;
                                }
                            }
                        }
                    } catch (err) {
                        _didIteratorError2 = true;
                        _iteratorError2 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                _iterator2.return();
                            }
                        } finally {
                            if (_didIteratorError2) {
                                throw _iteratorError2;
                            }
                        }
                    }
                }
            }

            return null;
        }
    }, {
        key: 'niceType',
        get: function get() {
            return this.getTypeName() ? this.getTypeName() : 'any';
        }
    }, {
        key: 'icon',
        get: function get() {
            var icon = this.getTypeName(true);
            return icon ? icon : "img/plain.png";
        }
    }]);

    return File;
}();

},{}],"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/tpl/index.js":[function(require,module,exports){
'use strict';

require('./templates');
module.exports = 'templates';

},{"./templates":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/tpl/templates.js"}],"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/tpl/templates.js":[function(require,module,exports){
"use strict";

angular.module("templates", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("application-root/application.root.tpl.html", "<div id=\"okno\">\n\n    <left-menu></left-menu>\n\n    <div id=\"obsah\">\n        <div id=\"header2\">\n            <h2>Files / Images</h2>\n        </div>\n\n        <div style=\"margin-left:20px; margin-right: 30px\">\n\n            <dir-return></dir-return>\n\n            <dir-base></dir-base>\n\n            <file></file>\n        </div>\n\n    </div>\n\n</div>");
  $templateCache.put("file/file.tpl.html", "<div class=\"icon\" ng-repeat=\"file in $ctrl.mediaService.files_data\">\n    <!--<img class=\"img_picture\" src=\"{{file.thumb_link}}\">-->\n    <img class=\"img_picture\" ng-src=\"{{file.icon}}\">\n    <div class=\"nazov_suboru\">{{file.name}}</div>\n    <div class=\"typ_suboru\">\n        <p>{{file.niceType}}</p>\n    </div>\n    <div class=\"velkost_suboru\">\n        <p>{{file.size}}</p>\n    </div>\n</div>");
  $templateCache.put("dir-base/dir.base.tpl.html", "<div class=\"icon\" ng-repeat=\"dir in $ctrl.mediaService.dirs_data\" ng-click=\"$ctrl.mediaService.loadDir(dir)\">\n    <img class=\"img_icon\" src=\"img/priecinok.png\">\n    <div class=\"nazov_suboru\">{{dir.name}}</div>\n</div>");
  $templateCache.put("dir-return/dir.return.tpl.html", "<div class=\"icon\" ng-show=\"$ctrl.mediaService.dir\" ng-click=\"$ctrl.mediaService.loadDir($ctrl.mediaService.dir, true)\">\n    <img class=\"img_icon\" src=\"img/adresar.png\">\n    <div class=\"nazov_suboru\">Nadradeny adresar</div>\n</div>");
  $templateCache.put("left-menu/left.menu.tpl.html", "<div id=\"left_menu\">\n    <ul>\n        <li ng-show=\"$ctrl.mediaService.dir\" ng-click=\"$ctrl.mediaService.loadDir($ctrl.mediaService.dir, true)\" style=\"font-weight: bold; font-size: 18px;\">Nadradeny adresar</li>\n        <li ng-repeat=\"dir in $ctrl.mediaService.dirs_data\" ng-click=\"$ctrl.mediaService.loadDir(dir)\" >{{dir.name}}</li>\n    </ul>\n</div>");
}]);

},{}]},{},["/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app.js"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBwLmpzIiwic3JjL2FwcC9jb21wb25lbnRzL2FwcGxpY2F0aW9uLXJvb3QvYXBwbGljYXRpb24ucm9vdC5qcyIsInNyYy9hcHAvY29tcG9uZW50cy9kaXItYmFzZS9kaXIuYmFzZS5qcyIsInNyYy9hcHAvY29tcG9uZW50cy9kaXItcmV0dXJuL2Rpci5yZXR1cm4uanMiLCJzcmMvYXBwL2NvbXBvbmVudHMvZmlsZS9maWxlLmpzIiwic3JjL2FwcC9jb21wb25lbnRzL2xlZnQtbWVudS9sZWZ0Lm1lbnUuanMiLCJzcmMvYXBwL21lZGlhLnNlcnZpY2UuanMiLCJzcmMvdHBsL2luZGV4LmpzIiwic3JjL3RwbC90ZW1wbGF0ZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOzs7O0FBRUE7Ozs7QUFFQTs7OztBQUVBOzs7O0FBRUE7Ozs7QUFFQTs7OztBQUVBOzs7Ozs7QUFHQSxRQUFRLE1BQVIsQ0FBZSxTQUFmLEVBQTBCLHNDQUExQixFQUNLLFNBREwsQ0FDZSxpQkFEZix5QkFFSyxTQUZMLENBRWUsVUFGZixrQkFHSyxTQUhMLENBR2UsV0FIZixpQkFJSyxTQUpMLENBSWUsU0FKZixpQkFLSyxTQUxMLENBS2UsTUFMZixrQkFPSyxPQVBMLENBT2EsY0FQYjs7Ozs7Ozs7Ozs7QUNmTyxJQUFNLFVBQVMsWUFBVDs7O0FBRWIsUUFBUSxNQUFSLENBQWUsT0FBZixFQUF1QixFQUF2Qjs7SUFFTTs7O0FBR0YsU0FIRSxNQUdGLENBQVksS0FBWixFQUFtQixZQUFuQixFQUFpQzswQkFIL0IsUUFHK0I7O0FBQzdCLFNBQUssS0FBTCxHQUFhLEtBQWIsQ0FENkI7QUFFN0IsU0FBSyxZQUFMLEdBQW9CLFlBQXBCLENBRjZCO0NBQWpDOztrQkFNVztBQUNYLGdCQUFZLE1BQVo7QUFDQSxpQkFBYSw0Q0FBYjs7Ozs7Ozs7Ozs7O0lDZkU7OztBQUdGLFNBSEUsT0FH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QUwsS0FBcUIsS0FBSyxXQUFMLEVBQXJCLEdBQTBDLEtBQTFDLENBREk7Ozs7NEJBSUo7QUFDUCxnQkFBSSxPQUFPLEtBQUssV0FBTCxDQUFpQixJQUFqQixDQUFQLENBREc7QUFFUCxtQkFBTyxPQUFPLElBQVAsR0FBYyxlQUFkLENBRkE7Ozs7V0FoQ1Q7Ozs7OztBQ25FTixRQUFRLGFBQVI7QUFDQSxPQUFPLE9BQVAsR0FBaUIsV0FBakI7Ozs7O0FDREEsUUFBUSxNQUFSLENBQWUsV0FBZixFQUE0QixFQUE1QixFQUFnQyxHQUFoQyxDQUFvQyxDQUFDLGdCQUFELEVBQW1CLFVBQVMsY0FBVCxFQUF5QjtBQUFDLGlCQUFlLEdBQWYsQ0FBbUIsNENBQW5CLEVBQWdFLGtYQUFoRSxFQUFEO0FBQ2hGLGlCQUFlLEdBQWYsQ0FBbUIsb0JBQW5CLEVBQXdDLGlhQUF4QyxFQURnRjtBQUVoRixpQkFBZSxHQUFmLENBQW1CLDRCQUFuQixFQUFnRCx5T0FBaEQsRUFGZ0Y7QUFHaEYsaUJBQWUsR0FBZixDQUFtQixnQ0FBbkIsRUFBb0Qsc1BBQXBELEVBSGdGO0FBSWhGLGlCQUFlLEdBQWYsQ0FBbUIsOEJBQW5CLEVBQWtELCtXQUFsRCxFQUpnRjtDQUF6QixDQUF2RCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi90cGwvaW5kZXgnO1xuXG5pbXBvcnQgcm9vdCwge21vZHVsZX0gZnJvbSAnLi9hcHAvY29tcG9uZW50cy9hcHBsaWNhdGlvbi1yb290L2FwcGxpY2F0aW9uLnJvb3QnO1xuXG5pbXBvcnQgbGVmdE1lbnUgZnJvbSAnLi9hcHAvY29tcG9uZW50cy9sZWZ0LW1lbnUvbGVmdC5tZW51JztcblxuaW1wb3J0IGRpclJldHVybiBmcm9tICcuL2FwcC9jb21wb25lbnRzL2Rpci1yZXR1cm4vZGlyLnJldHVybic7XG5cbmltcG9ydCBkaXJCYXNlIGZyb20gJy4vYXBwL2NvbXBvbmVudHMvZGlyLWJhc2UvZGlyLmJhc2UnO1xuXG5pbXBvcnQgZmlsZSBmcm9tICcuL2FwcC9jb21wb25lbnRzL2ZpbGUvZmlsZSc7XG5cbmltcG9ydCBNZWRpYVNlcnZpY2UgZnJvbSAnLi9hcHAvbWVkaWEuc2VydmljZSc7XG5cblxuYW5ndWxhci5tb2R1bGUoJ2Jyb3dzZXInLCBbdGVtcGxhdGUsIG1vZHVsZV0pXG4gICAgLmNvbXBvbmVudCgnYXBwbGljYXRpb25Sb290Jywgcm9vdClcbiAgICAuY29tcG9uZW50KCdsZWZ0TWVudScsIGxlZnRNZW51KVxuICAgIC5jb21wb25lbnQoJ2RpclJldHVybicsIGRpclJldHVybilcbiAgICAuY29tcG9uZW50KCdkaXJCYXNlJywgZGlyQmFzZSlcbiAgICAuY29tcG9uZW50KCdmaWxlJywgZmlsZSlcblxuICAgIC5zZXJ2aWNlKCdtZWRpYVNlcnZpY2UnLCBNZWRpYVNlcnZpY2UpXG47IiwiZXhwb3J0IGNvbnN0IG1vZHVsZSA9ICdjb21wb25lbnRzJztcblxuYW5ndWxhci5tb2R1bGUobW9kdWxlLCBbXSk7XG5cbmNsYXNzIE15Q3RybCB7XG5cbiAgICAvLyBAbmdJbmplY3RcbiAgICBjb25zdHJ1Y3RvcigkaHR0cCwgbWVkaWFTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcbiAgICAgICAgdGhpcy5tZWRpYVNlcnZpY2UgPSBtZWRpYVNlcnZpY2U7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY29udHJvbGxlcjogTXlDdHJsLFxuICAgIHRlbXBsYXRlVXJsOiAnYXBwbGljYXRpb24tcm9vdC9hcHBsaWNhdGlvbi5yb290LnRwbC5odG1sJ1xufTsiLCJjbGFzcyBEaXJCYXNlIHtcblxuICAgIC8vIEBuZ0luamVjdFxuICAgIGNvbnN0cnVjdG9yKCRodHRwLCBtZWRpYVNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xuICAgICAgICB0aGlzLm1lZGlhU2VydmljZSA9IG1lZGlhU2VydmljZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBjb250cm9sbGVyOiBEaXJCYXNlLFxuICAgIHRlbXBsYXRlVXJsOiAnZGlyLWJhc2UvZGlyLmJhc2UudHBsLmh0bWwnXG59IiwiY2xhc3MgRGlyUmV0dXJuIHtcblxuICAgIC8vIEBuZ0luamVjdFxuICAgIGNvbnN0cnVjdG9yKCRodHRwLCBtZWRpYVNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xuICAgICAgICB0aGlzLm1lZGlhU2VydmljZSA9IG1lZGlhU2VydmljZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBjb250cm9sbGVyOiBEaXJSZXR1cm4sXG4gICAgdGVtcGxhdGVVcmw6ICdkaXItcmV0dXJuL2Rpci5yZXR1cm4udHBsLmh0bWwnXG59IiwiY2xhc3MgRmlsZSB7XG5cbiAgICAvLyBAbmdJbmplY3RcbiAgICBjb25zdHJ1Y3RvcigkaHR0cCwgbWVkaWFTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcbiAgICAgICAgdGhpcy5tZWRpYVNlcnZpY2UgPSBtZWRpYVNlcnZpY2U7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdHtcbiAgICBjb250cm9sbGVyOiBGaWxlLFxuICAgIHRlbXBsYXRlVXJsOiAnZmlsZS9maWxlLnRwbC5odG1sJ1xufSIsImNsYXNzIExlZnRNZW51IHtcblxuICAgIC8vIEBuZ0luamVjdFxuICAgIGNvbnN0cnVjdG9yKCRodHRwLCBtZWRpYVNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xuICAgICAgICB0aGlzLm1lZGlhU2VydmljZSA9IG1lZGlhU2VydmljZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBjb250cm9sbGVyOiBMZWZ0TWVudSxcbiAgICB0ZW1wbGF0ZVVybDogJ2xlZnQtbWVudS9sZWZ0Lm1lbnUudHBsLmh0bWwnXG59IiwiY29uc3QgVFlQRVMgPSB7XG4gICAgJ1BORyc6IHtcbiAgICAgICAgbGlzdDogWydpbWFnZS9wbmcnXSxcbiAgICAgICAgaW1hZ2U6IHRydWVcbiAgICB9LFxuICAgICdKUEcnOiB7XG4gICAgICAgIGxpc3Q6IFsnaW1hZ2UvanBlZycsICdpbWFnZS9wanBlZyddLFxuICAgICAgICBpbWFnZTogdHJ1ZVxuICAgIH0sXG4gICAgJ0dJRic6IHtcbiAgICAgICAgbGlzdDogWydpbWFnZS9naWYnXSxcbiAgICAgICAgaW1hZ2U6IHRydWVcbiAgICB9LFxuICAgICdCTVAnOiB7XG4gICAgICAgIGxpc3Q6IFsnaW1hZ2UvYm1wJ10sXG4gICAgICAgIGltYWdlOiB0cnVlXG4gICAgfSxcbiAgICAnVElGRic6IFsnaW1hZ2UvaWVmJywgJ2ltYWdlL3RpZmYnXSxcbiAgICAnVFhUJzoge1xuICAgICAgICBsaXN0OiBbJ2FwcGxpY2F0aW9uL3BsYWluJywgJ3RleHQvcGxhaW4nXSxcbiAgICAgICAgaWNvbjogJ2ltZy90eHQucG5nJ1xuICAgIH0sXG4gICAgJ1BERic6IHtcbiAgICAgICAgbGlzdDogW1wiYXBwbGljYXRpb24vcGRmXCJdLFxuICAgICAgICBpY29uOiAnaW1nL3BkZi5wbmcnXG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVkaWFTZXJ2aWNlIHtcblxuICAgIC8vIEBuZ0luamVjdFxuICAgIGNvbnN0cnVjdG9yKCRodHRwKSB7XG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcblxuICAgICAgICB0aGlzLmRpciA9IG51bGw7XG4gICAgICAgIHRoaXMuZGlyc19kYXRhID0gW107XG4gICAgICAgIHRoaXMuZmlsZXNfZGF0YSA9IFtdO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zZWxlY3RlZEZpbGUgPSBudWxsO1xuXG4gICAgICAgIHRoaXMubG9hZERpcigpO1xuICAgIH1cblxuXG4gICAgbG9hZERpcihkaXJlY3RvcnkgPSBudWxsLCBpc1JldHVybiA9IGZhbHNlKSB7XG4gICAgICAgIGxldCB1cmxBZHJlc3MgPSAnJztcbiAgICAgICAgaWYgKGRpcmVjdG9yeSkge1xuICAgICAgICAgICAgdXJsQWRyZXNzID0gZGlyZWN0b3J5LmxvY2F0aW9uICsgJy8nICsgZGlyZWN0b3J5Lm5hbWU7XG5cbiAgICAgICAgICAgIGlmIChpc1JldHVybikge1xuICAgICAgICAgICAgICAgIHVybEFkcmVzcyA9IGRpcmVjdG9yeS5sb2NhdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJGh0dHAuZ2V0KFwiaHR0cDovL21lZGlhYnJvd3Nlci5iYXJ0LnNrL2RpclwiICsgdXJsQWRyZXNzKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXIgPSByZXNwb25zZS5kYXRhLmRpcjtcbiAgICAgICAgICAgICAgICB0aGlzLmRpcnNfZGF0YSA9IHJlc3BvbnNlLmRhdGEuZGlycztcblxuICAgICAgICAgICAgICAgIHRoaXMuZmlsZXNfZGF0YSA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGZpbGUgb2YgcmVzcG9uc2UuZGF0YS5maWxlcykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGVzX2RhdGEucHVzaChuZXcgRmlsZShmaWxlKSk7XG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pXG4gICAgfTtcbn1cblxuY2xhc3MgRmlsZSB7XG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgICAgICBhbmd1bGFyLm1lcmdlKHRoaXMsIGRhdGEpO1xuICAgIH1cblxuICAgIGdldFR5cGVOYW1lKGdldEljb24gPSBmYWxzZSkge1xuICAgICAgICBmb3IgKGxldCB0eXBlTmFtZSBpbiBUWVBFUykge1xuICAgICAgICAgICAgbGV0IHR5cGVPYmogPSBUWVBFU1t0eXBlTmFtZV07XG4gICAgICAgICAgICBpZiAoYW5ndWxhci5pc0RlZmluZWQodHlwZU9iai5saXN0KSkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHR5cGUgb2YgdHlwZU9iai5saXN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09IHRoaXMudHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdldEljb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYW5ndWxhci5pc0RlZmluZWQodHlwZU9iai5pbWFnZSkgJiYgdHlwZU9iai5pbWFnZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50aHVtYl9saW5rO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhbmd1bGFyLmlzRGVmaW5lZCh0eXBlT2JqLmljb24pID8gdHlwZU9iai5pY29uIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0eXBlTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGdldCBuaWNlVHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VHlwZU5hbWUoKSA/IHRoaXMuZ2V0VHlwZU5hbWUoKSA6ICdhbnknO1xuICAgIH1cblxuICAgIGdldCBpY29uKCkge1xuICAgICAgICBsZXQgaWNvbiA9IHRoaXMuZ2V0VHlwZU5hbWUodHJ1ZSk7XG4gICAgICAgIHJldHVybiBpY29uID8gaWNvbiA6IFwiaW1nL3BsYWluLnBuZ1wiXG4gICAgfVxufSIsInJlcXVpcmUoJy4vdGVtcGxhdGVzJyk7XG5tb2R1bGUuZXhwb3J0cyA9ICd0ZW1wbGF0ZXMnOyIsImFuZ3VsYXIubW9kdWxlKFwidGVtcGxhdGVzXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHskdGVtcGxhdGVDYWNoZS5wdXQoXCJhcHBsaWNhdGlvbi1yb290L2FwcGxpY2F0aW9uLnJvb3QudHBsLmh0bWxcIixcIjxkaXYgaWQ9XFxcIm9rbm9cXFwiPlxcblxcbiAgICA8bGVmdC1tZW51PjwvbGVmdC1tZW51PlxcblxcbiAgICA8ZGl2IGlkPVxcXCJvYnNhaFxcXCI+XFxuICAgICAgICA8ZGl2IGlkPVxcXCJoZWFkZXIyXFxcIj5cXG4gICAgICAgICAgICA8aDI+RmlsZXMgLyBJbWFnZXM8L2gyPlxcbiAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICA8ZGl2IHN0eWxlPVxcXCJtYXJnaW4tbGVmdDoyMHB4OyBtYXJnaW4tcmlnaHQ6IDMwcHhcXFwiPlxcblxcbiAgICAgICAgICAgIDxkaXItcmV0dXJuPjwvZGlyLXJldHVybj5cXG5cXG4gICAgICAgICAgICA8ZGlyLWJhc2U+PC9kaXItYmFzZT5cXG5cXG4gICAgICAgICAgICA8ZmlsZT48L2ZpbGU+XFxuICAgICAgICA8L2Rpdj5cXG5cXG4gICAgPC9kaXY+XFxuXFxuPC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiZmlsZS9maWxlLnRwbC5odG1sXCIsXCI8ZGl2IGNsYXNzPVxcXCJpY29uXFxcIiBuZy1yZXBlYXQ9XFxcImZpbGUgaW4gJGN0cmwubWVkaWFTZXJ2aWNlLmZpbGVzX2RhdGFcXFwiPlxcbiAgICA8IS0tPGltZyBjbGFzcz1cXFwiaW1nX3BpY3R1cmVcXFwiIHNyYz1cXFwie3tmaWxlLnRodW1iX2xpbmt9fVxcXCI+LS0+XFxuICAgIDxpbWcgY2xhc3M9XFxcImltZ19waWN0dXJlXFxcIiBuZy1zcmM9XFxcInt7ZmlsZS5pY29ufX1cXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJuYXpvdl9zdWJvcnVcXFwiPnt7ZmlsZS5uYW1lfX08L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwidHlwX3N1Ym9ydVxcXCI+XFxuICAgICAgICA8cD57e2ZpbGUubmljZVR5cGV9fTwvcD5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcInZlbGtvc3Rfc3Vib3J1XFxcIj5cXG4gICAgICAgIDxwPnt7ZmlsZS5zaXplfX08L3A+XFxuICAgIDwvZGl2PlxcbjwvZGl2PlwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImRpci1iYXNlL2Rpci5iYXNlLnRwbC5odG1sXCIsXCI8ZGl2IGNsYXNzPVxcXCJpY29uXFxcIiBuZy1yZXBlYXQ9XFxcImRpciBpbiAkY3RybC5tZWRpYVNlcnZpY2UuZGlyc19kYXRhXFxcIiBuZy1jbGljaz1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLmxvYWREaXIoZGlyKVxcXCI+XFxuICAgIDxpbWcgY2xhc3M9XFxcImltZ19pY29uXFxcIiBzcmM9XFxcImltZy9wcmllY2lub2sucG5nXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwibmF6b3Zfc3Vib3J1XFxcIj57e2Rpci5uYW1lfX08L2Rpdj5cXG48L2Rpdj5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJkaXItcmV0dXJuL2Rpci5yZXR1cm4udHBsLmh0bWxcIixcIjxkaXYgY2xhc3M9XFxcImljb25cXFwiIG5nLXNob3c9XFxcIiRjdHJsLm1lZGlhU2VydmljZS5kaXJcXFwiIG5nLWNsaWNrPVxcXCIkY3RybC5tZWRpYVNlcnZpY2UubG9hZERpcigkY3RybC5tZWRpYVNlcnZpY2UuZGlyLCB0cnVlKVxcXCI+XFxuICAgIDxpbWcgY2xhc3M9XFxcImltZ19pY29uXFxcIiBzcmM9XFxcImltZy9hZHJlc2FyLnBuZ1xcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcIm5hem92X3N1Ym9ydVxcXCI+TmFkcmFkZW55IGFkcmVzYXI8L2Rpdj5cXG48L2Rpdj5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJsZWZ0LW1lbnUvbGVmdC5tZW51LnRwbC5odG1sXCIsXCI8ZGl2IGlkPVxcXCJsZWZ0X21lbnVcXFwiPlxcbiAgICA8dWw+XFxuICAgICAgICA8bGkgbmctc2hvdz1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLmRpclxcXCIgbmctY2xpY2s9XFxcIiRjdHJsLm1lZGlhU2VydmljZS5sb2FkRGlyKCRjdHJsLm1lZGlhU2VydmljZS5kaXIsIHRydWUpXFxcIiBzdHlsZT1cXFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMThweDtcXFwiPk5hZHJhZGVueSBhZHJlc2FyPC9saT5cXG4gICAgICAgIDxsaSBuZy1yZXBlYXQ9XFxcImRpciBpbiAkY3RybC5tZWRpYVNlcnZpY2UuZGlyc19kYXRhXFxcIiBuZy1jbGljaz1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLmxvYWREaXIoZGlyKVxcXCIgPnt7ZGlyLm5hbWV9fTwvbGk+XFxuICAgIDwvdWw+XFxuPC9kaXY+XCIpO31dKTsiXX0=
