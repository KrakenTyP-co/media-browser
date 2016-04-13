
class LeftMenu {

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

    loadDirLeft(event) {
        this.$http.get("http://mediabrowser.bart.sk/dir" + $(event.target).attr('data-dirName'))
            .then((response) => {
                this.dir = response.data.dir;
                this.dirs_data = response.data.dirs;
                this.files_data = response.data.files;
            })
    }
}

export default{
    controller: LeftMenu,
    templateUrl: 'left-menu/left.menu.tpl.html'
}