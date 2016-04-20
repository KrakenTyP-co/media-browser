class MediaBrowser {

    // @ngInject
    constructor($http, mediaService) {
        this.$http = $http;
        this.mediaService = mediaService;
    }
}

export default {
    controller: MediaBrowser,
    templateUrl: 'media-browser/media.browser.tpl.html'
};