import {Component} from '@angular/core';
import { Device, DevicesService } from '../Devices/devices.service';
import { IP, IPService, LocationService } from '../shared/shared';
import { Observable }       from 'rxjs/Observable';

@Component({
    selector: 'map-component',
    templateUrl: './app/Map/map.component.html',
    styleUrls: ['./app/Map/map.component.css'],
    providers: [LocationService],
})


export class MapComponent implements OnInit {

    lat: number = 42;
    lng: number = 21;
    errorMessage: string;
    devices: Device[];
    me: Device;

    constructor(private _deviceService: DevicesService, private _ipService: IPService, private _locationService: LocationService) {
    }


    getDevices(uniqueId) {
        this._deviceService.getDevices(uniqueId)
            .subscribe(
            (devices: IP) => { this.devices = devices },
            error => this.errorMessage = <any>error);
    }

    ngOnInit() {
        this._ipService.getMyIP()
            .subscribe(
            (ip: IP) => { this.setCoordinates(ip); this.getDevices(ip.ip); },
            error => this.errorMessage = <any>error);

    }

    setCoordinates(ipData: IP) {

        this._locationService.getMyLocation()
            .subscribe(
            (location: Location) => this.setDevice(location, ipData),
            error => this.errorMessage = <any>error);

        }


    setDevice(location: Location, ip: IP) {

        let device: Device = {
            Latitude: location.location.lat,
            Longitude: location.location.lng,
            UniqueDeviceID: ip.ip,
        };

        this._deviceService.addDevice(device)
            .subscribe(
            (device: Device) => {
                device.icon = "http://maps.google.com/mapfiles/ms/icons/blue-dot.png";
                device.zIndex = 100;
                this.me = device;
                console.log(this.me);
            },
            error => this.errorMessage = <any>error);

    }




}