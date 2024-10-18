import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellCollectorHomeComponent } from './home/ShellCollector-home.component';
import { ShellCollectorNewComponent } from './new/ShellCollector-new.component';
import { ShellCollectorDetailComponent } from './detail/ShellCollector-detail.component';

const routes: Routes = [
  {path: '', component: ShellCollectorHomeComponent},
  { path: 'new', component: ShellCollectorNewComponent },
  { path: ':id', component: ShellCollectorDetailComponent,
    data: {
      oPermission: {
        permissionId: 'ShellCollector-detail-permissions'
      }
    }
  },{
    path: ':collector_id/ShellCollectionRecord', loadChildren: () => import('../ShellCollectionRecord/ShellCollectionRecord.module').then(m => m.ShellCollectionRecordModule),
    data: {
        oPermission: {
            permissionId: 'ShellCollectionRecord-detail-permissions'
        }
    }
}
];

export const SHELLCOLLECTOR_MODULE_DECLARATIONS = [
    ShellCollectorHomeComponent,
    ShellCollectorNewComponent,
    ShellCollectorDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShellCollectorRoutingModule { }