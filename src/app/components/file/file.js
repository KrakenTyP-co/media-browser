class File {

    // @ngInject
    constructor($http, mediaService) {
        this.$http = $http;
        this.mediaService = mediaService;
    }
    deleteFile(file, $event) {
        $event.stopPropagation();
        this.mediaService.deleteFile(file);
    }
}

export default{
    controller: File,
    templateUrl: 'file/file.tpl.html'
}