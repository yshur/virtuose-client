import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SongsComponent } from './songs/songs.component';

const appRoutes: Routes = [
 { path: '', redirectTo: './sign-in', pathMatch: 'full'},
 { path: 'sign-in', component: SignInComponent },
 { path: 'sign-up', component: SignUpComponent },
 { path: 'songs', component: SongsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
