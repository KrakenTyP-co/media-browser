class FilterPanel {

    // @ngInject
    constructor($http, mediaService) {
        this.$http = $http;
        this.mediaService = mediaService;
    }
}

export default {
    controller: FilterPanel,
    templateUrl: 'filter-panel/filter.panel.tpl.html'
};