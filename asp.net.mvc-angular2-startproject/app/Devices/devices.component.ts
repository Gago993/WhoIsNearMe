import { Component} from '@angular/core';
import { Device, DevicesService } from './devices.service';
import { IP, IPService } from '../shared/shared';

@Component({
    selector: 'devices-component',
    templateUrl: './app/Devices/devices.component.html',
    styleUrls: ['./app/Devices/devices.component.css'],
})

export class DevicesComponent implements OnInit {

    errorMessage: string;
    devices: Device[];

    constructor(private _deviceService: DevicesService, private _ipService: IPService) {
    }


    getDevices() {
        this._deviceService.getDevices()
            .subscribe(
            (devices: IP) => { this.devices = devices },
            error => this.errorMessage = <any>error);
    }

    ngOnInit() {
        this.getDevices();
    }



}

