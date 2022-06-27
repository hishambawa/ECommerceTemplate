import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './product/details/details.component';
import { ListComponent } from './product/list/list.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full', title: 'Logo | Home'},
  { path: 'products', component: ListComponent, pathMatch: 'full', title: 'Logo | Products'},
  { path: 'products/:productId', component: DetailsComponent, pathMatch: 'full', title: 'Logo | Products'},
  { path: 'account', component: AccountComponent, pathMatch: 'full', title: 'Logo | Account'},
  { path: 'contact', component: ContactComponent, pathMatch: 'full', title: 'Logo | Contact Us'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
