export default class MediaService {

    // @ngInject
    constructor($http) {
        this.$http = $http;

        this.dir = null;
        this.dirs_data = [];
        this.files_data = [];

        this.loadDir();
    }


    loadDir(directory = null, isReturn = false) {
        let urlAdress = '';
        if (directory) {
            urlAdress = directory.location + '/' + directory.name;

            if (isReturn) {
                urlAdress = directory.location;
            }
        }

        this.$http.get("http://mediabrowser.bart.sk/dir" + urlAdress)
            .then((response) => {
                this.dir = response.data.dir;
                this.dirs_data = response.data.dirs;
                this.files_data = response.data.files;
                
            })




    };
}