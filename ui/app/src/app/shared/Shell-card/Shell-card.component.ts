import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Shell-card.component.html',
  styleUrls: ['./Shell-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Shell-card]': 'true'
  }
})

export class ShellCardComponent {


}