import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './ShellCollectionTime-card.component.html',
  styleUrls: ['./ShellCollectionTime-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.ShellCollectionTime-card]': 'true'
  }
})

export class ShellCollectionTimeCardComponent {


}