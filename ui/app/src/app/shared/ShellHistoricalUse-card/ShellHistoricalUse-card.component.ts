import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './ShellHistoricalUse-card.component.html',
  styleUrls: ['./ShellHistoricalUse-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.ShellHistoricalUse-card]': 'true'
  }
})

export class ShellHistoricalUseCardComponent {


}