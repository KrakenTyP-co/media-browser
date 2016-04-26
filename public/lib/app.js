(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"E:\\media-browser\\src\\app.js":[function(require,module,exports){
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

},{"./app/components/application-root/application.root":"E:\\media-browser\\src\\app\\components\\application-root\\application.root.js","./app/components/breadcrumbs/breadcrumbs":"E:\\media-browser\\src\\app\\components\\breadcrumbs\\breadcrumbs.js","./app/components/dir-base/dir.base":"E:\\media-browser\\src\\app\\components\\dir-base\\dir.base.js","./app/components/dir-return/dir.return":"E:\\media-browser\\src\\app\\components\\dir-return\\dir.return.js","./app/components/file/file":"E:\\media-browser\\src\\app\\components\\file\\file.js","./app/components/filter-panel/filter.panel":"E:\\media-browser\\src\\app\\components\\filter-panel\\filter.panel.js","./app/components/left-menu/left.menu":"E:\\media-browser\\src\\app\\components\\left-menu\\left.menu.js","./app/components/media-browser/media.browser":"E:\\media-browser\\src\\app\\components\\media-browser\\media.browser.js","./app/components/stvorec/stvorec":"E:\\media-browser\\src\\app\\components\\stvorec\\stvorec.js","./app/components/upload-file/upload.file":"E:\\media-browser\\src\\app\\components\\upload-file\\upload.file.js","./app/components/uvod/uvod":"E:\\media-browser\\src\\app\\components\\uvod\\uvod.js","./app/media.service":"E:\\media-browser\\src\\app\\media.service.js","./tpl/index":"E:\\media-browser\\src\\tpl\\index.js"}],"E:\\media-browser\\src\\app\\components\\application-root\\application.root.js":[function(require,module,exports){
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

},{}],"E:\\media-browser\\src\\app\\components\\breadcrumbs\\breadcrumbs.js":[function(require,module,exports){
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

},{}],"E:\\media-browser\\src\\app\\components\\filter-panel\\filter.panel.js":[function(require,module,exports){
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

},{}],"E:\\media-browser\\src\\app\\components\\media-browser\\media.browser.js":[function(require,module,exports){
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

},{}],"E:\\media-browser\\src\\app\\components\\upload-file\\upload.file.js":[function(require,module,exports){
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

},{}],"E:\\media-browser\\src\\app\\components\\uvod\\uvod.js":[function(require,module,exports){
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

        this.order_files_by = "";
        this.filter_files = "";

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

},{}],"E:\\media-browser\\src\\tpl\\index.js":[function(require,module,exports){
'use strict';

require('./templates');
module.exports = 'templates';

},{"./templates":"E:\\media-browser\\src\\tpl\\templates.js"}],"E:\\media-browser\\src\\tpl\\templates.js":[function(require,module,exports){
"use strict";

angular.module("templates", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("application-root/application.root.tpl.html", "<div id=\"okno\">\r\n\r\n    <left-menu ng-if=\"$ctrl.mediaService.showLeftMenu\"></left-menu>\r\n\r\n    <div id=\"obsah\" ng-class=\"{\'full\': !$ctrl.mediaService.showLeftMenu}\">\r\n        <breadcrumbs></breadcrumbs>\r\n        <filter-panel></filter-panel>\r\n\r\n        <div style=\"margin-left:20px; margin-right: 30px\">\r\n\r\n            <dir-return></dir-return>\r\n\r\n            <dir-base></dir-base>\r\n\r\n            <file></file>\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>");
  $templateCache.put("breadcrumbs/breadcrumbs.tpl.html", "<div id=\"header2\">\r\n    <h2>\r\n        <span>Home</span>\r\n        <span ng-repeat=\"dirName in $ctrl.mediaService.dir_list\"> / {{dirName}} </span>\r\n    </h2>\r\n</div>");
  $templateCache.put("dir-base/dir.base.tpl.html", "<div class=\"icon\" ng-repeat=\"dir in $ctrl.mediaService.dirs_data | filter: {name :$ctrl.mediaService.filter_files}\" ng-click=\"$ctrl.mediaService.loadDir(dir)\">\r\n    <img class=\"img_icon\" src=\"img/priecinok.png\">\r\n    <div class=\"nazov_suboru\">{{dir.name}}</div>\r\n</div>");
  $templateCache.put("dir-return/dir.return.tpl.html", "<div class=\"icon\" ng-show=\"$ctrl.mediaService.dir\" ng-click=\"$ctrl.mediaService.loadDir($ctrl.mediaService.dir, true)\">\r\n    <img class=\"img_icon\" src=\"img/adresar.png\">\r\n    <div class=\"nazov_suboru\">Nadradeny adresar</div>\r\n</div>");
  $templateCache.put("file/file.tpl.html", "<div class=\"icon\" ng-repeat=\"file in $ctrl.mediaService.files_data | orderBy: $ctrl.mediaService.order_files_by | filter:{name :$ctrl.mediaService.filter_files}\" ng-click=\"$ctrl.mediaService.loadFile(file)\">\r\n    <img class=\"img_picture\" ng-src=\"{{file.icon}}\">\r\n    <div class=\"nazov_suboru\">{{file.name}}</div>\r\n    <div class=\"typ_suboru\">\r\n        <p>{{file.niceType}}</p>\r\n    </div>\r\n    <div class=\"velkost_suboru\">\r\n        <p>{{file.size}}</p>\r\n    </div>\r\n</div>");
  $templateCache.put("filter-panel/filter.panel.tpl.html", "<div class=\"filter-panel\">\r\n    <div class=\"filter\">\r\n        <upload-file></upload-file>\r\n        <p>Hladat:\r\n            <input ng-model=\"$ctrl.mediaService.filter_files\"/>\r\n        </p>\r\n        <p>Zoradit podla:\r\n            <select ng-model=\"$ctrl.mediaService.order_files_by\">\r\n                <option value=\"name\">Nazvu</option>\r\n                <option value=\"size\">Velkosti</option>\r\n                <option value=\"created_time\">Datumu vytvorenia</option>\r\n                <option value=\"niceType\">Typu suboru</option>\r\n            </select>\r\n        </p>\r\n    </div>\r\n</div>");
  $templateCache.put("left-menu/left.menu.tpl.html", "<div id=\"left_menu\">\r\n    <ul>\r\n        <li ng-show=\"$ctrl.mediaService.dir\" ng-click=\"$ctrl.mediaService.loadDir($ctrl.mediaService.dir, true)\" style=\"font-weight: bold; font-size: 18px;\">Nadradeny adresar</li>\r\n        <li ng-repeat=\"dir in $ctrl.mediaService.dirs_data\" ng-click=\"$ctrl.mediaService.loadDir(dir)\" >{{dir.name}}</li>\r\n    </ul>\r\n</div>");
  $templateCache.put("media-browser/media.browser.tpl.html", "<div id=\"MediaBrowser\">\r\n    <div id=\"header1\">\r\n        <img ng-click=\"$ctrl.mediaService.toggleLeftMenu()\" id=\"menu_icon\" src=\"img/menu.png\" style=\"width:50px; height:100%;float:left; align-self: flex-start;\">\r\n        <h1>Media Browser</h1>\r\n        <img id=\"zavri_dialog\"\r\n             ng-click=\"$ctrl.mediaService.toggleDialog()\"\r\n             src=\"img/close.png\" style=\"width:40px; height:100%;float:right; align-self: flex-end;\">\r\n    </div>\r\n\r\n    <application-root></application-root>\r\n</div>");
  $templateCache.put("stvorec/stvorec.tpl.html", "<div id=\"stvorec\">\r\n    <img style=\"max-height: 25vw; max-width: 25vw;\" ng-if=\"$ctrl.isImage\" ng-src=\"{{$ctrl.mediaService.selectedFile}}\">\r\n</div>");
  $templateCache.put("upload-file/upload.file.tpl.html", "<div class=\"pull-right\">\r\n    <input id=\"dragging\"\r\n           class=\"hidden\"\r\n           type=\"file\"\r\n           accept=\"{{$ctrl.fileAccept}}\"\r\n           multiple/>\r\n    <div>\r\n        <span>Upload suboru: </span>\r\n        <a class=\"cursor-pointer\" ng-click=\"$ctrl.fireUploadEvent()\">\r\n            <span class=\"display-block\" translate>Upload</span>\r\n        </a>\r\n    </div>\r\n    <p>Novy adresar:\r\n        <input/>\r\n        <button>CREATE</button>\r\n    </p>\r\n</div>");
  $templateCache.put("uvod/uvod.tpl.html", "<div>\r\n    <div id=\"uvod\"\r\n         ng-class=\"{\'halfview\': $ctrl.mediaService.showDialog}\"\r\n         ng-click=\"$ctrl.mediaService.closeDialog()\">\r\n        <stvorec></stvorec>\r\n\r\n        <button id=\"zobraz_dialog\"\r\n                ng-click=\"$ctrl.mediaService.toggleDialog(); $event.stopPropagation();\"\r\n                style=\"margin-left:auto;margin-right:auto;display:block; background-color:#46494a;color: white; padding: 5px 5px 5px 5px\">ZOBRAZIT DIALOG\r\n        </button>\r\n    </div>\r\n\r\n\r\n    <media-browser ng-if=\"$ctrl.mediaService.showDialog\"></media-browser>\r\n</div>");
}]);

},{}]},{},["E:\\media-browser\\src\\app.js"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGFwcC5qcyIsInNyY1xcYXBwXFxjb21wb25lbnRzXFxhcHBsaWNhdGlvbi1yb290XFxhcHBsaWNhdGlvbi5yb290LmpzIiwic3JjXFxhcHBcXGNvbXBvbmVudHNcXGJyZWFkY3J1bWJzXFxicmVhZGNydW1icy5qcyIsInNyY1xcYXBwXFxjb21wb25lbnRzXFxkaXItYmFzZVxcZGlyLmJhc2UuanMiLCJzcmNcXGFwcFxcY29tcG9uZW50c1xcZGlyLXJldHVyblxcZGlyLnJldHVybi5qcyIsInNyY1xcYXBwXFxjb21wb25lbnRzXFxmaWxlXFxmaWxlLmpzIiwic3JjXFxhcHBcXGNvbXBvbmVudHNcXGZpbHRlci1wYW5lbFxcZmlsdGVyLnBhbmVsLmpzIiwic3JjXFxhcHBcXGNvbXBvbmVudHNcXGxlZnQtbWVudVxcbGVmdC5tZW51LmpzIiwic3JjXFxhcHBcXGNvbXBvbmVudHNcXG1lZGlhLWJyb3dzZXJcXG1lZGlhLmJyb3dzZXIuanMiLCJzcmNcXGFwcFxcY29tcG9uZW50c1xcc3R2b3JlY1xcc3R2b3JlYy5qcyIsInNyY1xcYXBwXFxjb21wb25lbnRzXFx1cGxvYWQtZmlsZVxcdXBsb2FkLmZpbGUuanMiLCJzcmNcXGFwcFxcY29tcG9uZW50c1xcdXZvZFxcdXZvZC5qcyIsInNyY1xcYXBwXFxtZWRpYS5zZXJ2aWNlLmpzIiwic3JjXFx0cGxcXGluZGV4LmpzIiwic3JjXFx0cGxcXHRlbXBsYXRlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7OztBQUVBLFFBQVEsTUFBUixDQUFlLFNBQWYsRUFBMEIsaUJBQTFCLEVBQ0ssU0FETCxDQUNlLE1BRGYsa0JBRUssU0FGTCxD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aUJBQWUsR0FBZixDQUFtQixrQ0FBbkIsRUFBc0QsbUxBQXRELEVBRGdGO0FBRWhGLGlCQUFlLEdBQWYsQ0FBbUIsNEJBQW5CLEVBQWdELGlTQUFoRCxFQUZnRjtBQUdoRixpQkFBZSxHQUFmLENBQW1CLGdDQUFuQixFQUFvRCw0UEFBcEQsRUFIZ0Y7QUFJaEYsaUJBQWUsR0FBZixDQUFtQixvQkFBbkIsRUFBd0MsNGZBQXhDLEVBSmdGO0FBS2hGLGlCQUFlLEdBQWYsQ0FBbUIsb0NBQW5CLEVBQXdELHduQkFBeEQsRUFMZ0Y7QUFNaEYsaUJBQWUsR0FBZixDQUFtQiw4QkFBbkIsRUFBa0QseVhBQWxELEVBTmdGO0FBT2hGLGlCQUFlLEdBQWYsQ0FBbUIsc0NBQW5CLEVBQTBELCtoQkFBMUQsRUFQZ0Y7QUFRaEYsaUJBQWUsR0FBZixDQUFtQiwwQkFBbkIsRUFBOEMsaUtBQTlDLEVBUmdGO0FBU2hGLGlCQUFlLEdBQWYsQ0FBbUIsa0NBQW5CLEVBQXNELHNnQkFBdEQsRUFUZ0Y7QUFVaEYsaUJBQWUsR0FBZixDQUFtQixvQkFBbkIsRUFBd0MsNG1CQUF4QyxFQVZnRjtDQUF6QixDQUF2RCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi90cGwvaW5kZXgnO1xyXG5pbXBvcnQgdXZvZCBmcm9tICcuL2FwcC9jb21wb25lbnRzL3V2b2QvdXZvZCc7XHJcbmltcG9ydCBtZWRpYUJyb3dzZXIgZnJvbSAnLi9hcHAvY29tcG9uZW50cy9tZWRpYS1icm93c2VyL21lZGlhLmJyb3dzZXInO1xyXG5pbXBvcnQgcm9vdCBmcm9tICcuL2FwcC9jb21wb25lbnRzL2FwcGxpY2F0aW9uLXJvb3QvYXBwbGljYXRpb24ucm9vdCc7XHJcbmltcG9ydCBsZWZ0TWVudSBmcm9tICcuL2FwcC9jb21wb25lbnRzL2xlZnQtbWVudS9sZWZ0Lm1lbnUnO1xyXG5pbXBvcnQgZGlyUmV0dXJuIGZyb20gJy4vYXBwL2NvbXBvbmVudHMvZGlyLXJldHVybi9kaXIucmV0dXJuJztcclxuaW1wb3J0IGRpckJhc2UgZnJvbSAnLi9hcHAvY29tcG9uZW50cy9kaXItYmFzZS9kaXIuYmFzZSc7XHJcbmltcG9ydCBmaWxlIGZyb20gJy4vYXBwL2NvbXBvbmVudHMvZmlsZS9maWxlJztcclxuaW1wb3J0IHN0dm9yZWMgZnJvbSAnLi9hcHAvY29tcG9uZW50cy9zdHZvcmVjL3N0dm9yZWMnO1xyXG5pbXBvcnQgYnJlYWRjcnVtYnMgZnJvbSAnLi9hcHAvY29tcG9uZW50cy9icmVhZGNydW1icy9icmVhZGNydW1icyc7XHJcbmltcG9ydCBmaWx0ZXJQYW5lbCBmcm9tICcuL2FwcC9jb21wb25lbnRzL2ZpbHRlci1wYW5lbC9maWx0ZXIucGFuZWwnO1xyXG5pbXBvcnQgdXBsb2FkRmlsZSBmcm9tICcuL2FwcC9jb21wb25lbnRzL3VwbG9hZC1maWxlL3VwbG9hZC5maWxlJztcclxuXHJcbmltcG9ydCBNZWRpYVNlcnZpY2UgZnJvbSAnLi9hcHAvbWVkaWEuc2VydmljZSc7XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgnYnJvd3NlcicsIFt0ZW1wbGF0ZV0pXHJcbiAgICAuY29tcG9uZW50KCd1dm9kJywgdXZvZClcclxuICAgIC5jb21wb25lbnQoJ21lZGlhQnJvd3NlcicsIG1lZGlhQnJvd3NlcilcclxuICAgIC5jb21wb25lbnQoJ2FwcGxpY2F0aW9uUm9vdCcsIHJvb3QpXHJcbiAgICAuY29tcG9uZW50KCdsZWZ0TWVudScsIGxlZnRNZW51KVxyXG4gICAgLmNvbXBvbmVudCgnZGlyUmV0dXJuJywgZGlyUmV0dXJuKVxyXG4gICAgLmNvbXBvbmVudCgnZGlyQmFzZScsIGRpckJhc2UpXHJcbiAgICAuY29tcG9uZW50KCdmaWxlJywgZmlsZSlcclxuICAgIC5jb21wb25lbnQoJ3N0dm9yZWMnLCBzdHZvcmVjKVxyXG4gICAgLmNvbXBvbmVudCgnYnJlYWRjcnVtYnMnLCBicmVhZGNydW1icylcclxuICAgIC5jb21wb25lbnQoJ2ZpbHRlclBhbmVsJywgZmlsdGVyUGFuZWwpXHJcbiAgICAuY29tcG9uZW50KCd1cGxvYWRGaWxlJywgdXBsb2FkRmlsZSlcclxuXHJcbiAgICAuc2VydmljZSgnbWVkaWFTZXJ2aWNlJywgTWVkaWFTZXJ2aWNlKVxyXG47IiwiY2xhc3MgQXBwbGljYXRpb25Sb290e1xyXG5cclxuICAgIC8vIEBuZ0luamVjdFxyXG4gICAgY29uc3RydWN0b3IoJGh0dHAsIG1lZGlhU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgICAgICB0aGlzLm1lZGlhU2VydmljZSA9IG1lZGlhU2VydmljZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgY29udHJvbGxlcjogQXBwbGljYXRpb25Sb290LFxyXG4gICAgdGVtcGxhdGVVcmw6ICdhcHBsaWNhdGlvbi1yb290L2FwcGxpY2F0aW9uLnJvb3QudHBsLmh0bWwnXHJcbn07IiwiY2xhc3MgQnJlYWRjcnVtYnMge1xyXG5cclxuICAgIC8vIEBuZ0luamVjdFxyXG4gICAgY29uc3RydWN0b3IoJGh0dHAsIG1lZGlhU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgICAgICB0aGlzLm1lZGlhU2VydmljZSA9IG1lZGlhU2VydmljZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgY29udHJvbGxlcjogQnJlYWRjcnVtYnMsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2JyZWFkY3J1bWJzL2JyZWFkY3J1bWJzLnRwbC5odG1sJ1xyXG59IiwiY2xhc3MgRGlyQmFzZSB7XHJcblxyXG4gICAgLy8gQG5nSW5qZWN0XHJcbiAgICBjb25zdHJ1Y3RvcigkaHR0cCwgbWVkaWFTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgICAgIHRoaXMubWVkaWFTZXJ2aWNlID0gbWVkaWFTZXJ2aWNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBjb250cm9sbGVyOiBEaXJCYXNlLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdkaXItYmFzZS9kaXIuYmFzZS50cGwuaHRtbCdcclxufSIsImNsYXNzIERpclJldHVybiB7XHJcblxyXG4gICAgLy8gQG5nSW5qZWN0XHJcbiAgICBjb25zdHJ1Y3RvcigkaHR0cCwgbWVkaWFTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgICAgIHRoaXMubWVkaWFTZXJ2aWNlID0gbWVkaWFTZXJ2aWNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBjb250cm9sbGVyOiBEaXJSZXR1cm4sXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2Rpci1yZXR1cm4vZGlyLnJldHVybi50cGwuaHRtbCdcclxufSIsImNsYXNzIEZpbGUge1xyXG5cclxuICAgIC8vIEBuZ0luamVjdFxyXG4gICAgY29uc3RydWN0b3IoJGh0dHAsIG1lZGlhU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgICAgICB0aGlzLm1lZGlhU2VydmljZSA9IG1lZGlhU2VydmljZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHR7XHJcbiAgICBjb250cm9sbGVyOiBGaWxlLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdmaWxlL2ZpbGUudHBsLmh0bWwnXHJcbn0iLCJjbGFzcyBGaWx0ZXJQYW5lbCB7XHJcblxyXG4gICAgLy8gQG5nSW5qZWN0XHJcbiAgICBjb25zdHJ1Y3RvcigkaHR0cCwgbWVkaWFTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgICAgIHRoaXMubWVkaWFTZXJ2aWNlID0gbWVkaWFTZXJ2aWNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBjb250cm9sbGVyOiBGaWx0ZXJQYW5lbCxcclxuICAgIHRlbXBsYXRlVXJsOiAnZmlsdGVyLXBhbmVsL2ZpbHRlci5wYW5lbC50cGwuaHRtbCdcclxufTsiLCJjbGFzcyBMZWZ0TWVudSB7XHJcblxyXG4gICAgLy8gQG5nSW5qZWN0XHJcbiAgICBjb25zdHJ1Y3RvcigkaHR0cCwgbWVkaWFTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgICAgIHRoaXMubWVkaWFTZXJ2aWNlID0gbWVkaWFTZXJ2aWNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBjb250cm9sbGVyOiBMZWZ0TWVudSxcclxuICAgIHRlbXBsYXRlVXJsOiAnbGVmdC1tZW51L2xlZnQubWVudS50cGwuaHRtbCdcclxufSIsImNsYXNzIE1lZGlhQnJvd3NlciB7XHJcblxyXG4gICAgLy8gQG5nSW5qZWN0XHJcbiAgICBjb25zdHJ1Y3RvcigkaHR0cCwgbWVkaWFTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgICAgIHRoaXMubWVkaWFTZXJ2aWNlID0gbWVkaWFTZXJ2aWNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBjb250cm9sbGVyOiBNZWRpYUJyb3dzZXIsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ21lZGlhLWJyb3dzZXIvbWVkaWEuYnJvd3Nlci50cGwuaHRtbCdcclxufTsiLCJjbGFzcyBTdHZvcmVje1xyXG5cclxuICAgIC8vIEBuZ0luamVjdFxyXG4gICAgY29uc3RydWN0b3IoJGh0dHAsIG1lZGlhU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgICAgICB0aGlzLm1lZGlhU2VydmljZSA9IG1lZGlhU2VydmljZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaXNJbWFnZSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1lZGlhU2VydmljZS5zZWxlY3RlZEZpbGUgPyB0cnVlIDogZmFsc2U7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBjb250cm9sbGVyOiBTdHZvcmVjLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdzdHZvcmVjL3N0dm9yZWMudHBsLmh0bWwnXHJcbn0iLCJjbGFzcyBVcGxvYWRGaWxlIHtcclxuXHJcbiAgICAvLyBAbmdJbmplY3RcclxuICAgIGNvbnN0cnVjdG9yKCR0aW1lb3V0LCAkZWxlbWVudCwgJHdpbmRvdywgJHJvb3RTY29wZSwgbWVkaWFTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy4kdGltZW91dCA9ICR0aW1lb3V0O1xyXG4gICAgICAgIHRoaXMuJGVsZW1lbnQgPSAkZWxlbWVudDtcclxuICAgICAgICB0aGlzLiR3aW5kb3cgPSAkd2luZG93O1xyXG4gICAgICAgIHRoaXMuJHJvb3RTY29wZSA9ICRyb290U2NvcGU7XHJcbiAgICAgICAgdGhpcy5tZWRpYVNlcnZpY2UgPSBtZWRpYVNlcnZpY2U7XHJcblxyXG4gICAgICAgIHRoaXMudXBsb2FkVGltZW91dCA9IG51bGw7XHJcblxyXG4gICAgICAgIHRoaXMubGlzdCA9IG5ldyBTZXQoKTtcclxuXHJcbiAgICAgICAgLy8gZGVmYXVsdCB2YWx1ZXNcclxuICAgICAgICBpZiAoIXRoaXMuZmlsZUFjY2VwdCkge1xyXG4gICAgICAgICAgICB0aGlzLmZpbGVBY2NlcHQgPSAnJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJG9uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmlucHV0ID0gdGhpcy4kZWxlbWVudC5maW5kKFwiaW5wdXRcIilbMF07XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdENsaWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUcmlnZ2VyIGNsaWNrIGV2ZW50IG9uIHRoaXMuaW5wdXRcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIGZpcmVVcGxvYWRFdmVudCgpIHtcclxuICAgICAgICBpZiAodGhpcy4kd2luZG93LkN1c3RvbUV2ZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXQuZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudChcImNsaWNrXCIpKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGRvY3VtZW50LmNyZWF0ZUV2ZW50KSB7XHJcbiAgICAgICAgICAgIGxldCBldiA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdIVE1MRXZlbnRzJyk7XHJcbiAgICAgICAgICAgIGV2LmluaXRFdmVudCgnY29udGV4dG1lbnUnLCB0cnVlLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXQuZGlzcGF0Y2hFdmVudChldik7XHJcbiAgICAgICAgfSBlbHNlIHsgLy8gSW50ZXJuZXQgRXhwbG9yZXJcclxuICAgICAgICAgICAgdGhpcy5pbnB1dC5maXJlRXZlbnQoJ29uY29udGV4dG1lbnUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgbGlzdGVuZXIgZm9yIGNoYW5nZSBvbiB0aGlzLmlucHV0XHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBpbml0Q2xpY2soKSB7XHJcbiAgICAgICAgdGhpcy5pbnB1dFxyXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS50YXJnZXQudmFsdWUgPSAnJztcclxuICAgICAgICAgICAgfSwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuaW5wdXRcclxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGlzdCA9IGUudGFyZ2V0LmZpbGVzO1xyXG4gICAgICAgICAgICAgICAgaWYgKGxpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgZmlsZUluZGV4IGluIGxpc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc05hTihmaWxlSW5kZXgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRGaWxlKGxpc3QuaXRlbShmaWxlSW5kZXgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSGFuZGxlIGEgZmlsZSB3aGVuIGlzIGRyb3BwZWRcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gZmlsZVxyXG4gICAgICovXHJcbiAgICBsb2FkRmlsZShmaWxlKSB7XHJcbiAgICAgICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgcmVhZGVyLm9ubG9hZCA9IChyZWFkZXJFdnQpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGxldCBpdGVtID0ge307XHJcbiAgICAgICAgICAgIGl0ZW0uZG9jX25hbWUgPSBmaWxlLm5hbWU7XHJcbiAgICAgICAgICAgIGl0ZW0uZmlsZUJhc2U2NCA9IGJ0b2EocmVhZGVyRXZ0LnRhcmdldC5yZXN1bHQpO1xyXG4gICAgICAgICAgICBpdGVtLmRvY190eXBlID0gZmlsZS50eXBlO1xyXG4gICAgICAgICAgICBpdGVtLmZpbGVfc2l6ZSA9IGZpbGUuc2l6ZTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubGlzdC5hZGQoaXRlbSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLiRyb290U2NvcGUuJGFwcGx5KCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy51cGxvYWRUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiR0aW1lb3V0LmNhbmNlbCh0aGlzLnVwbG9hZFRpbWVvdXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudXBsb2FkVGltZW91dCA9IHRoaXMuJHRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gdG9kbyBkbyB1cGxvYWRcclxuICAgICAgICAgICAgICAgIC8vIHN1Ym9yeSBzdSB2IHRoaXMubGlzdCBhIHRlbiBqZSBTZXQgLSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9TZXRcclxuICAgICAgICAgICAgICAgIC8vIG5hIHVwbG9hZCB0cmViYSB2eXV6aXQgRm9ybURhdGEgLSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRm9ybURhdGFcclxuICAgICAgICAgICAgICAgIC8vIGRvIGZvcm1EYXRhIHNhIHZrbGFkYSBidWQgdG8gcmVhZGVyRXZ0LnRhcmdldC5yZXN1bHQgYWxlYm8gaXRlbS5maWxlQmFzZTY0IGFsZWJvIHRvdG8gaWdub3JvdmF0IGEgcm92bm8gcG9zbGF0XHJcbiAgICAgICAgICAgICAgICAvLyBkbyBmb3JtRGF0YSBmaWxlXHJcbiAgICAgICAgICAgIH0sIDIwMCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmVhZGVyLnJlYWRBc0JpbmFyeVN0cmluZyhmaWxlKTtcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHRlbXBsYXRlVXJsOiAndXBsb2FkLWZpbGUvdXBsb2FkLmZpbGUudHBsLmh0bWwnLFxyXG4gICAgY29udHJvbGxlcjogVXBsb2FkRmlsZVxyXG59OyIsImNsYXNzIFV2b2Qge1xyXG5cclxuICAgIC8vIEBuZ0luamVjdFxyXG4gICAgY29uc3RydWN0b3IoJGh0dHAsIG1lZGlhU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgICAgICB0aGlzLm1lZGlhU2VydmljZSA9IG1lZGlhU2VydmljZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgY29udHJvbGxlcjogVXZvZCxcclxuICAgIHRlbXBsYXRlVXJsOiAndXZvZC91dm9kLnRwbC5odG1sJ1xyXG59OyIsImNvbnN0IFRZUEVTID0ge1xyXG4gICAgJ1BORyc6IHtcclxuICAgICAgICBsaXN0OiBbJ2ltYWdlL3BuZyddLFxyXG4gICAgICAgIGltYWdlOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgJ0pQRyc6IHtcclxuICAgICAgICBsaXN0OiBbJ2ltYWdlL2pwZWcnLCAnaW1hZ2UvcGpwZWcnXSxcclxuICAgICAgICBpbWFnZTogdHJ1ZVxyXG4gICAgfSxcclxuICAgICdHSUYnOiB7XHJcbiAgICAgICAgbGlzdDogWydpbWFnZS9naWYnXSxcclxuICAgICAgICBpbWFnZTogdHJ1ZVxyXG4gICAgfSxcclxuICAgICdCTVAnOiB7XHJcbiAgICAgICAgbGlzdDogWydpbWFnZS9ibXAnXSxcclxuICAgICAgICBpbWFnZTogdHJ1ZVxyXG4gICAgfSxcclxuICAgICdUSUZGJzogWydpbWFnZS9pZWYnLCAnaW1hZ2UvdGlmZiddLFxyXG4gICAgJ1RYVCc6IHtcclxuICAgICAgICBsaXN0OiBbJ2FwcGxpY2F0aW9uL3BsYWluJywgJ3RleHQvcGxhaW4nXSxcclxuICAgICAgICBpY29uOiAnaW1nL3R4dC5wbmcnXHJcbiAgICB9LFxyXG4gICAgJ1BERic6IHtcclxuICAgICAgICBsaXN0OiBbXCJhcHBsaWNhdGlvbi9wZGZcIl0sXHJcbiAgICAgICAgaWNvbjogJ2ltZy9wZGYucG5nJ1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVkaWFTZXJ2aWNlIHtcclxuXHJcbiAgICAvLyBAbmdJbmplY3RcclxuICAgIGNvbnN0cnVjdG9yKCRodHRwLCAkd2luZG93KSB7XHJcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgICAgIHRoaXMuJHdpbmRvdyA9ICR3aW5kb3c7XHJcblxyXG4gICAgICAgIHRoaXMuZGlyID0gbnVsbDtcclxuICAgICAgICB0aGlzLmRpcnNfZGF0YSA9IFtdO1xyXG4gICAgICAgIHRoaXMuZmlsZXNfZGF0YSA9IFtdO1xyXG5cclxuICAgICAgICB0aGlzLmRpcl9saXN0ID0gW107XHJcblxyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRGaWxlID0gbnVsbDtcclxuXHJcbiAgICAgICAgdGhpcy5zaG93RGlhbG9nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zaG93TGVmdE1lbnUgPSB0cnVlO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5vcmRlcl9maWxlc19ieSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJfZmlsZXMgPSBcIlwiO1xyXG5cclxuICAgICAgICB0aGlzLmxvYWREaXIoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbG9hZERpcihkaXJlY3RvcnkgPSBudWxsLCBpc1JldHVybiA9IGZhbHNlKSB7XHJcbiAgICAgICAgbGV0IHVybEFkcmVzcyA9ICcnO1xyXG4gICAgICAgIGlmIChkaXJlY3RvcnkpIHtcclxuICAgICAgICAgICAgdXJsQWRyZXNzID0gZGlyZWN0b3J5LmxvY2F0aW9uICsgJy8nICsgZGlyZWN0b3J5Lm5hbWU7XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNSZXR1cm4pIHtcclxuICAgICAgICAgICAgICAgIHVybEFkcmVzcyA9IGRpcmVjdG9yeS5sb2NhdGlvbjtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlyX2xpc3QucG9wKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpcl9saXN0LnB1c2goZGlyZWN0b3J5Lm5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLiRodHRwLmdldChgaHR0cDovL21lZGlhYnJvd3Nlci5iYXJ0LnNrL2RpciR7dXJsQWRyZXNzfWApXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXIgPSByZXNwb25zZS5kYXRhLmRpcjtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlyc19kYXRhID0gcmVzcG9uc2UuZGF0YS5kaXJzO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsZXNfZGF0YSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgZmlsZSBvZiByZXNwb25zZS5kYXRhLmZpbGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlc19kYXRhLnB1c2gobmV3IEZpbGUoZmlsZSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgbG9hZEZpbGUoZmlsZURpcmVjdG9yeSA9IG51bGwpIHtcclxuICAgICAgICBpZiAoZmlsZURpcmVjdG9yeS50aHVtYl9saW5rKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRGaWxlID0gZmlsZURpcmVjdG9yeS5kb3dubG9hZF9saW5rO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dEaWFsb2cgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuJHdpbmRvdy5vcGVuKGZpbGVEaXJlY3RvcnkuZG93bmxvYWRfbGluaywgJ19ibGFuaycpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdG9nZ2xlTGVmdE1lbnUoKSB7XHJcbiAgICAgICAgdGhpcy5zaG93TGVmdE1lbnUgPSAhdGhpcy5zaG93TGVmdE1lbnU7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlRGlhbG9nKCkge1xyXG4gICAgICAgIHRoaXMuc2hvd0RpYWxvZyA9ICF0aGlzLnNob3dEaWFsb2c7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VEaWFsb2coKXtcclxuICAgICAgICBpZih0aGlzLnNob3dEaWFsb2cpXHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0RpYWxvZyA9ICF0aGlzLnNob3dEaWFsb2c7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5jbGFzcyBGaWxlIHtcclxuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcclxuICAgICAgICBhbmd1bGFyLm1lcmdlKHRoaXMsIGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFR5cGVOYW1lKGdldEljb24gPSBmYWxzZSkge1xyXG4gICAgICAgIGZvciAobGV0IHR5cGVOYW1lIGluIFRZUEVTKSB7XHJcbiAgICAgICAgICAgIGxldCB0eXBlT2JqID0gVFlQRVNbdHlwZU5hbWVdO1xyXG4gICAgICAgICAgICBpZiAoYW5ndWxhci5pc0RlZmluZWQodHlwZU9iai5saXN0KSkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgdHlwZSBvZiB0eXBlT2JqLmxpc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PSB0aGlzLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdldEljb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbmd1bGFyLmlzRGVmaW5lZCh0eXBlT2JqLmltYWdlKSAmJiB0eXBlT2JqLmltYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudGh1bWJfbGluaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFuZ3VsYXIuaXNEZWZpbmVkKHR5cGVPYmouaWNvbikgPyB0eXBlT2JqLmljb24gOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVOYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbmljZVR5cGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VHlwZU5hbWUoKSA/IHRoaXMuZ2V0VHlwZU5hbWUoKSA6ICdhbnknO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBpY29uKCkge1xyXG4gICAgICAgIGxldCBpY29uID0gdGhpcy5nZXRUeXBlTmFtZSh0cnVlKTtcclxuICAgICAgICByZXR1cm4gaWNvbiA/IGljb24gOiBcImltZy9wbGFpbi5wbmdcIlxyXG4gICAgfVxyXG5cclxuXHJcbn0iLCJyZXF1aXJlKCcuL3RlbXBsYXRlcycpO1xyXG5tb2R1bGUuZXhwb3J0cyA9ICd0ZW1wbGF0ZXMnOyIsImFuZ3VsYXIubW9kdWxlKFwidGVtcGxhdGVzXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHskdGVtcGxhdGVDYWNoZS5wdXQoXCJhcHBsaWNhdGlvbi1yb290L2FwcGxpY2F0aW9uLnJvb3QudHBsLmh0bWxcIixcIjxkaXYgaWQ9XFxcIm9rbm9cXFwiPlxcclxcblxcclxcbiAgICA8bGVmdC1tZW51IG5nLWlmPVxcXCIkY3RybC5tZWRpYVNlcnZpY2Uuc2hvd0xlZnRNZW51XFxcIj48L2xlZnQtbWVudT5cXHJcXG5cXHJcXG4gICAgPGRpdiBpZD1cXFwib2JzYWhcXFwiIG5nLWNsYXNzPVxcXCJ7XFwnZnVsbFxcJzogISRjdHJsLm1lZGlhU2VydmljZS5zaG93TGVmdE1lbnV9XFxcIj5cXHJcXG4gICAgICAgIDxicmVhZGNydW1icz48L2JyZWFkY3J1bWJzPlxcclxcbiAgICAgICAgPGZpbHRlci1wYW5lbD48L2ZpbHRlci1wYW5lbD5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgc3R5bGU9XFxcIm1hcmdpbi1sZWZ0OjIwcHg7IG1hcmdpbi1yaWdodDogMzBweFxcXCI+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPGRpci1yZXR1cm4+PC9kaXItcmV0dXJuPlxcclxcblxcclxcbiAgICAgICAgICAgIDxkaXItYmFzZT48L2Rpci1iYXNlPlxcclxcblxcclxcbiAgICAgICAgICAgIDxmaWxlPjwvZmlsZT5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG48L2Rpdj5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJicmVhZGNydW1icy9icmVhZGNydW1icy50cGwuaHRtbFwiLFwiPGRpdiBpZD1cXFwiaGVhZGVyMlxcXCI+XFxyXFxuICAgIDxoMj5cXHJcXG4gICAgICAgIDxzcGFuPkhvbWU8L3NwYW4+XFxyXFxuICAgICAgICA8c3BhbiBuZy1yZXBlYXQ9XFxcImRpck5hbWUgaW4gJGN0cmwubWVkaWFTZXJ2aWNlLmRpcl9saXN0XFxcIj4gLyB7e2Rpck5hbWV9fSA8L3NwYW4+XFxyXFxuICAgIDwvaDI+XFxyXFxuPC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiZGlyLWJhc2UvZGlyLmJhc2UudHBsLmh0bWxcIixcIjxkaXYgY2xhc3M9XFxcImljb25cXFwiIG5nLXJlcGVhdD1cXFwiZGlyIGluICRjdHJsLm1lZGlhU2VydmljZS5kaXJzX2RhdGEgfCBmaWx0ZXI6IHtuYW1lIDokY3RybC5tZWRpYVNlcnZpY2UuZmlsdGVyX2ZpbGVzfVxcXCIgbmctY2xpY2s9XFxcIiRjdHJsLm1lZGlhU2VydmljZS5sb2FkRGlyKGRpcilcXFwiPlxcclxcbiAgICA8aW1nIGNsYXNzPVxcXCJpbWdfaWNvblxcXCIgc3JjPVxcXCJpbWcvcHJpZWNpbm9rLnBuZ1xcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm5hem92X3N1Ym9ydVxcXCI+e3tkaXIubmFtZX19PC9kaXY+XFxyXFxuPC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiZGlyLXJldHVybi9kaXIucmV0dXJuLnRwbC5odG1sXCIsXCI8ZGl2IGNsYXNzPVxcXCJpY29uXFxcIiBuZy1zaG93PVxcXCIkY3RybC5tZWRpYVNlcnZpY2UuZGlyXFxcIiBuZy1jbGljaz1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLmxvYWREaXIoJGN0cmwubWVkaWFTZXJ2aWNlLmRpciwgdHJ1ZSlcXFwiPlxcclxcbiAgICA8aW1nIGNsYXNzPVxcXCJpbWdfaWNvblxcXCIgc3JjPVxcXCJpbWcvYWRyZXNhci5wbmdcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJuYXpvdl9zdWJvcnVcXFwiPk5hZHJhZGVueSBhZHJlc2FyPC9kaXY+XFxyXFxuPC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiZmlsZS9maWxlLnRwbC5odG1sXCIsXCI8ZGl2IGNsYXNzPVxcXCJpY29uXFxcIiBuZy1yZXBlYXQ9XFxcImZpbGUgaW4gJGN0cmwubWVkaWFTZXJ2aWNlLmZpbGVzX2RhdGEgfCBvcmRlckJ5OiAkY3RybC5tZWRpYVNlcnZpY2Uub3JkZXJfZmlsZXNfYnkgfCBmaWx0ZXI6e25hbWUgOiRjdHJsLm1lZGlhU2VydmljZS5maWx0ZXJfZmlsZXN9XFxcIiBuZy1jbGljaz1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLmxvYWRGaWxlKGZpbGUpXFxcIj5cXHJcXG4gICAgPGltZyBjbGFzcz1cXFwiaW1nX3BpY3R1cmVcXFwiIG5nLXNyYz1cXFwie3tmaWxlLmljb259fVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm5hem92X3N1Ym9ydVxcXCI+e3tmaWxlLm5hbWV9fTwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ0eXBfc3Vib3J1XFxcIj5cXHJcXG4gICAgICAgIDxwPnt7ZmlsZS5uaWNlVHlwZX19PC9wPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwidmVsa29zdF9zdWJvcnVcXFwiPlxcclxcbiAgICAgICAgPHA+e3tmaWxlLnNpemV9fTwvcD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiZmlsdGVyLXBhbmVsL2ZpbHRlci5wYW5lbC50cGwuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXFwiZmlsdGVyLXBhbmVsXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZmlsdGVyXFxcIj5cXHJcXG4gICAgICAgIDx1cGxvYWQtZmlsZT48L3VwbG9hZC1maWxlPlxcclxcbiAgICAgICAgPHA+SGxhZGF0OlxcclxcbiAgICAgICAgICAgIDxpbnB1dCBuZy1tb2RlbD1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLmZpbHRlcl9maWxlc1xcXCIvPlxcclxcbiAgICAgICAgPC9wPlxcclxcbiAgICAgICAgPHA+Wm9yYWRpdCBwb2RsYTpcXHJcXG4gICAgICAgICAgICA8c2VsZWN0IG5nLW1vZGVsPVxcXCIkY3RybC5tZWRpYVNlcnZpY2Uub3JkZXJfZmlsZXNfYnlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJuYW1lXFxcIj5OYXp2dTwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJzaXplXFxcIj5WZWxrb3N0aTwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJjcmVhdGVkX3RpbWVcXFwiPkRhdHVtdSB2eXR2b3JlbmlhPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIm5pY2VUeXBlXFxcIj5UeXB1IHN1Ym9ydTwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgIDwvc2VsZWN0PlxcclxcbiAgICAgICAgPC9wPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJsZWZ0LW1lbnUvbGVmdC5tZW51LnRwbC5odG1sXCIsXCI8ZGl2IGlkPVxcXCJsZWZ0X21lbnVcXFwiPlxcclxcbiAgICA8dWw+XFxyXFxuICAgICAgICA8bGkgbmctc2hvdz1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLmRpclxcXCIgbmctY2xpY2s9XFxcIiRjdHJsLm1lZGlhU2VydmljZS5sb2FkRGlyKCRjdHJsLm1lZGlhU2VydmljZS5kaXIsIHRydWUpXFxcIiBzdHlsZT1cXFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMThweDtcXFwiPk5hZHJhZGVueSBhZHJlc2FyPC9saT5cXHJcXG4gICAgICAgIDxsaSBuZy1yZXBlYXQ9XFxcImRpciBpbiAkY3RybC5tZWRpYVNlcnZpY2UuZGlyc19kYXRhXFxcIiBuZy1jbGljaz1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLmxvYWREaXIoZGlyKVxcXCIgPnt7ZGlyLm5hbWV9fTwvbGk+XFxyXFxuICAgIDwvdWw+XFxyXFxuPC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwibWVkaWEtYnJvd3Nlci9tZWRpYS5icm93c2VyLnRwbC5odG1sXCIsXCI8ZGl2IGlkPVxcXCJNZWRpYUJyb3dzZXJcXFwiPlxcclxcbiAgICA8ZGl2IGlkPVxcXCJoZWFkZXIxXFxcIj5cXHJcXG4gICAgICAgIDxpbWcgbmctY2xpY2s9XFxcIiRjdHJsLm1lZGlhU2VydmljZS50b2dnbGVMZWZ0TWVudSgpXFxcIiBpZD1cXFwibWVudV9pY29uXFxcIiBzcmM9XFxcImltZy9tZW51LnBuZ1xcXCIgc3R5bGU9XFxcIndpZHRoOjUwcHg7IGhlaWdodDoxMDAlO2Zsb2F0OmxlZnQ7IGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxcIj5cXHJcXG4gICAgICAgIDxoMT5NZWRpYSBCcm93c2VyPC9oMT5cXHJcXG4gICAgICAgIDxpbWcgaWQ9XFxcInphdnJpX2RpYWxvZ1xcXCJcXHJcXG4gICAgICAgICAgICAgbmctY2xpY2s9XFxcIiRjdHJsLm1lZGlhU2VydmljZS50b2dnbGVEaWFsb2coKVxcXCJcXHJcXG4gICAgICAgICAgICAgc3JjPVxcXCJpbWcvY2xvc2UucG5nXFxcIiBzdHlsZT1cXFwid2lkdGg6NDBweDsgaGVpZ2h0OjEwMCU7ZmxvYXQ6cmlnaHQ7IGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcXCI+XFxyXFxuICAgIDwvZGl2PlxcclxcblxcclxcbiAgICA8YXBwbGljYXRpb24tcm9vdD48L2FwcGxpY2F0aW9uLXJvb3Q+XFxyXFxuPC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwic3R2b3JlYy9zdHZvcmVjLnRwbC5odG1sXCIsXCI8ZGl2IGlkPVxcXCJzdHZvcmVjXFxcIj5cXHJcXG4gICAgPGltZyBzdHlsZT1cXFwibWF4LWhlaWdodDogMjV2dzsgbWF4LXdpZHRoOiAyNXZ3O1xcXCIgbmctaWY9XFxcIiRjdHJsLmlzSW1hZ2VcXFwiIG5nLXNyYz1cXFwie3skY3RybC5tZWRpYVNlcnZpY2Uuc2VsZWN0ZWRGaWxlfX1cXFwiPlxcclxcbjwvZGl2PlwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcInVwbG9hZC1maWxlL3VwbG9hZC5maWxlLnRwbC5odG1sXCIsXCI8ZGl2IGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIj5cXHJcXG4gICAgPGlucHV0IGlkPVxcXCJkcmFnZ2luZ1xcXCJcXHJcXG4gICAgICAgICAgIGNsYXNzPVxcXCJoaWRkZW5cXFwiXFxyXFxuICAgICAgICAgICB0eXBlPVxcXCJmaWxlXFxcIlxcclxcbiAgICAgICAgICAgYWNjZXB0PVxcXCJ7eyRjdHJsLmZpbGVBY2NlcHR9fVxcXCJcXHJcXG4gICAgICAgICAgIG11bHRpcGxlLz5cXHJcXG4gICAgPGRpdj5cXHJcXG4gICAgICAgIDxzcGFuPlVwbG9hZCBzdWJvcnU6IDwvc3Bhbj5cXHJcXG4gICAgICAgIDxhIGNsYXNzPVxcXCJjdXJzb3ItcG9pbnRlclxcXCIgbmctY2xpY2s9XFxcIiRjdHJsLmZpcmVVcGxvYWRFdmVudCgpXFxcIj5cXHJcXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZGlzcGxheS1ibG9ja1xcXCIgdHJhbnNsYXRlPlVwbG9hZDwvc3Bhbj5cXHJcXG4gICAgICAgIDwvYT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxwPk5vdnkgYWRyZXNhcjpcXHJcXG4gICAgICAgIDxpbnB1dC8+XFxyXFxuICAgICAgICA8YnV0dG9uPkNSRUFURTwvYnV0dG9uPlxcclxcbiAgICA8L3A+XFxyXFxuPC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwidXZvZC91dm9kLnRwbC5odG1sXCIsXCI8ZGl2PlxcclxcbiAgICA8ZGl2IGlkPVxcXCJ1dm9kXFxcIlxcclxcbiAgICAgICAgIG5nLWNsYXNzPVxcXCJ7XFwnaGFsZnZpZXdcXCc6ICRjdHJsLm1lZGlhU2VydmljZS5zaG93RGlhbG9nfVxcXCJcXHJcXG4gICAgICAgICBuZy1jbGljaz1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLmNsb3NlRGlhbG9nKClcXFwiPlxcclxcbiAgICAgICAgPHN0dm9yZWM+PC9zdHZvcmVjPlxcclxcblxcclxcbiAgICAgICAgPGJ1dHRvbiBpZD1cXFwiem9icmF6X2RpYWxvZ1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgbmctY2xpY2s9XFxcIiRjdHJsLm1lZGlhU2VydmljZS50b2dnbGVEaWFsb2coKTsgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgc3R5bGU9XFxcIm1hcmdpbi1sZWZ0OmF1dG87bWFyZ2luLXJpZ2h0OmF1dG87ZGlzcGxheTpibG9jazsgYmFja2dyb3VuZC1jb2xvcjojNDY0OTRhO2NvbG9yOiB3aGl0ZTsgcGFkZGluZzogNXB4IDVweCA1cHggNXB4XFxcIj5aT0JSQVpJVCBESUFMT0dcXHJcXG4gICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG5cXHJcXG4gICAgPG1lZGlhLWJyb3dzZXIgbmctaWY9XFxcIiRjdHJsLm1lZGlhU2VydmljZS5zaG93RGlhbG9nXFxcIj48L21lZGlhLWJyb3dzZXI+XFxyXFxuPC9kaXY+XCIpO31dKTsiXX0=
