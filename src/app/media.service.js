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
    constructor($http, $window) {
        this.$http = $http;
        this.$window = $window;

        this.dir = null;
        this.dirs_data = [];
        this.files_data = [];

        this.dir_list = [];

        this.selectedFile = null;

        this.showDialog = false;
        this.showLeftMenu = true;

        this.loadDir();

    }

    loadDir(directory = null, isReturn = false) {
        let urlAdress = '';
        if (directory) {
            urlAdress = directory.location + '/' + directory.name;

            if (isReturn) {
                urlAdress = directory.location;
                this.dir_list.pop();
            }
            else
                this.dir_list.push(directory.name);
        }

        this.$http.get("http://mediabrowser.bart.sk/dir" + urlAdress)
            .then((response) => {
                this.dir = response.data.dir;
                this.dirs_data = response.data.dirs;

                this.files_data = [];
                for (let file of response.data.files) {
                    this.files_data.push(new File(file));
                }

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

    toggleLeftMenu() {
        this.showLeftMenu = !this.showLeftMenu;
    }

    toggleDialog() {
        this.showDialog = !this.showDialog;
    }

    closeDialog(){
        if(this.showDialog)
            this.showDialog = !this.showDialog;
    }



}


class File {
    constructor(data) {
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

    get niceType() {
        return this.getTypeName() ? this.getTypeName() : 'any';
    }

    get icon() {
        let icon = this.getTypeName(true);
        return icon ? icon : "img/plain.png"
    }


}