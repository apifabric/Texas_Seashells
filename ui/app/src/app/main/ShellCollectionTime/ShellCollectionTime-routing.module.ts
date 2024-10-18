import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellCollectionTimeHomeComponent } from './home/ShellCollectionTime-home.component';
import { ShellCollectionTimeNewComponent } from './new/ShellCollectionTime-new.component';
import { ShellCollectionTimeDetailComponent } from './detail/ShellCollectionTime-detail.component';

const routes: Routes = [
  {path: '', component: ShellCollectionTimeHomeComponent},
  { path: 'new', component: ShellCollectionTimeNewComponent },
  { path: ':id', component: ShellCollectionTimeDetailComponent,
    data: {
      oPermission: {
        permissionId: 'ShellCollectionTime-detail-permissions'
      }
    }
  },{
    path: ':collection_time_id/Shell', loadChildren: () => import('../Shell/Shell.module').then(m => m.ShellModule),
    data: {
        oPermission: {
            permissionId: 'Shell-detail-permissions'
        }
    }
}
];

export const SHELLCOLLECTIONTIME_MODULE_DECLARATIONS = [
    ShellCollectionTimeHomeComponent,
    ShellCollectionTimeNewComponent,
    ShellCollectionTimeDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShellCollectionTimeRoutingModule { }