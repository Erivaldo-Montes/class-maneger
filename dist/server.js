"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv");
require("./database/index");
var app_1 = __importDefault(require("./app"));
require("reflect-metadata");
app_1.default.listen(process.env.PORT || 3000, function () { return console.log('server running'); });
exports.default = app_1.default;
