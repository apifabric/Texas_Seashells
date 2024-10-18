import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './ShellSize-card.component.html',
  styleUrls: ['./ShellSize-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.ShellSize-card]': 'true'
  }
})

export class ShellSizeCardComponent {


}