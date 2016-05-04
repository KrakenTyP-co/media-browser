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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

angular.module('browser', [_index2.default]).component('uvod', _uvod2.default).component('mediaBrowser', _media2.default).component('applicationRoot', _application2.default).component('leftMenu', _left2.default).component('dirReturn', _dir2.default).component('dirBase', _dir4.default).component('file', _file2.default).component('stvorec', _stvorec2.default).component('breadcrumbs', _breadcrumbs2.default).component('filterPanel', _filter2.default).component('uploadFile', _upload2.default).service('mediaService', _media4.default).service('alertsService', _alerts2.default);

},{"./app/alerts.service":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/alerts.service.js","./app/components/application-root/application.root":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/components/application-root/application.root.js","./app/components/breadcrumbs/breadcrumbs":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/components/breadcrumbs/breadcrumbs.js","./app/components/dir-base/dir.base":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/components/dir-base/dir.base.js","./app/components/dir-return/dir.return":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/components/dir-return/dir.return.js","./app/components/file/file":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/components/file/file.js","./app/components/filter-panel/filter.panel":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/components/filter-panel/filter.panel.js","./app/components/left-menu/left.menu":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/components/left-menu/left.menu.js","./app/components/media-browser/media.browser":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/components/media-browser/media.browser.js","./app/components/stvorec/stvorec":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/components/stvorec/stvorec.js","./app/components/upload-file/upload.file":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/components/upload-file/upload.file.js","./app/components/uvod/uvod":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/components/uvod/uvod.js","./app/media.service":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/media.service.js","./tpl/index":"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/tpl/index.js"}],"/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app/alerts.service.js":[function(require,module,exports){
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
function LeftMenu($http, mediaService, alertsService) {
    _classCallCheck(this, LeftMenu);

    this.$http = $http;
    this.mediaService = mediaService;
    this.alertsService = alertsService;
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

    function MediaService($http, $window, $timeout, alertsService) {
        _classCallCheck(this, MediaService);

        this.$http = $http;
        this.$window = $window;
        this.$timeout = $timeout;
        this.alertsService = alertsService;

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
                var mess = result.data.code ? result.data.description : "Priecinok uspesne vytvoreny.";
                _this3.alertsService.addAlert(mess);
            }).catch(function (error) {
                var mess = error.data.code ? error.data.description : "Vyskytla sa chyba.";
                _this3.alertsService.addAlert(mess, 'error');
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
                var mess = result.data.code ? result.data.description : "Priecinok uspesne zmazany.";
                _this4.alertsService.addAlert(mess);
            }).catch(function (error) {
                var mess = error.data.code ? error.data.description : "Vyskytla sa chyba.";
                _this4.alertsService.addAlert(mess, 'error');
            });
        }
    }, {
        key: 'deleteFile',
        value: function deleteFile(file) {
            var _this5 = this;

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
  $templateCache.put("breadcrumbs/breadcrumbs.tpl.html", "<div id=\"header2\">\n    <h2>\n        <span>Home</span>\n        <span ng-repeat=\"dirName in $ctrl.mediaService.dir_list\"> / {{dirName}} </span>\n    </h2>\n</div>");
  $templateCache.put("dir-base/dir.base.tpl.html", "<div class=\"icon\" ng-repeat=\"dir in $ctrl.mediaService.dirs_data | filter: {name :$ctrl.mediaService.filter_files}\" ng-click=\"$ctrl.mediaService.loadDir(dir)\">\n\n    <img class=\"remove_dir\" src=\"img/close.png\"  ng-click=\"$ctrl.deleteDir(dir, $event);\"/>\n\n    <img class=\"img_icon\" src=\"img/priecinok.png\">\n    <div class=\"nazov_suboru\">{{dir.name}}</div>\n\n</div>");
  $templateCache.put("dir-return/dir.return.tpl.html", "<div class=\"icon\" ng-show=\"$ctrl.mediaService.dir\" ng-click=\"$ctrl.mediaService.loadDir($ctrl.mediaService.dir, true)\">\n    <img class=\"img_icon\" src=\"img/adresar.png\">\n    <div class=\"nazov_suboru\">Nadradeny adresar</div>\n</div>");
  $templateCache.put("filter-panel/filter.panel.tpl.html", "<div class=\"filter-panel\">\n    <div class=\"filter\">\n        <upload-file></upload-file>\n        <p>Hladat:\n            <input ng-model=\"$ctrl.mediaService.filter_files\"/>\n        </p>\n        <p>Zoradit podla:\n            <select ng-model=\"$ctrl.mediaService.order_files_by\">\n                <option value=\"name\">Nazvu</option>\n                <option value=\"size\">Velkosti</option>\n                <option value=\"created_time\">Datumu vytvorenia</option>\n                <option value=\"niceType\">Typu suboru</option>\n            </select>\n        </p>\n    </div>\n</div>");
  $templateCache.put("file/file.tpl.html", "<div class=\"icon\" ng-repeat=\"file in $ctrl.mediaService.files_data | orderBy: $ctrl.mediaService.order_files_by | filter:{name :$ctrl.mediaService.filter_files}\" ng-click=\"$ctrl.mediaService.loadFile(file)\">\n    <img class=\"remove_dir\" src=\"img/close.png\" ng-click=\"$ctrl.deleteFile(file, $event);\">\n    <img class=\"img_picture\"  ng-src=\"{{file.icon}}\">\n\n    <div class=\"nazov_suboru\">{{file.name}}</div>\n    <div class=\"typ_suboru\">\n        <p>{{file.niceType}}</p>\n    </div>\n    <div class=\"velkost_suboru\">\n        <p>{{file.size}}</p>\n    </div>\n</div>");
  $templateCache.put("left-menu/left.menu.tpl.html", "<div id=\"left_menu\">\n    <ul>\n        <li ng-show=\"$ctrl.mediaService.dir\" ng-click=\"$ctrl.mediaService.loadDir($ctrl.mediaService.dir, true)\" style=\"font-weight: bold; font-size: 18px;\">Nadradeny adresar</li>\n        <li ng-repeat=\"dir in $ctrl.mediaService.dirs_data\" ng-click=\"$ctrl.mediaService.loadDir(dir)\" >{{dir.name}}</li>\n    </ul>\n    <div class=\"alert\" ng-class=\"alert.type\" ng-repeat=\"alert in $ctrl.alertsService.alerts track by $index\">{{alert.message}}</div>\n</div>");
  $templateCache.put("media-browser/media.browser.tpl.html", "<div id=\"MediaBrowser\">\n    <div id=\"header1\">\n        <img ng-click=\"$ctrl.mediaService.toggleLeftMenu()\" id=\"menu_icon\" src=\"img/menu.png\" style=\"width:50px; height:100%;float:left; align-self: flex-start;\">\n        <h1>Media Browser</h1>\n        <img id=\"zavri_dialog\"\n             ng-click=\"$ctrl.mediaService.toggleDialog()\"\n             src=\"img/close.png\" style=\"width:40px; height:100%;float:right; align-self: flex-end;\">\n    </div>\n\n    <application-root></application-root>\n</div>");
  $templateCache.put("stvorec/stvorec.tpl.html", "<div id=\"stvorec\">\n    <img style=\"max-height: 25vw; max-width: 25vw;\" ng-if=\"$ctrl.isImage\" ng-src=\"{{$ctrl.mediaService.selectedFile}}\">\n</div>");
  $templateCache.put("upload-file/upload.file.tpl.html", "<div class=\"pull-right\">\n    <input id=\"dragging\"\n           class=\"hidden\"\n           type=\"file\"\n           accept=\"{{$ctrl.fileAccept}}\"\n           multiple/>\n    <div>\n        <span>Upload suboru: </span>\n        <a class=\"cursor-pointer upload-btn\" ng-click=\"$ctrl.fireUploadEvent()\">\n            <span class=\"display-block\" translate>Upload</span>\n        </a>\n    </div>\n    <p>Novy adresar:\n        <input ng-model=\"$ctrl.mediaService.new_dir\"/>\n        <button ng-click=\"$ctrl.createNewDir()\">CREATE</button>\n    </p>\n</div>");
  $templateCache.put("uvod/uvod.tpl.html", "<div>\n    <div id=\"uvod\"\n         ng-class=\"{\'halfview\': $ctrl.mediaService.showDialog}\"\n         ng-click=\"$ctrl.mediaService.closeDialog()\">\n        <stvorec></stvorec>\n\n        <button id=\"zobraz_dialog\"\n                ng-click=\"$ctrl.mediaService.toggleDialog(); $event.stopPropagation();\"\n                style=\"margin-left:auto;margin-right:auto;display:block; background-color:#46494a;color: white; padding: 5px 5px 5px 5px\">ZOBRAZIT DIALOG\n        </button>\n    </div>\n\n\n    <media-browser ng-if=\"$ctrl.mediaService.showDialog\"></media-browser>\n</div>");
}]);

},{}]},{},["/home/stano/bart/ssvidran/k/katka/application/media-browser/src/app.js"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBwLmpzIiwic3JjL2FwcC9hbGVydHMuc2VydmljZS5qcyIsInNyYy9hcHAvY29tcG9uZW50cy9hcHBsaWNhdGlvbi1yb290L2FwcGxpY2F0aW9uLnJvb3QuanMiLCJzcmMvYXBwL2NvbXBvbmVudHMvYnJlYWRjcnVtYnMvYnJlYWRjcnVtYnMuanMiLCJzcmMvYXBwL2NvbXBvbmVudHMvZGlyLWJhc2UvZGlyLmJhc2UuanMiLCJzcmMvYXBwL2NvbXBvbmVudHMvZGlyLXJldHVybi9kaXIucmV0dXJuLmpzIiwic3JjL2FwcC9jb21wb25lbnRzL2ZpbGUvZmlsZS5qcyIsInNyYy9hcHAvY29tcG9uZW50cy9maWx0ZXItcGFuZWwvZmlsdGVyLnBhbmVsLmpzIiwic3JjL2FwcC9jb21wb25lbnRzL2xlZnQtbWVudS9sZWZ0Lm1lbnUuanMiLCJzcmMvYXBwL2NvbXBvbmVudHMvbWVkaWEtYnJvd3Nlci9tZWRpYS5icm93c2VyLmpzIiwic3JjL2FwcC9jb21wb25lbnRzL3N0dm9yZWMvc3R2b3JlYy5qcyIsInNyYy9hcHAvY29tcG9uZW50cy91cGxvYWQtZmlsZS91cGxvYWQuZmlsZS5qcyIsInNyYy9hcHAvY29tcG9uZW50cy91dm9kL3V2b2QuanMiLCJzcmMvYXBwL21lZGlhLnNlcnZpY2UuanMiLCJzcmMvdHBsL2luZGV4LmpzIiwic3JjL3RwbC90ZW1wbGF0ZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7OztBQUVBLFFBQVEsTUFBUixDQUFlLFNBQWYsRUFBMEIsaUJBQTFCLEVBQ0ssU0FETCxDQUNlLE1BRGYsa0JBRUssU0FGTCxDQUVlLGNBRmYsbUJBR0ss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QWQsQ0FGQTs7OztXQXREVDs7Ozs7O0FDdE5OLFFBQVEsYUFBUjtBQUNBLE9BQU8sT0FBUCxHQUFpQixXQUFqQjs7Ozs7QUNEQSxRQUFRLE1BQVIsQ0FBZSxXQUFmLEVBQTRCLEVBQTVCLEVBQWdDLEdBQWhDLENBQW9DLENBQUMsZ0JBQUQsRUFBbUIsVUFBUyxjQUFULEVBQXlCO0FBQUMsaUJBQWUsR0FBZixDQUFtQiw0Q0FBbkIsRUFBZ0UsK2NBQWhFLEVBQUQ7QUFDaEYsaUJBQWUsR0FBZixDQUFtQixrQ0FBbkIsRUFBc0QseUtBQXRELEVBRGdGO0FBRWhGLGlCQUFlLEdBQWYsQ0FBbUIsNEJBQW5CLEVBQWdELG9ZQUFoRCxFQUZnRjtBQUdoRixpQkFBZSxHQUFmLENBQW1CLGdDQUFuQixFQUFvRCxzUEFBcEQsRUFIZ0Y7QUFJaEYsaUJBQWUsR0FBZixDQUFtQixvQ0FBbkIsRUFBd0QsMGxCQUF4RCxFQUpnRjtBQUtoRixpQkFBZSxHQUFmLENBQW1CLG9CQUFuQixFQUF3QyxnbEJBQXhDLEVBTGdGO0FBTWhGLGlCQUFlLEdBQWYsQ0FBbUIsOEJBQW5CLEVBQWtELDJmQUFsRCxFQU5nRjtBQU9oRixpQkFBZSxHQUFmLENBQW1CLHNDQUFuQixFQUEwRCwyZ0JBQTFELEVBUGdGO0FBUWhGLGlCQUFlLEdBQWYsQ0FBbUIsMEJBQW5CLEVBQThDLDZKQUE5QyxFQVJnRjtBQVNoRixpQkFBZSxHQUFmLENBQW1CLGtDQUFuQixFQUFzRCwyakJBQXRELEVBVGdGO0FBVWhGLGlCQUFlLEdBQWYsQ0FBbUIsb0JBQW5CLEVBQXdDLGdsQkFBeEMsRUFWZ0Y7Q0FBekIsQ0FBdkQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vdHBsL2luZGV4JztcbmltcG9ydCB1dm9kIGZyb20gJy4vYXBwL2NvbXBvbmVudHMvdXZvZC91dm9kJztcbmltcG9ydCBtZWRpYUJyb3dzZXIgZnJvbSAnLi9hcHAvY29tcG9uZW50cy9tZWRpYS1icm93c2VyL21lZGlhLmJyb3dzZXInO1xuaW1wb3J0IHJvb3QgZnJvbSAnLi9hcHAvY29tcG9uZW50cy9hcHBsaWNhdGlvbi1yb290L2FwcGxpY2F0aW9uLnJvb3QnO1xuaW1wb3J0IGxlZnRNZW51IGZyb20gJy4vYXBwL2NvbXBvbmVudHMvbGVmdC1tZW51L2xlZnQubWVudSc7XG5pbXBvcnQgZGlyUmV0dXJuIGZyb20gJy4vYXBwL2NvbXBvbmVudHMvZGlyLXJldHVybi9kaXIucmV0dXJuJztcbmltcG9ydCBkaXJCYXNlIGZyb20gJy4vYXBwL2NvbXBvbmVudHMvZGlyLWJhc2UvZGlyLmJhc2UnO1xuaW1wb3J0IGZpbGUgZnJvbSAnLi9hcHAvY29tcG9uZW50cy9maWxlL2ZpbGUnO1xuaW1wb3J0IHN0dm9yZWMgZnJvbSAnLi9hcHAvY29tcG9uZW50cy9zdHZvcmVjL3N0dm9yZWMnO1xuaW1wb3J0IGJyZWFkY3J1bWJzIGZyb20gJy4vYXBwL2NvbXBvbmVudHMvYnJlYWRjcnVtYnMvYnJlYWRjcnVtYnMnO1xuaW1wb3J0IGZpbHRlclBhbmVsIGZyb20gJy4vYXBwL2NvbXBvbmVudHMvZmlsdGVyLXBhbmVsL2ZpbHRlci5wYW5lbCc7XG5pbXBvcnQgdXBsb2FkRmlsZSBmcm9tICcuL2FwcC9jb21wb25lbnRzL3VwbG9hZC1maWxlL3VwbG9hZC5maWxlJztcblxuaW1wb3J0IE1lZGlhU2VydmljZSBmcm9tICcuL2FwcC9tZWRpYS5zZXJ2aWNlJztcbmltcG9ydCBBbGVydHNTZXJ2aWNlIGZyb20gJy4vYXBwL2FsZXJ0cy5zZXJ2aWNlJztcblxuYW5ndWxhci5tb2R1bGUoJ2Jyb3dzZXInLCBbdGVtcGxhdGVdKVxuICAgIC5jb21wb25lbnQoJ3V2b2QnLCB1dm9kKVxuICAgIC5jb21wb25lbnQoJ21lZGlhQnJvd3NlcicsIG1lZGlhQnJvd3NlcilcbiAgICAuY29tcG9uZW50KCdhcHBsaWNhdGlvblJvb3QnLCByb290KVxuICAgIC5jb21wb25lbnQoJ2xlZnRNZW51JywgbGVmdE1lbnUpXG4gICAgLmNvbXBvbmVudCgnZGlyUmV0dXJuJywgZGlyUmV0dXJuKVxuICAgIC5jb21wb25lbnQoJ2RpckJhc2UnLCBkaXJCYXNlKVxuICAgIC5jb21wb25lbnQoJ2ZpbGUnLCBmaWxlKVxuICAgIC5jb21wb25lbnQoJ3N0dm9yZWMnLCBzdHZvcmVjKVxuICAgIC5jb21wb25lbnQoJ2JyZWFkY3J1bWJzJywgYnJlYWRjcnVtYnMpXG4gICAgLmNvbXBvbmVudCgnZmlsdGVyUGFuZWwnLCBmaWx0ZXJQYW5lbClcbiAgICAuY29tcG9uZW50KCd1cGxvYWRGaWxlJywgdXBsb2FkRmlsZSlcblxuICAgIC5zZXJ2aWNlKCdtZWRpYVNlcnZpY2UnLCBNZWRpYVNlcnZpY2UpXG4gICAgLnNlcnZpY2UoJ2FsZXJ0c1NlcnZpY2UnLCBBbGVydHNTZXJ2aWNlKVxuOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFsZXJ0c1NlcnZpY2Uge1xuXG4gICAgLy8gQG5nSW5qZWN0XG4gICAgY29uc3RydWN0b3IoJHRpbWVvdXQpIHtcbiAgICAgICAgdGhpcy4kdGltZW91dCA9ICR0aW1lb3V0O1xuICAgICAgICB0aGlzLmFsZXJ0cyA9IFtdO1xuICAgIH1cblxuICAgIGFkZEFsZXJ0KG1lc3NhZ2UgPSAnQWN0aW9uIGRvbmUnLCB0eXBlID0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgIHRoaXMuYWxlcnRzLnB1c2goe1xuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICAgICAgICAgIHR5cGU6IHR5cGVcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuJHRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hbGVydHMuc2hpZnQoKTtcbiAgICAgICAgfSwgNTAwMCk7XG4gICAgfVxufSIsImNsYXNzIEFwcGxpY2F0aW9uUm9vdHtcblxuICAgIC8vIEBuZ0luamVjdFxuICAgIGNvbnN0cnVjdG9yKCRodHRwLCBtZWRpYVNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xuICAgICAgICB0aGlzLm1lZGlhU2VydmljZSA9IG1lZGlhU2VydmljZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBjb250cm9sbGVyOiBBcHBsaWNhdGlvblJvb3QsXG4gICAgdGVtcGxhdGVVcmw6ICdhcHBsaWNhdGlvbi1yb290L2FwcGxpY2F0aW9uLnJvb3QudHBsLmh0bWwnXG59OyIsImNsYXNzIEJyZWFkY3J1bWJzIHtcblxuICAgIC8vIEBuZ0luamVjdFxuICAgIGNvbnN0cnVjdG9yKCRodHRwLCBtZWRpYVNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xuICAgICAgICB0aGlzLm1lZGlhU2VydmljZSA9IG1lZGlhU2VydmljZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBjb250cm9sbGVyOiBCcmVhZGNydW1icyxcbiAgICB0ZW1wbGF0ZVVybDogJ2JyZWFkY3J1bWJzL2JyZWFkY3J1bWJzLnRwbC5odG1sJ1xufSIsImNsYXNzIERpckJhc2Uge1xuXG4gICAgLy8gQG5nSW5qZWN0XG4gICAgY29uc3RydWN0b3IoJGh0dHAsIG1lZGlhU2VydmljZSkge1xuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gICAgICAgIHRoaXMubWVkaWFTZXJ2aWNlID0gbWVkaWFTZXJ2aWNlO1xuICAgIH1cblxuICAgIGRlbGV0ZURpcihkaXIsICRldmVudCkge1xuICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRoaXMubWVkaWFTZXJ2aWNlLmRlbGV0ZURpcihkaXIpO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY29udHJvbGxlcjogRGlyQmFzZSxcbiAgICB0ZW1wbGF0ZVVybDogJ2Rpci1iYXNlL2Rpci5iYXNlLnRwbC5odG1sJ1xufSIsImNsYXNzIERpclJldHVybiB7XG5cbiAgICAvLyBAbmdJbmplY3RcbiAgICBjb25zdHJ1Y3RvcigkaHR0cCwgbWVkaWFTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcbiAgICAgICAgdGhpcy5tZWRpYVNlcnZpY2UgPSBtZWRpYVNlcnZpY2U7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY29udHJvbGxlcjogRGlyUmV0dXJuLFxuICAgIHRlbXBsYXRlVXJsOiAnZGlyLXJldHVybi9kaXIucmV0dXJuLnRwbC5odG1sJ1xufSIsImNsYXNzIEZpbGUge1xuXG4gICAgLy8gQG5nSW5qZWN0XG4gICAgY29uc3RydWN0b3IoJGh0dHAsIG1lZGlhU2VydmljZSkge1xuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gICAgICAgIHRoaXMubWVkaWFTZXJ2aWNlID0gbWVkaWFTZXJ2aWNlO1xuICAgIH1cbiAgICBkZWxldGVGaWxlKGZpbGUsICRldmVudCkge1xuICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRoaXMubWVkaWFTZXJ2aWNlLmRlbGV0ZUZpbGUoZmlsZSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdHtcbiAgICBjb250cm9sbGVyOiBGaWxlLFxuICAgIHRlbXBsYXRlVXJsOiAnZmlsZS9maWxlLnRwbC5odG1sJ1xufSIsImNsYXNzIEZpbHRlclBhbmVsIHtcblxuICAgIC8vIEBuZ0luamVjdFxuICAgIGNvbnN0cnVjdG9yKCRodHRwLCBtZWRpYVNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xuICAgICAgICB0aGlzLm1lZGlhU2VydmljZSA9IG1lZGlhU2VydmljZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBjb250cm9sbGVyOiBGaWx0ZXJQYW5lbCxcbiAgICB0ZW1wbGF0ZVVybDogJ2ZpbHRlci1wYW5lbC9maWx0ZXIucGFuZWwudHBsLmh0bWwnXG59OyIsImNsYXNzIExlZnRNZW51IHtcblxuICAgIC8vIEBuZ0luamVjdFxuICAgIGNvbnN0cnVjdG9yKCRodHRwLCBtZWRpYVNlcnZpY2UsIGFsZXJ0c1NlcnZpY2UpIHtcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xuICAgICAgICB0aGlzLm1lZGlhU2VydmljZSA9IG1lZGlhU2VydmljZTtcbiAgICAgICAgdGhpcy5hbGVydHNTZXJ2aWNlID0gYWxlcnRzU2VydmljZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBjb250cm9sbGVyOiBMZWZ0TWVudSxcbiAgICB0ZW1wbGF0ZVVybDogJ2xlZnQtbWVudS9sZWZ0Lm1lbnUudHBsLmh0bWwnXG59IiwiY2xhc3MgTWVkaWFCcm93c2VyIHtcblxuICAgIC8vIEBuZ0luamVjdFxuICAgIGNvbnN0cnVjdG9yKCRodHRwLCBtZWRpYVNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xuICAgICAgICB0aGlzLm1lZGlhU2VydmljZSA9IG1lZGlhU2VydmljZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBjb250cm9sbGVyOiBNZWRpYUJyb3dzZXIsXG4gICAgdGVtcGxhdGVVcmw6ICdtZWRpYS1icm93c2VyL21lZGlhLmJyb3dzZXIudHBsLmh0bWwnXG59OyIsImNsYXNzIFN0dm9yZWN7XG5cbiAgICAvLyBAbmdJbmplY3RcbiAgICBjb25zdHJ1Y3RvcigkaHR0cCwgbWVkaWFTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcbiAgICAgICAgdGhpcy5tZWRpYVNlcnZpY2UgPSBtZWRpYVNlcnZpY2U7XG4gICAgfVxuXG4gICAgZ2V0IGlzSW1hZ2UoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMubWVkaWFTZXJ2aWNlLnNlbGVjdGVkRmlsZSA/IHRydWUgOiBmYWxzZTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbnRyb2xsZXI6IFN0dm9yZWMsXG4gICAgdGVtcGxhdGVVcmw6ICdzdHZvcmVjL3N0dm9yZWMudHBsLmh0bWwnXG59IiwiY2xhc3MgVXBsb2FkRmlsZSB7XG5cbiAgICAvLyBAbmdJbmplY3RcbiAgICBjb25zdHJ1Y3RvcigkdGltZW91dCwgJGVsZW1lbnQsICR3aW5kb3csICRyb290U2NvcGUsIG1lZGlhU2VydmljZSkge1xuICAgICAgICB0aGlzLiR0aW1lb3V0ID0gJHRpbWVvdXQ7XG4gICAgICAgIHRoaXMuJGVsZW1lbnQgPSAkZWxlbWVudDtcbiAgICAgICAgdGhpcy4kd2luZG93ID0gJHdpbmRvdztcbiAgICAgICAgdGhpcy4kcm9vdFNjb3BlID0gJHJvb3RTY29wZTtcbiAgICAgICAgdGhpcy5tZWRpYVNlcnZpY2UgPSBtZWRpYVNlcnZpY2U7XG5cbiAgICAgICAgdGhpcy51cGxvYWRUaW1lb3V0ID0gbnVsbDtcblxuICAgICAgICB0aGlzLmxpc3QgPSBuZXcgU2V0KCk7XG5cbiAgICAgICAgLy8gZGVmYXVsdCB2YWx1ZXNcbiAgICAgICAgaWYgKCF0aGlzLmZpbGVBY2NlcHQpIHtcbiAgICAgICAgICAgIHRoaXMuZmlsZUFjY2VwdCA9ICcnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJG9uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5pbnB1dCA9IHRoaXMuJGVsZW1lbnQuZmluZChcImlucHV0XCIpWzBdO1xuXG4gICAgICAgIHRoaXMuaW5pdENsaWNrKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlciBjbGljayBldmVudCBvbiB0aGlzLmlucHV0XG4gICAgICpcbiAgICAgKi9cbiAgICBmaXJlVXBsb2FkRXZlbnQoKSB7XG4gICAgICAgIGlmICh0aGlzLiR3aW5kb3cuQ3VzdG9tRXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQuZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudChcImNsaWNrXCIpKTtcbiAgICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC5jcmVhdGVFdmVudCkge1xuICAgICAgICAgICAgbGV0IGV2ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0hUTUxFdmVudHMnKTtcbiAgICAgICAgICAgIGV2LmluaXRFdmVudCgnY29udGV4dG1lbnUnLCB0cnVlLCBmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLmlucHV0LmRpc3BhdGNoRXZlbnQoZXYpO1xuICAgICAgICB9IGVsc2UgeyAvLyBJbnRlcm5ldCBFeHBsb3JlclxuICAgICAgICAgICAgdGhpcy5pbnB1dC5maXJlRXZlbnQoJ29uY29udGV4dG1lbnUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBsaXN0ZW5lciBmb3IgY2hhbmdlIG9uIHRoaXMuaW5wdXRcbiAgICAgKlxuICAgICAqL1xuICAgIGluaXRDbGljaygpIHtcbiAgICAgICAgdGhpcy5pbnB1dFxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBlLnRhcmdldC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgICB0aGlzLmlucHV0XG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgbGlzdCA9IGUudGFyZ2V0LmZpbGVzO1xuICAgICAgICAgICAgICAgIGlmIChsaXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBmaWxlSW5kZXggaW4gbGlzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc05hTihmaWxlSW5kZXgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0LmFkZChsaXN0Lml0ZW0oZmlsZUluZGV4KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lZGlhU2VydmljZS51cGxvYWRGaWxlKHRoaXMubGlzdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgZmFsc2UpO1xuICAgIH1cblxuICAgIGNyZWF0ZU5ld0RpcigpIHtcbiAgICAgICAgdGhpcy5tZWRpYVNlcnZpY2UuY3JlYXRlTmV3RGlyKCk7XG4gICAgfVxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHRlbXBsYXRlVXJsOiAndXBsb2FkLWZpbGUvdXBsb2FkLmZpbGUudHBsLmh0bWwnLFxuICAgIGNvbnRyb2xsZXI6IFVwbG9hZEZpbGVcbn07IiwiY2xhc3MgVXZvZCB7XG5cbiAgICAvLyBAbmdJbmplY3RcbiAgICBjb25zdHJ1Y3RvcigkaHR0cCwgbWVkaWFTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcbiAgICAgICAgdGhpcy5tZWRpYVNlcnZpY2UgPSBtZWRpYVNlcnZpY2U7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY29udHJvbGxlcjogVXZvZCxcbiAgICB0ZW1wbGF0ZVVybDogJ3V2b2QvdXZvZC50cGwuaHRtbCdcbn07IiwiY29uc3QgVFlQRVMgPSB7XG4gICAgJ1BORyc6IHtcbiAgICAgICAgbGlzdDogWydpbWFnZS9wbmcnXSxcbiAgICAgICAgaW1hZ2U6IHRydWVcbiAgICB9LFxuICAgICdKUEcnOiB7XG4gICAgICAgIGxpc3Q6IFsnaW1hZ2UvanBlZycsICdpbWFnZS9wanBlZyddLFxuICAgICAgICBpbWFnZTogdHJ1ZVxuICAgIH0sXG4gICAgJ0dJRic6IHtcbiAgICAgICAgbGlzdDogWydpbWFnZS9naWYnXSxcbiAgICAgICAgaW1hZ2U6IHRydWVcbiAgICB9LFxuICAgICdCTVAnOiB7XG4gICAgICAgIGxpc3Q6IFsnaW1hZ2UvYm1wJ10sXG4gICAgICAgIGltYWdlOiB0cnVlXG4gICAgfSxcbiAgICAnVElGRic6IFsnaW1hZ2UvaWVmJywgJ2ltYWdlL3RpZmYnXSxcbiAgICAnVFhUJzoge1xuICAgICAgICBsaXN0OiBbJ2FwcGxpY2F0aW9uL3BsYWluJywgJ3RleHQvcGxhaW4nXSxcbiAgICAgICAgaWNvbjogJ2ltZy90eHQucG5nJ1xuICAgIH0sXG4gICAgJ1BERic6IHtcbiAgICAgICAgbGlzdDogW1wiYXBwbGljYXRpb24vcGRmXCJdLFxuICAgICAgICBpY29uOiAnaW1nL3BkZi5wbmcnXG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVkaWFTZXJ2aWNlIHtcblxuICAgIC8vIEBuZ0luamVjdFxuICAgIGNvbnN0cnVjdG9yKCRodHRwLCAkd2luZG93LCAkdGltZW91dCwgYWxlcnRzU2VydmljZSkge1xuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gICAgICAgIHRoaXMuJHdpbmRvdyA9ICR3aW5kb3c7XG4gICAgICAgIHRoaXMuJHRpbWVvdXQgPSAkdGltZW91dDtcbiAgICAgICAgdGhpcy5hbGVydHNTZXJ2aWNlID0gYWxlcnRzU2VydmljZTtcblxuICAgICAgICB0aGlzLmRpciA9IG51bGw7XG4gICAgICAgIHRoaXMuZGlyc19kYXRhID0gW107XG4gICAgICAgIHRoaXMuZmlsZXNfZGF0YSA9IFtdO1xuXG4gICAgICAgIHRoaXMuZGlyX2xpc3QgPSBbXTtcblxuICAgICAgICB0aGlzLnNlbGVjdGVkRmlsZSA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5zaG93RGlhbG9nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2hvd0xlZnRNZW51ID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLm9yZGVyX2ZpbGVzX2J5ID0gXCJcIjtcbiAgICAgICAgdGhpcy5maWx0ZXJfZmlsZXMgPSBcIlwiO1xuXG4gICAgICAgIHRoaXMubmV3X2RpciA9ICcnO1xuXG4gICAgICAgIHRoaXMubG9hZERpcigpO1xuXG4gICAgfVxuXG4gICAgbG9hZERpcihkaXJlY3RvcnkgPSBudWxsLCBpc1JldHVybiA9IGZhbHNlKSB7XG4gICAgICAgIC8vIG5hY2l0YXQgbG9hZGluZyBzZXJpdnVzIGEgc3ByYXZpdCBsb2FkaW5nIHN0YXJ0XG5cbiAgICAgICAgbGV0IHVybEFkcmVzcyA9ICcnO1xuICAgICAgICBpZiAoZGlyZWN0b3J5KSB7XG4gICAgICAgICAgICB1cmxBZHJlc3MgPSBkaXJlY3RvcnkubG9jYXRpb24gKyAnLycgKyBkaXJlY3RvcnkubmFtZTtcblxuICAgICAgICAgICAgaWYgKGlzUmV0dXJuKSB7XG4gICAgICAgICAgICAgICAgdXJsQWRyZXNzID0gZGlyZWN0b3J5LmxvY2F0aW9uO1xuICAgICAgICAgICAgICAgIHRoaXMuZGlyX2xpc3QucG9wKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlyX2xpc3QucHVzaChkaXJlY3RvcnkubmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiRodHRwLmdldChgaHR0cDovL21lZGlhYnJvd3Nlci5iYXJ0LnNrL2RpciR7dXJsQWRyZXNzfWApXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpciA9IHJlc3BvbnNlLmRhdGEuZGlyO1xuICAgICAgICAgICAgICAgIHRoaXMuZGlyc19kYXRhID0gcmVzcG9uc2UuZGF0YS5kaXJzO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5maWxlc19kYXRhID0gW107XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgZmlsZSBvZiByZXNwb25zZS5kYXRhLmZpbGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZXNfZGF0YS5wdXNoKG5ldyBGaWxlKGZpbGUpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBtZXNzID0gZXJyb3IuZGF0YS5jb2RlID8gZXJyb3IuZGF0YS5kZXNjcmlwdGlvbiA6IFwiVnlza3l0bGEgc2EgY2h5YmEuXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydHNTZXJ2aWNlLmFkZEFsZXJ0KG1lc3MsICdlcnJvcicpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyB0b2RvIHVyb2IgbG9hZGluIHN0b3BcbiAgICAgICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBsb2FkRmlsZShmaWxlRGlyZWN0b3J5ID0gbnVsbCkge1xuICAgICAgICBpZiAoZmlsZURpcmVjdG9yeS50aHVtYl9saW5rKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkRmlsZSA9IGZpbGVEaXJlY3RvcnkuZG93bmxvYWRfbGluaztcbiAgICAgICAgICAgIHRoaXMuc2hvd0RpYWxvZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy4kd2luZG93Lm9wZW4oZmlsZURpcmVjdG9yeS5kb3dubG9hZF9saW5rLCAnX2JsYW5rJyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdXBsb2FkRmlsZShmaWxlc1NldCkge1xuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGZpbGVzU2V0KSB7XG4gICAgICAgICAgICB0aGlzLl91cGxvYWRGaWxlKGl0ZW0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX3VwbG9hZEZpbGUoZmlsZSkge1xuICAgICAgICB2YXIgbG9jYXRpb24gPSAnLyc7XG4gICAgICAgIGlmICh0aGlzLmRpcikge1xuICAgICAgICAgICAgbG9jYXRpb24gPSB0aGlzLmRpci5sb2NhdGlvbiArICcvJyArIHRoaXMuZGlyLm5hbWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiZmlsZVwiLCBmaWxlKTtcblxuICAgICAgICB0aGlzLiRodHRwKHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBkYXRhOiBmb3JtRGF0YSxcbiAgICAgICAgICAgICAgICB1cmw6IGBodHRwOi8vbWVkaWFicm93c2VyLmJhcnQuc2svbWVkaWEtYnJvd3Nlci9maWxlJHtsb2NhdGlvbn1gLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsnQ29udGVudC1UeXBlJzogdW5kZWZpbmVkfSxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1SZXF1ZXN0OiBhbmd1bGFyLmlkZW50aXR5XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGVzX2RhdGEucHVzaChuZXcgRmlsZShyZXN1bHQuZGF0YSkpO1xuICAgICAgICAgICAgICAgIGxldCBtZXNzID0gcmVzdWx0LmRhdGEuY29kZSA/IHJlc3VsdC5kYXRhLmRlc2NyaXB0aW9uIDogXCJTdWJvciB1c3Blc25lIG5haHJhbnkuXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydHNTZXJ2aWNlLmFkZEFsZXJ0KG1lc3MpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgbWVzcyA9IGVycm9yLmRhdGEuY29kZSA/IGVycm9yLmRhdGEuZGVzY3JpcHRpb24gOiBcIlZ5c2t5dGxhIHNhIGNoeWJhLlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRzU2VydmljZS5hZGRBbGVydChtZXNzLCAnZXJyb3InKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNyZWF0ZU5ld0RpcigpIHtcbiAgICAgICAgdmFyIGxvY2F0aW9uID0gJy8nO1xuICAgICAgICBpZiAodGhpcy5kaXIpIHtcbiAgICAgICAgICAgIGxvY2F0aW9uID0gdGhpcy5kaXIubG9jYXRpb24gKyAnLycgKyB0aGlzLmRpci5uYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kaHR0cCh7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLm5ld19kaXIsXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uOiBsb2NhdGlvblxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdXJsOiBgaHR0cDovL21lZGlhYnJvd3Nlci5iYXJ0LnNrL21lZGlhLWJyb3dzZXIvZGlyYFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXJzX2RhdGEucHVzaChyZXN1bHQuZGF0YSk7XG4gICAgICAgICAgICAgICAgbGV0IG1lc3MgPSByZXN1bHQuZGF0YS5jb2RlID8gcmVzdWx0LmRhdGEuZGVzY3JpcHRpb24gOiBcIlByaWVjaW5vayB1c3Blc25lIHZ5dHZvcmVueS5cIjtcbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0c1NlcnZpY2UuYWRkQWxlcnQobWVzcyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBtZXNzID0gZXJyb3IuZGF0YS5jb2RlID8gZXJyb3IuZGF0YS5kZXNjcmlwdGlvbiA6IFwiVnlza3l0bGEgc2EgY2h5YmEuXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydHNTZXJ2aWNlLmFkZEFsZXJ0KG1lc3MsICdlcnJvcicpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5uZXdfZGlyID0gXCJcIjtcbiAgICB9XG5cbiAgICBkZWxldGVEaXIoZGlyKSB7XG4gICAgICAgIHRoaXMuJGh0dHAoe1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICAgICAgICAgICAgdXJsOiBgaHR0cDovL21lZGlhYnJvd3Nlci5iYXJ0LnNrL21lZGlhLWJyb3dzZXIvZGlyJHtkaXIubG9jYXRpb259LyR7ZGlyLm5hbWV9YFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5kaXJzX2RhdGEuaW5kZXhPZihkaXIpO1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlyc19kYXRhLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBtZXNzID0gcmVzdWx0LmRhdGEuY29kZSA/IHJlc3VsdC5kYXRhLmRlc2NyaXB0aW9uIDogXCJQcmllY2lub2sgdXNwZXNuZSB6bWF6YW55LlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRzU2VydmljZS5hZGRBbGVydChtZXNzKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG1lc3MgPSBlcnJvci5kYXRhLmNvZGUgPyBlcnJvci5kYXRhLmRlc2NyaXB0aW9uIDogXCJWeXNreXRsYSBzYSBjaHliYS5cIjtcbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0c1NlcnZpY2UuYWRkQWxlcnQobWVzcywgJ2Vycm9yJyk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBkZWxldGVGaWxlKGZpbGUpe1xuICAgICAgICB0aGlzLiRodHRwKHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICAgICAgICAgIHVybDogYGh0dHA6Ly9tZWRpYWJyb3dzZXIuYmFydC5zay9tZWRpYS1icm93c2VyL2ZpbGUke2ZpbGUubG9jYXRpb259LyR7ZmlsZS5uYW1lfWBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHRoaXMuZmlsZXNfZGF0YS5pbmRleE9mKGZpbGUpO1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZXNfZGF0YS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgbWVzcyA9IHJlc3VsdC5kYXRhLmNvZGUgPyByZXN1bHQuZGF0YS5kZXNjcmlwdGlvbiA6IFwiU3Vib3IgdXNwZXNuZSB6bWF6YW55LlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRzU2VydmljZS5hZGRBbGVydChtZXNzKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG1lc3MgPSBlcnJvci5kYXRhLmNvZGUgPyBlcnJvci5kYXRhLmRlc2NyaXB0aW9uIDogXCJWeXNreXRsYSBzYSBjaHliYS5cIjtcbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0c1NlcnZpY2UuYWRkQWxlcnQobWVzcywgJ2Vycm9yJyk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB0b2dnbGVMZWZ0TWVudSgpIHtcbiAgICAgICAgdGhpcy5zaG93TGVmdE1lbnUgPSAhdGhpcy5zaG93TGVmdE1lbnU7XG4gICAgfVxuXG4gICAgdG9nZ2xlRGlhbG9nKCkge1xuICAgICAgICB0aGlzLnNob3dEaWFsb2cgPSAhdGhpcy5zaG93RGlhbG9nO1xuICAgIH1cblxuICAgIGNsb3NlRGlhbG9nKCkge1xuICAgICAgICBpZiAodGhpcy5zaG93RGlhbG9nKVxuICAgICAgICAgICAgdGhpcy5zaG93RGlhbG9nID0gIXRoaXMuc2hvd0RpYWxvZztcbiAgICB9XG59XG5cblxuY2xhc3MgRmlsZSB7XG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgICAgICB0aGlzLmNyZWF0ZWRfdGltZSA9IG51bGw7XG4gICAgICAgIHRoaXMuZG93bmxvYWRfbGluayA9IG51bGw7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBudWxsO1xuICAgICAgICB0aGlzLm5hbWUgPSBudWxsO1xuICAgICAgICB0aGlzLnNpemUgPSBudWxsO1xuICAgICAgICB0aGlzLnRodW1iX2xpbmsgPSBudWxsO1xuICAgICAgICB0aGlzLnR5cGUgPSBudWxsO1xuICAgICAgICB0aGlzLnVwZGF0ZV90aW1lID0gbnVsbDtcblxuICAgICAgICB0aGlzLnJhd0ZpbGUgPSBudWxsO1xuXG4gICAgICAgIGFuZ3VsYXIubWVyZ2UodGhpcywgZGF0YSk7XG4gICAgfVxuXG4gICAgZ2V0VHlwZU5hbWUoZ2V0SWNvbiA9IGZhbHNlKSB7XG4gICAgICAgIGZvciAobGV0IHR5cGVOYW1lIGluIFRZUEVTKSB7XG4gICAgICAgICAgICBsZXQgdHlwZU9iaiA9IFRZUEVTW3R5cGVOYW1lXTtcbiAgICAgICAgICAgIGlmIChhbmd1bGFyLmlzRGVmaW5lZCh0eXBlT2JqLmxpc3QpKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgdHlwZSBvZiB0eXBlT2JqLmxpc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT0gdGhpcy50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2V0SWNvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbmd1bGFyLmlzRGVmaW5lZCh0eXBlT2JqLmltYWdlKSAmJiB0eXBlT2JqLmltYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRodW1iX2xpbms7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFuZ3VsYXIuaXNEZWZpbmVkKHR5cGVPYmouaWNvbikgPyB0eXBlT2JqLmljb24gOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVOYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZXhjaGFuZ2VSYXcoZmlsZSkge1xuICAgICAgICB0aGlzLmRvd25sb2FkX2xpbmsgPSBudWxsO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbnVsbDtcbiAgICAgICAgdGhpcy5uYW1lID0gZmlsZS5uYW1lO1xuICAgICAgICB0aGlzLnNpemUgPSBmaWxlLnNpemU7XG4gICAgICAgIHRoaXMudGh1bWJfbGluayA9IG51bGw7XG4gICAgICAgIHRoaXMudHlwZSA9IGZpbGUudHlwZTtcbiAgICAgICAgdGhpcy51cGRhdGVfdGltZSA9IG51bGw7XG4gICAgICAgIHRoaXMucmF3RmlsZSA9IGZpbGUucmF3RmlsZTtcbiAgICB9XG5cbiAgICBnZXQgbmljZVR5cGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFR5cGVOYW1lKCkgPyB0aGlzLmdldFR5cGVOYW1lKCkgOiAnYW55JztcbiAgICB9XG5cbiAgICBnZXQgaWNvbigpIHtcbiAgICAgICAgbGV0IGljb24gPSB0aGlzLmdldFR5cGVOYW1lKHRydWUpO1xuICAgICAgICByZXR1cm4gaWNvbiA/IGljb24gOiBcImltZy9wbGFpbi5wbmdcIlxuICAgIH1cblxuXG59IiwicmVxdWlyZSgnLi90ZW1wbGF0ZXMnKTtcbm1vZHVsZS5leHBvcnRzID0gJ3RlbXBsYXRlcyc7IiwiYW5ndWxhci5tb2R1bGUoXCJ0ZW1wbGF0ZXNcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkgeyR0ZW1wbGF0ZUNhY2hlLnB1dChcImFwcGxpY2F0aW9uLXJvb3QvYXBwbGljYXRpb24ucm9vdC50cGwuaHRtbFwiLFwiPGRpdiBpZD1cXFwib2tub1xcXCI+XFxuXFxuICAgIDxsZWZ0LW1lbnUgbmctaWY9XFxcIiRjdHJsLm1lZGlhU2VydmljZS5zaG93TGVmdE1lbnVcXFwiPjwvbGVmdC1tZW51PlxcblxcbiAgICA8ZGl2IGlkPVxcXCJvYnNhaFxcXCIgbmctY2xhc3M9XFxcIntcXCdmdWxsXFwnOiAhJGN0cmwubWVkaWFTZXJ2aWNlLnNob3dMZWZ0TWVudX1cXFwiPlxcbiAgICAgICAgPGJyZWFkY3J1bWJzPjwvYnJlYWRjcnVtYnM+XFxuICAgICAgICA8ZmlsdGVyLXBhbmVsPjwvZmlsdGVyLXBhbmVsPlxcblxcbiAgICAgICAgPGRpdiBzdHlsZT1cXFwibWFyZ2luLWxlZnQ6MjBweDsgbWFyZ2luLXJpZ2h0OiAzMHB4XFxcIj5cXG5cXG4gICAgICAgICAgICA8ZGlyLXJldHVybj48L2Rpci1yZXR1cm4+XFxuXFxuICAgICAgICAgICAgPGRpci1iYXNlPjwvZGlyLWJhc2U+XFxuXFxuICAgICAgICAgICAgPGZpbGU+PC9maWxlPlxcbiAgICAgICAgPC9kaXY+XFxuXFxuICAgIDwvZGl2PlxcblxcbjwvZGl2PlwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImJyZWFkY3J1bWJzL2JyZWFkY3J1bWJzLnRwbC5odG1sXCIsXCI8ZGl2IGlkPVxcXCJoZWFkZXIyXFxcIj5cXG4gICAgPGgyPlxcbiAgICAgICAgPHNwYW4+SG9tZTwvc3Bhbj5cXG4gICAgICAgIDxzcGFuIG5nLXJlcGVhdD1cXFwiZGlyTmFtZSBpbiAkY3RybC5tZWRpYVNlcnZpY2UuZGlyX2xpc3RcXFwiPiAvIHt7ZGlyTmFtZX19IDwvc3Bhbj5cXG4gICAgPC9oMj5cXG48L2Rpdj5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJkaXItYmFzZS9kaXIuYmFzZS50cGwuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXFwiaWNvblxcXCIgbmctcmVwZWF0PVxcXCJkaXIgaW4gJGN0cmwubWVkaWFTZXJ2aWNlLmRpcnNfZGF0YSB8IGZpbHRlcjoge25hbWUgOiRjdHJsLm1lZGlhU2VydmljZS5maWx0ZXJfZmlsZXN9XFxcIiBuZy1jbGljaz1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLmxvYWREaXIoZGlyKVxcXCI+XFxuXFxuICAgIDxpbWcgY2xhc3M9XFxcInJlbW92ZV9kaXJcXFwiIHNyYz1cXFwiaW1nL2Nsb3NlLnBuZ1xcXCIgIG5nLWNsaWNrPVxcXCIkY3RybC5kZWxldGVEaXIoZGlyLCAkZXZlbnQpO1xcXCIvPlxcblxcbiAgICA8aW1nIGNsYXNzPVxcXCJpbWdfaWNvblxcXCIgc3JjPVxcXCJpbWcvcHJpZWNpbm9rLnBuZ1xcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcIm5hem92X3N1Ym9ydVxcXCI+e3tkaXIubmFtZX19PC9kaXY+XFxuXFxuPC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiZGlyLXJldHVybi9kaXIucmV0dXJuLnRwbC5odG1sXCIsXCI8ZGl2IGNsYXNzPVxcXCJpY29uXFxcIiBuZy1zaG93PVxcXCIkY3RybC5tZWRpYVNlcnZpY2UuZGlyXFxcIiBuZy1jbGljaz1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLmxvYWREaXIoJGN0cmwubWVkaWFTZXJ2aWNlLmRpciwgdHJ1ZSlcXFwiPlxcbiAgICA8aW1nIGNsYXNzPVxcXCJpbWdfaWNvblxcXCIgc3JjPVxcXCJpbWcvYWRyZXNhci5wbmdcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJuYXpvdl9zdWJvcnVcXFwiPk5hZHJhZGVueSBhZHJlc2FyPC9kaXY+XFxuPC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiZmlsdGVyLXBhbmVsL2ZpbHRlci5wYW5lbC50cGwuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXFwiZmlsdGVyLXBhbmVsXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZmlsdGVyXFxcIj5cXG4gICAgICAgIDx1cGxvYWQtZmlsZT48L3VwbG9hZC1maWxlPlxcbiAgICAgICAgPHA+SGxhZGF0OlxcbiAgICAgICAgICAgIDxpbnB1dCBuZy1tb2RlbD1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLmZpbHRlcl9maWxlc1xcXCIvPlxcbiAgICAgICAgPC9wPlxcbiAgICAgICAgPHA+Wm9yYWRpdCBwb2RsYTpcXG4gICAgICAgICAgICA8c2VsZWN0IG5nLW1vZGVsPVxcXCIkY3RybC5tZWRpYVNlcnZpY2Uub3JkZXJfZmlsZXNfYnlcXFwiPlxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJuYW1lXFxcIj5OYXp2dTwvb3B0aW9uPlxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJzaXplXFxcIj5WZWxrb3N0aTwvb3B0aW9uPlxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJjcmVhdGVkX3RpbWVcXFwiPkRhdHVtdSB2eXR2b3JlbmlhPC9vcHRpb24+XFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIm5pY2VUeXBlXFxcIj5UeXB1IHN1Ym9ydTwvb3B0aW9uPlxcbiAgICAgICAgICAgIDwvc2VsZWN0PlxcbiAgICAgICAgPC9wPlxcbiAgICA8L2Rpdj5cXG48L2Rpdj5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJmaWxlL2ZpbGUudHBsLmh0bWxcIixcIjxkaXYgY2xhc3M9XFxcImljb25cXFwiIG5nLXJlcGVhdD1cXFwiZmlsZSBpbiAkY3RybC5tZWRpYVNlcnZpY2UuZmlsZXNfZGF0YSB8IG9yZGVyQnk6ICRjdHJsLm1lZGlhU2VydmljZS5vcmRlcl9maWxlc19ieSB8IGZpbHRlcjp7bmFtZSA6JGN0cmwubWVkaWFTZXJ2aWNlLmZpbHRlcl9maWxlc31cXFwiIG5nLWNsaWNrPVxcXCIkY3RybC5tZWRpYVNlcnZpY2UubG9hZEZpbGUoZmlsZSlcXFwiPlxcbiAgICA8aW1nIGNsYXNzPVxcXCJyZW1vdmVfZGlyXFxcIiBzcmM9XFxcImltZy9jbG9zZS5wbmdcXFwiIG5nLWNsaWNrPVxcXCIkY3RybC5kZWxldGVGaWxlKGZpbGUsICRldmVudCk7XFxcIj5cXG4gICAgPGltZyBjbGFzcz1cXFwiaW1nX3BpY3R1cmVcXFwiICBuZy1zcmM9XFxcInt7ZmlsZS5pY29ufX1cXFwiPlxcblxcbiAgICA8ZGl2IGNsYXNzPVxcXCJuYXpvdl9zdWJvcnVcXFwiPnt7ZmlsZS5uYW1lfX08L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwidHlwX3N1Ym9ydVxcXCI+XFxuICAgICAgICA8cD57e2ZpbGUubmljZVR5cGV9fTwvcD5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcInZlbGtvc3Rfc3Vib3J1XFxcIj5cXG4gICAgICAgIDxwPnt7ZmlsZS5zaXplfX08L3A+XFxuICAgIDwvZGl2PlxcbjwvZGl2PlwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImxlZnQtbWVudS9sZWZ0Lm1lbnUudHBsLmh0bWxcIixcIjxkaXYgaWQ9XFxcImxlZnRfbWVudVxcXCI+XFxuICAgIDx1bD5cXG4gICAgICAgIDxsaSBuZy1zaG93PVxcXCIkY3RybC5tZWRpYVNlcnZpY2UuZGlyXFxcIiBuZy1jbGljaz1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLmxvYWREaXIoJGN0cmwubWVkaWFTZXJ2aWNlLmRpciwgdHJ1ZSlcXFwiIHN0eWxlPVxcXCJmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxOHB4O1xcXCI+TmFkcmFkZW55IGFkcmVzYXI8L2xpPlxcbiAgICAgICAgPGxpIG5nLXJlcGVhdD1cXFwiZGlyIGluICRjdHJsLm1lZGlhU2VydmljZS5kaXJzX2RhdGFcXFwiIG5nLWNsaWNrPVxcXCIkY3RybC5tZWRpYVNlcnZpY2UubG9hZERpcihkaXIpXFxcIiA+e3tkaXIubmFtZX19PC9saT5cXG4gICAgPC91bD5cXG4gICAgPGRpdiBjbGFzcz1cXFwiYWxlcnRcXFwiIG5nLWNsYXNzPVxcXCJhbGVydC50eXBlXFxcIiBuZy1yZXBlYXQ9XFxcImFsZXJ0IGluICRjdHJsLmFsZXJ0c1NlcnZpY2UuYWxlcnRzIHRyYWNrIGJ5ICRpbmRleFxcXCI+e3thbGVydC5tZXNzYWdlfX08L2Rpdj5cXG48L2Rpdj5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJtZWRpYS1icm93c2VyL21lZGlhLmJyb3dzZXIudHBsLmh0bWxcIixcIjxkaXYgaWQ9XFxcIk1lZGlhQnJvd3NlclxcXCI+XFxuICAgIDxkaXYgaWQ9XFxcImhlYWRlcjFcXFwiPlxcbiAgICAgICAgPGltZyBuZy1jbGljaz1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLnRvZ2dsZUxlZnRNZW51KClcXFwiIGlkPVxcXCJtZW51X2ljb25cXFwiIHNyYz1cXFwiaW1nL21lbnUucG5nXFxcIiBzdHlsZT1cXFwid2lkdGg6NTBweDsgaGVpZ2h0OjEwMCU7ZmxvYXQ6bGVmdDsgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXFwiPlxcbiAgICAgICAgPGgxPk1lZGlhIEJyb3dzZXI8L2gxPlxcbiAgICAgICAgPGltZyBpZD1cXFwiemF2cmlfZGlhbG9nXFxcIlxcbiAgICAgICAgICAgICBuZy1jbGljaz1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLnRvZ2dsZURpYWxvZygpXFxcIlxcbiAgICAgICAgICAgICBzcmM9XFxcImltZy9jbG9zZS5wbmdcXFwiIHN0eWxlPVxcXCJ3aWR0aDo0MHB4OyBoZWlnaHQ6MTAwJTtmbG9hdDpyaWdodDsgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxcIj5cXG4gICAgPC9kaXY+XFxuXFxuICAgIDxhcHBsaWNhdGlvbi1yb290PjwvYXBwbGljYXRpb24tcm9vdD5cXG48L2Rpdj5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJzdHZvcmVjL3N0dm9yZWMudHBsLmh0bWxcIixcIjxkaXYgaWQ9XFxcInN0dm9yZWNcXFwiPlxcbiAgICA8aW1nIHN0eWxlPVxcXCJtYXgtaGVpZ2h0OiAyNXZ3OyBtYXgtd2lkdGg6IDI1dnc7XFxcIiBuZy1pZj1cXFwiJGN0cmwuaXNJbWFnZVxcXCIgbmctc3JjPVxcXCJ7eyRjdHJsLm1lZGlhU2VydmljZS5zZWxlY3RlZEZpbGV9fVxcXCI+XFxuPC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwidXBsb2FkLWZpbGUvdXBsb2FkLmZpbGUudHBsLmh0bWxcIixcIjxkaXYgY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPlxcbiAgICA8aW5wdXQgaWQ9XFxcImRyYWdnaW5nXFxcIlxcbiAgICAgICAgICAgY2xhc3M9XFxcImhpZGRlblxcXCJcXG4gICAgICAgICAgIHR5cGU9XFxcImZpbGVcXFwiXFxuICAgICAgICAgICBhY2NlcHQ9XFxcInt7JGN0cmwuZmlsZUFjY2VwdH19XFxcIlxcbiAgICAgICAgICAgbXVsdGlwbGUvPlxcbiAgICA8ZGl2PlxcbiAgICAgICAgPHNwYW4+VXBsb2FkIHN1Ym9ydTogPC9zcGFuPlxcbiAgICAgICAgPGEgY2xhc3M9XFxcImN1cnNvci1wb2ludGVyIHVwbG9hZC1idG5cXFwiIG5nLWNsaWNrPVxcXCIkY3RybC5maXJlVXBsb2FkRXZlbnQoKVxcXCI+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImRpc3BsYXktYmxvY2tcXFwiIHRyYW5zbGF0ZT5VcGxvYWQ8L3NwYW4+XFxuICAgICAgICA8L2E+XFxuICAgIDwvZGl2PlxcbiAgICA8cD5Ob3Z5IGFkcmVzYXI6XFxuICAgICAgICA8aW5wdXQgbmctbW9kZWw9XFxcIiRjdHJsLm1lZGlhU2VydmljZS5uZXdfZGlyXFxcIi8+XFxuICAgICAgICA8YnV0dG9uIG5nLWNsaWNrPVxcXCIkY3RybC5jcmVhdGVOZXdEaXIoKVxcXCI+Q1JFQVRFPC9idXR0b24+XFxuICAgIDwvcD5cXG48L2Rpdj5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJ1dm9kL3V2b2QudHBsLmh0bWxcIixcIjxkaXY+XFxuICAgIDxkaXYgaWQ9XFxcInV2b2RcXFwiXFxuICAgICAgICAgbmctY2xhc3M9XFxcIntcXCdoYWxmdmlld1xcJzogJGN0cmwubWVkaWFTZXJ2aWNlLnNob3dEaWFsb2d9XFxcIlxcbiAgICAgICAgIG5nLWNsaWNrPVxcXCIkY3RybC5tZWRpYVNlcnZpY2UuY2xvc2VEaWFsb2coKVxcXCI+XFxuICAgICAgICA8c3R2b3JlYz48L3N0dm9yZWM+XFxuXFxuICAgICAgICA8YnV0dG9uIGlkPVxcXCJ6b2JyYXpfZGlhbG9nXFxcIlxcbiAgICAgICAgICAgICAgICBuZy1jbGljaz1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLnRvZ2dsZURpYWxvZygpOyAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XFxcIlxcbiAgICAgICAgICAgICAgICBzdHlsZT1cXFwibWFyZ2luLWxlZnQ6YXV0bzttYXJnaW4tcmlnaHQ6YXV0bztkaXNwbGF5OmJsb2NrOyBiYWNrZ3JvdW5kLWNvbG9yOiM0NjQ5NGE7Y29sb3I6IHdoaXRlOyBwYWRkaW5nOiA1cHggNXB4IDVweCA1cHhcXFwiPlpPQlJBWklUIERJQUxPR1xcbiAgICAgICAgPC9idXR0b24+XFxuICAgIDwvZGl2PlxcblxcblxcbiAgICA8bWVkaWEtYnJvd3NlciBuZy1pZj1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLnNob3dEaWFsb2dcXFwiPjwvbWVkaWEtYnJvd3Nlcj5cXG48L2Rpdj5cIik7fV0pOyJdfQ==
