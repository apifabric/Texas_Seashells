import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellSpecyHomeComponent } from './home/ShellSpecy-home.component';
import { ShellSpecyNewComponent } from './new/ShellSpecy-new.component';
import { ShellSpecyDetailComponent } from './detail/ShellSpecy-detail.component';

const routes: Routes = [
  {path: '', component: ShellSpecyHomeComponent},
  { path: 'new', component: ShellSpecyNewComponent },
  { path: ':id', component: ShellSpecyDetailComponent,
    data: {
      oPermission: {
        permissionId: 'ShellSpecy-detail-permissions'
      }
    }
  },{
    path: ':species_id/Shell', loadChildren: () => import('../Shell/Shell.module').then(m => m.ShellModule),
    data: {
        oPermission: {
            permissionId: 'Shell-detail-permissions'
        }
    }
}
];

export const SHELLSPECY_MODULE_DECLARATIONS = [
    ShellSpecyHomeComponent,
    ShellSpecyNewComponent,
    ShellSpecyDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShellSpecyRoutingModule { }