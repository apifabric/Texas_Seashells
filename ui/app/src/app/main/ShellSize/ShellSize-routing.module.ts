import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellSizeHomeComponent } from './home/ShellSize-home.component';
import { ShellSizeNewComponent } from './new/ShellSize-new.component';
import { ShellSizeDetailComponent } from './detail/ShellSize-detail.component';

const routes: Routes = [
  {path: '', component: ShellSizeHomeComponent},
  { path: 'new', component: ShellSizeNewComponent },
  { path: ':id', component: ShellSizeDetailComponent,
    data: {
      oPermission: {
        permissionId: 'ShellSize-detail-permissions'
      }
    }
  },{
    path: ':size_id/Shell', loadChildren: () => import('../Shell/Shell.module').then(m => m.ShellModule),
    data: {
        oPermission: {
            permissionId: 'Shell-detail-permissions'
        }
    }
}
];

export const SHELLSIZE_MODULE_DECLARATIONS = [
    ShellSizeHomeComponent,
    ShellSizeNewComponent,
    ShellSizeDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShellSizeRoutingModule { }