class LeftMenu {

    // @ngInject
    constructor($http, mediaService, alertsService) {
        this.$http = $http;
        this.mediaService = mediaService;
        this.alertsService = alertsService;
    }
}

export default {
    controller: LeftMenu,
    templateUrl: 'left-menu/left.menu.tpl.html'
}