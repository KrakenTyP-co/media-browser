export default class LoadingService {

    // @ngInject
    constructor(){
        this.loadingStart = false;
    }
    
    doLoading(){
        this.loadingStart = true;
    }
    
    stopLoading(){
        this.loadingStart = false;
    }

}