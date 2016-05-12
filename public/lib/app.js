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

var _alerts = require('./app/alerts.service');

var _alerts2 = _interopRequireDefault(_alerts);

var _loading = require('./app/loading.service');

var _loading2 = _interopRequireDefault(_loading);

var _trash = require('./app/trash.service');

var _trash2 = _interopRequireDefault(_trash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

angular.module('browser', [_index2.default]).component('uvod', _uvod2.default).component('mediaBrowser', _media2.default).component('applicationRoot', _application2.default).component('leftMenu', _left2.default).component('dirReturn', _dir2.default).component('dirBase', _dir4.default).component('file', _file2.default).component('stvorec', _stvorec2.default).component('breadcrumbs', _breadcrumbs2.default).component('filterPanel', _filter2.default).component('uploadFile', _upload2.default).service('mediaService', _media4.default).service('alertsService', _alerts2.default).service('loadingService', _loading2.default).service('trashService', _trash2.default);

},{"./app/alerts.service":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/alerts.service.js","./app/components/application-root/application.root":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/components/application-root/application.root.js","./app/components/breadcrumbs/breadcrumbs":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/components/breadcrumbs/breadcrumbs.js","./app/components/dir-base/dir.base":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/components/dir-base/dir.base.js","./app/components/dir-return/dir.return":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/components/dir-return/dir.return.js","./app/components/file/file":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/components/file/file.js","./app/components/filter-panel/filter.panel":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/components/filter-panel/filter.panel.js","./app/components/left-menu/left.menu":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/components/left-menu/left.menu.js","./app/components/media-browser/media.browser":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/components/media-browser/media.browser.js","./app/components/stvorec/stvorec":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/components/stvorec/stvorec.js","./app/components/upload-file/upload.file":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/components/upload-file/upload.file.js","./app/components/uvod/uvod":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/components/uvod/uvod.js","./app/loading.service":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/loading.service.js","./app/media.service":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/media.service.js","./app/trash.service":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/trash.service.js","./tpl/index":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/tpl/index.js"}],"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/alerts.service.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AlertsService = function () {

    // @ngInject

    function AlertsService($timeout) {
        _classCallCheck(this, AlertsService);

        this.$timeout = $timeout;
        this.alerts = [];
    }

    _createClass(AlertsService, [{
        key: 'addAlert',
        value: function addAlert() {
            var _this = this;

            var message = arguments.length <= 0 || arguments[0] === undefined ? 'Action done' : arguments[0];
            var type = arguments.length <= 1 || arguments[1] === undefined ? 'success' : arguments[1];

            this.alerts.push({
                message: message,
                type: type
            });
            this.$timeout(function () {
                _this.alerts.shift();
            }, 5000);
        }
    }]);

    return AlertsService;
}();

exports.default = AlertsService;

},{}],"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/components/application-root/application.root.js":[function(require,module,exports){
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var File = function () {

    // @ngInject

    function File($http, mediaService) {
        _classCallCheck(this, File);

        this.$http = $http;
        this.mediaService = mediaService;
    }

    _createClass(File, [{
        key: 'deleteFile',
        value: function deleteFile(file, $event) {
            $event.stopPropagation();
            this.mediaService.deleteFile(file);
        }
    }]);

    return File;
}();

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
function LeftMenu($http, mediaService, alertsService, loadingService, trashService) {
    _classCallCheck(this, LeftMenu);

    this.$http = $http;
    this.mediaService = mediaService;
    this.alertsService = alertsService;
    this.loadingService = loadingService;
    this.trashService = trashService;
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
            this.initBinds(this.$element);
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
                    _this._rearrayList(list);
                    _this.mediaService.uploadFile(_this.list);
                }
            }, false);
        }

        /**
         * Init binds for Drag&Drop
         *
         */

    }, {
        key: "initBinds",
        value: function initBinds() {
            var _this2 = this;

            var element = arguments.length <= 0 || arguments[0] === undefined ? this.$element : arguments[0];

            this.dropShow = 0;

            element.bind("dragover", function (event) {
                _this2.onDragOver(event, element);
            });

            //Dragging ends on the overlay, which takes the whole window
            element.bind("dragenter", function (event) {
                _this2.dropShow++;
            }).bind("dragleave", function (event) {
                _this2.dropShow--;
                if (_this2.dropShow === 0) {
                    _this2.onDragEnd(event, element);
                }
            }).bind("drop", function (e) {
                _this2.dropShow = 0;
                _this2.onDragEnd(e, element);
                var list = e.dataTransfer.files;
                _this2._rearrayList(list);
                _this2.mediaService.uploadFile(_this2.list);
            });
        }
    }, {
        key: "_rearrayList",
        value: function _rearrayList(list) {
            this.list.clear();
            for (var fileIndex in list) {
                if (!isNaN(fileIndex)) {
                    this.list.add(list.item(fileIndex));
                }
            }
        }

        /**
         * Add classes when an item is dragged over the document and when
         * the user leaves the window, cancels the drag or drops the item
         *
         * @param e
         * @param element
         */

    }, {
        key: "onDragOver",
        value: function onDragOver(e) {
            var element = arguments.length <= 1 || arguments[1] === undefined ? this.$element : arguments[1];

            e.stopPropagation();
            e.preventDefault();
            element.addClass("dragOver");
        }
    }, {
        key: "onDragEnd",
        value: function onDragEnd(e) {
            var element = arguments.length <= 1 || arguments[1] === undefined ? this.$element : arguments[1];

            e.stopPropagation();
            e.preventDefault();
            element.removeClass("dragOver");
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

},{}],"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/loading.service.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LoadingService = function () {

    // @ngInject

    function LoadingService() {
        _classCallCheck(this, LoadingService);

        this.loadingStart = false;
    }

    _createClass(LoadingService, [{
        key: "doLoading",
        value: function doLoading() {
            this.loadingStart = true;
        }
    }, {
        key: "stopLoading",
        value: function stopLoading() {
            this.loadingStart = false;
        }
    }]);

    return LoadingService;
}();

exports.default = LoadingService;

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

    function MediaService($http, $window, $timeout, alertsService, loadingService, trashService) {
        var _this = this;

        _classCallCheck(this, MediaService);

        this.$http = $http;
        this.$window = $window;
        this.$timeout = $timeout;
        this.alertsService = alertsService;
        this.loadingService = loadingService;
        this.trashService = trashService;

        trashService.dirRemoveFunc = function (dir) {
            return _this._deleteDir(dir);
        };
        trashService.fileRemoveFunc = function (file) {
            return _this._deleteFile(file);
        };

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
            var _this2 = this;

            var directory = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
            var isReturn = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

            // nacitat loading serivus a spravit loading start
            this.loadingService.doLoading();

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
                _this2.dir = response.data.dir;
                _this2.dirs_data = [];
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = response.data.dirs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var dir = _step.value;

                        dir.inTrash = _this2.trashService.isInTrash(dir, true);
                        _this2.dirs_data.push(dir);
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

                _this2.dirs_data = response.data.dirs;

                _this2.files_data = [];
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = response.data.files[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var file = _step2.value;

                        var newFile = new File(file);
                        newFile.inTrash = _this2.trashService.isInTrash(newFile);
                        _this2.files_data.push(newFile);
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
            }).catch(function (error) {
                var mess = error.data.code ? error.data.description : "Vyskytla sa chyba.";
                _this2.alertsService.addAlert(mess, 'error');
            }).finally(function () {
                _this2.loadingService.stopLoading();
                // todo urob loadin stop
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
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = filesSet[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var item = _step3.value;

                    this._uploadFile(item);
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
    }, {
        key: '_uploadFile',
        value: function _uploadFile(file) {
            var _this3 = this;

            this.loadingService.doLoading();

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
                _this3.files_data.push(new File(result.data));
                var mess = result.data.code ? result.data.description : "Subor uspesne nahrany.";
                _this3.alertsService.addAlert(mess);
            }).catch(function (error) {
                var mess = error.data.code ? error.data.description : "Vyskytla sa chyba.";
                _this3.alertsService.addAlert(mess, 'error');
            }).finally(function () {
                _this3.loadingService.stopLoading();
            });
        }
    }, {
        key: 'createNewDir',
        value: function createNewDir() {
            var _this4 = this;

            this.loadingService.doLoading();

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
                result.data.inTrash = _this4.trashService.isInTrash(result.data, true);
                _this4.dirs_data.push(result.data);
                var mess = result.data.code ? result.data.description : "Priecinok uspesne vytvoreny.";
                _this4.alertsService.addAlert(mess);
            }).catch(function (error) {
                var mess = error.data.code ? error.data.description : "Vyskytla sa chyba.";
                _this4.alertsService.addAlert(mess, 'error');
            }).finally(function () {
                _this4.loadingService.stopLoading();
            });

            this.new_dir = "";
        }
    }, {
        key: 'deleteDir',
        value: function deleteDir(dir) {
            dir.inTrash = true;
            this.trashService.addToTrash(dir);
        }
    }, {
        key: '_deleteDir',
        value: function _deleteDir(dir) {
            var _this5 = this;

            this.loadingService.doLoading();

            this.$http({
                method: 'DELETE',
                url: 'http://mediabrowser.bart.sk/media-browser/dir' + dir.location + '/' + dir.name
            }).then(function (result) {
                var index = _this5.dirs_data.indexOf(dir);
                if (index > -1) {
                    _this5.dirs_data.splice(index, 1);
                }
                var mess = result.data.code ? result.data.description : "Priecinok uspesne zmazany.";
                _this5.alertsService.addAlert(mess);
            }).catch(function (error) {
                var mess = error.data.code ? error.data.description : "Vyskytla sa chyba.";
                _this5.alertsService.addAlert(mess, 'error');
            }).finally(function () {
                _this5.loadingService.stopLoading();
            });
        }
    }, {
        key: 'deleteFile',
        value: function deleteFile(file) {
            file.inTrash = true;
            this.trashService.addToTrash(file);
        }
    }, {
        key: '_deleteFile',
        value: function _deleteFile(file) {
            var _this6 = this;

            this.loadingService.doLoading();

            this.$http({
                method: 'DELETE',
                url: 'http://mediabrowser.bart.sk/media-browser/file' + file.location + '/' + file.name
            }).then(function (result) {
                var index = _this6.files_data.indexOf(file);
                if (index > -1) {
                    _this6.files_data.splice(index, 1);
                }
                var mess = result.data.code ? result.data.description : "Subor uspesne zmazany.";
                _this6.alertsService.addAlert(mess);
            }).catch(function (error) {
                var mess = error.data.code ? error.data.description : "Vyskytla sa chyba.";
                _this6.alertsService.addAlert(mess, 'error');
            }).finally(function () {
                _this6.loadingService.stopLoading();
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

var File = exports.File = function () {
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

        this.inTrash = false;

        angular.merge(this, data);
    }

    _createClass(File, [{
        key: 'getTypeName',
        value: function getTypeName() {
            var getIcon = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

            for (var typeName in TYPES) {
                var typeObj = TYPES[typeName];
                if (angular.isDefined(typeObj.list)) {
                    var _iteratorNormalCompletion4 = true;
                    var _didIteratorError4 = false;
                    var _iteratorError4 = undefined;

                    try {
                        for (var _iterator4 = typeObj.list[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                            var type = _step4.value;

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
                        _didIteratorError4 = true;
                        _iteratorError4 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion4 && _iterator4.return) {
                                _iterator4.return();
                            }
                        } finally {
                            if (_didIteratorError4) {
                                throw _iteratorError4;
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

},{}],"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/trash.service.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _media = require('./media.service');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TrashService = function () {

    // @ngInject

    function TrashService($timeout) {
        _classCallCheck(this, TrashService);

        this.$timeout = $timeout;
        this.fileList = [];
        this.directoryList = [];

        this.dirRemoveFunc = null;
        this.fileRemoveFunc = null;
    }

    _createClass(TrashService, [{
        key: 'addToTrash',
        value: function addToTrash(object) {
            if (object instanceof _media.File) {
                this.fileList.push(object);
            } else {
                this.directoryList.push(object);
            }
        }
    }, {
        key: 'clearTrash',
        value: function clearTrash() {
            if (angular.isFunction(this.dirRemoveFunc)) {
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = this.directoryList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var dir = _step.value;

                        this.dirRemoveFunc.call(this, dir);
                        this.directoryList = [];
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
            }

            if (angular.isFunction(this.fileRemoveFunc)) {
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = this.fileList[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var file = _step2.value;

                        this.fileRemoveFunc.call(this, file);
                        this.fileList = [];
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
    }, {
        key: 'restoreTrash',
        value: function restoreTrash() {
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = this.directoryList[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var dir = _step3.value;

                    dir.inTrash = false;
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

            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
                for (var _iterator4 = this.fileList[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                    var file = _step4.value;

                    file.inTrash = false;
                }
            } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
                        _iterator4.return();
                    }
                } finally {
                    if (_didIteratorError4) {
                        throw _iteratorError4;
                    }
                }
            }

            this.fileList = [];
            this.directoryList = [];
        }
    }, {
        key: 'isInTrash',
        value: function isInTrash(obj) {
            var isDir = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

            if (isDir) {
                var _iteratorNormalCompletion5 = true;
                var _didIteratorError5 = false;
                var _iteratorError5 = undefined;

                try {
                    for (var _iterator5 = this.directoryList[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                        var dir = _step5.value;

                        if (dir.name == obj.name && dir.location == obj.location) {
                            return true;
                        }
                    }
                } catch (err) {
                    _didIteratorError5 = true;
                    _iteratorError5 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion5 && _iterator5.return) {
                            _iterator5.return();
                        }
                    } finally {
                        if (_didIteratorError5) {
                            throw _iteratorError5;
                        }
                    }
                }
            } else {
                var _iteratorNormalCompletion6 = true;
                var _didIteratorError6 = false;
                var _iteratorError6 = undefined;

                try {
                    for (var _iterator6 = this.fileList[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                        var file = _step6.value;

                        if (file.name == obj.name && file.location == obj.location) {
                            return true;
                        }
                    }
                } catch (err) {
                    _didIteratorError6 = true;
                    _iteratorError6 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion6 && _iterator6.return) {
                            _iterator6.return();
                        }
                    } finally {
                        if (_didIteratorError6) {
                            throw _iteratorError6;
                        }
                    }
                }
            }

            return false;
        }
    }, {
        key: 'trashCounts',
        get: function get() {
            return this.fileList.length + this.directoryList.length;
        }
    }]);

    return TrashService;
}();

exports.default = TrashService;

},{"./media.service":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/media.service.js"}],"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/tpl/index.js":[function(require,module,exports){
'use strict';

require('./templates');
module.exports = 'templates';

},{"./templates":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/tpl/templates.js"}],"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/tpl/templates.js":[function(require,module,exports){
"use strict";

angular.module("templates", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("application-root/application.root.tpl.html", "<div id=\"okno\">\n\n    <left-menu ng-if=\"$ctrl.mediaService.showLeftMenu\"></left-menu>\n\n    <div id=\"obsah\" ng-class=\"{\'full\': !$ctrl.mediaService.showLeftMenu}\">\n        <breadcrumbs></breadcrumbs>\n        <filter-panel></filter-panel>\n\n        <div style=\"margin-left:20px; margin-right: 30px\">\n\n            <dir-return></dir-return>\n\n            <dir-base></dir-base>\n\n            <file></file>\n        </div>\n\n    </div>\n\n</div>");
  $templateCache.put("breadcrumbs/breadcrumbs.tpl.html", "<div id=\"header2\">\n    <h2>\n        <span>Home</span>\n        <span ng-repeat=\"dirName in $ctrl.mediaService.dir_list\"> / {{dirName}} </span>\n    </h2>\n</div>");
  $templateCache.put("dir-base/dir.base.tpl.html", "<div class=\"icon\" ng-repeat=\"dir in $ctrl.mediaService.dirs_data | filter: {name :$ctrl.mediaService.filter_files, inTrash: false}\" ng-click=\"$ctrl.mediaService.loadDir(dir)\">\n\n    <img class=\"remove_dir\" src=\"img/close.png\"  ng-click=\"$ctrl.deleteDir(dir, $event);\"/>\n\n    <img class=\"img_icon\" src=\"img/priecinok.png\">\n    <div class=\"nazov_suboru\">{{dir.name}}</div>\n\n</div>");
  $templateCache.put("dir-return/dir.return.tpl.html", "<div class=\"icon\" ng-show=\"$ctrl.mediaService.dir\" ng-click=\"$ctrl.mediaService.loadDir($ctrl.mediaService.dir, true)\">\n    <img class=\"img_icon\" src=\"img/adresar.png\">\n    <div class=\"nazov_suboru\">Nadradeny adresar</div>\n</div>");
  $templateCache.put("file/file.tpl.html", "<div class=\"icon\" ng-repeat=\"file in $ctrl.mediaService.files_data | orderBy: $ctrl.mediaService.order_files_by | filter:{name :$ctrl.mediaService.filter_files, inTrash: false}\" ng-click=\"$ctrl.mediaService.loadFile(file)\">\n    <img class=\"remove_dir\" src=\"img/close.png\" ng-click=\"$ctrl.deleteFile(file, $event);\">\n    <img class=\"img_picture\"  ng-src=\"{{file.icon}}\">\n\n    <div class=\"nazov_suboru\">{{file.name}}</div>\n    <div class=\"typ_suboru\">\n        <p>{{file.niceType}}</p>\n    </div>\n    <div class=\"velkost_suboru\">\n        <p>{{file.size}}</p>\n    </div>\n</div>");
  $templateCache.put("filter-panel/filter.panel.tpl.html", "<div class=\"filter-panel\">\n    <div class=\"filter\">\n        <upload-file></upload-file>\n        <p>Hladat:\n            <input ng-model=\"$ctrl.mediaService.filter_files\"/>\n        </p>\n        <p>Zoradit podla:\n            <select ng-model=\"$ctrl.mediaService.order_files_by\">\n                <option value=\"name\">Nazvu</option>\n                <option value=\"size\">Velkosti</option>\n                <option value=\"created_time\">Datumu vytvorenia</option>\n                <option value=\"niceType\">Typu suboru</option>\n            </select>\n        </p>\n    </div>\n</div>");
  $templateCache.put("left-menu/left.menu.tpl.html", "<div id=\"left_menu\">\n    <ul>\n        <li ng-show=\"$ctrl.mediaService.dir\" ng-click=\"$ctrl.mediaService.loadDir($ctrl.mediaService.dir, true)\" style=\"font-weight: bold; font-size: 18px;\">Nadradeny adresar</li>\n        <li ng-repeat=\"dir in $ctrl.mediaService.dirs_data | filter: {name :$ctrl.mediaService.filter_files, inTrash: false}\" ng-click=\"$ctrl.mediaService.loadDir(dir)\" >{{dir.name}}</li>\n    </ul>\n    <div class=\"alert\" ng-class=\"alert.type\" ng-repeat=\"alert in $ctrl.alertsService.alerts track by $index\">{{alert.message}}</div>\n    <div class=\"loader\" ng-if=\"$ctrl.loadingService.loadingStart\">Loading...</div>\n\n    <div class=\"icon-trash cursor-pointer\" ng-if=\"$ctrl.trashService.trashCounts\" ng-click=\"$ctrl.trashService.clearTrash()\" style=\"float: left;\">\n        <div class=\"trash-lid\" style=\"background-color: #E5E9EA\"></div>\n        <div class=\"trash-container\" style=\"background-color: #E5E9EA\"></div>\n        <div class=\"trash-line-1\"></div>\n        <div class=\"trash-line-2\"></div>\n        <div class=\"trash-line-3\"></div>\n    </div>\n    <div ng-if=\"$ctrl.trashService.trashCounts\">Trash has: {{$ctrl.trashService.trashCounts}} garbage items</div>\n    <div ng-if=\"$ctrl.trashService.trashCounts\" class=\"cursor-pointer\"\n         ng-click=\"$ctrl.trashService.restoreTrash()\">Restore trash</div>\n</div>");
  $templateCache.put("stvorec/stvorec.tpl.html", "<div id=\"stvorec\">\n    <img style=\"max-height: 25vw; max-width: 25vw;\" ng-if=\"$ctrl.isImage\" ng-src=\"{{$ctrl.mediaService.selectedFile}}\">\n</div>");
  $templateCache.put("upload-file/upload.file.tpl.html", "<div class=\"pull-right drop-img-zone\">\n    <input id=\"dragging\"\n           class=\"hidden\"\n           type=\"file\"\n           accept=\"{{$ctrl.fileAccept}}\"\n           multiple/>\n    <div>\n        <span>Upload suboru: </span>\n        <a class=\"cursor-pointer upload-btn\" ng-click=\"$ctrl.fireUploadEvent()\">\n            <span class=\"display-block\" translate>Upload</span>\n        </a>\n    </div>\n    <p>Novy adresar:\n        <input ng-model=\"$ctrl.mediaService.new_dir\"/>\n        <button ng-click=\"$ctrl.createNewDir()\">CREATE</button>\n    </p>\n</div>");
  $templateCache.put("uvod/uvod.tpl.html", "<div>\n    <div id=\"uvod\"\n         ng-class=\"{\'halfview\': $ctrl.mediaService.showDialog}\"\n         ng-click=\"$ctrl.mediaService.closeDialog()\">\n        <stvorec></stvorec>\n\n        <button id=\"zobraz_dialog\"\n                ng-click=\"$ctrl.mediaService.toggleDialog(); $event.stopPropagation();\"\n                style=\"margin-left:auto;margin-right:auto;display:block; background-color:#46494a;color: white; padding: 5px 5px 5px 5px\">ZOBRAZIT DIALOG\n        </button>\n    </div>\n\n\n    <media-browser ng-if=\"$ctrl.mediaService.showDialog\"></media-browser>\n</div>");
  $templateCache.put("media-browser/media.browser.tpl.html", "<div id=\"MediaBrowser\">\n    <div id=\"header1\">\n        <img ng-click=\"$ctrl.mediaService.toggleLeftMenu()\" id=\"menu_icon\" src=\"img/menu.png\" style=\"width:50px; height:100%;float:left; align-self: flex-start;\">\n        <h1>Media Browser</h1>\n        <img id=\"zavri_dialog\"\n             ng-click=\"$ctrl.mediaService.toggleDialog()\"\n             src=\"img/close.png\" style=\"height:100%;float:right; align-self: flex-end;\">\n    </div>\n\n    <application-root></application-root>\n</div>");
}]);

},{}]},{},["/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app.js"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBwLmpzIiwic3JjL2FwcC9hbGVydHMuc2VydmljZS5qcyIsInNyYy9hcHAvY29tcG9uZW50cy9hcHBsaWNhdGlvbi1yb290L2FwcGxpY2F0aW9uLnJvb3QuanMiLCJzcmMvYXBwL2NvbXBvbmVudHMvYnJlYWRjcnVtYnMvYnJlYWRjcnVtYnMuanMiLCJzcmMvYXBwL2NvbXBvbmVudHMvZGlyLWJhc2UvZGlyLmJhc2UuanMiLCJzcmMvYXBwL2NvbXBvbmVudHMvZGlyLXJldHVybi9kaXIucmV0dXJuLmpzIiwic3JjL2FwcC9jb21wb25lbnRzL2ZpbGUvZmlsZS5qcyIsInNyYy9hcHAvY29tcG9uZW50cy9maWx0ZXItcGFuZWwvZmlsdGVyLnBhbmVsLmpzIiwic3JjL2FwcC9jb21wb25lbnRzL2xlZnQtbWVudS9sZWZ0Lm1lbnUuanMiLCJzcmMvYXBwL2NvbXBvbmVudHMvbWVkaWEtYnJvd3Nlci9tZWRpYS5icm93c2VyLmpzIiwic3JjL2FwcC9jb21wb25lbnRzL3N0dm9yZWMvc3R2b3JlYy5qcyIsInNyYy9hcHAvY29tcG9uZW50cy91cGxvYWQtZmlsZS91cGxvYWQuZmlsZS5qcyIsInNyYy9hcHAvY29tcG9uZW50cy91dm9kL3V2b2QuanMiLCJzcmMvYXBwL2xvYWRpbmcuc2VydmljZS5qcyIsInNyYy9hcHAvbWVkaWEuc2VydmljZS5qcyIsInNyYy9hcHAvdHJhc2guc2VydmljZS5qcyIsInNyYy90cGwvaW5kZXguanMiLCJzcmMvdHBsL3RlbXBsYXRlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLFFBQVEsTUFB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Ozs7OztpQkFERzthQU5QOztBQWNBLG1CQUFPLEtBQVAsQ0FmMEI7Ozs7NEJBSlo7QUFDZCxtQkFBTyxLQUFLLFFBQUwsQ0FBYyxNQUFkLEdBQXVCLEtBQUssYUFBTCxDQUFtQixNQUFuQixDQURoQjs7OztXQS9DRDs7Ozs7Ozs7QUNGckIsUUFBUSxhQUFSO0FBQ0EsT0FBTyxPQUFQLEdBQWlCLFdBQWpCOzs7OztBQ0RBLFFBQVEsTUFBUixDQUFlLFdBQWYsRUFBNEIsRUFBNUIsRUFBZ0MsR0FBaEMsQ0FBb0MsQ0FBQyxnQkFBRCxFQUFtQixVQUFTLGNBQVQsRUFBeUI7QUFBQyxpQkFBZSxHQUFmLENBQW1CLDRDQUFuQixFQUFnRSwrY0FBaEUsRUFBRDtBQUNoRixpQkFBZSxHQUFmLENBQW1CLGtDQUFuQixFQUFzRCx5S0FBdEQsRUFEZ0Y7QUFFaEYsaUJBQWUsR0FBZixDQUFtQiw0QkFBbkIsRUFBZ0Qsb1pBQWhELEVBRmdGO0FBR2hGLGlCQUFlLEdBQWYsQ0FBbUIsZ0NBQW5CLEVBQW9ELHNQQUFwRCxFQUhnRjtBQUloRixpQkFBZSxHQUFmLENBQW1CLG9CQUFuQixFQUF3QyxnbUJBQXhDLEVBSmdGO0FBS2hGLGlCQUFlLEdBQWYsQ0FBbUIsb0NBQW5CLEVBQXdELDBsQkFBeEQsRUFMZ0Y7QUFNaEYsaUJBQWUsR0FBZixDQUFtQiw4QkFBbkIsRUFBa0QsaTNDQUFsRCxFQU5nRjtBQU9oRixpQkFBZSxHQUFmLENBQW1CLDBCQUFuQixFQUE4Qyw2SkFBOUMsRUFQZ0Y7QUFRaEYsaUJBQWUsR0FBZixDQUFtQixrQ0FBbkIsRUFBc0QseWtCQUF0RCxFQVJnRjtBQVNoRixpQkFBZSxHQUFmLENBQW1CLG9CQUFuQixFQUF3QyxnbEJBQXhDLEVBVGdGO0FBVWhGLGlCQUFlLEdBQWYsQ0FBbUIsc0NBQW5CLEVBQTBELCtmQUExRCxFQVZnRjtDQUF6QixDQUF2RCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi90cGwvaW5kZXgnO1xuaW1wb3J0IHV2b2QgZnJvbSAnLi9hcHAvY29tcG9uZW50cy91dm9kL3V2b2QnO1xuaW1wb3J0IG1lZGlhQnJvd3NlciBmcm9tICcuL2FwcC9jb21wb25lbnRzL21lZGlhLWJyb3dzZXIvbWVkaWEuYnJvd3Nlcic7XG5pbXBvcnQgcm9vdCBmcm9tICcuL2FwcC9jb21wb25lbnRzL2FwcGxpY2F0aW9uLXJvb3QvYXBwbGljYXRpb24ucm9vdCc7XG5pbXBvcnQgbGVmdE1lbnUgZnJvbSAnLi9hcHAvY29tcG9uZW50cy9sZWZ0LW1lbnUvbGVmdC5tZW51JztcbmltcG9ydCBkaXJSZXR1cm4gZnJvbSAnLi9hcHAvY29tcG9uZW50cy9kaXItcmV0dXJuL2Rpci5yZXR1cm4nO1xuaW1wb3J0IGRpckJhc2UgZnJvbSAnLi9hcHAvY29tcG9uZW50cy9kaXItYmFzZS9kaXIuYmFzZSc7XG5pbXBvcnQgZmlsZSBmcm9tICcuL2FwcC9jb21wb25lbnRzL2ZpbGUvZmlsZSc7XG5pbXBvcnQgc3R2b3JlYyBmcm9tICcuL2FwcC9jb21wb25lbnRzL3N0dm9yZWMvc3R2b3JlYyc7XG5pbXBvcnQgYnJlYWRjcnVtYnMgZnJvbSAnLi9hcHAvY29tcG9uZW50cy9icmVhZGNydW1icy9icmVhZGNydW1icyc7XG5pbXBvcnQgZmlsdGVyUGFuZWwgZnJvbSAnLi9hcHAvY29tcG9uZW50cy9maWx0ZXItcGFuZWwvZmlsdGVyLnBhbmVsJztcbmltcG9ydCB1cGxvYWRGaWxlIGZyb20gJy4vYXBwL2NvbXBvbmVudHMvdXBsb2FkLWZpbGUvdXBsb2FkLmZpbGUnO1xuXG5pbXBvcnQgTWVkaWFTZXJ2aWNlIGZyb20gJy4vYXBwL21lZGlhLnNlcnZpY2UnO1xuaW1wb3J0IEFsZXJ0c1NlcnZpY2UgZnJvbSAnLi9hcHAvYWxlcnRzLnNlcnZpY2UnO1xuaW1wb3J0IExvYWRpbmdTZXJ2aWNlIGZyb20gJy4vYXBwL2xvYWRpbmcuc2VydmljZSc7XG5pbXBvcnQgVHJhc2hTZXJ2aWNlIGZyb20gJy4vYXBwL3RyYXNoLnNlcnZpY2UnO1xuXG5hbmd1bGFyLm1vZHVsZSgnYnJvd3NlcicsIFt0ZW1wbGF0ZV0pXG4gICAgLmNvbXBvbmVudCgndXZvZCcsIHV2b2QpXG4gICAgLmNvbXBvbmVudCgnbWVkaWFCcm93c2VyJywgbWVkaWFCcm93c2VyKVxuICAgIC5jb21wb25lbnQoJ2FwcGxpY2F0aW9uUm9vdCcsIHJvb3QpXG4gICAgLmNvbXBvbmVudCgnbGVmdE1lbnUnLCBsZWZ0TWVudSlcbiAgICAuY29tcG9uZW50KCdkaXJSZXR1cm4nLCBkaXJSZXR1cm4pXG4gICAgLmNvbXBvbmVudCgnZGlyQmFzZScsIGRpckJhc2UpXG4gICAgLmNvbXBvbmVudCgnZmlsZScsIGZpbGUpXG4gICAgLmNvbXBvbmVudCgnc3R2b3JlYycsIHN0dm9yZWMpXG4gICAgLmNvbXBvbmVudCgnYnJlYWRjcnVtYnMnLCBicmVhZGNydW1icylcbiAgICAuY29tcG9uZW50KCdmaWx0ZXJQYW5lbCcsIGZpbHRlclBhbmVsKVxuICAgIC5jb21wb25lbnQoJ3VwbG9hZEZpbGUnLCB1cGxvYWRGaWxlKVxuXG4gICAgLnNlcnZpY2UoJ21lZGlhU2VydmljZScsIE1lZGlhU2VydmljZSlcbiAgICAuc2VydmljZSgnYWxlcnRzU2VydmljZScsIEFsZXJ0c1NlcnZpY2UpXG4gICAgLnNlcnZpY2UoJ2xvYWRpbmdTZXJ2aWNlJywgTG9hZGluZ1NlcnZpY2UpXG4gICAgLnNlcnZpY2UoJ3RyYXNoU2VydmljZScsIFRyYXNoU2VydmljZSlcbjsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBBbGVydHNTZXJ2aWNlIHtcblxuICAgIC8vIEBuZ0luamVjdFxuICAgIGNvbnN0cnVjdG9yKCR0aW1lb3V0KSB7XG4gICAgICAgIHRoaXMuJHRpbWVvdXQgPSAkdGltZW91dDtcbiAgICAgICAgdGhpcy5hbGVydHMgPSBbXTtcbiAgICB9XG5cbiAgICBhZGRBbGVydChtZXNzYWdlID0gJ0FjdGlvbiBkb25lJywgdHlwZSA9ICdzdWNjZXNzJykge1xuICAgICAgICB0aGlzLmFsZXJ0cy5wdXNoKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXG4gICAgICAgICAgICB0eXBlOiB0eXBlXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLiR0aW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWxlcnRzLnNoaWZ0KCk7XG4gICAgICAgIH0sIDUwMDApO1xuICAgIH1cbn0iLCJjbGFzcyBBcHBsaWNhdGlvblJvb3R7XG5cbiAgICAvLyBAbmdJbmplY3RcbiAgICBjb25zdHJ1Y3RvcigkaHR0cCwgbWVkaWFTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcbiAgICAgICAgdGhpcy5tZWRpYVNlcnZpY2UgPSBtZWRpYVNlcnZpY2U7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY29udHJvbGxlcjogQXBwbGljYXRpb25Sb290LFxuICAgIHRlbXBsYXRlVXJsOiAnYXBwbGljYXRpb24tcm9vdC9hcHBsaWNhdGlvbi5yb290LnRwbC5odG1sJ1xufTsiLCJjbGFzcyBCcmVhZGNydW1icyB7XG5cbiAgICAvLyBAbmdJbmplY3RcbiAgICBjb25zdHJ1Y3RvcigkaHR0cCwgbWVkaWFTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcbiAgICAgICAgdGhpcy5tZWRpYVNlcnZpY2UgPSBtZWRpYVNlcnZpY2U7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY29udHJvbGxlcjogQnJlYWRjcnVtYnMsXG4gICAgdGVtcGxhdGVVcmw6ICdicmVhZGNydW1icy9icmVhZGNydW1icy50cGwuaHRtbCdcbn0iLCJjbGFzcyBEaXJCYXNlIHtcblxuICAgIC8vIEBuZ0luamVjdFxuICAgIGNvbnN0cnVjdG9yKCRodHRwLCBtZWRpYVNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xuICAgICAgICB0aGlzLm1lZGlhU2VydmljZSA9IG1lZGlhU2VydmljZTtcbiAgICB9XG5cbiAgICBkZWxldGVEaXIoZGlyLCAkZXZlbnQpIHtcbiAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0aGlzLm1lZGlhU2VydmljZS5kZWxldGVEaXIoZGlyKTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbnRyb2xsZXI6IERpckJhc2UsXG4gICAgdGVtcGxhdGVVcmw6ICdkaXItYmFzZS9kaXIuYmFzZS50cGwuaHRtbCdcbn0iLCJjbGFzcyBEaXJSZXR1cm4ge1xuXG4gICAgLy8gQG5nSW5qZWN0XG4gICAgY29uc3RydWN0b3IoJGh0dHAsIG1lZGlhU2VydmljZSkge1xuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gICAgICAgIHRoaXMubWVkaWFTZXJ2aWNlID0gbWVkaWFTZXJ2aWNlO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbnRyb2xsZXI6IERpclJldHVybixcbiAgICB0ZW1wbGF0ZVVybDogJ2Rpci1yZXR1cm4vZGlyLnJldHVybi50cGwuaHRtbCdcbn0iLCJjbGFzcyBGaWxlIHtcblxuICAgIC8vIEBuZ0luamVjdFxuICAgIGNvbnN0cnVjdG9yKCRodHRwLCBtZWRpYVNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xuICAgICAgICB0aGlzLm1lZGlhU2VydmljZSA9IG1lZGlhU2VydmljZTtcbiAgICB9XG4gICAgZGVsZXRlRmlsZShmaWxlLCAkZXZlbnQpIHtcbiAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0aGlzLm1lZGlhU2VydmljZS5kZWxldGVGaWxlKGZpbGUpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHR7XG4gICAgY29udHJvbGxlcjogRmlsZSxcbiAgICB0ZW1wbGF0ZVVybDogJ2ZpbGUvZmlsZS50cGwuaHRtbCdcbn0iLCJjbGFzcyBGaWx0ZXJQYW5lbCB7XG5cbiAgICAvLyBAbmdJbmplY3RcbiAgICBjb25zdHJ1Y3RvcigkaHR0cCwgbWVkaWFTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcbiAgICAgICAgdGhpcy5tZWRpYVNlcnZpY2UgPSBtZWRpYVNlcnZpY2U7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY29udHJvbGxlcjogRmlsdGVyUGFuZWwsXG4gICAgdGVtcGxhdGVVcmw6ICdmaWx0ZXItcGFuZWwvZmlsdGVyLnBhbmVsLnRwbC5odG1sJ1xufTsiLCJjbGFzcyBMZWZ0TWVudSB7XG5cbiAgICAvLyBAbmdJbmplY3RcbiAgICBjb25zdHJ1Y3RvcigkaHR0cCwgbWVkaWFTZXJ2aWNlLCBhbGVydHNTZXJ2aWNlLCBsb2FkaW5nU2VydmljZSwgdHJhc2hTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcbiAgICAgICAgdGhpcy5tZWRpYVNlcnZpY2UgPSBtZWRpYVNlcnZpY2U7XG4gICAgICAgIHRoaXMuYWxlcnRzU2VydmljZSA9IGFsZXJ0c1NlcnZpY2U7XG4gICAgICAgIHRoaXMubG9hZGluZ1NlcnZpY2UgPSBsb2FkaW5nU2VydmljZTtcbiAgICAgICAgdGhpcy50cmFzaFNlcnZpY2UgPSB0cmFzaFNlcnZpY2U7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY29udHJvbGxlcjogTGVmdE1lbnUsXG4gICAgdGVtcGxhdGVVcmw6ICdsZWZ0LW1lbnUvbGVmdC5tZW51LnRwbC5odG1sJ1xufSIsImNsYXNzIE1lZGlhQnJvd3NlciB7XG5cbiAgICAvLyBAbmdJbmplY3RcbiAgICBjb25zdHJ1Y3RvcigkaHR0cCwgbWVkaWFTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcbiAgICAgICAgdGhpcy5tZWRpYVNlcnZpY2UgPSBtZWRpYVNlcnZpY2U7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY29udHJvbGxlcjogTWVkaWFCcm93c2VyLFxuICAgIHRlbXBsYXRlVXJsOiAnbWVkaWEtYnJvd3Nlci9tZWRpYS5icm93c2VyLnRwbC5odG1sJ1xufTsiLCJjbGFzcyBTdHZvcmVje1xuXG4gICAgLy8gQG5nSW5qZWN0XG4gICAgY29uc3RydWN0b3IoJGh0dHAsIG1lZGlhU2VydmljZSkge1xuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gICAgICAgIHRoaXMubWVkaWFTZXJ2aWNlID0gbWVkaWFTZXJ2aWNlO1xuICAgIH1cblxuICAgIGdldCBpc0ltYWdlKCl7XG4gICAgICAgIHJldHVybiB0aGlzLm1lZGlhU2VydmljZS5zZWxlY3RlZEZpbGUgPyB0cnVlIDogZmFsc2U7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBjb250cm9sbGVyOiBTdHZvcmVjLFxuICAgIHRlbXBsYXRlVXJsOiAnc3R2b3JlYy9zdHZvcmVjLnRwbC5odG1sJ1xufSIsImNsYXNzIFVwbG9hZEZpbGUge1xuXG4gICAgLy8gQG5nSW5qZWN0XG4gICAgY29uc3RydWN0b3IoJHRpbWVvdXQsICRlbGVtZW50LCAkd2luZG93LCAkcm9vdFNjb3BlLCBtZWRpYVNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy4kdGltZW91dCA9ICR0aW1lb3V0O1xuICAgICAgICB0aGlzLiRlbGVtZW50ID0gJGVsZW1lbnQ7XG4gICAgICAgIHRoaXMuJHdpbmRvdyA9ICR3aW5kb3c7XG4gICAgICAgIHRoaXMuJHJvb3RTY29wZSA9ICRyb290U2NvcGU7XG4gICAgICAgIHRoaXMubWVkaWFTZXJ2aWNlID0gbWVkaWFTZXJ2aWNlO1xuXG4gICAgICAgIHRoaXMudXBsb2FkVGltZW91dCA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5saXN0ID0gbmV3IFNldCgpO1xuXG4gICAgICAgIC8vIGRlZmF1bHQgdmFsdWVzXG4gICAgICAgIGlmICghdGhpcy5maWxlQWNjZXB0KSB7XG4gICAgICAgICAgICB0aGlzLmZpbGVBY2NlcHQgPSAnJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgICRvbkluaXQoKSB7XG4gICAgICAgIHRoaXMuaW5wdXQgPSB0aGlzLiRlbGVtZW50LmZpbmQoXCJpbnB1dFwiKVswXTtcblxuICAgICAgICB0aGlzLmluaXRDbGljaygpO1xuICAgICAgICB0aGlzLmluaXRCaW5kcyh0aGlzLiRlbGVtZW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyIGNsaWNrIGV2ZW50IG9uIHRoaXMuaW5wdXRcbiAgICAgKlxuICAgICAqL1xuICAgIGZpcmVVcGxvYWRFdmVudCgpIHtcbiAgICAgICAgaWYgKHRoaXMuJHdpbmRvdy5DdXN0b21FdmVudCkge1xuICAgICAgICAgICAgdGhpcy5pbnB1dC5kaXNwYXRjaEV2ZW50KG5ldyBNb3VzZUV2ZW50KFwiY2xpY2tcIikpO1xuICAgICAgICB9IGVsc2UgaWYgKGRvY3VtZW50LmNyZWF0ZUV2ZW50KSB7XG4gICAgICAgICAgICBsZXQgZXYgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnSFRNTEV2ZW50cycpO1xuICAgICAgICAgICAgZXYuaW5pdEV2ZW50KCdjb250ZXh0bWVudScsIHRydWUsIGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQuZGlzcGF0Y2hFdmVudChldik7XG4gICAgICAgIH0gZWxzZSB7IC8vIEludGVybmV0IEV4cGxvcmVyXG4gICAgICAgICAgICB0aGlzLmlucHV0LmZpcmVFdmVudCgnb25jb250ZXh0bWVudScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGxpc3RlbmVyIGZvciBjaGFuZ2Ugb24gdGhpcy5pbnB1dFxuICAgICAqXG4gICAgICovXG4gICAgaW5pdENsaWNrKCkge1xuICAgICAgICB0aGlzLmlucHV0XG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGUudGFyZ2V0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgIHRoaXMuaW5wdXRcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBsaXN0ID0gZS50YXJnZXQuZmlsZXM7XG4gICAgICAgICAgICAgICAgaWYgKGxpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3JlYXJyYXlMaXN0KGxpc3QpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lZGlhU2VydmljZS51cGxvYWRGaWxlKHRoaXMubGlzdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgZmFsc2UpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogSW5pdCBiaW5kcyBmb3IgRHJhZyZEcm9wXG4gICAgICpcbiAgICAgKi9cbiAgICBpbml0QmluZHMoZWxlbWVudCA9IHRoaXMuJGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5kcm9wU2hvdyA9IDA7XG5cbiAgICAgICAgZWxlbWVudC5iaW5kKFwiZHJhZ292ZXJcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uRHJhZ092ZXIoZXZlbnQsIGVsZW1lbnQpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvL0RyYWdnaW5nIGVuZHMgb24gdGhlIG92ZXJsYXksIHdoaWNoIHRha2VzIHRoZSB3aG9sZSB3aW5kb3dcbiAgICAgICAgZWxlbWVudFxuICAgICAgICAgICAgLmJpbmQoXCJkcmFnZW50ZXJcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5kcm9wU2hvdysrO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5iaW5kKFwiZHJhZ2xlYXZlXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZHJvcFNob3ctLTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kcm9wU2hvdyA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uRHJhZ0VuZChldmVudCwgZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5iaW5kKFwiZHJvcFwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZHJvcFNob3cgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMub25EcmFnRW5kKGUsIGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGxldCBsaXN0ID0gZS5kYXRhVHJhbnNmZXIuZmlsZXM7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVhcnJheUxpc3QobGlzdCk7XG4gICAgICAgICAgICAgICAgdGhpcy5tZWRpYVNlcnZpY2UudXBsb2FkRmlsZSh0aGlzLmxpc3QpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX3JlYXJyYXlMaXN0KGxpc3QpIHtcbiAgICAgICAgdGhpcy5saXN0LmNsZWFyKCk7XG4gICAgICAgIGZvciAobGV0IGZpbGVJbmRleCBpbiBsaXN0KSB7XG4gICAgICAgICAgICBpZiAoIWlzTmFOKGZpbGVJbmRleCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3QuYWRkKGxpc3QuaXRlbShmaWxlSW5kZXgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQWRkIGNsYXNzZXMgd2hlbiBhbiBpdGVtIGlzIGRyYWdnZWQgb3ZlciB0aGUgZG9jdW1lbnQgYW5kIHdoZW5cbiAgICAgKiB0aGUgdXNlciBsZWF2ZXMgdGhlIHdpbmRvdywgY2FuY2VscyB0aGUgZHJhZyBvciBkcm9wcyB0aGUgaXRlbVxuICAgICAqXG4gICAgICogQHBhcmFtIGVcbiAgICAgKiBAcGFyYW0gZWxlbWVudFxuICAgICAqL1xuICAgIG9uRHJhZ092ZXIoZSwgZWxlbWVudCA9IHRoaXMuJGVsZW1lbnQpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlbGVtZW50LmFkZENsYXNzKFwiZHJhZ092ZXJcIik7XG4gICAgfTtcblxuICAgIG9uRHJhZ0VuZChlLCBlbGVtZW50ID0gdGhpcy4kZWxlbWVudCkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJkcmFnT3ZlclwiKTtcbiAgICB9O1xuXG4gICAgY3JlYXRlTmV3RGlyKCkge1xuICAgICAgICB0aGlzLm1lZGlhU2VydmljZS5jcmVhdGVOZXdEaXIoKTtcbiAgICB9XG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgdGVtcGxhdGVVcmw6ICd1cGxvYWQtZmlsZS91cGxvYWQuZmlsZS50cGwuaHRtbCcsXG4gICAgY29udHJvbGxlcjogVXBsb2FkRmlsZVxufTsiLCJjbGFzcyBVdm9kIHtcblxuICAgIC8vIEBuZ0luamVjdFxuICAgIGNvbnN0cnVjdG9yKCRodHRwLCBtZWRpYVNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xuICAgICAgICB0aGlzLm1lZGlhU2VydmljZSA9IG1lZGlhU2VydmljZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBjb250cm9sbGVyOiBVdm9kLFxuICAgIHRlbXBsYXRlVXJsOiAndXZvZC91dm9kLnRwbC5odG1sJ1xufTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBMb2FkaW5nU2VydmljZSB7XG5cbiAgICAvLyBAbmdJbmplY3RcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLmxvYWRpbmdTdGFydCA9IGZhbHNlO1xuICAgIH1cbiAgICBcbiAgICBkb0xvYWRpbmcoKXtcbiAgICAgICAgdGhpcy5sb2FkaW5nU3RhcnQgPSB0cnVlO1xuICAgIH1cbiAgICBcbiAgICBzdG9wTG9hZGluZygpe1xuICAgICAgICB0aGlzLmxvYWRpbmdTdGFydCA9IGZhbHNlO1xuICAgIH1cblxufSIsImNvbnN0IFRZUEVTID0ge1xuICAgICdQTkcnOiB7XG4gICAgICAgIGxpc3Q6IFsnaW1hZ2UvcG5nJ10sXG4gICAgICAgIGltYWdlOiB0cnVlXG4gICAgfSxcbiAgICAnSlBHJzoge1xuICAgICAgICBsaXN0OiBbJ2ltYWdlL2pwZWcnLCAnaW1hZ2UvcGpwZWcnXSxcbiAgICAgICAgaW1hZ2U6IHRydWVcbiAgICB9LFxuICAgICdHSUYnOiB7XG4gICAgICAgIGxpc3Q6IFsnaW1hZ2UvZ2lmJ10sXG4gICAgICAgIGltYWdlOiB0cnVlXG4gICAgfSxcbiAgICAnQk1QJzoge1xuICAgICAgICBsaXN0OiBbJ2ltYWdlL2JtcCddLFxuICAgICAgICBpbWFnZTogdHJ1ZVxuICAgIH0sXG4gICAgJ1RJRkYnOiBbJ2ltYWdlL2llZicsICdpbWFnZS90aWZmJ10sXG4gICAgJ1RYVCc6IHtcbiAgICAgICAgbGlzdDogWydhcHBsaWNhdGlvbi9wbGFpbicsICd0ZXh0L3BsYWluJ10sXG4gICAgICAgIGljb246ICdpbWcvdHh0LnBuZydcbiAgICB9LFxuICAgICdQREYnOiB7XG4gICAgICAgIGxpc3Q6IFtcImFwcGxpY2F0aW9uL3BkZlwiXSxcbiAgICAgICAgaWNvbjogJ2ltZy9wZGYucG5nJ1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lZGlhU2VydmljZSB7XG5cbiAgICAvLyBAbmdJbmplY3RcbiAgICBjb25zdHJ1Y3RvcigkaHR0cCwgJHdpbmRvdywgJHRpbWVvdXQsIGFsZXJ0c1NlcnZpY2UsIGxvYWRpbmdTZXJ2aWNlLCB0cmFzaFNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xuICAgICAgICB0aGlzLiR3aW5kb3cgPSAkd2luZG93O1xuICAgICAgICB0aGlzLiR0aW1lb3V0ID0gJHRpbWVvdXQ7XG4gICAgICAgIHRoaXMuYWxlcnRzU2VydmljZSA9IGFsZXJ0c1NlcnZpY2U7XG4gICAgICAgIHRoaXMubG9hZGluZ1NlcnZpY2UgPSBsb2FkaW5nU2VydmljZTtcbiAgICAgICAgdGhpcy50cmFzaFNlcnZpY2UgPSB0cmFzaFNlcnZpY2U7XG5cbiAgICAgICAgdHJhc2hTZXJ2aWNlLmRpclJlbW92ZUZ1bmMgPSAoZGlyKSA9PiB0aGlzLl9kZWxldGVEaXIoZGlyKTtcbiAgICAgICAgdHJhc2hTZXJ2aWNlLmZpbGVSZW1vdmVGdW5jID0gKGZpbGUpID0+IHRoaXMuX2RlbGV0ZUZpbGUoZmlsZSk7XG5cbiAgICAgICAgdGhpcy5kaXIgPSBudWxsO1xuICAgICAgICB0aGlzLmRpcnNfZGF0YSA9IFtdO1xuICAgICAgICB0aGlzLmZpbGVzX2RhdGEgPSBbXTtcblxuICAgICAgICB0aGlzLmRpcl9saXN0ID0gW107XG5cbiAgICAgICAgdGhpcy5zZWxlY3RlZEZpbGUgPSBudWxsO1xuXG4gICAgICAgIHRoaXMuc2hvd0RpYWxvZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNob3dMZWZ0TWVudSA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5vcmRlcl9maWxlc19ieSA9IFwiXCI7XG4gICAgICAgIHRoaXMuZmlsdGVyX2ZpbGVzID0gXCJcIjtcblxuICAgICAgICB0aGlzLm5ld19kaXIgPSAnJztcbiAgICAgICAgXG5cbiAgICAgICAgdGhpcy5sb2FkRGlyKCk7XG5cbiAgICB9XG5cbiAgICBsb2FkRGlyKGRpcmVjdG9yeSA9IG51bGwsIGlzUmV0dXJuID0gZmFsc2UpIHtcbiAgICAgICAgLy8gbmFjaXRhdCBsb2FkaW5nIHNlcml2dXMgYSBzcHJhdml0IGxvYWRpbmcgc3RhcnRcbiAgICAgICAgdGhpcy5sb2FkaW5nU2VydmljZS5kb0xvYWRpbmcoKTtcblxuICAgICAgICBsZXQgdXJsQWRyZXNzID0gJyc7XG4gICAgICAgIGlmIChkaXJlY3RvcnkpIHtcbiAgICAgICAgICAgIHVybEFkcmVzcyA9IGRpcmVjdG9yeS5sb2NhdGlvbiArICcvJyArIGRpcmVjdG9yeS5uYW1lO1xuXG4gICAgICAgICAgICBpZiAoaXNSZXR1cm4pIHtcbiAgICAgICAgICAgICAgICB1cmxBZHJlc3MgPSBkaXJlY3RvcnkubG9jYXRpb247XG4gICAgICAgICAgICAgICAgdGhpcy5kaXJfbGlzdC5wb3AoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXJfbGlzdC5wdXNoKGRpcmVjdG9yeS5uYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJGh0dHAuZ2V0KGBodHRwOi8vbWVkaWFicm93c2VyLmJhcnQuc2svZGlyJHt1cmxBZHJlc3N9YClcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlyID0gcmVzcG9uc2UuZGF0YS5kaXI7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXJzX2RhdGEgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBkaXIgb2YgcmVzcG9uc2UuZGF0YS5kaXJzKSAge1xuICAgICAgICAgICAgICAgICAgICBkaXIuaW5UcmFzaCA9IHRoaXMudHJhc2hTZXJ2aWNlLmlzSW5UcmFzaChkaXIsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpcnNfZGF0YS5wdXNoKGRpcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuZGlyc19kYXRhID0gcmVzcG9uc2UuZGF0YS5kaXJzO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5maWxlc19kYXRhID0gW107XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgZmlsZSBvZiByZXNwb25zZS5kYXRhLmZpbGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdGaWxlID0gbmV3IEZpbGUoZmlsZSk7XG4gICAgICAgICAgICAgICAgICAgIG5ld0ZpbGUuaW5UcmFzaCA9IHRoaXMudHJhc2hTZXJ2aWNlLmlzSW5UcmFzaChuZXdGaWxlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlc19kYXRhLnB1c2gobmV3RmlsZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgbWVzcyA9IGVycm9yLmRhdGEuY29kZSA/IGVycm9yLmRhdGEuZGVzY3JpcHRpb24gOiBcIlZ5c2t5dGxhIHNhIGNoeWJhLlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRzU2VydmljZS5hZGRBbGVydChtZXNzLCAnZXJyb3InKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nU2VydmljZS5zdG9wTG9hZGluZygpO1xuICAgICAgICAgICAgICAgIC8vIHRvZG8gdXJvYiBsb2FkaW4gc3RvcFxuICAgICAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGxvYWRGaWxlKGZpbGVEaXJlY3RvcnkgPSBudWxsKSB7XG4gICAgICAgIGlmIChmaWxlRGlyZWN0b3J5LnRodW1iX2xpbmspIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRGaWxlID0gZmlsZURpcmVjdG9yeS5kb3dubG9hZF9saW5rO1xuICAgICAgICAgICAgdGhpcy5zaG93RGlhbG9nID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLiR3aW5kb3cub3BlbihmaWxlRGlyZWN0b3J5LmRvd25sb2FkX2xpbmssICdfYmxhbmsnKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB1cGxvYWRGaWxlKGZpbGVzU2V0KSB7XG4gICAgICAgIGZvciAobGV0IGl0ZW0gb2YgZmlsZXNTZXQpIHtcbiAgICAgICAgICAgIHRoaXMuX3VwbG9hZEZpbGUoaXRlbSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfdXBsb2FkRmlsZShmaWxlKSB7XG4gICAgICAgIHRoaXMubG9hZGluZ1NlcnZpY2UuZG9Mb2FkaW5nKCk7XG5cbiAgICAgICAgdmFyIGxvY2F0aW9uID0gJy8nO1xuICAgICAgICBpZiAodGhpcy5kaXIpIHtcbiAgICAgICAgICAgIGxvY2F0aW9uID0gdGhpcy5kaXIubG9jYXRpb24gKyAnLycgKyB0aGlzLmRpci5uYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImZpbGVcIiwgZmlsZSk7XG5cbiAgICAgICAgdGhpcy4kaHR0cCh7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgZGF0YTogZm9ybURhdGEsXG4gICAgICAgICAgICAgICAgdXJsOiBgaHR0cDovL21lZGlhYnJvd3Nlci5iYXJ0LnNrL21lZGlhLWJyb3dzZXIvZmlsZSR7bG9jYXRpb259YCxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6IHVuZGVmaW5lZH0sXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtUmVxdWVzdDogYW5ndWxhci5pZGVudGl0eVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5maWxlc19kYXRhLnB1c2gobmV3IEZpbGUocmVzdWx0LmRhdGEpKTtcbiAgICAgICAgICAgICAgICBsZXQgbWVzcyA9IHJlc3VsdC5kYXRhLmNvZGUgPyByZXN1bHQuZGF0YS5kZXNjcmlwdGlvbiA6IFwiU3Vib3IgdXNwZXNuZSBuYWhyYW55LlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRzU2VydmljZS5hZGRBbGVydChtZXNzKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG1lc3MgPSBlcnJvci5kYXRhLmNvZGUgPyBlcnJvci5kYXRhLmRlc2NyaXB0aW9uIDogXCJWeXNreXRsYSBzYSBjaHliYS5cIjtcbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0c1NlcnZpY2UuYWRkQWxlcnQobWVzcywgJ2Vycm9yJyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ1NlcnZpY2Uuc3RvcExvYWRpbmcoKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNyZWF0ZU5ld0RpcigpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nU2VydmljZS5kb0xvYWRpbmcoKTtcblxuICAgICAgICB2YXIgbG9jYXRpb24gPSAnLyc7XG4gICAgICAgIGlmICh0aGlzLmRpcikge1xuICAgICAgICAgICAgbG9jYXRpb24gPSB0aGlzLmRpci5sb2NhdGlvbiArICcvJyArIHRoaXMuZGlyLm5hbWU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiRodHRwKHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMubmV3X2RpcixcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb246IGxvY2F0aW9uXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB1cmw6IGBodHRwOi8vbWVkaWFicm93c2VyLmJhcnQuc2svbWVkaWEtYnJvd3Nlci9kaXJgXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICByZXN1bHQuZGF0YS5pblRyYXNoID0gdGhpcy50cmFzaFNlcnZpY2UuaXNJblRyYXNoKHJlc3VsdC5kYXRhLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRpcnNfZGF0YS5wdXNoKHJlc3VsdC5kYXRhKTtcbiAgICAgICAgICAgICAgICBsZXQgbWVzcyA9IHJlc3VsdC5kYXRhLmNvZGUgPyByZXN1bHQuZGF0YS5kZXNjcmlwdGlvbiA6IFwiUHJpZWNpbm9rIHVzcGVzbmUgdnl0dm9yZW55LlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRzU2VydmljZS5hZGRBbGVydChtZXNzKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG1lc3MgPSBlcnJvci5kYXRhLmNvZGUgPyBlcnJvci5kYXRhLmRlc2NyaXB0aW9uIDogXCJWeXNreXRsYSBzYSBjaHliYS5cIjtcbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0c1NlcnZpY2UuYWRkQWxlcnQobWVzcywgJ2Vycm9yJyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ1NlcnZpY2Uuc3RvcExvYWRpbmcoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubmV3X2RpciA9IFwiXCI7XG5cbiAgICB9XG5cbiAgICBkZWxldGVEaXIoZGlyKSB7XG4gICAgICAgIGRpci5pblRyYXNoID0gdHJ1ZTtcbiAgICAgICAgdGhpcy50cmFzaFNlcnZpY2UuYWRkVG9UcmFzaChkaXIpO1xuICAgIH1cblxuICAgIF9kZWxldGVEaXIoZGlyKSB7XG4gICAgICAgIHRoaXMubG9hZGluZ1NlcnZpY2UuZG9Mb2FkaW5nKCk7XG5cbiAgICAgICAgdGhpcy4kaHR0cCh7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgICAgICAgICAgICB1cmw6IGBodHRwOi8vbWVkaWFicm93c2VyLmJhcnQuc2svbWVkaWEtYnJvd3Nlci9kaXIke2Rpci5sb2NhdGlvbn0vJHtkaXIubmFtZX1gXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmRpcnNfZGF0YS5pbmRleE9mKGRpcik7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXJzX2RhdGEuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IG1lc3MgPSByZXN1bHQuZGF0YS5jb2RlID8gcmVzdWx0LmRhdGEuZGVzY3JpcHRpb24gOiBcIlByaWVjaW5vayB1c3Blc25lIHptYXphbnkuXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydHNTZXJ2aWNlLmFkZEFsZXJ0KG1lc3MpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgbWVzcyA9IGVycm9yLmRhdGEuY29kZSA/IGVycm9yLmRhdGEuZGVzY3JpcHRpb24gOiBcIlZ5c2t5dGxhIHNhIGNoeWJhLlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRzU2VydmljZS5hZGRBbGVydChtZXNzLCAnZXJyb3InKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nU2VydmljZS5zdG9wTG9hZGluZygpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZGVsZXRlRmlsZShmaWxlKXtcbiAgICAgICAgZmlsZS5pblRyYXNoID0gdHJ1ZTtcbiAgICAgICAgdGhpcy50cmFzaFNlcnZpY2UuYWRkVG9UcmFzaChmaWxlKTtcbiAgICB9XG5cbiAgICBfZGVsZXRlRmlsZShmaWxlKXtcbiAgICAgICAgdGhpcy5sb2FkaW5nU2VydmljZS5kb0xvYWRpbmcoKTtcblxuICAgICAgICB0aGlzLiRodHRwKHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICAgICAgICAgIHVybDogYGh0dHA6Ly9tZWRpYWJyb3dzZXIuYmFydC5zay9tZWRpYS1icm93c2VyL2ZpbGUke2ZpbGUubG9jYXRpb259LyR7ZmlsZS5uYW1lfWBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHRoaXMuZmlsZXNfZGF0YS5pbmRleE9mKGZpbGUpO1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZXNfZGF0YS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgbWVzcyA9IHJlc3VsdC5kYXRhLmNvZGUgPyByZXN1bHQuZGF0YS5kZXNjcmlwdGlvbiA6IFwiU3Vib3IgdXNwZXNuZSB6bWF6YW55LlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRzU2VydmljZS5hZGRBbGVydChtZXNzKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG1lc3MgPSBlcnJvci5kYXRhLmNvZGUgPyBlcnJvci5kYXRhLmRlc2NyaXB0aW9uIDogXCJWeXNreXRsYSBzYSBjaHliYS5cIjtcbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0c1NlcnZpY2UuYWRkQWxlcnQobWVzcywgJ2Vycm9yJyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ1NlcnZpY2Uuc3RvcExvYWRpbmcoKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHRvZ2dsZUxlZnRNZW51KCkge1xuICAgICAgICB0aGlzLnNob3dMZWZ0TWVudSA9ICF0aGlzLnNob3dMZWZ0TWVudTtcbiAgICB9XG5cbiAgICB0b2dnbGVEaWFsb2coKSB7XG4gICAgICAgIHRoaXMuc2hvd0RpYWxvZyA9ICF0aGlzLnNob3dEaWFsb2c7XG4gICAgfVxuXG4gICAgY2xvc2VEaWFsb2coKSB7XG4gICAgICAgIGlmICh0aGlzLnNob3dEaWFsb2cpXG4gICAgICAgICAgICB0aGlzLnNob3dEaWFsb2cgPSAhdGhpcy5zaG93RGlhbG9nO1xuICAgIH1cbn1cblxuXG5leHBvcnQgY2xhc3MgRmlsZSB7XG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgICAgICB0aGlzLmNyZWF0ZWRfdGltZSA9IG51bGw7XG4gICAgICAgIHRoaXMuZG93bmxvYWRfbGluayA9IG51bGw7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBudWxsO1xuICAgICAgICB0aGlzLm5hbWUgPSBudWxsO1xuICAgICAgICB0aGlzLnNpemUgPSBudWxsO1xuICAgICAgICB0aGlzLnRodW1iX2xpbmsgPSBudWxsO1xuICAgICAgICB0aGlzLnR5cGUgPSBudWxsO1xuICAgICAgICB0aGlzLnVwZGF0ZV90aW1lID0gbnVsbDtcblxuICAgICAgICB0aGlzLnJhd0ZpbGUgPSBudWxsO1xuXG4gICAgICAgIHRoaXMuaW5UcmFzaCA9IGZhbHNlO1xuXG4gICAgICAgIGFuZ3VsYXIubWVyZ2UodGhpcywgZGF0YSk7XG4gICAgfVxuXG4gICAgZ2V0VHlwZU5hbWUoZ2V0SWNvbiA9IGZhbHNlKSB7XG4gICAgICAgIGZvciAobGV0IHR5cGVOYW1lIGluIFRZUEVTKSB7XG4gICAgICAgICAgICBsZXQgdHlwZU9iaiA9IFRZUEVTW3R5cGVOYW1lXTtcbiAgICAgICAgICAgIGlmIChhbmd1bGFyLmlzRGVmaW5lZCh0eXBlT2JqLmxpc3QpKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgdHlwZSBvZiB0eXBlT2JqLmxpc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT0gdGhpcy50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2V0SWNvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbmd1bGFyLmlzRGVmaW5lZCh0eXBlT2JqLmltYWdlKSAmJiB0eXBlT2JqLmltYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRodW1iX2xpbms7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFuZ3VsYXIuaXNEZWZpbmVkKHR5cGVPYmouaWNvbikgPyB0eXBlT2JqLmljb24gOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVOYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZXhjaGFuZ2VSYXcoZmlsZSkge1xuICAgICAgICB0aGlzLmRvd25sb2FkX2xpbmsgPSBudWxsO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbnVsbDtcbiAgICAgICAgdGhpcy5uYW1lID0gZmlsZS5uYW1lO1xuICAgICAgICB0aGlzLnNpemUgPSBmaWxlLnNpemU7XG4gICAgICAgIHRoaXMudGh1bWJfbGluayA9IG51bGw7XG4gICAgICAgIHRoaXMudHlwZSA9IGZpbGUudHlwZTtcbiAgICAgICAgdGhpcy51cGRhdGVfdGltZSA9IG51bGw7XG4gICAgICAgIHRoaXMucmF3RmlsZSA9IGZpbGUucmF3RmlsZTtcbiAgICB9XG5cbiAgICBnZXQgbmljZVR5cGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFR5cGVOYW1lKCkgPyB0aGlzLmdldFR5cGVOYW1lKCkgOiAnYW55JztcbiAgICB9XG5cbiAgICBnZXQgaWNvbigpIHtcbiAgICAgICAgbGV0IGljb24gPSB0aGlzLmdldFR5cGVOYW1lKHRydWUpO1xuICAgICAgICByZXR1cm4gaWNvbiA/IGljb24gOiBcImltZy9wbGFpbi5wbmdcIlxuICAgIH1cblxuXG59IiwiaW1wb3J0IHtGaWxlfSBmcm9tICcuL21lZGlhLnNlcnZpY2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmFzaFNlcnZpY2Uge1xuXG4gICAgLy8gQG5nSW5qZWN0XG4gICAgY29uc3RydWN0b3IoJHRpbWVvdXQpIHtcbiAgICAgICAgdGhpcy4kdGltZW91dCA9ICR0aW1lb3V0O1xuICAgICAgICB0aGlzLmZpbGVMaXN0ID0gW107XG4gICAgICAgIHRoaXMuZGlyZWN0b3J5TGlzdCA9IFtdO1xuXG4gICAgICAgIHRoaXMuZGlyUmVtb3ZlRnVuYyA9IG51bGw7XG4gICAgICAgIHRoaXMuZmlsZVJlbW92ZUZ1bmMgPSBudWxsO1xuICAgIH1cblxuICAgIGFkZFRvVHJhc2gob2JqZWN0KSB7XG4gICAgICAgIGlmIChvYmplY3QgaW5zdGFuY2VvZiBGaWxlKSB7XG4gICAgICAgICAgICB0aGlzLmZpbGVMaXN0LnB1c2gob2JqZWN0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0b3J5TGlzdC5wdXNoKG9iamVjdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGVhclRyYXNoKCkge1xuICAgICAgICBpZiAoYW5ndWxhci5pc0Z1bmN0aW9uKHRoaXMuZGlyUmVtb3ZlRnVuYykpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGRpciBvZiB0aGlzLmRpcmVjdG9yeUxpc3QpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpclJlbW92ZUZ1bmMuY2FsbCh0aGlzLCBkaXIpO1xuICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0b3J5TGlzdD1bXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhbmd1bGFyLmlzRnVuY3Rpb24odGhpcy5maWxlUmVtb3ZlRnVuYykpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGZpbGUgb2YgdGhpcy5maWxlTGlzdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZmlsZVJlbW92ZUZ1bmMuY2FsbCh0aGlzLCBmaWxlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGVMaXN0PVtdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVzdG9yZVRyYXNoKCkge1xuICAgICAgICBmb3IgKGxldCBkaXIgb2YgdGhpcy5kaXJlY3RvcnlMaXN0KSB7XG4gICAgICAgICAgICBkaXIuaW5UcmFzaCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGZpbGUgb2YgdGhpcy5maWxlTGlzdCkge1xuICAgICAgICAgICAgZmlsZS5pblRyYXNoID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5maWxlTGlzdD1bXTtcbiAgICAgICAgdGhpcy5kaXJlY3RvcnlMaXN0PVtdO1xuICAgIH1cblxuICAgIGdldCB0cmFzaENvdW50cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsZUxpc3QubGVuZ3RoICsgdGhpcy5kaXJlY3RvcnlMaXN0Lmxlbmd0aDtcbiAgICB9XG5cbiAgICBpc0luVHJhc2gob2JqLCBpc0RpciA9IGZhbHNlKSB7XG4gICAgICAgIGlmIChpc0Rpcikge1xuICAgICAgICAgICAgZm9yIChsZXQgZGlyIG9mIHRoaXMuZGlyZWN0b3J5TGlzdCkge1xuICAgICAgICAgICAgICAgIGlmIChkaXIubmFtZSA9PSBvYmoubmFtZSAmJiBkaXIubG9jYXRpb24gPT0gb2JqLmxvY2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGZpbGUgb2YgdGhpcy5maWxlTGlzdCkge1xuICAgICAgICAgICAgICAgIGlmIChmaWxlLm5hbWUgPT0gb2JqLm5hbWUgJiYgZmlsZS5sb2NhdGlvbiA9PSBvYmoubG9jYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn0iLCJyZXF1aXJlKCcuL3RlbXBsYXRlcycpO1xubW9kdWxlLmV4cG9ydHMgPSAndGVtcGxhdGVzJzsiLCJhbmd1bGFyLm1vZHVsZShcInRlbXBsYXRlc1wiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7JHRlbXBsYXRlQ2FjaGUucHV0KFwiYXBwbGljYXRpb24tcm9vdC9hcHBsaWNhdGlvbi5yb290LnRwbC5odG1sXCIsXCI8ZGl2IGlkPVxcXCJva25vXFxcIj5cXG5cXG4gICAgPGxlZnQtbWVudSBuZy1pZj1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLnNob3dMZWZ0TWVudVxcXCI+PC9sZWZ0LW1lbnU+XFxuXFxuICAgIDxkaXYgaWQ9XFxcIm9ic2FoXFxcIiBuZy1jbGFzcz1cXFwie1xcJ2Z1bGxcXCc6ICEkY3RybC5tZWRpYVNlcnZpY2Uuc2hvd0xlZnRNZW51fVxcXCI+XFxuICAgICAgICA8YnJlYWRjcnVtYnM+PC9icmVhZGNydW1icz5cXG4gICAgICAgIDxmaWx0ZXItcGFuZWw+PC9maWx0ZXItcGFuZWw+XFxuXFxuICAgICAgICA8ZGl2IHN0eWxlPVxcXCJtYXJnaW4tbGVmdDoyMHB4OyBtYXJnaW4tcmlnaHQ6IDMwcHhcXFwiPlxcblxcbiAgICAgICAgICAgIDxkaXItcmV0dXJuPjwvZGlyLXJldHVybj5cXG5cXG4gICAgICAgICAgICA8ZGlyLWJhc2U+PC9kaXItYmFzZT5cXG5cXG4gICAgICAgICAgICA8ZmlsZT48L2ZpbGU+XFxuICAgICAgICA8L2Rpdj5cXG5cXG4gICAgPC9kaXY+XFxuXFxuPC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiYnJlYWRjcnVtYnMvYnJlYWRjcnVtYnMudHBsLmh0bWxcIixcIjxkaXYgaWQ9XFxcImhlYWRlcjJcXFwiPlxcbiAgICA8aDI+XFxuICAgICAgICA8c3Bhbj5Ib21lPC9zcGFuPlxcbiAgICAgICAgPHNwYW4gbmctcmVwZWF0PVxcXCJkaXJOYW1lIGluICRjdHJsLm1lZGlhU2VydmljZS5kaXJfbGlzdFxcXCI+IC8ge3tkaXJOYW1lfX0gPC9zcGFuPlxcbiAgICA8L2gyPlxcbjwvZGl2PlwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImRpci1iYXNlL2Rpci5iYXNlLnRwbC5odG1sXCIsXCI8ZGl2IGNsYXNzPVxcXCJpY29uXFxcIiBuZy1yZXBlYXQ9XFxcImRpciBpbiAkY3RybC5tZWRpYVNlcnZpY2UuZGlyc19kYXRhIHwgZmlsdGVyOiB7bmFtZSA6JGN0cmwubWVkaWFTZXJ2aWNlLmZpbHRlcl9maWxlcywgaW5UcmFzaDogZmFsc2V9XFxcIiBuZy1jbGljaz1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLmxvYWREaXIoZGlyKVxcXCI+XFxuXFxuICAgIDxpbWcgY2xhc3M9XFxcInJlbW92ZV9kaXJcXFwiIHNyYz1cXFwiaW1nL2Nsb3NlLnBuZ1xcXCIgIG5nLWNsaWNrPVxcXCIkY3RybC5kZWxldGVEaXIoZGlyLCAkZXZlbnQpO1xcXCIvPlxcblxcbiAgICA8aW1nIGNsYXNzPVxcXCJpbWdfaWNvblxcXCIgc3JjPVxcXCJpbWcvcHJpZWNpbm9rLnBuZ1xcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcIm5hem92X3N1Ym9ydVxcXCI+e3tkaXIubmFtZX19PC9kaXY+XFxuXFxuPC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiZGlyLXJldHVybi9kaXIucmV0dXJuLnRwbC5odG1sXCIsXCI8ZGl2IGNsYXNzPVxcXCJpY29uXFxcIiBuZy1zaG93PVxcXCIkY3RybC5tZWRpYVNlcnZpY2UuZGlyXFxcIiBuZy1jbGljaz1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLmxvYWREaXIoJGN0cmwubWVkaWFTZXJ2aWNlLmRpciwgdHJ1ZSlcXFwiPlxcbiAgICA8aW1nIGNsYXNzPVxcXCJpbWdfaWNvblxcXCIgc3JjPVxcXCJpbWcvYWRyZXNhci5wbmdcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJuYXpvdl9zdWJvcnVcXFwiPk5hZHJhZGVueSBhZHJlc2FyPC9kaXY+XFxuPC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiZmlsZS9maWxlLnRwbC5odG1sXCIsXCI8ZGl2IGNsYXNzPVxcXCJpY29uXFxcIiBuZy1yZXBlYXQ9XFxcImZpbGUgaW4gJGN0cmwubWVkaWFTZXJ2aWNlLmZpbGVzX2RhdGEgfCBvcmRlckJ5OiAkY3RybC5tZWRpYVNlcnZpY2Uub3JkZXJfZmlsZXNfYnkgfCBmaWx0ZXI6e25hbWUgOiRjdHJsLm1lZGlhU2VydmljZS5maWx0ZXJfZmlsZXMsIGluVHJhc2g6IGZhbHNlfVxcXCIgbmctY2xpY2s9XFxcIiRjdHJsLm1lZGlhU2VydmljZS5sb2FkRmlsZShmaWxlKVxcXCI+XFxuICAgIDxpbWcgY2xhc3M9XFxcInJlbW92ZV9kaXJcXFwiIHNyYz1cXFwiaW1nL2Nsb3NlLnBuZ1xcXCIgbmctY2xpY2s9XFxcIiRjdHJsLmRlbGV0ZUZpbGUoZmlsZSwgJGV2ZW50KTtcXFwiPlxcbiAgICA8aW1nIGNsYXNzPVxcXCJpbWdfcGljdHVyZVxcXCIgIG5nLXNyYz1cXFwie3tmaWxlLmljb259fVxcXCI+XFxuXFxuICAgIDxkaXYgY2xhc3M9XFxcIm5hem92X3N1Ym9ydVxcXCI+e3tmaWxlLm5hbWV9fTwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ0eXBfc3Vib3J1XFxcIj5cXG4gICAgICAgIDxwPnt7ZmlsZS5uaWNlVHlwZX19PC9wPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwidmVsa29zdF9zdWJvcnVcXFwiPlxcbiAgICAgICAgPHA+e3tmaWxlLnNpemV9fTwvcD5cXG4gICAgPC9kaXY+XFxuPC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiZmlsdGVyLXBhbmVsL2ZpbHRlci5wYW5lbC50cGwuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXFwiZmlsdGVyLXBhbmVsXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZmlsdGVyXFxcIj5cXG4gICAgICAgIDx1cGxvYWQtZmlsZT48L3VwbG9hZC1maWxlPlxcbiAgICAgICAgPHA+SGxhZGF0OlxcbiAgICAgICAgICAgIDxpbnB1dCBuZy1tb2RlbD1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLmZpbHRlcl9maWxlc1xcXCIvPlxcbiAgICAgICAgPC9wPlxcbiAgICAgICAgPHA+Wm9yYWRpdCBwb2RsYTpcXG4gICAgICAgICAgICA8c2VsZWN0IG5nLW1vZGVsPVxcXCIkY3RybC5tZWRpYVNlcnZpY2Uub3JkZXJfZmlsZXNfYnlcXFwiPlxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJuYW1lXFxcIj5OYXp2dTwvb3B0aW9uPlxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJzaXplXFxcIj5WZWxrb3N0aTwvb3B0aW9uPlxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJjcmVhdGVkX3RpbWVcXFwiPkRhdHVtdSB2eXR2b3JlbmlhPC9vcHRpb24+XFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIm5pY2VUeXBlXFxcIj5UeXB1IHN1Ym9ydTwvb3B0aW9uPlxcbiAgICAgICAgICAgIDwvc2VsZWN0PlxcbiAgICAgICAgPC9wPlxcbiAgICA8L2Rpdj5cXG48L2Rpdj5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJsZWZ0LW1lbnUvbGVmdC5tZW51LnRwbC5odG1sXCIsXCI8ZGl2IGlkPVxcXCJsZWZ0X21lbnVcXFwiPlxcbiAgICA8dWw+XFxuICAgICAgICA8bGkgbmctc2hvdz1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLmRpclxcXCIgbmctY2xpY2s9XFxcIiRjdHJsLm1lZGlhU2VydmljZS5sb2FkRGlyKCRjdHJsLm1lZGlhU2VydmljZS5kaXIsIHRydWUpXFxcIiBzdHlsZT1cXFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMThweDtcXFwiPk5hZHJhZGVueSBhZHJlc2FyPC9saT5cXG4gICAgICAgIDxsaSBuZy1yZXBlYXQ9XFxcImRpciBpbiAkY3RybC5tZWRpYVNlcnZpY2UuZGlyc19kYXRhIHwgZmlsdGVyOiB7bmFtZSA6JGN0cmwubWVkaWFTZXJ2aWNlLmZpbHRlcl9maWxlcywgaW5UcmFzaDogZmFsc2V9XFxcIiBuZy1jbGljaz1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLmxvYWREaXIoZGlyKVxcXCIgPnt7ZGlyLm5hbWV9fTwvbGk+XFxuICAgIDwvdWw+XFxuICAgIDxkaXYgY2xhc3M9XFxcImFsZXJ0XFxcIiBuZy1jbGFzcz1cXFwiYWxlcnQudHlwZVxcXCIgbmctcmVwZWF0PVxcXCJhbGVydCBpbiAkY3RybC5hbGVydHNTZXJ2aWNlLmFsZXJ0cyB0cmFjayBieSAkaW5kZXhcXFwiPnt7YWxlcnQubWVzc2FnZX19PC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImxvYWRlclxcXCIgbmctaWY9XFxcIiRjdHJsLmxvYWRpbmdTZXJ2aWNlLmxvYWRpbmdTdGFydFxcXCI+TG9hZGluZy4uLjwvZGl2PlxcblxcbiAgICA8ZGl2IGNsYXNzPVxcXCJpY29uLXRyYXNoIGN1cnNvci1wb2ludGVyXFxcIiBuZy1pZj1cXFwiJGN0cmwudHJhc2hTZXJ2aWNlLnRyYXNoQ291bnRzXFxcIiBuZy1jbGljaz1cXFwiJGN0cmwudHJhc2hTZXJ2aWNlLmNsZWFyVHJhc2goKVxcXCIgc3R5bGU9XFxcImZsb2F0OiBsZWZ0O1xcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0cmFzaC1saWRcXFwiIHN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOiAjRTVFOUVBXFxcIj48L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInRyYXNoLWNvbnRhaW5lclxcXCIgc3R5bGU9XFxcImJhY2tncm91bmQtY29sb3I6ICNFNUU5RUFcXFwiPjwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidHJhc2gtbGluZS0xXFxcIj48L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInRyYXNoLWxpbmUtMlxcXCI+PC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0cmFzaC1saW5lLTNcXFwiPjwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBuZy1pZj1cXFwiJGN0cmwudHJhc2hTZXJ2aWNlLnRyYXNoQ291bnRzXFxcIj5UcmFzaCBoYXM6IHt7JGN0cmwudHJhc2hTZXJ2aWNlLnRyYXNoQ291bnRzfX0gZ2FyYmFnZSBpdGVtczwvZGl2PlxcbiAgICA8ZGl2IG5nLWlmPVxcXCIkY3RybC50cmFzaFNlcnZpY2UudHJhc2hDb3VudHNcXFwiIGNsYXNzPVxcXCJjdXJzb3ItcG9pbnRlclxcXCJcXG4gICAgICAgICBuZy1jbGljaz1cXFwiJGN0cmwudHJhc2hTZXJ2aWNlLnJlc3RvcmVUcmFzaCgpXFxcIj5SZXN0b3JlIHRyYXNoPC9kaXY+XFxuPC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwic3R2b3JlYy9zdHZvcmVjLnRwbC5odG1sXCIsXCI8ZGl2IGlkPVxcXCJzdHZvcmVjXFxcIj5cXG4gICAgPGltZyBzdHlsZT1cXFwibWF4LWhlaWdodDogMjV2dzsgbWF4LXdpZHRoOiAyNXZ3O1xcXCIgbmctaWY9XFxcIiRjdHJsLmlzSW1hZ2VcXFwiIG5nLXNyYz1cXFwie3skY3RybC5tZWRpYVNlcnZpY2Uuc2VsZWN0ZWRGaWxlfX1cXFwiPlxcbjwvZGl2PlwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcInVwbG9hZC1maWxlL3VwbG9hZC5maWxlLnRwbC5odG1sXCIsXCI8ZGl2IGNsYXNzPVxcXCJwdWxsLXJpZ2h0IGRyb3AtaW1nLXpvbmVcXFwiPlxcbiAgICA8aW5wdXQgaWQ9XFxcImRyYWdnaW5nXFxcIlxcbiAgICAgICAgICAgY2xhc3M9XFxcImhpZGRlblxcXCJcXG4gICAgICAgICAgIHR5cGU9XFxcImZpbGVcXFwiXFxuICAgICAgICAgICBhY2NlcHQ9XFxcInt7JGN0cmwuZmlsZUFjY2VwdH19XFxcIlxcbiAgICAgICAgICAgbXVsdGlwbGUvPlxcbiAgICA8ZGl2PlxcbiAgICAgICAgPHNwYW4+VXBsb2FkIHN1Ym9ydTogPC9zcGFuPlxcbiAgICAgICAgPGEgY2xhc3M9XFxcImN1cnNvci1wb2ludGVyIHVwbG9hZC1idG5cXFwiIG5nLWNsaWNrPVxcXCIkY3RybC5maXJlVXBsb2FkRXZlbnQoKVxcXCI+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImRpc3BsYXktYmxvY2tcXFwiIHRyYW5zbGF0ZT5VcGxvYWQ8L3NwYW4+XFxuICAgICAgICA8L2E+XFxuICAgIDwvZGl2PlxcbiAgICA8cD5Ob3Z5IGFkcmVzYXI6XFxuICAgICAgICA8aW5wdXQgbmctbW9kZWw9XFxcIiRjdHJsLm1lZGlhU2VydmljZS5uZXdfZGlyXFxcIi8+XFxuICAgICAgICA8YnV0dG9uIG5nLWNsaWNrPVxcXCIkY3RybC5jcmVhdGVOZXdEaXIoKVxcXCI+Q1JFQVRFPC9idXR0b24+XFxuICAgIDwvcD5cXG48L2Rpdj5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJ1dm9kL3V2b2QudHBsLmh0bWxcIixcIjxkaXY+XFxuICAgIDxkaXYgaWQ9XFxcInV2b2RcXFwiXFxuICAgICAgICAgbmctY2xhc3M9XFxcIntcXCdoYWxmdmlld1xcJzogJGN0cmwubWVkaWFTZXJ2aWNlLnNob3dEaWFsb2d9XFxcIlxcbiAgICAgICAgIG5nLWNsaWNrPVxcXCIkY3RybC5tZWRpYVNlcnZpY2UuY2xvc2VEaWFsb2coKVxcXCI+XFxuICAgICAgICA8c3R2b3JlYz48L3N0dm9yZWM+XFxuXFxuICAgICAgICA8YnV0dG9uIGlkPVxcXCJ6b2JyYXpfZGlhbG9nXFxcIlxcbiAgICAgICAgICAgICAgICBuZy1jbGljaz1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLnRvZ2dsZURpYWxvZygpOyAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XFxcIlxcbiAgICAgICAgICAgICAgICBzdHlsZT1cXFwibWFyZ2luLWxlZnQ6YXV0bzttYXJnaW4tcmlnaHQ6YXV0bztkaXNwbGF5OmJsb2NrOyBiYWNrZ3JvdW5kLWNvbG9yOiM0NjQ5NGE7Y29sb3I6IHdoaXRlOyBwYWRkaW5nOiA1cHggNXB4IDVweCA1cHhcXFwiPlpPQlJBWklUIERJQUxPR1xcbiAgICAgICAgPC9idXR0b24+XFxuICAgIDwvZGl2PlxcblxcblxcbiAgICA8bWVkaWEtYnJvd3NlciBuZy1pZj1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLnNob3dEaWFsb2dcXFwiPjwvbWVkaWEtYnJvd3Nlcj5cXG48L2Rpdj5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJtZWRpYS1icm93c2VyL21lZGlhLmJyb3dzZXIudHBsLmh0bWxcIixcIjxkaXYgaWQ9XFxcIk1lZGlhQnJvd3NlclxcXCI+XFxuICAgIDxkaXYgaWQ9XFxcImhlYWRlcjFcXFwiPlxcbiAgICAgICAgPGltZyBuZy1jbGljaz1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLnRvZ2dsZUxlZnRNZW51KClcXFwiIGlkPVxcXCJtZW51X2ljb25cXFwiIHNyYz1cXFwiaW1nL21lbnUucG5nXFxcIiBzdHlsZT1cXFwid2lkdGg6NTBweDsgaGVpZ2h0OjEwMCU7ZmxvYXQ6bGVmdDsgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXFwiPlxcbiAgICAgICAgPGgxPk1lZGlhIEJyb3dzZXI8L2gxPlxcbiAgICAgICAgPGltZyBpZD1cXFwiemF2cmlfZGlhbG9nXFxcIlxcbiAgICAgICAgICAgICBuZy1jbGljaz1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLnRvZ2dsZURpYWxvZygpXFxcIlxcbiAgICAgICAgICAgICBzcmM9XFxcImltZy9jbG9zZS5wbmdcXFwiIHN0eWxlPVxcXCJoZWlnaHQ6MTAwJTtmbG9hdDpyaWdodDsgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxcIj5cXG4gICAgPC9kaXY+XFxuXFxuICAgIDxhcHBsaWNhdGlvbi1yb290PjwvYXBwbGljYXRpb24tcm9vdD5cXG48L2Rpdj5cIik7fV0pOyJdfQ==
