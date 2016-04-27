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
        value: function deleteDir(dir, $event) {
            $event.stopPropagation();
            this.mediaService.deleteDir(dir);
        }
    }]);

    return DirBase;
}();

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
                            _this.list.add(list.item(fileIndex));
                        }
                    }

                    _this.mediaService.uploadFile(_this.list);
                }
            }, false);
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
        key: 'uploadFile',
        value: function uploadFile(filesSet) {
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = filesSet[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var item = _step2.value;

                    this._uploadFile(item);
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
    }, {
        key: '_uploadFile',
        value: function _uploadFile(file) {
            var _this2 = this;

            var location = '/';
            if (this.dir) {
                location = this.dir.location + '/' + this.dir.name;
            }

            var formData = new FormData();
            formData.append("file", file);

            this.$http({
                method: 'POST',
                data: formData,
                url: 'http://mediabrowser.bart.sk/media-browser/file' + location,
                headers: { 'Content-Type': undefined },
                transformRequest: angular.identity
            }).then(function (result) {
                _this2.files_data.push(new File(result.data));
            });
        }
    }, {
        key: 'createNewDir',
        value: function createNewDir() {
            var _this3 = this;

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
                _this3.dirs_data.push(result.data);
            });

            this.new_dir = "";
        }
    }, {
        key: 'deleteDir',
        value: function deleteDir(dir) {
            var _this4 = this;

            this.$http({
                method: 'DELETE',
                url: 'http://mediabrowser.bart.sk/media-browser/dir' + dir.location + '/' + dir.name
            }).then(function (result) {
                var index = _this4.dirs_data.indexOf(dir);
                if (index > -1) {
                    _this4.dirs_data.splice(index, 1);
                }
            });
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

        this.created_time = null;
        this.download_link = null;
        this.location = null;
        this.name = null;
        this.size = null;
        this.thumb_link = null;
        this.type = null;
        this.update_time = null;

        this.rawFile = null;

        angular.merge(this, data);
    }

    _createClass(File, [{
        key: 'getTypeName',
        value: function getTypeName() {
            var getIcon = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

            for (var typeName in TYPES) {
                var typeObj = TYPES[typeName];
                if (angular.isDefined(typeObj.list)) {
                    var _iteratorNormalCompletion3 = true;
                    var _didIteratorError3 = false;
                    var _iteratorError3 = undefined;

                    try {
                        for (var _iterator3 = typeObj.list[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                            var type = _step3.value;

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
                        _didIteratorError3 = true;
                        _iteratorError3 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion3 && _iterator3.return) {
                                _iterator3.return();
                            }
                        } finally {
                            if (_didIteratorError3) {
                                throw _iteratorError3;
                            }
                        }
                    }
                }
            }

            return null;
        }
    }, {
        key: 'exchangeRaw',
        value: function exchangeRaw(file) {
            this.download_link = null;
            this.location = null;
            this.name = file.name;
            this.size = file.size;
            this.thumb_link = null;
            this.type = file.type;
            this.update_time = null;
            this.rawFile = file.rawFile;
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
  $templateCache.put("application-root/application.root.tpl.html", "<div id=\"okno\">\n\n    <left-menu ng-if=\"$ctrl.mediaService.showLeftMenu\"></left-menu>\n\n    <div id=\"obsah\" ng-class=\"{\'full\': !$ctrl.mediaService.showLeftMenu}\">\n        <breadcrumbs></breadcrumbs>\n        <filter-panel></filter-panel>\n\n        <div style=\"margin-left:20px; margin-right: 30px\">\n\n            <dir-return></dir-return>\n\n            <dir-base></dir-base>\n\n            <file></file>\n        </div>\n\n    </div>\n\n</div>");
  $templateCache.put("dir-return/dir.return.tpl.html", "<div class=\"icon\" ng-show=\"$ctrl.mediaService.dir\" ng-click=\"$ctrl.mediaService.loadDir($ctrl.mediaService.dir, true)\">\n    <img class=\"img_icon\" src=\"img/adresar.png\">\n    <div class=\"nazov_suboru\">Nadradeny adresar</div>\n</div>");
  $templateCache.put("breadcrumbs/breadcrumbs.tpl.html", "<div id=\"header2\">\n    <h2>\n        <span>Home</span>\n        <span ng-repeat=\"dirName in $ctrl.mediaService.dir_list\"> / {{dirName}} </span>\n    </h2>\n</div>");
  $templateCache.put("dir-base/dir.base.tpl.html", "<div class=\"icon\" ng-repeat=\"dir in $ctrl.mediaService.dirs_data | filter: {name :$ctrl.mediaService.filter_files}\" ng-click=\"$ctrl.mediaService.loadDir(dir)\">\n\n    <img class=\"remove_dir\" src=\"img/close.png\" ng-click=\"$ctrl.deleteDir(dir, $event);\"/>\n\n    <img class=\"img_icon\" src=\"img/priecinok.png\">\n    <div class=\"nazov_suboru\">{{dir.name}}</div>\n\n</div>");
  $templateCache.put("file/file.tpl.html", "<div class=\"icon\" ng-repeat=\"file in $ctrl.mediaService.files_data | orderBy: $ctrl.mediaService.order_files_by | filter:{name :$ctrl.mediaService.filter_files}\" ng-click=\"$ctrl.mediaService.loadFile(file)\">\n    <img class=\"remove_dir\" src=\"img/close.png\">\n    <img class=\"img_picture\"  ng-src=\"{{file.icon}}\">\n\n    <div class=\"nazov_suboru\">{{file.name}}</div>\n    <div class=\"typ_suboru\">\n        <p>{{file.niceType}}</p>\n    </div>\n    <div class=\"velkost_suboru\">\n        <p>{{file.size}}</p>\n    </div>\n</div>");
  $templateCache.put("left-menu/left.menu.tpl.html", "<div id=\"left_menu\">\n    <ul>\n        <li ng-show=\"$ctrl.mediaService.dir\" ng-click=\"$ctrl.mediaService.loadDir($ctrl.mediaService.dir, true)\" style=\"font-weight: bold; font-size: 18px;\">Nadradeny adresar</li>\n        <li ng-repeat=\"dir in $ctrl.mediaService.dirs_data\" ng-click=\"$ctrl.mediaService.loadDir(dir)\" >{{dir.name}}</li>\n    </ul>\n</div>");
  $templateCache.put("filter-panel/filter.panel.tpl.html", "<div class=\"filter-panel\">\n    <div class=\"filter\">\n        <upload-file></upload-file>\n        <p>Hladat:\n            <input ng-model=\"$ctrl.mediaService.filter_files\"/>\n        </p>\n        <p>Zoradit podla:\n            <select ng-model=\"$ctrl.mediaService.order_files_by\">\n                <option value=\"name\">Nazvu</option>\n                <option value=\"size\">Velkosti</option>\n                <option value=\"created_time\">Datumu vytvorenia</option>\n                <option value=\"niceType\">Typu suboru</option>\n            </select>\n        </p>\n    </div>\n</div>");
  $templateCache.put("media-browser/media.browser.tpl.html", "<div id=\"MediaBrowser\">\n    <div id=\"header1\">\n        <img ng-click=\"$ctrl.mediaService.toggleLeftMenu()\" id=\"menu_icon\" src=\"img/menu.png\" style=\"width:50px; height:100%;float:left; align-self: flex-start;\">\n        <h1>Media Browser</h1>\n        <img id=\"zavri_dialog\"\n             ng-click=\"$ctrl.mediaService.toggleDialog()\"\n             src=\"img/close.png\" style=\"width:40px; height:100%;float:right; align-self: flex-end;\">\n    </div>\n\n    <application-root></application-root>\n</div>");
  $templateCache.put("stvorec/stvorec.tpl.html", "<div id=\"stvorec\">\n    <img style=\"max-height: 25vw; max-width: 25vw;\" ng-if=\"$ctrl.isImage\" ng-src=\"{{$ctrl.mediaService.selectedFile}}\">\n</div>");
  $templateCache.put("uvod/uvod.tpl.html", "<div>\n    <div id=\"uvod\"\n         ng-class=\"{\'halfview\': $ctrl.mediaService.showDialog}\"\n         ng-click=\"$ctrl.mediaService.closeDialog()\">\n        <stvorec></stvorec>\n\n        <button id=\"zobraz_dialog\"\n                ng-click=\"$ctrl.mediaService.toggleDialog(); $event.stopPropagation();\"\n                style=\"margin-left:auto;margin-right:auto;display:block; background-color:#46494a;color: white; padding: 5px 5px 5px 5px\">ZOBRAZIT DIALOG\n        </button>\n    </div>\n\n\n    <media-browser ng-if=\"$ctrl.mediaService.showDialog\"></media-browser>\n</div>");
  $templateCache.put("upload-file/upload.file.tpl.html", "<div class=\"pull-right\">\n    <input id=\"dragging\"\n           class=\"hidden\"\n           type=\"file\"\n           accept=\"{{$ctrl.fileAccept}}\"\n           multiple/>\n    <div>\n        <span>Upload suboru: </span>\n        <a class=\"cursor-pointer upload-btn\" ng-click=\"$ctrl.fireUploadEvent()\">\n            <span class=\"display-block\" translate>Upload</span>\n        </a>\n    </div>\n    <p>Novy adresar:\n        <input ng-model=\"$ctrl.mediaService.new_dir\"/>\n        <button ng-click=\"$ctrl.createNewDir()\">CREATE</button>\n    </p>\n</div>");
}]);

},{}]},{},["/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app.js"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBwLmpzIiwic3JjL2FwcC9jb21wb25lbnRzL2FwcGxpY2F0aW9uLXJvb3QvYXBwbGljYXRpb24ucm9vdC5qcyIsInNyYy9hcHAvY29tcG9uZW50cy9icmVhZGNydW1icy9icmVhZGNydW1icy5qcyIsInNyYy9hcHAvY29tcG9uZW50cy9kaXItYmFzZS9kaXIuYmFzZS5qcyIsInNyYy9hcHAvY29tcG9uZW50cy9kaXItcmV0dXJuL2Rpci5yZXR1cm4uanMiLCJzcmMvYXBwL2NvbXBvbmVudHMvZmlsZS9maWxlLmpzIiwic3JjL2FwcC9jb21wb25lbnRzL2ZpbHRlci1wYW5lbC9maWx0ZXIucGFuZWwuanMiLCJzcmMvYXBwL2NvbXBvbmVudHMvbGVmdC1tZW51L2xlZnQubWVudS5qcyIsInNyYy9hcHAvY29tcG9uZW50cy9tZWRpYS1icm93c2VyL21lZGlhLmJyb3dzZXIuanMiLCJzcmMvYXBwL2NvbXBvbmVudHMvc3R2b3JlYy9zdHZvcmVjLmpzIiwic3JjL2FwcC9jb21wb25lbnRzL3VwbG9hZC1maWxlL3VwbG9hZC5maWxlLmpzIiwic3JjL2FwcC9jb21wb25lbnRzL3V2b2QvdXZvZC5qcyIsInNyYy9hcHAvbWVkaWEuc2VydmljZS5qcyIsInNyYy90cGwvaW5kZXguanMiLCJzcmMvdHBsL3RlbXBsYXRlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7OztBQUVBLFFBQVEsTUFBUixDQUFlLFNBQWYsRUFBMEIsaUJBQTFCLEVBQ0ssU0FETCxDQUNlLE1BRGYsa0JBRUssU0FGTCxDQUVlLGNBRmYsbUJBR0ssU0FITCxDQUdlLGlCQUhmLHlCQUlLLFNBSkwsQ0FJZSxVQUpmLGtCQUtLLFNBTEwsQ0FLZSxXQUxmLGlCQU1LLFNBTkwsQ0FNZSxTQU5mLGlCQU9LLFNBUEwsQ0FPZSxNQVBmLGtCQVFLLFNBUkwsQ0FRZSxTQVJmLHFCQVNLLFNBVEwsQ0FTZSxhQVRmLHlCQVVLLFNBVkwsQ0FVZSxhQVZmLG9CQVdLLFNBWEwsQ0FXZSxZQVhmLG9CQWFLLE9BYkwsQ0FhYSxjQWJiOzs7Ozs7Ozs7OztJQ2ZNOzs7QUFHRixTQUhFLGVBR0YsQ0FBWSxLQUFaLEVBQW1CLFlBQW5CLEVBQWlDOzBCQUgvQixpQkFHK0I7O0FBQzdCLFNBQUssS0FBTCxHQUFhLEtBQWIsQ0FENkI7QUFFN0IsU0FBSyxZQUFMLEdBQW9CLFlBQXBCLENBRjZCO0NBQWpDOztrQkFNVztBQUNYLGdCQUFZLGVBQVo7QUFDQSxpQkFBYSw0Q0FBYjs7Ozs7Ozs7Ozs7O0lDWEU7OztBQUdGLFNBSEUsV0FHRixDQUFZLEtBQVosRUFBbUIsWUFBbkIsRUFBaUM7MEJBSC9CLGFBRytCOztBQUM3QixTQUFLLEtBQUwsR0FBYSxLQUFiLENBRDZCO0FBRTdCLFNBQUssWUFBTCxHQUFvQixZQUFwQixDQUY2QjtDQUFqQzs7a0JBTVc7QUFDWCxnQkFBWSxXQUFaO0FBQ0EsaUJBQWEsa0NBQWI7Ozs7Ozs7Ozs7Ozs7O0lDWEU7Ozs7QUFHRixhQUhFLE9BR0YsQ0FBWSxLQUFaLEVBQW1CLFlBQW5CLEVBQWlDOzhCQUgvQixTQUcrQjs7QUFDN0IsYUFBSyxLQUFMLEdBQWEsS0FBYixDQUQ2QjtBQUU3QixhQUFLLFlBQUwsR0FBb0IsWUFBcEIsQ0FGNkI7S0FBakM7O2lCQUhFOztrQ0FRUSxLQUFLLFFBQVE7QUFDbkIsbUJBQU8sZUFBUCxHQURtQjtBQUVuQixpQkFBSyxZQUFMLENBQWtCLFNBQWxCLENBQTRCLEdBQTVCLEVBRm1COzs7O1dBUnJCOzs7a0JBZVM7QUFDWCxnQkFBWSxPQUFaO0FBQ0EsaUJBQWEsNEJBQWI7Ozs7Ozs7Ozs7OztJQ2pCRTs7O0FBR0YsU0FIRSxTQUdGLENBQVksS0FBWixFQUFtQixZQUFuQixFQUFpQzswQkFIL0IsV0FHK0I7O0FBQzdCLFNBQUssS0FBTCxHQUFhLEtBQWIsQ0FENkI7QUFFN0IsU0FBSyxZQUFMLEdBQW9CLFlBQXBCLENBRjZCO0NBQWpDOztrQkFNVztBQUNYLGdCQUFZLFNBQVo7QUFDQSxpQkFBYSxnQ0FBYjs7Ozs7Ozs7Ozs7O0lDWEU7OztBQUdGLFNBSEUsSUFHRixDQUFZLEtBQVosRUFBbUIsWUFBbkIsRUFBaUM7MEJBSC9CLE1BRytCOztBQUM3QixTQUFLLEtBQUwsR0FBYSxLQUFiLENBRDZCO0FBRTdCLFNBQUssWUFBTCxHQUFvQixZQUFwQixDQUY2QjtDQUFqQzs7a0JBTVU7QUFDVixnQkFBWSxJQUFaO0FBQ0EsaUJBQWEsb0JBQWI7Ozs7Ozs7Ozs7OztJQ1hFOzs7QUFHRixTQUhFLFdBR0YsQ0FBWSxLQUFaLEVBQW1CLFlBQW5CLEVBQWlDOzBCQUgvQixhQUcrQjs7QUFDN0IsU0FBSyxLQUFMLEdBQWEsS0FBYixDQUQ2QjtBQUU3QixTQUFLLFlBQUwsR0FBb0IsWUFBcEIsQ0FGNkI7Q0FBakM7O2tCQU1XO0FBQ1gsZ0JBQVksV0FBWjtBQUNBLGlCQUFhLG9DQUFiOzs7Ozs7Ozs7Ozs7SUNYRTs7O0FBR0YsU0FIRSxRQUdGLENBQVksS0FBWixFQUFtQixZQUFuQixFQUFpQzswQkFIL0IsVUFHK0I7O0FBQzdCLFNBQUssS0FBTCxHQUFhLEtBQWIsQ0FENkI7QUFFN0IsU0FBSyxZQUFMLEdBQW9CLFlBQXBCLENBRjZCO0NBQWpDOztrQkFNVztBQUNYLGdCQUFZLFFBQVo7QUFDQSxpQkFBYSw4QkFBYjs7Ozs7Ozs7Ozs7O0lDWEU7OztBQUdGLFNBSEUsWUFHRixDQUFZLEtBQVosRUFBbUIsWUFBbkIsRUFBaUM7MEJBSC9CLGNBRytCOztBQUM3QixTQUFLLEtBQUwsR0FBYSxLQUFiLENBRDZCO0FBRTdCLFNBQUssWUFBTCxHQUFvQixZQUFwQixDQUY2QjtDQUFqQzs7a0JBTVc7QUFDWCxnQkFBWSxZQUFaO0FBQ0EsaUJBQWEsc0NBQWI7Ozs7Ozs7Ozs7Ozs7O0lDWEU7Ozs7QUFHRixhQUhFLE9BR0YsQ0FBWSxLQUFaLEVBQW1CLFlBQW5CLEVBQWlDOzhCQUgvQixTQUcrQjs7QUFDN0IsYUFBSyxLQUFMLEdBQWEsS0FBYixDQUQ2QjtBQUU3QixhQUFLLFlBQUwsR0FBb0IsWUFBcEIsQ0FGNkI7S0FBakM7O2lCQUhFOzs0QkFRVztBQUNULG1CQUFPLEtBQUssWUFBTCxDQUFrQixZQUFsQixHQUFpQyxJQUFqQyxHQUF3QyxLQUF4QyxDQURFOzs7O1dBUlg7OztrQkFjUztBQUNYLGdCQUFZLE9BQVo7QUFDQSxpQkFBYSwwQkFBYjs7Ozs7Ozs7Ozs7Ozs7SUNoQkU7Ozs7QUFHRixhQUhFLFVBR0YsQ0FBWSxRQUFaLEVBQXNCLFFBQXRCLEVBQWdDLE9BQWhDLEVBQXlDLFVBQXpDLEVBQXFELFlBQXJELEVBQW1FOzhCQUhqRSxZQUdpRTs7QUFDL0QsYUFBSyxRQUFMLEdBQWdCLFFBQWhCLENBRCtEO0FBRS9ELGFBQUssUUFBTCxHQUFnQixRQUFoQixDQUYrRDtBQUcvRCxhQUFLLE9BQUwsR0FBZSxPQUFmLENBSCtEO0FBSS9ELGFBQUssVUFBTCxHQUFrQixVQUFsQixDQUorRDtBQUsvRCxhQUFLLFlBQUwsR0FBb0IsWUFBcEIsQ0FMK0Q7O0FBTy9ELGFBQUssYUFBTCxHQUFxQixJQUFyQixDQVArRDs7QUFTL0QsYUFBSyxJQUFMLEdBQVksSUFBSSxHQUFKLEVBQVo7OztBQVQrRCxZQVkzRCxDQUFDLEtBQUssVUFBTCxFQUFpQjtBQUNsQixpQkFBSyxVQUFMLEdBQWtCLEVBQWxCLENBRGtCO1NBQXRCO0tBWko7O2lCQUhFOztrQ0FvQlE7QUFDTixpQkFBSyxLQUFMLEdBQWEsS0FBSyxRQUFMLENBQWMsSUFBZCxDQUFtQixPQUFuQixFQUE0QixDQUE1QixDQUFiLENBRE07O0FBR04saUJBQUssU0FBTCxHQUhNOzs7Ozs7Ozs7OzBDQVVRO0FBQ2QsZ0JBQUksS0FBSyxPQUFMLENBQWEsV0FBYixFQUEwQjtBQUMxQixxQkFBSyxLQUFMLENBQVcsYUFBWCxDQUF5QixJQUFJLFVBQUosQ0FBZSxPQUFmLENBQXpCLEVBRDBCO2FBQTlCLE1BRU8sSUFBSSxTQUFTLFdBQVQsRUFBc0I7QUFDN0Isb0JBQUksS0FBSyxTQUFTLFdBQVQsQ0FBcUIsWUFBckIsQ0FBTCxDQUR5QjtBQUU3QixtQkFBRyxTQUFILENBQWEsYUFBYixFQUE0QixJQUE1QixFQUFrQyxLQUFsQyxFQUY2QjtBQUc3QixxQkFBSyxLQUFMLENBQVcsYUFBWCxDQUF5QixFQUF6QixFQUg2QjthQUExQixNQUlBOztBQUNILHFCQUFLLEtBQUwsQ0FBVyxTQUFYLENBQXFCLGVBQXJCLEVBREc7YUFKQTs7Ozs7Ozs7OztvQ0FhQzs7O0FBQ1IsaUJBQUssS0FBTCxDQUNLLGdCQURMLENBQ3NCLE9BRHRCLEVBQytCLFVBQUMsQ0FBRCxFQUFPO0FBQzlCLGtCQUFFLE1BQUYsQ0FBUyxLQUFULEdBQWlCLEVBQWpCLENBRDhCO2FBQVAsRUFFeEIsS0FIUCxFQURRO0FBS1IsaUJBQUssS0FBTCxDQUNLLGdCQURMLENBQ3NCLFFBRHRCLEVBQ2dDLFVBQUMsQ0FBRCxFQUFPO0FBQy9CLG9CQUFJLE9BQU8sRUFBRSxNQUFGLENBQVMsS0FBVCxDQURvQjtBQUUvQixvQkFBSSxLQUFLLE1BQUwsRUFBYTtBQUNiLHlCQUFLLElBQUksU0FBSixJQUFpQixJQUF0QixFQUE0QjtBQUN4Qiw0QkFBSSxDQUFDLE1BQU0sU0FBTixDQUFELEVBQW1CO0FBQ25CLGtDQUFLLElBQUwsQ0FBVSxHQUFWLENBQWMsS0FBSyxJQUFMLENBQVUsU0FBVixDQUFkLEVBRG1CO3lCQUF2QjtxQkFESjs7QUFNQSwwQkFBSyxZQUFMLENBQWtCLFVBQWxCLENBQTZCLE1BQUssSUFBTCxDQUE3QixDQVBhO2lCQUFqQjthQUZ3QixFQVd6QixLQVpQLEVBTFE7Ozs7dUNBb0JHO0FBQ1gsaUJBQUssWUFBTCxDQUFrQixZQUFsQixHQURXOzs7O1dBbEViOzs7a0JBeUVTO0FBQ1gsaUJBQWEsa0NBQWI7QUFDQSxnQkFBWSxVQUFaOzs7Ozs7Ozs7Ozs7SUMzRUU7OztBQUdGLFNBSEUsSUFHRixDQUFZLEtBQVosRUFBbUIsWUFBbkIsRUFBaUM7MEJBSC9CLE1BRytCOztBQUM3QixTQUFLLEtBQUwsR0FBYSxLQUFiLENBRDZCO0FBRTdCLFNBQUssWUFBTCxHQUFvQixZQUFwQixDQUY2QjtDQUFqQzs7a0JBTVc7QUFDWCxnQkFBWSxJQUFaO0FBQ0EsaUJBQWEsb0JBQWI7Ozs7Ozs7Ozs7Ozs7O0FDWEosSUFBTSxRQUFRO0FBQ1YsV0FBTztBQUNILGNBQU0sQ0FBQyxXQUFELENBQU47QUFDQSxlQUFPLElBQVA7S0FGSjtBQUlBLFdBQU87QUFDSCxjQUFNLENBQUMsWUFBRCxFQUFlLGFBQWYsQ0FBTjtBQUNBLGVBQU8sSUFBUDtLQUZKO0FBSUEsV0FBTztBQUNILGNBQU0sQ0FBQyxXQUFELENBQU47QUFDQSxlQUFPLElBQVA7S0FGSjtBQUlBLFdBQU87QUFDSCxjQUFNLENBQUMsV0FBRCxDQUFOO0FBQ0EsZUFBTyxJQUFQO0tBRko7QUFJQSxZQUFRLENBQUMsV0FBRCxFQUFjLFlBQWQsQ0FBUjtBQUNBLFdBQU87QUFDSCxjQUFNLENBQUMsbUJBQUQsRUFBc0IsWUFBdEIsQ0FBTjtBQUNBLGNBQU0sYUFBTjtLQUZKO0FBSUEsV0FBTztBQUNILGNBQU0sQ0FBQyxpQkFBRCxDQUFOO0FBQ0EsY0FBTSxhQUFOO0tBRko7Q0F0QkU7O0lBNEJlOzs7O0FBR2pCLGFBSGlCLFlBR2pCLENBQVksS0FBWixFQUFtQixPQUFuQixFQUE0Qjs4QkFIWCxjQUdXOztBQUN4QixhQUFLLEtBQUwsR0FBYSxLQUFiLENBRHdCO0FBRXhCLGFBQUssT0FBTCxHQUFlLE9BQWYsQ0FGd0I7O0FBSXhCLGFBQUssR0FBTCxHQUFXLElBQVgsQ0FKd0I7QUFLeEIsYUFBSyxTQUFMLEdBQWlCLEVBQWpCLENBTHdCO0FBTXhCLGFBQUssVUFBTCxHQUFrQixFQUFsQixDQU53Qjs7QUFReEIsYUFBSyxRQUFMLEdBQWdCLEVBQWhCLENBUndCOztBQVV4QixhQUFLLFlBQUwsR0FBb0IsSUFBcEIsQ0FWd0I7O0FBWXhCLGFBQUssVUFBTCxHQUFrQixLQUFsQixDQVp3QjtBQWF4QixhQUFLLFlBQUwsR0FBb0IsSUFBcEIsQ0Fid0I7O0FBZ0J4QixhQUFLLGNBQUwsR0FBc0IsRUFBdEIsQ0FoQndCO0FBaUJ4QixhQUFLLFlBQUwsR0FBb0IsRUFBcEIsQ0FqQndCOztBQW1CeEIsYUFBSyxPQUFMLEdBQWUsRUFBZixDQW5Cd0I7O0FBcUJ4QixhQUFLLE9BQUwsR0FyQndCO0tBQTVCOztpQkFIaUI7O2tDQTRCMkI7OztnQkFBcEMsa0VBQVksb0JBQXdCO2dCQUFsQixpRUFBVyxxQkFBTzs7QUFDeEMsZ0JBQUksWUFBWSxFQUFaLENBRG9DO0FBRXhDLGdCQUFJLFNBQUosRUFBZTtBQUNYLDRCQUFZLFVBQVUsUUFBVixHQUFxQixHQUFyQixHQUEyQixVQUFVLElBQVYsQ0FENUI7O0FBR1gsb0JBQUksUUFBSixFQUFjO0FBQ1YsZ0NBQVksVUFBVSxRQUFWLENBREY7QUFFVix5QkFBSyxRQUFMLENBQWMsR0FBZCxHQUZVO2lCQUFkLE1BR087QUFDSCx5QkFBSyxRQUFMLENBQWMsSUFBZCxDQUFtQixVQUFVLElBQVYsQ0FBbkIsQ0FERztpQkFIUDthQUhKOztBQVdBLGlCQUFLLEtBQUwsQ0FBVyxHQUFYLHFDQUFpRCxTQUFqRCxFQUNLLElBREwsQ0FDVSxVQUFDLFFBQUQsRUFBYztBQUNoQixzQkFBSyxHQUFMLEdBQVcsU0FBUyxJQUFULENBQWMsR0FBZCxDQURLO0FBRWhCLHNCQUFLLFNBQUwsR0FBaUIsU0FBUyxJQUFULENBQWMsSUFBZCxDQUZEOztBQUloQixzQkFBSyxVQUFMLEdBQWtCLEVBQWxCLENBSmdCOzs7Ozs7QUFLaEIseUNBQWlCLFNBQVMsSUFBVCxDQUFjLEtBQWQsMEJBQWpCLG9HQUFzQzs0QkFBN0IsbUJBQTZCOztBQUNsQyw4QkFBSyxVQUFMLENBQWdCLElBQWhCLENBQXFCLElBQUksSUFBSixDQUFTLElBQVQsQ0FBckIsRUFEa0M7cUJBQXRDOzs7Ozs7Ozs7Ozs7OztpQkFMZ0I7YUFBZCxDQURWLENBYndDOzs7O21DQXlCYjtnQkFBdEIsc0VBQWdCLG9CQUFNOztBQUMzQixnQkFBSSxjQUFjLFVBQWQsRUFBMEI7QUFDMUIscUJBQUssWUFBTCxHQUFvQixjQUFjLGFBQWQsQ0FETTtBQUUxQixxQkFBSyxVQUFMLEdBQWtCLEtBQWxCLENBRjBCO2FBQTlCLE1BSUs7QUFDRCxxQkFBSyxPQUFMLENBQWEsSUFBYixDQUFrQixjQUFjLGFBQWQsRUFBNkIsUUFBL0MsRUFEQzthQUpMOzs7O21DQVNPLFVBQVU7Ozs7OztBQUNqQixzQ0FBaUIsbUNBQWpCLHdHQUEyQjt3QkFBbEIsb0JBQWtCOztBQUN2Qix5QkFBSyxXQUFMLENBQWlCLElBQWpCLEVBRHVCO2lCQUEzQjs7Ozs7Ozs7Ozs7Ozs7YUFEaUI7Ozs7b0NBTVQsTUFBTTs7O0FBQ2QsZ0JBQUksV0FBVyxHQUFYLENBRFU7QUFFZCxnQkFBSSxLQUFLLEdBQUwsRUFBVTtBQUNWLDJCQUFXLEtBQUssR0FBTCxDQUFTLFFBQVQsR0FBb0IsR0FBcEIsR0FBMEIsS0FBSyxHQUFMLENBQVMsSUFBVCxDQUQzQjthQUFkOztBQUlBLGdCQUFJLFdBQVcsSUFBSSxRQUFKLEVBQVgsQ0FOVTtBQU9kLHFCQUFTLE1BQVQsQ0FBZ0IsTUFBaEIsRUFBd0IsSUFBeEIsRUFQYzs7QUFTZCxpQkFBSyxLQUFMLENBQVc7QUFDSCx3QkFBUSxNQUFSO0FBQ0Esc0JBQU0sUUFBTjtBQUNBLHdFQUFzRCxRQUF0RDtBQUNBLHlCQUFTLEVBQUMsZ0JBQWdCLFNBQWhCLEVBQVY7QUFDQSxrQ0FBa0IsUUFBUSxRQUFSO2FBTDFCLEVBT0ssSUFQTCxDQU9VLGtCQUFVO0FBQ1osdUJBQUssVUFBTCxDQUFnQixJQUFoQixDQUFxQixJQUFJLElBQUosQ0FBUyxPQUFPLElBQVAsQ0FBOUIsRUFEWTthQUFWLENBUFYsQ0FUYzs7Ozt1Q0FxQkg7OztBQUNYLGdCQUFJLFdBQVcsR0FBWCxDQURPO0FBRVgsZ0JBQUksS0FBSyxHQUFMLEVBQVU7QUFDViwyQkFBVyxLQUFLLEdBQUwsQ0FBUyxRQUFULEdBQW9CLEdBQXBCLEdBQTBCLEtBQUssR0FBTCxDQUFTLElBQVQsQ0FEM0I7YUFBZDs7QUFJQSxpQkFBSyxLQUFMLENBQVc7QUFDSCx3QkFBUSxNQUFSO0FBQ0Esc0JBQU07QUFDRiwwQkFBTSxLQUFLLE9BQUw7QUFDTiw4QkFBVSxRQUFWO2lCQUZKO0FBSUEsb0VBTkc7YUFBWCxFQVFLLElBUkwsQ0FRVSxrQkFBVTtBQUNaLHVCQUFLLFNBQUwsQ0FBZSxJQUFmLENBQW9CLE9BQU8sSUFBUCxDQUFwQixDQURZO2FBQVYsQ0FSVixDQU5XOztBQWtCWCxpQkFBSyxPQUFMLEdBQWUsRUFBZixDQWxCVzs7OztrQ0FxQkwsS0FBSzs7O0FBQ1gsaUJBQUssS0FBTCxDQUFXO0FBQ0gsd0JBQVEsUUFBUjtBQUNBLHVFQUFxRCxJQUFJLFFBQUosU0FBZ0IsSUFBSSxJQUFKO2FBRjdFLEVBSUssSUFKTCxDQUlVLGtCQUFVO0FBQ1osb0JBQUksUUFBUSxPQUFLLFNBQUwsQ0FBZSxPQUFmLENBQXVCLEdBQXZCLENBQVIsQ0FEUTtBQUVaLG9CQUFJLFFBQVEsQ0FBQyxDQUFELEVBQUk7QUFDWiwyQkFBSyxTQUFMLENBQWUsTUFBZixDQUFzQixLQUF0QixFQUE2QixDQUE3QixFQURZO2lCQUFoQjthQUZFLENBSlYsQ0FEVzs7Ozt5Q0FhRTtBQUNiLGlCQUFLLFlBQUwsR0FBb0IsQ0FBQyxLQUFLLFlBQUwsQ0FEUjs7Ozt1Q0FJRjtBQUNYLGlCQUFLLFVBQUwsR0FBa0IsQ0FBQyxLQUFLLFVBQUwsQ0FEUjs7OztzQ0FJRDtBQUNWLGdCQUFJLEtBQUssVUFBTCxFQUNBLEtBQUssVUFBTCxHQUFrQixDQUFDLEtBQUssVUFBTCxDQUR2Qjs7OztXQXJJYTs7Ozs7SUEySWY7QUFDRixhQURFLElBQ0YsQ0FBWSxJQUFaLEVBQWtCOzhCQURoQixNQUNnQjs7QUFDZCxhQUFLLFlBQUwsR0FBb0IsSUFBcEIsQ0FEYztBQUVkLGFBQUssYUFBTCxHQUFxQixJQUFyQixDQUZjO0FBR2QsYUFBSyxRQUFMLEdBQWdCLElBQWhCLENBSGM7QUFJZCxhQUFLLElBQUwsR0FBWSxJQUFaLENBSmM7QUFLZCxhQUFLLElBQUwsR0FBWSxJQUFaLENBTGM7QUFNZCxhQUFLLFVBQUwsR0FBa0IsSUFBbEIsQ0FOYztBQU9kLGFBQUssSUFBTCxHQUFZLElBQVosQ0FQYztBQVFkLGFBQUssV0FBTCxHQUFtQixJQUFuQixDQVJjOztBQVVkLGFBQUssT0FBTCxHQUFlLElBQWYsQ0FWYzs7QUFZZCxnQkFBUSxLQUFSLENBQWMsSUFBZCxFQUFvQixJQUFwQixFQVpjO0tBQWxCOztpQkFERTs7c0NBZ0IyQjtnQkFBakIsZ0VBQVUscUJBQU87O0FBQ3pCLGlCQUFLLElBQUksUUFBSixJQUFnQixLQUFyQixFQUE0QjtBQUN4QixvQkFBSSxVQUFVLE1BQU0sUUFBTixDQUFWLENBRG9CO0FBRXhCLG9CQUFJLFFBQVEsU0FBUixDQUFrQixRQUFRLElBQVIsQ0FBdEIsRUFBcUM7Ozs7OztBQUNqQyw4Q0FBaUIsUUFBUSxJQUFSLDJCQUFqQix3R0FBK0I7Z0NBQXRCLG9CQUFzQjs7QUFDM0IsZ0NBQUksUUFBUSxLQUFLLElBQUwsRUFBVztBQUNuQixvQ0FBSSxPQUFKLEVBQWE7QUFDVCx3Q0FBSSxRQUFRLFNBQVIsQ0FBa0IsUUFBUSxLQUFSLENBQWxCLElBQW9DLFFBQVEsS0FBUixFQUFlO0FBQ25ELCtDQUFPLEtBQUssVUFBTCxDQUQ0QztxQ0FBdkQsTUFFTztBQUNILCtDQUFPLFFBQVEsU0FBUixDQUFrQixRQUFRLElBQVIsQ0FBbEIsR0FBa0MsUUFBUSxJQUFSLEdBQWUsSUFBakQsQ0FESjtxQ0FGUDtpQ0FESixNQU1PO0FBQ0gsMkNBQU8sUUFBUCxDQURHO2lDQU5QOzZCQURKO3lCQURKOzs7Ozs7Ozs7Ozs7OztxQkFEaUM7aUJBQXJDO2FBRko7O0FBbUJBLG1CQUFPLElBQVAsQ0FwQnlCOzs7O29DQXVCakIsTUFBTTtBQUNkLGlCQUFLLGFBQUwsR0FBcUIsSUFBckIsQ0FEYztBQUVkLGlCQUFLLFFBQUwsR0FBZ0IsSUFBaEIsQ0FGYztBQUdkLGlCQUFLLElBQUwsR0FBWSxLQUFLLElBQUwsQ0FIRTtBQUlkLGlCQUFLLElBQUwsR0FBWSxLQUFLLElBQUwsQ0FKRTtBQUtkLGlCQUFLLFVBQUwsR0FBa0IsSUFBbEIsQ0FMYztBQU1kLGlCQUFLLElBQUwsR0FBWSxLQUFLLElBQUwsQ0FORTtBQU9kLGlCQUFLLFdBQUwsR0FBbUIsSUFBbkIsQ0FQYztBQVFkLGlCQUFLLE9BQUwsR0FBZSxLQUFLLE9BQUwsQ0FSRDs7Ozs0QkFXSDtBQUNYLG1CQUFPLEtBQUssV0FBTCxLQUFxQixLQUFLLFdBQUwsRUFBckIsR0FBMEMsS0FBMUMsQ0FESTs7Ozs0QkFJSjtBQUNQLGdCQUFJLE9BQU8sS0FBSyxXQUFMLENBQWlCLElBQWpCLENBQVAsQ0FERztBQUVQLG1CQUFPLE9BQU8sSUFBUCxHQUFjLGVBQWQsQ0FGQTs7OztXQXREVDs7Ozs7O0FDdktOLFFBQVEsYUFBUjtBQUNBLE9BQU8sT0FBUCxHQUFpQixXQUFqQjs7Ozs7QUNEQSxRQUFRLE1BQVIsQ0FBZSxXQUFmLEVBQTRCLEVBQTVCLEVBQWdDLEdBQWhDLENBQW9DLENBQUMsZ0JBQUQsRUFBbUIsVUFBUyxjQUFULEVBQXlCO0FBQUMsaUJBQWUsR0FBZixDQUFtQiw0Q0FBbkIsRUFBZ0UsK2NBQWhFLEVBQUQ7QUFDaEYsaUJBQWUsR0FBZixDQUFtQixnQ0FBbkIsRUFBb0Qsc1BBQXBELEVBRGdGO0FBRWhGLGlCQUFlLEdBQWYsQ0FBbUIsa0NBQW5CLEVBQXNELHlLQUF0RCxFQUZnRjtBQUdoRixpQkFBZSxHQUFmLENBQW1CLDRCQUFuQixFQUFnRCxtWUFBaEQsRUFIZ0Y7QUFJaEYsaUJBQWUsR0FBZixDQUFtQixvQkFBbkIsRUFBd0MsbWlCQUF4QyxFQUpnRjtBQUtoRixpQkFBZSxHQUFmLENBQW1CLDhCQUFuQixFQUFrRCwrV0FBbEQsRUFMZ0Y7QUFNaEYsaUJBQWUsR0FBZixDQUFtQixvQ0FBbkIsRUFBd0QsMGxCQUF4RCxFQU5nRjtBQU9oRixpQkFBZSxHQUFmLENBQW1CLHNDQUFuQixFQUEwRCwyZ0JBQTFELEVBUGdGO0FBUWhGLGlCQUFlLEdBQWYsQ0FBbUIsMEJBQW5CLEVBQThDLDZKQUE5QyxFQVJnRjtBQVNoRixpQkFBZSxHQUFmLENBQW1CLG9CQUFuQixFQUF3QyxnbEJBQXhDLEVBVGdGO0FBVWhGLGlCQUFlLEdBQWYsQ0FBbUIsa0NBQW5CLEVBQXNELDJqQkFBdEQsRUFWZ0Y7Q0FBekIsQ0FBdkQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vdHBsL2luZGV4JztcbmltcG9ydCB1dm9kIGZyb20gJy4vYXBwL2NvbXBvbmVudHMvdXZvZC91dm9kJztcbmltcG9ydCBtZWRpYUJyb3dzZXIgZnJvbSAnLi9hcHAvY29tcG9uZW50cy9tZWRpYS1icm93c2VyL21lZGlhLmJyb3dzZXInO1xuaW1wb3J0IHJvb3QgZnJvbSAnLi9hcHAvY29tcG9uZW50cy9hcHBsaWNhdGlvbi1yb290L2FwcGxpY2F0aW9uLnJvb3QnO1xuaW1wb3J0IGxlZnRNZW51IGZyb20gJy4vYXBwL2NvbXBvbmVudHMvbGVmdC1tZW51L2xlZnQubWVudSc7XG5pbXBvcnQgZGlyUmV0dXJuIGZyb20gJy4vYXBwL2NvbXBvbmVudHMvZGlyLXJldHVybi9kaXIucmV0dXJuJztcbmltcG9ydCBkaXJCYXNlIGZyb20gJy4vYXBwL2NvbXBvbmVudHMvZGlyLWJhc2UvZGlyLmJhc2UnO1xuaW1wb3J0IGZpbGUgZnJvbSAnLi9hcHAvY29tcG9uZW50cy9maWxlL2ZpbGUnO1xuaW1wb3J0IHN0dm9yZWMgZnJvbSAnLi9hcHAvY29tcG9uZW50cy9zdHZvcmVjL3N0dm9yZWMnO1xuaW1wb3J0IGJyZWFkY3J1bWJzIGZyb20gJy4vYXBwL2NvbXBvbmVudHMvYnJlYWRjcnVtYnMvYnJlYWRjcnVtYnMnO1xuaW1wb3J0IGZpbHRlclBhbmVsIGZyb20gJy4vYXBwL2NvbXBvbmVudHMvZmlsdGVyLXBhbmVsL2ZpbHRlci5wYW5lbCc7XG5pbXBvcnQgdXBsb2FkRmlsZSBmcm9tICcuL2FwcC9jb21wb25lbnRzL3VwbG9hZC1maWxlL3VwbG9hZC5maWxlJztcblxuaW1wb3J0IE1lZGlhU2VydmljZSBmcm9tICcuL2FwcC9tZWRpYS5zZXJ2aWNlJztcblxuYW5ndWxhci5tb2R1bGUoJ2Jyb3dzZXInLCBbdGVtcGxhdGVdKVxuICAgIC5jb21wb25lbnQoJ3V2b2QnLCB1dm9kKVxuICAgIC5jb21wb25lbnQoJ21lZGlhQnJvd3NlcicsIG1lZGlhQnJvd3NlcilcbiAgICAuY29tcG9uZW50KCdhcHBsaWNhdGlvblJvb3QnLCByb290KVxuICAgIC5jb21wb25lbnQoJ2xlZnRNZW51JywgbGVmdE1lbnUpXG4gICAgLmNvbXBvbmVudCgnZGlyUmV0dXJuJywgZGlyUmV0dXJuKVxuICAgIC5jb21wb25lbnQoJ2RpckJhc2UnLCBkaXJCYXNlKVxuICAgIC5jb21wb25lbnQoJ2ZpbGUnLCBmaWxlKVxuICAgIC5jb21wb25lbnQoJ3N0dm9yZWMnLCBzdHZvcmVjKVxuICAgIC5jb21wb25lbnQoJ2JyZWFkY3J1bWJzJywgYnJlYWRjcnVtYnMpXG4gICAgLmNvbXBvbmVudCgnZmlsdGVyUGFuZWwnLCBmaWx0ZXJQYW5lbClcbiAgICAuY29tcG9uZW50KCd1cGxvYWRGaWxlJywgdXBsb2FkRmlsZSlcblxuICAgIC5zZXJ2aWNlKCdtZWRpYVNlcnZpY2UnLCBNZWRpYVNlcnZpY2UpXG47IiwiY2xhc3MgQXBwbGljYXRpb25Sb290e1xuXG4gICAgLy8gQG5nSW5qZWN0XG4gICAgY29uc3RydWN0b3IoJGh0dHAsIG1lZGlhU2VydmljZSkge1xuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gICAgICAgIHRoaXMubWVkaWFTZXJ2aWNlID0gbWVkaWFTZXJ2aWNlO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbnRyb2xsZXI6IEFwcGxpY2F0aW9uUm9vdCxcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcGxpY2F0aW9uLXJvb3QvYXBwbGljYXRpb24ucm9vdC50cGwuaHRtbCdcbn07IiwiY2xhc3MgQnJlYWRjcnVtYnMge1xuXG4gICAgLy8gQG5nSW5qZWN0XG4gICAgY29uc3RydWN0b3IoJGh0dHAsIG1lZGlhU2VydmljZSkge1xuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gICAgICAgIHRoaXMubWVkaWFTZXJ2aWNlID0gbWVkaWFTZXJ2aWNlO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbnRyb2xsZXI6IEJyZWFkY3J1bWJzLFxuICAgIHRlbXBsYXRlVXJsOiAnYnJlYWRjcnVtYnMvYnJlYWRjcnVtYnMudHBsLmh0bWwnXG59IiwiY2xhc3MgRGlyQmFzZSB7XG5cbiAgICAvLyBAbmdJbmplY3RcbiAgICBjb25zdHJ1Y3RvcigkaHR0cCwgbWVkaWFTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcbiAgICAgICAgdGhpcy5tZWRpYVNlcnZpY2UgPSBtZWRpYVNlcnZpY2U7XG4gICAgfVxuXG4gICAgZGVsZXRlRGlyKGRpciwgJGV2ZW50KSB7XG4gICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5tZWRpYVNlcnZpY2UuZGVsZXRlRGlyKGRpcik7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBjb250cm9sbGVyOiBEaXJCYXNlLFxuICAgIHRlbXBsYXRlVXJsOiAnZGlyLWJhc2UvZGlyLmJhc2UudHBsLmh0bWwnXG59IiwiY2xhc3MgRGlyUmV0dXJuIHtcblxuICAgIC8vIEBuZ0luamVjdFxuICAgIGNvbnN0cnVjdG9yKCRodHRwLCBtZWRpYVNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xuICAgICAgICB0aGlzLm1lZGlhU2VydmljZSA9IG1lZGlhU2VydmljZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBjb250cm9sbGVyOiBEaXJSZXR1cm4sXG4gICAgdGVtcGxhdGVVcmw6ICdkaXItcmV0dXJuL2Rpci5yZXR1cm4udHBsLmh0bWwnXG59IiwiY2xhc3MgRmlsZSB7XG5cbiAgICAvLyBAbmdJbmplY3RcbiAgICBjb25zdHJ1Y3RvcigkaHR0cCwgbWVkaWFTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcbiAgICAgICAgdGhpcy5tZWRpYVNlcnZpY2UgPSBtZWRpYVNlcnZpY2U7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdHtcbiAgICBjb250cm9sbGVyOiBGaWxlLFxuICAgIHRlbXBsYXRlVXJsOiAnZmlsZS9maWxlLnRwbC5odG1sJ1xufSIsImNsYXNzIEZpbHRlclBhbmVsIHtcblxuICAgIC8vIEBuZ0luamVjdFxuICAgIGNvbnN0cnVjdG9yKCRodHRwLCBtZWRpYVNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xuICAgICAgICB0aGlzLm1lZGlhU2VydmljZSA9IG1lZGlhU2VydmljZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBjb250cm9sbGVyOiBGaWx0ZXJQYW5lbCxcbiAgICB0ZW1wbGF0ZVVybDogJ2ZpbHRlci1wYW5lbC9maWx0ZXIucGFuZWwudHBsLmh0bWwnXG59OyIsImNsYXNzIExlZnRNZW51IHtcblxuICAgIC8vIEBuZ0luamVjdFxuICAgIGNvbnN0cnVjdG9yKCRodHRwLCBtZWRpYVNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xuICAgICAgICB0aGlzLm1lZGlhU2VydmljZSA9IG1lZGlhU2VydmljZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBjb250cm9sbGVyOiBMZWZ0TWVudSxcbiAgICB0ZW1wbGF0ZVVybDogJ2xlZnQtbWVudS9sZWZ0Lm1lbnUudHBsLmh0bWwnXG59IiwiY2xhc3MgTWVkaWFCcm93c2VyIHtcblxuICAgIC8vIEBuZ0luamVjdFxuICAgIGNvbnN0cnVjdG9yKCRodHRwLCBtZWRpYVNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xuICAgICAgICB0aGlzLm1lZGlhU2VydmljZSA9IG1lZGlhU2VydmljZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBjb250cm9sbGVyOiBNZWRpYUJyb3dzZXIsXG4gICAgdGVtcGxhdGVVcmw6ICdtZWRpYS1icm93c2VyL21lZGlhLmJyb3dzZXIudHBsLmh0bWwnXG59OyIsImNsYXNzIFN0dm9yZWN7XG5cbiAgICAvLyBAbmdJbmplY3RcbiAgICBjb25zdHJ1Y3RvcigkaHR0cCwgbWVkaWFTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcbiAgICAgICAgdGhpcy5tZWRpYVNlcnZpY2UgPSBtZWRpYVNlcnZpY2U7XG4gICAgfVxuXG4gICAgZ2V0IGlzSW1hZ2UoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMubWVkaWFTZXJ2aWNlLnNlbGVjdGVkRmlsZSA/IHRydWUgOiBmYWxzZTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbnRyb2xsZXI6IFN0dm9yZWMsXG4gICAgdGVtcGxhdGVVcmw6ICdzdHZvcmVjL3N0dm9yZWMudHBsLmh0bWwnXG59IiwiY2xhc3MgVXBsb2FkRmlsZSB7XG5cbiAgICAvLyBAbmdJbmplY3RcbiAgICBjb25zdHJ1Y3RvcigkdGltZW91dCwgJGVsZW1lbnQsICR3aW5kb3csICRyb290U2NvcGUsIG1lZGlhU2VydmljZSkge1xuICAgICAgICB0aGlzLiR0aW1lb3V0ID0gJHRpbWVvdXQ7XG4gICAgICAgIHRoaXMuJGVsZW1lbnQgPSAkZWxlbWVudDtcbiAgICAgICAgdGhpcy4kd2luZG93ID0gJHdpbmRvdztcbiAgICAgICAgdGhpcy4kcm9vdFNjb3BlID0gJHJvb3RTY29wZTtcbiAgICAgICAgdGhpcy5tZWRpYVNlcnZpY2UgPSBtZWRpYVNlcnZpY2U7XG5cbiAgICAgICAgdGhpcy51cGxvYWRUaW1lb3V0ID0gbnVsbDtcblxuICAgICAgICB0aGlzLmxpc3QgPSBuZXcgU2V0KCk7XG5cbiAgICAgICAgLy8gZGVmYXVsdCB2YWx1ZXNcbiAgICAgICAgaWYgKCF0aGlzLmZpbGVBY2NlcHQpIHtcbiAgICAgICAgICAgIHRoaXMuZmlsZUFjY2VwdCA9ICcnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJG9uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5pbnB1dCA9IHRoaXMuJGVsZW1lbnQuZmluZChcImlucHV0XCIpWzBdO1xuXG4gICAgICAgIHRoaXMuaW5pdENsaWNrKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlciBjbGljayBldmVudCBvbiB0aGlzLmlucHV0XG4gICAgICpcbiAgICAgKi9cbiAgICBmaXJlVXBsb2FkRXZlbnQoKSB7XG4gICAgICAgIGlmICh0aGlzLiR3aW5kb3cuQ3VzdG9tRXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQuZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudChcImNsaWNrXCIpKTtcbiAgICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC5jcmVhdGVFdmVudCkge1xuICAgICAgICAgICAgbGV0IGV2ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0hUTUxFdmVudHMnKTtcbiAgICAgICAgICAgIGV2LmluaXRFdmVudCgnY29udGV4dG1lbnUnLCB0cnVlLCBmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLmlucHV0LmRpc3BhdGNoRXZlbnQoZXYpO1xuICAgICAgICB9IGVsc2UgeyAvLyBJbnRlcm5ldCBFeHBsb3JlclxuICAgICAgICAgICAgdGhpcy5pbnB1dC5maXJlRXZlbnQoJ29uY29udGV4dG1lbnUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBsaXN0ZW5lciBmb3IgY2hhbmdlIG9uIHRoaXMuaW5wdXRcbiAgICAgKlxuICAgICAqL1xuICAgIGluaXRDbGljaygpIHtcbiAgICAgICAgdGhpcy5pbnB1dFxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBlLnRhcmdldC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgICB0aGlzLmlucHV0XG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgbGlzdCA9IGUudGFyZ2V0LmZpbGVzO1xuICAgICAgICAgICAgICAgIGlmIChsaXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBmaWxlSW5kZXggaW4gbGlzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc05hTihmaWxlSW5kZXgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0LmFkZChsaXN0Lml0ZW0oZmlsZUluZGV4KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lZGlhU2VydmljZS51cGxvYWRGaWxlKHRoaXMubGlzdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgZmFsc2UpO1xuICAgIH1cblxuICAgIGNyZWF0ZU5ld0RpcigpIHtcbiAgICAgICAgdGhpcy5tZWRpYVNlcnZpY2UuY3JlYXRlTmV3RGlyKCk7XG4gICAgfVxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHRlbXBsYXRlVXJsOiAndXBsb2FkLWZpbGUvdXBsb2FkLmZpbGUudHBsLmh0bWwnLFxuICAgIGNvbnRyb2xsZXI6IFVwbG9hZEZpbGVcbn07IiwiY2xhc3MgVXZvZCB7XG5cbiAgICAvLyBAbmdJbmplY3RcbiAgICBjb25zdHJ1Y3RvcigkaHR0cCwgbWVkaWFTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcbiAgICAgICAgdGhpcy5tZWRpYVNlcnZpY2UgPSBtZWRpYVNlcnZpY2U7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY29udHJvbGxlcjogVXZvZCxcbiAgICB0ZW1wbGF0ZVVybDogJ3V2b2QvdXZvZC50cGwuaHRtbCdcbn07IiwiY29uc3QgVFlQRVMgPSB7XG4gICAgJ1BORyc6IHtcbiAgICAgICAgbGlzdDogWydpbWFnZS9wbmcnXSxcbiAgICAgICAgaW1hZ2U6IHRydWVcbiAgICB9LFxuICAgICdKUEcnOiB7XG4gICAgICAgIGxpc3Q6IFsnaW1hZ2UvanBlZycsICdpbWFnZS9wanBlZyddLFxuICAgICAgICBpbWFnZTogdHJ1ZVxuICAgIH0sXG4gICAgJ0dJRic6IHtcbiAgICAgICAgbGlzdDogWydpbWFnZS9naWYnXSxcbiAgICAgICAgaW1hZ2U6IHRydWVcbiAgICB9LFxuICAgICdCTVAnOiB7XG4gICAgICAgIGxpc3Q6IFsnaW1hZ2UvYm1wJ10sXG4gICAgICAgIGltYWdlOiB0cnVlXG4gICAgfSxcbiAgICAnVElGRic6IFsnaW1hZ2UvaWVmJywgJ2ltYWdlL3RpZmYnXSxcbiAgICAnVFhUJzoge1xuICAgICAgICBsaXN0OiBbJ2FwcGxpY2F0aW9uL3BsYWluJywgJ3RleHQvcGxhaW4nXSxcbiAgICAgICAgaWNvbjogJ2ltZy90eHQucG5nJ1xuICAgIH0sXG4gICAgJ1BERic6IHtcbiAgICAgICAgbGlzdDogW1wiYXBwbGljYXRpb24vcGRmXCJdLFxuICAgICAgICBpY29uOiAnaW1nL3BkZi5wbmcnXG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVkaWFTZXJ2aWNlIHtcblxuICAgIC8vIEBuZ0luamVjdFxuICAgIGNvbnN0cnVjdG9yKCRodHRwLCAkd2luZG93KSB7XG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcbiAgICAgICAgdGhpcy4kd2luZG93ID0gJHdpbmRvdztcblxuICAgICAgICB0aGlzLmRpciA9IG51bGw7XG4gICAgICAgIHRoaXMuZGlyc19kYXRhID0gW107XG4gICAgICAgIHRoaXMuZmlsZXNfZGF0YSA9IFtdO1xuXG4gICAgICAgIHRoaXMuZGlyX2xpc3QgPSBbXTtcblxuICAgICAgICB0aGlzLnNlbGVjdGVkRmlsZSA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5zaG93RGlhbG9nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2hvd0xlZnRNZW51ID0gdHJ1ZTtcblxuXG4gICAgICAgIHRoaXMub3JkZXJfZmlsZXNfYnkgPSBcIlwiO1xuICAgICAgICB0aGlzLmZpbHRlcl9maWxlcyA9IFwiXCI7XG5cbiAgICAgICAgdGhpcy5uZXdfZGlyID0gJyc7XG5cbiAgICAgICAgdGhpcy5sb2FkRGlyKCk7XG5cbiAgICB9XG5cbiAgICBsb2FkRGlyKGRpcmVjdG9yeSA9IG51bGwsIGlzUmV0dXJuID0gZmFsc2UpIHtcbiAgICAgICAgbGV0IHVybEFkcmVzcyA9ICcnO1xuICAgICAgICBpZiAoZGlyZWN0b3J5KSB7XG4gICAgICAgICAgICB1cmxBZHJlc3MgPSBkaXJlY3RvcnkubG9jYXRpb24gKyAnLycgKyBkaXJlY3RvcnkubmFtZTtcblxuICAgICAgICAgICAgaWYgKGlzUmV0dXJuKSB7XG4gICAgICAgICAgICAgICAgdXJsQWRyZXNzID0gZGlyZWN0b3J5LmxvY2F0aW9uO1xuICAgICAgICAgICAgICAgIHRoaXMuZGlyX2xpc3QucG9wKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlyX2xpc3QucHVzaChkaXJlY3RvcnkubmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiRodHRwLmdldChgaHR0cDovL21lZGlhYnJvd3Nlci5iYXJ0LnNrL2RpciR7dXJsQWRyZXNzfWApXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpciA9IHJlc3BvbnNlLmRhdGEuZGlyO1xuICAgICAgICAgICAgICAgIHRoaXMuZGlyc19kYXRhID0gcmVzcG9uc2UuZGF0YS5kaXJzO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5maWxlc19kYXRhID0gW107XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgZmlsZSBvZiByZXNwb25zZS5kYXRhLmZpbGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZXNfZGF0YS5wdXNoKG5ldyBGaWxlKGZpbGUpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgbG9hZEZpbGUoZmlsZURpcmVjdG9yeSA9IG51bGwpIHtcbiAgICAgICAgaWYgKGZpbGVEaXJlY3RvcnkudGh1bWJfbGluaykge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEZpbGUgPSBmaWxlRGlyZWN0b3J5LmRvd25sb2FkX2xpbms7XG4gICAgICAgICAgICB0aGlzLnNob3dEaWFsb2cgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuJHdpbmRvdy5vcGVuKGZpbGVEaXJlY3RvcnkuZG93bmxvYWRfbGluaywgJ19ibGFuaycpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHVwbG9hZEZpbGUoZmlsZXNTZXQpIHtcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBmaWxlc1NldCkge1xuICAgICAgICAgICAgdGhpcy5fdXBsb2FkRmlsZShpdGVtKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF91cGxvYWRGaWxlKGZpbGUpIHtcbiAgICAgICAgdmFyIGxvY2F0aW9uID0gJy8nO1xuICAgICAgICBpZiAodGhpcy5kaXIpIHtcbiAgICAgICAgICAgIGxvY2F0aW9uID0gdGhpcy5kaXIubG9jYXRpb24gKyAnLycgKyB0aGlzLmRpci5uYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImZpbGVcIiwgZmlsZSk7XG5cbiAgICAgICAgdGhpcy4kaHR0cCh7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgZGF0YTogZm9ybURhdGEsXG4gICAgICAgICAgICAgICAgdXJsOiBgaHR0cDovL21lZGlhYnJvd3Nlci5iYXJ0LnNrL21lZGlhLWJyb3dzZXIvZmlsZSR7bG9jYXRpb259YCxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6IHVuZGVmaW5lZH0sXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtUmVxdWVzdDogYW5ndWxhci5pZGVudGl0eVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5maWxlc19kYXRhLnB1c2gobmV3IEZpbGUocmVzdWx0LmRhdGEpKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNyZWF0ZU5ld0RpcigpIHtcbiAgICAgICAgdmFyIGxvY2F0aW9uID0gJy8nO1xuICAgICAgICBpZiAodGhpcy5kaXIpIHtcbiAgICAgICAgICAgIGxvY2F0aW9uID0gdGhpcy5kaXIubG9jYXRpb24gKyAnLycgKyB0aGlzLmRpci5uYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kaHR0cCh7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLm5ld19kaXIsXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uOiBsb2NhdGlvblxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdXJsOiBgaHR0cDovL21lZGlhYnJvd3Nlci5iYXJ0LnNrL21lZGlhLWJyb3dzZXIvZGlyYFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXJzX2RhdGEucHVzaChyZXN1bHQuZGF0YSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm5ld19kaXIgPSBcIlwiO1xuICAgIH1cblxuICAgIGRlbGV0ZURpcihkaXIpIHtcbiAgICAgICAgdGhpcy4kaHR0cCh7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgICAgICAgICAgICB1cmw6IGBodHRwOi8vbWVkaWFicm93c2VyLmJhcnQuc2svbWVkaWEtYnJvd3Nlci9kaXIke2Rpci5sb2NhdGlvbn0vJHtkaXIubmFtZX1gXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmRpcnNfZGF0YS5pbmRleE9mKGRpcik7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXJzX2RhdGEuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB0b2dnbGVMZWZ0TWVudSgpIHtcbiAgICAgICAgdGhpcy5zaG93TGVmdE1lbnUgPSAhdGhpcy5zaG93TGVmdE1lbnU7XG4gICAgfVxuXG4gICAgdG9nZ2xlRGlhbG9nKCkge1xuICAgICAgICB0aGlzLnNob3dEaWFsb2cgPSAhdGhpcy5zaG93RGlhbG9nO1xuICAgIH1cblxuICAgIGNsb3NlRGlhbG9nKCkge1xuICAgICAgICBpZiAodGhpcy5zaG93RGlhbG9nKVxuICAgICAgICAgICAgdGhpcy5zaG93RGlhbG9nID0gIXRoaXMuc2hvd0RpYWxvZztcbiAgICB9XG59XG5cblxuY2xhc3MgRmlsZSB7XG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgICAgICB0aGlzLmNyZWF0ZWRfdGltZSA9IG51bGw7XG4gICAgICAgIHRoaXMuZG93bmxvYWRfbGluayA9IG51bGw7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBudWxsO1xuICAgICAgICB0aGlzLm5hbWUgPSBudWxsO1xuICAgICAgICB0aGlzLnNpemUgPSBudWxsO1xuICAgICAgICB0aGlzLnRodW1iX2xpbmsgPSBudWxsO1xuICAgICAgICB0aGlzLnR5cGUgPSBudWxsO1xuICAgICAgICB0aGlzLnVwZGF0ZV90aW1lID0gbnVsbDtcblxuICAgICAgICB0aGlzLnJhd0ZpbGUgPSBudWxsO1xuXG4gICAgICAgIGFuZ3VsYXIubWVyZ2UodGhpcywgZGF0YSk7XG4gICAgfVxuXG4gICAgZ2V0VHlwZU5hbWUoZ2V0SWNvbiA9IGZhbHNlKSB7XG4gICAgICAgIGZvciAobGV0IHR5cGVOYW1lIGluIFRZUEVTKSB7XG4gICAgICAgICAgICBsZXQgdHlwZU9iaiA9IFRZUEVTW3R5cGVOYW1lXTtcbiAgICAgICAgICAgIGlmIChhbmd1bGFyLmlzRGVmaW5lZCh0eXBlT2JqLmxpc3QpKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgdHlwZSBvZiB0eXBlT2JqLmxpc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT0gdGhpcy50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2V0SWNvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbmd1bGFyLmlzRGVmaW5lZCh0eXBlT2JqLmltYWdlKSAmJiB0eXBlT2JqLmltYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRodW1iX2xpbms7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFuZ3VsYXIuaXNEZWZpbmVkKHR5cGVPYmouaWNvbikgPyB0eXBlT2JqLmljb24gOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVOYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZXhjaGFuZ2VSYXcoZmlsZSkge1xuICAgICAgICB0aGlzLmRvd25sb2FkX2xpbmsgPSBudWxsO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbnVsbDtcbiAgICAgICAgdGhpcy5uYW1lID0gZmlsZS5uYW1lO1xuICAgICAgICB0aGlzLnNpemUgPSBmaWxlLnNpemU7XG4gICAgICAgIHRoaXMudGh1bWJfbGluayA9IG51bGw7XG4gICAgICAgIHRoaXMudHlwZSA9IGZpbGUudHlwZTtcbiAgICAgICAgdGhpcy51cGRhdGVfdGltZSA9IG51bGw7XG4gICAgICAgIHRoaXMucmF3RmlsZSA9IGZpbGUucmF3RmlsZTtcbiAgICB9XG5cbiAgICBnZXQgbmljZVR5cGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFR5cGVOYW1lKCkgPyB0aGlzLmdldFR5cGVOYW1lKCkgOiAnYW55JztcbiAgICB9XG5cbiAgICBnZXQgaWNvbigpIHtcbiAgICAgICAgbGV0IGljb24gPSB0aGlzLmdldFR5cGVOYW1lKHRydWUpO1xuICAgICAgICByZXR1cm4gaWNvbiA/IGljb24gOiBcImltZy9wbGFpbi5wbmdcIlxuICAgIH1cblxuXG59IiwicmVxdWlyZSgnLi90ZW1wbGF0ZXMnKTtcbm1vZHVsZS5leHBvcnRzID0gJ3RlbXBsYXRlcyc7IiwiYW5ndWxhci5tb2R1bGUoXCJ0ZW1wbGF0ZXNcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkgeyR0ZW1wbGF0ZUNhY2hlLnB1dChcImFwcGxpY2F0aW9uLXJvb3QvYXBwbGljYXRpb24ucm9vdC50cGwuaHRtbFwiLFwiPGRpdiBpZD1cXFwib2tub1xcXCI+XFxuXFxuICAgIDxsZWZ0LW1lbnUgbmctaWY9XFxcIiRjdHJsLm1lZGlhU2VydmljZS5zaG93TGVmdE1lbnVcXFwiPjwvbGVmdC1tZW51PlxcblxcbiAgICA8ZGl2IGlkPVxcXCJvYnNhaFxcXCIgbmctY2xhc3M9XFxcIntcXCdmdWxsXFwnOiAhJGN0cmwubWVkaWFTZXJ2aWNlLnNob3dMZWZ0TWVudX1cXFwiPlxcbiAgICAgICAgPGJyZWFkY3J1bWJzPjwvYnJlYWRjcnVtYnM+XFxuICAgICAgICA8ZmlsdGVyLXBhbmVsPjwvZmlsdGVyLXBhbmVsPlxcblxcbiAgICAgICAgPGRpdiBzdHlsZT1cXFwibWFyZ2luLWxlZnQ6MjBweDsgbWFyZ2luLXJpZ2h0OiAzMHB4XFxcIj5cXG5cXG4gICAgICAgICAgICA8ZGlyLXJldHVybj48L2Rpci1yZXR1cm4+XFxuXFxuICAgICAgICAgICAgPGRpci1iYXNlPjwvZGlyLWJhc2U+XFxuXFxuICAgICAgICAgICAgPGZpbGU+PC9maWxlPlxcbiAgICAgICAgPC9kaXY+XFxuXFxuICAgIDwvZGl2PlxcblxcbjwvZGl2PlwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImRpci1yZXR1cm4vZGlyLnJldHVybi50cGwuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXFwiaWNvblxcXCIgbmctc2hvdz1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLmRpclxcXCIgbmctY2xpY2s9XFxcIiRjdHJsLm1lZGlhU2VydmljZS5sb2FkRGlyKCRjdHJsLm1lZGlhU2VydmljZS5kaXIsIHRydWUpXFxcIj5cXG4gICAgPGltZyBjbGFzcz1cXFwiaW1nX2ljb25cXFwiIHNyYz1cXFwiaW1nL2FkcmVzYXIucG5nXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwibmF6b3Zfc3Vib3J1XFxcIj5OYWRyYWRlbnkgYWRyZXNhcjwvZGl2PlxcbjwvZGl2PlwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImJyZWFkY3J1bWJzL2JyZWFkY3J1bWJzLnRwbC5odG1sXCIsXCI8ZGl2IGlkPVxcXCJoZWFkZXIyXFxcIj5cXG4gICAgPGgyPlxcbiAgICAgICAgPHNwYW4+SG9tZTwvc3Bhbj5cXG4gICAgICAgIDxzcGFuIG5nLXJlcGVhdD1cXFwiZGlyTmFtZSBpbiAkY3RybC5tZWRpYVNlcnZpY2UuZGlyX2xpc3RcXFwiPiAvIHt7ZGlyTmFtZX19IDwvc3Bhbj5cXG4gICAgPC9oMj5cXG48L2Rpdj5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJkaXItYmFzZS9kaXIuYmFzZS50cGwuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXFwiaWNvblxcXCIgbmctcmVwZWF0PVxcXCJkaXIgaW4gJGN0cmwubWVkaWFTZXJ2aWNlLmRpcnNfZGF0YSB8IGZpbHRlcjoge25hbWUgOiRjdHJsLm1lZGlhU2VydmljZS5maWx0ZXJfZmlsZXN9XFxcIiBuZy1jbGljaz1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLmxvYWREaXIoZGlyKVxcXCI+XFxuXFxuICAgIDxpbWcgY2xhc3M9XFxcInJlbW92ZV9kaXJcXFwiIHNyYz1cXFwiaW1nL2Nsb3NlLnBuZ1xcXCIgbmctY2xpY2s9XFxcIiRjdHJsLmRlbGV0ZURpcihkaXIsICRldmVudCk7XFxcIi8+XFxuXFxuICAgIDxpbWcgY2xhc3M9XFxcImltZ19pY29uXFxcIiBzcmM9XFxcImltZy9wcmllY2lub2sucG5nXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwibmF6b3Zfc3Vib3J1XFxcIj57e2Rpci5uYW1lfX08L2Rpdj5cXG5cXG48L2Rpdj5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJmaWxlL2ZpbGUudHBsLmh0bWxcIixcIjxkaXYgY2xhc3M9XFxcImljb25cXFwiIG5nLXJlcGVhdD1cXFwiZmlsZSBpbiAkY3RybC5tZWRpYVNlcnZpY2UuZmlsZXNfZGF0YSB8IG9yZGVyQnk6ICRjdHJsLm1lZGlhU2VydmljZS5vcmRlcl9maWxlc19ieSB8IGZpbHRlcjp7bmFtZSA6JGN0cmwubWVkaWFTZXJ2aWNlLmZpbHRlcl9maWxlc31cXFwiIG5nLWNsaWNrPVxcXCIkY3RybC5tZWRpYVNlcnZpY2UubG9hZEZpbGUoZmlsZSlcXFwiPlxcbiAgICA8aW1nIGNsYXNzPVxcXCJyZW1vdmVfZGlyXFxcIiBzcmM9XFxcImltZy9jbG9zZS5wbmdcXFwiPlxcbiAgICA8aW1nIGNsYXNzPVxcXCJpbWdfcGljdHVyZVxcXCIgIG5nLXNyYz1cXFwie3tmaWxlLmljb259fVxcXCI+XFxuXFxuICAgIDxkaXYgY2xhc3M9XFxcIm5hem92X3N1Ym9ydVxcXCI+e3tmaWxlLm5hbWV9fTwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ0eXBfc3Vib3J1XFxcIj5cXG4gICAgICAgIDxwPnt7ZmlsZS5uaWNlVHlwZX19PC9wPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwidmVsa29zdF9zdWJvcnVcXFwiPlxcbiAgICAgICAgPHA+e3tmaWxlLnNpemV9fTwvcD5cXG4gICAgPC9kaXY+XFxuPC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwibGVmdC1tZW51L2xlZnQubWVudS50cGwuaHRtbFwiLFwiPGRpdiBpZD1cXFwibGVmdF9tZW51XFxcIj5cXG4gICAgPHVsPlxcbiAgICAgICAgPGxpIG5nLXNob3c9XFxcIiRjdHJsLm1lZGlhU2VydmljZS5kaXJcXFwiIG5nLWNsaWNrPVxcXCIkY3RybC5tZWRpYVNlcnZpY2UubG9hZERpcigkY3RybC5tZWRpYVNlcnZpY2UuZGlyLCB0cnVlKVxcXCIgc3R5bGU9XFxcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE4cHg7XFxcIj5OYWRyYWRlbnkgYWRyZXNhcjwvbGk+XFxuICAgICAgICA8bGkgbmctcmVwZWF0PVxcXCJkaXIgaW4gJGN0cmwubWVkaWFTZXJ2aWNlLmRpcnNfZGF0YVxcXCIgbmctY2xpY2s9XFxcIiRjdHJsLm1lZGlhU2VydmljZS5sb2FkRGlyKGRpcilcXFwiID57e2Rpci5uYW1lfX08L2xpPlxcbiAgICA8L3VsPlxcbjwvZGl2PlwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImZpbHRlci1wYW5lbC9maWx0ZXIucGFuZWwudHBsLmh0bWxcIixcIjxkaXYgY2xhc3M9XFxcImZpbHRlci1wYW5lbFxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZpbHRlclxcXCI+XFxuICAgICAgICA8dXBsb2FkLWZpbGU+PC91cGxvYWQtZmlsZT5cXG4gICAgICAgIDxwPkhsYWRhdDpcXG4gICAgICAgICAgICA8aW5wdXQgbmctbW9kZWw9XFxcIiRjdHJsLm1lZGlhU2VydmljZS5maWx0ZXJfZmlsZXNcXFwiLz5cXG4gICAgICAgIDwvcD5cXG4gICAgICAgIDxwPlpvcmFkaXQgcG9kbGE6XFxuICAgICAgICAgICAgPHNlbGVjdCBuZy1tb2RlbD1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLm9yZGVyX2ZpbGVzX2J5XFxcIj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwibmFtZVxcXCI+TmF6dnU8L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwic2l6ZVxcXCI+VmVsa29zdGk8L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiY3JlYXRlZF90aW1lXFxcIj5EYXR1bXUgdnl0dm9yZW5pYTwvb3B0aW9uPlxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJuaWNlVHlwZVxcXCI+VHlwdSBzdWJvcnU8L29wdGlvbj5cXG4gICAgICAgICAgICA8L3NlbGVjdD5cXG4gICAgICAgIDwvcD5cXG4gICAgPC9kaXY+XFxuPC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwibWVkaWEtYnJvd3Nlci9tZWRpYS5icm93c2VyLnRwbC5odG1sXCIsXCI8ZGl2IGlkPVxcXCJNZWRpYUJyb3dzZXJcXFwiPlxcbiAgICA8ZGl2IGlkPVxcXCJoZWFkZXIxXFxcIj5cXG4gICAgICAgIDxpbWcgbmctY2xpY2s9XFxcIiRjdHJsLm1lZGlhU2VydmljZS50b2dnbGVMZWZ0TWVudSgpXFxcIiBpZD1cXFwibWVudV9pY29uXFxcIiBzcmM9XFxcImltZy9tZW51LnBuZ1xcXCIgc3R5bGU9XFxcIndpZHRoOjUwcHg7IGhlaWdodDoxMDAlO2Zsb2F0OmxlZnQ7IGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxcIj5cXG4gICAgICAgIDxoMT5NZWRpYSBCcm93c2VyPC9oMT5cXG4gICAgICAgIDxpbWcgaWQ9XFxcInphdnJpX2RpYWxvZ1xcXCJcXG4gICAgICAgICAgICAgbmctY2xpY2s9XFxcIiRjdHJsLm1lZGlhU2VydmljZS50b2dnbGVEaWFsb2coKVxcXCJcXG4gICAgICAgICAgICAgc3JjPVxcXCJpbWcvY2xvc2UucG5nXFxcIiBzdHlsZT1cXFwid2lkdGg6NDBweDsgaGVpZ2h0OjEwMCU7ZmxvYXQ6cmlnaHQ7IGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcXCI+XFxuICAgIDwvZGl2PlxcblxcbiAgICA8YXBwbGljYXRpb24tcm9vdD48L2FwcGxpY2F0aW9uLXJvb3Q+XFxuPC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwic3R2b3JlYy9zdHZvcmVjLnRwbC5odG1sXCIsXCI8ZGl2IGlkPVxcXCJzdHZvcmVjXFxcIj5cXG4gICAgPGltZyBzdHlsZT1cXFwibWF4LWhlaWdodDogMjV2dzsgbWF4LXdpZHRoOiAyNXZ3O1xcXCIgbmctaWY9XFxcIiRjdHJsLmlzSW1hZ2VcXFwiIG5nLXNyYz1cXFwie3skY3RybC5tZWRpYVNlcnZpY2Uuc2VsZWN0ZWRGaWxlfX1cXFwiPlxcbjwvZGl2PlwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcInV2b2QvdXZvZC50cGwuaHRtbFwiLFwiPGRpdj5cXG4gICAgPGRpdiBpZD1cXFwidXZvZFxcXCJcXG4gICAgICAgICBuZy1jbGFzcz1cXFwie1xcJ2hhbGZ2aWV3XFwnOiAkY3RybC5tZWRpYVNlcnZpY2Uuc2hvd0RpYWxvZ31cXFwiXFxuICAgICAgICAgbmctY2xpY2s9XFxcIiRjdHJsLm1lZGlhU2VydmljZS5jbG9zZURpYWxvZygpXFxcIj5cXG4gICAgICAgIDxzdHZvcmVjPjwvc3R2b3JlYz5cXG5cXG4gICAgICAgIDxidXR0b24gaWQ9XFxcInpvYnJhel9kaWFsb2dcXFwiXFxuICAgICAgICAgICAgICAgIG5nLWNsaWNrPVxcXCIkY3RybC5tZWRpYVNlcnZpY2UudG9nZ2xlRGlhbG9nKCk7ICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcXFwiXFxuICAgICAgICAgICAgICAgIHN0eWxlPVxcXCJtYXJnaW4tbGVmdDphdXRvO21hcmdpbi1yaWdodDphdXRvO2Rpc3BsYXk6YmxvY2s7IGJhY2tncm91bmQtY29sb3I6IzQ2NDk0YTtjb2xvcjogd2hpdGU7IHBhZGRpbmc6IDVweCA1cHggNXB4IDVweFxcXCI+Wk9CUkFaSVQgRElBTE9HXFxuICAgICAgICA8L2J1dHRvbj5cXG4gICAgPC9kaXY+XFxuXFxuXFxuICAgIDxtZWRpYS1icm93c2VyIG5nLWlmPVxcXCIkY3RybC5tZWRpYVNlcnZpY2Uuc2hvd0RpYWxvZ1xcXCI+PC9tZWRpYS1icm93c2VyPlxcbjwvZGl2PlwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcInVwbG9hZC1maWxlL3VwbG9hZC5maWxlLnRwbC5odG1sXCIsXCI8ZGl2IGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIj5cXG4gICAgPGlucHV0IGlkPVxcXCJkcmFnZ2luZ1xcXCJcXG4gICAgICAgICAgIGNsYXNzPVxcXCJoaWRkZW5cXFwiXFxuICAgICAgICAgICB0eXBlPVxcXCJmaWxlXFxcIlxcbiAgICAgICAgICAgYWNjZXB0PVxcXCJ7eyRjdHJsLmZpbGVBY2NlcHR9fVxcXCJcXG4gICAgICAgICAgIG11bHRpcGxlLz5cXG4gICAgPGRpdj5cXG4gICAgICAgIDxzcGFuPlVwbG9hZCBzdWJvcnU6IDwvc3Bhbj5cXG4gICAgICAgIDxhIGNsYXNzPVxcXCJjdXJzb3ItcG9pbnRlciB1cGxvYWQtYnRuXFxcIiBuZy1jbGljaz1cXFwiJGN0cmwuZmlyZVVwbG9hZEV2ZW50KClcXFwiPlxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJkaXNwbGF5LWJsb2NrXFxcIiB0cmFuc2xhdGU+VXBsb2FkPC9zcGFuPlxcbiAgICAgICAgPC9hPlxcbiAgICA8L2Rpdj5cXG4gICAgPHA+Tm92eSBhZHJlc2FyOlxcbiAgICAgICAgPGlucHV0IG5nLW1vZGVsPVxcXCIkY3RybC5tZWRpYVNlcnZpY2UubmV3X2RpclxcXCIvPlxcbiAgICAgICAgPGJ1dHRvbiBuZy1jbGljaz1cXFwiJGN0cmwuY3JlYXRlTmV3RGlyKClcXFwiPkNSRUFURTwvYnV0dG9uPlxcbiAgICA8L3A+XFxuPC9kaXY+XCIpO31dKTsiXX0=
