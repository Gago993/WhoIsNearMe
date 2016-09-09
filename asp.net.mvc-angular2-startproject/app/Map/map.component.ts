import {Component} from '@angular/core';
import { Device, DevicesService } from '../Devices/devices.service';
import { IP, IPService } from '../shared/shared';
import { Observable }       from 'rxjs/Observable';

@Component({
    selector: 'map-component',
    templateUrl: './app/Map/map.component.html',
    styleUrls: ['./app/Map/map.component.css']
})


export class MapComponent implements OnInit {

    lat: number = 42;
    lng: number = 21;
    errorMessage: string;
    devices: Device[];
    me: Device;

    constructor(private _deviceService: DevicesService, private _ipService: IPService) {
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
        let self = this;

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (location) {

                let device: Device = {
                    Latitude: location.coords.latitude,
                    Longitude: location.coords.longitude,
                    UniqueDeviceID: ipData.ip,
                };

                self._deviceService.addDevice(device)
                    .subscribe(
                    (device: Device) => {
                        device.icon = "http://maps.google.com/mapfiles/ms/icons/blue-dot.png";
                        self.me = device;
                        console.log(self.me);
                    },
                    error => this.errorMessage = <any>error);

            });

        }


    }




}