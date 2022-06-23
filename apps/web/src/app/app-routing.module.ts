import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { ImobiliariasComponent } from "./components/imobiliaria/imobiliaria.component";

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
        component: ImobiliariasComponent,
      },
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
