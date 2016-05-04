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

    function MediaService($http, $window, $timeout) {
        _classCallCheck(this, MediaService);

        this.$http = $http;
        this.$window = $window;
        this.$timeout = $timeout;

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

        this.alerts = [];
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
                _this2.alerts.push("Subor uspesne nahrany.");
                _this2.$timeout(function () {
                    _this2.alerts.shift();
                }, 5000);
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
                _this3.alerts.push("Priecinok uspesne vytvoreny.");
                _this3.$timeout(function () {
                    _this3.alerts.shift();
                }, 5000);
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
                };
                _this4.alerts.push("Priecinok uspesne zmazany.");
                _this4.$timeout(function () {
                    _this4.alerts.shift();
                }, 5000);
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
                };
                _this5.alerts.push("Subor uspesne zmazany.");
                _this5.$timeout(function () {
                    _this5.alerts.shift();
                }, 5000);
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
  $templateCache.put("left-menu/left.menu.tpl.html", "<div id=\"left_menu\">\r\n    <ul>\r\n        <li ng-show=\"$ctrl.mediaService.dir\" ng-click=\"$ctrl.mediaService.loadDir($ctrl.mediaService.dir, true)\" style=\"font-weight: bold; font-size: 18px;\">Nadradeny adresar</li>\r\n        <li ng-repeat=\"dir in $ctrl.mediaService.dirs_data\" ng-click=\"$ctrl.mediaService.loadDir(dir)\" >{{dir.name}}</li>\r\n    </ul>\r\n    <div class=\"alert\" ng-repeat=\"alert in $ctrl.mediaService.alerts track by $index\">{{alert}}</div>\r\n</div>");
  $templateCache.put("media-browser/media.browser.tpl.html", "<div id=\"MediaBrowser\">\r\n    <div id=\"header1\">\r\n        <img ng-click=\"$ctrl.mediaService.toggleLeftMenu()\" id=\"menu_icon\" src=\"img/menu.png\" style=\"width:50px; height:100%;float:left; align-self: flex-start;\">\r\n        <h1>Media Browser</h1>\r\n        <img id=\"zavri_dialog\"\r\n             ng-click=\"$ctrl.mediaService.toggleDialog()\"\r\n             src=\"img/close.png\" style=\"width:40px; height:100%;float:right; align-self: flex-end;\">\r\n    </div>\r\n\r\n    <application-root></application-root>\r\n</div>");
  $templateCache.put("stvorec/stvorec.tpl.html", "<div id=\"stvorec\">\r\n    <img style=\"max-height: 25vw; max-width: 25vw;\" ng-if=\"$ctrl.isImage\" ng-src=\"{{$ctrl.mediaService.selectedFile}}\">\r\n</div>");
  $templateCache.put("upload-file/upload.file.tpl.html", "<div class=\"pull-right\">\r\n    <input id=\"dragging\"\r\n           class=\"hidden\"\r\n           type=\"file\"\r\n           accept=\"{{$ctrl.fileAccept}}\"\r\n           multiple/>\r\n    <div>\r\n        <span>Upload suboru: </span>\r\n        <a class=\"cursor-pointer upload-btn\" ng-click=\"$ctrl.fireUploadEvent()\">\r\n            <span class=\"display-block\" translate>Upload</span>\r\n        </a>\r\n    </div>\r\n    <p>Novy adresar:\r\n        <input ng-model=\"$ctrl.mediaService.new_dir\"/>\r\n        <button ng-click=\"$ctrl.createNewDir()\">CREATE</button>\r\n    </p>\r\n</div>");
  $templateCache.put("uvod/uvod.tpl.html", "<div>\r\n    <div id=\"uvod\"\r\n         ng-class=\"{\'halfview\': $ctrl.mediaService.showDialog}\"\r\n         ng-click=\"$ctrl.mediaService.closeDialog()\">\r\n        <stvorec></stvorec>\r\n\r\n        <button id=\"zobraz_dialog\"\r\n                ng-click=\"$ctrl.mediaService.toggleDialog(); $event.stopPropagation();\"\r\n                style=\"margin-left:auto;margin-right:auto;display:block; background-color:#46494a;color: white; padding: 5px 5px 5px 5px\">ZOBRAZIT DIALOG\r\n        </button>\r\n    </div>\r\n\r\n\r\n    <media-browser ng-if=\"$ctrl.mediaService.showDialog\"></media-browser>\r\n</div>");
}]);

},{}]},{},["E:\\media-browser\\src\\app.js"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGFwcC5qcyIsInNyY1xcYXBwXFxjb21wb25lbnRzXFxhcHBsaWNhdGlvbi1yb290XFxhcHBsaWNhdGlvbi5yb290LmpzIiwic3JjXFxhcHBcXGNvbXBvbmVudHNcXGJyZWFkY3J1bWJzXFxicmVhZGNydW1icy5qcyIsInNyY1xcYXBwXFxjb21wb25lbnRzXFxkaXItYmFzZVxcZGlyLmJhc2UuanMiLCJzcmNcXGFwcFxcY29tcG9uZW50c1xcZGlyLXJldHVyblxcZGlyLnJldHVybi5qcyIsInNyY1xcYXBwXFxjb21wb25lbnRzXFxmaWxlXFxmaWxlLmpzIiwic3JjXFxhcHBcXGNvbXBvbmVudHNcXGZpbHRlci1wYW5lbFxcZmlsdGVyLnBhbmVsLmpzIiwic3JjXFxhcHBcXGNvbXBvbmVudHNcXGxlZnQtbWVudVxcbGVmdC5tZW51LmpzIiwic3JjXFxhcHBcXGNvbXBvbmVudHNcXG1lZGlhLWJyb3dzZXJcXG1lZGlhLmJyb3dzZXIuanMiLCJzcmNcXGFwcFxcY29tcG9uZW50c1xcc3R2b3JlY1xcc3R2b3JlYy5qcyIsInNyY1xcYXBwXFxjb21wb25lbnRzXFx1cGxvYWQtZmlsZVxcdXBsb2FkLmZpbGUuanMiLCJzcmNcXGFwcFxcY29tcG9uZW50c1xcdXZvZFxcdXZvZC5qcyIsInNyY1xcYXBwXFxtZWRpYS5zZXJ2aWNlLmpzIiwic3JjXFx0cGxcXGluZGV4LmpzIiwic3JjXFx0cGxcXHRlbXBsYXRlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7OztBQUVBLFFBQVEsTUFBUixDQUFlLFNBQWYsRUFBMEIsaUJBQTFCLEVBQ0ssU0FETCxDQUNlLE1BRGYsa0JBRUssU0FGTCxD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eEQsRUFMZ0Y7QUFNaEYsaUJBQWUsR0FBZixDQUFtQiw4QkFBbkIsRUFBa0Qsc2VBQWxELEVBTmdGO0FBT2hGLGlCQUFlLEdBQWYsQ0FBbUIsc0NBQW5CLEVBQTBELCtoQkFBMUQsRUFQZ0Y7QUFRaEYsaUJBQWUsR0FBZixDQUFtQiwwQkFBbkIsRUFBOEMsaUtBQTlDLEVBUmdGO0FBU2hGLGlCQUFlLEdBQWYsQ0FBbUIsa0NBQW5CLEVBQXNELDJsQkFBdEQsRUFUZ0Y7QUFVaEYsaUJBQWUsR0FBZixDQUFtQixvQkFBbkIsRUFBd0MsNG1CQUF4QyxFQVZnRjtDQUF6QixDQUF2RCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi90cGwvaW5kZXgnO1xyXG5pbXBvcnQgdXZvZCBmcm9tICcuL2FwcC9jb21wb25lbnRzL3V2b2QvdXZvZCc7XHJcbmltcG9ydCBtZWRpYUJyb3dzZXIgZnJvbSAnLi9hcHAvY29tcG9uZW50cy9tZWRpYS1icm93c2VyL21lZGlhLmJyb3dzZXInO1xyXG5pbXBvcnQgcm9vdCBmcm9tICcuL2FwcC9jb21wb25lbnRzL2FwcGxpY2F0aW9uLXJvb3QvYXBwbGljYXRpb24ucm9vdCc7XHJcbmltcG9ydCBsZWZ0TWVudSBmcm9tICcuL2FwcC9jb21wb25lbnRzL2xlZnQtbWVudS9sZWZ0Lm1lbnUnO1xyXG5pbXBvcnQgZGlyUmV0dXJuIGZyb20gJy4vYXBwL2NvbXBvbmVudHMvZGlyLXJldHVybi9kaXIucmV0dXJuJztcclxuaW1wb3J0IGRpckJhc2UgZnJvbSAnLi9hcHAvY29tcG9uZW50cy9kaXItYmFzZS9kaXIuYmFzZSc7XHJcbmltcG9ydCBmaWxlIGZyb20gJy4vYXBwL2NvbXBvbmVudHMvZmlsZS9maWxlJztcclxuaW1wb3J0IHN0dm9yZWMgZnJvbSAnLi9hcHAvY29tcG9uZW50cy9zdHZvcmVjL3N0dm9yZWMnO1xyXG5pbXBvcnQgYnJlYWRjcnVtYnMgZnJvbSAnLi9hcHAvY29tcG9uZW50cy9icmVhZGNydW1icy9icmVhZGNydW1icyc7XHJcbmltcG9ydCBmaWx0ZXJQYW5lbCBmcm9tICcuL2FwcC9jb21wb25lbnRzL2ZpbHRlci1wYW5lbC9maWx0ZXIucGFuZWwnO1xyXG5pbXBvcnQgdXBsb2FkRmlsZSBmcm9tICcuL2FwcC9jb21wb25lbnRzL3VwbG9hZC1maWxlL3VwbG9hZC5maWxlJztcclxuXHJcbmltcG9ydCBNZWRpYVNlcnZpY2UgZnJvbSAnLi9hcHAvbWVkaWEuc2VydmljZSc7XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgnYnJvd3NlcicsIFt0ZW1wbGF0ZV0pXHJcbiAgICAuY29tcG9uZW50KCd1dm9kJywgdXZvZClcclxuICAgIC5jb21wb25lbnQoJ21lZGlhQnJvd3NlcicsIG1lZGlhQnJvd3NlcilcclxuICAgIC5jb21wb25lbnQoJ2FwcGxpY2F0aW9uUm9vdCcsIHJvb3QpXHJcbiAgICAuY29tcG9uZW50KCdsZWZ0TWVudScsIGxlZnRNZW51KVxyXG4gICAgLmNvbXBvbmVudCgnZGlyUmV0dXJuJywgZGlyUmV0dXJuKVxyXG4gICAgLmNvbXBvbmVudCgnZGlyQmFzZScsIGRpckJhc2UpXHJcbiAgICAuY29tcG9uZW50KCdmaWxlJywgZmlsZSlcclxuICAgIC5jb21wb25lbnQoJ3N0dm9yZWMnLCBzdHZvcmVjKVxyXG4gICAgLmNvbXBvbmVudCgnYnJlYWRjcnVtYnMnLCBicmVhZGNydW1icylcclxuICAgIC5jb21wb25lbnQoJ2ZpbHRlclBhbmVsJywgZmlsdGVyUGFuZWwpXHJcbiAgICAuY29tcG9uZW50KCd1cGxvYWRGaWxlJywgdXBsb2FkRmlsZSlcclxuXHJcbiAgICAuc2VydmljZSgnbWVkaWFTZXJ2aWNlJywgTWVkaWFTZXJ2aWNlKVxyXG47IiwiY2xhc3MgQXBwbGljYXRpb25Sb290e1xyXG5cclxuICAgIC8vIEBuZ0luamVjdFxyXG4gICAgY29uc3RydWN0b3IoJGh0dHAsIG1lZGlhU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgICAgICB0aGlzLm1lZGlhU2VydmljZSA9IG1lZGlhU2VydmljZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgY29udHJvbGxlcjogQXBwbGljYXRpb25Sb290LFxyXG4gICAgdGVtcGxhdGVVcmw6ICdhcHBsaWNhdGlvbi1yb290L2FwcGxpY2F0aW9uLnJvb3QudHBsLmh0bWwnXHJcbn07IiwiY2xhc3MgQnJlYWRjcnVtYnMge1xyXG5cclxuICAgIC8vIEBuZ0luamVjdFxyXG4gICAgY29uc3RydWN0b3IoJGh0dHAsIG1lZGlhU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgICAgICB0aGlzLm1lZGlhU2VydmljZSA9IG1lZGlhU2VydmljZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgY29udHJvbGxlcjogQnJlYWRjcnVtYnMsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2JyZWFkY3J1bWJzL2JyZWFkY3J1bWJzLnRwbC5odG1sJ1xyXG59IiwiY2xhc3MgRGlyQmFzZSB7XHJcblxyXG4gICAgLy8gQG5nSW5qZWN0XHJcbiAgICBjb25zdHJ1Y3RvcigkaHR0cCwgbWVkaWFTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgICAgIHRoaXMubWVkaWFTZXJ2aWNlID0gbWVkaWFTZXJ2aWNlO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZURpcihkaXIsICRldmVudCkge1xyXG4gICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB0aGlzLm1lZGlhU2VydmljZS5kZWxldGVEaXIoZGlyKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGNvbnRyb2xsZXI6IERpckJhc2UsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2Rpci1iYXNlL2Rpci5iYXNlLnRwbC5odG1sJ1xyXG59IiwiY2xhc3MgRGlyUmV0dXJuIHtcclxuXHJcbiAgICAvLyBAbmdJbmplY3RcclxuICAgIGNvbnN0cnVjdG9yKCRodHRwLCBtZWRpYVNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XHJcbiAgICAgICAgdGhpcy5tZWRpYVNlcnZpY2UgPSBtZWRpYVNlcnZpY2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGNvbnRyb2xsZXI6IERpclJldHVybixcclxuICAgIHRlbXBsYXRlVXJsOiAnZGlyLXJldHVybi9kaXIucmV0dXJuLnRwbC5odG1sJ1xyXG59IiwiY2xhc3MgRmlsZSB7XHJcblxyXG4gICAgLy8gQG5nSW5qZWN0XHJcbiAgICBjb25zdHJ1Y3RvcigkaHR0cCwgbWVkaWFTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgICAgIHRoaXMubWVkaWFTZXJ2aWNlID0gbWVkaWFTZXJ2aWNlO1xyXG4gICAgfVxyXG4gICAgZGVsZXRlRmlsZShmaWxlLCAkZXZlbnQpIHtcclxuICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5tZWRpYVNlcnZpY2UuZGVsZXRlRmlsZShmaWxlKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHR7XHJcbiAgICBjb250cm9sbGVyOiBGaWxlLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdmaWxlL2ZpbGUudHBsLmh0bWwnXHJcbn0iLCJjbGFzcyBGaWx0ZXJQYW5lbCB7XHJcblxyXG4gICAgLy8gQG5nSW5qZWN0XHJcbiAgICBjb25zdHJ1Y3RvcigkaHR0cCwgbWVkaWFTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgICAgIHRoaXMubWVkaWFTZXJ2aWNlID0gbWVkaWFTZXJ2aWNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBjb250cm9sbGVyOiBGaWx0ZXJQYW5lbCxcclxuICAgIHRlbXBsYXRlVXJsOiAnZmlsdGVyLXBhbmVsL2ZpbHRlci5wYW5lbC50cGwuaHRtbCdcclxufTsiLCJjbGFzcyBMZWZ0TWVudSB7XHJcblxyXG4gICAgLy8gQG5nSW5qZWN0XHJcbiAgICBjb25zdHJ1Y3RvcigkaHR0cCwgbWVkaWFTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgICAgIHRoaXMubWVkaWFTZXJ2aWNlID0gbWVkaWFTZXJ2aWNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBjb250cm9sbGVyOiBMZWZ0TWVudSxcclxuICAgIHRlbXBsYXRlVXJsOiAnbGVmdC1tZW51L2xlZnQubWVudS50cGwuaHRtbCdcclxufSIsImNsYXNzIE1lZGlhQnJvd3NlciB7XHJcblxyXG4gICAgLy8gQG5nSW5qZWN0XHJcbiAgICBjb25zdHJ1Y3RvcigkaHR0cCwgbWVkaWFTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgICAgIHRoaXMubWVkaWFTZXJ2aWNlID0gbWVkaWFTZXJ2aWNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBjb250cm9sbGVyOiBNZWRpYUJyb3dzZXIsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ21lZGlhLWJyb3dzZXIvbWVkaWEuYnJvd3Nlci50cGwuaHRtbCdcclxufTsiLCJjbGFzcyBTdHZvcmVje1xyXG5cclxuICAgIC8vIEBuZ0luamVjdFxyXG4gICAgY29uc3RydWN0b3IoJGh0dHAsIG1lZGlhU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgICAgICB0aGlzLm1lZGlhU2VydmljZSA9IG1lZGlhU2VydmljZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaXNJbWFnZSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1lZGlhU2VydmljZS5zZWxlY3RlZEZpbGUgPyB0cnVlIDogZmFsc2U7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBjb250cm9sbGVyOiBTdHZvcmVjLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdzdHZvcmVjL3N0dm9yZWMudHBsLmh0bWwnXHJcbn0iLCJjbGFzcyBVcGxvYWRGaWxlIHtcclxuXHJcbiAgICAvLyBAbmdJbmplY3RcclxuICAgIGNvbnN0cnVjdG9yKCR0aW1lb3V0LCAkZWxlbWVudCwgJHdpbmRvdywgJHJvb3RTY29wZSwgbWVkaWFTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy4kdGltZW91dCA9ICR0aW1lb3V0O1xyXG4gICAgICAgIHRoaXMuJGVsZW1lbnQgPSAkZWxlbWVudDtcclxuICAgICAgICB0aGlzLiR3aW5kb3cgPSAkd2luZG93O1xyXG4gICAgICAgIHRoaXMuJHJvb3RTY29wZSA9ICRyb290U2NvcGU7XHJcbiAgICAgICAgdGhpcy5tZWRpYVNlcnZpY2UgPSBtZWRpYVNlcnZpY2U7XHJcblxyXG4gICAgICAgIHRoaXMudXBsb2FkVGltZW91dCA9IG51bGw7XHJcblxyXG4gICAgICAgIHRoaXMubGlzdCA9IG5ldyBTZXQoKTtcclxuXHJcbiAgICAgICAgLy8gZGVmYXVsdCB2YWx1ZXNcclxuICAgICAgICBpZiAoIXRoaXMuZmlsZUFjY2VwdCkge1xyXG4gICAgICAgICAgICB0aGlzLmZpbGVBY2NlcHQgPSAnJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJG9uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmlucHV0ID0gdGhpcy4kZWxlbWVudC5maW5kKFwiaW5wdXRcIilbMF07XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdENsaWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUcmlnZ2VyIGNsaWNrIGV2ZW50IG9uIHRoaXMuaW5wdXRcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIGZpcmVVcGxvYWRFdmVudCgpIHtcclxuICAgICAgICBpZiAodGhpcy4kd2luZG93LkN1c3RvbUV2ZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXQuZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudChcImNsaWNrXCIpKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGRvY3VtZW50LmNyZWF0ZUV2ZW50KSB7XHJcbiAgICAgICAgICAgIGxldCBldiA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdIVE1MRXZlbnRzJyk7XHJcbiAgICAgICAgICAgIGV2LmluaXRFdmVudCgnY29udGV4dG1lbnUnLCB0cnVlLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXQuZGlzcGF0Y2hFdmVudChldik7XHJcbiAgICAgICAgfSBlbHNlIHsgLy8gSW50ZXJuZXQgRXhwbG9yZXJcclxuICAgICAgICAgICAgdGhpcy5pbnB1dC5maXJlRXZlbnQoJ29uY29udGV4dG1lbnUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgbGlzdGVuZXIgZm9yIGNoYW5nZSBvbiB0aGlzLmlucHV0XHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBpbml0Q2xpY2soKSB7XHJcbiAgICAgICAgdGhpcy5pbnB1dFxyXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS50YXJnZXQudmFsdWUgPSAnJztcclxuICAgICAgICAgICAgfSwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuaW5wdXRcclxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGlzdCA9IGUudGFyZ2V0LmZpbGVzO1xyXG4gICAgICAgICAgICAgICAgaWYgKGxpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgZmlsZUluZGV4IGluIGxpc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc05hTihmaWxlSW5kZXgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3QuYWRkKGxpc3QuaXRlbShmaWxlSW5kZXgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZWRpYVNlcnZpY2UudXBsb2FkRmlsZSh0aGlzLmxpc3QpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlTmV3RGlyKCkge1xyXG4gICAgICAgIHRoaXMubWVkaWFTZXJ2aWNlLmNyZWF0ZU5ld0RpcigpO1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHRlbXBsYXRlVXJsOiAndXBsb2FkLWZpbGUvdXBsb2FkLmZpbGUudHBsLmh0bWwnLFxyXG4gICAgY29udHJvbGxlcjogVXBsb2FkRmlsZVxyXG59OyIsImNsYXNzIFV2b2Qge1xyXG5cclxuICAgIC8vIEBuZ0luamVjdFxyXG4gICAgY29uc3RydWN0b3IoJGh0dHAsIG1lZGlhU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgICAgICB0aGlzLm1lZGlhU2VydmljZSA9IG1lZGlhU2VydmljZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgY29udHJvbGxlcjogVXZvZCxcclxuICAgIHRlbXBsYXRlVXJsOiAndXZvZC91dm9kLnRwbC5odG1sJ1xyXG59OyIsImNvbnN0IFRZUEVTID0ge1xyXG4gICAgJ1BORyc6IHtcclxuICAgICAgICBsaXN0OiBbJ2ltYWdlL3BuZyddLFxyXG4gICAgICAgIGltYWdlOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgJ0pQRyc6IHtcclxuICAgICAgICBsaXN0OiBbJ2ltYWdlL2pwZWcnLCAnaW1hZ2UvcGpwZWcnXSxcclxuICAgICAgICBpbWFnZTogdHJ1ZVxyXG4gICAgfSxcclxuICAgICdHSUYnOiB7XHJcbiAgICAgICAgbGlzdDogWydpbWFnZS9naWYnXSxcclxuICAgICAgICBpbWFnZTogdHJ1ZVxyXG4gICAgfSxcclxuICAgICdCTVAnOiB7XHJcbiAgICAgICAgbGlzdDogWydpbWFnZS9ibXAnXSxcclxuICAgICAgICBpbWFnZTogdHJ1ZVxyXG4gICAgfSxcclxuICAgICdUSUZGJzogWydpbWFnZS9pZWYnLCAnaW1hZ2UvdGlmZiddLFxyXG4gICAgJ1RYVCc6IHtcclxuICAgICAgICBsaXN0OiBbJ2FwcGxpY2F0aW9uL3BsYWluJywgJ3RleHQvcGxhaW4nXSxcclxuICAgICAgICBpY29uOiAnaW1nL3R4dC5wbmcnXHJcbiAgICB9LFxyXG4gICAgJ1BERic6IHtcclxuICAgICAgICBsaXN0OiBbXCJhcHBsaWNhdGlvbi9wZGZcIl0sXHJcbiAgICAgICAgaWNvbjogJ2ltZy9wZGYucG5nJ1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVkaWFTZXJ2aWNlIHtcclxuXHJcbiAgICAvLyBAbmdJbmplY3RcclxuICAgIGNvbnN0cnVjdG9yKCRodHRwLCAkd2luZG93LCAkdGltZW91dCkge1xyXG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgICAgICB0aGlzLiR3aW5kb3cgPSAkd2luZG93O1xyXG4gICAgICAgIHRoaXMuJHRpbWVvdXQgPSAkdGltZW91dDtcclxuXHJcbiAgICAgICAgdGhpcy5kaXIgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZGlyc19kYXRhID0gW107XHJcbiAgICAgICAgdGhpcy5maWxlc19kYXRhID0gW107XHJcblxyXG4gICAgICAgIHRoaXMuZGlyX2xpc3QgPSBbXTtcclxuXHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEZpbGUgPSBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLnNob3dEaWFsb2cgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNob3dMZWZ0TWVudSA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMub3JkZXJfZmlsZXNfYnkgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuZmlsdGVyX2ZpbGVzID0gXCJcIjtcclxuXHJcbiAgICAgICAgdGhpcy5uZXdfZGlyID0gJyc7XHJcblxyXG4gICAgICAgIHRoaXMubG9hZERpcigpO1xyXG5cclxuICAgICAgICB0aGlzLmFsZXJ0cyA9IFtdO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBsb2FkRGlyKGRpcmVjdG9yeSA9IG51bGwsIGlzUmV0dXJuID0gZmFsc2UpIHtcclxuICAgICAgICBsZXQgdXJsQWRyZXNzID0gJyc7XHJcbiAgICAgICAgaWYgKGRpcmVjdG9yeSkge1xyXG4gICAgICAgICAgICB1cmxBZHJlc3MgPSBkaXJlY3RvcnkubG9jYXRpb24gKyAnLycgKyBkaXJlY3RvcnkubmFtZTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpc1JldHVybikge1xyXG4gICAgICAgICAgICAgICAgdXJsQWRyZXNzID0gZGlyZWN0b3J5LmxvY2F0aW9uO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJfbGlzdC5wb3AoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlyX2xpc3QucHVzaChkaXJlY3RvcnkubmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuJGh0dHAuZ2V0KGBodHRwOi8vbWVkaWFicm93c2VyLmJhcnQuc2svZGlyJHt1cmxBZHJlc3N9YClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpciA9IHJlc3BvbnNlLmRhdGEuZGlyO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJzX2RhdGEgPSByZXNwb25zZS5kYXRhLmRpcnM7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5maWxlc19kYXRhID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBmaWxlIG9mIHJlc3BvbnNlLmRhdGEuZmlsZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGVzX2RhdGEucHVzaChuZXcgRmlsZShmaWxlKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBsb2FkRmlsZShmaWxlRGlyZWN0b3J5ID0gbnVsbCkge1xyXG4gICAgICAgIGlmIChmaWxlRGlyZWN0b3J5LnRodW1iX2xpbmspIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEZpbGUgPSBmaWxlRGlyZWN0b3J5LmRvd25sb2FkX2xpbms7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0RpYWxvZyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy4kd2luZG93Lm9wZW4oZmlsZURpcmVjdG9yeS5kb3dubG9hZF9saW5rLCAnX2JsYW5rJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB1cGxvYWRGaWxlKGZpbGVzU2V0KSB7XHJcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBmaWxlc1NldCkge1xyXG4gICAgICAgICAgICB0aGlzLl91cGxvYWRGaWxlKGl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfdXBsb2FkRmlsZShmaWxlKSB7XHJcbiAgICAgICAgdmFyIGxvY2F0aW9uID0gJy8nO1xyXG4gICAgICAgIGlmICh0aGlzLmRpcikge1xyXG4gICAgICAgICAgICBsb2NhdGlvbiA9IHRoaXMuZGlyLmxvY2F0aW9uICsgJy8nICsgdGhpcy5kaXIubmFtZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImZpbGVcIiwgZmlsZSk7XHJcblxyXG4gICAgICAgIHRoaXMuJGh0dHAoe1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgICAgICAgICAgICAgIHVybDogYGh0dHA6Ly9tZWRpYWJyb3dzZXIuYmFydC5zay9tZWRpYS1icm93c2VyL2ZpbGUke2xvY2F0aW9ufWAsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6IHVuZGVmaW5lZH0sXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1SZXF1ZXN0OiBhbmd1bGFyLmlkZW50aXR5XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGVzX2RhdGEucHVzaChuZXcgRmlsZShyZXN1bHQuZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydHMucHVzaChcIlN1Ym9yIHVzcGVzbmUgbmFocmFueS5cIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiR0aW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0cy5zaGlmdCgpO1xyXG4gICAgICAgICAgICAgICAgfSwgNTAwMCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZU5ld0RpcigpIHtcclxuICAgICAgICB2YXIgbG9jYXRpb24gPSAnLyc7XHJcbiAgICAgICAgaWYgKHRoaXMuZGlyKSB7XHJcbiAgICAgICAgICAgIGxvY2F0aW9uID0gdGhpcy5kaXIubG9jYXRpb24gKyAnLycgKyB0aGlzLmRpci5uYW1lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy4kaHR0cCh7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLm5ld19kaXIsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb246IGxvY2F0aW9uXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdXJsOiBgaHR0cDovL21lZGlhYnJvd3Nlci5iYXJ0LnNrL21lZGlhLWJyb3dzZXIvZGlyYFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJzX2RhdGEucHVzaChyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0cy5wdXNoKFwiUHJpZWNpbm9rIHVzcGVzbmUgdnl0dm9yZW55LlwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRzLnNoaWZ0KCk7XHJcbiAgICAgICAgICAgICAgICB9LCA1MDAwKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMubmV3X2RpciA9IFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlRGlyKGRpcikge1xyXG4gICAgICAgIHRoaXMuJGh0dHAoe1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgICAgICAgICAgIHVybDogYGh0dHA6Ly9tZWRpYWJyb3dzZXIuYmFydC5zay9tZWRpYS1icm93c2VyL2RpciR7ZGlyLmxvY2F0aW9ufS8ke2Rpci5uYW1lfWBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHRoaXMuZGlyc19kYXRhLmluZGV4T2YoZGlyKTtcclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXJzX2RhdGEuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0cy5wdXNoKFwiUHJpZWNpbm9rIHVzcGVzbmUgem1hemFueS5cIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiR0aW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0cy5zaGlmdCgpO1xyXG4gICAgICAgICAgICAgICAgfSwgNTAwMCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZUZpbGUoZmlsZSl7XHJcbiAgICAgICAgdGhpcy4kaHR0cCh7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiBgaHR0cDovL21lZGlhYnJvd3Nlci5iYXJ0LnNrL21lZGlhLWJyb3dzZXIvZmlsZSR7ZmlsZS5sb2NhdGlvbn0vJHtmaWxlLm5hbWV9YFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5maWxlc19kYXRhLmluZGV4T2YoZmlsZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZXNfZGF0YS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRzLnB1c2goXCJTdWJvciB1c3Blc25lIHptYXphbnkuXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kdGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydHMuc2hpZnQoKTtcclxuICAgICAgICAgICAgICAgIH0sIDUwMDApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVMZWZ0TWVudSgpIHtcclxuICAgICAgICB0aGlzLnNob3dMZWZ0TWVudSA9ICF0aGlzLnNob3dMZWZ0TWVudTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVEaWFsb2coKSB7XHJcbiAgICAgICAgdGhpcy5zaG93RGlhbG9nID0gIXRoaXMuc2hvd0RpYWxvZztcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZURpYWxvZygpIHtcclxuICAgICAgICBpZiAodGhpcy5zaG93RGlhbG9nKVxyXG4gICAgICAgICAgICB0aGlzLnNob3dEaWFsb2cgPSAhdGhpcy5zaG93RGlhbG9nO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuY2xhc3MgRmlsZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVkX3RpbWUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZG93bmxvYWRfbGluayA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbnVsbDtcclxuICAgICAgICB0aGlzLnNpemUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMudGh1bWJfbGluayA9IG51bGw7XHJcbiAgICAgICAgdGhpcy50eXBlID0gbnVsbDtcclxuICAgICAgICB0aGlzLnVwZGF0ZV90aW1lID0gbnVsbDtcclxuXHJcbiAgICAgICAgdGhpcy5yYXdGaWxlID0gbnVsbDtcclxuXHJcbiAgICAgICAgYW5ndWxhci5tZXJnZSh0aGlzLCBkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUeXBlTmFtZShnZXRJY29uID0gZmFsc2UpIHtcclxuICAgICAgICBmb3IgKGxldCB0eXBlTmFtZSBpbiBUWVBFUykge1xyXG4gICAgICAgICAgICBsZXQgdHlwZU9iaiA9IFRZUEVTW3R5cGVOYW1lXTtcclxuICAgICAgICAgICAgaWYgKGFuZ3VsYXIuaXNEZWZpbmVkKHR5cGVPYmoubGlzdCkpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHR5cGUgb2YgdHlwZU9iai5saXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT0gdGhpcy50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnZXRJY29uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYW5ndWxhci5pc0RlZmluZWQodHlwZU9iai5pbWFnZSkgJiYgdHlwZU9iai5pbWFnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRodW1iX2xpbms7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhbmd1bGFyLmlzRGVmaW5lZCh0eXBlT2JqLmljb24pID8gdHlwZU9iai5pY29uIDogbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0eXBlTmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZXhjaGFuZ2VSYXcoZmlsZSkge1xyXG4gICAgICAgIHRoaXMuZG93bmxvYWRfbGluayA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gZmlsZS5uYW1lO1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IGZpbGUuc2l6ZTtcclxuICAgICAgICB0aGlzLnRodW1iX2xpbmsgPSBudWxsO1xyXG4gICAgICAgIHRoaXMudHlwZSA9IGZpbGUudHlwZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZV90aW1lID0gbnVsbDtcclxuICAgICAgICB0aGlzLnJhd0ZpbGUgPSBmaWxlLnJhd0ZpbGU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG5pY2VUeXBlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFR5cGVOYW1lKCkgPyB0aGlzLmdldFR5cGVOYW1lKCkgOiAnYW55JztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaWNvbigpIHtcclxuICAgICAgICBsZXQgaWNvbiA9IHRoaXMuZ2V0VHlwZU5hbWUodHJ1ZSk7XHJcbiAgICAgICAgcmV0dXJuIGljb24gPyBpY29uIDogXCJpbWcvcGxhaW4ucG5nXCJcclxuICAgIH1cclxuXHJcblxyXG59IiwicmVxdWlyZSgnLi90ZW1wbGF0ZXMnKTtcclxubW9kdWxlLmV4cG9ydHMgPSAndGVtcGxhdGVzJzsiLCJhbmd1bGFyLm1vZHVsZShcInRlbXBsYXRlc1wiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7JHRlbXBsYXRlQ2FjaGUucHV0KFwiYXBwbGljYXRpb24tcm9vdC9hcHBsaWNhdGlvbi5yb290LnRwbC5odG1sXCIsXCI8ZGl2IGlkPVxcXCJva25vXFxcIj5cXHJcXG5cXHJcXG4gICAgPGxlZnQtbWVudSBuZy1pZj1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLnNob3dMZWZ0TWVudVxcXCI+PC9sZWZ0LW1lbnU+XFxyXFxuXFxyXFxuICAgIDxkaXYgaWQ9XFxcIm9ic2FoXFxcIiBuZy1jbGFzcz1cXFwie1xcJ2Z1bGxcXCc6ICEkY3RybC5tZWRpYVNlcnZpY2Uuc2hvd0xlZnRNZW51fVxcXCI+XFxyXFxuICAgICAgICA8YnJlYWRjcnVtYnM+PC9icmVhZGNydW1icz5cXHJcXG4gICAgICAgIDxmaWx0ZXItcGFuZWw+PC9maWx0ZXItcGFuZWw+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IHN0eWxlPVxcXCJtYXJnaW4tbGVmdDoyMHB4OyBtYXJnaW4tcmlnaHQ6IDMwcHhcXFwiPlxcclxcblxcclxcbiAgICAgICAgICAgIDxkaXItcmV0dXJuPjwvZGlyLXJldHVybj5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8ZGlyLWJhc2U+PC9kaXItYmFzZT5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8ZmlsZT48L2ZpbGU+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuPC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiYnJlYWRjcnVtYnMvYnJlYWRjcnVtYnMudHBsLmh0bWxcIixcIjxkaXYgaWQ9XFxcImhlYWRlcjJcXFwiPlxcclxcbiAgICA8aDI+XFxyXFxuICAgICAgICA8c3Bhbj5Ib21lPC9zcGFuPlxcclxcbiAgICAgICAgPHNwYW4gbmctcmVwZWF0PVxcXCJkaXJOYW1lIGluICRjdHJsLm1lZGlhU2VydmljZS5kaXJfbGlzdFxcXCI+IC8ge3tkaXJOYW1lfX0gPC9zcGFuPlxcclxcbiAgICA8L2gyPlxcclxcbjwvZGl2PlwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImRpci1iYXNlL2Rpci5iYXNlLnRwbC5odG1sXCIsXCI8ZGl2IGNsYXNzPVxcXCJpY29uXFxcIiBuZy1yZXBlYXQ9XFxcImRpciBpbiAkY3RybC5tZWRpYVNlcnZpY2UuZGlyc19kYXRhIHwgZmlsdGVyOiB7bmFtZSA6JGN0cmwubWVkaWFTZXJ2aWNlLmZpbHRlcl9maWxlc31cXFwiIG5nLWNsaWNrPVxcXCIkY3RybC5tZWRpYVNlcnZpY2UubG9hZERpcihkaXIpXFxcIj5cXHJcXG5cXHJcXG4gICAgPGltZyBjbGFzcz1cXFwicmVtb3ZlX2RpclxcXCIgc3JjPVxcXCJpbWcvY2xvc2UucG5nXFxcIiAgbmctY2xpY2s9XFxcIiRjdHJsLmRlbGV0ZURpcihkaXIsICRldmVudCk7XFxcIi8+XFxyXFxuXFxyXFxuICAgIDxpbWcgY2xhc3M9XFxcImltZ19pY29uXFxcIiBzcmM9XFxcImltZy9wcmllY2lub2sucG5nXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibmF6b3Zfc3Vib3J1XFxcIj57e2Rpci5uYW1lfX08L2Rpdj5cXHJcXG5cXHJcXG48L2Rpdj5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJkaXItcmV0dXJuL2Rpci5yZXR1cm4udHBsLmh0bWxcIixcIjxkaXYgY2xhc3M9XFxcImljb25cXFwiIG5nLXNob3c9XFxcIiRjdHJsLm1lZGlhU2VydmljZS5kaXJcXFwiIG5nLWNsaWNrPVxcXCIkY3RybC5tZWRpYVNlcnZpY2UubG9hZERpcigkY3RybC5tZWRpYVNlcnZpY2UuZGlyLCB0cnVlKVxcXCI+XFxyXFxuICAgIDxpbWcgY2xhc3M9XFxcImltZ19pY29uXFxcIiBzcmM9XFxcImltZy9hZHJlc2FyLnBuZ1xcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm5hem92X3N1Ym9ydVxcXCI+TmFkcmFkZW55IGFkcmVzYXI8L2Rpdj5cXHJcXG48L2Rpdj5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJmaWxlL2ZpbGUudHBsLmh0bWxcIixcIjxkaXYgY2xhc3M9XFxcImljb25cXFwiIG5nLXJlcGVhdD1cXFwiZmlsZSBpbiAkY3RybC5tZWRpYVNlcnZpY2UuZmlsZXNfZGF0YSB8IG9yZGVyQnk6ICRjdHJsLm1lZGlhU2VydmljZS5vcmRlcl9maWxlc19ieSB8IGZpbHRlcjp7bmFtZSA6JGN0cmwubWVkaWFTZXJ2aWNlLmZpbHRlcl9maWxlc31cXFwiIG5nLWNsaWNrPVxcXCIkY3RybC5tZWRpYVNlcnZpY2UubG9hZEZpbGUoZmlsZSlcXFwiPlxcclxcbiAgICA8aW1nIGNsYXNzPVxcXCJyZW1vdmVfZGlyXFxcIiBzcmM9XFxcImltZy9jbG9zZS5wbmdcXFwiIG5nLWNsaWNrPVxcXCIkY3RybC5kZWxldGVGaWxlKGZpbGUsICRldmVudCk7XFxcIj5cXHJcXG4gICAgPGltZyBjbGFzcz1cXFwiaW1nX3BpY3R1cmVcXFwiICBuZy1zcmM9XFxcInt7ZmlsZS5pY29ufX1cXFwiPlxcclxcblxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJuYXpvdl9zdWJvcnVcXFwiPnt7ZmlsZS5uYW1lfX08L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwidHlwX3N1Ym9ydVxcXCI+XFxyXFxuICAgICAgICA8cD57e2ZpbGUubmljZVR5cGV9fTwvcD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInZlbGtvc3Rfc3Vib3J1XFxcIj5cXHJcXG4gICAgICAgIDxwPnt7ZmlsZS5zaXplfX08L3A+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImZpbHRlci1wYW5lbC9maWx0ZXIucGFuZWwudHBsLmh0bWxcIixcIjxkaXYgY2xhc3M9XFxcImZpbHRlci1wYW5lbFxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZpbHRlclxcXCI+XFxyXFxuICAgICAgICA8dXBsb2FkLWZpbGU+PC91cGxvYWQtZmlsZT5cXHJcXG4gICAgICAgIDxwPkhsYWRhdDpcXHJcXG4gICAgICAgICAgICA8aW5wdXQgbmctbW9kZWw9XFxcIiRjdHJsLm1lZGlhU2VydmljZS5maWx0ZXJfZmlsZXNcXFwiLz5cXHJcXG4gICAgICAgIDwvcD5cXHJcXG4gICAgICAgIDxwPlpvcmFkaXQgcG9kbGE6XFxyXFxuICAgICAgICAgICAgPHNlbGVjdCBuZy1tb2RlbD1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLm9yZGVyX2ZpbGVzX2J5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwibmFtZVxcXCI+TmF6dnU8L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwic2l6ZVxcXCI+VmVsa29zdGk8L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiY3JlYXRlZF90aW1lXFxcIj5EYXR1bXUgdnl0dm9yZW5pYTwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJuaWNlVHlwZVxcXCI+VHlwdSBzdWJvcnU8L29wdGlvbj5cXHJcXG4gICAgICAgICAgICA8L3NlbGVjdD5cXHJcXG4gICAgICAgIDwvcD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwibGVmdC1tZW51L2xlZnQubWVudS50cGwuaHRtbFwiLFwiPGRpdiBpZD1cXFwibGVmdF9tZW51XFxcIj5cXHJcXG4gICAgPHVsPlxcclxcbiAgICAgICAgPGxpIG5nLXNob3c9XFxcIiRjdHJsLm1lZGlhU2VydmljZS5kaXJcXFwiIG5nLWNsaWNrPVxcXCIkY3RybC5tZWRpYVNlcnZpY2UubG9hZERpcigkY3RybC5tZWRpYVNlcnZpY2UuZGlyLCB0cnVlKVxcXCIgc3R5bGU9XFxcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE4cHg7XFxcIj5OYWRyYWRlbnkgYWRyZXNhcjwvbGk+XFxyXFxuICAgICAgICA8bGkgbmctcmVwZWF0PVxcXCJkaXIgaW4gJGN0cmwubWVkaWFTZXJ2aWNlLmRpcnNfZGF0YVxcXCIgbmctY2xpY2s9XFxcIiRjdHJsLm1lZGlhU2VydmljZS5sb2FkRGlyKGRpcilcXFwiID57e2Rpci5uYW1lfX08L2xpPlxcclxcbiAgICA8L3VsPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydFxcXCIgbmctcmVwZWF0PVxcXCJhbGVydCBpbiAkY3RybC5tZWRpYVNlcnZpY2UuYWxlcnRzIHRyYWNrIGJ5ICRpbmRleFxcXCI+e3thbGVydH19PC9kaXY+XFxyXFxuPC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwibWVkaWEtYnJvd3Nlci9tZWRpYS5icm93c2VyLnRwbC5odG1sXCIsXCI8ZGl2IGlkPVxcXCJNZWRpYUJyb3dzZXJcXFwiPlxcclxcbiAgICA8ZGl2IGlkPVxcXCJoZWFkZXIxXFxcIj5cXHJcXG4gICAgICAgIDxpbWcgbmctY2xpY2s9XFxcIiRjdHJsLm1lZGlhU2VydmljZS50b2dnbGVMZWZ0TWVudSgpXFxcIiBpZD1cXFwibWVudV9pY29uXFxcIiBzcmM9XFxcImltZy9tZW51LnBuZ1xcXCIgc3R5bGU9XFxcIndpZHRoOjUwcHg7IGhlaWdodDoxMDAlO2Zsb2F0OmxlZnQ7IGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxcIj5cXHJcXG4gICAgICAgIDxoMT5NZWRpYSBCcm93c2VyPC9oMT5cXHJcXG4gICAgICAgIDxpbWcgaWQ9XFxcInphdnJpX2RpYWxvZ1xcXCJcXHJcXG4gICAgICAgICAgICAgbmctY2xpY2s9XFxcIiRjdHJsLm1lZGlhU2VydmljZS50b2dnbGVEaWFsb2coKVxcXCJcXHJcXG4gICAgICAgICAgICAgc3JjPVxcXCJpbWcvY2xvc2UucG5nXFxcIiBzdHlsZT1cXFwid2lkdGg6NDBweDsgaGVpZ2h0OjEwMCU7ZmxvYXQ6cmlnaHQ7IGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcXCI+XFxyXFxuICAgIDwvZGl2PlxcclxcblxcclxcbiAgICA8YXBwbGljYXRpb24tcm9vdD48L2FwcGxpY2F0aW9uLXJvb3Q+XFxyXFxuPC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwic3R2b3JlYy9zdHZvcmVjLnRwbC5odG1sXCIsXCI8ZGl2IGlkPVxcXCJzdHZvcmVjXFxcIj5cXHJcXG4gICAgPGltZyBzdHlsZT1cXFwibWF4LWhlaWdodDogMjV2dzsgbWF4LXdpZHRoOiAyNXZ3O1xcXCIgbmctaWY9XFxcIiRjdHJsLmlzSW1hZ2VcXFwiIG5nLXNyYz1cXFwie3skY3RybC5tZWRpYVNlcnZpY2Uuc2VsZWN0ZWRGaWxlfX1cXFwiPlxcclxcbjwvZGl2PlwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcInVwbG9hZC1maWxlL3VwbG9hZC5maWxlLnRwbC5odG1sXCIsXCI8ZGl2IGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIj5cXHJcXG4gICAgPGlucHV0IGlkPVxcXCJkcmFnZ2luZ1xcXCJcXHJcXG4gICAgICAgICAgIGNsYXNzPVxcXCJoaWRkZW5cXFwiXFxyXFxuICAgICAgICAgICB0eXBlPVxcXCJmaWxlXFxcIlxcclxcbiAgICAgICAgICAgYWNjZXB0PVxcXCJ7eyRjdHJsLmZpbGVBY2NlcHR9fVxcXCJcXHJcXG4gICAgICAgICAgIG11bHRpcGxlLz5cXHJcXG4gICAgPGRpdj5cXHJcXG4gICAgICAgIDxzcGFuPlVwbG9hZCBzdWJvcnU6IDwvc3Bhbj5cXHJcXG4gICAgICAgIDxhIGNsYXNzPVxcXCJjdXJzb3ItcG9pbnRlciB1cGxvYWQtYnRuXFxcIiBuZy1jbGljaz1cXFwiJGN0cmwuZmlyZVVwbG9hZEV2ZW50KClcXFwiPlxcclxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJkaXNwbGF5LWJsb2NrXFxcIiB0cmFuc2xhdGU+VXBsb2FkPC9zcGFuPlxcclxcbiAgICAgICAgPC9hPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPHA+Tm92eSBhZHJlc2FyOlxcclxcbiAgICAgICAgPGlucHV0IG5nLW1vZGVsPVxcXCIkY3RybC5tZWRpYVNlcnZpY2UubmV3X2RpclxcXCIvPlxcclxcbiAgICAgICAgPGJ1dHRvbiBuZy1jbGljaz1cXFwiJGN0cmwuY3JlYXRlTmV3RGlyKClcXFwiPkNSRUFURTwvYnV0dG9uPlxcclxcbiAgICA8L3A+XFxyXFxuPC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwidXZvZC91dm9kLnRwbC5odG1sXCIsXCI8ZGl2PlxcclxcbiAgICA8ZGl2IGlkPVxcXCJ1dm9kXFxcIlxcclxcbiAgICAgICAgIG5nLWNsYXNzPVxcXCJ7XFwnaGFsZnZpZXdcXCc6ICRjdHJsLm1lZGlhU2VydmljZS5zaG93RGlhbG9nfVxcXCJcXHJcXG4gICAgICAgICBuZy1jbGljaz1cXFwiJGN0cmwubWVkaWFTZXJ2aWNlLmNsb3NlRGlhbG9nKClcXFwiPlxcclxcbiAgICAgICAgPHN0dm9yZWM+PC9zdHZvcmVjPlxcclxcblxcclxcbiAgICAgICAgPGJ1dHRvbiBpZD1cXFwiem9icmF6X2RpYWxvZ1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgbmctY2xpY2s9XFxcIiRjdHJsLm1lZGlhU2VydmljZS50b2dnbGVEaWFsb2coKTsgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgc3R5bGU9XFxcIm1hcmdpbi1sZWZ0OmF1dG87bWFyZ2luLXJpZ2h0OmF1dG87ZGlzcGxheTpibG9jazsgYmFja2dyb3VuZC1jb2xvcjojNDY0OTRhO2NvbG9yOiB3aGl0ZTsgcGFkZGluZzogNXB4IDVweCA1cHggNXB4XFxcIj5aT0JSQVpJVCBESUFMT0dcXHJcXG4gICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG5cXHJcXG4gICAgPG1lZGlhLWJyb3dzZXIgbmctaWY9XFxcIiRjdHJsLm1lZGlhU2VydmljZS5zaG93RGlhbG9nXFxcIj48L21lZGlhLWJyb3dzZXI+XFxyXFxuPC9kaXY+XCIpO31dKTsiXX0=
