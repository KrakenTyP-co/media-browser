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

                        dir.inTrash = false;
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

                        _this2.files_data.push(new File(file));
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
                        this.directoryList.shift();
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
                        this.fileList.shift();
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
  $templateCache.put("dir-base/dir.base.tpl.html", "<div class=\"icon\" ng-repeat=\"dir in $ctrl.mediaService.dirs_data | filter: {name :$ctrl.mediaService.filter_files, inTrash: false}\" ng-click=\"$ctrl.mediaService.loadDir(dir)\">\n\n    <img class=\"remove_dir\" src=\"img/close.png\"  ng-click=\"$ctrl.deleteDir(dir, $event);\"/>\n\n    <img class=\"img_icon\" src=\"img/priecinok.png\">\n    <div class=\"nazov_suboru\">{{dir.name}}</div>\n\n</div>");
  $templateCache.put("dir-return/dir.return.tpl.html", "<div class=\"icon\" ng-show=\"$ctrl.mediaService.dir\" ng-click=\"$ctrl.mediaService.loadDir($ctrl.mediaService.dir, true)\">\n    <img class=\"img_icon\" src=\"img/adresar.png\">\n    <div class=\"nazov_suboru\">Nadradeny adresar</div>\n</div>");
  $templateCache.put("breadcrumbs/breadcrumbs.tpl.html", "<div id=\"header2\">\n    <h2>\n        <span>Home</span>\n        <span ng-repeat=\"dirName in $ctrl.mediaService.dir_list\"> / {{dirName}} </span>\n    </h2>\n</div>");
  $templateCache.put("file/file.tpl.html", "<div class=\"icon\" ng-repeat=\"file in $ctrl.mediaService.files_data | orderBy: $ctrl.mediaService.order_files_by | filter:{name :$ctrl.mediaService.filter_files, inTrash: false}\" ng-click=\"$ctrl.mediaService.loadFile(file)\">\n    <img class=\"remove_dir\" src=\"img/close.png\" ng-click=\"$ctrl.deleteFile(file, $event);\">\n    <img class=\"img_picture\"  ng-src=\"{{file.icon}}\">\n\n    <div class=\"nazov_suboru\">{{file.name}}</div>\n    <div class=\"typ_suboru\">\n        <p>{{file.niceType}}</p>\n    </div>\n    <div class=\"velkost_suboru\">\n        <p>{{file.size}}</p>\n    </div>\n</div>");
  $templateCache.put("filter-panel/filter.panel.tpl.html", "<div class=\"filter-panel\">\n    <div class=\"filter\">\n        <upload-file></upload-file>\n        <p>Hladat:\n            <input ng-model=\"$ctrl.mediaService.filter_files\"/>\n        </p>\n        <p>Zoradit podla:\n            <select ng-model=\"$ctrl.mediaService.order_files_by\">\n                <option value=\"name\">Nazvu</option>\n                <option value=\"size\">Velkosti</option>\n                <option value=\"created_time\">Datumu vytvorenia</option>\n                <option value=\"niceType\">Typu suboru</option>\n            </select>\n        </p>\n    </div>\n</div>");
  $templateCache.put("media-browser/media.browser.tpl.html", "<div id=\"MediaBrowser\">\n    <div id=\"header1\">\n        <img ng-click=\"$ctrl.mediaService.toggleLeftMenu()\" id=\"menu_icon\" src=\"img/menu.png\" style=\"width:50px; height:100%;float:left; align-self: flex-start;\">\n        <h1>Media Browser</h1>\n        <img id=\"zavri_dialog\"\n             ng-click=\"$ctrl.mediaService.toggleDialog()\"\n             src=\"img/close.png\" style=\"width:40px; height:100%;float:right; align-self: flex-end;\">\n    </div>\n\n    <application-root></application-root>\n</div>");
  $templateCache.put("left-menu/left.menu.tpl.html", "<div id=\"left_menu\">\n    <ul>\n        <li ng-show=\"$ctrl.mediaService.dir\" ng-click=\"$ctrl.mediaService.loadDir($ctrl.mediaService.dir, true)\" style=\"font-weight: bold; font-size: 18px;\">Nadradeny adresar</li>\n        <li ng-repeat=\"dir in $ctrl.mediaService.dirs_data | filter: {name :$ctrl.mediaService.filter_files, inTrash: false}\" ng-click=\"$ctrl.mediaService.loadDir(dir)\" >{{dir.name}}</li>\n    </ul>\n    <div class=\"alert\" ng-class=\"alert.type\" ng-repeat=\"alert in $ctrl.alertsService.alerts track by $index\">{{alert.message}}</div>\n    <div class=\"loader\" ng-if=\"$ctrl.loadingService.loadingStart\">Loading...</div>\n\n    <div ng-if=\"$ctrl.trashService.trashCounts\" ng-click=\"$ctrl.trashService.clearTrash()\">Trash has: {{$ctrl.trashService.trashCounts}} garbage items</div>\n</div>");
  $templateCache.put("stvorec/stvorec.tpl.html", "<div id=\"stvorec\">\n    <img style=\"max-height: 25vw; max-width: 25vw;\" ng-if=\"$ctrl.isImage\" ng-src=\"{{$ctrl.mediaService.selectedFile}}\">\n</div>");
  $templateCache.put("upload-file/upload.file.tpl.html", "<div class=\"pull-right drop-img-zone\">\n    <input id=\"dragging\"\n           class=\"hidden\"\n           type=\"file\"\n           accept=\"{{$ctrl.fileAccept}}\"\n           multiple/>\n    <div>\n        <span>Upload suboru: </span>\n        <a class=\"cursor-pointer upload-btn\" ng-click=\"$ctrl.fireUploadEvent()\">\n            <span class=\"display-block\" translate>Upload</span>\n        </a>\n    </div>\n    <p>Novy adresar:\n        <input ng-model=\"$ctrl.mediaService.new_dir\"/>\n        <button ng-click=\"$ctrl.createNewDir()\">CREATE</button>\n    </p>\n</div>");
  $templateCache.put("uvod/uvod.tpl.html", "<div>\n    <div id=\"uvod\"\n         ng-class=\"{\'halfview\': $ctrl.mediaService.showDialog}\"\n         ng-click=\"$ctrl.mediaService.closeDialog()\">\n        <stvorec></stvorec>\n\n        <button id=\"zobraz_dialog\"\n                ng-click=\"$ctrl.mediaService.toggleDialog(); $event.stopPropagation();\"\n                style=\"margin-left:auto;margin-right:auto;display:block; background-color:#46494a;color: white; padding: 5px 5px 5px 5px\">ZOBRAZIT DIALOG\n        </button>\n    </div>\n\n\n    <media-browser ng-if=\"$ctrl.mediaService.showDialog\"></media-browser>\n</div>");
}]);

},{}]},{},["/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app.js"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBwLmpzIiwic3JjL2FwcC9hbGVydHMuc2VydmljZS5qcyIsInNyYy9hcHAvY29tcG9uZW50cy9hcHBsaWNhdGlvbi1yb290L2FwcGxpY2F0aW9uLnJvb3QuanMiLCJzcmMvYXBwL2NvbXBvbmVudHMvYnJlYWRjcnVtYnMvYnJlYWRjcnVtYnMuanMiLCJzcmMvYXBwL2NvbXBvbmVudHMvZGlyLWJhc2UvZGlyLmJhc2UuanMiLCJzcmMvYXBwL2NvbXBvbmVudHMvZGlyLXJldHVybi9kaXIucmV0dXJuLmpzIiwic3JjL2FwcC9jb21wb25lbnRzL2ZpbGUvZmlsZS5qcyIsInNyYy9hcHAvY29tcG9uZW50cy9maWx0ZXItcGFuZWwvZmlsdGVyLnBhbmVsLmpzIiwic3JjL2FwcC9jb21wb25lbnRzL2xlZnQtbWVudS9sZWZ0Lm1lbnUuanMiLCJzcmMvYXBwL2NvbXBvbmVudHMvbWVkaWEtYnJvd3Nlci9tZWRpYS5icm93c2VyLmpzIiwic3JjL2FwcC9jb21wb25lbnRzL3N0dm9yZWMvc3R2b3JlYy5qcyIsInNyYy9hcHAvY29tcG9uZW50cy91cGxvYWQtZmlsZS91cGxvYWQuZmlsZS5qcyIsInNyYy9hcHAvY29tcG9uZW50cy91dm9kL3V2b2QuanMiLCJzcmMvYXBwL2xvYWRpbmcuc2VydmljZS5qcyIsInNyYy9hcHAvbWVkaWEuc2VydmljZS5qcyIsInNyYy9hcHAvdHJhc2guc2VydmljZS5qcyIsInNyYy90cGwvaW5kZXguanMiLCJzcmMvdHBsL3RlbXBsYXRlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLFFBQVEsTUFB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bkIsQ0FEaEI7Ozs7V0FwQ0Q7Ozs7Ozs7O0FDRnJCLFFBQVEsYUFBUjtBQUNBLE9BQU8sT0FBUCxHQUFpQixXQUFqQjs7Ozs7QUNEQSxRQUFRLE1BQVIsQ0FBZSxXQUFmLEVBQTRCLEVBQTVCLEVBQWdDLEdBQWhDLENBQW9DLENBQUMsZ0JBQUQsRUFBbUIsVUFBUyxjQUFULEVBQXlCO0FBQUMsaUJBQWUsR0FBZixDQUFtQiw0Q0FBbkIsRUFBZ0UsK2NBQWhFLEVBQUQ7QUFDaEYsaUJBQWUsR0FBZixDQUFtQiw0QkFBbkIsRUFBZ0Qsb1pBQWhELEVBRGdGO0FBRWhGLGlCQUFlLEdBQWYsQ0FBbUIsZ0NBQW5CLEVBQW9ELHNQQUFwRCxFQUZnRjtBQUdoRixpQkFBZSxHQUFmLENBQW1CLGtDQUFuQixFQUFzRCx5S0FBdEQsRUFIZ0Y7QUFJaEYsaUJBQWUsR0FBZixDQUFtQixvQkFBbkIsRUFBd0MsZ21CQUF4QyxFQUpnRjtBQUtoRixpQkFBZSxHQUFmLENBQW1CLG9DQUFuQixFQUF3RCwwbEJBQXhELEVBTGdGO0FBTWhGLGlCQUFlLEdBQWYsQ0FBbUIsc0NBQW5CLEVBQTBELDJnQkFBMUQsRUFOZ0Y7QUFPaEYsaUJBQWUsR0FBZixDQUFtQiw4QkFBbkIsRUFBa0QseXpCQUFsRCxFQVBnRjtBQVFoRixpQkFBZSxHQUFmLENBQW1CLDBCQUFuQixFQUE4Qyw2SkFBOUMsRUFSZ0Y7QUFTaEYsaUJBQWUsR0FBZixDQUFtQixrQ0FBbkIsRUFBc0QseWtCQUF0RCxFQVRnRjtBQVVoRixpQkFBZSxHQUFmLENBQW1CLG9CQUFuQixFQUF3QyxnbEJBQXhDLEVBVmdGO0NBQXpCLENBQXZEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL3RwbC9pbmRleCc7XG5pbXBvcnQgdXZvZCBmcm9tICcuL2FwcC9jb21wb25lbnRzL3V2b2QvdXZvZCc7XG5pbXBvcnQgbWVkaWFCcm93c2VyIGZyb20gJy4vYXBwL2NvbXBvbmVudHMvbWVkaWEtYnJvd3Nlci9tZWRpYS5icm93c2VyJztcbmltcG9ydCByb290IGZyb20gJy4vYXBwL2NvbXBvbmVudHMvYXBwbGljYXRpb24tcm9vdC9hcHBsaWNhdGlvbi5yb290JztcbmltcG9ydCBsZWZ0TWVudSBmcm9tICcuL2FwcC9jb21wb25lbnRzL2xlZnQtbWVudS9sZWZ0Lm1lbnUnO1xuaW1wb3J0IGRpclJldHVybiBmcm9tICcuL2FwcC9jb21wb25lbnRzL2Rpci1yZXR1cm4vZGlyLnJldHVybic7XG5pbXBvcnQgZGlyQmFzZSBmcm9tICcuL2FwcC9jb21wb25lbnRzL2Rpci1iYXNlL2Rpci5iYXNlJztcbmltcG9ydCBmaWxlIGZyb20gJy4vYXBwL2NvbXBvbmVudHMvZmlsZS9maWxlJztcbmltcG9ydCBzdHZvcmVjIGZyb20gJy4vYXBwL2NvbXBvbmVudHMvc3R2b3JlYy9zdHZvcmVjJztcbmltcG9ydCBicmVhZGNydW1icyBmcm9tICcuL2FwcC9jb21wb25lbnRzL2JyZWFkY3J1bWJzL2JyZWFkY3J1bWJzJztcbmltcG9ydCBmaWx0ZXJQYW5lbCBmcm9tICcuL2FwcC9jb21wb25lbnRzL2ZpbHRlci1wYW5lbC9maWx0ZXIucGFuZWwnO1xuaW1wb3J0IHVwbG9hZEZpbGUgZnJvbSAnLi9hcHAvY29tcG9uZW50cy91cGxvYWQtZmlsZS91cGxvYWQuZmlsZSc7XG5cbmltcG9ydCBNZWRpYVNlcnZpY2UgZnJvbSAnLi9hcHAvbWVkaWEuc2VydmljZSc7XG5pbXBvcnQgQWxlcnRzU2VydmljZSBmcm9tICcuL2FwcC9hbGVydHMuc2VydmljZSc7XG5pbXBvcnQgTG9hZGluZ1NlcnZpY2UgZnJvbSAnLi9hcHAvbG9hZGluZy5zZXJ2aWNlJztcbmltcG9ydCBUcmFzaFNlcnZpY2UgZnJvbSAnLi9hcHAvdHJhc2guc2VydmljZSc7XG5cbmFuZ3VsYXIubW9kdWxlKCdicm93c2VyJywgW3RlbXBsYXRlXSlcbiAgICAuY29tcG9uZW50KCd1dm9kJywgdXZvZClcbiAgICAuY29tcG9uZW50KCdtZWRpYUJyb3dzZXInLCBtZWRpYUJyb3dzZXIpXG4gICAgLmNvbXBvbmVudCgnYXBwbGljYXRpb25Sb290Jywgcm9vdClcbiAgICAuY29tcG9uZW50KCdsZWZ0TWVudScsIGxlZnRNZW51KVxuICAgIC5jb21wb25lbnQoJ2RpclJldHVybicsIGRpclJldHVybilcbiAgICAuY29tcG9uZW50KCdkaXJCYXNlJywgZGlyQmFzZSlcbiAgICAuY29tcG9uZW50KCdmaWxlJywgZmlsZSlcbiAgICAuY29tcG9uZW50KCdzdHZvcmVjJywgc3R2b3JlYylcbiAgICAuY29tcG9uZW50KCdicmVhZGNydW1icycsIGJyZWFkY3J1bWJzKVxuICAgIC5jb21wb25lbnQoJ2ZpbHRlclBhbmVsJywgZmlsdGVyUGFuZWwpXG4gICAgLmNvbXBvbmVudCgndXBsb2FkRmlsZScsIHVwbG9hZEZpbGUpXG5cbiAgICAuc2VydmljZSgnbWVkaWFTZXJ2aWNlJywgTWVkaWFTZXJ2aWNlKVxuICAgIC5zZXJ2aWNlKCdhbGVydHNTZXJ2aWNlJywgQWxlcnRzU2VydmljZSlcbiAgICAuc2VydmljZSgnbG9hZGluZ1NlcnZpY2UnLCBMb2FkaW5nU2VydmljZSlcbiAgICAuc2VydmljZSgndHJhc2hTZXJ2aWNlJywgVHJhc2hTZXJ2aWNlKVxuOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFsZXJ0c1NlcnZpY2Uge1xuXG4gICAgLy8gQG5nSW5qZWN0XG4gICAgY29uc3RydWN0b3IoJHRpbWVvdXQpIHtcbiAgICAgICAgdGhpcy4kdGltZW91dCA9ICR0aW1lb3V0O1xuICAgICAgICB0aGlzLmFsZXJ0cyA9IFtdO1xuICAgIH1cblxuICAgIGFkZEFsZXJ0KG1lc3NhZ2UgPSAnQWN0aW9uIGRvbmUnLCB0eXBlID0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgIHRoaXMuYWxlcnRzLnB1c2goe1xuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICAgICAgICAgIHR5cGU6IHR5cGVcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuJHRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hbGVydHMuc2hpZnQoKTtcbiAgICAgICAgfSwgNTAwMCk7XG4gICAgfVxufSIsImNsYXNzIEFwcGxpY2F0aW9uUm9vdHtcblxuICAgIC8vIEBuZ0luamVjdFxuICAgIGNvbnN0cnVjdG9yKCRodHRwLCBtZWRpYVNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xuICAgICAgICB0aGlzLm1lZGlhU2VydmljZSA9IG1lZGlhU2VydmljZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBjb250cm9sbGVyOiBBcHBsaWNhdGlvblJvb3QsXG4gICAgdGVtcGxhdGVVcmw6ICdhcHBsaWNhdGlvbi1yb290L2FwcGxpY2F0aW9uLnJvb3QudHBsLmh0bWwnXG59OyIsImNsYXNzIEJyZWFkY3J1bWJzIHtcblxuICAgIC8vIEBuZ0luamVjdFxuICAgIGNvbnN0cnVjdG9yKCRodHRwLCBtZWRpYVNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xuICAgICAgICB0aGlzLm1lZGlhU2VydmljZSA9IG1lZGlhU2VydmljZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBjb250cm9sbGVyOiBCcmVhZGNydW1icyxcbiAgICB0ZW1wbGF0ZVVybDogJ2JyZWFkY3J1bWJzL2JyZWFkY3J1bWJzLnRwbC5odG1sJ1xufSIsImNsYXNzIERpckJhc2Uge1xuXG4gICAgLy8gQG5nSW5qZWN0XG4gICAgY29uc3RydWN0b3IoJGh0dHAsIG1lZGlhU2VydmljZSkge1xuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gICAgICAgIHRoaXMubWVkaWFTZXJ2aWNlID0gbWVkaWFTZXJ2aWNlO1xuICAgIH1cblxuICAgIGRlbGV0ZURpcihkaXIsICRldmVudCkge1xuICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRoaXMubWVkaWFTZXJ2aWNlLmRlbGV0ZURpcihkaXIpO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY29udHJvbGxlcjogRGlyQmFzZSxcbiAgICB0ZW1wbGF0ZVVybDogJ2Rpci1iYXNlL2Rpci5iYXNlLnRwbC5odG1sJ1xufSIsImNsYXNzIERpclJldHVybiB7XG5cbiAgICAvLyBAbmdJbmplY3RcbiAgICBjb25zdHJ1Y3RvcigkaHR0cCwgbWVkaWFTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcbiAgICAgICAgdGhpcy5tZWRpYVNlcnZpY2UgPSBtZWRpYVNlcnZpY2U7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY29udHJvbGxlcjogRGlyUmV0dXJuLFxuICAgIHRlbXBsYXRlVXJsOiAnZGlyLXJldHVybi9kaXIucmV0dXJuLnRwbC5odG1sJ1xufSIsImNsYXNzIEZpbGUge1xuXG4gICAgLy8gQG5nSW5qZWN0XG4gICAgY29uc3RydWN0b3IoJGh0dHAsIG1lZGlhU2VydmljZSkge1xuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gICAgICAgIHRoaXMubWVkaWFTZXJ2aWNlID0gbWVkaWFTZXJ2aWNlO1xuICAgIH1cbiAgICBkZWxldGVGaWxlKGZpbGUsICRldmVudCkge1xuICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRoaXMubWVkaWFTZXJ2aWNlLmRlbGV0ZUZpbGUoZmlsZSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdHtcbiAgICBjb250cm9sbGVyOiBGaWxlLFxuICAgIHRlbXBsYXRlVXJsOiAnZmlsZS9maWxlLnRwbC5odG1sJ1xufSIsImNsYXNzIEZpbHRlclBhbmVsIHtcblxuICAgIC8vIEBuZ0luamVjdFxuICAgIGNvbnN0cnVjdG9yKCRodHRwLCBtZWRpYVNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xuICAgICAgICB0aGlzLm1lZGlhU2VydmljZSA9IG1lZGlhU2VydmljZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBjb250cm9sbGVyOiBGaWx0ZXJQYW5lbCxcbiAgICB0ZW1wbGF0ZVVybDogJ2ZpbHRlci1wYW5lbC9maWx0ZXIucGFuZWwudHBsLmh0bWwnXG59OyIsImNsYXNzIExlZnRNZW51IHtcblxuICAgIC8vIEBuZ0luamVjdFxuICAgIGNvbnN0cnVjdG9yKCRodHRwLCBtZWRpYVNlcnZpY2UsIGFsZXJ0c1NlcnZpY2UsIGxvYWRpbmdTZXJ2aWNlLCB0cmFzaFNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xuICAgICAgICB0aGlzLm1lZGlhU2VydmljZSA9IG1lZGlhU2VydmljZTtcbiAgICAgICAgdGhpcy5hbGVydHNTZXJ2aWNlID0gYWxlcnRzU2VydmljZTtcbiAgICAgICAgdGhpcy5sb2FkaW5nU2VydmljZSA9IGxvYWRpbmdTZXJ2aWNlO1xuICAgICAgICB0aGlzLnRyYXNoU2VydmljZSA9IHRyYXNoU2VydmljZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBjb250cm9sbGVyOiBMZWZ0TWVudSxcbiAgICB0ZW1wbGF0ZVVybDogJ2xlZnQtbWVudS9sZWZ0Lm1lbnUudHBsLmh0bWwnXG59IiwiY2xhc3MgTWVkaWFCcm93c2VyIHtcblxuICAgIC8vIEBuZ0luamVjdFxuICAgIGNvbnN0cnVjdG9yKCRodHRwLCBtZWRpYVNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xuICAgICAgICB0aGlzLm1lZGlhU2VydmljZSA9IG1lZGlhU2VydmljZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBjb250cm9sbGVyOiBNZWRpYUJyb3dzZXIsXG4gICAgdGVtcGxhdGVVcmw6ICdtZWRpYS1icm93c2VyL21lZGlhLmJyb3dzZXIudHBsLmh0bWwnXG59OyIsImNsYXNzIFN0dm9yZWN7XG5cbiAgICAvLyBAbmdJbmplY3RcbiAgICBjb25zdHJ1Y3RvcigkaHR0cCwgbWVkaWFTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcbiAgICAgICAgdGhpcy5tZWRpYVNlcnZpY2UgPSBtZWRpYVNlcnZpY2U7XG4gICAgfVxuXG4gICAgZ2V0IGlzSW1hZ2UoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMubWVkaWFTZXJ2aWNlLnNlbGVjdGVkRmlsZSA/IHRydWUgOiBmYWxzZTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbnRyb2xsZXI6IFN0dm9yZWMsXG4gICAgdGVtcGxhdGVVcmw6ICdzdHZvcmVjL3N0dm9yZWMudHBsLmh0bWwnXG59IiwiY2xhc3MgVXBsb2FkRmlsZSB7XG5cbiAgICAvLyBAbmdJbmplY3RcbiAgICBjb25zdHJ1Y3RvcigkdGltZW91dCwgJGVsZW1lbnQsICR3aW5kb3csICRyb290U2NvcGUsIG1lZGlhU2VydmljZSkge1xuICAgICAgICB0aGlzLiR0aW1lb3V0ID0gJHRpbWVvdXQ7XG4gICAgICAgIHRoaXMuJGVsZW1lbnQgPSAkZWxlbWVudDtcbiAgICAgICAgdGhpcy4kd2luZG93ID0gJHdpbmRvdztcbiAgICAgICAgdGhpcy4kcm9vdFNjb3BlID0gJHJvb3RTY29wZTtcbiAgICAgICAgdGhpcy5tZWRpYVNlcnZpY2UgPSBtZWRpYVNlcnZpY2U7XG5cbiAgICAgICAgdGhpcy51cGxvYWRUaW1lb3V0ID0gbnVsbDtcblxuICAgICAgICB0aGlzLmxpc3QgPSBuZXcgU2V0KCk7XG5cbiAgICAgICAgLy8gZGVmYXVsdCB2YWx1ZXNcbiAgICAgICAgaWYgKCF0aGlzLmZpbGVBY2NlcHQpIHtcbiAgICAgICAgICAgIHRoaXMuZmlsZUFjY2VwdCA9ICcnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJG9uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5pbnB1dCA9IHRoaXMuJGVsZW1lbnQuZmluZChcImlucHV0XCIpWzBdO1xuXG4gICAgICAgIHRoaXMuaW5pdENsaWNrKCk7XG4gICAgICAgIHRoaXMuaW5pdEJpbmRzKHRoaXMuJGVsZW1lbnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXIgY2xpY2sgZXZlbnQgb24gdGhpcy5pbnB1dFxuICAgICAqXG4gICAgICovXG4gICAgZmlyZVVwbG9hZEV2ZW50KCkge1xuICAgICAgICBpZiAodGhpcy4kd2luZG93LkN1c3RvbUV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLmlucHV0LmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoXCJjbGlja1wiKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuY3JlYXRlRXZlbnQpIHtcbiAgICAgICAgICAgIGxldCBldiA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdIVE1MRXZlbnRzJyk7XG4gICAgICAgICAgICBldi5pbml0RXZlbnQoJ2NvbnRleHRtZW51JywgdHJ1ZSwgZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5pbnB1dC5kaXNwYXRjaEV2ZW50KGV2KTtcbiAgICAgICAgfSBlbHNlIHsgLy8gSW50ZXJuZXQgRXhwbG9yZXJcbiAgICAgICAgICAgIHRoaXMuaW5wdXQuZmlyZUV2ZW50KCdvbmNvbnRleHRtZW51Jyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgbGlzdGVuZXIgZm9yIGNoYW5nZSBvbiB0aGlzLmlucHV0XG4gICAgICpcbiAgICAgKi9cbiAgICBpbml0Q2xpY2soKSB7XG4gICAgICAgIHRoaXMuaW5wdXRcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZS50YXJnZXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgdGhpcy5pbnB1dFxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGxpc3QgPSBlLnRhcmdldC5maWxlcztcbiAgICAgICAgICAgICAgICBpZiAobGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVhcnJheUxpc3QobGlzdCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVkaWFTZXJ2aWNlLnVwbG9hZEZpbGUodGhpcy5saXN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBmYWxzZSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBJbml0IGJpbmRzIGZvciBEcmFnJkRyb3BcbiAgICAgKlxuICAgICAqL1xuICAgIGluaXRCaW5kcyhlbGVtZW50ID0gdGhpcy4kZWxlbWVudCkge1xuICAgICAgICB0aGlzLmRyb3BTaG93ID0gMDtcblxuICAgICAgICBlbGVtZW50LmJpbmQoXCJkcmFnb3ZlclwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMub25EcmFnT3ZlcihldmVudCwgZWxlbWVudCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vRHJhZ2dpbmcgZW5kcyBvbiB0aGUgb3ZlcmxheSwgd2hpY2ggdGFrZXMgdGhlIHdob2xlIHdpbmRvd1xuICAgICAgICBlbGVtZW50XG4gICAgICAgICAgICAuYmluZChcImRyYWdlbnRlclwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmRyb3BTaG93Kys7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmJpbmQoXCJkcmFnbGVhdmVcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5kcm9wU2hvdy0tO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRyb3BTaG93ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25EcmFnRW5kKGV2ZW50LCBlbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmJpbmQoXCJkcm9wXCIsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5kcm9wU2hvdyA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkRyYWdFbmQoZSwgZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgbGV0IGxpc3QgPSBlLmRhdGFUcmFuc2Zlci5maWxlcztcbiAgICAgICAgICAgICAgICB0aGlzLl9yZWFycmF5TGlzdChsaXN0KTtcbiAgICAgICAgICAgICAgICB0aGlzLm1lZGlhU2VydmljZS51cGxvYWRGaWxlKHRoaXMubGlzdCk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfcmVhcnJheUxpc3QobGlzdCkge1xuICAgICAgICB0aGlzLmxpc3QuY2xlYXIoKTtcbiAgICAgICAgZm9yIChsZXQgZmlsZUluZGV4IGluIGxpc3QpIHtcbiAgICAgICAgICAgIGlmICghaXNOYU4oZmlsZUluZGV4KSkge1xuICAgICAgICAgICAgICAgIHRoaXMubGlzdC5hZGQobGlzdC5pdGVtKGZpbGVJbmRleCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBBZGQgY2xhc3NlcyB3aGVuIGFuIGl0ZW0gaXMgZHJhZ2dlZCBvdmVyIHRoZSBkb2N1bWVudCBhbmQgd2hlblxuICAgICAqIHRoZSB1c2VyIGxlYXZlcyB0aGUgd2luZG93LCBjYW5jZWxzIHRoZSBkcmFnIG9yIGRyb3BzIHRoZSBpdGVtXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZVxuICAgICAqIEBwYXJhbSBlbGVtZW50XG4gICAgICovXG4gICAgb25EcmFnT3ZlcihlLCBlbGVtZW50ID0gdGhpcy4kZWxlbWVudCkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGVsZW1lbnQuYWRkQ2xhc3MoXCJkcmFnT3ZlclwiKTtcbiAgICB9O1xuXG4gICAgb25EcmFnRW5kKGUsIGVsZW1lbnQgPSB0aGlzLiRlbGVtZW50KSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVDbGFzcyhcImRyYWdPdmVyXCIpO1xuICAgIH07XG5cbiAgICBjcmVhdGVOZXdEaXIoKSB7XG4gICAgICAgIHRoaXMubWVkaWFTZXJ2aWNlLmNyZWF0ZU5ld0RpcigpO1xuICAgIH1cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICB0ZW1wbGF0ZVVybDogJ3VwbG9hZC1maWxlL3VwbG9hZC5maWxlLnRwbC5odG1sJyxcbiAgICBjb250cm9sbGVyOiBVcGxvYWRGaWxlXG59OyIsImNsYXNzIFV2b2Qge1xuXG4gICAgLy8gQG5nSW5qZWN0XG4gICAgY29uc3RydWN0b3IoJGh0dHAsIG1lZGlhU2VydmljZSkge1xuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gICAgICAgIHRoaXMubWVkaWFTZXJ2aWNlID0gbWVkaWFTZXJ2aWNlO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbnRyb2xsZXI6IFV2b2QsXG4gICAgdGVtcGxhdGVVcmw6ICd1dm9kL3V2b2QudHBsLmh0bWwnXG59OyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIExvYWRpbmdTZXJ2aWNlIHtcblxuICAgIC8vIEBuZ0luamVjdFxuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMubG9hZGluZ1N0YXJ0ID0gZmFsc2U7XG4gICAgfVxuICAgIFxuICAgIGRvTG9hZGluZygpe1xuICAgICAgICB0aGlzLmxvYWRpbmdTdGFydCA9IHRydWU7XG4gICAgfVxuICAgIFxuICAgIHN0b3BMb2FkaW5nKCl7XG4gICAgICAgIHRoaXMubG9hZGluZ1N0YXJ0ID0gZmFsc2U7XG4gICAgfVxuXG59IiwiY29uc3QgVFlQRVMgPSB7XG4gICAgJ1BORyc6IHtcbiAgICAgICAgbGlzdDogWydpbWFnZS9wbmcnXSxcbiAgICAgICAgaW1hZ2U6IHRydWVcbiAgICB9LFxuICAgICdKUEcnOiB7XG4gICAgICAgIGxpc3Q6IFsnaW1hZ2UvanBlZycsICdpbWFnZS9wanBlZyddLFxuICAgICAgICBpbWFnZTogdHJ1ZVxuICAgIH0sXG4gICAgJ0dJRic6IHtcbiAgICAgICAgbGlzdDogWydpbWFnZS9naWYnXSxcbiAgICAgICAgaW1hZ2U6IHRydWVcbiAgICB9LFxuICAgICdCTVAnOiB7XG4gICAgICAgIGxpc3Q6IFsnaW1hZ2UvYm1wJ10sXG4gICAgICAgIGltYWdlOiB0cnVlXG4gICAgfSxcbiAgICAnVElGRic6IFsnaW1hZ2UvaWVmJywgJ2ltYWdlL3RpZmYnXSxcbiAgICAnVFhUJzoge1xuICAgICAgICBsaXN0OiBbJ2FwcGxpY2F0aW9uL3BsYWluJywgJ3RleHQvcGxhaW4nXSxcbiAgICAgICAgaWNvbjogJ2ltZy90eHQucG5nJ1xuICAgIH0sXG4gICAgJ1BERic6IHtcbiAgICAgICAgbGlzdDogW1wiYXBwbGljYXRpb24vcGRmXCJdLFxuICAgICAgICBpY29uOiAnaW1nL3BkZi5wbmcnXG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVkaWFTZXJ2aWNlIHtcblxuICAgIC8vIEBuZ0luamVjdFxuICAgIGNvbnN0cnVjdG9yKCRodHRwLCAkd2luZG93LCAkdGltZW91dCwgYWxlcnRzU2VydmljZSwgbG9hZGluZ1NlcnZpY2UsIHRyYXNoU2VydmljZSkge1xuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gICAgICAgIHRoaXMuJHdpbmRvdyA9ICR3aW5kb3c7XG4gICAgICAgIHRoaXMuJHRpbWVvdXQgPSAkdGltZW91dDtcbiAgICAgICAgdGhpcy5hbGVydHNTZXJ2aWNlID0gYWxlcnRzU2VydmljZTtcbiAgICAgICAgdGhpcy5sb2FkaW5nU2VydmljZSA9IGxvYWRpbmdTZXJ2aWNlO1xuICAgICAgICB0aGlzLnRyYXNoU2VydmljZSA9IHRyYXNoU2VydmljZTtcblxuICAgICAgICB0cmFzaFNlcnZpY2UuZGlyUmVtb3ZlRnVuYyA9IChkaXIpID0+IHRoaXMuX2RlbGV0ZURpcihkaXIpO1xuICAgICAgICB0cmFzaFNlcnZpY2UuZmlsZVJlbW92ZUZ1bmMgPSAoZmlsZSkgPT4gdGhpcy5fZGVsZXRlRmlsZShmaWxlKTtcblxuICAgICAgICB0aGlzLmRpciA9IG51bGw7XG4gICAgICAgIHRoaXMuZGlyc19kYXRhID0gW107XG4gICAgICAgIHRoaXMuZmlsZXNfZGF0YSA9IFtdO1xuXG4gICAgICAgIHRoaXMuZGlyX2xpc3QgPSBbXTtcblxuICAgICAgICB0aGlzLnNlbGVjdGVkRmlsZSA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5zaG93RGlhbG9nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2hvd0xlZnRNZW51ID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLm9yZGVyX2ZpbGVzX2J5ID0gXCJcIjtcbiAgICAgICAgdGhpcy5maWx0ZXJfZmlsZXMgPSBcIlwiO1xuXG4gICAgICAgIHRoaXMubmV3X2RpciA9ICcnO1xuXG4gICAgICAgIHRoaXMubG9hZERpcigpO1xuXG4gICAgfVxuXG4gICAgbG9hZERpcihkaXJlY3RvcnkgPSBudWxsLCBpc1JldHVybiA9IGZhbHNlKSB7XG4gICAgICAgIC8vIG5hY2l0YXQgbG9hZGluZyBzZXJpdnVzIGEgc3ByYXZpdCBsb2FkaW5nIHN0YXJ0XG4gICAgICAgIHRoaXMubG9hZGluZ1NlcnZpY2UuZG9Mb2FkaW5nKCk7XG5cbiAgICAgICAgbGV0IHVybEFkcmVzcyA9ICcnO1xuICAgICAgICBpZiAoZGlyZWN0b3J5KSB7XG4gICAgICAgICAgICB1cmxBZHJlc3MgPSBkaXJlY3RvcnkubG9jYXRpb24gKyAnLycgKyBkaXJlY3RvcnkubmFtZTtcblxuICAgICAgICAgICAgaWYgKGlzUmV0dXJuKSB7XG4gICAgICAgICAgICAgICAgdXJsQWRyZXNzID0gZGlyZWN0b3J5LmxvY2F0aW9uO1xuICAgICAgICAgICAgICAgIHRoaXMuZGlyX2xpc3QucG9wKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlyX2xpc3QucHVzaChkaXJlY3RvcnkubmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiRodHRwLmdldChgaHR0cDovL21lZGlhYnJvd3Nlci5iYXJ0LnNrL2RpciR7dXJsQWRyZXNzfWApXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpciA9IHJlc3BvbnNlLmRhdGEuZGlyO1xuICAgICAgICAgICAgICAgIHRoaXMuZGlyc19kYXRhID0gW107XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgZGlyIG9mIHJlc3BvbnNlLmRhdGEuZGlycykge1xuICAgICAgICAgICAgICAgICAgICBkaXIuaW5UcmFzaCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpcnNfZGF0YS5wdXNoKGRpcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuZGlyc19kYXRhID0gcmVzcG9uc2UuZGF0YS5kaXJzO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5maWxlc19kYXRhID0gW107XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgZmlsZSBvZiByZXNwb25zZS5kYXRhLmZpbGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZXNfZGF0YS5wdXNoKG5ldyBGaWxlKGZpbGUpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBtZXNzID0gZXJyb3IuZGF0YS5jb2RlID8gZXJyb3IuZGF0YS5kZXNjcmlwdGlvbiA6IFwiVnlza3l0bGEgc2EgY2h5YmEuXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydHNTZXJ2aWNlLmFkZEFsZXJ0KG1lc3MsICdlcnJvcicpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmdTZXJ2aWNlLnN0b3BMb2FkaW5nKCk7XG4gICAgICAgICAgICAgICAgLy8gdG9kbyB1cm9iIGxvYWRpbiBzdG9wXG4gICAgICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgbG9hZEZpbGUoZmlsZURpcmVjdG9yeSA9IG51bGwpIHtcbiAgICAgICAgaWYgKGZpbGVEaXJlY3RvcnkudGh1bWJfbGluaykge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEZpbGUgPSBmaWxlRGlyZWN0b3J5LmRvd25sb2FkX2xpbms7XG4gICAgICAgICAgICB0aGlzLnNob3dEaWFsb2cgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuJHdpbmRvdy5vcGVuKGZpbGVEaXJlY3RvcnkuZG93bmxvYWRfbGluaywgJ19ibGFuaycpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHVwbG9hZEZpbGUoZmlsZXNTZXQpIHtcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBmaWxlc1NldCkge1xuICAgICAgICAgICAgdGhpcy5fdXBsb2FkRmlsZShpdGVtKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF91cGxvYWRGaWxlKGZpbGUpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nU2VydmljZS5kb0xvYWRpbmcoKTtcblxuICAgICAgICB2YXIgbG9jYXRpb24gPSAnLyc7XG4gICAgICAgIGlmICh0aGlzLmRpcikge1xuICAgICAgICAgICAgbG9jYXRpb24gPSB0aGlzLmRpci5sb2NhdGlvbiArICcvJyArIHRoaXMuZGlyLm5hbWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiZmlsZVwiLCBmaWxlKTtcblxuICAgICAgICB0aGlzLiRodHRwKHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBkYXRhOiBmb3JtRGF0YSxcbiAgICAgICAgICAgICAgICB1cmw6IGBodHRwOi8vbWVkaWFicm93c2VyLmJhcnQuc2svbWVkaWEtYnJvd3Nlci9maWxlJHtsb2NhdGlvbn1gLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsnQ29udGVudC1UeXBlJzogdW5kZWZpbmVkfSxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1SZXF1ZXN0OiBhbmd1bGFyLmlkZW50aXR5XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGVzX2RhdGEucHVzaChuZXcgRmlsZShyZXN1bHQuZGF0YSkpO1xuICAgICAgICAgICAgICAgIGxldCBtZXNzID0gcmVzdWx0LmRhdGEuY29kZSA/IHJlc3VsdC5kYXRhLmRlc2NyaXB0aW9uIDogXCJTdWJvciB1c3Blc25lIG5haHJhbnkuXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydHNTZXJ2aWNlLmFkZEFsZXJ0KG1lc3MpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgbWVzcyA9IGVycm9yLmRhdGEuY29kZSA/IGVycm9yLmRhdGEuZGVzY3JpcHRpb24gOiBcIlZ5c2t5dGxhIHNhIGNoeWJhLlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRzU2VydmljZS5hZGRBbGVydChtZXNzLCAnZXJyb3InKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nU2VydmljZS5zdG9wTG9hZGluZygpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY3JlYXRlTmV3RGlyKCkge1xuICAgICAgICB0aGlzLmxvYWRpbmdTZXJ2aWNlLmRvTG9hZGluZygpO1xuXG4gICAgICAgIHZhciBsb2NhdGlvbiA9ICcvJztcbiAgICAgICAgaWYgKHRoaXMuZGlyKSB7XG4gICAgICAgICAgICBsb2NhdGlvbiA9IHRoaXMuZGlyLmxvY2F0aW9uICsgJy8nICsgdGhpcy5kaXIubmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJGh0dHAoe1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogdGhpcy5uZXdfZGlyLFxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbjogbG9jYXRpb25cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHVybDogYGh0dHA6Ly9tZWRpYWJyb3dzZXIuYmFydC5zay9tZWRpYS1icm93c2VyL2RpcmBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlyc19kYXRhLnB1c2gocmVzdWx0LmRhdGEpO1xuICAgICAgICAgICAgICAgIGxldCBtZXNzID0gcmVzdWx0LmRhdGEuY29kZSA/IHJlc3VsdC5kYXRhLmRlc2NyaXB0aW9uIDogXCJQcmllY2lub2sgdXNwZXNuZSB2eXR2b3JlbnkuXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydHNTZXJ2aWNlLmFkZEFsZXJ0KG1lc3MpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgbWVzcyA9IGVycm9yLmRhdGEuY29kZSA/IGVycm9yLmRhdGEuZGVzY3JpcHRpb24gOiBcIlZ5c2t5dGxhIHNhIGNoeWJhLlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRzU2VydmljZS5hZGRBbGVydChtZXNzLCAnZXJyb3InKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nU2VydmljZS5zdG9wTG9hZGluZygpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5uZXdfZGlyID0gXCJcIjtcbiAgICB9XG5cbiAgICBkZWxldGVEaXIoZGlyKSB7XG4gICAgICAgIGRpci5pblRyYXNoID0gdHJ1ZTtcbiAgICAgICAgdGhpcy50cmFzaFNlcnZpY2UuYWRkVG9UcmFzaChkaXIpO1xuICAgIH1cblxuICAgIF9kZWxldGVEaXIoZGlyKSB7XG4gICAgICAgIHRoaXMubG9hZGluZ1NlcnZpY2UuZG9Mb2FkaW5nKCk7XG5cbiAgICAgICAgdGhpcy4kaHR0cCh7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgICAgICAgICAgICB1cmw6IGBodHRwOi8vbWVkaWFicm93c2VyLmJhcnQuc2svbWVkaWEtYnJvd3Nlci9kaXIke2Rpci5sb2NhdGlvbn0vJHtkaXIubmFtZX1gXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmRpcnNfZGF0YS5pbmRleE9mKGRpcik7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXJzX2RhdGEuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IG1lc3MgPSByZXN1bHQuZGF0YS5jb2RlID8gcmVzdWx0LmRhdGEuZGVzY3JpcHRpb24gOiBcIlByaWVjaW5vayB1c3Blc25lIHptYXphbnkuXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydHNTZXJ2aWNlLmFkZEFsZXJ0KG1lc3MpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgbWVzcyA9IGVycm9yLmRhdGEuY29kZSA/IGVycm9yLmRhdGEuZGVzY3JpcHRpb24gOiBcIlZ5c2t5dGxhIHNhIGNoeWJhLlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRzU2VydmljZS5hZGRBbGVydChtZXNzLCAnZXJyb3InKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nU2VydmljZS5zdG9wTG9hZGluZygpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZGVsZXRlRmlsZShmaWxlKXtcbiAgICAgICAgZmlsZS5pblRyYXNoID0gdHJ1ZTtcbiAgICAgICAgdGhpcy50cmFzaFNlcnZpY2UuYWRkVG9UcmFzaChmaWxlKTtcbiAgICB9XG5cbiAgICBfZGVsZXRlRmlsZShmaWxlKXtcbiAgICAgICAgdGhpcy5sb2FkaW5nU2VydmljZS5kb0xvYWRpbmcoKTtcblxuICAgICAgICB0aGlzLiRodHRwKHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICAgICAgICAgIHVybDogYGh0dHA6Ly9tZWRpYWJyb3dzZXIuYmFydC5zay9tZWRpYS1icm93c2VyL2ZpbGUke2ZpbGUubG9jYXRpb259LyR7ZmlsZS5uYW1lfWBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHRoaXMuZmlsZXNfZGF0YS5pbmRleE9mKGZpbGUpO1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZXNfZGF0YS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgbWVzcyA9IHJlc3VsdC5kYXRhLmNvZGUgPyByZXN1bHQuZGF0YS5kZXNjcmlwdGlvbiA6IFwiU3Vib3IgdXNwZXNuZSB6bWF6YW55LlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRzU2VydmljZS5hZGRBbGVydChtZXNzKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG1lc3MgPSBlcnJvci5kYXRhLmNvZGUgPyBlcnJvci5kYXRhLmRlc2NyaXB0aW9uIDogXCJWeXNreXRsYSBzYSBjaHliYS5cIjtcbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0c1NlcnZpY2UuYWRkQWxlcnQobWVzcywgJ2Vycm9yJyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ1NlcnZpY2Uuc3RvcExvYWRpbmcoKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHRvZ2dsZUxlZnRNZW51KCkge1xuICAgICAgICB0aGlzLnNob3dMZWZ0TWVudSA9ICF0aGlzLnNob3dMZWZ0TWVudTtcbiAgICB9XG5cbiAgICB0b2dnbGVEaWFsb2coKSB7XG4gICAgICAgIHRoaXMuc2hvd0RpYWxvZyA9ICF0aGlzLnNob3dEaWFsb2c7XG4gICAgfVxuXG4gICAgY2xvc2VEaWFsb2coKSB7XG4gICAgICAgIGlmICh0aGlzLnNob3dEaWFsb2cpXG4gICAgICAgICAgICB0aGlzLnNob3dEaWFsb2cgPSAhdGhpcy5zaG93RGlhbG9nO1xuICAgIH1cbn1cblxuXG5leHBvcnQgY2xhc3MgRmlsZSB7XG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgICAgICB0aGlzLmNyZWF0ZWRfdGltZSA9IG51bGw7XG4gICAgICAgIHRoaXMuZG93bmxvYWRfbGluayA9IG51bGw7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBudWxsO1xuICAgICAgICB0aGlzLm5hbWUgPSBudWxsO1xuICAgICAgICB0aGlzLnNpemUgPSBudWxsO1xuICAgICAgICB0aGlzLnRodW1iX2xpbmsgPSBudWxsO1xuICAgICAgICB0aGlzLnR5cGUgPSBudWxsO1xuICAgICAgICB0aGlzLnVwZGF0ZV90aW1lID0gbnVsbDtcblxuICAgICAgICB0aGlzLnJhd0ZpbGUgPSBudWxsO1xuXG4gICAgICAgIHRoaXMuaW5UcmFzaCA9IGZhbHNlO1xuXG4gICAgICAgIGFuZ3VsYXIubWVyZ2UodGhpcywgZGF0YSk7XG4gICAgfVxuXG4gICAgZ2V0VHlwZU5hbWUoZ2V0SWNvbiA9IGZhbHNlKSB7XG4gICAgICAgIGZvciAobGV0IHR5cGVOYW1lIGluIFRZUEVTKSB7XG4gICAgICAgICAgICBsZXQgdHlwZU9iaiA9IFRZUEVTW3R5cGVOYW1lXTtcbiAgICAgICAgICAgIGlmIChhbmd1bGFyLmlzRGVmaW5lZCh0eXBlT2JqLmxpc3QpKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgdHlwZSBvZiB0eXBlT2JqLmxpc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT0gdGhpcy50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2V0SWNvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbmd1bGFyLmlzRGVmaW5lZCh0eXBlT2JqLmltYWdlKSAmJiB0eXBlT2JqLmltYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRodW1iX2xpbms7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFuZ3VsYXIuaXNEZWZpbmVkKHR5cGVPYmouaWNvbikgPyB0eXBlT2JqLmljb24gOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVOYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZXhjaGFuZ2VSYXcoZmlsZSkge1xuICAgICAgICB0aGlzLmRvd25sb2FkX2xpbmsgPSBudWxsO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbnVsbDtcbiAgICAgICAgdGhpcy5uYW1lID0gZmlsZS5uYW1lO1xuICAgICAgICB0aGlzLnNpemUgPSBmaWxlLnNpemU7XG4gICAgICAgIHRoaXMudGh1bWJfbGluayA9IG51bGw7XG4gICAgICAgIHRoaXMudHlwZSA9IGZpbGUudHlwZTtcbiAgICAgICAgdGhpcy51cGRhdGVfdGltZSA9IG51bGw7XG4gICAgICAgIHRoaXMucmF3RmlsZSA9IGZpbGUucmF3RmlsZTtcbiAgICB9XG5cbiAgICBnZXQgbmljZVR5cGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFR5cGVOYW1lKCkgPyB0aGlzLmdldFR5cGVOYW1lKCkgOiAnYW55JztcbiAgICB9XG5cbiAgICBnZXQgaWNvbigpIHtcbiAgICAgICAgbGV0IGljb24gPSB0aGlzLmdldFR5cGVOYW1lKHRydWUpO1xuICAgICAgICByZXR1cm4gaWNvbiA/IGljb24gOiBcImltZy9wbGFpbi5wbmdcIlxuICAgIH1cblxuXG59IiwiaW1wb3J0IHtGaWxlfSBmcm9tICcuL21lZGlhLnNlcnZpY2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmFzaFNlcnZpY2Uge1xuXG4gICAgLy8gQG5nSW5qZWN0XG4gICAgY29uc3RydWN0b3IoJHRpbWVvdXQpIHtcbiAgICAgICAgdGhpcy4kdGltZW91dCA9ICR0aW1lb3V0O1xuICAgICAgICB0aGlzLmZpbGVMaXN0ID0gW107XG4gICAgICAgIHRoaXMuZGlyZWN0b3J5TGlzdCA9IFtdO1xuXG4gICAgICAgIHRoaXMuZGlyUmVtb3ZlRnVuYyA9IG51bGw7XG4gICAgICAgIHRoaXMuZmlsZVJlbW92ZUZ1bmMgPSBudWxsO1xuICAgIH1cblxuICAgIGFkZFRvVHJhc2gob2JqZWN0KSB7XG4gICAgICAgIGlmIChvYmplY3QgaW5zdGFuY2VvZiBGaWxlKSB7XG4gICAgICAgICAgICB0aGlzLmZpbGVMaXN0LnB1c2gob2JqZWN0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0b3J5TGlzdC5wdXNoKG9iamVjdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGVhclRyYXNoKCkge1xuICAgICAgICBpZiAoYW5ndWxhci5pc0Z1bmN0aW9uKHRoaXMuZGlyUmVtb3ZlRnVuYykpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGRpciBvZiB0aGlzLmRpcmVjdG9yeUxpc3QpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpclJlbW92ZUZ1bmMuY2FsbCh0aGlzLCBkaXIpO1xuICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0b3J5TGlzdC5zaGlmdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFuZ3VsYXIuaXNGdW5jdGlvbih0aGlzLmZpbGVSZW1vdmVGdW5jKSkge1xuICAgICAgICAgICAgZm9yIChsZXQgZmlsZSBvZiB0aGlzLmZpbGVMaXN0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5maWxlUmVtb3ZlRnVuYy5jYWxsKHRoaXMsIGZpbGUpO1xuICAgICAgICAgICAgICAgIHRoaXMuZmlsZUxpc3Quc2hpZnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCB0cmFzaENvdW50cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsZUxpc3QubGVuZ3RoICsgdGhpcy5kaXJlY3RvcnlMaXN0Lmxlbmd0aDtcbiAgICB9XG59IiwicmVxdWlyZSgnLi90ZW1wbGF0ZXMnKTtcbm1vZHVsZS5leHBvcnRzID0gJ3RlbXBsYXRlcyc7IiwiYW5ndWxhci5tb2R1bGUoXCJ0ZW1wbGF0ZXNcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkgeyR0ZW1wbGF0ZUNhY2hlLnB1dChcImFwcGxpY2F0aW9uLXJvb3QvYXBwbGljYXRpb24ucm9vdC50cGwuaHRtbFwiLFwiPGRpdiBpZD1cXFwib2tub1xcXCI+XFxuXFxuICAgIDxsZWZ0LW1lbnUgbmctaWY9XFxcIiRjdHJsLm1lZGlhU2VydmljZS5zaG93TGVmdE1lbnVcXFwiPjwvbGVmdC1tZW51PlxcblxcbiAgICA8ZGl2IGlkPVxcXCJvYnNhaFxcXCIgbmctY2xhc3M9XFxcIntcXCdmdWxsXFwnOiAhJGN0cmwubWVkaWFTZXJ2aWNlLnNob3dMZWZ0TWVudX1cXFwiPlxcbiAgICAgICAgPGJyZWFkY3J1bWJzPjwvYnJlYWRjcnVtYnM+XFxuICAgICAgICA8ZmlsdGVyLXBhbmVsPjwvZmlsdGVyLXBhbmVsPlxcblxcbiAgICAgICAgPGRpdiBzdHlsZT1cXFwibWFyZ2luLWxlZnQ6MjBweDsgbWFyZ2luLXJpZ2h0OiAzMHB4XFxcIj5cXG5cXG4gICAgICAgICAgICA8ZGlyLXJldHVybj48L2Rpci1yZXR1cm4+XFxuXFxuICAgICAgICAgICAgPGRpci1iYXNlPjwvZGlyLWJhc2U+XFxuXFxuICAgICAgICAgICAgPGZpbGU+PC9maWxlPlxcbiAgICAgICAgPC9kaXY+XFxuXFxuICAgIDwvZGl2PlxcblxcbjwvZGl2PlwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImRpci1iYXNlL2Rpci5iYXNlLnRwbC5odG1sXCIsXCI8ZGl2IGNsYXNzPVxcXCJpY29uXFxcIiBuZy1yZXBlYXQ9XFxcImRpciBpbiAkY3RybC5tZWRpYVNlcnZpY2UuZGlyc19kYXRhIHwgZmlsdGVyOiB7bmFtZSA6JGN0cmwubWVkaWFTZXJ2aWNlLmZpbHRlcl9maWxlcywgaW5UcmFzaDogZmFsc2V9XFxcIiBuZy1jbGljaz1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLmxvYWREaXIoZGlyKVxcXCI+XFxuXFxuICAgIDxpbWcgY2xhc3M9XFxcInJlbW92ZV9kaXJcXFwiIHNyYz1cXFwiaW1nL2Nsb3NlLnBuZ1xcXCIgIG5nLWNsaWNrPVxcXCIkY3RybC5kZWxldGVEaXIoZGlyLCAkZXZlbnQpO1xcXCIvPlxcblxcbiAgICA8aW1nIGNsYXNzPVxcXCJpbWdfaWNvblxcXCIgc3JjPVxcXCJpbWcvcHJpZWNpbm9rLnBuZ1xcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcIm5hem92X3N1Ym9ydVxcXCI+e3tkaXIubmFtZX19PC9kaXY+XFxuXFxuPC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiZGlyLXJldHVybi9kaXIucmV0dXJuLnRwbC5odG1sXCIsXCI8ZGl2IGNsYXNzPVxcXCJpY29uXFxcIiBuZy1zaG93PVxcXCIkY3RybC5tZWRpYVNlcnZpY2UuZGlyXFxcIiBuZy1jbGljaz1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLmxvYWREaXIoJGN0cmwubWVkaWFTZXJ2aWNlLmRpciwgdHJ1ZSlcXFwiPlxcbiAgICA8aW1nIGNsYXNzPVxcXCJpbWdfaWNvblxcXCIgc3JjPVxcXCJpbWcvYWRyZXNhci5wbmdcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJuYXpvdl9zdWJvcnVcXFwiPk5hZHJhZGVueSBhZHJlc2FyPC9kaXY+XFxuPC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiYnJlYWRjcnVtYnMvYnJlYWRjcnVtYnMudHBsLmh0bWxcIixcIjxkaXYgaWQ9XFxcImhlYWRlcjJcXFwiPlxcbiAgICA8aDI+XFxuICAgICAgICA8c3Bhbj5Ib21lPC9zcGFuPlxcbiAgICAgICAgPHNwYW4gbmctcmVwZWF0PVxcXCJkaXJOYW1lIGluICRjdHJsLm1lZGlhU2VydmljZS5kaXJfbGlzdFxcXCI+IC8ge3tkaXJOYW1lfX0gPC9zcGFuPlxcbiAgICA8L2gyPlxcbjwvZGl2PlwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImZpbGUvZmlsZS50cGwuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXFwiaWNvblxcXCIgbmctcmVwZWF0PVxcXCJmaWxlIGluICRjdHJsLm1lZGlhU2VydmljZS5maWxlc19kYXRhIHwgb3JkZXJCeTogJGN0cmwubWVkaWFTZXJ2aWNlLm9yZGVyX2ZpbGVzX2J5IHwgZmlsdGVyOntuYW1lIDokY3RybC5tZWRpYVNlcnZpY2UuZmlsdGVyX2ZpbGVzLCBpblRyYXNoOiBmYWxzZX1cXFwiIG5nLWNsaWNrPVxcXCIkY3RybC5tZWRpYVNlcnZpY2UubG9hZEZpbGUoZmlsZSlcXFwiPlxcbiAgICA8aW1nIGNsYXNzPVxcXCJyZW1vdmVfZGlyXFxcIiBzcmM9XFxcImltZy9jbG9zZS5wbmdcXFwiIG5nLWNsaWNrPVxcXCIkY3RybC5kZWxldGVGaWxlKGZpbGUsICRldmVudCk7XFxcIj5cXG4gICAgPGltZyBjbGFzcz1cXFwiaW1nX3BpY3R1cmVcXFwiICBuZy1zcmM9XFxcInt7ZmlsZS5pY29ufX1cXFwiPlxcblxcbiAgICA8ZGl2IGNsYXNzPVxcXCJuYXpvdl9zdWJvcnVcXFwiPnt7ZmlsZS5uYW1lfX08L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwidHlwX3N1Ym9ydVxcXCI+XFxuICAgICAgICA8cD57e2ZpbGUubmljZVR5cGV9fTwvcD5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcInZlbGtvc3Rfc3Vib3J1XFxcIj5cXG4gICAgICAgIDxwPnt7ZmlsZS5zaXplfX08L3A+XFxuICAgIDwvZGl2PlxcbjwvZGl2PlwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImZpbHRlci1wYW5lbC9maWx0ZXIucGFuZWwudHBsLmh0bWxcIixcIjxkaXYgY2xhc3M9XFxcImZpbHRlci1wYW5lbFxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZpbHRlclxcXCI+XFxuICAgICAgICA8dXBsb2FkLWZpbGU+PC91cGxvYWQtZmlsZT5cXG4gICAgICAgIDxwPkhsYWRhdDpcXG4gICAgICAgICAgICA8aW5wdXQgbmctbW9kZWw9XFxcIiRjdHJsLm1lZGlhU2VydmljZS5maWx0ZXJfZmlsZXNcXFwiLz5cXG4gICAgICAgIDwvcD5cXG4gICAgICAgIDxwPlpvcmFkaXQgcG9kbGE6XFxuICAgICAgICAgICAgPHNlbGVjdCBuZy1tb2RlbD1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLm9yZGVyX2ZpbGVzX2J5XFxcIj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwibmFtZVxcXCI+TmF6dnU8L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwic2l6ZVxcXCI+VmVsa29zdGk8L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiY3JlYXRlZF90aW1lXFxcIj5EYXR1bXUgdnl0dm9yZW5pYTwvb3B0aW9uPlxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJuaWNlVHlwZVxcXCI+VHlwdSBzdWJvcnU8L29wdGlvbj5cXG4gICAgICAgICAgICA8L3NlbGVjdD5cXG4gICAgICAgIDwvcD5cXG4gICAgPC9kaXY+XFxuPC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwibWVkaWEtYnJvd3Nlci9tZWRpYS5icm93c2VyLnRwbC5odG1sXCIsXCI8ZGl2IGlkPVxcXCJNZWRpYUJyb3dzZXJcXFwiPlxcbiAgICA8ZGl2IGlkPVxcXCJoZWFkZXIxXFxcIj5cXG4gICAgICAgIDxpbWcgbmctY2xpY2s9XFxcIiRjdHJsLm1lZGlhU2VydmljZS50b2dnbGVMZWZ0TWVudSgpXFxcIiBpZD1cXFwibWVudV9pY29uXFxcIiBzcmM9XFxcImltZy9tZW51LnBuZ1xcXCIgc3R5bGU9XFxcIndpZHRoOjUwcHg7IGhlaWdodDoxMDAlO2Zsb2F0OmxlZnQ7IGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxcIj5cXG4gICAgICAgIDxoMT5NZWRpYSBCcm93c2VyPC9oMT5cXG4gICAgICAgIDxpbWcgaWQ9XFxcInphdnJpX2RpYWxvZ1xcXCJcXG4gICAgICAgICAgICAgbmctY2xpY2s9XFxcIiRjdHJsLm1lZGlhU2VydmljZS50b2dnbGVEaWFsb2coKVxcXCJcXG4gICAgICAgICAgICAgc3JjPVxcXCJpbWcvY2xvc2UucG5nXFxcIiBzdHlsZT1cXFwid2lkdGg6NDBweDsgaGVpZ2h0OjEwMCU7ZmxvYXQ6cmlnaHQ7IGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcXCI+XFxuICAgIDwvZGl2PlxcblxcbiAgICA8YXBwbGljYXRpb24tcm9vdD48L2FwcGxpY2F0aW9uLXJvb3Q+XFxuPC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwibGVmdC1tZW51L2xlZnQubWVudS50cGwuaHRtbFwiLFwiPGRpdiBpZD1cXFwibGVmdF9tZW51XFxcIj5cXG4gICAgPHVsPlxcbiAgICAgICAgPGxpIG5nLXNob3c9XFxcIiRjdHJsLm1lZGlhU2VydmljZS5kaXJcXFwiIG5nLWNsaWNrPVxcXCIkY3RybC5tZWRpYVNlcnZpY2UubG9hZERpcigkY3RybC5tZWRpYVNlcnZpY2UuZGlyLCB0cnVlKVxcXCIgc3R5bGU9XFxcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE4cHg7XFxcIj5OYWRyYWRlbnkgYWRyZXNhcjwvbGk+XFxuICAgICAgICA8bGkgbmctcmVwZWF0PVxcXCJkaXIgaW4gJGN0cmwubWVkaWFTZXJ2aWNlLmRpcnNfZGF0YSB8IGZpbHRlcjoge25hbWUgOiRjdHJsLm1lZGlhU2VydmljZS5maWx0ZXJfZmlsZXMsIGluVHJhc2g6IGZhbHNlfVxcXCIgbmctY2xpY2s9XFxcIiRjdHJsLm1lZGlhU2VydmljZS5sb2FkRGlyKGRpcilcXFwiID57e2Rpci5uYW1lfX08L2xpPlxcbiAgICA8L3VsPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydFxcXCIgbmctY2xhc3M9XFxcImFsZXJ0LnR5cGVcXFwiIG5nLXJlcGVhdD1cXFwiYWxlcnQgaW4gJGN0cmwuYWxlcnRzU2VydmljZS5hbGVydHMgdHJhY2sgYnkgJGluZGV4XFxcIj57e2FsZXJ0Lm1lc3NhZ2V9fTwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJsb2FkZXJcXFwiIG5nLWlmPVxcXCIkY3RybC5sb2FkaW5nU2VydmljZS5sb2FkaW5nU3RhcnRcXFwiPkxvYWRpbmcuLi48L2Rpdj5cXG5cXG4gICAgPGRpdiBuZy1pZj1cXFwiJGN0cmwudHJhc2hTZXJ2aWNlLnRyYXNoQ291bnRzXFxcIiBuZy1jbGljaz1cXFwiJGN0cmwudHJhc2hTZXJ2aWNlLmNsZWFyVHJhc2goKVxcXCI+VHJhc2ggaGFzOiB7eyRjdHJsLnRyYXNoU2VydmljZS50cmFzaENvdW50c319IGdhcmJhZ2UgaXRlbXM8L2Rpdj5cXG48L2Rpdj5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJzdHZvcmVjL3N0dm9yZWMudHBsLmh0bWxcIixcIjxkaXYgaWQ9XFxcInN0dm9yZWNcXFwiPlxcbiAgICA8aW1nIHN0eWxlPVxcXCJtYXgtaGVpZ2h0OiAyNXZ3OyBtYXgtd2lkdGg6IDI1dnc7XFxcIiBuZy1pZj1cXFwiJGN0cmwuaXNJbWFnZVxcXCIgbmctc3JjPVxcXCJ7eyRjdHJsLm1lZGlhU2VydmljZS5zZWxlY3RlZEZpbGV9fVxcXCI+XFxuPC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwidXBsb2FkLWZpbGUvdXBsb2FkLmZpbGUudHBsLmh0bWxcIixcIjxkaXYgY2xhc3M9XFxcInB1bGwtcmlnaHQgZHJvcC1pbWctem9uZVxcXCI+XFxuICAgIDxpbnB1dCBpZD1cXFwiZHJhZ2dpbmdcXFwiXFxuICAgICAgICAgICBjbGFzcz1cXFwiaGlkZGVuXFxcIlxcbiAgICAgICAgICAgdHlwZT1cXFwiZmlsZVxcXCJcXG4gICAgICAgICAgIGFjY2VwdD1cXFwie3skY3RybC5maWxlQWNjZXB0fX1cXFwiXFxuICAgICAgICAgICBtdWx0aXBsZS8+XFxuICAgIDxkaXY+XFxuICAgICAgICA8c3Bhbj5VcGxvYWQgc3Vib3J1OiA8L3NwYW4+XFxuICAgICAgICA8YSBjbGFzcz1cXFwiY3Vyc29yLXBvaW50ZXIgdXBsb2FkLWJ0blxcXCIgbmctY2xpY2s9XFxcIiRjdHJsLmZpcmVVcGxvYWRFdmVudCgpXFxcIj5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZGlzcGxheS1ibG9ja1xcXCIgdHJhbnNsYXRlPlVwbG9hZDwvc3Bhbj5cXG4gICAgICAgIDwvYT5cXG4gICAgPC9kaXY+XFxuICAgIDxwPk5vdnkgYWRyZXNhcjpcXG4gICAgICAgIDxpbnB1dCBuZy1tb2RlbD1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLm5ld19kaXJcXFwiLz5cXG4gICAgICAgIDxidXR0b24gbmctY2xpY2s9XFxcIiRjdHJsLmNyZWF0ZU5ld0RpcigpXFxcIj5DUkVBVEU8L2J1dHRvbj5cXG4gICAgPC9wPlxcbjwvZGl2PlwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcInV2b2QvdXZvZC50cGwuaHRtbFwiLFwiPGRpdj5cXG4gICAgPGRpdiBpZD1cXFwidXZvZFxcXCJcXG4gICAgICAgICBuZy1jbGFzcz1cXFwie1xcJ2hhbGZ2aWV3XFwnOiAkY3RybC5tZWRpYVNlcnZpY2Uuc2hvd0RpYWxvZ31cXFwiXFxuICAgICAgICAgbmctY2xpY2s9XFxcIiRjdHJsLm1lZGlhU2VydmljZS5jbG9zZURpYWxvZygpXFxcIj5cXG4gICAgICAgIDxzdHZvcmVjPjwvc3R2b3JlYz5cXG5cXG4gICAgICAgIDxidXR0b24gaWQ9XFxcInpvYnJhel9kaWFsb2dcXFwiXFxuICAgICAgICAgICAgICAgIG5nLWNsaWNrPVxcXCIkY3RybC5tZWRpYVNlcnZpY2UudG9nZ2xlRGlhbG9nKCk7ICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcXFwiXFxuICAgICAgICAgICAgICAgIHN0eWxlPVxcXCJtYXJnaW4tbGVmdDphdXRvO21hcmdpbi1yaWdodDphdXRvO2Rpc3BsYXk6YmxvY2s7IGJhY2tncm91bmQtY29sb3I6IzQ2NDk0YTtjb2xvcjogd2hpdGU7IHBhZGRpbmc6IDVweCA1cHggNXB4IDVweFxcXCI+Wk9CUkFaSVQgRElBTE9HXFxuICAgICAgICA8L2J1dHRvbj5cXG4gICAgPC9kaXY+XFxuXFxuXFxuICAgIDxtZWRpYS1icm93c2VyIG5nLWlmPVxcXCIkY3RybC5tZWRpYVNlcnZpY2Uuc2hvd0RpYWxvZ1xcXCI+PC9tZWRpYS1icm93c2VyPlxcbjwvZGl2PlwiKTt9XSk7Il19
