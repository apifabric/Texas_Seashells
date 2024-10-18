import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './ShellConservationStatu-card.component.html',
  styleUrls: ['./ShellConservationStatu-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.ShellConservationStatu-card]': 'true'
  }
})

export class ShellConservationStatuCardComponent {


}