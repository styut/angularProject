import { Component,ViewChild } from '@angular/core';
import { UserService } from "../../service/user.service";
import { User } from "../../models/user";
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
newUser:User= { id: 0, username: "", password: "", jobSearchField: "" } ;
User:User= { id: 0, username: "", password: "", jobSearchField: "" } ;
@ViewChild('f') f: NgForm | null = null;
 
  constructor(private userService:UserService ) {
  
  }

  signUp() {
    this.userService.getUser(this.User.username,this.User.password).subscribe(res=>{
     this.newUser= res;
     if (this.newUser) 
     {
      alert(" connect");
      localStorage.setItem('userConnect',JSON.stringify(this.newUser));
     } 
    else {
      alert("no connect");
    }
    })
    
}}
