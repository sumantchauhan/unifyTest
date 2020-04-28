import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName:any='';
  password:any='';
  isLogin:boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(event){
    event.preventDefault();
    if(this.userName!=='' && this.password !==''){
      this.router.navigate(['/home'])
    }
  }

}
