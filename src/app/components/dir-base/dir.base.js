class DirBase {

    // @ngInject
    constructor($http, mediaService) {
        this.$http = $http;
        this.mediaService = mediaService;
    }

    deleteDir(dir, $event) {
        $event.stopPropagation();
        this.mediaService.deleteDir(dir);
    }
}


export default {
    controller: DirBase,
    templateUrl: 'dir-base/dir.base.tpl.html'
}