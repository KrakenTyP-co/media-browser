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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

angular.module('browser', [_index2.default]).component('uvod', _uvod2.default).component('mediaBrowser', _media2.default).component('applicationRoot', _application2.default).component('leftMenu', _left2.default).component('dirReturn', _dir2.default).component('dirBase', _dir4.default).component('file', _file2.default).component('stvorec', _stvorec2.default).component('breadcrumbs', _breadcrumbs2.default).component('filterPanel', _filter2.default).component('uploadFile', _upload2.default).service('mediaService', _media4.default).service('alertsService', _alerts2.default).service('loadingService', _loading2.default);

},{"./app/alerts.service":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/alerts.service.js","./app/components/application-root/application.root":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/components/application-root/application.root.js","./app/components/breadcrumbs/breadcrumbs":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/components/breadcrumbs/breadcrumbs.js","./app/components/dir-base/dir.base":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/components/dir-base/dir.base.js","./app/components/dir-return/dir.return":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/components/dir-return/dir.return.js","./app/components/file/file":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/components/file/file.js","./app/components/filter-panel/filter.panel":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/components/filter-panel/filter.panel.js","./app/components/left-menu/left.menu":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/components/left-menu/left.menu.js","./app/components/media-browser/media.browser":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/components/media-browser/media.browser.js","./app/components/stvorec/stvorec":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/components/stvorec/stvorec.js","./app/components/upload-file/upload.file":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/components/upload-file/upload.file.js","./app/components/uvod/uvod":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/components/uvod/uvod.js","./app/loading.service":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/loading.service.js","./app/media.service":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/media.service.js","./tpl/index":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/tpl/index.js"}],"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/alerts.service.js":[function(require,module,exports){
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
function LeftMenu($http, mediaService, alertsService, loadingService) {
    _classCallCheck(this, LeftMenu);

    this.$http = $http;
    this.mediaService = mediaService;
    this.alertsService = alertsService;
    this.loadingService = loadingService;
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

    function MediaService($http, $window, $timeout, alertsService, loadingService) {
        _classCallCheck(this, MediaService);

        this.$http = $http;
        this.$window = $window;
        this.$timeout = $timeout;
        this.alertsService = alertsService;
        this.loadingService = loadingService;

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
            }).catch(function (error) {
                var mess = error.data.code ? error.data.description : "Vyskytla sa chyba.";
                _this.alertsService.addAlert(mess, 'error');
            }).finally(function () {
                _this.loadingService.stopLoading();
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
                _this2.files_data.push(new File(result.data));
                var mess = result.data.code ? result.data.description : "Subor uspesne nahrany.";
                _this2.alertsService.addAlert(mess);
            }).catch(function (error) {
                var mess = error.data.code ? error.data.description : "Vyskytla sa chyba.";
                _this2.alertsService.addAlert(mess, 'error');
            }).finally(function () {
                _this2.loadingService.stopLoading();
            });
        }
    }, {
        key: 'createNewDir',
        value: function createNewDir() {
            var _this3 = this;

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
                _this3.dirs_data.push(result.data);
                var mess = result.data.code ? result.data.description : "Priecinok uspesne vytvoreny.";
                _this3.alertsService.addAlert(mess);
            }).catch(function (error) {
                var mess = error.data.code ? error.data.description : "Vyskytla sa chyba.";
                _this3.alertsService.addAlert(mess, 'error');
            }).finally(function () {
                _this3.loadingService.stopLoading();
            });

            this.new_dir = "";
        }
    }, {
        key: 'deleteDir',
        value: function deleteDir(dir) {
            var _this4 = this;

            this.loadingService.doLoading();

            this.$http({
                method: 'DELETE',
                url: 'http://mediabrowser.bart.sk/media-browser/dir' + dir.location + '/' + dir.name
            }).then(function (result) {
                var index = _this4.dirs_data.indexOf(dir);
                if (index > -1) {
                    _this4.dirs_data.splice(index, 1);
                }
                var mess = result.data.code ? result.data.description : "Priecinok uspesne zmazany.";
                _this4.alertsService.addAlert(mess);
            }).catch(function (error) {
                var mess = error.data.code ? error.data.description : "Vyskytla sa chyba.";
                _this4.alertsService.addAlert(mess, 'error');
            }).finally(function () {
                _this4.loadingService.stopLoading();
            });
        }
    }, {
        key: 'deleteFile',
        value: function deleteFile(file) {
            var _this5 = this;

            this.loadingService.doLoading();

            this.$http({
                method: 'DELETE',
                url: 'http://mediabrowser.bart.sk/media-browser/file' + file.location + '/' + file.name
            }).then(function (result) {
                var index = _this5.files_data.indexOf(file);
                if (index > -1) {
                    _this5.files_data.splice(index, 1);
                }
                var mess = result.data.code ? result.data.description : "Subor uspesne zmazany.";
                _this5.alertsService.addAlert(mess);
            }).catch(function (error) {
                var mess = error.data.code ? error.data.description : "Vyskytla sa chyba.";
                _this5.alertsService.addAlert(mess, 'error');
            }).finally(function () {
                _this5.loadingService.stopLoading();
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
  $templateCache.put("dir-base/dir.base.tpl.html", "<div class=\"icon\" ng-repeat=\"dir in $ctrl.mediaService.dirs_data | filter: {name :$ctrl.mediaService.filter_files}\" ng-click=\"$ctrl.mediaService.loadDir(dir)\">\n\n    <img class=\"remove_dir\" src=\"img/close.png\"  ng-click=\"$ctrl.deleteDir(dir, $event);\"/>\n\n    <img class=\"img_icon\" src=\"img/priecinok.png\">\n    <div class=\"nazov_suboru\">{{dir.name}}</div>\n\n</div>");
  $templateCache.put("breadcrumbs/breadcrumbs.tpl.html", "<div id=\"header2\">\n    <h2>\n        <span>Home</span>\n        <span ng-repeat=\"dirName in $ctrl.mediaService.dir_list\"> / {{dirName}} </span>\n    </h2>\n</div>");
  $templateCache.put("file/file.tpl.html", "<div class=\"icon\" ng-repeat=\"file in $ctrl.mediaService.files_data | orderBy: $ctrl.mediaService.order_files_by | filter:{name :$ctrl.mediaService.filter_files}\" ng-click=\"$ctrl.mediaService.loadFile(file)\">\n    <img class=\"remove_dir\" src=\"img/close.png\" ng-click=\"$ctrl.deleteFile(file, $event);\">\n    <img class=\"img_picture\"  ng-src=\"{{file.icon}}\">\n\n    <div class=\"nazov_suboru\">{{file.name}}</div>\n    <div class=\"typ_suboru\">\n        <p>{{file.niceType}}</p>\n    </div>\n    <div class=\"velkost_suboru\">\n        <p>{{file.size}}</p>\n    </div>\n</div>");
  $templateCache.put("filter-panel/filter.panel.tpl.html", "<div class=\"filter-panel\">\n    <div class=\"filter\">\n        <upload-file></upload-file>\n        <p>Hladat:\n            <input ng-model=\"$ctrl.mediaService.filter_files\"/>\n        </p>\n        <p>Zoradit podla:\n            <select ng-model=\"$ctrl.mediaService.order_files_by\">\n                <option value=\"name\">Nazvu</option>\n                <option value=\"size\">Velkosti</option>\n                <option value=\"created_time\">Datumu vytvorenia</option>\n                <option value=\"niceType\">Typu suboru</option>\n            </select>\n        </p>\n    </div>\n</div>");
  $templateCache.put("left-menu/left.menu.tpl.html", "<div id=\"left_menu\">\n    <ul>\n        <li ng-show=\"$ctrl.mediaService.dir\" ng-click=\"$ctrl.mediaService.loadDir($ctrl.mediaService.dir, true)\" style=\"font-weight: bold; font-size: 18px;\">Nadradeny adresar</li>\n        <li ng-repeat=\"dir in $ctrl.mediaService.dirs_data\" ng-click=\"$ctrl.mediaService.loadDir(dir)\" >{{dir.name}}</li>\n    </ul>\n    <div class=\"alert\" ng-class=\"alert.type\" ng-repeat=\"alert in $ctrl.alertsService.alerts track by $index\">{{alert.message}}</div>\n    <div class=\"loader\" ng-if=\"$ctrl.loadingService.loadingStart\">Loading...</div>\n</div>");
  $templateCache.put("media-browser/media.browser.tpl.html", "<div id=\"MediaBrowser\">\n    <div id=\"header1\">\n        <img ng-click=\"$ctrl.mediaService.toggleLeftMenu()\" id=\"menu_icon\" src=\"img/menu.png\" style=\"width:50px; height:100%;float:left; align-self: flex-start;\">\n        <h1>Media Browser</h1>\n        <img id=\"zavri_dialog\"\n             ng-click=\"$ctrl.mediaService.toggleDialog()\"\n             src=\"img/close.png\" style=\"width:40px; height:100%;float:right; align-self: flex-end;\">\n    </div>\n\n    <application-root></application-root>\n</div>");
  $templateCache.put("stvorec/stvorec.tpl.html", "<div id=\"stvorec\">\n    <img style=\"max-height: 25vw; max-width: 25vw;\" ng-if=\"$ctrl.isImage\" ng-src=\"{{$ctrl.mediaService.selectedFile}}\">\n</div>");
  $templateCache.put("upload-file/upload.file.tpl.html", "<div class=\"pull-right drop-img-zone\">\n    <input id=\"dragging\"\n           class=\"hidden\"\n           type=\"file\"\n           accept=\"{{$ctrl.fileAccept}}\"\n           multiple/>\n    <div>\n        <span>Upload suboru: </span>\n        <a class=\"cursor-pointer upload-btn\" ng-click=\"$ctrl.fireUploadEvent()\">\n            <span class=\"display-block\" translate>Upload</span>\n        </a>\n    </div>\n    <p>Novy adresar:\n        <input ng-model=\"$ctrl.mediaService.new_dir\"/>\n        <button ng-click=\"$ctrl.createNewDir()\">CREATE</button>\n    </p>\n</div>");
  $templateCache.put("uvod/uvod.tpl.html", "<div>\n    <div id=\"uvod\"\n         ng-class=\"{\'halfview\': $ctrl.mediaService.showDialog}\"\n         ng-click=\"$ctrl.mediaService.closeDialog()\">\n        <stvorec></stvorec>\n\n        <button id=\"zobraz_dialog\"\n                ng-click=\"$ctrl.mediaService.toggleDialog(); $event.stopPropagation();\"\n                style=\"margin-left:auto;margin-right:auto;display:block; background-color:#46494a;color: white; padding: 5px 5px 5px 5px\">ZOBRAZIT DIALOG\n        </button>\n    </div>\n\n\n    <media-browser ng-if=\"$ctrl.mediaService.showDialog\"></media-browser>\n</div>");
}]);

},{}]},{},["/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app.js"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBwLmpzIiwic3JjL2FwcC9hbGVydHMuc2VydmljZS5qcyIsInNyYy9hcHAvY29tcG9uZW50cy9hcHBsaWNhdGlvbi1yb290L2FwcGxpY2F0aW9uLnJvb3QuanMiLCJzcmMvYXBwL2NvbXBvbmVudHMvYnJlYWRjcnVtYnMvYnJlYWRjcnVtYnMuanMiLCJzcmMvYXBwL2NvbXBvbmVudHMvZGlyLWJhc2UvZGlyLmJhc2UuanMiLCJzcmMvYXBwL2NvbXBvbmVudHMvZGlyLXJldHVybi9kaXIucmV0dXJuLmpzIiwic3JjL2FwcC9jb21wb25lbnRzL2ZpbGUvZmlsZS5qcyIsInNyYy9hcHAvY29tcG9uZW50cy9maWx0ZXItcGFuZWwvZmlsdGVyLnBhbmVsLmpzIiwic3JjL2FwcC9jb21wb25lbnRzL2xlZnQtbWVudS9sZWZ0Lm1lbnUuanMiLCJzcmMvYXBwL2NvbXBvbmVudHMvbWVkaWEtYnJvd3Nlci9tZWRpYS5icm93c2VyLmpzIiwic3JjL2FwcC9jb21wb25lbnRzL3N0dm9yZWMvc3R2b3JlYy5qcyIsInNyYy9hcHAvY29tcG9uZW50cy91cGxvYWQtZmlsZS91cGxvYWQuZmlsZS5qcyIsInNyYy9hcHAvY29tcG9uZW50cy91dm9kL3V2b2QuanMiLCJzcmMvYXBwL2xvYWRpbmcuc2VydmljZS5qcyIsInNyYy9hcHAvbWVkaWEuc2VydmljZS5qcyIsInNyYy90cGwvaW5kZXguanMiLCJzcmMvdHBsL3RlbXBsYXRlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxRQUFRLE1BQVIsQ0FBZSxTQUFmLEVBQTBCLGlCQUExQixFQUNLLFNBREws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KHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vdHBsL2luZGV4JztcbmltcG9ydCB1dm9kIGZyb20gJy4vYXBwL2NvbXBvbmVudHMvdXZvZC91dm9kJztcbmltcG9ydCBtZWRpYUJyb3dzZXIgZnJvbSAnLi9hcHAvY29tcG9uZW50cy9tZWRpYS1icm93c2VyL21lZGlhLmJyb3dzZXInO1xuaW1wb3J0IHJvb3QgZnJvbSAnLi9hcHAvY29tcG9uZW50cy9hcHBsaWNhdGlvbi1yb290L2FwcGxpY2F0aW9uLnJvb3QnO1xuaW1wb3J0IGxlZnRNZW51IGZyb20gJy4vYXBwL2NvbXBvbmVudHMvbGVmdC1tZW51L2xlZnQubWVudSc7XG5pbXBvcnQgZGlyUmV0dXJuIGZyb20gJy4vYXBwL2NvbXBvbmVudHMvZGlyLXJldHVybi9kaXIucmV0dXJuJztcbmltcG9ydCBkaXJCYXNlIGZyb20gJy4vYXBwL2NvbXBvbmVudHMvZGlyLWJhc2UvZGlyLmJhc2UnO1xuaW1wb3J0IGZpbGUgZnJvbSAnLi9hcHAvY29tcG9uZW50cy9maWxlL2ZpbGUnO1xuaW1wb3J0IHN0dm9yZWMgZnJvbSAnLi9hcHAvY29tcG9uZW50cy9zdHZvcmVjL3N0dm9yZWMnO1xuaW1wb3J0IGJyZWFkY3J1bWJzIGZyb20gJy4vYXBwL2NvbXBvbmVudHMvYnJlYWRjcnVtYnMvYnJlYWRjcnVtYnMnO1xuaW1wb3J0IGZpbHRlclBhbmVsIGZyb20gJy4vYXBwL2NvbXBvbmVudHMvZmlsdGVyLXBhbmVsL2ZpbHRlci5wYW5lbCc7XG5pbXBvcnQgdXBsb2FkRmlsZSBmcm9tICcuL2FwcC9jb21wb25lbnRzL3VwbG9hZC1maWxlL3VwbG9hZC5maWxlJztcblxuaW1wb3J0IE1lZGlhU2VydmljZSBmcm9tICcuL2FwcC9tZWRpYS5zZXJ2aWNlJztcbmltcG9ydCBBbGVydHNTZXJ2aWNlIGZyb20gJy4vYXBwL2FsZXJ0cy5zZXJ2aWNlJztcbmltcG9ydCBMb2FkaW5nU2VydmljZSBmcm9tICcuL2FwcC9sb2FkaW5nLnNlcnZpY2UnO1xuXG5hbmd1bGFyLm1vZHVsZSgnYnJvd3NlcicsIFt0ZW1wbGF0ZV0pXG4gICAgLmNvbXBvbmVudCgndXZvZCcsIHV2b2QpXG4gICAgLmNvbXBvbmVudCgnbWVkaWFCcm93c2VyJywgbWVkaWFCcm93c2VyKVxuICAgIC5jb21wb25lbnQoJ2FwcGxpY2F0aW9uUm9vdCcsIHJvb3QpXG4gICAgLmNvbXBvbmVudCgnbGVmdE1lbnUnLCBsZWZ0TWVudSlcbiAgICAuY29tcG9uZW50KCdkaXJSZXR1cm4nLCBkaXJSZXR1cm4pXG4gICAgLmNvbXBvbmVudCgnZGlyQmFzZScsIGRpckJhc2UpXG4gICAgLmNvbXBvbmVudCgnZmlsZScsIGZpbGUpXG4gICAgLmNvbXBvbmVudCgnc3R2b3JlYycsIHN0dm9yZWMpXG4gICAgLmNvbXBvbmVudCgnYnJlYWRjcnVtYnMnLCBicmVhZGNydW1icylcbiAgICAuY29tcG9uZW50KCdmaWx0ZXJQYW5lbCcsIGZpbHRlclBhbmVsKVxuICAgIC5jb21wb25lbnQoJ3VwbG9hZEZpbGUnLCB1cGxvYWRGaWxlKVxuXG4gICAgLnNlcnZpY2UoJ21lZGlhU2VydmljZScsIE1lZGlhU2VydmljZSlcbiAgICAuc2VydmljZSgnYWxlcnRzU2VydmljZScsIEFsZXJ0c1NlcnZpY2UpXG4gICAgLnNlcnZpY2UoJ2xvYWRpbmdTZXJ2aWNlJywgTG9hZGluZ1NlcnZpY2UpXG47IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWxlcnRzU2VydmljZSB7XG5cbiAgICAvLyBAbmdJbmplY3RcbiAgICBjb25zdHJ1Y3RvcigkdGltZW91dCkge1xuICAgICAgICB0aGlzLiR0aW1lb3V0ID0gJHRpbWVvdXQ7XG4gICAgICAgIHRoaXMuYWxlcnRzID0gW107XG4gICAgfVxuXG4gICAgYWRkQWxlcnQobWVzc2FnZSA9ICdBY3Rpb24gZG9uZScsIHR5cGUgPSAnc3VjY2VzcycpIHtcbiAgICAgICAgdGhpcy5hbGVydHMucHVzaCh7XG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLFxuICAgICAgICAgICAgdHlwZTogdHlwZVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy4kdGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFsZXJ0cy5zaGlmdCgpO1xuICAgICAgICB9LCA1MDAwKTtcbiAgICB9XG59IiwiY2xhc3MgQXBwbGljYXRpb25Sb290e1xuXG4gICAgLy8gQG5nSW5qZWN0XG4gICAgY29uc3RydWN0b3IoJGh0dHAsIG1lZGlhU2VydmljZSkge1xuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gICAgICAgIHRoaXMubWVkaWFTZXJ2aWNlID0gbWVkaWFTZXJ2aWNlO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbnRyb2xsZXI6IEFwcGxpY2F0aW9uUm9vdCxcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcGxpY2F0aW9uLXJvb3QvYXBwbGljYXRpb24ucm9vdC50cGwuaHRtbCdcbn07IiwiY2xhc3MgQnJlYWRjcnVtYnMge1xuXG4gICAgLy8gQG5nSW5qZWN0XG4gICAgY29uc3RydWN0b3IoJGh0dHAsIG1lZGlhU2VydmljZSkge1xuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gICAgICAgIHRoaXMubWVkaWFTZXJ2aWNlID0gbWVkaWFTZXJ2aWNlO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbnRyb2xsZXI6IEJyZWFkY3J1bWJzLFxuICAgIHRlbXBsYXRlVXJsOiAnYnJlYWRjcnVtYnMvYnJlYWRjcnVtYnMudHBsLmh0bWwnXG59IiwiY2xhc3MgRGlyQmFzZSB7XG5cbiAgICAvLyBAbmdJbmplY3RcbiAgICBjb25zdHJ1Y3RvcigkaHR0cCwgbWVkaWFTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcbiAgICAgICAgdGhpcy5tZWRpYVNlcnZpY2UgPSBtZWRpYVNlcnZpY2U7XG4gICAgfVxuXG4gICAgZGVsZXRlRGlyKGRpciwgJGV2ZW50KSB7XG4gICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5tZWRpYVNlcnZpY2UuZGVsZXRlRGlyKGRpcik7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBjb250cm9sbGVyOiBEaXJCYXNlLFxuICAgIHRlbXBsYXRlVXJsOiAnZGlyLWJhc2UvZGlyLmJhc2UudHBsLmh0bWwnXG59IiwiY2xhc3MgRGlyUmV0dXJuIHtcblxuICAgIC8vIEBuZ0luamVjdFxuICAgIGNvbnN0cnVjdG9yKCRodHRwLCBtZWRpYVNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xuICAgICAgICB0aGlzLm1lZGlhU2VydmljZSA9IG1lZGlhU2VydmljZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBjb250cm9sbGVyOiBEaXJSZXR1cm4sXG4gICAgdGVtcGxhdGVVcmw6ICdkaXItcmV0dXJuL2Rpci5yZXR1cm4udHBsLmh0bWwnXG59IiwiY2xhc3MgRmlsZSB7XG5cbiAgICAvLyBAbmdJbmplY3RcbiAgICBjb25zdHJ1Y3RvcigkaHR0cCwgbWVkaWFTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcbiAgICAgICAgdGhpcy5tZWRpYVNlcnZpY2UgPSBtZWRpYVNlcnZpY2U7XG4gICAgfVxuICAgIGRlbGV0ZUZpbGUoZmlsZSwgJGV2ZW50KSB7XG4gICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5tZWRpYVNlcnZpY2UuZGVsZXRlRmlsZShmaWxlKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0e1xuICAgIGNvbnRyb2xsZXI6IEZpbGUsXG4gICAgdGVtcGxhdGVVcmw6ICdmaWxlL2ZpbGUudHBsLmh0bWwnXG59IiwiY2xhc3MgRmlsdGVyUGFuZWwge1xuXG4gICAgLy8gQG5nSW5qZWN0XG4gICAgY29uc3RydWN0b3IoJGh0dHAsIG1lZGlhU2VydmljZSkge1xuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gICAgICAgIHRoaXMubWVkaWFTZXJ2aWNlID0gbWVkaWFTZXJ2aWNlO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbnRyb2xsZXI6IEZpbHRlclBhbmVsLFxuICAgIHRlbXBsYXRlVXJsOiAnZmlsdGVyLXBhbmVsL2ZpbHRlci5wYW5lbC50cGwuaHRtbCdcbn07IiwiY2xhc3MgTGVmdE1lbnUge1xuXG4gICAgLy8gQG5nSW5qZWN0XG4gICAgY29uc3RydWN0b3IoJGh0dHAsIG1lZGlhU2VydmljZSwgYWxlcnRzU2VydmljZSwgbG9hZGluZ1NlcnZpY2UpIHtcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xuICAgICAgICB0aGlzLm1lZGlhU2VydmljZSA9IG1lZGlhU2VydmljZTtcbiAgICAgICAgdGhpcy5hbGVydHNTZXJ2aWNlID0gYWxlcnRzU2VydmljZTtcbiAgICAgICAgdGhpcy5sb2FkaW5nU2VydmljZSA9IGxvYWRpbmdTZXJ2aWNlO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbnRyb2xsZXI6IExlZnRNZW51LFxuICAgIHRlbXBsYXRlVXJsOiAnbGVmdC1tZW51L2xlZnQubWVudS50cGwuaHRtbCdcbn0iLCJjbGFzcyBNZWRpYUJyb3dzZXIge1xuXG4gICAgLy8gQG5nSW5qZWN0XG4gICAgY29uc3RydWN0b3IoJGh0dHAsIG1lZGlhU2VydmljZSkge1xuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gICAgICAgIHRoaXMubWVkaWFTZXJ2aWNlID0gbWVkaWFTZXJ2aWNlO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbnRyb2xsZXI6IE1lZGlhQnJvd3NlcixcbiAgICB0ZW1wbGF0ZVVybDogJ21lZGlhLWJyb3dzZXIvbWVkaWEuYnJvd3Nlci50cGwuaHRtbCdcbn07IiwiY2xhc3MgU3R2b3JlY3tcblxuICAgIC8vIEBuZ0luamVjdFxuICAgIGNvbnN0cnVjdG9yKCRodHRwLCBtZWRpYVNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xuICAgICAgICB0aGlzLm1lZGlhU2VydmljZSA9IG1lZGlhU2VydmljZTtcbiAgICB9XG5cbiAgICBnZXQgaXNJbWFnZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5tZWRpYVNlcnZpY2Uuc2VsZWN0ZWRGaWxlID8gdHJ1ZSA6IGZhbHNlO1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY29udHJvbGxlcjogU3R2b3JlYyxcbiAgICB0ZW1wbGF0ZVVybDogJ3N0dm9yZWMvc3R2b3JlYy50cGwuaHRtbCdcbn0iLCJjbGFzcyBVcGxvYWRGaWxlIHtcblxuICAgIC8vIEBuZ0luamVjdFxuICAgIGNvbnN0cnVjdG9yKCR0aW1lb3V0LCAkZWxlbWVudCwgJHdpbmRvdywgJHJvb3RTY29wZSwgbWVkaWFTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuJHRpbWVvdXQgPSAkdGltZW91dDtcbiAgICAgICAgdGhpcy4kZWxlbWVudCA9ICRlbGVtZW50O1xuICAgICAgICB0aGlzLiR3aW5kb3cgPSAkd2luZG93O1xuICAgICAgICB0aGlzLiRyb290U2NvcGUgPSAkcm9vdFNjb3BlO1xuICAgICAgICB0aGlzLm1lZGlhU2VydmljZSA9IG1lZGlhU2VydmljZTtcblxuICAgICAgICB0aGlzLnVwbG9hZFRpbWVvdXQgPSBudWxsO1xuXG4gICAgICAgIHRoaXMubGlzdCA9IG5ldyBTZXQoKTtcblxuICAgICAgICAvLyBkZWZhdWx0IHZhbHVlc1xuICAgICAgICBpZiAoIXRoaXMuZmlsZUFjY2VwdCkge1xuICAgICAgICAgICAgdGhpcy5maWxlQWNjZXB0ID0gJyc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAkb25Jbml0KCkge1xuICAgICAgICB0aGlzLmlucHV0ID0gdGhpcy4kZWxlbWVudC5maW5kKFwiaW5wdXRcIilbMF07XG5cbiAgICAgICAgdGhpcy5pbml0Q2xpY2soKTtcbiAgICAgICAgdGhpcy5pbml0QmluZHModGhpcy4kZWxlbWVudCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlciBjbGljayBldmVudCBvbiB0aGlzLmlucHV0XG4gICAgICpcbiAgICAgKi9cbiAgICBmaXJlVXBsb2FkRXZlbnQoKSB7XG4gICAgICAgIGlmICh0aGlzLiR3aW5kb3cuQ3VzdG9tRXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQuZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudChcImNsaWNrXCIpKTtcbiAgICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC5jcmVhdGVFdmVudCkge1xuICAgICAgICAgICAgbGV0IGV2ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0hUTUxFdmVudHMnKTtcbiAgICAgICAgICAgIGV2LmluaXRFdmVudCgnY29udGV4dG1lbnUnLCB0cnVlLCBmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLmlucHV0LmRpc3BhdGNoRXZlbnQoZXYpO1xuICAgICAgICB9IGVsc2UgeyAvLyBJbnRlcm5ldCBFeHBsb3JlclxuICAgICAgICAgICAgdGhpcy5pbnB1dC5maXJlRXZlbnQoJ29uY29udGV4dG1lbnUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBsaXN0ZW5lciBmb3IgY2hhbmdlIG9uIHRoaXMuaW5wdXRcbiAgICAgKlxuICAgICAqL1xuICAgIGluaXRDbGljaygpIHtcbiAgICAgICAgdGhpcy5pbnB1dFxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBlLnRhcmdldC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgICB0aGlzLmlucHV0XG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgbGlzdCA9IGUudGFyZ2V0LmZpbGVzO1xuICAgICAgICAgICAgICAgIGlmIChsaXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZWFycmF5TGlzdChsaXN0KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZWRpYVNlcnZpY2UudXBsb2FkRmlsZSh0aGlzLmxpc3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIGZhbHNlKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEluaXQgYmluZHMgZm9yIERyYWcmRHJvcFxuICAgICAqXG4gICAgICovXG4gICAgaW5pdEJpbmRzKGVsZW1lbnQgPSB0aGlzLiRlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuZHJvcFNob3cgPSAwO1xuXG4gICAgICAgIGVsZW1lbnQuYmluZChcImRyYWdvdmVyXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vbkRyYWdPdmVyKGV2ZW50LCBlbGVtZW50KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9EcmFnZ2luZyBlbmRzIG9uIHRoZSBvdmVybGF5LCB3aGljaCB0YWtlcyB0aGUgd2hvbGUgd2luZG93XG4gICAgICAgIGVsZW1lbnRcbiAgICAgICAgICAgIC5iaW5kKFwiZHJhZ2VudGVyXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZHJvcFNob3crKztcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuYmluZChcImRyYWdsZWF2ZVwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmRyb3BTaG93LS07XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZHJvcFNob3cgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkRyYWdFbmQoZXZlbnQsIGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuYmluZChcImRyb3BcIiwgKGUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmRyb3BTaG93ID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLm9uRHJhZ0VuZChlLCBlbGVtZW50KTtcbiAgICAgICAgICAgICAgICBsZXQgbGlzdCA9IGUuZGF0YVRyYW5zZmVyLmZpbGVzO1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlYXJyYXlMaXN0KGxpc3QpO1xuICAgICAgICAgICAgICAgIHRoaXMubWVkaWFTZXJ2aWNlLnVwbG9hZEZpbGUodGhpcy5saXN0KTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9yZWFycmF5TGlzdChsaXN0KSB7XG4gICAgICAgIHRoaXMubGlzdC5jbGVhcigpO1xuICAgICAgICBmb3IgKGxldCBmaWxlSW5kZXggaW4gbGlzdCkge1xuICAgICAgICAgICAgaWYgKCFpc05hTihmaWxlSW5kZXgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5saXN0LmFkZChsaXN0Lml0ZW0oZmlsZUluZGV4KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEFkZCBjbGFzc2VzIHdoZW4gYW4gaXRlbSBpcyBkcmFnZ2VkIG92ZXIgdGhlIGRvY3VtZW50IGFuZCB3aGVuXG4gICAgICogdGhlIHVzZXIgbGVhdmVzIHRoZSB3aW5kb3csIGNhbmNlbHMgdGhlIGRyYWcgb3IgZHJvcHMgdGhlIGl0ZW1cbiAgICAgKlxuICAgICAqIEBwYXJhbSBlXG4gICAgICogQHBhcmFtIGVsZW1lbnRcbiAgICAgKi9cbiAgICBvbkRyYWdPdmVyKGUsIGVsZW1lbnQgPSB0aGlzLiRlbGVtZW50KSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZWxlbWVudC5hZGRDbGFzcyhcImRyYWdPdmVyXCIpO1xuICAgIH07XG5cbiAgICBvbkRyYWdFbmQoZSwgZWxlbWVudCA9IHRoaXMuJGVsZW1lbnQpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlbGVtZW50LnJlbW92ZUNsYXNzKFwiZHJhZ092ZXJcIik7XG4gICAgfTtcblxuICAgIGNyZWF0ZU5ld0RpcigpIHtcbiAgICAgICAgdGhpcy5tZWRpYVNlcnZpY2UuY3JlYXRlTmV3RGlyKCk7XG4gICAgfVxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHRlbXBsYXRlVXJsOiAndXBsb2FkLWZpbGUvdXBsb2FkLmZpbGUudHBsLmh0bWwnLFxuICAgIGNvbnRyb2xsZXI6IFVwbG9hZEZpbGVcbn07IiwiY2xhc3MgVXZvZCB7XG5cbiAgICAvLyBAbmdJbmplY3RcbiAgICBjb25zdHJ1Y3RvcigkaHR0cCwgbWVkaWFTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcbiAgICAgICAgdGhpcy5tZWRpYVNlcnZpY2UgPSBtZWRpYVNlcnZpY2U7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY29udHJvbGxlcjogVXZvZCxcbiAgICB0ZW1wbGF0ZVVybDogJ3V2b2QvdXZvZC50cGwuaHRtbCdcbn07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9hZGluZ1NlcnZpY2Uge1xuXG4gICAgLy8gQG5nSW5qZWN0XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5sb2FkaW5nU3RhcnQgPSBmYWxzZTtcbiAgICB9XG4gICAgXG4gICAgZG9Mb2FkaW5nKCl7XG4gICAgICAgIHRoaXMubG9hZGluZ1N0YXJ0ID0gdHJ1ZTtcbiAgICB9XG4gICAgXG4gICAgc3RvcExvYWRpbmcoKXtcbiAgICAgICAgdGhpcy5sb2FkaW5nU3RhcnQgPSBmYWxzZTtcbiAgICB9XG5cbn0iLCJjb25zdCBUWVBFUyA9IHtcbiAgICAnUE5HJzoge1xuICAgICAgICBsaXN0OiBbJ2ltYWdlL3BuZyddLFxuICAgICAgICBpbWFnZTogdHJ1ZVxuICAgIH0sXG4gICAgJ0pQRyc6IHtcbiAgICAgICAgbGlzdDogWydpbWFnZS9qcGVnJywgJ2ltYWdlL3BqcGVnJ10sXG4gICAgICAgIGltYWdlOiB0cnVlXG4gICAgfSxcbiAgICAnR0lGJzoge1xuICAgICAgICBsaXN0OiBbJ2ltYWdlL2dpZiddLFxuICAgICAgICBpbWFnZTogdHJ1ZVxuICAgIH0sXG4gICAgJ0JNUCc6IHtcbiAgICAgICAgbGlzdDogWydpbWFnZS9ibXAnXSxcbiAgICAgICAgaW1hZ2U6IHRydWVcbiAgICB9LFxuICAgICdUSUZGJzogWydpbWFnZS9pZWYnLCAnaW1hZ2UvdGlmZiddLFxuICAgICdUWFQnOiB7XG4gICAgICAgIGxpc3Q6IFsnYXBwbGljYXRpb24vcGxhaW4nLCAndGV4dC9wbGFpbiddLFxuICAgICAgICBpY29uOiAnaW1nL3R4dC5wbmcnXG4gICAgfSxcbiAgICAnUERGJzoge1xuICAgICAgICBsaXN0OiBbXCJhcHBsaWNhdGlvbi9wZGZcIl0sXG4gICAgICAgIGljb246ICdpbWcvcGRmLnBuZydcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZWRpYVNlcnZpY2Uge1xuXG4gICAgLy8gQG5nSW5qZWN0XG4gICAgY29uc3RydWN0b3IoJGh0dHAsICR3aW5kb3csICR0aW1lb3V0LCBhbGVydHNTZXJ2aWNlLCBsb2FkaW5nU2VydmljZSkge1xuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gICAgICAgIHRoaXMuJHdpbmRvdyA9ICR3aW5kb3c7XG4gICAgICAgIHRoaXMuJHRpbWVvdXQgPSAkdGltZW91dDtcbiAgICAgICAgdGhpcy5hbGVydHNTZXJ2aWNlID0gYWxlcnRzU2VydmljZTtcbiAgICAgICAgdGhpcy5sb2FkaW5nU2VydmljZSA9IGxvYWRpbmdTZXJ2aWNlO1xuXG4gICAgICAgIHRoaXMuZGlyID0gbnVsbDtcbiAgICAgICAgdGhpcy5kaXJzX2RhdGEgPSBbXTtcbiAgICAgICAgdGhpcy5maWxlc19kYXRhID0gW107XG5cbiAgICAgICAgdGhpcy5kaXJfbGlzdCA9IFtdO1xuXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRGaWxlID0gbnVsbDtcblxuICAgICAgICB0aGlzLnNob3dEaWFsb2cgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zaG93TGVmdE1lbnUgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMub3JkZXJfZmlsZXNfYnkgPSBcIlwiO1xuICAgICAgICB0aGlzLmZpbHRlcl9maWxlcyA9IFwiXCI7XG5cbiAgICAgICAgdGhpcy5uZXdfZGlyID0gJyc7XG5cbiAgICAgICAgdGhpcy5sb2FkRGlyKCk7XG5cbiAgICB9XG5cbiAgICBsb2FkRGlyKGRpcmVjdG9yeSA9IG51bGwsIGlzUmV0dXJuID0gZmFsc2UpIHtcbiAgICAgICAgLy8gbmFjaXRhdCBsb2FkaW5nIHNlcml2dXMgYSBzcHJhdml0IGxvYWRpbmcgc3RhcnRcbiAgICAgICAgdGhpcy5sb2FkaW5nU2VydmljZS5kb0xvYWRpbmcoKTtcblxuICAgICAgICBsZXQgdXJsQWRyZXNzID0gJyc7XG4gICAgICAgIGlmIChkaXJlY3RvcnkpIHtcbiAgICAgICAgICAgIHVybEFkcmVzcyA9IGRpcmVjdG9yeS5sb2NhdGlvbiArICcvJyArIGRpcmVjdG9yeS5uYW1lO1xuXG4gICAgICAgICAgICBpZiAoaXNSZXR1cm4pIHtcbiAgICAgICAgICAgICAgICB1cmxBZHJlc3MgPSBkaXJlY3RvcnkubG9jYXRpb247XG4gICAgICAgICAgICAgICAgdGhpcy5kaXJfbGlzdC5wb3AoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXJfbGlzdC5wdXNoKGRpcmVjdG9yeS5uYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJGh0dHAuZ2V0KGBodHRwOi8vbWVkaWFicm93c2VyLmJhcnQuc2svZGlyJHt1cmxBZHJlc3N9YClcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlyID0gcmVzcG9uc2UuZGF0YS5kaXI7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXJzX2RhdGEgPSByZXNwb25zZS5kYXRhLmRpcnM7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmZpbGVzX2RhdGEgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBmaWxlIG9mIHJlc3BvbnNlLmRhdGEuZmlsZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlc19kYXRhLnB1c2gobmV3IEZpbGUoZmlsZSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG1lc3MgPSBlcnJvci5kYXRhLmNvZGUgPyBlcnJvci5kYXRhLmRlc2NyaXB0aW9uIDogXCJWeXNreXRsYSBzYSBjaHliYS5cIjtcbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0c1NlcnZpY2UuYWRkQWxlcnQobWVzcywgJ2Vycm9yJyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ1NlcnZpY2Uuc3RvcExvYWRpbmcoKTtcbiAgICAgICAgICAgICAgICAvLyB0b2RvIHVyb2IgbG9hZGluIHN0b3BcbiAgICAgICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBsb2FkRmlsZShmaWxlRGlyZWN0b3J5ID0gbnVsbCkge1xuICAgICAgICBpZiAoZmlsZURpcmVjdG9yeS50aHVtYl9saW5rKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkRmlsZSA9IGZpbGVEaXJlY3RvcnkuZG93bmxvYWRfbGluaztcbiAgICAgICAgICAgIHRoaXMuc2hvd0RpYWxvZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy4kd2luZG93Lm9wZW4oZmlsZURpcmVjdG9yeS5kb3dubG9hZF9saW5rLCAnX2JsYW5rJyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdXBsb2FkRmlsZShmaWxlc1NldCkge1xuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGZpbGVzU2V0KSB7XG4gICAgICAgICAgICB0aGlzLl91cGxvYWRGaWxlKGl0ZW0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX3VwbG9hZEZpbGUoZmlsZSkge1xuICAgICAgICB0aGlzLmxvYWRpbmdTZXJ2aWNlLmRvTG9hZGluZygpO1xuXG4gICAgICAgIHZhciBsb2NhdGlvbiA9ICcvJztcbiAgICAgICAgaWYgKHRoaXMuZGlyKSB7XG4gICAgICAgICAgICBsb2NhdGlvbiA9IHRoaXMuZGlyLmxvY2F0aW9uICsgJy8nICsgdGhpcy5kaXIubmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJmaWxlXCIsIGZpbGUpO1xuXG4gICAgICAgIHRoaXMuJGh0dHAoe1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGRhdGE6IGZvcm1EYXRhLFxuICAgICAgICAgICAgICAgIHVybDogYGh0dHA6Ly9tZWRpYWJyb3dzZXIuYmFydC5zay9tZWRpYS1icm93c2VyL2ZpbGUke2xvY2F0aW9ufWAsXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeydDb250ZW50LVR5cGUnOiB1bmRlZmluZWR9LFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybVJlcXVlc3Q6IGFuZ3VsYXIuaWRlbnRpdHlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZmlsZXNfZGF0YS5wdXNoKG5ldyBGaWxlKHJlc3VsdC5kYXRhKSk7XG4gICAgICAgICAgICAgICAgbGV0IG1lc3MgPSByZXN1bHQuZGF0YS5jb2RlID8gcmVzdWx0LmRhdGEuZGVzY3JpcHRpb24gOiBcIlN1Ym9yIHVzcGVzbmUgbmFocmFueS5cIjtcbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0c1NlcnZpY2UuYWRkQWxlcnQobWVzcyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBtZXNzID0gZXJyb3IuZGF0YS5jb2RlID8gZXJyb3IuZGF0YS5kZXNjcmlwdGlvbiA6IFwiVnlza3l0bGEgc2EgY2h5YmEuXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydHNTZXJ2aWNlLmFkZEFsZXJ0KG1lc3MsICdlcnJvcicpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmdTZXJ2aWNlLnN0b3BMb2FkaW5nKCk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjcmVhdGVOZXdEaXIoKSB7XG4gICAgICAgIHRoaXMubG9hZGluZ1NlcnZpY2UuZG9Mb2FkaW5nKCk7XG5cbiAgICAgICAgdmFyIGxvY2F0aW9uID0gJy8nO1xuICAgICAgICBpZiAodGhpcy5kaXIpIHtcbiAgICAgICAgICAgIGxvY2F0aW9uID0gdGhpcy5kaXIubG9jYXRpb24gKyAnLycgKyB0aGlzLmRpci5uYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kaHR0cCh7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLm5ld19kaXIsXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uOiBsb2NhdGlvblxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdXJsOiBgaHR0cDovL21lZGlhYnJvd3Nlci5iYXJ0LnNrL21lZGlhLWJyb3dzZXIvZGlyYFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXJzX2RhdGEucHVzaChyZXN1bHQuZGF0YSk7XG4gICAgICAgICAgICAgICAgbGV0IG1lc3MgPSByZXN1bHQuZGF0YS5jb2RlID8gcmVzdWx0LmRhdGEuZGVzY3JpcHRpb24gOiBcIlByaWVjaW5vayB1c3Blc25lIHZ5dHZvcmVueS5cIjtcbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0c1NlcnZpY2UuYWRkQWxlcnQobWVzcyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBtZXNzID0gZXJyb3IuZGF0YS5jb2RlID8gZXJyb3IuZGF0YS5kZXNjcmlwdGlvbiA6IFwiVnlza3l0bGEgc2EgY2h5YmEuXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydHNTZXJ2aWNlLmFkZEFsZXJ0KG1lc3MsICdlcnJvcicpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmdTZXJ2aWNlLnN0b3BMb2FkaW5nKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm5ld19kaXIgPSBcIlwiO1xuICAgIH1cblxuICAgIGRlbGV0ZURpcihkaXIpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nU2VydmljZS5kb0xvYWRpbmcoKTtcblxuICAgICAgICB0aGlzLiRodHRwKHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICAgICAgICAgIHVybDogYGh0dHA6Ly9tZWRpYWJyb3dzZXIuYmFydC5zay9tZWRpYS1icm93c2VyL2RpciR7ZGlyLmxvY2F0aW9ufS8ke2Rpci5uYW1lfWBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHRoaXMuZGlyc19kYXRhLmluZGV4T2YoZGlyKTtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpcnNfZGF0YS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgbWVzcyA9IHJlc3VsdC5kYXRhLmNvZGUgPyByZXN1bHQuZGF0YS5kZXNjcmlwdGlvbiA6IFwiUHJpZWNpbm9rIHVzcGVzbmUgem1hemFueS5cIjtcbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0c1NlcnZpY2UuYWRkQWxlcnQobWVzcyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBtZXNzID0gZXJyb3IuZGF0YS5jb2RlID8gZXJyb3IuZGF0YS5kZXNjcmlwdGlvbiA6IFwiVnlza3l0bGEgc2EgY2h5YmEuXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydHNTZXJ2aWNlLmFkZEFsZXJ0KG1lc3MsICdlcnJvcicpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmdTZXJ2aWNlLnN0b3BMb2FkaW5nKCk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBkZWxldGVGaWxlKGZpbGUpe1xuICAgICAgICB0aGlzLmxvYWRpbmdTZXJ2aWNlLmRvTG9hZGluZygpO1xuXG4gICAgICAgIHRoaXMuJGh0dHAoe1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICAgICAgICAgICAgdXJsOiBgaHR0cDovL21lZGlhYnJvd3Nlci5iYXJ0LnNrL21lZGlhLWJyb3dzZXIvZmlsZSR7ZmlsZS5sb2NhdGlvbn0vJHtmaWxlLm5hbWV9YFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5maWxlc19kYXRhLmluZGV4T2YoZmlsZSk7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlc19kYXRhLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBtZXNzID0gcmVzdWx0LmRhdGEuY29kZSA/IHJlc3VsdC5kYXRhLmRlc2NyaXB0aW9uIDogXCJTdWJvciB1c3Blc25lIHptYXphbnkuXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydHNTZXJ2aWNlLmFkZEFsZXJ0KG1lc3MpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgbWVzcyA9IGVycm9yLmRhdGEuY29kZSA/IGVycm9yLmRhdGEuZGVzY3JpcHRpb24gOiBcIlZ5c2t5dGxhIHNhIGNoeWJhLlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRzU2VydmljZS5hZGRBbGVydChtZXNzLCAnZXJyb3InKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nU2VydmljZS5zdG9wTG9hZGluZygpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdG9nZ2xlTGVmdE1lbnUoKSB7XG4gICAgICAgIHRoaXMuc2hvd0xlZnRNZW51ID0gIXRoaXMuc2hvd0xlZnRNZW51O1xuICAgIH1cblxuICAgIHRvZ2dsZURpYWxvZygpIHtcbiAgICAgICAgdGhpcy5zaG93RGlhbG9nID0gIXRoaXMuc2hvd0RpYWxvZztcbiAgICB9XG5cbiAgICBjbG9zZURpYWxvZygpIHtcbiAgICAgICAgaWYgKHRoaXMuc2hvd0RpYWxvZylcbiAgICAgICAgICAgIHRoaXMuc2hvd0RpYWxvZyA9ICF0aGlzLnNob3dEaWFsb2c7XG4gICAgfVxufVxuXG5cbmNsYXNzIEZpbGUge1xuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVkX3RpbWUgPSBudWxsO1xuICAgICAgICB0aGlzLmRvd25sb2FkX2xpbmsgPSBudWxsO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbnVsbDtcbiAgICAgICAgdGhpcy5uYW1lID0gbnVsbDtcbiAgICAgICAgdGhpcy5zaXplID0gbnVsbDtcbiAgICAgICAgdGhpcy50aHVtYl9saW5rID0gbnVsbDtcbiAgICAgICAgdGhpcy50eXBlID0gbnVsbDtcbiAgICAgICAgdGhpcy51cGRhdGVfdGltZSA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5yYXdGaWxlID0gbnVsbDtcblxuICAgICAgICBhbmd1bGFyLm1lcmdlKHRoaXMsIGRhdGEpO1xuICAgIH1cblxuICAgIGdldFR5cGVOYW1lKGdldEljb24gPSBmYWxzZSkge1xuICAgICAgICBmb3IgKGxldCB0eXBlTmFtZSBpbiBUWVBFUykge1xuICAgICAgICAgICAgbGV0IHR5cGVPYmogPSBUWVBFU1t0eXBlTmFtZV07XG4gICAgICAgICAgICBpZiAoYW5ndWxhci5pc0RlZmluZWQodHlwZU9iai5saXN0KSkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHR5cGUgb2YgdHlwZU9iai5saXN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09IHRoaXMudHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdldEljb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYW5ndWxhci5pc0RlZmluZWQodHlwZU9iai5pbWFnZSkgJiYgdHlwZU9iai5pbWFnZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50aHVtYl9saW5rO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhbmd1bGFyLmlzRGVmaW5lZCh0eXBlT2JqLmljb24pID8gdHlwZU9iai5pY29uIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0eXBlTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGV4Y2hhbmdlUmF3KGZpbGUpIHtcbiAgICAgICAgdGhpcy5kb3dubG9hZF9saW5rID0gbnVsbDtcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IG51bGw7XG4gICAgICAgIHRoaXMubmFtZSA9IGZpbGUubmFtZTtcbiAgICAgICAgdGhpcy5zaXplID0gZmlsZS5zaXplO1xuICAgICAgICB0aGlzLnRodW1iX2xpbmsgPSBudWxsO1xuICAgICAgICB0aGlzLnR5cGUgPSBmaWxlLnR5cGU7XG4gICAgICAgIHRoaXMudXBkYXRlX3RpbWUgPSBudWxsO1xuICAgICAgICB0aGlzLnJhd0ZpbGUgPSBmaWxlLnJhd0ZpbGU7XG4gICAgfVxuXG4gICAgZ2V0IG5pY2VUeXBlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRUeXBlTmFtZSgpID8gdGhpcy5nZXRUeXBlTmFtZSgpIDogJ2FueSc7XG4gICAgfVxuXG4gICAgZ2V0IGljb24oKSB7XG4gICAgICAgIGxldCBpY29uID0gdGhpcy5nZXRUeXBlTmFtZSh0cnVlKTtcbiAgICAgICAgcmV0dXJuIGljb24gPyBpY29uIDogXCJpbWcvcGxhaW4ucG5nXCJcbiAgICB9XG5cblxufSIsInJlcXVpcmUoJy4vdGVtcGxhdGVzJyk7XG5tb2R1bGUuZXhwb3J0cyA9ICd0ZW1wbGF0ZXMnOyIsImFuZ3VsYXIubW9kdWxlKFwidGVtcGxhdGVzXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHskdGVtcGxhdGVDYWNoZS5wdXQoXCJhcHBsaWNhdGlvbi1yb290L2FwcGxpY2F0aW9uLnJvb3QudHBsLmh0bWxcIixcIjxkaXYgaWQ9XFxcIm9rbm9cXFwiPlxcblxcbiAgICA8bGVmdC1tZW51IG5nLWlmPVxcXCIkY3RybC5tZWRpYVNlcnZpY2Uuc2hvd0xlZnRNZW51XFxcIj48L2xlZnQtbWVudT5cXG5cXG4gICAgPGRpdiBpZD1cXFwib2JzYWhcXFwiIG5nLWNsYXNzPVxcXCJ7XFwnZnVsbFxcJzogISRjdHJsLm1lZGlhU2VydmljZS5zaG93TGVmdE1lbnV9XFxcIj5cXG4gICAgICAgIDxicmVhZGNydW1icz48L2JyZWFkY3J1bWJzPlxcbiAgICAgICAgPGZpbHRlci1wYW5lbD48L2ZpbHRlci1wYW5lbD5cXG5cXG4gICAgICAgIDxkaXYgc3R5bGU9XFxcIm1hcmdpbi1sZWZ0OjIwcHg7IG1hcmdpbi1yaWdodDogMzBweFxcXCI+XFxuXFxuICAgICAgICAgICAgPGRpci1yZXR1cm4+PC9kaXItcmV0dXJuPlxcblxcbiAgICAgICAgICAgIDxkaXItYmFzZT48L2Rpci1iYXNlPlxcblxcbiAgICAgICAgICAgIDxmaWxlPjwvZmlsZT5cXG4gICAgICAgIDwvZGl2PlxcblxcbiAgICA8L2Rpdj5cXG5cXG48L2Rpdj5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJkaXItcmV0dXJuL2Rpci5yZXR1cm4udHBsLmh0bWxcIixcIjxkaXYgY2xhc3M9XFxcImljb25cXFwiIG5nLXNob3c9XFxcIiRjdHJsLm1lZGlhU2VydmljZS5kaXJcXFwiIG5nLWNsaWNrPVxcXCIkY3RybC5tZWRpYVNlcnZpY2UubG9hZERpcigkY3RybC5tZWRpYVNlcnZpY2UuZGlyLCB0cnVlKVxcXCI+XFxuICAgIDxpbWcgY2xhc3M9XFxcImltZ19pY29uXFxcIiBzcmM9XFxcImltZy9hZHJlc2FyLnBuZ1xcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcIm5hem92X3N1Ym9ydVxcXCI+TmFkcmFkZW55IGFkcmVzYXI8L2Rpdj5cXG48L2Rpdj5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJkaXItYmFzZS9kaXIuYmFzZS50cGwuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXFwiaWNvblxcXCIgbmctcmVwZWF0PVxcXCJkaXIgaW4gJGN0cmwubWVkaWFTZXJ2aWNlLmRpcnNfZGF0YSB8IGZpbHRlcjoge25hbWUgOiRjdHJsLm1lZGlhU2VydmljZS5maWx0ZXJfZmlsZXN9XFxcIiBuZy1jbGljaz1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLmxvYWREaXIoZGlyKVxcXCI+XFxuXFxuICAgIDxpbWcgY2xhc3M9XFxcInJlbW92ZV9kaXJcXFwiIHNyYz1cXFwiaW1nL2Nsb3NlLnBuZ1xcXCIgIG5nLWNsaWNrPVxcXCIkY3RybC5kZWxldGVEaXIoZGlyLCAkZXZlbnQpO1xcXCIvPlxcblxcbiAgICA8aW1nIGNsYXNzPVxcXCJpbWdfaWNvblxcXCIgc3JjPVxcXCJpbWcvcHJpZWNpbm9rLnBuZ1xcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcIm5hem92X3N1Ym9ydVxcXCI+e3tkaXIubmFtZX19PC9kaXY+XFxuXFxuPC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiYnJlYWRjcnVtYnMvYnJlYWRjcnVtYnMudHBsLmh0bWxcIixcIjxkaXYgaWQ9XFxcImhlYWRlcjJcXFwiPlxcbiAgICA8aDI+XFxuICAgICAgICA8c3Bhbj5Ib21lPC9zcGFuPlxcbiAgICAgICAgPHNwYW4gbmctcmVwZWF0PVxcXCJkaXJOYW1lIGluICRjdHJsLm1lZGlhU2VydmljZS5kaXJfbGlzdFxcXCI+IC8ge3tkaXJOYW1lfX0gPC9zcGFuPlxcbiAgICA8L2gyPlxcbjwvZGl2PlwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImZpbGUvZmlsZS50cGwuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXFwiaWNvblxcXCIgbmctcmVwZWF0PVxcXCJmaWxlIGluICRjdHJsLm1lZGlhU2VydmljZS5maWxlc19kYXRhIHwgb3JkZXJCeTogJGN0cmwubWVkaWFTZXJ2aWNlLm9yZGVyX2ZpbGVzX2J5IHwgZmlsdGVyOntuYW1lIDokY3RybC5tZWRpYVNlcnZpY2UuZmlsdGVyX2ZpbGVzfVxcXCIgbmctY2xpY2s9XFxcIiRjdHJsLm1lZGlhU2VydmljZS5sb2FkRmlsZShmaWxlKVxcXCI+XFxuICAgIDxpbWcgY2xhc3M9XFxcInJlbW92ZV9kaXJcXFwiIHNyYz1cXFwiaW1nL2Nsb3NlLnBuZ1xcXCIgbmctY2xpY2s9XFxcIiRjdHJsLmRlbGV0ZUZpbGUoZmlsZSwgJGV2ZW50KTtcXFwiPlxcbiAgICA8aW1nIGNsYXNzPVxcXCJpbWdfcGljdHVyZVxcXCIgIG5nLXNyYz1cXFwie3tmaWxlLmljb259fVxcXCI+XFxuXFxuICAgIDxkaXYgY2xhc3M9XFxcIm5hem92X3N1Ym9ydVxcXCI+e3tmaWxlLm5hbWV9fTwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ0eXBfc3Vib3J1XFxcIj5cXG4gICAgICAgIDxwPnt7ZmlsZS5uaWNlVHlwZX19PC9wPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwidmVsa29zdF9zdWJvcnVcXFwiPlxcbiAgICAgICAgPHA+e3tmaWxlLnNpemV9fTwvcD5cXG4gICAgPC9kaXY+XFxuPC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiZmlsdGVyLXBhbmVsL2ZpbHRlci5wYW5lbC50cGwuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXFwiZmlsdGVyLXBhbmVsXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZmlsdGVyXFxcIj5cXG4gICAgICAgIDx1cGxvYWQtZmlsZT48L3VwbG9hZC1maWxlPlxcbiAgICAgICAgPHA+SGxhZGF0OlxcbiAgICAgICAgICAgIDxpbnB1dCBuZy1tb2RlbD1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLmZpbHRlcl9maWxlc1xcXCIvPlxcbiAgICAgICAgPC9wPlxcbiAgICAgICAgPHA+Wm9yYWRpdCBwb2RsYTpcXG4gICAgICAgICAgICA8c2VsZWN0IG5nLW1vZGVsPVxcXCIkY3RybC5tZWRpYVNlcnZpY2Uub3JkZXJfZmlsZXNfYnlcXFwiPlxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJuYW1lXFxcIj5OYXp2dTwvb3B0aW9uPlxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJzaXplXFxcIj5WZWxrb3N0aTwvb3B0aW9uPlxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJjcmVhdGVkX3RpbWVcXFwiPkRhdHVtdSB2eXR2b3JlbmlhPC9vcHRpb24+XFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIm5pY2VUeXBlXFxcIj5UeXB1IHN1Ym9ydTwvb3B0aW9uPlxcbiAgICAgICAgICAgIDwvc2VsZWN0PlxcbiAgICAgICAgPC9wPlxcbiAgICA8L2Rpdj5cXG48L2Rpdj5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJsZWZ0LW1lbnUvbGVmdC5tZW51LnRwbC5odG1sXCIsXCI8ZGl2IGlkPVxcXCJsZWZ0X21lbnVcXFwiPlxcbiAgICA8dWw+XFxuICAgICAgICA8bGkgbmctc2hvdz1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLmRpclxcXCIgbmctY2xpY2s9XFxcIiRjdHJsLm1lZGlhU2VydmljZS5sb2FkRGlyKCRjdHJsLm1lZGlhU2VydmljZS5kaXIsIHRydWUpXFxcIiBzdHlsZT1cXFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMThweDtcXFwiPk5hZHJhZGVueSBhZHJlc2FyPC9saT5cXG4gICAgICAgIDxsaSBuZy1yZXBlYXQ9XFxcImRpciBpbiAkY3RybC5tZWRpYVNlcnZpY2UuZGlyc19kYXRhXFxcIiBuZy1jbGljaz1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLmxvYWREaXIoZGlyKVxcXCIgPnt7ZGlyLm5hbWV9fTwvbGk+XFxuICAgIDwvdWw+XFxuICAgIDxkaXYgY2xhc3M9XFxcImFsZXJ0XFxcIiBuZy1jbGFzcz1cXFwiYWxlcnQudHlwZVxcXCIgbmctcmVwZWF0PVxcXCJhbGVydCBpbiAkY3RybC5hbGVydHNTZXJ2aWNlLmFsZXJ0cyB0cmFjayBieSAkaW5kZXhcXFwiPnt7YWxlcnQubWVzc2FnZX19PC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImxvYWRlclxcXCIgbmctaWY9XFxcIiRjdHJsLmxvYWRpbmdTZXJ2aWNlLmxvYWRpbmdTdGFydFxcXCI+TG9hZGluZy4uLjwvZGl2PlxcbjwvZGl2PlwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1lZGlhLWJyb3dzZXIvbWVkaWEuYnJvd3Nlci50cGwuaHRtbFwiLFwiPGRpdiBpZD1cXFwiTWVkaWFCcm93c2VyXFxcIj5cXG4gICAgPGRpdiBpZD1cXFwiaGVhZGVyMVxcXCI+XFxuICAgICAgICA8aW1nIG5nLWNsaWNrPVxcXCIkY3RybC5tZWRpYVNlcnZpY2UudG9nZ2xlTGVmdE1lbnUoKVxcXCIgaWQ9XFxcIm1lbnVfaWNvblxcXCIgc3JjPVxcXCJpbWcvbWVudS5wbmdcXFwiIHN0eWxlPVxcXCJ3aWR0aDo1MHB4OyBoZWlnaHQ6MTAwJTtmbG9hdDpsZWZ0OyBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcXCI+XFxuICAgICAgICA8aDE+TWVkaWEgQnJvd3NlcjwvaDE+XFxuICAgICAgICA8aW1nIGlkPVxcXCJ6YXZyaV9kaWFsb2dcXFwiXFxuICAgICAgICAgICAgIG5nLWNsaWNrPVxcXCIkY3RybC5tZWRpYVNlcnZpY2UudG9nZ2xlRGlhbG9nKClcXFwiXFxuICAgICAgICAgICAgIHNyYz1cXFwiaW1nL2Nsb3NlLnBuZ1xcXCIgc3R5bGU9XFxcIndpZHRoOjQwcHg7IGhlaWdodDoxMDAlO2Zsb2F0OnJpZ2h0OyBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXFwiPlxcbiAgICA8L2Rpdj5cXG5cXG4gICAgPGFwcGxpY2F0aW9uLXJvb3Q+PC9hcHBsaWNhdGlvbi1yb290PlxcbjwvZGl2PlwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcInN0dm9yZWMvc3R2b3JlYy50cGwuaHRtbFwiLFwiPGRpdiBpZD1cXFwic3R2b3JlY1xcXCI+XFxuICAgIDxpbWcgc3R5bGU9XFxcIm1heC1oZWlnaHQ6IDI1dnc7IG1heC13aWR0aDogMjV2dztcXFwiIG5nLWlmPVxcXCIkY3RybC5pc0ltYWdlXFxcIiBuZy1zcmM9XFxcInt7JGN0cmwubWVkaWFTZXJ2aWNlLnNlbGVjdGVkRmlsZX19XFxcIj5cXG48L2Rpdj5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJ1cGxvYWQtZmlsZS91cGxvYWQuZmlsZS50cGwuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXFwicHVsbC1yaWdodCBkcm9wLWltZy16b25lXFxcIj5cXG4gICAgPGlucHV0IGlkPVxcXCJkcmFnZ2luZ1xcXCJcXG4gICAgICAgICAgIGNsYXNzPVxcXCJoaWRkZW5cXFwiXFxuICAgICAgICAgICB0eXBlPVxcXCJmaWxlXFxcIlxcbiAgICAgICAgICAgYWNjZXB0PVxcXCJ7eyRjdHJsLmZpbGVBY2NlcHR9fVxcXCJcXG4gICAgICAgICAgIG11bHRpcGxlLz5cXG4gICAgPGRpdj5cXG4gICAgICAgIDxzcGFuPlVwbG9hZCBzdWJvcnU6IDwvc3Bhbj5cXG4gICAgICAgIDxhIGNsYXNzPVxcXCJjdXJzb3ItcG9pbnRlciB1cGxvYWQtYnRuXFxcIiBuZy1jbGljaz1cXFwiJGN0cmwuZmlyZVVwbG9hZEV2ZW50KClcXFwiPlxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJkaXNwbGF5LWJsb2NrXFxcIiB0cmFuc2xhdGU+VXBsb2FkPC9zcGFuPlxcbiAgICAgICAgPC9hPlxcbiAgICA8L2Rpdj5cXG4gICAgPHA+Tm92eSBhZHJlc2FyOlxcbiAgICAgICAgPGlucHV0IG5nLW1vZGVsPVxcXCIkY3RybC5tZWRpYVNlcnZpY2UubmV3X2RpclxcXCIvPlxcbiAgICAgICAgPGJ1dHRvbiBuZy1jbGljaz1cXFwiJGN0cmwuY3JlYXRlTmV3RGlyKClcXFwiPkNSRUFURTwvYnV0dG9uPlxcbiAgICA8L3A+XFxuPC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwidXZvZC91dm9kLnRwbC5odG1sXCIsXCI8ZGl2PlxcbiAgICA8ZGl2IGlkPVxcXCJ1dm9kXFxcIlxcbiAgICAgICAgIG5nLWNsYXNzPVxcXCJ7XFwnaGFsZnZpZXdcXCc6ICRjdHJsLm1lZGlhU2VydmljZS5zaG93RGlhbG9nfVxcXCJcXG4gICAgICAgICBuZy1jbGljaz1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLmNsb3NlRGlhbG9nKClcXFwiPlxcbiAgICAgICAgPHN0dm9yZWM+PC9zdHZvcmVjPlxcblxcbiAgICAgICAgPGJ1dHRvbiBpZD1cXFwiem9icmF6X2RpYWxvZ1xcXCJcXG4gICAgICAgICAgICAgICAgbmctY2xpY2s9XFxcIiRjdHJsLm1lZGlhU2VydmljZS50b2dnbGVEaWFsb2coKTsgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xcXCJcXG4gICAgICAgICAgICAgICAgc3R5bGU9XFxcIm1hcmdpbi1sZWZ0OmF1dG87bWFyZ2luLXJpZ2h0OmF1dG87ZGlzcGxheTpibG9jazsgYmFja2dyb3VuZC1jb2xvcjojNDY0OTRhO2NvbG9yOiB3aGl0ZTsgcGFkZGluZzogNXB4IDVweCA1cHggNXB4XFxcIj5aT0JSQVpJVCBESUFMT0dcXG4gICAgICAgIDwvYnV0dG9uPlxcbiAgICA8L2Rpdj5cXG5cXG5cXG4gICAgPG1lZGlhLWJyb3dzZXIgbmctaWY9XFxcIiRjdHJsLm1lZGlhU2VydmljZS5zaG93RGlhbG9nXFxcIj48L21lZGlhLWJyb3dzZXI+XFxuPC9kaXY+XCIpO31dKTsiXX0=
