import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user:String;
  age:Number;
  email:String;
  address:Address;
  hobbies:string[];
  posts:Post[];
  isEdit:boolean;

  constructor(private dataService:DataService) {

  }

  ngOnInit() {
    this.user = "John Doe";
    this.age = 30;
    this.email = "johnd@gmail.com";
    this.address = {
      street:"3801 Parkview Ln.",
      city:"Irvine",
      state:"CA"
    };
    this.hobbies = ['Write Code', 'Watch Movies', 'Listen Music'];
    this.isEdit = false;

    this.dataService.getPosts().subscribe(post => {
      this.posts = post;
    });
  }

  onClick(){
    
  }

  toggleEdit(){
    this.isEdit = !this.isEdit;
  }

  addHobby(hobby) {
    this.hobbies.unshift(hobby);
    return false;
  }
  deleteHobby(hobby){
    //this.hobbies.map
    for (let i = 0; i < this.hobbies.length; i++) {
      if (this.hobbies[i] === hobby) {
        this.hobbies.splice(i, 1);
      }
    }
  }
}

interface Address{
    street:String,
    city:String,
    state:String
}
interface Post{
  id: Number,
  title: String,
  body: String,
  userId: Number
}