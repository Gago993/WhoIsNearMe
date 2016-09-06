import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

//import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
  imports: [BrowserModule],
  declarations: [ AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*
,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAAVKt72sX-0P3BEbF87bff6k9hJgdefdk'
        })
   */