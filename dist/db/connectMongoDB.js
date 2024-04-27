"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// mongodb atlas connection string.
let mongo_db_key = process.env.VAG_EMS_DB_KEY;
let connection_string = `mongodb+srv://larryking8118:${mongo_db_key}@cluster0.vt6p1xx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
mongoose_1.default.connect(connection_string, { dbName: 'VAG_Employee_Database' })
    .then(() => console.log('mongodb connected...'))
    .catch((err) => console.log('failed to connect due to error ', err));
