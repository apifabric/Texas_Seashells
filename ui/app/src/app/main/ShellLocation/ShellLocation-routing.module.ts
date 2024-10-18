import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellLocationHomeComponent } from './home/ShellLocation-home.component';
import { ShellLocationNewComponent } from './new/ShellLocation-new.component';
import { ShellLocationDetailComponent } from './detail/ShellLocation-detail.component';

const routes: Routes = [
  {path: '', component: ShellLocationHomeComponent},
  { path: 'new', component: ShellLocationNewComponent },
  { path: ':id', component: ShellLocationDetailComponent,
    data: {
      oPermission: {
        permissionId: 'ShellLocation-detail-permissions'
      }
    }
  },{
    path: ':location_id/Shell', loadChildren: () => import('../Shell/Shell.module').then(m => m.ShellModule),
    data: {
        oPermission: {
            permissionId: 'Shell-detail-permissions'
        }
    }
}
];

export const SHELLLOCATION_MODULE_DECLARATIONS = [
    ShellLocationHomeComponent,
    ShellLocationNewComponent,
    ShellLocationDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShellLocationRoutingModule { }