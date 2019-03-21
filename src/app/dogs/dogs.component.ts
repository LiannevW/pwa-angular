import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {
  dogs: any;
  // dogs: any;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.getDogs();
  }

  getDogs() {
    this.getDogsRequest()
      .subscribe(res => {
        this.dogs = res;
        console.log('this.dogs in getdogs', this.dogs);
        console.log('this.dogs in getdogs', this.dogs[0]);
      },
      err => console.log('ERROR: ', err),
      () => console.log('Getting dogs complete'));
  }

  getDogsRequest() {
    return this.http.get('https://cors.io/?http://shibe.online/api/shibes?count=3');
  }
}
