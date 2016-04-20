(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app.js":[function(require,module,exports){
'use strict';

var _index = require('./tpl/index');

var _index2 = _interopRequireDefault(_index);

var _uvod = require('./app/components/uvod/uvod');

var _uvod2 = _interopRequireDefault(_uvod);

var _media = require('./app/components/media-browser/media.browser');

var _media2 = _interopRequireDefault(_media);

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

var _media3 = require('./app/media.service');

var _media4 = _interopRequireDefault(_media3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

angular.module('browser', [_index2.default]).component('uvod', _uvod2.default).component('mediaBrowser', _media2.default).component('applicationRoot', _application2.default).component('leftMenu', _left2.default).component('dirReturn', _dir2.default).component('dirBase', _dir4.default).component('file', _file2.default).component('stvorec', _stvorec2.default).service('mediaService', _media4.default);

},{"./app/components/application-root/application.root":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/components/application-root/application.root.js","./app/components/dir-base/dir.base":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/components/dir-base/dir.base.js","./app/components/dir-return/dir.return":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/components/dir-return/dir.return.js","./app/components/file/file":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/components/file/file.js","./app/components/left-menu/left.menu":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/components/left-menu/left.menu.js","./app/components/media-browser/media.browser":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/components/media-browser/media.browser.js","./app/components/stvorec/stvorec":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/components/stvorec/stvorec.js","./app/components/uvod/uvod":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/components/uvod/uvod.js","./app/media.service":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/media.service.js","./tpl/index":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/tpl/index.js"}],"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/components/application-root/application.root.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ApplicationRoot =

// @ngInject
function ApplicationRoot($http, mediaService) {
    _classCallCheck(this, ApplicationRoot);

    this.$http = $http;
    this.mediaService = mediaService;
};

exports.default = {
    controller: ApplicationRoot,
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

},{}],"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/components/media-browser/media.browser.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MediaBrowser =

// @ngInject
function MediaBrowser($http, mediaService) {
    _classCallCheck(this, MediaBrowser);

    this.$http = $http;
    this.mediaService = mediaService;
};

exports.default = {
    controller: MediaBrowser,
    templateUrl: 'media-browser/media.browser.tpl.html'
};

},{}],"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/components/stvorec/stvorec.js":[function(require,module,exports){
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

},{}],"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/components/uvod/uvod.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Uvod =

// @ngInject
function Uvod($http, mediaService) {
    _classCallCheck(this, Uvod);

    this.$http = $http;
    this.mediaService = mediaService;
};

exports.default = {
    controller: Uvod,
    templateUrl: 'uvod/uvod.tpl.html'
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

    function MediaService($http, $window) {
        _classCallCheck(this, MediaService);

        this.$http = $http;
        this.$window = $window;

        this.dir = null;
        this.dirs_data = [];
        this.files_data = [];

        this.selectedFile = null;

        this.showDialog = false;
        this.showLeftMenu = true;

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

            if (fileDirectory.thumb_link) this.selectedFile = fileDirectory.download_link;else {
                this.$window.open(fileDirectory.download_link, '_blank');
            }
        }
    }, {
        key: 'toggleLeftMenu',
        value: function toggleLeftMenu() {
            this.showLeftMenu = !this.showLeftMenu;
        }
    }, {
        key: 'toggleDialog',
        value: function toggleDialog() {
            this.showDialog = !this.showDialog;
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
  $templateCache.put("dir-base/dir.base.tpl.html", "<div class=\"icon\" ng-repeat=\"dir in $ctrl.mediaService.dirs_data\" ng-click=\"$ctrl.mediaService.loadDir(dir)\">\n    <img class=\"img_icon\" src=\"img/priecinok.png\">\n    <div class=\"nazov_suboru\">{{dir.name}}</div>\n</div>");
  $templateCache.put("dir-return/dir.return.tpl.html", "<div class=\"icon\" ng-show=\"$ctrl.mediaService.dir\" ng-click=\"$ctrl.mediaService.loadDir($ctrl.mediaService.dir, true)\">\n    <img class=\"img_icon\" src=\"img/adresar.png\">\n    <div class=\"nazov_suboru\">Nadradeny adresar</div>\n</div>");
  $templateCache.put("application-root/application.root.tpl.html", "<div id=\"okno\">\n\n    <left-menu ng-if=\"$ctrl.mediaService.showLeftMenu\"></left-menu>\n\n    <div id=\"obsah\" ng-class=\"{\'full\': !$ctrl.mediaService.showLeftMenu}\">\n        <div id=\"header2\">\n            <h2>Files / Images</h2>\n        </div>\n\n        <div style=\"margin-left:20px; margin-right: 30px\">\n\n            <dir-return></dir-return>\n\n            <dir-base></dir-base>\n\n            <file></file>\n        </div>\n\n    </div>\n\n</div>");
  $templateCache.put("file/file.tpl.html", "<div class=\"icon\" ng-repeat=\"file in $ctrl.mediaService.files_data\" ng-click=\"$ctrl.mediaService.loadFile(file)\">\n    <img class=\"img_picture\" ng-src=\"{{file.icon}}\">\n    <div class=\"nazov_suboru\">{{file.name}}</div>\n    <div class=\"typ_suboru\">\n        <p>{{file.niceType}}</p>\n    </div>\n    <div class=\"velkost_suboru\">\n        <p>{{file.size}}</p>\n    </div>\n</div>");
  $templateCache.put("left-menu/left.menu.tpl.html", "<div id=\"left_menu\">\n    <ul>\n        <li ng-show=\"$ctrl.mediaService.dir\" ng-click=\"$ctrl.mediaService.loadDir($ctrl.mediaService.dir, true)\" style=\"font-weight: bold; font-size: 18px;\">Nadradeny adresar</li>\n        <li ng-repeat=\"dir in $ctrl.mediaService.dirs_data\" ng-click=\"$ctrl.mediaService.loadDir(dir)\" >{{dir.name}}</li>\n    </ul>\n</div>");
  $templateCache.put("media-browser/media.browser.tpl.html", "<div id=\"MediaBrowser\">\n    <div id=\"header1\">\n        <img ng-click=\"$ctrl.mediaService.toggleLeftMenu()\" id=\"menu_icon\" src=\"img/menu.png\" style=\"width:50px; height:100%;float:left; align-self: flex-start;\">\n        <h1>Media Browser</h1>\n        <img id=\"zavri_dialog\"\n             ng-click=\"$ctrl.mediaService.toggleDialog()\"\n             src=\"img/close.png\" style=\"width:40px; height:100%;float:right; align-self: flex-end;\">\n    </div>\n\n    <application-root></application-root>\n</div>");
  $templateCache.put("stvorec/stvorec.tpl.html", "<div id=\"stvorec\">\n    <img style=\"max-height: 25vw; max-width: 25vw;\" ng-if=\"$ctrl.isImage\" ng-src=\"{{$ctrl.mediaService.selectedFile}}\">\n</div>");
  $templateCache.put("uvod/uvod.tpl.html", "<div>\n    <div id=\"uvod\"\n         ng-class=\"{\'halfview\': $ctrl.mediaService.showDialog}\">\n        <stvorec></stvorec>\n\n        <button id=\"zobraz_dialog\"\n                ng-click=\"$ctrl.mediaService.toggleDialog()\"\n                style=\"margin-left:auto;margin-right:auto;display:block; background-color:#46494a;color: white; padding: 5px 5px 5px 5px\">ZOBRAZIT DIALOG\n        </button>\n    </div>\n\n\n    <media-browser ng-if=\"$ctrl.mediaService.showDialog\"></media-browser>\n</div>");
}]);

},{}]},{},["/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app.js"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBwLmpzIiwic3JjL2FwcC9jb21wb25lbnRzL2FwcGxpY2F0aW9uLXJvb3QvYXBwbGljYXRpb24ucm9vdC5qcyIsInNyYy9hcHAvY29tcG9uZW50cy9kaXItYmFzZS9kaXIuYmFzZS5qcyIsInNyYy9hcHAvY29tcG9uZW50cy9kaXItcmV0dXJuL2Rpci5yZXR1cm4uanMiLCJzcmMvYXBwL2NvbXBvbmVudHMvZmlsZS9maWxlLmpzIiwic3JjL2FwcC9jb21wb25lbnRzL2xlZnQtbWVudS9sZWZ0Lm1lbnUuanMiLCJzcmMvYXBwL2NvbXBvbmVudHMvbWVkaWEtYnJvd3Nlci9tZWRpYS5icm93c2VyLmpzIiwic3JjL2FwcC9jb21wb25lbnRzL3N0dm9yZWMvc3R2b3JlYy5qcyIsInNyYy9hcHAvY29tcG9uZW50cy91dm9kL3V2b2QuanMiLCJzcmMvYXBwL21lZGlhLnNlcnZpY2UuanMiLCJzcmMvdHBsL2luZGV4LmpzIiwic3JjL3RwbC90ZW1wbGF0ZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUVBOzs7O0FBRUE7Ozs7QUFFQTs7OztBQUVBOzs7O0FBRUE7Ozs7QUFFQTs7OztBQUVBOzs7Ozs7QUFHQSxRQUFRLE1BQVIsQ0FBZSxTQUFmLEVBQTBCLGlCQUExQixFQUNLLFNBREwsQ0FDZSxNQURmLGtCQUVLLFNBRkwsQ0FFZSxjQUZmLG1CQUdLLFNBSEwsQ0FHZSxpQkFIZix5QkFJSyxTQUpMLENBSWUsVUFKZixrQkFLSyxTQUxMLENBS2UsV0FMZixpQkFNSyxTQU5MLENBTWUsU0FOZixpQkFPSyxTQVBMLENBT2UsTUFQZixrQkFRSyxTQVJMLENBUWUsU0FSZixxQkFVSyxPQVZMLENBVWEsY0FWYjs7Ozs7Ozs7Ozs7SUNwQk07OztBQUdGLFNBSEUsZUFHRixDQUFZLEtBQVosRUFBbUIsWUFBbkIsRUFBaUM7MEJB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OEMsNkpBQTlDLEVBTmdGO0FBT2hGLGlCQUFlLEdBQWYsQ0FBbUIsb0JBQW5CLEVBQXdDLDZmQUF4QyxFQVBnRjtDQUF6QixDQUF2RCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi90cGwvaW5kZXgnO1xuXG5pbXBvcnQgdXZvZCBmcm9tICcuL2FwcC9jb21wb25lbnRzL3V2b2QvdXZvZCc7XG5pbXBvcnQgbWVkaWFCcm93c2VyIGZyb20gJy4vYXBwL2NvbXBvbmVudHMvbWVkaWEtYnJvd3Nlci9tZWRpYS5icm93c2VyJztcblxuaW1wb3J0IHJvb3QgZnJvbSAnLi9hcHAvY29tcG9uZW50cy9hcHBsaWNhdGlvbi1yb290L2FwcGxpY2F0aW9uLnJvb3QnO1xuXG5pbXBvcnQgbGVmdE1lbnUgZnJvbSAnLi9hcHAvY29tcG9uZW50cy9sZWZ0LW1lbnUvbGVmdC5tZW51JztcblxuaW1wb3J0IGRpclJldHVybiBmcm9tICcuL2FwcC9jb21wb25lbnRzL2Rpci1yZXR1cm4vZGlyLnJldHVybic7XG5cbmltcG9ydCBkaXJCYXNlIGZyb20gJy4vYXBwL2NvbXBvbmVudHMvZGlyLWJhc2UvZGlyLmJhc2UnO1xuXG5pbXBvcnQgZmlsZSBmcm9tICcuL2FwcC9jb21wb25lbnRzL2ZpbGUvZmlsZSc7XG5cbmltcG9ydCBzdHZvcmVjIGZyb20gJy4vYXBwL2NvbXBvbmVudHMvc3R2b3JlYy9zdHZvcmVjJztcblxuaW1wb3J0IE1lZGlhU2VydmljZSBmcm9tICcuL2FwcC9tZWRpYS5zZXJ2aWNlJztcblxuXG5hbmd1bGFyLm1vZHVsZSgnYnJvd3NlcicsIFt0ZW1wbGF0ZV0pXG4gICAgLmNvbXBvbmVudCgndXZvZCcsIHV2b2QpXG4gICAgLmNvbXBvbmVudCgnbWVkaWFCcm93c2VyJywgbWVkaWFCcm93c2VyKVxuICAgIC5jb21wb25lbnQoJ2FwcGxpY2F0aW9uUm9vdCcsIHJvb3QpXG4gICAgLmNvbXBvbmVudCgnbGVmdE1lbnUnLCBsZWZ0TWVudSlcbiAgICAuY29tcG9uZW50KCdkaXJSZXR1cm4nLCBkaXJSZXR1cm4pXG4gICAgLmNvbXBvbmVudCgnZGlyQmFzZScsIGRpckJhc2UpXG4gICAgLmNvbXBvbmVudCgnZmlsZScsIGZpbGUpXG4gICAgLmNvbXBvbmVudCgnc3R2b3JlYycsIHN0dm9yZWMpXG5cbiAgICAuc2VydmljZSgnbWVkaWFTZXJ2aWNlJywgTWVkaWFTZXJ2aWNlKVxuOyIsImNsYXNzIEFwcGxpY2F0aW9uUm9vdHtcblxuICAgIC8vIEBuZ0luamVjdFxuICAgIGNvbnN0cnVjdG9yKCRodHRwLCBtZWRpYVNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xuICAgICAgICB0aGlzLm1lZGlhU2VydmljZSA9IG1lZGlhU2VydmljZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBjb250cm9sbGVyOiBBcHBsaWNhdGlvblJvb3QsXG4gICAgdGVtcGxhdGVVcmw6ICdhcHBsaWNhdGlvbi1yb290L2FwcGxpY2F0aW9uLnJvb3QudHBsLmh0bWwnXG59OyIsImNsYXNzIERpckJhc2Uge1xuXG4gICAgLy8gQG5nSW5qZWN0XG4gICAgY29uc3RydWN0b3IoJGh0dHAsIG1lZGlhU2VydmljZSkge1xuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gICAgICAgIHRoaXMubWVkaWFTZXJ2aWNlID0gbWVkaWFTZXJ2aWNlO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbnRyb2xsZXI6IERpckJhc2UsXG4gICAgdGVtcGxhdGVVcmw6ICdkaXItYmFzZS9kaXIuYmFzZS50cGwuaHRtbCdcbn0iLCJjbGFzcyBEaXJSZXR1cm4ge1xuXG4gICAgLy8gQG5nSW5qZWN0XG4gICAgY29uc3RydWN0b3IoJGh0dHAsIG1lZGlhU2VydmljZSkge1xuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gICAgICAgIHRoaXMubWVkaWFTZXJ2aWNlID0gbWVkaWFTZXJ2aWNlO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbnRyb2xsZXI6IERpclJldHVybixcbiAgICB0ZW1wbGF0ZVVybDogJ2Rpci1yZXR1cm4vZGlyLnJldHVybi50cGwuaHRtbCdcbn0iLCJjbGFzcyBGaWxlIHtcblxuICAgIC8vIEBuZ0luamVjdFxuICAgIGNvbnN0cnVjdG9yKCRodHRwLCBtZWRpYVNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xuICAgICAgICB0aGlzLm1lZGlhU2VydmljZSA9IG1lZGlhU2VydmljZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0e1xuICAgIGNvbnRyb2xsZXI6IEZpbGUsXG4gICAgdGVtcGxhdGVVcmw6ICdmaWxlL2ZpbGUudHBsLmh0bWwnXG59IiwiY2xhc3MgTGVmdE1lbnUge1xuXG4gICAgLy8gQG5nSW5qZWN0XG4gICAgY29uc3RydWN0b3IoJGh0dHAsIG1lZGlhU2VydmljZSkge1xuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gICAgICAgIHRoaXMubWVkaWFTZXJ2aWNlID0gbWVkaWFTZXJ2aWNlO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbnRyb2xsZXI6IExlZnRNZW51LFxuICAgIHRlbXBsYXRlVXJsOiAnbGVmdC1tZW51L2xlZnQubWVudS50cGwuaHRtbCdcbn0iLCJjbGFzcyBNZWRpYUJyb3dzZXIge1xuXG4gICAgLy8gQG5nSW5qZWN0XG4gICAgY29uc3RydWN0b3IoJGh0dHAsIG1lZGlhU2VydmljZSkge1xuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gICAgICAgIHRoaXMubWVkaWFTZXJ2aWNlID0gbWVkaWFTZXJ2aWNlO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbnRyb2xsZXI6IE1lZGlhQnJvd3NlcixcbiAgICB0ZW1wbGF0ZVVybDogJ21lZGlhLWJyb3dzZXIvbWVkaWEuYnJvd3Nlci50cGwuaHRtbCdcbn07IiwiY2xhc3MgU3R2b3JlY3tcblxuICAgIC8vIEBuZ0luamVjdFxuICAgIGNvbnN0cnVjdG9yKCRodHRwLCBtZWRpYVNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xuICAgICAgICB0aGlzLm1lZGlhU2VydmljZSA9IG1lZGlhU2VydmljZTtcbiAgICB9XG5cbiAgICBnZXQgaXNJbWFnZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5tZWRpYVNlcnZpY2Uuc2VsZWN0ZWRGaWxlID8gdHJ1ZSA6IGZhbHNlO1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY29udHJvbGxlcjogU3R2b3JlYyxcbiAgICB0ZW1wbGF0ZVVybDogJ3N0dm9yZWMvc3R2b3JlYy50cGwuaHRtbCdcbn0iLCJjbGFzcyBVdm9kIHtcblxuICAgIC8vIEBuZ0luamVjdFxuICAgIGNvbnN0cnVjdG9yKCRodHRwLCBtZWRpYVNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xuICAgICAgICB0aGlzLm1lZGlhU2VydmljZSA9IG1lZGlhU2VydmljZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBjb250cm9sbGVyOiBVdm9kLFxuICAgIHRlbXBsYXRlVXJsOiAndXZvZC91dm9kLnRwbC5odG1sJ1xufTsiLCJjb25zdCBUWVBFUyA9IHtcbiAgICAnUE5HJzoge1xuICAgICAgICBsaXN0OiBbJ2ltYWdlL3BuZyddLFxuICAgICAgICBpbWFnZTogdHJ1ZVxuICAgIH0sXG4gICAgJ0pQRyc6IHtcbiAgICAgICAgbGlzdDogWydpbWFnZS9qcGVnJywgJ2ltYWdlL3BqcGVnJ10sXG4gICAgICAgIGltYWdlOiB0cnVlXG4gICAgfSxcbiAgICAnR0lGJzoge1xuICAgICAgICBsaXN0OiBbJ2ltYWdlL2dpZiddLFxuICAgICAgICBpbWFnZTogdHJ1ZVxuICAgIH0sXG4gICAgJ0JNUCc6IHtcbiAgICAgICAgbGlzdDogWydpbWFnZS9ibXAnXSxcbiAgICAgICAgaW1hZ2U6IHRydWVcbiAgICB9LFxuICAgICdUSUZGJzogWydpbWFnZS9pZWYnLCAnaW1hZ2UvdGlmZiddLFxuICAgICdUWFQnOiB7XG4gICAgICAgIGxpc3Q6IFsnYXBwbGljYXRpb24vcGxhaW4nLCAndGV4dC9wbGFpbiddLFxuICAgICAgICBpY29uOiAnaW1nL3R4dC5wbmcnXG4gICAgfSxcbiAgICAnUERGJzoge1xuICAgICAgICBsaXN0OiBbXCJhcHBsaWNhdGlvbi9wZGZcIl0sXG4gICAgICAgIGljb246ICdpbWcvcGRmLnBuZydcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZWRpYVNlcnZpY2Uge1xuXG4gICAgLy8gQG5nSW5qZWN0XG4gICAgY29uc3RydWN0b3IoJGh0dHAsICR3aW5kb3cpIHtcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xuICAgICAgICB0aGlzLiR3aW5kb3cgPSAkd2luZG93O1xuXG4gICAgICAgIHRoaXMuZGlyID0gbnVsbDtcbiAgICAgICAgdGhpcy5kaXJzX2RhdGEgPSBbXTtcbiAgICAgICAgdGhpcy5maWxlc19kYXRhID0gW107XG5cbiAgICAgICAgdGhpcy5zZWxlY3RlZEZpbGUgPSBudWxsO1xuXG4gICAgICAgIHRoaXMuc2hvd0RpYWxvZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNob3dMZWZ0TWVudSA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5sb2FkRGlyKCk7XG5cbiAgICB9XG5cbiAgICBsb2FkRGlyKGRpcmVjdG9yeSA9IG51bGwsIGlzUmV0dXJuID0gZmFsc2UpIHtcbiAgICAgICAgbGV0IHVybEFkcmVzcyA9ICcnO1xuICAgICAgICBpZiAoZGlyZWN0b3J5KSB7XG4gICAgICAgICAgICB1cmxBZHJlc3MgPSBkaXJlY3RvcnkubG9jYXRpb24gKyAnLycgKyBkaXJlY3RvcnkubmFtZTtcblxuICAgICAgICAgICAgaWYgKGlzUmV0dXJuKSB7XG4gICAgICAgICAgICAgICAgdXJsQWRyZXNzID0gZGlyZWN0b3J5LmxvY2F0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kaHR0cC5nZXQoXCJodHRwOi8vbWVkaWFicm93c2VyLmJhcnQuc2svZGlyXCIgKyB1cmxBZHJlc3MpXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpciA9IHJlc3BvbnNlLmRhdGEuZGlyO1xuICAgICAgICAgICAgICAgIHRoaXMuZGlyc19kYXRhID0gcmVzcG9uc2UuZGF0YS5kaXJzO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5maWxlc19kYXRhID0gW107XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgZmlsZSBvZiByZXNwb25zZS5kYXRhLmZpbGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZXNfZGF0YS5wdXNoKG5ldyBGaWxlKGZpbGUpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgIH07XG5cbiAgICBsb2FkRmlsZShmaWxlRGlyZWN0b3J5ID0gbnVsbCkge1xuICAgICAgICBpZiAoZmlsZURpcmVjdG9yeS50aHVtYl9saW5rKVxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEZpbGUgPSBmaWxlRGlyZWN0b3J5LmRvd25sb2FkX2xpbms7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy4kd2luZG93Lm9wZW4oZmlsZURpcmVjdG9yeS5kb3dubG9hZF9saW5rLCAnX2JsYW5rJyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdG9nZ2xlTGVmdE1lbnUoKSB7XG4gICAgICAgIHRoaXMuc2hvd0xlZnRNZW51ID0gIXRoaXMuc2hvd0xlZnRNZW51O1xuICAgIH1cblxuICAgIHRvZ2dsZURpYWxvZygpIHtcbiAgICAgICAgdGhpcy5zaG93RGlhbG9nID0gIXRoaXMuc2hvd0RpYWxvZztcbiAgICB9XG59XG5cblxuY2xhc3MgRmlsZSB7XG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgICAgICBhbmd1bGFyLm1lcmdlKHRoaXMsIGRhdGEpO1xuICAgIH1cblxuICAgIGdldFR5cGVOYW1lKGdldEljb24gPSBmYWxzZSkge1xuICAgICAgICBmb3IgKGxldCB0eXBlTmFtZSBpbiBUWVBFUykge1xuICAgICAgICAgICAgbGV0IHR5cGVPYmogPSBUWVBFU1t0eXBlTmFtZV07XG4gICAgICAgICAgICBpZiAoYW5ndWxhci5pc0RlZmluZWQodHlwZU9iai5saXN0KSkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHR5cGUgb2YgdHlwZU9iai5saXN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09IHRoaXMudHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdldEljb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYW5ndWxhci5pc0RlZmluZWQodHlwZU9iai5pbWFnZSkgJiYgdHlwZU9iai5pbWFnZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50aHVtYl9saW5rO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhbmd1bGFyLmlzRGVmaW5lZCh0eXBlT2JqLmljb24pID8gdHlwZU9iai5pY29uIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0eXBlTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGdldCBuaWNlVHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VHlwZU5hbWUoKSA/IHRoaXMuZ2V0VHlwZU5hbWUoKSA6ICdhbnknO1xuICAgIH1cblxuICAgIGdldCBpY29uKCkge1xuICAgICAgICBsZXQgaWNvbiA9IHRoaXMuZ2V0VHlwZU5hbWUodHJ1ZSk7XG4gICAgICAgIHJldHVybiBpY29uID8gaWNvbiA6IFwiaW1nL3BsYWluLnBuZ1wiXG4gICAgfVxuXG5cbn0iLCJyZXF1aXJlKCcuL3RlbXBsYXRlcycpO1xubW9kdWxlLmV4cG9ydHMgPSAndGVtcGxhdGVzJzsiLCJhbmd1bGFyLm1vZHVsZShcInRlbXBsYXRlc1wiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7JHRlbXBsYXRlQ2FjaGUucHV0KFwiZGlyLWJhc2UvZGlyLmJhc2UudHBsLmh0bWxcIixcIjxkaXYgY2xhc3M9XFxcImljb25cXFwiIG5nLXJlcGVhdD1cXFwiZGlyIGluICRjdHJsLm1lZGlhU2VydmljZS5kaXJzX2RhdGFcXFwiIG5nLWNsaWNrPVxcXCIkY3RybC5tZWRpYVNlcnZpY2UubG9hZERpcihkaXIpXFxcIj5cXG4gICAgPGltZyBjbGFzcz1cXFwiaW1nX2ljb25cXFwiIHNyYz1cXFwiaW1nL3ByaWVjaW5vay5wbmdcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJuYXpvdl9zdWJvcnVcXFwiPnt7ZGlyLm5hbWV9fTwvZGl2PlxcbjwvZGl2PlwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImRpci1yZXR1cm4vZGlyLnJldHVybi50cGwuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXFwiaWNvblxcXCIgbmctc2hvdz1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLmRpclxcXCIgbmctY2xpY2s9XFxcIiRjdHJsLm1lZGlhU2VydmljZS5sb2FkRGlyKCRjdHJsLm1lZGlhU2VydmljZS5kaXIsIHRydWUpXFxcIj5cXG4gICAgPGltZyBjbGFzcz1cXFwiaW1nX2ljb25cXFwiIHNyYz1cXFwiaW1nL2FkcmVzYXIucG5nXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwibmF6b3Zfc3Vib3J1XFxcIj5OYWRyYWRlbnkgYWRyZXNhcjwvZGl2PlxcbjwvZGl2PlwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImFwcGxpY2F0aW9uLXJvb3QvYXBwbGljYXRpb24ucm9vdC50cGwuaHRtbFwiLFwiPGRpdiBpZD1cXFwib2tub1xcXCI+XFxuXFxuICAgIDxsZWZ0LW1lbnUgbmctaWY9XFxcIiRjdHJsLm1lZGlhU2VydmljZS5zaG93TGVmdE1lbnVcXFwiPjwvbGVmdC1tZW51PlxcblxcbiAgICA8ZGl2IGlkPVxcXCJvYnNhaFxcXCIgbmctY2xhc3M9XFxcIntcXCdmdWxsXFwnOiAhJGN0cmwubWVkaWFTZXJ2aWNlLnNob3dMZWZ0TWVudX1cXFwiPlxcbiAgICAgICAgPGRpdiBpZD1cXFwiaGVhZGVyMlxcXCI+XFxuICAgICAgICAgICAgPGgyPkZpbGVzIC8gSW1hZ2VzPC9oMj5cXG4gICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgPGRpdiBzdHlsZT1cXFwibWFyZ2luLWxlZnQ6MjBweDsgbWFyZ2luLXJpZ2h0OiAzMHB4XFxcIj5cXG5cXG4gICAgICAgICAgICA8ZGlyLXJldHVybj48L2Rpci1yZXR1cm4+XFxuXFxuICAgICAgICAgICAgPGRpci1iYXNlPjwvZGlyLWJhc2U+XFxuXFxuICAgICAgICAgICAgPGZpbGU+PC9maWxlPlxcbiAgICAgICAgPC9kaXY+XFxuXFxuICAgIDwvZGl2PlxcblxcbjwvZGl2PlwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImZpbGUvZmlsZS50cGwuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXFwiaWNvblxcXCIgbmctcmVwZWF0PVxcXCJmaWxlIGluICRjdHJsLm1lZGlhU2VydmljZS5maWxlc19kYXRhXFxcIiBuZy1jbGljaz1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLmxvYWRGaWxlKGZpbGUpXFxcIj5cXG4gICAgPGltZyBjbGFzcz1cXFwiaW1nX3BpY3R1cmVcXFwiIG5nLXNyYz1cXFwie3tmaWxlLmljb259fVxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcIm5hem92X3N1Ym9ydVxcXCI+e3tmaWxlLm5hbWV9fTwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ0eXBfc3Vib3J1XFxcIj5cXG4gICAgICAgIDxwPnt7ZmlsZS5uaWNlVHlwZX19PC9wPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwidmVsa29zdF9zdWJvcnVcXFwiPlxcbiAgICAgICAgPHA+e3tmaWxlLnNpemV9fTwvcD5cXG4gICAgPC9kaXY+XFxuPC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwibGVmdC1tZW51L2xlZnQubWVudS50cGwuaHRtbFwiLFwiPGRpdiBpZD1cXFwibGVmdF9tZW51XFxcIj5cXG4gICAgPHVsPlxcbiAgICAgICAgPGxpIG5nLXNob3c9XFxcIiRjdHJsLm1lZGlhU2VydmljZS5kaXJcXFwiIG5nLWNsaWNrPVxcXCIkY3RybC5tZWRpYVNlcnZpY2UubG9hZERpcigkY3RybC5tZWRpYVNlcnZpY2UuZGlyLCB0cnVlKVxcXCIgc3R5bGU9XFxcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE4cHg7XFxcIj5OYWRyYWRlbnkgYWRyZXNhcjwvbGk+XFxuICAgICAgICA8bGkgbmctcmVwZWF0PVxcXCJkaXIgaW4gJGN0cmwubWVkaWFTZXJ2aWNlLmRpcnNfZGF0YVxcXCIgbmctY2xpY2s9XFxcIiRjdHJsLm1lZGlhU2VydmljZS5sb2FkRGlyKGRpcilcXFwiID57e2Rpci5uYW1lfX08L2xpPlxcbiAgICA8L3VsPlxcbjwvZGl2PlwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1lZGlhLWJyb3dzZXIvbWVkaWEuYnJvd3Nlci50cGwuaHRtbFwiLFwiPGRpdiBpZD1cXFwiTWVkaWFCcm93c2VyXFxcIj5cXG4gICAgPGRpdiBpZD1cXFwiaGVhZGVyMVxcXCI+XFxuICAgICAgICA8aW1nIG5nLWNsaWNrPVxcXCIkY3RybC5tZWRpYVNlcnZpY2UudG9nZ2xlTGVmdE1lbnUoKVxcXCIgaWQ9XFxcIm1lbnVfaWNvblxcXCIgc3JjPVxcXCJpbWcvbWVudS5wbmdcXFwiIHN0eWxlPVxcXCJ3aWR0aDo1MHB4OyBoZWlnaHQ6MTAwJTtmbG9hdDpsZWZ0OyBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcXCI+XFxuICAgICAgICA8aDE+TWVkaWEgQnJvd3NlcjwvaDE+XFxuICAgICAgICA8aW1nIGlkPVxcXCJ6YXZyaV9kaWFsb2dcXFwiXFxuICAgICAgICAgICAgIG5nLWNsaWNrPVxcXCIkY3RybC5tZWRpYVNlcnZpY2UudG9nZ2xlRGlhbG9nKClcXFwiXFxuICAgICAgICAgICAgIHNyYz1cXFwiaW1nL2Nsb3NlLnBuZ1xcXCIgc3R5bGU9XFxcIndpZHRoOjQwcHg7IGhlaWdodDoxMDAlO2Zsb2F0OnJpZ2h0OyBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXFwiPlxcbiAgICA8L2Rpdj5cXG5cXG4gICAgPGFwcGxpY2F0aW9uLXJvb3Q+PC9hcHBsaWNhdGlvbi1yb290PlxcbjwvZGl2PlwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcInN0dm9yZWMvc3R2b3JlYy50cGwuaHRtbFwiLFwiPGRpdiBpZD1cXFwic3R2b3JlY1xcXCI+XFxuICAgIDxpbWcgc3R5bGU9XFxcIm1heC1oZWlnaHQ6IDI1dnc7IG1heC13aWR0aDogMjV2dztcXFwiIG5nLWlmPVxcXCIkY3RybC5pc0ltYWdlXFxcIiBuZy1zcmM9XFxcInt7JGN0cmwubWVkaWFTZXJ2aWNlLnNlbGVjdGVkRmlsZX19XFxcIj5cXG48L2Rpdj5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJ1dm9kL3V2b2QudHBsLmh0bWxcIixcIjxkaXY+XFxuICAgIDxkaXYgaWQ9XFxcInV2b2RcXFwiXFxuICAgICAgICAgbmctY2xhc3M9XFxcIntcXCdoYWxmdmlld1xcJzogJGN0cmwubWVkaWFTZXJ2aWNlLnNob3dEaWFsb2d9XFxcIj5cXG4gICAgICAgIDxzdHZvcmVjPjwvc3R2b3JlYz5cXG5cXG4gICAgICAgIDxidXR0b24gaWQ9XFxcInpvYnJhel9kaWFsb2dcXFwiXFxuICAgICAgICAgICAgICAgIG5nLWNsaWNrPVxcXCIkY3RybC5tZWRpYVNlcnZpY2UudG9nZ2xlRGlhbG9nKClcXFwiXFxuICAgICAgICAgICAgICAgIHN0eWxlPVxcXCJtYXJnaW4tbGVmdDphdXRvO21hcmdpbi1yaWdodDphdXRvO2Rpc3BsYXk6YmxvY2s7IGJhY2tncm91bmQtY29sb3I6IzQ2NDk0YTtjb2xvcjogd2hpdGU7IHBhZGRpbmc6IDVweCA1cHggNXB4IDVweFxcXCI+Wk9CUkFaSVQgRElBTE9HXFxuICAgICAgICA8L2J1dHRvbj5cXG4gICAgPC9kaXY+XFxuXFxuXFxuICAgIDxtZWRpYS1icm93c2VyIG5nLWlmPVxcXCIkY3RybC5tZWRpYVNlcnZpY2Uuc2hvd0RpYWxvZ1xcXCI+PC9tZWRpYS1icm93c2VyPlxcbjwvZGl2PlwiKTt9XSk7Il19
