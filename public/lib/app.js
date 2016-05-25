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
        key: 'restoreObject',
        value: function restoreObject(obj) {
            var isDir = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

            obj.inTrash = false;
            if (isDir) {
                var index = this.directoryList.indexOf(obj);
                if (index > -1) {
                    this.directoryList.splice(index, 1);
                }
            } else {
                var _index = this.fileList.indexOf(obj);
                if (_index > -1) {
                    this.fileList.splice(_index, 1);
                }
            }
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
  $templateCache.put("left-menu/left.menu.tpl.html", "<div id=\"left_menu\">\r\n    <ul>\r\n        <li ng-show=\"$ctrl.mediaService.dir\" ng-click=\"$ctrl.mediaService.loadDir($ctrl.mediaService.dir, true)\" style=\"font-weight: bold; font-size: 18px;\">Nadradeny adresar</li>\r\n        <li ng-repeat=\"dir in $ctrl.mediaService.dirs_data | filter: {name :$ctrl.mediaService.filter_files, inTrash: false}\" ng-click=\"$ctrl.mediaService.loadDir(dir)\" >{{dir.name}}</li>\r\n    </ul>\r\n    <div class=\"alert\" ng-class=\"alert.type\" ng-repeat=\"alert in $ctrl.alertsService.alerts track by $index\">{{alert.message}}</div>\r\n    <div class=\"loader\" ng-if=\"$ctrl.loadingService.loadingStart\">Loading...</div>\r\n\r\n    <div class=\"icon-trash cursor-pointer\" ng-if=\"$ctrl.trashService.trashCounts\" ng-click=\"$ctrl.trashService.clearTrash()\" style=\"float: left;\">\r\n        <div class=\"trash-lid\" style=\"background-color: #E5E9EA\"></div>\r\n        <div class=\"trash-container\" style=\"background-color: #E5E9EA\"></div>\r\n        <div class=\"trash-line-1\"></div>\r\n        <div class=\"trash-line-2\"></div>\r\n        <div class=\"trash-line-3\"></div>\r\n    </div>\r\n    <div ng-if=\"$ctrl.trashService.trashCounts\">Trash has: {{$ctrl.trashService.trashCounts}} garbage items</div>\r\n    <div ng-if=\"$ctrl.trashService.trashCounts\" class=\"cursor-pointer\"\r\n         ng-click=\"$ctrl.trashService.restoreTrash()\">Restore trash</div>\r\n    <div ng-if=\"$ctrl.trashService.trashCounts\"> Content of the trash:\r\n        <div ng-repeat=\"dir in $ctrl.trashService.directoryList\" ng-click=\"$ctrl.trashService.restoreObject(dir, true)\">{{dir.name}}</div>\r\n        <div ng-repeat=\"file in $ctrl.trashService.fileList\" ng-click=\"$ctrl.trashService.restoreObject(file)\">{{file.name}}</div>\r\n    </div>\r\n</div>");
  $templateCache.put("media-browser/media.browser.tpl.html", "<div id=\"MediaBrowser\">\r\n    <div id=\"header1\">\r\n        <img ng-click=\"$ctrl.mediaService.toggleLeftMenu()\" id=\"menu_icon\" src=\"img/menu.png\" style=\"width:50px; height:100%;float:left; align-self: flex-start;\">\r\n        <h1>Media Browser</h1>\r\n        <img id=\"zavri_dialog\"\r\n             ng-click=\"$ctrl.mediaService.toggleDialog()\"\r\n             src=\"img/close.png\" style=\"height:100%;float:right; align-self: flex-end;\">\r\n    </div>\r\n\r\n    <application-root></application-root>\r\n</div>");
  $templateCache.put("stvorec/stvorec.tpl.html", "<div id=\"stvorec\">\r\n    <img style=\"max-height: 25vw; max-width: 25vw;\" ng-if=\"$ctrl.isImage\" ng-src=\"{{$ctrl.mediaService.selectedFile}}\">\r\n</div>");
  $templateCache.put("upload-file/upload.file.tpl.html", "<div class=\"pull-right drop-img-zone\">\r\n    <input id=\"dragging\"\r\n           class=\"hidden\"\r\n           type=\"file\"\r\n           accept=\"{{$ctrl.fileAccept}}\"\r\n           multiple/>\r\n    <div>\r\n        <span>Upload suboru: </span>\r\n        <a class=\"cursor-pointer upload-btn\" ng-click=\"$ctrl.fireUploadEvent()\">\r\n            <span class=\"display-block\" translate>Upload</span>\r\n        </a>\r\n    </div>\r\n    <p>Novy adresar:\r\n        <input ng-model=\"$ctrl.mediaService.new_dir\"/>\r\n        <button ng-click=\"$ctrl.createNewDir()\">CREATE</button>\r\n    </p>\r\n</div>");
  $templateCache.put("uvod/uvod.tpl.html", "<div>\r\n    <div id=\"uvod\"\r\n         ng-class=\"{\'halfview\': $ctrl.mediaService.showDialog}\"\r\n         ng-click=\"$ctrl.mediaService.closeDialog()\">\r\n        <stvorec></stvorec>\r\n\r\n        <button id=\"zobraz_dialog\"\r\n                ng-click=\"$ctrl.mediaService.toggleDialog(); $event.stopPropagation();\"\r\n                style=\"margin-left:auto;margin-right:auto;display:block; background-color:#46494a;color: white; padding: 5px 5px 5px 5px\">ZOBRAZIT DIALOG\r\n        </button>\r\n    </div>\r\n\r\n\r\n    <media-browser ng-if=\"$ctrl.mediaService.showDialog\"></media-browser>\r\n</div>");
}]);

},{}]},{},["E:\\media-browser\\src\\app.js"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGFwcC5qcyIsInNyY1xcYXBwXFxhbGVydHMuc2VydmljZS5qcyIsInNyY1xcYXBwXFxjb21wb25lbnRzXFxhcHBsaWNhdGlvbi1yb290XFxhcHBsaWNhdGlvbi5yb290LmpzIiwic3JjXFxhcHBcXGNvbXBvbmVudHNcXGJyZWFkY3J1bWJzXFxicmVhZGNydW1icy5qcyIsInNyY1xcYXBwXFxjb21wb25lbnRzXFxkaXItYmFzZVxcZGlyLmJhc2UuanMiLCJzcmNcXGFwcFxcY29tcG9uZW50c1xcZGlyLXJldHVyblxcZGlyLnJldHVybi5qcyIsInNyY1xcYXBwXFxjb21wb25lbnRzXFxmaWxlXFxmaWxlLmpzIiwic3JjXFxhcHBcXGNvbXBvbmVudHNcXGZpbHRlci1wYW5lbFxcZmlsdGVyLnBhbmVsLmpzIiwic3JjXFxhcHBcXGNvbXBvbmVudHNcXGxlZnQtbWVudVxcbGVmdC5tZW51LmpzIiwic3JjXFxhcHBcXGNvbXBvbmVudHNcXG1lZGlhLWJyb3dzZXJcXG1lZGlhLmJyb3dzZXIuanMiLCJzcmNcXGFwcFxcY29tcG9uZW50c1xcc3R2b3JlY1xcc3R2b3JlYy5qcyIsInNyY1xcYXBwXFxjb21wb25lbnRzXFx1cGxvYWQtZmlsZVxcdXBsb2FkLmZpbGUuanMiLCJzcmNcXGFwcFxcY29tcG9uZW50c1xcdXZvZFxcdXZvZC5qcyIsInNyY1xcYXBwXFxsb2FkaW5nLnNlcnZpY2UuanMiLCJzcmNcXGFwcFxcbWVkaWEuc2VydmljZS5qcyIsInNyY1xcYXBwXFx0cmFzaC5zZXJ2aWNlLmpzIiwic3JjXFx0cGxcXGluZGV4LmpzIiwic3JjXFx0cGxcXHRlbXBsYXRlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7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Z0NBQW5CLEVBQW9ELDRQQUFwRCxFQUhnRjtBQUloRixpQkFBZSxHQUFmLENBQW1CLG9CQUFuQixFQUF3QyxzbkJBQXhDLEVBSmdGO0FBS2hGLGlCQUFlLEdBQWYsQ0FBbUIsb0NBQW5CLEVBQXdELHduQkFBeEQsRUFMZ0Y7QUFNaEYsaUJBQWUsR0FBZixDQUFtQiw4QkFBbkIsRUFBa0QsMndEQUFsRCxFQU5nRjtBQU9oRixpQkFBZSxHQUFmLENBQW1CLHNDQUFuQixFQUEwRCxtaEJBQTFELEVBUGdGO0FBUWhGLGlCQUFlLEdBQWYsQ0FBbUIsMEJBQW5CLEVBQThDLGlLQUE5QyxFQVJnRjtBQVNoRixpQkFBZSxHQUFmLENBQW1CLGtDQUFuQixFQUFzRCx5bUJBQXRELEVBVGdGO0FBVWhGLGlCQUFlLEdBQWYsQ0FBbUIsb0JBQW5CLEVBQXdDLDRtQkFBeEMsRUFWZ0Y7Q0FBekIsQ0FBdkQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vdHBsL2luZGV4JztcclxuaW1wb3J0IHV2b2QgZnJvbSAnLi9hcHAvY29tcG9uZW50cy91dm9kL3V2b2QnO1xyXG5pbXBvcnQgbWVkaWFCcm93c2VyIGZyb20gJy4vYXBwL2NvbXBvbmVudHMvbWVkaWEtYnJvd3Nlci9tZWRpYS5icm93c2VyJztcclxuaW1wb3J0IHJvb3QgZnJvbSAnLi9hcHAvY29tcG9uZW50cy9hcHBsaWNhdGlvbi1yb290L2FwcGxpY2F0aW9uLnJvb3QnO1xyXG5pbXBvcnQgbGVmdE1lbnUgZnJvbSAnLi9hcHAvY29tcG9uZW50cy9sZWZ0LW1lbnUvbGVmdC5tZW51JztcclxuaW1wb3J0IGRpclJldHVybiBmcm9tICcuL2FwcC9jb21wb25lbnRzL2Rpci1yZXR1cm4vZGlyLnJldHVybic7XHJcbmltcG9ydCBkaXJCYXNlIGZyb20gJy4vYXBwL2NvbXBvbmVudHMvZGlyLWJhc2UvZGlyLmJhc2UnO1xyXG5pbXBvcnQgZmlsZSBmcm9tICcuL2FwcC9jb21wb25lbnRzL2ZpbGUvZmlsZSc7XHJcbmltcG9ydCBzdHZvcmVjIGZyb20gJy4vYXBwL2NvbXBvbmVudHMvc3R2b3JlYy9zdHZvcmVjJztcclxuaW1wb3J0IGJyZWFkY3J1bWJzIGZyb20gJy4vYXBwL2NvbXBvbmVudHMvYnJlYWRjcnVtYnMvYnJlYWRjcnVtYnMnO1xyXG5pbXBvcnQgZmlsdGVyUGFuZWwgZnJvbSAnLi9hcHAvY29tcG9uZW50cy9maWx0ZXItcGFuZWwvZmlsdGVyLnBhbmVsJztcclxuaW1wb3J0IHVwbG9hZEZpbGUgZnJvbSAnLi9hcHAvY29tcG9uZW50cy91cGxvYWQtZmlsZS91cGxvYWQuZmlsZSc7XHJcblxyXG5pbXBvcnQgTWVkaWFTZXJ2aWNlIGZyb20gJy4vYXBwL21lZGlhLnNlcnZpY2UnO1xyXG5pbXBvcnQgQWxlcnRzU2VydmljZSBmcm9tICcuL2FwcC9hbGVydHMuc2VydmljZSc7XHJcbmltcG9ydCBMb2FkaW5nU2VydmljZSBmcm9tICcuL2FwcC9sb2FkaW5nLnNlcnZpY2UnO1xyXG5pbXBvcnQgVHJhc2hTZXJ2aWNlIGZyb20gJy4vYXBwL3RyYXNoLnNlcnZpY2UnO1xyXG5cclxuYW5ndWxhci5tb2R1bGUoJ2Jyb3dzZXInLCBbdGVtcGxhdGVdKVxyXG4gICAgLmNvbXBvbmVudCgndXZvZCcsIHV2b2QpXHJcbiAgICAuY29tcG9uZW50KCdtZWRpYUJyb3dzZXInLCBtZWRpYUJyb3dzZXIpXHJcbiAgICAuY29tcG9uZW50KCdhcHBsaWNhdGlvblJvb3QnLCByb290KVxyXG4gICAgLmNvbXBvbmVudCgnbGVmdE1lbnUnLCBsZWZ0TWVudSlcclxuICAgIC5jb21wb25lbnQoJ2RpclJldHVybicsIGRpclJldHVybilcclxuICAgIC5jb21wb25lbnQoJ2RpckJhc2UnLCBkaXJCYXNlKVxyXG4gICAgLmNvbXBvbmVudCgnZmlsZScsIGZpbGUpXHJcbiAgICAuY29tcG9uZW50KCdzdHZvcmVjJywgc3R2b3JlYylcclxuICAgIC5jb21wb25lbnQoJ2JyZWFkY3J1bWJzJywgYnJlYWRjcnVtYnMpXHJcbiAgICAuY29tcG9uZW50KCdmaWx0ZXJQYW5lbCcsIGZpbHRlclBhbmVsKVxyXG4gICAgLmNvbXBvbmVudCgndXBsb2FkRmlsZScsIHVwbG9hZEZpbGUpXHJcblxyXG4gICAgLnNlcnZpY2UoJ21lZGlhU2VydmljZScsIE1lZGlhU2VydmljZSlcclxuICAgIC5zZXJ2aWNlKCdhbGVydHNTZXJ2aWNlJywgQWxlcnRzU2VydmljZSlcclxuICAgIC5zZXJ2aWNlKCdsb2FkaW5nU2VydmljZScsIExvYWRpbmdTZXJ2aWNlKVxyXG4gICAgLnNlcnZpY2UoJ3RyYXNoU2VydmljZScsIFRyYXNoU2VydmljZSlcclxuOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFsZXJ0c1NlcnZpY2Uge1xyXG5cclxuICAgIC8vIEBuZ0luamVjdFxyXG4gICAgY29uc3RydWN0b3IoJHRpbWVvdXQpIHtcclxuICAgICAgICB0aGlzLiR0aW1lb3V0ID0gJHRpbWVvdXQ7XHJcbiAgICAgICAgdGhpcy5hbGVydHMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRBbGVydChtZXNzYWdlID0gJ0FjdGlvbiBkb25lJywgdHlwZSA9ICdzdWNjZXNzJykge1xyXG4gICAgICAgIHRoaXMuYWxlcnRzLnB1c2goe1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICB0eXBlOiB0eXBlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy4kdGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYWxlcnRzLnNoaWZ0KCk7XHJcbiAgICAgICAgfSwgNTAwMCk7XHJcbiAgICB9XHJcbn0iLCJjbGFzcyBBcHBsaWNhdGlvblJvb3R7XHJcblxyXG4gICAgLy8gQG5nSW5qZWN0XHJcbiAgICBjb25zdHJ1Y3RvcigkaHR0cCwgbWVkaWFTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgICAgIHRoaXMubWVkaWFTZXJ2aWNlID0gbWVkaWFTZXJ2aWNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBjb250cm9sbGVyOiBBcHBsaWNhdGlvblJvb3QsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcGxpY2F0aW9uLXJvb3QvYXBwbGljYXRpb24ucm9vdC50cGwuaHRtbCdcclxufTsiLCJjbGFzcyBCcmVhZGNydW1icyB7XHJcblxyXG4gICAgLy8gQG5nSW5qZWN0XHJcbiAgICBjb25zdHJ1Y3RvcigkaHR0cCwgbWVkaWFTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgICAgIHRoaXMubWVkaWFTZXJ2aWNlID0gbWVkaWFTZXJ2aWNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBjb250cm9sbGVyOiBCcmVhZGNydW1icyxcclxuICAgIHRlbXBsYXRlVXJsOiAnYnJlYWRjcnVtYnMvYnJlYWRjcnVtYnMudHBsLmh0bWwnXHJcbn0iLCJjbGFzcyBEaXJCYXNlIHtcclxuXHJcbiAgICAvLyBAbmdJbmplY3RcclxuICAgIGNvbnN0cnVjdG9yKCRodHRwLCBtZWRpYVNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XHJcbiAgICAgICAgdGhpcy5tZWRpYVNlcnZpY2UgPSBtZWRpYVNlcnZpY2U7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlRGlyKGRpciwgJGV2ZW50KSB7XHJcbiAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIHRoaXMubWVkaWFTZXJ2aWNlLmRlbGV0ZURpcihkaXIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgY29udHJvbGxlcjogRGlyQmFzZSxcclxuICAgIHRlbXBsYXRlVXJsOiAnZGlyLWJhc2UvZGlyLmJhc2UudHBsLmh0bWwnXHJcbn0iLCJjbGFzcyBEaXJSZXR1cm4ge1xyXG5cclxuICAgIC8vIEBuZ0luamVjdFxyXG4gICAgY29uc3RydWN0b3IoJGh0dHAsIG1lZGlhU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgICAgICB0aGlzLm1lZGlhU2VydmljZSA9IG1lZGlhU2VydmljZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgY29udHJvbGxlcjogRGlyUmV0dXJuLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdkaXItcmV0dXJuL2Rpci5yZXR1cm4udHBsLmh0bWwnXHJcbn0iLCJjbGFzcyBGaWxlIHtcclxuXHJcbiAgICAvLyBAbmdJbmplY3RcclxuICAgIGNvbnN0cnVjdG9yKCRodHRwLCBtZWRpYVNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XHJcbiAgICAgICAgdGhpcy5tZWRpYVNlcnZpY2UgPSBtZWRpYVNlcnZpY2U7XHJcbiAgICB9XHJcbiAgICBkZWxldGVGaWxlKGZpbGUsICRldmVudCkge1xyXG4gICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB0aGlzLm1lZGlhU2VydmljZS5kZWxldGVGaWxlKGZpbGUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdHtcclxuICAgIGNvbnRyb2xsZXI6IEZpbGUsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2ZpbGUvZmlsZS50cGwuaHRtbCdcclxufSIsImNsYXNzIEZpbHRlclBhbmVsIHtcclxuXHJcbiAgICAvLyBAbmdJbmplY3RcclxuICAgIGNvbnN0cnVjdG9yKCRodHRwLCBtZWRpYVNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XHJcbiAgICAgICAgdGhpcy5tZWRpYVNlcnZpY2UgPSBtZWRpYVNlcnZpY2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGNvbnRyb2xsZXI6IEZpbHRlclBhbmVsLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdmaWx0ZXItcGFuZWwvZmlsdGVyLnBhbmVsLnRwbC5odG1sJ1xyXG59OyIsImNsYXNzIExlZnRNZW51IHtcclxuXHJcbiAgICAvLyBAbmdJbmplY3RcclxuICAgIGNvbnN0cnVjdG9yKCRodHRwLCBtZWRpYVNlcnZpY2UsIGFsZXJ0c1NlcnZpY2UsIGxvYWRpbmdTZXJ2aWNlLCB0cmFzaFNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XHJcbiAgICAgICAgdGhpcy5tZWRpYVNlcnZpY2UgPSBtZWRpYVNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5hbGVydHNTZXJ2aWNlID0gYWxlcnRzU2VydmljZTtcclxuICAgICAgICB0aGlzLmxvYWRpbmdTZXJ2aWNlID0gbG9hZGluZ1NlcnZpY2U7XHJcbiAgICAgICAgdGhpcy50cmFzaFNlcnZpY2UgPSB0cmFzaFNlcnZpY2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGNvbnRyb2xsZXI6IExlZnRNZW51LFxyXG4gICAgdGVtcGxhdGVVcmw6ICdsZWZ0LW1lbnUvbGVmdC5tZW51LnRwbC5odG1sJ1xyXG59IiwiY2xhc3MgTWVkaWFCcm93c2VyIHtcclxuXHJcbiAgICAvLyBAbmdJbmplY3RcclxuICAgIGNvbnN0cnVjdG9yKCRodHRwLCBtZWRpYVNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XHJcbiAgICAgICAgdGhpcy5tZWRpYVNlcnZpY2UgPSBtZWRpYVNlcnZpY2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGNvbnRyb2xsZXI6IE1lZGlhQnJvd3NlcixcclxuICAgIHRlbXBsYXRlVXJsOiAnbWVkaWEtYnJvd3Nlci9tZWRpYS5icm93c2VyLnRwbC5odG1sJ1xyXG59OyIsImNsYXNzIFN0dm9yZWN7XHJcblxyXG4gICAgLy8gQG5nSW5qZWN0XHJcbiAgICBjb25zdHJ1Y3RvcigkaHR0cCwgbWVkaWFTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgICAgIHRoaXMubWVkaWFTZXJ2aWNlID0gbWVkaWFTZXJ2aWNlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBpc0ltYWdlKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWVkaWFTZXJ2aWNlLnNlbGVjdGVkRmlsZSA/IHRydWUgOiBmYWxzZTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGNvbnRyb2xsZXI6IFN0dm9yZWMsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ3N0dm9yZWMvc3R2b3JlYy50cGwuaHRtbCdcclxufSIsImNsYXNzIFVwbG9hZEZpbGUge1xyXG5cclxuICAgIC8vIEBuZ0luamVjdFxyXG4gICAgY29uc3RydWN0b3IoJHRpbWVvdXQsICRlbGVtZW50LCAkd2luZG93LCAkcm9vdFNjb3BlLCBtZWRpYVNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLiR0aW1lb3V0ID0gJHRpbWVvdXQ7XHJcbiAgICAgICAgdGhpcy4kZWxlbWVudCA9ICRlbGVtZW50O1xyXG4gICAgICAgIHRoaXMuJHdpbmRvdyA9ICR3aW5kb3c7XHJcbiAgICAgICAgdGhpcy4kcm9vdFNjb3BlID0gJHJvb3RTY29wZTtcclxuICAgICAgICB0aGlzLm1lZGlhU2VydmljZSA9IG1lZGlhU2VydmljZTtcclxuXHJcbiAgICAgICAgdGhpcy51cGxvYWRUaW1lb3V0ID0gbnVsbDtcclxuXHJcbiAgICAgICAgdGhpcy5saXN0ID0gbmV3IFNldCgpO1xyXG5cclxuICAgICAgICAvLyBkZWZhdWx0IHZhbHVlc1xyXG4gICAgICAgIGlmICghdGhpcy5maWxlQWNjZXB0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsZUFjY2VwdCA9ICcnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAkb25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuaW5wdXQgPSB0aGlzLiRlbGVtZW50LmZpbmQoXCJpbnB1dFwiKVswXTtcclxuXHJcbiAgICAgICAgdGhpcy5pbml0Q2xpY2soKTtcclxuICAgICAgICB0aGlzLmluaXRCaW5kcyh0aGlzLiRlbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRyaWdnZXIgY2xpY2sgZXZlbnQgb24gdGhpcy5pbnB1dFxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgZmlyZVVwbG9hZEV2ZW50KCkge1xyXG4gICAgICAgIGlmICh0aGlzLiR3aW5kb3cuQ3VzdG9tRXZlbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5pbnB1dC5kaXNwYXRjaEV2ZW50KG5ldyBNb3VzZUV2ZW50KFwiY2xpY2tcIikpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuY3JlYXRlRXZlbnQpIHtcclxuICAgICAgICAgICAgbGV0IGV2ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0hUTUxFdmVudHMnKTtcclxuICAgICAgICAgICAgZXYuaW5pdEV2ZW50KCdjb250ZXh0bWVudScsIHRydWUsIGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5pbnB1dC5kaXNwYXRjaEV2ZW50KGV2KTtcclxuICAgICAgICB9IGVsc2UgeyAvLyBJbnRlcm5ldCBFeHBsb3JlclxyXG4gICAgICAgICAgICB0aGlzLmlucHV0LmZpcmVFdmVudCgnb25jb250ZXh0bWVudScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZCBsaXN0ZW5lciBmb3IgY2hhbmdlIG9uIHRoaXMuaW5wdXRcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIGluaXRDbGljaygpIHtcclxuICAgICAgICB0aGlzLmlucHV0XHJcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnRhcmdldC52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICB9LCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5pbnB1dFxyXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBsaXN0ID0gZS50YXJnZXQuZmlsZXM7XHJcbiAgICAgICAgICAgICAgICBpZiAobGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZWFycmF5TGlzdChsaXN0KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lZGlhU2VydmljZS51cGxvYWRGaWxlKHRoaXMubGlzdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIGZhbHNlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0IGJpbmRzIGZvciBEcmFnJkRyb3BcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIGluaXRCaW5kcyhlbGVtZW50ID0gdGhpcy4kZWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMuZHJvcFNob3cgPSAwO1xyXG5cclxuICAgICAgICBlbGVtZW50LmJpbmQoXCJkcmFnb3ZlclwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vbkRyYWdPdmVyKGV2ZW50LCBlbGVtZW50KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy9EcmFnZ2luZyBlbmRzIG9uIHRoZSBvdmVybGF5LCB3aGljaCB0YWtlcyB0aGUgd2hvbGUgd2luZG93XHJcbiAgICAgICAgZWxlbWVudFxyXG4gICAgICAgICAgICAuYmluZChcImRyYWdlbnRlclwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZHJvcFNob3crKztcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmJpbmQoXCJkcmFnbGVhdmVcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyb3BTaG93LS07XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kcm9wU2hvdyA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25EcmFnRW5kKGV2ZW50LCBlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmJpbmQoXCJkcm9wXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyb3BTaG93ID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMub25EcmFnRW5kKGUsIGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGxpc3QgPSBlLmRhdGFUcmFuc2Zlci5maWxlcztcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JlYXJyYXlMaXN0KGxpc3QpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tZWRpYVNlcnZpY2UudXBsb2FkRmlsZSh0aGlzLmxpc3QpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfcmVhcnJheUxpc3QobGlzdCkge1xyXG4gICAgICAgIHRoaXMubGlzdC5jbGVhcigpO1xyXG4gICAgICAgIGZvciAobGV0IGZpbGVJbmRleCBpbiBsaXN0KSB7XHJcbiAgICAgICAgICAgIGlmICghaXNOYU4oZmlsZUluZGV4KSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0LmFkZChsaXN0Lml0ZW0oZmlsZUluZGV4KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkIGNsYXNzZXMgd2hlbiBhbiBpdGVtIGlzIGRyYWdnZWQgb3ZlciB0aGUgZG9jdW1lbnQgYW5kIHdoZW5cclxuICAgICAqIHRoZSB1c2VyIGxlYXZlcyB0aGUgd2luZG93LCBjYW5jZWxzIHRoZSBkcmFnIG9yIGRyb3BzIHRoZSBpdGVtXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGVcclxuICAgICAqIEBwYXJhbSBlbGVtZW50XHJcbiAgICAgKi9cclxuICAgIG9uRHJhZ092ZXIoZSwgZWxlbWVudCA9IHRoaXMuJGVsZW1lbnQpIHtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBlbGVtZW50LmFkZENsYXNzKFwiZHJhZ092ZXJcIik7XHJcbiAgICB9O1xyXG5cclxuICAgIG9uRHJhZ0VuZChlLCBlbGVtZW50ID0gdGhpcy4kZWxlbWVudCkge1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJkcmFnT3ZlclwiKTtcclxuICAgIH07XHJcblxyXG4gICAgY3JlYXRlTmV3RGlyKCkge1xyXG4gICAgICAgIHRoaXMubWVkaWFTZXJ2aWNlLmNyZWF0ZU5ld0RpcigpO1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHRlbXBsYXRlVXJsOiAndXBsb2FkLWZpbGUvdXBsb2FkLmZpbGUudHBsLmh0bWwnLFxyXG4gICAgY29udHJvbGxlcjogVXBsb2FkRmlsZVxyXG59OyIsImNsYXNzIFV2b2Qge1xyXG5cclxuICAgIC8vIEBuZ0luamVjdFxyXG4gICAgY29uc3RydWN0b3IoJGh0dHAsIG1lZGlhU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgICAgICB0aGlzLm1lZGlhU2VydmljZSA9IG1lZGlhU2VydmljZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgY29udHJvbGxlcjogVXZvZCxcclxuICAgIHRlbXBsYXRlVXJsOiAndXZvZC91dm9kLnRwbC5odG1sJ1xyXG59OyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIExvYWRpbmdTZXJ2aWNlIHtcclxuXHJcbiAgICAvLyBAbmdJbmplY3RcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nU3RhcnQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZG9Mb2FkaW5nKCl7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nU3RhcnQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzdG9wTG9hZGluZygpe1xyXG4gICAgICAgIHRoaXMubG9hZGluZ1N0YXJ0ID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG59IiwiY29uc3QgVFlQRVMgPSB7XHJcbiAgICAnUE5HJzoge1xyXG4gICAgICAgIGxpc3Q6IFsnaW1hZ2UvcG5nJ10sXHJcbiAgICAgICAgaW1hZ2U6IHRydWVcclxuICAgIH0sXHJcbiAgICAnSlBHJzoge1xyXG4gICAgICAgIGxpc3Q6IFsnaW1hZ2UvanBlZycsICdpbWFnZS9wanBlZyddLFxyXG4gICAgICAgIGltYWdlOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgJ0dJRic6IHtcclxuICAgICAgICBsaXN0OiBbJ2ltYWdlL2dpZiddLFxyXG4gICAgICAgIGltYWdlOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgJ0JNUCc6IHtcclxuICAgICAgICBsaXN0OiBbJ2ltYWdlL2JtcCddLFxyXG4gICAgICAgIGltYWdlOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgJ1RJRkYnOiBbJ2ltYWdlL2llZicsICdpbWFnZS90aWZmJ10sXHJcbiAgICAnVFhUJzoge1xyXG4gICAgICAgIGxpc3Q6IFsnYXBwbGljYXRpb24vcGxhaW4nLCAndGV4dC9wbGFpbiddLFxyXG4gICAgICAgIGljb246ICdpbWcvdHh0LnBuZydcclxuICAgIH0sXHJcbiAgICAnUERGJzoge1xyXG4gICAgICAgIGxpc3Q6IFtcImFwcGxpY2F0aW9uL3BkZlwiXSxcclxuICAgICAgICBpY29uOiAnaW1nL3BkZi5wbmcnXHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZWRpYVNlcnZpY2Uge1xyXG5cclxuICAgIC8vIEBuZ0luamVjdFxyXG4gICAgY29uc3RydWN0b3IoJGh0dHAsICR3aW5kb3csICR0aW1lb3V0LCBhbGVydHNTZXJ2aWNlLCBsb2FkaW5nU2VydmljZSwgdHJhc2hTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgICAgIHRoaXMuJHdpbmRvdyA9ICR3aW5kb3c7XHJcbiAgICAgICAgdGhpcy4kdGltZW91dCA9ICR0aW1lb3V0O1xyXG4gICAgICAgIHRoaXMuYWxlcnRzU2VydmljZSA9IGFsZXJ0c1NlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nU2VydmljZSA9IGxvYWRpbmdTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMudHJhc2hTZXJ2aWNlID0gdHJhc2hTZXJ2aWNlO1xyXG5cclxuICAgICAgICB0cmFzaFNlcnZpY2UuZGlyUmVtb3ZlRnVuYyA9IChkaXIpID0+IHRoaXMuX2RlbGV0ZURpcihkaXIpO1xyXG4gICAgICAgIHRyYXNoU2VydmljZS5maWxlUmVtb3ZlRnVuYyA9IChmaWxlKSA9PiB0aGlzLl9kZWxldGVGaWxlKGZpbGUpO1xyXG5cclxuICAgICAgICB0aGlzLmRpciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5kaXJzX2RhdGEgPSBbXTtcclxuICAgICAgICB0aGlzLmZpbGVzX2RhdGEgPSBbXTtcclxuXHJcbiAgICAgICAgdGhpcy5kaXJfbGlzdCA9IFtdO1xyXG5cclxuICAgICAgICB0aGlzLnNlbGVjdGVkRmlsZSA9IG51bGw7XHJcblxyXG4gICAgICAgIHRoaXMuc2hvd0RpYWxvZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2hvd0xlZnRNZW51ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5vcmRlcl9maWxlc19ieSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJfZmlsZXMgPSBcIlwiO1xyXG5cclxuICAgICAgICB0aGlzLm5ld19kaXIgPSAnJztcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgdGhpcy5sb2FkRGlyKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGxvYWREaXIoZGlyZWN0b3J5ID0gbnVsbCwgaXNSZXR1cm4gPSBmYWxzZSkge1xyXG4gICAgICAgIC8vIG5hY2l0YXQgbG9hZGluZyBzZXJpdnVzIGEgc3ByYXZpdCBsb2FkaW5nIHN0YXJ0XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nU2VydmljZS5kb0xvYWRpbmcoKTtcclxuXHJcbiAgICAgICAgbGV0IHVybEFkcmVzcyA9ICcnO1xyXG4gICAgICAgIGlmIChkaXJlY3RvcnkpIHtcclxuICAgICAgICAgICAgdXJsQWRyZXNzID0gZGlyZWN0b3J5LmxvY2F0aW9uICsgJy8nICsgZGlyZWN0b3J5Lm5hbWU7XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNSZXR1cm4pIHtcclxuICAgICAgICAgICAgICAgIHVybEFkcmVzcyA9IGRpcmVjdG9yeS5sb2NhdGlvbjtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlyX2xpc3QucG9wKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpcl9saXN0LnB1c2goZGlyZWN0b3J5Lm5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLiRodHRwLmdldChgaHR0cDovL21lZGlhYnJvd3Nlci5iYXJ0LnNrL2RpciR7dXJsQWRyZXNzfWApXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXIgPSByZXNwb25zZS5kYXRhLmRpcjtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlyc19kYXRhID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBkaXIgb2YgcmVzcG9uc2UuZGF0YS5kaXJzKSAge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpci5pblRyYXNoID0gdGhpcy50cmFzaFNlcnZpY2UuaXNJblRyYXNoKGRpciwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXJzX2RhdGEucHVzaChkaXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJzX2RhdGEgPSByZXNwb25zZS5kYXRhLmRpcnM7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5maWxlc19kYXRhID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBmaWxlIG9mIHJlc3BvbnNlLmRhdGEuZmlsZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3RmlsZSA9IG5ldyBGaWxlKGZpbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0ZpbGUuaW5UcmFzaCA9IHRoaXMudHJhc2hTZXJ2aWNlLmlzSW5UcmFzaChuZXdGaWxlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGVzX2RhdGEucHVzaChuZXdGaWxlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IG1lc3MgPSBlcnJvci5kYXRhLmNvZGUgPyBlcnJvci5kYXRhLmRlc2NyaXB0aW9uIDogXCJWeXNreXRsYSBzYSBjaHliYS5cIjtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRzU2VydmljZS5hZGRBbGVydChtZXNzLCAnZXJyb3InKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nU2VydmljZS5zdG9wTG9hZGluZygpO1xyXG4gICAgICAgICAgICAgICAgLy8gdG9kbyB1cm9iIGxvYWRpbiBzdG9wXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBsb2FkRmlsZShmaWxlRGlyZWN0b3J5ID0gbnVsbCkge1xyXG4gICAgICAgIGlmIChmaWxlRGlyZWN0b3J5LnRodW1iX2xpbmspIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEZpbGUgPSBmaWxlRGlyZWN0b3J5LmRvd25sb2FkX2xpbms7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0RpYWxvZyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy4kd2luZG93Lm9wZW4oZmlsZURpcmVjdG9yeS5kb3dubG9hZF9saW5rLCAnX2JsYW5rJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB1cGxvYWRGaWxlKGZpbGVzU2V0KSB7XHJcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBmaWxlc1NldCkge1xyXG4gICAgICAgICAgICB0aGlzLl91cGxvYWRGaWxlKGl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfdXBsb2FkRmlsZShmaWxlKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nU2VydmljZS5kb0xvYWRpbmcoKTtcclxuXHJcbiAgICAgICAgdmFyIGxvY2F0aW9uID0gJy8nO1xyXG4gICAgICAgIGlmICh0aGlzLmRpcikge1xyXG4gICAgICAgICAgICBsb2NhdGlvbiA9IHRoaXMuZGlyLmxvY2F0aW9uICsgJy8nICsgdGhpcy5kaXIubmFtZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImZpbGVcIiwgZmlsZSk7XHJcblxyXG4gICAgICAgIHRoaXMuJGh0dHAoe1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgICAgICAgICAgICAgIHVybDogYGh0dHA6Ly9tZWRpYWJyb3dzZXIuYmFydC5zay9tZWRpYS1icm93c2VyL2ZpbGUke2xvY2F0aW9ufWAsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6IHVuZGVmaW5lZH0sXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1SZXF1ZXN0OiBhbmd1bGFyLmlkZW50aXR5XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGVzX2RhdGEucHVzaChuZXcgRmlsZShyZXN1bHQuZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG1lc3MgPSByZXN1bHQuZGF0YS5jb2RlID8gcmVzdWx0LmRhdGEuZGVzY3JpcHRpb24gOiBcIlN1Ym9yIHVzcGVzbmUgbmFocmFueS5cIjtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRzU2VydmljZS5hZGRBbGVydChtZXNzKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IG1lc3MgPSBlcnJvci5kYXRhLmNvZGUgPyBlcnJvci5kYXRhLmRlc2NyaXB0aW9uIDogXCJWeXNreXRsYSBzYSBjaHliYS5cIjtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRzU2VydmljZS5hZGRBbGVydChtZXNzLCAnZXJyb3InKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nU2VydmljZS5zdG9wTG9hZGluZygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVOZXdEaXIoKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nU2VydmljZS5kb0xvYWRpbmcoKTtcclxuXHJcbiAgICAgICAgdmFyIGxvY2F0aW9uID0gJy8nO1xyXG4gICAgICAgIGlmICh0aGlzLmRpcikge1xyXG4gICAgICAgICAgICBsb2NhdGlvbiA9IHRoaXMuZGlyLmxvY2F0aW9uICsgJy8nICsgdGhpcy5kaXIubmFtZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuJGh0dHAoe1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogdGhpcy5uZXdfZGlyLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uOiBsb2NhdGlvblxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHVybDogYGh0dHA6Ly9tZWRpYWJyb3dzZXIuYmFydC5zay9tZWRpYS1icm93c2VyL2RpcmBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5kYXRhLmluVHJhc2ggPSB0aGlzLnRyYXNoU2VydmljZS5pc0luVHJhc2gocmVzdWx0LmRhdGEsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJzX2RhdGEucHVzaChyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgbWVzcyA9IHJlc3VsdC5kYXRhLmNvZGUgPyByZXN1bHQuZGF0YS5kZXNjcmlwdGlvbiA6IFwiUHJpZWNpbm9rIHVzcGVzbmUgdnl0dm9yZW55LlwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydHNTZXJ2aWNlLmFkZEFsZXJ0KG1lc3MpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbWVzcyA9IGVycm9yLmRhdGEuY29kZSA/IGVycm9yLmRhdGEuZGVzY3JpcHRpb24gOiBcIlZ5c2t5dGxhIHNhIGNoeWJhLlwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydHNTZXJ2aWNlLmFkZEFsZXJ0KG1lc3MsICdlcnJvcicpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmdTZXJ2aWNlLnN0b3BMb2FkaW5nKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLm5ld19kaXIgPSBcIlwiO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVEaXIoZGlyKSB7XHJcbiAgICAgICAgZGlyLmluVHJhc2ggPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudHJhc2hTZXJ2aWNlLmFkZFRvVHJhc2goZGlyKTtcclxuICAgIH1cclxuXHJcbiAgICBfZGVsZXRlRGlyKGRpcikge1xyXG4gICAgICAgIHRoaXMubG9hZGluZ1NlcnZpY2UuZG9Mb2FkaW5nKCk7XHJcblxyXG4gICAgICAgIHRoaXMuJGh0dHAoe1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgICAgICAgICAgIHVybDogYGh0dHA6Ly9tZWRpYWJyb3dzZXIuYmFydC5zay9tZWRpYS1icm93c2VyL2RpciR7ZGlyLmxvY2F0aW9ufS8ke2Rpci5uYW1lfWBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHRoaXMuZGlyc19kYXRhLmluZGV4T2YoZGlyKTtcclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXJzX2RhdGEuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxldCBtZXNzID0gcmVzdWx0LmRhdGEuY29kZSA/IHJlc3VsdC5kYXRhLmRlc2NyaXB0aW9uIDogXCJQcmllY2lub2sgdXNwZXNuZSB6bWF6YW55LlwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydHNTZXJ2aWNlLmFkZEFsZXJ0KG1lc3MpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbWVzcyA9IGVycm9yLmRhdGEuY29kZSA/IGVycm9yLmRhdGEuZGVzY3JpcHRpb24gOiBcIlZ5c2t5dGxhIHNhIGNoeWJhLlwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydHNTZXJ2aWNlLmFkZEFsZXJ0KG1lc3MsICdlcnJvcicpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmdTZXJ2aWNlLnN0b3BMb2FkaW5nKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZUZpbGUoZmlsZSl7XHJcbiAgICAgICAgZmlsZS5pblRyYXNoID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnRyYXNoU2VydmljZS5hZGRUb1RyYXNoKGZpbGUpO1xyXG4gICAgfVxyXG5cclxuICAgIF9kZWxldGVGaWxlKGZpbGUpe1xyXG4gICAgICAgIHRoaXMubG9hZGluZ1NlcnZpY2UuZG9Mb2FkaW5nKCk7XHJcblxyXG4gICAgICAgIHRoaXMuJGh0dHAoe1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgICAgICAgICAgIHVybDogYGh0dHA6Ly9tZWRpYWJyb3dzZXIuYmFydC5zay9tZWRpYS1icm93c2VyL2ZpbGUke2ZpbGUubG9jYXRpb259LyR7ZmlsZS5uYW1lfWBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHRoaXMuZmlsZXNfZGF0YS5pbmRleE9mKGZpbGUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGVzX2RhdGEuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxldCBtZXNzID0gcmVzdWx0LmRhdGEuY29kZSA/IHJlc3VsdC5kYXRhLmRlc2NyaXB0aW9uIDogXCJTdWJvciB1c3Blc25lIHptYXphbnkuXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0c1NlcnZpY2UuYWRkQWxlcnQobWVzcyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBtZXNzID0gZXJyb3IuZGF0YS5jb2RlID8gZXJyb3IuZGF0YS5kZXNjcmlwdGlvbiA6IFwiVnlza3l0bGEgc2EgY2h5YmEuXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0c1NlcnZpY2UuYWRkQWxlcnQobWVzcywgJ2Vycm9yJyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ1NlcnZpY2Uuc3RvcExvYWRpbmcoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlTGVmdE1lbnUoKSB7XHJcbiAgICAgICAgdGhpcy5zaG93TGVmdE1lbnUgPSAhdGhpcy5zaG93TGVmdE1lbnU7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlRGlhbG9nKCkge1xyXG4gICAgICAgIHRoaXMuc2hvd0RpYWxvZyA9ICF0aGlzLnNob3dEaWFsb2c7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VEaWFsb2coKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2hvd0RpYWxvZylcclxuICAgICAgICAgICAgdGhpcy5zaG93RGlhbG9nID0gIXRoaXMuc2hvd0RpYWxvZztcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBGaWxlIHtcclxuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcclxuICAgICAgICB0aGlzLmNyZWF0ZWRfdGltZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5kb3dubG9hZF9saW5rID0gbnVsbDtcclxuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbnVsbDtcclxuICAgICAgICB0aGlzLm5hbWUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy50aHVtYl9saW5rID0gbnVsbDtcclxuICAgICAgICB0aGlzLnR5cGUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMudXBkYXRlX3RpbWUgPSBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLnJhd0ZpbGUgPSBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLmluVHJhc2ggPSBmYWxzZTtcclxuXHJcbiAgICAgICAgYW5ndWxhci5tZXJnZSh0aGlzLCBkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUeXBlTmFtZShnZXRJY29uID0gZmFsc2UpIHtcclxuICAgICAgICBmb3IgKGxldCB0eXBlTmFtZSBpbiBUWVBFUykge1xyXG4gICAgICAgICAgICBsZXQgdHlwZU9iaiA9IFRZUEVTW3R5cGVOYW1lXTtcclxuICAgICAgICAgICAgaWYgKGFuZ3VsYXIuaXNEZWZpbmVkKHR5cGVPYmoubGlzdCkpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHR5cGUgb2YgdHlwZU9iai5saXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT0gdGhpcy50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnZXRJY29uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYW5ndWxhci5pc0RlZmluZWQodHlwZU9iai5pbWFnZSkgJiYgdHlwZU9iai5pbWFnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRodW1iX2xpbms7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhbmd1bGFyLmlzRGVmaW5lZCh0eXBlT2JqLmljb24pID8gdHlwZU9iai5pY29uIDogbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0eXBlTmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZXhjaGFuZ2VSYXcoZmlsZSkge1xyXG4gICAgICAgIHRoaXMuZG93bmxvYWRfbGluayA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gZmlsZS5uYW1lO1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IGZpbGUuc2l6ZTtcclxuICAgICAgICB0aGlzLnRodW1iX2xpbmsgPSBudWxsO1xyXG4gICAgICAgIHRoaXMudHlwZSA9IGZpbGUudHlwZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZV90aW1lID0gbnVsbDtcclxuICAgICAgICB0aGlzLnJhd0ZpbGUgPSBmaWxlLnJhd0ZpbGU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG5pY2VUeXBlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFR5cGVOYW1lKCkgPyB0aGlzLmdldFR5cGVOYW1lKCkgOiAnYW55JztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaWNvbigpIHtcclxuICAgICAgICBsZXQgaWNvbiA9IHRoaXMuZ2V0VHlwZU5hbWUodHJ1ZSk7XHJcbiAgICAgICAgcmV0dXJuIGljb24gPyBpY29uIDogXCJpbWcvcGxhaW4ucG5nXCJcclxuICAgIH1cclxuXHJcblxyXG59IiwiaW1wb3J0IHtGaWxlfSBmcm9tICcuL21lZGlhLnNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhc2hTZXJ2aWNlIHtcclxuXHJcbiAgICAvLyBAbmdJbmplY3RcclxuICAgIGNvbnN0cnVjdG9yKCR0aW1lb3V0KSB7XHJcbiAgICAgICAgdGhpcy4kdGltZW91dCA9ICR0aW1lb3V0O1xyXG4gICAgICAgIHRoaXMuZmlsZUxpc3QgPSBbXTtcclxuICAgICAgICB0aGlzLmRpcmVjdG9yeUxpc3QgPSBbXTtcclxuXHJcbiAgICAgICAgdGhpcy5kaXJSZW1vdmVGdW5jID0gbnVsbDtcclxuICAgICAgICB0aGlzLmZpbGVSZW1vdmVGdW5jID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBhZGRUb1RyYXNoKG9iamVjdCkge1xyXG4gICAgICAgIGlmIChvYmplY3QgaW5zdGFuY2VvZiBGaWxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsZUxpc3QucHVzaChvYmplY3QpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0b3J5TGlzdC5wdXNoKG9iamVjdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyVHJhc2goKSB7XHJcbiAgICAgICAgaWYgKGFuZ3VsYXIuaXNGdW5jdGlvbih0aGlzLmRpclJlbW92ZUZ1bmMpKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGRpciBvZiB0aGlzLmRpcmVjdG9yeUxpc3QpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlyUmVtb3ZlRnVuYy5jYWxsKHRoaXMsIGRpcik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdG9yeUxpc3Q9W107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChhbmd1bGFyLmlzRnVuY3Rpb24odGhpcy5maWxlUmVtb3ZlRnVuYykpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgZmlsZSBvZiB0aGlzLmZpbGVMaXN0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGVSZW1vdmVGdW5jLmNhbGwodGhpcywgZmlsZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGVMaXN0PVtdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlc3RvcmVUcmFzaCgpIHtcclxuICAgICAgICBmb3IgKGxldCBkaXIgb2YgdGhpcy5kaXJlY3RvcnlMaXN0KSB7XHJcbiAgICAgICAgICAgIGRpci5pblRyYXNoID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGZpbGUgb2YgdGhpcy5maWxlTGlzdCkge1xyXG4gICAgICAgICAgICBmaWxlLmluVHJhc2ggPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5maWxlTGlzdD1bXTtcclxuICAgICAgICB0aGlzLmRpcmVjdG9yeUxpc3Q9W107XHJcbiAgICB9XHJcblxyXG4gICAgcmVzdG9yZU9iamVjdChvYmosIGlzRGlyID0gZmFsc2Upe1xyXG4gICAgICAgIG9iai5pblRyYXNoID0gZmFsc2U7XHJcbiAgICAgICAgaWYoaXNEaXIpe1xyXG4gICAgICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmRpcmVjdG9yeUxpc3QuaW5kZXhPZihvYmopO1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3RvcnlMaXN0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5maWxlTGlzdC5pbmRleE9mKG9iaik7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGVMaXN0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHRyYXNoQ291bnRzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpbGVMaXN0Lmxlbmd0aCArIHRoaXMuZGlyZWN0b3J5TGlzdC5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgaXNJblRyYXNoKG9iaiwgaXNEaXIgPSBmYWxzZSkge1xyXG4gICAgICAgIGlmIChpc0Rpcikge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBkaXIgb2YgdGhpcy5kaXJlY3RvcnlMaXN0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGlyLm5hbWUgPT0gb2JqLm5hbWUgJiYgZGlyLmxvY2F0aW9uID09IG9iai5sb2NhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgZmlsZSBvZiB0aGlzLmZpbGVMaXN0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmlsZS5uYW1lID09IG9iai5uYW1lICYmIGZpbGUubG9jYXRpb24gPT0gb2JqLmxvY2F0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufSIsInJlcXVpcmUoJy4vdGVtcGxhdGVzJyk7XHJcbm1vZHVsZS5leHBvcnRzID0gJ3RlbXBsYXRlcyc7IiwiYW5ndWxhci5tb2R1bGUoXCJ0ZW1wbGF0ZXNcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkgeyR0ZW1wbGF0ZUNhY2hlLnB1dChcImFwcGxpY2F0aW9uLXJvb3QvYXBwbGljYXRpb24ucm9vdC50cGwuaHRtbFwiLFwiPGRpdiBpZD1cXFwib2tub1xcXCI+XFxyXFxuXFxyXFxuICAgIDxsZWZ0LW1lbnUgbmctaWY9XFxcIiRjdHJsLm1lZGlhU2VydmljZS5zaG93TGVmdE1lbnVcXFwiPjwvbGVmdC1tZW51PlxcclxcblxcclxcbiAgICA8ZGl2IGlkPVxcXCJvYnNhaFxcXCIgbmctY2xhc3M9XFxcIntcXCdmdWxsXFwnOiAhJGN0cmwubWVkaWFTZXJ2aWNlLnNob3dMZWZ0TWVudX1cXFwiPlxcclxcbiAgICAgICAgPGJyZWFkY3J1bWJzPjwvYnJlYWRjcnVtYnM+XFxyXFxuICAgICAgICA8ZmlsdGVyLXBhbmVsPjwvZmlsdGVyLXBhbmVsPlxcclxcblxcclxcbiAgICAgICAgPGRpdiBzdHlsZT1cXFwibWFyZ2luLWxlZnQ6MjBweDsgbWFyZ2luLXJpZ2h0OiAzMHB4XFxcIj5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8ZGlyLXJldHVybj48L2Rpci1yZXR1cm4+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPGRpci1iYXNlPjwvZGlyLWJhc2U+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPGZpbGU+PC9maWxlPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgIDwvZGl2PlxcclxcblxcclxcbjwvZGl2PlwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImJyZWFkY3J1bWJzL2JyZWFkY3J1bWJzLnRwbC5odG1sXCIsXCI8ZGl2IGlkPVxcXCJoZWFkZXIyXFxcIj5cXHJcXG4gICAgPGgyPlxcclxcbiAgICAgICAgPHNwYW4+SG9tZTwvc3Bhbj5cXHJcXG4gICAgICAgIDxzcGFuIG5nLXJlcGVhdD1cXFwiZGlyTmFtZSBpbiAkY3RybC5tZWRpYVNlcnZpY2UuZGlyX2xpc3RcXFwiPiAvIHt7ZGlyTmFtZX19IDwvc3Bhbj5cXHJcXG4gICAgPC9oMj5cXHJcXG48L2Rpdj5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJkaXItYmFzZS9kaXIuYmFzZS50cGwuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXFwiaWNvblxcXCIgbmctcmVwZWF0PVxcXCJkaXIgaW4gJGN0cmwubWVkaWFTZXJ2aWNlLmRpcnNfZGF0YSB8IGZpbHRlcjoge25hbWUgOiRjdHJsLm1lZGlhU2VydmljZS5maWx0ZXJfZmlsZXMsIGluVHJhc2g6IGZhbHNlfVxcXCIgbmctY2xpY2s9XFxcIiRjdHJsLm1lZGlhU2VydmljZS5sb2FkRGlyKGRpcilcXFwiPlxcclxcblxcclxcbiAgICA8aW1nIGNsYXNzPVxcXCJyZW1vdmVfZGlyXFxcIiBzcmM9XFxcImltZy9jbG9zZS5wbmdcXFwiICBuZy1jbGljaz1cXFwiJGN0cmwuZGVsZXRlRGlyKGRpciwgJGV2ZW50KTtcXFwiLz5cXHJcXG5cXHJcXG4gICAgPGltZyBjbGFzcz1cXFwiaW1nX2ljb25cXFwiIHNyYz1cXFwiaW1nL3ByaWVjaW5vay5wbmdcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJuYXpvdl9zdWJvcnVcXFwiPnt7ZGlyLm5hbWV9fTwvZGl2PlxcclxcblxcclxcbjwvZGl2PlwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImRpci1yZXR1cm4vZGlyLnJldHVybi50cGwuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXFwiaWNvblxcXCIgbmctc2hvdz1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLmRpclxcXCIgbmctY2xpY2s9XFxcIiRjdHJsLm1lZGlhU2VydmljZS5sb2FkRGlyKCRjdHJsLm1lZGlhU2VydmljZS5kaXIsIHRydWUpXFxcIj5cXHJcXG4gICAgPGltZyBjbGFzcz1cXFwiaW1nX2ljb25cXFwiIHNyYz1cXFwiaW1nL2FkcmVzYXIucG5nXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibmF6b3Zfc3Vib3J1XFxcIj5OYWRyYWRlbnkgYWRyZXNhcjwvZGl2PlxcclxcbjwvZGl2PlwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImZpbGUvZmlsZS50cGwuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXFwiaWNvblxcXCIgbmctcmVwZWF0PVxcXCJmaWxlIGluICRjdHJsLm1lZGlhU2VydmljZS5maWxlc19kYXRhIHwgb3JkZXJCeTogJGN0cmwubWVkaWFTZXJ2aWNlLm9yZGVyX2ZpbGVzX2J5IHwgZmlsdGVyOntuYW1lIDokY3RybC5tZWRpYVNlcnZpY2UuZmlsdGVyX2ZpbGVzLCBpblRyYXNoOiBmYWxzZX1cXFwiIG5nLWNsaWNrPVxcXCIkY3RybC5tZWRpYVNlcnZpY2UubG9hZEZpbGUoZmlsZSlcXFwiPlxcclxcbiAgICA8aW1nIGNsYXNzPVxcXCJyZW1vdmVfZGlyXFxcIiBzcmM9XFxcImltZy9jbG9zZS5wbmdcXFwiIG5nLWNsaWNrPVxcXCIkY3RybC5kZWxldGVGaWxlKGZpbGUsICRldmVudCk7XFxcIj5cXHJcXG4gICAgPGltZyBjbGFzcz1cXFwiaW1nX3BpY3R1cmVcXFwiICBuZy1zcmM9XFxcInt7ZmlsZS5pY29ufX1cXFwiPlxcclxcblxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJuYXpvdl9zdWJvcnVcXFwiPnt7ZmlsZS5uYW1lfX08L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwidHlwX3N1Ym9ydVxcXCI+XFxyXFxuICAgICAgICA8cD57e2ZpbGUubmljZVR5cGV9fTwvcD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInZlbGtvc3Rfc3Vib3J1XFxcIj5cXHJcXG4gICAgICAgIDxwPnt7ZmlsZS5zaXplfX08L3A+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImZpbHRlci1wYW5lbC9maWx0ZXIucGFuZWwudHBsLmh0bWxcIixcIjxkaXYgY2xhc3M9XFxcImZpbHRlci1wYW5lbFxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZpbHRlclxcXCI+XFxyXFxuICAgICAgICA8dXBsb2FkLWZpbGU+PC91cGxvYWQtZmlsZT5cXHJcXG4gICAgICAgIDxwPkhsYWRhdDpcXHJcXG4gICAgICAgICAgICA8aW5wdXQgbmctbW9kZWw9XFxcIiRjdHJsLm1lZGlhU2VydmljZS5maWx0ZXJfZmlsZXNcXFwiLz5cXHJcXG4gICAgICAgIDwvcD5cXHJcXG4gICAgICAgIDxwPlpvcmFkaXQgcG9kbGE6XFxyXFxuICAgICAgICAgICAgPHNlbGVjdCBuZy1tb2RlbD1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLm9yZGVyX2ZpbGVzX2J5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwibmFtZVxcXCI+TmF6dnU8L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwic2l6ZVxcXCI+VmVsa29zdGk8L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiY3JlYXRlZF90aW1lXFxcIj5EYXR1bXUgdnl0dm9yZW5pYTwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJuaWNlVHlwZVxcXCI+VHlwdSBzdWJvcnU8L29wdGlvbj5cXHJcXG4gICAgICAgICAgICA8L3NlbGVjdD5cXHJcXG4gICAgICAgIDwvcD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwibGVmdC1tZW51L2xlZnQubWVudS50cGwuaHRtbFwiLFwiPGRpdiBpZD1cXFwibGVmdF9tZW51XFxcIj5cXHJcXG4gICAgPHVsPlxcclxcbiAgICAgICAgPGxpIG5nLXNob3c9XFxcIiRjdHJsLm1lZGlhU2VydmljZS5kaXJcXFwiIG5nLWNsaWNrPVxcXCIkY3RybC5tZWRpYVNlcnZpY2UubG9hZERpcigkY3RybC5tZWRpYVNlcnZpY2UuZGlyLCB0cnVlKVxcXCIgc3R5bGU9XFxcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE4cHg7XFxcIj5OYWRyYWRlbnkgYWRyZXNhcjwvbGk+XFxyXFxuICAgICAgICA8bGkgbmctcmVwZWF0PVxcXCJkaXIgaW4gJGN0cmwubWVkaWFTZXJ2aWNlLmRpcnNfZGF0YSB8IGZpbHRlcjoge25hbWUgOiRjdHJsLm1lZGlhU2VydmljZS5maWx0ZXJfZmlsZXMsIGluVHJhc2g6IGZhbHNlfVxcXCIgbmctY2xpY2s9XFxcIiRjdHJsLm1lZGlhU2VydmljZS5sb2FkRGlyKGRpcilcXFwiID57e2Rpci5uYW1lfX08L2xpPlxcclxcbiAgICA8L3VsPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydFxcXCIgbmctY2xhc3M9XFxcImFsZXJ0LnR5cGVcXFwiIG5nLXJlcGVhdD1cXFwiYWxlcnQgaW4gJGN0cmwuYWxlcnRzU2VydmljZS5hbGVydHMgdHJhY2sgYnkgJGluZGV4XFxcIj57e2FsZXJ0Lm1lc3NhZ2V9fTwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJsb2FkZXJcXFwiIG5nLWlmPVxcXCIkY3RybC5sb2FkaW5nU2VydmljZS5sb2FkaW5nU3RhcnRcXFwiPkxvYWRpbmcuLi48L2Rpdj5cXHJcXG5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiaWNvbi10cmFzaCBjdXJzb3ItcG9pbnRlclxcXCIgbmctaWY9XFxcIiRjdHJsLnRyYXNoU2VydmljZS50cmFzaENvdW50c1xcXCIgbmctY2xpY2s9XFxcIiRjdHJsLnRyYXNoU2VydmljZS5jbGVhclRyYXNoKClcXFwiIHN0eWxlPVxcXCJmbG9hdDogbGVmdDtcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidHJhc2gtbGlkXFxcIiBzdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjogI0U1RTlFQVxcXCI+PC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0cmFzaC1jb250YWluZXJcXFwiIHN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOiAjRTVFOUVBXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInRyYXNoLWxpbmUtMVxcXCI+PC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0cmFzaC1saW5lLTJcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidHJhc2gtbGluZS0zXFxcIj48L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgbmctaWY9XFxcIiRjdHJsLnRyYXNoU2VydmljZS50cmFzaENvdW50c1xcXCI+VHJhc2ggaGFzOiB7eyRjdHJsLnRyYXNoU2VydmljZS50cmFzaENvdW50c319IGdhcmJhZ2UgaXRlbXM8L2Rpdj5cXHJcXG4gICAgPGRpdiBuZy1pZj1cXFwiJGN0cmwudHJhc2hTZXJ2aWNlLnRyYXNoQ291bnRzXFxcIiBjbGFzcz1cXFwiY3Vyc29yLXBvaW50ZXJcXFwiXFxyXFxuICAgICAgICAgbmctY2xpY2s9XFxcIiRjdHJsLnRyYXNoU2VydmljZS5yZXN0b3JlVHJhc2goKVxcXCI+UmVzdG9yZSB0cmFzaDwvZGl2PlxcclxcbiAgICA8ZGl2IG5nLWlmPVxcXCIkY3RybC50cmFzaFNlcnZpY2UudHJhc2hDb3VudHNcXFwiPiBDb250ZW50IG9mIHRoZSB0cmFzaDpcXHJcXG4gICAgICAgIDxkaXYgbmctcmVwZWF0PVxcXCJkaXIgaW4gJGN0cmwudHJhc2hTZXJ2aWNlLmRpcmVjdG9yeUxpc3RcXFwiIG5nLWNsaWNrPVxcXCIkY3RybC50cmFzaFNlcnZpY2UucmVzdG9yZU9iamVjdChkaXIsIHRydWUpXFxcIj57e2Rpci5uYW1lfX08L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgbmctcmVwZWF0PVxcXCJmaWxlIGluICRjdHJsLnRyYXNoU2VydmljZS5maWxlTGlzdFxcXCIgbmctY2xpY2s9XFxcIiRjdHJsLnRyYXNoU2VydmljZS5yZXN0b3JlT2JqZWN0KGZpbGUpXFxcIj57e2ZpbGUubmFtZX19PC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcIm1lZGlhLWJyb3dzZXIvbWVkaWEuYnJvd3Nlci50cGwuaHRtbFwiLFwiPGRpdiBpZD1cXFwiTWVkaWFCcm93c2VyXFxcIj5cXHJcXG4gICAgPGRpdiBpZD1cXFwiaGVhZGVyMVxcXCI+XFxyXFxuICAgICAgICA8aW1nIG5nLWNsaWNrPVxcXCIkY3RybC5tZWRpYVNlcnZpY2UudG9nZ2xlTGVmdE1lbnUoKVxcXCIgaWQ9XFxcIm1lbnVfaWNvblxcXCIgc3JjPVxcXCJpbWcvbWVudS5wbmdcXFwiIHN0eWxlPVxcXCJ3aWR0aDo1MHB4OyBoZWlnaHQ6MTAwJTtmbG9hdDpsZWZ0OyBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcXCI+XFxyXFxuICAgICAgICA8aDE+TWVkaWEgQnJvd3NlcjwvaDE+XFxyXFxuICAgICAgICA8aW1nIGlkPVxcXCJ6YXZyaV9kaWFsb2dcXFwiXFxyXFxuICAgICAgICAgICAgIG5nLWNsaWNrPVxcXCIkY3RybC5tZWRpYVNlcnZpY2UudG9nZ2xlRGlhbG9nKClcXFwiXFxyXFxuICAgICAgICAgICAgIHNyYz1cXFwiaW1nL2Nsb3NlLnBuZ1xcXCIgc3R5bGU9XFxcImhlaWdodDoxMDAlO2Zsb2F0OnJpZ2h0OyBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXFwiPlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgPGFwcGxpY2F0aW9uLXJvb3Q+PC9hcHBsaWNhdGlvbi1yb290PlxcclxcbjwvZGl2PlwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcInN0dm9yZWMvc3R2b3JlYy50cGwuaHRtbFwiLFwiPGRpdiBpZD1cXFwic3R2b3JlY1xcXCI+XFxyXFxuICAgIDxpbWcgc3R5bGU9XFxcIm1heC1oZWlnaHQ6IDI1dnc7IG1heC13aWR0aDogMjV2dztcXFwiIG5nLWlmPVxcXCIkY3RybC5pc0ltYWdlXFxcIiBuZy1zcmM9XFxcInt7JGN0cmwubWVkaWFTZXJ2aWNlLnNlbGVjdGVkRmlsZX19XFxcIj5cXHJcXG48L2Rpdj5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJ1cGxvYWQtZmlsZS91cGxvYWQuZmlsZS50cGwuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXFwicHVsbC1yaWdodCBkcm9wLWltZy16b25lXFxcIj5cXHJcXG4gICAgPGlucHV0IGlkPVxcXCJkcmFnZ2luZ1xcXCJcXHJcXG4gICAgICAgICAgIGNsYXNzPVxcXCJoaWRkZW5cXFwiXFxyXFxuICAgICAgICAgICB0eXBlPVxcXCJmaWxlXFxcIlxcclxcbiAgICAgICAgICAgYWNjZXB0PVxcXCJ7eyRjdHJsLmZpbGVBY2NlcHR9fVxcXCJcXHJcXG4gICAgICAgICAgIG11bHRpcGxlLz5cXHJcXG4gICAgPGRpdj5cXHJcXG4gICAgICAgIDxzcGFuPlVwbG9hZCBzdWJvcnU6IDwvc3Bhbj5cXHJcXG4gICAgICAgIDxhIGNsYXNzPVxcXCJjdXJzb3ItcG9pbnRlciB1cGxvYWQtYnRuXFxcIiBuZy1jbGljaz1cXFwiJGN0cmwuZmlyZVVwbG9hZEV2ZW50KClcXFwiPlxcclxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJkaXNwbGF5LWJsb2NrXFxcIiB0cmFuc2xhdGU+VXBsb2FkPC9zcGFuPlxcclxcbiAgICAgICAgPC9hPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPHA+Tm92eSBhZHJlc2FyOlxcclxcbiAgICAgICAgPGlucHV0IG5nLW1vZGVsPVxcXCIkY3RybC5tZWRpYVNlcnZpY2UubmV3X2RpclxcXCIvPlxcclxcbiAgICAgICAgPGJ1dHRvbiBuZy1jbGljaz1cXFwiJGN0cmwuY3JlYXRlTmV3RGlyKClcXFwiPkNSRUFURTwvYnV0dG9uPlxcclxcbiAgICA8L3A+XFxyXFxuPC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwidXZvZC91dm9kLnRwbC5odG1sXCIsXCI8ZGl2PlxcclxcbiAgICA8ZGl2IGlkPVxcXCJ1dm9kXFxcIlxcclxcbiAgICAgICAgIG5nLWNsYXNzPVxcXCJ7XFwnaGFsZnZpZXdcXCc6ICRjdHJsLm1lZGlhU2VydmljZS5zaG93RGlhbG9nfVxcXCJcXHJcXG4gICAgICAgICBuZy1jbGljaz1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLmNsb3NlRGlhbG9nKClcXFwiPlxcclxcbiAgICAgICAgPHN0dm9yZWM+PC9zdHZvcmVjPlxcclxcblxcclxcbiAgICAgICAgPGJ1dHRvbiBpZD1cXFwiem9icmF6X2RpYWxvZ1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgbmctY2xpY2s9XFxcIiRjdHJsLm1lZGlhU2VydmljZS50b2dnbGVEaWFsb2coKTsgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgc3R5bGU9XFxcIm1hcmdpbi1sZWZ0OmF1dG87bWFyZ2luLXJpZ2h0OmF1dG87ZGlzcGxheTpibG9jazsgYmFja2dyb3VuZC1jb2xvcjojNDY0OTRhO2NvbG9yOiB3aGl0ZTsgcGFkZGluZzogNXB4IDVweCA1cHggNXB4XFxcIj5aT0JSQVpJVCBESUFMT0dcXHJcXG4gICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG5cXHJcXG4gICAgPG1lZGlhLWJyb3dzZXIgbmctaWY9XFxcIiRjdHJsLm1lZGlhU2VydmljZS5zaG93RGlhbG9nXFxcIj48L21lZGlhLWJyb3dzZXI+XFxyXFxuPC9kaXY+XCIpO31dKTsiXX0=
