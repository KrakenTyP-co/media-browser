class Stvorec{

    // @ngInject
    constructor($http, mediaService) {
        this.$http = $http;
        this.mediaService = mediaService;
    }

    get isImage(){
        return this.mediaService.selectedFile ? true : false;
    }

}

export default {
    controller: Stvorec,
    templateUrl: 'stvorec/stvorec.tpl.html'
}