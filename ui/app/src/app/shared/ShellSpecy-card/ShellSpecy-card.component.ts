import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './ShellSpecy-card.component.html',
  styleUrls: ['./ShellSpecy-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.ShellSpecy-card]': 'true'
  }
})

export class ShellSpecyCardComponent {


}