import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellHomeComponent } from './home/Shell-home.component';
import { ShellNewComponent } from './new/Shell-new.component';
import { ShellDetailComponent } from './detail/Shell-detail.component';

const routes: Routes = [
  {path: '', component: ShellHomeComponent},
  { path: 'new', component: ShellNewComponent },
  { path: ':id', component: ShellDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Shell-detail-permissions'
      }
    }
  },{
    path: ':shell_id/ShellCollectionRecord', loadChildren: () => import('../ShellCollectionRecord/ShellCollectionRecord.module').then(m => m.ShellCollectionRecordModule),
    data: {
        oPermission: {
            permissionId: 'ShellCollectionRecord-detail-permissions'
        }
    }
},{
    path: ':shell_id/ShellPhoto', loadChildren: () => import('../ShellPhoto/ShellPhoto.module').then(m => m.ShellPhotoModule),
    data: {
        oPermission: {
            permissionId: 'ShellPhoto-detail-permissions'
        }
    }
},{
    path: ':shell_id/ShellScientificStudy', loadChildren: () => import('../ShellScientificStudy/ShellScientificStudy.module').then(m => m.ShellScientificStudyModule),
    data: {
        oPermission: {
            permissionId: 'ShellScientificStudy-detail-permissions'
        }
    }
}
];

export const SHELL_MODULE_DECLARATIONS = [
    ShellHomeComponent,
    ShellNewComponent,
    ShellDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShellRoutingModule { }