"use strict";
var router_1 = require('@angular/router');
var devices_component_1 = require('/app/Devices/devices.component');
var map_1 = require('/app/Map/map');
var appRoutes = [
    { path: '', name: 'Map', component: map_1.MapComponent },
    { path: 'devices', name: 'Devices', component: devices_component_1.DevicesComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map