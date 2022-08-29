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

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n/**\n * External modules\n */\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nconst cors_1 = __importDefault(__webpack_require__(/*! cors */ \"cors\"));\nconst helmet_1 = __importDefault(__webpack_require__(/*! helmet */ \"helmet\"));\n/**\n * Internal modules\n */\nconst logger_1 = __importDefault(__webpack_require__(/*! ./middlewares/logger */ \"./src/middlewares/logger.ts\"));\nconst errorHandler_1 = __importDefault(__webpack_require__(/*! ./middlewares/errorHandler */ \"./src/middlewares/errorHandler.ts\"));\nconst config_1 = __importDefault(__webpack_require__(/*! ./config */ \"./src/config/index.ts\"));\nconst routes_1 = __importDefault(__webpack_require__(/*! ./routes */ \"./src/routes/index.ts\"));\nconst logger_2 = __importDefault(__webpack_require__(/*! ./utils/logger */ \"./src/utils/logger.ts\"));\nconst database_1 = __webpack_require__(/*! ./config/database */ \"./src/config/database.ts\");\nclass Vault {\n    constructor() {\n        this.app = (0, express_1.default)();\n        /**\n         * App Configuration\n         */\n        this.app.use((0, cors_1.default)());\n        this.app.use((0, helmet_1.default)());\n        this.app.use(express_1.default.json());\n        this.app.use(express_1.default.urlencoded({ extended: true }));\n        // Middlewares\n        this.app.use(logger_1.default);\n        // Routes\n        this.app.use(config_1.default.CONTEXT_PATH, routes_1.default);\n        // Error handler\n        this.app.use(errorHandler_1.default);\n    }\n    getInstance() {\n        return this.app;\n    }\n}\nconst createInstance = () => __awaiter(void 0, void 0, void 0, function* () {\n    yield database_1.AppDataSource.initialize()\n        .then(() => {\n        logger_2.default.info('Database connected!');\n    })\n        .catch((error) => {\n        logger_2.default.error(`Database connect error: ${error}`);\n        process.exit(1);\n    });\n    const instance = new Vault();\n    return instance;\n});\nexports[\"default\"] = createInstance();\n\n\n//# sourceURL=webpack://puppify_server/./src/app.ts?");

/***/ }),

/***/ "./src/config/database.ts":
/*!********************************!*\
  !*** ./src/config/database.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.AppDataSource = void 0;\n__webpack_require__(/*! reflect-metadata */ \"reflect-metadata\");\nconst path_1 = __importDefault(__webpack_require__(/*! path */ \"path\"));\nconst typeorm_1 = __webpack_require__(/*! typeorm */ \"typeorm\");\nconst index_1 = __importDefault(__webpack_require__(/*! ./index */ \"./src/config/index.ts\"));\nconst entities = __importStar(__webpack_require__(/*! ../entities */ \"./src/entities/index.ts\"));\nconst postgresConfig = {\n    host: index_1.default.DB_HOST,\n    port: index_1.default.DB_PORT,\n    username: index_1.default.DB_USERNAME,\n    password: index_1.default.DB_PASSWORD,\n    database: index_1.default.DB_DATABASE,\n};\nexports.AppDataSource = new typeorm_1.DataSource(Object.assign(Object.assign({}, postgresConfig), { type: 'postgres', synchronize: false, logging: true, entities: entities, migrations: [path_1.default.join(__dirname, '**', '*{.ts,.js}')], subscribers: [path_1.default.join(__dirname, '**', '*{.ts,.js}')] }));\n\n\n//# sourceURL=webpack://puppify_server/./src/config/database.ts?");

/***/ }),

/***/ "./src/config/index.ts":
/*!*****************************!*\
  !*** ./src/config/index.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.isDev = void 0;\nconst path_1 = __importDefault(__webpack_require__(/*! path */ \"path\"));\nconst dotenv_1 = __importDefault(__webpack_require__(/*! dotenv */ \"dotenv\"));\ndotenv_1.default.config({ path: path_1.default.resolve(__dirname, '../.env') });\nconst getRawConfig = () => {\n    return {\n        NODE_ENV: \"development\",\n        PORT: process.env.PORT ? Number(process.env.PORT) : undefined,\n        CONTEXT_PATH: process.env.CONTEXT_PATH,\n        DB_HOST: process.env.DB_HOST,\n        DB_PORT: process.env.DB_PORT ? Number(process.env.DB_PORT) : undefined,\n        DB_USERNAME: process.env.DB_USERNAME,\n        DB_PASSWORD: process.env.DB_PASSWORD,\n        DB_DATABASE: process.env.DB_DATABASE,\n        JWT_SECRET: process.env.JWT_SECRET,\n        JWT_EXPIRES: process.env.JWT_EXPIRES,\n    };\n};\nconst getConfig = (config) => {\n    for (const [key, value] of Object.entries(config)) {\n        if (value === undefined) {\n            throw new Error(`Missing key ${key} in config.env`);\n        }\n    }\n    return config;\n};\nconst config = getConfig(getRawConfig());\nexports.isDev = config.NODE_ENV === 'development';\nexports[\"default\"] = config;\n\n\n//# sourceURL=webpack://puppify_server/./src/config/index.ts?");

/***/ }),

/***/ "./src/entities/base.ts":
/*!******************************!*\
  !*** ./src/entities/base.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst typeorm_1 = __webpack_require__(/*! typeorm */ \"typeorm\");\nconst user_entity_1 = __webpack_require__(/*! ./user.entity */ \"./src/entities/user.entity.ts\");\nclass Model extends typeorm_1.BaseEntity {\n    ownership(username) {\n        return __awaiter(this, void 0, void 0, function* () {\n            const currentUser = yield user_entity_1.User.findOneBy({ username: username });\n            this.updated_owner = currentUser;\n        });\n    }\n}\n__decorate([\n    (0, typeorm_1.CreateDateColumn)(),\n    __metadata(\"design:type\", Date)\n], Model.prototype, \"created_at\", void 0);\n__decorate([\n    (0, typeorm_1.UpdateDateColumn)(),\n    __metadata(\"design:type\", Date)\n], Model.prototype, \"updated_at\", void 0);\n__decorate([\n    (0, typeorm_1.OneToOne)(() => user_entity_1.User),\n    (0, typeorm_1.JoinColumn)(),\n    __metadata(\"design:type\", Object)\n], Model.prototype, \"updated_owner\", void 0);\n__decorate([\n    (0, typeorm_1.AfterUpdate)(),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [String]),\n    __metadata(\"design:returntype\", Promise)\n], Model.prototype, \"ownership\", null);\nexports[\"default\"] = Model;\n\n\n//# sourceURL=webpack://puppify_server/./src/entities/base.ts?");

/***/ }),

/***/ "./src/entities/index.ts":
/*!*******************************!*\
  !*** ./src/entities/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Permission = exports.RolePermission = exports.Role = exports.UserRole = exports.UserAddress = exports.User = void 0;\nvar user_entity_1 = __webpack_require__(/*! ./user.entity */ \"./src/entities/user.entity.ts\");\nObject.defineProperty(exports, \"User\", ({ enumerable: true, get: function () { return user_entity_1.User; } }));\nvar user_address_entity_1 = __webpack_require__(/*! ./user_address.entity */ \"./src/entities/user_address.entity.ts\");\nObject.defineProperty(exports, \"UserAddress\", ({ enumerable: true, get: function () { return user_address_entity_1.UserAddress; } }));\nvar user_role_entity_1 = __webpack_require__(/*! ./user_role.entity */ \"./src/entities/user_role.entity.ts\");\nObject.defineProperty(exports, \"UserRole\", ({ enumerable: true, get: function () { return user_role_entity_1.UserRole; } }));\nvar role_entity_1 = __webpack_require__(/*! ./role.entity */ \"./src/entities/role.entity.ts\");\nObject.defineProperty(exports, \"Role\", ({ enumerable: true, get: function () { return role_entity_1.Role; } }));\nvar role_permission_entity_1 = __webpack_require__(/*! ./role_permission.entity */ \"./src/entities/role_permission.entity.ts\");\nObject.defineProperty(exports, \"RolePermission\", ({ enumerable: true, get: function () { return role_permission_entity_1.RolePermission; } }));\nvar permission_entity_1 = __webpack_require__(/*! ./permission.entity */ \"./src/entities/permission.entity.ts\");\nObject.defineProperty(exports, \"Permission\", ({ enumerable: true, get: function () { return permission_entity_1.Permission; } }));\n\n\n//# sourceURL=webpack://puppify_server/./src/entities/index.ts?");

/***/ }),

/***/ "./src/entities/permission.entity.ts":
/*!*******************************************!*\
  !*** ./src/entities/permission.entity.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Permission = void 0;\nconst typeorm_1 = __webpack_require__(/*! typeorm */ \"typeorm\");\nconst base_1 = __importDefault(__webpack_require__(/*! ./base */ \"./src/entities/base.ts\"));\nconst role_permission_entity_1 = __webpack_require__(/*! ./role_permission.entity */ \"./src/entities/role_permission.entity.ts\");\nlet Permission = class Permission extends base_1.default {\n    toJSON() {\n        return Object.assign(Object.assign({}, this), { rolePermission: undefined });\n    }\n};\n__decorate([\n    (0, typeorm_1.PrimaryGeneratedColumn)(),\n    __metadata(\"design:type\", Number)\n], Permission.prototype, \"permission_id\", void 0);\n__decorate([\n    (0, typeorm_1.Column)({ unique: true }),\n    __metadata(\"design:type\", String)\n], Permission.prototype, \"permission_name\", void 0);\n__decorate([\n    (0, typeorm_1.OneToMany)(() => role_permission_entity_1.RolePermission, (rolePermission) => rolePermission.permission),\n    __metadata(\"design:type\", Array)\n], Permission.prototype, \"rolePermission\", void 0);\nPermission = __decorate([\n    (0, typeorm_1.Entity)('permission')\n], Permission);\nexports.Permission = Permission;\n\n\n//# sourceURL=webpack://puppify_server/./src/entities/permission.entity.ts?");

/***/ }),

/***/ "./src/entities/role.entity.ts":
/*!*************************************!*\
  !*** ./src/entities/role.entity.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Role = void 0;\nconst typeorm_1 = __webpack_require__(/*! typeorm */ \"typeorm\");\nconst role_permission_entity_1 = __webpack_require__(/*! ./role_permission.entity */ \"./src/entities/role_permission.entity.ts\");\nconst user_role_entity_1 = __webpack_require__(/*! ./user_role.entity */ \"./src/entities/user_role.entity.ts\");\nconst base_1 = __importDefault(__webpack_require__(/*! ./base */ \"./src/entities/base.ts\"));\nlet Role = class Role extends base_1.default {\n};\n__decorate([\n    (0, typeorm_1.PrimaryGeneratedColumn)(),\n    __metadata(\"design:type\", Number)\n], Role.prototype, \"role_id\", void 0);\n__decorate([\n    (0, typeorm_1.Column)({ unique: true }),\n    __metadata(\"design:type\", String)\n], Role.prototype, \"role_name\", void 0);\n__decorate([\n    (0, typeorm_1.OneToMany)(() => role_permission_entity_1.RolePermission, (rolePermission) => rolePermission.role),\n    __metadata(\"design:type\", Array)\n], Role.prototype, \"rolePermission\", void 0);\n__decorate([\n    (0, typeorm_1.OneToMany)(() => user_role_entity_1.UserRole, (userRole) => userRole.role),\n    __metadata(\"design:type\", Array)\n], Role.prototype, \"userRole\", void 0);\nRole = __decorate([\n    (0, typeorm_1.Entity)('role')\n], Role);\nexports.Role = Role;\n\n\n//# sourceURL=webpack://puppify_server/./src/entities/role.entity.ts?");

/***/ }),

/***/ "./src/entities/role_permission.entity.ts":
/*!************************************************!*\
  !*** ./src/entities/role_permission.entity.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.RolePermission = void 0;\nconst typeorm_1 = __webpack_require__(/*! typeorm */ \"typeorm\");\nconst base_1 = __importDefault(__webpack_require__(/*! ./base */ \"./src/entities/base.ts\"));\nconst permission_entity_1 = __webpack_require__(/*! ./permission.entity */ \"./src/entities/permission.entity.ts\");\nconst role_entity_1 = __webpack_require__(/*! ./role.entity */ \"./src/entities/role.entity.ts\");\nlet RolePermission = class RolePermission extends base_1.default {\n};\n__decorate([\n    (0, typeorm_1.PrimaryColumn)(),\n    __metadata(\"design:type\", Number)\n], RolePermission.prototype, \"role_id\", void 0);\n__decorate([\n    (0, typeorm_1.PrimaryColumn)(),\n    __metadata(\"design:type\", Number)\n], RolePermission.prototype, \"permission_id\", void 0);\n__decorate([\n    (0, typeorm_1.ManyToOne)(() => role_entity_1.Role, (role) => role.rolePermission),\n    __metadata(\"design:type\", role_entity_1.Role)\n], RolePermission.prototype, \"role\", void 0);\n__decorate([\n    (0, typeorm_1.ManyToOne)(() => permission_entity_1.Permission, (permission) => permission.rolePermission),\n    __metadata(\"design:type\", permission_entity_1.Permission)\n], RolePermission.prototype, \"permission\", void 0);\nRolePermission = __decorate([\n    (0, typeorm_1.Entity)('role_permission')\n], RolePermission);\nexports.RolePermission = RolePermission;\n\n\n//# sourceURL=webpack://puppify_server/./src/entities/role_permission.entity.ts?");

/***/ }),

/***/ "./src/entities/user.entity.ts":
/*!*************************************!*\
  !*** ./src/entities/user.entity.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.User = void 0;\nconst user_address_entity_1 = __webpack_require__(/*! ./user_address.entity */ \"./src/entities/user_address.entity.ts\");\nconst typeorm_1 = __webpack_require__(/*! typeorm */ \"typeorm\");\nconst bcryptjs_1 = __importDefault(__webpack_require__(/*! bcryptjs */ \"bcryptjs\"));\nconst crypto_1 = __importDefault(__webpack_require__(/*! crypto */ \"crypto\"));\nconst base_1 = __importDefault(__webpack_require__(/*! ./base */ \"./src/entities/base.ts\"));\nconst user_role_entity_1 = __webpack_require__(/*! ./user_role.entity */ \"./src/entities/user_role.entity.ts\");\nlet User = class User extends base_1.default {\n    hashPassowrd() {\n        return __awaiter(this, void 0, void 0, function* () {\n            this.hash_password = yield bcryptjs_1.default.hash(this.hash_password, 12);\n        });\n    }\n    static compareHash(candidatePassword, hashedPassword) {\n        return __awaiter(this, void 0, void 0, function* () {\n            return yield bcryptjs_1.default.compare(candidatePassword, hashedPassword);\n        });\n    }\n    static createVertificationCode() {\n        const verificationCode = crypto_1.default.randomBytes(32).toString('hex');\n        const hashedVerificationCode = crypto_1.default\n            .createHash('sha256')\n            .update(verificationCode)\n            .digest('hex');\n        return { verificationCode, hashedVerificationCode };\n    }\n    toJSON() {\n        return Object.assign(Object.assign({}, this), { user_address: this.user_address.toJSON(), hash_password: undefined, active: undefined, vertification_code: undefined });\n    }\n};\n__decorate([\n    (0, typeorm_1.PrimaryGeneratedColumn)(),\n    __metadata(\"design:type\", Number)\n], User.prototype, \"user_id\", void 0);\n__decorate([\n    (0, typeorm_1.Index)('username_index'),\n    (0, typeorm_1.Column)({ unique: true }),\n    __metadata(\"design:type\", String)\n], User.prototype, \"username\", void 0);\n__decorate([\n    (0, typeorm_1.Column)({ nullable: false }),\n    __metadata(\"design:type\", String)\n], User.prototype, \"hash_password\", void 0);\n__decorate([\n    (0, typeorm_1.Column)({ nullable: true }),\n    __metadata(\"design:type\", String)\n], User.prototype, \"firstname\", void 0);\n__decorate([\n    (0, typeorm_1.Column)({ nullable: true }),\n    __metadata(\"design:type\", String)\n], User.prototype, \"lastname\", void 0);\n__decorate([\n    (0, typeorm_1.Column)({ nullable: true }),\n    __metadata(\"design:type\", String)\n], User.prototype, \"telephone\", void 0);\n__decorate([\n    (0, typeorm_1.Index)('email_index'),\n    (0, typeorm_1.Column)({ unique: true }),\n    __metadata(\"design:type\", String)\n], User.prototype, \"email\", void 0);\n__decorate([\n    (0, typeorm_1.Column)(),\n    __metadata(\"design:type\", Date)\n], User.prototype, \"email_verify_at\", void 0);\n__decorate([\n    (0, typeorm_1.Column)(),\n    __metadata(\"design:type\", String)\n], User.prototype, \"vertification_code\", void 0);\n__decorate([\n    (0, typeorm_1.Column)(),\n    __metadata(\"design:type\", Date)\n], User.prototype, \"lasttime_loggedin\", void 0);\n__decorate([\n    (0, typeorm_1.Column)({ default: false }),\n    __metadata(\"design:type\", Boolean)\n], User.prototype, \"active\", void 0);\n__decorate([\n    (0, typeorm_1.OneToOne)(() => user_address_entity_1.UserAddress),\n    (0, typeorm_1.JoinColumn)(),\n    __metadata(\"design:type\", user_address_entity_1.UserAddress)\n], User.prototype, \"user_address\", void 0);\n__decorate([\n    (0, typeorm_1.OneToMany)(() => user_role_entity_1.UserRole, (userRole) => userRole.user),\n    __metadata(\"design:type\", Array)\n], User.prototype, \"userRole\", void 0);\n__decorate([\n    (0, typeorm_1.BeforeInsert)(),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", []),\n    __metadata(\"design:returntype\", Promise)\n], User.prototype, \"hashPassowrd\", null);\nUser = __decorate([\n    (0, typeorm_1.Entity)('user')\n], User);\nexports.User = User;\n\n\n//# sourceURL=webpack://puppify_server/./src/entities/user.entity.ts?");

/***/ }),

/***/ "./src/entities/user_address.entity.ts":
/*!*********************************************!*\
  !*** ./src/entities/user_address.entity.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.UserAddress = void 0;\nconst typeorm_1 = __webpack_require__(/*! typeorm */ \"typeorm\");\nconst base_1 = __importDefault(__webpack_require__(/*! ./base */ \"./src/entities/base.ts\"));\nlet UserAddress = class UserAddress extends base_1.default {\n    toJSON() {\n        return Object.assign({}, this);\n    }\n};\n__decorate([\n    (0, typeorm_1.PrimaryGeneratedColumn)(),\n    __metadata(\"design:type\", Number)\n], UserAddress.prototype, \"user_address_id\", void 0);\n__decorate([\n    (0, typeorm_1.Column)(),\n    __metadata(\"design:type\", String)\n], UserAddress.prototype, \"address_line_1\", void 0);\n__decorate([\n    (0, typeorm_1.Column)(),\n    __metadata(\"design:type\", String)\n], UserAddress.prototype, \"address_line_2\", void 0);\n__decorate([\n    (0, typeorm_1.Column)(),\n    __metadata(\"design:type\", String)\n], UserAddress.prototype, \"city\", void 0);\n__decorate([\n    (0, typeorm_1.Column)(),\n    __metadata(\"design:type\", String)\n], UserAddress.prototype, \"portal_code\", void 0);\n__decorate([\n    (0, typeorm_1.Column)(),\n    __metadata(\"design:type\", String)\n], UserAddress.prototype, \"country\", void 0);\n__decorate([\n    (0, typeorm_1.Column)(),\n    __metadata(\"design:type\", String)\n], UserAddress.prototype, \"telephone\", void 0);\nUserAddress = __decorate([\n    (0, typeorm_1.Entity)('user_address')\n], UserAddress);\nexports.UserAddress = UserAddress;\n\n\n//# sourceURL=webpack://puppify_server/./src/entities/user_address.entity.ts?");

/***/ }),

/***/ "./src/entities/user_role.entity.ts":
/*!******************************************!*\
  !*** ./src/entities/user_role.entity.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.UserRole = void 0;\nconst typeorm_1 = __webpack_require__(/*! typeorm */ \"typeorm\");\nconst base_1 = __importDefault(__webpack_require__(/*! ./base */ \"./src/entities/base.ts\"));\nconst role_entity_1 = __webpack_require__(/*! ./role.entity */ \"./src/entities/role.entity.ts\");\nconst user_entity_1 = __webpack_require__(/*! ./user.entity */ \"./src/entities/user.entity.ts\");\nlet UserRole = class UserRole extends base_1.default {\n};\n__decorate([\n    (0, typeorm_1.PrimaryColumn)(),\n    __metadata(\"design:type\", Number)\n], UserRole.prototype, \"role_id\", void 0);\n__decorate([\n    (0, typeorm_1.PrimaryColumn)(),\n    __metadata(\"design:type\", Number)\n], UserRole.prototype, \"user_id\", void 0);\n__decorate([\n    (0, typeorm_1.ManyToOne)(() => role_entity_1.Role, (role) => role.userRole),\n    __metadata(\"design:type\", role_entity_1.Role)\n], UserRole.prototype, \"role\", void 0);\n__decorate([\n    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.userRole),\n    __metadata(\"design:type\", user_entity_1.User)\n], UserRole.prototype, \"user\", void 0);\nUserRole = __decorate([\n    (0, typeorm_1.Entity)('user_role')\n], UserRole);\nexports.UserRole = UserRole;\n\n\n//# sourceURL=webpack://puppify_server/./src/entities/user_role.entity.ts?");

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

/***/ "./src/routes/auth.routes.ts":
/*!***********************************!*\
  !*** ./src/routes/auth.routes.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst express_1 = __webpack_require__(/*! express */ \"express\");\nconst router = (0, express_1.Router)();\nrouter.get(\"/login\" /* PATH._LOGIN */, (_req, res) => {\n    res.send({\n        message: 'logged in',\n    });\n});\nexports[\"default\"] = router;\n\n\n//# sourceURL=webpack://puppify_server/./src/routes/auth.routes.ts?");

/***/ }),

/***/ "./src/routes/index.ts":
/*!*****************************!*\
  !*** ./src/routes/index.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst express_1 = __webpack_require__(/*! express */ \"express\");\nconst auth_routes_1 = __importDefault(__webpack_require__(/*! ./auth.routes */ \"./src/routes/auth.routes.ts\"));\nconst router = (0, express_1.Router)();\nrouter.use(\"/auth\" /* PATH._AUTH */, auth_routes_1.default);\nexports[\"default\"] = router;\n\n\n//# sourceURL=webpack://puppify_server/./src/routes/index.ts?");

/***/ }),

/***/ "./src/utils/logger.ts":
/*!*****************************!*\
  !*** ./src/utils/logger.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst winston_1 = __importDefault(__webpack_require__(/*! winston */ \"winston\"));\nconst config_1 = __webpack_require__(/*! ../config */ \"./src/config/index.ts\");\nconst LogLevel = {\n    error: 0,\n    warn: 1,\n    info: 2,\n    http: 3,\n    debug: 4\n};\nconst defaultLevel = () => {\n    return config_1.isDev ? 'debug' : 'warn';\n};\nwinston_1.default.addColors({\n    error: 'red',\n    warn: 'yellow',\n    info: 'green',\n    http: 'magenta',\n    debug: 'white',\n});\nconst format = winston_1.default.format.combine(winston_1.default.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ms' }), winston_1.default.format.colorize({ all: true }), winston_1.default.format.printf((info) => `= ${info.timestamp}[${info.level}]:\\t${info.message}`));\nconst transports = [\n    new winston_1.default.transports.Console(),\n    new winston_1.default.transports.File({\n        filename: 'logs/error.log',\n        level: 'error'\n    }),\n    new winston_1.default.transports.File({ filename: 'logs/all.log' })\n];\nconst logger = winston_1.default.createLogger({\n    level: defaultLevel(),\n    levels: LogLevel,\n    format: format,\n    transports: transports\n});\nexports[\"default\"] = logger;\n\n\n//# sourceURL=webpack://puppify_server/./src/utils/logger.ts?");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

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

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

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