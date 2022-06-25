import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Imovel as IImovel } from "@cefwm-angular/common";

@Injectable({
  providedIn: "root",
})

export class ImovelCadastroService {

  constructor(
    private httpClient: HttpClient,
  ) {

  }

  public postOne(imovel: IImovel): Observable<string> {
    return this.httpClient.post<string>(
      '/api/imoveis',
      imovel,
    );
  }
}
