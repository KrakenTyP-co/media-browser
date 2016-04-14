class File {

    // @ngInject
    constructor($http, mediaService) {
        this.$http = $http;
        this.mediaService = mediaService;
    }
}

export default{
    controller: File,
    templateUrl: 'file/file.tpl.html'
}