import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'billingSys';
  
  selected : string = 'Home';
  isSettingOn = false;

  showSettings ($msg: boolean) {
    this.isSettingOn = $msg;
  };

}
