import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { CONFIG } from './config';

@Injectable()
export class IPService {

    constructor(private _http: Http) {
        this.ipUrl = CONFIG.baseUrls.ipUrl;  // URL to web API
        this.dataStore;
    }

    getMyIP(): Observable<IP> {

        if (!this.dataStore) {
            this.dataStore = this._http.get(this.ipUrl)
                .map(this.responseIp)
                .catch(this.errorIp);
        }

        return this.dataStore;
    }

    responseIp(res: Response) {
        let body = res.json();
        return body || {};
    }

    errorIp(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

}

export interface IP {
    ip: string
}
