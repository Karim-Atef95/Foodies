import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls:['./login.component.css'],
})

export class LoginComponent implements OnInit {
  showModal:number=0;
  customers:string[]=[];
  customer:string="";
   
   constructor(){
   }

   ngOnInit(): void {
   }

  loginClicked(){
      this.showModal=1;
      }

  closeModalClicked(){
    this.showModal=0;
  }
   
  continueClicked(){
    this.showModal=0;
    this.customers.push(this.customer);
    console.log(this.customers);
  }
}







