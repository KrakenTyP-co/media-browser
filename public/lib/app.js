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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

angular.module('browser', [_index2.default]).component('uvod', _uvod2.default).component('mediaBrowser', _media2.default).component('applicationRoot', _application2.default).component('leftMenu', _left2.default).component('dirReturn', _dir2.default).component('dirBase', _dir4.default).component('file', _file2.default).component('stvorec', _stvorec2.default).component('breadcrumbs', _breadcrumbs2.default).component('filterPanel', _filter2.default).component('uploadFile', _upload2.default).service('mediaService', _media4.default).service('alertsService', _alerts2.default).service('loadingService', _loading2.default);

},{"./app/alerts.service":"E:\\media-browser\\src\\app\\alerts.service.js","./app/components/application-root/application.root":"E:\\media-browser\\src\\app\\components\\application-root\\application.root.js","./app/components/breadcrumbs/breadcrumbs":"E:\\media-browser\\src\\app\\components\\breadcrumbs\\breadcrumbs.js","./app/components/dir-base/dir.base":"E:\\media-browser\\src\\app\\components\\dir-base\\dir.base.js","./app/components/dir-return/dir.return":"E:\\media-browser\\src\\app\\components\\dir-return\\dir.return.js","./app/components/file/file":"E:\\media-browser\\src\\app\\components\\file\\file.js","./app/components/filter-panel/filter.panel":"E:\\media-browser\\src\\app\\components\\filter-panel\\filter.panel.js","./app/components/left-menu/left.menu":"E:\\media-browser\\src\\app\\components\\left-menu\\left.menu.js","./app/components/media-browser/media.browser":"E:\\media-browser\\src\\app\\components\\media-browser\\media.browser.js","./app/components/stvorec/stvorec":"E:\\media-browser\\src\\app\\components\\stvorec\\stvorec.js","./app/components/upload-file/upload.file":"E:\\media-browser\\src\\app\\components\\upload-file\\upload.file.js","./app/components/uvod/uvod":"E:\\media-browser\\src\\app\\components\\uvod\\uvod.js","./app/loading.service":"E:\\media-browser\\src\\app\\loading.service.js","./app/media.service":"E:\\media-browser\\src\\app\\media.service.js","./tpl/index":"E:\\media-browser\\src\\tpl\\index.js"}],"E:\\media-browser\\src\\app\\alerts.service.js":[function(require,module,exports){
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

},{}],"E:\\media-browser\\src\\tpl\\index.js":[function(require,module,exports){
'use strict';

require('./templates');
module.exports = 'templates';

},{"./templates":"E:\\media-browser\\src\\tpl\\templates.js"}],"E:\\media-browser\\src\\tpl\\templates.js":[function(require,module,exports){
"use strict";

angular.module("templates", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("application-root/application.root.tpl.html", "<div id=\"okno\">\r\n\r\n    <left-menu ng-if=\"$ctrl.mediaService.showLeftMenu\"></left-menu>\r\n\r\n    <div id=\"obsah\" ng-class=\"{\'full\': !$ctrl.mediaService.showLeftMenu}\">\r\n        <breadcrumbs></breadcrumbs>\r\n        <filter-panel></filter-panel>\r\n\r\n        <div style=\"margin-left:20px; margin-right: 30px\">\r\n\r\n            <dir-return></dir-return>\r\n\r\n            <dir-base></dir-base>\r\n\r\n            <file></file>\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>");
  $templateCache.put("breadcrumbs/breadcrumbs.tpl.html", "<div id=\"header2\">\r\n    <h2>\r\n        <span>Home</span>\r\n        <span ng-repeat=\"dirName in $ctrl.mediaService.dir_list\"> / {{dirName}} </span>\r\n    </h2>\r\n</div>");
  $templateCache.put("dir-base/dir.base.tpl.html", "<div class=\"icon\" ng-repeat=\"dir in $ctrl.mediaService.dirs_data | filter: {name :$ctrl.mediaService.filter_files}\" ng-click=\"$ctrl.mediaService.loadDir(dir)\">\r\n\r\n    <img class=\"remove_dir\" src=\"img/close.png\"  ng-click=\"$ctrl.deleteDir(dir, $event);\"/>\r\n\r\n    <img class=\"img_icon\" src=\"img/priecinok.png\">\r\n    <div class=\"nazov_suboru\">{{dir.name}}</div>\r\n\r\n</div>");
  $templateCache.put("dir-return/dir.return.tpl.html", "<div class=\"icon\" ng-show=\"$ctrl.mediaService.dir\" ng-click=\"$ctrl.mediaService.loadDir($ctrl.mediaService.dir, true)\">\r\n    <img class=\"img_icon\" src=\"img/adresar.png\">\r\n    <div class=\"nazov_suboru\">Nadradeny adresar</div>\r\n</div>");
  $templateCache.put("file/file.tpl.html", "<div class=\"icon\" ng-repeat=\"file in $ctrl.mediaService.files_data | orderBy: $ctrl.mediaService.order_files_by | filter:{name :$ctrl.mediaService.filter_files}\" ng-click=\"$ctrl.mediaService.loadFile(file)\">\r\n    <img class=\"remove_dir\" src=\"img/close.png\" ng-click=\"$ctrl.deleteFile(file, $event);\">\r\n    <img class=\"img_picture\"  ng-src=\"{{file.icon}}\">\r\n\r\n    <div class=\"nazov_suboru\">{{file.name}}</div>\r\n    <div class=\"typ_suboru\">\r\n        <p>{{file.niceType}}</p>\r\n    </div>\r\n    <div class=\"velkost_suboru\">\r\n        <p>{{file.size}}</p>\r\n    </div>\r\n</div>");
  $templateCache.put("filter-panel/filter.panel.tpl.html", "<div class=\"filter-panel\">\r\n    <div class=\"filter\">\r\n        <upload-file></upload-file>\r\n        <p>Hladat:\r\n            <input ng-model=\"$ctrl.mediaService.filter_files\"/>\r\n        </p>\r\n        <p>Zoradit podla:\r\n            <select ng-model=\"$ctrl.mediaService.order_files_by\">\r\n                <option value=\"name\">Nazvu</option>\r\n                <option value=\"size\">Velkosti</option>\r\n                <option value=\"created_time\">Datumu vytvorenia</option>\r\n                <option value=\"niceType\">Typu suboru</option>\r\n            </select>\r\n        </p>\r\n    </div>\r\n</div>");
  $templateCache.put("left-menu/left.menu.tpl.html", "<div id=\"left_menu\">\r\n    <ul>\r\n        <li ng-show=\"$ctrl.mediaService.dir\" ng-click=\"$ctrl.mediaService.loadDir($ctrl.mediaService.dir, true)\" style=\"font-weight: bold; font-size: 18px;\">Nadradeny adresar</li>\r\n        <li ng-repeat=\"dir in $ctrl.mediaService.dirs_data\" ng-click=\"$ctrl.mediaService.loadDir(dir)\" >{{dir.name}}</li>\r\n    </ul>\r\n    <div class=\"alert\" ng-class=\"alert.type\" ng-repeat=\"alert in $ctrl.alertsService.alerts track by $index\">{{alert.message}}</div>\r\n    <div class=\"loader\" ng-if=\"$ctrl.loadingService.loadingStart\">Loading...</div>\r\n</div>");
  $templateCache.put("media-browser/media.browser.tpl.html", "<div id=\"MediaBrowser\">\r\n    <div id=\"header1\">\r\n        <img ng-click=\"$ctrl.mediaService.toggleLeftMenu()\" id=\"menu_icon\" src=\"img/menu.png\" style=\"width:50px; height:100%;float:left; align-self: flex-start;\">\r\n        <h1>Media Browser</h1>\r\n        <img id=\"zavri_dialog\"\r\n             ng-click=\"$ctrl.mediaService.toggleDialog()\"\r\n             src=\"img/close.png\" style=\"width:40px; height:100%;float:right; align-self: flex-end;\">\r\n    </div>\r\n\r\n    <application-root></application-root>\r\n</div>");
  $templateCache.put("stvorec/stvorec.tpl.html", "<div id=\"stvorec\">\r\n    <img style=\"max-height: 25vw; max-width: 25vw;\" ng-if=\"$ctrl.isImage\" ng-src=\"{{$ctrl.mediaService.selectedFile}}\">\r\n</div>");
  $templateCache.put("upload-file/upload.file.tpl.html", "<div class=\"pull-right\">\r\n    <input id=\"dragging\"\r\n           class=\"hidden\"\r\n           type=\"file\"\r\n           accept=\"{{$ctrl.fileAccept}}\"\r\n           multiple/>\r\n    <div>\r\n        <span>Upload suboru: </span>\r\n        <a class=\"cursor-pointer upload-btn\" ng-click=\"$ctrl.fireUploadEvent()\">\r\n            <span class=\"display-block\" translate>Upload</span>\r\n        </a>\r\n    </div>\r\n    <p>Novy adresar:\r\n        <input ng-model=\"$ctrl.mediaService.new_dir\"/>\r\n        <button ng-click=\"$ctrl.createNewDir()\">CREATE</button>\r\n    </p>\r\n</div>");
  $templateCache.put("uvod/uvod.tpl.html", "<div>\r\n    <div id=\"uvod\"\r\n         ng-class=\"{\'halfview\': $ctrl.mediaService.showDialog}\"\r\n         ng-click=\"$ctrl.mediaService.closeDialog()\">\r\n        <stvorec></stvorec>\r\n\r\n        <button id=\"zobraz_dialog\"\r\n                ng-click=\"$ctrl.mediaService.toggleDialog(); $event.stopPropagation();\"\r\n                style=\"margin-left:auto;margin-right:auto;display:block; background-color:#46494a;color: white; padding: 5px 5px 5px 5px\">ZOBRAZIT DIALOG\r\n        </button>\r\n    </div>\r\n\r\n\r\n    <media-browser ng-if=\"$ctrl.mediaService.showDialog\"></media-browser>\r\n</div>");
}]);

},{}]},{},["E:\\media-browser\\src\\app.js"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGFwcC5qcyIsInNyY1xcYXBwXFxhbGVydHMuc2VydmljZS5qcyIsInNyY1xcYXBwXFxjb21wb25lbnRzXFxhcHBsaWNhdGlvbi1yb290XFxhcHBsaWNhdGlvbi5yb290LmpzIiwic3JjXFxhcHBcXGNvbXBvbmVudHNcXGJyZWFkY3J1bWJzXFxicmVhZGNydW1icy5qcyIsInNyY1xcYXBwXFxjb21wb25lbnRzXFxkaXItYmFzZVxcZGlyLmJhc2UuanMiLCJzcmNcXGFwcFxcY29tcG9uZW50c1xcZGlyLXJldHVyblxcZGlyLnJldHVybi5qcyIsInNyY1xcYXBwXFxjb21wb25lbnRzXFxmaWxlXFxmaWxlLmpzIiwic3JjXFxhcHBcXGNvbXBvbmVudHNcXGZpbHRlci1wYW5lbFxcZmlsdGVyLnBhbmVsLmpzIiwic3JjXFxhcHBcXGNvbXBvbmVudHNcXGxlZnQtbWVudVxcbGVmdC5tZW51LmpzIiwic3JjXFxhcHBcXGNvbXBvbmVudHNcXG1lZGlhLWJyb3dzZXJcXG1lZGlhLmJyb3dzZXIuanMiLCJzcmNcXGFwcFxcY29tcG9uZW50c1xcc3R2b3JlY1xcc3R2b3JlYy5qcyIsInNyY1xcYXBwXFxjb21wb25lbnRzXFx1cGxvYWQtZmlsZVxcdXBsb2FkLmZpbGUuanMiLCJzcmNcXGFwcFxcY29tcG9uZW50c1xcdXZvZFxcdXZvZC5qcyIsInNyY1xcYXBwXFxsb2FkaW5nLnNlcnZpY2UuanMiLCJzcmNcXGFwcFxcbWVkaWEuc2VydmljZS5qcyIsInNyY1xcdHBsXFxpbmRleC5qcyIsInNyY1xcdHBsXFx0ZW1wbGF0ZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsUUFBUSxNQUFSLENBQWUsU0FBZixFQUEwQixpQkFBMUIsRUFDSyxTQURMLENBQ2UsTUFEZixrQkFFSyxTQUZMLENBRWUsY0FGZixtQkFHSyxTQUhMLENBR2UsaUJBSGYseUJBSUssU0FKTCxDQUllLFVBSmYsa0JBS0ssU0FMTCxDQUtlLFdBTGYsaUJBTUssU0FOTCxDQU1lLFNBTmYsaUJBT0ssU0FQTCxDQU9lLE1BUGYsa0JBUUssU0FSTCxDQVFlLFNBUmYscUJBU0ssU0FUTCxDQVNlLGFBVGYseUJBVUssU0FWTCxDQVVlLGFBVmYsb0JBV0ssU0FYTCxDQVdlLFlBWGYsb0JBYUssT0FiTCxDQWFhLGNBYmIsbUJBY0ssT0FkTCxDQWNhLGVBZGIsb0JBZUssT0FmTCxDQWVhLGdCQWZiOzs7Ozs7Ozs7Ozs7O0lDakJxQjs7OztBQUdqQixhQUhpQixhQUdqQixDQUFZLFFBQVosRUFBc0I7OEJBSEwsZUFHSzs7QUFDbEIsYUFBSyxRQUFMLEdBQWdCLFFBQWhCLENBRGtCO0FBRWxCLGFBQUssTUFBTCxHQUFjLEVBQWQsQ0FGa0I7S0FBdEI7O2lCQUhpQjs7bUNBUW1DOzs7Z0JBQTNDLGdFQUFVLDZCQUFpQztnQkFBbEIsNkRBQU8seUJBQVc7O0FBQ2hELGlCQUFLLE1BQUwsQ0FBWSxJQUFaLENBQWlCO0FBQ2IseUJBQVMsT0FBVDtBQUNBLHNCQUFNLElBQU47YUFGSixFQURnRDtBQUtoRCxpQkFBSyxRQUFMLENBQWMsWUFBTTtBQUNoQixzQkFBSyxNQUFMLENBQVksS0FBWixHQURnQjthQUFOLEVBRVgsSUFGSCxFQUxnRDs7OztXQVJuQzs7Ozs7Ozs7Ozs7Ozs7SUNBZjs7O0FBR0YsU0FIRSxlQUdGLENBQVksS0FBWixFQUFtQixZQUFuQixFQUFpQzswQkFIL0IsaUJBRytCOztBQUM3QixTQUFLLEtBQUwsR0FBYSxLQUFiLENBRDZCO0FBRTdCLFNBQUssWUFBTCxHQUFvQixZQUFwQixDQUY2QjtDQUFqQzs7a0JBTVc7QUFDWCxnQkFBWSxlQUFaO0FBQ0EsaUJBQWEsNENBQWI7Ozs7Ozs7Ozs7OztJQ1hFOzs7QUFHRixTQUhFLFdBR0YsQ0FBWSxLQUFaLEVBQW1CLFlBQW5CLEVBQWlDOzBCQUgvQixhQUcrQjs7QUFDN0IsU0FBSyxLQUFMLEdBQWEsS0FBYixDQUQ2QjtBQUU3QixTQUFLLFlBQUwsR0FBb0IsWUFBcEIsQ0FGNkI7Q0FBakM7O2tCQU1XO0FBQ1gsZ0JBQVksV0FBWjtBQUNBLGlCQUFhLGtDQUFiOzs7Ozs7Ozs7Ozs7OztJQ1hFOzs7O0FBR0YsYUFIRSxPQUdGLENBQVksS0FBWixFQUFtQixZQUFuQixFQUFpQzs4QkFIL0IsU0FHK0I7O0FBQzdCLGFBQUssS0FBTCxHQUFhLEtBQWIsQ0FENkI7QUFFN0IsYUFBSyxZQUFMLEdBQW9CLFlBQXBCLENBRjZCO0tBQWpDOztpQkFIRTs7a0NBUVEsS0FBSyxRQUFRO0FBQ25CLG1CQUFPLGVBQVAsR0FEbUI7QUFFbkIsaUJBQUssWUFBTCxDQUFrQixTQUFsQixDQUE0QixHQUE1QixFQUZtQjs7OztXQVJyQjs7O2tCQWVTO0FBQ1gsZ0JBQVksT0FBWjtBQUNBLGlCQUFhLDRCQUFiOzs7Ozs7Ozs7Ozs7SUNqQkU7OztBQUdGLFNBSEUsU0FHRixDQUFZLEtBQVosRUFBbUIsWUFBbkIsRUFBaUM7MEJBSC9CLFdBRytCOztBQUM3QixTQUFLLEtBQUwsR0FBYSxLQUFiLENBRDZCO0FBRTdCLFNBQUssWUFBTCxHQUFvQixZQUFwQixDQUY2QjtDQUFqQzs7a0JBTVc7QUFDWCxnQkFBWSxTQUFaO0FBQ0EsaUJBQWEsZ0NBQWI7Ozs7Ozs7Ozs7Ozs7O0lDWEU7Ozs7QUFHRixhQUhFLElBR0YsQ0FBWSxLQUFaLEVBQW1CLFlBQW5CLEVBQWlDOzhCQUgvQixNQUcrQjs7QUFDN0IsYUFBSyxLQUFMLEdBQWEsS0FBYixDQUQ2QjtBQUU3QixhQUFLLFlBQUwsR0FBb0IsWUFBcEIsQ0FGNkI7S0FBakM7O2lCQUhFOzttQ0FPUyxNQUFNLFFBQVE7QUFDckIsbUJBQU8sZUFBUCxHQURxQjtBQUVyQixpQkFBSyxZQUFMLENBQWtCLFVBQWxCLENBQTZCLElBQTdCLEVBRnFCOzs7O1dBUHZCOzs7a0JBYVE7QUFDVixnQkFBWSxJQUFaO0FBQ0EsaUJBQWEsb0JBQWI7Ozs7Ozs7Ozs7OztJQ2ZFOzs7QUFHRixTQUhFLFdBR0YsQ0FBWSxLQUFaLEVBQW1CLFlBQW5CLEVBQWlDOzBCQUgvQixhQUcrQjs7QUFDN0IsU0FBSyxLQUFMLEdBQWEsS0FBYixDQUQ2QjtBQUU3QixTQUFLLFlBQUwsR0FBb0IsWUFBcEIsQ0FGNkI7Q0FBakM7O2tCQU1XO0FBQ1gsZ0JBQVksV0FBWjtBQUNBLGlCQUFhLG9DQUFiOzs7Ozs7Ozs7Ozs7SUNYRTs7O0FBR0YsU0FIRSxRQUdGLENBQVksS0FBWixFQUFtQixZQUFuQixFQUFpQyxhQUFqQyxFQUFnRCxjQUFoRCxFQUFnRTswQkFIOUQsVUFHOEQ7O0FBQzVELFNBQUssS0FBTCxHQUFhLEtBQWIsQ0FENEQ7QUFFNUQsU0FBSyxZQUFMLEdBQW9CLFlBQXBCLENBRjREO0FBRzVELFNBQUssYUFBTCxHQUFxQixhQUFyQixDQUg0RDtBQUk1RCxTQUFLLGNBQUwsR0FBc0IsY0FBdEIsQ0FKNEQ7Q0FBaEU7O2tCQVFXO0FBQ1gsZ0JBQVksUUFBWjtBQUNBLGlCQUFhLDhCQUFiOzs7Ozs7Ozs7Ozs7SUNiRTs7O0FBR0YsU0FIRSxZQUdGLENBQVksS0FBWixFQUFtQixZQUFuQixFQUFpQzswQkFIL0IsY0FHK0I7O0FBQzdCLFNBQUssS0FBTCxHQUFhLEtBQWIsQ0FENkI7QUFFN0IsU0FBSyxZQUFMLEdBQW9CLFlBQXBCLENBRjZCO0NBQWpDOztrQkFNVztBQUNYLGdCQUFZLFlBQVo7QUFDQSxpQkFBYSxzQ0FBYjs7Ozs7Ozs7Ozs7Ozs7SUNYRTs7OztBQUdGLGFBSEUsT0FHRixDQUFZLEtBQVosRUFBbUIsWUFBbkIsRUFBaUM7OEJBSC9CLFNBRytCOztBQUM3QixhQUFLLEtBQUwsR0FBYSxLQUFiLENBRDZCO0FBRTdCLGFBQUssWUFBTCxHQUFvQixZQUFwQixDQUY2QjtLQUFqQzs7aUJBSEU7OzRCQVFXO0FBQ1QsbUJBQU8sS0FBSyxZQUFMLENBQWtCLFlBQWxCLEdBQWlDLElBQWpDLEdBQXdDLEtBQXhDLENBREU7Ozs7V0FSWDs7O2tCQWNTO0FBQ1gsZ0JBQVksT0FBWjtBQUNBLGlCQUFhLDBCQUFiOzs7Ozs7Ozs7Ozs7OztJQ2hCRTs7OztBQUdGLGFBSEUsVUFHRixDQUFZLFFBQVosRUFBc0IsUUFBdEIsRUFBZ0MsT0FBaEMsRUFBeUMsVUFBekMsRUFBcUQsWUFBckQsRUFBbUU7OEJBSGpFLFlBR2lFOztBQUMvRCxhQUFLLFFBQUwsR0FBZ0IsUUFBaEIsQ0FEK0Q7QUFFL0QsYUFBSyxRQUFMLEdBQWdCLFFBQWhCLENBRitEO0FBRy9ELGFBQUssT0FBTCxHQUFlLE9BQWYsQ0FIK0Q7QUFJL0QsYUFBSyxVQUFMLEdBQWtCLFVBQWxCLENBSitEO0FBSy9ELGFBQUssWUFBTCxHQUFvQixZQUFwQixDQUwrRDs7QUFPL0QsYUFBSyxhQUFMLEdBQXFCLElBQXJCLENBUCtEOztBQVMvRCxhQUFLLElBQUwsR0FBWSxJQUFJLEdBQUosRUFBWjs7O0FBVCtELFlBWTNELENBQUMsS0FBSyxVQUFMLEVBQWlCO0FBQ2xCLGlCQUFLLFVBQUwsR0FBa0IsRUFBbEIsQ0FEa0I7U0FBdEI7S0FaSjs7aUJBSEU7O2tDQW9CUTtBQUNOLGlCQUFLLEtBQUwsR0FBYSxLQUFLLFFBQUwsQ0FBYyxJQUFkLENBQW1CLE9BQW5CLEVBQTRCLENBQTVCLENBQWIsQ0FETTs7QUFHTixpQkFBSyxTQUFMLEdBSE07Ozs7Ozs7Ozs7MENBVVE7QUFDZCxnQkFBSSxLQUFLLE9BQUwsQ0FBYSxXQUFiLEVBQTBCO0FBQzFCLHFCQUFLLEtBQUwsQ0FBVyxhQUFYLENBQXlCLElBQUksVUFBSixDQUFlLE9BQWYsQ0FBekIsRUFEMEI7YUFBOUIsTUFFTyxJQUFJLFNBQVMsV0FBVCxFQUFzQjtBQUM3QixvQkFBSSxLQUFLLFNBQVMsV0FBVCxDQUFxQixZQUFyQixDQUFMLENBRHlCO0FBRTdCLG1CQUFHLFNBQUgsQ0FBYSxhQUFiLEVBQTRCLElBQTVCLEVBQWtDLEtBQWxDLEVBRjZCO0FBRzdCLHFCQUFLLEtBQUwsQ0FBVyxhQUFYLENBQXlCLEVBQXpCLEVBSDZCO2FBQTFCLE1BSUE7O0FBQ0gscUJBQUssS0FBTCxDQUFXLFNBQVgsQ0FBcUIsZUFBckIsRUFERzthQUpBOzs7Ozs7Ozs7O29DQWFDOzs7QUFDUixpQkFBSyxLQUFMLENBQ0ssZ0JBREwsQ0FDc0IsT0FEdEIsRUFDK0IsVUFBQyxDQUFELEVBQU87QUFDOUIsa0JBQUUsTUFBRixDQUFTLEtBQVQsR0FBaUIsRUFBakIsQ0FEOEI7YUFBUCxFQUV4QixLQUhQLEVBRFE7QUFLUixpQkFBSyxLQUFMLENBQ0ssZ0JBREwsQ0FDc0IsUUFEdEIsRUFDZ0MsVUFBQyxDQUFELEVBQU87QUFDL0Isb0JBQUksT0FBTyxFQUFFLE1BQUYsQ0FBUyxLQUFULENBRG9CO0FBRS9CLG9CQUFJLEtBQUssTUFBTCxFQUFhO0FBQ2IseUJBQUssSUFBSSxTQUFKLElBQWlCLElBQXRCLEVBQTRCO0FBQ3hCLDRCQUFJLENBQUMsTUFBTSxTQUFOLENBQUQsRUFBbUI7QUFDbkIsa0NBQUssSUFBTCxDQUFVLEdBQVYsQ0FBYyxLQUFLLElBQUwsQ0FBVSxTQUFWLENBQWQsRUFEbUI7eUJBQXZCO3FCQURKOztBQU1BLDBCQUFLLFlBQUwsQ0FBa0IsVUFBbEIsQ0FBNkIsTUFBSyxJQUFMLENBQTdCLENBUGE7aUJBQWpCO2FBRndCLEVBV3pCLEtBWlAsRUFMUTs7Ozt1Q0FvQkc7QUFDWCxpQkFBSyxZQUFMLENBQWtCLFlBQWxCLEdBRFc7Ozs7V0FsRWI7OztrQkF5RVM7QUFDWCxpQkFBYSxrQ0FBYjtBQUNBLGdCQUFZLFVBQVo7Ozs7Ozs7Ozs7OztJQzNFRTs7O0FBR0YsU0FIRSxJQUdGLENBQVksS0FBWixFQUFtQixZQUFuQixFQUFpQzswQkFIL0IsTUFHK0I7O0FBQzdCLFNBQUssS0FBTCxHQUFhLEtBQWIsQ0FENkI7QUFFN0IsU0FBSyxZQUFMLEdBQW9CLFlBQXBCLENBRjZCO0NBQWpDOztrQkFNVztBQUNYLGdCQUFZLElBQVo7QUFDQSxpQkFBYSxvQkFBYjs7Ozs7Ozs7Ozs7Ozs7SUNYaUI7Ozs7QUFHakIsYUFIaUIsY0FHakIsR0FBYTs4QkFISSxnQkFHSjs7QUFDVCxhQUFLLFlBQUwsR0FBb0IsS0FBcEIsQ0FEUztLQUFiOztpQkFIaUI7O29DQU9OO0FBQ1AsaUJBQUssWUFBTCxHQUFvQixJQUFwQixDQURPOzs7O3NDQUlFO0FBQ1QsaUJBQUssWUFBTCxHQUFvQixLQUFwQixDQURTOzs7O1dBWEk7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBckIsSUFBTSxRQUFRO0FBQ1YsV0FBTztBQUNILGNBQU0sQ0FBQyxXQUFELENBQU47QUFDQSxlQUFPLElBQVA7S0FGSjtBQUlBLFdBQU87QUFDSCxjQUFNLENBQUMsWUFBRCxFQUFlLGFBQWYsQ0FBTjtBQUNBLGVBQU8sSUFBUDtLQUZKO0FBSUEsV0FBTztBQUNILGNBQU0sQ0FBQyxXQUFELENBQU47QUFDQSxlQUFPLElBQVA7S0FGSjtBQUlBLFdBQU87QUFDSCxjQUFNLENBQUMsV0FBRCxDQUFOO0FBQ0EsZUFBTyxJQUFQO0tBRko7QUFJQSxZQUFRLENBQUMsV0FBRCxFQUFjLFlBQWQsQ0FBUjtBQUNBLFdBQU87QUFDSCxjQUFNLENBQUMsbUJBQUQsRUFBc0IsWUFBdEIsQ0FBTjtBQUNBLGNBQU0sYUFBTjtLQUZKO0FBSUEsV0FBTztBQUNILGNBQU0sQ0FBQyxpQkFBRCxDQUFOO0FBQ0EsY0FBTSxhQUFOO0tBRko7Q0F0QkU7O0lBNEJlOzs7O0FBR2pCLGFBSGlCLFlBR2pCLENBQVksS0FBWixFQUFtQixPQUFuQixFQUE0QixRQUE1QixFQUFzQyxhQUF0QyxFQUFxRCxjQUFyRCxFQUFxRTs4QkFIcEQsY0FHb0Q7O0FBQ2pFLGFBQUssS0FBTCxHQUFhLEtBQWIsQ0FEaUU7QUFFakUsYUFBSyxPQUFMLEdBQWUsT0FBZixDQUZpRTtBQUdqRSxhQUFLLFFBQUwsR0FBZ0IsUUFBaEIsQ0FIaUU7QUFJakUsYUFBSyxhQUFMLEdBQXFCLGFBQXJCLENBSmlFO0FBS2pFLGFBQUssY0FBTCxHQUFzQixjQUF0QixDQUxpRTs7QUFPakUsYUFBSyxHQUFMLEdBQVcsSUFBWCxDQVBpRTtBQVFqRSxhQUFLLFNBQUwsR0FBaUIsRUFBakIsQ0FSaUU7QUFTakUsYUFBSyxVQUFMLEdBQWtCLEVBQWxCLENBVGlFOztBQVdqRSxhQUFLLFFBQUwsR0FBZ0IsRUFBaEIsQ0FYaUU7O0FBYWpFLGFBQUssWUFBTCxHQUFvQixJQUFwQixDQWJpRTs7QUFlakUsYUFBSyxVQUFMLEdBQWtCLEtBQWxCLENBZmlFO0FBZ0JqRSxhQUFLLFlBQUwsR0FBb0IsSUFBcEIsQ0FoQmlFOztBQWtCakUsYUFBSyxjQUFMLEdBQXNCLEVBQXRCLENBbEJpRTtBQW1CakUsYUFBSyxZQUFMLEdBQW9CLEVBQXBCLENBbkJpRTs7QUFxQmpFLGFBQUssT0FBTCxHQUFlLEVBQWYsQ0FyQmlFOztBQXVCakUsYUFBSyxPQUFMLEdBdkJpRTtLQUFyRTs7aUJBSGlCOztrQ0E4QjJCOzs7Z0JBQXBDLGtFQUFZLG9CQUF3QjtnQkFBbEIsaUVBQVcscUJBQU87OztBQUV4QyxpQkFBSyxjQUFMLENBQW9CLFNBQXBCLEdBRndDOztBQUl4QyxnQkFBSSxZQUFZLEVBQVosQ0FKb0M7QUFLeEMsZ0JBQUksU0FBSixFQUFlO0FBQ1gsNEJBQVksVUFBVSxRQUFWLEdBQXFCLEdBQXJCLEdBQTJCLFVBQVUsSUFBVixDQUQ1Qjs7QUFHWCxvQkFBSSxRQUFKLEVBQWM7QUFDVixnQ0FBWSxVQUFVLFFBQVYsQ0FERjtBQUVWLHlCQUFLLFFBQUwsQ0FBYyxHQUFkLEdBRlU7aUJBQWQsTUFHTztBQUNILHlCQUFLLFFBQUwsQ0FBYyxJQUFkLENBQW1CLFVBQVUsSUFBVixDQUFuQixDQURHO2lCQUhQO2FBSEo7O0FBV0EsaUJBQUssS0FBTCxDQUFXLEdBQVgscUNBQWlELFNBQWpELEVBQ0ssSUFETCxDQUNVLFVBQUMsUUFBRCxFQUFjO0FBQ2hCLHNCQUFLLEdBQUwsR0FBVyxTQUFTLElBQVQsQ0FBYyxHQUFkLENBREs7QUFFaEIsc0JBQUssU0FBTCxHQUFpQixTQUFTLElBQVQsQ0FBYyxJQUFkLENBRkQ7O0FBSWhCLHNCQUFLLFVBQUwsR0FBa0IsRUFBbEIsQ0FKZ0I7Ozs7OztBQUtoQix5Q0FBaUIsU0FBUyxJQUFULENBQWMsS0FBZCwwQkFBakIsb0dBQXNDOzRCQUE3QixtQkFBNkI7O0FBQ2xDLDhCQUFLLFVBQUwsQ0FBZ0IsSUFBaEIsQ0FBcUIsSUFBSSxJQUFKLENBQVMsSUFBVCxDQUFyQixFQURrQztxQkFBdEM7Ozs7Ozs7Ozs7Ozs7O2lCQUxnQjthQUFkLENBRFYsQ0FVSyxLQVZMLENBVVcsVUFBQyxLQUFELEVBQVc7QUFDZCxvQkFBSSxPQUFPLE1BQU0sSUFBTixDQUFXLElBQVgsR0FBa0IsTUFBTSxJQUFOLENBQVcsV0FBWCxHQUF5QixvQkFBM0MsQ0FERztBQUVkLHNCQUFLLGFBQUwsQ0FBbUIsUUFBbkIsQ0FBNEIsSUFBNUIsRUFBa0MsT0FBbEMsRUFGYzthQUFYLENBVlgsQ0FjSyxPQWRMLENBY2EsWUFBTTtBQUNYLHNCQUFLLGNBQUwsQ0FBb0IsV0FBcEI7O0FBRFcsYUFBTixDQWRiLENBaEJ3Qzs7OzttQ0FvQ2I7Z0JBQXRCLHNFQUFnQixvQkFBTTs7QUFDM0IsZ0JBQUksY0FBYyxVQUFkLEVBQTBCO0FBQzFCLHFCQUFLLFlBQUwsR0FBb0IsY0FBYyxhQUFkLENBRE07QUFFMUIscUJBQUssVUFBTCxHQUFrQixLQUFsQixDQUYwQjthQUE5QixNQUlLO0FBQ0QscUJBQUssT0FBTCxDQUFhLElBQWIsQ0FBa0IsY0FBYyxhQUFkLEVBQTZCLFFBQS9DLEVBREM7YUFKTDs7OzttQ0FTTyxVQUFVOzs7Ozs7QUFDakIsc0NBQWlCLG1DQUFqQix3R0FBMkI7d0JBQWxCLG9CQUFrQjs7QUFDdkIseUJBQUssV0FBTCxDQUFpQixJQUFqQixFQUR1QjtpQkFBM0I7Ozs7Ozs7Ozs7Ozs7O2FBRGlCOzs7O29DQU1ULE1BQU07OztBQUNkLGlCQUFLLGNBQUwsQ0FBb0IsU0FBcEIsR0FEYzs7QUFHZCxnQkFBSSxXQUFXLEdBQVgsQ0FIVTtBQUlkLGdCQUFJLEtBQUssR0FBTCxFQUFVO0FBQ1YsMkJBQVcsS0FBSyxHQUFMLENBQVMsUUFBVCxHQUFvQixHQUFwQixHQUEwQixLQUFLLEdBQUwsQ0FBUyxJQUFULENBRDNCO2FBQWQ7O0FBSUEsZ0JBQUksV0FBVyxJQUFJLFFBQUosRUFBWCxDQVJVO0FBU2QscUJBQVMsTUFBVCxDQUFnQixNQUFoQixFQUF3QixJQUF4QixFQVRjOztBQVdkLGlCQUFLLEtBQUwsQ0FBVztBQUNILHdCQUFRLE1BQVI7QUFDQSxzQkFBTSxRQUFOO0FBQ0Esd0VBQXNELFFBQXREO0FBQ0EseUJBQVMsRUFBQyxnQkFBZ0IsU0FBaEIsRUFBVjtBQUNBLGtDQUFrQixRQUFRLFFBQVI7YUFMMUIsRUFPSyxJQVBMLENBT1Usa0JBQVU7QUFDWix1QkFBSyxVQUFMLENBQWdCLElBQWhCLENBQXFCLElBQUksSUFBSixDQUFTLE9BQU8sSUFBUCxDQUE5QixFQURZO0FBRVosb0JBQUksT0FBTyxPQUFPLElBQVAsQ0FBWSxJQUFaLEdBQW1CLE9BQU8sSUFBUCxDQUFZLFdBQVosR0FBMEIsd0JBQTdDLENBRkM7QUFHWix1QkFBSyxhQUFMLENBQW1CLFFBQW5CLENBQTRCLElBQTVCLEVBSFk7YUFBVixDQVBWLENBWUssS0FaTCxDQVlXLFVBQUMsS0FBRCxFQUFXO0FBQ2Qsb0JBQUksT0FBTyxNQUFNLElBQU4sQ0FBVyxJQUFYLEdBQWtCLE1BQU0sSUFBTixDQUFXLFdBQVgsR0FBeUIsb0JBQTNDLENBREc7QUFFZCx1QkFBSyxhQUFMLENBQW1CLFFBQW5CLENBQTRCLElBQTVCLEVBQWtDLE9BQWxDLEVBRmM7YUFBWCxDQVpYLENBZ0JLLE9BaEJMLENBZ0JhLFlBQU07QUFDWCx1QkFBSyxjQUFMLENBQW9CLFdBQXBCLEdBRFc7YUFBTixDQWhCYixDQVhjOzs7O3VDQWdDSDs7O0FBQ1gsaUJBQUssY0FBTCxDQUFvQixTQUFwQixHQURXOztBQUdYLGdCQUFJLFdBQVcsR0FBWCxDQUhPO0FBSVgsZ0JBQUksS0FBSyxHQUFMLEVBQVU7QUFDViwyQkFBVyxLQUFLLEdBQUwsQ0FBUyxRQUFULEdBQW9CLEdBQXBCLEdBQTBCLEtBQUssR0FBTCxDQUFTLElBQVQsQ0FEM0I7YUFBZDs7QUFJQSxpQkFBSyxLQUFMLENBQVc7QUFDSCx3QkFBUSxNQUFSO0FBQ0Esc0JBQU07QUFDRiwwQkFBTSxLQUFLLE9BQUw7QUFDTiw4QkFBVSxRQUFWO2lCQUZKO0FBSUEsb0VBTkc7YUFBWCxFQVFLLElBUkwsQ0FRVSxrQkFBVTtBQUNaLHVCQUFLLFNBQUwsQ0FBZSxJQUFmLENBQW9CLE9BQU8sSUFBUCxDQUFwQixDQURZO0FBRVosb0JBQUksT0FBTyxPQUFPLElBQVAsQ0FBWSxJQUFaLEdBQW1CLE9BQU8sSUFBUCxDQUFZLFdBQVosR0FBMEIsOEJBQTdDLENBRkM7QUFHWix1QkFBSyxhQUFMLENBQW1CLFFBQW5CLENBQTRCLElBQTVCLEVBSFk7YUFBVixDQVJWLENBYUssS0FiTCxDQWFXLFVBQUMsS0FBRCxFQUFXO0FBQ2Qsb0JBQUksT0FBTyxNQUFNLElBQU4sQ0FBVyxJQUFYLEdBQWtCLE1BQU0sSUFBTixDQUFXLFdBQVgsR0FBeUIsb0JBQTNDLENBREc7QUFFZCx1QkFBSyxhQUFMLENBQW1CLFFBQW5CLENBQTRCLElBQTVCLEVBQWtDLE9BQWxDLEVBRmM7YUFBWCxDQWJYLENBaUJLLE9BakJMLENBaUJhLFlBQU07QUFDWCx1QkFBSyxjQUFMLENBQW9CLFdBQXBCLEdBRFc7YUFBTixDQWpCYixDQVJXOztBQTZCWCxpQkFBSyxPQUFMLEdBQWUsRUFBZixDQTdCVzs7OztrQ0FnQ0wsS0FBSzs7O0FBQ1gsaUJBQUssY0FBTCxDQUFvQixTQUFwQixHQURXOztBQUdYLGlCQUFLLEtBQUwsQ0FBVztBQUNILHdCQUFRLFFBQVI7QUFDQSx1RUFBcUQsSUFBSSxRQUFKLFNBQWdCLElBQUksSUFBSjthQUY3RSxFQUlLLElBSkwsQ0FJVSxrQkFBVTtBQUNaLG9CQUFJLFFBQVEsT0FBSyxTQUFMLENBQWUsT0FBZixDQUF1QixHQUF2QixDQUFSLENBRFE7QUFFWixvQkFBSSxRQUFRLENBQUMsQ0FBRCxFQUFJO0FBQ1osMkJBQUssU0FBTCxDQUFlLE1BQWYsQ0FBc0IsS0FBdEIsRUFBNkIsQ0FBN0IsRUFEWTtpQkFBaEI7QUFHQSxvQkFBSSxPQUFPLE9BQU8sSUFBUCxDQUFZLElBQVosR0FBbUIsT0FBTyxJQUFQLENBQVksV0FBWixHQUEwQiw0QkFBN0MsQ0FMQztBQU1aLHVCQUFLLGFBQUwsQ0FBbUIsUUFBbkIsQ0FBNEIsSUFBNUIsRUFOWTthQUFWLENBSlYsQ0FZSyxLQVpMLENBWVcsVUFBQyxLQUFELEVBQVc7QUFDZCxvQkFBSSxPQUFPLE1BQU0sSUFBTixDQUFXLElBQVgsR0FBa0IsTUFBTSxJQUFOLENBQVcsV0FBWCxHQUF5QixvQkFBM0MsQ0FERztBQUVkLHVCQUFLLGFBQUwsQ0FBbUIsUUFBbkIsQ0FBNEIsSUFBNUIsRUFBa0MsT0FBbEMsRUFGYzthQUFYLENBWlgsQ0FnQkssT0FoQkwsQ0FnQmEsWUFBTTtBQUNYLHVCQUFLLGNBQUwsQ0FBb0IsV0FBcEIsR0FEVzthQUFOLENBaEJiLENBSFc7Ozs7bUNBd0JKLE1BQUs7OztBQUNaLGlCQUFLLGNBQUwsQ0FBb0IsU0FBcEIsR0FEWTs7QUFHWixpQkFBSyxLQUFMLENBQVc7QUFDSCx3QkFBUSxRQUFSO0FBQ0Esd0VBQXNELEtBQUssUUFBTCxTQUFpQixLQUFLLElBQUw7YUFGL0UsRUFJSyxJQUpMLENBSVUsa0JBQVU7QUFDWixvQkFBSSxRQUFRLE9BQUssVUFBTCxDQUFnQixPQUFoQixDQUF3QixJQUF4QixDQUFSLENBRFE7QUFFWixvQkFBSSxRQUFRLENBQUMsQ0FBRCxFQUFJO0FBQ1osMkJBQUssVUFBTCxDQUFnQixNQUFoQixDQUF1QixLQUF2QixFQUE4QixDQUE5QixFQURZO2lCQUFoQjtBQUdBLG9CQUFJLE9BQU8sT0FBTyxJQUFQLENBQVksSUFBWixHQUFtQixPQUFPLElBQVAsQ0FBWSxXQUFaLEdBQTBCLHdCQUE3QyxDQUxDO0FBTVosdUJBQUssYUFBTCxDQUFtQixRQUFuQixDQUE0QixJQUE1QixFQU5ZO2FBQVYsQ0FKVixDQVlLLEtBWkwsQ0FZVyxVQUFDLEtBQUQsRUFBVztBQUNkLG9CQUFJLE9BQU8sTUFBTSxJQUFOLENBQVcsSUFBWCxHQUFrQixNQUFNLElBQU4sQ0FBVyxXQUFYLEdBQXlCLG9CQUEzQyxDQURHO0FBRWQsdUJBQUssYUFBTCxDQUFtQixRQUFuQixDQUE0QixJQUE1QixFQUFrQyxPQUFsQyxFQUZjO2FBQVgsQ0FaWCxDQWdCSyxPQWhCTCxDQWdCYSxZQUFNO0FBQ1gsdUJBQUssY0FBTCxDQUFvQixXQUFwQixHQURXO2FBQU4sQ0FoQmIsQ0FIWTs7Ozt5Q0F3QkM7QUFDYixpQkFBSyxZQUFMLEdBQW9CLENBQUMsS0FBSyxZQUFMLENBRFI7Ozs7dUNBSUY7QUFDWCxpQkFBSyxVQUFMLEdBQWtCLENBQUMsS0FBSyxVQUFMLENBRFI7Ozs7c0NBSUQ7QUFDVixnQkFBSSxLQUFLLFVBQUwsRUFDQSxLQUFLLFVBQUwsR0FBa0IsQ0FBQyxLQUFLLFVBQUwsQ0FEdkI7Ozs7V0EzTWE7Ozs7O0lBaU5mO0FBQ0YsYUFERSxJQUNGLENBQVksSUFBWixFQUFrQjs4QkFEaEIsTUFDZ0I7O0FBQ2QsYUFBSyxZQUFMLEdBQW9CLElBQXBCLENBRGM7QUFFZCxhQUFLLGFBQUwsR0FBcUIsSUFBckIsQ0FGYztBQUdkLGFBQUssUUFBTCxHQUFnQixJQUFoQixDQUhjO0FBSWQsYUFBSyxJQUFMLEdBQVksSUFBWixDQUpjO0FBS2QsYUFBSyxJQUFMLEdBQVksSUFBWixDQUxjO0FBTWQsYUFBSyxVQUFMLEdBQWtCLElBQWxCLENBTmM7QUFPZCxhQUFLLElBQUwsR0FBWSxJQUFaLENBUGM7QUFRZCxhQUFLLFdBQUwsR0FBbUIsSUFBbkIsQ0FSYzs7QUFVZCxhQUFLLE9BQUwsR0FBZSxJQUFmLENBVmM7O0FBWWQsZ0JBQVEsS0FBUixDQUFjLElBQWQsRUFBb0IsSUFBcEIsRUFaYztLQUFsQjs7aUJBREU7O3NDQWdCMkI7Z0JBQWpCLGdFQUFVLHFCQUFPOztBQUN6QixpQkFBSyxJQUFJLFFBQUosSUFBZ0IsS0FBckIsRUFBNEI7QUFDeEIsb0JBQUksVUFBVSxNQUFNLFFBQU4sQ0FBVixDQURvQjtBQUV4QixvQkFBSSxRQUFRLFNBQVIsQ0FBa0IsUUFBUSxJQUFSLENBQXRCLEVBQXFDOzs7Ozs7QUFDakMsOENBQWlCLFFBQVEsSUFBUiwyQkFBakIsd0dBQStCO2dDQUF0QixvQkFBc0I7O0FBQzNCLGdDQUFJLFFBQVEsS0FBSyxJQUFMLEVBQVc7QUFDbkIsb0NBQUksT0FBSixFQUFhO0FBQ1Qsd0NBQUksUUFBUSxTQUFSLENBQWtCLFFBQVEsS0FBUixDQUFsQixJQUFvQyxRQUFRLEtBQVIsRUFBZTtBQUNuRCwrQ0FBTyxLQUFLLFVBQUwsQ0FENEM7cUNBQXZELE1BRU87QUFDSCwrQ0FBTyxRQUFRLFNBQVIsQ0FBa0IsUUFBUSxJQUFSLENBQWxCLEdBQWtDLFFBQVEsSUFBUixHQUFlLElBQWpELENBREo7cUNBRlA7aUNBREosTUFNTztBQUNILDJDQUFPLFFBQVAsQ0FERztpQ0FOUDs2QkFESjt5QkFESjs7Ozs7Ozs7Ozs7Ozs7cUJBRGlDO2lCQUFyQzthQUZKOztBQW1CQSxtQkFBTyxJQUFQLENBcEJ5Qjs7OztvQ0F1QmpCLE1BQU07QUFDZCxpQkFBSyxhQUFMLEdBQXFCLElBQXJCLENBRGM7QUFFZCxpQkFBSyxRQUFMLEdBQWdCLElBQWhCLENBRmM7QUFHZCxpQkFBSyxJQUFMLEdBQVksS0FBSyxJQUFMLENBSEU7QUFJZCxpQkFBSyxJQUFMLEdBQVksS0FBSyxJQUFMLENBSkU7QUFLZCxpQkFBSyxVQUFMLEdBQWtCLElBQWxCLENBTGM7QUFNZCxpQkFBSyxJQUFMLEdBQVksS0FBSyxJQUFMLENBTkU7QUFPZCxpQkFBSyxXQUFMLEdBQW1CLElBQW5CLENBUGM7QUFRZCxpQkFBSyxPQUFMLEdBQWUsS0FBSyxPQUFMLENBUkQ7Ozs7NEJBV0g7QUFDWCxtQkFBTyxLQUFLLFdBQUwsS0FBcUIsS0FBSyxXQUFMLEVBQXJCLEdBQTBDLEtBQTFDLENBREk7Ozs7NEJBSUo7QUFDUCxnQkFBSSxPQUFPLEtBQUssV0FBTCxDQUFpQixJQUFqQixDQUFQLENBREc7QUFFUCxtQkFBTyxPQUFPLElBQVAsR0FBYyxlQUFkLENBRkE7Ozs7V0F0RFQ7Ozs7OztBQzdPTixRQUFRLGFBQVI7QUFDQSxPQUFPLE9BQVAsR0FBaUIsV0FBakI7Ozs7O0FDREEsUUFBUSxNQUFSLENBQWUsV0FBZixFQUE0QixFQUE1QixFQUFnQyxHQUFoQyxDQUFvQyxDQUFDLGdCQUFELEVBQW1CLFVBQVMsY0FBVCxFQUF5QjtBQUFDLGlCQUFlLEdBQWYsQ0FBbUIsNENBQW5CLEVBQWdFLHFmQUFoRSxFQUFEO0FBQ2hGLGlCQUFlLEdBQWYsQ0FBbUIsa0NBQW5CLEVBQXNELG1MQUF0RCxFQURnRjtBQUVoRixpQkFBZSxHQUFmLENBQW1CLDRCQUFuQixFQUFnRCxrWkFBaEQsRUFGZ0Y7QUFHaEYsaUJBQWUsR0FBZixDQUFtQixnQ0FBbkIsRUFBb0QsNFBBQXBELEVBSGdGO0FBSWhGLGlCQUFlLEdBQWYsQ0FBbUIsb0JBQW5CLEVBQXdDLHNtQkFBeEMsRUFKZ0Y7QUFLaEYsaUJBQWUsR0FBZixDQUFtQixvQ0FBbkIsRUFBd0Qsd25CQUF4RCxFQUxnRjtBQU1oRixpQkFBZSxHQUFmLENBQW1CLDhCQUFuQixFQUFrRCxpbUJBQWxELEVBTmdGO0FBT2hGLGlCQUFlLEdBQWYsQ0FBbUIsc0NBQW5CLEVBQTBELCtoQkFBMUQsRUFQZ0Y7QUFRaEYsaUJBQWUsR0FBZixDQUFtQiwwQkFBbkIsRUFBOEMsaUtBQTlDLEVBUmdGO0FBU2hGLGlCQUFlLEdBQWYsQ0FBbUIsa0NBQW5CLEVBQXNELDJsQkFBdEQsRUFUZ0Y7QUFVaEYsaUJBQWUsR0FBZixDQUFtQixvQkFBbkIsRUFBd0MsNG1CQUF4QyxFQVZnRjtDQUF6QixDQUF2RCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi90cGwvaW5kZXgnO1xyXG5pbXBvcnQgdXZvZCBmcm9tICcuL2FwcC9jb21wb25lbnRzL3V2b2QvdXZvZCc7XHJcbmltcG9ydCBtZWRpYUJyb3dzZXIgZnJvbSAnLi9hcHAvY29tcG9uZW50cy9tZWRpYS1icm93c2VyL21lZGlhLmJyb3dzZXInO1xyXG5pbXBvcnQgcm9vdCBmcm9tICcuL2FwcC9jb21wb25lbnRzL2FwcGxpY2F0aW9uLXJvb3QvYXBwbGljYXRpb24ucm9vdCc7XHJcbmltcG9ydCBsZWZ0TWVudSBmcm9tICcuL2FwcC9jb21wb25lbnRzL2xlZnQtbWVudS9sZWZ0Lm1lbnUnO1xyXG5pbXBvcnQgZGlyUmV0dXJuIGZyb20gJy4vYXBwL2NvbXBvbmVudHMvZGlyLXJldHVybi9kaXIucmV0dXJuJztcclxuaW1wb3J0IGRpckJhc2UgZnJvbSAnLi9hcHAvY29tcG9uZW50cy9kaXItYmFzZS9kaXIuYmFzZSc7XHJcbmltcG9ydCBmaWxlIGZyb20gJy4vYXBwL2NvbXBvbmVudHMvZmlsZS9maWxlJztcclxuaW1wb3J0IHN0dm9yZWMgZnJvbSAnLi9hcHAvY29tcG9uZW50cy9zdHZvcmVjL3N0dm9yZWMnO1xyXG5pbXBvcnQgYnJlYWRjcnVtYnMgZnJvbSAnLi9hcHAvY29tcG9uZW50cy9icmVhZGNydW1icy9icmVhZGNydW1icyc7XHJcbmltcG9ydCBmaWx0ZXJQYW5lbCBmcm9tICcuL2FwcC9jb21wb25lbnRzL2ZpbHRlci1wYW5lbC9maWx0ZXIucGFuZWwnO1xyXG5pbXBvcnQgdXBsb2FkRmlsZSBmcm9tICcuL2FwcC9jb21wb25lbnRzL3VwbG9hZC1maWxlL3VwbG9hZC5maWxlJztcclxuXHJcbmltcG9ydCBNZWRpYVNlcnZpY2UgZnJvbSAnLi9hcHAvbWVkaWEuc2VydmljZSc7XHJcbmltcG9ydCBBbGVydHNTZXJ2aWNlIGZyb20gJy4vYXBwL2FsZXJ0cy5zZXJ2aWNlJztcclxuaW1wb3J0IExvYWRpbmdTZXJ2aWNlIGZyb20gJy4vYXBwL2xvYWRpbmcuc2VydmljZSc7XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgnYnJvd3NlcicsIFt0ZW1wbGF0ZV0pXHJcbiAgICAuY29tcG9uZW50KCd1dm9kJywgdXZvZClcclxuICAgIC5jb21wb25lbnQoJ21lZGlhQnJvd3NlcicsIG1lZGlhQnJvd3NlcilcclxuICAgIC5jb21wb25lbnQoJ2FwcGxpY2F0aW9uUm9vdCcsIHJvb3QpXHJcbiAgICAuY29tcG9uZW50KCdsZWZ0TWVudScsIGxlZnRNZW51KVxyXG4gICAgLmNvbXBvbmVudCgnZGlyUmV0dXJuJywgZGlyUmV0dXJuKVxyXG4gICAgLmNvbXBvbmVudCgnZGlyQmFzZScsIGRpckJhc2UpXHJcbiAgICAuY29tcG9uZW50KCdmaWxlJywgZmlsZSlcclxuICAgIC5jb21wb25lbnQoJ3N0dm9yZWMnLCBzdHZvcmVjKVxyXG4gICAgLmNvbXBvbmVudCgnYnJlYWRjcnVtYnMnLCBicmVhZGNydW1icylcclxuICAgIC5jb21wb25lbnQoJ2ZpbHRlclBhbmVsJywgZmlsdGVyUGFuZWwpXHJcbiAgICAuY29tcG9uZW50KCd1cGxvYWRGaWxlJywgdXBsb2FkRmlsZSlcclxuXHJcbiAgICAuc2VydmljZSgnbWVkaWFTZXJ2aWNlJywgTWVkaWFTZXJ2aWNlKVxyXG4gICAgLnNlcnZpY2UoJ2FsZXJ0c1NlcnZpY2UnLCBBbGVydHNTZXJ2aWNlKVxyXG4gICAgLnNlcnZpY2UoJ2xvYWRpbmdTZXJ2aWNlJywgTG9hZGluZ1NlcnZpY2UpXHJcbjsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBBbGVydHNTZXJ2aWNlIHtcclxuXHJcbiAgICAvLyBAbmdJbmplY3RcclxuICAgIGNvbnN0cnVjdG9yKCR0aW1lb3V0KSB7XHJcbiAgICAgICAgdGhpcy4kdGltZW91dCA9ICR0aW1lb3V0O1xyXG4gICAgICAgIHRoaXMuYWxlcnRzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgYWRkQWxlcnQobWVzc2FnZSA9ICdBY3Rpb24gZG9uZScsIHR5cGUgPSAnc3VjY2VzcycpIHtcclxuICAgICAgICB0aGlzLmFsZXJ0cy5wdXNoKHtcclxuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgdHlwZTogdHlwZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuJHRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFsZXJ0cy5zaGlmdCgpO1xyXG4gICAgICAgIH0sIDUwMDApO1xyXG4gICAgfVxyXG59IiwiY2xhc3MgQXBwbGljYXRpb25Sb290e1xyXG5cclxuICAgIC8vIEBuZ0luamVjdFxyXG4gICAgY29uc3RydWN0b3IoJGh0dHAsIG1lZGlhU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgICAgICB0aGlzLm1lZGlhU2VydmljZSA9IG1lZGlhU2VydmljZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgY29udHJvbGxlcjogQXBwbGljYXRpb25Sb290LFxyXG4gICAgdGVtcGxhdGVVcmw6ICdhcHBsaWNhdGlvbi1yb290L2FwcGxpY2F0aW9uLnJvb3QudHBsLmh0bWwnXHJcbn07IiwiY2xhc3MgQnJlYWRjcnVtYnMge1xyXG5cclxuICAgIC8vIEBuZ0luamVjdFxyXG4gICAgY29uc3RydWN0b3IoJGh0dHAsIG1lZGlhU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgICAgICB0aGlzLm1lZGlhU2VydmljZSA9IG1lZGlhU2VydmljZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgY29udHJvbGxlcjogQnJlYWRjcnVtYnMsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2JyZWFkY3J1bWJzL2JyZWFkY3J1bWJzLnRwbC5odG1sJ1xyXG59IiwiY2xhc3MgRGlyQmFzZSB7XHJcblxyXG4gICAgLy8gQG5nSW5qZWN0XHJcbiAgICBjb25zdHJ1Y3RvcigkaHR0cCwgbWVkaWFTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgICAgIHRoaXMubWVkaWFTZXJ2aWNlID0gbWVkaWFTZXJ2aWNlO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZURpcihkaXIsICRldmVudCkge1xyXG4gICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB0aGlzLm1lZGlhU2VydmljZS5kZWxldGVEaXIoZGlyKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGNvbnRyb2xsZXI6IERpckJhc2UsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2Rpci1iYXNlL2Rpci5iYXNlLnRwbC5odG1sJ1xyXG59IiwiY2xhc3MgRGlyUmV0dXJuIHtcclxuXHJcbiAgICAvLyBAbmdJbmplY3RcclxuICAgIGNvbnN0cnVjdG9yKCRodHRwLCBtZWRpYVNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XHJcbiAgICAgICAgdGhpcy5tZWRpYVNlcnZpY2UgPSBtZWRpYVNlcnZpY2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGNvbnRyb2xsZXI6IERpclJldHVybixcclxuICAgIHRlbXBsYXRlVXJsOiAnZGlyLXJldHVybi9kaXIucmV0dXJuLnRwbC5odG1sJ1xyXG59IiwiY2xhc3MgRmlsZSB7XHJcblxyXG4gICAgLy8gQG5nSW5qZWN0XHJcbiAgICBjb25zdHJ1Y3RvcigkaHR0cCwgbWVkaWFTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgICAgIHRoaXMubWVkaWFTZXJ2aWNlID0gbWVkaWFTZXJ2aWNlO1xyXG4gICAgfVxyXG4gICAgZGVsZXRlRmlsZShmaWxlLCAkZXZlbnQpIHtcclxuICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5tZWRpYVNlcnZpY2UuZGVsZXRlRmlsZShmaWxlKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHR7XHJcbiAgICBjb250cm9sbGVyOiBGaWxlLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdmaWxlL2ZpbGUudHBsLmh0bWwnXHJcbn0iLCJjbGFzcyBGaWx0ZXJQYW5lbCB7XHJcblxyXG4gICAgLy8gQG5nSW5qZWN0XHJcbiAgICBjb25zdHJ1Y3RvcigkaHR0cCwgbWVkaWFTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgICAgIHRoaXMubWVkaWFTZXJ2aWNlID0gbWVkaWFTZXJ2aWNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBjb250cm9sbGVyOiBGaWx0ZXJQYW5lbCxcclxuICAgIHRlbXBsYXRlVXJsOiAnZmlsdGVyLXBhbmVsL2ZpbHRlci5wYW5lbC50cGwuaHRtbCdcclxufTsiLCJjbGFzcyBMZWZ0TWVudSB7XHJcblxyXG4gICAgLy8gQG5nSW5qZWN0XHJcbiAgICBjb25zdHJ1Y3RvcigkaHR0cCwgbWVkaWFTZXJ2aWNlLCBhbGVydHNTZXJ2aWNlLCBsb2FkaW5nU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgICAgICB0aGlzLm1lZGlhU2VydmljZSA9IG1lZGlhU2VydmljZTtcclxuICAgICAgICB0aGlzLmFsZXJ0c1NlcnZpY2UgPSBhbGVydHNTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMubG9hZGluZ1NlcnZpY2UgPSBsb2FkaW5nU2VydmljZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgY29udHJvbGxlcjogTGVmdE1lbnUsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2xlZnQtbWVudS9sZWZ0Lm1lbnUudHBsLmh0bWwnXHJcbn0iLCJjbGFzcyBNZWRpYUJyb3dzZXIge1xyXG5cclxuICAgIC8vIEBuZ0luamVjdFxyXG4gICAgY29uc3RydWN0b3IoJGh0dHAsIG1lZGlhU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgICAgICB0aGlzLm1lZGlhU2VydmljZSA9IG1lZGlhU2VydmljZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgY29udHJvbGxlcjogTWVkaWFCcm93c2VyLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdtZWRpYS1icm93c2VyL21lZGlhLmJyb3dzZXIudHBsLmh0bWwnXHJcbn07IiwiY2xhc3MgU3R2b3JlY3tcclxuXHJcbiAgICAvLyBAbmdJbmplY3RcclxuICAgIGNvbnN0cnVjdG9yKCRodHRwLCBtZWRpYVNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XHJcbiAgICAgICAgdGhpcy5tZWRpYVNlcnZpY2UgPSBtZWRpYVNlcnZpY2U7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGlzSW1hZ2UoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5tZWRpYVNlcnZpY2Uuc2VsZWN0ZWRGaWxlID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgY29udHJvbGxlcjogU3R2b3JlYyxcclxuICAgIHRlbXBsYXRlVXJsOiAnc3R2b3JlYy9zdHZvcmVjLnRwbC5odG1sJ1xyXG59IiwiY2xhc3MgVXBsb2FkRmlsZSB7XHJcblxyXG4gICAgLy8gQG5nSW5qZWN0XHJcbiAgICBjb25zdHJ1Y3RvcigkdGltZW91dCwgJGVsZW1lbnQsICR3aW5kb3csICRyb290U2NvcGUsIG1lZGlhU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuJHRpbWVvdXQgPSAkdGltZW91dDtcclxuICAgICAgICB0aGlzLiRlbGVtZW50ID0gJGVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy4kd2luZG93ID0gJHdpbmRvdztcclxuICAgICAgICB0aGlzLiRyb290U2NvcGUgPSAkcm9vdFNjb3BlO1xyXG4gICAgICAgIHRoaXMubWVkaWFTZXJ2aWNlID0gbWVkaWFTZXJ2aWNlO1xyXG5cclxuICAgICAgICB0aGlzLnVwbG9hZFRpbWVvdXQgPSBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLmxpc3QgPSBuZXcgU2V0KCk7XHJcblxyXG4gICAgICAgIC8vIGRlZmF1bHQgdmFsdWVzXHJcbiAgICAgICAgaWYgKCF0aGlzLmZpbGVBY2NlcHQpIHtcclxuICAgICAgICAgICAgdGhpcy5maWxlQWNjZXB0ID0gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICRvbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5pbnB1dCA9IHRoaXMuJGVsZW1lbnQuZmluZChcImlucHV0XCIpWzBdO1xyXG5cclxuICAgICAgICB0aGlzLmluaXRDbGljaygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVHJpZ2dlciBjbGljayBldmVudCBvbiB0aGlzLmlucHV0XHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBmaXJlVXBsb2FkRXZlbnQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuJHdpbmRvdy5DdXN0b21FdmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLmlucHV0LmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoXCJjbGlja1wiKSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC5jcmVhdGVFdmVudCkge1xyXG4gICAgICAgICAgICBsZXQgZXYgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnSFRNTEV2ZW50cycpO1xyXG4gICAgICAgICAgICBldi5pbml0RXZlbnQoJ2NvbnRleHRtZW51JywgdHJ1ZSwgZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLmlucHV0LmRpc3BhdGNoRXZlbnQoZXYpO1xyXG4gICAgICAgIH0gZWxzZSB7IC8vIEludGVybmV0IEV4cGxvcmVyXHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXQuZmlyZUV2ZW50KCdvbmNvbnRleHRtZW51Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkIGxpc3RlbmVyIGZvciBjaGFuZ2Ugb24gdGhpcy5pbnB1dFxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgaW5pdENsaWNrKCkge1xyXG4gICAgICAgIHRoaXMuaW5wdXRcclxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGUudGFyZ2V0LnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgIH0sIGZhbHNlKTtcclxuICAgICAgICB0aGlzLmlucHV0XHJcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGxpc3QgPSBlLnRhcmdldC5maWxlcztcclxuICAgICAgICAgICAgICAgIGlmIChsaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGZpbGVJbmRleCBpbiBsaXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNOYU4oZmlsZUluZGV4KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0LmFkZChsaXN0Lml0ZW0oZmlsZUluZGV4KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVkaWFTZXJ2aWNlLnVwbG9hZEZpbGUodGhpcy5saXN0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZU5ld0RpcigpIHtcclxuICAgICAgICB0aGlzLm1lZGlhU2VydmljZS5jcmVhdGVOZXdEaXIoKTtcclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICB0ZW1wbGF0ZVVybDogJ3VwbG9hZC1maWxlL3VwbG9hZC5maWxlLnRwbC5odG1sJyxcclxuICAgIGNvbnRyb2xsZXI6IFVwbG9hZEZpbGVcclxufTsiLCJjbGFzcyBVdm9kIHtcclxuXHJcbiAgICAvLyBAbmdJbmplY3RcclxuICAgIGNvbnN0cnVjdG9yKCRodHRwLCBtZWRpYVNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XHJcbiAgICAgICAgdGhpcy5tZWRpYVNlcnZpY2UgPSBtZWRpYVNlcnZpY2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGNvbnRyb2xsZXI6IFV2b2QsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ3V2b2QvdXZvZC50cGwuaHRtbCdcclxufTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBMb2FkaW5nU2VydmljZSB7XHJcblxyXG4gICAgLy8gQG5nSW5qZWN0XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMubG9hZGluZ1N0YXJ0ID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGRvTG9hZGluZygpe1xyXG4gICAgICAgIHRoaXMubG9hZGluZ1N0YXJ0ID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc3RvcExvYWRpbmcoKXtcclxuICAgICAgICB0aGlzLmxvYWRpbmdTdGFydCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxufSIsImNvbnN0IFRZUEVTID0ge1xyXG4gICAgJ1BORyc6IHtcclxuICAgICAgICBsaXN0OiBbJ2ltYWdlL3BuZyddLFxyXG4gICAgICAgIGltYWdlOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgJ0pQRyc6IHtcclxuICAgICAgICBsaXN0OiBbJ2ltYWdlL2pwZWcnLCAnaW1hZ2UvcGpwZWcnXSxcclxuICAgICAgICBpbWFnZTogdHJ1ZVxyXG4gICAgfSxcclxuICAgICdHSUYnOiB7XHJcbiAgICAgICAgbGlzdDogWydpbWFnZS9naWYnXSxcclxuICAgICAgICBpbWFnZTogdHJ1ZVxyXG4gICAgfSxcclxuICAgICdCTVAnOiB7XHJcbiAgICAgICAgbGlzdDogWydpbWFnZS9ibXAnXSxcclxuICAgICAgICBpbWFnZTogdHJ1ZVxyXG4gICAgfSxcclxuICAgICdUSUZGJzogWydpbWFnZS9pZWYnLCAnaW1hZ2UvdGlmZiddLFxyXG4gICAgJ1RYVCc6IHtcclxuICAgICAgICBsaXN0OiBbJ2FwcGxpY2F0aW9uL3BsYWluJywgJ3RleHQvcGxhaW4nXSxcclxuICAgICAgICBpY29uOiAnaW1nL3R4dC5wbmcnXHJcbiAgICB9LFxyXG4gICAgJ1BERic6IHtcclxuICAgICAgICBsaXN0OiBbXCJhcHBsaWNhdGlvbi9wZGZcIl0sXHJcbiAgICAgICAgaWNvbjogJ2ltZy9wZGYucG5nJ1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVkaWFTZXJ2aWNlIHtcclxuXHJcbiAgICAvLyBAbmdJbmplY3RcclxuICAgIGNvbnN0cnVjdG9yKCRodHRwLCAkd2luZG93LCAkdGltZW91dCwgYWxlcnRzU2VydmljZSwgbG9hZGluZ1NlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XHJcbiAgICAgICAgdGhpcy4kd2luZG93ID0gJHdpbmRvdztcclxuICAgICAgICB0aGlzLiR0aW1lb3V0ID0gJHRpbWVvdXQ7XHJcbiAgICAgICAgdGhpcy5hbGVydHNTZXJ2aWNlID0gYWxlcnRzU2VydmljZTtcclxuICAgICAgICB0aGlzLmxvYWRpbmdTZXJ2aWNlID0gbG9hZGluZ1NlcnZpY2U7XHJcblxyXG4gICAgICAgIHRoaXMuZGlyID0gbnVsbDtcclxuICAgICAgICB0aGlzLmRpcnNfZGF0YSA9IFtdO1xyXG4gICAgICAgIHRoaXMuZmlsZXNfZGF0YSA9IFtdO1xyXG5cclxuICAgICAgICB0aGlzLmRpcl9saXN0ID0gW107XHJcblxyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRGaWxlID0gbnVsbDtcclxuXHJcbiAgICAgICAgdGhpcy5zaG93RGlhbG9nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zaG93TGVmdE1lbnUgPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLm9yZGVyX2ZpbGVzX2J5ID0gXCJcIjtcclxuICAgICAgICB0aGlzLmZpbHRlcl9maWxlcyA9IFwiXCI7XHJcblxyXG4gICAgICAgIHRoaXMubmV3X2RpciA9ICcnO1xyXG5cclxuICAgICAgICB0aGlzLmxvYWREaXIoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbG9hZERpcihkaXJlY3RvcnkgPSBudWxsLCBpc1JldHVybiA9IGZhbHNlKSB7XHJcbiAgICAgICAgLy8gbmFjaXRhdCBsb2FkaW5nIHNlcml2dXMgYSBzcHJhdml0IGxvYWRpbmcgc3RhcnRcclxuICAgICAgICB0aGlzLmxvYWRpbmdTZXJ2aWNlLmRvTG9hZGluZygpO1xyXG5cclxuICAgICAgICBsZXQgdXJsQWRyZXNzID0gJyc7XHJcbiAgICAgICAgaWYgKGRpcmVjdG9yeSkge1xyXG4gICAgICAgICAgICB1cmxBZHJlc3MgPSBkaXJlY3RvcnkubG9jYXRpb24gKyAnLycgKyBkaXJlY3RvcnkubmFtZTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpc1JldHVybikge1xyXG4gICAgICAgICAgICAgICAgdXJsQWRyZXNzID0gZGlyZWN0b3J5LmxvY2F0aW9uO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJfbGlzdC5wb3AoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlyX2xpc3QucHVzaChkaXJlY3RvcnkubmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuJGh0dHAuZ2V0KGBodHRwOi8vbWVkaWFicm93c2VyLmJhcnQuc2svZGlyJHt1cmxBZHJlc3N9YClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpciA9IHJlc3BvbnNlLmRhdGEuZGlyO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJzX2RhdGEgPSByZXNwb25zZS5kYXRhLmRpcnM7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5maWxlc19kYXRhID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBmaWxlIG9mIHJlc3BvbnNlLmRhdGEuZmlsZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGVzX2RhdGEucHVzaChuZXcgRmlsZShmaWxlKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBtZXNzID0gZXJyb3IuZGF0YS5jb2RlID8gZXJyb3IuZGF0YS5kZXNjcmlwdGlvbiA6IFwiVnlza3l0bGEgc2EgY2h5YmEuXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0c1NlcnZpY2UuYWRkQWxlcnQobWVzcywgJ2Vycm9yJyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ1NlcnZpY2Uuc3RvcExvYWRpbmcoKTtcclxuICAgICAgICAgICAgICAgIC8vIHRvZG8gdXJvYiBsb2FkaW4gc3RvcFxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgbG9hZEZpbGUoZmlsZURpcmVjdG9yeSA9IG51bGwpIHtcclxuICAgICAgICBpZiAoZmlsZURpcmVjdG9yeS50aHVtYl9saW5rKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRGaWxlID0gZmlsZURpcmVjdG9yeS5kb3dubG9hZF9saW5rO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dEaWFsb2cgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuJHdpbmRvdy5vcGVuKGZpbGVEaXJlY3RvcnkuZG93bmxvYWRfbGluaywgJ19ibGFuaycpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdXBsb2FkRmlsZShmaWxlc1NldCkge1xyXG4gICAgICAgIGZvciAobGV0IGl0ZW0gb2YgZmlsZXNTZXQpIHtcclxuICAgICAgICAgICAgdGhpcy5fdXBsb2FkRmlsZShpdGVtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX3VwbG9hZEZpbGUoZmlsZSkge1xyXG4gICAgICAgIHRoaXMubG9hZGluZ1NlcnZpY2UuZG9Mb2FkaW5nKCk7XHJcblxyXG4gICAgICAgIHZhciBsb2NhdGlvbiA9ICcvJztcclxuICAgICAgICBpZiAodGhpcy5kaXIpIHtcclxuICAgICAgICAgICAgbG9jYXRpb24gPSB0aGlzLmRpci5sb2NhdGlvbiArICcvJyArIHRoaXMuZGlyLm5hbWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJmaWxlXCIsIGZpbGUpO1xyXG5cclxuICAgICAgICB0aGlzLiRodHRwKHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICAgICAgICAgICAgICB1cmw6IGBodHRwOi8vbWVkaWFicm93c2VyLmJhcnQuc2svbWVkaWEtYnJvd3Nlci9maWxlJHtsb2NhdGlvbn1gLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeydDb250ZW50LVR5cGUnOiB1bmRlZmluZWR9LFxyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtUmVxdWVzdDogYW5ndWxhci5pZGVudGl0eVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWxlc19kYXRhLnB1c2gobmV3IEZpbGUocmVzdWx0LmRhdGEpKTtcclxuICAgICAgICAgICAgICAgIGxldCBtZXNzID0gcmVzdWx0LmRhdGEuY29kZSA/IHJlc3VsdC5kYXRhLmRlc2NyaXB0aW9uIDogXCJTdWJvciB1c3Blc25lIG5haHJhbnkuXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0c1NlcnZpY2UuYWRkQWxlcnQobWVzcyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBtZXNzID0gZXJyb3IuZGF0YS5jb2RlID8gZXJyb3IuZGF0YS5kZXNjcmlwdGlvbiA6IFwiVnlza3l0bGEgc2EgY2h5YmEuXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0c1NlcnZpY2UuYWRkQWxlcnQobWVzcywgJ2Vycm9yJyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ1NlcnZpY2Uuc3RvcExvYWRpbmcoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlTmV3RGlyKCkge1xyXG4gICAgICAgIHRoaXMubG9hZGluZ1NlcnZpY2UuZG9Mb2FkaW5nKCk7XHJcblxyXG4gICAgICAgIHZhciBsb2NhdGlvbiA9ICcvJztcclxuICAgICAgICBpZiAodGhpcy5kaXIpIHtcclxuICAgICAgICAgICAgbG9jYXRpb24gPSB0aGlzLmRpci5sb2NhdGlvbiArICcvJyArIHRoaXMuZGlyLm5hbWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLiRodHRwKHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMubmV3X2RpcixcclxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbjogbG9jYXRpb25cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB1cmw6IGBodHRwOi8vbWVkaWFicm93c2VyLmJhcnQuc2svbWVkaWEtYnJvd3Nlci9kaXJgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpcnNfZGF0YS5wdXNoKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGxldCBtZXNzID0gcmVzdWx0LmRhdGEuY29kZSA/IHJlc3VsdC5kYXRhLmRlc2NyaXB0aW9uIDogXCJQcmllY2lub2sgdXNwZXNuZSB2eXR2b3JlbnkuXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0c1NlcnZpY2UuYWRkQWxlcnQobWVzcyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBtZXNzID0gZXJyb3IuZGF0YS5jb2RlID8gZXJyb3IuZGF0YS5kZXNjcmlwdGlvbiA6IFwiVnlza3l0bGEgc2EgY2h5YmEuXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0c1NlcnZpY2UuYWRkQWxlcnQobWVzcywgJ2Vycm9yJyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ1NlcnZpY2Uuc3RvcExvYWRpbmcoKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMubmV3X2RpciA9IFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlRGlyKGRpcikge1xyXG4gICAgICAgIHRoaXMubG9hZGluZ1NlcnZpY2UuZG9Mb2FkaW5nKCk7XHJcblxyXG4gICAgICAgIHRoaXMuJGh0dHAoe1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgICAgICAgICAgIHVybDogYGh0dHA6Ly9tZWRpYWJyb3dzZXIuYmFydC5zay9tZWRpYS1icm93c2VyL2RpciR7ZGlyLmxvY2F0aW9ufS8ke2Rpci5uYW1lfWBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHRoaXMuZGlyc19kYXRhLmluZGV4T2YoZGlyKTtcclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXJzX2RhdGEuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxldCBtZXNzID0gcmVzdWx0LmRhdGEuY29kZSA/IHJlc3VsdC5kYXRhLmRlc2NyaXB0aW9uIDogXCJQcmllY2lub2sgdXNwZXNuZSB6bWF6YW55LlwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydHNTZXJ2aWNlLmFkZEFsZXJ0KG1lc3MpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbWVzcyA9IGVycm9yLmRhdGEuY29kZSA/IGVycm9yLmRhdGEuZGVzY3JpcHRpb24gOiBcIlZ5c2t5dGxhIHNhIGNoeWJhLlwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydHNTZXJ2aWNlLmFkZEFsZXJ0KG1lc3MsICdlcnJvcicpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmdTZXJ2aWNlLnN0b3BMb2FkaW5nKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZUZpbGUoZmlsZSl7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nU2VydmljZS5kb0xvYWRpbmcoKTtcclxuXHJcbiAgICAgICAgdGhpcy4kaHR0cCh7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiBgaHR0cDovL21lZGlhYnJvd3Nlci5iYXJ0LnNrL21lZGlhLWJyb3dzZXIvZmlsZSR7ZmlsZS5sb2NhdGlvbn0vJHtmaWxlLm5hbWV9YFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5maWxlc19kYXRhLmluZGV4T2YoZmlsZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZXNfZGF0YS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IG1lc3MgPSByZXN1bHQuZGF0YS5jb2RlID8gcmVzdWx0LmRhdGEuZGVzY3JpcHRpb24gOiBcIlN1Ym9yIHVzcGVzbmUgem1hemFueS5cIjtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRzU2VydmljZS5hZGRBbGVydChtZXNzKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IG1lc3MgPSBlcnJvci5kYXRhLmNvZGUgPyBlcnJvci5kYXRhLmRlc2NyaXB0aW9uIDogXCJWeXNreXRsYSBzYSBjaHliYS5cIjtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRzU2VydmljZS5hZGRBbGVydChtZXNzLCAnZXJyb3InKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nU2VydmljZS5zdG9wTG9hZGluZygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVMZWZ0TWVudSgpIHtcclxuICAgICAgICB0aGlzLnNob3dMZWZ0TWVudSA9ICF0aGlzLnNob3dMZWZ0TWVudTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVEaWFsb2coKSB7XHJcbiAgICAgICAgdGhpcy5zaG93RGlhbG9nID0gIXRoaXMuc2hvd0RpYWxvZztcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZURpYWxvZygpIHtcclxuICAgICAgICBpZiAodGhpcy5zaG93RGlhbG9nKVxyXG4gICAgICAgICAgICB0aGlzLnNob3dEaWFsb2cgPSAhdGhpcy5zaG93RGlhbG9nO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuY2xhc3MgRmlsZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVkX3RpbWUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZG93bmxvYWRfbGluayA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbnVsbDtcclxuICAgICAgICB0aGlzLnNpemUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMudGh1bWJfbGluayA9IG51bGw7XHJcbiAgICAgICAgdGhpcy50eXBlID0gbnVsbDtcclxuICAgICAgICB0aGlzLnVwZGF0ZV90aW1lID0gbnVsbDtcclxuXHJcbiAgICAgICAgdGhpcy5yYXdGaWxlID0gbnVsbDtcclxuXHJcbiAgICAgICAgYW5ndWxhci5tZXJnZSh0aGlzLCBkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUeXBlTmFtZShnZXRJY29uID0gZmFsc2UpIHtcclxuICAgICAgICBmb3IgKGxldCB0eXBlTmFtZSBpbiBUWVBFUykge1xyXG4gICAgICAgICAgICBsZXQgdHlwZU9iaiA9IFRZUEVTW3R5cGVOYW1lXTtcclxuICAgICAgICAgICAgaWYgKGFuZ3VsYXIuaXNEZWZpbmVkKHR5cGVPYmoubGlzdCkpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHR5cGUgb2YgdHlwZU9iai5saXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT0gdGhpcy50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnZXRJY29uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYW5ndWxhci5pc0RlZmluZWQodHlwZU9iai5pbWFnZSkgJiYgdHlwZU9iai5pbWFnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRodW1iX2xpbms7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhbmd1bGFyLmlzRGVmaW5lZCh0eXBlT2JqLmljb24pID8gdHlwZU9iai5pY29uIDogbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0eXBlTmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZXhjaGFuZ2VSYXcoZmlsZSkge1xyXG4gICAgICAgIHRoaXMuZG93bmxvYWRfbGluayA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gZmlsZS5uYW1lO1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IGZpbGUuc2l6ZTtcclxuICAgICAgICB0aGlzLnRodW1iX2xpbmsgPSBudWxsO1xyXG4gICAgICAgIHRoaXMudHlwZSA9IGZpbGUudHlwZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZV90aW1lID0gbnVsbDtcclxuICAgICAgICB0aGlzLnJhd0ZpbGUgPSBmaWxlLnJhd0ZpbGU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG5pY2VUeXBlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFR5cGVOYW1lKCkgPyB0aGlzLmdldFR5cGVOYW1lKCkgOiAnYW55JztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaWNvbigpIHtcclxuICAgICAgICBsZXQgaWNvbiA9IHRoaXMuZ2V0VHlwZU5hbWUodHJ1ZSk7XHJcbiAgICAgICAgcmV0dXJuIGljb24gPyBpY29uIDogXCJpbWcvcGxhaW4ucG5nXCJcclxuICAgIH1cclxuXHJcblxyXG59IiwicmVxdWlyZSgnLi90ZW1wbGF0ZXMnKTtcclxubW9kdWxlLmV4cG9ydHMgPSAndGVtcGxhdGVzJzsiLCJhbmd1bGFyLm1vZHVsZShcInRlbXBsYXRlc1wiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7JHRlbXBsYXRlQ2FjaGUucHV0KFwiYXBwbGljYXRpb24tcm9vdC9hcHBsaWNhdGlvbi5yb290LnRwbC5odG1sXCIsXCI8ZGl2IGlkPVxcXCJva25vXFxcIj5cXHJcXG5cXHJcXG4gICAgPGxlZnQtbWVudSBuZy1pZj1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLnNob3dMZWZ0TWVudVxcXCI+PC9sZWZ0LW1lbnU+XFxyXFxuXFxyXFxuICAgIDxkaXYgaWQ9XFxcIm9ic2FoXFxcIiBuZy1jbGFzcz1cXFwie1xcJ2Z1bGxcXCc6ICEkY3RybC5tZWRpYVNlcnZpY2Uuc2hvd0xlZnRNZW51fVxcXCI+XFxyXFxuICAgICAgICA8YnJlYWRjcnVtYnM+PC9icmVhZGNydW1icz5cXHJcXG4gICAgICAgIDxmaWx0ZXItcGFuZWw+PC9maWx0ZXItcGFuZWw+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IHN0eWxlPVxcXCJtYXJnaW4tbGVmdDoyMHB4OyBtYXJnaW4tcmlnaHQ6IDMwcHhcXFwiPlxcclxcblxcclxcbiAgICAgICAgICAgIDxkaXItcmV0dXJuPjwvZGlyLXJldHVybj5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8ZGlyLWJhc2U+PC9kaXItYmFzZT5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8ZmlsZT48L2ZpbGU+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuPC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiYnJlYWRjcnVtYnMvYnJlYWRjcnVtYnMudHBsLmh0bWxcIixcIjxkaXYgaWQ9XFxcImhlYWRlcjJcXFwiPlxcclxcbiAgICA8aDI+XFxyXFxuICAgICAgICA8c3Bhbj5Ib21lPC9zcGFuPlxcclxcbiAgICAgICAgPHNwYW4gbmctcmVwZWF0PVxcXCJkaXJOYW1lIGluICRjdHJsLm1lZGlhU2VydmljZS5kaXJfbGlzdFxcXCI+IC8ge3tkaXJOYW1lfX0gPC9zcGFuPlxcclxcbiAgICA8L2gyPlxcclxcbjwvZGl2PlwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImRpci1iYXNlL2Rpci5iYXNlLnRwbC5odG1sXCIsXCI8ZGl2IGNsYXNzPVxcXCJpY29uXFxcIiBuZy1yZXBlYXQ9XFxcImRpciBpbiAkY3RybC5tZWRpYVNlcnZpY2UuZGlyc19kYXRhIHwgZmlsdGVyOiB7bmFtZSA6JGN0cmwubWVkaWFTZXJ2aWNlLmZpbHRlcl9maWxlc31cXFwiIG5nLWNsaWNrPVxcXCIkY3RybC5tZWRpYVNlcnZpY2UubG9hZERpcihkaXIpXFxcIj5cXHJcXG5cXHJcXG4gICAgPGltZyBjbGFzcz1cXFwicmVtb3ZlX2RpclxcXCIgc3JjPVxcXCJpbWcvY2xvc2UucG5nXFxcIiAgbmctY2xpY2s9XFxcIiRjdHJsLmRlbGV0ZURpcihkaXIsICRldmVudCk7XFxcIi8+XFxyXFxuXFxyXFxuICAgIDxpbWcgY2xhc3M9XFxcImltZ19pY29uXFxcIiBzcmM9XFxcImltZy9wcmllY2lub2sucG5nXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibmF6b3Zfc3Vib3J1XFxcIj57e2Rpci5uYW1lfX08L2Rpdj5cXHJcXG5cXHJcXG48L2Rpdj5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJkaXItcmV0dXJuL2Rpci5yZXR1cm4udHBsLmh0bWxcIixcIjxkaXYgY2xhc3M9XFxcImljb25cXFwiIG5nLXNob3c9XFxcIiRjdHJsLm1lZGlhU2VydmljZS5kaXJcXFwiIG5nLWNsaWNrPVxcXCIkY3RybC5tZWRpYVNlcnZpY2UubG9hZERpcigkY3RybC5tZWRpYVNlcnZpY2UuZGlyLCB0cnVlKVxcXCI+XFxyXFxuICAgIDxpbWcgY2xhc3M9XFxcImltZ19pY29uXFxcIiBzcmM9XFxcImltZy9hZHJlc2FyLnBuZ1xcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm5hem92X3N1Ym9ydVxcXCI+TmFkcmFkZW55IGFkcmVzYXI8L2Rpdj5cXHJcXG48L2Rpdj5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJmaWxlL2ZpbGUudHBsLmh0bWxcIixcIjxkaXYgY2xhc3M9XFxcImljb25cXFwiIG5nLXJlcGVhdD1cXFwiZmlsZSBpbiAkY3RybC5tZWRpYVNlcnZpY2UuZmlsZXNfZGF0YSB8IG9yZGVyQnk6ICRjdHJsLm1lZGlhU2VydmljZS5vcmRlcl9maWxlc19ieSB8IGZpbHRlcjp7bmFtZSA6JGN0cmwubWVkaWFTZXJ2aWNlLmZpbHRlcl9maWxlc31cXFwiIG5nLWNsaWNrPVxcXCIkY3RybC5tZWRpYVNlcnZpY2UubG9hZEZpbGUoZmlsZSlcXFwiPlxcclxcbiAgICA8aW1nIGNsYXNzPVxcXCJyZW1vdmVfZGlyXFxcIiBzcmM9XFxcImltZy9jbG9zZS5wbmdcXFwiIG5nLWNsaWNrPVxcXCIkY3RybC5kZWxldGVGaWxlKGZpbGUsICRldmVudCk7XFxcIj5cXHJcXG4gICAgPGltZyBjbGFzcz1cXFwiaW1nX3BpY3R1cmVcXFwiICBuZy1zcmM9XFxcInt7ZmlsZS5pY29ufX1cXFwiPlxcclxcblxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJuYXpvdl9zdWJvcnVcXFwiPnt7ZmlsZS5uYW1lfX08L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwidHlwX3N1Ym9ydVxcXCI+XFxyXFxuICAgICAgICA8cD57e2ZpbGUubmljZVR5cGV9fTwvcD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInZlbGtvc3Rfc3Vib3J1XFxcIj5cXHJcXG4gICAgICAgIDxwPnt7ZmlsZS5zaXplfX08L3A+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImZpbHRlci1wYW5lbC9maWx0ZXIucGFuZWwudHBsLmh0bWxcIixcIjxkaXYgY2xhc3M9XFxcImZpbHRlci1wYW5lbFxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZpbHRlclxcXCI+XFxyXFxuICAgICAgICA8dXBsb2FkLWZpbGU+PC91cGxvYWQtZmlsZT5cXHJcXG4gICAgICAgIDxwPkhsYWRhdDpcXHJcXG4gICAgICAgICAgICA8aW5wdXQgbmctbW9kZWw9XFxcIiRjdHJsLm1lZGlhU2VydmljZS5maWx0ZXJfZmlsZXNcXFwiLz5cXHJcXG4gICAgICAgIDwvcD5cXHJcXG4gICAgICAgIDxwPlpvcmFkaXQgcG9kbGE6XFxyXFxuICAgICAgICAgICAgPHNlbGVjdCBuZy1tb2RlbD1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLm9yZGVyX2ZpbGVzX2J5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwibmFtZVxcXCI+TmF6dnU8L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwic2l6ZVxcXCI+VmVsa29zdGk8L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiY3JlYXRlZF90aW1lXFxcIj5EYXR1bXUgdnl0dm9yZW5pYTwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJuaWNlVHlwZVxcXCI+VHlwdSBzdWJvcnU8L29wdGlvbj5cXHJcXG4gICAgICAgICAgICA8L3NlbGVjdD5cXHJcXG4gICAgICAgIDwvcD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwibGVmdC1tZW51L2xlZnQubWVudS50cGwuaHRtbFwiLFwiPGRpdiBpZD1cXFwibGVmdF9tZW51XFxcIj5cXHJcXG4gICAgPHVsPlxcclxcbiAgICAgICAgPGxpIG5nLXNob3c9XFxcIiRjdHJsLm1lZGlhU2VydmljZS5kaXJcXFwiIG5nLWNsaWNrPVxcXCIkY3RybC5tZWRpYVNlcnZpY2UubG9hZERpcigkY3RybC5tZWRpYVNlcnZpY2UuZGlyLCB0cnVlKVxcXCIgc3R5bGU9XFxcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE4cHg7XFxcIj5OYWRyYWRlbnkgYWRyZXNhcjwvbGk+XFxyXFxuICAgICAgICA8bGkgbmctcmVwZWF0PVxcXCJkaXIgaW4gJGN0cmwubWVkaWFTZXJ2aWNlLmRpcnNfZGF0YVxcXCIgbmctY2xpY2s9XFxcIiRjdHJsLm1lZGlhU2VydmljZS5sb2FkRGlyKGRpcilcXFwiID57e2Rpci5uYW1lfX08L2xpPlxcclxcbiAgICA8L3VsPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydFxcXCIgbmctY2xhc3M9XFxcImFsZXJ0LnR5cGVcXFwiIG5nLXJlcGVhdD1cXFwiYWxlcnQgaW4gJGN0cmwuYWxlcnRzU2VydmljZS5hbGVydHMgdHJhY2sgYnkgJGluZGV4XFxcIj57e2FsZXJ0Lm1lc3NhZ2V9fTwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJsb2FkZXJcXFwiIG5nLWlmPVxcXCIkY3RybC5sb2FkaW5nU2VydmljZS5sb2FkaW5nU3RhcnRcXFwiPkxvYWRpbmcuLi48L2Rpdj5cXHJcXG48L2Rpdj5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJtZWRpYS1icm93c2VyL21lZGlhLmJyb3dzZXIudHBsLmh0bWxcIixcIjxkaXYgaWQ9XFxcIk1lZGlhQnJvd3NlclxcXCI+XFxyXFxuICAgIDxkaXYgaWQ9XFxcImhlYWRlcjFcXFwiPlxcclxcbiAgICAgICAgPGltZyBuZy1jbGljaz1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLnRvZ2dsZUxlZnRNZW51KClcXFwiIGlkPVxcXCJtZW51X2ljb25cXFwiIHNyYz1cXFwiaW1nL21lbnUucG5nXFxcIiBzdHlsZT1cXFwid2lkdGg6NTBweDsgaGVpZ2h0OjEwMCU7ZmxvYXQ6bGVmdDsgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXFwiPlxcclxcbiAgICAgICAgPGgxPk1lZGlhIEJyb3dzZXI8L2gxPlxcclxcbiAgICAgICAgPGltZyBpZD1cXFwiemF2cmlfZGlhbG9nXFxcIlxcclxcbiAgICAgICAgICAgICBuZy1jbGljaz1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLnRvZ2dsZURpYWxvZygpXFxcIlxcclxcbiAgICAgICAgICAgICBzcmM9XFxcImltZy9jbG9zZS5wbmdcXFwiIHN0eWxlPVxcXCJ3aWR0aDo0MHB4OyBoZWlnaHQ6MTAwJTtmbG9hdDpyaWdodDsgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxcIj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgIDxhcHBsaWNhdGlvbi1yb290PjwvYXBwbGljYXRpb24tcm9vdD5cXHJcXG48L2Rpdj5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJzdHZvcmVjL3N0dm9yZWMudHBsLmh0bWxcIixcIjxkaXYgaWQ9XFxcInN0dm9yZWNcXFwiPlxcclxcbiAgICA8aW1nIHN0eWxlPVxcXCJtYXgtaGVpZ2h0OiAyNXZ3OyBtYXgtd2lkdGg6IDI1dnc7XFxcIiBuZy1pZj1cXFwiJGN0cmwuaXNJbWFnZVxcXCIgbmctc3JjPVxcXCJ7eyRjdHJsLm1lZGlhU2VydmljZS5zZWxlY3RlZEZpbGV9fVxcXCI+XFxyXFxuPC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwidXBsb2FkLWZpbGUvdXBsb2FkLmZpbGUudHBsLmh0bWxcIixcIjxkaXYgY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPlxcclxcbiAgICA8aW5wdXQgaWQ9XFxcImRyYWdnaW5nXFxcIlxcclxcbiAgICAgICAgICAgY2xhc3M9XFxcImhpZGRlblxcXCJcXHJcXG4gICAgICAgICAgIHR5cGU9XFxcImZpbGVcXFwiXFxyXFxuICAgICAgICAgICBhY2NlcHQ9XFxcInt7JGN0cmwuZmlsZUFjY2VwdH19XFxcIlxcclxcbiAgICAgICAgICAgbXVsdGlwbGUvPlxcclxcbiAgICA8ZGl2PlxcclxcbiAgICAgICAgPHNwYW4+VXBsb2FkIHN1Ym9ydTogPC9zcGFuPlxcclxcbiAgICAgICAgPGEgY2xhc3M9XFxcImN1cnNvci1wb2ludGVyIHVwbG9hZC1idG5cXFwiIG5nLWNsaWNrPVxcXCIkY3RybC5maXJlVXBsb2FkRXZlbnQoKVxcXCI+XFxyXFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImRpc3BsYXktYmxvY2tcXFwiIHRyYW5zbGF0ZT5VcGxvYWQ8L3NwYW4+XFxyXFxuICAgICAgICA8L2E+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8cD5Ob3Z5IGFkcmVzYXI6XFxyXFxuICAgICAgICA8aW5wdXQgbmctbW9kZWw9XFxcIiRjdHJsLm1lZGlhU2VydmljZS5uZXdfZGlyXFxcIi8+XFxyXFxuICAgICAgICA8YnV0dG9uIG5nLWNsaWNrPVxcXCIkY3RybC5jcmVhdGVOZXdEaXIoKVxcXCI+Q1JFQVRFPC9idXR0b24+XFxyXFxuICAgIDwvcD5cXHJcXG48L2Rpdj5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJ1dm9kL3V2b2QudHBsLmh0bWxcIixcIjxkaXY+XFxyXFxuICAgIDxkaXYgaWQ9XFxcInV2b2RcXFwiXFxyXFxuICAgICAgICAgbmctY2xhc3M9XFxcIntcXCdoYWxmdmlld1xcJzogJGN0cmwubWVkaWFTZXJ2aWNlLnNob3dEaWFsb2d9XFxcIlxcclxcbiAgICAgICAgIG5nLWNsaWNrPVxcXCIkY3RybC5tZWRpYVNlcnZpY2UuY2xvc2VEaWFsb2coKVxcXCI+XFxyXFxuICAgICAgICA8c3R2b3JlYz48L3N0dm9yZWM+XFxyXFxuXFxyXFxuICAgICAgICA8YnV0dG9uIGlkPVxcXCJ6b2JyYXpfZGlhbG9nXFxcIlxcclxcbiAgICAgICAgICAgICAgICBuZy1jbGljaz1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLnRvZ2dsZURpYWxvZygpOyAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XFxcIlxcclxcbiAgICAgICAgICAgICAgICBzdHlsZT1cXFwibWFyZ2luLWxlZnQ6YXV0bzttYXJnaW4tcmlnaHQ6YXV0bztkaXNwbGF5OmJsb2NrOyBiYWNrZ3JvdW5kLWNvbG9yOiM0NjQ5NGE7Y29sb3I6IHdoaXRlOyBwYWRkaW5nOiA1cHggNXB4IDVweCA1cHhcXFwiPlpPQlJBWklUIERJQUxPR1xcclxcbiAgICAgICAgPC9idXR0b24+XFxyXFxuICAgIDwvZGl2PlxcclxcblxcclxcblxcclxcbiAgICA8bWVkaWEtYnJvd3NlciBuZy1pZj1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLnNob3dEaWFsb2dcXFwiPjwvbWVkaWEtYnJvd3Nlcj5cXHJcXG48L2Rpdj5cIik7fV0pOyJdfQ==
