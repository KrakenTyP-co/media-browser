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

var _alerts = require('./app/alerts.service');

var _alerts2 = _interopRequireDefault(_alerts);

var _loading = require('./app/loading.service');

var _loading2 = _interopRequireDefault(_loading);

var _trash = require('./app/trash.service');

var _trash2 = _interopRequireDefault(_trash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

angular.module('browser', [_index2.default]).component('uvod', _uvod2.default).component('mediaBrowser', _media2.default).component('applicationRoot', _application2.default).component('leftMenu', _left2.default).component('dirReturn', _dir2.default).component('dirBase', _dir4.default).component('file', _file2.default).component('stvorec', _stvorec2.default).component('breadcrumbs', _breadcrumbs2.default).component('filterPanel', _filter2.default).component('uploadFile', _upload2.default).service('mediaService', _media4.default).service('alertsService', _alerts2.default).service('loadingService', _loading2.default).service('trashService', _trash2.default);

},{"./app/alerts.service":"E:\\media-browser\\src\\app\\alerts.service.js","./app/components/application-root/application.root":"E:\\media-browser\\src\\app\\components\\application-root\\application.root.js","./app/components/breadcrumbs/breadcrumbs":"E:\\media-browser\\src\\app\\components\\breadcrumbs\\breadcrumbs.js","./app/components/dir-base/dir.base":"E:\\media-browser\\src\\app\\components\\dir-base\\dir.base.js","./app/components/dir-return/dir.return":"E:\\media-browser\\src\\app\\components\\dir-return\\dir.return.js","./app/components/file/file":"E:\\media-browser\\src\\app\\components\\file\\file.js","./app/components/filter-panel/filter.panel":"E:\\media-browser\\src\\app\\components\\filter-panel\\filter.panel.js","./app/components/left-menu/left.menu":"E:\\media-browser\\src\\app\\components\\left-menu\\left.menu.js","./app/components/media-browser/media.browser":"E:\\media-browser\\src\\app\\components\\media-browser\\media.browser.js","./app/components/stvorec/stvorec":"E:\\media-browser\\src\\app\\components\\stvorec\\stvorec.js","./app/components/upload-file/upload.file":"E:\\media-browser\\src\\app\\components\\upload-file\\upload.file.js","./app/components/uvod/uvod":"E:\\media-browser\\src\\app\\components\\uvod\\uvod.js","./app/loading.service":"E:\\media-browser\\src\\app\\loading.service.js","./app/media.service":"E:\\media-browser\\src\\app\\media.service.js","./app/trash.service":"E:\\media-browser\\src\\app\\trash.service.js","./tpl/index":"E:\\media-browser\\src\\tpl\\index.js"}],"E:\\media-browser\\src\\app\\alerts.service.js":[function(require,module,exports){
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

},{}],"E:\\media-browser\\src\\app\\components\\application-root\\application.root.js":[function(require,module,exports){
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

},{}],"E:\\media-browser\\src\\app\\loading.service.js":[function(require,module,exports){
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

},{}],"E:\\media-browser\\src\\app\\trash.service.js":[function(require,module,exports){
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
        key: 'trashCounts',
        get: function get() {
            return this.fileList.length + this.directoryList.length;
        }
    }]);

    return TrashService;
}();

exports.default = TrashService;

},{"./media.service":"E:\\media-browser\\src\\app\\media.service.js"}],"E:\\media-browser\\src\\tpl\\index.js":[function(require,module,exports){
'use strict';

require('./templates');
module.exports = 'templates';

},{"./templates":"E:\\media-browser\\src\\tpl\\templates.js"}],"E:\\media-browser\\src\\tpl\\templates.js":[function(require,module,exports){
"use strict";

angular.module("templates", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("application-root/application.root.tpl.html", "<div id=\"okno\">\r\n\r\n    <left-menu ng-if=\"$ctrl.mediaService.showLeftMenu\"></left-menu>\r\n\r\n    <div id=\"obsah\" ng-class=\"{\'full\': !$ctrl.mediaService.showLeftMenu}\">\r\n        <breadcrumbs></breadcrumbs>\r\n        <filter-panel></filter-panel>\r\n\r\n        <div style=\"margin-left:20px; margin-right: 30px\">\r\n\r\n            <dir-return></dir-return>\r\n\r\n            <dir-base></dir-base>\r\n\r\n            <file></file>\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>");
  $templateCache.put("breadcrumbs/breadcrumbs.tpl.html", "<div id=\"header2\">\r\n    <h2>\r\n        <span>Home</span>\r\n        <span ng-repeat=\"dirName in $ctrl.mediaService.dir_list\"> / {{dirName}} </span>\r\n    </h2>\r\n</div>");
  $templateCache.put("dir-base/dir.base.tpl.html", "<div class=\"icon\" ng-repeat=\"dir in $ctrl.mediaService.dirs_data | filter: {name :$ctrl.mediaService.filter_files, inTrash: false}\" ng-click=\"$ctrl.mediaService.loadDir(dir)\">\r\n\r\n    <img class=\"remove_dir\" src=\"img/close.png\"  ng-click=\"$ctrl.deleteDir(dir, $event);\"/>\r\n\r\n    <img class=\"img_icon\" src=\"img/priecinok.png\">\r\n    <div class=\"nazov_suboru\">{{dir.name}}</div>\r\n\r\n</div>");
  $templateCache.put("dir-return/dir.return.tpl.html", "<div class=\"icon\" ng-show=\"$ctrl.mediaService.dir\" ng-click=\"$ctrl.mediaService.loadDir($ctrl.mediaService.dir, true)\">\r\n    <img class=\"img_icon\" src=\"img/adresar.png\">\r\n    <div class=\"nazov_suboru\">Nadradeny adresar</div>\r\n</div>");
  $templateCache.put("file/file.tpl.html", "<div class=\"icon\" ng-repeat=\"file in $ctrl.mediaService.files_data | orderBy: $ctrl.mediaService.order_files_by | filter:{name :$ctrl.mediaService.filter_files, inTrash: false}\" ng-click=\"$ctrl.mediaService.loadFile(file)\">\r\n    <img class=\"remove_dir\" src=\"img/close.png\" ng-click=\"$ctrl.deleteFile(file, $event);\">\r\n    <img class=\"img_picture\"  ng-src=\"{{file.icon}}\">\r\n\r\n    <div class=\"nazov_suboru\">{{file.name}}</div>\r\n    <div class=\"typ_suboru\">\r\n        <p>{{file.niceType}}</p>\r\n    </div>\r\n    <div class=\"velkost_suboru\">\r\n        <p>{{file.size}}</p>\r\n    </div>\r\n</div>");
  $templateCache.put("filter-panel/filter.panel.tpl.html", "<div class=\"filter-panel\">\r\n    <div class=\"filter\">\r\n        <upload-file></upload-file>\r\n        <p>Hladat:\r\n            <input ng-model=\"$ctrl.mediaService.filter_files\"/>\r\n        </p>\r\n        <p>Zoradit podla:\r\n            <select ng-model=\"$ctrl.mediaService.order_files_by\">\r\n                <option value=\"name\">Nazvu</option>\r\n                <option value=\"size\">Velkosti</option>\r\n                <option value=\"created_time\">Datumu vytvorenia</option>\r\n                <option value=\"niceType\">Typu suboru</option>\r\n            </select>\r\n        </p>\r\n    </div>\r\n</div>");
  $templateCache.put("left-menu/left.menu.tpl.html", "<div id=\"left_menu\">\r\n    <ul>\r\n        <li ng-show=\"$ctrl.mediaService.dir\" ng-click=\"$ctrl.mediaService.loadDir($ctrl.mediaService.dir, true)\" style=\"font-weight: bold; font-size: 18px;\">Nadradeny adresar</li>\r\n        <li ng-repeat=\"dir in $ctrl.mediaService.dirs_data | filter: {name :$ctrl.mediaService.filter_files, inTrash: false}\" ng-click=\"$ctrl.mediaService.loadDir(dir)\" >{{dir.name}}</li>\r\n    </ul>\r\n    <div class=\"alert\" ng-class=\"alert.type\" ng-repeat=\"alert in $ctrl.alertsService.alerts track by $index\">{{alert.message}}</div>\r\n    <div class=\"loader\" ng-if=\"$ctrl.loadingService.loadingStart\">Loading...</div>\r\n\r\n    <div class=\"icon-trash\" ng-if=\"$ctrl.trashService.trashCounts\" ng-click=\"$ctrl.trashService.clearTrash()\" style=\"float: left;\">\r\n        <div class=\"trash-lid\" style=\"background-color: #E5E9EA\"></div>\r\n        <div class=\"trash-container\" style=\"background-color: #E5E9EA\"></div>\r\n        <div class=\"trash-line-1\"></div>\r\n        <div class=\"trash-line-2\"></div>\r\n        <div class=\"trash-line-3\"></div>\r\n    </div>\r\n    <div ng-if=\"$ctrl.trashService.trashCounts\" >Trash has: {{$ctrl.trashService.trashCounts}} garbage items</div>\r\n</div>");
  $templateCache.put("media-browser/media.browser.tpl.html", "<div id=\"MediaBrowser\">\r\n    <div id=\"header1\">\r\n        <img ng-click=\"$ctrl.mediaService.toggleLeftMenu()\" id=\"menu_icon\" src=\"img/menu.png\" style=\"width:50px; height:100%;float:left; align-self: flex-start;\">\r\n        <h1>Media Browser</h1>\r\n        <img id=\"zavri_dialog\"\r\n             ng-click=\"$ctrl.mediaService.toggleDialog()\"\r\n             src=\"img/close.png\" style=\"width:40px; height:100%;float:right; align-self: flex-end;\">\r\n    </div>\r\n\r\n    <application-root></application-root>\r\n</div>");
  $templateCache.put("stvorec/stvorec.tpl.html", "<div id=\"stvorec\">\r\n    <img style=\"max-height: 25vw; max-width: 25vw;\" ng-if=\"$ctrl.isImage\" ng-src=\"{{$ctrl.mediaService.selectedFile}}\">\r\n</div>");
  $templateCache.put("upload-file/upload.file.tpl.html", "<div class=\"pull-right drop-img-zone\">\r\n    <input id=\"dragging\"\r\n           class=\"hidden\"\r\n           type=\"file\"\r\n           accept=\"{{$ctrl.fileAccept}}\"\r\n           multiple/>\r\n    <div>\r\n        <span>Upload suboru: </span>\r\n        <a class=\"cursor-pointer upload-btn\" ng-click=\"$ctrl.fireUploadEvent()\">\r\n            <span class=\"display-block\" translate>Upload</span>\r\n        </a>\r\n    </div>\r\n    <p>Novy adresar:\r\n        <input ng-model=\"$ctrl.mediaService.new_dir\"/>\r\n        <button ng-click=\"$ctrl.createNewDir()\">CREATE</button>\r\n    </p>\r\n</div>");
  $templateCache.put("uvod/uvod.tpl.html", "<div>\r\n    <div id=\"uvod\"\r\n         ng-class=\"{\'halfview\': $ctrl.mediaService.showDialog}\"\r\n         ng-click=\"$ctrl.mediaService.closeDialog()\">\r\n        <stvorec></stvorec>\r\n\r\n        <button id=\"zobraz_dialog\"\r\n                ng-click=\"$ctrl.mediaService.toggleDialog(); $event.stopPropagation();\"\r\n                style=\"margin-left:auto;margin-right:auto;display:block; background-color:#46494a;color: white; padding: 5px 5px 5px 5px\">ZOBRAZIT DIALOG\r\n        </button>\r\n    </div>\r\n\r\n\r\n    <media-browser ng-if=\"$ctrl.mediaService.showDialog\"></media-browser>\r\n</div>");
}]);

},{}]},{},["E:\\media-browser\\src\\app.js"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGFwcC5qcyIsInNyY1xcYXBwXFxhbGVydHMuc2VydmljZS5qcyIsInNyY1xcYXBwXFxjb21wb25lbnRzXFxhcHBsaWNhdGlvbi1yb290XFxhcHBsaWNhdGlvbi5yb290LmpzIiwic3JjXFxhcHBcXGNvbXBvbmVudHNcXGJyZWFkY3J1bWJzXFxicmVhZGNydW1icy5qcyIsInNyY1xcYXBwXFxjb21wb25lbnRzXFxkaXItYmFzZVxcZGlyLmJhc2UuanMiLCJzcmNcXGFwcFxcY29tcG9uZW50c1xcZGlyLXJldHVyblxcZGlyLnJldHVybi5qcyIsInNyY1xcYXBwXFxjb21wb25lbnRzXFxmaWxlXFxmaWxlLmpzIiwic3JjXFxhcHBcXGNvbXBvbmVudHNcXGZpbHRlci1wYW5lbFxcZmlsdGVyLnBhbmVsLmpzIiwic3JjXFxhcHBcXGNvbXBvbmVudHNcXGxlZnQtbWVudVxcbGVmdC5tZW51LmpzIiwic3JjXFxhcHBcXGNvbXBvbmVudHNcXG1lZGlhLWJyb3dzZXJcXG1lZGlhLmJyb3dzZXIuanMiLCJzcmNcXGFwcFxcY29tcG9uZW50c1xcc3R2b3JlY1xcc3R2b3JlYy5qcyIsInNyY1xcYXBwXFxjb21wb25lbnRzXFx1cGxvYWQtZmlsZVxcdXBsb2FkLmZpbGUuanMiLCJzcmNcXGFwcFxcY29tcG9uZW50c1xcdXZvZFxcdXZvZC5qcyIsInNyY1xcYXBwXFxsb2FkaW5nLnNlcnZpY2UuanMiLCJzcmNcXGFwcFxcbWVkaWEuc2VydmljZS5qcyIsInNyY1xcYXBwXFx0cmFzaC5zZXJ2aWNlLmpzIiwic3JjXFx0cGxcXGluZGV4LmpzIiwic3JjXFx0cGxcXHRlbXBsYXRlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7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O0FBQ2QsbUJBQU8sS0FBSyxRQUFMLENBQWMsTUFBZCxHQUF1QixLQUFLLGFBQUwsQ0FBbUIsTUFBbkIsQ0FEaEI7Ozs7V0FwQ0Q7Ozs7Ozs7O0FDRnJCLFFBQVEsYUFBUjtBQUNBLE9BQU8sT0FBUCxHQUFpQixXQUFqQjs7Ozs7QUNEQSxRQUFRLE1BQVIsQ0FBZSxXQUFmLEVBQTRCLEVBQTVCLEVBQWdDLEdBQWhDLENBQW9DLENBQUMsZ0JBQUQsRUFBbUIsVUFBUyxjQUFULEVBQXlCO0FBQUMsaUJBQWUsR0FBZixDQUFtQiw0Q0FBbkIsRUFBZ0UscWZBQWhFLEVBQUQ7QUFDaEYsaUJBQWUsR0FBZixDQUFtQixrQ0FBbkIsRUFBc0QsbUxBQXRELEVBRGdGO0FBRWhGLGlCQUFlLEdBQWYsQ0FBbUIsNEJBQW5CLEVBQWdELGthQUFoRCxFQUZnRjtBQUdoRixpQkFBZSxHQUFmLENBQW1CLGdDQUFuQixFQUFvRCw0UEFBcEQsRUFIZ0Y7QUFJaEYsaUJBQWUsR0FBZixDQUFtQixvQkFBbkIsRUFBd0Msc25CQUF4QyxFQUpnRjtBQUtoRixpQkFBZSxHQUFmLENBQW1CLG9DQUFuQixFQUF3RCx3bkJBQXhELEVBTGdGO0FBTWhGLGlCQUFlLEdBQWYsQ0FBbUIsOEJBQW5CLEVBQWtELDB1Q0FBbEQsRUFOZ0Y7QUFPaEYsaUJBQWUsR0FBZixDQUFtQixzQ0FBbkIsRUFBMEQsK2hCQUExRCxFQVBnRjtBQVFoRixpQkFBZSxHQUFmLENBQW1CLDBCQUFuQixFQUE4QyxpS0FBOUMsRUFSZ0Y7QUFTaEYsaUJBQWUsR0FBZixDQUFtQixrQ0FBbkIsRUFBc0QseW1CQUF0RCxFQVRnRjtBQVVoRixpQkFBZSxHQUFmLENBQW1CLG9CQUFuQixFQUF3Qyw0bUJBQXhDLEVBVmdGO0NBQXpCLENBQXZEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL3RwbC9pbmRleCc7XHJcbmltcG9ydCB1dm9kIGZyb20gJy4vYXBwL2NvbXBvbmVudHMvdXZvZC91dm9kJztcclxuaW1wb3J0IG1lZGlhQnJvd3NlciBmcm9tICcuL2FwcC9jb21wb25lbnRzL21lZGlhLWJyb3dzZXIvbWVkaWEuYnJvd3Nlcic7XHJcbmltcG9ydCByb290IGZyb20gJy4vYXBwL2NvbXBvbmVudHMvYXBwbGljYXRpb24tcm9vdC9hcHBsaWNhdGlvbi5yb290JztcclxuaW1wb3J0IGxlZnRNZW51IGZyb20gJy4vYXBwL2NvbXBvbmVudHMvbGVmdC1tZW51L2xlZnQubWVudSc7XHJcbmltcG9ydCBkaXJSZXR1cm4gZnJvbSAnLi9hcHAvY29tcG9uZW50cy9kaXItcmV0dXJuL2Rpci5yZXR1cm4nO1xyXG5pbXBvcnQgZGlyQmFzZSBmcm9tICcuL2FwcC9jb21wb25lbnRzL2Rpci1iYXNlL2Rpci5iYXNlJztcclxuaW1wb3J0IGZpbGUgZnJvbSAnLi9hcHAvY29tcG9uZW50cy9maWxlL2ZpbGUnO1xyXG5pbXBvcnQgc3R2b3JlYyBmcm9tICcuL2FwcC9jb21wb25lbnRzL3N0dm9yZWMvc3R2b3JlYyc7XHJcbmltcG9ydCBicmVhZGNydW1icyBmcm9tICcuL2FwcC9jb21wb25lbnRzL2JyZWFkY3J1bWJzL2JyZWFkY3J1bWJzJztcclxuaW1wb3J0IGZpbHRlclBhbmVsIGZyb20gJy4vYXBwL2NvbXBvbmVudHMvZmlsdGVyLXBhbmVsL2ZpbHRlci5wYW5lbCc7XHJcbmltcG9ydCB1cGxvYWRGaWxlIGZyb20gJy4vYXBwL2NvbXBvbmVudHMvdXBsb2FkLWZpbGUvdXBsb2FkLmZpbGUnO1xyXG5cclxuaW1wb3J0IE1lZGlhU2VydmljZSBmcm9tICcuL2FwcC9tZWRpYS5zZXJ2aWNlJztcclxuaW1wb3J0IEFsZXJ0c1NlcnZpY2UgZnJvbSAnLi9hcHAvYWxlcnRzLnNlcnZpY2UnO1xyXG5pbXBvcnQgTG9hZGluZ1NlcnZpY2UgZnJvbSAnLi9hcHAvbG9hZGluZy5zZXJ2aWNlJztcclxuaW1wb3J0IFRyYXNoU2VydmljZSBmcm9tICcuL2FwcC90cmFzaC5zZXJ2aWNlJztcclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdicm93c2VyJywgW3RlbXBsYXRlXSlcclxuICAgIC5jb21wb25lbnQoJ3V2b2QnLCB1dm9kKVxyXG4gICAgLmNvbXBvbmVudCgnbWVkaWFCcm93c2VyJywgbWVkaWFCcm93c2VyKVxyXG4gICAgLmNvbXBvbmVudCgnYXBwbGljYXRpb25Sb290Jywgcm9vdClcclxuICAgIC5jb21wb25lbnQoJ2xlZnRNZW51JywgbGVmdE1lbnUpXHJcbiAgICAuY29tcG9uZW50KCdkaXJSZXR1cm4nLCBkaXJSZXR1cm4pXHJcbiAgICAuY29tcG9uZW50KCdkaXJCYXNlJywgZGlyQmFzZSlcclxuICAgIC5jb21wb25lbnQoJ2ZpbGUnLCBmaWxlKVxyXG4gICAgLmNvbXBvbmVudCgnc3R2b3JlYycsIHN0dm9yZWMpXHJcbiAgICAuY29tcG9uZW50KCdicmVhZGNydW1icycsIGJyZWFkY3J1bWJzKVxyXG4gICAgLmNvbXBvbmVudCgnZmlsdGVyUGFuZWwnLCBmaWx0ZXJQYW5lbClcclxuICAgIC5jb21wb25lbnQoJ3VwbG9hZEZpbGUnLCB1cGxvYWRGaWxlKVxyXG5cclxuICAgIC5zZXJ2aWNlKCdtZWRpYVNlcnZpY2UnLCBNZWRpYVNlcnZpY2UpXHJcbiAgICAuc2VydmljZSgnYWxlcnRzU2VydmljZScsIEFsZXJ0c1NlcnZpY2UpXHJcbiAgICAuc2VydmljZSgnbG9hZGluZ1NlcnZpY2UnLCBMb2FkaW5nU2VydmljZSlcclxuICAgIC5zZXJ2aWNlKCd0cmFzaFNlcnZpY2UnLCBUcmFzaFNlcnZpY2UpXHJcbjsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBBbGVydHNTZXJ2aWNlIHtcclxuXHJcbiAgICAvLyBAbmdJbmplY3RcclxuICAgIGNvbnN0cnVjdG9yKCR0aW1lb3V0KSB7XHJcbiAgICAgICAgdGhpcy4kdGltZW91dCA9ICR0aW1lb3V0O1xyXG4gICAgICAgIHRoaXMuYWxlcnRzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgYWRkQWxlcnQobWVzc2FnZSA9ICdBY3Rpb24gZG9uZScsIHR5cGUgPSAnc3VjY2VzcycpIHtcclxuICAgICAgICB0aGlzLmFsZXJ0cy5wdXNoKHtcclxuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgdHlwZTogdHlwZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuJHRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFsZXJ0cy5zaGlmdCgpO1xyXG4gICAgICAgIH0sIDUwMDApO1xyXG4gICAgfVxyXG59IiwiY2xhc3MgQXBwbGljYXRpb25Sb290e1xyXG5cclxuICAgIC8vIEBuZ0luamVjdFxyXG4gICAgY29uc3RydWN0b3IoJGh0dHAsIG1lZGlhU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgICAgICB0aGlzLm1lZGlhU2VydmljZSA9IG1lZGlhU2VydmljZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgY29udHJvbGxlcjogQXBwbGljYXRpb25Sb290LFxyXG4gICAgdGVtcGxhdGVVcmw6ICdhcHBsaWNhdGlvbi1yb290L2FwcGxpY2F0aW9uLnJvb3QudHBsLmh0bWwnXHJcbn07IiwiY2xhc3MgQnJlYWRjcnVtYnMge1xyXG5cclxuICAgIC8vIEBuZ0luamVjdFxyXG4gICAgY29uc3RydWN0b3IoJGh0dHAsIG1lZGlhU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgICAgICB0aGlzLm1lZGlhU2VydmljZSA9IG1lZGlhU2VydmljZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgY29udHJvbGxlcjogQnJlYWRjcnVtYnMsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2JyZWFkY3J1bWJzL2JyZWFkY3J1bWJzLnRwbC5odG1sJ1xyXG59IiwiY2xhc3MgRGlyQmFzZSB7XHJcblxyXG4gICAgLy8gQG5nSW5qZWN0XHJcbiAgICBjb25zdHJ1Y3RvcigkaHR0cCwgbWVkaWFTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgICAgIHRoaXMubWVkaWFTZXJ2aWNlID0gbWVkaWFTZXJ2aWNlO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZURpcihkaXIsICRldmVudCkge1xyXG4gICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB0aGlzLm1lZGlhU2VydmljZS5kZWxldGVEaXIoZGlyKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGNvbnRyb2xsZXI6IERpckJhc2UsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2Rpci1iYXNlL2Rpci5iYXNlLnRwbC5odG1sJ1xyXG59IiwiY2xhc3MgRGlyUmV0dXJuIHtcclxuXHJcbiAgICAvLyBAbmdJbmplY3RcclxuICAgIGNvbnN0cnVjdG9yKCRodHRwLCBtZWRpYVNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XHJcbiAgICAgICAgdGhpcy5tZWRpYVNlcnZpY2UgPSBtZWRpYVNlcnZpY2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGNvbnRyb2xsZXI6IERpclJldHVybixcclxuICAgIHRlbXBsYXRlVXJsOiAnZGlyLXJldHVybi9kaXIucmV0dXJuLnRwbC5odG1sJ1xyXG59IiwiY2xhc3MgRmlsZSB7XHJcblxyXG4gICAgLy8gQG5nSW5qZWN0XHJcbiAgICBjb25zdHJ1Y3RvcigkaHR0cCwgbWVkaWFTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgICAgIHRoaXMubWVkaWFTZXJ2aWNlID0gbWVkaWFTZXJ2aWNlO1xyXG4gICAgfVxyXG4gICAgZGVsZXRlRmlsZShmaWxlLCAkZXZlbnQpIHtcclxuICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5tZWRpYVNlcnZpY2UuZGVsZXRlRmlsZShmaWxlKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHR7XHJcbiAgICBjb250cm9sbGVyOiBGaWxlLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdmaWxlL2ZpbGUudHBsLmh0bWwnXHJcbn0iLCJjbGFzcyBGaWx0ZXJQYW5lbCB7XHJcblxyXG4gICAgLy8gQG5nSW5qZWN0XHJcbiAgICBjb25zdHJ1Y3RvcigkaHR0cCwgbWVkaWFTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgICAgIHRoaXMubWVkaWFTZXJ2aWNlID0gbWVkaWFTZXJ2aWNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBjb250cm9sbGVyOiBGaWx0ZXJQYW5lbCxcclxuICAgIHRlbXBsYXRlVXJsOiAnZmlsdGVyLXBhbmVsL2ZpbHRlci5wYW5lbC50cGwuaHRtbCdcclxufTsiLCJjbGFzcyBMZWZ0TWVudSB7XHJcblxyXG4gICAgLy8gQG5nSW5qZWN0XHJcbiAgICBjb25zdHJ1Y3RvcigkaHR0cCwgbWVkaWFTZXJ2aWNlLCBhbGVydHNTZXJ2aWNlLCBsb2FkaW5nU2VydmljZSwgdHJhc2hTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgICAgIHRoaXMubWVkaWFTZXJ2aWNlID0gbWVkaWFTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMuYWxlcnRzU2VydmljZSA9IGFsZXJ0c1NlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nU2VydmljZSA9IGxvYWRpbmdTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMudHJhc2hTZXJ2aWNlID0gdHJhc2hTZXJ2aWNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBjb250cm9sbGVyOiBMZWZ0TWVudSxcclxuICAgIHRlbXBsYXRlVXJsOiAnbGVmdC1tZW51L2xlZnQubWVudS50cGwuaHRtbCdcclxufSIsImNsYXNzIE1lZGlhQnJvd3NlciB7XHJcblxyXG4gICAgLy8gQG5nSW5qZWN0XHJcbiAgICBjb25zdHJ1Y3RvcigkaHR0cCwgbWVkaWFTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgICAgIHRoaXMubWVkaWFTZXJ2aWNlID0gbWVkaWFTZXJ2aWNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBjb250cm9sbGVyOiBNZWRpYUJyb3dzZXIsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ21lZGlhLWJyb3dzZXIvbWVkaWEuYnJvd3Nlci50cGwuaHRtbCdcclxufTsiLCJjbGFzcyBTdHZvcmVje1xyXG5cclxuICAgIC8vIEBuZ0luamVjdFxyXG4gICAgY29uc3RydWN0b3IoJGh0dHAsIG1lZGlhU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgICAgICB0aGlzLm1lZGlhU2VydmljZSA9IG1lZGlhU2VydmljZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaXNJbWFnZSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1lZGlhU2VydmljZS5zZWxlY3RlZEZpbGUgPyB0cnVlIDogZmFsc2U7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBjb250cm9sbGVyOiBTdHZvcmVjLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdzdHZvcmVjL3N0dm9yZWMudHBsLmh0bWwnXHJcbn0iLCJjbGFzcyBVcGxvYWRGaWxlIHtcclxuXHJcbiAgICAvLyBAbmdJbmplY3RcclxuICAgIGNvbnN0cnVjdG9yKCR0aW1lb3V0LCAkZWxlbWVudCwgJHdpbmRvdywgJHJvb3RTY29wZSwgbWVkaWFTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy4kdGltZW91dCA9ICR0aW1lb3V0O1xyXG4gICAgICAgIHRoaXMuJGVsZW1lbnQgPSAkZWxlbWVudDtcclxuICAgICAgICB0aGlzLiR3aW5kb3cgPSAkd2luZG93O1xyXG4gICAgICAgIHRoaXMuJHJvb3RTY29wZSA9ICRyb290U2NvcGU7XHJcbiAgICAgICAgdGhpcy5tZWRpYVNlcnZpY2UgPSBtZWRpYVNlcnZpY2U7XHJcblxyXG4gICAgICAgIHRoaXMudXBsb2FkVGltZW91dCA9IG51bGw7XHJcblxyXG4gICAgICAgIHRoaXMubGlzdCA9IG5ldyBTZXQoKTtcclxuXHJcbiAgICAgICAgLy8gZGVmYXVsdCB2YWx1ZXNcclxuICAgICAgICBpZiAoIXRoaXMuZmlsZUFjY2VwdCkge1xyXG4gICAgICAgICAgICB0aGlzLmZpbGVBY2NlcHQgPSAnJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJG9uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmlucHV0ID0gdGhpcy4kZWxlbWVudC5maW5kKFwiaW5wdXRcIilbMF07XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdENsaWNrKCk7XHJcbiAgICAgICAgdGhpcy5pbml0QmluZHModGhpcy4kZWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUcmlnZ2VyIGNsaWNrIGV2ZW50IG9uIHRoaXMuaW5wdXRcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIGZpcmVVcGxvYWRFdmVudCgpIHtcclxuICAgICAgICBpZiAodGhpcy4kd2luZG93LkN1c3RvbUV2ZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXQuZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudChcImNsaWNrXCIpKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGRvY3VtZW50LmNyZWF0ZUV2ZW50KSB7XHJcbiAgICAgICAgICAgIGxldCBldiA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdIVE1MRXZlbnRzJyk7XHJcbiAgICAgICAgICAgIGV2LmluaXRFdmVudCgnY29udGV4dG1lbnUnLCB0cnVlLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXQuZGlzcGF0Y2hFdmVudChldik7XHJcbiAgICAgICAgfSBlbHNlIHsgLy8gSW50ZXJuZXQgRXhwbG9yZXJcclxuICAgICAgICAgICAgdGhpcy5pbnB1dC5maXJlRXZlbnQoJ29uY29udGV4dG1lbnUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgbGlzdGVuZXIgZm9yIGNoYW5nZSBvbiB0aGlzLmlucHV0XHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBpbml0Q2xpY2soKSB7XHJcbiAgICAgICAgdGhpcy5pbnB1dFxyXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS50YXJnZXQudmFsdWUgPSAnJztcclxuICAgICAgICAgICAgfSwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuaW5wdXRcclxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGlzdCA9IGUudGFyZ2V0LmZpbGVzO1xyXG4gICAgICAgICAgICAgICAgaWYgKGxpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVhcnJheUxpc3QobGlzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZWRpYVNlcnZpY2UudXBsb2FkRmlsZSh0aGlzLmxpc3QpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5pdCBiaW5kcyBmb3IgRHJhZyZEcm9wXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBpbml0QmluZHMoZWxlbWVudCA9IHRoaXMuJGVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLmRyb3BTaG93ID0gMDtcclxuXHJcbiAgICAgICAgZWxlbWVudC5iaW5kKFwiZHJhZ292ZXJcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub25EcmFnT3ZlcihldmVudCwgZWxlbWVudCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vRHJhZ2dpbmcgZW5kcyBvbiB0aGUgb3ZlcmxheSwgd2hpY2ggdGFrZXMgdGhlIHdob2xlIHdpbmRvd1xyXG4gICAgICAgIGVsZW1lbnRcclxuICAgICAgICAgICAgLmJpbmQoXCJkcmFnZW50ZXJcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyb3BTaG93Kys7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5iaW5kKFwiZHJhZ2xlYXZlXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kcm9wU2hvdy0tO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZHJvcFNob3cgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uRHJhZ0VuZChldmVudCwgZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5iaW5kKFwiZHJvcFwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kcm9wU2hvdyA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uRHJhZ0VuZChlLCBlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIGxldCBsaXN0ID0gZS5kYXRhVHJhbnNmZXIuZmlsZXM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZWFycmF5TGlzdChsaXN0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMubWVkaWFTZXJ2aWNlLnVwbG9hZEZpbGUodGhpcy5saXN0KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX3JlYXJyYXlMaXN0KGxpc3QpIHtcclxuICAgICAgICB0aGlzLmxpc3QuY2xlYXIoKTtcclxuICAgICAgICBmb3IgKGxldCBmaWxlSW5kZXggaW4gbGlzdCkge1xyXG4gICAgICAgICAgICBpZiAoIWlzTmFOKGZpbGVJbmRleCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdC5hZGQobGlzdC5pdGVtKGZpbGVJbmRleCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZCBjbGFzc2VzIHdoZW4gYW4gaXRlbSBpcyBkcmFnZ2VkIG92ZXIgdGhlIGRvY3VtZW50IGFuZCB3aGVuXHJcbiAgICAgKiB0aGUgdXNlciBsZWF2ZXMgdGhlIHdpbmRvdywgY2FuY2VscyB0aGUgZHJhZyBvciBkcm9wcyB0aGUgaXRlbVxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBlXHJcbiAgICAgKiBAcGFyYW0gZWxlbWVudFxyXG4gICAgICovXHJcbiAgICBvbkRyYWdPdmVyKGUsIGVsZW1lbnQgPSB0aGlzLiRlbGVtZW50KSB7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZWxlbWVudC5hZGRDbGFzcyhcImRyYWdPdmVyXCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICBvbkRyYWdFbmQoZSwgZWxlbWVudCA9IHRoaXMuJGVsZW1lbnQpIHtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBlbGVtZW50LnJlbW92ZUNsYXNzKFwiZHJhZ092ZXJcIik7XHJcbiAgICB9O1xyXG5cclxuICAgIGNyZWF0ZU5ld0RpcigpIHtcclxuICAgICAgICB0aGlzLm1lZGlhU2VydmljZS5jcmVhdGVOZXdEaXIoKTtcclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICB0ZW1wbGF0ZVVybDogJ3VwbG9hZC1maWxlL3VwbG9hZC5maWxlLnRwbC5odG1sJyxcclxuICAgIGNvbnRyb2xsZXI6IFVwbG9hZEZpbGVcclxufTsiLCJjbGFzcyBVdm9kIHtcclxuXHJcbiAgICAvLyBAbmdJbmplY3RcclxuICAgIGNvbnN0cnVjdG9yKCRodHRwLCBtZWRpYVNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XHJcbiAgICAgICAgdGhpcy5tZWRpYVNlcnZpY2UgPSBtZWRpYVNlcnZpY2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGNvbnRyb2xsZXI6IFV2b2QsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ3V2b2QvdXZvZC50cGwuaHRtbCdcclxufTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBMb2FkaW5nU2VydmljZSB7XHJcblxyXG4gICAgLy8gQG5nSW5qZWN0XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMubG9hZGluZ1N0YXJ0ID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGRvTG9hZGluZygpe1xyXG4gICAgICAgIHRoaXMubG9hZGluZ1N0YXJ0ID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc3RvcExvYWRpbmcoKXtcclxuICAgICAgICB0aGlzLmxvYWRpbmdTdGFydCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxufSIsImNvbnN0IFRZUEVTID0ge1xyXG4gICAgJ1BORyc6IHtcclxuICAgICAgICBsaXN0OiBbJ2ltYWdlL3BuZyddLFxyXG4gICAgICAgIGltYWdlOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgJ0pQRyc6IHtcclxuICAgICAgICBsaXN0OiBbJ2ltYWdlL2pwZWcnLCAnaW1hZ2UvcGpwZWcnXSxcclxuICAgICAgICBpbWFnZTogdHJ1ZVxyXG4gICAgfSxcclxuICAgICdHSUYnOiB7XHJcbiAgICAgICAgbGlzdDogWydpbWFnZS9naWYnXSxcclxuICAgICAgICBpbWFnZTogdHJ1ZVxyXG4gICAgfSxcclxuICAgICdCTVAnOiB7XHJcbiAgICAgICAgbGlzdDogWydpbWFnZS9ibXAnXSxcclxuICAgICAgICBpbWFnZTogdHJ1ZVxyXG4gICAgfSxcclxuICAgICdUSUZGJzogWydpbWFnZS9pZWYnLCAnaW1hZ2UvdGlmZiddLFxyXG4gICAgJ1RYVCc6IHtcclxuICAgICAgICBsaXN0OiBbJ2FwcGxpY2F0aW9uL3BsYWluJywgJ3RleHQvcGxhaW4nXSxcclxuICAgICAgICBpY29uOiAnaW1nL3R4dC5wbmcnXHJcbiAgICB9LFxyXG4gICAgJ1BERic6IHtcclxuICAgICAgICBsaXN0OiBbXCJhcHBsaWNhdGlvbi9wZGZcIl0sXHJcbiAgICAgICAgaWNvbjogJ2ltZy9wZGYucG5nJ1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVkaWFTZXJ2aWNlIHtcclxuXHJcbiAgICAvLyBAbmdJbmplY3RcclxuICAgIGNvbnN0cnVjdG9yKCRodHRwLCAkd2luZG93LCAkdGltZW91dCwgYWxlcnRzU2VydmljZSwgbG9hZGluZ1NlcnZpY2UsIHRyYXNoU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgICAgICB0aGlzLiR3aW5kb3cgPSAkd2luZG93O1xyXG4gICAgICAgIHRoaXMuJHRpbWVvdXQgPSAkdGltZW91dDtcclxuICAgICAgICB0aGlzLmFsZXJ0c1NlcnZpY2UgPSBhbGVydHNTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMubG9hZGluZ1NlcnZpY2UgPSBsb2FkaW5nU2VydmljZTtcclxuICAgICAgICB0aGlzLnRyYXNoU2VydmljZSA9IHRyYXNoU2VydmljZTtcclxuXHJcbiAgICAgICAgdHJhc2hTZXJ2aWNlLmRpclJlbW92ZUZ1bmMgPSAoZGlyKSA9PiB0aGlzLl9kZWxldGVEaXIoZGlyKTtcclxuICAgICAgICB0cmFzaFNlcnZpY2UuZmlsZVJlbW92ZUZ1bmMgPSAoZmlsZSkgPT4gdGhpcy5fZGVsZXRlRmlsZShmaWxlKTtcclxuXHJcbiAgICAgICAgdGhpcy5kaXIgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZGlyc19kYXRhID0gW107XHJcbiAgICAgICAgdGhpcy5maWxlc19kYXRhID0gW107XHJcblxyXG4gICAgICAgIHRoaXMuZGlyX2xpc3QgPSBbXTtcclxuXHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEZpbGUgPSBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLnNob3dEaWFsb2cgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNob3dMZWZ0TWVudSA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMub3JkZXJfZmlsZXNfYnkgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuZmlsdGVyX2ZpbGVzID0gXCJcIjtcclxuXHJcbiAgICAgICAgdGhpcy5uZXdfZGlyID0gJyc7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIHRoaXMubG9hZERpcigpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBsb2FkRGlyKGRpcmVjdG9yeSA9IG51bGwsIGlzUmV0dXJuID0gZmFsc2UpIHtcclxuICAgICAgICAvLyBuYWNpdGF0IGxvYWRpbmcgc2VyaXZ1cyBhIHNwcmF2aXQgbG9hZGluZyBzdGFydFxyXG4gICAgICAgIHRoaXMubG9hZGluZ1NlcnZpY2UuZG9Mb2FkaW5nKCk7XHJcblxyXG4gICAgICAgIGxldCB1cmxBZHJlc3MgPSAnJztcclxuICAgICAgICBpZiAoZGlyZWN0b3J5KSB7XHJcbiAgICAgICAgICAgIHVybEFkcmVzcyA9IGRpcmVjdG9yeS5sb2NhdGlvbiArICcvJyArIGRpcmVjdG9yeS5uYW1lO1xyXG5cclxuICAgICAgICAgICAgaWYgKGlzUmV0dXJuKSB7XHJcbiAgICAgICAgICAgICAgICB1cmxBZHJlc3MgPSBkaXJlY3RvcnkubG9jYXRpb247XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpcl9saXN0LnBvcCgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJfbGlzdC5wdXNoKGRpcmVjdG9yeS5uYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy4kaHR0cC5nZXQoYGh0dHA6Ly9tZWRpYWJyb3dzZXIuYmFydC5zay9kaXIke3VybEFkcmVzc31gKVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlyID0gcmVzcG9uc2UuZGF0YS5kaXI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpcnNfZGF0YSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgZGlyIG9mIHJlc3BvbnNlLmRhdGEuZGlycykgIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXIuaW5UcmFzaCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlyc19kYXRhLnB1c2goZGlyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuZGlyc19kYXRhID0gcmVzcG9uc2UuZGF0YS5kaXJzO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsZXNfZGF0YSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgZmlsZSBvZiByZXNwb25zZS5kYXRhLmZpbGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlc19kYXRhLnB1c2gobmV3IEZpbGUoZmlsZSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbWVzcyA9IGVycm9yLmRhdGEuY29kZSA/IGVycm9yLmRhdGEuZGVzY3JpcHRpb24gOiBcIlZ5c2t5dGxhIHNhIGNoeWJhLlwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydHNTZXJ2aWNlLmFkZEFsZXJ0KG1lc3MsICdlcnJvcicpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmdTZXJ2aWNlLnN0b3BMb2FkaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAvLyB0b2RvIHVyb2IgbG9hZGluIHN0b3BcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGxvYWRGaWxlKGZpbGVEaXJlY3RvcnkgPSBudWxsKSB7XHJcbiAgICAgICAgaWYgKGZpbGVEaXJlY3RvcnkudGh1bWJfbGluaykge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkRmlsZSA9IGZpbGVEaXJlY3RvcnkuZG93bmxvYWRfbGluaztcclxuICAgICAgICAgICAgdGhpcy5zaG93RGlhbG9nID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLiR3aW5kb3cub3BlbihmaWxlRGlyZWN0b3J5LmRvd25sb2FkX2xpbmssICdfYmxhbmsnKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHVwbG9hZEZpbGUoZmlsZXNTZXQpIHtcclxuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGZpbGVzU2V0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3VwbG9hZEZpbGUoaXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF91cGxvYWRGaWxlKGZpbGUpIHtcclxuICAgICAgICB0aGlzLmxvYWRpbmdTZXJ2aWNlLmRvTG9hZGluZygpO1xyXG5cclxuICAgICAgICB2YXIgbG9jYXRpb24gPSAnLyc7XHJcbiAgICAgICAgaWYgKHRoaXMuZGlyKSB7XHJcbiAgICAgICAgICAgIGxvY2F0aW9uID0gdGhpcy5kaXIubG9jYXRpb24gKyAnLycgKyB0aGlzLmRpci5uYW1lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiZmlsZVwiLCBmaWxlKTtcclxuXHJcbiAgICAgICAgdGhpcy4kaHR0cCh7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgICAgICAgICAgICAgdXJsOiBgaHR0cDovL21lZGlhYnJvd3Nlci5iYXJ0LnNrL21lZGlhLWJyb3dzZXIvZmlsZSR7bG9jYXRpb259YCxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsnQ29udGVudC1UeXBlJzogdW5kZWZpbmVkfSxcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybVJlcXVlc3Q6IGFuZ3VsYXIuaWRlbnRpdHlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsZXNfZGF0YS5wdXNoKG5ldyBGaWxlKHJlc3VsdC5kYXRhKSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgbWVzcyA9IHJlc3VsdC5kYXRhLmNvZGUgPyByZXN1bHQuZGF0YS5kZXNjcmlwdGlvbiA6IFwiU3Vib3IgdXNwZXNuZSBuYWhyYW55LlwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydHNTZXJ2aWNlLmFkZEFsZXJ0KG1lc3MpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbWVzcyA9IGVycm9yLmRhdGEuY29kZSA/IGVycm9yLmRhdGEuZGVzY3JpcHRpb24gOiBcIlZ5c2t5dGxhIHNhIGNoeWJhLlwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydHNTZXJ2aWNlLmFkZEFsZXJ0KG1lc3MsICdlcnJvcicpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmdTZXJ2aWNlLnN0b3BMb2FkaW5nKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZU5ld0RpcigpIHtcclxuICAgICAgICB0aGlzLmxvYWRpbmdTZXJ2aWNlLmRvTG9hZGluZygpO1xyXG5cclxuICAgICAgICB2YXIgbG9jYXRpb24gPSAnLyc7XHJcbiAgICAgICAgaWYgKHRoaXMuZGlyKSB7XHJcbiAgICAgICAgICAgIGxvY2F0aW9uID0gdGhpcy5kaXIubG9jYXRpb24gKyAnLycgKyB0aGlzLmRpci5uYW1lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy4kaHR0cCh7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLm5ld19kaXIsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb246IGxvY2F0aW9uXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdXJsOiBgaHR0cDovL21lZGlhYnJvd3Nlci5iYXJ0LnNrL21lZGlhLWJyb3dzZXIvZGlyYFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJzX2RhdGEucHVzaChyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgbWVzcyA9IHJlc3VsdC5kYXRhLmNvZGUgPyByZXN1bHQuZGF0YS5kZXNjcmlwdGlvbiA6IFwiUHJpZWNpbm9rIHVzcGVzbmUgdnl0dm9yZW55LlwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydHNTZXJ2aWNlLmFkZEFsZXJ0KG1lc3MpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbWVzcyA9IGVycm9yLmRhdGEuY29kZSA/IGVycm9yLmRhdGEuZGVzY3JpcHRpb24gOiBcIlZ5c2t5dGxhIHNhIGNoeWJhLlwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydHNTZXJ2aWNlLmFkZEFsZXJ0KG1lc3MsICdlcnJvcicpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmdTZXJ2aWNlLnN0b3BMb2FkaW5nKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLm5ld19kaXIgPSBcIlwiO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVEaXIoZGlyKSB7XHJcbiAgICAgICAgZGlyLmluVHJhc2ggPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudHJhc2hTZXJ2aWNlLmFkZFRvVHJhc2goZGlyKTtcclxuICAgIH1cclxuXHJcbiAgICBfZGVsZXRlRGlyKGRpcikge1xyXG4gICAgICAgIHRoaXMubG9hZGluZ1NlcnZpY2UuZG9Mb2FkaW5nKCk7XHJcblxyXG4gICAgICAgIHRoaXMuJGh0dHAoe1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgICAgICAgICAgIHVybDogYGh0dHA6Ly9tZWRpYWJyb3dzZXIuYmFydC5zay9tZWRpYS1icm93c2VyL2RpciR7ZGlyLmxvY2F0aW9ufS8ke2Rpci5uYW1lfWBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHRoaXMuZGlyc19kYXRhLmluZGV4T2YoZGlyKTtcclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXJzX2RhdGEuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxldCBtZXNzID0gcmVzdWx0LmRhdGEuY29kZSA/IHJlc3VsdC5kYXRhLmRlc2NyaXB0aW9uIDogXCJQcmllY2lub2sgdXNwZXNuZSB6bWF6YW55LlwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydHNTZXJ2aWNlLmFkZEFsZXJ0KG1lc3MpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbWVzcyA9IGVycm9yLmRhdGEuY29kZSA/IGVycm9yLmRhdGEuZGVzY3JpcHRpb24gOiBcIlZ5c2t5dGxhIHNhIGNoeWJhLlwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydHNTZXJ2aWNlLmFkZEFsZXJ0KG1lc3MsICdlcnJvcicpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmdTZXJ2aWNlLnN0b3BMb2FkaW5nKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZUZpbGUoZmlsZSl7XHJcbiAgICAgICAgZmlsZS5pblRyYXNoID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnRyYXNoU2VydmljZS5hZGRUb1RyYXNoKGZpbGUpO1xyXG4gICAgfVxyXG5cclxuICAgIF9kZWxldGVGaWxlKGZpbGUpe1xyXG4gICAgICAgIHRoaXMubG9hZGluZ1NlcnZpY2UuZG9Mb2FkaW5nKCk7XHJcblxyXG4gICAgICAgIHRoaXMuJGh0dHAoe1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgICAgICAgICAgIHVybDogYGh0dHA6Ly9tZWRpYWJyb3dzZXIuYmFydC5zay9tZWRpYS1icm93c2VyL2ZpbGUke2ZpbGUubG9jYXRpb259LyR7ZmlsZS5uYW1lfWBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHRoaXMuZmlsZXNfZGF0YS5pbmRleE9mKGZpbGUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGVzX2RhdGEuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxldCBtZXNzID0gcmVzdWx0LmRhdGEuY29kZSA/IHJlc3VsdC5kYXRhLmRlc2NyaXB0aW9uIDogXCJTdWJvciB1c3Blc25lIHptYXphbnkuXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0c1NlcnZpY2UuYWRkQWxlcnQobWVzcyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBtZXNzID0gZXJyb3IuZGF0YS5jb2RlID8gZXJyb3IuZGF0YS5kZXNjcmlwdGlvbiA6IFwiVnlza3l0bGEgc2EgY2h5YmEuXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0c1NlcnZpY2UuYWRkQWxlcnQobWVzcywgJ2Vycm9yJyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ1NlcnZpY2Uuc3RvcExvYWRpbmcoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlTGVmdE1lbnUoKSB7XHJcbiAgICAgICAgdGhpcy5zaG93TGVmdE1lbnUgPSAhdGhpcy5zaG93TGVmdE1lbnU7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlRGlhbG9nKCkge1xyXG4gICAgICAgIHRoaXMuc2hvd0RpYWxvZyA9ICF0aGlzLnNob3dEaWFsb2c7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VEaWFsb2coKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2hvd0RpYWxvZylcclxuICAgICAgICAgICAgdGhpcy5zaG93RGlhbG9nID0gIXRoaXMuc2hvd0RpYWxvZztcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBGaWxlIHtcclxuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcclxuICAgICAgICB0aGlzLmNyZWF0ZWRfdGltZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5kb3dubG9hZF9saW5rID0gbnVsbDtcclxuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbnVsbDtcclxuICAgICAgICB0aGlzLm5hbWUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy50aHVtYl9saW5rID0gbnVsbDtcclxuICAgICAgICB0aGlzLnR5cGUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMudXBkYXRlX3RpbWUgPSBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLnJhd0ZpbGUgPSBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLmluVHJhc2ggPSBmYWxzZTtcclxuXHJcbiAgICAgICAgYW5ndWxhci5tZXJnZSh0aGlzLCBkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUeXBlTmFtZShnZXRJY29uID0gZmFsc2UpIHtcclxuICAgICAgICBmb3IgKGxldCB0eXBlTmFtZSBpbiBUWVBFUykge1xyXG4gICAgICAgICAgICBsZXQgdHlwZU9iaiA9IFRZUEVTW3R5cGVOYW1lXTtcclxuICAgICAgICAgICAgaWYgKGFuZ3VsYXIuaXNEZWZpbmVkKHR5cGVPYmoubGlzdCkpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHR5cGUgb2YgdHlwZU9iai5saXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT0gdGhpcy50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnZXRJY29uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYW5ndWxhci5pc0RlZmluZWQodHlwZU9iai5pbWFnZSkgJiYgdHlwZU9iai5pbWFnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRodW1iX2xpbms7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhbmd1bGFyLmlzRGVmaW5lZCh0eXBlT2JqLmljb24pID8gdHlwZU9iai5pY29uIDogbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0eXBlTmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZXhjaGFuZ2VSYXcoZmlsZSkge1xyXG4gICAgICAgIHRoaXMuZG93bmxvYWRfbGluayA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gZmlsZS5uYW1lO1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IGZpbGUuc2l6ZTtcclxuICAgICAgICB0aGlzLnRodW1iX2xpbmsgPSBudWxsO1xyXG4gICAgICAgIHRoaXMudHlwZSA9IGZpbGUudHlwZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZV90aW1lID0gbnVsbDtcclxuICAgICAgICB0aGlzLnJhd0ZpbGUgPSBmaWxlLnJhd0ZpbGU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG5pY2VUeXBlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFR5cGVOYW1lKCkgPyB0aGlzLmdldFR5cGVOYW1lKCkgOiAnYW55JztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaWNvbigpIHtcclxuICAgICAgICBsZXQgaWNvbiA9IHRoaXMuZ2V0VHlwZU5hbWUodHJ1ZSk7XHJcbiAgICAgICAgcmV0dXJuIGljb24gPyBpY29uIDogXCJpbWcvcGxhaW4ucG5nXCJcclxuICAgIH1cclxuXHJcblxyXG59IiwiaW1wb3J0IHtGaWxlfSBmcm9tICcuL21lZGlhLnNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhc2hTZXJ2aWNlIHtcclxuXHJcbiAgICAvLyBAbmdJbmplY3RcclxuICAgIGNvbnN0cnVjdG9yKCR0aW1lb3V0KSB7XHJcbiAgICAgICAgdGhpcy4kdGltZW91dCA9ICR0aW1lb3V0O1xyXG4gICAgICAgIHRoaXMuZmlsZUxpc3QgPSBbXTtcclxuICAgICAgICB0aGlzLmRpcmVjdG9yeUxpc3QgPSBbXTtcclxuXHJcbiAgICAgICAgdGhpcy5kaXJSZW1vdmVGdW5jID0gbnVsbDtcclxuICAgICAgICB0aGlzLmZpbGVSZW1vdmVGdW5jID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBhZGRUb1RyYXNoKG9iamVjdCkge1xyXG4gICAgICAgIGlmIChvYmplY3QgaW5zdGFuY2VvZiBGaWxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsZUxpc3QucHVzaChvYmplY3QpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0b3J5TGlzdC5wdXNoKG9iamVjdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyVHJhc2goKSB7XHJcbiAgICAgICAgaWYgKGFuZ3VsYXIuaXNGdW5jdGlvbih0aGlzLmRpclJlbW92ZUZ1bmMpKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGRpciBvZiB0aGlzLmRpcmVjdG9yeUxpc3QpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlyUmVtb3ZlRnVuYy5jYWxsKHRoaXMsIGRpcik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdG9yeUxpc3Q9W107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChhbmd1bGFyLmlzRnVuY3Rpb24odGhpcy5maWxlUmVtb3ZlRnVuYykpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgZmlsZSBvZiB0aGlzLmZpbGVMaXN0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGVSZW1vdmVGdW5jLmNhbGwodGhpcywgZmlsZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGVMaXN0PVtdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldCB0cmFzaENvdW50cygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5maWxlTGlzdC5sZW5ndGggKyB0aGlzLmRpcmVjdG9yeUxpc3QubGVuZ3RoO1xyXG4gICAgfVxyXG59IiwicmVxdWlyZSgnLi90ZW1wbGF0ZXMnKTtcclxubW9kdWxlLmV4cG9ydHMgPSAndGVtcGxhdGVzJzsiLCJhbmd1bGFyLm1vZHVsZShcInRlbXBsYXRlc1wiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7JHRlbXBsYXRlQ2FjaGUucHV0KFwiYXBwbGljYXRpb24tcm9vdC9hcHBsaWNhdGlvbi5yb290LnRwbC5odG1sXCIsXCI8ZGl2IGlkPVxcXCJva25vXFxcIj5cXHJcXG5cXHJcXG4gICAgPGxlZnQtbWVudSBuZy1pZj1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLnNob3dMZWZ0TWVudVxcXCI+PC9sZWZ0LW1lbnU+XFxyXFxuXFxyXFxuICAgIDxkaXYgaWQ9XFxcIm9ic2FoXFxcIiBuZy1jbGFzcz1cXFwie1xcJ2Z1bGxcXCc6ICEkY3RybC5tZWRpYVNlcnZpY2Uuc2hvd0xlZnRNZW51fVxcXCI+XFxyXFxuICAgICAgICA8YnJlYWRjcnVtYnM+PC9icmVhZGNydW1icz5cXHJcXG4gICAgICAgIDxmaWx0ZXItcGFuZWw+PC9maWx0ZXItcGFuZWw+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IHN0eWxlPVxcXCJtYXJnaW4tbGVmdDoyMHB4OyBtYXJnaW4tcmlnaHQ6IDMwcHhcXFwiPlxcclxcblxcclxcbiAgICAgICAgICAgIDxkaXItcmV0dXJuPjwvZGlyLXJldHVybj5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8ZGlyLWJhc2U+PC9kaXItYmFzZT5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8ZmlsZT48L2ZpbGU+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuPC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiYnJlYWRjcnVtYnMvYnJlYWRjcnVtYnMudHBsLmh0bWxcIixcIjxkaXYgaWQ9XFxcImhlYWRlcjJcXFwiPlxcclxcbiAgICA8aDI+XFxyXFxuICAgICAgICA8c3Bhbj5Ib21lPC9zcGFuPlxcclxcbiAgICAgICAgPHNwYW4gbmctcmVwZWF0PVxcXCJkaXJOYW1lIGluICRjdHJsLm1lZGlhU2VydmljZS5kaXJfbGlzdFxcXCI+IC8ge3tkaXJOYW1lfX0gPC9zcGFuPlxcclxcbiAgICA8L2gyPlxcclxcbjwvZGl2PlwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImRpci1iYXNlL2Rpci5iYXNlLnRwbC5odG1sXCIsXCI8ZGl2IGNsYXNzPVxcXCJpY29uXFxcIiBuZy1yZXBlYXQ9XFxcImRpciBpbiAkY3RybC5tZWRpYVNlcnZpY2UuZGlyc19kYXRhIHwgZmlsdGVyOiB7bmFtZSA6JGN0cmwubWVkaWFTZXJ2aWNlLmZpbHRlcl9maWxlcywgaW5UcmFzaDogZmFsc2V9XFxcIiBuZy1jbGljaz1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLmxvYWREaXIoZGlyKVxcXCI+XFxyXFxuXFxyXFxuICAgIDxpbWcgY2xhc3M9XFxcInJlbW92ZV9kaXJcXFwiIHNyYz1cXFwiaW1nL2Nsb3NlLnBuZ1xcXCIgIG5nLWNsaWNrPVxcXCIkY3RybC5kZWxldGVEaXIoZGlyLCAkZXZlbnQpO1xcXCIvPlxcclxcblxcclxcbiAgICA8aW1nIGNsYXNzPVxcXCJpbWdfaWNvblxcXCIgc3JjPVxcXCJpbWcvcHJpZWNpbm9rLnBuZ1xcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm5hem92X3N1Ym9ydVxcXCI+e3tkaXIubmFtZX19PC9kaXY+XFxyXFxuXFxyXFxuPC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiZGlyLXJldHVybi9kaXIucmV0dXJuLnRwbC5odG1sXCIsXCI8ZGl2IGNsYXNzPVxcXCJpY29uXFxcIiBuZy1zaG93PVxcXCIkY3RybC5tZWRpYVNlcnZpY2UuZGlyXFxcIiBuZy1jbGljaz1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLmxvYWREaXIoJGN0cmwubWVkaWFTZXJ2aWNlLmRpciwgdHJ1ZSlcXFwiPlxcclxcbiAgICA8aW1nIGNsYXNzPVxcXCJpbWdfaWNvblxcXCIgc3JjPVxcXCJpbWcvYWRyZXNhci5wbmdcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJuYXpvdl9zdWJvcnVcXFwiPk5hZHJhZGVueSBhZHJlc2FyPC9kaXY+XFxyXFxuPC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiZmlsZS9maWxlLnRwbC5odG1sXCIsXCI8ZGl2IGNsYXNzPVxcXCJpY29uXFxcIiBuZy1yZXBlYXQ9XFxcImZpbGUgaW4gJGN0cmwubWVkaWFTZXJ2aWNlLmZpbGVzX2RhdGEgfCBvcmRlckJ5OiAkY3RybC5tZWRpYVNlcnZpY2Uub3JkZXJfZmlsZXNfYnkgfCBmaWx0ZXI6e25hbWUgOiRjdHJsLm1lZGlhU2VydmljZS5maWx0ZXJfZmlsZXMsIGluVHJhc2g6IGZhbHNlfVxcXCIgbmctY2xpY2s9XFxcIiRjdHJsLm1lZGlhU2VydmljZS5sb2FkRmlsZShmaWxlKVxcXCI+XFxyXFxuICAgIDxpbWcgY2xhc3M9XFxcInJlbW92ZV9kaXJcXFwiIHNyYz1cXFwiaW1nL2Nsb3NlLnBuZ1xcXCIgbmctY2xpY2s9XFxcIiRjdHJsLmRlbGV0ZUZpbGUoZmlsZSwgJGV2ZW50KTtcXFwiPlxcclxcbiAgICA8aW1nIGNsYXNzPVxcXCJpbWdfcGljdHVyZVxcXCIgIG5nLXNyYz1cXFwie3tmaWxlLmljb259fVxcXCI+XFxyXFxuXFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm5hem92X3N1Ym9ydVxcXCI+e3tmaWxlLm5hbWV9fTwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ0eXBfc3Vib3J1XFxcIj5cXHJcXG4gICAgICAgIDxwPnt7ZmlsZS5uaWNlVHlwZX19PC9wPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwidmVsa29zdF9zdWJvcnVcXFwiPlxcclxcbiAgICAgICAgPHA+e3tmaWxlLnNpemV9fTwvcD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiZmlsdGVyLXBhbmVsL2ZpbHRlci5wYW5lbC50cGwuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXFwiZmlsdGVyLXBhbmVsXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZmlsdGVyXFxcIj5cXHJcXG4gICAgICAgIDx1cGxvYWQtZmlsZT48L3VwbG9hZC1maWxlPlxcclxcbiAgICAgICAgPHA+SGxhZGF0OlxcclxcbiAgICAgICAgICAgIDxpbnB1dCBuZy1tb2RlbD1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLmZpbHRlcl9maWxlc1xcXCIvPlxcclxcbiAgICAgICAgPC9wPlxcclxcbiAgICAgICAgPHA+Wm9yYWRpdCBwb2RsYTpcXHJcXG4gICAgICAgICAgICA8c2VsZWN0IG5nLW1vZGVsPVxcXCIkY3RybC5tZWRpYVNlcnZpY2Uub3JkZXJfZmlsZXNfYnlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJuYW1lXFxcIj5OYXp2dTwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJzaXplXFxcIj5WZWxrb3N0aTwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJjcmVhdGVkX3RpbWVcXFwiPkRhdHVtdSB2eXR2b3JlbmlhPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIm5pY2VUeXBlXFxcIj5UeXB1IHN1Ym9ydTwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgIDwvc2VsZWN0PlxcclxcbiAgICAgICAgPC9wPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJsZWZ0LW1lbnUvbGVmdC5tZW51LnRwbC5odG1sXCIsXCI8ZGl2IGlkPVxcXCJsZWZ0X21lbnVcXFwiPlxcclxcbiAgICA8dWw+XFxyXFxuICAgICAgICA8bGkgbmctc2hvdz1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLmRpclxcXCIgbmctY2xpY2s9XFxcIiRjdHJsLm1lZGlhU2VydmljZS5sb2FkRGlyKCRjdHJsLm1lZGlhU2VydmljZS5kaXIsIHRydWUpXFxcIiBzdHlsZT1cXFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMThweDtcXFwiPk5hZHJhZGVueSBhZHJlc2FyPC9saT5cXHJcXG4gICAgICAgIDxsaSBuZy1yZXBlYXQ9XFxcImRpciBpbiAkY3RybC5tZWRpYVNlcnZpY2UuZGlyc19kYXRhIHwgZmlsdGVyOiB7bmFtZSA6JGN0cmwubWVkaWFTZXJ2aWNlLmZpbHRlcl9maWxlcywgaW5UcmFzaDogZmFsc2V9XFxcIiBuZy1jbGljaz1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLmxvYWREaXIoZGlyKVxcXCIgPnt7ZGlyLm5hbWV9fTwvbGk+XFxyXFxuICAgIDwvdWw+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImFsZXJ0XFxcIiBuZy1jbGFzcz1cXFwiYWxlcnQudHlwZVxcXCIgbmctcmVwZWF0PVxcXCJhbGVydCBpbiAkY3RybC5hbGVydHNTZXJ2aWNlLmFsZXJ0cyB0cmFjayBieSAkaW5kZXhcXFwiPnt7YWxlcnQubWVzc2FnZX19PC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImxvYWRlclxcXCIgbmctaWY9XFxcIiRjdHJsLmxvYWRpbmdTZXJ2aWNlLmxvYWRpbmdTdGFydFxcXCI+TG9hZGluZy4uLjwvZGl2PlxcclxcblxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJpY29uLXRyYXNoXFxcIiBuZy1pZj1cXFwiJGN0cmwudHJhc2hTZXJ2aWNlLnRyYXNoQ291bnRzXFxcIiBuZy1jbGljaz1cXFwiJGN0cmwudHJhc2hTZXJ2aWNlLmNsZWFyVHJhc2goKVxcXCIgc3R5bGU9XFxcImZsb2F0OiBsZWZ0O1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0cmFzaC1saWRcXFwiIHN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOiAjRTVFOUVBXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInRyYXNoLWNvbnRhaW5lclxcXCIgc3R5bGU9XFxcImJhY2tncm91bmQtY29sb3I6ICNFNUU5RUFcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidHJhc2gtbGluZS0xXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInRyYXNoLWxpbmUtMlxcXCI+PC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0cmFzaC1saW5lLTNcXFwiPjwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBuZy1pZj1cXFwiJGN0cmwudHJhc2hTZXJ2aWNlLnRyYXNoQ291bnRzXFxcIiA+VHJhc2ggaGFzOiB7eyRjdHJsLnRyYXNoU2VydmljZS50cmFzaENvdW50c319IGdhcmJhZ2UgaXRlbXM8L2Rpdj5cXHJcXG48L2Rpdj5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJtZWRpYS1icm93c2VyL21lZGlhLmJyb3dzZXIudHBsLmh0bWxcIixcIjxkaXYgaWQ9XFxcIk1lZGlhQnJvd3NlclxcXCI+XFxyXFxuICAgIDxkaXYgaWQ9XFxcImhlYWRlcjFcXFwiPlxcclxcbiAgICAgICAgPGltZyBuZy1jbGljaz1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLnRvZ2dsZUxlZnRNZW51KClcXFwiIGlkPVxcXCJtZW51X2ljb25cXFwiIHNyYz1cXFwiaW1nL21lbnUucG5nXFxcIiBzdHlsZT1cXFwid2lkdGg6NTBweDsgaGVpZ2h0OjEwMCU7ZmxvYXQ6bGVmdDsgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXFwiPlxcclxcbiAgICAgICAgPGgxPk1lZGlhIEJyb3dzZXI8L2gxPlxcclxcbiAgICAgICAgPGltZyBpZD1cXFwiemF2cmlfZGlhbG9nXFxcIlxcclxcbiAgICAgICAgICAgICBuZy1jbGljaz1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLnRvZ2dsZURpYWxvZygpXFxcIlxcclxcbiAgICAgICAgICAgICBzcmM9XFxcImltZy9jbG9zZS5wbmdcXFwiIHN0eWxlPVxcXCJ3aWR0aDo0MHB4OyBoZWlnaHQ6MTAwJTtmbG9hdDpyaWdodDsgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxcIj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgIDxhcHBsaWNhdGlvbi1yb290PjwvYXBwbGljYXRpb24tcm9vdD5cXHJcXG48L2Rpdj5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJzdHZvcmVjL3N0dm9yZWMudHBsLmh0bWxcIixcIjxkaXYgaWQ9XFxcInN0dm9yZWNcXFwiPlxcclxcbiAgICA8aW1nIHN0eWxlPVxcXCJtYXgtaGVpZ2h0OiAyNXZ3OyBtYXgtd2lkdGg6IDI1dnc7XFxcIiBuZy1pZj1cXFwiJGN0cmwuaXNJbWFnZVxcXCIgbmctc3JjPVxcXCJ7eyRjdHJsLm1lZGlhU2VydmljZS5zZWxlY3RlZEZpbGV9fVxcXCI+XFxyXFxuPC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwidXBsb2FkLWZpbGUvdXBsb2FkLmZpbGUudHBsLmh0bWxcIixcIjxkaXYgY2xhc3M9XFxcInB1bGwtcmlnaHQgZHJvcC1pbWctem9uZVxcXCI+XFxyXFxuICAgIDxpbnB1dCBpZD1cXFwiZHJhZ2dpbmdcXFwiXFxyXFxuICAgICAgICAgICBjbGFzcz1cXFwiaGlkZGVuXFxcIlxcclxcbiAgICAgICAgICAgdHlwZT1cXFwiZmlsZVxcXCJcXHJcXG4gICAgICAgICAgIGFjY2VwdD1cXFwie3skY3RybC5maWxlQWNjZXB0fX1cXFwiXFxyXFxuICAgICAgICAgICBtdWx0aXBsZS8+XFxyXFxuICAgIDxkaXY+XFxyXFxuICAgICAgICA8c3Bhbj5VcGxvYWQgc3Vib3J1OiA8L3NwYW4+XFxyXFxuICAgICAgICA8YSBjbGFzcz1cXFwiY3Vyc29yLXBvaW50ZXIgdXBsb2FkLWJ0blxcXCIgbmctY2xpY2s9XFxcIiRjdHJsLmZpcmVVcGxvYWRFdmVudCgpXFxcIj5cXHJcXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZGlzcGxheS1ibG9ja1xcXCIgdHJhbnNsYXRlPlVwbG9hZDwvc3Bhbj5cXHJcXG4gICAgICAgIDwvYT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxwPk5vdnkgYWRyZXNhcjpcXHJcXG4gICAgICAgIDxpbnB1dCBuZy1tb2RlbD1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLm5ld19kaXJcXFwiLz5cXHJcXG4gICAgICAgIDxidXR0b24gbmctY2xpY2s9XFxcIiRjdHJsLmNyZWF0ZU5ld0RpcigpXFxcIj5DUkVBVEU8L2J1dHRvbj5cXHJcXG4gICAgPC9wPlxcclxcbjwvZGl2PlwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcInV2b2QvdXZvZC50cGwuaHRtbFwiLFwiPGRpdj5cXHJcXG4gICAgPGRpdiBpZD1cXFwidXZvZFxcXCJcXHJcXG4gICAgICAgICBuZy1jbGFzcz1cXFwie1xcJ2hhbGZ2aWV3XFwnOiAkY3RybC5tZWRpYVNlcnZpY2Uuc2hvd0RpYWxvZ31cXFwiXFxyXFxuICAgICAgICAgbmctY2xpY2s9XFxcIiRjdHJsLm1lZGlhU2VydmljZS5jbG9zZURpYWxvZygpXFxcIj5cXHJcXG4gICAgICAgIDxzdHZvcmVjPjwvc3R2b3JlYz5cXHJcXG5cXHJcXG4gICAgICAgIDxidXR0b24gaWQ9XFxcInpvYnJhel9kaWFsb2dcXFwiXFxyXFxuICAgICAgICAgICAgICAgIG5nLWNsaWNrPVxcXCIkY3RybC5tZWRpYVNlcnZpY2UudG9nZ2xlRGlhbG9nKCk7ICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcXFwiXFxyXFxuICAgICAgICAgICAgICAgIHN0eWxlPVxcXCJtYXJnaW4tbGVmdDphdXRvO21hcmdpbi1yaWdodDphdXRvO2Rpc3BsYXk6YmxvY2s7IGJhY2tncm91bmQtY29sb3I6IzQ2NDk0YTtjb2xvcjogd2hpdGU7IHBhZGRpbmc6IDVweCA1cHggNXB4IDVweFxcXCI+Wk9CUkFaSVQgRElBTE9HXFxyXFxuICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuXFxyXFxuICAgIDxtZWRpYS1icm93c2VyIG5nLWlmPVxcXCIkY3RybC5tZWRpYVNlcnZpY2Uuc2hvd0RpYWxvZ1xcXCI+PC9tZWRpYS1icm93c2VyPlxcclxcbjwvZGl2PlwiKTt9XSk7Il19
