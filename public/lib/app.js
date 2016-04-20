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

var _stvorec = require('./app/components/stvorec/stvorec');

var _stvorec2 = _interopRequireDefault(_stvorec);

var _media = require('./app/media.service');

var _media2 = _interopRequireDefault(_media);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

angular.module('browser', [_index2.default, _application.module]).component('applicationRoot', _application2.default).component('leftMenu', _left2.default).component('dirReturn', _dir2.default).component('dirBase', _dir4.default).component('file', _file2.default).component('stvorec', _stvorec2.default).service('mediaService', _media2.default);

},{"./app/components/application-root/application.root":"E:\\media-browser\\src\\app\\components\\application-root\\application.root.js","./app/components/dir-base/dir.base":"E:\\media-browser\\src\\app\\components\\dir-base\\dir.base.js","./app/components/dir-return/dir.return":"E:\\media-browser\\src\\app\\components\\dir-return\\dir.return.js","./app/components/file/file":"E:\\media-browser\\src\\app\\components\\file\\file.js","./app/components/left-menu/left.menu":"E:\\media-browser\\src\\app\\components\\left-menu\\left.menu.js","./app/components/stvorec/stvorec":"E:\\media-browser\\src\\app\\components\\stvorec\\stvorec.js","./app/media.service":"E:\\media-browser\\src\\app\\media.service.js","./tpl/index":"E:\\media-browser\\src\\tpl\\index.js"}],"E:\\media-browser\\src\\app\\components\\application-root\\application.root.js":[function(require,module,exports){
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

},{}],"E:\\media-browser\\src\\app\\components\\stvorec\\stvorec.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Stvorec = function () {

    // @ngInject

    function Stvorec($http, mediaService) {
        _classCallCheck(this, Stvorec);

        this.$http = $http;
        this.mediaService = mediaService;
    }

    _createClass(Stvorec, [{
        key: 'isImage',
        get: function get() {
            return this.mediaService.selectedFile ? true : false;
        }
    }]);

    return Stvorec;
}();

exports.default = {
    controller: Stvorec,
    templateUrl: 'stvorec/stvorec.tpl.html'
};

},{}],"E:\\media-browser\\src\\app\\media.service.js":[function(require,module,exports){
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
    }, {
        key: 'loadFile',
        value: function loadFile() {
            var fileDirectory = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

            if (fileDirectory.thumb_link) this.selectedFile = fileDirectory.download_link;else window.location = fileDirectory.download_link;
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

},{}],"E:\\media-browser\\src\\tpl\\index.js":[function(require,module,exports){
'use strict';

require('./templates');
module.exports = 'templates';

},{"./templates":"E:\\media-browser\\src\\tpl\\templates.js"}],"E:\\media-browser\\src\\tpl\\templates.js":[function(require,module,exports){
"use strict";

angular.module("templates", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("application-root/application.root.tpl.html", "<div id=\"okno\">\r\n\r\n    <left-menu></left-menu>\r\n\r\n    <div id=\"obsah\">\r\n        <div id=\"header2\">\r\n            <h2>Files / Images</h2>\r\n        </div>\r\n\r\n        <div style=\"margin-left:20px; margin-right: 30px\">\r\n\r\n            <dir-return></dir-return>\r\n\r\n            <dir-base></dir-base>\r\n\r\n            <file></file>\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>");
  $templateCache.put("dir-base/dir.base.tpl.html", "<div class=\"icon\" ng-repeat=\"dir in $ctrl.mediaService.dirs_data\" ng-click=\"$ctrl.mediaService.loadDir(dir)\">\r\n    <img class=\"img_icon\" src=\"img/priecinok.png\">\r\n    <div class=\"nazov_suboru\">{{dir.name}}</div>\r\n</div>");
  $templateCache.put("dir-return/dir.return.tpl.html", "<div class=\"icon\" ng-show=\"$ctrl.mediaService.dir\" ng-click=\"$ctrl.mediaService.loadDir($ctrl.mediaService.dir, true)\">\r\n    <img class=\"img_icon\" src=\"img/adresar.png\">\r\n    <div class=\"nazov_suboru\">Nadradeny adresar</div>\r\n</div>");
  $templateCache.put("file/file.tpl.html", "<div class=\"icon\" ng-repeat=\"file in $ctrl.mediaService.files_data\" ng-click=\"$ctrl.mediaService.loadFile(file)\">\r\n    <img class=\"img_picture\" ng-src=\"{{file.icon}}\">\r\n    <div class=\"nazov_suboru\">{{file.name}}</div>\r\n    <div class=\"typ_suboru\">\r\n        <p>{{file.niceType}}</p>\r\n    </div>\r\n    <div class=\"velkost_suboru\">\r\n        <p>{{file.size}}</p>\r\n    </div>\r\n</div>");
  $templateCache.put("left-menu/left.menu.tpl.html", "<div id=\"left_menu\">\r\n    <ul>\r\n        <li ng-show=\"$ctrl.mediaService.dir\" ng-click=\"$ctrl.mediaService.loadDir($ctrl.mediaService.dir, true)\" style=\"font-weight: bold; font-size: 18px;\">Nadradeny adresar</li>\r\n        <li ng-repeat=\"dir in $ctrl.mediaService.dirs_data\" ng-click=\"$ctrl.mediaService.loadDir(dir)\" >{{dir.name}}</li>\r\n    </ul>\r\n</div>");
  $templateCache.put("stvorec/stvorec.tpl.html", "<div id=\"stvorec\">\r\n    <img style=\"max-height: 25vw; max-width: 25vw;\" ng-if=\"$ctrl.isImage\" ng-src=\"{{$ctrl.mediaService.selectedFile}}\">\r\n</div>");
}]);

},{}]},{},["E:\\media-browser\\src\\app.js"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGFwcC5qcyIsInNyY1xcYXBwXFxjb21wb25lbnRzXFxhcHBsaWNhdGlvbi1yb290XFxhcHBsaWNhdGlvbi5yb290LmpzIiwic3JjXFxhcHBcXGNvbXBvbmVudHNcXGRpci1iYXNlXFxkaXIuYmFzZS5qcyIsInNyY1xcYXBwXFxjb21wb25lbnRzXFxkaXItcmV0dXJuXFxkaXIucmV0dXJuLmpzIiwic3JjXFxhcHBcXGNvbXBvbmVudHNcXGZpbGVcXGZpbGUuanMiLCJzcmNcXGFwcFxcY29tcG9uZW50c1xcbGVmdC1tZW51XFxsZWZ0Lm1lbnUuanMiLCJzcmNcXGFwcFxcY29tcG9uZW50c1xcc3R2b3JlY1xcc3R2b3JlYy5qcyIsInNyY1xcYXBwXFxtZWRpYS5zZXJ2aWNlLmpzIiwic3JjXFx0cGxcXGluZGV4LmpzIiwic3JjXFx0cGxcXHRlbXBsYXRlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7QUFFQTs7OztBQUVBOzs7O0FBRUE7Ozs7QUFFQTs7OztBQUVBOzs7O0FBRUE7Ozs7QUFFQTs7Ozs7O0FBR0EsUUFBUSxNQUFSLENBQWUsU0FBZixFQUEwQixzQ0FBMUIsRUFDSyxTQURMLENBQ2UsaUJBRGYseUJBRUssU0FGTCxDQUVlLFVBRmYsa0JBR0ssU0FITCxDQUdlLFdBSGYsaUJBSUssU0FKTCxDQUllLFNBSmYsaUJBS0ssU0FMTCxDQUtlLE1BTGYsa0JBTUssU0FOTCxDQU1lLFNBTmYscUJBUUssT0FSTCxDQVFhLGNBUmI7Ozs7Ozs7Ozs7O0FDakJPLElBQU0sVUFBUyxZQUFUOzs7QUFFYixRQUFRLE1BQVIsQ0FBZSxPQUFmLEVBQXVCLEVBQXZCOztJQUVNOzs7QUFHRixTQUhFLE1BR0YsQ0FBWSxLQUFaLEVBQW1CLFlBQW5CLEVBQWlDOzBCQUgvQixRQUcrQjs7QUFDN0IsU0FBSyxLQUFMLEdBQWEsS0FBYixDQUQ2QjtBQUU3QixTQUFL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Q0FBbUIsZ0NBQW5CLEVBQW9ELDRQQUFwRCxFQUZnRjtBQUdoRixpQkFBZSxHQUFmLENBQW1CLG9CQUFuQixFQUF3Qyw4WkFBeEMsRUFIZ0Y7QUFJaEYsaUJBQWUsR0FBZixDQUFtQiw4QkFBbkIsRUFBa0QseVhBQWxELEVBSmdGO0FBS2hGLGlCQUFlLEdBQWYsQ0FBbUIsMEJBQW5CLEVBQThDLGlLQUE5QyxFQUxnRjtDQUF6QixDQUF2RCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi90cGwvaW5kZXgnO1xyXG5cclxuaW1wb3J0IHJvb3QsIHttb2R1bGV9IGZyb20gJy4vYXBwL2NvbXBvbmVudHMvYXBwbGljYXRpb24tcm9vdC9hcHBsaWNhdGlvbi5yb290JztcclxuXHJcbmltcG9ydCBsZWZ0TWVudSBmcm9tICcuL2FwcC9jb21wb25lbnRzL2xlZnQtbWVudS9sZWZ0Lm1lbnUnO1xyXG5cclxuaW1wb3J0IGRpclJldHVybiBmcm9tICcuL2FwcC9jb21wb25lbnRzL2Rpci1yZXR1cm4vZGlyLnJldHVybic7XHJcblxyXG5pbXBvcnQgZGlyQmFzZSBmcm9tICcuL2FwcC9jb21wb25lbnRzL2Rpci1iYXNlL2Rpci5iYXNlJztcclxuXHJcbmltcG9ydCBmaWxlIGZyb20gJy4vYXBwL2NvbXBvbmVudHMvZmlsZS9maWxlJztcclxuXHJcbmltcG9ydCBzdHZvcmVjIGZyb20gJy4vYXBwL2NvbXBvbmVudHMvc3R2b3JlYy9zdHZvcmVjJztcclxuXHJcbmltcG9ydCBNZWRpYVNlcnZpY2UgZnJvbSAnLi9hcHAvbWVkaWEuc2VydmljZSc7XHJcblxyXG5cclxuYW5ndWxhci5tb2R1bGUoJ2Jyb3dzZXInLCBbdGVtcGxhdGUsIG1vZHVsZV0pXHJcbiAgICAuY29tcG9uZW50KCdhcHBsaWNhdGlvblJvb3QnLCByb290KVxyXG4gICAgLmNvbXBvbmVudCgnbGVmdE1lbnUnLCBsZWZ0TWVudSlcclxuICAgIC5jb21wb25lbnQoJ2RpclJldHVybicsIGRpclJldHVybilcclxuICAgIC5jb21wb25lbnQoJ2RpckJhc2UnLCBkaXJCYXNlKVxyXG4gICAgLmNvbXBvbmVudCgnZmlsZScsIGZpbGUpXHJcbiAgICAuY29tcG9uZW50KCdzdHZvcmVjJywgc3R2b3JlYylcclxuXHJcbiAgICAuc2VydmljZSgnbWVkaWFTZXJ2aWNlJywgTWVkaWFTZXJ2aWNlKVxyXG47IiwiZXhwb3J0IGNvbnN0IG1vZHVsZSA9ICdjb21wb25lbnRzJztcclxuXHJcbmFuZ3VsYXIubW9kdWxlKG1vZHVsZSwgW10pO1xyXG5cclxuY2xhc3MgTXlDdHJsIHtcclxuXHJcbiAgICAvLyBAbmdJbmplY3RcclxuICAgIGNvbnN0cnVjdG9yKCRodHRwLCBtZWRpYVNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XHJcbiAgICAgICAgdGhpcy5tZWRpYVNlcnZpY2UgPSBtZWRpYVNlcnZpY2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGNvbnRyb2xsZXI6IE15Q3RybCxcclxuICAgIHRlbXBsYXRlVXJsOiAnYXBwbGljYXRpb24tcm9vdC9hcHBsaWNhdGlvbi5yb290LnRwbC5odG1sJ1xyXG59OyIsImNsYXNzIERpckJhc2Uge1xyXG5cclxuICAgIC8vIEBuZ0luamVjdFxyXG4gICAgY29uc3RydWN0b3IoJGh0dHAsIG1lZGlhU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgICAgICB0aGlzLm1lZGlhU2VydmljZSA9IG1lZGlhU2VydmljZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgY29udHJvbGxlcjogRGlyQmFzZSxcclxuICAgIHRlbXBsYXRlVXJsOiAnZGlyLWJhc2UvZGlyLmJhc2UudHBsLmh0bWwnXHJcbn0iLCJjbGFzcyBEaXJSZXR1cm4ge1xyXG5cclxuICAgIC8vIEBuZ0luamVjdFxyXG4gICAgY29uc3RydWN0b3IoJGh0dHAsIG1lZGlhU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgICAgICB0aGlzLm1lZGlhU2VydmljZSA9IG1lZGlhU2VydmljZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgY29udHJvbGxlcjogRGlyUmV0dXJuLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdkaXItcmV0dXJuL2Rpci5yZXR1cm4udHBsLmh0bWwnXHJcbn0iLCJjbGFzcyBGaWxlIHtcclxuXHJcbiAgICAvLyBAbmdJbmplY3RcclxuICAgIGNvbnN0cnVjdG9yKCRodHRwLCBtZWRpYVNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XHJcbiAgICAgICAgdGhpcy5tZWRpYVNlcnZpY2UgPSBtZWRpYVNlcnZpY2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0e1xyXG4gICAgY29udHJvbGxlcjogRmlsZSxcclxuICAgIHRlbXBsYXRlVXJsOiAnZmlsZS9maWxlLnRwbC5odG1sJ1xyXG59IiwiY2xhc3MgTGVmdE1lbnUge1xyXG5cclxuICAgIC8vIEBuZ0luamVjdFxyXG4gICAgY29uc3RydWN0b3IoJGh0dHAsIG1lZGlhU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgICAgICB0aGlzLm1lZGlhU2VydmljZSA9IG1lZGlhU2VydmljZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgY29udHJvbGxlcjogTGVmdE1lbnUsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2xlZnQtbWVudS9sZWZ0Lm1lbnUudHBsLmh0bWwnXHJcbn0iLCJjbGFzcyBTdHZvcmVje1xyXG5cclxuICAgIC8vIEBuZ0luamVjdFxyXG4gICAgY29uc3RydWN0b3IoJGh0dHAsIG1lZGlhU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgICAgICB0aGlzLm1lZGlhU2VydmljZSA9IG1lZGlhU2VydmljZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaXNJbWFnZSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1lZGlhU2VydmljZS5zZWxlY3RlZEZpbGUgPyB0cnVlIDogZmFsc2U7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBjb250cm9sbGVyOiBTdHZvcmVjLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdzdHZvcmVjL3N0dm9yZWMudHBsLmh0bWwnXHJcbn0iLCJjb25zdCBUWVBFUyA9IHtcclxuICAgICdQTkcnOiB7XHJcbiAgICAgICAgbGlzdDogWydpbWFnZS9wbmcnXSxcclxuICAgICAgICBpbWFnZTogdHJ1ZVxyXG4gICAgfSxcclxuICAgICdKUEcnOiB7XHJcbiAgICAgICAgbGlzdDogWydpbWFnZS9qcGVnJywgJ2ltYWdlL3BqcGVnJ10sXHJcbiAgICAgICAgaW1hZ2U6IHRydWVcclxuICAgIH0sXHJcbiAgICAnR0lGJzoge1xyXG4gICAgICAgIGxpc3Q6IFsnaW1hZ2UvZ2lmJ10sXHJcbiAgICAgICAgaW1hZ2U6IHRydWVcclxuICAgIH0sXHJcbiAgICAnQk1QJzoge1xyXG4gICAgICAgIGxpc3Q6IFsnaW1hZ2UvYm1wJ10sXHJcbiAgICAgICAgaW1hZ2U6IHRydWVcclxuICAgIH0sXHJcbiAgICAnVElGRic6IFsnaW1hZ2UvaWVmJywgJ2ltYWdlL3RpZmYnXSxcclxuICAgICdUWFQnOiB7XHJcbiAgICAgICAgbGlzdDogWydhcHBsaWNhdGlvbi9wbGFpbicsICd0ZXh0L3BsYWluJ10sXHJcbiAgICAgICAgaWNvbjogJ2ltZy90eHQucG5nJ1xyXG4gICAgfSxcclxuICAgICdQREYnOiB7XHJcbiAgICAgICAgbGlzdDogW1wiYXBwbGljYXRpb24vcGRmXCJdLFxyXG4gICAgICAgIGljb246ICdpbWcvcGRmLnBuZydcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lZGlhU2VydmljZSB7XHJcblxyXG4gICAgLy8gQG5nSW5qZWN0XHJcbiAgICBjb25zdHJ1Y3RvcigkaHR0cCkge1xyXG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuXHJcbiAgICAgICAgdGhpcy5kaXIgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZGlyc19kYXRhID0gW107XHJcbiAgICAgICAgdGhpcy5maWxlc19kYXRhID0gW107XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEZpbGUgPSBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLmxvYWREaXIoKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcblxyXG4gICAgbG9hZERpcihkaXJlY3RvcnkgPSBudWxsLCBpc1JldHVybiA9IGZhbHNlKSB7XHJcbiAgICAgICAgbGV0IHVybEFkcmVzcyA9ICcnO1xyXG4gICAgICAgIGlmIChkaXJlY3RvcnkpIHtcclxuICAgICAgICAgICAgdXJsQWRyZXNzID0gZGlyZWN0b3J5LmxvY2F0aW9uICsgJy8nICsgZGlyZWN0b3J5Lm5hbWU7XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNSZXR1cm4pIHtcclxuICAgICAgICAgICAgICAgIHVybEFkcmVzcyA9IGRpcmVjdG9yeS5sb2NhdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy4kaHR0cC5nZXQoXCJodHRwOi8vbWVkaWFicm93c2VyLmJhcnQuc2svZGlyXCIgKyB1cmxBZHJlc3MpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXIgPSByZXNwb25zZS5kYXRhLmRpcjtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlyc19kYXRhID0gcmVzcG9uc2UuZGF0YS5kaXJzO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsZXNfZGF0YSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgZmlsZSBvZiByZXNwb25zZS5kYXRhLmZpbGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlc19kYXRhLnB1c2gobmV3IEZpbGUoZmlsZSkpO1xyXG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSlcclxuICAgIH07XHJcblxyXG4gICAgbG9hZEZpbGUoZmlsZURpcmVjdG9yeT1udWxsKXtcclxuICAgICAgICBpZihmaWxlRGlyZWN0b3J5LnRodW1iX2xpbmspXHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRGaWxlPWZpbGVEaXJlY3RvcnkuZG93bmxvYWRfbGluaztcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbj1maWxlRGlyZWN0b3J5LmRvd25sb2FkX2xpbms7XHJcblxyXG4gICAgfTtcclxufVxyXG5cclxuXHJcbmNsYXNzIEZpbGUge1xyXG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xyXG4gICAgICAgIGFuZ3VsYXIubWVyZ2UodGhpcywgZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VHlwZU5hbWUoZ2V0SWNvbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgZm9yIChsZXQgdHlwZU5hbWUgaW4gVFlQRVMpIHtcclxuICAgICAgICAgICAgbGV0IHR5cGVPYmogPSBUWVBFU1t0eXBlTmFtZV07XHJcbiAgICAgICAgICAgIGlmIChhbmd1bGFyLmlzRGVmaW5lZCh0eXBlT2JqLmxpc3QpKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB0eXBlIG9mIHR5cGVPYmoubGlzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09IHRoaXMudHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2V0SWNvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFuZ3VsYXIuaXNEZWZpbmVkKHR5cGVPYmouaW1hZ2UpICYmIHR5cGVPYmouaW1hZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50aHVtYl9saW5rO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYW5ndWxhci5pc0RlZmluZWQodHlwZU9iai5pY29uKSA/IHR5cGVPYmouaWNvbiA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHlwZU5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBuaWNlVHlwZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRUeXBlTmFtZSgpID8gdGhpcy5nZXRUeXBlTmFtZSgpIDogJ2FueSc7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGljb24oKSB7XHJcbiAgICAgICAgbGV0IGljb24gPSB0aGlzLmdldFR5cGVOYW1lKHRydWUpO1xyXG4gICAgICAgIHJldHVybiBpY29uID8gaWNvbiA6IFwiaW1nL3BsYWluLnBuZ1wiXHJcbiAgICB9XHJcblxyXG5cclxufSIsInJlcXVpcmUoJy4vdGVtcGxhdGVzJyk7XHJcbm1vZHVsZS5leHBvcnRzID0gJ3RlbXBsYXRlcyc7IiwiYW5ndWxhci5tb2R1bGUoXCJ0ZW1wbGF0ZXNcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkgeyR0ZW1wbGF0ZUNhY2hlLnB1dChcImFwcGxpY2F0aW9uLXJvb3QvYXBwbGljYXRpb24ucm9vdC50cGwuaHRtbFwiLFwiPGRpdiBpZD1cXFwib2tub1xcXCI+XFxyXFxuXFxyXFxuICAgIDxsZWZ0LW1lbnU+PC9sZWZ0LW1lbnU+XFxyXFxuXFxyXFxuICAgIDxkaXYgaWQ9XFxcIm9ic2FoXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgaWQ9XFxcImhlYWRlcjJcXFwiPlxcclxcbiAgICAgICAgICAgIDxoMj5GaWxlcyAvIEltYWdlczwvaDI+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgc3R5bGU9XFxcIm1hcmdpbi1sZWZ0OjIwcHg7IG1hcmdpbi1yaWdodDogMzBweFxcXCI+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPGRpci1yZXR1cm4+PC9kaXItcmV0dXJuPlxcclxcblxcclxcbiAgICAgICAgICAgIDxkaXItYmFzZT48L2Rpci1iYXNlPlxcclxcblxcclxcbiAgICAgICAgICAgIDxmaWxlPjwvZmlsZT5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG48L2Rpdj5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJkaXItYmFzZS9kaXIuYmFzZS50cGwuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXFwiaWNvblxcXCIgbmctcmVwZWF0PVxcXCJkaXIgaW4gJGN0cmwubWVkaWFTZXJ2aWNlLmRpcnNfZGF0YVxcXCIgbmctY2xpY2s9XFxcIiRjdHJsLm1lZGlhU2VydmljZS5sb2FkRGlyKGRpcilcXFwiPlxcclxcbiAgICA8aW1nIGNsYXNzPVxcXCJpbWdfaWNvblxcXCIgc3JjPVxcXCJpbWcvcHJpZWNpbm9rLnBuZ1xcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm5hem92X3N1Ym9ydVxcXCI+e3tkaXIubmFtZX19PC9kaXY+XFxyXFxuPC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiZGlyLXJldHVybi9kaXIucmV0dXJuLnRwbC5odG1sXCIsXCI8ZGl2IGNsYXNzPVxcXCJpY29uXFxcIiBuZy1zaG93PVxcXCIkY3RybC5tZWRpYVNlcnZpY2UuZGlyXFxcIiBuZy1jbGljaz1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLmxvYWREaXIoJGN0cmwubWVkaWFTZXJ2aWNlLmRpciwgdHJ1ZSlcXFwiPlxcclxcbiAgICA8aW1nIGNsYXNzPVxcXCJpbWdfaWNvblxcXCIgc3JjPVxcXCJpbWcvYWRyZXNhci5wbmdcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJuYXpvdl9zdWJvcnVcXFwiPk5hZHJhZGVueSBhZHJlc2FyPC9kaXY+XFxyXFxuPC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiZmlsZS9maWxlLnRwbC5odG1sXCIsXCI8ZGl2IGNsYXNzPVxcXCJpY29uXFxcIiBuZy1yZXBlYXQ9XFxcImZpbGUgaW4gJGN0cmwubWVkaWFTZXJ2aWNlLmZpbGVzX2RhdGFcXFwiIG5nLWNsaWNrPVxcXCIkY3RybC5tZWRpYVNlcnZpY2UubG9hZEZpbGUoZmlsZSlcXFwiPlxcclxcbiAgICA8aW1nIGNsYXNzPVxcXCJpbWdfcGljdHVyZVxcXCIgbmctc3JjPVxcXCJ7e2ZpbGUuaWNvbn19XFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibmF6b3Zfc3Vib3J1XFxcIj57e2ZpbGUubmFtZX19PC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInR5cF9zdWJvcnVcXFwiPlxcclxcbiAgICAgICAgPHA+e3tmaWxlLm5pY2VUeXBlfX08L3A+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ2ZWxrb3N0X3N1Ym9ydVxcXCI+XFxyXFxuICAgICAgICA8cD57e2ZpbGUuc2l6ZX19PC9wPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJsZWZ0LW1lbnUvbGVmdC5tZW51LnRwbC5odG1sXCIsXCI8ZGl2IGlkPVxcXCJsZWZ0X21lbnVcXFwiPlxcclxcbiAgICA8dWw+XFxyXFxuICAgICAgICA8bGkgbmctc2hvdz1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLmRpclxcXCIgbmctY2xpY2s9XFxcIiRjdHJsLm1lZGlhU2VydmljZS5sb2FkRGlyKCRjdHJsLm1lZGlhU2VydmljZS5kaXIsIHRydWUpXFxcIiBzdHlsZT1cXFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMThweDtcXFwiPk5hZHJhZGVueSBhZHJlc2FyPC9saT5cXHJcXG4gICAgICAgIDxsaSBuZy1yZXBlYXQ9XFxcImRpciBpbiAkY3RybC5tZWRpYVNlcnZpY2UuZGlyc19kYXRhXFxcIiBuZy1jbGljaz1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLmxvYWREaXIoZGlyKVxcXCIgPnt7ZGlyLm5hbWV9fTwvbGk+XFxyXFxuICAgIDwvdWw+XFxyXFxuPC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwic3R2b3JlYy9zdHZvcmVjLnRwbC5odG1sXCIsXCI8ZGl2IGlkPVxcXCJzdHZvcmVjXFxcIj5cXHJcXG4gICAgPGltZyBzdHlsZT1cXFwibWF4LWhlaWdodDogMjV2dzsgbWF4LXdpZHRoOiAyNXZ3O1xcXCIgbmctaWY9XFxcIiRjdHJsLmlzSW1hZ2VcXFwiIG5nLXNyYz1cXFwie3skY3RybC5tZWRpYVNlcnZpY2Uuc2VsZWN0ZWRGaWxlfX1cXFwiPlxcclxcbjwvZGl2PlwiKTt9XSk7Il19
