class UploadFile {

    // @ngInject
    constructor($timeout, $element, $window, $rootScope, mediaService) {
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

    $onInit() {
        this.input = this.$element.find("input")[0];

        this.initClick();
    }

    /**
     * Trigger click event on this.input
     *
     */
    fireUploadEvent() {
        if (this.$window.CustomEvent) {
            this.input.dispatchEvent(new MouseEvent("click"));
        } else if (document.createEvent) {
            let ev = document.createEvent('HTMLEvents');
            ev.initEvent('contextmenu', true, false);
            this.input.dispatchEvent(ev);
        } else { // Internet Explorer
            this.input.fireEvent('oncontextmenu');
        }
    }

    /**
     * Add listener for change on this.input
     *
     */
    initClick() {
        this.input
            .addEventListener('click', (e) => {
                e.target.value = '';
            }, false);
        this.input
            .addEventListener('change', (e) => {
                let list = e.target.files;
                if (list.length) {
                    for (let fileIndex in list) {
                        if (!isNaN(fileIndex)) {
                            this.list.add(list.item(fileIndex));
                        }
                    }

                    this.mediaService.uploadFile(this.list);
                }
            }, false);
    }

    createNewDir() {
        this.mediaService.createNewDir();
    }


}

export default {
    templateUrl: 'upload-file/upload.file.tpl.html',
    controller: UploadFile
};