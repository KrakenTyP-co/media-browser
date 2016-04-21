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

var _breadcrumbs = require('./app/components/breadcrumbs/breadcrumbs');

var _breadcrumbs2 = _interopRequireDefault(_breadcrumbs);

var _filter = require('./app/components/filter-panel/filter.panel');

var _filter2 = _interopRequireDefault(_filter);

var _upload = require('./app/components/upload-file/upload.file');

var _upload2 = _interopRequireDefault(_upload);

var _media3 = require('./app/media.service');

var _media4 = _interopRequireDefault(_media3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

angular.module('browser', [_index2.default]).component('uvod', _uvod2.default).component('mediaBrowser', _media2.default).component('applicationRoot', _application2.default).component('leftMenu', _left2.default).component('dirReturn', _dir2.default).component('dirBase', _dir4.default).component('file', _file2.default).component('stvorec', _stvorec2.default).component('breadcrumbs', _breadcrumbs2.default).component('filterPanel', _filter2.default).component('uploadFile', _upload2.default).service('mediaService', _media4.default);

},{"./app/components/application-root/application.root":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/components/application-root/application.root.js","./app/components/breadcrumbs/breadcrumbs":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/components/breadcrumbs/breadcrumbs.js","./app/components/dir-base/dir.base":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/components/dir-base/dir.base.js","./app/components/dir-return/dir.return":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/components/dir-return/dir.return.js","./app/components/file/file":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/components/file/file.js","./app/components/filter-panel/filter.panel":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/components/filter-panel/filter.panel.js","./app/components/left-menu/left.menu":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/components/left-menu/left.menu.js","./app/components/media-browser/media.browser":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/components/media-browser/media.browser.js","./app/components/stvorec/stvorec":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/components/stvorec/stvorec.js","./app/components/upload-file/upload.file":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/components/upload-file/upload.file.js","./app/components/uvod/uvod":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/components/uvod/uvod.js","./app/media.service":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/media.service.js","./tpl/index":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/tpl/index.js"}],"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/components/application-root/application.root.js":[function(require,module,exports){
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

},{}],"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/components/breadcrumbs/breadcrumbs.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Breadcrumbs =

// @ngInject
function Breadcrumbs($http, mediaService) {
    _classCallCheck(this, Breadcrumbs);

    this.$http = $http;
    this.mediaService = mediaService;
};

exports.default = {
    controller: Breadcrumbs,
    templateUrl: 'breadcrumbs/breadcrumbs.tpl.html'
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

},{}],"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/components/filter-panel/filter.panel.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FilterPanel =

// @ngInject
function FilterPanel($http, mediaService) {
    _classCallCheck(this, FilterPanel);

    this.$http = $http;
    this.mediaService = mediaService;
};

exports.default = {
    controller: FilterPanel,
    templateUrl: 'filter-panel/filter.panel.tpl.html'
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

},{}],"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/components/upload-file/upload.file.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UploadFile = function () {

    // @ngInject

    function UploadFile($timeout, $element, $window, $rootScope, mediaService) {
        _classCallCheck(this, UploadFile);

        this.$timeout = $timeout;
        this.$element = $element;
        this.$window = $window;
        this.$rootScope = $rootScope;
        this.mediaService = mediaService;

        this.uploadTimeout = null;

        this.list = new Set();

        // default values
        if (!this.fileAccept) {
            this.fileAccept = '';
        }
    }

    _createClass(UploadFile, [{
        key: "$onInit",
        value: function $onInit() {
            this.input = this.$element.find("input")[0];

            this.initClick();
        }

        /**
         * Trigger click event on this.input
         *
         */

    }, {
        key: "fireUploadEvent",
        value: function fireUploadEvent() {
            if (this.$window.CustomEvent) {
                this.input.dispatchEvent(new MouseEvent("click"));
            } else if (document.createEvent) {
                var ev = document.createEvent('HTMLEvents');
                ev.initEvent('contextmenu', true, false);
                this.input.dispatchEvent(ev);
            } else {
                // Internet Explorer
                this.input.fireEvent('oncontextmenu');
            }
        }

        /**
         * Add listener for change on this.input
         *
         */

    }, {
        key: "initClick",
        value: function initClick() {
            var _this = this;

            this.input.addEventListener('click', function (e) {
                e.target.value = '';
            }, false);
            this.input.addEventListener('change', function (e) {
                var list = e.target.files;
                if (list.length) {
                    for (var fileIndex in list) {
                        if (!isNaN(fileIndex)) {
                            _this.loadFile(list.item(fileIndex));
                        }
                    }
                }
            }, false);
        }

        /**
         * Handle a file when is dropped
         *
         * @param file
         */

    }, {
        key: "loadFile",
        value: function loadFile(file) {
            var _this2 = this;

            var reader = new FileReader();
            reader.onload = function (readerEvt) {

                var item = {};
                item.doc_name = file.name;
                item.fileBase64 = btoa(readerEvt.target.result);
                item.doc_type = file.type;
                item.file_size = file.size;

                _this2.list.add(item);

                _this2.$rootScope.$apply();

                if (_this2.uploadTimeout) {
                    _this2.$timeout.cancel(_this2.uploadTimeout);
                }
                _this2.uploadTimeout = _this2.$timeout(function () {
                    // todo do upload
                    // subory su v this.list a ten je Set - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
                    // na upload treba vyuzit FormData - https://developer.mozilla.org/en-US/docs/Web/API/FormData
                    // do formData sa vklada bud to readerEvt.target.result alebo item.fileBase64 alebo toto ignorovat a rovno poslat
                    // do formData file
                }, 200);
            };

            reader.readAsBinaryString(file);
        }
    }]);

    return UploadFile;
}();

exports.default = {
    templateUrl: 'upload-file/upload.file.tpl.html',
    controller: UploadFile
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

        this.dir_list = [];

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
                    this.dir_list.pop();
                } else {
                    this.dir_list.push(directory.name);
                }
            }

            this.$http.get('http://mediabrowser.bart.sk/dir' + urlAdress).then(function (response) {
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

            if (fileDirectory.thumb_link) {
                this.selectedFile = fileDirectory.download_link;
                this.showDialog = false;
            } else {
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
    }, {
        key: 'closeDialog',
        value: function closeDialog() {
            if (this.showDialog) this.showDialog = !this.showDialog;
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
  $templateCache.put("application-root/application.root.tpl.html", "<div id=\"okno\">\n\n    <left-menu ng-if=\"$ctrl.mediaService.showLeftMenu\"></left-menu>\n\n    <div id=\"obsah\" ng-class=\"{\'full\': !$ctrl.mediaService.showLeftMenu}\">\n        <breadcrumbs></breadcrumbs>\n\n        <div style=\"margin-left:20px; margin-right: 30px\">\n\n            <dir-return></dir-return>\n\n            <dir-base></dir-base>\n\n            <file></file>\n        </div>\n\n    </div>\n\n</div>");
  $templateCache.put("breadcrumbs/breadcrumbs.tpl.html", "<div id=\"header2\">\n    <h2>\n        <span>Home</span>\n        <span ng-repeat=\"dirName in $ctrl.mediaService.dir_list\"> / {{dirName}} </span>\n    </h2>\n</div>");
  $templateCache.put("dir-base/dir.base.tpl.html", "<div class=\"icon\" ng-repeat=\"dir in $ctrl.mediaService.dirs_data\" ng-click=\"$ctrl.mediaService.loadDir(dir)\">\n    <img class=\"img_icon\" src=\"img/priecinok.png\">\n    <div class=\"nazov_suboru\">{{dir.name}}</div>\n</div>");
  $templateCache.put("dir-return/dir.return.tpl.html", "<div class=\"icon\" ng-show=\"$ctrl.mediaService.dir\" ng-click=\"$ctrl.mediaService.loadDir($ctrl.mediaService.dir, true)\">\n    <img class=\"img_icon\" src=\"img/adresar.png\">\n    <div class=\"nazov_suboru\">Nadradeny adresar</div>\n</div>");
  $templateCache.put("filter-panel/filter.panel.tpl.html", "<div class=\"filter-panel\">\n    <div class=\"filter\"></div>\n    <upload-file></upload-file>\n</div>");
  $templateCache.put("left-menu/left.menu.tpl.html", "<div id=\"left_menu\">\n    <ul>\n        <li ng-show=\"$ctrl.mediaService.dir\" ng-click=\"$ctrl.mediaService.loadDir($ctrl.mediaService.dir, true)\" style=\"font-weight: bold; font-size: 18px;\">Nadradeny adresar</li>\n        <li ng-repeat=\"dir in $ctrl.mediaService.dirs_data\" ng-click=\"$ctrl.mediaService.loadDir(dir)\" >{{dir.name}}</li>\n    </ul>\n</div>");
  $templateCache.put("media-browser/media.browser.tpl.html", "<div id=\"MediaBrowser\">\n    <div id=\"header1\">\n        <img ng-click=\"$ctrl.mediaService.toggleLeftMenu()\" id=\"menu_icon\" src=\"img/menu.png\" style=\"width:50px; height:100%;float:left; align-self: flex-start;\">\n        <h1>Media Browser</h1>\n        <img id=\"zavri_dialog\"\n             ng-click=\"$ctrl.mediaService.toggleDialog()\"\n             src=\"img/close.png\" style=\"width:40px; height:100%;float:right; align-self: flex-end;\">\n    </div>\n\n    <application-root></application-root>\n</div>");
  $templateCache.put("stvorec/stvorec.tpl.html", "<div id=\"stvorec\">\n    <img style=\"max-height: 25vw; max-width: 25vw;\" ng-if=\"$ctrl.isImage\" ng-src=\"{{$ctrl.mediaService.selectedFile}}\">\n</div>");
  $templateCache.put("upload-file/upload.file.tpl.html", "<div class=\"pull-right\">\n    <input id=\"dragging\"\n           class=\"hidden\"\n           type=\"file\"\n           accept=\"{{$ctrl.fileAccept}}\"\n           multiple/>\n    <a class=\"cursor-pointer\" ng-click=\"$ctrl.fireUploadEvent()\">\n        <span class=\"display-block\" translate>Upload</span>\n    </a>\n</div>");
  $templateCache.put("uvod/uvod.tpl.html", "<div>\n    <div id=\"uvod\"\n         ng-class=\"{\'halfview\': $ctrl.mediaService.showDialog}\"\n         ng-click=\"$ctrl.mediaService.closeDialog()\">\n        <stvorec></stvorec>\n\n        <button id=\"zobraz_dialog\"\n                ng-click=\"$ctrl.mediaService.toggleDialog(); $event.stopPropagation();\"\n                style=\"margin-left:auto;margin-right:auto;display:block; background-color:#46494a;color: white; padding: 5px 5px 5px 5px\">ZOBRAZIT DIALOG\n        </button>\n    </div>\n\n\n    <media-browser ng-if=\"$ctrl.mediaService.showDialog\"></media-browser>\n</div>");
  $templateCache.put("file/file.tpl.html", "<div class=\"icon\" ng-repeat=\"file in $ctrl.mediaService.files_data\" ng-click=\"$ctrl.mediaService.loadFile(file)\">\n    <img class=\"img_picture\" ng-src=\"{{file.icon}}\">\n    <div class=\"nazov_suboru\">{{file.name}}</div>\n    <div class=\"typ_suboru\">\n        <p>{{file.niceType}}</p>\n    </div>\n    <div class=\"velkost_suboru\">\n        <p>{{file.size}}</p>\n    </div>\n</div>");
}]);

},{}]},{},["/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app.js"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBwLmpzIiwic3JjL2FwcC9jb21wb25lbnRzL2FwcGxpY2F0aW9uLXJvb3QvYXBwbGljYXRpb24ucm9vdC5qcyIsInNyYy9hcHAvY29tcG9uZW50cy9icmVhZGNydW1icy9icmVhZGNydW1icy5qcyIsInNyYy9hcHAvY29tcG9uZW50cy9kaXItYmFzZS9kaXIuYmFzZS5qcyIsInNyYy9hcHAvY29tcG9uZW50cy9kaXItcmV0dXJuL2Rpci5yZXR1cm4uanMiLCJzcmMvYXBwL2NvbXBvbmVudHMvZmlsZS9maWxlLmpzIiwic3JjL2FwcC9jb21wb25lbnRzL2ZpbHRlci1wYW5lbC9maWx0ZXIucGFuZWwuanMiLCJzcmMvYXBwL2NvbXBvbmVudHMvbGVmdC1tZW51L2xlZnQubWVudS5qcyIsInNyYy9hcHAvY29tcG9uZW50cy9tZWRpYS1icm93c2VyL21lZGlhLmJyb3dzZXIuanMiLCJzcmMvYXBwL2NvbXBvbmVudHMvc3R2b3JlYy9zdHZvcmVjLmpzIiwic3JjL2FwcC9jb21wb25lbnRzL3VwbG9hZC1maWxlL3VwbG9hZC5maWxlLmpzIiwic3JjL2FwcC9jb21wb25lbnRzL3V2b2QvdXZvZC5qcyIsInNyYy9hcHAvbWVkaWEuc2VydmljZS5qcyIsInNyYy90cGwvaW5kZXguanMiLCJzcmMvdHBsL3RlbXBsYXRlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7OztBQUVBLFFBQVEsTUFBUixDQUFlLFNBQWYsRUFBMEIsaUJBQTFCLEVBQ0ssU0FETCxDQUNlLE1BRGYsa0JBRUssU0FGTCxDQUVlLGNBRmYsbUJBR0ssU0FITCxDQUdlLGlCQUhmLHlCQUlLLFNBSkwsQ0FJZSxVQUpm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RCxzUEFBcEQsRUFIZ0Y7QUFJaEYsaUJBQWUsR0FBZixDQUFtQixvQ0FBbkIsRUFBd0QseUdBQXhELEVBSmdGO0FBS2hGLGlCQUFlLEdBQWYsQ0FBbUIsOEJBQW5CLEVBQWtELCtXQUFsRCxFQUxnRjtBQU1oRixpQkFBZSxHQUFmLENBQW1CLHNDQUFuQixFQUEwRCwyZ0JBQTFELEVBTmdGO0FBT2hGLGlCQUFlLEdBQWYsQ0FBbUIsMEJBQW5CLEVBQThDLDZKQUE5QyxFQVBnRjtBQVFoRixpQkFBZSxHQUFmLENBQW1CLGtDQUFuQixFQUFzRCwwVUFBdEQsRUFSZ0Y7QUFTaEYsaUJBQWUsR0FBZixDQUFtQixvQkFBbkIsRUFBd0MsZ2xCQUF4QyxFQVRnRjtBQVVoRixpQkFBZSxHQUFmLENBQW1CLG9CQUFuQixFQUF3Qyw0WUFBeEMsRUFWZ0Y7Q0FBekIsQ0FBdkQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vdHBsL2luZGV4JztcbmltcG9ydCB1dm9kIGZyb20gJy4vYXBwL2NvbXBvbmVudHMvdXZvZC91dm9kJztcbmltcG9ydCBtZWRpYUJyb3dzZXIgZnJvbSAnLi9hcHAvY29tcG9uZW50cy9tZWRpYS1icm93c2VyL21lZGlhLmJyb3dzZXInO1xuaW1wb3J0IHJvb3QgZnJvbSAnLi9hcHAvY29tcG9uZW50cy9hcHBsaWNhdGlvbi1yb290L2FwcGxpY2F0aW9uLnJvb3QnO1xuaW1wb3J0IGxlZnRNZW51IGZyb20gJy4vYXBwL2NvbXBvbmVudHMvbGVmdC1tZW51L2xlZnQubWVudSc7XG5pbXBvcnQgZGlyUmV0dXJuIGZyb20gJy4vYXBwL2NvbXBvbmVudHMvZGlyLXJldHVybi9kaXIucmV0dXJuJztcbmltcG9ydCBkaXJCYXNlIGZyb20gJy4vYXBwL2NvbXBvbmVudHMvZGlyLWJhc2UvZGlyLmJhc2UnO1xuaW1wb3J0IGZpbGUgZnJvbSAnLi9hcHAvY29tcG9uZW50cy9maWxlL2ZpbGUnO1xuaW1wb3J0IHN0dm9yZWMgZnJvbSAnLi9hcHAvY29tcG9uZW50cy9zdHZvcmVjL3N0dm9yZWMnO1xuaW1wb3J0IGJyZWFkY3J1bWJzIGZyb20gJy4vYXBwL2NvbXBvbmVudHMvYnJlYWRjcnVtYnMvYnJlYWRjcnVtYnMnO1xuaW1wb3J0IGZpbHRlclBhbmVsIGZyb20gJy4vYXBwL2NvbXBvbmVudHMvZmlsdGVyLXBhbmVsL2ZpbHRlci5wYW5lbCc7XG5pbXBvcnQgdXBsb2FkRmlsZSBmcm9tICcuL2FwcC9jb21wb25lbnRzL3VwbG9hZC1maWxlL3VwbG9hZC5maWxlJztcblxuaW1wb3J0IE1lZGlhU2VydmljZSBmcm9tICcuL2FwcC9tZWRpYS5zZXJ2aWNlJztcblxuYW5ndWxhci5tb2R1bGUoJ2Jyb3dzZXInLCBbdGVtcGxhdGVdKVxuICAgIC5jb21wb25lbnQoJ3V2b2QnLCB1dm9kKVxuICAgIC5jb21wb25lbnQoJ21lZGlhQnJvd3NlcicsIG1lZGlhQnJvd3NlcilcbiAgICAuY29tcG9uZW50KCdhcHBsaWNhdGlvblJvb3QnLCByb290KVxuICAgIC5jb21wb25lbnQoJ2xlZnRNZW51JywgbGVmdE1lbnUpXG4gICAgLmNvbXBvbmVudCgnZGlyUmV0dXJuJywgZGlyUmV0dXJuKVxuICAgIC5jb21wb25lbnQoJ2RpckJhc2UnLCBkaXJCYXNlKVxuICAgIC5jb21wb25lbnQoJ2ZpbGUnLCBmaWxlKVxuICAgIC5jb21wb25lbnQoJ3N0dm9yZWMnLCBzdHZvcmVjKVxuICAgIC5jb21wb25lbnQoJ2JyZWFkY3J1bWJzJywgYnJlYWRjcnVtYnMpXG4gICAgLmNvbXBvbmVudCgnZmlsdGVyUGFuZWwnLCBmaWx0ZXJQYW5lbClcbiAgICAuY29tcG9uZW50KCd1cGxvYWRGaWxlJywgdXBsb2FkRmlsZSlcblxuICAgIC5zZXJ2aWNlKCdtZWRpYVNlcnZpY2UnLCBNZWRpYVNlcnZpY2UpXG47IiwiY2xhc3MgQXBwbGljYXRpb25Sb290e1xuXG4gICAgLy8gQG5nSW5qZWN0XG4gICAgY29uc3RydWN0b3IoJGh0dHAsIG1lZGlhU2VydmljZSkge1xuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gICAgICAgIHRoaXMubWVkaWFTZXJ2aWNlID0gbWVkaWFTZXJ2aWNlO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbnRyb2xsZXI6IEFwcGxpY2F0aW9uUm9vdCxcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcGxpY2F0aW9uLXJvb3QvYXBwbGljYXRpb24ucm9vdC50cGwuaHRtbCdcbn07IiwiY2xhc3MgQnJlYWRjcnVtYnMge1xuXG4gICAgLy8gQG5nSW5qZWN0XG4gICAgY29uc3RydWN0b3IoJGh0dHAsIG1lZGlhU2VydmljZSkge1xuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gICAgICAgIHRoaXMubWVkaWFTZXJ2aWNlID0gbWVkaWFTZXJ2aWNlO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbnRyb2xsZXI6IEJyZWFkY3J1bWJzLFxuICAgIHRlbXBsYXRlVXJsOiAnYnJlYWRjcnVtYnMvYnJlYWRjcnVtYnMudHBsLmh0bWwnXG59IiwiY2xhc3MgRGlyQmFzZSB7XG5cbiAgICAvLyBAbmdJbmplY3RcbiAgICBjb25zdHJ1Y3RvcigkaHR0cCwgbWVkaWFTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcbiAgICAgICAgdGhpcy5tZWRpYVNlcnZpY2UgPSBtZWRpYVNlcnZpY2U7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY29udHJvbGxlcjogRGlyQmFzZSxcbiAgICB0ZW1wbGF0ZVVybDogJ2Rpci1iYXNlL2Rpci5iYXNlLnRwbC5odG1sJ1xufSIsImNsYXNzIERpclJldHVybiB7XG5cbiAgICAvLyBAbmdJbmplY3RcbiAgICBjb25zdHJ1Y3RvcigkaHR0cCwgbWVkaWFTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcbiAgICAgICAgdGhpcy5tZWRpYVNlcnZpY2UgPSBtZWRpYVNlcnZpY2U7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY29udHJvbGxlcjogRGlyUmV0dXJuLFxuICAgIHRlbXBsYXRlVXJsOiAnZGlyLXJldHVybi9kaXIucmV0dXJuLnRwbC5odG1sJ1xufSIsImNsYXNzIEZpbGUge1xuXG4gICAgLy8gQG5nSW5qZWN0XG4gICAgY29uc3RydWN0b3IoJGh0dHAsIG1lZGlhU2VydmljZSkge1xuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gICAgICAgIHRoaXMubWVkaWFTZXJ2aWNlID0gbWVkaWFTZXJ2aWNlO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHR7XG4gICAgY29udHJvbGxlcjogRmlsZSxcbiAgICB0ZW1wbGF0ZVVybDogJ2ZpbGUvZmlsZS50cGwuaHRtbCdcbn0iLCJjbGFzcyBGaWx0ZXJQYW5lbCB7XG5cbiAgICAvLyBAbmdJbmplY3RcbiAgICBjb25zdHJ1Y3RvcigkaHR0cCwgbWVkaWFTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcbiAgICAgICAgdGhpcy5tZWRpYVNlcnZpY2UgPSBtZWRpYVNlcnZpY2U7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY29udHJvbGxlcjogRmlsdGVyUGFuZWwsXG4gICAgdGVtcGxhdGVVcmw6ICdmaWx0ZXItcGFuZWwvZmlsdGVyLnBhbmVsLnRwbC5odG1sJ1xufTsiLCJjbGFzcyBMZWZ0TWVudSB7XG5cbiAgICAvLyBAbmdJbmplY3RcbiAgICBjb25zdHJ1Y3RvcigkaHR0cCwgbWVkaWFTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcbiAgICAgICAgdGhpcy5tZWRpYVNlcnZpY2UgPSBtZWRpYVNlcnZpY2U7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY29udHJvbGxlcjogTGVmdE1lbnUsXG4gICAgdGVtcGxhdGVVcmw6ICdsZWZ0LW1lbnUvbGVmdC5tZW51LnRwbC5odG1sJ1xufSIsImNsYXNzIE1lZGlhQnJvd3NlciB7XG5cbiAgICAvLyBAbmdJbmplY3RcbiAgICBjb25zdHJ1Y3RvcigkaHR0cCwgbWVkaWFTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcbiAgICAgICAgdGhpcy5tZWRpYVNlcnZpY2UgPSBtZWRpYVNlcnZpY2U7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY29udHJvbGxlcjogTWVkaWFCcm93c2VyLFxuICAgIHRlbXBsYXRlVXJsOiAnbWVkaWEtYnJvd3Nlci9tZWRpYS5icm93c2VyLnRwbC5odG1sJ1xufTsiLCJjbGFzcyBTdHZvcmVje1xuXG4gICAgLy8gQG5nSW5qZWN0XG4gICAgY29uc3RydWN0b3IoJGh0dHAsIG1lZGlhU2VydmljZSkge1xuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gICAgICAgIHRoaXMubWVkaWFTZXJ2aWNlID0gbWVkaWFTZXJ2aWNlO1xuICAgIH1cblxuICAgIGdldCBpc0ltYWdlKCl7XG4gICAgICAgIHJldHVybiB0aGlzLm1lZGlhU2VydmljZS5zZWxlY3RlZEZpbGUgPyB0cnVlIDogZmFsc2U7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBjb250cm9sbGVyOiBTdHZvcmVjLFxuICAgIHRlbXBsYXRlVXJsOiAnc3R2b3JlYy9zdHZvcmVjLnRwbC5odG1sJ1xufSIsImNsYXNzIFVwbG9hZEZpbGUge1xuXG4gICAgLy8gQG5nSW5qZWN0XG4gICAgY29uc3RydWN0b3IoJHRpbWVvdXQsICRlbGVtZW50LCAkd2luZG93LCAkcm9vdFNjb3BlLCBtZWRpYVNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy4kdGltZW91dCA9ICR0aW1lb3V0O1xuICAgICAgICB0aGlzLiRlbGVtZW50ID0gJGVsZW1lbnQ7XG4gICAgICAgIHRoaXMuJHdpbmRvdyA9ICR3aW5kb3c7XG4gICAgICAgIHRoaXMuJHJvb3RTY29wZSA9ICRyb290U2NvcGU7XG4gICAgICAgIHRoaXMubWVkaWFTZXJ2aWNlID0gbWVkaWFTZXJ2aWNlO1xuXG4gICAgICAgIHRoaXMudXBsb2FkVGltZW91dCA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5saXN0ID0gbmV3IFNldCgpO1xuXG4gICAgICAgIC8vIGRlZmF1bHQgdmFsdWVzXG4gICAgICAgIGlmICghdGhpcy5maWxlQWNjZXB0KSB7XG4gICAgICAgICAgICB0aGlzLmZpbGVBY2NlcHQgPSAnJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgICRvbkluaXQoKSB7XG4gICAgICAgIHRoaXMuaW5wdXQgPSB0aGlzLiRlbGVtZW50LmZpbmQoXCJpbnB1dFwiKVswXTtcblxuICAgICAgICB0aGlzLmluaXRDbGljaygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXIgY2xpY2sgZXZlbnQgb24gdGhpcy5pbnB1dFxuICAgICAqXG4gICAgICovXG4gICAgZmlyZVVwbG9hZEV2ZW50KCkge1xuICAgICAgICBpZiAodGhpcy4kd2luZG93LkN1c3RvbUV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLmlucHV0LmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoXCJjbGlja1wiKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuY3JlYXRlRXZlbnQpIHtcbiAgICAgICAgICAgIGxldCBldiA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdIVE1MRXZlbnRzJyk7XG4gICAgICAgICAgICBldi5pbml0RXZlbnQoJ2NvbnRleHRtZW51JywgdHJ1ZSwgZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5pbnB1dC5kaXNwYXRjaEV2ZW50KGV2KTtcbiAgICAgICAgfSBlbHNlIHsgLy8gSW50ZXJuZXQgRXhwbG9yZXJcbiAgICAgICAgICAgIHRoaXMuaW5wdXQuZmlyZUV2ZW50KCdvbmNvbnRleHRtZW51Jyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgbGlzdGVuZXIgZm9yIGNoYW5nZSBvbiB0aGlzLmlucHV0XG4gICAgICpcbiAgICAgKi9cbiAgICBpbml0Q2xpY2soKSB7XG4gICAgICAgIHRoaXMuaW5wdXRcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZS50YXJnZXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgdGhpcy5pbnB1dFxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGxpc3QgPSBlLnRhcmdldC5maWxlcztcbiAgICAgICAgICAgICAgICBpZiAobGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgZmlsZUluZGV4IGluIGxpc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNOYU4oZmlsZUluZGV4KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZEZpbGUobGlzdC5pdGVtKGZpbGVJbmRleCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgZmFsc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZSBhIGZpbGUgd2hlbiBpcyBkcm9wcGVkXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZmlsZVxuICAgICAqL1xuICAgIGxvYWRGaWxlKGZpbGUpIHtcbiAgICAgICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgIHJlYWRlci5vbmxvYWQgPSAocmVhZGVyRXZ0KSA9PiB7XG5cbiAgICAgICAgICAgIGxldCBpdGVtID0ge307XG4gICAgICAgICAgICBpdGVtLmRvY19uYW1lID0gZmlsZS5uYW1lO1xuICAgICAgICAgICAgaXRlbS5maWxlQmFzZTY0ID0gYnRvYShyZWFkZXJFdnQudGFyZ2V0LnJlc3VsdCk7XG4gICAgICAgICAgICBpdGVtLmRvY190eXBlID0gZmlsZS50eXBlO1xuICAgICAgICAgICAgaXRlbS5maWxlX3NpemUgPSBmaWxlLnNpemU7XG5cbiAgICAgICAgICAgIHRoaXMubGlzdC5hZGQoaXRlbSk7XG5cbiAgICAgICAgICAgIHRoaXMuJHJvb3RTY29wZS4kYXBwbHkoKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMudXBsb2FkVGltZW91dCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJHRpbWVvdXQuY2FuY2VsKHRoaXMudXBsb2FkVGltZW91dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnVwbG9hZFRpbWVvdXQgPSB0aGlzLiR0aW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyB0b2RvIGRvIHVwbG9hZFxuICAgICAgICAgICAgICAgIC8vIHN1Ym9yeSBzdSB2IHRoaXMubGlzdCBhIHRlbiBqZSBTZXQgLSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9TZXRcbiAgICAgICAgICAgICAgICAvLyBuYSB1cGxvYWQgdHJlYmEgdnl1eml0IEZvcm1EYXRhIC0gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0Zvcm1EYXRhXG4gICAgICAgICAgICAgICAgLy8gZG8gZm9ybURhdGEgc2EgdmtsYWRhIGJ1ZCB0byByZWFkZXJFdnQudGFyZ2V0LnJlc3VsdCBhbGVibyBpdGVtLmZpbGVCYXNlNjQgYWxlYm8gdG90byBpZ25vcm92YXQgYSByb3ZubyBwb3NsYXRcbiAgICAgICAgICAgICAgICAvLyBkbyBmb3JtRGF0YSBmaWxlXG4gICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJlYWRlci5yZWFkQXNCaW5hcnlTdHJpbmcoZmlsZSk7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHRlbXBsYXRlVXJsOiAndXBsb2FkLWZpbGUvdXBsb2FkLmZpbGUudHBsLmh0bWwnLFxuICAgIGNvbnRyb2xsZXI6IFVwbG9hZEZpbGVcbn07IiwiY2xhc3MgVXZvZCB7XG5cbiAgICAvLyBAbmdJbmplY3RcbiAgICBjb25zdHJ1Y3RvcigkaHR0cCwgbWVkaWFTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcbiAgICAgICAgdGhpcy5tZWRpYVNlcnZpY2UgPSBtZWRpYVNlcnZpY2U7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY29udHJvbGxlcjogVXZvZCxcbiAgICB0ZW1wbGF0ZVVybDogJ3V2b2QvdXZvZC50cGwuaHRtbCdcbn07IiwiY29uc3QgVFlQRVMgPSB7XG4gICAgJ1BORyc6IHtcbiAgICAgICAgbGlzdDogWydpbWFnZS9wbmcnXSxcbiAgICAgICAgaW1hZ2U6IHRydWVcbiAgICB9LFxuICAgICdKUEcnOiB7XG4gICAgICAgIGxpc3Q6IFsnaW1hZ2UvanBlZycsICdpbWFnZS9wanBlZyddLFxuICAgICAgICBpbWFnZTogdHJ1ZVxuICAgIH0sXG4gICAgJ0dJRic6IHtcbiAgICAgICAgbGlzdDogWydpbWFnZS9naWYnXSxcbiAgICAgICAgaW1hZ2U6IHRydWVcbiAgICB9LFxuICAgICdCTVAnOiB7XG4gICAgICAgIGxpc3Q6IFsnaW1hZ2UvYm1wJ10sXG4gICAgICAgIGltYWdlOiB0cnVlXG4gICAgfSxcbiAgICAnVElGRic6IFsnaW1hZ2UvaWVmJywgJ2ltYWdlL3RpZmYnXSxcbiAgICAnVFhUJzoge1xuICAgICAgICBsaXN0OiBbJ2FwcGxpY2F0aW9uL3BsYWluJywgJ3RleHQvcGxhaW4nXSxcbiAgICAgICAgaWNvbjogJ2ltZy90eHQucG5nJ1xuICAgIH0sXG4gICAgJ1BERic6IHtcbiAgICAgICAgbGlzdDogW1wiYXBwbGljYXRpb24vcGRmXCJdLFxuICAgICAgICBpY29uOiAnaW1nL3BkZi5wbmcnXG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVkaWFTZXJ2aWNlIHtcblxuICAgIC8vIEBuZ0luamVjdFxuICAgIGNvbnN0cnVjdG9yKCRodHRwLCAkd2luZG93KSB7XG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcbiAgICAgICAgdGhpcy4kd2luZG93ID0gJHdpbmRvdztcblxuICAgICAgICB0aGlzLmRpciA9IG51bGw7XG4gICAgICAgIHRoaXMuZGlyc19kYXRhID0gW107XG4gICAgICAgIHRoaXMuZmlsZXNfZGF0YSA9IFtdO1xuXG4gICAgICAgIHRoaXMuZGlyX2xpc3QgPSBbXTtcblxuICAgICAgICB0aGlzLnNlbGVjdGVkRmlsZSA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5zaG93RGlhbG9nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2hvd0xlZnRNZW51ID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLmxvYWREaXIoKTtcblxuICAgIH1cblxuICAgIGxvYWREaXIoZGlyZWN0b3J5ID0gbnVsbCwgaXNSZXR1cm4gPSBmYWxzZSkge1xuICAgICAgICBsZXQgdXJsQWRyZXNzID0gJyc7XG4gICAgICAgIGlmIChkaXJlY3RvcnkpIHtcbiAgICAgICAgICAgIHVybEFkcmVzcyA9IGRpcmVjdG9yeS5sb2NhdGlvbiArICcvJyArIGRpcmVjdG9yeS5uYW1lO1xuXG4gICAgICAgICAgICBpZiAoaXNSZXR1cm4pIHtcbiAgICAgICAgICAgICAgICB1cmxBZHJlc3MgPSBkaXJlY3RvcnkubG9jYXRpb247XG4gICAgICAgICAgICAgICAgdGhpcy5kaXJfbGlzdC5wb3AoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXJfbGlzdC5wdXNoKGRpcmVjdG9yeS5uYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJGh0dHAuZ2V0KGBodHRwOi8vbWVkaWFicm93c2VyLmJhcnQuc2svZGlyJHt1cmxBZHJlc3N9YClcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlyID0gcmVzcG9uc2UuZGF0YS5kaXI7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXJzX2RhdGEgPSByZXNwb25zZS5kYXRhLmRpcnM7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmZpbGVzX2RhdGEgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBmaWxlIG9mIHJlc3BvbnNlLmRhdGEuZmlsZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlc19kYXRhLnB1c2gobmV3IEZpbGUoZmlsZSkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgbG9hZEZpbGUoZmlsZURpcmVjdG9yeSA9IG51bGwpIHtcbiAgICAgICAgaWYgKGZpbGVEaXJlY3RvcnkudGh1bWJfbGluaykge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEZpbGUgPSBmaWxlRGlyZWN0b3J5LmRvd25sb2FkX2xpbms7XG4gICAgICAgICAgICB0aGlzLnNob3dEaWFsb2cgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuJHdpbmRvdy5vcGVuKGZpbGVEaXJlY3RvcnkuZG93bmxvYWRfbGluaywgJ19ibGFuaycpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHRvZ2dsZUxlZnRNZW51KCkge1xuICAgICAgICB0aGlzLnNob3dMZWZ0TWVudSA9ICF0aGlzLnNob3dMZWZ0TWVudTtcbiAgICB9XG5cbiAgICB0b2dnbGVEaWFsb2coKSB7XG4gICAgICAgIHRoaXMuc2hvd0RpYWxvZyA9ICF0aGlzLnNob3dEaWFsb2c7XG4gICAgfVxuXG4gICAgY2xvc2VEaWFsb2coKXtcbiAgICAgICAgaWYodGhpcy5zaG93RGlhbG9nKVxuICAgICAgICAgICAgdGhpcy5zaG93RGlhbG9nID0gIXRoaXMuc2hvd0RpYWxvZztcbiAgICB9XG59XG5cblxuY2xhc3MgRmlsZSB7XG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgICAgICBhbmd1bGFyLm1lcmdlKHRoaXMsIGRhdGEpO1xuICAgIH1cblxuICAgIGdldFR5cGVOYW1lKGdldEljb24gPSBmYWxzZSkge1xuICAgICAgICBmb3IgKGxldCB0eXBlTmFtZSBpbiBUWVBFUykge1xuICAgICAgICAgICAgbGV0IHR5cGVPYmogPSBUWVBFU1t0eXBlTmFtZV07XG4gICAgICAgICAgICBpZiAoYW5ndWxhci5pc0RlZmluZWQodHlwZU9iai5saXN0KSkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHR5cGUgb2YgdHlwZU9iai5saXN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09IHRoaXMudHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdldEljb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYW5ndWxhci5pc0RlZmluZWQodHlwZU9iai5pbWFnZSkgJiYgdHlwZU9iai5pbWFnZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50aHVtYl9saW5rO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhbmd1bGFyLmlzRGVmaW5lZCh0eXBlT2JqLmljb24pID8gdHlwZU9iai5pY29uIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0eXBlTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGdldCBuaWNlVHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VHlwZU5hbWUoKSA/IHRoaXMuZ2V0VHlwZU5hbWUoKSA6ICdhbnknO1xuICAgIH1cblxuICAgIGdldCBpY29uKCkge1xuICAgICAgICBsZXQgaWNvbiA9IHRoaXMuZ2V0VHlwZU5hbWUodHJ1ZSk7XG4gICAgICAgIHJldHVybiBpY29uID8gaWNvbiA6IFwiaW1nL3BsYWluLnBuZ1wiXG4gICAgfVxuXG5cbn0iLCJyZXF1aXJlKCcuL3RlbXBsYXRlcycpO1xubW9kdWxlLmV4cG9ydHMgPSAndGVtcGxhdGVzJzsiLCJhbmd1bGFyLm1vZHVsZShcInRlbXBsYXRlc1wiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7JHRlbXBsYXRlQ2FjaGUucHV0KFwiYXBwbGljYXRpb24tcm9vdC9hcHBsaWNhdGlvbi5yb290LnRwbC5odG1sXCIsXCI8ZGl2IGlkPVxcXCJva25vXFxcIj5cXG5cXG4gICAgPGxlZnQtbWVudSBuZy1pZj1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLnNob3dMZWZ0TWVudVxcXCI+PC9sZWZ0LW1lbnU+XFxuXFxuICAgIDxkaXYgaWQ9XFxcIm9ic2FoXFxcIiBuZy1jbGFzcz1cXFwie1xcJ2Z1bGxcXCc6ICEkY3RybC5tZWRpYVNlcnZpY2Uuc2hvd0xlZnRNZW51fVxcXCI+XFxuICAgICAgICA8YnJlYWRjcnVtYnM+PC9icmVhZGNydW1icz5cXG5cXG4gICAgICAgIDxkaXYgc3R5bGU9XFxcIm1hcmdpbi1sZWZ0OjIwcHg7IG1hcmdpbi1yaWdodDogMzBweFxcXCI+XFxuXFxuICAgICAgICAgICAgPGRpci1yZXR1cm4+PC9kaXItcmV0dXJuPlxcblxcbiAgICAgICAgICAgIDxkaXItYmFzZT48L2Rpci1iYXNlPlxcblxcbiAgICAgICAgICAgIDxmaWxlPjwvZmlsZT5cXG4gICAgICAgIDwvZGl2PlxcblxcbiAgICA8L2Rpdj5cXG5cXG48L2Rpdj5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJicmVhZGNydW1icy9icmVhZGNydW1icy50cGwuaHRtbFwiLFwiPGRpdiBpZD1cXFwiaGVhZGVyMlxcXCI+XFxuICAgIDxoMj5cXG4gICAgICAgIDxzcGFuPkhvbWU8L3NwYW4+XFxuICAgICAgICA8c3BhbiBuZy1yZXBlYXQ9XFxcImRpck5hbWUgaW4gJGN0cmwubWVkaWFTZXJ2aWNlLmRpcl9saXN0XFxcIj4gLyB7e2Rpck5hbWV9fSA8L3NwYW4+XFxuICAgIDwvaDI+XFxuPC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiZGlyLWJhc2UvZGlyLmJhc2UudHBsLmh0bWxcIixcIjxkaXYgY2xhc3M9XFxcImljb25cXFwiIG5nLXJlcGVhdD1cXFwiZGlyIGluICRjdHJsLm1lZGlhU2VydmljZS5kaXJzX2RhdGFcXFwiIG5nLWNsaWNrPVxcXCIkY3RybC5tZWRpYVNlcnZpY2UubG9hZERpcihkaXIpXFxcIj5cXG4gICAgPGltZyBjbGFzcz1cXFwiaW1nX2ljb25cXFwiIHNyYz1cXFwiaW1nL3ByaWVjaW5vay5wbmdcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJuYXpvdl9zdWJvcnVcXFwiPnt7ZGlyLm5hbWV9fTwvZGl2PlxcbjwvZGl2PlwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImRpci1yZXR1cm4vZGlyLnJldHVybi50cGwuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXFwiaWNvblxcXCIgbmctc2hvdz1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLmRpclxcXCIgbmctY2xpY2s9XFxcIiRjdHJsLm1lZGlhU2VydmljZS5sb2FkRGlyKCRjdHJsLm1lZGlhU2VydmljZS5kaXIsIHRydWUpXFxcIj5cXG4gICAgPGltZyBjbGFzcz1cXFwiaW1nX2ljb25cXFwiIHNyYz1cXFwiaW1nL2FkcmVzYXIucG5nXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwibmF6b3Zfc3Vib3J1XFxcIj5OYWRyYWRlbnkgYWRyZXNhcjwvZGl2PlxcbjwvZGl2PlwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImZpbHRlci1wYW5lbC9maWx0ZXIucGFuZWwudHBsLmh0bWxcIixcIjxkaXYgY2xhc3M9XFxcImZpbHRlci1wYW5lbFxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZpbHRlclxcXCI+PC9kaXY+XFxuICAgIDx1cGxvYWQtZmlsZT48L3VwbG9hZC1maWxlPlxcbjwvZGl2PlwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImxlZnQtbWVudS9sZWZ0Lm1lbnUudHBsLmh0bWxcIixcIjxkaXYgaWQ9XFxcImxlZnRfbWVudVxcXCI+XFxuICAgIDx1bD5cXG4gICAgICAgIDxsaSBuZy1zaG93PVxcXCIkY3RybC5tZWRpYVNlcnZpY2UuZGlyXFxcIiBuZy1jbGljaz1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLmxvYWREaXIoJGN0cmwubWVkaWFTZXJ2aWNlLmRpciwgdHJ1ZSlcXFwiIHN0eWxlPVxcXCJmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxOHB4O1xcXCI+TmFkcmFkZW55IGFkcmVzYXI8L2xpPlxcbiAgICAgICAgPGxpIG5nLXJlcGVhdD1cXFwiZGlyIGluICRjdHJsLm1lZGlhU2VydmljZS5kaXJzX2RhdGFcXFwiIG5nLWNsaWNrPVxcXCIkY3RybC5tZWRpYVNlcnZpY2UubG9hZERpcihkaXIpXFxcIiA+e3tkaXIubmFtZX19PC9saT5cXG4gICAgPC91bD5cXG48L2Rpdj5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJtZWRpYS1icm93c2VyL21lZGlhLmJyb3dzZXIudHBsLmh0bWxcIixcIjxkaXYgaWQ9XFxcIk1lZGlhQnJvd3NlclxcXCI+XFxuICAgIDxkaXYgaWQ9XFxcImhlYWRlcjFcXFwiPlxcbiAgICAgICAgPGltZyBuZy1jbGljaz1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLnRvZ2dsZUxlZnRNZW51KClcXFwiIGlkPVxcXCJtZW51X2ljb25cXFwiIHNyYz1cXFwiaW1nL21lbnUucG5nXFxcIiBzdHlsZT1cXFwid2lkdGg6NTBweDsgaGVpZ2h0OjEwMCU7ZmxvYXQ6bGVmdDsgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXFwiPlxcbiAgICAgICAgPGgxPk1lZGlhIEJyb3dzZXI8L2gxPlxcbiAgICAgICAgPGltZyBpZD1cXFwiemF2cmlfZGlhbG9nXFxcIlxcbiAgICAgICAgICAgICBuZy1jbGljaz1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLnRvZ2dsZURpYWxvZygpXFxcIlxcbiAgICAgICAgICAgICBzcmM9XFxcImltZy9jbG9zZS5wbmdcXFwiIHN0eWxlPVxcXCJ3aWR0aDo0MHB4OyBoZWlnaHQ6MTAwJTtmbG9hdDpyaWdodDsgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxcIj5cXG4gICAgPC9kaXY+XFxuXFxuICAgIDxhcHBsaWNhdGlvbi1yb290PjwvYXBwbGljYXRpb24tcm9vdD5cXG48L2Rpdj5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJzdHZvcmVjL3N0dm9yZWMudHBsLmh0bWxcIixcIjxkaXYgaWQ9XFxcInN0dm9yZWNcXFwiPlxcbiAgICA8aW1nIHN0eWxlPVxcXCJtYXgtaGVpZ2h0OiAyNXZ3OyBtYXgtd2lkdGg6IDI1dnc7XFxcIiBuZy1pZj1cXFwiJGN0cmwuaXNJbWFnZVxcXCIgbmctc3JjPVxcXCJ7eyRjdHJsLm1lZGlhU2VydmljZS5zZWxlY3RlZEZpbGV9fVxcXCI+XFxuPC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwidXBsb2FkLWZpbGUvdXBsb2FkLmZpbGUudHBsLmh0bWxcIixcIjxkaXYgY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPlxcbiAgICA8aW5wdXQgaWQ9XFxcImRyYWdnaW5nXFxcIlxcbiAgICAgICAgICAgY2xhc3M9XFxcImhpZGRlblxcXCJcXG4gICAgICAgICAgIHR5cGU9XFxcImZpbGVcXFwiXFxuICAgICAgICAgICBhY2NlcHQ9XFxcInt7JGN0cmwuZmlsZUFjY2VwdH19XFxcIlxcbiAgICAgICAgICAgbXVsdGlwbGUvPlxcbiAgICA8YSBjbGFzcz1cXFwiY3Vyc29yLXBvaW50ZXJcXFwiIG5nLWNsaWNrPVxcXCIkY3RybC5maXJlVXBsb2FkRXZlbnQoKVxcXCI+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZGlzcGxheS1ibG9ja1xcXCIgdHJhbnNsYXRlPlVwbG9hZDwvc3Bhbj5cXG4gICAgPC9hPlxcbjwvZGl2PlwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcInV2b2QvdXZvZC50cGwuaHRtbFwiLFwiPGRpdj5cXG4gICAgPGRpdiBpZD1cXFwidXZvZFxcXCJcXG4gICAgICAgICBuZy1jbGFzcz1cXFwie1xcJ2hhbGZ2aWV3XFwnOiAkY3RybC5tZWRpYVNlcnZpY2Uuc2hvd0RpYWxvZ31cXFwiXFxuICAgICAgICAgbmctY2xpY2s9XFxcIiRjdHJsLm1lZGlhU2VydmljZS5jbG9zZURpYWxvZygpXFxcIj5cXG4gICAgICAgIDxzdHZvcmVjPjwvc3R2b3JlYz5cXG5cXG4gICAgICAgIDxidXR0b24gaWQ9XFxcInpvYnJhel9kaWFsb2dcXFwiXFxuICAgICAgICAgICAgICAgIG5nLWNsaWNrPVxcXCIkY3RybC5tZWRpYVNlcnZpY2UudG9nZ2xlRGlhbG9nKCk7ICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcXFwiXFxuICAgICAgICAgICAgICAgIHN0eWxlPVxcXCJtYXJnaW4tbGVmdDphdXRvO21hcmdpbi1yaWdodDphdXRvO2Rpc3BsYXk6YmxvY2s7IGJhY2tncm91bmQtY29sb3I6IzQ2NDk0YTtjb2xvcjogd2hpdGU7IHBhZGRpbmc6IDVweCA1cHggNXB4IDVweFxcXCI+Wk9CUkFaSVQgRElBTE9HXFxuICAgICAgICA8L2J1dHRvbj5cXG4gICAgPC9kaXY+XFxuXFxuXFxuICAgIDxtZWRpYS1icm93c2VyIG5nLWlmPVxcXCIkY3RybC5tZWRpYVNlcnZpY2Uuc2hvd0RpYWxvZ1xcXCI+PC9tZWRpYS1icm93c2VyPlxcbjwvZGl2PlwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImZpbGUvZmlsZS50cGwuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXFwiaWNvblxcXCIgbmctcmVwZWF0PVxcXCJmaWxlIGluICRjdHJsLm1lZGlhU2VydmljZS5maWxlc19kYXRhXFxcIiBuZy1jbGljaz1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLmxvYWRGaWxlKGZpbGUpXFxcIj5cXG4gICAgPGltZyBjbGFzcz1cXFwiaW1nX3BpY3R1cmVcXFwiIG5nLXNyYz1cXFwie3tmaWxlLmljb259fVxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcIm5hem92X3N1Ym9ydVxcXCI+e3tmaWxlLm5hbWV9fTwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ0eXBfc3Vib3J1XFxcIj5cXG4gICAgICAgIDxwPnt7ZmlsZS5uaWNlVHlwZX19PC9wPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwidmVsa29zdF9zdWJvcnVcXFwiPlxcbiAgICAgICAgPHA+e3tmaWxlLnNpemV9fTwvcD5cXG4gICAgPC9kaXY+XFxuPC9kaXY+XCIpO31dKTsiXX0=
