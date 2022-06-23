import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'imobiliaria',
  templateUrl: './imobiliaria.component.html',
  styleUrls: ['./imobiliaria.component.css'],
})
export class ImobiliariasComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
  }
}
