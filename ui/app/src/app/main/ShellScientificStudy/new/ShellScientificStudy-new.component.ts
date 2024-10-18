import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'ShellScientificStudy-new',
  templateUrl: './ShellScientificStudy-new.component.html',
  styleUrls: ['./ShellScientificStudy-new.component.scss']
})
export class ShellScientificStudyNewComponent {
  @ViewChild("ShellScientificStudyForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}