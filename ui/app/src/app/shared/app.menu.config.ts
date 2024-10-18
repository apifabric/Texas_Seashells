import { MenuRootItem } from 'ontimize-web-ngx';

import { ShellCardComponent } from './Shell-card/Shell-card.component';

import { ShellCollectionRecordCardComponent } from './ShellCollectionRecord-card/ShellCollectionRecord-card.component';

import { ShellCollectionTimeCardComponent } from './ShellCollectionTime-card/ShellCollectionTime-card.component';

import { ShellCollectorCardComponent } from './ShellCollector-card/ShellCollector-card.component';

import { ShellColorCardComponent } from './ShellColor-card/ShellColor-card.component';

import { ShellConservationStatuCardComponent } from './ShellConservationStatu-card/ShellConservationStatu-card.component';

import { ShellHistoricalUseCardComponent } from './ShellHistoricalUse-card/ShellHistoricalUse-card.component';

import { ShellLocationCardComponent } from './ShellLocation-card/ShellLocation-card.component';

import { ShellPhotoCardComponent } from './ShellPhoto-card/ShellPhoto-card.component';

import { ShellScientificStudyCardComponent } from './ShellScientificStudy-card/ShellScientificStudy-card.component';

import { ShellSizeCardComponent } from './ShellSize-card/ShellSize-card.component';

import { ShellSpecyCardComponent } from './ShellSpecy-card/ShellSpecy-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    
    {
    id: 'data', name: ' data', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'Shell', name: 'SHELL', icon: 'view_list', route: '/main/Shell' }
    
        ,{ id: 'ShellCollectionRecord', name: 'SHELLCOLLECTIONRECORD', icon: 'view_list', route: '/main/ShellCollectionRecord' }
    
        ,{ id: 'ShellCollectionTime', name: 'SHELLCOLLECTIONTIME', icon: 'view_list', route: '/main/ShellCollectionTime' }
    
        ,{ id: 'ShellCollector', name: 'SHELLCOLLECTOR', icon: 'view_list', route: '/main/ShellCollector' }
    
        ,{ id: 'ShellColor', name: 'SHELLCOLOR', icon: 'view_list', route: '/main/ShellColor' }
    
        ,{ id: 'ShellConservationStatu', name: 'SHELLCONSERVATIONSTATU', icon: 'view_list', route: '/main/ShellConservationStatu' }
    
        ,{ id: 'ShellHistoricalUse', name: 'SHELLHISTORICALUSE', icon: 'view_list', route: '/main/ShellHistoricalUse' }
    
        ,{ id: 'ShellLocation', name: 'SHELLLOCATION', icon: 'view_list', route: '/main/ShellLocation' }
    
        ,{ id: 'ShellPhoto', name: 'SHELLPHOTO', icon: 'view_list', route: '/main/ShellPhoto' }
    
        ,{ id: 'ShellScientificStudy', name: 'SHELLSCIENTIFICSTUDY', icon: 'view_list', route: '/main/ShellScientificStudy' }
    
        ,{ id: 'ShellSize', name: 'SHELLSIZE', icon: 'view_list', route: '/main/ShellSize' }
    
        ,{ id: 'ShellSpecy', name: 'SHELLSPECY', icon: 'view_list', route: '/main/ShellSpecy' }
    
    ] 
},
    
    { id: 'settings', name: 'Settings', icon: 'settings', route: '/main/settings'}
    ,{ id: 'about', name: 'About', icon: 'info', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    ShellCardComponent

    ,ShellCollectionRecordCardComponent

    ,ShellCollectionTimeCardComponent

    ,ShellCollectorCardComponent

    ,ShellColorCardComponent

    ,ShellConservationStatuCardComponent

    ,ShellHistoricalUseCardComponent

    ,ShellLocationCardComponent

    ,ShellPhotoCardComponent

    ,ShellScientificStudyCardComponent

    ,ShellSizeCardComponent

    ,ShellSpecyCardComponent

];