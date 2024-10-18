import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './ShellScientificStudy-card.component.html',
  styleUrls: ['./ShellScientificStudy-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.ShellScientificStudy-card]': 'true'
  }
})

export class ShellScientificStudyCardComponent {


}