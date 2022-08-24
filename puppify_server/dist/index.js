/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./server.ts":
/*!*******************!*\
  !*** ./server.ts ***!
  \*******************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n/**\n * Application\n */\nconst app_1 = __importDefault(__webpack_require__(/*! ./src/app */ \"./src/app.ts\"));\nconst config_1 = __importDefault(__webpack_require__(/*! ./src/config */ \"./src/config/index.ts\"));\nconst logger_1 = __importDefault(__webpack_require__(/*! ./src/utils/logger */ \"./src/utils/logger.ts\"));\nconst PORT = config_1.default.PORT;\n/**\n * Running server\n */\napp_1.default.then((app) => app.getInstance().listen(PORT, () => {\n    logger_1.default.info(`Server running on port: ${PORT}`);\n}));\n\n\n//# sourceURL=webpack://puppify_server/./server.ts?");

/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n/**\n * External modules\n */\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nconst cors_1 = __importDefault(__webpack_require__(/*! cors */ \"cors\"));\nconst helmet_1 = __importDefault(__webpack_require__(/*! helmet */ \"helmet\"));\n/**\n * Internal modules\n */\nconst logger_1 = __importDefault(__webpack_require__(/*! ./middlewares/logger */ \"./src/middlewares/logger.ts\"));\nconst errorHandler_1 = __importDefault(__webpack_require__(/*! ./middlewares/errorHandler */ \"./src/middlewares/errorHandler.ts\"));\nconst config_1 = __importDefault(__webpack_require__(/*! ./config */ \"./src/config/index.ts\"));\nconst routes_1 = __importDefault(__webpack_require__(/*! ./routes */ \"./src/routes/index.ts\"));\nconst logger_2 = __importDefault(__webpack_require__(/*! ./utils/logger */ \"./src/utils/logger.ts\"));\nconst database_1 = __webpack_require__(/*! ./config/database */ \"./src/config/database.ts\");\nclass Vault {\n    constructor() {\n        this.app = (0, express_1.default)();\n        /**\n         * App Configuration\n         */\n        this.app.use((0, cors_1.default)());\n        this.app.use((0, helmet_1.default)());\n        this.app.use(express_1.default.json());\n        this.app.use(express_1.default.urlencoded({ extended: true }));\n        // Middlewares\n        this.app.use(logger_1.default);\n        // Routes\n        this.app.use(config_1.default.CONTEXT_PATH, routes_1.default);\n        // Error handler\n        this.app.use(errorHandler_1.default);\n    }\n    getInstance() {\n        return this.app;\n    }\n}\nconst createInstance = () => __awaiter(void 0, void 0, void 0, function* () {\n    yield database_1.database\n        .initialize()\n        .then(() => {\n        logger_2.default.info('Database connected!');\n    })\n        .catch((error) => {\n        logger_2.default.error(`Database connect error: ${error}`);\n        process.exit(1);\n    });\n    const instance = new Vault();\n    return instance;\n});\nexports[\"default\"] = createInstance();\n\n\n//# sourceURL=webpack://puppify_server/./src/app.ts?");

/***/ }),

/***/ "./src/config/database.ts":
/*!********************************!*\
  !*** ./src/config/database.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.database = void 0;\n__webpack_require__(/*! reflect-metadata */ \"reflect-metadata\");\nconst typeorm_1 = __webpack_require__(/*! typeorm */ \"typeorm\");\nconst index_1 = __importDefault(__webpack_require__(/*! ./index */ \"./src/config/index.ts\"));\nconst postgresConfig = {\n    host: index_1.default.DB_HOST,\n    port: index_1.default.DB_PORT,\n    username: index_1.default.DB_USERNAME,\n    password: index_1.default.DB_PASSWORD,\n    database: index_1.default.DB_DATABASE,\n};\nexports.database = new typeorm_1.DataSource(Object.assign(Object.assign({}, postgresConfig), { type: 'postgres', synchronize: false, logging: false, entities: ['src/entities/**/*.entity{.ts,.js}'], migrations: ['src/migrations/**/*{.ts,.js}'], subscribers: ['src/subscribers/**/*{.ts,.js}'] }));\n\n\n//# sourceURL=webpack://puppify_server/./src/config/database.ts?");

/***/ }),

/***/ "./src/config/index.ts":
/*!*****************************!*\
  !*** ./src/config/index.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.isDev = void 0;\nconst path_1 = __importDefault(__webpack_require__(/*! path */ \"path\"));\nconst dotenv_1 = __importDefault(__webpack_require__(/*! dotenv */ \"dotenv\"));\ndotenv_1.default.config({ path: path_1.default.resolve(__dirname, '../.env') });\nconst getRawConfig = () => {\n    return {\n        NODE_ENV: \"development\",\n        PORT: process.env.PORT ? Number(process.env.PORT) : undefined,\n        CONTEXT_PATH: process.env.CONTEXT_PATH,\n        DB_HOST: process.env.DB_HOST,\n        DB_PORT: process.env.DB_PORT ? Number(process.env.DB_PORT) : undefined,\n        DB_USERNAME: process.env.DB_USERNAME,\n        DB_PASSWORD: process.env.DB_PASSWORD,\n        DB_DATABASE: process.env.DB_DATABASE,\n    };\n};\nconst getConfig = (config) => {\n    for (const [key, value] of Object.entries(config)) {\n        if (value === undefined) {\n            throw new Error(`Missing key ${key} in config.env`);\n        }\n    }\n    return config;\n};\nconst config = getConfig(getRawConfig());\nexports.isDev = (config.NODE_ENV === 'development');\nexports[\"default\"] = config;\n\n\n//# sourceURL=webpack://puppify_server/./src/config/index.ts?");

/***/ }),

/***/ "./src/middlewares/errorHandler.ts":
/*!*****************************************!*\
  !*** ./src/middlewares/errorHandler.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass AppError extends Error {\n    constructor(statusCode, message) {\n        super(message);\n        Object.setPrototypeOf(this, new.target.prototype);\n        this.name = Error.name;\n        this.statusCode = statusCode;\n        Error.captureStackTrace(this);\n    }\n}\nconst errorHandler = (error, _request, response, _next) => {\n    response.header('Content-Type', 'application/json');\n    const status = error.statusCode || 400;\n    response.status(status).send(error.message);\n};\nexports[\"default\"] = errorHandler;\n\n\n//# sourceURL=webpack://puppify_server/./src/middlewares/errorHandler.ts?");

/***/ }),

/***/ "./src/middlewares/logger.ts":
/*!***********************************!*\
  !*** ./src/middlewares/logger.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst morgan_1 = __importDefault(__webpack_require__(/*! morgan */ \"morgan\"));\nconst logger_1 = __importDefault(__webpack_require__(/*! ../utils/logger */ \"./src/utils/logger.ts\"));\nconst config_1 = __webpack_require__(/*! ../config */ \"./src/config/index.ts\");\nconst stream = {\n    write: (message) => logger_1.default.http(message)\n};\nconst skip = () => {\n    return !config_1.isDev;\n};\nconst morganMiddleware = (0, morgan_1.default)(\":method :url :status :res[content-length] - :response-time ms\", { stream, skip });\nexports[\"default\"] = morganMiddleware;\n\n\n//# sourceURL=webpack://puppify_server/./src/middlewares/logger.ts?");

/***/ }),

/***/ "./src/routes/index.ts":
/*!*****************************!*\
  !*** ./src/routes/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst express_1 = __webpack_require__(/*! express */ \"express\");\nconst router = (0, express_1.Router)();\nrouter.get('/', (_req, res) => {\n    res.send({\n        message: 'hello world'\n    });\n});\nexports[\"default\"] = router;\n\n\n//# sourceURL=webpack://puppify_server/./src/routes/index.ts?");

/***/ }),

/***/ "./src/utils/logger.ts":
/*!*****************************!*\
  !*** ./src/utils/logger.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst winston_1 = __importDefault(__webpack_require__(/*! winston */ \"winston\"));\nconst config_1 = __webpack_require__(/*! ../config */ \"./src/config/index.ts\");\nconst LogLevel = {\n    error: 0,\n    warn: 1,\n    info: 2,\n    http: 3,\n    debug: 4\n};\nconst defaultLevel = () => {\n    return config_1.isDev ? 'debug' : 'warn';\n};\nwinston_1.default.addColors({\n    error: 'red',\n    warn: 'yellow',\n    info: 'green',\n    http: 'magenta',\n    debug: 'white',\n});\nconst format = winston_1.default.format.combine(winston_1.default.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ms' }), winston_1.default.format.colorize({ all: true }), winston_1.default.format.printf((info) => `= ${info.timestamp}[${info.level}]:\\t${info.message}`));\nconst transports = [\n    new winston_1.default.transports.Console(),\n    new winston_1.default.transports.File({\n        filename: 'logs/error.log',\n        level: 'error'\n    }),\n    new winston_1.default.transports.File({ filename: 'logs/all.log' })\n];\nconst logger = winston_1.default.createLogger({\n    level: defaultLevel(),\n    levels: LogLevel,\n    format: format,\n    transports: transports\n});\nexports[\"default\"] = logger;\n\n\n//# sourceURL=webpack://puppify_server/./src/utils/logger.ts?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("helmet");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("morgan");

/***/ }),

/***/ "reflect-metadata":
/*!***********************************!*\
  !*** external "reflect-metadata" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("reflect-metadata");

/***/ }),

/***/ "typeorm":
/*!**************************!*\
  !*** external "typeorm" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("typeorm");

/***/ }),

/***/ "winston":
/*!**************************!*\
  !*** external "winston" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("winston");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./server.ts");
/******/ 	
/******/ })()
;