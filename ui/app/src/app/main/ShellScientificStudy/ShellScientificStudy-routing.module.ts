import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellScientificStudyHomeComponent } from './home/ShellScientificStudy-home.component';
import { ShellScientificStudyNewComponent } from './new/ShellScientificStudy-new.component';
import { ShellScientificStudyDetailComponent } from './detail/ShellScientificStudy-detail.component';

const routes: Routes = [
  {path: '', component: ShellScientificStudyHomeComponent},
  { path: 'new', component: ShellScientificStudyNewComponent },
  { path: ':id', component: ShellScientificStudyDetailComponent,
    data: {
      oPermission: {
        permissionId: 'ShellScientificStudy-detail-permissions'
      }
    }
  }
];

export const SHELLSCIENTIFICSTUDY_MODULE_DECLARATIONS = [
    ShellScientificStudyHomeComponent,
    ShellScientificStudyNewComponent,
    ShellScientificStudyDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShellScientificStudyRoutingModule { }