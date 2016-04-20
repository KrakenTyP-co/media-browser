import template from './tpl/index';

import uvod from './app/components/uvod/uvod';
import mediaBrowser from './app/components/media-browser/media.browser';

import root from './app/components/application-root/application.root';

import leftMenu from './app/components/left-menu/left.menu';

import dirReturn from './app/components/dir-return/dir.return';

import dirBase from './app/components/dir-base/dir.base';

import file from './app/components/file/file';

import stvorec from './app/components/stvorec/stvorec';

import MediaService from './app/media.service';


angular.module('browser', [template])
    .component('uvod', uvod)
    .component('mediaBrowser', mediaBrowser)
    .component('applicationRoot', root)
    .component('leftMenu', leftMenu)
    .component('dirReturn', dirReturn)
    .component('dirBase', dirBase)
    .component('file', file)
    .component('stvorec', stvorec)

    .service('mediaService', MediaService)
;