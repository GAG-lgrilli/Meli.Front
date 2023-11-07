import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProvidersComponent } from './components/providers/providers.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryComponent } from './components/categories/category/category.component';
import { ProductsComponent } from './components/products/products.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginService } from './services/login.service';
import { GuardService } from './services/guard.service';
import { ProviderComponent } from './components/providers/provider/provider.component';
import { ProductComponent } from './components/products/product/product.component';
import { FormsModule } from '@angular/forms';
import { GeneralService } from './services/general.service';
import { ProductService } from './services/product.service';
import { UserService } from './services/user.service';
import { ErrorComponent } from './error/error.component';
import { RegisterService } from './services/register.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProvidersComponent,
    ProviderComponent,
    CategoriesComponent,
    CategoryComponent,
    ProductsComponent,
    ProductComponent,
    ProfileComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [LoginService, GuardService, GeneralService, ProductService, UserService, RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
