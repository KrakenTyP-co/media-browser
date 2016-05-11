class LeftMenu {

    // @ngInject
    constructor($http, mediaService, alertsService, loadingService, trashService) {
        this.$http = $http;
        this.mediaService = mediaService;
        this.alertsService = alertsService;
        this.loadingService = loadingService;
        this.trashService = trashService;
    }
}

export default {
    controller: LeftMenu,
    templateUrl: 'left-menu/left.menu.tpl.html'
}