import { Component, OnInit } from '@angular/core';
import { faGear } from '@fortawesome/free-solid-svg-icons';

interface setting {
  theme: 'dark' | 'light' | 'system';
}

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})

export class SettingsComponent implements OnInit {

  constructor() { }

  userSettings: setting | undefined;

  ngOnInit(): void {
    this.userSettings = JSON.parse(localStorage.getItem('setting') as string) as setting;
    console.log(this.userSettings);
  }

  faGear = faGear;

  clickedMe(): void {
    this.userSettings = {
      'theme': 'dark'
    }
    localStorage.setItem('setting', JSON.stringify(this.userSettings));
  }

}
