import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './ShellCollectionRecord-card.component.html',
  styleUrls: ['./ShellCollectionRecord-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.ShellCollectionRecord-card]': 'true'
  }
})

export class ShellCollectionRecordCardComponent {


}