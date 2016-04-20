class Uvod {

    // @ngInject
    constructor($http, mediaService) {
        this.$http = $http;
        this.mediaService = mediaService;
    }
}

export default {
    controller: Uvod,
    templateUrl: 'uvod/uvod.tpl.html'
};