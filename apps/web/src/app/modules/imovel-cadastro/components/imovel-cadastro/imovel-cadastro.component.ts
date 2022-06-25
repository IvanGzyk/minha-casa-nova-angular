import { Component, OnDestroy } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Subject } from "rxjs";
import { ImovelCadastroService } from "../../service/imovel-cadastro-service";
import { Imovel as IImovel } from '@cefwm-angular/common';
import { Imovel as Imovel } from '../../../imovel/shared/imovel';

@Component({
  selector: 'cefwm-angular-imovel-cadastro',
  templateUrl: './imovel-cadastro.component.html',
  styleUrls: ['./imovel-cadastro.component.css'],
})

export class ImovelCadastroComponent implements  OnDestroy {

  public descricao: FormControl = new FormControl(
    '',
    Validators.required,
  )

  public bairro: FormControl = new FormControl(
    '',
    Validators.required,
  )

  public cidade: FormControl = new FormControl(
    '',
    Validators.required,
  )

  public valor: FormControl = new FormControl(
    '',
    Validators.required,
  )

  public mt: FormControl = new FormControl(
    '',
    Validators.required,
  )

  public foto: FormControl = new FormControl(
    '',
    Validators.required,
  )

  public formGroup: FormGroup = new FormGroup({
    'descricao': this.descricao,
    'bairro': this.bairro,
    'cidade': this.cidade,
    'valor': this.valor,
    'mt': this.mt,
    'foto': this.foto,
  })

  private subDestruction: Subject<void> = new Subject();

  constructor(
    private formBuilder: FormBuilder,
    private activateRoute: ActivatedRoute,
    private imovelCadastroService: ImovelCadastroService,
  ) {
  }

  ngOnInit(): void {
    this.createForm(new Imovel());
  }

  ngOnDestroy(): void {
      this.subDestruction.next();
      this.subDestruction.complete();
  }

  createForm(imovel: IImovel){
    this.formGroup = this.formBuilder.group({
      'descricao': [imovel.descricao],
      'bairro': [imovel.bairro],
      'cidade': [imovel.cidade],
      'valor': [imovel.valor],
      'mt': [imovel.mt],
      'foto': [imovel.foto],
    })
  }

  public enviaForm(json: IImovel) {
    console.log(json)
    // this.imovelCadastroService.postOne(json).subscribe();
  }
}
