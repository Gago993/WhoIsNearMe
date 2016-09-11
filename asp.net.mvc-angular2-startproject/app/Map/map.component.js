"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var devices_service_1 = require('../Devices/devices.service');
var shared_1 = require('../shared/shared');
var MapComponent = (function () {
    function MapComponent(_deviceService, _ipService, _locationService) {
        this._deviceService = _deviceService;
        this._ipService = _ipService;
        this._locationService = _locationService;
        this.lat = 42;
        this.lng = 21;
    }
    MapComponent.prototype.getDevices = function (uniqueId) {
        var _this = this;
        this._deviceService.getDevices(uniqueId)
            .subscribe(function (devices) { _this.devices = devices; }, function (error) { return _this.errorMessage = error; });
    };
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._ipService.getMyIP()
            .subscribe(function (ip) { _this.setCoordinates(ip); _this.getDevices(ip.ip); }, function (error) { return _this.errorMessage = error; });
    };
    MapComponent.prototype.setCoordinates = function (ipData) {
        var _this = this;
        this._locationService.getMyLocation()
            .subscribe(function (location) { return _this.setDevice(location, ipData); }, function (error) { return _this.errorMessage = error; });
    };
    MapComponent.prototype.setDevice = function (location, ip) {
        var _this = this;
        var device = {
            Latitude: location.location.lat,
            Longitude: location.location.lng,
            UniqueDeviceID: ip.ip,
        };
        this._deviceService.addDevice(device)
            .subscribe(function (device) {
            device.icon = "http://maps.google.com/mapfiles/ms/icons/blue-dot.png";
            device.zIndex = 100;
            _this.me = device;
            console.log(_this.me);
        }, function (error) { return _this.errorMessage = error; });
    };
    MapComponent = __decorate([
        core_1.Component({
            selector: 'map-component',
            templateUrl: './app/Map/map.component.html',
            styleUrls: ['./app/Map/map.component.css'],
            providers: [shared_1.LocationService],
        }), 
        __metadata('design:paramtypes', [devices_service_1.DevicesService, shared_1.IPService, shared_1.LocationService])
    ], MapComponent);
    return MapComponent;
}());
exports.MapComponent = MapComponent;
//# sourceMappingURL=map.component.js.map