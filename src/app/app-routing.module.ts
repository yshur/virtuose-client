import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignInComponent } from './sign-in/sign-in.component';

const appRoutes: Routes = [
 { path: '', redirectTo: './sign-in', pathMatch: 'full'},
 { path: 'sign-in', component: SignInComponent }
 
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
