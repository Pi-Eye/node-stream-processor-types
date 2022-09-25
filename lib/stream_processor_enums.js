"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceType = exports.TextPosition = exports.Format = exports.ArgType = void 0;
// Enum classes
var ArgType;
(function (ArgType) {
    ArgType[ArgType["kRequired"] = 0] = "kRequired";
    ArgType[ArgType["kText"] = 1] = "kText";
    ArgType[ArgType["kMotion"] = 2] = "kMotion";
    ArgType[ArgType["kDevice"] = 3] = "kDevice";
})(ArgType = exports.ArgType || (exports.ArgType = {}));
var Format;
(function (Format) {
    Format[Format["kRGB"] = 0] = "kRGB";
    Format[Format["kGray"] = 1] = "kGray";
})(Format = exports.Format || (exports.Format = {}));
var TextPosition;
(function (TextPosition) {
    TextPosition[TextPosition["kTop"] = 0] = "kTop";
    TextPosition[TextPosition["kBottom"] = 1] = "kBottom";
})(TextPosition = exports.TextPosition || (exports.TextPosition = {}));
var DeviceType;
(function (DeviceType) {
    DeviceType[DeviceType["kCPU"] = 0] = "kCPU";
    DeviceType[DeviceType["kGPU"] = 1] = "kGPU";
    DeviceType[DeviceType["kSpecific"] = 2] = "kSpecific";
})(DeviceType = exports.DeviceType || (exports.DeviceType = {}));
//# sourceMappingURL=stream_processor_enums.js.map