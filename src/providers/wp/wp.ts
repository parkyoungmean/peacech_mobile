import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';                // 추가
import { Observable } from 'rxjs/Observable';  // 추가
import { WpApiPosts, WpApiMedia, WpApiUsers } from 'wp-api-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';



export class Post {
  public media_url: Observable<string>;
  constructor(public authorId: number, public id: number, public title: string, public content: string, public excerpt: string, public date: string, public mediaId?: number) { }
}



export class OldPost {
  public media_url: Observable<string>;
  constructor(public authorId: string, public id: number, public title: string, public content: string, public link: string, public date: string, public mediaId?: number) { }
}



export class User {
  constructor(public id: number, public name: string, public userImageUrl: string) { }
}
 
/*
  Generated class for the WpProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class WpProvider {
  users: User[];                                // 추가

  constructor(public http: Http, public wpApiPosts:WpApiPosts, public wpApiMedia: WpApiMedia, public wpApiUsers:WpApiUsers) {
    this.wpApiUsers.getList()
    .map(res => res.json())
    .subscribe(data => {
      this.users = [];
      for (let user of data) {
        let oneUser = new User(user[ 'id' ], user[ 'name' ], user[ 'avatar_urls' ][ '96' ]);
        this.users.push(oneUser);
      }
    })
    console.log('Hello WpProvider Provider');
  }

  getPosts(): Observable<Post[]> {
    return this.wpApiPosts.getList()
      .map(res => res.json())
      .map(data => {
        console.log(data);
        var posts = [];
        for (let post of data) {
          let onePost = new Post(post[ 'id' ], post[ 'd_id' ], post[ 'title' ][ 'rendered' ], post[ 'content' ][ 'rendered' ], post[ 'excerpt' ][ 'rendered' ], post[ 'date' ], post[ 'featured_media' ]);
          onePost.media_url = this.getMedia(onePost.mediaId);
          posts.push(onePost);
        }
        return posts;
      });
  }

  getOldPosts(): Observable<OldPost[]> {
    return this.http.get('assets/data/xe_document.json')
    //return this.http.get('assets/data/youth_cell3.json')
      .map(res => res.json())
      .map(data => {
        //console.log(data);
        console.log(data.peacech2009.xe_documents);
        var posts = [];
        var oneData = data.peacech2009.xe_documents;
        for (let post of oneData) {
          let onePost = new OldPost(post[ 'nick_name' ], post['document_srl'], post[ 'title' ], post[ 'content' ], post[ 'link' ], post[ 'last_update' ], post[ 'featured_media' ]);
          
          //let onePost = new OldPost(post[ 'creator' ]['__text'], post[ 'guid' ]['__text'], post[ 'title' ], post[ 'description' ], post[ 'link' ], post[ 'pubDate' ], post[ 'featured_media' ]);
          onePost.media_url = this.getMedia(onePost.mediaId);
          posts.push(onePost);
          
        }
        //console.log(posts);
        return posts;
      });
  }
 
  getMedia(id: number): Observable<string> {
    return this.wpApiMedia.get(id)
      .map(res => res.json())
      .map(data => {
        return data[ 'source_url' ];
      });
  }
 
  getUserImage(userId: number) {
    for (let usr of this.users) {
      if (usr.id === userId) {
        return usr.userImageUrl;
      }
    }
  }
 
  getUserName(userId: number) {
    for (let usr of this.users) {
      if (usr.id === userId) {
        return usr.name;
      }
    }
  }
}
