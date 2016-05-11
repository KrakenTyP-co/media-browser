import {File} from './media.service';

export default class TrashService {

    // @ngInject
    constructor($timeout) {
        this.$timeout = $timeout;
        this.fileList = [];
        this.directoryList = [];

        this.dirRemoveFunc = null;
        this.fileRemoveFunc = null;
    }

    addToTrash(object) {
        if (object instanceof File) {
            this.fileList.push(object);
        } else {
            this.directoryList.push(object);
        }
    }

    clearTrash() {
        if (angular.isFunction(this.dirRemoveFunc)) {
            for (let dir of this.directoryList) {
                this.dirRemoveFunc.call(this, dir);
                this.directoryList.shift();
            }
        }

        if (angular.isFunction(this.fileRemoveFunc)) {
            for (let file of this.fileList) {
                this.fileRemoveFunc.call(this, file);
                this.fileList.shift();
            }
        }
    }

    get trashCounts() {
        return this.fileList.length + this.directoryList.length;
    }
}