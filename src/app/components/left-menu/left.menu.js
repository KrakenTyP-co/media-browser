class LeftMenu {

    // @ngInject
    constructor($http, mediaService) {
        this.$http = $http;
        this.mediaService = mediaService;
    }
}

export default {
    controller: LeftMenu,
    templateUrl: 'left-menu/left.menu.tpl.html'
}