import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  navList = [{
    nav: "",
    navLink: "",
    selected: false
  }];

  selected = ""

  ngOnInit(): void {
    
    this.navList = [
      {nav:"Home", navLink:"/", selected: true},
      {nav:"Login", navLink:"/login", selected: false}
    ]

    this.selected = "Home"
  }

  navSelect(selectedNav: string): void {

    if (this.selected !== selectedNav) {
      for (let i in this.navList) {
        let navDat = this.navList[i];
        if (navDat.nav == this.selected) {
          this.navList[i].selected = false;
        }else if (navDat.nav == selectedNav) {
          this.navList[i].selected = true;
        }
      }
      
      this.selected = selectedNav;
    }

  }

}
