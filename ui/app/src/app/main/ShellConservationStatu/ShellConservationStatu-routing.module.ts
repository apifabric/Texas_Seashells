import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellConservationStatuHomeComponent } from './home/ShellConservationStatu-home.component';
import { ShellConservationStatuNewComponent } from './new/ShellConservationStatu-new.component';
import { ShellConservationStatuDetailComponent } from './detail/ShellConservationStatu-detail.component';

const routes: Routes = [
  {path: '', component: ShellConservationStatuHomeComponent},
  { path: 'new', component: ShellConservationStatuNewComponent },
  { path: ':id', component: ShellConservationStatuDetailComponent,
    data: {
      oPermission: {
        permissionId: 'ShellConservationStatu-detail-permissions'
      }
    }
  },{
    path: ':conservation_status_id/Shell', loadChildren: () => import('../Shell/Shell.module').then(m => m.ShellModule),
    data: {
        oPermission: {
            permissionId: 'Shell-detail-permissions'
        }
    }
}
];

export const SHELLCONSERVATIONSTATU_MODULE_DECLARATIONS = [
    ShellConservationStatuHomeComponent,
    ShellConservationStatuNewComponent,
    ShellConservationStatuDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShellConservationStatuRoutingModule { }