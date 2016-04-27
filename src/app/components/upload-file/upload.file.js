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
                            this.loadFile(list.item(fileIndex));
                        }
                    }
                }
            }, false);
    }

    /**
     * Handle a file when is dropped
     *
     * @param file
     */
    loadFile(file) {
        let reader = new FileReader();
        reader.onload = (readerEvt) => {

            let item = {};
            item.doc_name = file.name;
            item.fileBase64 = btoa(readerEvt.target.result);
            item.doc_type = file.type;
            item.file_size = file.size;

            this.list.add(item);

            this.$rootScope.$apply();

            if (this.uploadTimeout) {
                this.$timeout.cancel(this.uploadTimeout);
            }
            this.uploadTimeout = this.$timeout(() => {
                // todo do upload
                // subory su v this.list a ten je Set - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
                // na upload treba vyuzit FormData - https://developer.mozilla.org/en-US/docs/Web/API/FormData
                // do formData sa vklada bud to readerEvt.target.result alebo item.fileBase64 alebo toto ignorovat a rovno poslat
                // do formData file
            }, 200);
        };

        reader.readAsBinaryString(file);
    };

    createNewDir() {
        this.mediaService.createNewDir();
    }


}

export default {
    templateUrl: 'upload-file/upload.file.tpl.html',
    controller: UploadFile
};