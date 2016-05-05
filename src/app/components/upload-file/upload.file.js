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
        this.initBinds(this.$element);
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
                    this._rearrayList(list);
                    this.mediaService.uploadFile(this.list);
                }
            }, false);
    }


    /**
     * Init binds for Drag&Drop
     *
     */
    initBinds(element = this.$element) {
        this.dropShow = 0;

        element.bind("dragover", (event) => {
            this.onDragOver(event, element);
        });

        //Dragging ends on the overlay, which takes the whole window
        element
            .bind("dragenter", (event) => {
                this.dropShow++;
            })
            .bind("dragleave", (event) => {
                this.dropShow--;
                if (this.dropShow === 0) {
                    this.onDragEnd(event, element);
                }
            })
            .bind("drop", (e) => {
                this.dropShow = 0;
                this.onDragEnd(e, element);
                let list = e.dataTransfer.files;
                this._rearrayList(list);
                this.mediaService.uploadFile(this.list);
            });
    }

    _rearrayList(list) {
        this.list.clear();
        for (let fileIndex in list) {
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
    onDragOver(e, element = this.$element) {
        e.stopPropagation();
        e.preventDefault();
        element.addClass("dragOver");
    };

    onDragEnd(e, element = this.$element) {
        e.stopPropagation();
        e.preventDefault();
        element.removeClass("dragOver");
    };

    createNewDir() {
        this.mediaService.createNewDir();
    }


}

export default {
    templateUrl: 'upload-file/upload.file.tpl.html',
    controller: UploadFile
};