import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'ShellColor-new',
  templateUrl: './ShellColor-new.component.html',
  styleUrls: ['./ShellColor-new.component.scss']
})
export class ShellColorNewComponent {
  @ViewChild("ShellColorForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}