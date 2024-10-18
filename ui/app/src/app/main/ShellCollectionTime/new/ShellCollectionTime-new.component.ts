import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'ShellCollectionTime-new',
  templateUrl: './ShellCollectionTime-new.component.html',
  styleUrls: ['./ShellCollectionTime-new.component.scss']
})
export class ShellCollectionTimeNewComponent {
  @ViewChild("ShellCollectionTimeForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}