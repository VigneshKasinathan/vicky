import { Component, OnInit } from '@angular/core';
import {  HttpClientModule,HttpClient, HttpHeaders } from '@angular/common/http';
import  Swal from 'sweetalert2';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'cors';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})

export class ContactsComponent implements OnInit {

  email : string;
  name : string;
  info : string;
  textarea :string;
  endpoint : string;

  http : HttpClient;

  constructor(http : HttpClient ) {
    this.http = http;
  }

  ngOnInit() {
    //This data could really come from some inputs on the interface - but let's keep it simple.
   this.email;
   this.name;
   this.info;
   this.textarea;
   //Start php via the built in server: $ php -S localhost:8000
   //this.endpoint = "api/getintouch.php";
   this.endpoint = "http://localhost:3000/send";
  }

  exit() {
    window.location.reload();
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
  }
  

 sendEmail(){
  
  let postVars = {
    email : this.email,
    name : this.name,
    info : this.info,
    textarea : this.textarea
  };
  console.log(postVars);
/*let postVars = `My name is ${this.name}. My email is ${this.email}. My message is ${this.message}. My message is ${this.textarea}`;
    alert(postVars);*/
    return this.http.post(this.endpoint, postVars, httpOptions)
      // .subscribe(hero => this.hero = hero);
      
      .subscribe((result) => {
        console.log('Got some data from backend',result);
        return result;
      },(error) => {
        console.log('Error!',error);
      });

     /* .subscribe(
        response => console.log(response),
        response => console.log(response)
    );
      /*.map(response => {
        console.log('Sending email was successfull', response);
        return response;
      })
      .catch(error => {
        console.log('Sending email got error', error);
        return Observable.throw(error);
      });*/
  }
}
