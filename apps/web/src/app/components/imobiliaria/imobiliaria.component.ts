import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Imovel as IImovel } from '@cefwm-angular/common';
import { ImovelService } from '../../services/imovel.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'imobiliaria',
  templateUrl: './imobiliaria.component.html',
  styleUrls: ['./imobiliaria.component.css'],
})
export class ImobiliariaComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private imovelService: ImovelService,
  ) {
  }

  public imoveis$: Observable<IImovel[]> = this.imovelService.getAll();

  ngOnInit(): void {
  }

}
