"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var axios_1 = require("axios");
var vue_1 = require("vue");
/**
 * @author 真心
 * @date 2021/2/2 21:03
 * @email qgzhenxin@qq.com
 * @description axios 封装
 */
var baseURL = axios_1["default"].defaults.baseURL; // 默认
switch (process.env.NODE_ENV) {
    case 'development':
        baseURL = 'http://localhost:8847'; // 开发环境
        break;
    default:
        baseURL = 'https://api.ys.zhenxin.xyz'; // 生产环境
}
// 创建axios服务
var service = axios_1["default"].create({
    baseURL: baseURL,
    timeout: 1000 * 10
});
service.interceptors.request.use(function (config) {
    config.headers['token'] = vue_1["default"].$cookies.get('token'); // 设置token
    return config;
});
var HttpUtil = /** @class */ (function () {
    function HttpUtil() {
    }
    /**
     * 发送Get请求
     * @param url 链接
     * @param params 参数
     * @return 数据
     */
    HttpUtil.get = function (url, params) {
        if (params === void 0) { params = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var data, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params.t = Date.now();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, service.get(url, {
                                params: params
                            })];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, data.data];
                    case 3:
                        e_1 = _a.sent();
                        return [2 /*return*/, e_1.response.data];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 发送POST请求
     * @param url 链接
     * @param params 参数
     * @return 数据
     */
    HttpUtil.post = function (url, params) {
        if (params === void 0) { params = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var data, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params.t = Date.now();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, service.post(url, params)];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, data.data];
                    case 3:
                        e_2 = _a.sent();
                        return [2 /*return*/, e_2.response.data];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return HttpUtil;
}());
exports["default"] = HttpUtil;
