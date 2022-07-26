import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  getData : any;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.getData = localStorage.getItem('');
    console.log(this.getData);
  }

  goTonext(){
      this.router.navigate(['/add-task']);
  }
}
