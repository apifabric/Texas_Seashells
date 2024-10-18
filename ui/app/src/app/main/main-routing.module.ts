import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      
    
        { path: 'Shell', loadChildren: () => import('./Shell/Shell.module').then(m => m.ShellModule) },
    
        { path: 'ShellCollectionRecord', loadChildren: () => import('./ShellCollectionRecord/ShellCollectionRecord.module').then(m => m.ShellCollectionRecordModule) },
    
        { path: 'ShellCollectionTime', loadChildren: () => import('./ShellCollectionTime/ShellCollectionTime.module').then(m => m.ShellCollectionTimeModule) },
    
        { path: 'ShellCollector', loadChildren: () => import('./ShellCollector/ShellCollector.module').then(m => m.ShellCollectorModule) },
    
        { path: 'ShellColor', loadChildren: () => import('./ShellColor/ShellColor.module').then(m => m.ShellColorModule) },
    
        { path: 'ShellConservationStatu', loadChildren: () => import('./ShellConservationStatu/ShellConservationStatu.module').then(m => m.ShellConservationStatuModule) },
    
        { path: 'ShellHistoricalUse', loadChildren: () => import('./ShellHistoricalUse/ShellHistoricalUse.module').then(m => m.ShellHistoricalUseModule) },
    
        { path: 'ShellLocation', loadChildren: () => import('./ShellLocation/ShellLocation.module').then(m => m.ShellLocationModule) },
    
        { path: 'ShellPhoto', loadChildren: () => import('./ShellPhoto/ShellPhoto.module').then(m => m.ShellPhotoModule) },
    
        { path: 'ShellScientificStudy', loadChildren: () => import('./ShellScientificStudy/ShellScientificStudy.module').then(m => m.ShellScientificStudyModule) },
    
        { path: 'ShellSize', loadChildren: () => import('./ShellSize/ShellSize.module').then(m => m.ShellSizeModule) },
    
        { path: 'ShellSpecy', loadChildren: () => import('./ShellSpecy/ShellSpecy.module').then(m => m.ShellSpecyModule) },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }