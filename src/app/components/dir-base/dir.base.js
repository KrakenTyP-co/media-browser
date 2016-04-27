class DirBase {

    // @ngInject
    constructor($http, mediaService) {
        this.$http = $http;
        this.mediaService = mediaService;
    }

    deleteDir(){
        this.mediaService.deleteDir();
    }
}



export default {
    controller: DirBase,
    templateUrl: 'dir-base/dir.base.tpl.html'
}