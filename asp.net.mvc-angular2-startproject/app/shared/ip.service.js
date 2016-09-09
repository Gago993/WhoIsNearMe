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
var config_1 = require('./config');
var IPService = (function () {
    function IPService(_http) {
        this._http = _http;
        this.ipUrl = config_1.CONFIG.baseUrls.ipUrl; // URL to web API
        this.dataStore;
    }
    IPService.prototype.getMyIP = function () {
        if (!this.dataStore) {
            this.dataStore = this._http.get(this.ipUrl)
                .map(this.responseIp)
                .catch(this.errorIp);
        }
        return this.dataStore;
    };
    IPService.prototype.responseIp = function (res) {
        var body = res.json();
        return body || {};
    };
    IPService.prototype.errorIp = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Rx_1.Observable.throw(errMsg);
    };
    IPService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
    ], IPService);
    return IPService;
    var _a;
}());
exports.IPService = IPService;
//# sourceMappingURL=ip.service.js.map