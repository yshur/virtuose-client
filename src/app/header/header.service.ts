import { EventEmitter, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { User } from '../shared/user.model';
import { Song } from '../shared/song.model';

@Injectable()
export class HeaderService {
  itemAdded = new EventEmitter<Song[]>();
  itemSelected = new EventEmitter<Song>();
  userSignedIn = new EventEmitter<User>();

  userName: String = "yshur";
  userEmail: String = "yair.shur@gmail.com";

  public user: User;
  public randomSongs: Song[] = [];//need to get dynamic data from DB
  public historySongs: Song[] = [];//need to get dynamic data from DB
  public likesSongs: Song[] = [];//need to get dynamic data from DB

  constructor(private http: Http) { }

  public getSongHistoryList (
    ) { //runs only once? 
    this.http.post(
        'http://ec2-52-89-100-148.us-west-2.compute.amazonaws.com:3000/getSongHistoryList',
        { user_name: this.userName,
          email: this.userEmail }
      ).subscribe(//callback for any change in Fairytail array
      (response: Response) => {
        this.historySongs = response.json();
        this.itemAdded.next(this.historySongs.slice());//emits a change
        console.log(this.historySongs);
         // if (response.json() == []) {
         //   console.log("The history of user is empty");
         // }
      }
    );
  }
  public getSongLikesList (
    ) { //runs only once? 
    this.http.post(
        'http://ec2-52-89-100-148.us-west-2.compute.amazonaws.com:3000/getSongLikesList',
        { user_name: this.userName,
          email: this.userEmail }
      ).subscribe(//callback for any change in Fairytail array
      (response: Response) => {
        this.likesSongs = response.json();
        this.itemAdded.next(this.likesSongs.slice());//emits a change
        console.log(this.likesSongs);
         // if (response.json() == []) {
         //   console.log("There are no likes for this user");
         // }
      }
    );
  }
  public onHistoryAdded(song: Song) {
      this.historySongs.push(song);
      this.http.post(
          'http://ec2-52-89-100-148.us-west-2.compute.amazonaws.com:3000/pushSongToUserHistory',
          { user_name: this.userName,
            email: this.userEmail,
            song_name: song.name }
        ).subscribe(//callback for any change in Fairytail array
        (response: Response) => {
          let res = response.json();
          console.log(res);
        }
      );
      this.itemAdded.emit(this.historySongs.slice());   
  }
  public onLikeAdded(song: Song) {
      this.likesSongs.push(song);
      this.http.post(
          'http://ec2-52-89-100-148.us-west-2.compute.amazonaws.com:3000/pushSongToUserLikes',
          { user_name: this.userName,
            email: this.userEmail,
            song_name: song.name }
        ).subscribe(//callback for any change in Fairytail array
        (response: Response) => {
          let res = response.json();
          console.log(res);
        }
      );
      this.itemAdded.emit(this.likesSongs.slice());   
  }  
  public onLikeRemove(song: Song) {
      this.likesSongs.splice(this.likesSongs.indexOf(song), 1);
      this.http.post(
          'http://ec2-52-89-100-148.us-west-2.compute.amazonaws.com:3000/removeSongFromUserLikes',
          { user_name: this.userName,
            email: this.userEmail,
            song_name: song.name }
        ).subscribe(//callback for any change in Fairytail array
        (response: Response) => {
          let res = response.json();
          console.log(res);
        }
      );
      this.itemAdded.emit(this.likesSongs.slice());   
  }    

  public getRandomSongList() {
    this.http.get('http://ec2-52-89-100-148.us-west-2.compute.amazonaws.com:3000/getRandomSongList')
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
        'http://ec2-52-89-100-148.us-west-2.compute.amazonaws.com:3000/signInUser',
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
        'http://ec2-52-89-100-148.us-west-2.compute.amazonaws.com:3000/signUpUser',
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
