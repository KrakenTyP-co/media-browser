import template from './tpl/index';
import uvod from './app/components/uvod/uvod';
import mediaBrowser from './app/components/media-browser/media.browser';
import root from './app/components/application-root/application.root';
import leftMenu from './app/components/left-menu/left.menu';
import dirReturn from './app/components/dir-return/dir.return';
import dirBase from './app/components/dir-base/dir.base';
import file from './app/components/file/file';
import stvorec from './app/components/stvorec/stvorec';
import breadcrumbs from './app/components/breadcrumbs/breadcrumbs';
import filterPanel from './app/components/filter-panel/filter.panel';
import uploadFile from './app/components/upload-file/upload.file';

import MediaService from './app/media.service';
import AlertsService from './app/alerts.service';

angular.module('browser', [template])
    .component('uvod', uvod)
    .component('mediaBrowser', mediaBrowser)
    .component('applicationRoot', root)
    .component('leftMenu', leftMenu)
    .component('dirReturn', dirReturn)
    .component('dirBase', dirBase)
    .component('file', file)
    .component('stvorec', stvorec)
    .component('breadcrumbs', breadcrumbs)
    .component('filterPanel', filterPanel)
    .component('uploadFile', uploadFile)

    .service('mediaService', MediaService)
    .service('alertsService', AlertsService)
;