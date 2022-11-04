import { 
  Component, 
  EventEmitter, 
  OnInit, 
  Output 
} from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  @Output() isSettingOn = new EventEmitter<boolean>();
  settingOn = false;

  constructor() {
  }
  
  ngOnInit(): void {
    console.log('SideBarComponent');
  }

  onSetting () {
    this.settingOn = !this.settingOn;
    this.isSettingOn.emit(this.settingOn);
  }

}
