import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SongsComponent } from './songs/songs.component';
import { SongListComponent } from './songs/song-list/song-list.component';
import { MenuAsideComponent } from './songs/menu-aside/menu-aside.component';
import { PlaylistsComponent } from './songs/playlists/playlists.component';
import { FooterComponent } from './footer/footer.component';
import { SongItemComponent } from './songs/song-list/song-item/song-item.component';
import { SongDetailComponent } from './songs/song-list/song-detail/song-detail.component';
import { HistoryComponent } from './songs/playlists/history/history.component';
import { LikesComponent } from './songs/playlists/likes/likes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignInComponent,
    SignUpComponent,
    SongsComponent,
    SongListComponent,
    MenuAsideComponent,
    PlaylistsComponent,
    FooterComponent,
    SongItemComponent,
    SongDetailComponent,
    HistoryComponent,
    LikesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
