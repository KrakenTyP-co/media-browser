export const module = 'components';

angular.module(module, []);

class MyCtrl {

    // @ngInject
    constructor($http) {
        this.$http = $http;

        this.dir = null;
        this.dirs_data = [];
        this.files_data = [];

        this.$http.get("http://mediabrowser.bart.sk/dir").then((response) => {
            this.dir = response.data.dir;
            this.dirs_data = response.data.dirs;
            this.files_data = response.data.files;
        });
    }


    loadDir(event) {
        if ($(event.target).attr('class') != "icon ng-scope" && $(event.target).attr('class') != "icon") {
            this.$http.get("http://mediabrowser.bart.sk/dir" + $(event.target).parent().attr('data-dirName'))
                .then((response) => {
                    this.dir = response.data.dir;
                    this.dirs_data = response.data.dirs;
                    this.files_data = response.data.files;
                })
        }

        if ($(event.target).attr('class') == "icon ng-scope" || $(event.target).attr('class') == "icon") {
            this.$http.get("http://mediabrowser.bart.sk/dir" + $(event.target).attr('data-dirName'))
                .then((response) => {
                    this.dir = response.data.dir;
                    this.dirs_data = response.data.dirs;
                    this.files_data = response.data.files;
                })
        }
    };


    loadDirLeft(event) {
        this.$http.get("http://mediabrowser.bart.sk/dir" + $(event.target).attr('data-dirName'))
            .then((response) => {
                this.dir = response.data.dir;
                this.dirs_data = response.data.dirs;
                this.files_data = response.data.files;
            })
    }
}

export default {
    controller: MyCtrl,
    templateUrl: 'application-root/application.root.tpl.html'
};