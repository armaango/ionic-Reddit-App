import { Component } from '@angular/core';
import {RedditService} from '../../app/services/reddit.service';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'reddits',
  templateUrl: 'reddits.html'
})
export class RedditsPage {
    items:any;
  constructor(public navCtrl: NavController,private redditService:RedditService) {

  }

  ngOnInit(){
      this.getPosts('sports',5);
  }
  getPosts(category,limit) {
      this.redditService.getPosts(category,limit).subscribe(response =>{
         this.items = response.data.children;
      })
  }

}
