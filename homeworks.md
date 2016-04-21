# Domace ulohy

## 3. filtrovanie
http://mb.bart.sk/B/#/
filter|mediaService.filtrovanie

## 3,5. Sortrovanie
http://mb.bart.sk/B/#/
orderBy|mediaService.sortrovanie

## 4. vytvorenie priecinku

## 5. vymazanie priecinku

## 6. upload documentov
- upravit grafiku
- v upload.file.js vyvolat upload suborov
- v service spravit metodu na upload suborov

## 7. vymazanie dokumentu


# Future

# Helper

http://mb.bart.sk/{A-D}/



var file = $scope.myFile;

var promise = UploadManager.uploadFileToUrl(file, uploadUrl);
promise.success(function(data){

    $timeout(function(){
        $interval.cancel(uploadProgressInterval);
        counter = 0;
        $scope.uploadProgress = 0;
    },1000);

    if(data.hasOwnProperty('name')){
        $scope.refresh();
        $scope.addMessage('OK','Akcia bola úspešná', 'Obrázok bol pridaný');
    }
    if(data.hasOwnProperty('code')){
        $scope.addMessage(data.code,data.message,data.description);
    }
}).error(function(error) {
    $scope.refresh();
    if(error.code != undefined) {
        $scope.addMessage(error.code,error.message,error.description);
    } else {
        $scope.addMessage(500,'Danu akciu sa nepodarilo vykonať','Skontrolujte pravá na zápis.');
    }
});
        
        
let fd = new FormData();
fd.append('file', file);
return $http.post(</api/file/>, fd, {
    transformRequest: angular.identity,
    headers: {'Content-Type': undefined}
})