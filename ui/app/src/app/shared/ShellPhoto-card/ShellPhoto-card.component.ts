import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './ShellPhoto-card.component.html',
  styleUrls: ['./ShellPhoto-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.ShellPhoto-card]': 'true'
  }
})

export class ShellPhotoCardComponent {


}