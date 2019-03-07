import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
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
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pwa-angular-app';

  cities$: Observable<City[]>;
  citiesCollection: AngularFirestoreCollection<City>;

  constructor(
    private swUpdate: SwUpdate,
    private  afs: AngularFirestore) {
  }

  ngOnInit() {

    this.loadNewVersion();
    this.getCities();
    }

    loadNewVersion() {
      if (this.swUpdate.isEnabled) {

        this.swUpdate.available.subscribe(() => {

            if(confirm("New version available :-) Load New Version?")) {

                window.location.reload();
            }
        });
      }
    }

    getCities() {
      this.citiesCollection = this.afs.collection('cities');
      this.cities$ = this.citiesCollection.valueChanges();
    }
}
