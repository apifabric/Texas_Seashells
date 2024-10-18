import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'ShellCollectionRecord-new',
  templateUrl: './ShellCollectionRecord-new.component.html',
  styleUrls: ['./ShellCollectionRecord-new.component.scss']
})
export class ShellCollectionRecordNewComponent {
  @ViewChild("ShellCollectionRecordForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}