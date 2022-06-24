import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Imovel as IImovel } from "@cefwm-angular/common";

@Injectable({
  providedIn: "root",
})

export class ImovelService {

  constructor(
    private httpClient: HttpClient,
  ) {

  }

  public getAll(): Observable<IImovel[]> {

    return this.httpClient.get<IImovel[]>(
      '/api/imoveis',
    ).pipe(
    );
  }
}
