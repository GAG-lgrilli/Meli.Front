import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { GuardService } from './services/guard.service';
import { ProductComponent } from './components/products/product/product.component';
import { CategoryComponent } from './components/categories/category/category.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { ProvidersComponent } from './components/providers/providers.component';
import { ProviderComponent } from './components/providers/provider/provider.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: '', component: ProductsComponent,canActivate: [GuardService]},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'profile', component: ProfileComponent,canActivate: [GuardService] },
  { path: 'products', component: ProductsComponent,canActivate: [GuardService] },
  { path: 'product/:id', component: ProductComponent,canActivate: [GuardService] },
  { path: 'categories', component: CategoriesComponent,canActivate: [GuardService] },
  { path: 'category/:id', component: CategoryComponent,canActivate: [GuardService] },
  { path: 'providers', component: ProvidersComponent,canActivate: [GuardService] },
  { path: 'provider/:id', component: ProviderComponent,canActivate: [GuardService] },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
