import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellPhotoHomeComponent } from './home/ShellPhoto-home.component';
import { ShellPhotoNewComponent } from './new/ShellPhoto-new.component';
import { ShellPhotoDetailComponent } from './detail/ShellPhoto-detail.component';

const routes: Routes = [
  {path: '', component: ShellPhotoHomeComponent},
  { path: 'new', component: ShellPhotoNewComponent },
  { path: ':id', component: ShellPhotoDetailComponent,
    data: {
      oPermission: {
        permissionId: 'ShellPhoto-detail-permissions'
      }
    }
  }
];

export const SHELLPHOTO_MODULE_DECLARATIONS = [
    ShellPhotoHomeComponent,
    ShellPhotoNewComponent,
    ShellPhotoDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShellPhotoRoutingModule { }