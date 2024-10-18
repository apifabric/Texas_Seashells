import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './ShellCollector-card.component.html',
  styleUrls: ['./ShellCollector-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.ShellCollector-card]': 'true'
  }
})

export class ShellCollectorCardComponent {


}