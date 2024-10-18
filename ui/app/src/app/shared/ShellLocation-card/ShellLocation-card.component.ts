import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './ShellLocation-card.component.html',
  styleUrls: ['./ShellLocation-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.ShellLocation-card]': 'true'
  }
})

export class ShellLocationCardComponent {


}