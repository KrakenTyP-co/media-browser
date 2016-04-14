import template from './tpl/index';

import root, {module} from './app/components/application-root/application.root';

import leftMenu from './app/components/left-menu/left.menu';

import dirReturn from './app/components/dir-return/dir.return';

import dirBase from './app/components/dir-base/dir.base';

import file from './app/components/file/file';

import MediaService from './app/media.service';


angular.module('browser', [template, module])
    .component('applicationRoot', root)
    .component('leftMenu', leftMenu)
    .component('dirReturn', dirReturn)
    .component('dirBase', dirBase)
    .component('file', file)

    .service('mediaService', MediaService)
;