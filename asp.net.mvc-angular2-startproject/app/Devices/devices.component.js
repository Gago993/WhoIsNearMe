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
var devices_service_1 = require('./devices.service');
var shared_1 = require('../shared/shared');
var DevicesComponent = (function () {
    function DevicesComponent(_deviceService, _ipService) {
        this._deviceService = _deviceService;
        this._ipService = _ipService;
    }
    DevicesComponent.prototype.getDevices = function () {
        var _this = this;
        this._deviceService.getDevices()
            .subscribe(function (devices) { _this.devices = devices; }, function (error) { return _this.errorMessage = error; });
    };
    DevicesComponent.prototype.ngOnInit = function () {
        this.getDevices();
    };
    DevicesComponent = __decorate([
        core_1.Component({
            selector: 'devices-component',
            templateUrl: './app/Devices/devices.component.html',
            styleUrls: ['./app/Devices/devices.component.css'],
        }), 
        __metadata('design:paramtypes', [devices_service_1.DevicesService, shared_1.IPService])
    ], DevicesComponent);
    return DevicesComponent;
}());
exports.DevicesComponent = DevicesComponent;
//# sourceMappingURL=devices.component.js.map