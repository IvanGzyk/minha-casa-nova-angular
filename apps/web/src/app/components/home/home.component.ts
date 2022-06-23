import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'cefwm-angular-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public items: MenuItem[] = [
    {
      label: 'Minha casa Nova',
      icon: 'pi pi-home',
      routerLink: [ '/home' ],
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
