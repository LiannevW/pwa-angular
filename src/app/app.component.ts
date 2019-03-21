import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pwa-angular-app';

  constructor(private swUpdate: SwUpdate,) {
  }

  ngOnInit() {

    this.loadNewVersion();
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


}
