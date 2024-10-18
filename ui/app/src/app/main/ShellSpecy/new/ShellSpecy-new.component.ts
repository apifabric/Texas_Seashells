import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'ShellSpecy-new',
  templateUrl: './ShellSpecy-new.component.html',
  styleUrls: ['./ShellSpecy-new.component.scss']
})
export class ShellSpecyNewComponent {
  @ViewChild("ShellSpecyForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}