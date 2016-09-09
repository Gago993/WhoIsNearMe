import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './Component/app.component';
import { HttpModule, JsonpModule } from '@angular/http';
import { AgmCoreModule } from 'angular2-google-maps';

import { routing, appRoutingProviders } from './Component/app.routing';

@NgModule({
    imports: [BrowserModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAAVKt72sX-0P3BEbF87bff6k9hJgdefdk'
        }),
        routing,
        HttpModule,
        JsonpModule],
    declarations: [AppComponent],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
