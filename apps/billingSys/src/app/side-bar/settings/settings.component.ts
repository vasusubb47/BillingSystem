import { Component, OnInit } from '@angular/core';
import { faUsersGear } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  faUsersGear = faUsersGear;

}
