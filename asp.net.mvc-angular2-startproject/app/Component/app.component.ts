import { Component } from '@angular/core';
import { CONFIG, IPService, LocationService } from '../shared/shared';
import { DevicesService } from '../Devices/devices.service';


@Component({
    selector: 'my-app',
    templateUrl: './app/Component/app.component.html',
    styleUrls: ['./app/Component/app.component.css'],
    providers: [IPService, DevicesService],
})

export class AppComponent {
    public menuItems = [
        { caption: 'Map', link: [''] },
        { caption: 'Devices', link: ['devices'] },
    ];

}
