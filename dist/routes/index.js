"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var classRoutes_1 = require("./classRoutes");
var routes = (0, express_1.Router)();
routes.use('/class', classRoutes_1.classRoutes);
exports.default = routes;
