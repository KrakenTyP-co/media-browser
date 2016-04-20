class ApplicationRoot{

    // @ngInject
    constructor($http, mediaService) {
        this.$http = $http;
        this.mediaService = mediaService;
    }
}

export default {
    controller: ApplicationRoot,
    templateUrl: 'application-root/application.root.tpl.html'
};