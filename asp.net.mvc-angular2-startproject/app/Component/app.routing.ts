import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevicesComponent }  from '/app/Devices/devices.component';
import { MapComponent } from '/app/Map/map';

const appRoutes: Routes = [
    { path: '', name: 'Map', component: MapComponent },
    { path: 'devices', name: 'Devices', component: DevicesComponent }
];
export const appRoutingProviders: any[] = [
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);