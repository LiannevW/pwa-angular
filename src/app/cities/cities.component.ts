import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Observable} from 'rxjs';

interface City {
  id?: string;
  name: string;
  province: string;
  population: number;
  highlights?: string;
  rating?: number;
}


@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.sass']
})
export class CitiesComponent implements OnInit {
  cities$: Observable<City[]>;
  citiesCollection: AngularFirestoreCollection<City>;

  constructor(
    private  afs: AngularFirestore) { }

  ngOnInit() {
    this.getCities();
  }

  getCities() {
    this.citiesCollection = this.afs.collection('cities');
    this.cities$ = this.citiesCollection.valueChanges();
  }
}
