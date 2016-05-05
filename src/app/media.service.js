const TYPES = {
    'PNG': {
        list: ['image/png'],
        image: true
    },
    'JPG': {
        list: ['image/jpeg', 'image/pjpeg'],
        image: true
    },
    'GIF': {
        list: ['image/gif'],
        image: true
    },
    'BMP': {
        list: ['image/bmp'],
        image: true
    },
    'TIFF': ['image/ief', 'image/tiff'],
    'TXT': {
        list: ['application/plain', 'text/plain'],
        icon: 'img/txt.png'
    },
    'PDF': {
        list: ["application/pdf"],
        icon: 'img/pdf.png'
    }
};

export default class MediaService {

    // @ngInject
    constructor($http, $window, $timeout, alertsService, loadingService) {
        this.$http = $http;
        this.$window = $window;
        this.$timeout = $timeout;
        this.alertsService = alertsService;
        this.loadingService = loadingService;

        this.dir = null;
        this.dirs_data = [];
        this.files_data = [];

        this.dir_list = [];

        this.selectedFile = null;

        this.showDialog = false;
        this.showLeftMenu = true;

        this.order_files_by = "";
        this.filter_files = "";

        this.new_dir = '';

        this.loadDir();

    }

    loadDir(directory = null, isReturn = false) {
        // nacitat loading serivus a spravit loading start
        this.loadingService.doLoading();

        let urlAdress = '';
        if (directory) {
            urlAdress = directory.location + '/' + directory.name;

            if (isReturn) {
                urlAdress = directory.location;
                this.dir_list.pop();
            } else {
                this.dir_list.push(directory.name);
            }
        }

        this.$http.get(`http://mediabrowser.bart.sk/dir${urlAdress}`)
            .then((response) => {
                this.dir = response.data.dir;
                this.dirs_data = response.data.dirs;

                this.files_data = [];
                for (let file of response.data.files) {
                    this.files_data.push(new File(file));
                }
            })
            .catch((error) => {
                let mess = error.data.code ? error.data.description : "Vyskytla sa chyba.";
                this.alertsService.addAlert(mess, 'error');
            })
            .finally(() => {
                this.loadingService.stopLoading();
                // todo urob loadin stop
            });
    };

    loadFile(fileDirectory = null) {
        if (fileDirectory.thumb_link) {
            this.selectedFile = fileDirectory.download_link;
            this.showDialog = false;
        }
        else {
            this.$window.open(fileDirectory.download_link, '_blank');
        }
    };

    uploadFile(filesSet) {
        for (let item of filesSet) {
            this._uploadFile(item);
        }
    }

    _uploadFile(file) {
        this.loadingService.doLoading();

        var location = '/';
        if (this.dir) {
            location = this.dir.location + '/' + this.dir.name;
        }

        var formData = new FormData();
        formData.append("file", file);

        this.$http({
                method: 'POST',
                data: formData,
                url: `http://mediabrowser.bart.sk/media-browser/file${location}`,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            })
            .then(result => {
                this.files_data.push(new File(result.data));
                let mess = result.data.code ? result.data.description : "Subor uspesne nahrany.";
                this.alertsService.addAlert(mess);
            })
            .catch((error) => {
                let mess = error.data.code ? error.data.description : "Vyskytla sa chyba.";
                this.alertsService.addAlert(mess, 'error');
            })
            .finally(() => {
                this.loadingService.stopLoading();
            });
    }

    createNewDir() {
        this.loadingService.doLoading();

        var location = '/';
        if (this.dir) {
            location = this.dir.location + '/' + this.dir.name;
        }

        this.$http({
                method: 'POST',
                data: {
                    name: this.new_dir,
                    location: location
                },
                url: `http://mediabrowser.bart.sk/media-browser/dir`
            })
            .then(result => {
                this.dirs_data.push(result.data);
                let mess = result.data.code ? result.data.description : "Priecinok uspesne vytvoreny.";
                this.alertsService.addAlert(mess);
            })
            .catch((error) => {
                let mess = error.data.code ? error.data.description : "Vyskytla sa chyba.";
                this.alertsService.addAlert(mess, 'error');
            })
            .finally(() => {
                this.loadingService.stopLoading();
            });

        this.new_dir = "";
    }

    deleteDir(dir) {
        this.loadingService.doLoading();

        this.$http({
                method: 'DELETE',
                url: `http://mediabrowser.bart.sk/media-browser/dir${dir.location}/${dir.name}`
            })
            .then(result => {
                let index = this.dirs_data.indexOf(dir);
                if (index > -1) {
                    this.dirs_data.splice(index, 1);
                }
                let mess = result.data.code ? result.data.description : "Priecinok uspesne zmazany.";
                this.alertsService.addAlert(mess);
            })
            .catch((error) => {
                let mess = error.data.code ? error.data.description : "Vyskytla sa chyba.";
                this.alertsService.addAlert(mess, 'error');
            })
            .finally(() => {
                this.loadingService.stopLoading();
            });
    }

    deleteFile(file){
        this.loadingService.doLoading();

        this.$http({
                method: 'DELETE',
                url: `http://mediabrowser.bart.sk/media-browser/file${file.location}/${file.name}`
            })
            .then(result => {
                let index = this.files_data.indexOf(file);
                if (index > -1) {
                    this.files_data.splice(index, 1);
                }
                let mess = result.data.code ? result.data.description : "Subor uspesne zmazany.";
                this.alertsService.addAlert(mess);
            })
            .catch((error) => {
                let mess = error.data.code ? error.data.description : "Vyskytla sa chyba.";
                this.alertsService.addAlert(mess, 'error');
            })
            .finally(() => {
                this.loadingService.stopLoading();
            });
    }

    toggleLeftMenu() {
        this.showLeftMenu = !this.showLeftMenu;
    }

    toggleDialog() {
        this.showDialog = !this.showDialog;
    }

    closeDialog() {
        if (this.showDialog)
            this.showDialog = !this.showDialog;
    }
}


class File {
    constructor(data) {
        this.created_time = null;
        this.download_link = null;
        this.location = null;
        this.name = null;
        this.size = null;
        this.thumb_link = null;
        this.type = null;
        this.update_time = null;

        this.rawFile = null;

        angular.merge(this, data);
    }

    getTypeName(getIcon = false) {
        for (let typeName in TYPES) {
            let typeObj = TYPES[typeName];
            if (angular.isDefined(typeObj.list)) {
                for (let type of typeObj.list) {
                    if (type == this.type) {
                        if (getIcon) {
                            if (angular.isDefined(typeObj.image) && typeObj.image) {
                                return this.thumb_link;
                            } else {
                                return angular.isDefined(typeObj.icon) ? typeObj.icon : null;
                            }
                        } else {
                            return typeName;
                        }
                    }
                }
            }
        }

        return null;
    }

    exchangeRaw(file) {
        this.download_link = null;
        this.location = null;
        this.name = file.name;
        this.size = file.size;
        this.thumb_link = null;
        this.type = file.type;
        this.update_time = null;
        this.rawFile = file.rawFile;
    }

    get niceType() {
        return this.getTypeName() ? this.getTypeName() : 'any';
    }

    get icon() {
        let icon = this.getTypeName(true);
        return icon ? icon : "img/plain.png"
    }


}