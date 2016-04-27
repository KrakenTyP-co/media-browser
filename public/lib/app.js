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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DirBase = function () {

    // @ngInject

    function DirBase($http, mediaService) {
        _classCallCheck(this, DirBase);

        this.$http = $http;
        this.mediaService = mediaService;
    }

    _createClass(DirBase, [{
        key: 'deleteDir',
        value: function deleteDir() {
            this.mediaService.deleteDir();
        }
    }]);

    return DirBase;
}();

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
    }, {
        key: "createNewDir",
        value: function createNewDir() {
            this.mediaService.createNewDir();
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

        this.new_dir = '';

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
        key: 'createNewDir',
        value: function createNewDir() {
            var _this2 = this;

            var location = '/';
            if (this.dir) {
                location = this.dir.location + '/' + this.dir.name;
            }

            this.$http({
                method: 'POST',
                data: {
                    name: this.new_dir,
                    location: location
                },
                url: 'http://mediabrowser.bart.sk/media-browser/dir'
            }).then(function (result) {
                _this2.dirs_data.push(result.data);
            });

            this.new_dir = "";
        }
    }, {
        key: 'deleteDir',
        value: function deleteDir() {
            /*
            let location = this.dir.location;
            this.$http({
                    method: 'DELETE',
                    url: `http://mediabrowser.bart.sk/media-browser/dir${location}`
                })
                .then(result => {
                    this.dirs_data.splice();
                });
                */

            alert("priecinok zmazany");
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
  $templateCache.put("dir-base/dir.base.tpl.html", "<div class=\"icon\" ng-repeat=\"dir in $ctrl.mediaService.dirs_data | filter: {name :$ctrl.mediaService.filter_files}\" ng-click=\"$ctrl.mediaService.loadDir(dir)\">\r\n\r\n        <img  class=\"remove_dir\" src=\"img/close.png\" ng-click=\"$ctrl.deleteDir(); $event.stopPropagation()\"/>\r\n\r\n        <img class=\"img_icon\" src=\"img/priecinok.png\">\r\n        <div class=\"nazov_suboru\">{{dir.name}}</div>\r\n\r\n</div>");
  $templateCache.put("dir-return/dir.return.tpl.html", "<div class=\"icon\" ng-show=\"$ctrl.mediaService.dir\" ng-click=\"$ctrl.mediaService.loadDir($ctrl.mediaService.dir, true)\">\r\n    <img class=\"img_icon\" src=\"img/adresar.png\">\r\n    <div class=\"nazov_suboru\">Nadradeny adresar</div>\r\n</div>");
  $templateCache.put("file/file.tpl.html", "<div class=\"icon\" ng-repeat=\"file in $ctrl.mediaService.files_data | orderBy: $ctrl.mediaService.order_files_by | filter:{name :$ctrl.mediaService.filter_files}\" ng-click=\"$ctrl.mediaService.loadFile(file)\">\r\n    <img class=\"remove_dir\" src=\"img/close.png\">\r\n    <img class=\"img_picture\"  ng-src=\"{{file.icon}}\">\r\n\r\n    <div class=\"nazov_suboru\">{{file.name}}</div>\r\n    <div class=\"typ_suboru\">\r\n        <p>{{file.niceType}}</p>\r\n    </div>\r\n    <div class=\"velkost_suboru\">\r\n        <p>{{file.size}}</p>\r\n    </div>\r\n</div>");
  $templateCache.put("filter-panel/filter.panel.tpl.html", "<div class=\"filter-panel\">\r\n    <div class=\"filter\">\r\n        <upload-file></upload-file>\r\n        <p>Hladat:\r\n            <input ng-model=\"$ctrl.mediaService.filter_files\"/>\r\n        </p>\r\n        <p>Zoradit podla:\r\n            <select ng-model=\"$ctrl.mediaService.order_files_by\">\r\n                <option value=\"name\">Nazvu</option>\r\n                <option value=\"size\">Velkosti</option>\r\n                <option value=\"created_time\">Datumu vytvorenia</option>\r\n                <option value=\"niceType\">Typu suboru</option>\r\n            </select>\r\n        </p>\r\n    </div>\r\n</div>");
  $templateCache.put("left-menu/left.menu.tpl.html", "<div id=\"left_menu\">\r\n    <ul>\r\n        <li ng-show=\"$ctrl.mediaService.dir\" ng-click=\"$ctrl.mediaService.loadDir($ctrl.mediaService.dir, true)\" style=\"font-weight: bold; font-size: 18px;\">Nadradeny adresar</li>\r\n        <li ng-repeat=\"dir in $ctrl.mediaService.dirs_data\" ng-click=\"$ctrl.mediaService.loadDir(dir)\" >{{dir.name}}</li>\r\n    </ul>\r\n</div>");
  $templateCache.put("media-browser/media.browser.tpl.html", "<div id=\"MediaBrowser\">\r\n    <div id=\"header1\">\r\n        <img ng-click=\"$ctrl.mediaService.toggleLeftMenu()\" id=\"menu_icon\" src=\"img/menu.png\" style=\"width:50px; height:100%;float:left; align-self: flex-start;\">\r\n        <h1>Media Browser</h1>\r\n        <img id=\"zavri_dialog\"\r\n             ng-click=\"$ctrl.mediaService.toggleDialog()\"\r\n             src=\"img/close.png\" style=\"width:40px; height:100%;float:right; align-self: flex-end;\">\r\n    </div>\r\n\r\n    <application-root></application-root>\r\n</div>");
  $templateCache.put("stvorec/stvorec.tpl.html", "<div id=\"stvorec\">\r\n    <img style=\"max-height: 25vw; max-width: 25vw;\" ng-if=\"$ctrl.isImage\" ng-src=\"{{$ctrl.mediaService.selectedFile}}\">\r\n</div>");
  $templateCache.put("upload-file/upload.file.tpl.html", "<div class=\"pull-right\">\r\n    <input id=\"dragging\"\r\n           class=\"hidden\"\r\n           type=\"file\"\r\n           accept=\"{{$ctrl.fileAccept}}\"\r\n           multiple/>\r\n    <div>\r\n        <span>Upload suboru: </span>\r\n        <a class=\"cursor-pointer\" ng-click=\"$ctrl.fireUploadEvent()\">\r\n            <span class=\"display-block\" translate>Upload</span>\r\n        </a>\r\n    </div>\r\n    <p>Novy adresar:\r\n        <input ng-model=\"$ctrl.mediaService.new_dir\"/>\r\n        <button ng-click=\"$ctrl.createNewDir()\">CREATE</button>\r\n    </p>\r\n</div>");
  $templateCache.put("uvod/uvod.tpl.html", "<div>\r\n    <div id=\"uvod\"\r\n         ng-class=\"{\'halfview\': $ctrl.mediaService.showDialog}\"\r\n         ng-click=\"$ctrl.mediaService.closeDialog()\">\r\n        <stvorec></stvorec>\r\n\r\n        <button id=\"zobraz_dialog\"\r\n                ng-click=\"$ctrl.mediaService.toggleDialog(); $event.stopPropagation();\"\r\n                style=\"margin-left:auto;margin-right:auto;display:block; background-color:#46494a;color: white; padding: 5px 5px 5px 5px\">ZOBRAZIT DIALOG\r\n        </button>\r\n    </div>\r\n\r\n\r\n    <media-browser ng-if=\"$ctrl.mediaService.showDialog\"></media-browser>\r\n</div>");
}]);

},{}]},{},["E:\\media-browser\\src\\app.js"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGFwcC5qcyIsInNyY1xcYXBwXFxjb21wb25lbnRzXFxhcHBsaWNhdGlvbi1yb290XFxhcHBsaWNhdGlvbi5yb290LmpzIiwic3JjXFxhcHBcXGNvbXBvbmVudHNcXGJyZWFkY3J1bWJzXFxicmVhZGNydW1icy5qcyIsInNyY1xcYXBwXFxjb21wb25lbnRzXFxkaXItYmFzZVxcZGlyLmJhc2UuanMiLCJzcmNcXGFwcFxcY29tcG9uZW50c1xcZGlyLXJldHVyblxcZGlyLnJldHVybi5qcyIsInNyY1xcYXBwXFxjb21wb25lbnRzXFxmaWxlXFxmaWxlLmpzIiwic3JjXFxhcHBcXGNvbXBvbmVudHNcXGZpbHRlci1wYW5lbFxcZmlsdGVyLnBhbmVsLmpzIiwic3JjXFxhcHBcXGNvbXBvbmVudHNcXGxlZnQtbWVudVxcbGVmdC5tZW51LmpzIiwic3JjXFxhcHBcXGNvbXBvbmVudHNcXG1lZGlhLWJyb3dzZXJcXG1lZGlhLmJyb3dzZXIuanMiLCJzcmNcXGFwcFxcY29tcG9uZW50c1xcc3R2b3JlY1xcc3R2b3JlYy5qcyIsInNyY1xcYXBwXFxjb21wb25lbnRzXFx1cGxvYWQtZmlsZVxcdXBsb2FkLmZpbGUuanMiLCJzcmNcXGFwcFxcY29tcG9uZW50c1xcdXZvZFxcdXZvZC5qcyIsInNyY1xcYXBwXFxtZWRpYS5zZXJ2aWNlLmpzIiwic3JjXFx0cGxcXGluZGV4LmpzIiwic3JjXFx0cGxcXHRlbXBsYXRlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7OztBQUVBLFFBQVEsTUFBUixDQUFlLFNBQWYsRUFBMEIsaUJBQTFCLEVBQ0ssU0FETCxDQUNlLE1BRGYsa0JBRUssU0FGTCxD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RixpQkFBZSxHQUFmLENBQW1CLDBCQUFuQixFQUE4QyxpS0FBOUMsRUFSZ0Y7QUFTaEYsaUJBQWUsR0FBZixDQUFtQixrQ0FBbkIsRUFBc0QsZ2xCQUF0RCxFQVRnRjtBQVVoRixpQkFBZSxHQUFmLENBQW1CLG9CQUFuQixFQUF3Qyw0bUJBQXhDLEVBVmdGO0NBQXpCLENBQXZEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL3RwbC9pbmRleCc7XHJcbmltcG9ydCB1dm9kIGZyb20gJy4vYXBwL2NvbXBvbmVudHMvdXZvZC91dm9kJztcclxuaW1wb3J0IG1lZGlhQnJvd3NlciBmcm9tICcuL2FwcC9jb21wb25lbnRzL21lZGlhLWJyb3dzZXIvbWVkaWEuYnJvd3Nlcic7XHJcbmltcG9ydCByb290IGZyb20gJy4vYXBwL2NvbXBvbmVudHMvYXBwbGljYXRpb24tcm9vdC9hcHBsaWNhdGlvbi5yb290JztcclxuaW1wb3J0IGxlZnRNZW51IGZyb20gJy4vYXBwL2NvbXBvbmVudHMvbGVmdC1tZW51L2xlZnQubWVudSc7XHJcbmltcG9ydCBkaXJSZXR1cm4gZnJvbSAnLi9hcHAvY29tcG9uZW50cy9kaXItcmV0dXJuL2Rpci5yZXR1cm4nO1xyXG5pbXBvcnQgZGlyQmFzZSBmcm9tICcuL2FwcC9jb21wb25lbnRzL2Rpci1iYXNlL2Rpci5iYXNlJztcclxuaW1wb3J0IGZpbGUgZnJvbSAnLi9hcHAvY29tcG9uZW50cy9maWxlL2ZpbGUnO1xyXG5pbXBvcnQgc3R2b3JlYyBmcm9tICcuL2FwcC9jb21wb25lbnRzL3N0dm9yZWMvc3R2b3JlYyc7XHJcbmltcG9ydCBicmVhZGNydW1icyBmcm9tICcuL2FwcC9jb21wb25lbnRzL2JyZWFkY3J1bWJzL2JyZWFkY3J1bWJzJztcclxuaW1wb3J0IGZpbHRlclBhbmVsIGZyb20gJy4vYXBwL2NvbXBvbmVudHMvZmlsdGVyLXBhbmVsL2ZpbHRlci5wYW5lbCc7XHJcbmltcG9ydCB1cGxvYWRGaWxlIGZyb20gJy4vYXBwL2NvbXBvbmVudHMvdXBsb2FkLWZpbGUvdXBsb2FkLmZpbGUnO1xyXG5cclxuaW1wb3J0IE1lZGlhU2VydmljZSBmcm9tICcuL2FwcC9tZWRpYS5zZXJ2aWNlJztcclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdicm93c2VyJywgW3RlbXBsYXRlXSlcclxuICAgIC5jb21wb25lbnQoJ3V2b2QnLCB1dm9kKVxyXG4gICAgLmNvbXBvbmVudCgnbWVkaWFCcm93c2VyJywgbWVkaWFCcm93c2VyKVxyXG4gICAgLmNvbXBvbmVudCgnYXBwbGljYXRpb25Sb290Jywgcm9vdClcclxuICAgIC5jb21wb25lbnQoJ2xlZnRNZW51JywgbGVmdE1lbnUpXHJcbiAgICAuY29tcG9uZW50KCdkaXJSZXR1cm4nLCBkaXJSZXR1cm4pXHJcbiAgICAuY29tcG9uZW50KCdkaXJCYXNlJywgZGlyQmFzZSlcclxuICAgIC5jb21wb25lbnQoJ2ZpbGUnLCBmaWxlKVxyXG4gICAgLmNvbXBvbmVudCgnc3R2b3JlYycsIHN0dm9yZWMpXHJcbiAgICAuY29tcG9uZW50KCdicmVhZGNydW1icycsIGJyZWFkY3J1bWJzKVxyXG4gICAgLmNvbXBvbmVudCgnZmlsdGVyUGFuZWwnLCBmaWx0ZXJQYW5lbClcclxuICAgIC5jb21wb25lbnQoJ3VwbG9hZEZpbGUnLCB1cGxvYWRGaWxlKVxyXG5cclxuICAgIC5zZXJ2aWNlKCdtZWRpYVNlcnZpY2UnLCBNZWRpYVNlcnZpY2UpXHJcbjsiLCJjbGFzcyBBcHBsaWNhdGlvblJvb3R7XHJcblxyXG4gICAgLy8gQG5nSW5qZWN0XHJcbiAgICBjb25zdHJ1Y3RvcigkaHR0cCwgbWVkaWFTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgICAgIHRoaXMubWVkaWFTZXJ2aWNlID0gbWVkaWFTZXJ2aWNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBjb250cm9sbGVyOiBBcHBsaWNhdGlvblJvb3QsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcGxpY2F0aW9uLXJvb3QvYXBwbGljYXRpb24ucm9vdC50cGwuaHRtbCdcclxufTsiLCJjbGFzcyBCcmVhZGNydW1icyB7XHJcblxyXG4gICAgLy8gQG5nSW5qZWN0XHJcbiAgICBjb25zdHJ1Y3RvcigkaHR0cCwgbWVkaWFTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgICAgIHRoaXMubWVkaWFTZXJ2aWNlID0gbWVkaWFTZXJ2aWNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBjb250cm9sbGVyOiBCcmVhZGNydW1icyxcclxuICAgIHRlbXBsYXRlVXJsOiAnYnJlYWRjcnVtYnMvYnJlYWRjcnVtYnMudHBsLmh0bWwnXHJcbn0iLCJjbGFzcyBEaXJCYXNlIHtcclxuXHJcbiAgICAvLyBAbmdJbmplY3RcclxuICAgIGNvbnN0cnVjdG9yKCRodHRwLCBtZWRpYVNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XHJcbiAgICAgICAgdGhpcy5tZWRpYVNlcnZpY2UgPSBtZWRpYVNlcnZpY2U7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlRGlyKCl7XHJcbiAgICAgICAgdGhpcy5tZWRpYVNlcnZpY2UuZGVsZXRlRGlyKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgY29udHJvbGxlcjogRGlyQmFzZSxcclxuICAgIHRlbXBsYXRlVXJsOiAnZGlyLWJhc2UvZGlyLmJhc2UudHBsLmh0bWwnXHJcbn0iLCJjbGFzcyBEaXJSZXR1cm4ge1xyXG5cclxuICAgIC8vIEBuZ0luamVjdFxyXG4gICAgY29uc3RydWN0b3IoJGh0dHAsIG1lZGlhU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgICAgICB0aGlzLm1lZGlhU2VydmljZSA9IG1lZGlhU2VydmljZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgY29udHJvbGxlcjogRGlyUmV0dXJuLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdkaXItcmV0dXJuL2Rpci5yZXR1cm4udHBsLmh0bWwnXHJcbn0iLCJjbGFzcyBGaWxlIHtcclxuXHJcbiAgICAvLyBAbmdJbmplY3RcclxuICAgIGNvbnN0cnVjdG9yKCRodHRwLCBtZWRpYVNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XHJcbiAgICAgICAgdGhpcy5tZWRpYVNlcnZpY2UgPSBtZWRpYVNlcnZpY2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0e1xyXG4gICAgY29udHJvbGxlcjogRmlsZSxcclxuICAgIHRlbXBsYXRlVXJsOiAnZmlsZS9maWxlLnRwbC5odG1sJ1xyXG59IiwiY2xhc3MgRmlsdGVyUGFuZWwge1xyXG5cclxuICAgIC8vIEBuZ0luamVjdFxyXG4gICAgY29uc3RydWN0b3IoJGh0dHAsIG1lZGlhU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgICAgICB0aGlzLm1lZGlhU2VydmljZSA9IG1lZGlhU2VydmljZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgY29udHJvbGxlcjogRmlsdGVyUGFuZWwsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2ZpbHRlci1wYW5lbC9maWx0ZXIucGFuZWwudHBsLmh0bWwnXHJcbn07IiwiY2xhc3MgTGVmdE1lbnUge1xyXG5cclxuICAgIC8vIEBuZ0luamVjdFxyXG4gICAgY29uc3RydWN0b3IoJGh0dHAsIG1lZGlhU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgICAgICB0aGlzLm1lZGlhU2VydmljZSA9IG1lZGlhU2VydmljZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgY29udHJvbGxlcjogTGVmdE1lbnUsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2xlZnQtbWVudS9sZWZ0Lm1lbnUudHBsLmh0bWwnXHJcbn0iLCJjbGFzcyBNZWRpYUJyb3dzZXIge1xyXG5cclxuICAgIC8vIEBuZ0luamVjdFxyXG4gICAgY29uc3RydWN0b3IoJGh0dHAsIG1lZGlhU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgICAgICB0aGlzLm1lZGlhU2VydmljZSA9IG1lZGlhU2VydmljZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgY29udHJvbGxlcjogTWVkaWFCcm93c2VyLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdtZWRpYS1icm93c2VyL21lZGlhLmJyb3dzZXIudHBsLmh0bWwnXHJcbn07IiwiY2xhc3MgU3R2b3JlY3tcclxuXHJcbiAgICAvLyBAbmdJbmplY3RcclxuICAgIGNvbnN0cnVjdG9yKCRodHRwLCBtZWRpYVNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XHJcbiAgICAgICAgdGhpcy5tZWRpYVNlcnZpY2UgPSBtZWRpYVNlcnZpY2U7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGlzSW1hZ2UoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5tZWRpYVNlcnZpY2Uuc2VsZWN0ZWRGaWxlID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgY29udHJvbGxlcjogU3R2b3JlYyxcclxuICAgIHRlbXBsYXRlVXJsOiAnc3R2b3JlYy9zdHZvcmVjLnRwbC5odG1sJ1xyXG59IiwiY2xhc3MgVXBsb2FkRmlsZSB7XHJcblxyXG4gICAgLy8gQG5nSW5qZWN0XHJcbiAgICBjb25zdHJ1Y3RvcigkdGltZW91dCwgJGVsZW1lbnQsICR3aW5kb3csICRyb290U2NvcGUsIG1lZGlhU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuJHRpbWVvdXQgPSAkdGltZW91dDtcclxuICAgICAgICB0aGlzLiRlbGVtZW50ID0gJGVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy4kd2luZG93ID0gJHdpbmRvdztcclxuICAgICAgICB0aGlzLiRyb290U2NvcGUgPSAkcm9vdFNjb3BlO1xyXG4gICAgICAgIHRoaXMubWVkaWFTZXJ2aWNlID0gbWVkaWFTZXJ2aWNlO1xyXG5cclxuICAgICAgICB0aGlzLnVwbG9hZFRpbWVvdXQgPSBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLmxpc3QgPSBuZXcgU2V0KCk7XHJcblxyXG4gICAgICAgIC8vIGRlZmF1bHQgdmFsdWVzXHJcbiAgICAgICAgaWYgKCF0aGlzLmZpbGVBY2NlcHQpIHtcclxuICAgICAgICAgICAgdGhpcy5maWxlQWNjZXB0ID0gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICRvbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5pbnB1dCA9IHRoaXMuJGVsZW1lbnQuZmluZChcImlucHV0XCIpWzBdO1xyXG5cclxuICAgICAgICB0aGlzLmluaXRDbGljaygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVHJpZ2dlciBjbGljayBldmVudCBvbiB0aGlzLmlucHV0XHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBmaXJlVXBsb2FkRXZlbnQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuJHdpbmRvdy5DdXN0b21FdmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLmlucHV0LmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoXCJjbGlja1wiKSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC5jcmVhdGVFdmVudCkge1xyXG4gICAgICAgICAgICBsZXQgZXYgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnSFRNTEV2ZW50cycpO1xyXG4gICAgICAgICAgICBldi5pbml0RXZlbnQoJ2NvbnRleHRtZW51JywgdHJ1ZSwgZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLmlucHV0LmRpc3BhdGNoRXZlbnQoZXYpO1xyXG4gICAgICAgIH0gZWxzZSB7IC8vIEludGVybmV0IEV4cGxvcmVyXHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXQuZmlyZUV2ZW50KCdvbmNvbnRleHRtZW51Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkIGxpc3RlbmVyIGZvciBjaGFuZ2Ugb24gdGhpcy5pbnB1dFxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgaW5pdENsaWNrKCkge1xyXG4gICAgICAgIHRoaXMuaW5wdXRcclxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGUudGFyZ2V0LnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgIH0sIGZhbHNlKTtcclxuICAgICAgICB0aGlzLmlucHV0XHJcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGxpc3QgPSBlLnRhcmdldC5maWxlcztcclxuICAgICAgICAgICAgICAgIGlmIChsaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGZpbGVJbmRleCBpbiBsaXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNOYU4oZmlsZUluZGV4KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkRmlsZShsaXN0Lml0ZW0oZmlsZUluZGV4KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEhhbmRsZSBhIGZpbGUgd2hlbiBpcyBkcm9wcGVkXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGZpbGVcclxuICAgICAqL1xyXG4gICAgbG9hZEZpbGUoZmlsZSkge1xyXG4gICAgICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgIHJlYWRlci5vbmxvYWQgPSAocmVhZGVyRXZ0KSA9PiB7XHJcblxyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IHt9O1xyXG4gICAgICAgICAgICBpdGVtLmRvY19uYW1lID0gZmlsZS5uYW1lO1xyXG4gICAgICAgICAgICBpdGVtLmZpbGVCYXNlNjQgPSBidG9hKHJlYWRlckV2dC50YXJnZXQucmVzdWx0KTtcclxuICAgICAgICAgICAgaXRlbS5kb2NfdHlwZSA9IGZpbGUudHlwZTtcclxuICAgICAgICAgICAgaXRlbS5maWxlX3NpemUgPSBmaWxlLnNpemU7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmxpc3QuYWRkKGl0ZW0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy4kcm9vdFNjb3BlLiRhcHBseSgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMudXBsb2FkVGltZW91dCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kdGltZW91dC5jYW5jZWwodGhpcy51cGxvYWRUaW1lb3V0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnVwbG9hZFRpbWVvdXQgPSB0aGlzLiR0aW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIHRvZG8gZG8gdXBsb2FkXHJcbiAgICAgICAgICAgICAgICAvLyBzdWJvcnkgc3UgdiB0aGlzLmxpc3QgYSB0ZW4gamUgU2V0IC0gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvU2V0XHJcbiAgICAgICAgICAgICAgICAvLyBuYSB1cGxvYWQgdHJlYmEgdnl1eml0IEZvcm1EYXRhIC0gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0Zvcm1EYXRhXHJcbiAgICAgICAgICAgICAgICAvLyBkbyBmb3JtRGF0YSBzYSB2a2xhZGEgYnVkIHRvIHJlYWRlckV2dC50YXJnZXQucmVzdWx0IGFsZWJvIGl0ZW0uZmlsZUJhc2U2NCBhbGVibyB0b3RvIGlnbm9yb3ZhdCBhIHJvdm5vIHBvc2xhdFxyXG4gICAgICAgICAgICAgICAgLy8gZG8gZm9ybURhdGEgZmlsZVxyXG4gICAgICAgICAgICB9LCAyMDApO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJlYWRlci5yZWFkQXNCaW5hcnlTdHJpbmcoZmlsZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNyZWF0ZU5ld0RpcigpIHtcclxuICAgICAgICB0aGlzLm1lZGlhU2VydmljZS5jcmVhdGVOZXdEaXIoKTtcclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICB0ZW1wbGF0ZVVybDogJ3VwbG9hZC1maWxlL3VwbG9hZC5maWxlLnRwbC5odG1sJyxcclxuICAgIGNvbnRyb2xsZXI6IFVwbG9hZEZpbGVcclxufTsiLCJjbGFzcyBVdm9kIHtcclxuXHJcbiAgICAvLyBAbmdJbmplY3RcclxuICAgIGNvbnN0cnVjdG9yKCRodHRwLCBtZWRpYVNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XHJcbiAgICAgICAgdGhpcy5tZWRpYVNlcnZpY2UgPSBtZWRpYVNlcnZpY2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGNvbnRyb2xsZXI6IFV2b2QsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ3V2b2QvdXZvZC50cGwuaHRtbCdcclxufTsiLCJjb25zdCBUWVBFUyA9IHtcclxuICAgICdQTkcnOiB7XHJcbiAgICAgICAgbGlzdDogWydpbWFnZS9wbmcnXSxcclxuICAgICAgICBpbWFnZTogdHJ1ZVxyXG4gICAgfSxcclxuICAgICdKUEcnOiB7XHJcbiAgICAgICAgbGlzdDogWydpbWFnZS9qcGVnJywgJ2ltYWdlL3BqcGVnJ10sXHJcbiAgICAgICAgaW1hZ2U6IHRydWVcclxuICAgIH0sXHJcbiAgICAnR0lGJzoge1xyXG4gICAgICAgIGxpc3Q6IFsnaW1hZ2UvZ2lmJ10sXHJcbiAgICAgICAgaW1hZ2U6IHRydWVcclxuICAgIH0sXHJcbiAgICAnQk1QJzoge1xyXG4gICAgICAgIGxpc3Q6IFsnaW1hZ2UvYm1wJ10sXHJcbiAgICAgICAgaW1hZ2U6IHRydWVcclxuICAgIH0sXHJcbiAgICAnVElGRic6IFsnaW1hZ2UvaWVmJywgJ2ltYWdlL3RpZmYnXSxcclxuICAgICdUWFQnOiB7XHJcbiAgICAgICAgbGlzdDogWydhcHBsaWNhdGlvbi9wbGFpbicsICd0ZXh0L3BsYWluJ10sXHJcbiAgICAgICAgaWNvbjogJ2ltZy90eHQucG5nJ1xyXG4gICAgfSxcclxuICAgICdQREYnOiB7XHJcbiAgICAgICAgbGlzdDogW1wiYXBwbGljYXRpb24vcGRmXCJdLFxyXG4gICAgICAgIGljb246ICdpbWcvcGRmLnBuZydcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lZGlhU2VydmljZSB7XHJcblxyXG4gICAgLy8gQG5nSW5qZWN0XHJcbiAgICBjb25zdHJ1Y3RvcigkaHR0cCwgJHdpbmRvdykge1xyXG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgICAgICB0aGlzLiR3aW5kb3cgPSAkd2luZG93O1xyXG5cclxuICAgICAgICB0aGlzLmRpciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5kaXJzX2RhdGEgPSBbXTtcclxuICAgICAgICB0aGlzLmZpbGVzX2RhdGEgPSBbXTtcclxuXHJcbiAgICAgICAgdGhpcy5kaXJfbGlzdCA9IFtdO1xyXG5cclxuICAgICAgICB0aGlzLnNlbGVjdGVkRmlsZSA9IG51bGw7XHJcblxyXG4gICAgICAgIHRoaXMuc2hvd0RpYWxvZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2hvd0xlZnRNZW51ID0gdHJ1ZTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMub3JkZXJfZmlsZXNfYnkgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuZmlsdGVyX2ZpbGVzID0gXCJcIjtcclxuXHJcbiAgICAgICAgdGhpcy5uZXdfZGlyID0gJyc7XHJcblxyXG4gICAgICAgIHRoaXMubG9hZERpcigpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBsb2FkRGlyKGRpcmVjdG9yeSA9IG51bGwsIGlzUmV0dXJuID0gZmFsc2UpIHtcclxuICAgICAgICBsZXQgdXJsQWRyZXNzID0gJyc7XHJcbiAgICAgICAgaWYgKGRpcmVjdG9yeSkge1xyXG4gICAgICAgICAgICB1cmxBZHJlc3MgPSBkaXJlY3RvcnkubG9jYXRpb24gKyAnLycgKyBkaXJlY3RvcnkubmFtZTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpc1JldHVybikge1xyXG4gICAgICAgICAgICAgICAgdXJsQWRyZXNzID0gZGlyZWN0b3J5LmxvY2F0aW9uO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJfbGlzdC5wb3AoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlyX2xpc3QucHVzaChkaXJlY3RvcnkubmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuJGh0dHAuZ2V0KGBodHRwOi8vbWVkaWFicm93c2VyLmJhcnQuc2svZGlyJHt1cmxBZHJlc3N9YClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpciA9IHJlc3BvbnNlLmRhdGEuZGlyO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJzX2RhdGEgPSByZXNwb25zZS5kYXRhLmRpcnM7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5maWxlc19kYXRhID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBmaWxlIG9mIHJlc3BvbnNlLmRhdGEuZmlsZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGVzX2RhdGEucHVzaChuZXcgRmlsZShmaWxlKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBsb2FkRmlsZShmaWxlRGlyZWN0b3J5ID0gbnVsbCkge1xyXG4gICAgICAgIGlmIChmaWxlRGlyZWN0b3J5LnRodW1iX2xpbmspIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEZpbGUgPSBmaWxlRGlyZWN0b3J5LmRvd25sb2FkX2xpbms7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0RpYWxvZyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy4kd2luZG93Lm9wZW4oZmlsZURpcmVjdG9yeS5kb3dubG9hZF9saW5rLCAnX2JsYW5rJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjcmVhdGVOZXdEaXIoKSB7XHJcbiAgICAgICAgdmFyIGxvY2F0aW9uID0gJy8nO1xyXG4gICAgICAgIGlmICh0aGlzLmRpcikge1xyXG4gICAgICAgICAgICBsb2NhdGlvbiA9IHRoaXMuZGlyLmxvY2F0aW9uICsgJy8nICsgdGhpcy5kaXIubmFtZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuJGh0dHAoe1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogdGhpcy5uZXdfZGlyLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uOiBsb2NhdGlvblxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHVybDogYGh0dHA6Ly9tZWRpYWJyb3dzZXIuYmFydC5zay9tZWRpYS1icm93c2VyL2RpcmBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlyc19kYXRhLnB1c2gocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5uZXdfZGlyPVwiXCI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGRlbGV0ZURpcigpe1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgbGV0IGxvY2F0aW9uID0gdGhpcy5kaXIubG9jYXRpb247XHJcbiAgICAgICAgdGhpcy4kaHR0cCh7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiBgaHR0cDovL21lZGlhYnJvd3Nlci5iYXJ0LnNrL21lZGlhLWJyb3dzZXIvZGlyJHtsb2NhdGlvbn1gXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpcnNfZGF0YS5zcGxpY2UoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICovXHJcblxyXG5cclxuXHJcbiAgICAgICAgYWxlcnQoXCJwcmllY2lub2sgem1hemFueVwiKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVMZWZ0TWVudSgpIHtcclxuICAgICAgICB0aGlzLnNob3dMZWZ0TWVudSA9ICF0aGlzLnNob3dMZWZ0TWVudTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVEaWFsb2coKSB7XHJcbiAgICAgICAgdGhpcy5zaG93RGlhbG9nID0gIXRoaXMuc2hvd0RpYWxvZztcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZURpYWxvZygpIHtcclxuICAgICAgICBpZiAodGhpcy5zaG93RGlhbG9nKVxyXG4gICAgICAgICAgICB0aGlzLnNob3dEaWFsb2cgPSAhdGhpcy5zaG93RGlhbG9nO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuY2xhc3MgRmlsZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XHJcbiAgICAgICAgYW5ndWxhci5tZXJnZSh0aGlzLCBkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUeXBlTmFtZShnZXRJY29uID0gZmFsc2UpIHtcclxuICAgICAgICBmb3IgKGxldCB0eXBlTmFtZSBpbiBUWVBFUykge1xyXG4gICAgICAgICAgICBsZXQgdHlwZU9iaiA9IFRZUEVTW3R5cGVOYW1lXTtcclxuICAgICAgICAgICAgaWYgKGFuZ3VsYXIuaXNEZWZpbmVkKHR5cGVPYmoubGlzdCkpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHR5cGUgb2YgdHlwZU9iai5saXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT0gdGhpcy50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnZXRJY29uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYW5ndWxhci5pc0RlZmluZWQodHlwZU9iai5pbWFnZSkgJiYgdHlwZU9iai5pbWFnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRodW1iX2xpbms7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhbmd1bGFyLmlzRGVmaW5lZCh0eXBlT2JqLmljb24pID8gdHlwZU9iai5pY29uIDogbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0eXBlTmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG5pY2VUeXBlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFR5cGVOYW1lKCkgPyB0aGlzLmdldFR5cGVOYW1lKCkgOiAnYW55JztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaWNvbigpIHtcclxuICAgICAgICBsZXQgaWNvbiA9IHRoaXMuZ2V0VHlwZU5hbWUodHJ1ZSk7XHJcbiAgICAgICAgcmV0dXJuIGljb24gPyBpY29uIDogXCJpbWcvcGxhaW4ucG5nXCJcclxuICAgIH1cclxuXHJcblxyXG59IiwicmVxdWlyZSgnLi90ZW1wbGF0ZXMnKTtcclxubW9kdWxlLmV4cG9ydHMgPSAndGVtcGxhdGVzJzsiLCJhbmd1bGFyLm1vZHVsZShcInRlbXBsYXRlc1wiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7JHRlbXBsYXRlQ2FjaGUucHV0KFwiYXBwbGljYXRpb24tcm9vdC9hcHBsaWNhdGlvbi5yb290LnRwbC5odG1sXCIsXCI8ZGl2IGlkPVxcXCJva25vXFxcIj5cXHJcXG5cXHJcXG4gICAgPGxlZnQtbWVudSBuZy1pZj1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLnNob3dMZWZ0TWVudVxcXCI+PC9sZWZ0LW1lbnU+XFxyXFxuXFxyXFxuICAgIDxkaXYgaWQ9XFxcIm9ic2FoXFxcIiBuZy1jbGFzcz1cXFwie1xcJ2Z1bGxcXCc6ICEkY3RybC5tZWRpYVNlcnZpY2Uuc2hvd0xlZnRNZW51fVxcXCI+XFxyXFxuICAgICAgICA8YnJlYWRjcnVtYnM+PC9icmVhZGNydW1icz5cXHJcXG4gICAgICAgIDxmaWx0ZXItcGFuZWw+PC9maWx0ZXItcGFuZWw+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IHN0eWxlPVxcXCJtYXJnaW4tbGVmdDoyMHB4OyBtYXJnaW4tcmlnaHQ6IDMwcHhcXFwiPlxcclxcblxcclxcbiAgICAgICAgICAgIDxkaXItcmV0dXJuPjwvZGlyLXJldHVybj5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8ZGlyLWJhc2U+PC9kaXItYmFzZT5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8ZmlsZT48L2ZpbGU+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuPC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiYnJlYWRjcnVtYnMvYnJlYWRjcnVtYnMudHBsLmh0bWxcIixcIjxkaXYgaWQ9XFxcImhlYWRlcjJcXFwiPlxcclxcbiAgICA8aDI+XFxyXFxuICAgICAgICA8c3Bhbj5Ib21lPC9zcGFuPlxcclxcbiAgICAgICAgPHNwYW4gbmctcmVwZWF0PVxcXCJkaXJOYW1lIGluICRjdHJsLm1lZGlhU2VydmljZS5kaXJfbGlzdFxcXCI+IC8ge3tkaXJOYW1lfX0gPC9zcGFuPlxcclxcbiAgICA8L2gyPlxcclxcbjwvZGl2PlwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImRpci1iYXNlL2Rpci5iYXNlLnRwbC5odG1sXCIsXCI8ZGl2IGNsYXNzPVxcXCJpY29uXFxcIiBuZy1yZXBlYXQ9XFxcImRpciBpbiAkY3RybC5tZWRpYVNlcnZpY2UuZGlyc19kYXRhIHwgZmlsdGVyOiB7bmFtZSA6JGN0cmwubWVkaWFTZXJ2aWNlLmZpbHRlcl9maWxlc31cXFwiIG5nLWNsaWNrPVxcXCIkY3RybC5tZWRpYVNlcnZpY2UubG9hZERpcihkaXIpXFxcIj5cXHJcXG5cXHJcXG4gICAgICAgIDxpbWcgIGNsYXNzPVxcXCJyZW1vdmVfZGlyXFxcIiBzcmM9XFxcImltZy9jbG9zZS5wbmdcXFwiIG5nLWNsaWNrPVxcXCIkY3RybC5kZWxldGVEaXIoKTsgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXFxcIi8+XFxyXFxuXFxyXFxuICAgICAgICA8aW1nIGNsYXNzPVxcXCJpbWdfaWNvblxcXCIgc3JjPVxcXCJpbWcvcHJpZWNpbm9rLnBuZ1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYXpvdl9zdWJvcnVcXFwiPnt7ZGlyLm5hbWV9fTwvZGl2PlxcclxcblxcclxcbjwvZGl2PlwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImRpci1yZXR1cm4vZGlyLnJldHVybi50cGwuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXFwiaWNvblxcXCIgbmctc2hvdz1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLmRpclxcXCIgbmctY2xpY2s9XFxcIiRjdHJsLm1lZGlhU2VydmljZS5sb2FkRGlyKCRjdHJsLm1lZGlhU2VydmljZS5kaXIsIHRydWUpXFxcIj5cXHJcXG4gICAgPGltZyBjbGFzcz1cXFwiaW1nX2ljb25cXFwiIHNyYz1cXFwiaW1nL2FkcmVzYXIucG5nXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibmF6b3Zfc3Vib3J1XFxcIj5OYWRyYWRlbnkgYWRyZXNhcjwvZGl2PlxcclxcbjwvZGl2PlwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImZpbGUvZmlsZS50cGwuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXFwiaWNvblxcXCIgbmctcmVwZWF0PVxcXCJmaWxlIGluICRjdHJsLm1lZGlhU2VydmljZS5maWxlc19kYXRhIHwgb3JkZXJCeTogJGN0cmwubWVkaWFTZXJ2aWNlLm9yZGVyX2ZpbGVzX2J5IHwgZmlsdGVyOntuYW1lIDokY3RybC5tZWRpYVNlcnZpY2UuZmlsdGVyX2ZpbGVzfVxcXCIgbmctY2xpY2s9XFxcIiRjdHJsLm1lZGlhU2VydmljZS5sb2FkRmlsZShmaWxlKVxcXCI+XFxyXFxuICAgIDxpbWcgY2xhc3M9XFxcInJlbW92ZV9kaXJcXFwiIHNyYz1cXFwiaW1nL2Nsb3NlLnBuZ1xcXCI+XFxyXFxuICAgIDxpbWcgY2xhc3M9XFxcImltZ19waWN0dXJlXFxcIiAgbmctc3JjPVxcXCJ7e2ZpbGUuaWNvbn19XFxcIj5cXHJcXG5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibmF6b3Zfc3Vib3J1XFxcIj57e2ZpbGUubmFtZX19PC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInR5cF9zdWJvcnVcXFwiPlxcclxcbiAgICAgICAgPHA+e3tmaWxlLm5pY2VUeXBlfX08L3A+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ2ZWxrb3N0X3N1Ym9ydVxcXCI+XFxyXFxuICAgICAgICA8cD57e2ZpbGUuc2l6ZX19PC9wPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJmaWx0ZXItcGFuZWwvZmlsdGVyLnBhbmVsLnRwbC5odG1sXCIsXCI8ZGl2IGNsYXNzPVxcXCJmaWx0ZXItcGFuZWxcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmaWx0ZXJcXFwiPlxcclxcbiAgICAgICAgPHVwbG9hZC1maWxlPjwvdXBsb2FkLWZpbGU+XFxyXFxuICAgICAgICA8cD5IbGFkYXQ6XFxyXFxuICAgICAgICAgICAgPGlucHV0IG5nLW1vZGVsPVxcXCIkY3RybC5tZWRpYVNlcnZpY2UuZmlsdGVyX2ZpbGVzXFxcIi8+XFxyXFxuICAgICAgICA8L3A+XFxyXFxuICAgICAgICA8cD5ab3JhZGl0IHBvZGxhOlxcclxcbiAgICAgICAgICAgIDxzZWxlY3QgbmctbW9kZWw9XFxcIiRjdHJsLm1lZGlhU2VydmljZS5vcmRlcl9maWxlc19ieVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIm5hbWVcXFwiPk5henZ1PC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcInNpemVcXFwiPlZlbGtvc3RpPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcImNyZWF0ZWRfdGltZVxcXCI+RGF0dW11IHZ5dHZvcmVuaWE8L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwibmljZVR5cGVcXFwiPlR5cHUgc3Vib3J1PC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgPC9zZWxlY3Q+XFxyXFxuICAgICAgICA8L3A+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImxlZnQtbWVudS9sZWZ0Lm1lbnUudHBsLmh0bWxcIixcIjxkaXYgaWQ9XFxcImxlZnRfbWVudVxcXCI+XFxyXFxuICAgIDx1bD5cXHJcXG4gICAgICAgIDxsaSBuZy1zaG93PVxcXCIkY3RybC5tZWRpYVNlcnZpY2UuZGlyXFxcIiBuZy1jbGljaz1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLmxvYWREaXIoJGN0cmwubWVkaWFTZXJ2aWNlLmRpciwgdHJ1ZSlcXFwiIHN0eWxlPVxcXCJmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxOHB4O1xcXCI+TmFkcmFkZW55IGFkcmVzYXI8L2xpPlxcclxcbiAgICAgICAgPGxpIG5nLXJlcGVhdD1cXFwiZGlyIGluICRjdHJsLm1lZGlhU2VydmljZS5kaXJzX2RhdGFcXFwiIG5nLWNsaWNrPVxcXCIkY3RybC5tZWRpYVNlcnZpY2UubG9hZERpcihkaXIpXFxcIiA+e3tkaXIubmFtZX19PC9saT5cXHJcXG4gICAgPC91bD5cXHJcXG48L2Rpdj5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJtZWRpYS1icm93c2VyL21lZGlhLmJyb3dzZXIudHBsLmh0bWxcIixcIjxkaXYgaWQ9XFxcIk1lZGlhQnJvd3NlclxcXCI+XFxyXFxuICAgIDxkaXYgaWQ9XFxcImhlYWRlcjFcXFwiPlxcclxcbiAgICAgICAgPGltZyBuZy1jbGljaz1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLnRvZ2dsZUxlZnRNZW51KClcXFwiIGlkPVxcXCJtZW51X2ljb25cXFwiIHNyYz1cXFwiaW1nL21lbnUucG5nXFxcIiBzdHlsZT1cXFwid2lkdGg6NTBweDsgaGVpZ2h0OjEwMCU7ZmxvYXQ6bGVmdDsgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXFwiPlxcclxcbiAgICAgICAgPGgxPk1lZGlhIEJyb3dzZXI8L2gxPlxcclxcbiAgICAgICAgPGltZyBpZD1cXFwiemF2cmlfZGlhbG9nXFxcIlxcclxcbiAgICAgICAgICAgICBuZy1jbGljaz1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLnRvZ2dsZURpYWxvZygpXFxcIlxcclxcbiAgICAgICAgICAgICBzcmM9XFxcImltZy9jbG9zZS5wbmdcXFwiIHN0eWxlPVxcXCJ3aWR0aDo0MHB4OyBoZWlnaHQ6MTAwJTtmbG9hdDpyaWdodDsgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxcIj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgIDxhcHBsaWNhdGlvbi1yb290PjwvYXBwbGljYXRpb24tcm9vdD5cXHJcXG48L2Rpdj5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJzdHZvcmVjL3N0dm9yZWMudHBsLmh0bWxcIixcIjxkaXYgaWQ9XFxcInN0dm9yZWNcXFwiPlxcclxcbiAgICA8aW1nIHN0eWxlPVxcXCJtYXgtaGVpZ2h0OiAyNXZ3OyBtYXgtd2lkdGg6IDI1dnc7XFxcIiBuZy1pZj1cXFwiJGN0cmwuaXNJbWFnZVxcXCIgbmctc3JjPVxcXCJ7eyRjdHJsLm1lZGlhU2VydmljZS5zZWxlY3RlZEZpbGV9fVxcXCI+XFxyXFxuPC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwidXBsb2FkLWZpbGUvdXBsb2FkLmZpbGUudHBsLmh0bWxcIixcIjxkaXYgY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPlxcclxcbiAgICA8aW5wdXQgaWQ9XFxcImRyYWdnaW5nXFxcIlxcclxcbiAgICAgICAgICAgY2xhc3M9XFxcImhpZGRlblxcXCJcXHJcXG4gICAgICAgICAgIHR5cGU9XFxcImZpbGVcXFwiXFxyXFxuICAgICAgICAgICBhY2NlcHQ9XFxcInt7JGN0cmwuZmlsZUFjY2VwdH19XFxcIlxcclxcbiAgICAgICAgICAgbXVsdGlwbGUvPlxcclxcbiAgICA8ZGl2PlxcclxcbiAgICAgICAgPHNwYW4+VXBsb2FkIHN1Ym9ydTogPC9zcGFuPlxcclxcbiAgICAgICAgPGEgY2xhc3M9XFxcImN1cnNvci1wb2ludGVyXFxcIiBuZy1jbGljaz1cXFwiJGN0cmwuZmlyZVVwbG9hZEV2ZW50KClcXFwiPlxcclxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJkaXNwbGF5LWJsb2NrXFxcIiB0cmFuc2xhdGU+VXBsb2FkPC9zcGFuPlxcclxcbiAgICAgICAgPC9hPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPHA+Tm92eSBhZHJlc2FyOlxcclxcbiAgICAgICAgPGlucHV0IG5nLW1vZGVsPVxcXCIkY3RybC5tZWRpYVNlcnZpY2UubmV3X2RpclxcXCIvPlxcclxcbiAgICAgICAgPGJ1dHRvbiBuZy1jbGljaz1cXFwiJGN0cmwuY3JlYXRlTmV3RGlyKClcXFwiPkNSRUFURTwvYnV0dG9uPlxcclxcbiAgICA8L3A+XFxyXFxuPC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwidXZvZC91dm9kLnRwbC5odG1sXCIsXCI8ZGl2PlxcclxcbiAgICA8ZGl2IGlkPVxcXCJ1dm9kXFxcIlxcclxcbiAgICAgICAgIG5nLWNsYXNzPVxcXCJ7XFwnaGFsZnZpZXdcXCc6ICRjdHJsLm1lZGlhU2VydmljZS5zaG93RGlhbG9nfVxcXCJcXHJcXG4gICAgICAgICBuZy1jbGljaz1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLmNsb3NlRGlhbG9nKClcXFwiPlxcclxcbiAgICAgICAgPHN0dm9yZWM+PC9zdHZvcmVjPlxcclxcblxcclxcbiAgICAgICAgPGJ1dHRvbiBpZD1cXFwiem9icmF6X2RpYWxvZ1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgbmctY2xpY2s9XFxcIiRjdHJsLm1lZGlhU2VydmljZS50b2dnbGVEaWFsb2coKTsgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgc3R5bGU9XFxcIm1hcmdpbi1sZWZ0OmF1dG87bWFyZ2luLXJpZ2h0OmF1dG87ZGlzcGxheTpibG9jazsgYmFja2dyb3VuZC1jb2xvcjojNDY0OTRhO2NvbG9yOiB3aGl0ZTsgcGFkZGluZzogNXB4IDVweCA1cHggNXB4XFxcIj5aT0JSQVpJVCBESUFMT0dcXHJcXG4gICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG5cXHJcXG4gICAgPG1lZGlhLWJyb3dzZXIgbmctaWY9XFxcIiRjdHJsLm1lZGlhU2VydmljZS5zaG93RGlhbG9nXFxcIj48L21lZGlhLWJyb3dzZXI+XFxyXFxuPC9kaXY+XCIpO31dKTsiXX0=
