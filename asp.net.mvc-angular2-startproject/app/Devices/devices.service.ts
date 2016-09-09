import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { CONFIG } from '../shared/shared';


@Injectable()
export class DevicesService {

    constructor(private _http: Http) { }
    private devicesUrl = CONFIG.baseUrls.devices;  // URL to web API

    addDevice(device: Device) {
        let body = JSON.stringify(device);
        return this._http
            .post(`${this.devicesUrl}`, device)
            .map(this.extractData)
            .catch(this.handleError)
    }

    getDevice(id: number) {
        return this._http.get(`${this.devicesUrl}/${id}`)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getDevices(uniqueId): Observable<Device[]> {
        let params: URLSearchParams = new URLSearchParams();
        params.set('uniqueDeviceID', uniqueId);
        return this._http.get(this.devicesUrl, { search: params })
            .map(this.extractData)
            .catch(this.handleError);
    }


    private extractData(res: Response) {
        let body = res.json();
        return body || [];
    }

    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

}

export interface Device {
    id: number,
    latitude: number,
    longitude: number,
    uniqueDeviceID?: string,
    lastVisit?: string,
    icon?: string,
}