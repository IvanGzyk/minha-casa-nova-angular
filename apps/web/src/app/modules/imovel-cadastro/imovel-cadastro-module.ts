
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ImovelCadastroComponent } from "./components/imovel-cadastro/imovel-cadastro.component";

@NgModule({
  declarations: [
    ImovelCadastroComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
  ],
})
export class ImovelCadastroModule {

}
