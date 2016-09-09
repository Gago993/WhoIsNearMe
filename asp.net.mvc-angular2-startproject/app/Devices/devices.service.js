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
var http_1 = require('@angular/http');
var Rx_1 = require('rxjs/Rx');
var shared_1 = require('../shared/shared');
var DevicesService = (function () {
    function DevicesService(_http) {
        this._http = _http;
        this.devicesUrl = shared_1.CONFIG.baseUrls.devices; // URL to web API
    }
    DevicesService.prototype.addDevice = function (device) {
        var body = JSON.stringify(device);
        return this._http
            .post("" + this.devicesUrl, device)
            .map(this.extractData)
            .catch(this.handleError);
    };
    DevicesService.prototype.getDevice = function (id) {
        return this._http.get(this.devicesUrl + "/" + id)
            .map(this.extractData)
            .catch(this.handleError);
    };
    DevicesService.prototype.getDevices = function (uniqueId) {
        var params = new http_1.URLSearchParams();
        params.set('uniqueDeviceID', uniqueId);
        return this._http.get(this.devicesUrl, { search: params })
            .map(this.extractData)
            .catch(this.handleError);
    };
    DevicesService.prototype.extractData = function (res) {
        var body = res.json();
        return body || [];
    };
    DevicesService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Rx_1.Observable.throw(errMsg);
    };
    DevicesService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
    ], DevicesService);
    return DevicesService;
    var _a;
}());
exports.DevicesService = DevicesService;
//# sourceMappingURL=devices.service.js.map