class DirReturn {

    // @ngInject
    constructor($http, mediaService) {
        this.$http = $http;
        this.mediaService = mediaService;
    }
}

export default {
    controller: DirReturn,
    templateUrl: 'dir-return/dir.return.tpl.html'
}