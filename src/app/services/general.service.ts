import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Category } from "../entities/category";
import { Observable } from "rxjs";

@Injectable()
export class GeneralService{

    constructor(private readonly httpClient: HttpClient) {}
    conn:string = "https://localhost:7269/category";

    postCategory(category: Category) {
        this.httpClient
          .post(this.conn,category)
          .subscribe(
            (response) => {
              return response;
            },
            (error) => console.log('Error al guardar personas: ' + error)
            );
    }

    getCategories():Observable<Category[]> {
        return this.httpClient.get<Category[]>(this.conn);
    }
}