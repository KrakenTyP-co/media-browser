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
                this.directoryList=[];
            }
        }

        if (angular.isFunction(this.fileRemoveFunc)) {
            for (let file of this.fileList) {
                this.fileRemoveFunc.call(this, file);
                this.fileList=[];
            }
        }
    }

    restoreTrash() {
        for (let dir of this.directoryList) {
            dir.inTrash = false;
        }
        for (let file of this.fileList) {
            file.inTrash = false;
        }
        this.fileList=[];
        this.directoryList=[];
    }

    get trashCounts() {
        return this.fileList.length + this.directoryList.length;
    }

    isInTrash(obj, isDir = false) {
        if (isDir) {
            for (let dir of this.directoryList) {
                if (dir.name == obj.name && dir.location == obj.location) {
                    return true;
                }
            }
        } else {
            for (let file of this.fileList) {
                if (file.name == obj.name && file.location == obj.location) {
                    return true;
                }
            }
        }

        return false;
    }
}