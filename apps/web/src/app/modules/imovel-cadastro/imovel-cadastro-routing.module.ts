import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ImovelCadastroComponent } from "./components/imovel-cadastro/imovel-cadastro.component";

const routes: Routes = [
  {
    path: '',
    component: ImovelCadastroComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class ImovelCadastroRoutingModule {

}
