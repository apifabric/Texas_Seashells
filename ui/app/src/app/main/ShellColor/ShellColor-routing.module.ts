import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellColorHomeComponent } from './home/ShellColor-home.component';
import { ShellColorNewComponent } from './new/ShellColor-new.component';
import { ShellColorDetailComponent } from './detail/ShellColor-detail.component';

const routes: Routes = [
  {path: '', component: ShellColorHomeComponent},
  { path: 'new', component: ShellColorNewComponent },
  { path: ':id', component: ShellColorDetailComponent,
    data: {
      oPermission: {
        permissionId: 'ShellColor-detail-permissions'
      }
    }
  },{
    path: ':color_id/Shell', loadChildren: () => import('../Shell/Shell.module').then(m => m.ShellModule),
    data: {
        oPermission: {
            permissionId: 'Shell-detail-permissions'
        }
    }
}
];

export const SHELLCOLOR_MODULE_DECLARATIONS = [
    ShellColorHomeComponent,
    ShellColorNewComponent,
    ShellColorDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShellColorRoutingModule { }