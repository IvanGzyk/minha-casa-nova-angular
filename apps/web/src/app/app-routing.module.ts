import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { ImobiliariaComponent } from "./components/imobiliaria/imobiliaria.component";
import { ImovelCadastroComponent } from "./modules/imovel-cadastro/components/imovel-cadastro/imovel-cadastro.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home/imobiliarias',
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'imobiliarias',
      },
      {
        path: 'imobiliarias',
        component: ImobiliariaComponent,
      },
      {
        path: 'cadastra-imovel',
        component: ImovelCadastroComponent,
      },
      // {
      //   path: 'cadastra-imovel',
      //   loadChildren: () => import(
      //     './modules/imovel-cadastro/imovel-cadastro-module'
      //   ).then(mod => mod.ImovelCadastroModule),
      // },
    ],
  },
  {
    path: '**',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {
}
