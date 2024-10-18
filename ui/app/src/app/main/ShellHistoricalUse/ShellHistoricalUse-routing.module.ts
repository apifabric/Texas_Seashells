import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellHistoricalUseHomeComponent } from './home/ShellHistoricalUse-home.component';
import { ShellHistoricalUseNewComponent } from './new/ShellHistoricalUse-new.component';
import { ShellHistoricalUseDetailComponent } from './detail/ShellHistoricalUse-detail.component';

const routes: Routes = [
  {path: '', component: ShellHistoricalUseHomeComponent},
  { path: 'new', component: ShellHistoricalUseNewComponent },
  { path: ':id', component: ShellHistoricalUseDetailComponent,
    data: {
      oPermission: {
        permissionId: 'ShellHistoricalUse-detail-permissions'
      }
    }
  },{
    path: ':historical_use_id/Shell', loadChildren: () => import('../Shell/Shell.module').then(m => m.ShellModule),
    data: {
        oPermission: {
            permissionId: 'Shell-detail-permissions'
        }
    }
}
];

export const SHELLHISTORICALUSE_MODULE_DECLARATIONS = [
    ShellHistoricalUseHomeComponent,
    ShellHistoricalUseNewComponent,
    ShellHistoricalUseDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShellHistoricalUseRoutingModule { }