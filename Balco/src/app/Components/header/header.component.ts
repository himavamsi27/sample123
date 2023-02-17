import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router){}
  ngOnInit(){
    }

    about(){
      this.router.navigate(['about'])
    }

  login(){
    this.router.navigate(['login']);
  }
  testing(){
    this.router.navigate(['testing']);
  }

  Signup(){
    this.router.navigate(['signup']);
  }
  doctorlist(){
    this.router.navigate(['doctorlist']);
  }

  book(){
    this.router.navigate(['bookappoinment'])
  }

  home(){
    this.router.navigate([''])
  }
}
