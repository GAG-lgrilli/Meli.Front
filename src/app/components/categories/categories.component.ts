import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/entities/category';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{
  
  listCategories: Category[] = [];

  constructor(private generalService: GeneralService){}

  ngOnInit(): void {
    this.generalService.getCategories().subscribe((response:Category[]) => {
      this.listCategories = response;
    });

   
    //this.listCategories.push( new Category(1,"hola"))
  }
}
