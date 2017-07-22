import { EventEmitter, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { User } from '../shared/user.model';
import { Song } from '../shared/song.model';

@Injectable()
export class HeaderService {
  itemAdded = new EventEmitter<Song[]>();
  itemSelected = new EventEmitter<Song>();
  userSignedIn = new EventEmitter<User>();

  public user: User;//need to get dynamic data from DB
  public randomSongs: Song[] = [];//need to get dynamic data from DB
  public historySongs: Song[] = [];//need to get dynamic data from DB
  public likesSongs: Song[] = [];//need to get dynamic data from DB

  constructor(private http: Http) {}

  public getSongHistoryList (
    ) { //runs only once? 
    if(this.user == null)  {

    } else {
    this.http.post(
        'https://virtuoso-music.herokuapp.com/getSongHistoryList',
        { name: this.user.name,
          email: this.user.email }
      ).subscribe(//callback for any change in Fairytail array
      (response: Response) => {
        this.historySongs = response.json();
        this.itemAdded.next(this.historySongs.slice());//emits a change
        console.log(this.historySongs);
         if (response.json() == []) {
           console.log("The history of user is empty");
         }
      }
    );
    }
  }
  public getSongLikesList (
    ) { //runs only once? 
    if(this.user == null)  {

    } else {
    this.http.post(
        'https://virtuoso-music.herokuapp.com/getSongLikesList',
        { name: this.user.name,
          email: this.user.email }
      ).subscribe(//callback for any change in Fairytail array
      (response: Response) => {
        this.likesSongs = response.json();
        this.itemAdded.next(this.likesSongs.slice());//emits a change
        console.log(this.likesSongs);
         if (response.json() == []) {
           console.log("There are no likes for this user");
         }
      }
    );
    }
  }
  public onHistoryAdded(song: Song) {
    if(this.user == null)  {

    } else {
      this.historySongs.push(song);
      this.http.post(
          'https://virtuoso-music.herokuapp.com/pushSongToUserHistory',
          { user_name: this.user.name,
            email: this.user.email,
            song_name: song.name }
        ).subscribe(//callback for any change in Fairytail array
        (response: Response) => {
          let res = response.json();
          console.log(res);
        }
      );
      this.itemAdded.emit(this.historySongs.slice());
    }    
  }
  public onLikeAdded(song: Song) {
    if(this.user == null)  {

    } else {
      this.likesSongs.push(song);
      this.http.post(
          'https://virtuoso-music.herokuapp.com/pushSongToUserLikes',
          { user_name: this.user.name,
            email: this.user.email,
            song_name: song.name }
        ).subscribe(//callback for any change in Fairytail array
        (response: Response) => {
          let res = response.json();
          console.log(res);
        }
      );
      this.itemAdded.emit(this.likesSongs.slice());
    }    
  }  
  public onLikeRemove(song: Song) {
    if(this.user == null)  {

    } else {
      this.likesSongs.splice(this.likesSongs.indexOf(song), 1);
      this.http.post(
          'https://virtuoso-music.herokuapp.com/removeSongFromUserLikes',
          { user_name: this.user.name,
            email: this.user.email,
            song_name: song.name }
        ).subscribe(//callback for any change in Fairytail array
        (response: Response) => {
          let res = response.json();
          console.log(res);
        }
      );
      this.itemAdded.emit(this.likesSongs.slice());
    }    
  }    

  public getRandomSongList() {
    this.http.get('https://virtuoso-music.herokuapp.com/getRandomSongList')
    .subscribe(//callback for any change in Fairytail array
      (response: Response) => {
        this.randomSongs = response.json();
        this.itemAdded.next(this.randomSongs.slice());//emits a change
        console.log(this.randomSongs);
      }
    );    
  }

  public signInUser (
      userName: string,
      userEmail: string,
      userPassword: string
    ) { //runs only once? 
    this.http.post(
        'https://virtuoso-music.herokuapp.com/signInUser',
        { name: userName,
          email: userEmail,
          pass: userPassword }
      )
    .subscribe(//callback for any change in Fairytail array
      (response: Response) => {
        this.user = response.json();
        console.log(this.user);
         if (response.json() == null) {
           console.log("The details don't match to any User");
         }
      }
    );
  }


  public signUpUser(
      userName: string,
      userEmail: string,
      userPassword: string
    ) { //runs only once? 
    this.http.post(
        'https://virtuoso-music.herokuapp.com/signUpUser',
        { name: userName,
          email: userEmail,
          pass: userPassword }
      )
    .subscribe(//callback for any change in Fairytail array
      (response: Response) => {
        this.user = response.json();
        console.log(this.user);
        return this.user;
      }
    );
  }
}
