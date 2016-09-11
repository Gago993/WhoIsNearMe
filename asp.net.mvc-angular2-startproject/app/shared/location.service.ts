import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { CONFIG } from './config';

@Injectable()
export class LocationService {

    constructor(private _http: Http) {
        this.locationApi = CONFIG.baseUrls.locationApi;  //Api for location google
        this.dataStore;
    }

    getMyLocation(): Observable<Location> {

        if (!this.dataStore) {
            this.dataStore = this._http.post(this.locationApi)
                .map(this.responseLocation)
                .catch(this.errorLocation);
        }

        return this.dataStore;
    }

    responseLocation(res: Response) {
        let body = res.json();
        return body || {};
    }

    errorLocation(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

}

export interface Location {
    latitude: number,
    longitude: number
}
