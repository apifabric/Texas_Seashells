import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'ShellSize-new',
  templateUrl: './ShellSize-new.component.html',
  styleUrls: ['./ShellSize-new.component.scss']
})
export class ShellSizeNewComponent {
  @ViewChild("ShellSizeForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}