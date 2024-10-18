import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellCollectionRecordHomeComponent } from './home/ShellCollectionRecord-home.component';
import { ShellCollectionRecordNewComponent } from './new/ShellCollectionRecord-new.component';
import { ShellCollectionRecordDetailComponent } from './detail/ShellCollectionRecord-detail.component';

const routes: Routes = [
  {path: '', component: ShellCollectionRecordHomeComponent},
  { path: 'new', component: ShellCollectionRecordNewComponent },
  { path: ':id', component: ShellCollectionRecordDetailComponent,
    data: {
      oPermission: {
        permissionId: 'ShellCollectionRecord-detail-permissions'
      }
    }
  }
];

export const SHELLCOLLECTIONRECORD_MODULE_DECLARATIONS = [
    ShellCollectionRecordHomeComponent,
    ShellCollectionRecordNewComponent,
    ShellCollectionRecordDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShellCollectionRecordRoutingModule { }