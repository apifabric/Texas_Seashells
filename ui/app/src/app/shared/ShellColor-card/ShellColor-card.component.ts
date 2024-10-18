import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './ShellColor-card.component.html',
  styleUrls: ['./ShellColor-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.ShellColor-card]': 'true'
  }
})

export class ShellColorCardComponent {


}