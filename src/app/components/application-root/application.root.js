export const module = 'components';

angular.module(module, []);

class MyCtrl {

    // @ngInject
    constructor($http, mediaService) {
        this.$http = $http;
        this.mediaService = mediaService;
    }
}

export default {
    controller: MyCtrl,
    templateUrl: 'application-root/application.root.tpl.html'
};